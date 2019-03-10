import {Categories} from "../IconBaseClass";

function questItem(name, amount, obtainable_during_quest, explanation){
    return {
        name: name,
        amount: amount,
        obtainable_during_quest: obtainable_during_quest,
        explanation: explanation === undefined ? "" : explanation
    };
}

function questSkill(level, skill_name){
    return {
        level: level,
        name: skill_name
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
        items_required: [
            questItem("Empty Pot", 1, true),
            questItem("Bucket", 1, true),
            questItem("Egg", 1, true)
        ],
        quests_required: [
            "None"
        ],
        skills_required: [
            questSkill(null, "None")
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Cook%27s_Assistant",
        category: Categories.QUESTS
    },
 */
export const Quests = [
    {
        title: "The Restless Ghost",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat":76.21774983606814,"lng":318.21350097656256},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        items_required: [
        ],
        quests_required: [
        ],
        skills_required: [
        ],
        full_guide: "https://oldschool.runescape.wiki/w/The_Restless_Ghost",
        category: Categories.QUESTS
    },
    {
        title: "Demon Slayer",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat":79.20533829812156,"lng":315.84045410156256},
        difficulty: "Novice",
        length: "Medium",
        quest_points: 3,
        items_required: [
            questItem("A Bucket of water", 1, true),
            questItem("Bone", 25, false, "Can't be noted, but can be delivered in increments"),
            questItem("Coin", 1, false)
        ],
        quests_required: [
        ],
        skills_required: [
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Demon_Slayer",
        category: Categories.QUESTS
    },
    {
        title: "Cooks Assistant",
        iconUrl: require('../../../static/icons/misc/Quest_start_icon.png'),
        className: Categories.QUESTS,
        position: {"lat":76.31295735284931,"lng":316.3046264648438},
        difficulty: "Novice",
        length: "Short",
        quest_points: 1,
        items_required: [
            questItem("Empty Pot", 1, true),
            questItem("Bucket", 1, true),
            questItem("Egg", 1, true)
        ],
        quests_required: [
        ],
        skills_required: [
        ],
        full_guide: "https://oldschool.runescape.wiki/w/Cook%27s_Assistant",
        category: Categories.QUESTS
    },
];