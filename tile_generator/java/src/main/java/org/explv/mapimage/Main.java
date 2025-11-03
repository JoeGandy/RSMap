package org.explv.mapimage;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;
import java.util.function.BiConsumer;
import javax.imageio.ImageIO;

import net.runelite.cache.MapImageDumper;
import net.runelite.cache.fs.Store;
import net.runelite.cache.region.Region;
import net.runelite.cache.util.XteaKeyManager;

import org.apache.commons.cli.CommandLine;
import org.apache.commons.cli.CommandLineParser;
import org.apache.commons.cli.DefaultParser;
import org.apache.commons.cli.Option;
import org.apache.commons.cli.Options;
import org.apache.commons.cli.ParseException;

/**
 * Main class for generating OSRS map images using RuneLite's MapImageDumper
 * Adapted from Explv's original implementation
 */
public class Main {
    
    private static final List<MapOption> MAP_OPTIONS = List.of(
        new MapOption("renderMap", MapImageDumper::setRenderMap),
        new MapOption("renderObjects", MapImageDumper::setRenderObjects),
        new MapOption("renderIcons", MapImageDumper::setRenderIcons),
        new MapOption("renderLabels", MapImageDumper::setRenderLabels)
    );

    public static void main(String[] args) throws IOException {
        Options options = new Options();
        options.addOption(Option.builder().longOpt("cachedir").hasArg().required().build());
        options.addOption(Option.builder().longOpt("xteapath").hasArg().required().build());
        options.addOption(Option.builder().longOpt("outputdir").hasArg().required().build());

        // Add custom render options
        for (MapOption mapOption : MAP_OPTIONS) {
            options.addOption(Option.builder().longOpt(mapOption.name).hasArg().build());
        }

        CommandLineParser parser = new DefaultParser();
        CommandLine cmd;
        
        try {
            cmd = parser.parse(options, args);
        } catch (ParseException ex) {
            System.err.println("Error parsing command line options: " + ex.getMessage());
            System.exit(-1);
            return;
        }

        final String cacheDirectory = cmd.getOptionValue("cachedir");
        final String xteaJSONPath = cmd.getOptionValue("xteapath");
        final String outputDirectory = cmd.getOptionValue("outputdir");

        System.out.println("Starting OSRS map image generation...");
        System.out.println("Cache directory: " + cacheDirectory);
        System.out.println("XTEA file: " + xteaJSONPath);
        System.out.println("Output directory: " + outputDirectory);

        // Load XTEAs
        XteaKeyManager xteaKeyManager = new XteaKeyManager();
        try (FileInputStream fin = new FileInputStream(xteaJSONPath)) {
            xteaKeyManager.loadKeys(fin);
        }

        File base = new File(cacheDirectory);
        File outDir = new File(outputDirectory);
        outDir.mkdirs();

        // Load cache and generate images
        try (Store store = new Store(base)) {
            store.load();

            MapImageDumper dumper = new MapImageDumper(store, xteaKeyManager);

            // Apply custom render options
            for (MapOption mapOption : MAP_OPTIONS) {
                if (cmd.hasOption(mapOption.name)) {
                    String option = cmd.getOptionValue(mapOption.name);
                    boolean value = "true".equalsIgnoreCase(option);
                    mapOption.setter.accept(dumper, value);
                    System.out.println("Set " + mapOption.name + " = " + value);
                }
            }

            dumper.load();

            // Generate images for each plane
            System.out.println("Region.Z = " + Region.Z + " (total planes to generate)");
            for (int plane = 0; plane < Region.Z; ++plane) {
                System.out.println("Generating image for plane " + plane + "...");
                
                BufferedImage image = dumper.drawMap(plane);
                File imageFile = new File(outDir, "full_image_" + plane + ".png");
                
                ImageIO.write(image, "png", imageFile);
                System.out.println("Wrote image: " + imageFile.getAbsolutePath());
            }
        }
        
        System.out.println("Map image generation completed!");
    }
    
    /**
     * Helper class to store map option configuration
     */
    private static class MapOption {
        final String name;
        final BiConsumer<MapImageDumper, Boolean> setter;
        
        MapOption(String name, BiConsumer<MapImageDumper, Boolean> setter) {
            this.name = name;
            this.setter = setter;
        }
    }
}
