import {Categories} from "./IconBaseClass";


export const Dungeons = [
    {
        machine_name: 'taverly_dungeon',
        full_name: 'Taverly Dungeon',
        icon: require('../../static/icons/misc/Dungeon_icon.webp'),
        exits: [
            {
                label: 'To Taverly',
                position: {"lat": 69.16255790810501, "lng": -60.29296875000001},
                target_layer: "surface",
                target_layer_position: {"lat": 78.87004849291571, "lng": 294.70825195312506},
                icon: require('../../static/icons/misc/Map_link_icon.webp')
            }
        ],
        agility_shortcuts: [
            {
                iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
                className: Categories.AGILITY_SHORTCUT,
                position: {"lat": 75.93088543216642, "lng": -68.90625000000001},
                title: "Agility Shortcut",
                description: "Jump floor trap",
                category: Categories.AGILITY_SHORTCUT
            },

        ]
    }
];