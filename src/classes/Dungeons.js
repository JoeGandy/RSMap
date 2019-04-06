import {
    Categories,
    IconBaseClass
} from "./IconBaseClass";
import {
    types
} from "./Icons";
import React from "react";
import {questSkill} from "./IconTypes/Quests";


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

export function getAllDungeonNames() {
    console.clear();
    let string = "";
    for (let dungeon of Dungeons) {
        string += "\n" + dungeon.machine_name;
    }
    console.log(string);
}


export function getDungeonCenter(dungeon_name) {
    for (let dungeon of Dungeons) {
        if (dungeon.machine_name === dungeon_name) {
            return dungeon.center_pos;
        }
    }
}

/*

    {
        machine_name: 'warriors_guild_basement',
        full_name: 'Warriors Guild Basement',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat":23.200960808078566,"lng":335.74218750000006},
        exits: [
            {
                label: 'To Warriors guild',
                position: {"lat":25.48295117535531,"lng":324.66796875000006},
                target_layer: "surface",
                target_layer_position: {"lat":80.56724664616632,"lng":291.32995605468756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },

 */
//
export const Dungeons = [
    {
        machine_name: 'mournings_end_dungeon_2',
        full_name: 'Template of Light (Third Level)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat":3.337953961416485,"lng":358.41796875000006},
        exits: [
            {
                label: 'To Template of Light (Second Level)',
                position: {"lat":9.44906182688142,"lng":361.23046875000006},
                target_layer: "mournings_end_dungeon_1",
                target_layer_position: {"lat":9.622414142924818,"lng":361.23046875000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Template of Light (Second Level)',
                position: {"lat":-3.162455530237848,"lng":360.87890625000006},
                target_layer: "mournings_end_dungeon_1",
                target_layer_position: {"lat":-3.337953961416472,"lng":360.70312500000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Template of Light (Second Level)',
                position: {"lat":40.04443758460859,"lng":370.54687500000006},
                target_layer: "mournings_end_dungeon_1",
                target_layer_position: {"lat":40.04443758460859,"lng":370.54687500000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Template of Light (Second Level)',
                position: {"lat":-34.88593094075316,"lng":370.72265625000006},
                target_layer: "mournings_end_dungeon_1",
                target_layer_position: {"lat":-34.88593094075316,"lng":370.72265625000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Template of Light (Second Level)',
                position: {"lat":28.613459424004414,"lng":364.04296875000006},
                target_layer: "mournings_end_dungeon_1",
                target_layer_position: {"lat":28.613459424004414,"lng":364.04296875000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Template of Light (Second Level)',
                position: {"lat":-22.75592068148639,"lng":362.8125},
                target_layer: "mournings_end_dungeon_1",
                target_layer_position: {"lat":-22.75592068148639,"lng":362.8125},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            }
        ],
        map_labels: [],
        icons: {
            agility_shortcuts: [
            ]
        }
    },
    {
        machine_name: 'mournings_end_dungeon_1',
        full_name: 'Template of Light (Second Level)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat":3.337953961416485,"lng":358.41796875000006},
        exits: [
            {
                label: 'To Mourners\' Tunnels and Temple of Light',
                position: {"lat":3.5134210456400448,"lng":378.28125000000006},
                target_layer: "mourner_hq_dungeon_and_template_of_light_1",
                target_layer_position: {"lat":2.4601811810210052,"lng":287.05078125000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Mourners\' Tunnels and Temple of Light',
                position: {"lat":3.6888551431470478,"lng":356.13281250000006},
                target_layer: "mourner_hq_dungeon_and_template_of_light_1",
                target_layer_position: {"lat":3.162455530237848,"lng":266.13281250000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            }
        ],
        map_labels: [],
        icons: {
            agility_shortcuts: [
            ]
        }
    },
    {
        machine_name: 'mourner_hq_dungeon_and_template_of_light_1',
        full_name: 'Mourners\' Tunnels and Temple of Light',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat":2.986927393334876,"lng":368.43750000000006},
        exits: [
            {
                label: 'To Mourners Hideout',
                position: {"lat":16.97274101999902,"lng":483.92578125000006},
                target_layer: "surface",
                target_layer_position: {"lat":77.90876704390809,"lng":272.23022460937506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            }
        ],
        map_labels: [
            {
                "position": {
                    "lat": 30.90222470517144,
                    "lng": 413.08593750000006
                },
                "title": "Dark<br/>Beasts",
                "description": null
            },
            {
                "position": {
                    "lat": -19.642587534013032,
                    "lng": 442.08984375000006
                },
                "title": "Dark Beasts",
                "description": null
            },
            {
                "position": {
                    "lat": 32.99023555965106,
                    "lng": 463.35937500000006
                },
                "title": "Dark<br/>Beasts",
                "description": null
            }
        ],
        icons: {
            agility_shortcuts: [
            ]
        }
    },
    {
        machine_name: 'myths_guild_basement_1',
        full_name: 'Corsair Cove Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -32.842673631954305, "lng": 345.41015625},
        exits: [
            {
                label: 'To North Entrance',
                position: {"lat": 19.311143355064655, "lng": 349.98046875},
                target_layer: "surface",
                target_layer_position: {"lat": 70.2055755505951, "lng": 268.25866699218756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To East Entrance',
                position: {"lat": -21.12549763660628, "lng": 407.63671875000006},
                target_layer: "surface",
                target_layer_position: {"lat": 69.52395146540032, "lng": 270.89538574218756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Island South of Myths\' Guild',
                position: {"lat": -61.01572481397616, "lng": 300.41015625000006},
                target_layer: "surface",
                target_layer_position: {"lat": 68.53426631064977, "lng": 265.7510375976563},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Myths\' Guild',
                position: {"lat": -15.792253570362446, "lng": 301.99218750000006},
                target_layer: "surface",
                target_layer_position: {"lat": 69.20550391636529, "lng": 266.53930664062506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {
            agility_shortcuts: [
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat":-33.137551192346145,"lng":364.04296875000006},
                    title: "Agility Shortcut",
                    description: "Pillar Jump (Level 15)",
                    category: Categories.AGILITY_SHORTCUT
                },
            ]
        }
    },
    {
        machine_name: 'dk_lair',
        full_name: 'Dagannoth Kings\' Lair',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 5.266007882805498, "lng": 358.94531250000006},
        exits: [
            {
                label: 'To Waterbirth Island Dungeon (Fifth Level)',
                position: {"lat": 6.140554782450308, "lng": 337.67578125},
                target_layer: "waterbith_dungeon_0",
                target_layer_position: {"lat": 3.162455530237848, "lng": 400.07812500000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            }
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'waterbith_dungeon_0',
        full_name: 'Waterbirth Island Dungeon (Fifth Level)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -4.039617826768424, "lng": 361.40625000000006},
        exits: [
            {
                label: 'To Waterbirth Island Dungeon (Fourth Level)',
                position: {"lat": 51.50874245880335, "lng": 371.25000000000006},
                target_layer: "waterbith_dungeon_1",
                target_layer_position: {"lat": 52.05249047600099, "lng": 370.1953125},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Waterbirth Island Dungeon (Fourth Level)',
                position: {"lat": 8.754794702435618, "lng": 465.46875},
                target_layer: "waterbith_dungeon_1",
                target_layer_position: {"lat": 11.523087506868514, "lng": 465.99609375000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            }
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'waterbith_dungeon_1',
        full_name: 'Waterbirth Island Dungeon (Fourth Level)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -4.039617826768424, "lng": 361.40625000000006},
        exits: [
            {
                label: 'To Waterbirth Island Dungeon (Third Level)',
                position: {"lat": 37.99616267972814, "lng": 258.75000000000006},
                target_layer: "waterbith_dungeon_2",
                target_layer_position: {"lat": 38.272688535980976, "lng": 257.34375000000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Waterbirth Island Dungeon (Third Level)',
                position: {"lat": 30.44867367928756, "lng": 243.28125000000003},
                target_layer: "waterbith_dungeon_2",
                target_layer_position: {"lat": 30.44867367928756, "lng": 242.75390625000003},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Waterbirth Island Dungeon (Third Level)',
                position: {"lat": 23.40276490540795, "lng": 242.22656250000003},
                target_layer: "waterbith_dungeon_2",
                target_layer_position: {"lat": 23.07973176244989, "lng": 241.34765625000003},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Waterbirth Island Dungeon (Third Level)',
                position: {"lat": 5.61598581915534, "lng": 248.20312500000003},
                target_layer: "waterbith_dungeon_2",
                target_layer_position: {"lat": 6.489983332670651, "lng": 246.09375000000003},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Waterbirth Island Dungeon (Third Level)',
                position: {"lat": -4.039617826768424, "lng": 282.83203125000006},
                target_layer: "waterbith_dungeon_2",
                target_layer_position: {"lat": -3.864254615721396, "lng": 281.60156250000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Waterbirth Island Dungeon (Third Level)',
                position: {"lat": 8.928487062665504, "lng": 332.40234375000006},
                target_layer: "waterbith_dungeon_2",
                target_layer_position: {"lat": 8.754794702435618, "lng": 333.45703125},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Waterbirth Island Dungeon (Third Level)',
                position: {"lat": 31.203404950917395, "lng": 334.68750000000006},
                target_layer: "waterbith_dungeon_2",
                target_layer_position: {"lat": 31.203404950917395, "lng": 334.68750000000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Waterbirth Island Dungeon (Third Level)',
                position: {"lat": 17.476432197195518, "lng": 429.43359375000006},
                target_layer: "waterbith_dungeon_2",
                target_layer_position: {"lat": 19.476950206488414, "lng": 429.78515625000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Waterbirth Island Dungeon (Third Level)',
                position: {"lat": 28.304380682962783, "lng": 314.47265625000006},
                target_layer: "waterbith_dungeon_2",
                target_layer_position: {"lat": 28.304380682962783, "lng": 314.47265625000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            }
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'waterbith_dungeon_2',
        full_name: 'Waterbirth Island Dungeon (Third Level)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -4.039617826768424, "lng": 361.40625000000006},
        exits: [
            {
                label: 'To Waterbirth Island Dungeon (Second Level)',
                position: {"lat": 48.45835188280866, "lng": 256.64062500000006},
                target_layer: "waterbith_dungeon_3",
                target_layer_position: {"lat": 49.15296965617042, "lng": 255.23437500000003},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Waterbirth Island Dungeon (Second Level)',
                position: {"lat": 48.69096039092552, "lng": 276.67968750000006},
                target_layer: "waterbith_dungeon_3",
                target_layer_position: {"lat": 48.45835188280866, "lng": 278.08593750000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Waterbirth Island Dungeon (Second Level)',
                position: {"lat": 30.44867367928756, "lng": 291.26953125000006},
                target_layer: "waterbith_dungeon_3",
                target_layer_position: {"lat": 33.578014746144014, "lng": 291.97265625000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Waterbirth Island Dungeon (Second Level)',
                position: {"lat": 21.12549763660629, "lng": 278.78906250000006},
                target_layer: "waterbith_dungeon_3",
                target_layer_position: {"lat": 21.616579336740603, "lng": 278.43750000000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Waterbirth Island Dungeon (Second Level)',
                position: {"lat": 15.961329081596647, "lng": 298.12500000000006},
                target_layer: "waterbith_dungeon_3",
                target_layer_position: {"lat": 15.961329081596647, "lng": 298.12500000000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'waterbith_dungeon_3',
        full_name: 'Waterbirth Island Dungeon (Second Level)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -4.039617826768424, "lng": 361.40625000000006},
        exits: [
            {
                label: 'To Waterbirth Island Dungeon (Main Level)',
                position: {"lat": 49.724479188712984, "lng": 242.05078125000003},
                target_layer: "waterbirth_island_level_1",
                target_layer_position: {"lat": 2.8113711933311403, "lng": 427.67578125000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Lighthouse (One way)',
                position: {"lat": 52.26815737376817, "lng": 491.48437500000006},
                target_layer: "lighthouse_dungeon",
                target_layer_position: {"lat": -50002.8113711933311403, "lng": 427.67578125000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'waterbirth_island_level_1',
        full_name: 'Waterbirth Island Dungeon (Main Level)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -4.039617826768424, "lng": 361.40625000000006},
        exits: [
            {
                label: 'To Waterbirth Island',
                position: {"lat": 7.36246686553575, "lng": 277.55859375000006},
                target_layer: "surface",
                target_layer_position: {"lat": 82.48333497678894, "lng": 270.76354980468756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Waterbirth Island',
                position: {"lat": 3.162455530237848, "lng": 422.40234375000006},
                target_layer: "surface",
                target_layer_position: {"lat": 82.49195309085279, "lng": 272.20825195312506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'gnome_stronghold_quest_0',
        full_name: 'The Eyes of Glouphrie Cave',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -4.039617826768424, "lng": 361.40625000000006},
        exits: [{
            label: 'To Tree Gnome Stronghold',
            position: {"lat": -2.460181181020993, "lng": 380.56640625000006},
            target_layer: "surface",
            target_layer_position: {"lat": 79.14240007236909, "lng": 263.00170898437506},
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [],
        icons: {
            quests: [
                {
                    title: "The Eyes of Glouphrie",
                    iconUrl: require('../../static/icons/misc/Quest_start_icon.png'),
                    className: Categories.QUESTS,
                    position: {"lat": 2.986927393334876, "lng": 379.6875},
                    difficulty: "Intermediate",
                    length: "Medium",
                    quest_points: 2,
                    quests_required: [
                        "The Grand Tree"
                    ],
                    skills_required: [
                        questSkill(5, "Construction"),
                        questSkill(46, "Magic"),
                        questSkill(45, "Woodcutting", true),
                        questSkill(50, "Firemaking", true)

                    ],
                    full_guide: "https://oldschool.runescape.wiki/w/The_Eyes_of_Glouphrie",
                    category: Categories.QUESTS
                },
            ]
        }
    },
    {
        machine_name: 'woodcutting_guild_dungeon',
        full_name: 'Woodcutting Guild Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -4.039617826768424, "lng": 361.40625000000006},
        exits: [{
            label: 'To Woodcutting Guild',
            position: {"lat": 20.797201434307, "lng": 396.38671875000006},
            target_layer: "surface",
            target_layer_position: {"lat": 80.1955651585234, "lng": 210.32226562500003},
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'shayzien_crypts_1',
        full_name: 'Shayzian Crypts (Lower)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 4.390228926463396, "lng": 356.66015625000006},
        exits: [
            {
                label: 'To Shayzian Crypts (Upper)',
                position: {"lat": 38.272688535980976, "lng": 342.42187500000006},
                target_layer: "shayzien_crypts_2",
                target_layer_position: {"lat": 38.272688535980976, "lng": 366.50390625000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Shayzian Crypts (Upper)',
                position: {"lat": 39.232253141714914, "lng": 365.44921875000006},
                target_layer: "shayzien_crypts_2",
                target_layer_position: {"lat": 38.685509760012025, "lng": 346.28906250000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Shayzian Crypts (Upper)',
                position: {"lat": 1.4061088354351594, "lng": 322.03125000000006},
                target_layer: "shayzien_crypts_2",
                target_layer_position: {"lat": 1.5818302639606454, "lng": 321.85546875000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Shayzian Crypts (Upper)',
                position: {"lat": 1.5818302639606454, "lng": 390.05859375000006},
                target_layer: "shayzien_crypts_2",
                target_layer_position: {"lat": 2.28455066023697, "lng": 390.05859375000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'shayzien_crypts_2',
        full_name: 'Shayzian Crypts (Middle)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 4.390228926463396, "lng": 356.66015625000006},
        exits: [
            {
                label: 'To Shayzian Crypts (Upper)',
                position: {"lat": -29.22889003019423, "lng": 355.60546875000006},
                target_layer: "shayzien_crypts_3",
                target_layer_position: {"lat": -28.92163128242129, "lng": 356.13281250000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Shayzian Crypts (Upper)',
                position: {"lat": 25.16517336866393, "lng": 385.66406250000006},
                target_layer: "shayzien_crypts_3",
                target_layer_position: {"lat": 24.5271348225978, "lng": 385.83984375000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Shayzian Crypts (Upper)',
                position: {"lat": -21.779905342529634, "lng": 327.12890625000006},
                target_layer: "shayzien_crypts_3",
                target_layer_position: {"lat": -21.12549763660628, "lng": 328.18359375000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'shayzien_crypts_3',
        full_name: 'Shayzian Crypts (Upper)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 4.390228926463396, "lng": 356.66015625000006},
        exits: [
            {
                label: 'To Graveyard of Heros',
                position: {"lat": 1.9332268264771233, "lng": 328.00781250000006},
                target_layer: "surface",
                target_layer_position: {"lat": 80.64257005581271, "lng": 202.33245849609378},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            }
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'chasam_of_fire_1',
        full_name: 'Chasm of Fire (Bottom Level)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 4.390228926463396, "lng": 356.66015625000006},
        exits: [
            {
                label: 'To Chasm of Fire (Second Level)',
                position: {"lat": 24.5271348225978, "lng": 383.55468750000006},
                target_layer: "chasam_of_fire_2",
                target_layer_position: {"lat": 26.43122806450644, "lng": 382.85156250000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Chasm of Fire (Second Level)',
                position: {"lat": -2.6357885741666065, "lng": 382.67578125000006},
                target_layer: "chasam_of_fire_2",
                target_layer_position: {"lat": -1.2303741774326018, "lng": 381.97265625},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            }
        ],
        map_labels: [
            {
                "position": {
                    "lat": 19.476950206488414,
                    "lng": 352.08984375000006
                },
                "title": "Black Demons",
                "description": null
            },
            {
                "position": {
                    "lat": -10.833305983642491,
                    "lng": 351.56250000000006
                },
                "title": "Black Demons",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'chasam_of_fire_2',
        full_name: 'Chasm of Fire (Second Level)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 4.390228926463396, "lng": 356.66015625000006},
        exits: [
            {
                label: 'To Chasm of Fire (First Level)',
                position: {"lat": 23.725011735951796, "lng": 353.32031250000006},
                target_layer: "chasam_of_fire_3",
                target_layer_position: {"lat": 24.206889622398023, "lng": 352.79296875},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Chasm of Fire (First Level)',
                position: {"lat": -13.2399454992863, "lng": 373.00781250000006},
                target_layer: "chasam_of_fire_3",
                target_layer_position: {"lat": -11.5230875068685, "lng": 374.06250000000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            }
        ],
        map_labels: [
            {
                "position": {
                    "lat": 11.523087506868514,
                    "lng": 344.35546875000006
                },
                "title": "Greater<br>Demons",
                "description": null
            },
            {
                "position": {
                    "lat": 11.86735091145932,
                    "lng": 371.42578125000006
                },
                "title": "Greater<br>Demons",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'chasam_of_fire_3',
        full_name: 'Chasm of Fire (First Level)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 4.390228926463396, "lng": 356.66015625000006},
        exits: [
            {
                label: 'To Shayzien House',
                position: {"lat": 1.9332268264771233, "lng": 349.98046875},
                target_layer: "surface",
                target_layer_position: {"lat": 81.85654050886374, "lng": 199.03930664062503},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            }
        ],
        map_labels: [
            {
                "position": {
                    "lat": 9.44906182688142,
                    "lng": 356.48437500000006
                },
                "title": "Lesser Demons",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'kourend_slayer_cave',
        full_name: 'Kourend Slayer Cave',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 13.752724664396988, "lng": 346.81640625000006},
        exits: [
            {
                label: 'To Kourend Castle',
                position: {"lat": 20.138470312451155, "lng": 349.10156250000006},
                target_layer: "surface",
                target_layer_position: {"lat": 81.88217824705356, "lng": 212.49206542968753},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Shayzien',
                position: {"lat": -57.891497352710324, "lng": 326.42578125000006},
                target_layer: "surface",
                target_layer_position: {"lat": 81.69824102870392, "lng": 201.52496337890628},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Hosidius',
                position: {"lat": -52.48278022207821, "lng": 432.94921875000006},
                target_layer: "surface",
                target_layer_position: {"lat": 80.81776749991873, "lng": 214.44488525390625},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Lovakengj',
                position: {"lat": 67.13582938531948, "lng": 279.49218750000006},
                target_layer: "surface",
                target_layer_position: {"lat": 82.91394796146943, "lng": 207.66357421875},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Arceuus',
                position: {"lat": 67.16995497083367, "lng": 424.24804687500006},
                target_layer: "surface",
                target_layer_position: {"lat": 83.49096067249315, "lng": 216.41693115234378},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            }
        ],
        map_labels: [
            {
                "position": {
                    "lat": 63.860035895395306,
                    "lng": 276.15234375000006
                },
                "title": "Black<br>Dragons",
                "description": null
            },
            {
                "position": {
                    "lat": 49.15296965617042,
                    "lng": 277.38281250000006
                },
                "title": "Red<br>Dragons",
                "description": null
            },
            {
                "position": {
                    "lat": 48.3416461723746,
                    "lng": 300.93750000000006
                },
                "title": "Blue<br>Dragons",
                "description": null
            },
            {
                "position": {
                    "lat": 35.889050079360935,
                    "lng": 319.04296875000006
                },
                "title": "Hellhounds",
                "description": null
            },
            {
                "position": {
                    "lat": 14.944784875088372,
                    "lng": 310.42968750000006
                },
                "title": "Skeletons",
                "description": null
            },
            {
                "position": {
                    "lat": -17.14079039331665,
                    "lng": 344.70703125000006
                },
                "title": "Ghosts",
                "description": null
            },
            {
                "position": {
                    "lat": 24.84656534821976,
                    "lng": 265.07812500000006
                },
                "title": "Steel<br>Dragons",
                "description": null
            },
            {
                "position": {
                    "lat": 34.161818161230386,
                    "lng": 296.71875000000006
                },
                "title": "Fire<br>Giants",
                "description": null
            },
            {
                "position": {
                    "lat": 19.973348786110613,
                    "lng": 281.07421875000006
                },
                "title": "Dark<br>Beasts",
                "description": null
            },
            {
                "position": {
                    "lat": 3.6888551431470478,
                    "lng": 261.56250000000006
                },
                "title": "Shades",
                "description": null
            },
            {
                "position": {
                    "lat": -34.016241889667015,
                    "lng": 274.92187500000006
                },
                "title": "Spectres",
                "description": null
            },
            {
                "position": {
                    "lat": -50.84757295365388,
                    "lng": 276.85546875000006
                },
                "title": "Banshees",
                "description": null
            },
            {
                "position": {
                    "lat": -53.01478324585922,
                    "lng": 296.19140625000006
                },
                "title": "Ankou",
                "description": null
            },
            {
                "position": {
                    "lat": -4.039617826768424,
                    "lng": 309.55078125000006
                },
                "title": "Animated<br>Axes",
                "description": null
            },
            {
                "position": {
                    "lat": -16.804541076383455,
                    "lng": 283.53515625000006
                },
                "title": "Bloodvelds",
                "description": null
            },
            {
                "position": {
                    "lat": -32.842673631954305,
                    "lng": 297.42187500000006
                },
                "title": "Hill Giants",
                "description": null
            },
            {
                "position": {
                    "lat": -38.27268853598096,
                    "lng": 338.55468750000006
                },
                "title": "Moss Giants",
                "description": null
            },
            {
                "position": {
                    "lat": -26.74561038219901,
                    "lng": 325.37109375000006
                },
                "title": "Cyclopes &<br>Axes",
                "description": null
            },
            {
                "position": {
                    "lat": 0.7031073524364909,
                    "lng": 327.30468750000006
                },
                "title": "Hill<br>Giants",
                "description": null
            },
            {
                "position": {
                    "lat": 62.34960927573042,
                    "lng": 320.97656250000006
                },
                "title": "Bronze & Iron<br>Dragons",
                "description": null
            },
            {
                "position": {
                    "lat": 61.10078883158897,
                    "lng": 358.41796875000006
                },
                "title": "Abyssal<br>Demons",
                "description": null
            },
            {
                "position": {
                    "lat": 66.08936427047088,
                    "lng": 396.9140625
                },
                "title": "Greater Demons",
                "description": null
            },
            {
                "position": {
                    "lat": 52.26815737376817,
                    "lng": 396.9140625
                },
                "title": "Nechryael",
                "description": null
            },
            {
                "position": {
                    "lat": 47.040182144806664,
                    "lng": 366.32812500000006
                },
                "title": "Bloodvelds",
                "description": null
            },
            {
                "position": {
                    "lat": 44.08758502824518,
                    "lng": 341.71875000000006
                },
                "title": "Hill<br>Giants",
                "description": null
            },
            {
                "position": {
                    "lat": 56.9449741808516,
                    "lng": 426.09375
                },
                "title": "Black<br>Demons",
                "description": null
            },
            {
                "position": {
                    "lat": 39.36827914916014,
                    "lng": 419.58984375000006
                },
                "title": "Lesser Demons",
                "description": null
            },
            {
                "position": {
                    "lat": 33.137551192346145,
                    "lng": 384.96093750000006
                },
                "title": "Ghosts",
                "description": null
            },
            {
                "position": {
                    "lat": 14.604847155053898,
                    "lng": 377.92968750000006
                },
                "title": "Moss<br>Giants",
                "description": null
            },
            {
                "position": {
                    "lat": 18.812717856407776,
                    "lng": 424.51171875000006
                },
                "title": "Jellies",
                "description": null
            },
            {
                "position": {
                    "lat": -15.792253570362446,
                    "lng": 416.77734375000006
                },
                "title": "Dust<br>Devils",
                "description": null
            },
            {
                "position": {
                    "lat": -26.43122806450644,
                    "lng": 383.90625000000006
                },
                "title": "Bloodvelds",
                "description": null
            },
            {
                "position": {
                    "lat": -46.92025531537452,
                    "lng": 378.10546875000006
                },
                "title": "Jellies",
                "description": null
            },
            {
                "position": {
                    "lat": -47.8721439688873,
                    "lng": 346.11328125000006
                },
                "title": "Dagannoth",
                "description": null
            },
            {
                "position": {
                    "lat": -50.17689812200105,
                    "lng": 416.07421875000006
                },
                "title": "Sand<br>Crabs",
                "description": null
            }
        ],
        icons: {
            agility_shortcuts: [
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": -37.57941251343839, "lng": 323.43750000000006},
                    title: "Agility Shortcut",
                    description: "Crevice A",
                    category: Categories.AGILITY_SHORTCUT
                },
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": -44.96479793033102, "lng": 320.62500000000006},
                    title: "Agility Shortcut",
                    description: "Crevice A",
                    category: Categories.AGILITY_SHORTCUT
                },
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 49.03786794532644, "lng": 404.82421875000006},
                    title: "Agility Shortcut",
                    description: "Crevice B (34 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                },
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 27.371767300523047, "lng": 418.88671875},
                    title: "Agility Shortcut",
                    description: "Crevice B (34 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                },
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 43.197167282501276, "lng": 275.62500000000006},
                    title: "Agility Shortcut",
                    description: "Stepping stones",
                    category: Categories.AGILITY_SHORTCUT
                },
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 30.751277776257812, "lng": 270.00000000000006},
                    title: "Agility Shortcut",
                    description: "Stepping stones",
                    category: Categories.AGILITY_SHORTCUT
                },
            ]
        }
    },
    {
        machine_name: 'braindeath_island',
        full_name: 'Brain Death Island',
        icon: require('../../static/icons/misc/Transportation_icon.png'),
        center_pos: {"lat": 7.710991655433217, "lng": 330.29296875000006},
        exits: [
            {
                label: 'To North of Ectofuntus',
                position: {"lat": 0.3515602939922709, "lng": 382.32421875},
                target_layer: "surface",
                target_layer_position: {"lat": 80.52438742758532, "lng": 347.2833251953125},
                icon: require('../../static/icons/misc/Transportation_icon.png')
            }
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'troll_stronghold_0',
        full_name: 'Troll Stronghold Lower',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 7.710991655433217, "lng": 330.29296875000006},
        exits: [
            {
                label: 'To Trollheim',
                position: {"lat": -37.30027528134431, "lng": 299.88281250000006},
                target_layer: "surface",
                target_layer_position: {"lat": 81.63814406346873, "lng": 290.93444824218756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Troll Stronghold Middle',
                position: {"lat": 38.134556577054134, "lng": 340.13671875},
                target_layer: "troll_stronghold_1",
                target_layer_position: {"lat": 40.04443758460859, "lng": 341.36718750000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Troll Stronghold Middle',
                position: {"lat": -19.476950206488414, "lng": 340.3125},
                target_layer: "troll_stronghold_1",
                target_layer_position: {"lat": -20.3034175184893, "lng": 340.6640625},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'troll_stronghold_1',
        full_name: 'Troll Stronghold Middle',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 7.710991655433217, "lng": 330.29296875000006},
        exits: [
            {
                label: 'To Troll Stronghold Upper',
                position: {"lat": 39.774769485295465, "lng": 325.89843750000006},
                target_layer: "troll_stronghold_2",
                target_layer_position: {"lat": 40.04443758460859, "lng": 328.00781250000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Troll Stronghold Upper',
                position: {"lat": -34.161818161230386, "lng": 327.48046875000006},
                target_layer: "troll_stronghold_2",
                target_layer_position: {"lat": -34.016241889667015, "lng": 328.00781250000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {
            quests: [

                {
                    title: "Troll Romance",
                    iconUrl: require('../../static/icons/misc/Quest_start_icon.png'),
                    className: Categories.QUESTS,
                    position: {"lat": -16.425547506916725, "lng": 305.1123046875},
                    difficulty: "Experienced",
                    length: "Medium",
                    quest_points: 2,
                    quests_required: [
                        "Troll Stronghold",
                        "Death Plateau"
                    ],
                    skills_required: [
                        questSkill(28, "Agility")
                    ],
                    full_guide: "https://oldschool.runescape.wiki/w/Troll_Romance",
                    category: Categories.QUESTS
                },
                {
                    title: "My Arm's Big Adventure",
                    iconUrl: require('../../static/icons/misc/Quest_start_icon.png'),
                    className: Categories.QUESTS,
                    position: {"lat": -22.91792293614603, "lng": 324.66796875000006},
                    difficulty: "Intermediate",
                    length: "Medium",
                    quest_points: 1,
                    quests_required: [
                        "Eadgar's Ruse",
                        "Troll Stronghold",
                        "Death Plateau",
                        "The Feud",
                        "Jungle Potion",
                        "Druidic Ritual"
                    ],
                    skills_required: [
                        questSkill(10, "Woodcutting"),
                        questSkill(29, "Farming")
                    ],
                    full_guide: "https://oldschool.runescape.wiki/w/My_Arm%27s_Big_Adventure",
                    category: Categories.QUESTS
                },
                {
                    title: "Making Friends with My Arm",
                    iconUrl: require('../../static/icons/misc/Quest_start_icon.png'),
                    className: Categories.QUESTS,
                    position: {"lat": -28.14950321154457, "lng": 330.29296875000006},
                    difficulty: "Master",
                    length: "Medium",
                    quest_points: 2,
                    quests_required: [
                        "My Arm's Big Adventure",
                        "Eadgar's Ruse",
                        "Troll Stronghold",
                        "Death Plateau",
                        "Druidic Ritual",
                        "The Feud",
                        "Jungle Potion",
                        "Druidic Ritual",
                        "Swan Song",
                        "One Small Favour",
                        "Rune Mysteries",
                        "Shilo Village",
                        "Garden of Tranquillity",
                        "Creature of Fenkenstrain",
                        "Priest in Peril",
                        "The Restless Ghost",
                        "Cold War",
                        "Romeo & Juliet"
                    ],
                    skills_required: [
                        questSkill(66, "Firemaking"),
                        questSkill(72, "Mining"),
                        questSkill(35, "Construction"),
                        questSkill(68, "Agility"),
                    ],
                    full_guide: "https://oldschool.runescape.wiki/w/Making_Friends_with_My_Arm",
                    category: Categories.QUESTS
                },
            ]
        }
    },
    {
        machine_name: 'troll_stronghold_2',
        full_name: 'Troll Stronghold Upper',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 7.710991655433217, "lng": 330.29296875000006},
        exits: [
            {
                label: 'To Trollheim',
                position: {"lat": 18.97902595325528, "lng": 319.92187500000006},
                target_layer: "surface",
                target_layer_position: {"lat": 82.04041718857093, "lng": 291.72546386718756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Trollheim',
                position: {"lat": -0.17578097424708533, "lng": 310.60546875000006},
                target_layer: "surface",
                target_layer_position: {"lat": 81.92009856891885, "lng": 291.21459960937506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'under_heros_guild',
        full_name: 'Heros\'s Guild Basement',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 11.523087506868514, "lng": 364.39453125000006},
        exits: [
            {
                label: 'To Hero\'s Guild',
                position: {"lat": 19.476950206488414, "lng": 328.53515625},
                target_layer: "surface",
                target_layer_position: {"lat": 80.18246078688743, "lng": 295.21362304687506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 1.4061088354351594,
                    "lng": 364.5703125
                },
                "title": "Fountain of Heros",
                "description": null
            },
            {
                "position": {
                    "lat": 20.138470312451155,
                    "lng": 353.49609375000006
                },
                "title": "Blue Dragon",
                "description": null
            }
        ],
        icons: {
            agility_shortcuts: [
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 11.350796722383672, "lng": 338.81835937500006},
                    title: "Agility Shortcut",
                    description: "Squeeze (67 Agility)\nHard Falador Diary Required",
                    category: Categories.AGILITY_SHORTCUT
                },
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 2.8113711933311403, "lng": 359.912109375},
                    title: "Agility Shortcut",
                    description: "Squeeze (67 Agility)\nHard Falador Diary Required",
                    category: Categories.AGILITY_SHORTCUT
                },
            ]
        }
    },
    {
        machine_name: 'waterfall_quest_grave_cave',
        full_name: 'Glarials Grave',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 17.811456088564483, "lng": 368.87695312500006},
        exits: [
            {
                label: 'To Kandarin',
                position: {"lat": 20.797201434307, "lng": 385.48828125000006},
                target_layer: "surface",
                target_layer_position: {"lat": 79.45048902237734, "lng": 273.22998046875006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 22.755920681486405,
                    "lng": 345.93750000000006
                },
                "title": "Glarial's Necklace",
                "description": null
            },
            {
                "position": {
                    "lat": -19.642587534013032,
                    "lng": 365.97656250000006
                },
                "title": "Glarial's Urn",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'rogues_den_1',
        full_name: 'Rogues Den',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -61.43876749368282, "lng": 416.25},
        exits: [
            {
                label: 'To Burthorpe',
                position: {"lat": -52.26815737376817, "lng": 431.19140625},
                target_layer: "surface",
                target_layer_position: {"lat": 80.50764272721774, "lng": 296.40563964843756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'deep_wilderness_dungeon',
        full_name: 'Deep wilderness Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 1.6696855009865839, "lng": 355.4296875},
        exits: [
            {
                label: 'To Level 51 Wilderness',
                position: {"lat": -4.214943141390639, "lng": 362.197265625},
                target_layer: "surface",
                target_layer_position: {"lat": 83.9143827432742, "lng": 305.30456542968756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 28.14950321154457,
                    "lng": 372.48046875
                },
                "title": "Fire Giants",
                "description": null
            },
            {
                "position": {
                    "lat": -9.44906182688142,
                    "lng": 364.74609375
                },
                "title": "Hill giants",
                "description": null
            },
            {
                "position": {
                    "lat": -22.105998799750566,
                    "lng": 334.68750000000006
                },
                "title": "Chaos Dwarves",
                "description": null
            },
            {
                "position": {
                    "lat": 4.5654735507102915,
                    "lng": 327.48046875000006
                },
                "title": "Shadow Spiders",
                "description": null
            }
        ],
        icons: {
            agility_shortcuts: [
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 2.986927393334876, "lng": 365.53710937500006},
                    title: "Agility Shortcut",
                    description: "Squeeze (46 Agility)\nMedium Wilderness Diary Required",
                    category: Categories.AGILITY_SHORTCUT
                },
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 14.00869637063467, "lng": 368.34960937500006},
                    title: "Agility Shortcut",
                    description: "Squeeze (46 Agility)\nMedium Wilderness Diary Required",
                    category: Categories.AGILITY_SHORTCUT
                },
            ]
        }
    },
    {
        machine_name: 'crashsite_cavern_mm2',
        full_name: 'Crash Site Cavern',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 2.986927393334876, "lng": 367.03125},
        exits: [
            {
                label: 'To Crash Site',
                position: {"lat": -21.453068633086772, "lng": 380.21484375000006},
                target_layer: "surface",
                target_layer_position: {"lat": 80.66309016264354, "lng": 266.62719726562506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": -12.382928338487396,
                    "lng": 340.13671875
                },
                "title": "Demonic<br>Gorrilas",
                "description": null
            },
            {
                "position": {
                    "lat": 0,
                    "lng": 379.86328125
                },
                "title": "Tortured Gorillas",
                "description": null
            },
            {
                "position": {
                    "lat": 23.40276490540795,
                    "lng": 398.14453125000006
                },
                "title": "Demonic Gorillas",
                "description": null
            },
            {
                "position": {
                    "lat": 21.94304553343818,
                    "lng": 322.73437500000006
                },
                "title": "Demonic Gorillas",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'burthorpe_games',
        full_name: 'Burthorpe Games Room',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 3.8642546157214084, "lng": 355.60546875000006},
        exits: [
            {
                label: 'To Burthorpe',
                position: {"lat": -29.993002284551064, "lng": 356.48437500000006},
                target_layer: "surface",
                target_layer_position: {"lat": 80.85276409179798, "lng": 295.68054199218756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'brine_rat_cave',
        full_name: 'Brine Rat Cave',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 7.710991655433217, "lng": 355.4296875},
        exits: [
            {
                label: 'To Outisde Keldagrim Entrance',
                position: {"lat": -22.268764039073968, "lng": 313.41796875000006},
                target_layer: "surface",
                target_layer_position: {"lat": 82.40532803026989, "lng": 285.67199707031256},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": -9.275622176792098,
                    "lng": 336.79687500000006
                },
                "title": "Brine<br>Rats",
                "description": null
            },
            {
                "position": {
                    "lat": 40.17887331434698,
                    "lng": 363.69140625000006
                },
                "title": "Slippery Walkway",
                "description": null
            },
            {
                "position": {
                    "lat": 21.779905342529645,
                    "lng": 383.37890625000006
                },
                "title": "Ulfrics<br>Chest",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'wyvern_cave_0',
        full_name: 'Northern Wyvern Cave',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 3.337953961416485, "lng": 354.55078125000006},
        exits: [
            {
                label: 'To South of Museum Camp',
                position: {"lat": 30.751277776257812, "lng": 327.04101562500006},
                target_layer: "surface",
                target_layer_position: {"lat": 83.40572190675073, "lng": 347.03613281250006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'wyvern_cave_1',
        full_name: 'Southern Wyvern Cave',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 7.536764322084078, "lng": 350.595703125},
        exits: [
            {
                label: 'To South of Museum Camp',
                position: {"lat": 23.644524198573688, "lng": 333.98437500000006},
                target_layer: "surface",
                target_layer_position: {"lat": 82.81226116602144, "lng": 351.5130615234375},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'lunar_isle_cave',
        full_name: 'Lunar Isle Mine',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -3.864254615721396, "lng": 368.08593750000006},
        exits: [
            {
                label: 'To Lunar Isle (North)',
                position: {"lat": 17.22475820662464, "lng": 359.82421875},
                target_layer: "surface",
                target_layer_position: {"lat": 84.05256097843038, "lng": 245.78063964843753},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {
            quests: [
                {
                    title: "Dream Mentor",
                    iconUrl: require('../../static/icons/misc/Quest_start_icon.png'),
                    className: Categories.QUESTS,
                    position: {"lat": 6.970049417296232, "lng": 369.66796875},
                    difficulty: "Master",
                    length: "Short",
                    quest_points: 2,
                    quests_required: [
                        "Lunar Diplomacy",
                        "The Fremennik Trials",
                        "Lost City",
                        "Rune Mysteries",
                        "Shilo Village",
                        "Jungle Potion",
                        "Druidic Ritual",
                        "Eadgar's Ruse",
                        "Troll Stronghold",
                        "Death Plateau",
                        "Druidic Ritual"
                    ],
                    skills_required: [],
                    full_guide: "https://oldschool.runescape.wiki/w/Dream_Mentor",
                    category: Categories.QUESTS
                },
            ]
        }
    },
    {
        machine_name: 'god_wars_0',
        full_name: 'God Wars Dungeon (Lower)',
        icon: require('../../static/icons/misc/agility_shortcut.png'),
        center_pos: {"lat": 3.5134210456400448, "lng": 359.12109375000006},
        exits: [
            {
                label: 'To God Wars Dungeon (Middle)',
                position: {"lat": -42.811521745097885, "lng": 412.73437500000006},
                target_layer: "god_wars_1",
                target_layer_position: {"lat": -42.940339233631825, "lng": 413.08593750000006},
                icon: require('../../static/icons/misc/agility_shortcut.png')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": -49.15296965617039,
                    "lng": 380.39062500000006
                },
                "title": "Saradormin",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'god_wars_1',
        full_name: 'God Wars Dungeon (Middle)',
        icon: require('../../static/icons/misc/agility_shortcut.png'),
        center_pos: {"lat": 3.5134210456400448, "lng": 359.12109375000006},
        exits: [
            {
                label: 'To God Wars Dungeon (Upper)',
                position: {"lat": -11.5230875068685, "lng": 403.41796875000006},
                target_layer: "god_wars_2",
                target_layer_position: {"lat": -12.382928338487396, "lng": 403.59375000000006},
                icon: require('../../static/icons/misc/agility_shortcut.png'),
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'god_wars_2',
        full_name: 'God Wars Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 3.5134210456400448, "lng": 359.12109375000006},
        exits: [
            {
                label: 'To Trollheim',
                position: {"lat": 3.5134210456400448, "lng": 359.12109375000006},
                target_layer: "surface",
                target_layer_position: {"lat": 82.53525334884758, "lng": 296.93847656250006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 59.445075099047166,
                    "lng": 341.54296875000006
                },
                "title": "Bandos",
                "description": null
            },
            {
                "position": {
                    "lat": -8.581021215641842,
                    "lng": 288.45703125000006
                },
                "title": "Armadyl",
                "description": null
            },
            {
                "position": {
                    "lat": 23.07973176244989,
                    "lng": 422.05078125000006
                },
                "title": "Zamorak",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'ape_atol_dungeon',
        full_name: 'Ape Atol Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 1.4061088354351594, "lng": 360.87890625000006},
        exits: [
            {
                label: 'To Ape Atol',
                position: {"lat": -18.646245142670608, "lng": 367.20703125},
                target_layer: "surface",
                target_layer_position: {"lat": 65.55845978217837, "lng": 286.71020507812506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 39.50404070558415,
                    "lng": 427.67578125000006
                },
                "title": "Zooknock",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'slayer_tower_basement',
        full_name: 'Slayer Tower Basement',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 4.390228926463396, "lng": 355.78125000000006},
        exits: [
            {
                label: 'To Slayer Tower',
                position: {"lat": 4.390228926463396, "lng": 355.78125000000006},
                target_layer: "surface",
                target_layer_position: {"lat": 80.49222985736196, "lng": 329.83154296875006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 23.725011735951796,
                    "lng": 335.21484375000006
                },
                "title": "Nechryaels",
                "description": null
            },
            {
                "position": {
                    "lat": -11.178401873711772,
                    "lng": 372.65625000000006
                },
                "title": "Gargoyles",
                "description": null
            },
            {
                "position": {
                    "lat": 22.43134015636062,
                    "lng": 373.53515625000006
                },
                "title": "Banshees",
                "description": null
            },
            {
                "position": {
                    "lat": -16.804541076383455,
                    "lng": 336.44531250000006
                },
                "title": "Bloodvelds",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'tolnas_rift',
        full_name: 'Tolna\'s Rift',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 2.8113711933311403, "lng": 358.24218750000006},
        exits: [
            {
                label: 'To East of Varrock',
                position: {"lat": 2.8113711933311403, "lng": 358.24218750000006},
                target_layer: "surface",
                target_layer_position: {"lat": 79.52065743513272, "lng": 322.71240234375006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'quidamortem_cave',
        full_name: 'Quidamortem Cave',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 8.407168163601076, "lng": 352.26562500000006},
        exits: [
            {
                label: 'To West of Mount Quidamortem',
                position: {"lat": 31.653381399664, "lng": 334.68750000000006},
                target_layer: "surface",
                target_layer_position: {"lat": 80.74825879312192, "lng": 184.60327148437503},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'lizard_man_temple_0',
        full_name: 'Lizardman Temple',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 1.9332268264771233, "lng": 353.32031250000006},
        exits: [
            {
                label: 'To Molch',
                position: {"lat": 13.581920900545857, "lng": 357.1875},
                target_layer: "surface",
                target_layer_position: {"lat": 82.00458612683333, "lng": 191.06323242187503},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Molch',
                position: {"lat": -10.141931686131018, "lng": 382.85156250000006},
                target_layer: "surface",
                target_layer_position: {"lat": 81.84486042070492, "lng": 192.24426269531253},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Molch',
                position: {"lat": -17.978733095556155, "lng": 360.52734375000006},
                target_layer: "surface",
                target_layer_position: {"lat": 81.79013295997048, "lng": 191.18957519531253},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Molch',
                position: {"lat": -25.16517336866393, "lng": 329.41406250000006},
                target_layer: "surface",
                target_layer_position: {"lat": 81.73188157750073, "lng": 189.73937988281253},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'lizard_caves',
        full_name: 'Lizardman Caves',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 4.390228926463396, "lng": 351.91406250000006},
        exits: [
            {
                label: 'To Lizardman Settlement',
                position: {"lat": 22.755920681486405, "lng": 347.6953125},
                target_layer: "surface",
                target_layer_position: {"lat": 80.90761572909896, "lng": 190.7391357421875},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'karuulm_slayer_dungeon_2',
        full_name: 'Karuulm Slayer Dungeon (Upper Level)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -14.774882506516272, "lng": 363.86718750000006},
        exits: [
            {
                label: 'To Karuulm Slayer Dungeon (Middle Level)',
                position: {"lat": -32.69486597787506, "lng": 363.33984375000006},
                target_layer: "karuulm_slayer_dungeon_1",
                target_layer_position: {"lat": -33.137551192346145, "lng": 362.28515625},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": -6.664607562172573,
                    "lng": 309.90234375000006
                },
                "title": "Fire<br>Giants",
                "description": null
            },
            {
                "position": {
                    "lat": -15.114552871944102,
                    "lng": 400.95703125000006
                },
                "title": "Hellhounds",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'karuulm_slayer_dungeon_1',
        full_name: 'Karuulm Slayer Dungeon (Middle Level)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -13.410994034321702, "lng": 365.62500000000006},
        exits: [
            {
                label: 'To Karuulm Slayer Dungeon (Lower Level)',
                position: {"lat": -10.31491928581316, "lng": 386.54296875000006},
                target_layer: "karuulm_slayer_dungeon_0",
                target_layer_position: {"lat": -10.141931686131018, "lng": 382.85156250000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 37.71859032558816,
                    "lng": 355.95703125000006
                },
                "title": "Drakes",
                "description": null
            },
            {
                "position": {
                    "lat": 35.60371874069731,
                    "lng": 405.17578125000006
                },
                "title": "Drakes<br>Task Only",
                "description": null
            },
            {
                "position": {
                    "lat": -39.90973623453719,
                    "lng": 386.36718750000006
                },
                "title": "Sulphur<br>Lizards",
                "description": null
            },
            {
                "position": {
                    "lat": -9.275622176792098,
                    "lng": 309.72656250000006
                },
                "title": "Greater<br>Demons",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'karuulm_slayer_dungeon_0',
        full_name: 'Karuulm Slayer Dungeon (Lower Level)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -6.489983332670651, "lng": 361.93359375000006},
        exits: [
            {
                label: 'To Mount Karuulm',
                position: {"lat": -34.30714385628803, "lng": 357.1875},
                target_layer: "surface",
                target_layer_position: {"lat": 83.0412092472449, "lng": 190.8599853515625},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 61.270232790000634,
                    "lng": 432.77343750000006
                },
                "title": "Alchemical<br>Hydra",
                "description": null
            },
            {
                "position": {
                    "lat": 60.23981116999893,
                    "lng": 356.48437500000006
                },
                "title": "Hydra Task Only",
                "description": null
            },
            {
                "position": {
                    "lat": 35.17380831799959,
                    "lng": 352.6171875
                },
                "title": "Hydras",
                "description": null
            },
            {
                "position": {
                    "lat": -9.79567758282973,
                    "lng": 355.78125000000006
                },
                "title": "Tasakaal",
                "description": null
            },
            {
                "position": {
                    "lat": -33.137551192346145,
                    "lng": 300.23437500000006
                },
                "title": "Wyverns",
                "description": null
            },
            {
                "position": {
                    "lat": -61.10078883158897,
                    "lng": 285.46875000000006
                },
                "title": "Wyverns<br>Task Only",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'water_ravine_dungeon',
        full_name: 'Water Ravine Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 4.039617826768437, "lng": 348.39843750000006},
        exits: [
            {
                label: 'To East of Kalphite Cave',
                position: {"lat": -31.05293398570515, "lng": 340.6640625},
                target_layer: "surface",
                target_layer_position: {"lat": 74.93942177886105, "lng": 326.79382324218756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'sophanem_dungeon_4',
        full_name: 'Sophanem Dungeon (Bottom Level)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 3.8642546157214084, "lng": 355.60546875000006},
        exits: [
            {
                label: 'To Sophanem Dungeon (Second Level)',
                position: {"lat": -26.588527147308625, "lng": 391.640625},
                target_layer: "sophanem_dungeon_2",
                target_layer_position: {"lat": -21.453068633086772, "lng": 316.93359375000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'sophanem_dungeon_2',
        full_name: 'Sophanem Dungeon (Second Level)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 3.8642546157214084, "lng": 355.60546875000006},
        exits: [
            {
                label: 'To Sophanem Dungeon (Top Level)',
                position: {"lat": 38.134556577054134, "lng": 388.47656250000006},
                target_layer: "sophanem_dungeon_1",
                target_layer_position: {"lat": -9.102096738726443, "lng": 358.59375000000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'sophanem_dungeon_1',
        full_name: 'Sophanem Dungeon (Top Level)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 0.3515602939922709, "lng": 356.13281250000006},
        exits: [
            {
                label: 'To Sophanem',
                position: {"lat": -8.233237111274553, "lng": 353.14453125000006},
                target_layer: "surface",
                target_layer_position: {"lat": 67.99934114512355, "lng": 323.09692382812506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'pothole_dungeon',
        full_name: 'Pothole Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 9.44906182688142, "lng": 350.33203125},
        exits: [
            {
                label: 'To North Karamja Jungle',
                position: {"lat": 28.613459424004414, "lng": 328.88671875000006},
                target_layer: "surface",
                target_layer_position: {"lat": 74.69340434170705, "lng": 290.80261230468756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 8.233237111274565,
                    "lng": 351.38671875000006
                },
                "title": "Jogres",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'kalphite_lair_0',
        full_name: 'Kalphite Queen\'s Lair',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 9.102096738726456, "lng": 354.7265625},
        exits: [
            {
                label: 'To Kalphite Lair Dungeon',
                position: {"lat": 0.8788717828324276, "lng": 384.96093750000006},
                target_layer: "kalphite_lair_2",
                target_layer_position: {"lat": 6.315298538330033, "lng": 386.71875},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 0.7031073524364909,
                    "lng": 343.125
                },
                "title": "Queen's Chamber",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'kalphite_lair_2',
        full_name: 'Kalphite Lair Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 12.55456352859367, "lng": 362.28515625},
        exits: [
            {
                label: 'To West of Shanty Pass',
                position: {"lat": 22.917922936146045, "lng": 352.08984375000006},
                target_layer: "surface",
                target_layer_position: {"lat": 74.52135489044342, "lng": 317.30163574218756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": -10.31491928581316,
                    "lng": 323.78906250000006
                },
                "title": "Guardians",
                "description": null
            },
            {
                "position": {
                    "lat": -1.0546279422758742,
                    "lng": 386.89453125
                },
                "title": "Guardians",
                "description": null
            },
            {
                "position": {
                    "lat": 37.16031654673677,
                    "lng": 380.21484375000006
                },
                "title": "Workers",
                "description": null
            }
        ],
        icons: {
            agility_shortcuts: [
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 20.797201434307, "lng": 378.28125000000006},
                    title: "Agility Shortcut",
                    description: "Squeeze (86 Agility)\nElite Desert Diary Required",
                    category: Categories.AGILITY_SHORTCUT
                },
            ]
        }
    },
    {
        machine_name: 'fremennik_slayer_dungeon',
        full_name: 'Fremennik Slayer Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -1.4061088354351594, "lng": 356.30859375000006},
        exits: [
            {
                label: 'To Golden Apple Tree',
                position: {"lat": -14.434680215297268, "lng": 438.3984375},
                target_layer: "surface",
                target_layer_position: {"lat": 81.32615013569678, "lng": 288.95690917968756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": -22.268764039073968,
                    "lng": 406.05468750000006
                },
                "title": "Cave Crawlers",
                "description": null
            },
            {
                "position": {
                    "lat": 6.664607562172573,
                    "lng": 422.22656250000006
                },
                "title": "Rock Slugs",
                "description": null
            },
            {
                "position": {
                    "lat": 29.53522956294847,
                    "lng": 410.27343750000006
                },
                "title": "Cockatrice",
                "description": null
            },
            {
                "position": {
                    "lat": -10.487811882056683,
                    "lng": 367.734375
                },
                "title": "Pyrefiends",
                "description": null
            },
            {
                "position": {
                    "lat": -3.864254615721396,
                    "lng": 341.36718750000006
                },
                "title": "Basilisks",
                "description": null
            },
            {
                "position": {
                    "lat": 20.96143961409684,
                    "lng": 288.98437500000006
                },
                "title": "Jellies",
                "description": null
            },
            {
                "position": {
                    "lat": -11.867350911459308,
                    "lng": 313.59375000000006
                },
                "title": "Turoth",
                "description": null
            },
            {
                "position": {
                    "lat": -19.31114335506464,
                    "lng": 281.60156250000006
                },
                "title": "Kurask",
                "description": null
            }
        ],
        icons: {
            agility_shortcuts: [
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": -13.923403897723347, "lng": 385.31250000000006},
                    title: "Agility Shortcut",
                    description: "Squeeze (81 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                },
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": -6.839169626342808, "lng": 326.07421875},
                    title: "Agility Shortcut",
                    description: "Squeeze (62 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                },
            ]
        }
    },
    {
        machine_name: 'slepe_dungeon',
        full_name: 'Slepe Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 20.46818922264095, "lng": 331.87500000000006},
        exits: [
            {
                label: 'To South Slepe',
                position: {"lat": 20.46818922264095, "lng": 331.87500000000006},
                target_layer: "surface",
                target_layer_position: {"lat": 77.57523244741726, "lng": 350.2496337890625},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'underground_pass_lower_1',
        full_name: 'Underground Pass (Final Room Lower)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -51.39920565355378, "lng": 354.7265625},
        exits: [
            {
                label: 'To Underground Pass (Final Room Upper)',
                position: {"lat": -63.704722429433225, "lng": 355.78125000000006},
                target_layer: "underground_pass_top_1",
                target_layer_position: {"lat": -77.91566898632583, "lng": 364.5703125},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": -53.12040528310657,
                    "lng": 324.14062500000006
                },
                "title": "Dwarves",
                "description": null
            },
            {
                "position": {
                    "lat": -54.77534585936448,
                    "lng": 388.12500000000006
                },
                "title": "Iban's<br>Tomb",
                "description": null
            },
            {
                "position": {
                    "lat": 3.8642546157214084,
                    "lng": 350.5078125
                },
                "title": "Souless",
                "description": null
            },
            {
                "position": {
                    "lat": 55.7765730186677,
                    "lng": 378.28125000000006
                },
                "title": "Blessed<br>Spiders",
                "description": null
            },
            {
                "position": {
                    "lat": 64.62387720204691,
                    "lng": 386.36718750000006
                },
                "title": "Kalrag",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'underground_pass_top_1',
        full_name: 'Underground Pass (Final Room Upper)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 68.00757101804007, "lng": 365.2734375},
        exits: [
            {
                label: 'To Underground Pass (Level 3)',
                position: {"lat": 77.38950400539731, "lng": 398.32031250000006},
                target_layer: "underground_pass_part_3",
                target_layer_position: {"lat": 34.452218472826566, "lng": 312.53906250000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Tirannwn',
                position: {"lat": 16.29905101458183, "lng": 343.125},
                target_layer: "surface",
                target_layer_position: {"lat": 76.29539923366691, "lng": 257.04711914062506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'underground_pass_part_3',
        full_name: 'Underground Pass (Level 3)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 9.96885060854611, "lng": 356.48437500000006},
        exits: [
            {
                label: 'To Underground Pass (Level 2)',
                position: {"lat": -35.88905007936092, "lng": 314.82421875000006},
                target_layer: "underground_pass_part_2",
                target_layer_position: {"lat": -13.752724664396988, "lng": 357.1875},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 35.02999636902566,
                    "lng": 321.50390625000006
                },
                "title": "Well",
                "description": null
            },
            {
                "position": {
                    "lat": 37.30027528134433,
                    "lng": 390.93750000000006
                },
                "title": "Sir Carl<br>Sir Harry<br>Sir Jerro",
                "description": null
            },
            {
                "position": {
                    "lat": 19.145168196205297,
                    "lng": 353.67187500000006
                },
                "title": "Zombies",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'underground_pass_part_2',
        full_name: 'Underground Pass (Level 2)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 9.96885060854611, "lng": 356.48437500000006},
        exits: [
            {
                label: 'To Underground Pass (Level 1)',
                position: {"lat": 44.715513732021336, "lng": 387.94921875000006},
                target_layer: "underground_pass_part_1",
                target_layer_position: {"lat": -14.944784875088372, "lng": 323.26171875000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": -20.632784250388028,
                    "lng": 359.82421875
                },
                "title": "Skeletons",
                "description": null
            },
            {
                "position": {
                    "lat": -3.688855143147035,
                    "lng": 325.19531250000006
                },
                "title": "50 Thieving<br>Shortcut",
                "description": null
            },
            {
                "position": {
                    "lat": 16.46769474828897,
                    "lng": 342.94921875
                },
                "title": "Agility Maze",
                "description": null
            },
            {
                "position": {
                    "lat": 30.600093873550072,
                    "lng": 319.92187500000006
                },
                "title": "Narrow<br>Ledge",
                "description": null
            },
            {
                "position": {
                    "lat": 40.979898069620155,
                    "lng": 346.64062500000006
                },
                "title": "Dig Patch",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'underground_pass_part_1',
        full_name: 'Underground Pass',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 9.96885060854611, "lng": 356.48437500000006},
        exits: [
            {
                label: 'To East Ardougne',
                position: {"lat": 39.63953756436671, "lng": 437.16796875000006},
                target_layer: "surface",
                target_layer_position: {"lat": 77.76525440581047, "lng": 265.26489257812506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 0.3515602939922709,
                    "lng": 284.94140625000006
                },
                "title": "Ogres",
                "description": null
            },
            {
                "position": {
                    "lat": -5.44102230371796,
                    "lng": 303.22265625000006
                },
                "title": "Blessed<br>Spiders",
                "description": null
            },
            {
                "position": {
                    "lat": -10.660607953624762,
                    "lng": 355.078125
                },
                "title": "Wall Traps",
                "description": null
            },
            {
                "position": {
                    "lat": -1.9332268264771106,
                    "lng": 376.52343750000006
                },
                "title": "Furnace",
                "description": null
            },
            {
                "position": {
                    "lat": -7.885147283424331,
                    "lng": 397.08984375000006
                },
                "title": "Grid<br>Puzzle",
                "description": null
            },
            {
                "position": {
                    "lat": 20.632784250388028,
                    "lng": 388.12500000000006
                },
                "title": "Rope Swing",
                "description": null
            },
            {
                "position": {
                    "lat": 21.289374355860424,
                    "lng": 413.08593750000006
                },
                "title": "Giant Bats",
                "description": null
            },
            {
                "position": {
                    "lat": 13.239945499286312,
                    "lng": 350.85937500000006
                },
                "title": "Blessed<br>Spiders",
                "description": null
            },
            {
                "position": {
                    "lat": 39.774769485295465,
                    "lng": 348.22265625000006
                },
                "title": "Goblins",
                "description": null
            },
            {
                "position": {
                    "lat": 38.685509760012025,
                    "lng": 375.46875000000006
                },
                "title": "Koftik",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'myreque_hideout',
        full_name: 'Myreque Hideout',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 1.9332268264771233, "lng": 367.91015625000006},
        exits: [
            {
                label: 'To Canafis',
                position: {"lat": 34.016241889667036, "lng": 352.79296875},
                target_layer: "surface",
                target_layer_position: {"lat": 79.73574892357854, "lng": 334.6188354492188},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To South Canafis',
                position: {"lat": 27.21555620902969, "lng": 360.52734375000006},
                target_layer: "surface",
                target_layer_position: {"lat": 79.68718415450823, "lng": 334.96765136718756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Mort Myre Swamp',
                position: {"lat": -13.752724664396988, "lng": 386.01562500000006},
                target_layer: "surface",
                target_layer_position: {"lat": 79.49865437682378, "lng": 335.88500976562506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 20.96143961409684,
                    "lng": 355.25390625
                },
                "title": "Secret Wall",
                "description": null
            },
            {
                "position": {
                    "lat": 24.367113562651276,
                    "lng": 396.03515625000006
                },
                "title": "Hideout",
                "description": null
            },
            {
                "position": {
                    "lat": -7.362466865535738,
                    "lng": 370.37109375000006
                },
                "title": "Poison<br>Spider",
                "description": null
            }
        ],
        icons: {
            quests: [
                {
                    title: "Darkness of Hallowvale",
                    iconUrl: require('../../static/icons/misc/Quest_start_icon.png'),
                    className: Categories.QUESTS,
                    position: {"lat": 27.68352808378776, "lng": 394.1015625},
                    difficulty: "Intermediate",
                    length: "Very Long",
                    quest_points: 2,
                    quests_required: [
                        "In Aid of the Myreque",
                        "In Search of the Myreque",
                        "Nature Spirit",
                        "Priest in Peril",
                        "The Restless Ghost"
                    ],
                    skills_required: [
                        questSkill(5, "Construction"),
                        questSkill(20, "Mining"),
                        questSkill(22, "Thieving"),
                        questSkill(26, "Agility"),
                        questSkill(32, "Crafting"),
                        questSkill(33, "Magic"),
                        questSkill(33, "Strength"),

                    ],
                    full_guide: "https://oldschool.runescape.wiki/w/Darkness_of_Hallowvale",
                    category: Categories.QUESTS
                },
            ]
        }
    },
    {
        machine_name: 'goblin_cave',
        full_name: 'Goblin Cave',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -0.17578097424708533, "lng": 359.6484375},
        exits: [
            {
                label: 'To Fishing Guild',
                position: {"lat": -32.69486597787506, "lng": 396.9140625},
                target_layer: "surface",
                target_layer_position: {"lat": 78.81583957370985, "lng": 277.48718261718756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 37.43997405227057,
                    "lng": 320.62500000000006
                },
                "title": "Crate<br>Room",
                "description": null
            },
            {
                "position": {
                    "lat": 40.713955826286046,
                    "lng": 343.82812500000006
                },
                "title": "Goblin<br>Temple",
                "description": null
            },
            {
                "position": {
                    "lat": 22.917922936146045,
                    "lng": 392.34375000000006
                },
                "title": "Slagilith and<br>Bouncer",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'temple_of_marimbo',
        full_name: 'Temple of Marimbo Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 9.275622176792112, "lng": 356.83593750000006},
        exits: [
            {
                label: 'To Temple of Marimbo',
                position: {"lat": 27.059125784374068, "lng": 391.640625},
                target_layer: "surface",
                target_layer_position: {"lat": 67.70110969585656, "lng": 289.64355468750006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'miscellania_and_etceteria_dungeon',
        full_name: 'Miscellania & Etceteria Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 1.9332268264771233, "lng": 361.93359375000006},
        exits: [
            {
                label: 'To Miscellania',
                position: {"lat": -30.29701788337204, "lng": 285.29296875000006},
                target_layer: "surface",
                target_layer_position: {"lat": 83.34488515397247, "lng": 269.97802734375006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Etceteria',
                position: {"lat": -10.833305983642491, "lng": 440.50781250000006},
                target_layer: "surface",
                target_layer_position: {"lat": 83.48846937837685, "lng": 277.29492187500006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 40.17887331434698,
                    "lng": 328.00781250000006
                },
                "title": "Rope Swing",
                "description": null
            },
            {
                "position": {
                    "lat": 26.115985925333536,
                    "lng": 333.28125000000006
                },
                "title": "Plank to avoid damage",
                "description": null
            },
            {
                "position": {
                    "lat": 33.7243396617476,
                    "lng": 388.82812500000006
                },
                "title": "Sea Snake Hatchling",
                "description": null
            },
            {
                "position": {
                    "lat": 11.523087506868514,
                    "lng": 406.05468750000006
                },
                "title": "Sea<br>Snake<br>Young",
                "description": null
            },
            {
                "position": {
                    "lat": 23.241346102386135,
                    "lng": 435.58593750000006
                },
                "title": "Giant<br>Sea Snake",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'jatizo_mine',
        full_name: 'Jatizso Mines',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 3.6888551431470478, "lng": 360},
        exits: [
            {
                label: 'To Jatizso',
                position: {"lat": -22.75592068148639, "lng": 364.921875},
                target_layer: "surface",
                target_layer_position: {"lat": 82.98340359715496, "lng": 261.11755371093756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 22.43134015636062,
                    "lng": 333.98437500000006
                },
                "title": "Ice Trolls",
                "description": null
            },
            {
                "position": {
                    "lat": 24.686952411999155,
                    "lng": 380.21484375000006
                },
                "title": "Ice Trolls",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'evil_chickens_lair',
        full_name: 'Evil Chickens Lair',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -9.44906182688142, "lng": 352.79296875},
        exits: [
            {
                label: 'To Zanaris',
                position: {"lat": -35.02999636902567, "lng": 351.73828125000006},
                target_layer: "zanaris",
                target_layer_position: {"lat": 67.33986082559097, "lng": 374.58984375},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 28.459033019728068,
                    "lng": 351.73828125000006
                },
                "title": "Evil Chicken's Nest",
                "description": null
            },
            {
                "position": {
                    "lat": -14.774882506516272,
                    "lng": 348.92578125000006
                },
                "title": "Black<br>Dragons",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'wilderness_godwars',
        full_name: 'Wilderness Godwars Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -4.390228926463384, "lng": 355.95703125000006},
        exits: [
            {
                label: 'To North of Bandit Camp',
                position: {"lat": 20.632784250388028, "lng": 363.86718750000006},
                target_layer: "surface",
                target_layer_position: {"lat": 82.4747070273022, "lng": 303.45336914062506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": -22.105998799750566,
                    "lng": 378.80859375000006
                },
                "title": "Bandos",
                "description": null
            },
            {
                "position": {
                    "lat": -19.31114335506464,
                    "lng": 339.78515625000006
                },
                "title": "Saradormin",
                "description": null
            },
            {
                "position": {
                    "lat": 5.965753671065536,
                    "lng": 364.74609375
                },
                "title": "Zamorak",
                "description": null
            },
            {
                "position": {
                    "lat": 26.745610382199022,
                    "lng": 330.99609375
                },
                "title": "Armadyl",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'wilderness_agility_course_dungeon',
        full_name: 'Wilderness Agility Course Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -1.0546279422758742, "lng": 357.36328125},
        exits: [
            {
                label: 'To Wilderness Agility Course',
                position: {"lat": 19.476950206488414, "lng": 364.21875000000006},
                target_layer: "surface",
                target_layer_position: {"lat": 84.18149028723424, "lng": 302.66784667968756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'tunnel_of_chaos',
        full_name: 'Tunnel of Chaos',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -2.6357885741666065, "lng": 358.24218750000006},
        exits: [
            {
                label: 'To East of Varrock',
                position: {"lat": -27.839076094777816, "lng": 371.953125},
                target_layer: "surface",
                target_layer_position: {"lat": 79.73819567893061, "lng": 321.09741210937506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'dorgesh_kaan_1',
        full_name: 'Dorgeshkhaan (Upper)',
        icon: require('../../static/icons/misc/Map_link_icon.webp'),
        center_pos: {"lat": 27.52775820686191, "lng": 356.30859375000006},
        exits: [
            {
                label: 'To Dorgeshkhaan',
                position: {"lat": 58.53959476664049, "lng": 357.36328125},
                target_layer: "dorgesh-kaan",
                target_layer_position: {"lat": 57.326521225217064, "lng": 356.48437500000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Dorgeshkhaan',
                position: {"lat": 46.437856895024204, "lng": 369.31640625000006},
                target_layer: "dorgesh-kaan",
                target_layer_position: {"lat": 45.706179285330855, "lng": 368.43750000000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Dorgeshkhaan',
                position: {"lat": 24.5271348225978, "lng": 332.05078125000006},
                target_layer: "dorgesh-kaan",
                target_layer_position: {"lat": 24.686952411999155, "lng": 331.69921875000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Dorgeshkhaan',
                position: {"lat": -3.162455530237848, "lng": 374.58984375},
                target_layer: "dorgesh-kaan",
                target_layer_position: {"lat": -3.864254615721396, "lng": 373.18359375000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Dorgeshkhaan',
                position: {"lat": -5.9657536710655235, "lng": 331.17187500000006},
                target_layer: "dorgesh-kaan",
                target_layer_position: {"lat": -5.44102230371796, "lng": 331.52343750000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Dorgeshkhaan',
                position: {"lat": -11.350796722383672, "lng": 370.01953125},
                target_layer: "dorgesh-kaan",
                target_layer_position: {"lat": -13.068776734357694, "lng": 368.96484375000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Dorgeshkhaan',
                position: {"lat": -21.12549763660628, "lng": 342.59765625},
                target_layer: "dorgesh-kaan",
                target_layer_position: {"lat": -21.616579336740603, "lng": 342.94921875},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Dorgeshkhaan',
                position: {"lat": -23.40276490540795, "lng": 361.75781250000006},
                target_layer: "dorgesh-kaan",
                target_layer_position: {"lat": -24.206889622398023, "lng": 361.75781250000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Dorgeshkhaan',
                position: {"lat": -36.738884124394296, "lng": 347.51953125},
                target_layer: "dorgesh-kaan",
                target_layer_position: {"lat": -37.020098201368114, "lng": 347.87109375},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Dorgeshkhaan',
                position: {"lat": -45.460130637921, "lng": 359.6484375},
                target_layer: "dorgesh-kaan",
                target_layer_position: {"lat": -46.195042108660154, "lng": 359.47265625000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Dorgeshkhaan',
                position: {"lat": -58.44773280389084, "lng": 360.70312500000006},
                target_layer: "dorgesh-kaan",
                target_layer_position: {"lat": -58.63121664342478, "lng": 360.87890625000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 64.32087157990325,
                    "lng": 348.92578125000006
                },
                "title": "Council<br>Chamber",
                "description": null
            },
            {
                "position": {
                    "lat": 63.23362741232569,
                    "lng": 380.74218750000006
                },
                "title": "Ur-tag",
                "description": null
            },
            {
                "position": {
                    "lat": 38.685509760012025,
                    "lng": 389.1796875
                },
                "title": "Nursery",
                "description": null
            }
        ],
        icons: {
            quests: [
                {
                    title: "Another Slice of H.A.M.",
                    iconUrl: require('../../static/icons/misc/Quest_start_icon.png'),
                    className: Categories.QUESTS,
                    position: {"lat": 60.994423108456154, "lng": 379.55566406250006},
                    difficulty: "Intermediate",
                    length: "Medium",
                    quest_points: 1,
                    quests_required: [
                        "Death to the Dorgeshuun",
                        "The Lost Tribe",
                        "Goblin Diplomacy",
                        "Rune Mysteries",
                        "The Giant Dwarf",
                        "The Dig Site",
                        "Druidic Ritual"
                    ],
                    skills_required: [
                        questSkill(15, "Attack"),
                        questSkill(25, "Prayer")
                    ],
                    full_guide: "https://oldschool.runescape.wiki/w/Another_Slice_of_H.A.M.",
                    category: Categories.QUESTS
                },
            ]
        }
    },
    {
        machine_name: 'dorgesh-kaan',
        full_name: 'Dorgeshkhaan',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 27.52775820686191, "lng": 356.30859375000006},
        exits: [
            {
                label: 'To Dorgeshkhaan Mine',
                position: {"lat": 67.676084581981, "lng": 395.68359375000006},
                target_layer: "dorgeshkaan_mine",
                target_layer_position: {"lat": -37.30027528134431, "lng": 364.04296875000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 64.01449619484472,
                    "lng": 331.87500000000006
                },
                "title": "Oldak's<br>Teleportation<br>Laboratory",
                "description": null
            },
            {
                "position": {
                    "lat": 47.754097979680026,
                    "lng": 343.82812500000006
                },
                "title": "Ur-sek &<br>Ur-taal",
                "description": null
            },
            {
                "position": {
                    "lat": 44.59046718130883,
                    "lng": 392.69531250000006
                },
                "title": "Tegdak",
                "description": null
            },
            {
                "position": {
                    "lat": 31.353636941500987,
                    "lng": 359.6484375
                },
                "title": "Ur-vass",
                "description": null
            },
            {
                "position": {
                    "lat": 12.211180191503997,
                    "lng": 352.96875
                },
                "title": "Market",
                "description": null
            },
            {
                "position": {
                    "lat": 11.178401873711785,
                    "lng": 323.08593750000006
                },
                "title": "Bone<br>Collector",
                "description": null
            },
            {
                "position": {
                    "lat": -7.710991655433217,
                    "lng": 315.70312500000006
                },
                "title": "Ur-meg",
                "description": null
            },
            {
                "position": {
                    "lat": -45.82879925192133,
                    "lng": 345.93750000000006
                },
                "title": "Wire<br>Machine",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'dorgeshkaan_mine',
        full_name: 'Dorgeshkhaan Mine',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -5.7908968128719565, "lng": 365.97656250000006},
        exits: [
            {
                label: 'To Lumbridge Basement',
                position: {"lat": -22.91792293614603, "lng": 347.6953125},
                target_layer: "lumbridge_basement",
                target_layer_position: {"lat": 0.5273363048115169, "lng": 377.57812500000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'digsite_dungeon',
        full_name: 'Digsite Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 0.17578097424708533, "lng": 365.80078125000006},
        exits: [
            {
                label: 'To Digsite North-east Winch',
                position: {"lat": -7.18810087117902, "lng": 334.51171875000006},
                target_layer: "surface",
                target_layer_position: {"lat": 79.24333815227048, "lng": 326.75537109375},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Digsite West Winch',
                position: {"lat": 8.059229627200192, "lng": 359.12109375000006},
                target_layer: "surface",
                target_layer_position: {"lat": 79.11338911989017, "lng": 325.63476562500006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 0,
                    "lng": 333.28125000000006
                },
                "title": "Doug Deeping",
                "description": null
            },
            {
                "position": {
                    "lat": 16.97274101999902,
                    "lng": 352.08984375000006
                },
                "title": "Arcenia<br>Root",
                "description": null
            },
            {
                "position": {
                    "lat": -12.382928338487396,
                    "lng": 367.03125
                },
                "title": "Skeletons",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'kraken_cave',
        full_name: 'Kraken Cove',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 0.3515602939922709, "lng": 356.83593750000006},
        exits: [
            {
                label: 'To South West of Fishing Colony',
                position: {"lat": 27.371767300523047, "lng": 343.30078125},
                target_layer: "surface",
                target_layer_position: {"lat": 81.28587917894365, "lng": 254.74548339843753},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": -8.754794702435618,
                    "lng": 354.55078125000006
                },
                "title": "Cave<br>Kraken",
                "description": null
            },
            {
                "position": {
                    "lat": -28.76765910569124,
                    "lng": 330.82031250000006
                },
                "title": "Waterfiends",
                "description": null
            },
            {
                "position": {
                    "lat": -32.546813173515154,
                    "lng": 373.18359375000006
                },
                "title": "Waterfiends",
                "description": null
            },
            {
                "position": {
                    "lat": 33.43144133557529,
                    "lng": 367.3828125
                },
                "title": "Kraken<br>Boss",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'white_wolf_mountain_caves',
        full_name: 'White Wolf Mountain Caves',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 20.3034175184893, "lng": 333.98437500000006},
        exits: [
            {
                label: 'To West Dungeon Entrance',
                position: {"lat": -29.993002284551064, "lng": 310.42968750000006},
                target_layer: "surface",
                target_layer_position: {"lat": 80.21612275604421, "lng": 290.65979003906256},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Middle Dungeon Entrance',
                position: {"lat": -26.43122806450644, "lng": 346.28906250000006},
                target_layer: "surface",
                target_layer_position: {"lat": 80.28264059618424, "lng": 292.2555541992188},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To East Dungeon Entrance',
                position: {"lat": -17.978733095556155, "lng": 361.75781250000006},
                target_layer: "surface",
                target_layer_position: {"lat": 80.31734832164365, "lng": 292.9202270507813},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 29.22889003019423,
                    "lng": 370.01953125
                },
                "title": "Ice Queen",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'rashiliyias_tomb',
        full_name: 'Rashiliyias Tomb',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -1.0546279422758742, "lng": 359.82421875},
        exits: [
            {
                label: 'To East of Karamja River',
                position: {"lat": 33.87041555094183, "lng": 380.91796875000006},
                target_layer: "surface",
                target_layer_position: {"lat": 74.16408546675687, "lng": 296.77368164062506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'viyeldi_caves',
        full_name: 'Viyeldi Caves (Second Level)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -1.7575368113083125, "lng": 358.41796875000006},
        exits: [
            {
                label: 'To Viyeldi Caves (First Level)',
                position: {"lat": 15.453680224345835, "lng": 326.07421875},
                target_layer: "viyeldi_caves_2",
                target_layer_position: {"lat": 27.21555620902969, "lng": 324.84375000000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 20.632784250388028,
                    "lng": 368.08593750000006
                },
                "title": "Mossy<br>Rock",
                "description": null
            },
            {
                "position": {
                    "lat": 37.71859032558816,
                    "lng": 392.69531250000006
                },
                "title": "Furnace",
                "description": null
            },
            {
                "position": {
                    "lat": -15.623036831528252,
                    "lng": 387.59765625000006
                },
                "title": "Shimmering<br>Field",
                "description": null
            },
            {
                "position": {
                    "lat": -28.92163128242129,
                    "lng": 374.4140625
                },
                "title": "Lesser Demons",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'viyeldi_caves_2',
        full_name: 'Viyeldi Caves (First Level)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 20.3034175184893, "lng": 333.98437500000006},
        exits: [
            {
                label: 'To West Kharazi Jungle',
                position: {"lat": 40.979898069620155, "lng": 344.88281250000006},
                target_layer: "surface",
                target_layer_position: {"lat": 71.17712280564923, "lng": 287.97363281250006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 39.774769485295465,
                    "lng": 374.58984375
                },
                "title": "Bookcase",
                "description": null
            },
            {
                "position": {
                    "lat": 30.90222470517144,
                    "lng": 397.61718750000006
                },
                "title": "Old<br>Gate",
                "description": null
            },
            {
                "position": {
                    "lat": -20.96143961409684,
                    "lng": 367.03125
                },
                "title": "Jagged<br>Wall",
                "description": null
            },
            {
                "position": {
                    "lat": -4.740675384778361,
                    "lng": 347.51953125
                },
                "title": "Marked<br>Wall",
                "description": null
            },
            {
                "position": {
                    "lat": 8.059229627200192,
                    "lng": 321.15234375
                },
                "title": "Old Gate",
                "description": null
            },
            {
                "position": {
                    "lat": 30.600093873550072,
                    "lng": 317.63671875000006
                },
                "title": "Winch",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'ah_za_rhoon_2',
        full_name: 'Ah Za Rhoon (Second Level)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -8.928487062665504, "lng": 358.06640625000006},
        exits: [
            {
                label: 'To Ah Za Rhoon (First Level)',
                position: {"lat": -34.016241889667015, "lng": 323.08593750000006},
                target_layer: "ah_za_rhoon_1",
                target_layer_position: {"lat": 4.039617826768437, "lng": 318.69140625},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'ah_za_rhoon_1',
        full_name: 'Ah Za Rhoon (First Level)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -2.284550660236957, "lng": 339.25781250000006},
        exits: [
            {
                label: 'To East Karamja',
                position: {"lat": 38.95940879245423, "lng": 337.32421875000006},
                target_layer: "surface",
                target_layer_position: {"lat": 72.4388497835536, "lng": 297.23510742187506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'pollvinch_fire_dungeon',
        full_name: 'Pollnivneach Smoke Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 0.3515602939922709, "lng": 352.96875},
        exits: [
            {
                label: 'To West of Pollnivneach',
                position: {"lat": 8.059229627200192, "lng": 274.21875000000006},
                target_layer: "surface",
                target_layer_position: {"lat": 71.73266202440855, "lng": 322.767333984375},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 32.694865977875075,
                    "lng": 304.27734375000006
                },
                "title": "Dust Devils",
                "description": null
            },
            {
                "position": {
                    "lat": -2.284550660236957,
                    "lng": 334.33593750000006
                },
                "title": "Burnt<br>Chest",
                "description": null
            },
            {
                "position": {
                    "lat": 7.885147283424331,
                    "lng": 428.20312500000006
                },
                "title": "Fareed",
                "description": null
            },
            {
                "position": {
                    "lat": -22.59372606392931,
                    "lng": 286.87500000000006
                },
                "title": "Dust Devils",
                "description": null
            },
            {
                "position": {
                    "lat": 20.138470312451155,
                    "lng": 378.45703125000006
                },
                "title": "Pyrefiends",
                "description": null
            },
            {
                "position": {
                    "lat": -18.81271785640776,
                    "lng": 381.26953125000006
                },
                "title": "Pyrefiends",
                "description": null
            },
            {
                "position": {
                    "lat": -20.138470312451155,
                    "lng": 332.75390625000006
                },
                "title": "Fire<br>Giants",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'kalphite_cave',
        full_name: 'Kalphite Cave',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -16.299051014581817, "lng": 347.6953125},
        exits: [
            {
                label: 'To East of Shanty Pass',
                position: {"lat": -16.299051014581817, "lng": 347.6953125},
                target_layer: "surface",
                target_layer_position: {"lat": 74.76429887097669, "lng": 323.43200683593756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 28.92163128242129,
                    "lng": 352.26562500000006
                },
                "title": "Soldiers",
                "description": null
            },
            {
                "position": {
                    "lat": 13.581920900545857,
                    "lng": 305.85937500000006
                },
                "title": "Workers",
                "description": null
            },
            {
                "position": {
                    "lat": -8.059229627200192,
                    "lng": 375.11718750000006
                },
                "title": "Workers",
                "description": null
            },
            {
                "position": {
                    "lat": -34.88593094075316,
                    "lng": 300.23437500000006
                },
                "title": "Guardians",
                "description": null
            },
            {
                "position": {
                    "lat": -36.879620605026766,
                    "lng": 370.89843750000006
                },
                "title": "Soldiers",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'mosleharmless_dungeon',
        full_name: 'Mos Le\'Harmless Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 20.138470312451155, "lng": 341.89453125000006},
        exits: [
            {
                label: 'To Mos Le\'Harmless Beach',
                position: {"lat": -40.04443758460857, "lng": 307.79296875000006},
                target_layer: "surface",
                target_layer_position: {"lat": 71.95858391176317, "lng": 351.64489746093756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Mos Le\'Harmless West Island',
                position: {"lat": 62.2679226294176, "lng": 400.25390625000006},
                target_layer: "surface",
                target_layer_position: {"lat": 73.68806787884861, "lng": 356.06140136718756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Mos Le\'Harmless East Island',
                position: {"lat": 62.103882522897884, "lng": 420.64453125000006},
                target_layer: "surface",
                target_layer_position: {"lat": 73.68883928422404, "lng": 357.05566406250006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 44.08758502824518,
                    "lng": 378.98437500000006
                },
                "title": "Cave Horrors",
                "description": null
            },
            {
                "position": {
                    "lat": 59.712097173322924,
                    "lng": 323.43750000000006
                },
                "title": "Cave Horrors",
                "description": null
            },
            {
                "position": {
                    "lat": 27.371767300523047,
                    "lng": 305.85937500000006
                },
                "title": "Cave Horrors",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'abandoned_mine_6',
        full_name: 'Abandoned Mine (Sixth Level)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 22.674847351188536, "lng": 337.23632812500006},
        exits: [
            {
                label: 'To Abandoned Mine (Fifth Level)',
                position: {"lat": 12.039320557540572, "lng": 321.67968750000006},
                target_layer: "abandoned_mine_5",
                target_layer_position: {"lat": -9.102096738726443, "lng": 316.93359375000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Abandoned Mine (Fifth Level)',
                position: {"lat": 12.55456352859367, "lng": 390.93750000000006},
                target_layer: "abandoned_mine_5",
                target_layer_position: {"lat": -10.833305983642491, "lng": 393.39843750000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'abandoned_mine_5',
        full_name: 'Abandoned Mine (Fifth Level)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 22.674847351188536, "lng": 337.23632812500006},
        exits: [
            {
                label: 'To Abandoned Mine (Fourth Level)',
                position: {"lat": 20.632784250388028, "lng": 363.51562500000006},
                target_layer: "abandoned_mine_4",
                target_layer_position: {"lat": -21.289374355860424, "lng": 388.65234375000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'abandoned_mine_4',
        full_name: 'Abandoned Mine (Fourth Level)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 22.674847351188536, "lng": 337.23632812500006},
        exits: [
            {
                label: 'To Abandoned Mine (Third Level)',
                position: {"lat": 40.44694705960048, "lng": 342.42187500000006},
                target_layer: "abandoned_mine_3",
                target_layer_position: {"lat": 40.713955826286046, "lng": 343.125},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Abandoned Mine (Third Level)',
                position: {"lat": 27.21555620902969, "lng": 374.06250000000006},
                target_layer: "abandoned_mine_3",
                target_layer_position: {"lat": 27.994401411046148, "lng": 373.35937500000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Abandoned Mine (Third Level)',
                position: {"lat": -16.63619187839765, "lng": 324.14062500000006},
                target_layer: "abandoned_mine_3",
                target_layer_position: {"lat": -16.299051014581817, "lng": 322.91015625000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Abandoned Mine (Third Level)',
                position: {"lat": -30.60009387355006, "lng": 364.921875},
                target_layer: "abandoned_mine_3",
                target_layer_position: {"lat": -30.44867367928756, "lng": 363.16406250000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'abandoned_mine_3',
        full_name: 'Abandoned Mine (Third Level)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 22.674847351188536, "lng": 337.23632812500006},
        exits: [
            {
                label: 'To Abandoned Mine (Second Level)',
                position: {"lat": 34.74161249883172, "lng": 375.46875000000006},
                target_layer: "abandoned_mine_2",
                target_layer_position: {"lat": 35.17380831799959, "lng": 375.46875000000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Abandoned Mine (Second Level)',
                position: {"lat": -9.44906182688142, "lng": 376.17187500000006},
                target_layer: "abandoned_mine_2",
                target_layer_position: {"lat": -7.885147283424331, "lng": 375.64453125000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'abandoned_mine_2',
        full_name: 'Abandoned Mine (Second Level)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 11.523087506868514, "lng": 368.78906250000006},
        exits: [
            {
                label: 'To Abandoned Mine (First Level)',
                position: {"lat": 6.140554782450308, "lng": 341.54296875000006},
                target_layer: "abandoned_mine_1",
                target_layer_position: {"lat": -5.7908968128719565, "lng": 352.6171875},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Abandoned Mine (First Level)',
                position: {"lat": -5.615985819155327, "lng": 353.67187500000006},
                target_layer: "abandoned_mine_1",
                target_layer_position: {"lat": -16.63619187839765, "lng": 365.09765625},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'abandoned_mine_1',
        full_name: 'Abandoned Mine (First Level)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -2.6357885741666065, "lng": 363.69140625000006},
        exits: [
            {
                label: 'To Main Exit',
                position: {"lat": 0.8788717828324276, "lng": 385.83984375000006},
                target_layer: "surface",
                target_layer_position: {"lat": 76.55646590946766, "lng": 331.336669921875},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'experiment_cave',
        full_name: 'Experiment Cave',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -5.0909441750333855, "lng": 370.01953125},
        exits: [
            {
                label: 'To East of Fenkenstrain\'s Castle',
                position: {"lat": -29.22889003019423, "lng": 439.10156250000006},
                target_layer: "surface",
                target_layer_position: {"lat": 80.42393537272979, "lng": 340.46630859375006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Mausoleum',
                position: {"lat": 28.459033019728068, "lng": 334.51171875000006},
                target_layer: "surface",
                target_layer_position: {"lat": 80.91629229384844, "lng": 335.64331054687506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}


    },
    {
        machine_name: 'elemental_workshop',
        full_name: 'Elemental Workshop',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 8.928487062665504, "lng": 352.44140625},
        exits: [
            {
                label: 'To Seers Village',
                position: {"lat": 2.8113711933311403, "lng": 349.27734375000006},
                target_layer: "surface",
                target_layer_position: {"lat": 80.07131834076769, "lng": 283.29895019531256},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 29.84064389983441,
                    "lng": 325.54687500000006
                },
                "title": "Earth<br>Elementals",
                "description": null
            },
            {
                "position": {
                    "lat": 32.10118973232094,
                    "lng": 355.95703125000006
                },
                "title": "Water<br>Elementals",
                "description": null
            },
            {
                "position": {
                    "lat": 10.833305983642491,
                    "lng": 380.21484375000006
                },
                "title": "Air<br>Elementals",
                "description": null
            },
            {
                "position": {
                    "lat": -12.554563528593656,
                    "lng": 352.6171875
                },
                "title": "Fire<br>Elementals",
                "description": null
            }
        ],
        icons: {}


    },
    {
        machine_name: 'elemental_workshop_middle',
        full_name: 'Elemental Workshop Middle Floor',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 7.36246686553575, "lng": 358.06640625000006},
        exits: [
            {
                label: 'To Top Floor',
                position: {"lat": 7.36246686553575, "lng": 358.06640625000006},
                target_layer: "elemental_workshop",
                target_layer_position: {"lat": 8.059229627200192, "lng": 355.78125000000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'elemental_workshop2',
        full_name: 'Elemental Workshop Bottom Floor',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 7.36246686553575, "lng": 358.06640625000006},
        exits: [
            {
                label: 'To Middle Floor',
                position: {"lat": 24.5271348225978, "lng": 339.96093750000006},
                target_layer: "elemental_workshop_middle",
                target_layer_position: {"lat": 12.382928338487396, "lng": 352.44140625},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 13.410994034321702,
                    "lng": 360.52734375000006
                },
                "title": "Mind<br>Room",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'under_ice_mountain',
        full_name: 'Under whitewolf mountain',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 25.522614647623293, "lng": 335.25878906250006},
        exits: [
            {
                label: 'To East Side of White Wolf Mountain',
                position: {"lat": 15.114552871944115, "lng": 396.5625},
                target_layer: "surface",
                target_layer_position: {"lat": 79.87284820752161, "lng": 294.24133300781256},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To West Side of White Wolf Mountain',
                position: {"lat": 19.476950206488414, "lng": 317.46093750000006},
                target_layer: "surface",
                target_layer_position: {"lat": 79.91958637365005, "lng": 290.46203613281256},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Keldagrim',
                position: {"lat": 1.7575368113083254, "lng": 395.15625000000006},
                target_layer: "keldagrim",
                target_layer_position: {"lat": -4.039617826768424, "lng": 397.96875000000006},
                icon: require('../../static/icons/misc/Transportation_icon.png')
            },
        ],
        map_labels: [],
        icons: {}


    },
    {
        machine_name: 'keldagrim',
        full_name: 'Keldagrim',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 25.522614647623293, "lng": 335.25878906250006},
        exits: [
            {
                label: 'To Keldagrim Cave',
                position: {"lat": -56.170022982932046, "lng": 296.01562500000006},
                target_layer: "keldagrim_cave",
                target_layer_position: {"lat": 25.799891182088334, "lng": 351.56250000000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            //
            {
                label: 'To Varrock',
                position: {"lat": 8.581021215641854, "lng": 444.37500000000006},
                target_layer: "surface",
                target_layer_position: {"lat": 80.15056363665231, "lng": 311.561279296875},
                icon: require('../../static/icons/misc/Transportation_icon.png')
            },
        ],
        map_labels: [],
        icons: {
            quests: [
                {
                    title: "Between a Rock...",
                    iconUrl: require('../../static/icons/misc/Quest_start_icon.png'),
                    className: Categories.QUESTS,
                    position: {"lat": -6.926426847059551, "lng": 278.17382812500006},
                    difficulty: "Experienced",
                    length: "Long",
                    quest_points: 2,
                    quests_required: [
                        "Dwarf Cannon",
                        "Fishing Contest"
                    ],
                    skills_required: [
                        questSkill(30, "Defence"),
                        questSkill(40, "Mining"),
                        questSkill(50, "Smithing")
                    ],
                    full_guide: "https://oldschool.runescape.wiki/w/Between_a_Rock...",
                    category: Categories.QUESTS
                },
                {
                    title: "The Giant Dwarf",
                    iconUrl: require('../../static/icons/misc/Quest_start_icon.png'),
                    className: Categories.QUESTS,
                    position: {"lat": -52.37559917665911, "lng": 303.57421875000006},
                    difficulty: "Intermediate",
                    length: "Medium",
                    quest_points: 2,
                    quests_required: [
                        "The Knight's Sword"
                    ],
                    skills_required: [
                        questSkill(12, "Crafting"),
                        questSkill(16, "Firemaking"),
                        questSkill(33, "Magic"),
                        questSkill(14, "Thieving")
                    ],
                    full_guide: "https://oldschool.runescape.wiki/w/The_Giant_Dwarf",
                    category: Categories.QUESTS
                },
                {
                    title: "Forgettable Tale...",
                    iconUrl: require('../../static/icons/misc/Quest_start_icon.png'),
                    className: Categories.QUESTS,
                    position: {"lat": 50.84757295365389, "lng": 282.56835937500006},
                    difficulty: "Intermediate",
                    length: "Long",
                    quest_points: 2,
                    quests_required: [
                        "The Giant Dwarf",
                        "Fishing Contest"
                    ],
                    skills_required: [
                        questSkill(22, "Cooking"),
                        questSkill(17, "Farming"),
                    ],
                    full_guide: "https://oldschool.runescape.wiki/w/Forgettable_Tale...",
                    category: Categories.QUESTS
                },
            ]
        }


    },
    {
        machine_name: 'keldagrim_cave',
        full_name: 'Keldagrim Cave',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 6.489983332670651, "lng": 358.76953125000006},
        exits: [
            {
                label: 'To Rellekka Area',
                position: {"lat": 30.600093873550072, "lng": 340.48828125},
                target_layer: "surface",
                target_layer_position: {"lat": 82.24578007692925, "lng": 284.60083007812506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Troll Montains',
                position: {"lat": -7.01366792756663, "lng": 377.75390625000006},
                target_layer: "surface",
                target_layer_position: {"lat": 82.29270201244428, "lng": 288.88549804687506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}


    },
    {
        machine_name: 'penguin_base',
        full_name: 'Penguin Base',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -1.4061088354351594, "lng": 360},
        exits: [
            {
                label: 'To Iceberg',
                position: {"lat": -34.30714385628803, "lng": 358.59375000000006},
                target_layer: "surface",
                target_layer_position: {"lat": 84.50360797553859, "lng": 278.83300781250006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}


    },
    {
        machine_name: 'smoke_devil_dungeon',
        full_name: 'Smoke Devil Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 5.61598581915534, "lng": 371.60156250000006},
        exits: [
            {
                label: 'To South of Castlewars',
                position: {"lat": -29.84064389983441, "lng": 384.2578125},
                target_layer: "surface",
                target_layer_position: {"lat": 73.6710879786998, "lng": 263.5757446289063},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 18.812717856407776,
                    "lng": 325.89843750000006
                },
                "title": "Thermonuclear<br>Smoke Devil",
                "description": null
            },
            {
                "position": {
                    "lat": 3.6888551431470478,
                    "lng": 380.91796875000006
                },
                "title": "Smoke Devils",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'yannille_dungeon_1',
        full_name: 'Yanille Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -4.390228926463384, "lng": 360.17578125},
        exits: [
            {
                label: 'To Yannille',
                position: {"lat": -30.29701788337204, "lng": 373.53515625000006},
                target_layer: "surface",
                target_layer_position: {"lat": 73.98093379958613, "lng": 276.2429809570313},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Watchtower',
                position: {"lat": 29.22889003019423, "lng": 325.89843750000006},
                target_layer: "surface",
                target_layer_position: {"lat": 74.76285525325245, "lng": 273.9248657226563},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 10.833305983642491,
                    "lng": 313.41796875000006
                },
                "title": "Sinister<br>Chest",
                "description": null
            },
            {
                "position": {
                    "lat": 35.746512259918504,
                    "lng": 330.99609375
                },
                "title": "Bats",
                "description": null
            },
            {
                "position": {
                    "lat": -1.7575368113083125,
                    "lng": 346.11328125000006
                },
                "title": "Chaos Druid Warriors",
                "description": null
            },
            {
                "position": {
                    "lat": -20.138470312451155,
                    "lng": 386.89453125
                },
                "title": "Chaos<br>Druids",
                "description": null
            },
            {
                "position": {
                    "lat": -6.489983332670651,
                    "lng": 326.07421875
                },
                "title": "Altar (trap)",
                "description": null
            }
        ],
        icons: {
            agility_shortcuts: [
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 7.36246686553575, "lng": 333.45703125},
                    title: "Agility Shortcut",
                    description: "Pipe Squeeze (49 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                },
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 21.616579336740603, "lng": 338.37890625},
                    title: "Agility Shortcut",
                    description: "Log Balance (40 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                },
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": -12.382928338487396, "lng": 365.62500000000006},
                    title: "Agility Shortcut",
                    description: "Monkey Bars (57 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                }
            ]
        }
    },
    {
        machine_name: 'observatory_dungeon',
        full_name: 'Overvatory Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 5.7908968128719565, "lng": 357.71484375},
        exits: [
            {
                label: 'To Obervatory Tower',
                position: {"lat": -27.059125784374054, "lng": 357.01171875000006},
                target_layer: "surface",
                target_layer_position: {"lat": 75.4585892414553, "lng": 265.22094726562506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Ruins',
                position: {"lat": 32.39851580247402, "lng": 385.13671875000006},
                target_layer: "surface",
                target_layer_position: {"lat": 75.83307364515697, "lng": 266.66564941406256},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 25.48295117535531,
                    "lng": 344.88281250000006
                },
                "title": "Golbin<br>Kitchen",
                "description": null
            },
            {
                "position": {
                    "lat": 34.88593094075317,
                    "lng": 321.328125
                },
                "title": "Chest",
                "description": null
            },
            {
                "position": {
                    "lat": 40.84706035607122,
                    "lng": 352.79296875
                },
                "title": "Chest",
                "description": null
            },
            {
                "position": {
                    "lat": 14.093957177836224,
                    "lng": 374.765625
                },
                "title": "Chest",
                "description": null
            },
            {
                "position": {
                    "lat": 8.407168163601076,
                    "lng": 383.02734375000006
                },
                "title": "Chest",
                "description": null
            },
            {
                "position": {
                    "lat": 2.1088986592431382,
                    "lng": 389.35546875
                },
                "title": "Chest",
                "description": null
            },
            {
                "position": {
                    "lat": -8.928487062665504,
                    "lng": 389.00390625000006
                },
                "title": "Chest",
                "description": null
            },
            {
                "position": {
                    "lat": -17.978733095556155,
                    "lng": 376.69921875000006
                },
                "title": "Chest",
                "description": null
            },
            {
                "position": {
                    "lat": -18.312810846425442,
                    "lng": 341.36718750000006
                },
                "title": "Chest",
                "description": null
            },
            {
                "position": {
                    "lat": 0.8788717828324276,
                    "lng": 320.62500000000006
                },
                "title": "Chest",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'castlewars_underground',
        full_name: 'Castlewars Underground',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 3.5134210456400448, "lng": 355.95703125000006},
        exits: [
            {
                label: 'To Saradormin Base',
                position: {"lat": -25.958044673317843, "lng": 399.19921875},
                target_layer: "surface",
                target_layer_position: {"lat": 74.8190574999548, "lng": 260.76049804687506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Zamorak Base',
                position: {"lat": 32.24997445586331, "lng": 313.24218750000006},
                target_layer: "surface",
                target_layer_position: {"lat": 74.06032518355184, "lng": 264.83093261718756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Map Center',
                position: {"lat": 10.833305983642491, "lng": 356.30859375000006},
                target_layer: "surface",
                target_layer_position: {"lat": 74.49347621438257, "lng": 262.78747558593756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Map Center',
                position: {"lat": -3.513421045640032, "lng": 355.78125000000006},
                target_layer: "surface",
                target_layer_position: {"lat": 74.38738556691438, "lng": 262.82592773437506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'zmi',
        full_name: 'Ourania Altar',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -3.337953961416472, "lng": 348.92578125000006},
        exits: [
            {
                label: 'To Altar By Battlefield',
                position: {"lat": 41.244772343082076, "lng": 323.43750000000006},
                target_layer: "surface",
                target_layer_position: {"lat": 76.54368906311473, "lng": 266.20422363281256},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": -23.725011735951796,
                    "lng": 384.96093750000006
                },
                "title": "Altar",
                "description": null
            },
            {
                "position": {
                    "lat": -13.410994034321702,
                    "lng": 316.05468750000006
                },
                "title": "Lizards",
                "description": null
            },
            {
                "position": {
                    "lat": -28.92163128242129,
                    "lng": 328.18359375000006
                },
                "title": "Zamorak Fighters",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'stronghold_slayer_cave',
        full_name: 'Stronghold Slayer Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 9.622414142924818, "lng": 354.02343750000006},
        exits: [
            {
                label: 'To Gnome Stronghold',
                position: {"lat": 36.59788913307022, "lng": 330.46875000000006},
                target_layer: "surface",
                target_layer_position: {"lat": 79.20328047720547, "lng": 264.62768554687506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 33.87041555094183,
                    "lng": 351.03515625000006
                },
                "title": "Bloodvelds",
                "description": null
            },
            {
                "position": {
                    "lat": 38.272688535980976,
                    "lng": 396.73828125
                },
                "title": "Bloodvelds",
                "description": null
            },
            {
                "position": {
                    "lat": 5.61598581915534,
                    "lng": 394.27734375
                },
                "title": "Ankou",
                "description": null
            },
            {
                "position": {
                    "lat": -19.642587534013032,
                    "lng": 366.85546875000006
                },
                "title": "Aberrant Spectres",
                "description": null
            },
            {
                "position": {
                    "lat": -23.079731762449878,
                    "lng": 325.54687500000006
                },
                "title": "Hellhounds",
                "description": null
            },
            {
                "position": {
                    "lat": -4.039617826768424,
                    "lng": 306.91406250000006
                },
                "title": "Hellhounds",
                "description": null
            },
            {
                "position": {
                    "lat": -27.839076094777816,
                    "lng": 287.57812500000006
                },
                "title": "Fire Giants",
                "description": null
            }
        ],
        icons: {
            agility_shortcuts: [
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 12.726084296948196, "lng": 334.51171875000006},
                    title: "Agility Shortcut",
                    description: "Squeeze (72 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                }
            ]
        }
    },
    {
        machine_name: 'water_fall_dungeon',
        full_name: 'Waterfall Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -7.885147283424331, "lng": 344.70703125000006},
        exits: [
            {
                label: 'To Waterfall Ledge',
                position: {"lat": -31.952162238024975, "lng": 344.17968750000006},
                target_layer: "surface",
                target_layer_position: {"lat": 79.68128209185427, "lng": 270.14282226562506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 39.36827914916014,
                    "lng": 329.94140625000006
                },
                "title": "Chalice<br>of Eternity",
                "description": null
            },
            {
                "position": {
                    "lat": 4.5654735507102915,
                    "lng": 329.76562500000006
                },
                "title": "Fire<br>Giants",
                "description": null
            },
            {
                "position": {
                    "lat": 14.093957177836224,
                    "lng": 347.6953125
                },
                "title": "Fire<br>Giants",
                "description": null
            },
            {
                "position": {
                    "lat": -1.9332268264771106,
                    "lng": 363.16406250000006
                },
                "title": "Key",
                "description": null
            },
            {
                "position": {
                    "lat": -14.434680215297268,
                    "lng": 343.30078125
                },
                "title": "Shadow<br>Spiders",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'ancient_cavern_1',
        full_name: 'Ancient Caverns (Upper)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 4.5654735507102915, "lng": 366.15234375000006},
        exits: [
            {
                label: 'To Ancient Cavers (Lower)',
                position: {"lat": 35.60371874069731, "lng": 382.67578125000006},
                target_layer: "ancient_caverns",
                target_layer_position: {"lat": 5.090944175033399, "lng": 382.50000000000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 29.38217507514529,
                    "lng": 364.04296875000006
                },
                "title": "Mithril Dragons",
                "description": null
            },
            {
                "position": {
                    "lat": -37.020098201368114,
                    "lng": 342.42187500000006
                },
                "title": "Ancient<br>Forge",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'ancient_caverns',
        full_name: 'Ancient Caverns',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 4.5654735507102915, "lng": 366.15234375000006},
        exits: [
            {
                label: 'To Otto\'s Grotto',
                position: {"lat": 39.90973623453719, "lng": 360.3515625},
                target_layer: "surface",
                target_layer_position: {"lat": 80.19275853777062, "lng": 270.17028808593756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 20.96143961409684,
                    "lng": 338.55468750000006
                },
                "title": "Waterfiends",
                "description": null
            },
            {
                "position": {
                    "lat": -10.833305983642491,
                    "lng": 371.60156250000006
                },
                "title": "Brutal green<br>Dragons",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'lighthouse_dungeon',
        full_name: 'Lighthouse Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 0.3515602939922709, "lng": 354.37500000000006},
        exits: [
            {
                label: 'To Lighthouse',
                position: {"lat": -25.79989118208832, "lng": 356.48437500000006},
                target_layer: "surface",
                target_layer_position: {"lat": 81.60893586878258, "lng": 269.9642944335938},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 13.239945499286312,
                    "lng": 353.14453125000006
                },
                "title": "Dagannoths",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'barbarian_assult',
        full_name: 'Barbarian Assault',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 4.5654735507102915, "lng": 357.1875},
        exits: [
            {
                label: 'To Barbarian Assault Lobby',
                position: {"lat": -24.367113562651262, "lng": 358.24218750000006},
                target_layer: "surface",
                target_layer_position: {"lat": 80.9084837552551, "lng": 271.81274414062506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'grand_tree_mines',
        full_name: 'Grand Tree Mines',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 16.636191878397664, "lng": 357.36328125},
        exits: [
            {
                label: 'To Grand Tree',
                position: {"lat": 16.636191878397664, "lng": 357.36328125},
                target_layer: "surface",
                target_layer_position: {"lat": 80.05804956215623, "lng": 266.93481445312506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": -30.751277776257812,
                    "lng": 341.01562500000006
                },
                "title": "Giant Bats",
                "description": null
            },
            {
                "position": {
                    "lat": -25.48295117535532,
                    "lng": 386.36718750000006
                },
                "title": "Demon<br>Fight",
                "description": null
            },
            {
                "position": {
                    "lat": 0,
                    "lng": 322.03125000000006
                },
                "title": "Giant Rats",
                "description": null
            },
            {
                "position": {
                    "lat": 33.137551192346145,
                    "lng": 346.64062500000006
                },
                "title": "Giant Rats",
                "description": null
            },
            {
                "position": {
                    "lat": 6.664607562172573,
                    "lng": 377.92968750000006
                },
                "title": "Giant Rats",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'tower_of_life_basement',
        full_name: 'Creature Creation',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -8.233237111274553, "lng": 354.7265625},
        exits: [
            {
                label: 'To Tower of Life',
                position: {"lat": -8.233237111274553, "lng": 354.7265625},
                target_layer: "surface",
                target_layer_position: {"lat": 76.26478238458024, "lng": 279.25598144531256},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 37.43997405227057,
                    "lng": 321.85546875000006
                },
                "title": "Unicow<br>Altar",
                "description": null
            },
            {
                "position": {
                    "lat": 0.8788717828324276,
                    "lng": 318.69140625
                },
                "title": "Frogeel<br>Altar",
                "description": null
            },
            {
                "position": {
                    "lat": -24.846565348219745,
                    "lng": 341.54296875000006
                },
                "title": "Swordchick<br>Altar",
                "description": null
            },
            {
                "position": {
                    "lat": -24.846565348219745,
                    "lng": 367.3828125
                },
                "title": "Spidine<br>Altar",
                "description": null
            },
            {
                "position": {
                    "lat": -0.3515602939922709,
                    "lng": 389.88281250000006
                },
                "title": "Jubster<br>Altar",
                "description": null
            },
            {
                "position": {
                    "lat": 34.59704151614417,
                    "lng": 383.37890625000006
                },
                "title": "Newtroost<br>Altar",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'brimhaven_dungeon_2',
        full_name: 'Brimhaven Dungeon (Upper)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 58.99531118795094, "lng": 363.51562500000006},
        exits: [
            {
                label: 'To Brimhaven Dungeon',
                position: {"lat": 14.43468021529728, "lng": 283.88671875000006},
                target_layer: "brimhaven_dungeon",
                target_layer_position: {"lat": 18.145851771694467, "lng": 284.23828125000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Brimhaven Dungeon',
                position: {"lat": 78.45542534118533, "lng": 293.20312500000006},
                target_layer: "brimhaven_dungeon",
                target_layer_position: {"lat": 78.56048828398782, "lng": 298.65234375000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 1.0546279422758869,
                    "lng": 281.95312500000006
                },
                "title": "Greater<br>Demons",
                "description": null
            },
            {
                "position": {
                    "lat": 66.86108230224609,
                    "lng": 281.60156250000006
                },
                "title": "Fire Giants",
                "description": null
            },
            {
                "position": {
                    "lat": 74.06786624952264,
                    "lng": 324.14062500000006
                },
                "title": "Baby Green<br>Dragons",
                "description": null
            }
        ],
        icons: {
            agility_shortcuts: [
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 75.2082449863107, "lng": 333.19335937500006},
                    title: "Agility Shortcut",
                    description: "Climb (87 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                }
            ]
        }
    },
    {
        machine_name: 'brimhaven_dungeon',
        full_name: 'Brimhaven Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 58.99531118795094, "lng": 363.51562500000006},
        exits: [
            {
                label: 'To Brimhaven',
                position: {"lat": 66.08936427047088, "lng": 391.9921875},
                target_layer: "surface",
                target_layer_position: {"lat": 75.31027753026149, "lng": 285.45776367187506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Karamja',
                position: {"lat": -31.80289258670676, "lng": 421.52343750000006},
                target_layer: "surface",
                target_layer_position: {"lat": 73.68806787884861, "lng": 286.51794433593756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 27.371767300523047,
                    "lng": 384.96093750000006
                },
                "title": "Red<br>Dragons",
                "description": null
            },
            {
                "position": {
                    "lat": 44.84029065139799,
                    "lng": 290.03906250000006
                },
                "title": "Moss<br>Giants",
                "description": null
            },
            {
                "position": {
                    "lat": 67.47492238478702,
                    "lng": 318.8671875
                },
                "title": "Moss Giants",
                "description": null
            },
            {
                "position": {
                    "lat": 26.115985925333536,
                    "lng": 323.43750000000006
                },
                "title": "Dogs",
                "description": null
            },
            {
                "position": {
                    "lat": -13.2399454992863,
                    "lng": 318.8671875
                },
                "title": "Fire<br>Giants",
                "description": null
            },
            {
                "position": {
                    "lat": -23.241346102386135,
                    "lng": 385.31250000000006
                },
                "title": "Black Demons",
                "description": null
            },
            {
                "position": {
                    "lat": -16.63619187839765,
                    "lng": 426.09375
                },
                "title": "Bronze Dragons",
                "description": null
            },
            {
                "position": {
                    "lat": -63.23362741232569,
                    "lng": 396.5625
                },
                "title": "Iron & Steel<br>Dragons",
                "description": null
            },
            {
                "position": {
                    "lat": -52.69636107827448,
                    "lng": 334.68750000000006
                },
                "title": "Iron<br>Dragons",
                "description": null
            },
            {
                "position": {
                    "lat": -52.48278022207821,
                    "lng": 286.17187500000006
                },
                "title": "Bronze<br>Dragons",
                "description": null
            },
            {
                "position": {
                    "lat": -72.91963546581482,
                    "lng": 293.55468750000006
                },
                "title": "Steel<br>Dragons",
                "description": null
            }
        ],
        icons: {
            agility_shortcuts: [
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 74.44935750063425, "lng": 335.91796875},
                    title: "Agility Shortcut",
                    description: "Climb (87 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                },
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 54.265224078605684, "lng": 354.19921875000006},
                    title: "Agility Shortcut",
                    description: "Jump (83 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                },
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 36.73888412439431, "lng": 365.44921875000006},
                    title: "Agility Shortcut",
                    description: "Jump (83 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                }
            ]
        }
    },
    {
        machine_name: 'inferno',
        full_name: 'Inferno',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 4.5654735507102915, "lng": 354.7265625},
        exits: [
            {
                label: 'To TzHaar City',
                position: {"lat": 4.5654735507102915, "lng": 354.7265625},
                target_layer: "tzhaar_city",
                target_layer_position: {"lat": 1.6696855009865839, "lng": 402.01171875000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            }
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'tzhaar_city',
        full_name: 'TzHaar City',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 38.272688535980976, "lng": 364.921875},
        exits: [
            {
                label: 'To Karamja Volcano Dungeon',
                position: {"lat": 63.23362741232569, "lng": 378.98437500000006},
                target_layer: "karamja_volcano",
                target_layer_position: {"lat": -32.99023555965107, "lng": 378.28125000000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            }
        ],
        map_labels: [
            {
                "position": {
                    "lat": -35.74651225991851,
                    "lng": 260.85937500000006
                },
                "title": "Fight Caves",
                "description": null
            },
            {
                "position": {
                    "lat": 42.553080288955826,
                    "lng": 262.26562500000006
                },
                "title": "Fight Pits",
                "description": null
            },
            {
                "position": {
                    "lat": 7.36246686553575,
                    "lng": 400.78125000000006
                },
                "title": "Inferno",
                "description": null
            }
        ],
        icons: {
            fairy_rings: [
                {
                    iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
                    className: Categories.FAIRY_RINGS,
                    position: {"lat": 14.093957177836224, "lng": 313.41796875000006},
                    title: "Fairy ring",
                    description: "B L P (blp)",
                    category: Categories.FAIRY_RINGS
                },
            ]
        }
    },
    {
        machine_name: 'karamja_volcano',
        full_name: 'Karamja Volcano Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 6.664607562172573, "lng": 354.90234375},
        exits: [
            {
                label: 'To Karamja Volcano',
                position: {"lat": -36.3151251474805, "lng": 368.43750000000006},
                target_layer: "surface",
                target_layer_position: {"lat": 75.53905507152787, "lng": 292.84606933593756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Crandor',
                position: {"lat": 64.77412531292873, "lng": 334.51171875000006},
                target_layer: "surface",
                target_layer_position: {"lat": 76.92061351829683, "lng": 291.39587402343756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 61.270232790000634,
                    "lng": 339.78515625000006
                },
                "title": "Skeletons",
                "description": null
            },
            {
                "position": {
                    "lat": 49.83798245308484,
                    "lng": 364.5703125
                },
                "title": "Elvarg",
                "description": null
            },
            {
                "position": {
                    "lat": 18.145851771694467,
                    "lng": 343.30078125
                },
                "title": "Lesser Demons",
                "description": null
            },
            {
                "position": {
                    "lat": -18.979025953255267,
                    "lng": 337.50000000000006
                },
                "title": "Red Spiders",
                "description": null
            },
            {
                "position": {
                    "lat": -44.96479793033102,
                    "lng": 340.83984375
                },
                "title": "Lesser<br>Demons",
                "description": null
            },
            {
                "position": {
                    "lat": -32.39851580247402,
                    "lng": 371.77734375000006
                },
                "title": "Skeletons",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'entrana_dungeon',
        full_name: 'Entrana Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -2.811371193331128, "lng": 350.15625},
        exits: [
            {
                label: 'To Entrana',
                position: {"lat": 13.581920900545857, "lng": 329.41406250000006},
                target_layer: "surface",
                target_layer_position: {"lat": 78.56811211767257, "lng": 290.4757690429688},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 13.410994034321702,
                    "lng": 348.57421875000006
                },
                "title": "Zombies",
                "description": null
            },
            {
                "position": {
                    "lat": -8.059229627200192,
                    "lng": 362.8125
                },
                "title": "Greater Demons",
                "description": null
            },
            {
                "position": {
                    "lat": -28.92163128242129,
                    "lng": 374.06250000000006
                },
                "title": "Dramen<br>Tree",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'ham_chests',
        full_name: 'Ham Storerooms',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -7.710991655433217, "lng": 350.85937500000006},
        exits: [
            {
                label: 'To Ham Hideout',
                position: {"lat": -27.839076094777816, "lng": 344.35546875000006},
                target_layer: "ham_hideout",
                target_layer_position: {"lat": -9.622414142924805, "lng": 354.55078125000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'ham_hideout',
        full_name: 'Ham Hideout',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 3.162455530237848, "lng": 353.32031250000006},
        exits: [
            {
                label: 'To behind Lumbridge Castle',
                position: {"lat": 31.80289258670676, "lng": 330.29296875000006},
                target_layer: "surface",
                target_layer_position: {"lat": 76.86018605548628, "lng": 313.21472167968756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'witchhaven_dungeon2',
        full_name: 'Witchaven Dungeon (Second Section)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -2.6357885741666065, "lng": 360.87890625000006},
        exits: [
            {
                label: 'To Witchaven (First Section)',
                position: {"lat": 27.994401411046148, "lng": 337.67578125},
                target_layer: "witchhaven_dungeon",
                target_layer_position: {"lat": -7.01366792756663, "lng": 329.76562500000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 6.315298538330033,
                    "lng": 329.94140625000006
                },
                "title": "Giant Lobsters",
                "description": null
            },
            {
                "position": {
                    "lat": 16.97274101999902,
                    "lng": 377.92968750000006
                },
                "title": "Slug<br>Prince",
                "description": null
            }
        ],
        icons: {
            agility_shortcuts: [
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 15.453680224345835, "lng": 350.15625},
                    title: "Agility Shortcut",
                    description: "No documentation online for this spot so please let me know!",
                    category: Categories.AGILITY_SHORTCUT
                }
            ]
        }
    },
    {
        machine_name: 'witchhaven_dungeon',
        full_name: 'Witchaven Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -5.615985819155327, "lng": 359.12109375000006},
        exits: [
            {
                label: 'To Witchaven',
                position: {"lat": -14.944784875088372, "lng": 322.91015625000006},
                target_layer: "surface",
                target_layer_position: {"lat": 77.31794795705102, "lng": 282.2964477539063},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 12.55456352859367,
                    "lng": 343.125
                },
                "title": "Hobgoblins",
                "description": null
            },
            {
                "position": {
                    "lat": -4.740675384778361,
                    "lng": 356.30859375000006
                },
                "title": "Ogres",
                "description": null
            },
            {
                "position": {
                    "lat": -8.059229627200192,
                    "lng": 384.08203125000006
                },
                "title": "Hellhounds",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'clock_tower_dungeon',
        full_name: 'Clock Tower Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 19.228176737766262, "lng": 349.18945312500006},
        exits: [
            {
                label: 'To Clock Tower',
                position: {"lat": 28.304380682962783, "lng": 320.44921875000006},
                target_layer: "surface",
                target_layer_position: {"lat": 76.61508618356306, "lng": 273.98254394531256},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": -16.299051014581817,
                    "lng": 348.39843750000006
                },
                "title": "Ogres",
                "description": null
            },
            {
                "position": {
                    "lat": 24.367113562651276,
                    "lng": 359.82421875
                },
                "title": "Spiders",
                "description": null
            },
            {
                "position": {
                    "lat": 47.989921667414194,
                    "lng": 323.43750000000006
                },
                "title": "Goblins",
                "description": null
            },
            {
                "position": {
                    "lat": 44.715513732021336,
                    "lng": 349.62890625000006
                },
                "title": "Dungeon Rats",
                "description": null
            },
            {
                "position": {
                    "lat": 13.752724664396988,
                    "lng": 389.1796875
                },
                "title": "Goblins",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'ardougne_sewers',
        full_name: 'Ardougne Sewers',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -13.410994034321702, "lng": 352.44140625},
        exits: [
            {
                label: 'To East of Clock Tower',
                position: {"lat": 8.059229627200192, "lng": 358.94531250000006},
                target_layer: "surface",
                target_layer_position: {"lat": 76.60236402946751, "lng": 275.10864257812506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": -1.0546279422758742,
                    "lng": 411.328125
                },
                "title": "Hazel<br>Cult",
                "description": null
            },
            {
                "position": {
                    "lat": 28.304380682962783,
                    "lng": 368.78906250000006
                },
                "title": "Dungeon<br>Rat",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'temple_of_ikov',
        full_name: 'Temple of Ikov',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -4.039617826768424, "lng": 326.64550781250006},
        exits: [
            {
                label: 'To Hemenster',
                position: {"lat": -49.15296965617039, "lng": 341.54296875000006},
                target_layer: "surface",
                target_layer_position: {"lat": 78.95403363474128, "lng": 281.03576660156256},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 68.52823492039879,
                    "lng": 281.95312500000006
                },
                "title": "Aymadyl<br>Staff",
                "description": null
            },
            {
                "position": {
                    "lat": 61.10078883158897,
                    "lng": 293.20312500000006
                },
                "title": "Guardians of<br>Armadyl",
                "description": null
            },
            {
                "position": {
                    "lat": 20.632784250388028,
                    "lng": 273.86718750000006
                },
                "title": "Key",
                "description": null
            },
            {
                "position": {
                    "lat": 40.17887331434698,
                    "lng": 303.75000000000006
                },
                "title": "Winelda",
                "description": null
            },
            {
                "position": {
                    "lat": 26.745610382199022,
                    "lng": 296.71875000000006
                },
                "title": "Fire<br>Warrioir",
                "description": null
            },
            {
                "position": {
                    "lat": 9.102096738726456,
                    "lng": 326.95312500000006
                },
                "title": "Lever",
                "description": null
            },
            {
                "position": {
                    "lat": -21.94304553343818,
                    "lng": 284.06250000000006
                },
                "title": "Lever<br>Part",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'warriors_guild_basement',
        full_name: 'Warriors Guild Basement',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -1.5818302639606454, "lng": 362.28515625},
        exits: [
            {
                label: 'To Warriors guild',
                position: {"lat": 4.214943141390651, "lng": 337.8515625},
                target_layer: "surface",
                target_layer_position: {"lat": 80.56724664616632, "lng": 291.32995605468756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": -0.7031073524364783,
                    "lng": 360
                },
                "title": "Cyclopes",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'paterdomus_template_basement',
        full_name: 'Paterdomus Template Basement',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -3.864254615721396, "lng": 354.7265625},
        exits: [{
            label: 'To Paterdomus Temple',
            position: {"lat": 19.642587534013032, "lng": 330.29296875000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 80.17074580045627,
                "lng": 329.02954101562506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To Morytania',
            position: {"lat": -8.233237111274553, "lng": 379.6875},
            target_layer: "surface",
            target_layer_position: {
                "lat": 79.92823592380245,
                "lng": 330.16113281250006
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [
            {
                "position": {
                    "lat": 12.726084296948196,
                    "lng": 328.88671875000006
                },
                "title": "Temple<br>Guardian",
                "description": null
            }
        ],
        icons: {
            quests: [
                {
                    title: "Nature Spirit",
                    iconUrl: require('../../static/icons/misc/Quest_start_icon.png'),
                    className: Categories.QUESTS,
                    position: {"lat": 1.5818302639606454, "lng": 379.6875},
                    difficulty: "Novice",
                    length: "Medium",
                    quest_points: 2,
                    quests_required: [
                        "Priest in Peril",
                        "The Restless Ghost"
                    ],
                    skills_required: [
                        questSkill(18, "Crafting")
                    ],
                    full_guide: "https://oldschool.runescape.wiki/w/Nature_Spirit",
                    category: Categories.QUESTS
                },
            ]
        }
    },
    {
        machine_name: 'tutorial_island_cave',
        full_name: 'Tutorial Island Cave',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 4.5654735507102915, "lng": 353.67187500000006},
        exits: [{
            label: 'To Quest Tutorial',
            position: {"lat": 14.093957177836224, "lng": 345.5859375},
            target_layer: "surface",
            target_layer_position: {
                "lat": 74.71224441731964,
                "lng": 308.13903808593756
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To Friends Tutorial',
            position: {"lat": 23.07973176244989, "lng": 378.80859375000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 74.83487278379204,
                "lng": 309.64965820312506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'kbd_lair',
        full_name: 'King Black Dragon Lair',
        icon: require('../../static/icons/misc/Transportation_icon.png'),
        center_pos: {"lat": 3.8642546157214084, "lng": 353.49609375000006},
        exits: [{
            label: 'To Lava Maze Dungeon',
            position: {"lat": -18.145851771694467, "lng": 356.30859375000006},
            target_layer: "lava_maze_dungeon",
            target_layer_position: {"lat": -12.897489183755892, "lng": 399.19921875},
            icon: require('../../static/icons/misc/Transportation_icon.png')
        },],
        map_labels: [
            {
                "position": {
                    "lat": 6.140554782450308,
                    "lng": 354.02343750000006
                },
                "title": "King Black<br>Dragon",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'lava_maze_dungeon',
        full_name: 'Lava Maze Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -13.752724664396988, "lng": 364.04296875000006},
        exits: [{
            label: 'Center of Lava Dragon Maze',
            position: {"lat": -26.43122806450644, "lng": 326.60156250000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 83.4199002425892,
                "lng": 306.8893432617188
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'West of Lava Dragon Maze',
            position: {"lat": -20.3034175184893, "lng": 397.08984375000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 83.36744691299643,
                "lng": 303.45886230468756
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [
            {
                "position": {
                    "lat": 0,
                    "lng": 367.20703125
                },
                "title": "Black<br>Dragons",
                "description": null
            },
            {
                "position": {
                    "lat": -15.284185114076433,
                    "lng": 391.11328125000006
                },
                "title": "Poision<br>Spiders",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'rev_caves',
        full_name: 'Revenant Caves',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 34.59704151614417, "lng": 373.18359375000006},
        exits: [{
            label: 'To Level 40 wilderness',
            position: {"lat": 78.97138592818219, "lng": 413.96484375},
            target_layer: "surface",
            target_layer_position: {
                "lat": 83.23642648170203,
                "lng": 310.57250976562506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To Level 17 wilderness',
            position: {"lat": -75.67219739055291, "lng": 348.75000000000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 81.71290123447507,
                "lng": 307.28210449218756
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [
            {
                "position": {
                    "lat": -68.65655498475736,
                    "lng": 353.32031250000006
                },
                "title": "Hellhounds",
                "description": null
            },
            {
                "position": {
                    "lat": -69.90011762668541,
                    "lng": 393.39843750000006
                },
                "title": "Green<br>Dragons",
                "description": null
            },
            {
                "position": {
                    "lat": -52.26815737376817,
                    "lng": 377.57812500000006
                },
                "title": "Green Dragons",
                "description": null
            },
            {
                "position": {
                    "lat": -34.016241889667015,
                    "lng": 294.96093750000006
                },
                "title": "Lesser Demons",
                "description": null
            },
            {
                "position": {
                    "lat": -12.211180191503997,
                    "lng": 387.77343750000006
                },
                "title": "Greater<br>Demons",
                "description": null
            },
            {
                "position": {
                    "lat": 31.353636941500987,
                    "lng": 362.8125
                },
                "title": "Ice<br>Giants",
                "description": null
            },
            {
                "position": {
                    "lat": 18.646245142670608,
                    "lng": 318.16406250000006
                },
                "title": "Black<br>Demons",
                "description": null
            },
            {
                "position": {
                    "lat": 58.81374171570782,
                    "lng": 317.46093750000006
                },
                "title": "Ankou",
                "description": null
            },
            {
                "position": {
                    "lat": 66.23145747862573,
                    "lng": 409.92187500000006
                },
                "title": "Black<br>Dragons",
                "description": null
            },
            {
                "position": {
                    "lat": 40.44694705960048,
                    "lng": 417.30468750000006
                },
                "title": "Revenants",
                "description": null
            }
        ],
        icons: {
            agility_shortcuts: [{
                iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                className: Categories.AGILITY_SHORTCUT,
                position: {"lat": 68.65655498475738, "lng": 330.38085937500006},
                title: "Agility Shortcut",
                description: "Jump (75 Agility)",
                category: Categories.AGILITY_SHORTCUT
            }, {
                iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                className: Categories.AGILITY_SHORTCUT,
                position: {"lat": 60.326947742998414, "lng": 360.087890625},
                title: "Agility Shortcut",
                description: "Jump (75 Agility)",
                category: Categories.AGILITY_SHORTCUT
            }, {
                iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                className: Categories.AGILITY_SHORTCUT,
                position: {"lat": -8.407168163601076, "lng": 357.09960937500006},
                title: "Agility Shortcut",
                description: "Jump (75 Agility)",
                category: Categories.AGILITY_SHORTCUT
            }, {
                iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                className: Categories.AGILITY_SHORTCUT,
                position: {"lat": -60.930432202923335, "lng": 386.54296875000006},
                title: "Agility Shortcut",
                description: "Jump (65 Agility)",
                category: Categories.AGILITY_SHORTCUT
            }, {
                iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                className: Categories.AGILITY_SHORTCUT,
                position: {"lat": 4.214943141390651, "lng": 414.66796875000006},
                title: "Agility Shortcut",
                description: "Jump (89 Agility)",
                category: Categories.AGILITY_SHORTCUT
            },]
        }
    },
    {
        machine_name: 'goblin_cooks_room',
        full_name: 'Goblin Cook\'s Basement',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 3.5134210456400448, "lng": 362.98828125000006},
        exits: [{
            label: 'To Goblin Village',
            position: {"lat": 9.96885060854611, "lng": 365.44921875000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 80.17590209883195,
                "lng": 299.80041503906256
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'falador_mole_cave',
        full_name: 'Falador Mole Cave',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 13.239945499286312, "lng": 356.48437500000006},
        exits: [{
            label: 'To Falador South',
            position: {"lat": -52.26815737376817, "lng": 346.11328125000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 78.59638534707328,
                "lng": 302.20092773437506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To Falador Park',
            position: {"lat": 62.34960927573042, "lng": 344.70703125000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 78.59638534707328,
                "lng": 302.20092773437506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [
            {
                "position": {
                    "lat": 9.795677582829743,
                    "lng": 357.890625
                },
                "title": "Giant Mole<br>Spawn",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'lumbridge_basement',
        full_name: 'Lumbridge Basement',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 9.96885060854611, "lng": 352.79296875},
        exits: [{
            label: 'To Lumbridge Castle',
            position: {"lat": 4.740675384778373, "lng": 346.99218750000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 76.33892882834353,
                "lng": 316.1123657226563
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [],
        icons: {
            quests: [
                {
                    title: "Death to the Dorgeshuun",
                    iconUrl: require('../../static/icons/misc/Quest_start_icon.png'),
                    className: Categories.QUESTS,
                    position: {"lat": 1.3182430568620136, "lng": 366.76757812500006},
                    difficulty: "Intermediate",
                    length: "Medium",
                    quest_points: 1,
                    quests_required: [
                        "The Lost Tribe",
                        "Goblin Diplomacy",
                        "Rune Mysteries"
                    ],
                    skills_required: [
                        questSkill(23, "Agility"),
                        questSkill(23, "Thieving")

                    ],
                    full_guide: "https://oldschool.runescape.wiki/w/Death_to_the_Dorgeshuun",
                    category: Categories.QUESTS
                },
            ]
        }
    },
    {
        machine_name: 'essence_mine',
        full_name: 'Essence Mine',
        icon: require('../../static/icons/misc/Transportation_icon.png'),
        center_pos: {
            "lat": 25.005972656239187,
            "lng": 332.75390625000006
        },
        exits: [{
            label: 'Back out the way you came in',
            position: {"lat": 29.6880527498568, "lng": 317.63671875000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 78.89335256331809,
                "lng": 319.1143798828125
            },
            icon: require('../../static/icons/misc/Transportation_icon.png')
        }, {
            label: 'Back out the way you came in',
            position: {"lat": 33.284619968887675, "lng": 385.31250000000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 78.89335256331809,
                "lng": 319.1143798828125
            },
            icon: require('../../static/icons/misc/Transportation_icon.png')
        }, {
            label: 'Back out the way you came in',
            position: {"lat": -18.979025953255267, "lng": 386.71875},
            target_layer: "surface",
            target_layer_position: {
                "lat": 78.89335256331809,
                "lng": 319.1143798828125
            },
            icon: require('../../static/icons/misc/Transportation_icon.png')
        }, {
            label: 'Back out the way you came in',
            position: {"lat": -21.616579336740603, "lng": 324.84375000000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 78.89335256331809,
                "lng": 319.1143798828125
            },
            icon: require('../../static/icons/misc/Transportation_icon.png')
        },],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'wizards_tower_basement',
        full_name: 'Wizards Tower Basement',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 3.601142320158735, "lng": 350.244140625},
        exits: [{
            label: 'To Wizards Tower',
            position: {"lat": 15.876809064146771, "lng": 344.44335937500006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 75.44479062156888,
                "lng": 309.1937255859375
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To Essence Mine',
            position: {"lat": 9.882275493429953, "lng": 348.83789062500006},
            target_layer: "essence_mine",
            target_layer_position: {
                "lat": 78.89335256331809,
                "lng": 319.1143798828125
            },
            icon: require('../../static/icons/misc/Transportation_icon.png')
        },],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'asgarnian_ice_dungeon',
        full_name: 'Asgarnian Ice Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -13.581920900545844, "lng": 366.85546875000006},
        exits: [{
            label: 'To Mudskipper Point',
            position: {"lat": -30.29701788337204, "lng": 322.73437500000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 75.24326541978712,
                "lng": 302.86010742187506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [
            {
                "position": {
                    "lat": -33.137551192346145,
                    "lng": 306.91406250000006
                },
                "title": "Muggers",
                "description": null
            },
            {
                "position": {
                    "lat": 6.664607562172573,
                    "lng": 299.53125000000006
                },
                "title": "Pirates",
                "description": null
            },
            {
                "position": {
                    "lat": 15.961329081596647,
                    "lng": 340.6640625
                },
                "title": "Hobgolbins",
                "description": null
            },
            {
                "position": {
                    "lat": 17.644022027872726,
                    "lng": 378.98437500000006
                },
                "title": "Ice warrioirs",
                "description": null
            },
            {
                "position": {
                    "lat": 4.214943141390651,
                    "lng": 386.71875
                },
                "title": "Ice Giants",
                "description": null
            },
            {
                "position": {
                    "lat": -8.059229627200192,
                    "lng": 416.25
                },
                "title": "Skeletal Wyverns",
                "description": null
            },
            {
                "position": {
                    "lat": -35.17380831799957,
                    "lng": 374.06250000000006
                },
                "title": "Skeletal Wyverns",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'draynor_manor_crypt',
        full_name: 'Draynor Manor Crypt',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -0.17578097424708533, "lng": 353.67187500000006},
        exits: [{
            label: 'To Draynor Manor',
            position: {"lat": -6.315298538330033, "lng": 352.96875},
            target_layer: "surface",
            target_layer_position: {
                "lat": 78.3471918724007,
                "lng": 309.91333007812506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'draynor_manor_dungeon',
        full_name: 'Draynor Manor Basement',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -4.039617826768424, "lng": 361.40625000000006},
        exits: [{
            label: 'To Draynor Manor',
            position: {"lat": -3.864254615721396, "lng": 373.00781250000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 78.4102651631265,
                "lng": 308.39721679687506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'tears_of_guthix_cavern_2',
        full_name: 'Tears of guthix cavern',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 7.18810087117902, "lng": 360.87890625000006},
        exits: [{
            label: 'To Lumbridge Swamp Cave',
            position: {"lat": 41.902277040963696, "lng": 338.90625000000006},
            target_layer: "lumbridge_swamp_cave",
            target_layer_position: {"lat": -31.503629305773018, "lng": 392.34375000000006},
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }],
        map_labels: [],
        icons: {
            quests: [
                {
                    title: "Tears of Guthix",
                    iconUrl: require('../../static/icons/misc/Quest_start_icon.png'),
                    className: Categories.QUESTS,
                    position: {"lat": 21.94304553343818, "lng": 385.31250000000006},
                    difficulty: "Intermediate",
                    length: "Very Short",
                    quest_points: 1,
                    quests_required: [],
                    skills_required: [
                        questSkill(43, "Quest Points"),
                        questSkill(49, "Firemaking"),
                        questSkill(20, "Crafting"),
                        questSkill(20, "Mining")
                    ],
                    full_guide: "https://oldschool.runescape.wiki/w/Tears_of_Guthix",
                    category: Categories.QUESTS
                },
            ]
        }
    },
    {
        machine_name: 'lumbridge_swamp_cave',
        full_name: 'Lumbridge Swamp Cave',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 7.18810087117902, "lng": 360.87890625000006},
        exits: [{
            label: 'To Lumbridge Swamp',
            position: {"lat": 9.96885060854611, "lng": 313.9453125},
            target_layer: "surface",
            target_layer_position: {
                "lat": 75.60611830430058,
                "lng": 313.48388671875006
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To Lumbridge Basement',
            position: {"lat": 43.96119063892027, "lng": 389.53125},
            target_layer: "lumbridge_basement",
            target_layer_position: {"lat": -16.63619187839765, "lng": 367.91015625000006},
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }],
        map_labels: [
            {
                "position": {
                    "lat": -20.632784250388028,
                    "lng": 390.58593750000006
                },
                "title": "Giant Frog",
                "description": null
            },
            {
                "position": {
                    "lat": 23.241346102386135,
                    "lng": 388.82812500000006
                },
                "title": "Rockslugs",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'stronghold_of_security_sepulchre_of_death',
        full_name: 'Stronghold of Security SurfaceLayer (Pit of Pestilence)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 3.337953961416485, "lng": 362.63671875},
        exits: [{
            label: 'To Pit of Pestilence',
            position: {"lat": 35.746512259918504, "lng": 320.27343750000006},
            target_layer: "stronghold_of_security_pit_of_pestilence",
            target_layer_position: {
                "lat": 79.15377632309713,
                "lng": 307.67211914062506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To Barbarian Village',
            position: {"lat": 3.162455530237848, "lng": 376.875},
            target_layer: "surface",
            target_layer_position: {
                "lat": 79.15377632309713,
                "lng": 307.67211914062506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [
            {
                "position": {
                    "lat": 21.616579336740603,
                    "lng": 336.62109375000006
                },
                "title": "Ankous &<br>Ghosts",
                "description": null
            },
            {
                "position": {
                    "lat": 37.020098201368114,
                    "lng": 389.1796875
                },
                "title": "Ankous",
                "description": null
            },
            {
                "position": {
                    "lat": 0.8788717828324276,
                    "lng": 390.93750000000006
                },
                "title": "Shades",
                "description": null
            },
            {
                "position": {
                    "lat": -15.961329081596647,
                    "lng": 343.125
                },
                "title": "Ankous &<br>Ghosts",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'stronghold_of_security_pit_of_pestilence',
        full_name: 'Stronghold of Security SurfaceLayer (Pit of Pestilence)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 4.915832801313164, "lng": 357.890625},
        exits: [{
            label: 'To Catacomb of Famine',
            position: {"lat": -33.7243396617476, "lng": 328.00781250000006},
            target_layer: "stronghold_of_security_catacomb_of_famine",
            target_layer_position: {
                "lat": 79.15377632309713,
                "lng": 307.67211914062506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To Sepulchre of Death',
            position: {"lat": 1.2303741774326145, "lng": 365.62500000000006},
            target_layer: "stronghold_of_security_sepulchre_of_death",
            target_layer_position: {
                "lat": 79.15377632309713,
                "lng": 307.67211914062506
            },
            icon: require('../../static/icons/misc/Dungeon_icon.webp')
        }, {
            label: 'To Barbarian Village',
            position: {"lat": 10.14193168613103, "lng": 363.33984375000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 79.15377632309713,
                "lng": 307.67211914062506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [
            {
                "position": {
                    "lat": 32.24997445586331,
                    "lng": 326.25000000000006
                },
                "title": "Catablepons",
                "description": null
            },
            {
                "position": {
                    "lat": 38.272688535980976,
                    "lng": 363.69140625000006
                },
                "title": "Scorpions",
                "description": null
            },
            {
                "position": {
                    "lat": -6.839169626342808,
                    "lng": 328.53515625
                },
                "title": "Spiders",
                "description": null
            },
            {
                "position": {
                    "lat": -18.646245142670608,
                    "lng": 365.44921875000006
                },
                "title": "Spiders",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'stronghold_of_security_catacomb_of_famine',
        full_name: 'Stronghold of Security SurfaceLayer (Catacomb of Famine)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 3.6888551431470478, "lng": 363.51562500000006},
        exits: [{
            label: 'To Vault of War',
            position: {"lat": 41.50857729743935, "lng": 393.22265625000006},
            target_layer: "stronghold_of_security_vault_of_war",
            target_layer_position: {"lat": 12.55456352859367, "lng": 376.875},
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To Pit of Pestilence',
            position: {"lat": 7.36246686553575, "lng": 370.1953125},
            target_layer: "stronghold_of_security_pit_of_pestilence",
            target_layer_position: {
                "lat": 79.15377632309713,
                "lng": 307.67211914062506
            },
            icon: require('../../static/icons/misc/Dungeon_icon.webp')
        }, {
            label: 'To Barbarian Village',
            position: {"lat": -3.513421045640032, "lng": 359.29687500000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 79.15377632309713,
                "lng": 307.67211914062506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [
            {
                "position": {
                    "lat": 31.80289258670676,
                    "lng": 366.67968750000006
                },
                "title": "Flesh Crawlers & Zombies",
                "description": null
            },
            {
                "position": {
                    "lat": -22.268764039073968,
                    "lng": 332.05078125000006
                },
                "title": "Giant Rats<br>Zombies",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'stronghold_of_security_vault_of_war',
        full_name: 'Stronghold of Security SurfaceLayer (Vault of War)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 4.214943141390651, "lng": 352.44140625},
        exits: [{
            label: 'To Barbarian Village',
            position: {"lat": 39.63953756436671, "lng": 316.75781250000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 79.15377632309713,
                "lng": 307.67211914062506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To Catacomb of Famine',
            position: {"lat": 12.55456352859367, "lng": 376.875},
            target_layer: "stronghold_of_security_catacomb_of_famine",
            target_layer_position: {"lat": 41.77131167976407, "lng": 393.75000000000006},
            icon: require('../../static/icons/misc/Dungeon_icon.webp')
        }, {
            label: 'To Barbarian Village',
            position: {"lat": 18.312810846425457, "lng": 392.69531250000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 79.15377632309713,
                "lng": 307.67211914062506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [
            {
                "position": {
                    "lat": 13.239945499286312,
                    "lng": 315.00000000000006
                },
                "title": "Goblins",
                "description": null
            },
            {
                "position": {
                    "lat": -13.581920900545844,
                    "lng": 317.10937500000006
                },
                "title": "Goblins",
                "description": null
            },
            {
                "position": {
                    "lat": -32.249974455863295,
                    "lng": 327.30468750000006
                },
                "title": "Minotaurs",
                "description": null
            },
            {
                "position": {
                    "lat": 6.140554782450308,
                    "lng": 340.13671875
                },
                "title": "Mina-<br>taurs",
                "description": null
            },
            {
                "position": {
                    "lat": -14.093957177836224,
                    "lng": 350.33203125
                },
                "title": "Goblins",
                "description": null
            },
            {
                "position": {
                    "lat": -28.14950321154457,
                    "lng": 365.97656250000006
                },
                "title": "Wolves",
                "description": null
            },
            {
                "position": {
                    "lat": 9.96885060854611,
                    "lng": 358.94531250000006
                },
                "title": "Wolves",
                "description": null
            },
            {
                "position": {
                    "lat": 35.60371874069731,
                    "lng": 389.35546875
                },
                "title": "Goblins",
                "description": null
            }
        ],
        icons: {}
    },
    {
        machine_name: 'misthalin_mystery',
        full_name: 'Misthalin Mystery Manor',
        icon: require('../../static/icons/misc/Transportation_icon.png'),
        center_pos: {
            "lat": 19.89072302399691,
            "lng": 326.25000000000006
        },
        exits: [{
            label: 'To Lumbridge Swamp',
            position: {"lat": -26.902476886279807, "lng": 340.83984375},
            target_layer: "surface",
            target_layer_position: {
                "lat": 75.09139350771163,
                "lng": 318.0844116210938
            },
            icon: require('../../static/icons/misc/Transportation_icon.png')
        },],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'zanaris',
        full_name: 'Zanaris',
        icon: require('../../static/icons/misc/Map_link_icon.webp'),
        center_pos: {
            "lat": 37.30027528134433,
            "lng": 330.46875000000006
        },
        exits: [{
            label: 'To Lumbridge Swamp',
            position: {
                "lat": -500.864254615721396,
                "lng": 238.71093750000003
            },
            target_layer: "surface",
            target_layer_position: {
                "lat": 75.56441072170146,
                "lng": 315.7553100585938
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [
            {
                "position": {
                    "lat": 18.646245142670608,
                    "lng": 275.27343750000006
                },
                "title": "Otherworldly<br>Beings",
                "description": null
            },
            {
                "position": {
                    "lat": 47.040182144806664,
                    "lng": 337.14843750000006
                },
                "title": "Puro-<br>Puro",
                "description": null
            },
            {
                "position": {
                    "lat": 39.095962936305476,
                    "lng": 412.03125000000006
                },
                "title": "Market",
                "description": null
            },
            {
                "position": {
                    "lat": 70.8446726342528,
                    "lng": 374.4140625
                },
                "title": "Shrine",
                "description": null
            },
            {
                "position": {
                    "lat": 21.94304553343818,
                    "lng": 364.921875
                },
                "title": "Throne<br>Room",
                "description": null
            },
            {
                "position": {
                    "lat": -42.29356419217008,
                    "lng": 269.29687500000006
                },
                "title": "Tanglefeet",
                "description": null
            },
            {
                "position": {
                    "lat": -44.33956524809713,
                    "lng": 314.64843750000006
                },
                "title": "Cosmic<br>Altar",
                "description": null
            }
        ],
        icons: {
            agility_shortcuts: [
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": -13.923403897723347, "lng": 300.93750000000006},
                    title: "Agility Shortcut",
                    description: "Wall Squeeze (46 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                },
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": -16.46769474828897, "lng": 313.41796875000006},
                    title: "Agility Shortcut",
                    description: "Wall Squeeze (66 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                },
            ]

        }
    },
    {
        machine_name: 'edgeville_dungeon_and_varrock_sewers',
        full_name: 'Edgeville dungeon and Varrock sewers',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        icon_scale: 1.2,
        center_pos: {"lat": 2.4601811810210052, "lng": 335.39062500000006},
        exits: [{
            label: 'To Edgeville',
            position: {"lat": -33.57801474614399, "lng": 245.74218750000003},
            target_layer: "surface",
            target_layer_position: {
                "lat": 79.74553248351053,
                "lng": 308.73229980468756
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To Varrock East',
            position: {"lat": -43.96119063892026, "lng": 442.44140625000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 79.61613848377318,
                "lng": 317.96630859375006
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To Varrock Bear Cage',
            position: {"lat": 15.961329081596647, "lng": 432.77343750000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 80.14915404852314,
                "lng": 317.49389648437506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To hut west of Varrock',
            position: {"lat": -49.38237278700955, "lng": 272.98828125000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 79.5446087817067,
                "lng": 309.98474121093756
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To Air Obelisk',
            position: {"lat": 73.27735320192473, "lng": 233.26171875000003},
            target_layer: "surface",
            target_layer_position: {
                "lat": 80.87718298659169,
                "lng": 308.13354492187506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [
            {
                "position": {
                    "lat": -62.26792262941758,
                    "lng": 262.96875000000006
                },
                "title": "Hill Giants",
                "description": null
            },
            {
                "position": {
                    "lat": -36.03133177633188,
                    "lng": 277.73437500000006
                },
                "title": "Hobgoblins",
                "description": null
            },
            {
                "position": {
                    "lat": 2.1088986592431382,
                    "lng": 274.92187500000006
                },
                "title": "Skeletons &<br>Zombies",
                "description": null
            },
            {
                "position": {
                    "lat": 44.33956524809713,
                    "lng": 267.53906250000006
                },
                "title": "Chaos<br>Druids",
                "description": null
            },
            {
                "position": {
                    "lat": 48.45835188280866,
                    "lng": 296.01562500000006
                },
                "title": "Thugs",
                "description": null
            },
            {
                "position": {
                    "lat": 69.28725695167886,
                    "lng": 233.08593750000003
                },
                "title": "Black Demons",
                "description": null
            },
            {
                "position": {
                    "lat": 61.93895042666063,
                    "lng": 231.67968750000003
                },
                "title": "Poison<br>Spiders",
                "description": null
            },
            {
                "position": {
                    "lat": 47.754097979680026,
                    "lng": 230.2734375
                },
                "title": "Chronozon",
                "description": null
            },
            {
                "position": {
                    "lat": 80.64703474739618,
                    "lng": 280.54687500000006
                },
                "title": "Earth<br>Warriors",
                "description": null
            },
            {
                "position": {
                    "lat": 65.36683689226321,
                    "lng": 290.74218750000006
                },
                "title": "Red<br>Spiders",
                "description": null
            },
            {
                "position": {
                    "lat": -13.581920900545844,
                    "lng": 364.5703125
                },
                "title": "Red<br>Spiders",
                "description": null
            },
            {
                "position": {
                    "lat": 0.7031073524364909,
                    "lng": 330.82031250000006
                },
                "title": "Moss<br>Giants",
                "description": null
            },
            {
                "position": {
                    "lat": -32.842673631954305,
                    "lng": 440.859375
                },
                "title": "Rats",
                "description": null
            }
        ],
        icons: {
            agility_shortcuts: [{
                iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                className: Categories.AGILITY_SHORTCUT,
                position: {"lat": 16.720385051694, "lng": 324.84375000000006},
                title: "Agility Shortcut",
                description: "Pipe Squeeze (51 Agility)",
                category: Categories.AGILITY_SHORTCUT
            },]
        }
    },
    {
        machine_name: 'dwarven_mine',
        full_name: 'Dwarven Mine',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 25.64152637306577, "lng": 357.890625},
        exits: [{
            label: 'To Dwarven Mine Entrance',
            position: {"lat": 72.91963546581484, "lng": 350.15625},
            target_layer: "surface",
            target_layer_position: {
                "lat": 79.52265545122708,
                "lng": 303.53027343750006
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To Falador Entrance',
            position: {"lat": 4.5654735507102915, "lng": 406.05468750000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 78.60724128404506,
                "lng": 306.221923828125
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To Mining Guild Entrance',
            position: {"lat": -43.06888777416962, "lng": 350.15625},
            target_layer: "surface",
            target_layer_position: {
                "lat": 78.10339245316887,
                "lng": 303.58795166015625
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }],
        map_labels: [
            {
                "position": {
                    "lat": 48.45835188280866,
                    "lng": 273.51562500000006
                },
                "title": "Hammerspike's<br>Hangout",
                "description": null
            },
            {
                "position": {
                    "lat": 19.311143355064655,
                    "lng": 385.66406250000006
                },
                "title": "Scorpions",
                "description": null
            },
            {
                "position": {
                    "lat": -46.07323062540835,
                    "lng": 366.67968750000006
                },
                "title": "Mining<br>Guild",
                "description": null
            }
        ],
        icons: {
            agility_shortcuts: [{
                iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                className: Categories.AGILITY_SHORTCUT,
                position: {"lat": 42.09822241118974, "lng": 372.65625000000006},
                title: "Agility Shortcut",
                description: "Wall Crevice (42 Agility)",
                category: Categories.AGILITY_SHORTCUT
            },]
        }
    },
    {
        machine_name: 'motherlode_mine',
        full_name: 'Motherlode Mine',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        icon_scale: 1.2,
        center_pos: {"lat": 7.885147283424331, "lng": 362.8125},
        exits: [{
            label: 'To Dwarven Mine',
            position: {"lat": 40.713955826286046, "lng": 334.51171875000006},
            target_layer: "dwarven_mine",
            target_layer_position: {"lat": -12.46876014482322, "lng": 407.63671875000006},
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To Dwarven Mine (Mining Guild)',
            position: {"lat": 23.885837699862005, "lng": 318.8671875},
            target_layer: "dwarven_mine",
            target_layer_position: {"lat": -37.718590325588146, "lng": 402.01171875000006},
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [],
        icons: {
            agility_shortcuts: [{
                iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                className: Categories.AGILITY_SHORTCUT,
                position: {"lat": 12.640338306846802, "lng": 378.28125000000006},
                title: "Agility Shortcut",
                description: "Wall shortcut (54 Agility)\nRequires Falador Medium Diary",
                category: Categories.AGILITY_SHORTCUT
            }, {
                iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                className: Categories.AGILITY_SHORTCUT,
                position: {"lat": 14.093957177836224, "lng": 386.71875},
                title: "Agility Shortcut",
                description: "Wall shortcut (54 Agility)\nRequires Falador Medium Diary",
                category: Categories.AGILITY_SHORTCUT
            },]
        }
    },
    {
        machine_name: 'taverly_dungeon_upper',
        full_name: 'Taverly Dungeon (Upper)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -3.513421045640032, "lng": 377.92968750000006},
        exits: [
            {
                label: 'To Taverly Dungeon',
                position: {"lat": 17.14079039331665, "lng": 369.14062500000006},
                target_layer: "taverly_dungeon",
                target_layer_position: {"lat": 68.52823492039879, "lng": 346.99218750000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Taverly Dungeon (Blue Dragons)',
                position: {"lat": 0.3515602939922709, "lng": 402.18750000000006},
                target_layer: "taverly_dungeon",
                target_layer_position: {"lat": 61.85614879566797, "lng": 380.03906250000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 14.944784875088372,
                    "lng": 323.08593750000006
                },
                "title": "Baby Black<br>Dragons",
                "description": null
            },
            {
                "position": {
                    "lat": 14.093957177836224,
                    "lng": 242.40234375000003
                },
                "title": "Black<br>Dragons",
                "description": null
            },
            {
                "position": {
                    "lat": 4.740675384778373,
                    "lng": 438.22265625
                },
                "title": "Blue Dragons",
                "description": null
            }
        ],
        icons: {
            agility_shortcuts: [{
                iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                className: Categories.AGILITY_SHORTCUT,
                position: {"lat": 13.923403897723347, "lng": 379.51171875},
                title: "Agility Shortcut",
                description: "Wall Climb (70 Agility)",
                category: Categories.AGILITY_SHORTCUT
            }]
        }
    },
    {
        machine_name: 'taverly_dungeon',
        full_name: 'Taverly Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 52.16045455774706, "lng": 352.08984375000006},
        exits: [
            {
                label: 'To Taverly',
                position: {"lat": 49.15296965617042, "lng": 351.38671875000006},
                target_layer: "surface",
                target_layer_position: {
                    "lat": 78.86527580679268,
                    "lng": 294.69177246093756
                },
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Water Obelisk',
                position: {"lat": 68.07330474079025, "lng": 292.14843750000006},
                target_layer: "surface",
                target_layer_position: {"lat": 79.20430943611333, "lng": 291.92321777343756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "position": {
                    "lat": 75.75894014501688,
                    "lng": 313.9453125
                },
                "title": "Hellhounds",
                "description": null
            },
            {
                "position": {
                    "lat": 71.63599288330609,
                    "lng": 253.12500000000003
                },
                "title": "Fire<br>Obelisk",
                "description": null
            },
            {
                "position": {
                    "lat": 69.28725695167886,
                    "lng": 279.14062500000006
                },
                "title": "Black<br>Dragons",
                "description": null
            },
            {
                "position": {
                    "lat": 59.712097173322924,
                    "lng": 271.75781250000006
                },
                "title": "Monks of<br>Zamorak",
                "description": null
            },
            {
                "position": {
                    "lat": 33.43144133557529,
                    "lng": 305.15625000000006
                },
                "title": "Black Demons",
                "description": null
            },
            {
                "position": {
                    "lat": 59.17592824927138,
                    "lng": 319.21875000000006
                },
                "title": "Poison Spiders",
                "description": null
            },
            {
                "position": {
                    "lat": 78.9039293885709,
                    "lng": 418.7109375
                },
                "title": "Chaos<br>Druids",
                "description": null
            },
            {
                "position": {
                    "lat": 49.15296965617042,
                    "lng": 420.82031250000006
                },
                "title": "Lesser<br>Demons",
                "description": null
            },
            {
                "position": {
                    "lat": 55.3791104480105,
                    "lng": 382.1484375
                },
                "title": "Blue<br>Dragons",
                "description": null
            },
            {
                "position": {
                    "lat": 35.746512259918504,
                    "lng": 390.58593750000006
                },
                "title": "Blue<br>Dragons",
                "description": null
            },
            {
                "position": {
                    "lat": 34.88593094075317,
                    "lng": 459.14062500000006
                },
                "title": "Magic<br>Axes",
                "description": null
            },
            {
                "position": {
                    "lat": 13.239945499286312,
                    "lng": 401.13281250000006
                },
                "title": "Chaos<br>Dwarves",
                "description": null
            },
            {
                "position": {
                    "lat": -3.864254615721396,
                    "lng": 423.6328125
                },
                "title": "Poisonous<br>Scorpions",
                "description": null
            },
            {
                "position": {
                    "lat": -30.751277776257812,
                    "lng": 381.44531250000006
                },
                "title": "Hill<br>Giants",
                "description": null
            },
            {
                "position": {
                    "lat": -69.03714171275197,
                    "lng": 383.20312500000006
                },
                "title": "Black Knight's<br>Base",
                "description": null
            }
        ],
        icons: {
            agility_shortcuts: [{
                iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                className: Categories.AGILITY_SHORTCUT,
                position: {"lat": 61.64816245852389, "lng": 343.125},
                title: "Agility Shortcut",
                description: "Jump floor trap (80 Agility)",
                category: Categories.AGILITY_SHORTCUT
            }, {
                iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                className: Categories.AGILITY_SHORTCUT,
                position: {"lat": 49.89463439573421, "lng": 355.69335937500006},
                title: "Agility Shortcut",
                description: "Pipe Squeeze (70 Agility)",
                category: Categories.AGILITY_SHORTCUT
            }, {
                iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                className: Categories.AGILITY_SHORTCUT,
                position: {"lat": 67.676084581981, "lng": 357.275390625},
                title: "Agility Shortcut",
                description: "Wall Climb (70 Agility)",
                category: Categories.AGILITY_SHORTCUT
            }, {
                iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                className: Categories.AGILITY_SHORTCUT,
                position: {"lat": 60.28340847828245, "lng": 424.42382812500006},
                title: "Agility Shortcut",
                description: "Fence Squeeze (63 Agility)",
                category: Categories.AGILITY_SHORTCUT
            },]
        }
    },
    {
        machine_name: 'draynor_sewer',
        full_name: 'Draynor Sewer',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": -2.811371193331128, "lng": 364.39453125000006},
        exits: [{
            label: 'To North of Draynor Market',
            position: {"lat": 4.12728532324537, "lng": 329.06250000000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 77.157162522661,
                "lng": 307.86987304687506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To Outside of Jail',
            position: {"lat": -33.797408767572485, "lng": 376.69921875000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 76.73913726028553,
                "lng": 310.11657714843756
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [
            {
                "position": {"lat": 2.986927393334876, "lng": 380.74218750000006},
                "title": "Zombies & Skeletons",
                "description": null
            },
            {
                "position": {
                    "lat": 34.161818161230386,
                    "lng": 367.55859375
                },
                "title": "Ruantun",
                "description": null
            }
        ],
        icons: {}
    },];