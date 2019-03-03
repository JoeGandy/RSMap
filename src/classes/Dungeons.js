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
    //Dorgeshuun Mine
    //Tears of guthix cavern
    {
        machine_name: 'lumbridge_swamp_cave',
        full_name: 'Lumbridge Swamp Cave',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat":25.958044673317843,"lng":335.08300781250006},
        exits: [
            {
                label: 'To Lumbridge Swamp',
                position: {"lat":27.371767300523047,"lng":312.80273437500006},
                target_layer: "surface",
                target_layer_position: {"lat":75.60611830430058,"lng":313.48388671875006},
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
        center_pos: {"lat":25.958044673317843,"lng":335.08300781250006},
        exits: [
            {
                label: 'To Pit of Pestilence',
                position: {"lat":39.50404070558415,"lng":315.70312500000006},
                target_layer: "stronghold_of_security_pit_of_pestilence",
                target_layer_position: {"lat": 79.15377632309713, "lng": 307.67211914062506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Barbarian Village',
                position: {"lat":24.766784522874453,"lng":344.26757812500006},
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
        center_pos: {"lat":25.958044673317843,"lng":335.08300781250006},
        exits: [
            {
                label: 'To Catacomb of Famine',
                position: {"lat":6.053161295714067,"lng":320.09765625000006},
                target_layer: "stronghold_of_security_catacomb_of_famine",
                target_layer_position: {"lat": 79.15377632309713, "lng": 307.67211914062506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Sepulchre of Death',
                position: {"lat":27.994401411046148,"lng":337.41210937500006},
                target_layer: "stronghold_of_security_sepulchre_of_death",
                target_layer_position: {"lat": 79.15377632309713, "lng": 307.67211914062506},
                icon: require('../../static/icons/misc/Dungeon_icon.webp')
            },
            {
                label: 'To Barbarian Village',
                position: {"lat":23.966175871265044,"lng":338.99414062500006},
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
        center_pos: {"lat":25.16517336866393,"lng":337.67578125},
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
                position: {"lat":26.745610382199022,"lng":341.45507812500006},
                target_layer: "stronghold_of_security_pit_of_pestilence",
                target_layer_position: {"lat": 79.15377632309713, "lng": 307.67211914062506},
                icon: require('../../static/icons/misc/Dungeon_icon.webp')
            },
            {
                label: 'To Barbarian Village',
                position: {"lat":21.453068633086783,"lng":335.21484375000006},
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
                position: {"lat":31.50362930577303,"lng":352.353515625},
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