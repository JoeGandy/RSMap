package org.explv.mapimage;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import net.runelite.cache.AreaManager;
import net.runelite.cache.ObjectManager;
import net.runelite.cache.SpriteManager;
import net.runelite.cache.WorldMapManager;
import net.runelite.cache.definitions.AreaDefinition;
import net.runelite.cache.definitions.ObjectDefinition;
import net.runelite.cache.definitions.SpriteDefinition;
import net.runelite.cache.definitions.WorldMapElementDefinition;
import net.runelite.cache.fs.Store;
import net.runelite.cache.region.Location;
import net.runelite.cache.region.Position;
import net.runelite.cache.region.Region;
import net.runelite.cache.region.RegionLoader;
import net.runelite.cache.util.XteaKeyManager;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeSet;

import org.apache.commons.cli.CommandLine;
import org.apache.commons.cli.CommandLineParser;
import org.apache.commons.cli.DefaultParser;
import org.apache.commons.cli.Option;
import org.apache.commons.cli.Options;
import org.apache.commons.cli.ParseException;

/**
 * Explores all available world map data from the OSRS cache
 */
public class WorldMapDataExplorer {

    public static class WorldMapData {
        public List<MapLabel> labels = new ArrayList<>();
        public List<MapIcon> icons = new ArrayList<>();
        public List<MapArea> areas = new ArrayList<>();
        public Map<String, Position> intermapLinks = new HashMap<>();
        public List<IconPlacement> placements = new ArrayList<>();
        public Statistics stats = new Statistics();
    }

    /**
     * A concrete icon position on the map. Sourced either from an official
     * worldmap element ("element") or from an object placement whose definition
     * carries a mapAreaId -> area -> sprite chain ("object"). This is what the
     * in-game world map actually draws.
     */
    public static class IconPlacement {
        public String name;
        public int worldX;
        public int worldY;
        public int plane;
        public int spriteId;
        public boolean membersOnly;
        public String source;

        public IconPlacement(String name, int worldX, int worldY, int plane, int spriteId, boolean membersOnly, String source) {
            this.name = name;
            this.worldX = worldX;
            this.worldY = worldY;
            this.plane = plane;
            this.spriteId = spriteId;
            this.membersOnly = membersOnly;
            this.source = source;
        }
    }
    
    public static class MapLabel {
        public String name;
        public int worldX;
        public int worldY;
        public int plane;
        public int textColor;
        public int textScale;
        public int category;
        public int spriteId;
        
        public MapLabel(String name, int worldX, int worldY, int plane, int textColor, int textScale, int category, int spriteId) {
            this.name = name;
            this.worldX = worldX;
            this.worldY = worldY;
            this.plane = plane;
            this.textColor = textColor;
            this.textScale = textScale;
            this.category = category;
            this.spriteId = spriteId;
        }
    }
    
    public static class MapIcon {
        public String name;
        public int worldX;
        public int worldY;
        public int plane;
        public int spriteId;
        public int category;
        public boolean membersOnly;
        
        public MapIcon(String name, int worldX, int worldY, int plane, int spriteId, int category, boolean membersOnly) {
            this.name = name;
            this.worldX = worldX;
            this.worldY = worldY;
            this.plane = plane;
            this.spriteId = spriteId;
            this.category = category;
            this.membersOnly = membersOnly;
        }
    }
    
    public static class MapArea {
        public int id;
        public String name;
        public int category;
        public int spriteId;
        public int textColor;
        public int textScale;
        
        public MapArea(int id, String name, int category, int spriteId, int textColor, int textScale) {
            this.id = id;
            this.name = name;
            this.category = category;
            this.spriteId = spriteId;
            this.textColor = textColor;
            this.textScale = textScale;
        }
    }
    
    public static class Statistics {
        public int totalElements;
        public int elementsWithLabels;
        public int elementsWithIcons;
        public int totalAreas;
        public int intermapLinkCount;
        public Map<Integer, String> categories = new HashMap<>();
    }

    public static void main(String[] args) throws IOException {
        Options options = new Options();
        options.addOption(Option.builder().longOpt("cachedir").hasArg().required().build());
        options.addOption(Option.builder().longOpt("xteapath").hasArg().required().build());
        options.addOption(Option.builder().longOpt("outputfile").hasArg().required().build());
        options.addOption(Option.builder().longOpt("spriteoutdir").hasArg().build());

        CommandLineParser parser = new DefaultParser();
        CommandLine cmd;
        
        try {
            cmd = parser.parse(options, args);
        } catch (ParseException ex) {
            System.err.println("Error parsing command line options: " + ex.getMessage());
            System.err.println("Usage: WorldMapDataExplorer --cachedir <dir> --xteapath <file> --outputfile <file>");
            System.exit(-1);
            return;
        }

        final String cacheDirectory = cmd.getOptionValue("cachedir");
        final String xteaJSONPath = cmd.getOptionValue("xteapath");
        final String outputFile = cmd.getOptionValue("outputfile");

        System.out.println("Exploring world map data from OSRS cache...");
        System.out.println("Cache directory: " + cacheDirectory);
        System.out.println("Output file: " + outputFile);

        // Load XTEAs
        XteaKeyManager xteaKeyManager = new XteaKeyManager();
        try (FileInputStream fin = new FileInputStream(xteaJSONPath)) {
            xteaKeyManager.loadKeys(fin);
        }

        File base = new File(cacheDirectory);
        WorldMapData data = new WorldMapData();
        String spriteOutDir = cmd.getOptionValue("spriteoutdir");

        try (Store store = new Store(base)) {
            store.load();

            System.out.println("\n=== Loading WorldMapManager ===");
            WorldMapManager worldMapManager = new WorldMapManager(store);
            worldMapManager.load();
            
            System.out.println("=== Loading AreaManager ===");
            AreaManager areaManager = new AreaManager(store);
            areaManager.load();

            System.out.println("=== Loading ObjectManager ===");
            ObjectManager objectManager = new ObjectManager(store);
            objectManager.load();

            System.out.println("=== Loading RegionLoader (object placements) ===");
            XteaKeyManager regionKeys = new XteaKeyManager();
            try (FileInputStream fin = new FileInputStream(xteaJSONPath)) {
                regionKeys.loadKeys(fin);
            }
            RegionLoader regionLoader = new RegionLoader(store, regionKeys);
            regionLoader.loadRegions();

            // Track sprites actually referenced by icons so we only export those
            Set<Integer> usedSpriteIds = new TreeSet<>();

            // ---------------------------------------------------------
            // Source 1: object placements with mapAreaId -> area -> sprite.
            // This is what produces the thousands of dungeon/shortcut/transport
            // style icons on the official world map (mirrors osrs-wiki/osrs-wiki-maps).
            // ---------------------------------------------------------
            System.out.println("\n=== Extracting icon placements from object locations ===");
            int objectPlacements = 0;
            for (Region region : regionLoader.getRegions()) {
                for (Location location : region.getLocations()) {
                    objectPlacements++;
                    ObjectDefinition od = objectManager.getObject(location.getId());
                    if (od == null || od.getMapAreaId() == -1) {
                        continue;
                    }
                    AreaDefinition area = areaManager.getArea(od.getMapAreaId());
                    if (area == null || area.spriteId == -1) {
                        continue;
                    }
                    Position pos = location.getPosition();
                    String name = area.getName() != null ? area.getName() : "Icon " + area.spriteId;
                    data.placements.add(new IconPlacement(
                        name, pos.getX(), pos.getY(), pos.getZ(), area.spriteId, false, "object"));
                    usedSpriteIds.add(area.spriteId);
                }
            }
            System.out.println("Scanned " + objectPlacements + " object placements");

            // ---------------------------------------------------------
            // Source 2: official worldmap elements with a sprite
            // ---------------------------------------------------------            
            System.out.println("\n=== Extracting World Map Elements ===");
            List<WorldMapElementDefinition> elements = worldMapManager.getElements();
            data.stats.totalElements = elements.size();
            System.out.println("Found " + elements.size() + " world map elements");
            
            // Extract intermap links
            Map<Position, Position> links = worldMapManager.getIntermapLinks();
            data.stats.intermapLinkCount = links.size();
            System.out.println("Found " + links.size() + " intermap links");
            for (Map.Entry<Position, Position> link : links.entrySet()) {
                String key = link.getKey().getX() + "," + link.getKey().getY() + "," + link.getKey().getZ();
                data.intermapLinks.put(key, link.getValue());
            }
            
            System.out.println("\n=== Processing Elements ===");
            Map<Integer, Integer> categoryCounts = new HashMap<>();
            
            for (WorldMapElementDefinition element : elements) {
                int areaId = element.getAreaDefinitionId();
                AreaDefinition area = areaManager.getArea(areaId);
                
                if (area == null) {
                    continue;
                }
                
                Position worldPos = element.getWorldPosition();
                String name = area.getName();
                int category = area.getCategory();
                int spriteId = area.getSpriteId();
                int textColor = area.getTextColor();
                int textScale = area.getTextScale();
                
                // Track category usage
                categoryCounts.put(category, categoryCounts.getOrDefault(category, 0) + 1);
                
                // Determine if this is a label or icon
                boolean hasLabel = name != null && !name.trim().isEmpty() && !name.equals("null");
                boolean hasIcon = spriteId >= 0;
                
                if (hasLabel) {
                    data.stats.elementsWithLabels++;
                    MapLabel label = new MapLabel(
                        name,
                        worldPos.getX(),
                        worldPos.getY(),
                        worldPos.getZ(),
                        textColor,
                        textScale,
                        category,
                        spriteId
                    );
                    data.labels.add(label);
                }
                
                if (hasIcon) {
                    data.stats.elementsWithIcons++;
                    MapIcon icon = new MapIcon(
                        hasLabel ? name : "Icon " + spriteId,
                        worldPos.getX(),
                        worldPos.getY(),
                        worldPos.getZ(),
                        spriteId,
                        category,
                        element.isMembersOnly()
                    );
                    data.icons.add(icon);
                    data.placements.add(new IconPlacement(
                        icon.name, worldPos.getX(), worldPos.getY(), worldPos.getZ(),
                        spriteId, element.isMembersOnly(), "element"));
                    usedSpriteIds.add(spriteId);
                }
            }
            
            // Get all area definitions
            System.out.println("\n=== Extracting Area Definitions ===");
            List<AreaDefinition> allAreas = new ArrayList<>(areaManager.getAreas());
            data.stats.totalAreas = allAreas.size();
            System.out.println("Found " + allAreas.size() + " area definitions");
            
            for (AreaDefinition area : allAreas) {
                if (area.getName() != null && !area.getName().isEmpty()) {
                    MapArea mapArea = new MapArea(
                        area.getId(),
                        area.getName(),
                        area.getCategory(),
                        area.getSpriteId(),
                        area.getTextColor(),
                        area.getTextScale()
                    );
                    data.areas.add(mapArea);
                }
            }
            
            // ---------------------------------------------------------
            // Export the sprite PNGs used by the placements
            // ---------------------------------------------------------
            if (spriteOutDir != null && !usedSpriteIds.isEmpty()) {
                System.out.println("\n=== Exporting " + usedSpriteIds.size() + " map sprites to " + spriteOutDir + " ===");
                SpriteManager spriteManager = new SpriteManager(store);
                spriteManager.load();
                File outDir = new File(spriteOutDir);
                outDir.mkdirs();
                int exported = 0, failed = 0;
                for (Integer spriteId : usedSpriteIds) {
                    try {
                        SpriteDefinition sprite = spriteManager.findSprite(spriteId, 0);
                        if (sprite == null || sprite.getWidth() <= 0 || sprite.getHeight() <= 0) {
                            failed++;
                            continue;
                        }
                        BufferedImage image = new BufferedImage(
                            sprite.getWidth(), sprite.getHeight(), BufferedImage.TYPE_INT_ARGB);
                        image.setRGB(0, 0, sprite.getWidth(), sprite.getHeight(), sprite.getPixels(), 0, sprite.getWidth());
                        ImageIO.write(image, "png", new File(outDir, spriteId + ".png"));
                        exported++;
                    } catch (Exception e) {
                        System.err.println("Failed to export sprite " + spriteId + ": " + e.getMessage());
                        failed++;
                    }
                }
                System.out.println("Exported " + exported + " sprites (" + failed + " failed)");
            }

            // Category names (these are approximate based on observation)
            data.stats.categories.put(-1, "Unknown");
            data.stats.categories.put(0, "City/Town");
            data.stats.categories.put(1, "Dungeon");
            data.stats.categories.put(2, "Quest");
            data.stats.categories.put(3, "Shop");
            data.stats.categories.put(4, "Minigame");
            data.stats.categories.put(5, "Transportation");
            data.stats.categories.put(6, "Landmark");
            
            System.out.println("\n=== Statistics ===");
            System.out.println("Total elements: " + data.stats.totalElements);
            System.out.println("Elements with labels: " + data.stats.elementsWithLabels);
            System.out.println("Elements with icons: " + data.stats.elementsWithIcons);
            System.out.println("Total area definitions: " + data.stats.totalAreas);
            System.out.println("Intermap links: " + data.stats.intermapLinkCount);
            System.out.println("Icon placements (object+element): " + data.placements.size());
            System.out.println("Distinct sprites used: " + usedSpriteIds.size());
            System.out.println("\nCategory breakdown:");
            for (Map.Entry<Integer, Integer> entry : categoryCounts.entrySet()) {
                String categoryName = data.stats.categories.getOrDefault(entry.getKey(), "Category " + entry.getKey());
                System.out.println("  " + categoryName + " (" + entry.getKey() + "): " + entry.getValue());
            }
        }

        // Write data to JSON file
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        try (FileWriter writer = new FileWriter(outputFile)) {
            gson.toJson(data, writer);
        }

        System.out.println("\n=== Export Complete ===");
        System.out.println("Exported to: " + outputFile);
        System.out.println("  - " + data.labels.size() + " labels");
        System.out.println("  - " + data.icons.size() + " icons");
        System.out.println("  - " + data.areas.size() + " area definitions");
        System.out.println("  - " + data.intermapLinks.size() + " intermap links");
    }
}
