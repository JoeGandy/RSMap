#./gdal2tiles-leaflet/gdal2tiles.py -l -p raster -z 0-9 -w none ../static/map/original/osrs_world_map.png ../static/map/generated
for filename in ../static/map/dungeons/originals/*/*.png ; do
	original_filename=$(echo $filename | sed -e "s/\.png$//")
	convert $original_filename.png $original_filename.jpg

        filename=$(echo $original_filename | sed -e "s/\.\.\/static\/map\/dungeons\/originals\/.*\///")
	mkdir -p ../static/map/dungeons/generated/$filename
	./gdal2tiles-leaflet/gdal2tiles.py -l -p raster -z 0-3 -w none $original_filename.jpg ../static/map/dungeons/generated/$filename
	echo $filename
done






