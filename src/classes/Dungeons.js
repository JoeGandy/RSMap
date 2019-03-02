import {Categories, IconBaseClass} from "./IconBaseClass";
import {types} from "./Icons";


export function getDungeonIcons(dungeon_name) {
    for (let dungeon of Dungeons) {
        if (dungeon.machine_name === dungeon_name) {
            let icons = {};
            for (let type of types) {
                icons[type.label] = [];
                for (let key in dungeon.icons[type.label]) {
                    if (type.label !== "locations") {
                        icons[type.label][key] = new IconBaseClass(dungeon.icons[type.label][key]);
                    }
                }
            }
            return icons;
        }
    }
}

export function getDungeonCenter(dungeon_name) {
    for (let dungeon of Dungeons) {
        if (dungeon.machine_name === dungeon_name) {
            return dungeon.center_pos;
        }
    }
}

export const Dungeons = [
    {
        machine_name: 'taverly_dungeon',
        full_name: 'Taverly Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat":70.4367988185464,"lng":298.82812500000006},
        exits: [
            {
                label: 'To Taverly',
                position: {"lat": 69.03714171275197, "lng": 298.65234375000006},
                target_layer: "surface",
                target_layer_position: {"lat":78.86527580679268,"lng":294.69177246093756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            }
        ],
        icons: {
            agility_shortcuts: [
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 75.87737216353425, "lng": 291.00585937500006},
                    title: "Agility Shortcut",
                    description: "Jump floor trap",
                    category: Categories.AGILITY_SHORTCUT
                },
            ]
        }
    }
];