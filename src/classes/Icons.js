import {IconBaseClass} from "./IconBaseClass";
import * as _PointToManyPoints from "./IconTypes/PointToManyPoints";
import * as _FairyRings from "./IconTypes/FairyRings";
import * as _Teleports from "./IconTypes/Teleports";
import * as _PointToPoints from "./IconTypes/PointToPoints";
import * as _AgilityShortcuts from "./IconTypes/AgilityShortcuts";
import * as _Locations from "./IconTypes/Locations";

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    let R = 6371; // Radius of the earth in km
    let dLat = deg2rad(lat2 - lat1);  // deg2rad below
    let dLon = deg2rad(lon2 - lon1);
    let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
    ;
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}


//Re renders the icons, almost definitely a more efficient way to be handling this, but it'll do for now
export function rewriteIcons() {
    let icons = {};
    for (let type of types) {
        icons[type.label] = [];
        if (typeof window !== 'undefined') {
            for (let key in type.data) {
                if(type.label !== "locations"){
                    icons[type.label][key] = new IconBaseClass(type.data[key]);
                }
            }
        }
    }
    return icons;
}

//Re renders the icons, almost definitely a more efficient way to be handling this, but it'll do for now
export function getAllIconsFlat() {
    let icons = [];
    for (let type of types) {
        if (typeof window !== 'undefined') {
            for (let key in type.data) {
                icons.push(type.data[key]);
            }
        }
    }
    return icons;
}

export function getClosestIcon(lat, lng) {
    let shortest = 30000;
    let closest = null;
    for (let icon of _Teleports.Teleports) {
        let distance = getDistanceFromLatLonInKm(lat, lng, icon.position.lat, icon.position.lng);
        if (distance < shortest) {
            shortest = distance;
            closest = icon;
        }
    }
    for (let icon of _FairyRings.FairyRings) {
        let distance = getDistanceFromLatLonInKm(lat, lng, icon.position.lat, icon.position.lng);
        if (distance < shortest) {
            shortest = distance;
            closest = icon;
        }
    }
    return closest;
}


export const types = [
    {
        label: 'teleports',
        data: _Teleports.Teleports,
        shown: true
    },
    {
        label: 'agility_shortcuts',
        data: _AgilityShortcuts.AgilityShortcuts,
        shown: true
    },
    {
        label: 'point_to_points',
        data: _PointToPoints.PointToPoints,
        shown: true
    },
    {
        label: 'point_to_many_points',
        data: _PointToManyPoints.PointToManyPoints,
        shown: true
    },
    {
        label: 'fairy_rings',
        data: _FairyRings.FairyRings,
        shown: true
    },
    {
        label: 'locations',
        data: _Locations.Locations,
        shown: true
    }
];