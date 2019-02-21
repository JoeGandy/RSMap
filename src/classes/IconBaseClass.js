import L, {Icon} from "leaflet";

const sizeConversion = {
    8: 64,
    7: 32,
    6: 16,
    5: 16,
    4: 16
};

let zoomLevel = 6;

const default_size = sizeConversion[zoomLevel];


export const Categories = {
    MISC: 'MISC'
};

export class IconBaseClass extends Icon {
    static defaults = {
        iconAnchor: new L.Point(default_size / 2, default_size / 2),
        popupAnchor: new L.Point(0, -(default_size / 2)),
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(default_size, default_size)

    };

    constructor(props) {
        super({
            ...IconBaseClass.defaults,
            ...props
        });
    }

    static setZoomLevel(_zoomLevel) {
        zoomLevel = _zoomLevel;
        let size_for_zoom = sizeConversion[zoomLevel];
        IconBaseClass.defaults.iconSize = new L.Point(size_for_zoom, size_for_zoom);
        IconBaseClass.defaults.iconAnchor = new L.Point(size_for_zoom / 2, size_for_zoom / 2);
        IconBaseClass.defaults.popupAnchor = new L.Point(0, -(size_for_zoom / 2));
    }
}