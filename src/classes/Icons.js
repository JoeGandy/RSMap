import {Categories, IconBaseClass} from "./IconBaseClass";
import * as L from "leaflet";

export const Icons = {
    AgilityShortcutIcon: {
        iconUrl: require('../../static/icons/agility_shortcut.png'),
        iconRetinaUrl: require('../../static/icons/agility_shortcut.png'),
        className: 'agility_shortcut',
        category: Categories.MISC
    }
};

//Re renders the icons, almost definitely a more efficient way to be handling this, but it'll do for now
export function rewriteIcons() {
    let icons = {};
    for (let key in Icons) {
        icons[key] = new IconBaseClass(Icons[key]);
    }
    return icons;
}