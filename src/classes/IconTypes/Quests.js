import {Categories} from "../IconBaseClass";


export function questSkill(level, skill_name, optional) {
    optional = optional === undefined ? false : optional;
    return {
        level: level,
        name: skill_name,
        optional: optional
    }
}

export const Quests = [
    {
        title: "The Ascent of Arceuus",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat":82.50056138051086,"lng":216.63940429687503},
        difficulty: "Novice",
        length: "Medium",
        quest_points: 1,
        quests_required: [
            "Client of Kourend"

        ],
        skills_required: [
            questSkill(12, "Hunter")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/The_Ascent_of_Arceuus",
        category: Categories.QUESTS
    },
    {
        title: "The Forsaken Tower",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat":82.55271744577462,"lng":202.34069824218753},
        difficulty: "Novice",
        length: "Medium",
        quest_points: 1,
        quests_required: [
            "Client of Kourend"

        ],
        skills_required: [
        ],
        full_guide: "https://oldschool.runescape.wiki/w/The_Forsaken_Tower",
        category: Categories.QUESTS
    },
    /*
        TODO this is underrground start, figure a way to map it
    {
        title: "Making Friends with My Arm",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat":82.38861177489242,"lng":284.13391113281256},
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
    */
    {
        title: "A Taste of Hope",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat":76.31295735284931,"lng":346.431884765625},
        difficulty: "Experienced",
        length: "Long",
        quest_points: 1,
        quests_required: [
            "Darkness of Hallowvale",
            "In Aid of the Myreque",
            "In Search of the Myreque",
            "Nature Spirit",
            "Priest in Peril",
            "The Restless Ghost"

        ],
        skills_required: [
            questSkill(48, "Crafting"),
            questSkill(45, "Agility"),
            questSkill(40, "Attack"),
            questSkill(40, "Herblore"),
            questSkill(38, "Slayer")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/A_Taste_of_Hope",
        category: Categories.QUESTS
    },
    {
        title: "Tale of the Righteous",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat":81.48336177803404,"lng":204.24957275390628},
        difficulty: "Novice",
        length: "Medium",
        quest_points: 1,
        quests_required: [
            "Client of Kourend"
        ],
        skills_required: [
            questSkill(16, "Strength"),
            questSkill(10, "Mining")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Tale_of_the_Righteous",
        category: Categories.QUESTS
    },
    {
        title: "Dragon Slayer II",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat":69.6914318644638,"lng":266.53930664062506},
        difficulty: "Grandmaster",
        length: "Very Long ",
        quest_points: 5,
        quests_required: [
            "Legends' Quest",
            "Family Crest",
            "Heroes' Quest",
            "Shield of Arrav",
            "Lost City",
            "Merlin's Crystal",
            "Dragon Slayer",
            "Druidic Ritual",
            "Underground Pass",
            "Biohazard",
            "Plague City",
            "Dream Mentor",
            "Lunar Diplomacy",
            "The Fremennik Trials",
            "Lost City",
            "Rune Mysteries",
            "Shilo Village",
            "Jungle Potion",
            "Eadgar's Ruse",
            "Druidic Ritual",
            "Troll Stronghold",
            "Death Plateau",
            "A Tail of Two Cats",
            "Icthlarin's Little Helper",
            "Gertrude's Cat",
            "Animal Magnetism",
            "Ernest the Chicken",
            "Priest in Peril",
            "The Restless Ghost",
            "Ghosts Ahoy",
            "Priest in Peril",
            "The Restless Ghost",
            "Bone Voyage",
            "The Dig Site",
            "Client of Kourend"
        ],
        skills_required: [
            questSkill(200, "Quest Points"),
            questSkill(75, "Magic"),
            questSkill(70, "Smithing"),
            questSkill(68, "Mining"),
            questSkill(62, "Crafting"),
            questSkill(60, "Agility"),
            questSkill(60, "Thieving"),
            questSkill(50, "Construction"),
            questSkill(50, "Hitpoints")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Dragon_Slayer_II",
        category: Categories.QUESTS
    },
    {
        title: "The Depths of Despair",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 80.71951223728973, "lng": 226.32659912109375},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        quests_required: [
            "Client of Kourend"
        ],
        skills_required: [
            questSkill(18, "Agility")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/The_Depths_of_Despair",
        category: Categories.QUESTS
    },
    {
        title: "The Queen of Thieves",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 82.83833178988445, "lng": 222.95654296875003},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        quests_required: [
            "Client of Kourend"
        ],
        skills_required: [
            questSkill(20, "Thieving")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/The_Queen_of_Thieves",
        category: Categories.QUESTS
    },
    {
        title: "Bone Voyage",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 79.52265545122708, "lng": 319.48242187500006},
        difficulty: "Intermediate",
        length: "Short",
        quest_points: 1,
        quests_required: [
            "The Dig Site",
            "Druidic Ritual"
        ],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Bone_Voyage",
        category: Categories.QUESTS
    },
    {
        title: "Client of Kourend",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 82.03166478362911, "lng": 224.81323242187503},
        difficulty: "Novice",
        length: "Medium",
        quest_points: 1,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Client_of_Kourend",
        category: Categories.QUESTS
    },
    {
        title: "Monkey Madness II",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 80.0798390107744, "lng": 267.48413085937506},
        difficulty: "Grandmaster",
        length: "Very Long",
        quest_points: 4,
        quests_required: [
            "Enlightened Journeyed",
            "The Eyes of Glouphrie",
            "The Grand Tree",
            "Recipe for Disaster",
            "Monkey Madness I",
            "The Grand Tree",
            "Tree Gnome Village",
            "Troll Stronghold",
            "Death Plateau",
            "Watchtower"
        ],
        skills_required: [
            questSkill(60, "Slayer"),
            questSkill(70, "Crafting"),
            questSkill(60, "Hunter"),
            questSkill(55, "Agility"),
            questSkill(55, "Thieving")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Monkey_Madness_II",
        category: Categories.QUESTS
    },
    {
        title: "King's Ransom",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 80.69867112777253, "lng": 285.33691406250006},
        difficulty: "Experienced",
        length: "Medium",
        quest_points: 1,
        quests_required: [
            "Black Knights' Fortress",
            "Holy Grail",
            "Merlin's Crystal",
            "Murder Mystery",
            "One Small Favour",
            "Rune Mysteries",
            "Shilo Village",
            "Jungle Potion",
            "Druidic Ritual"
        ],
        skills_required: [
            questSkill(45, "Maigc"),
            questSkill(65, "Defence")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/King%27s_Ransom",
        category: Categories.QUESTS
    },
    {
        title: "Grim Tales",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 79.57049498764282, "lng": 295.15869140625006},
        difficulty: "Master",
        length: "Medium",
        quest_points: 1,
        quests_required: [
            "Witch's House"
        ],
        skills_required: [
            questSkill(45, "Farming"),
            questSkill(52, "Herblore"),
            questSkill(58, "Thieving"),
            questSkill(59, "Agility"),
            questSkill(71, "Woodcutting")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Grim_Tales",
        category: Categories.QUESTS
    },
    {
        title: "Olaf's Quest",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 82.38861177489242, "lng": 284.13391113281256},
        difficulty: "Intermediate",
        length: "Short",
        quest_points: 1,
        quests_required: [
            "The Fremennik Trials"
        ],
        skills_required: [
            questSkill(40, "Firemarking"),
            questSkill(50, "Woodcutting")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Olaf%27s_Quest",
        category: Categories.QUESTS
    },
    {
        title: "What Lies Below",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 78.02215406784093, "lng": 319.87243652343756},
        difficulty: "Intermediate",
        length: "Medium",
        quest_points: 1,
        quests_required: [
            "Rune Mysteries"
        ],
        skills_required: [
            questSkill(35, "Runecraft"),
            questSkill(42, "Mining")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/What_Lies_Below",
        category: Categories.QUESTS
    },
    {
        title: "The Great Brain Robbery",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 71.7550326863815, "lng": 347.29431152343756},
        difficulty: "Experienced",
        length: "Medium",
        quest_points: 2,
        quests_required: [
            "Creature of Fenkenstrain",
            "Cabin Fever",
            "Pirate's Treasure",
            "Priest in Peril",
            "Rum Deal",
            "Zogre Flesh Eaters",
            "Big Chompy Bird Hunting",
            "Jungle Potion",
            "Druidic Ritual"
        ],
        skills_required: [
            questSkill(16, "Crafting"),
            questSkill(30, "Construction"),
            questSkill(50, "Prayer")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/The_Great_Brain_Robbery",
        category: Categories.QUESTS
    },
    {
        title: "Tower of Life",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 76.34411731923645, "lng": 278.67370605468756},
        difficulty: "Novice",
        length: "Medium",
        quest_points: 2,
        quests_required: [],
        skills_required: [
            questSkill(10, "Construction")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Tower_of_Life",
        category: Categories.QUESTS
    },
    {
        title: "The Fremennik Isles",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 82.23057151010607, "lng": 278.99780273437506},
        difficulty: "Experienced",
        length: "Long",
        quest_points: 1,
        quests_required: [
            "The Fremennik Trials"
        ],
        skills_required: [
            questSkill(20, "Construction"),
            questSkill(40, "Agility"),
            questSkill(56, "Woodcutting"),
            questSkill(46, "Crafting")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/The_Fremennik_Isles",
        category: Categories.QUESTS
    },
    {
        title: "Cold War",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 77.05665531264218, "lng": 275.57006835937506},
        difficulty: "Intermediate",
        length: "Medium",
        quest_points: 1,
        quests_required: [],
        skills_required: [
            questSkill(10, "Hunter"),
            questSkill(30, "Agility"),
            questSkill(30, "Crafting"),
            questSkill(34, "Construction"),
            questSkill(15, "Thieving")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Cold_War",
        category: Categories.QUESTS
    },
    {
        title: "Contact!",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 67.32504200372699, "lng": 320.85571289062506},
        difficulty: "Master",
        length: "Medium",
        quest_points: 1,
        quests_required: [
            "Prince Ali Rescue",
            "Icthlarin's Little Helper",
            "Gertrude's Cat"
        ],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Contact!",
        category: Categories.QUESTS
    },
    {
        title: "Animal Magnetism",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 78.38596108518769, "lng": 308.594970703125},
        difficulty: "Intermediate",
        length: "Medium",
        quest_points: 1,
        quests_required: [
            "The Restless Ghost",
            "Ernest the Chicken",
            "Priest in Peril"
        ],
        skills_required: [
            questSkill(18, "Slayer"),
            questSkill(19, "Crafting"),
            questSkill(30, "Ranged"),
            questSkill(35, "Woodcutting"),
            questSkill(31, "Prayer", true)
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Animal_Magnetism",
        category: Categories.QUESTS
    },
    {
        title: "Eagles' Peak",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 77.04188223336718, "lng": 276.36108398437506},
        difficulty: "Novice",
        length: "Medium",
        quest_points: 2,
        quests_required: [],
        skills_required: [
            questSkill(27, "Hunter")

        ],
        full_guide: "https://oldschool.runescape.wiki/w/Eagles%27_Peak",
        category: Categories.QUESTS
    },
    {
        title: "Enlightened Journey",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 78.33387021211455, "lng": 289.80834960937506},
        difficulty: "Intermediate",
        length: "Short",
        quest_points: 1,
        quests_required: [],
        skills_required: [
            questSkill(20, "Quest Points"),
            questSkill(20, "Firemaking"),
            questSkill(30, "Farming"),
            questSkill(36, "Crafting")

        ],
        full_guide: "https://oldschool.runescape.wiki/w/Enlightened_Journey",
        category: Categories.QUESTS
    },
    /*
        TODO this is underrground start, figure a way to map it
    {
        title: "My Arm's Big Adventure",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat":82.03166478362911,"lng":277.28393554687506},
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
    */
    {
        title: "Elemental Workshop II",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 78.07788665318229, "lng": 326.03027343750006},
        difficulty: "Intermediate",
        length: "Medium",
        quest_points: 1,
        quests_required: [
            "Elemental Workshop I"
        ],
        skills_required: [
            questSkill(20, "Magic"),
            questSkill(30, "Smithing")

        ],
        full_guide: "https://oldschool.runescape.wiki/w/Elemental_Workshop_II",
        category: Categories.QUESTS
    },
    {
        title: "The Slug Menace",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 78.53649499073829, "lng": 301.85485839843756},
        difficulty: "Intermediate",
        length: "Medium",
        quest_points: 1,
        quests_required: [
            "Wanted!",
            "Slug Menace"
        ],
        skills_required: [
            questSkill(30, "Crafting"),
            questSkill(30, "Runecraft"),
            questSkill(30, "Slayer"),
            questSkill(30, "Thieving")

        ],
        full_guide: "https://oldschool.runescape.wiki/w/The_Slug_Menace",
        category: Categories.QUESTS
    },
    /*
        TODO this is underrground start, figure a way to map it
    {
        title: "The Eyes of Glouphrie",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat":82.03166478362911,"lng":277.28393554687506},
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
    */
    {
        title: "Lunar Diplomacy",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 82.03166478362911, "lng": 277.28393554687506},
        difficulty: "Experienced",
        length: "Long",
        quest_points: 2,
        quests_required: [
            "The Fremennik Trials",
            "Lost City",
            "Rune Mysteries",
            "Shilo Village",
            "Jungle Potion",
            "Druidic Ritual"
        ],
        skills_required: [
            questSkill(61, "Crafting"),
            questSkill(40, "Defence"),
            questSkill(49, "Firemaking"),
            questSkill(65, "Magic"),
            questSkill(60, "Mining"),
            questSkill(55, "Woodcutting"),

        ],
        full_guide: "https://oldschool.runescape.wiki/w/Lunar_Diplomacy",
        category: Categories.QUESTS
    },
    {
        title: "Fairytale II - Cure a Queen",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat":76.92682760674583,"lng":307.21618652343756},
        difficulty: "Experienced",
        length: "Short",
        quest_points: 2,
        quests_required: [
            "Fairytale I - Growing Pains",
            "Lost City",
            "Nature Spirit",
            "The Restless Ghost",
            "Priest in Peril"
        ],
        skills_required: [
            questSkill(40, "Thieving"),
            questSkill(49, "Farming"),
            questSkill(57, "Herblore")

        ],
        full_guide: "https://oldschool.runescape.wiki/w/Fairytale_II_-_Cure_a_Queen",
        category: Categories.QUESTS
    },
    {
        title: "Royal Trouble",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 83.42021497175465, "lng": 269.48913574218756},
        difficulty: "Experienced",
        length: "Medium",
        quest_points: 1,
        quests_required: [
            "Throne of Miscellania"
        ],
        skills_required: [
            questSkill(40, "Agility"),
            questSkill(40, "Slayer")

        ],
        full_guide: "https://oldschool.runescape.wiki/w/Royal_Trouble",
        category: Categories.QUESTS
    },
    {
        title: "Swan Song",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 81.68673259714264, "lng": 259.2251586914063},
        difficulty: "Master",
        length: "Medium",
        quest_points: 2,
        quests_required: [
            "One Small Favour",
            "Rune Mysteries",
            "Shilo Village",
            "Jungle Potion",
            "Druidic Ritual",
            "Garden of Tranquillity",
            "Creature of Fenkenstrain",
            "Priest in Peril",
            "The Restless Ghost"
        ],
        skills_required: [
            questSkill(100, "Quest Points"),
            questSkill(66, "Magic"),
            questSkill(62, "Cooking"),
            questSkill(62, "Fishing"),
            questSkill(45, "Smithiung"),
            questSkill(42, "Firemaking"),
            questSkill(40, "Crafting")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Swan_Song",
        category: Categories.QUESTS
    },
    {
        title: "Rag and Bone Man II",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 80.15619999232506, "lng": 326.3461303710938},
        difficulty: "Intermediate",
        length: "Long",
        quest_points: 1,
        quests_required: [
            "Rag and Bone Man",
            "Zogre Flesh Eaters (Partial)",
            "The Fremennik Trials or Horror from the Deep",
            "Creature of Fenkenstrain (Partial)",
            "Skippy and the Mogres"
        ],
        skills_required: [
            questSkill(40, "Slayer"),
            questSkill(20, "Defence")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Rag_and_Bone_Man_II",
        category: Categories.QUESTS
    },
    {
        title: "Rag and Bone Man",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 80.15009379613414, "lng": 326.0604858398438},
        difficulty: "Novice",
        length: "Medium",
        quest_points: 1,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Rag_and_Bone_Man",
        category: Categories.QUESTS
    },
    {
        title: "A Soul's Bane",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 79.57049498764282, "lng": 322.63549804687506},
        difficulty: "Novice",
        length: "Medium",
        quest_points: 1,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/A_Soul%27s_Bane",
        category: Categories.QUESTS
    },
    /*
        TODO this is underrground start, figure a way to map it
    {
        title: "In Aid of the Myreque",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat":76.95289511468847,"lng":307.47985839843756},
        difficulty: "Intermediate",
        length: "Long",
        quest_points: 2,
        quests_required: [
            "In Search of the Myreque",
            "Nature Spirit",
            "Priest in Peril",
            "The Restless Ghost"

        ],
        skills_required: [
            questSkill(25, "Crafting"),
            questSkill(15, "Mining"),
            questSkill(7, "Magic")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/In_Aid_of_the_Myreque",
        category: Categories.QUESTS
    },
    */
    {
        title: "Fairytale I - Growing Pains",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 76.95289511468847, "lng": 307.47985839843756},
        difficulty: "Experienced",
        length: "Long",
        quest_points: 2,
        quests_required: [
            "Lost City",
            "Nature Spirit",
            "The Restless Ghost",
            "Priest in Peril",
            "Jungle Potion (If asked to obtain Proboscis)"
        ],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Fairytale_I_-_Growing_Pains",
        category: Categories.QUESTS
    },
    {
        title: "Cabin Fever",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 80.05994617616484, "lng": 346.82189941406256},
        difficulty: "Experienced",
        length: "Medium",
        quest_points: 2,
        quests_required: [
            "Pirate's Treasure",
            "Rum Deal",
            "Zogre Flesh Eaters",
            "Big Chompy Bird Hunting",
            "Jungle Potion",
            "Druidic Ritual",
            "Priest in Peril"
        ],
        skills_required: [
            questSkill(42, "Agility"),
            questSkill(45, "Crafting"),
            questSkill(50, "Smithing"),
            questSkill(40, "Ranged")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Cabin_Fever",
        category: Categories.QUESTS
    },
    {
        title: "Enakhra's Lament",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 70.97671433689949, "lng": 314.91760253906256},
        difficulty: "Experienced",
        length: "Medium",
        quest_points: 2,
        quests_required: [],
        skills_required: [
            questSkill(50, "Crafting"),
            questSkill(45, "Firemaking"),
            questSkill(43, "Prayer"),
            questSkill(39, "Magic"),
            questSkill(45, "Mining", true)
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Enakhra%27s_Lament",
        category: Categories.QUESTS
    },
    {
        title: "The Hand in the Sand",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 74.39920828363479, "lng": 272.86743164062506},
        difficulty: "Intermediate",
        length: "Medium",
        quest_points: 1,
        quests_required: [],
        skills_required: [
            questSkill(17, "Thieving"),
            questSkill(49, "Crafting")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/The_Hand_in_the_Sand",
        category: Categories.QUESTS
    },
    {
        title: "Devious Minds",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 80.01432843179823, "lng": 329.0982055664063},
        difficulty: "Experienced",
        length: "Short",
        quest_points: 1,
        quests_required: [
            "Wanted!",
            "Recruitment Drive",
            "Black Knight's Fortress",
            "Druidic Ritual",
            "Rune Mysteries",
            "The Lost Tribe",
            "Goblin Diplomacy",
            "Rune Mysteries",
            "Priest in Peril",
            "Troll Stronghold",
            "Death Plateau",
            "Doric's Quest",
            "Enter the Abyss",
            "Rune Mysteries"
        ],
        skills_required: [
            questSkill(65, "Smithing"),
            questSkill(50, "Runecraft"),
            questSkill(50, "Fletching")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Devious_Minds",
        category: Categories.QUESTS
    },
    {
        title: "Spirits of the Elid",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 70.65087086708871, "lng": 331.4712524414063},
        difficulty: "Intermediate",
        length: "Short",
        quest_points: 2,
        quests_required: [],
        skills_required: [
            questSkill(33, "Magic"),
            questSkill(37, "Ranged"),
            questSkill(37, "Mining"),
            questSkill(37, "Thieving")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Spirits_of_the_Elid",
        category: Categories.QUESTS
    },
    {
        title: "Ratcatchers",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 78.99238292112126, "lng": 312.42919921875006},
        difficulty: "Intermediate",
        length: "Long",
        quest_points: 2,
        quests_required: [
            "Icthlarin's Little Helper",
            "Gertrude's Cat"
        ],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Ratcatchers",
        category: Categories.QUESTS
    },
    {
        title: "Making History",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 78.19982492727081, "lng": 265.1577758789063},
        difficulty: "Intermediate",
        length: "Long",
        quest_points: 3,
        quests_required: [
            "Priest in Peril",
            "The Restless Ghost"
        ],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Making_History",
        category: Categories.QUESTS
    },
    {
        title: "Shadow of the Storm",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 75.39362425281163, "lng": 320.1937866210938},
        difficulty: "Intermediate",
        length: "Medium",
        quest_points: 1,
        quests_required: [
            "The Golem",
            "Demon Slayer"
        ],
        skills_required: [
            questSkill(30, "Crafting")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Shadow_of_the_Storm",
        category: Categories.QUESTS
    },
    {
        title: "Rum Deal",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 80.49449801002746, "lng": 347.1487426757813},
        difficulty: "Experienced",
        length: "Medium",
        quest_points: 2,
        quests_required: [
            "Zogre Flesh Eaters",
            "Big Chompy Bird Hunting",
            "Jungle Potion",
            "Druidic Ritual",
            "Priest in Peril"
        ],
        skills_required: [
            questSkill(42, "Crafting"),
            questSkill(50, "Fishing"),
            questSkill(40, "Farming"),
            questSkill(47, "Prayer"),
            questSkill(42, "Slayer")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Rum_Deal",
        category: Categories.QUESTS
    },
    {
        title: "Mourning's Ends Part II",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 75.60953172351894, "lng": 259.68383789062506},
        difficulty: "Master",
        length: "Very Long",
        quest_points: 2,
        quests_required: [
            "Mourning's End Part I"
        ],
        skills_required: [
            questSkill(43, "Prayer", true),
            questSkill(60, "Agility", true)
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Mourning%27s_Ends_Part_II",
        category: Categories.QUESTS
    },
    {
        title: "Wanted!",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 78.60072894622596, "lng": 301.8795776367188},
        difficulty: "Intermediate",
        length: "Long",
        quest_points: 1,
        quests_required: [
            "Recruitment Drive",
            "Rune Mysteries",
            "The Lost Tribe",
            "Priest in Peril"
        ],
        skills_required: [
            questSkill(32, "Quest Points")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Wanted!",
        category: Categories.QUESTS
    },
    {
        title: "A Tail of Two Cats",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 80.72969420311631, "lng": 296.92199707031256},
        difficulty: "Intermediate",
        length: "Long",
        quest_points: 2,
        quests_required: [
            "Icthelarin's Little Helper",
            "Gertrude's Cat"
        ],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/A_Tail_of_Two_Cats",
        category: Categories.QUESTS
    },
    {
        title: "Garden of Tranquillity",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 79.84043999322822, "lng": 317.35656738281256},
        difficulty: "Intermediate",
        length: "Very Long",
        quest_points: 2,
        quests_required: [
            "Creature of Fenkenstrain",
            "Priest in Peril",
            "The Restless Ghost"
        ],
        skills_required: [
            questSkill(25, "Farming")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Garden_of_Tranquillity",
        category: Categories.QUESTS
    },
    {
        title: "Mourning's Ends Part I",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 75.25864871532573, "lng": 255.75073242187503},
        difficulty: "Master",
        length: "Long",
        quest_points: 2,
        quests_required: [
            "Roving Elves",
            "Regicide",
            "Underground Pass",
            "Biohazard",
            "Plague City",
            "Waterfall Quest",
            "Big Chompy Bird Hunting (Required to start quest)",
            "Sheep Herder"
        ],
        skills_required: [
            questSkill(60, "Ranged"),
            questSkill(50, "Thieving"),
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Mourning%27s_Ends_Part_I",
        category: Categories.QUESTS
    },
    {
        title: "Recruitment Drive",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 78.55721939121862, "lng": 302.1322631835938},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        quests_required: [
            "Black Knigths' Fortress",
            "Druidic Ritual"
        ],
        skills_required: [
            questSkill(12, "Quest Points"),
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Recruitment_Drive",
        category: Categories.QUESTS
    },
    {
        title: "The Lost Tribe",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 76.39201930477996, "lng": 315.90637207031256},
        difficulty: "Intermediate",
        length: "Medium",
        quest_points: 1,
        quests_required: [
            "Goblin Diplomacy",
            "Rune Mysteries"
        ],
        skills_required: [
            questSkill(13, "Agility"),
            questSkill(13, "Thieving"),
            questSkill(17, "Mining")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/The_Lost_Tribe",
        category: Categories.QUESTS
    },
    {
        title: "Zogre Flesh Eaters",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 73.48785521813069, "lng": 265.61645507812506},
        difficulty: "Intermediate",
        length: "Medium",
        quest_points: 1,
        quests_required: [
            "Big Chompy Bird Hunting",
            "Jungle Potion",
            "Druidic Ritual"
        ],
        skills_required: [
            questSkill(4, "Smithing"),
            questSkill(8, "Herblore"),
            questSkill(30, "Ranged"),
            questSkill(30, "Fletching", true)
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Zogre_Flesh_Eaters",
        category: Categories.QUESTS
    },
    /*
        TODO this is underrground start, figure a way to map it
    {
        title: "Tears of Guthix",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat":69.25031156402504,"lng":323.1024169921875},
        difficulty: "Intermediate",
        length: "Very Short",
        quest_points: 1,
        quests_required: [
        ],
        skills_required: [
            questSkill(43, "Quest Points"),
            questSkill(49, "Firemaking"),
            questSkill(20, "Crafting"),
            questSkill(20, "Mining")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Tears_of_Guthix",
        category: Categories.QUESTS
    },
    */
    {
        title: "Icthlarin's Little Helper",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 69.25031156402504, "lng": 323.1024169921875},
        difficulty: "Intermediate",
        length: "Medium",
        quest_points: 2,
        quests_required: [
            "Gertrude's Cat"
        ],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Icthlarin%27s_Little_Helper",
        category: Categories.QUESTS
    },
    {
        title: "Desert Treasure",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 73.33731125398923, "lng": 314.0689086914063},
        difficulty: "Master",
        length: "Very Long",
        quest_points: 3,
        quests_required: [
            "The Dig Site",
            "Druidic Ritual",
            "Temple of Ikov",
            "The Tourist Trap",
            "Troll Stronghold",
            "Death Plateau",
            "Priest in Peril",
            "Waterfall Quest"
        ],
        skills_required: [
            questSkill(53, "Thieving"),
            questSkill(50, "Firemaking"),
            questSkill(10, "Slayer", true),
            questSkill(50, "Magic")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Desert_Treasure",
        category: Categories.QUESTS
    },
    {
        title: "The Golem",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 74.1835606963609, "lng": 334.50073242187506},
        difficulty: "Intermediate",
        length: "Medium",
        quest_points: 1,
        quests_required: [],
        skills_required: [
            questSkill(20, "Crafting"),
            questSkill(25, "Thieving")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/The_Golem",
        category: Categories.QUESTS
    },
    {
        title: "The Feud",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 76.23409845392636, "lng": 322.2372436523438},
        difficulty: "Intermediate",
        length: "Medium",
        quest_points: 1,
        quests_required: [],
        skills_required: [
            questSkill(30, "Thieving")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/The_Feud",
        category: Categories.QUESTS
    },
    {
        title: "Mountain Daughter",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 81.87519409824804, "lng": 289.8770141601563},
        difficulty: "Intermediate",
        length: "Medium",
        quest_points: 2,
        quests_required: [],
        skills_required: [
            questSkill(20, "Agility")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Mountain_Daughter",
        category: Categories.QUESTS
    },
    {
        title: "One Small Favour",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 72.20616041766611, "lng": 291.45629882812506},
        difficulty: "Experienced",
        length: "Very Long",
        quest_points: 2,
        quests_required: [
            "Rune Mysteries",
            "Shilo Village",
            "Jungle Potion",
            "Druidic Ritual"
        ],
        skills_required: [
            questSkill(36, "Agility"),
            questSkill(25, "Crafting"),
            questSkill(18, "Herblore"),
            questSkill(30, "Smithing")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/One_Small_Favour",
        category: Categories.QUESTS
    },
    {
        title: "Ghosts Ahoy",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 80.21798951061405, "lng": 347.025146484375},
        difficulty: "Intermediate",
        length: "Medium",
        quest_points: 2,
        quests_required: [
            "The Restless Ghost",
            "Priest in Peril"
        ],
        skills_required: [
            questSkill(25, "Agility"),
            questSkill(20, "Cooking")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Ghosts_Ahoy",
        category: Categories.QUESTS
    },
    {
        title: "Roving Elves",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 75.17735979987151, "lng": 255.53649902343753},
        difficulty: "Master",
        length: "Short",
        quest_points: 1,
        quests_required: [
            "Regicide",
            "Underground Pass",
            "Biohazard",
            "Plague City",
            "Waterfall Quest"
        ],
        skills_required: [
            questSkill(56, "Agility")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Roving_Elves",
        category: Categories.QUESTS
    },
    {
        title: "Roving Elves",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 76.40622861773186, "lng": 254.08081054687503},
        difficulty: "Master",
        length: "Short",
        quest_points: 1,
        quests_required: [
            "Regicide",
            "Underground Pass",
            "Biohazard",
            "Plague City",
            "Waterfall Quest"
        ],
        skills_required: [
            questSkill(56, "Agility")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Roving_Elves",
        category: Categories.QUESTS
    },
    {
        title: "Creature of Fenkenstrain",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 79.93063727280887, "lng": 334.4924926757813},
        difficulty: "Intermediate",
        length: "Short",
        quest_points: 2,
        quests_required: [
            "Priest in Peril",
            "The Restless Ghost"
        ],
        skills_required: [
            questSkill(20, "Crafting"),
            questSkill(25, "Thieving")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Creature_of_Fenkenstrain",
        category: Categories.QUESTS
    },
    {
        title: "In Search of the Myreque",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 79.84140888693949, "lng": 335.489501953125},
        difficulty: "Intermediate",
        length: "Short",
        quest_points: 2,
        quests_required: [
            "Nature Spirit",
            "Priest in Peril",
            "The Restless Ghost"
        ],
        skills_required: [
            questSkill(25, "Agility")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/In_Search_of_the_Myreque",
        category: Categories.QUESTS
    },
    /*
        TODO this is underrground start, figure a way to map it
    {
        title: "Troll Romance",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat":76.95289511468847,"lng":331.60034179687506},
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
    */
    {
        title: "Haunted Mine",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 76.95289511468847, "lng": 331.60034179687506},
        difficulty: "Experienced",
        length: "Medium",
        quest_points: 2,
        quests_required: [
            "Priest in Peril"
        ],
        skills_required: [
            questSkill(15, "Agility"),
            questSkill(35, "Crafting")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Haunted_Mine",
        category: Categories.QUESTS
    },
    {
        title: "Monkey Madness I",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 80.0286061940338, "lng": 267.39074707031256},
        difficulty: "Master",
        length: "Long",
        quest_points: 3,
        quests_required: [
            "The Grant Tree",
            "Tree Gnome Village"
        ],
        skills_required: [
            questSkill(43, "Prayer", true)
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Monkey_Madness_I",
        category: Categories.QUESTS
    },
    {
        title: "Throne of Miscellania",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 83.44409058664262, "lng": 269.23095703125006},
        difficulty: "Experienced",
        length: "Medium",
        quest_points: 1,
        quests_required: [
            "The Fremennik Trials",
            "Heroes' Quest"
        ],
        skills_required: [
            questSkill(45, "Woodcutting", true),
            questSkill(10, "Farming", true),
            questSkill(30, "Mining", true),
            questSkill(45, "Fishing", true)
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Throne_of_Miscellania",
        category: Categories.QUESTS
    },
    {
        title: "Horror from the Deep",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 81.52313174639286, "lng": 269.90112304687506},
        difficulty: "Experienced",
        length: "Short",
        quest_points: 2,
        quests_required: [
            "Alfred Grimhand's Barcrawl"
        ],
        skills_required: [
            questSkill(35, "Agility")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Horror_from_the_Deep",
        category: Categories.QUESTS
    },
    {
        title: "The Fremennik Trials",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 81.84486042070492, "lng": 279.78881835937506},
        difficulty: "Intermediate",
        length: "Long",
        quest_points: 3,
        quests_required: [],
        skills_required: [
            questSkill(25, "Fletching", true),
            questSkill(40, "Woodcutting", true),
            questSkill(40, "Crafting", true)
        ],
        full_guide: "https://oldschool.runescape.wiki/w/The_Fremennik_Trials",
        category: Categories.QUESTS
    },
    {
        title: "Shades of Mort'ton",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 77.25326673720738, "lng": 334.1326904296875},
        difficulty: "Intermediate",
        length: "Short",
        quest_points: 3,
        quests_required: [
            "Priest in Peril"
        ],
        skills_required: [
            questSkill(20, "Crafting"),
            questSkill(15, "Herblore"),
            questSkill(5, "Firemaking")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Shades_of_Mort%27ton",
        category: Categories.QUESTS
    },
    {
        title: "Eadgar's Ruse",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 79.23000193927321, "lng": 295.54321289062506},
        difficulty: "Experienced",
        length: "Medium",
        quest_points: 1,
        quests_required: [
            "Druidic Ritual",
            "Troll Stronghold",
            "Death Plateau"
        ],
        skills_required: [
            questSkill(31, "Herblore"),
            questSkill(44, "Agility", true)
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Eadgar%27s_Ruse",
        category: Categories.QUESTS
    },
    {
        title: "Regicide",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 77.52905427166797, "lng": 274.2599487304688},
        difficulty: "Master",
        length: "Long",
        quest_points: 3,
        quests_required: [
            "Underground Pass",
            "Biohazard",
            "Plague City"
        ],
        skills_required: [
            questSkill(56, "Agility"),
            questSkill(10, "Crafting")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Regicide",
        category: Categories.QUESTS
    },
    {
        title: "Tai Bwo Wannai Trio",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 74.14758817706196, "lng": 287.83081054687506},
        difficulty: "Intermediate",
        length: "Long",
        quest_points: 2,
        quests_required: [
            "Jungle Potion"
        ],
        skills_required: [
            questSkill(15, "Agility"),
            questSkill(30, "Cooking"),
            questSkill(5, "Fishing")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Tai_Bwo_Wannai_Trio",
        category: Categories.QUESTS
    },
    {
        title: "Troll Stronghold",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 80.41662200460028, "lng": 295.75744628906256},
        difficulty: "Experienced",
        length: "Short",
        quest_points: 1,
        quests_required: [
            "Death Plateau"
        ],
        skills_required: [
            questSkill(15, "Agility"),
            questSkill(30, "Thieving", true),
            questSkill(43, "Prayer", true)
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Troll_Stronghold",
        category: Categories.QUESTS
    },
    {
        title: "Death Plateau",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 80.41662200460028, "lng": 295.48278808593756},
        difficulty: "Novice",
        length: "Medium",
        quest_points: 1,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Death_Plateau",
        category: Categories.QUESTS
    },
    {
        title: "Priest in Peril",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 79.79479870063878, "lng": 316.83471679687506},
        difficulty: "Novice",
        length: "Medium",
        quest_points: 1,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Priest_in_Peril",
        category: Categories.QUESTS
    },
    {
        title: "Elemental Workshop I",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 79.89937549112445, "lng": 283.54064941406256},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        quests_required: [],
        skills_required: [
            questSkill(20, "Mining"),
            questSkill(20, "Smithing"),
            questSkill(20, "Crafting")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Elemental_Workshop_I",
        category: Categories.QUESTS
    },
    {
        title: "Big Chompy Bird Hunting",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 72.12456435055404, "lng": 277.94860839843756},
        difficulty: "Intermediate",
        length: "Short",
        quest_points: 2,
        quests_required: [],
        skills_required: [
            questSkill(5, "Fletching"),
            questSkill(30, "Cooking"),
            questSkill(30, "Ranged")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Big_Chompy_Bird_Hunting",
        category: Categories.QUESTS
    },
    {
        title: "Legends' Quest",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 78.47848889727591, "lng": 284.27124023437506},
        difficulty: "Master",
        length: "Very Long",
        quest_points: 4,
        quests_required: [
            "Family Crest",
            "Heroes' Quest",
            "Shield of Arrav",
            "Lost City",
            "Merlin's Crystal",
            "Dragon Slayer",
            "Shilo Village",
            "Jungle Potion",
            "Druidic Ritual",
            "Underground Pass",
            "Biohazard",
            "Plague City",
            "Waterfall Quest"
        ],
        skills_required: [
            questSkill(107, "Quest Points"),
            questSkill(50, "Agility"),
            questSkill(50, "Crafting"),
            questSkill(45, "Herblore"),
            questSkill(56, "Magic"),
            questSkill(52, "Mining"),
            questSkill(42, "Prayer"),
            questSkill(50, "Smithing"),
            questSkill(50, "Strength"),
            questSkill(50, "Thieving"),
            questSkill(50, "Woodcutting")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Legends%27_Quest",
        category: Categories.QUESTS
    },
    {
        title: "Gertrude's Cat",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 79.04418083904169, "lng": 312.2836303710938},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Gertrude%27s_Cat",
        category: Categories.QUESTS
    },
    {
        title: "The Dig Site",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 78.07788665318229, "lng": 326.32141113281256},
        difficulty: "Intermediate",
        length: "Long",
        quest_points: 2,
        quests_required: [
            "Druidic Ritual"
        ],
        skills_required: [
            questSkill(10, "Agility"),
            questSkill(10, "Herblore"),
            questSkill(25, "Thieving")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/The_Dig_Site",
        category: Categories.QUESTS
    },
    {
        title: "Murder Mystery",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 80.78351802154495, "lng": 285.27099609375006},
        difficulty: "Novice",
        length: "Short",
        quest_points: 3,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Murder_Mystery",
        category: Categories.QUESTS
    },
    {
        title: "Dwarf Cannon",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 79.65320163539222, "lng": 273.79028320312506},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Dwarf_Cannon",
        category: Categories.QUESTS
    },
    {
        title: "Watchtower",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 74.59302705427658, "lng": 272.40051269531256},
        difficulty: "Intermediate",
        length: "Long",
        quest_points: 4,
        quests_required: [],
        skills_required: [
            questSkill(15, "Magic"),
            questSkill(15, "Thieving"),
            questSkill(25, "Agility"),
            questSkill(14, "Herblore"),
            questSkill(40, "Mining")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Watchtower",
        category: Categories.QUESTS
    },
    {
        title: "The Tourist Trap",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 74.61052999955676, "lng": 322.30590820312506},
        difficulty: "Intermediate",
        length: "Medium",
        quest_points: 2,
        quests_required: [],
        skills_required: [
            questSkill(10, "Fletching"),
            questSkill(20, "Smithing"),
        ],
        full_guide: "https://oldschool.runescape.wiki/w/The_Tourist_Trap",
        category: Categories.QUESTS
    },
    {
        title: "Observatory Quest",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 75.82231412913185, "lng": 265.34729003906256},
        difficulty: "Novice",
        length: "Short",
        quest_points: 2,
        quests_required: [],
        skills_required: [
            questSkill(10, "Crafting"),
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Observatory_Quest",
        category: Categories.QUESTS
    },
    {
        title: "Underground Pass",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 77.46364401797128, "lng": 274.37805175781256},
        difficulty: "Experienced",
        length: "Long",
        quest_points: 5,
        quests_required: [
            "Biohazard",
            "Plague City"
        ],
        skills_required: [
            questSkill(25, "Ranged"),
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Underground_Pass",
        category: Categories.QUESTS
    },
    {
        title: "Shilo Village",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 71.50749370412518, "lng": 294.62036132812506},
        difficulty: "Experienced",
        length: "Medium",
        quest_points: 2,
        quests_required: [
            "Jungle Potion"
        ],
        skills_required: [
            questSkill(20, "Crafting"),
            questSkill(32, "Agility"),
            questSkill(4, "Smithing")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Shilo_Village",
        category: Categories.QUESTS
    },
    {
        title: "The Grand Tree",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 80.07131834076769, "lng": 267.19848632812506},
        difficulty: "Experienced",
        length: "Long",
        quest_points: 5,
        quests_required: [],
        skills_required: [
            questSkill(25, "Agility")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/The_Grand_Tree",
        category: Categories.QUESTS
    },
    {
        title: "Jungle Potion",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 74.12957203556077, "lng": 289.80834960937506},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        quests_required: [],
        skills_required: [
            questSkill(3, "Herblore")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Jungle_Potion",
        category: Categories.QUESTS
    },
    {
        title: "Biohazard",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 78.04948366622139, "lng": 275.44372558593756},
        difficulty: "Novice",
        length: "Medium",
        quest_points: 3,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Biohazard",
        category: Categories.QUESTS
    },
    {
        title: "Waterfall Quest",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 80.08220457856821, "lng": 270.8212280273438},
        difficulty: "Intermediate",
        length: "Medium",
        quest_points: 1,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Waterfall_Quest",
        category: Categories.QUESTS
    },
    {
        title: "Sea Slug",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 77.59235830325629, "lng": 283.6093139648438},
        difficulty: "Intermediate",
        length: "Short",
        quest_points: 1,
        quests_required: [],
        skills_required: [
            questSkill(30, "Firemaking")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Sea_Slug",
        category: Categories.QUESTS
    },
    {
        title: "Plague City",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 78.03696523649174, "lng": 273.85070800781256},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Plague_City",
        category: Categories.QUESTS
    },
    {
        title: "Sheep Herder",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 77.54801956304901, "lng": 277.09167480468756},
        difficulty: "Novice",
        length: "Short",
        quest_points: 4,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Sheep_Herder",
        category: Categories.QUESTS
    },
    {
        title: "Hazeel Cult",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 77.1449467459218, "lng": 273.71887207031256},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Hazeel_Cult",
        category: Categories.QUESTS
    },
    {
        title: "Fight Arena",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 76.04526702660974, "lng": 273.72985839843756},
        difficulty: "Experienced",
        length: "Short",
        quest_points: 2,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Fight_Arena",
        category: Categories.QUESTS
    },
    {
        title: "Tree Gnome Village",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 75.56167166945839, "lng": 272.14233398437506},
        difficulty: "Intermediate",
        length: "Short",
        quest_points: 2,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Tree_Gnome_Village",
        category: Categories.QUESTS
    },
    {
        title: "Holy Grail",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 80.24967042666049, "lng": 286.42456054687506},
        difficulty: "Intermediate",
        length: "Medium",
        quest_points: 2,
        quests_required: [
            "Merlin's Crystal"
        ],
        skills_required: [
            questSkill(20, "Attack")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Holy_Grail",
        category: Categories.QUESTS
    },
    {
        title: "Clock Tower",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 76.81828743575531, "lng": 273.91662597656256},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Clock_Tower",
        category: Categories.QUESTS
    },
    {
        title: "Temple of Ikov",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 77.84300461628665, "lng": 274.3148803710938},
        difficulty: "Experienced",
        length: "Medium",
        quest_points: 1,
        quests_required: [],
        skills_required: [
            questSkill(42, "Thieving"),
            questSkill(40, "Ranged")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Temple_of_Ikov",
        category: Categories.QUESTS
    },
    {
        title: "Monk's Friend",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 76.20531215397753, "lng": 276.36108398437506},
        difficulty: "Novice",
        length: "Very Short",
        quest_points: 1,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Monk%27s_Friend",
        category: Categories.QUESTS
    },
    {
        title: "Fishing Contest",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 79.95893043409399, "lng": 290.53344726562506},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        quests_required: [],
        skills_required: [
            questSkill(10, "Fishing")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Fishing_Contest",
        category: Categories.QUESTS
    },
    {
        title: "Fishing Contest",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 79.91189171335418, "lng": 294.15893554687506},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        quests_required: [],
        skills_required: [
            questSkill(10, "Fishing")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Fishing_Contest",
        category: Categories.QUESTS
    },
    {
        title: "Tribal Totem",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 75.77244716458964, "lng": 288.55590820312506},
        difficulty: "Intermediate",
        length: "Short",
        quest_points: 1,
        quests_required: [],
        skills_required: [
            questSkill(21, "Thieving")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Tribal_Totem",
        category: Categories.QUESTS
    },
    {
        title: "Family Crest",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 78.95666450223038, "lng": 320.71838378906256},
        difficulty: "Experienced",
        length: "Medium",
        quest_points: 1,
        quests_required: [],
        skills_required: [
            questSkill(40, "Mining"),
            questSkill(40, "Smithing"),
            questSkill(59, "Magic"),
            questSkill(40, "Crafting"),
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Family_Crest",
        category: Categories.QUESTS
    },
    {
        title: "Scorpion Catcher",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 78.89282346080738, "lng": 282.68371582031256},
        difficulty: "Intermediate",
        length: "Medium",
        quest_points: 1,
        quests_required: [
            "Alfred Grimhand's Barcrawl"
        ],
        skills_required: [
            questSkill(31, "Prayer")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Scorpion_Catcher",
        category: Categories.QUESTS
    },
    {
        title: "Hero's Quest",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 80.22825035782061, "lng": 296.00463867187506},
        difficulty: "Experienced",
        length: "Long",
        quest_points: 1,
        quests_required: [
            "Shield of Arrav",
            "Lost City",
            "Merlin's Crystal",
            "Dragon Slayer",
            "Dryuduc Ritual"
        ],
        skills_required: [
            questSkill(55, "Quest Points"),
            questSkill(53, "Fishing"),
            questSkill(25, "Herblore"),
            questSkill(50, "Mining")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Heroes%27_Quest",
        category: Categories.QUESTS
    },
    {
        title: "Merlin's Crystal",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 80.2738284286596, "lng": 286.78710937500006},
        difficulty: "Intermediate",
        length: "Medium",
        quest_points: 6,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Merlin%27s_Crystal",
        category: Categories.QUESTS
    },
    {
        title: "Witch's House",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 79.59284534760363, "lng": 297.58666992187506},
        difficulty: "Intermediate",
        length: "Short",
        quest_points: 4,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Witch%27s_House",
        category: Categories.QUESTS
    },
    {
        title: "Lost City",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 76.14032699247068, "lng": 312.21496582031256},
        difficulty: "Experienced",
        length: "Short",
        quest_points: 3,
        quests_required: [],
        skills_required: [
            questSkill(31, "Crafting"),
            questSkill(36, "Woodcutting")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Lost_City",
        category: Categories.QUESTS
    },
    {
        title: "Druidic Ritual",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 79.92247037354636, "lng": 296.85607910156256},
        difficulty: "Novice",
        length: "Short",
        quest_points: 4,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Druidic_Ritual",
        category: Categories.QUESTS
    },
    {
        title: "X Marks the Spot",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 76.69496344872529, "lng": 317.53784179687506},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/X_Marks_the_Spot",
        category: Categories.QUESTS
    },
    {
        title: "The Corsair Curse",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 77.17363571861377, "lng": 304.31030273437506},
        difficulty: "Novice",
        length: "Short",
        quest_points: 2,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/The_Corsair_Curse",
        category: Categories.QUESTS
    },
    {
        title: "Misthalin Mystery",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 75.32698400302361, "lng": 317.88940429687506},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Misthalin_Mystery",
        category: Categories.QUESTS
    },
    {
        title: "Rune Mysteries",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 76.4365361225478, "lng": 316.30737304687506},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Rune_Mysteries",
        category: Categories.QUESTS
    },
    {
        title: "Dragon Slayer",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 78.4130238140842, "lng": 314.92309570312506},
        difficulty: "Experienced",
        length: "Long",
        quest_points: 2,
        quests_required: [],
        skills_required: [
            questSkill(32, "Quest Points"),
            questSkill(8, "Crafting", true),
            questSkill(33, "Magic", true)
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Dragon_Slayer",
        category: Categories.QUESTS
    },
    {
        title: "Pirate's Treasure",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 76.80324707239429, "lng": 305.69458007812506},
        difficulty: "Novice",
        length: "Short",
        quest_points: 2,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Goblin_Diplomacy",
        category: Categories.QUESTS
    },
    {
        title: "Goblin Diplomacy",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 80.20631650536714, "lng": 299.5669555664063},
        difficulty: "Novice",
        length: "Short",
        quest_points: 5,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Goblin_Diplomacy",
        category: Categories.QUESTS
    },
    {
        title: "The Knight's Sword",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 78.14578265878505, "lng": 300.81665039062506},
        difficulty: "Intermediate",
        length: "Short",
        quest_points: 1,
        quests_required: [],
        skills_required: [
            questSkill(10, "Mining"),
            questSkill(15, "Smithing", true),
            questSkill(15, "Mining", true),
            questSkill(10, "Cooking", true)
        ],
        full_guide: "https://oldschool.runescape.wiki/w/The_Knight%27s_Sword",
        category: Categories.QUESTS
    },
    {
        title: "Witch's Potion",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 76.10739222252079, "lng": 300.2261352539063},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Witch%27s_Potion",
        category: Categories.QUESTS
    },
    {
        title: "Black Knights' Fortress",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 78.06312541246359, "lng": 299.69604492187506},
        difficulty: "Novice",
        length: "Short",
        quest_points: 3,
        quests_required: [],
        skills_required: [
            questSkill(12, "Quest Points")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Black_Knights%27_Fortress",
        category: Categories.QUESTS
    },
    {
        title: "Doric's Quest",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 79.52215598252101, "lng": 299.2373657226563},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        quests_required: [],
        skills_required: [
            questSkill(15, "Mining", true)
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Doric%27s_Quest",
        category: Categories.QUESTS
    },
    {
        title: "Prince Ali Rescue",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 75.46065793020718, "lng": 322.23999023437506},
        difficulty: "Novice",
        length: "Short",
        quest_points: 3,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Prince_Ali_Rescue",
        category: Categories.QUESTS
    },
    {
        title: "Imp Catcher",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 75.41162164538234, "lng": 309.5150756835938},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Imp_Catcher",
        category: Categories.QUESTS
    },
    {
        title: "Vampire Slayer",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 77.07141183682502, "lng": 308.72680664062506},
        difficulty: "Novice",
        length: "Short",
        quest_points: 3,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Vampire_Slayer",
        category: Categories.QUESTS
    },
    {
        title: "Ernest the Chicken",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 77.98333168415733, "lng": 309.58374023437506},
        difficulty: "Novice",
        length: "Short",
        quest_points: 4,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Ernest_the_Chicken",
        category: Categories.QUESTS
    },
    {
        title: "Shield of Arrav",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 80.04856111714389, "lng": 316.11511230468756},
        difficulty: "Novice",
        length: "Medium",
        quest_points: 1,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Shield_of_Arrav",
        category: Categories.QUESTS
    },
    {
        title: "Sheep Shearer",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 77.15960430807638, "lng": 314.91760253906256},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Sheep_Shearer",
        category: Categories.QUESTS
    },
    {
        title: "Romeo & Juliet",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 79.22692203203958, "lng": 316.75781250000006},
        difficulty: "Novice",
        length: "Short",
        quest_points: 5,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Romeo_%26_Juliet",
        category: Categories.QUESTS
    },
    {
        title: "The Restless Ghost",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 76.21774983606814, "lng": 318.21350097656256},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        items_required: [],
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/The_Restless_Ghost",
        category: Categories.QUESTS
    },
    {
        title: "Demon Slayer",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 79.20533829812156, "lng": 315.84045410156256},
        difficulty: "Novice",
        length: "Medium",
        quest_points: 3,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Demon_Slayer",
        category: Categories.QUESTS
    },
    {
        title: "Cooks Assistant",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat": 76.31295735284931, "lng": 316.3046264648438},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        quests_required: [],
        skills_required: [],
        full_guide: "https://oldschool.runescape.wiki/w/Cook%27s_Assistant",
        category: Categories.QUESTS
    },
];