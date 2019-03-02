import {Categories, IconBaseClass} from "./IconBaseClass";
import {types} from "./Icons";
import TextPath from "../components/MapMarkers";
import React from "react";


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

export function getDungeonLayer(dungeon_name) {
    for (let dungeon of Dungeons) {
        if (dungeon.machine_name === dungeon_name) {
            return dungeon;
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
        machine_name: 'dwarven_mine',
        full_name: 'Dwarven Mine',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 70.4367988185464, "lng": 298.82812500000006},
        exits: [
            {
                label: 'To Dwarven Mine Entrance',
                position: {"lat": 84.28470439392032, "lng": 264.55078125000006},
                target_layer: "surface",
                target_layer_position: {"lat": 79.52265545122708, "lng": 303.53027343750006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Falador Entrance',
                position: {"lat": 55.875310835696816, "lng": 320.27343750000006},
                target_layer: "surface",
                target_layer_position: {"lat": 78.60724128404506, "lng": 306.221923828125},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Mining Guild Entrance',
                position: {"lat":14.944784875088372,"lng":264.28710937500006},
                target_layer: "surface",
                target_layer_position: {"lat":78.10339245316887,"lng":303.58795166015625},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            }
        ],
        map_labels: [
            {
                "positions": [
                    {
                        "lat": 12.039320557540572,
                        "lng": 265.25390625000006
                    },
                    {
                        "lat": 24.367113562651276,
                        "lng": 311.484375
                    }
                ],
                "text": "Mining Guild",
                "fontSize": 50
            },
            {
                "positions": [
                    {
                        "lat": 54.36775852406841,
                        "lng": 285.82031250000006
                    },
                    {
                        "lat": 57.79794388498275,
                        "lng": 319.57031250000006
                    }
                ],
                "text": "Scorpions",
                "fontSize": 51
            },
            {
                "positions": [
                    {
                        "lat": 80.297927149974,
                        "lng": 182.63671875
                    },
                    {
                        "lat": 68.00757101804007,
                        "lng": 203.73046875000003
                    }
                ],
                "text": "Hammerspikes' Hangout",
                "fontSize": 30
            }
        ],
        icons: {
            agility_shortcuts: []
        }
    },
    {
        machine_name: 'taverly_dungeon',
        full_name: 'Taverly Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 70.4367988185464, "lng": 298.82812500000006},
        exits: [
            {
                label: 'To Taverly',
                position: {"lat": 69.03714171275197, "lng": 298.65234375000006},
                target_layer: "surface",
                target_layer_position: {"lat": 78.86527580679268, "lng": 294.69177246093756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            }
        ],
        map_labels: [
            {
                positions: [
                    {"lat": 66.99884379185184, "lng": 227.46093750000003},
                    {"lat": 56.75272287205736, "lng": 288.28125000000006}
                ],
                text: "Black Demons",
                fontSize: 45,
            },
            {
                positions: [
                    {"lat": 76.63922560965888, "lng": 238.18359375000003},
                    {"lat": 71.91088787611528, "lng": 291.62109375000006}
                ],
                text: "Poison Spiders",
                fontSize: 38
            },
            {
                positions: [
                    {"lat": 70.90226826757711, "lng": 205.13671875000003},
                    {"lat": 77.0394184427303, "lng": 238.18359375000003}
                ],
                text: "Monks of Zamorak",
                fontSize: 31
            },
            {
                positions: [
                    {"lat": 79.81230226556369, "lng": 219.72656250000003},
                    {"lat": 79.56054626376367, "lng": 250.31250000000003}
                ],
                text: "Black Dragons "
            },
            {
                positions: [
                    {"lat": 81.46626086056541, "lng": 255.05859375000003},
                    {"lat": 84.31960821893406, "lng": 271.23046875000006}
                ],
                text: "Hellhounds",
                fontSize: 35
            },
            {
                positions: [
                    {"lat": 31.203404950917395, "lng": 343.30078125},
                    {"lat": 55.875310835696816, "lng": 364.39453125000006}
                ],
                text: "Chaos Dwarves"
            },
            {
                positions: [
                    {"lat": 73.47848507889992, "lng": 325.37109375000006},
                    {"lat": 60.326947742998414, "lng": 344.88281250000006}
                ],
                text: "Blue Dragons",
                fontSize: 47
            },
            {
                positions: [
                    {"lat": 85.287916121237, "lng": 353.49609375000006},
                    {"lat": 82.63133285369297, "lng": 384.96093750000006}
                ],
                text: "Chaos Druids"
            },
            {
                positions: [
                    {"lat": 63.860035895395306, "lng": 395.50781250000006},
                    {"lat": 57.89149735271034, "lng": 416.77734375000006}
                ],
                text: "Magic Axes"
            },
            {
                positions: [
                    {"lat": 73.32785809840696, "lng": 359.29687500000006},
                    {"lat": 62.02152819100765, "lng": 371.953125}
                ],
                text: "Lesser Demons",
                fontSize: 35
            },
            {
                positions: [
                    {"lat": 19.973348786110613, "lng": 346.81640625000006},
                    {"lat": 49.83798245308484, "lng": 375.82031250000006}
                ],
                text: "Poisonous Scorpions"
            },
            {
                positions: [
                    {"lat": 13.239945499286312, "lng": 320.27343750000006},
                    {"lat": 1.7575368113083254, "lng": 346.64062500000006}
                ],
                text: "Hill Giants"
            },
            {
                positions: [
                    {"lat": -25.48295117535532, "lng": 311.83593750000006},
                    {"lat": -56.559482483762245, "lng": 346.46484375000006}
                ],
                text: "Black Knights' Base",
                fontSize: 45
            }

        ],
        icons: {
            agility_shortcuts: [
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 75.87737216353425, "lng": 291.00585937500006},
                    title: "Agility Shortcut",
                    description: "Jump floor trap (80 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                },
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 78.9208316247074, "lng": 305.15625000000006},
                    title: "Agility Shortcut",
                    description: "Pipe Squeeze (70 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                },
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 69.71810669906763, "lng": 303.75000000000006},
                    title: "Agility Shortcut",
                    description: "Pipe Squeeze (70 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                },
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 75.18578927942626, "lng": 372.568359375},
                    title: "Agility Shortcut",
                    description: "Fence Squeeze (63 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                },
            ]
        }
    }
];