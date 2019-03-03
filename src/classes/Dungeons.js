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
    /*{ Scale is off, needs work
        machine_name: 'stronghold_of_security_vault_of_war',
        full_name: 'Stronghold of Security Layer 1',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat":21.453068633086783,"lng":284.76562500000006},
        exits: [
            {
                label: 'To Barbarian Village',
                position: {"lat":3.8642546157214084,"lng":283.00781250000006},
                target_layer: "surface",
                target_layer_position: {"lat":79.15377632309713,"lng":307.67211914062506},
                icon: require('../../static/icons/misc/Transportation_icon.png')
            },
        ],
        map_labels: [],
        icons: {

        }
    },*/
    {
        machine_name: 'misthalin_mystery',
        full_name: 'Misthalin Mystery Manor',
        icon: require('../../static/icons/misc/Transportation_icon.png'),
        center_pos: {"lat":21.453068633086783,"lng":284.76562500000006},
        exits: [
            {
                label: 'To Lumbridge Swamp',
                position: {"lat":3.8642546157214084,"lng":283.00781250000006},
                target_layer: "surface",
                target_layer_position: {"lat":75.09139350771163,"lng":318.0844116210938},
                icon: require('../../static/icons/misc/Transportation_icon.png')
            },
        ],
        map_labels: [],
        icons: {

        }
    },
    {
        machine_name: 'zanaris',
        full_name: 'Zanaris',
        icon: require('../../static/icons/misc/Map_link_icon.webp'),
        center_pos: {"lat":80.81689088640861,"lng":258.57421875000006},
        exits: [
            {
                label: 'To Lumbridge Swamp',
                position: {"lat": -500.864254615721396, "lng": 238.71093750000003},
                target_layer: "surface",
                target_layer_position: {"lat":75.56441072170146,"lng":315.7553100585938},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "positions": [
                    {
                        "lat": 72.44879155730672,
                        "lng": 186.15234375
                    },
                    {
                        "lat": 71.46912418989677,
                        "lng": 222.71484375000003
                    }
                ],
                "text": "Otherworldly",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 70.25945200030641,
                        "lng": 187.03125000000003
                    },
                    {
                        "lat": 68.78414378041504,
                        "lng": 224.47265625000003
                    }
                ],
                "text": "beings",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 81.1744910042596,
                        "lng": 247.85156250000003
                    },
                    {
                        "lat": 74.06786624952264,
                        "lng": 281.77734375000006
                    }
                ],
                "text": "Puro-puro",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 74.44935750063425,
                        "lng": 275.80078125000006
                    },
                    {
                        "lat": 68.72044056989829,
                        "lng": 313.41796875000006
                    }
                ],
                "text": "Throne Room",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 81.14748070499664,
                        "lng": 316.58203125000006
                    },
                    {
                        "lat": 76.96033358827414,
                        "lng": 356.83593750000006
                    }
                ],
                "text": "Market",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 84.89714695160268,
                        "lng": 286.52343750000006
                    },
                    {
                        "lat": 84.88148837022706,
                        "lng": 318.33984375000006
                    }
                ],
                "text": "Shrine",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 40.44694705960048,
                        "lng": 228.51562500000003
                    },
                    {
                        "lat": 26.902476886279832,
                        "lng": 256.99218750000006
                    }
                ],
                "text": "Cosmic Altar",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 51.17934297928929,
                        "lng": 173.49609375000003
                    },
                    {
                        "lat": 46.92025531537454,
                        "lng": 203.90625000000003
                    }
                ],
                "text": "Tanglefeet",
                "fontSize": 30
            }
        ],
        icons: {

        }
    },
    {
        machine_name: 'edgeville_dungeon_and_varrock_sewers',
        full_name: 'Edgeville dungeon and Varrock sewers',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        icon_scale: 1.2,
        center_pos: {"lat": 45.706179285330855, "lng": 332.05078125000006},
        exits: [
            {
                label: 'To Edgeville',
                position: {"lat": -3.864254615721396, "lng": 238.71093750000003},
                target_layer: "surface",
                target_layer_position: {"lat": 79.74553248351053, "lng": 308.73229980468756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Varrock East',
                position: {"lat": -18.47960905583197, "lng": 434.88281250000006},
                target_layer: "surface",
                target_layer_position: {"lat": 79.61613848377318, "lng": 317.96630859375006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Varrock Bear Cage',
                position: {"lat": 40.84706035607122, "lng": 426.09375},
                target_layer: "surface",
                target_layer_position: {"lat": 80.14915404852314, "lng": 317.49389648437506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To hut west of Varrock',
                position: {"lat": -27.215556209029675, "lng": 265.95703125000006},
                target_layer: "surface",
                target_layer_position: {"lat": 79.5446087817067, "lng": 309.98474121093756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Air Obelisk',
                position: {"lat": 79.93591824625466, "lng": 226.23046875000003},
                target_layer: "surface",
                target_layer_position: {"lat": 80.87718298659169, "lng": 308.13354492187506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "positions": [
                    {
                        "lat": -50.0641917366591,
                        "lng": 242.05078125000003
                    },
                    {
                        "lat": -42.16340342422401,
                        "lng": 271.05468750000006
                    }
                ],
                "text": "Hill Giants",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": -11.350796722383672,
                        "lng": 264.55078125000006
                    },
                    {
                        "lat": -13.923403897723347,
                        "lng": 287.22656250000006
                    }
                ],
                "text": "Hobgoblins",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 32.10118973232094,
                        "lng": 261.56250000000006
                    },
                    {
                        "lat": 26.27371402440643,
                        "lng": 285.82031250000006
                    }
                ],
                "text": "Skeletons",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 23.885837699862005,
                        "lng": 257.16796875000006
                    },
                    {
                        "lat": 18.97902595325528,
                        "lng": 283.35937500000006
                    }
                ],
                "text": "Zombies",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 62.2679226294176,
                        "lng": 255.41015625000003
                    },
                    {
                        "lat": 60.326947742998414,
                        "lng": 273.86718750000006
                    }
                ],
                "text": "Chaos Druids",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 66.44310650816469,
                        "lng": 277.20703125000006
                    },
                    {
                        "lat": 62.2679226294176,
                        "lng": 295.83984375000006
                    }
                ],
                "text": "Thugs",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 76.14295846479848,
                        "lng": 263.49609375000006
                    },
                    {
                        "lat": 72.71190310803662,
                        "lng": 284.41406250000006
                    }
                ],
                "text": "Red Spiders",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 76.840816414431,
                        "lng": 213.39843750000003
                    },
                    {
                        "lat": 75.84516854027044,
                        "lng": 245.21484375000003
                    }
                ],
                "text": "Black Demons",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 74.59010800882325,
                        "lng": 205.13671875000003
                    },
                    {
                        "lat": 73.22669969306126,
                        "lng": 242.05078125000003
                    }
                ],
                "text": "Poison Spiders",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 69.3493386397765,
                        "lng": 211.81640625
                    },
                    {
                        "lat": 63.93737246791484,
                        "lng": 236.77734375000003
                    }
                ],
                "text": "Chronozon",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 84.4740645845916,
                        "lng": 246.79687500000003
                    },
                    {
                        "lat": 83.3391531415795,
                        "lng": 291.09375000000006
                    }
                ],
                "text": "Earth Warriors",
                "fontSize": 30
            },
            {
                "positions": [
                    {"lat": 46.92025531537454, "lng": 310.95703125000006},
                    {
                        "lat": 39.36827914916014,
                        "lng": 336.62109375000006
                    }
                ],
                "text": "Moss Giants",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 10.833305983642491,
                        "lng": 321.50390625000006
                    },
                    {
                        "lat": 13.581920900545857,
                        "lng": 348.57421875000006
                    }
                ],
                "text": "Moss Giants",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 12.382928338487396,
                        "lng": 348.57421875000006
                    },
                    {
                        "lat": 25.005972656239187,
                        "lng": 368.96484375000006
                    }
                ],
                "text": "Red Spiders",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": -4.740675384778361,
                        "lng": 423.6328125
                    },
                    {
                        "lat": -6.489983332670651,
                        "lng": 440.50781250000006
                    }
                ],
                "text": "Rats",
                "fontSize": 30
            }
        ],
        icons: {
            agility_shortcuts: []
        }
    },
    {
        machine_name: 'draynor_sewer',
        full_name: 'Draynor Sewer',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        icon_scale: 1.2,
        center_pos: {"lat": 45.706179285330855, "lng": 332.05078125000006},
        exits: [
            {
                label: 'To North of Draynor Market',
                position: {"lat": 56.17002298293205, "lng": 216.21093750000003},
                target_layer: "surface",
                target_layer_position: {"lat": 77.157162522661, "lng": 307.86987304687506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Outside of Jail',
                position: {"lat": -12.211180191503997, "lng": 311.83593750000006},
                target_layer: "surface",
                target_layer_position: {"lat": 76.73913726028553, "lng": 310.11657714843756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "positions": [
                    {
                        "lat": 52.26815737376817,
                        "lng": 225.70312500000003
                    },
                    {
                        "lat": 59.88893689676585,
                        "lng": 252.59765625000003
                    }
                ],
                "text": "Zombie",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 57.040729838360875,
                        "lng": 286.69921875000006
                    },
                    {
                        "lat": 51.50874245880335,
                        "lng": 333.28125000000006
                    }
                ],
                "text": "Skeletons",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": -6.839169626342808,
                        "lng": 305.33203125000006
                    },
                    {
                        "lat": 15.792253570362446,
                        "lng": 331.69921875000006
                    }
                ],
                "text": "Zombies",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 76.26869465080624,
                        "lng": 271.93359375000006
                    },
                    {
                        "lat": 75.80211845876491,
                        "lng": 313.06640625000006
                    }
                ],
                "text": "Ruantun",
                "fontSize": 30
            }
        ],
        icons: {
            agility_shortcuts: []
        }
    },
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
                position: {"lat": 14.944784875088372, "lng": 264.28710937500006},
                target_layer: "surface",
                target_layer_position: {"lat": 78.10339245316887, "lng": 303.58795166015625},
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
                        "lat": 76.18499546094715,
                        "lng": 170.68359375000003
                    },
                    {
                        "lat": 70.8446726342528,
                        "lng": 211.99218750000003
                    }
                ],
                "text": "Hammerspikes' Hangout",
                "fontSize": 30
            }
        ],
        icons: {
            agility_shortcuts: [
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 73.27735320192473, "lng": 286.96289062500006},
                    title: "Agility Shortcut",
                    description: "Wall Crevice (42 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                },
            ]
        }
    },
    {
        machine_name: 'motherlode_mine',
        full_name: 'Motherlode Mine',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        icon_scale: 1.2,
        center_pos: {"lat": 45.706179285330855, "lng": 332.05078125000006},
        exits: [
            {
                label: 'To Dwarven Mine',
                position: {"lat": 77.65534600967779, "lng": 273.33984375000006},
                target_layer: "dwarven_mine",
                target_layer_position: {"lat": 45.02695045318546, "lng": 321.94335937500006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {
            agility_shortcuts: [
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 52.5897007687178, "lng": 359.82421875},
                    title: "Agility Shortcut",
                    description: "Wall shortcut (54 Agility)\nRequires Falador Medium Diary",
                    category: Categories.AGILITY_SHORTCUT
                },
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 54.36775852406841, "lng": 376.69921875000006},
                    title: "Agility Shortcut",
                    description: "Wall shortcut (54 Agility)\nRequires Falador Medium Diary",
                    category: Categories.AGILITY_SHORTCUT
                },
            ]
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