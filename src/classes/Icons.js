import {Categories, IconBaseClass} from "./IconBaseClass";
import * as L from "leaflet";

export const Icons = {
    TeleportHome: {
        iconUrl: require('../../static/icons/Teleports/Home_Teleport_icon.webp'),
        iconRetinaUrl: require('../../static/icons/Teleports/Home_Teleport_icon.webp'),
        className: 'teleport teleport_home',
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