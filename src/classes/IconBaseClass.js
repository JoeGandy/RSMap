import L, {Icon} from "leaflet";



const sizeConversionSurface = {
    9: 128,
    8: 64,
    7: 32,
    6: 16,
    5: 16,
    4: 16,
    3: 16,
    2: 16,
    1: 16
};

const sizeConversionDungeon = {
    5: 128,
    4: 64,
    3: 32,
    2: 32,
    1: 32,
};

const sizeConversion = {...sizeConversionSurface};

let zoomLevel = 6;

const default_size = sizeConversion[zoomLevel];

export const Categories = {
    REGULAR_SPELLBOOK: 'regular_spellbook',
    ANCIENT_SPELLBOOK: 'ancient_spellbook',
    LUNAR_SPELLBOOK: 'lunar_spellbook',
    ARCEUUS_SPELLBOOK: 'arceuus_spellbook',
    JEWELLERY: 'jewellery',
    AGILITY_SHORTCUT: 'agility_shortcut',
    BOATS: 'boats',
    FAIRY_RINGS: 'fairy_rings',
    SPIRIT_TREES: 'spirit_trees',
    BALLOON_TRANSPORT: 'balloon_transport_system',
    MAGIC_MUSHROOMS: 'magic_mushroom',
    GNOME_GLIDERS: 'gnome_glider',
    CARPET_RIDES: 'carpet_ride',
    MINI_GAMES: 'mini_games',
    OTHER: 'other'
};

export const Categories_name = {
    [Categories.REGULAR_SPELLBOOK]: 'Standard Spellbook',
    [Categories.ANCIENT_SPELLBOOK]: 'Ancient Spellbook',
    [Categories.LUNAR_SPELLBOOK]: 'Lunar Spellbook',
    [Categories.ARCEUUS_SPELLBOOK]: 'Arceuus Spellbook',
    [Categories.JEWELLERY]: 'Enchanted Jewellery',
    [Categories.AGILITY_SHORTCUT]: 'Agility Shortcuts',
    [Categories.BOATS]: 'Ships / Boats',
    [Categories.FAIRY_RINGS]: 'Fairy Rings',
    [Categories.SPIRIT_TREES]: 'Spirit Trees',
    [Categories.BALLOON_TRANSPORT]: 'Balloon Transport',
    [Categories.MAGIC_MUSHROOMS]: 'Magic Mushrooms',
    [Categories.GNOME_GLIDERS]: 'Gnome Gliders',
    [Categories.CARPET_RIDES]: 'Carpet Rides',
    [Categories.MINI_GAMES]: 'Mini-Game Teleports',
    [Categories.OTHER]: 'Other',

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

    static setZoomLevel(_zoomLevel, dungeon) {
        zoomLevel = _zoomLevel;
        let _sizeConversion = dungeon ? {...sizeConversionDungeon} : {...sizeConversionSurface};
        let size_for_zoom = _sizeConversion[zoomLevel];
        IconBaseClass.defaults.iconSize = new L.Point(size_for_zoom, size_for_zoom);
        IconBaseClass.defaults.iconAnchor = new L.Point(size_for_zoom / 2, size_for_zoom / 2);
        IconBaseClass.defaults.popupAnchor = new L.Point(0, -(size_for_zoom / 2));
    }
}