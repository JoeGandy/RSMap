import {Categories} from "../IconBaseClass";


function questSkill(level, skill_name, optional) {
    optional = optional === undefined ? false : optional;
    return {
        level: level,
        name: skill_name,
        optional: optional
    }
}

//

/*
    {
        title: "Cooks Assistant",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat":76.31295735284931,"lng":316.3046264648438},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        quests_required: [
        ],
        skills_required: [
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Cook%27s_Assistant",
        category: Categories.QUESTS
    },


 */
export const Quests = [
    {
        title: "X Marks the Spot",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat":76.69496344872529,"lng":317.53784179687506},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        quests_required: [
        ],
        skills_required: [
        ],
        full_guide: "https://oldschool.runescape.wiki/w/X_Marks_the_Spot",
        category: Categories.QUESTS
    },
    {
        title: "The Corsair Curse",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat":77.17363571861377,"lng":304.31030273437506},
        difficulty: "Novice",
        length: "Short",
        quest_points: 2,
        quests_required: [
        ],
        skills_required: [
        ],
        full_guide: "https://oldschool.runescape.wiki/w/The_Corsair_Curse",
        category: Categories.QUESTS
    },
    {
        title: "Misthalin Mystery",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat":75.32698400302361,"lng":317.88940429687506},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        quests_required: [
        ],
        skills_required: [
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Misthalin_Mystery",
        category: Categories.QUESTS
    },
    {
        title: "Rune Mysteries",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat":76.4365361225478,"lng":316.30737304687506},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        quests_required: [
        ],
        skills_required: [
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Rune_Mysteries",
        category: Categories.QUESTS
    },
    {
        title: "Dragon Slayer",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat":78.4130238140842,"lng":314.92309570312506},
        difficulty: "Experienced",
        length: "Long",
        quest_points: 2,
        quests_required: [

        ],
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
        position: {"lat":76.80324707239429,"lng":305.69458007812506},
        difficulty: "Novice",
        length: "Short",
        quest_points: 2,
        quests_required: [

        ],
        skills_required: [
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Goblin_Diplomacy",
        category: Categories.QUESTS
    },
    {
        title: "Goblin Diplomacy",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat":80.20631650536714,"lng":299.5669555664063},
        difficulty: "Novice",
        length: "Short",
        quest_points: 5,
        quests_required: [

        ],
        skills_required: [
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Goblin_Diplomacy",
        category: Categories.QUESTS
    },
    {
        title: "The Knight's Sword",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat":78.14578265878505,"lng":300.81665039062506},
        difficulty: "Intermediate",
        length: "Short",
        quest_points: 1,
        quests_required: [

        ],
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
        position: {"lat":76.10739222252079,"lng":300.2261352539063},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        quests_required: [

        ],
        skills_required: [
        ],
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