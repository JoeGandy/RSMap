import L from "leaflet";

const defaults = {
    iconAnchor: new L.Point(30, 30),
    popupAnchor: new L.Point(0, -30),
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 60)

};

export const Categories = {
    MISC: 'MISC'
};


export const iconAgility = new L.Icon({
    iconUrl: require('../../static/icons/agility_shortcut.png'),
    iconRetinaUrl: require('../../static/icons/agility_shortcut.png'),
    className: 'agility_shortcut',
    category: Categories.MISC,
    ...defaults
});