package org.explv.mapimage;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import net.runelite.cache.AreaManager;
import net.runelite.cache.WorldMapManager;
import net.runelite.cache.definitions.AreaDefinition;
import net.runelite.cache.definitions.WorldMapElementDefinition;
import net.runelite.cache.fs.Store;
import net.runelite.cache.region.Position;
import net.runelite.cache.util.XteaKeyManager;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.cli.CommandLine;
import org.apache.commons.cli.CommandLineParser;
import org.apache.commons.cli.DefaultParser;
import org.apache.commons.cli.Option;
import org.apache.commons.cli.Options;
import org.apache.commons.cli.ParseException;

/**
 * Extracts world map labels from the OSRS cache
 * Based on RuneLite's cache library
 */
public class WorldMapLabelExtractor {

    public static class MapLabel {
        public String name;
        public int worldX;
        public int worldY;
        public int plane;
        public int textColor;
        public int textScale;
        
        public MapLabel(String name, int worldX, int worldY, int plane, int textColor, int textScale) {
            this.name = name;
            this.worldX = worldX;
            this.worldY = worldY;
            this.plane = plane;
            this.textColor = textColor;
            this.textScale = textScale;
        }
    }

    public static void main(String[] args) throws IOException {
        Options options = new Options();
        options.addOption(Option.builder().longOpt("cachedir").hasArg().required().build());
        options.addOption(Option.builder().longOpt("xteapath").hasArg().required().build());
        options.addOption(Option.builder().longOpt("outputfile").hasArg().required().build());

        CommandLineParser parser = new DefaultParser();
        CommandLine cmd;
        
        try {
            cmd = parser.parse(options, args);
        } catch (ParseException ex) {
            System.err.println("Error parsing command line options: " + ex.getMessage());
            System.err.println("Usage: WorldMapLabelExtractor --cachedir <dir> --xteapath <file> --outputfile <file>");
            System.exit(-1);
            return;
        }

        final String cacheDirectory = cmd.getOptionValue("cachedir");
        final String xteaJSONPath = cmd.getOptionValue("xteapath");
        final String outputFile = cmd.getOptionValue("outputfile");

        System.out.println("Extracting world map labels from OSRS cache...");
        System.out.println("Cache directory: " + cacheDirectory);
        System.out.println("Output file: " + outputFile);

        // Load XTEAs
        XteaKeyManager xteaKeyManager = new XteaKeyManager();
        try (FileInputStream fin = new FileInputStream(xteaJSONPath)) {
            xteaKeyManager.loadKeys(fin);
        }

        File base = new File(cacheDirectory);
        List<MapLabel> labels = new ArrayList<>();

        try (Store store = new Store(base)) {
            store.load();

            System.out.println("Loading WorldMapManager...");
            WorldMapManager worldMapManager = new WorldMapManager(store);
            worldMapManager.load();
            
            System.out.println("Loading AreaManager...");
            AreaManager areaManager = new AreaManager(store);
            areaManager.load();
            
            System.out.println("Extracting labels from world map elements...");
            List<WorldMapElementDefinition> elements = worldMapManager.getElements();
            System.out.println("Found " + elements.size() + " world map elements");
            
            int labelCount = 0;
            for (WorldMapElementDefinition element : elements) {
                // Get the area definition for this element
                int areaId = element.getAreaDefinitionId();
                AreaDefinition area = areaManager.getArea(areaId);
                
                if (area == null) {
                    continue;
                }
                
                // Only include elements with names (labels)
                String name = area.getName();
                if (name == null || name.trim().isEmpty() || name.equals("null")) {
                    continue;
                }
                
                // Get world position
                Position worldPos = element.getWorldPosition();
                
                // Create label
                MapLabel label = new MapLabel(
                    name,
                    worldPos.getX(),
                    worldPos.getY(),
                    worldPos.getZ(),
                    area.getTextColor(),
                    area.getTextScale()
                );
                
                labels.add(label);
                labelCount++;
                
                if (labelCount % 100 == 0) {
                    System.out.println("Extracted " + labelCount + " labels...");
                }
            }
            
            System.out.println("\nSuccessfully extracted " + labels.size() + " labels!");
        }

        // Write labels to JSON file
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        try (FileWriter writer = new FileWriter(outputFile)) {
            gson.toJson(labels, writer);
        }

        System.out.println("\nExtracted " + labels.size() + " labels to " + outputFile);
        System.out.println("Done!");
    }
}
