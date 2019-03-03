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
        machine_name: 'paterdomus_template_basement',
        full_name: 'Paterdomus Template Basement',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat":21.453068633086783,"lng":333.63281250000006},
        exits: [
            {
                label: 'To Paterdomus Temple',
                position: {"lat":32.175612478499346,"lng":321.15234375},
                target_layer: "surface",
                target_layer_position: {"lat":80.17074580045627,"lng":329.02954101562506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Morytania',
                position: {"lat":19.518375478601566,"lng":345.45410156250006},
                target_layer: "surface",
                target_layer_position: {"lat":79.92823592380245,"lng":330.16113281250006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'tutorial_island_cave',
        full_name: 'Tutorial Island Cave',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 23.32208001137844, "lng": 332.57812500000006},
        exits: [
            {
                label: 'To Quest Tutorial',
                position: {"lat": 30.56226095049944, "lng": 327.70019531250006},
                target_layer: "surface",
                target_layer_position: {"lat": 74.71224441731964, "lng": 308.13903808593756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Friends Tutorial',
                position: {"lat": 34.08906131584996, "lng": 345.01464843750006},
                target_layer: "surface",
                target_layer_position: {"lat": 74.83487278379204, "lng": 309.64965820312506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'kbd_lair',
        full_name: 'King Black Dragon Lair',
        icon: require('../../static/icons/misc/Transportation_icon.png'),
        center_pos: {"lat": 17.18277905643184, "lng": 338.203125},
        exits: [
            {
                label: 'KBD Lair',
                position: {"lat": 14.774882506516272, "lng": 333.94042968750006},
                target_layer: "lava_maze_dungeon",
                target_layer_position: {"lat": 13.15437605541853, "lng": 354.814453125},
                icon: require('../../static/icons/misc/Transportation_icon.png')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'lava_maze_dungeon',
        full_name: 'Lava Maze Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 17.18277905643184, "lng": 338.203125},
        exits: [
            {
                label: 'Center of Lava Dragon Maze',
                position: {"lat": 10.833305983642491, "lng": 318.25195312500006},
                target_layer: "surface",
                target_layer_position: {"lat": 83.4199002425892, "lng": 306.8893432617188},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'West of Lava Dragon Maze',
                position: {"lat": 14.689881366618774, "lng": 351.6064453125},
                target_layer: "surface",
                target_layer_position: {"lat": 83.36744691299643, "lng": 303.45886230468756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "positions": [
                    {
                        "lat": 21.207458730482653,
                        "lng": 333.369140625
                    },
                    {
                        "lat": 31.728167146023935,
                        "lng": 350.85937500000006
                    }
                ],
                "text": "Black Dragons",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 9.882275493429953,
                        "lng": 315.87890625000006
                    },
                    {
                        "lat": 8.059229627200192,
                        "lng": 335.830078125
                    }
                ],
                "text": "Greater Demons",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 19.228176737766262,
                        "lng": 347.16796875000006
                    },
                    {
                        "lat": 10.31491928581316,
                        "lng": 367.294921875
                    }
                ],
                "text": "Poison Spiders",
                "fontSize": 30
            }
        ],
        icons: {}
    },
    {
        machine_name: 'rev_caves',
        full_name: 'Revenant Caves',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 31.203404950917395, "lng": 340.13671875},
        exits: [
            {
                label: 'To Level 40 wilderness',
                position: {"lat": 66.58321725728176, "lng": 363.33984375000006},
                target_layer: "surface",
                target_layer_position: {"lat": 83.23642648170203, "lng": 310.57250976562506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Level 17 wilderness',
                position: {"lat": -33.28461996888768, "lng": 330.29296875000006},
                target_layer: "surface",
                target_layer_position: {"lat": 81.71290123447507, "lng": 307.28210449218756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "positions": [
                    {
                        "lat": -26.273714024406416,
                        "lng": 329.23828125000006
                    },
                    {
                        "lat": -19.642587534013032,
                        "lng": 339.08203125000006
                    }
                ],
                "text": "Hellhounds",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": -19.145168196205297,
                        "lng": 346.11328125000006
                    },
                    {
                        "lat": -29.07537517955836,
                        "lng": 358.06640625000006
                    }
                ],
                "text": "Green Dragons",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": -6.839169626342808,
                        "lng": 338.203125
                    },
                    {
                        "lat": -6.839169626342808,
                        "lng": 353.14453125000006
                    }
                ],
                "text": "Green Dragons",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 17.811456088564483,
                        "lng": 340.3125
                    },
                    {
                        "lat": 15.284185114076445,
                        "lng": 361.05468750000006
                    }
                ],
                "text": "Greater Demons",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 4.214943141390651,
                        "lng": 297.77343750000006
                    },
                    {
                        "lat": 9.44906182688142,
                        "lng": 318.33984375000006
                    }
                ],
                "text": "Lesser Demons",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 32.10118973232094,
                        "lng": 307.61718750000006
                    },
                    {
                        "lat": 30.600093873550072,
                        "lng": 327.83203125000006
                    }
                ],
                "text": "Black Demons",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 38.685509760012025,
                        "lng": 331.34765625000006
                    },
                    {
                        "lat": 37.71859032558816,
                        "lng": 348.75000000000006
                    }
                ],
                "text": "Ice Giants",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 49.724479188712984,
                        "lng": 307.08984375000006
                    },
                    {
                        "lat": 54.16243396806781,
                        "lng": 329.58984375000006
                    }
                ],
                "text": "Ankou",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 55.07836723201515,
                        "lng": 350.15625
                    },
                    {
                        "lat": 56.36525013685609,
                        "lng": 368.61328125000006
                    }
                ],
                "text": "Black Dragons",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 47.15984001304432,
                        "lng": 354.37500000000006
                    },
                    {
                        "lat": 29.075375179558346,
                        "lng": 371.60156250000006
                    }
                ],
                "text": "Revenants",
                "fontSize": 30
            }
        ],
        icons: {
            agility_shortcuts: [
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 58.19387126497797, "lng": 321.064453125},
                    title: "Agility Shortcut",
                    description: "Jump (75 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                },
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 52.61639023304539, "lng": 335.87402343750006},
                    title: "Agility Shortcut",
                    description: "Jump (75 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                },
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 19.559790136497412, "lng": 334.46777343750006},
                    title: "Agility Shortcut",
                    description: "Jump (75 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                },
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": -14.392118083661728, "lng": 349.18945312500006},
                    title: "Agility Shortcut",
                    description: "Jump (65 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                },
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 25.363882272740256, "lng": 363.29589843750006},
                    title: "Agility Shortcut",
                    description: "Jump (89 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                },
            ]
        }
    },
    {
        machine_name: 'goblin_cooks_room',
        full_name: 'Goblin Cook\'s Basement',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 24.80668135385199, "lng": 337.50000000000006},
        exits: [
            {
                label: 'To Goblin Village',
                position: {"lat": 28.07198030177986, "lng": 338.07128906250006},
                target_layer: "surface",
                target_layer_position: {"lat": 80.17590209883195, "lng": 299.80041503906256},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'falador_mole_cave',
        full_name: 'Falador Mole Cave',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 27.605670826465445, "lng": 332.66601562500006},
        exits: [
            {
                label: 'To Falador South',
                position: {"lat": -9.275622176792098, "lng": 329.41406250000006},
                target_layer: "surface",
                target_layer_position: {"lat": 78.59638534707328, "lng": 302.20092773437506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Falador Park',
                position: {"lat": 53.74871079689897, "lng": 328.27148437500006},
                target_layer: "surface",
                target_layer_position: {"lat": 78.59638534707328, "lng": 302.20092773437506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'lumbridge_basement',
        full_name: 'Lumbridge Basement',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 27.605670826465445, "lng": 332.66601562500006},
        exits: [
            {
                label: 'To Lumbridge Castle',
                position: {"lat": 25.403584973186703, "lng": 329.58984375000006},
                target_layer: "surface",
                target_layer_position: {"lat": 76.33892882834353, "lng": 316.1123657226563},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'essence_mine',
        full_name: 'Essence Mine',
        icon: require('../../static/icons/misc/Transportation_icon.png'),
        center_pos: {"lat": 25.005972656239187, "lng": 332.75390625000006},
        exits: [
            {
                label: 'Back out the way you came in',
                position: {"lat": 38.47939467327645, "lng": 348.53027343750006},
                target_layer: "surface",
                target_layer_position: {"lat": 78.89335256331809, "lng": 319.1143798828125},
                icon: require('../../static/icons/misc/Transportation_icon.png')
            },
            {
                label: 'Back out the way you came in',
                position: {"lat": 14.179186142354181, "lng": 349.27734375000006},
                target_layer: "surface",
                target_layer_position: {"lat": 78.89335256331809, "lng": 319.1143798828125},
                icon: require('../../static/icons/misc/Transportation_icon.png')
            },
            {
                label: 'Back out the way you came in',
                position: {"lat": 12.811801316582619, "lng": 318.20800781250006},
                target_layer: "surface",
                target_layer_position: {"lat": 78.89335256331809, "lng": 319.1143798828125},
                icon: require('../../static/icons/misc/Transportation_icon.png')
            },
            {
                label: 'Back out the way you came in',
                position: {"lat": 36.8092847020594, "lng": 314.78027343750006},
                target_layer: "surface",
                target_layer_position: {"lat": 78.89335256331809, "lng": 319.1143798828125},
                icon: require('../../static/icons/misc/Transportation_icon.png')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'wizards_tower_basement',
        full_name: 'Wizards Tower Basement',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 24.367113562651276, "lng": 332.13867187500006},
        exits: [
            {
                label: 'To Wizards Tower',
                position: {"lat": 30.41078179084589, "lng": 328.18359375000006},
                target_layer: "surface",
                target_layer_position: {"lat": 75.44479062156888, "lng": 309.1937255859375},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Essence Mine',
                position: {"lat": 27.916766641249065, "lng": 330.24902343750006},
                target_layer: "essence_mine",
                target_layer_position: {"lat": 78.89335256331809, "lng": 319.1143798828125},
                icon: require('../../static/icons/misc/Transportation_icon.png')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'asgarnian_ice_dungeon',
        full_name: 'Asgarnian Ice Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 23.28171917560003, "lng": 332.1826171875},
        exits: [
            {
                label: 'To Mudskipper Point',
                position: {"lat": 7.928674801364048, "lng": 317.68066406250006},
                target_layer: "surface",
                target_layer_position: {"lat": 75.24326541978712, "lng": 302.86010742187506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "positions": [
                    {
                        "lat": 5.965753671065536,
                        "lng": 305.41992187500006
                    },
                    {
                        "lat": 6.577303118123887,
                        "lng": 315.43945312500006
                    }
                ],
                "text": "Muggers",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 26.352497858154024,
                        "lng": 300.93750000000006
                    },
                    {
                        "lat": 27.059125784374068,
                        "lng": 313.41796875000006
                    }
                ],
                "text": "Pirates",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 27.371767300523047,
                        "lng": 318.69140625
                    },
                    {
                        "lat": 29.916852233070173,
                        "lng": 332.92968750000006
                    }
                ],
                "text": "Hobgoblins",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 29.99300228455108,
                        "lng": 342.15820312500006
                    },
                    {
                        "lat": 30.44867367928756,
                        "lng": 353.67187500000006
                    }
                ],
                "text": "Ice Warriors",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 26.27371402440643,
                        "lng": 341.63085937500006
                    },
                    {
                        "lat": 26.352497858154024,
                        "lng": 359.12109375000006
                    }
                ],
                "text": "Ice Giants",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 4.8282597468669755,
                        "lng": 331.87500000000006
                    },
                    {
                        "lat": 4.302591077119676,
                        "lng": 350.244140625
                    }
                ],
                "text": "Skeletal Wyverns",
                "fontSize": 30
            }
        ],
        icons: {}
    },
    {
        machine_name: 'draynor_manor_crypt',
        full_name: 'Draynor Manor Crypt',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 23.28171917560003, "lng": 332.1826171875},
        exits: [
            {
                label: 'To Draynor Manor',
                position: {"lat": 20.138470312451155, "lng": 332.53417968750006},
                target_layer: "surface",
                target_layer_position: {"lat": 78.3471918724007, "lng": 309.91333007812506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'draynor_manor_dungeon',
        full_name: 'Draynor Manor Basement',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 22.350075806124867, "lng": 334.77539062500006},
        exits: [
            {
                label: 'To Draynor Manor',
                position: {"lat": 21.53484700204879, "lng": 343.82812500000006},
                target_layer: "surface",
                target_layer_position: {"lat": 78.4102651631265, "lng": 308.39721679687506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'lumbridge_swamp_cave',
        full_name: 'Lumbridge Swamp Cave',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 25.958044673317843, "lng": 335.08300781250006},
        exits: [
            {
                label: 'To Lumbridge Swamp',
                position: {"lat": 27.371767300523047, "lng": 312.80273437500006},
                target_layer: "surface",
                target_layer_position: {"lat": 75.60611830430058, "lng": 313.48388671875006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "positions": [
                    {
                        "lat": 12.12526421833159,
                        "lng": 348.57421875000006
                    },
                    {
                        "lat": 11.86735091145932,
                        "lng": 360.87890625000006
                    }
                ],
                "text": "Giant Frog",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 37.57941251343841,
                        "lng": 348.134765625
                    },
                    {
                        "lat": 27.21555620902969,
                        "lng": 352.96875
                    }
                ],
                "text": "Rockslug",
                "fontSize": 30
            }
        ],
        icons: {}
    },
    {
        machine_name: 'stronghold_of_security_sepulchre_of_death',
        full_name: 'Stronghold of Security Layer (Pit of Pestilence)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 25.958044673317843, "lng": 335.08300781250006},
        exits: [
            {
                label: 'To Pit of Pestilence',
                position: {"lat": 39.50404070558415, "lng": 315.70312500000006},
                target_layer: "stronghold_of_security_pit_of_pestilence",
                target_layer_position: {"lat": 79.15377632309713, "lng": 307.67211914062506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Barbarian Village',
                position: {"lat": 24.766784522874453, "lng": 344.26757812500006},
                target_layer: "surface",
                target_layer_position: {"lat": 79.15377632309713, "lng": 307.67211914062506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'stronghold_of_security_pit_of_pestilence',
        full_name: 'Stronghold of Security Layer (Pit of Pestilence)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 25.958044673317843, "lng": 335.08300781250006},
        exits: [
            {
                label: 'To Catacomb of Famine',
                position: {"lat": 6.053161295714067, "lng": 320.09765625000006},
                target_layer: "stronghold_of_security_catacomb_of_famine",
                target_layer_position: {"lat": 79.15377632309713, "lng": 307.67211914062506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Sepulchre of Death',
                position: {"lat": 27.994401411046148, "lng": 337.41210937500006},
                target_layer: "stronghold_of_security_sepulchre_of_death",
                target_layer_position: {"lat": 79.15377632309713, "lng": 307.67211914062506},
                icon: require('../../static/icons/misc/Dungeon_icon.webp')
            },
            {
                label: 'To Barbarian Village',
                position: {"lat": 23.966175871265044, "lng": 338.99414062500006},
                target_layer: "surface",
                target_layer_position: {"lat": 79.15377632309713, "lng": 307.67211914062506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'stronghold_of_security_catacomb_of_famine',
        full_name: 'Stronghold of Security Layer (Catacomb of Famine)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 25.16517336866393, "lng": 337.67578125},
        exits: [
            {
                label: 'To Vault of War',
                position: {"lat": 42.35854391749705, "lng": 353.23242187500006},
                target_layer: "stronghold_of_security_vault_of_war",
                target_layer_position: {"lat": 79.15377632309713, "lng": 307.67211914062506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Pit of Pestilence',
                position: {"lat": 26.745610382199022, "lng": 341.45507812500006},
                target_layer: "stronghold_of_security_pit_of_pestilence",
                target_layer_position: {"lat": 79.15377632309713, "lng": 307.67211914062506},
                icon: require('../../static/icons/misc/Dungeon_icon.webp')
            },
            {
                label: 'To Barbarian Village',
                position: {"lat": 21.453068633086783, "lng": 335.21484375000006},
                target_layer: "surface",
                target_layer_position: {"lat": 79.15377632309713, "lng": 307.67211914062506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'stronghold_of_security_vault_of_war',
        full_name: 'Stronghold of Security Layer (Vault of War)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 25.958044673317843, "lng": 331.52343750000006},
        exits: [
            {
                label: 'To Barbarian Village',
                position: {"lat": 41.57436130598913, "lng": 313.9453125},
                target_layer: "surface",
                target_layer_position: {"lat": 79.15377632309713, "lng": 307.67211914062506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Catacomb of Famine',
                position: {"lat": 29.22889003019423, "lng": 344.17968750000006},
                target_layer: "stronghold_of_security_catacomb_of_famine",
                target_layer_position: {"lat": 79.15377632309713, "lng": 307.67211914062506},
                icon: require('../../static/icons/misc/Dungeon_icon.webp')
            },
            {
                label: 'To Barbarian Village',
                position: {"lat": 31.50362930577303, "lng": 352.353515625},
                target_layer: "surface",
                target_layer_position: {"lat": 79.15377632309713, "lng": 307.67211914062506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'misthalin_mystery',
        full_name: 'Misthalin Mystery Manor',
        icon: require('../../static/icons/misc/Transportation_icon.png'),
        center_pos: {"lat": 19.89072302399691, "lng": 326.25000000000006},
        exits: [
            {
                label: 'To Lumbridge Swamp',
                position: {"lat": 10.919617760254697, "lng": 325.89843750000006},
                target_layer: "surface",
                target_layer_position: {"lat": 75.09139350771163, "lng": 318.0844116210938},
                icon: require('../../static/icons/misc/Transportation_icon.png')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'zanaris',
        full_name: 'Zanaris',
        icon: require('../../static/icons/misc/Map_link_icon.webp'),
        center_pos: {"lat": 37.30027528134433, "lng": 330.46875000000006},
        exits: [
            {
                label: 'To Lumbridge Swamp',
                position: {"lat": -500.864254615721396, "lng": 238.71093750000003},
                target_layer: "surface",
                target_layer_position: {"lat": 75.56441072170146, "lng": 315.7553100585938},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "positions": [
                    {
                        "lat": 9.96885060854611,
                        "lng": 278.61328125000006
                    },
                    {
                        "lat": 5.090944175033399,
                        "lng": 298.65234375000006
                    }
                ],
                "text": "Tangle feet",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 3.162455530237848,
                        "lng": 307.96875000000006
                    },
                    {
                        "lat": -5.266007882805498,
                        "lng": 320.62500000000006
                    }
                ],
                "text": "Cosmic Altar",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 38.41055825094609,
                        "lng": 356.48437500000006
                    },
                    {
                        "lat": 44.213709909702054,
                        "lng": 370.1953125
                    }
                ],
                "text": "Market",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 34.88593094075317,
                        "lng": 333.10546875000006
                    },
                    {
                        "lat": 29.38217507514529,
                        "lng": 344.35546875000006
                    }
                ],
                "text": "Throne Room",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 59.17592824927138,
                        "lng": 337.14843750000006
                    },
                    {
                        "lat": 58.63121664342478,
                        "lng": 350.5078125
                    }
                ],
                "text": "Shrine",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 46.195042108660154,
                        "lng": 317.98828125000006
                    },
                    {
                        "lat": 43.068887774169625,
                        "lng": 333.10546875000006
                    }
                ],
                "text": "Puro-puro",
                "fontSize": 30
            }
        ],
        icons: {}
    },
    {
        machine_name: 'edgeville_dungeon_and_varrock_sewers',
        full_name:
            'Edgeville dungeon and Varrock sewers',
        icon:
            require('../../static/icons/misc/Dungeon_icon.webp'),
        icon_scale:
            1.2,
        center_pos:
            {
                "lat":
                    45.706179285330855, "lng":
                    332.05078125000006
            }
        ,
        exits: [
            {
                label: 'To Edgeville',
                position: {"lat": 6.664607562172573, "lng": 278.87695312500006},
                target_layer: "surface",
                target_layer_position: {"lat": 79.74553248351053, "lng": 308.73229980468756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Varrock East',
                position: {"lat": -0.3515602939922709, "lng": 377.05078125},
                target_layer: "surface",
                target_layer_position: {"lat": 79.61613848377318, "lng": 317.96630859375006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Varrock Bear Cage',
                position: {"lat": 30.524413269923986, "lng": 372.65625000000006},
                target_layer: "surface",
                target_layer_position: {"lat": 80.14915404852314, "lng": 317.49389648437506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To hut west of Varrock',
                position: {"lat": -5.00339434502215, "lng": 291.97265625000006},
                target_layer: "surface",
                target_layer_position: {"lat": 79.5446087817067, "lng": 309.98474121093756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Air Obelisk',
                position: {"lat": 61.73152565113397, "lng": 272.72460937500006},
                target_layer: "surface",
                target_layer_position: {"lat": 80.87718298659169, "lng": 308.13354492187506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels:
            [
                {
                    "positions": [
                        {
                            "lat": 69.90011762668541,
                            "lng": 283.35937500000006
                        },
                        {
                            "lat": 67.60922060496382,
                            "lng": 311.83593750000006
                        }
                    ],
                    "text": "Earth Warriors",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": 58.263287052486035,
                            "lng": 266.13281250000006
                        },
                        {
                            "lat": 58.63121664342478,
                            "lng": 280.89843750000006
                        }
                    ],
                    "text": "Black Demons",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": 55.3791104480105,
                            "lng": 263.67187500000006
                        },
                        {
                            "lat": 54.16243396806781,
                            "lng": 281.07421875000006
                        }
                    ],
                    "text": "Poison Spiders",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": 50.401515322782366,
                            "lng": 263.84765625000006
                        },
                        {
                            "lat": 47.040182144806664,
                            "lng": 278.26171875000006
                        }
                    ],
                    "text": "Chronozon",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": 57.610107020683905,
                            "lng": 289.33593750000006
                        },
                        {
                            "lat": 55.47885346331036,
                            "lng": 304.1015625
                        }
                    ],
                    "text": "Red spiders",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": 45.336701909968134,
                            "lng": 294.43359375000006
                        },
                        {
                            "lat": 44.84029065139799,
                            "lng": 310.78125000000006
                        }
                    ],
                    "text": "Thugs",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": 24.84656534821976,
                            "lng": 288.80859375000006
                        },
                        {
                            "lat": 24.5271348225978,
                            "lng": 302.34375000000006
                        }
                    ],
                    "text": "Skeletons",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": 21.94304553343818,
                            "lng": 286.87500000000006
                        },
                        {
                            "lat": 21.12549763660629,
                            "lng": 301.640625
                        }
                    ],
                    "text": "Zombies",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": 3.337953961416485,
                            "lng": 287.05078125000006
                        },
                        {
                            "lat": 3.162455530237848,
                            "lng": 302.34375000000006
                        }
                    ],
                    "text": "Hobgoblins",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": -13.752724664396988,
                            "lng": 277.20703125000006
                        },
                        {
                            "lat": -16.13026201203474,
                            "lng": 301.46484375
                        }
                    ],
                    "text": "Hill Giants",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": 34.74161249883172,
                            "lng": 317.37304687500006
                        },
                        {
                            "lat": 27.839076094777816,
                            "lng": 327.21679687500006
                        }
                    ],
                    "text": "Moss Giants",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": 14.774882506516272,
                            "lng": 323.17382812500006
                        },
                        {
                            "lat": 16.3833911236084,
                            "lng": 336.35742187500006
                        }
                    ],
                    "text": "Moss Giants",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": 20.632784250388028,
                            "lng": 332.05078125000006
                        },
                        {
                            "lat": 18.312810846425457,
                            "lng": 347.783203125
                        }
                    ],
                    "text": "Red Spiders",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": 5.266007882805498,
                            "lng": 372.216796875
                        },
                        {
                            "lat": 6.227933930268672,
                            "lng": 389.267578125
                        }
                    ],
                    "text": "Rats",
                    "fontSize": 30
                }
            ],
        icons:
            {
                agility_shortcuts: [
                    {
                        iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                        className: Categories.AGILITY_SHORTCUT,
                        position: {"lat": 30.90222470517144, "lng": 318.29589843750006},
                        title: "Agility Shortcut",
                        description: "Pipe Squeeze (51 Agility)",
                        category: Categories.AGILITY_SHORTCUT
                    },
                ]
            }
    },
    {
        machine_name: 'dwarven_mine',
        full_name:
            'Dwarven Mine',
        icon:
            require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos:
            {
                "lat":
                    31.27855085894653, "lng":
                    342.42187500000006
            }
        ,
        exits: [
            {
                label: 'To Dwarven Mine Entrance',
                position: {"lat": 61.438767493682825, "lng": 330.99609375},
                target_layer: "surface",
                target_layer_position: {"lat": 79.52265545122708, "lng": 303.53027343750006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Falador Entrance',
                position: {"lat": 25.3241665257384, "lng": 359.56054687500006},
                target_layer: "surface",
                target_layer_position: {"lat": 78.60724128404506, "lng": 306.221923828125},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Mining Guild Entrance',
                position: {"lat": 0.17578097424708533, "lng": 330.64453125000006},
                target_layer: "surface",
                target_layer_position: {"lat": 78.10339245316887, "lng": 303.58795166015625},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            }
        ],
        map_labels:
            [
                {
                    "positions": [
                        {
                            "lat": -13.581920900545844,
                            "lng": 330.11718750000006
                        },
                        {
                            "lat": 5.61598581915534,
                            "lng": 353.67187500000006
                        }
                    ],
                    "text": "Mining Guild",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": 27.52775820686191,
                            "lng": 343.65234375000006
                        },
                        {
                            "lat": 27.994401411046148,
                            "lng": 356.30859375000006
                        }
                    ],
                    "text": "Scorpions",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": 48.80686346108519,
                            "lng": 288.10546875000006
                        },
                        {
                            "lat": 42.293564192170095,
                            "lng": 306.73828125000006
                        }
                    ],
                    "text": "Hammerspikes' Hangout",
                    "fontSize": 30
                }
            ],
        icons:
            {
                agility_shortcuts: [
                    {
                        iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                        className: Categories.AGILITY_SHORTCUT,
                        position: {"lat": 42.68243539838623, "lng": 342.20214843750006},
                        title: "Agility Shortcut",
                        description: "Wall Crevice (42 Agility)",
                        category: Categories.AGILITY_SHORTCUT
                    },
                ]
            }
    },
    {
        machine_name: 'motherlode_mine',
        full_name:
            'Motherlode Mine',
        icon:
            require('../../static/icons/misc/Dungeon_icon.webp'),
        icon_scale:
            1.2,
        center_pos:
            {
                "lat":
                    26.745610382199022, "lng":
                    334.86328125000006
            }
        ,
        exits: [
            {
                label: 'To Dwarven Mine',
                position: {"lat": 42.22851735620852, "lng": 323.26171875000006},
                target_layer: "dwarven_mine",
                target_layer_position: {"lat": 17.476432197195518, "lng": 359.736328125},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Dwarven Mine (Mining Guild)',
                position: {"lat": 33.797408767572485, "lng": 315.43945312500006},
                target_layer: "dwarven_mine",
                target_layer_position: {"lat": 3.6888551431470478, "lng": 356.96777343750006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels:
            [],
        icons:
            {
                agility_shortcuts: [
                    {
                        iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                        className: Categories.AGILITY_SHORTCUT,
                        position: {"lat": 29.075375179558346, "lng": 345.01464843750006},
                        title: "Agility Shortcut",
                        description: "Wall shortcut (54 Agility)\nRequires Falador Medium Diary",
                        category: Categories.AGILITY_SHORTCUT
                    },
                    {
                        iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                        className: Categories.AGILITY_SHORTCUT,
                        position: {"lat": 29.726222319395504, "lng": 349.2333984375},
                        title: "Agility Shortcut",
                        description: "Wall shortcut (54 Agility)\nRequires Falador Medium Diary",
                        category: Categories.AGILITY_SHORTCUT
                    },
                ]
            }
    },
    {
        machine_name: 'taverly_dungeon',
        full_name:
            'Taverly Dungeon',
        icon:
            require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos:
            {
                "lat":
                    70.4367988185464, "lng":
                    298.82812500000006
            }
        ,
        exits: [
            {
                label: 'To Taverly',
                position: {"lat": 45.920587344733654, "lng": 331.43554687500006},
                target_layer: "surface",
                target_layer_position: {"lat": 78.86527580679268, "lng": 294.69177246093756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            }
        ],
        map_labels:
            [
                {
                    "positions": [
                        {
                            "lat": 44.465151013519645,
                            "lng": 292.32421875000006
                        },
                        {
                            "lat": 35.746512259918504,
                            "lng": 320.80078125000006
                        }
                    ],
                    "text": "Black Demons",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": 49.03786794532644,
                            "lng": 341.01562500000006
                        },
                        {
                            "lat": 40.84706035607122,
                            "lng": 360
                        }
                    ],
                    "text": "Blue Dragons",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": 21.12549763660629,
                            "lng": 351.21093750000006
                        },
                        {
                            "lat": 34.30714385628804,
                            "lng": 363.51562500000006
                        }
                    ],
                    "text": "Chaos Dwarves",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": 44.84029065139799,
                            "lng": 380.21484375000006
                        },
                        {
                            "lat": 32.39851580247402,
                            "lng": 390.41015625000006
                        }
                    ],
                    "text": "Magic Axes",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": 12.382928338487396,
                            "lng": 352.79296875
                        },
                        {
                            "lat": 28.14950321154457,
                            "lng": 373.35937500000006
                        }
                    ],
                    "text": "Poisonous Scorpions",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": 9.795677582829743,
                            "lng": 339.08203125000006
                        },
                        {
                            "lat": 3.6888551431470478,
                            "lng": 356.13281250000006
                        }
                    ],
                    "text": "Hill Giants",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": -7.536764322084078,
                            "lng": 335.91796875
                        },
                        {
                            "lat": -30.29701788337204,
                            "lng": 357.71484375
                        }
                    ],
                    "text": "Black Knights' Base",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": 54.470037612805754,
                            "lng": 301.640625
                        },
                        {
                            "lat": 50.17689812200107,
                            "lng": 326.60156250000006
                        }
                    ],
                    "text": "Poison Spiders",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": 48.922499263758255,
                            "lng": 280.89843750000006
                        },
                        {
                            "lat": 54.67383096593114,
                            "lng": 300.76171875000006
                        }
                    ],
                    "text": "Monks of Zamorak",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": 58.44773280389084,
                            "lng": 291.79687500000006
                        },
                        {
                            "lat": 59.085738569819505,
                            "lng": 307.96875000000006
                        }
                    ],
                    "text": "Black Dragons",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": 61.01572481397616,
                            "lng": 309.72656250000006
                        },
                        {
                            "lat": 66.23145747862573,
                            "lng": 320.44921875000006
                        }
                    ],
                    "text": "Hell Hounds",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": 68.26938680456567,
                            "lng": 358.85742187500006
                        },
                        {
                            "lat": 63.704722429433225,
                            "lng": 374.23828125000006
                        }
                    ],
                    "text": "Chaos Druids",
                    "fontSize": 30
                }
            ],
        icons:
            {
                agility_shortcuts: [
                    {
                        iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                        className: Categories.AGILITY_SHORTCUT,
                        position: {"lat": 53.46189043285914, "lng": 327.4365234375},
                        title: "Agility Shortcut",
                        description: "Jump floor trap (80 Agility)",
                        category: Categories.AGILITY_SHORTCUT
                    },
                    {
                        iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                        className: Categories.AGILITY_SHORTCUT,
                        position: {"lat": 57.444949435839845, "lng": 334.42382812500006},
                        title: "Agility Shortcut",
                        description: "Pipe Squeeze (70 Agility)",
                        category: Categories.AGILITY_SHORTCUT
                    },
                    {
                        iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                        className: Categories.AGILITY_SHORTCUT,
                        position: {"lat": 46.73986059969267, "lng": 333.76464843750006},
                        title: "Agility Shortcut",
                        description: "Pipe Squeeze (70 Agility)",
                        category: Categories.AGILITY_SHORTCUT
                    },
                    {
                        iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                        className: Categories.AGILITY_SHORTCUT,
                        position: {"lat": 52.61639023304539, "lng": 368.21777343750006},
                        title: "Agility Shortcut",
                        description: "Fence Squeeze (63 Agility)",
                        category: Categories.AGILITY_SHORTCUT
                    },
                ]
            }
    },
    {
        machine_name: 'draynor_sewer',
        full_name:
            'Draynor Sewer',
        icon:
            require('../../static/icons/misc/Dungeon_icon.webp'),
        icon_scale:
            1.2,
        center_pos:
            {
                "lat":
                    45.706179285330855, "lng":
                    332.05078125000006
            }
        ,
        exits: [
            {
                label: 'To North of Draynor Market',
                position: {"lat": 25.24469595130604, "lng": 320.62500000000006},
                target_layer: "surface",
                target_layer_position: {"lat": 77.157162522661, "lng": 307.86987304687506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Outside of Jail',
                position: {"lat": 5.878332109674327, "lng": 344.44335937500006},
                target_layer: "surface",
                target_layer_position: {"lat": 76.73913726028553, "lng": 310.11657714843756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels:
            [
                {
                    "positions": [
                        {
                            "lat": 6.577303118123887,
                            "lng": 341.71875000000006
                        },
                        {
                            "lat": 14.26438308756265,
                            "lng": 351.38671875000006
                        }
                    ],
                    "text": "Zombies",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": 26.82407078047018,
                            "lng": 331.34765625000006
                        },
                        {
                            "lat": 23.725011735951796,
                            "lng": 349.98046875
                        }
                    ],
                    "text": "Skeletons",
                    "fontSize": 30
                },
                {
                    "positions": [
                        {
                            "lat": 23.40276490540795,
                            "lng": 321.15234375
                        },
                        {
                            "lat": 28.38173504322311,
                            "lng": 331.34765625000006
                        }
                    ],
                    "text": "Zombies",
                    "fontSize": 30
                }
            ],
        icons:
            {
                agility_shortcuts: []
            }
    },
    ]
;