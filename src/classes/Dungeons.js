import {
    Categories,
    IconBaseClass
} from "./IconBaseClass";
import {
    types
} from "./Icons";
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

export const Dungeons = [
    /*
    {
        machine_name: 'ardougne_sewers',
        full_name: 'Ardougne Sewers',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat":20.3034175184893,"lng":333.98437500000006},
        exits: [
            {
                label: 'To East of Clock Tower',
                position: {"lat":27.410785702577023,"lng":334.46777343750006},
                target_layer: "surface",
                target_layer_position: {"lat":76.60236402946751,"lng":275.10864257812506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },

     */
    {
        machine_name: 'temple_of_marimbo',
        full_name: 'Temple of Marimbo Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 25.403584973186703, "lng": 334.86328125000006},
        exits: [
            {
                label: 'To Temple of Marimbo',
                position: {"lat": 35.81781315869664, "lng": 350.94726562500006},
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
        center_pos: {"lat": 25.403584973186703, "lng": 334.86328125000006},
        exits: [
            {
                label: 'To Miscellania',
                position: {"lat": 8.146242825034385, "lng": 298.38867187500006},
                target_layer: "surface",
                target_layer_position: {"lat": 83.34488515397247, "lng": 269.97802734375006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Etceteria',
                position: {"lat": 18.8543103618898, "lng": 376.39160156250006},
                target_layer: "surface",
                target_layer_position: {"lat": 83.48846937837685, "lng": 277.29492187500006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'jatizo_mine',
        full_name: 'Jatizso Mines',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 25.403584973186703, "lng": 334.86328125000006},
        exits: [
            {
                label: 'To Jatizso',
                position: {"lat": 12.039320557540572, "lng": 338.73046875000006},
                target_layer: "surface",
                target_layer_position: {"lat": 82.98340359715496, "lng": 261.11755371093756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'evil_chickens_lair',
        full_name: 'Evil Chickens Lair',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 5.00339434502215, "lng": 331.69921875000006},
        exits: [
            {
                label: 'To Zanaris',
                position: {"lat": 5.00339434502215, "lng": 331.69921875000006},
                target_layer: "zanaris",
                target_layer_position: {"lat": 54.316523240258284, "lng": 342.81738281250006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'wilderness_godwars',
        full_name: 'Wilderness Godwars Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 20.3034175184893, "lng": 333.98437500000006},
        exits: [
            {
                label: 'To North of Bandit Camp',
                position: {"lat": 39.774769485295465, "lng": 346.28906250000006},
                target_layer: "surface",
                target_layer_position: {"lat": 82.4747070273022, "lng": 303.45336914062506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "positions": [
                    {
                        "lat": 38.47939467327645,
                        "lng": 332.84179687500006
                    },
                    {
                        "lat": 30.751277776257812,
                        "lng": 353.40820312500006
                    }
                ],
                "text": "Still need to map this bit",
                "fontSize": 30
            }
        ],
        icons: {}
    },
    {
        machine_name: 'wilderness_agility_course_dungeon',
        full_name: 'Wilderness Agility Course Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 20.3034175184893, "lng": 333.98437500000006},
        exits: [
            {
                label: 'To Wilderness Agility Course',
                position: {"lat": 32.0639555946604, "lng": 337.763671875},
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
        center_pos: {"lat": 20.3034175184893, "lng": 333.98437500000006},
        exits: [
            {
                label: 'To East of Varrock',
                position: {"lat": 7.536764322084078, "lng": 342.20214843750006},
                target_layer: "surface",
                target_layer_position: {"lat": 79.73819567893061, "lng": 321.09741210937506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'dorgesh-kaan',
        full_name: 'Dorgeshkhaan',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 20.3034175184893, "lng": 333.98437500000006},
        exits: [
            {
                label: 'To Dorgeshkhaan Mine',
                position: {"lat": 57.70414723434193, "lng": 353.67187500000006},
                target_layer: "dorgeshkaan_mine",
                target_layer_position: {"lat": 3.601142320158735, "lng": 337.939453125},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'dorgeshkaan_mine',
        full_name: 'Dorgeshkhaan Mine',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 20.3034175184893, "lng": 333.98437500000006},
        exits: [
            {
                label: 'To Lumbridge Basement',
                position: {"lat": 12.340001834116316, "lng": 331.52343750000006},
                target_layer: "lumbridge_basement",
                target_layer_position: {"lat": 23.725011735951796, "lng": 344.35546875000006},
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
        center_pos: {"lat": 20.3034175184893, "lng": 333.98437500000006},
        exits: [
            {
                label: 'To Digsite North-east Winch',
                position: {"lat": 20.3034175184893, "lng": 323.39355468750006},
                target_layer: "surface",
                target_layer_position: {"lat": 79.24333815227048, "lng": 326.75537109375},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Digsite West Winch',
                position: {"lat": 26.86328062676624, "lng": 335.08300781250006},
                target_layer: "surface",
                target_layer_position: {"lat": 79.11338911989017, "lng": 325.63476562500006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'kraken_cave',
        full_name: 'Kraken Cove',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 20.3034175184893, "lng": 333.98437500000006},
        exits: [
            {
                label: 'To South West of Fishing Colony',
                position: {"lat": 35.9602229692967, "lng": 327.65625000000006},
                target_layer: "surface",
                target_layer_position: {"lat": 81.28587917894365, "lng": 254.74548339843753},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "positions": [
                    {
                        "lat": 13.66733825965496,
                        "lng": 315.52734375000006
                    },
                    {
                        "lat": 6.053161295714067,
                        "lng": 329.67773437500006
                    }
                ],
                "text": "Waterfiends",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 36.10237644873644,
                        "lng": 321.59179687500006
                    },
                    {
                        "lat": 24.04646399966658,
                        "lng": 328.71093750000006
                    }
                ],
                "text": "Cave Krakens",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 18.396230138028827,
                        "lng": 338.55468750000006
                    },
                    {
                        "lat": 16.88865978738161,
                        "lng": 353.67187500000006
                    }
                ],
                "text": "Cave Krakens",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 37.85750715625203,
                        "lng": 332.49023437500006
                    },
                    {
                        "lat": 37.57941251343841,
                        "lng": 347.25585937500006
                    }
                ],
                "text": "Kraken Boss",
                "fontSize": 30
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
                position: {"lat": 7.972197714386879, "lng": 310.78125000000006},
                target_layer: "surface",
                target_layer_position: {"lat": 80.21612275604421, "lng": 290.65979003906256},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Middle Dungeon Entrance',
                position: {"lat": 12.168225677390119, "lng": 326.64550781250006},
                target_layer: "surface",
                target_layer_position: {"lat": 80.28264059618424, "lng": 292.2555541992188},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To East Dungeon Entrance',
                position: {"lat": 14.349547837185375, "lng": 336.53320312500006},
                target_layer: "surface",
                target_layer_position: {"lat": 80.31734832164365, "lng": 292.9202270507813},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'rashiliyias_tomb',
        full_name: 'Rashiliyias Tomb',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 20.3034175184893, "lng": 333.98437500000006},
        exits: [
            {
                label: 'To East of Karamja River',
                position: {"lat": 39.095962936305476, "lng": 345.673828125},
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
        center_pos: {"lat": 20.3034175184893, "lng": 333.98437500000006},
        exits: [
            {
                label: 'To Viyeldi Caves (First Level)',
                position: {"lat": 30.600093873550072, "lng": 318.25195312500006},
                target_layer: "viyeldi_caves_2",
                target_layer_position: {"lat": 35.460669951495305, "lng": 318.42773437500006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
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
                position: {"lat": 41.77131167976407, "lng": 326.33789062500006},
                target_layer: "surface",
                target_layer_position: {"lat": 71.17712280564923, "lng": 287.97363281250006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'ah_za_rhoon_2',
        full_name: 'Ah Za Rhoon (Second Level)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 19.145168196205297, "lng": 335.03906250000006},
        exits: [
            {
                label: 'To Ah Za Rhoon (First Level)',
                position: {"lat": 5.528510525692801, "lng": 317.10937500000006},
                target_layer: "ah_za_rhoon_1",
                target_layer_position: {"lat": 23.483400654325642, "lng": 316.49414062500006},
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
        center_pos: {"lat": 21.779905342529645, "lng": 332.92968750000006},
        exits: [
            {
                label: 'To East Karamja',
                position: {"lat": 40.713955826286046, "lng": 324.66796875000006},
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
        center_pos: {"lat": 20.3034175184893, "lng": 333.98437500000006},
        exits: [
            {
                label: 'To West of Pollnivneach',
                position: {"lat": 27.293689224852407, "lng": 292.76367187500006},
                target_layer: "surface",
                target_layer_position: {"lat": 71.73266202440855, "lng": 322.767333984375},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "positions": [
                    {
                        "lat": 23.483400654325642,
                        "lng": 365.185546875
                    },
                    {
                        "lat": 26.667095801104814,
                        "lng": 377.2265625
                    }
                ],
                "text": "Fareed",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 35.60371874069731,
                        "lng": 304.1015625
                    },
                    {
                        "lat": 39.977120098439634,
                        "lng": 315.17578125000006
                    }
                ],
                "text": "Dust Devils",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 24.04646399966658,
                        "lng": 319.21875000000006
                    },
                    {
                        "lat": 20.138470312451155,
                        "lng": 328.09570312500006
                    }
                ],
                "text": "Fire Giants",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 19.80805412808859,
                        "lng": 317.37304687500006
                    },
                    {
                        "lat": 10.919617760254697,
                        "lng": 325.54687500000006
                    }
                ],
                "text": "Burnt Chest",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 27.605670826465445,
                        "lng": 337.32421875000006
                    },
                    {
                        "lat": 27.605670826465445,
                        "lng": 349.54101562500006
                    }
                ],
                "text": "Pyrefiends",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 6.926426847059551,
                        "lng": 290.83007812500006
                    },
                    {
                        "lat": 15.538375926292062,
                        "lng": 302.60742187500006
                    }
                ],
                "text": "Dust Devils",
                "fontSize": 30
            }
        ],
        icons: {}
    },
    {
        machine_name: 'kalphite_cave',
        full_name: 'Kalphite Cave',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 20.3034175184893, "lng": 333.98437500000006},
        exits: [
            {
                label: 'To East of Shanty Pass',
                position: {"lat": 15.623036831528264, "lng": 329.94140625000006},
                target_layer: "surface",
                target_layer_position: {"lat": 74.76429887097669, "lng": 323.43200683593756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "positions": [
                    {
                        "lat": 40.245991504199026,
                        "lng": 325.63476562500006
                    },
                    {
                        "lat": 31.052933985705163,
                        "lng": 338.02734375
                    }
                ],
                "text": "Soilders",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 19.559790136497412,
                        "lng": 335.56640625000006
                    },
                    {
                        "lat": 19.476950206488414,
                        "lng": 349.45312500000006
                    }
                ],
                "text": "Workers",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 2.3723687086440504,
                        "lng": 335.30273437500006
                    },
                    {
                        "lat": 13.581920900545857,
                        "lng": 352.705078125
                    }
                ],
                "text": "Soldiers",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 8.407168163601076,
                        "lng": 302.16796875000006
                    },
                    {
                        "lat": 5.090944175033399,
                        "lng": 317.81250000000006
                    }
                ],
                "text": "Guardians",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 27.761329874505233,
                        "lng": 304.98046875000006
                    },
                    {
                        "lat": 28.304380682962783,
                        "lng": 318.42773437500006
                    }
                ],
                "text": "Workers",
                "fontSize": 30
            }
        ],
        icons: {}
    },
    {
        machine_name: 'mosleharmless_dungeon',
        full_name: 'Mos Le\'Harmless Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 28.07198030177986, "lng": 327.12890625000006},
        exits: [
            {
                label: 'To Mos Le\'Harmless Beach',
                position: {"lat": 2.1088986592431382, "lng": 308.67187500000006},
                target_layer: "surface",
                target_layer_position: {"lat": 71.95858391176317, "lng": 351.64489746093756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Mos Le\'Harmless West Island',
                position: {"lat": 53.9560855309879, "lng": 355.60546875000006},
                target_layer: "surface",
                target_layer_position: {"lat": 73.68806787884861, "lng": 356.06140136718756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Mos Le\'Harmless East Island',
                position: {"lat": 53.82659674299413, "lng": 366.0205078125},
                target_layer: "surface",
                target_layer_position: {"lat": 73.68883928422404, "lng": 357.05566406250006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
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
                position: {"lat": 28.767659105691255, "lng": 317.28515625000006},
                target_layer: "abandoned_mine_5",
                target_layer_position: {"lat": 19.394067895396613, "lng": 314.91210937500006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Abandoned Mine (Fifth Level)',
                position: {"lat": 29.15216128331894, "lng": 351.56250000000006},
                target_layer: "abandoned_mine_5",
                target_layer_position: {"lat": 18.396230138028827, "lng": 353.58398437500006},
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
                position: {"lat": 30.90222470517144, "lng": 336.62109375000006},
                target_layer: "abandoned_mine_4",
                target_layer_position: {"lat": 13.239945499286312, "lng": 349.98046875},
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
                position: {"lat": 42.032974332441405, "lng": 327.48046875000006},
                target_layer: "abandoned_mine_3",
                target_layer_position: {"lat": 41.705728515237524, "lng": 327.04101562500006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Abandoned Mine (Third Level)',
                position: {"lat": 35.460669951495305, "lng": 343.125},
                target_layer: "abandoned_mine_3",
                target_layer_position: {"lat": 35.60371874069731, "lng": 342.861328125},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Abandoned Mine (Third Level)',
                position: {"lat": 15.199386048560008, "lng": 317.54882812500006},
                target_layer: "abandoned_mine_3",
                target_layer_position: {"lat": 15.284185114076445, "lng": 317.46093750000006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Abandoned Mine (Third Level)',
                position: {"lat": 8.233237111274565, "lng": 337.587890625},
                target_layer: "abandoned_mine_3",
                target_layer_position: {"lat": 8.407168163601076, "lng": 337.67578125},
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
                position: {"lat": 39.36827914916014, "lng": 343.47656250000006},
                target_layer: "abandoned_mine_2",
                target_layer_position: {"lat": 39.095962936305476, "lng": 343.38867187500006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Abandoned Mine (Second Level)',
                position: {"lat": 19.559790136497412, "lng": 344.17968750000006},
                target_layer: "abandoned_mine_2",
                target_layer_position: {"lat": 19.89072302399691, "lng": 344.00390625000006},
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
        center_pos: {"lat": 22.674847351188536, "lng": 337.23632812500006},
        exits: [
            {
                label: 'To Abandoned Mine (First Level)',
                position: {"lat": 26.155437968713574, "lng": 326.51367187500006},
                target_layer: "abandoned_mine_1",
                target_layer_position: {"lat": 20.715015145512098, "lng": 332.49023437500006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Abandoned Mine (First Level)',
                position: {"lat": 20.96143961409684, "lng": 332.92968750000006},
                target_layer: "abandoned_mine_1",
                target_layer_position: {"lat": 15.453680224345835, "lng": 338.73046875000006},
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
        center_pos: {"lat": 22.674847351188536, "lng": 337.23632812500006},
        exits: [
            {
                label: 'To Main Exit',
                position: {"lat": 23.725011735951796, "lng": 348.26660156250006},
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
        center_pos: {"lat": 25.522614647623293, "lng": 335.25878906250006},
        exits: [
            {
                label: 'To East of Fenkenstrain\'s Castle',
                position: {"lat": 8.407168163601076, "lng": 375.29296875000006},
                target_layer: "surface",
                target_layer_position: {"lat": 80.42393537272979, "lng": 340.46630859375006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Mausoleum',
                position: {"lat": 36.31512514748051, "lng": 323.26171875000006},
                target_layer: "surface",
                target_layer_position: {"lat": 80.91629229384844, "lng": 335.64331054687506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}


    },
    {
        machine_name: 'underground_pass_first_big_room',
        full_name: 'Underground Pass',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 25.522614647623293, "lng": 335.25878906250006},
        exits: [
            {
                label: 'To West Ardougne',
                position: {"lat": 56.41390137600676, "lng": 378.76464843750006},
                target_layer: "surface",
                target_layer_position: {"lat": 77.7454489790814, "lng": 265.33081054687506},
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
        center_pos: {"lat": 25.522614647623293, "lng": 335.25878906250006},
        exits: [
            {
                label: 'To Seers Village',
                position: {"lat": 24.607069137709708, "lng": 330.64453125000006},
                target_layer: "surface",
                target_layer_position: {"lat": 80.07131834076769, "lng": 283.29895019531256},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
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
                position: {"lat": 30.334953881988564, "lng": 353.9794921875},
                target_layer: "surface",
                target_layer_position: {"lat": 79.87284820752161, "lng": 294.24133300781256},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To West Side of White Wolf Mountain',
                position: {"lat": 32.39851580247402, "lng": 314.64843750000006},
                target_layer: "surface",
                target_layer_position: {"lat": 79.91958637365005, "lng": 290.46203613281256},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Keldagrim',
                position: {"lat": 24.16680208530324, "lng": 353.40820312500006},
                target_layer: "keldagrim",
                target_layer_position: {"lat": 21.53484700204879, "lng": 354.90234375},
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
                position: {"lat": -10.487811882056683, "lng": 303.31054687500006},
                target_layer: "keldagrim_cave",
                target_layer_position: {"lat": 34.994003757575776, "lng": 331.65527343750006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            //
            {
                label: 'To Varrock',
                position: {"lat": 27.332735136859146, "lng": 378.01757812500006},
                target_layer: "surface",
                target_layer_position: {"lat": 80.15056363665231, "lng": 311.561279296875},
                icon: require('../../static/icons/misc/Transportation_icon.png')
            },
        ],
        map_labels: [],
        icons: {}


    },
    {
        machine_name: 'keldagrim_cave',
        full_name: 'Keldagrim Cave',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 25.522614647623293, "lng": 335.25878906250006},
        exits: [
            {
                label: 'To Rellekka Area',
                position: {"lat": 36.98500309285596, "lng": 325.89843750000006},
                target_layer: "surface",
                target_layer_position: {"lat": 82.24578007692925, "lng": 284.60083007812506},
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
        center_pos: {"lat": 23.160563309048314, "lng": 334.33593750000006},
        exits: [
            {
                label: 'To Iceberg',
                position: {"lat": 5.528510525692801, "lng": 335.47851562500006},
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
        center_pos: {"lat": 25.64152637306577, "lng": 337.8515625},
        exits: [
            {
                label: 'To South of Castlewars',
                position: {"lat": 8.494104537551882, "lng": 348.31054687500006},
                target_layer: "surface",
                target_layer_position: {"lat": 73.6710879786998, "lng": 263.5757446289063},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "positions": [
                    {
                        "lat": 29.6880527498568,
                        "lng": 335.74218750000006
                    },
                    {
                        "lat": 18.812717856407776,
                        "lng": 353.84765625000006
                    }
                ],
                "text": "Smoke Devils",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 33.87041555094183,
                        "lng": 310.78125000000006
                    },
                    {
                        "lat": 33.578014746144014,
                        "lng": 328.88671875000006
                    }
                ],
                "text": "Thurmonuclear",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 29.22889003019423,
                        "lng": 310.95703125000006
                    },
                    {
                        "lat": 29.075375179558346,
                        "lng": 329.58984375000006
                    }
                ],
                "text": "Smoke Devil",
                "fontSize": 30
            }
        ],
        icons: {}
    },
    {
        machine_name: 'yannille_dungeon_1',
        full_name: 'Yanille Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 25.958044673317843, "lng": 334.77539062500006},
        exits: [
            {
                label: 'To Yannille',
                position: {"lat": 8.407168163601076, "lng": 341.71875000000006},
                target_layer: "surface",
                target_layer_position: {"lat": 73.98093379958613, "lng": 276.2429809570313},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Watchtower',
                position: {"lat": 36.73888412439431, "lng": 318.42773437500006},
                target_layer: "surface",
                target_layer_position: {"lat": 74.76285525325245, "lng": 273.9248657226563},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {
            agility_shortcuts: [
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 26.902476886279832, "lng": 322.47070312500006},
                    title: "Agility Shortcut",
                    description: "Pipe Squeeze (49 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                },
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 33.137551192346145, "lng": 325.15136718750006},
                    title: "Agility Shortcut",
                    description: "Log Balance (40 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                },
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 17.644022027872726, "lng": 338.64257812500006},
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
        center_pos: {"lat": 25.958044673317843, "lng": 334.77539062500006},
        exits: [
            {
                label: 'To Obervatory Tower',
                position: {"lat": 10.228437266155955, "lng": 334.51171875000006},
                target_layer: "surface",
                target_layer_position: {"lat": 75.4585892414553, "lng": 265.22094726562506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Ruins',
                position: {"lat": 38.06539235133249, "lng": 348.57421875000006},
                target_layer: "surface",
                target_layer_position: {"lat": 75.83307364515697, "lng": 266.66564941406256},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'castlewars_underground',
        full_name: 'Castlewars Underground',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 25.958044673317843, "lng": 334.77539062500006},
        exits: [
            {
                label: 'To Saradormin Base',
                position: {"lat": 10.790140750321738, "lng": 355.56152343750006},
                target_layer: "surface",
                target_layer_position: {"lat": 74.8190574999548, "lng": 260.76049804687506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Zamorak Base',
                position: {"lat": 38.134556577054134, "lng": 312.89062500000006},
                target_layer: "surface",
                target_layer_position: {"lat": 74.06032518355184, "lng": 264.83093261718756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Map Center',
                position: {"lat": 28.188243641850313, "lng": 334.59960937500006},
                target_layer: "surface",
                target_layer_position: {"lat": 74.49347621438257, "lng": 262.78747558593756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Map Center',
                position: {"lat": 22.30942584120019, "lng": 333.80859375000006},
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
        center_pos: {"lat": 25.958044673317843, "lng": 334.77539062500006},
        exits: [
            {
                label: 'To Altar By Battlefield',
                position: {"lat": 42.35854391749705, "lng": 317.02148437500006},
                target_layer: "surface",
                target_layer_position: {"lat": 76.54368906311473, "lng": 266.20422363281256},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'stronghold_slayer_cave',
        full_name: 'Stronghold Slayer Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 25.958044673317843, "lng": 334.77539062500006},
        exits: [
            {
                label: 'To Gnome Stronghold',
                position: {"lat": 40.04443758460859, "lng": 320.62500000000006},
                target_layer: "surface",
                target_layer_position: {"lat": 79.20328047720547, "lng": 264.62768554687506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "positions": [
                    {
                        "lat": 37.16031654673677,
                        "lng": 322.91015625000006
                    },
                    {
                        "lat": 37.71859032558816,
                        "lng": 339.96093750000006
                    }
                ],
                "text": "Bloodvelds",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 44.902577996288876,
                        "lng": 345.05859375
                    },
                    {
                        "lat": 38.47939467327645,
                        "lng": 366.24023437500006
                    }
                ],
                "text": "Bloodvelds",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 27.13736835979561,
                        "lng": 347.16796875000006
                    },
                    {
                        "lat": 25.562265014427492,
                        "lng": 359.82421875
                    }
                ],
                "text": "Ankou",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 13.581920900545857,
                        "lng": 329.58984375000006
                    },
                    {
                        "lat": 13.15437605541853,
                        "lng": 351.03515625000006
                    }
                ],
                "text": "Aberrant Spectres",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 15.284185114076445,
                        "lng": 315.00000000000006
                    },
                    {
                        "lat": 11.092165893502013,
                        "lng": 326.33789062500006
                    }
                ],
                "text": "Hellhounds",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 27.68352808378776,
                        "lng": 304.1015625
                    },
                    {
                        "lat": 21.207458730482653,
                        "lng": 314.03320312500006
                    }
                ],
                "text": "Hellhounds",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 13.581920900545857,
                        "lng": 293.37890625000006
                    },
                    {
                        "lat": 7.623886853120049,
                        "lng": 310.42968750000006
                    }
                ],
                "text": "Fire Giants",
                "fontSize": 30
            }
        ],
        icons: {
            agility_shortcuts: [
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 29.036960648558267, "lng": 323.17382812500006},
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
        center_pos: {"lat": 25.958044673317843, "lng": 334.77539062500006},
        exits: [
            {
                label: 'To Waterfall Ledge',
                position: {"lat": 7.318881730366756, "lng": 328.00781250000006},
                target_layer: "surface",
                target_layer_position: {"lat": 79.68128209185427, "lng": 270.14282226562506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "positions": [
                    {
                        "lat": 17.308687886770034,
                        "lng": 323.17382812500006
                    },
                    {
                        "lat": 17.392579271057766,
                        "lng": 332.31445312500006
                    }
                ],
                "text": "Shadow Spiders",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 30.14512718337613,
                        "lng": 325.63476562500006
                    },
                    {
                        "lat": 30.14512718337613,
                        "lng": 334.51171875000006
                    }
                ],
                "text": "Fire",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 27.605670826465445,
                        "lng": 326.95312500000006
                    },
                    {
                        "lat": 27.644606381943326,
                        "lng": 333.14941406250006
                    }
                ],
                "text": "Giants",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 25.878994400196202,
                        "lng": 318.51562500000006
                    },
                    {
                        "lat": 26.03704188651584,
                        "lng": 324.66796875000006
                    }
                ],
                "text": "Fire",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 23.40276490540795,
                        "lng": 318.25195312500006
                    },
                    {
                        "lat": 23.32208001137844,
                        "lng": 324.66796875000006
                    }
                ],
                "text": "Giants",
                "fontSize": 30
            }
        ],
        icons: {}
    },
    {
        machine_name: 'ancient_caverns',
        full_name: 'Ancient Caverns',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 25.958044673317843, "lng": 334.77539062500006},
        exits: [
            {
                label: 'To Otto\'s Grotto',
                position: {"lat": 38.34165619279595, "lng": 341.27929687500006},
                target_layer: "surface",
                target_layer_position: {"lat": 80.19275853777062, "lng": 270.17028808593756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "positions": [
                    {
                        "lat": 29.53522956294847,
                        "lng": 317.46093750000006
                    },
                    {
                        "lat": 34.66935854524545,
                        "lng": 337.763671875
                    }
                ],
                "text": "Waterfiends",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 17.476432197195518,
                        "lng": 333.28125000000006
                    },
                    {
                        "lat": 15.538375926292062,
                        "lng": 351.91406250000006
                    }
                ],
                "text": "Brutal Green Dragons",
                "fontSize": 30
            }
        ],
        icons: {}
    },
    {
        machine_name: 'lighthouse_dungeon',
        full_name: 'Lighthouse Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 25.958044673317843, "lng": 334.77539062500006},
        exits: [
            {
                label: 'To Lighthouse',
                position: {"lat": 10.31491928581316, "lng": 333.544921875},
                target_layer: "surface",
                target_layer_position: {"lat": 81.60893586878258, "lng": 269.9642944335938},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'barbarian_assult',
        full_name: 'Barbarian Assault',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 25.958044673317843, "lng": 334.77539062500006},
        exits: [
            {
                label: 'To Barbarian Assault Lobby',
                position: {"lat": 12.382928338487396, "lng": 334.90722656250006},
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
        center_pos: {"lat": 25.64152637306577, "lng": 333.369140625},
        exits: [
            {
                label: 'To Grand Tree',
                position: {"lat": 30.977609093348686, "lng": 333.80859375000006},
                target_layer: "surface",
                target_layer_position: {"lat": 80.05804956215623, "lng": 266.93481445312506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'tower_of_life_basement',
        full_name: 'Creature Creation',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 23.885837699862005, "lng": 331.69921875000006},
        exits: [
            {
                label: 'To Tower of Life',
                position: {"lat": 19.642587534013032, "lng": 332.92968750000006},
                target_layer: "surface",
                target_layer_position: {"lat": 76.26478238458024, "lng": 279.25598144531256},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'brimhaven_dungeon',
        full_name: 'Brimhaven Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 23.885837699862005, "lng": 331.69921875000006},
        exits: [
            {
                label: 'To Brimhaven',
                position: {"lat": 56.36525013685609, "lng": 351.21093750000006},
                target_layer: "surface",
                target_layer_position: {"lat": 75.31027753026149, "lng": 285.45776367187506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "positions": [
                    {
                        "lat": 41.244772343082076,
                        "lng": 294.60937500000006
                    },
                    {
                        "lat": 45.213003555993964,
                        "lng": 307.96875000000006
                    }
                ],
                "text": "Moss Giants",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 35.31736632923788,
                        "lng": 314.12109375000006
                    },
                    {
                        "lat": 35.02999636902566,
                        "lng": 323.43750000000006
                    }
                ],
                "text": "Dogs",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 30.600093873550072,
                        "lng": 338.73046875000006
                    },
                    {
                        "lat": 36.4566360115962,
                        "lng": 355.25390625
                    }
                ],
                "text": "Red Dragons",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 12.039320557540572,
                        "lng": 342.94921875
                    },
                    {
                        "lat": 12.55456352859367,
                        "lng": 357.71484375
                    }
                ],
                "text": "Black Demons",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 15.453680224345835,
                        "lng": 361.58203125000006
                    },
                    {
                        "lat": 17.308687886770034,
                        "lng": 375.99609375000006
                    }
                ],
                "text": "Bronze Dragons",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": -10.487811882056683,
                        "lng": 345.41015625
                    },
                    {
                        "lat": -10.141931686131018,
                        "lng": 369.4921875
                    }
                ],
                "text": "Iron Dragons",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": -24.206889622398023,
                        "lng": 344.17968750000006
                    },
                    {
                        "lat": -24.367113562651262,
                        "lng": 367.91015625000006
                    }
                ],
                "text": "Steel Dragons",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": -5.266007882805498,
                        "lng": 311.66015625000006
                    },
                    {
                        "lat": -5.7908968128719565,
                        "lng": 329.58984375000006
                    }
                ],
                "text": "Iron Dragons",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": -5.266007882805498,
                        "lng": 293.20312500000006
                    },
                    {
                        "lat": -11.005904459659451,
                        "lng": 308.32031250000006
                    }
                ],
                "text": "Bronze Dragons",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": -28.14950321154457,
                        "lng": 299.88281250000006
                    },
                    {
                        "lat": -29.07537517955836,
                        "lng": 320.09765625000006
                    }
                ],
                "text": "Steel Dragons",
                "fontSize": 30
            }
        ],
        icons: {
            agility_shortcuts: [
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 62.694309593663185, "lng": 323.92089843750006},
                    title: "Agility Shortcut",
                    description: "Climb (87 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                },
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 49.03786794532644, "lng": 332.97363281250006},
                    title: "Agility Shortcut",
                    description: "Jump (83 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                },
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 40.04443758460859, "lng": 338.59863281250006},
                    title: "Agility Shortcut",
                    description: "Jump (83 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                }
            ]
        }
    },
    {
        machine_name: 'tzhaar_city',
        full_name: 'TzHaar City',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 23.885837699862005, "lng": 331.69921875000006},
        exits: [
            {
                label: 'To Karamja Volcano Dungeon',
                position: {"lat": 54.52108149544362, "lng": 345.498046875},
                target_layer: "karamja_volcano",
                target_layer_position: {"lat": 6.489983332670651, "lng": 345.05859375},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            }
        ],
        map_labels: [
            {
                "positions": [
                    {
                        "lat": 4.5654735507102915,
                        "lng": 278.96484375000006
                    },
                    {
                        "lat": 3.162455530237848,
                        "lng": 298.12500000000006
                    }
                ],
                "text": "Fight Cave",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 46.55886030311719,
                        "lng": 279.84375000000006
                    },
                    {
                        "lat": 46.55886030311719,
                        "lng": 293.73046875000006
                    }
                ],
                "text": "Fight Pit",
                "fontSize": 30
            }
        ],
        icons: {
            fairy_rings: [
                {
                    iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
                    className: Categories.FAIRY_RINGS,
                    position: {"lat": 29.76437737516313, "lng": 312.62695312500006},
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
        center_pos: {"lat": 23.885837699862005, "lng": 331.69921875000006},
        exits: [
            {
                label: 'To Karamja Volcano',
                position: {"lat": 4.872047700241915, "lng": 339.25781250000006},
                target_layer: "surface",
                target_layer_position: {"lat": 75.53905507152787, "lng": 292.84606933593756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
            {
                label: 'To Crandor',
                position: {"lat": 55.52863052257191, "lng": 323.61328125},
                target_layer: "surface",
                target_layer_position: {"lat": 76.92061351829683, "lng": 291.39587402343756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "positions": [
                    {
                        "lat": 47.040182144806664,
                        "lng": 333.28125000000006
                    },
                    {
                        "lat": 46.6795944656402,
                        "lng": 344.35546875000006
                    }
                ],
                "text": "Elvarg",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 54.57206165565852,
                        "lng": 321.50390625000006
                    },
                    {
                        "lat": 50.51342652633956,
                        "lng": 331.17187500000006
                    }
                ],
                "text": "Skeletons",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 28.459033019728068,
                        "lng": 320.71289062500006
                    },
                    {
                        "lat": 31.728167146023935,
                        "lng": 334.51171875000006
                    }
                ],
                "text": "Lesser Demons",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 14.179186142354181,
                        "lng": 322.47070312500006
                    },
                    {
                        "lat": 14.00869637063467,
                        "lng": 331.69921875000006
                    }
                ],
                "text": "Red spiders",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 8.754794702435618,
                        "lng": 337.50000000000006
                    },
                    {
                        "lat": 2.28455066023697,
                        "lng": 346.46484375000006
                    }
                ],
                "text": "Skeletons",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 2.6357885741666065,
                        "lng": 321.41601562500006
                    },
                    {
                        "lat": -4.8282597468669755,
                        "lng": 333.01757812500006
                    }
                ],
                "text": "Lesser Demons",
                "fontSize": 30
            }
        ],
        icons: {}
    },
    {
        machine_name: 'entrana_dungeon',
        full_name: 'Entrana Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 21.04349121680354, "lng": 332.22656250000006},
        exits: [
            {
                label: 'To Enttrana',
                position: {"lat": 28.459033019728068, "lng": 319.83398437500006},
                target_layer: "surface",
                target_layer_position: {"lat": 78.56811211767257, "lng": 290.4757690429688},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "positions": [
                    {
                        "lat": 29.6880527498568,
                        "lng": 327.74414062500006
                    },
                    {
                        "lat": 25.403584973186703,
                        "lng": 336.18164062500006
                    }
                ],
                "text": "Zombies",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 19.145168196205297,
                        "lng": 329.32617187500006
                    },
                    {
                        "lat": 19.642587534013032,
                        "lng": 348.48632812500006
                    }
                ],
                "text": "Greater Demons",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 8.146242825034385,
                        "lng": 337.14843750000006
                    },
                    {
                        "lat": 8.667918002363134,
                        "lng": 349.18945312500006
                    }
                ],
                "text": "Dramen Tree",
                "fontSize": 30
            }
        ],
        icons: {}
    },
    {
        machine_name: 'ham_chests',
        full_name: 'Ham Storerooms',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 21.657428197370653, "lng": 331.30371093750006},
        exits: [
            {
                label: 'To Ham Hideout',
                position: {"lat": 10.055402736564236, "lng": 328.49121093750006},
                target_layer: "ham_hideout",
                target_layer_position: {"lat": 19.145168196205297, "lng": 332.75390625000006},
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
        center_pos: {"lat": 24.84656534821976, "lng": 333.28125000000006},
        exits: [
            {
                label: 'To behind Lumbridge Castle',
                position: {"lat": 37.50972584293751, "lng": 321.240234375},
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
        center_pos: {"lat": 20.3034175184893, "lng": 333.98437500000006},
        exits: [
            {
                label: 'To Witchaven (First Section)',
                position: {"lat": 35.24561909420681, "lng": 325.45898437500006},
                target_layer: "witchhaven_dungeon",
                target_layer_position: {"lat": 20.4270128142574, "lng": 320.88867187500006},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "positions": [
                    {
                        "lat": 33.137551192346145,
                        "lng": 336.88476562500006
                    },
                    {
                        "lat": 31.42866311735861,
                        "lng": 354.02343750000006
                    }
                ],
                "text": "Slug Prince",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 24.04646399966658,
                        "lng": 316.40625
                    },
                    {
                        "lat": 28.459033019728068,
                        "lng": 326.60156250000006
                    }
                ],
                "text": "Giant Lobsters",
                "fontSize": 30
            }
        ],
        icons: {
            agility_shortcuts: [
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat": 30.334953881988564, "lng": 330.99609375},
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
        center_pos: {"lat": 20.3034175184893, "lng": 333.98437500000006},
        exits: [
            {
                label: 'To Witchaven',
                position: {"lat": 16.425547506916736, "lng": 317.4169921875},
                target_layer: "surface",
                target_layer_position: {"lat": 77.31794795705102, "lng": 282.2964477539063},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "positions": [
                    {
                        "lat": 28.22697003891834,
                        "lng": 322.38281250000006
                    },
                    {
                        "lat": 28.613459424004414,
                        "lng": 338.02734375
                    }
                ],
                "text": "Hobgoblins",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 24.5271348225978,
                        "lng": 335.91796875
                    },
                    {
                        "lat": 12.640338306846802,
                        "lng": 334.68750000000006
                    }
                ],
                "text": "Ogres",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 26.58852714730864,
                        "lng": 342.42187500000006
                    },
                    {
                        "lat": 13.239945499286312,
                        "lng": 350.94726562500006
                    }
                ],
                "text": "Hellhounds",
                "fontSize": 30
            }
        ],
        icons: {}
    },
    {
        machine_name: 'clock_tower_dungeon',
        full_name: 'Clock Tower Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 20.3034175184893, "lng": 333.98437500000006},
        exits: [
            {
                label: 'To Clock Tower',
                position: {"lat": 36.13787471840729, "lng": 316.23046875},
                target_layer: "surface",
                target_layer_position: {"lat": 76.61508618356306, "lng": 273.98254394531256},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'ardougne_sewers',
        full_name: 'Ardougne Sewers',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 20.3034175184893, "lng": 333.98437500000006},
        exits: [
            {
                label: 'To East of Clock Tower',
                position: {"lat": 27.410785702577023, "lng": 334.46777343750006},
                target_layer: "surface",
                target_layer_position: {"lat": 76.60236402946751, "lng": 275.10864257812506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
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
                position: {"lat": -4.039617826768424, "lng": 326.64550781250006},
                target_layer: "surface",
                target_layer_position: {"lat": 78.95403363474128, "lng": 281.03576660156256},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [
            {
                "positions": [
                    {
                        "lat": 58.263287052486035,
                        "lng": 293.55468750000006
                    },
                    {
                        "lat": 58.263287052486035,
                        "lng": 301.28906250000006
                    }
                ],
                "text": "Aymadyl",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 57.088515327886505,
                        "lng": 295.22460937500006
                    },
                    {
                        "lat": 56.897003921272606,
                        "lng": 301.552734375
                    }
                ],
                "text": "Staff",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 54.213861000644926,
                        "lng": 297.42187500000006
                    },
                    {
                        "lat": 54.23955053156179,
                        "lng": 308.62792968750006
                    }
                ],
                "text": "Guardians of ",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 52.133488040771496,
                        "lng": 297.37792968750006
                    },
                    {
                        "lat": 52.26815737376817,
                        "lng": 308.58398437500006
                    }
                ],
                "text": "Armadyl",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 41.57436130598913,
                        "lng": 285.02929687500006
                    },
                    {
                        "lat": 45.583289756006316,
                        "lng": 304.013671875
                    }
                ],
                "text": "Lesser Demons",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 31.80289258670676,
                        "lng": 280.81054687500006
                    },
                    {
                        "lat": 32.7688004848817,
                        "lng": 297.42187500000006
                    }
                ],
                "text": "Shiny Key",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 41.244772343082076,
                        "lng": 303.57421875000006
                    },
                    {
                        "lat": 41.96765920367816,
                        "lng": 316.23046875
                    }
                ],
                "text": "Winelda",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 35.60371874069731,
                        "lng": 299.35546875000006
                    },
                    {
                        "lat": 33.43144133557529,
                        "lng": 311.57226562500006
                    }
                ],
                "text": "Fire Warrioirs",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 27.994401411046148,
                        "lng": 315.35156250000006
                    },
                    {
                        "lat": 27.68352808378776,
                        "lng": 322.55859375000006
                    }
                ],
                "text": "Lever",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 8.146242825034385,
                        "lng": 296.01562500000006
                    },
                    {
                        "lat": 16.29905101458183,
                        "lng": 300.58593750000006
                    }
                ],
                "text": "Lever Part",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": -3.162455530237848,
                        "lng": 301.11328125000006
                    },
                    {
                        "lat": -3.2502085616531686,
                        "lng": 313.681640625
                    }
                ],
                "text": "Boots of Lightness",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 5.266007882805498,
                        "lng": 347.607421875
                    },
                    {
                        "lat": 5.441022303717974,
                        "lng": 363.07617187500006
                    }
                ],
                "text": "Old King",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 0.8788717828324276,
                        "lng": 348.92578125000006
                    },
                    {
                        "lat": 0.8788717828324276,
                        "lng": 361.49414062500006
                    }
                ],
                "text": "Black Dragon",
                "fontSize": 30
            }
        ],
        icons: {}
    },
    {
        machine_name: 'warriors_guild_basement',
        full_name: 'Warriors Guild Basement',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat": 23.200960808078566, "lng": 335.74218750000006},
        exits: [
            {
                label: 'To Warriors guild',
                position: {"lat": 25.48295117535531, "lng": 324.66796875000006},
                target_layer: "surface",
                target_layer_position: {"lat": 80.56724664616632, "lng": 291.32995605468756},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            },
        ],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'paterdomus_template_basement',
        full_name: 'Paterdomus Template Basement',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {
            "lat": 21.453068633086783,
            "lng": 333.63281250000006
        },
        exits: [{
            label: 'To Paterdomus Temple',
            position: {
                "lat": 32.175612478499346,
                "lng": 321.15234375
            },
            target_layer: "surface",
            target_layer_position: {
                "lat": 80.17074580045627,
                "lng": 329.02954101562506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To Morytania',
            position: {
                "lat": 19.518375478601566,
                "lng": 345.45410156250006
            },
            target_layer: "surface",
            target_layer_position: {
                "lat": 79.92823592380245,
                "lng": 330.16113281250006
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [],
        icons: {}
    }, {
        machine_name: 'tutorial_island_cave',
        full_name: 'Tutorial Island Cave',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {
            "lat": 23.32208001137844,
            "lng": 332.57812500000006
        },
        exits: [{
            label: 'To Quest Tutorial',
            position: {
                "lat": 30.56226095049944,
                "lng": 327.70019531250006
            },
            target_layer: "surface",
            target_layer_position: {
                "lat": 74.71224441731964,
                "lng": 308.13903808593756
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To Friends Tutorial',
            position: {
                "lat": 34.08906131584996,
                "lng": 345.01464843750006
            },
            target_layer: "surface",
            target_layer_position: {
                "lat": 74.83487278379204,
                "lng": 309.64965820312506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [],
        icons: {}
    }, {
        machine_name: 'kbd_lair',
        full_name: 'King Black Dragon Lair',
        icon: require('../../static/icons/misc/Transportation_icon.png'),
        center_pos: {
            "lat": 17.18277905643184,
            "lng": 338.203125
        },
        exits: [{
            label: 'KBD Lair',
            position: {
                "lat": 14.774882506516272,
                "lng": 333.94042968750006
            },
            target_layer: "lava_maze_dungeon",
            target_layer_position: {
                "lat": 13.15437605541853,
                "lng": 354.814453125
            },
            icon: require('../../static/icons/misc/Transportation_icon.png')
        },],
        map_labels: [],
        icons: {}
    }, {
        machine_name: 'lava_maze_dungeon',
        full_name: 'Lava Maze Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {
            "lat": 17.18277905643184,
            "lng": 338.203125
        },
        exits: [{
            label: 'Center of Lava Dragon Maze',
            position: {
                "lat": 10.833305983642491,
                "lng": 318.25195312500006
            },
            target_layer: "surface",
            target_layer_position: {
                "lat": 83.4199002425892,
                "lng": 306.8893432617188
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'West of Lava Dragon Maze',
            position: {
                "lat": 14.689881366618774,
                "lng": 351.6064453125
            },
            target_layer: "surface",
            target_layer_position: {
                "lat": 83.36744691299643,
                "lng": 303.45886230468756
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [{
            "positions": [{
                "lat": 21.207458730482653,
                "lng": 333.369140625
            }, {
                "lat": 31.728167146023935,
                "lng": 350.85937500000006
            }],
            "text": "Black Dragons",
            "fontSize": 30
        }, {
            "positions": [{
                "lat": 9.882275493429953,
                "lng": 315.87890625000006
            }, {
                "lat": 8.059229627200192,
                "lng": 335.830078125
            }],
            "text": "Greater Demons",
            "fontSize": 30
        }, {
            "positions": [{
                "lat": 19.228176737766262,
                "lng": 347.16796875000006
            }, {
                "lat": 10.31491928581316,
                "lng": 367.294921875
            }],
            "text": "Poison Spiders",
            "fontSize": 30
        }],
        icons: {}
    }, {
        machine_name: 'rev_caves',
        full_name: 'Revenant Caves',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {
            "lat": 31.203404950917395,
            "lng": 340.13671875
        },
        exits: [{
            label: 'To Level 40 wilderness',
            position: {
                "lat": 66.58321725728176,
                "lng": 363.33984375000006
            },
            target_layer: "surface",
            target_layer_position: {
                "lat": 83.23642648170203,
                "lng": 310.57250976562506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To Level 17 wilderness',
            position: {
                "lat": -33.28461996888768,
                "lng": 330.29296875000006
            },
            target_layer: "surface",
            target_layer_position: {
                "lat": 81.71290123447507,
                "lng": 307.28210449218756
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [{
            "positions": [{
                "lat": -26.273714024406416,
                "lng": 329.23828125000006
            }, {
                "lat": -19.642587534013032,
                "lng": 339.08203125000006
            }],
            "text": "Hellhounds",
            "fontSize": 30
        }, {
            "positions": [{
                "lat": -19.145168196205297,
                "lng": 346.11328125000006
            }, {
                "lat": -29.07537517955836,
                "lng": 358.06640625000006
            }],
            "text": "Green Dragons",
            "fontSize": 30
        }, {
            "positions": [{
                "lat": -6.839169626342808,
                "lng": 338.203125
            }, {
                "lat": -6.839169626342808,
                "lng": 353.14453125000006
            }],
            "text": "Green Dragons",
            "fontSize": 30
        }, {
            "positions": [{
                "lat": 17.811456088564483,
                "lng": 340.3125
            }, {
                "lat": 15.284185114076445,
                "lng": 361.05468750000006
            }],
            "text": "Greater Demons",
            "fontSize": 30
        }, {
            "positions": [{
                "lat": 4.214943141390651,
                "lng": 297.77343750000006
            }, {
                "lat": 9.44906182688142,
                "lng": 318.33984375000006
            }],
            "text": "Lesser Demons",
            "fontSize": 30
        }, {
            "positions": [{
                "lat": 32.10118973232094,
                "lng": 307.61718750000006
            }, {
                "lat": 30.600093873550072,
                "lng": 327.83203125000006
            }],
            "text": "Black Demons",
            "fontSize": 30
        }, {
            "positions": [{
                "lat": 38.685509760012025,
                "lng": 331.34765625000006
            }, {
                "lat": 37.71859032558816,
                "lng": 348.75000000000006
            }],
            "text": "Ice Giants",
            "fontSize": 30
        }, {
            "positions": [{
                "lat": 49.724479188712984,
                "lng": 307.08984375000006
            }, {
                "lat": 54.16243396806781,
                "lng": 329.58984375000006
            }],
            "text": "Ankou",
            "fontSize": 30
        }, {
            "positions": [{
                "lat": 55.07836723201515,
                "lng": 350.15625
            }, {
                "lat": 56.36525013685609,
                "lng": 368.61328125000006
            }],
            "text": "Black Dragons",
            "fontSize": 30
        }, {
            "positions": [{
                "lat": 47.15984001304432,
                "lng": 354.37500000000006
            }, {
                "lat": 29.075375179558346,
                "lng": 371.60156250000006
            }],
            "text": "Revenants",
            "fontSize": 30
        }],
        icons: {
            agility_shortcuts: [{
                iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                className: Categories.AGILITY_SHORTCUT,
                position: {
                    "lat": 58.19387126497797,
                    "lng": 321.064453125
                },
                title: "Agility Shortcut",
                description: "Jump (75 Agility)",
                category: Categories.AGILITY_SHORTCUT
            }, {
                iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                className: Categories.AGILITY_SHORTCUT,
                position: {
                    "lat": 52.61639023304539,
                    "lng": 335.87402343750006
                },
                title: "Agility Shortcut",
                description: "Jump (75 Agility)",
                category: Categories.AGILITY_SHORTCUT
            }, {
                iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                className: Categories.AGILITY_SHORTCUT,
                position: {
                    "lat": 19.559790136497412,
                    "lng": 334.46777343750006
                },
                title: "Agility Shortcut",
                description: "Jump (75 Agility)",
                category: Categories.AGILITY_SHORTCUT
            }, {
                iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                className: Categories.AGILITY_SHORTCUT,
                position: {
                    "lat": -14.392118083661728,
                    "lng": 349.18945312500006
                },
                title: "Agility Shortcut",
                description: "Jump (65 Agility)",
                category: Categories.AGILITY_SHORTCUT
            }, {
                iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                className: Categories.AGILITY_SHORTCUT,
                position: {
                    "lat": 25.363882272740256,
                    "lng": 363.29589843750006
                },
                title: "Agility Shortcut",
                description: "Jump (89 Agility)",
                category: Categories.AGILITY_SHORTCUT
            },]
        }
    }, {
        machine_name: 'goblin_cooks_room',
        full_name: 'Goblin Cook\'s Basement',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {
            "lat": 24.80668135385199,
            "lng": 337.50000000000006
        },
        exits: [{
            label: 'To Goblin Village',
            position: {
                "lat": 28.07198030177986,
                "lng": 338.07128906250006
            },
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
        center_pos: {"lat":13.239945499286312,"lng":356.48437500000006},
        exits: [{
            label: 'To Falador South',
            position: {"lat":-52.26815737376817,"lng":346.11328125000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 78.59638534707328,
                "lng": 302.20092773437506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To Falador Park',
            position: {"lat":62.34960927573042,"lng":344.70703125000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 78.59638534707328,
                "lng": 302.20092773437506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'lumbridge_basement',
        full_name: 'Lumbridge Basement',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat":9.96885060854611,"lng":352.79296875},
        exits: [{
            label: 'To Lumbridge Castle',
            position: {"lat":4.740675384778373,"lng":346.99218750000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 76.33892882834353,
                "lng": 316.1123657226563
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [],
        icons: {}
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
            position: {"lat":29.6880527498568,"lng":317.63671875000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 78.89335256331809,
                "lng": 319.1143798828125
            },
            icon: require('../../static/icons/misc/Transportation_icon.png')
        }, {
            label: 'Back out the way you came in',
            position: {"lat":33.284619968887675,"lng":385.31250000000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 78.89335256331809,
                "lng": 319.1143798828125
            },
            icon: require('../../static/icons/misc/Transportation_icon.png')
        }, {
            label: 'Back out the way you came in',
            position: {"lat":-18.979025953255267,"lng":386.71875},
            target_layer: "surface",
            target_layer_position: {
                "lat": 78.89335256331809,
                "lng": 319.1143798828125
            },
            icon: require('../../static/icons/misc/Transportation_icon.png')
        }, {
            label: 'Back out the way you came in',
            position: {"lat":-21.616579336740603,"lng":324.84375000000006},
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
        center_pos: {"lat":3.601142320158735,"lng":350.244140625},
        exits: [{
            label: 'To Wizards Tower',
            position: {"lat":15.876809064146771,"lng":344.44335937500006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 75.44479062156888,
                "lng": 309.1937255859375
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To Essence Mine',
            position: {"lat":9.882275493429953,"lng":348.83789062500006},
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
        center_pos: {"lat":-13.581920900545844,"lng":366.85546875000006},
        exits: [{
            label: 'To Mudskipper Point',
            position: {"lat":-30.29701788337204,"lng":322.73437500000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 75.24326541978712,
                "lng": 302.86010742187506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'draynor_manor_crypt',
        full_name: 'Draynor Manor Crypt',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat":-0.17578097424708533,"lng":353.67187500000006},
        exits: [{
            label: 'To Draynor Manor',
            position: {"lat":-6.315298538330033,"lng":352.96875},
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
        center_pos: {"lat":-4.039617826768424,"lng":361.40625000000006},
        exits: [{
            label: 'To Draynor Manor',
            position: {"lat":-3.864254615721396,"lng":373.00781250000006},
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
        machine_name: 'lumbridge_swamp_cave',
        full_name: 'Lumbridge Swamp Cave',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat":7.18810087117902,"lng":360.87890625000006},
        exits: [{
            label: 'To Lumbridge Swamp',
            position: {"lat":9.96885060854611,"lng":313.9453125},
            target_layer: "surface",
            target_layer_position: {
                "lat": 75.60611830430058,
                "lng": 313.48388671875006
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To Lumbridge Basement',
            position: {"lat":43.96119063892027,"lng":389.53125},
            target_layer: "lumbridge_basement",
            target_layer_position: {"lat":-16.63619187839765,"lng":367.91015625000006},
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'stronghold_of_security_sepulchre_of_death',
        full_name: 'Stronghold of Security Layer (Pit of Pestilence)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat":3.337953961416485,"lng":362.63671875},
        exits: [{
            label: 'To Pit of Pestilence',
            position: {"lat":35.746512259918504,"lng":320.27343750000006},
            target_layer: "stronghold_of_security_pit_of_pestilence",
            target_layer_position: {
                "lat": 79.15377632309713,
                "lng": 307.67211914062506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To Barbarian Village',
            position: {"lat":3.162455530237848,"lng":376.875},
            target_layer: "surface",
            target_layer_position: {
                "lat": 79.15377632309713,
                "lng": 307.67211914062506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'stronghold_of_security_pit_of_pestilence',
        full_name: 'Stronghold of Security Layer (Pit of Pestilence)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat":4.915832801313164,"lng":357.890625},
        exits: [{
            label: 'To Catacomb of Famine',
            position: {"lat":-33.7243396617476,"lng":328.00781250000006},
            target_layer: "stronghold_of_security_catacomb_of_famine",
            target_layer_position: {
                "lat": 79.15377632309713,
                "lng": 307.67211914062506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To Sepulchre of Death',
            position: {"lat":1.2303741774326145,"lng":365.62500000000006},
            target_layer: "stronghold_of_security_sepulchre_of_death",
            target_layer_position: {
                "lat": 79.15377632309713,
                "lng": 307.67211914062506
            },
            icon: require('../../static/icons/misc/Dungeon_icon.webp')
        }, {
            label: 'To Barbarian Village',
            position: {"lat":10.14193168613103,"lng":363.33984375000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 79.15377632309713,
                "lng": 307.67211914062506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'stronghold_of_security_catacomb_of_famine',
        full_name: 'Stronghold of Security Layer (Catacomb of Famine)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat":3.6888551431470478,"lng":363.51562500000006},
        exits: [{
            label: 'To Vault of War',
            position: {"lat":41.50857729743935,"lng":393.22265625000006},
            target_layer: "stronghold_of_security_vault_of_war",
            target_layer_position: {"lat":12.55456352859367,"lng":376.875},
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To Pit of Pestilence',
            position: {"lat":7.36246686553575,"lng":370.1953125},
            target_layer: "stronghold_of_security_pit_of_pestilence",
            target_layer_position: {
                "lat": 79.15377632309713,
                "lng": 307.67211914062506
            },
            icon: require('../../static/icons/misc/Dungeon_icon.webp')
        }, {
            label: 'To Barbarian Village',
            position: {"lat":-3.513421045640032,"lng":359.29687500000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 79.15377632309713,
                "lng": 307.67211914062506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [],
        icons: {}
    },
    {
        machine_name: 'stronghold_of_security_vault_of_war',
        full_name: 'Stronghold of Security Layer (Vault of War)',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {"lat":4.214943141390651,"lng":352.44140625},
        exits: [{
            label: 'To Barbarian Village',
            position: {"lat":39.63953756436671,"lng":316.75781250000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 79.15377632309713,
                "lng": 307.67211914062506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        }, {
            label: 'To Catacomb of Famine',
            position: {"lat":12.55456352859367,"lng":376.875},
            target_layer: "stronghold_of_security_catacomb_of_famine",
            target_layer_position: {"lat":41.77131167976407,"lng":393.75000000000006},
            icon: require('../../static/icons/misc/Dungeon_icon.webp')
        }, {
            label: 'To Barbarian Village',
            position: {"lat":18.312810846425457,"lng":392.69531250000006},
            target_layer: "surface",
            target_layer_position: {
                "lat": 79.15377632309713,
                "lng": 307.67211914062506
            },
            icon: require('../../static/icons/misc/Map_link_icon.webp')
        },],
        map_labels: [],
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
            position: {"lat":-26.902476886279807,"lng":340.83984375},
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
        map_labels: [],
        icons: {
            agility_shortcuts: [
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat":-13.923403897723347,"lng":300.93750000000006},
                    title: "Agility Shortcut",
                    description: "Wall Squeeze (46 Agility)",
                    category: Categories.AGILITY_SHORTCUT
                },
                {
                    iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                    className: Categories.AGILITY_SHORTCUT,
                    position: {"lat":-16.46769474828897,"lng":313.41796875000006},
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
        map_labels: [],
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
        map_labels: [],
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
        machine_name: 'taverly_dungeon',
        full_name: 'Taverly Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        center_pos: {
            "lat": 43.32517767999296,
            "lng": 332.22656250000006
        },
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
        map_labels: [],
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
                description: "Pipe Squeeze (70 Agility)",
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
        icon_scale: 1.2,
        center_pos: {"lat":-2.811371193331128,"lng":364.39453125000006},
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
                "positions": [
                    {
                        "lat": 4.302591077119676,
                        "lng": 333.80859375000006
                    },
                    {
                        "lat": 5.266007882805498,
                        "lng": 363.42773437500006
                    }
                ],
                "text": "Zombies",
                "fontSize": 30
            },
            {
                "positions": [
                    {
                        "lat": 8.928487062665504,
                        "lng": 371.86523437500006
                    },
                    {
                        "lat": -13.581920900545844,
                        "lng": 395.06835937500006
                    }
                ],
                "text": "Skeletons",
                "fontSize": 30
            }
        ],
        icons: {
            agility_shortcuts: []
        }
    },];