import {Categories, IconBaseClass} from "./IconBaseClass";

let icons_dir = '../../static/icons/teleport/';

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    let R = 6371; // Radius of the earth in km
    let dLat = deg2rad(lat2 - lat1);  // deg2rad below
    let dLon = deg2rad(lon2 - lon1);
    let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
    ;
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}


//Re renders the icons, almost definitely a more efficient way to be handling this, but it'll do for now
export function rewriteIcons() {
    let icons = {};
    for (let type of types) {
        icons[type.label] = [];
        if (typeof window !== 'undefined') {
            for (let key in type.data) {
                icons[type.label][key] = new IconBaseClass(type.data[key]);
            }
        }
    }
    return icons;
}

export function getClosestIcon(lat, lng) {
    let shortest = 30000;
    let closest = null;
    for (let icon of Teleports) {
        let distance = getDistanceFromLatLonInKm(lat, lng, icon.position.lat, icon.position.lng);
        if (distance < shortest) {
            shortest = distance;
            closest = icon;
        }
    }
    for (let icon of FairyRings) {
        let distance = getDistanceFromLatLonInKm(lat, lng, icon.position.lat, icon.position.lng);
        if (distance < shortest) {
            shortest = distance;
            closest = icon;
        }
    }
    return closest;
}

export const FairyRings = [
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 74.5915675990001, "lng": 302.069091796875},
        title: "Fairy ring",
        description: "A I Q (aiq)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 76.81578187834086, "lng": 282.55737304687506},
        title: "Fairy ring",
        description: "A I R (air)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 81.3265643369573, "lng": 287.83081054687506},
        title: "Fairy ring",
        description: "A J R (ajr)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 83.73055909431551, "lng": 269.37927246093756},
        title: "Fairy ring",
        description: "A J S (ajs)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 81.34559639180898, "lng": 257.43713378906256},
        title: "Fairy ring",
        description: "A K Q (akq)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 71.65156224242223, "lng": 274.05395507812506},
        title: "Fairy ring",
        description: "A K S (aks)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 81.55142594298475, "lng": 269.57153320312506},
        title: "Fairy ring",
        description: "A L P (alp)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 80.05994617616484, "lng": 341.82312011718756},
        title: "Fairy ring",
        description: "A L Q (alq)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 80.07226543955538, "lng": 278.86596679687506},
        title: "Fairy ring",
        description: "A L S (als)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 77.92601462331328, "lng": 329.35913085937506},
        title: "Fairy ring",
        description: "B I P (bip)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 74.29248881670038, "lng": 318.75183105468756},
        title: "Fairy ring",
        description: "B I Q (biq)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 77.09964896517972, "lng": 278.34411621093756},
        title: "Fairy ring",
        description: "B I S (bis)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 73.82022893610119, "lng": 246.17065429687503},
        title: "Fairy ring",
        description: "B J S (bjs)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 73.22194329309737, "lng": 261.79321289062506},
        title: "Fairy ring",
        description: "B K S (bks)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 79.31486848891893, "lng": 333.24829101562506},
        title: "Fairy ring",
        description: "B K R (bkr)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 78.29381505701517, "lng": 285.19958496093756},
        title: "Fairy ring",
        description: "B L R (blr)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 83.64358148767488, "lng": 270.23620605468756},
        title: "Fairy ring",
        description: "C I P (cip)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 74.88651947809277, "lng": 271.22497558593756},
        title: "Fairy ring",
        description: "C I Q (ciq)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 82.67208232814555, "lng": 190.54138183593753},
        title: "Fairy ring",
        description: "C I R (cir)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 83.51147766926859, "lng": 212.6239013671875},
        title: "Fairy ring",
        description: "C I S (cis)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 80.95091652512318, "lng": 282.89794921875006},
        title: "Fairy ring",
        description: "C J R (cjr)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 72.6038360424019, "lng": 289.20959472656256},
        title: "Fairy ring",
        description: "C K R (ckr)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 79.78213873561926, "lng": 331.79260253906256},
        title: "Fairy ring",
        description: "C K S (cks)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 76.18630710027861, "lng": 307.73803710937506},
        title: "Fairy ring",
        description: "C L P (clp)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 66.52420417769652, "lng": 285.06774902343756},
        title: "Fairy ring",
        description: "C L R (clr)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 74.07540384020064, "lng": 281.37084960937506},
        title: "Fairy ring",
        description: "C L S (cls)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 75.22646574076222, "lng": 309.58374023437506},
        title: "Fairy ring",
        description: "D I S (dis)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 76.56029664074973, "lng": 279.79431152343756},
        title: "Fairy ring",
        description: "D J P (djp)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 81.75160686385584, "lng": 200.36865234375},
        title: "Fairy ring",
        description: "D J R (djr)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 74.61052999955676, "lng": 295.74645996093756},
        title: "Fairy ring",
        description: "D K P (dkp)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 80.05994617616484, "lng": 310.70434570312506},
        title: "Fairy ring",
        description: "D K R (dkr)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 82.31770944958727, "lng": 285.45776367187506},
        title: "Fairy ring",
        description: "D K S (dks)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 72.85659981428137, "lng": 330.21606445312506},
        title: "Fairy ring",
        description: "D L Q (dlq)",
        category: Categories.FAIRY_RINGS
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: Categories.FAIRY_RINGS,
        position: {"lat": 74.39920828363479, "lng": 250.45532226562503},
        title: "Fairy ring",
        description: "D L R (dlr)",
        category: Categories.FAIRY_RINGS
    },
];

export const Teleports = [
    // >>>>>>>>>>>>>>>>>>>>> Standard Spell book >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    {
        iconUrl: require('../../static/icons/teleport/Home_Teleport_icon.png'),
        className: 'teleport teleport_home ' + Categories.REGULAR_SPELLBOOK,
        position: {"lat": 76.35967119570851, "lng": 317},
        title: "Home Teleport Spell",
        category: Categories.REGULAR_SPELLBOOK

    },
    {
        iconUrl: require('../../static/icons/teleport/Lumbridge_Teleport_icon.png'),
        className: 'teleport teleport_lumbridge ' + Categories.REGULAR_SPELLBOOK,
        position: {"lat": 76.35967119570851, "lng": 317.3},
        title: "Teleport to Lumbridge",
        category: Categories.REGULAR_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Varrock_Teleport_icon.png'),
        className: 'teleport teleport_varrock ' + Categories.REGULAR_SPELLBOOK,
        position: {"lat": 79.19401548509859, "lng": 316.37329101562506},
        title: "Teleport to Varrock",
        category: Categories.REGULAR_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Falador_Teleport_icon.png'),
        className: 'teleport teleport_faladaor ' + Categories.REGULAR_SPELLBOOK,
        position: {"lat": 78.66244812600279, "lng": 300.06408691406256},
        title: "Teleport to Falador",
        category: Categories.REGULAR_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Teleport_to_House_icon.png'),
        className: 'teleport teleport_house teleport_rimmington ' + Categories.REGULAR_SPELLBOOK,
        position: {"lat": 76.43718024219102, "lng": 299.33898925781256},
        title: "Teleport to House (Rimmington)",
        category: Categories.REGULAR_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Teleport_to_House_icon.png'),
        className: 'teleport teleport_house teleport_yannile ' + Categories.REGULAR_SPELLBOOK,
        position: {"lat": 74.27909894347644, "lng": 272.32360839843756},
        title: "Teleport to House (Yannille)",
        category: Categories.REGULAR_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Teleport_to_House_icon.png'),
        className: 'teleport teleport_house teleport_rellekka ' + Categories.REGULAR_SPELLBOOK,
        position: {"lat": 81.50935493057601, "lng": 280.56884765625006},
        title: "Teleport to House (Rellekka)",
        category: Categories.REGULAR_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Teleport_to_House_icon.png'),
        className: 'teleport teleport_house teleport_brimhaven ' + Categories.REGULAR_SPELLBOOK,
        position: {"lat": 75.70342995730704, "lng": 286.46850585937506},
        title: "Teleport to House (Brimhaven)",
        category: Categories.REGULAR_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Teleport_to_House_icon.png'),
        className: 'teleport teleport_house teleport_taverly ' + Categories.REGULAR_SPELLBOOK,
        position: {"lat": 79.69701350577613, "lng": 295.46081542968756},
        title: "Teleport to House (Taverly)",
        category: Categories.REGULAR_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Teleport_to_House_icon.png'),
        className: 'teleport teleport_house teleport_pollnivneach ' + Categories.REGULAR_SPELLBOOK,
        position: {"lat": 72.6038360424019, "lng": 324.73388671875006},
        title: "Teleport to House (Pollnivneach)",
        category: Categories.REGULAR_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Teleport_to_House_icon.png'),
        className: 'teleport teleport_house teleport_hosidius ' + Categories.REGULAR_SPELLBOOK,
        position: {"lat": 80.29607550360463, "lng": 219.63867187500003},
        title: "Teleport to House (Hosidius)",
        category: Categories.REGULAR_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Camelot_Teleport_icon.png'),
        className: 'teleport teleport_camelot ' + Categories.REGULAR_SPELLBOOK,
        position: {"lat": 79.84818858331862, "lng": 286.38061523437506},
        title: "Teleport to Camelot",
        category: Categories.REGULAR_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Ardougne_Teleport_icon.png'),
        className: 'teleport teleport_ardougne ' + Categories.REGULAR_SPELLBOOK,
        position: {"lat": 77.64712256067553, "lng": 280.04150390625006},
        title: "Teleport to Ardougne",
        category: Categories.REGULAR_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Watchtower_Teleport_icon.png'),
        className: 'teleport teleport_watchtower ' + Categories.REGULAR_SPELLBOOK,
        position: {"lat": 74.63238139647521, "lng": 272.51037597656256},
        title: "Teleport to the Watchtower",
        category: Categories.REGULAR_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Trollheim_Teleport_icon.png'),
        className: 'teleport teleport_trollheim ' + Categories.REGULAR_SPELLBOOK,
        position: {"lat": 81.92164259401909, "lng": 295.20263671875006},
        title: "Teleport to Trollheim",
        category: Categories.REGULAR_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Ape_Atoll_Teleport_%28standard%29_icon.png'),
        className: 'teleport teleport_apeatol ' + Categories.REGULAR_SPELLBOOK,
        position: {"lat": 67.86519487931152, "lng": 289.03930664062506},
        title: "Teleport to Ape Atol",
        category: Categories.REGULAR_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Kourend_Castle_Teleport_icon.png'),
        className: 'teleport teleport_kourendcastle ' + Categories.REGULAR_SPELLBOOK,
        position: {"lat": 81.88295389538273, "lng": 213.01391601562503},
        title: "Teleport to Kourend Castle",
        category: Categories.REGULAR_SPELLBOOK
    },
    // <<<<<<<<<<<<<<<<<<<<< Standard Spell book <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    // >>>>>>>>>>>>>>>>>>>>> Ancient Spell book >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    {
        iconUrl: require('../../static/icons/teleport/Paddewwa_Teleport_icon.png'),
        className: 'teleport teleport_paddewwa ' + Categories.ANCIENT_SPELLBOOK,
        position: {"lat": 79.85302848224637, "lng": 308.58947753906256},
        title: "Teleport to Paddewwa",
        category: Categories.ANCIENT_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Senntisten_Teleport_icon.png'),
        className: 'teleport teleport_senntisten ' + Categories.ANCIENT_SPELLBOOK,
        position: {"lat": 78.1344931829381, "lng": 325.71166992187506},
        title: "Teleport to Paddewwa",
        category: Categories.ANCIENT_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Kharyrll_Teleport_icon.png'),
        className: 'teleport teleport_kharyrll ' + Categories.ANCIENT_SPELLBOOK,
        position: {"lat": 79.95509868922989, "lng": 334.85778808593756},
        title: "Teleport to Kharyrll ",
        category: Categories.ANCIENT_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Lassar_Teleport_icon.png'),
        className: 'teleport teleport_lassar ' + Categories.ANCIENT_SPELLBOOK,
        position: {"lat": 79.9799791857134, "lng": 302.9095458984375},
        title: "Teleport to Lassar ",
        category: Categories.ANCIENT_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Dareeyak_Teleport_icon.png'),
        className: 'teleport teleport_dareeyak ' + Categories.ANCIENT_SPELLBOOK,
        position: {"lat": 82.08290127808056, "lng": 300.44860839843756},
        title: "Teleport to Dareeyak",
        category: Categories.ANCIENT_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Carrallangar_Teleport_icon.png'),
        className: 'teleport teleport_carrallangar ' + Categories.ANCIENT_SPELLBOOK,
        position: {"lat": 81.88140252510168, "lng": 313.34106445312506},
        title: "Teleport to Carrallangar ",
        category: Categories.ANCIENT_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Annakarl_Teleport_icon.png'),
        className: 'teleport teleport_annakarl ' + Categories.ANCIENT_SPELLBOOK,
        position: {"lat": 83.63932291491399, "lng": 321.41601562500006},
        title: "Teleport to Annakarl ",
        category: Categories.ANCIENT_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Ghorrock_Teleport_icon.png'),
        className: 'teleport teleport_ghorrock ' + Categories.ANCIENT_SPELLBOOK,
        position: {"lat": 83.7896675689016, "lng": 299.09729003906256},
        title: "Teleport to Ghorrock ",
        category: Categories.ANCIENT_SPELLBOOK
    },
    // <<<<<<<<<<<<<<<<<<<<< Ancient Spell book <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    // >>>>>>>>>>>>>>>>>>>>> Lunar Spell book >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    {
        iconUrl: require('../../static/icons/teleport/Home_Teleport_icon.png'),
        className: 'teleport teleport_lunar_home ' + Categories.LUNAR_SPELLBOOK,
        position: {"lat":83.84292070051193,"lng":242.73193359375003},
        title: "Home Teleport Spell (Lunar)",
        category: Categories.LUNAR_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Moonclan_Teleport_icon.png'),
        className: 'teleport teleport_moonclan ' + Categories.LUNAR_SPELLBOOK,
        position: {"lat":83.8399741628462,"lng":243.09997558593753},
        title: "Moonclan Teleport",
        category: Categories.LUNAR_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Ourania_Teleport_icon.png'),
        className: 'teleport teleport_ourania teleport_zmi ' + Categories.LUNAR_SPELLBOOK,
        position: {"lat":76.72653088877502,"lng":267.50610351562506},
        title: "Ourania Teleport",
        category: Categories.LUNAR_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Waterbirth_Teleport_icon.png'),
        className: 'teleport teleport_waterbirth ' + Categories.LUNAR_SPELLBOOK,
        position: {"lat":82.64822196607551,"lng":272.20825195312506},
        title: "Waterbirth Teleport",
        category: Categories.LUNAR_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Barbarian_Teleport_icon.png'),
        className: 'teleport teleport_barbiarn_outpost ' + Categories.LUNAR_SPELLBOOK,
        position: {"lat":80.84402736160101,"lng":270.68115234375006},
        title: "Barbarian Teleport (Barbarian Outpost)",
        category: Categories.LUNAR_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Khazard_Teleport_icon.png'),
        className: 'teleport teleport_khazard ' + Categories.LUNAR_SPELLBOOK,
        position: {"lat":75.38392435449046,"lng":279.63500976562506},
        title: "Khazard Teleport",
        category: Categories.LUNAR_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Fishing_Guild_Teleport_icon.png'),
        className: 'teleport teleport_fishing_guild ' + Categories.LUNAR_SPELLBOOK,
        position: {"lat":78.7827617628182,"lng":276.71264648437506},
        title: "Fishing Guild Teleport",
        category: Categories.LUNAR_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Catherby_Teleport_icon.png'),
        className: 'teleport teleport_catherby ' + Categories.LUNAR_SPELLBOOK,
        position: {"lat":79.50766114392374,"lng":289.12719726562506},
        title: "Catherby Teleport",
        category: Categories.LUNAR_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Ice_Plateau_Teleport_icon.png'),
        className: 'teleport teleport_ice_plateau ' + Categories.LUNAR_SPELLBOOK,
        position: {"lat":83.86878976571622,"lng":300.42114257812506},
        title: "Ice Planteau Teleport",
        category: Categories.LUNAR_SPELLBOOK
    },
    // <<<<<<<<<<<<<<<<<<<<< Lunar Spell book <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    // >>>>>>>>>>>>>>>>>>>>> Arceuus Spell book >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    {
        iconUrl: require('../../static/icons/teleport/Home_Teleport_icon.png'),
        className: 'teleport teleport_home_arceuus ' + Categories.ARCEUUS_SPELLBOOK,
        position: {"lat":83.60454003128096,"lng":217.05688476562503},
        title: "Home Teleport Spell (Arceuus)",
        category: Categories.ARCEUUS_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Lumbridge_Graveyard_Teleport_icon.png'),
        className: 'teleport teleport_lumbridge_graveyard ' + Categories.ARCEUUS_SPELLBOOK,
        position: {"lat":76.01742102194744,"lng":318.37280273437506},
        title: "Lumbridge Graveyard Teleport",
        category: Categories.ARCEUUS_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Draynor_Manor_Teleport_icon.png'),
        className: 'teleport teleport_draynor_manor ' + Categories.ARCEUUS_SPELLBOOK,
        position: {"lat":78.13901024442676,"lng":309.57275390625006},
        title: "Draynor Manor Teleport",
        category: Categories.ARCEUUS_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Battlefront_Teleport_icon.png'),
        className: 'teleport teleport_battlefront ' + Categories.ARCEUUS_SPELLBOOK,
        position: {"lat":82.46966951033005,"lng":193.52416992187503},
        title: "Battlefront Teleport",
        category: Categories.ARCEUUS_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Mind_Altar_Teleport_icon.png'),
        className: 'teleport teleport_mind_altar ' + Categories.ARCEUUS_SPELLBOOK,
        position: {"lat":80.10252542210563,"lng":301.01989746093756},
        title: "Mind Altar Teleport",
        category: Categories.ARCEUUS_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Respawn_Teleport_icon.png'),
        className: 'teleport teleport_respawn_edgeville ' + Categories.ARCEUUS_SPELLBOOK,
        position: {"lat":79.78895756946126,"lng":308.594970703125},
        title: "Respawn Teleport ",
        description: "Must have death location here",
        category: Categories.ARCEUUS_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Respawn_Teleport_icon.png'),
        className: 'teleport teleport_respawn_lumbridge ' + Categories.ARCEUUS_SPELLBOOK,
        position: {"lat":76.28303027845439,"lng":317.14233398437506},
        title: "Respawn Teleport ",
        description: "Must have death location here",
        category: Categories.ARCEUUS_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Respawn_Teleport_icon.png'),
        className: 'teleport teleport_respawn_falador ' + Categories.ARCEUUS_SPELLBOOK,
        position: {"lat":78.14013924493644,"lng":300.44311523437506},
        title: "Respawn Teleport ",
        description: "Must have death location here",
        category: Categories.ARCEUUS_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Respawn_Teleport_icon.png'),
        className: 'teleport teleport_respawn_ardougne ' + Categories.ARCEUUS_SPELLBOOK,
        position: {"lat":77.65064755611985,"lng":279.72290039062506},
        title: "Respawn Teleport ",
        description: "Must have death location here",
        category: Categories.ARCEUUS_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Salve_Graveyard_Teleport_icon.png'),
        className: 'teleport teleport_salve_graveyard ' + Categories.ARCEUUS_SPELLBOOK,
        position: {"lat":79.66749761579231,"lng":330.83129882812506},
        title: "Salve Graveyard Teleport",
        category: Categories.ARCEUUS_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Fenkenstrain%27s_Castle_Teleport_icon.png'),
        className: 'teleport teleport_fenkenstrains_castle ' + Categories.ARCEUUS_SPELLBOOK,
        position: {"lat":80.4248491549027,"lng":338.56567382812506},
        title: "Fenkenstrain's Castle Teleport",
        category: Categories.ARCEUUS_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/West_Ardougne_Teleport_icon.png'),
        className: 'teleport teleport_western_ardounge ' + Categories.ARCEUUS_SPELLBOOK,
        position: {"lat":77.62948272019062,"lng":268.01147460937506},
        title: "Western Ardougne Teleport",
        category: Categories.ARCEUUS_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/West_Ardougne_Teleport_icon.png'),
        className: 'teleport teleport_western_ardounge ' + Categories.ARCEUUS_SPELLBOOK,
        position: {"lat":77.62948272019062,"lng":268.01147460937506},
        title: "Western Ardougne Teleport",
        category: Categories.ARCEUUS_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Harmony_Island_Teleport_icon.png'),
        className: 'teleport teleport_harmoney_island ' + Categories.ARCEUUS_SPELLBOOK,
        position: {"lat":69.57097878993854,"lng":354.93530273437506},
        title: "Harmoney Island Teleport",
        category: Categories.ARCEUUS_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Cemetery_Teleport_icon.png'),
        className: 'teleport teleport_forgotten_cemetery ' + Categories.ARCEUUS_SPELLBOOK,
        position: {"lat":82.57617631552547,"lng":300.87158203125006},
        title: "Forgotten Cemetery Teleport",
        category: Categories.ARCEUUS_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Barrows_Teleport_icon.png'),
        className: 'teleport teleport_barrows ' + Categories.ARCEUUS_SPELLBOOK,
        position: {"lat":77.77572686730878,"lng":339.6478271484375},
        title: "Barrows Teleport",
        category: Categories.ARCEUUS_SPELLBOOK
    },
    {
        iconUrl: require('../../static/icons/teleport/Ape_Atoll_Teleport_%28Arceuus%29_icon.png'),
        className: 'teleport teleport_ape_atol ' + Categories.ARCEUUS_SPELLBOOK,
        position: {"lat":65.4924628822755,"lng":286.33117675781256},
        title: "Ape Atol Teleport",
        category: Categories.ARCEUUS_SPELLBOOK
    },
    // <<<<<<<<<<<<<<<<<<<<< Arceuus Spell book <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    // >>>>>>>>>>>>>>>>>>>>> Jewellery >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    {
        iconUrl: require('../../static/icons/teleport/Games_necklace.png'),
        className: 'jewellery games_necklace ' + Categories.JEWELLERY,
        position: {"lat":80.90587943024157,"lng":270.75805664062506},
        title: "Games Necklance Teleport",
        category: Categories.JEWELLERY
    },
    {
        iconUrl: require('../../static/icons/teleport/Games_necklace.png'),
        className: 'jewellery games_necklace ' + Categories.JEWELLERY,
        position: {"lat":80.67911826095326,"lng":295.68603515625006},
        title: "Games Necklance Teleport",
        category: Categories.JEWELLERY
    },
    {
        iconUrl: require('../../static/icons/teleport/Games_necklace.png'),
        className: 'jewellery games_necklace ' + Categories.JEWELLERY,
        position: {"lat":84.00455785504411,"lng":211.67907714843753},
        title: "Games Necklance Teleport",
        category: Categories.JEWELLERY
    },
    {
        iconUrl: require('../../static/icons/teleport/Ring_of_dueling.png'),
        className: 'jewellery ring_of_dueling ' + Categories.JEWELLERY,
        position: {"lat":74.16558439057223,"lng":265.56152343750006},
        title: "Ring of Dueling Teleport",
        category: Categories.JEWELLERY
    },
    {
        iconUrl: require('../../static/icons/teleport/Ring_of_dueling.png'),
        className: 'jewellery ring_of_dueling ' + Categories.JEWELLERY,
        position: {"lat":76.59090394154062,"lng":323.29467773437506},
        title: "Ring of Dueling Teleport",
        category: Categories.JEWELLERY
    },
    {
        iconUrl: require('../../static/icons/teleport/Ring_of_dueling.png'),
        className: 'jewellery ring_of_dueling ' + Categories.JEWELLERY,
        position: {"lat":75.39500943841519,"lng":327.96386718750006},
        title: "Ring of Dueling Teleport",
        category: Categories.JEWELLERY
    },
    {
        iconUrl: require('../../static/icons/teleport/Combat_bracelet.png'),
        className: 'jewellery combat_bracelet ' + Categories.JEWELLERY,
        position: {"lat":80.03050836819759,"lng":305.78247070312506},
        title: "Combat Bracelet Teleport",
        category: Categories.JEWELLERY
    },
    {
        iconUrl: require('../../static/icons/teleport/Combat_bracelet.png'),
        className: 'jewellery combat_bracelet ' + Categories.JEWELLERY,
        position: {"lat":78.46751192571969,"lng":314.97253417968756},
        title: "Combat Bracelet Teleport",
        category: Categories.JEWELLERY
    },
    {
        iconUrl: require('../../static/icons/teleport/Combat_bracelet.png'),
        className: 'jewellery combat_bracelet ' + Categories.JEWELLERY,
        position: {"lat":80.6121540861832,"lng":294.40612792968756},
        title: "Combat Bracelet Teleport",
        category: Categories.JEWELLERY
    },
    {
        iconUrl: require('../../static/icons/teleport/Combat_bracelet.png'),
        className: 'jewellery combat_bracelet ' + Categories.JEWELLERY,
        position: {"lat":79.41623981214111,"lng":279.65698242187506},
        title: "Combat Bracelet Teleport",
        category: Categories.JEWELLERY
    },
    {
        iconUrl: require('../../static/icons/teleport/Skills_necklace.png'),
        className: 'jewellery skills_necklace ' + Categories.JEWELLERY,
        position: {"lat":78.78169313024124,"lng":277.08068847656256},
        title: "Skills Necklace Teleport",
        category: Categories.JEWELLERY
    },
    {
        iconUrl: require('../../static/icons/teleport/Skills_necklace.png'),
        className: 'jewellery skills_necklace ' + Categories.JEWELLERY,
        position: {"lat":78.09829559916763,"lng":303.93676757812506},
        title: "Skills Necklace Teleport",
        category: Categories.JEWELLERY
    },
    {
        iconUrl: require('../../static/icons/teleport/Skills_necklace.png'),
        className: 'jewellery skills_necklace ' + Categories.JEWELLERY,
        position: {"lat":77.480325861269,"lng":298.03710937500006},
        title: "Skills Necklace Teleport",
        category: Categories.JEWELLERY
    },
    {
        iconUrl: require('../../static/icons/teleport/Skills_necklace.png'),
        className: 'jewellery skills_necklace ' + Categories.JEWELLERY,
        position: {"lat":79.41220327334501,"lng":311.824951171875},
        title: "Skills Necklace Teleport",
        category: Categories.JEWELLERY
    },
    {
        iconUrl: require('../../static/icons/teleport/Skills_necklace.png'),
        className: 'jewellery skills_necklace ' + Categories.JEWELLERY,
        position: {"lat":80.15432156203568,"lng":214.12353515625003},
        title: "Skills Necklace Teleport",
        category: Categories.JEWELLERY
    },
    {
        iconUrl: require('../../static/icons/teleport/Amulet_of_glory.png'),
        className: 'jewellery amulet_of_glory ' + Categories.JEWELLERY,
        position: {"lat":75.46548375087849,"lng":321.66870117187506},
        title: "Amulet of Glory Teleport",
        category: Categories.JEWELLERY
    },
    {
        iconUrl: require('../../static/icons/teleport/Amulet_of_glory.png'),
        className: 'jewellery amulet_of_glory ' + Categories.JEWELLERY,
        position: {"lat":76.81703471551978,"lng":309.13330078125006},
        title: "Amulet of Glory Teleport",
        category: Categories.JEWELLERY
    },
    {
        iconUrl: require('../../static/icons/teleport/Amulet_of_glory.png'),
        className: 'jewellery amulet_of_glory ' + Categories.JEWELLERY,
        position: {"lat":80.12892798946548,"lng":308.0841064453125},
        title: "Amulet of Glory Teleport",
        category: Categories.JEWELLERY
    },
    {
        iconUrl: require('../../static/icons/teleport/Amulet_of_glory.png'),
        className: 'jewellery amulet_of_glory ' + Categories.JEWELLERY,
        position: {"lat":75.56988730054205,"lng":297.09228515625006},
        title: "Amulet of Glory Teleport",
        category: Categories.JEWELLERY
    },
    {
        iconUrl: require('../../static/icons/teleport/Ring_of_wealth.png'),
        className: 'jewellery ring_of_wealth ' + Categories.JEWELLERY,
        position: {"lat":79.6930828778363,"lng":313.24768066406256},
        title: "Ring of Wealth Teleport",
        category: Categories.JEWELLERY
    },
    {
        iconUrl: require('../../static/icons/teleport/Ring_of_wealth.png'),
        className: 'jewellery ring_of_wealth ' + Categories.JEWELLERY,
        position: {"lat":78.64082992043338,"lng":302.05261230468756},
        title: "Ring of Wealth Teleport",
        category: Categories.JEWELLERY
    },
    {
        iconUrl: require('../../static/icons/teleport/Ring_of_wealth.png'),
        className: 'jewellery ring_of_wealth ' + Categories.JEWELLERY,
        position: {"lat":83.46412945073891,"lng":271.70837402343756},
        title: "Ring of Wealth Teleport",
        category: Categories.JEWELLERY
    },
    {
        iconUrl: require('../../static/icons/teleport/Slayer_ring.png'),
        className: 'jewellery slayer_ring ' + Categories.JEWELLERY,
        position: {"lat":80.44675403034532,"lng":330.67749023437506},
        title: "Ring of Slayer Teleport",
        category: Categories.JEWELLERY
    },
    {
        iconUrl: require('../../static/icons/teleport/Slayer_ring.png'),
        className: 'jewellery slayer_ring ' + Categories.JEWELLERY,
        position: {"lat":81.31661808728937,"lng":288.51196289062506},
        title: "Ring of Slayer Teleport",
        category: Categories.JEWELLERY
    },
    {
        iconUrl: require('../../static/icons/teleport/Slayer_ring.png'),
        className: 'jewellery slayer_ring ' + Categories.JEWELLERY,
        position: {"lat":79.20842430283616,"lng":265.37475585937506},
        title: "Ring of Slayer Teleport",
        category: Categories.JEWELLERY
    },
    {
        iconUrl: require('../../static/icons/teleport/Digsite_pendant.png'),
        className: 'jewellery digsite_pendent ' + Categories.JEWELLERY,
        position: {"lat":79.44646539760868,"lng":325.228271484375},
        title: "Digsite Pendent Teleport",
        category: Categories.JEWELLERY
    },

    // <<<<<<<<<<<<<<<<<<<<< Jewellery <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
];

export const PointToPoints = [
    // >>>>>>>>>>>>>>>>>>>>> Agility Shortcuts >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    {
        iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
        className: Categories.AGILITY_SHORTCUT,
        positions: [
            {"lat": 75.71969873605714, "lng": 318.54858398437506},
            {"lat": 75.72105364905663, "lng": 319.40551757812506}
        ],
        title: "River lum grapple",
        category: Categories.AGILITY_SHORTCUT
    },
    {
        iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
        className: Categories.AGILITY_SHORTCUT,
        positions: [
            {"lat": 75.12668436992617, "lng": 294.03259277343756},
            {"lat": 74.87075679591987, "lng": 294.09851074218756}
        ],
        title: "Brimhaven Grapple",
        category: Categories.AGILITY_SHORTCUT
    },
    // <<<<<<<<<<<<<<<<<<<<<< Agility Shortcuts <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    // >>>>>>>>>>>>>>>>>>>>> Boats >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //<<<<<< Two ways >>>>>>>>>>>>>>
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        positions: [
            {"lat": 76.57815922398312, "lng": 305.43090820312506},
            {"lat": 76.11662168423263, "lng": 307.24365234375},
            {"lat": 75.59587329063447, "lng": 307.28759765625006},
            {"lat": 74.0799247270789, "lng": 302.25585937500006},
            {"lat": 74.64256835016351, "lng": 299.52026367187506},
            {"lat": 75.33672086232664, "lng": 300.89355468750006},
            {"lat": 76.34411731923645, "lng": 294.79614257812506},
            {"lat": 77.64124536695779, "lng": 294.10400390625006},
            {"lat": 78.03696523649174, "lng": 291.39038085937506}
        ],
        title: "Entrana ↔ Port Sarim",
        category: Categories.BOATS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        positions: [
            {"lat": 76.34411731923645, "lng": 304.32128906250006},
            {"lat": 76.32854604438678, "lng": 306.88110351562506},
            {"lat": 75.54659778735001, "lng": 307.28759765625006},
            {"lat": 74.11003203722439, "lng": 301.94824218750006},
            {"lat": 74.43167575527531, "lng": 300.56396484375006},
            {"lat": 75.16048677152297, "lng": 299.43786621093756}
        ],
        title: "Karajama ↔ Port Sarim",
        category: Categories.BOATS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        positions: [
            {"lat": 76.07570266770183, "lng": 304.97497558593756},
            {"lat": 76.02405595861573, "lng": 307.38647460937506},
            {"lat": 75.75894014501688, "lng": 307.88085937500006},
            {"lat": 74.44935750063425, "lng": 304.07958984375006},
            {"lat": 69.4575536150494, "lng": 302.56347656250006},
            {"lat": 68.3910896345649, "lng": 280.28320312500006},
            {"lat": 64.78816837781196, "lng": 279.92065429687506}
        ],
        title: "Void Knights' Outpost ↔ Port Sarim",
        category: Categories.BOATS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        positions: [
            {"lat": 76.59090394154062, "lng": 287.37487792968756},
            {"lat": 76.93552245725151, "lng": 285.85327148437506},
            {"lat": 76.99251884527192, "lng": 282.61230468750006},
            {"lat": 76.98757235359201, "lng": 281.34887695312506},
            {"lat": 77.20104488844608, "lng": 280.97534179687506}
        ],
        title: "Brimhaven ↔ Ardougne",
        category: Categories.BOATS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        positions: [
            {"lat": 77.62006466839729, "lng": 284.07348632812506},
            {"lat": 77.823323145214, "lng": 284.95239257812506},
            {"lat": 77.7256119827769, "lng": 285.87524414062506},
            {"lat": 77.06403564302136, "lng": 286.01806640625006},
            {"lat": 77.0344894800739, "lng": 287.32543945312506},
            {"lat": 77.14372454012101, "lng": 287.83630371093756}
        ],
        title: "Witchaven ↔ Fishing Platform",
        category: Categories.BOATS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        positions: [
            {"lat": 74.11303971567467, "lng": 286.39160156250006},
            {"lat": 71.77737688385326, "lng": 279.53613281250006}
        ],
        title: "Tai Brwo Wannai ↔ Feldip Hills (East)",
        description: "You need a herb to get a ride: Rogue's Purse, Ardrigal, Snake weed, Volencia Moss",
        category: Categories.BOATS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        positions: [
            {"lat": 79.49665183507658, "lng": 326.18408203125006},
            {"lat": 79.55258052804618, "lng": 328.48022460937506},
            {"lat": 79.35350215419999, "lng": 329.08447265625006},
            {"lat": 79.23410712877187, "lng": 328.83728027343756},
            {"lat": 79.10197101918884, "lng": 329.22180175781256},
            {"lat": 78.98713737724162, "lng": 328.83728027343756},
            {"lat": 78.89758448753416, "lng": 328.99108886718756},
            {"lat": 78.40916152136737, "lng": 328.18908691406256},
            {"lat": 78.08696155052085, "lng": 329.61730957031256},
            {"lat": 77.92486553912072, "lng": 330.01281738281256},
            {"lat": 77.62830584954155, "lng": 329.89746093750006},
            {"lat": 77.40748056761313, "lng": 329.59533691406256},
            {"lat": 77.07386964923352, "lng": 330.16662597656256},
            {"lat": 76.9566148725475, "lng": 330.13916015625006},
            {"lat": 76.81076935998476, "lng": 330.24902343750006},
            {"lat": 76.74795472344815, "lng": 330.19409179687506},
            {"lat": 76.59345145909289, "lng": 330.27099609375006},
            {"lat": 76.51938020975169, "lng": 330.11718750000006},
            {"lat": 76.37261948220728, "lng": 330.28198242187506},
            {"lat": 76.24651068267569, "lng": 330.23803710937506},
            {"lat": 75.65315356600065, "lng": 332.13867187500006},
            {"lat": 75.40885422846455, "lng": 354.50683593750006},
            {"lat": 79.77336504333218, "lng": 354.19921875000006},
            {"lat": 82.00916921290779, "lng": 349.01367187500006},
            {"lat": 82.48046008699585, "lng": 349.07409667968756},
            {"lat": 82.62639959835866, "lng": 349.45312500000006},
            {"lat": 82.65524772903738, "lng": 349.892578125},
            {"lat": 82.87112868673809, "lng": 349.35424804687506},
            {"lat": 82.97064254118051, "lng": 350.12878417968756},
            {"lat": 83.03954523258545, "lng": 350.0628662109375}
        ],
        title: "Digsite ↔ Fossil island",
        category: Categories.BOATS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        positions: [
            {"lat": 75.54248405616636, "lng": 336.80236816406256},
            {"lat": 75.37837872661018, "lng": 337.1923828125},
            {"lat": 75.58493740869223, "lng": 341.40014648437506}
        ],
        title: "Burgh de Rott ↔ Maeiverditch",
        category: Categories.BOATS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        positions: [
            {"lat": 80.60318958039112, "lng": 346.56372070312506},
            {"lat": 80.63452828742753, "lng": 349.991455078125},
            {"lat": 78.77634845965974, "lng": 353.95751953125006},
            {"lat": 76.83581324577173, "lng": 352.68310546875006},
            {"lat": 77.27748451804051, "lng": 346.5252685546875},
            {"lat": 77.26174811323173, "lng": 345.97045898437506}
        ],
        title: "Ectofuntus ↔ Slepe (below)",
        category: Categories.BOATS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        positions: [
            {"lat": 79.95605676110063, "lng": 348.74450683593756},
            {"lat": 79.978067468869, "lng": 350.36499023437506},
            {"lat": 80.93188942542847, "lng": 353.045654296875},
            {"lat": 80.86585369109436, "lng": 354.50683593750006},
            {"lat": 80.77295426341277, "lng": 354.54528808593756}
        ],
        title: "Port Phasmatys ↔ Dragontooth Island",
        description: "Costs 25 Ecto tokens",
        category: Categories.BOATS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        positions: [
            {"lat": 80.07131834076769, "lng": 349.134521484375},
            {"lat": 79.05096467804664, "lng": 353.9794921875},
            {"lat": 75.14641157325434, "lng": 353.78173828125006},
            {"lat": 73.56573904345422, "lng": 344.17968750000006},
            {"lat": 71.03839043883022, "lng": 344.3115234375},
            {"lat": 70.57611174177543, "lng": 346.72851562500006},
            {"lat": 71.17357781496057, "lng": 347.76123046875006},
            {"lat": 71.50400873687697, "lng": 347.34375000000006}
        ],
        title: "Port Phasmatys ↔ Mos Le'Harmless",
        category: Categories.BOATS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        positions: [
            {"lat": 82.44154190785918, "lng": 283.08471679687506},
            {"lat": 82.7833364185014, "lng": 280.33813476562506},
            {"lat": 84.28798568789594, "lng": 279.93164062500006},
            {"lat": 84.34618778559923, "lng": 279.79431152343756}
        ],
        title: "Rellekka (east) ↔ Iceberg",
        category: Categories.BOATS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        positions: [
            {"lat": 82.39806458235162, "lng": 283.05175781250006},
            {"lat": 82.7833364185014, "lng": 280.33813476562506},
            {"lat": 83.86057046571278, "lng": 280.30517578125006},
            {"lat": 84.20871395105432, "lng": 292.31872558593756}
        ],
        title: "Rellekka (east) ↔ Weiss",
        category: Categories.BOATS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        positions: [
            {"lat": 82.20155624480994, "lng": 278.86047363281256},
            {"lat": 82.05485676133894, "lng": 270.76904296875006},
            {"lat": 82.70145058672428, "lng": 264.25415039062506},
            {"lat": 82.82187709826647, "lng": 264.17175292968756}
        ],
        title: "Rellekka ↔ Jatizso",
        category: Categories.BOATS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        positions: [
            {"lat": 82.22165518221166, "lng": 278.59680175781256},
            {"lat": 82.05485676133894, "lng": 270.76904296875006},
            {"lat": 82.70145058672428, "lng": 257.14599609375006},
            {"lat": 82.81294844307736, "lng": 256.92077636718756}
        ],
        title: "Rellekka ↔ Neitiznot",
        category: Categories.BOATS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        positions: [
            {"lat": 81.97626600019842, "lng": 277.41577148437506},
            {"lat": 82.56907533737537, "lng": 275.55908203125006},
            {"lat": 82.63837466796491, "lng": 272.68066406250006}
        ],
        title: "Rellekka ↔ Waterbirth Island",
        category: Categories.BOATS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        positions: [
            {"lat": 82.11310903654756, "lng": 278.53637695312506},
            {"lat": 82.85884739680901, "lng": 273.01025390625006},
            {"lat": 82.99145133235486, "lng": 267.49511718750006},
            {"lat": 83.84174225396225, "lng": 266.02294921875006},
            {"lat": 84.4740645845916, "lng": 254.97070312500003},
            {"lat": 84.63769756726754, "lng": 254.67407226562503}
        ],
        title: "Rellekka ↔ Ungael",
        category: Categories.BOATS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        positions: [
            {"lat": 82.0168018903175, "lng": 277.39929199218756},
            {"lat": 82.1424513249561, "lng": 273.77929687500006},
            {"lat": 82.30300897675623, "lng": 257.93701171875006},
            {"lat": 82.72583469134848, "lng": 250.59814453125003},
            {"lat": 82.93559934286549, "lng": 250.46081542968753}
        ],
        title: "Rellekka ↔ Pirates Cove",
        category: Categories.BOATS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        positions: [
            {"lat": 82.05941121693256, "lng": 277.81127929687506},
            {"lat": 83.05948730257296, "lng": 277.50366210937506},
            {"lat": 83.27641888844767, "lng": 275.48217773437506},
            {"lat": 83.34552174104411, "lng": 274.64721679687506}
        ],
        title: "Rellekka ↔ Miscellania",
        category: Categories.BOATS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        positions: [
            {"lat": 82.95179467304061, "lng": 251.17492675781253},
            {"lat": 83.13080913050881, "lng": 251.42211914062503},
            {"lat": 83.19619730940111, "lng": 252.37792968750003},
            {"lat": 83.30593848760384, "lng": 251.76269531250003},
            {"lat": 83.60270411519305, "lng": 247.22534179687503},
            {"lat": 83.6417567328638, "lng": 245.70922851562503},
            {"lat": 83.73775349611977, "lng": 245.51147460937503}
        ],
        title: "Pirates Cove ↔ Lunar Isle",
        category: Categories.BOATS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        positions: [
            {"lat": 76.40106327998241, "lng": 297.32299804687506},
            {"lat": 76.31555667837529, "lng": 290.41259765625006},
            {"lat": 77.0048769911815, "lng": 285.90820312500006},
            {"lat": 76.39847988900951, "lng": 281.40380859375006},
            {"lat": 76.00015573581683, "lng": 281.29394531250006},
            {"lat": 75.00494000767517, "lng": 282.67822265625006},
            {"lat": 71.35706654962706, "lng": 282.41455078125006},
            {"lat": 68.95839084822079, "lng": 276.28417968750006},
            {"lat": 69.01354605132327, "lng": 274.51538085937506}

        ],
        title: "Rimmington ↔ Corsair Cove",
        category: Categories.BOATS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        positions: [
            {"lat": 79.23000193927321, "lng": 275.89416503906256},
            {"lat": 79.38997509071015, "lng": 276.89392089843756}

        ],
        title: "Fishing Guild ↔ Kylie Minnow's fishing platform",
        category: Categories.BOATS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        positions: [
            {"lat":79.95701474252938,"lng":260.73852539062506},
            {"lat":80.0533064596745,"lng":260.99670410156256},
            {"lat":80.12233389229567,"lng":260.73852539062506},
            {"lat":80.43124321182913,"lng":261.08459472656256},
            {"lat":80.88066611976605,"lng":263.20495605468756},
            {"lat":81.1533962066901,"lng":263.47961425781256},
            {"lat":81.54900440421397,"lng":261.23291015625006},
            {"lat":81.58043073424783,"lng":259.95300292968756}

        ],
        title: "Eagles Peak ↔ Piscatoris Fishing Colony",
        category: Categories.BOATS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        positions: [
            {"lat":83.36839854826567,"lng":345.838623046875},
            {"lat":83.68178108996156,"lng":342.509765625},
            {"lat":84.24793541158849,"lng":340.76843261718756}

        ],
        title: "Fossil Island (Mushroom forest) ↔ Lithkren",
        category: Categories.BOATS
    },

    //<<<<<< One ways >>>>>>>>>>>>>>
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        one_way: true,
        positions: [
            {"lat": 79.16823815620724, "lng": 289.48425292968756},
            {"lat": 78.92821835577044, "lng": 289.81933593750006},
            {"lat": 78.90710049623647, "lng": 287.82531738281256}
        ],
        title: "Catherby ➝ Keep Le Faye",
        description: "Get in the crate behind the candle store",
        category: Categories.BOATS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        one_way: true,
        positions: [
            {"lat": 71.63426216732036, "lng": 286.61682128906256},
            {"lat": 71.79454673720774, "lng": 283.79882812500006},
            {"lat": 75.1548582574413, "lng": 282.13989257812506},
            {"lat": 75.27261992123154, "lng": 281.21704101562506}
        ],
        title: "Cairn Isle (below) ➝ Port Khazard",
        category: Categories.BOATS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        one_way: true,
        positions: [
            {"lat": 71.6308002628789, "lng": 286.92993164062506},
            {"lat": 71.62214274510511, "lng": 284.67773437500006},
            {"lat": 69.67998950911426, "lng": 285.44677734375006},
            {"lat": 69.38804929116819, "lng": 303.20068359375006},
            {"lat": 74.71224441731964, "lng": 304.23339843750006},
            {"lat": 75.7805453532386, "lng": 307.65014648437506},
            {"lat": 76.4654918099891, "lng": 306.76025390625006},
            {"lat": 76.61381450204217, "lng": 305.78247070312506}
        ],
        title: "Cairn Isle (below) ➝ Port Sarim",
        category: Categories.BOATS
    },
    // <<<<<<<<<<<<<<<<<<<<<< Boats <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
];

export const PointToManyPoints = [
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS + ' charter_ship',
        stops: [
            {"lat": 80.13834056838962, "lng": 348.67309570312506},
            {"lat": 80.13834056838962, "lng": 348.67309570312506},
            {"lat": 71.08474366259543, "lng": 346.497802734375},
            {"lat": 73.12653976036125, "lng": 302.33276367187506},
            {"lat": 75.91886229511059, "lng": 304.83764648437506},
            {"lat": 75.37837872661018, "lng": 299.37194824218756},
            {"lat": 79.09573797855488, "lng": 288.62182617187506},
            {"lat": 76.65318152537525, "lng": 286.58386230468756},
            {"lat": 75.12386410829582, "lng": 280.84899902343756},
            {"lat": 69.29696896468664, "lng": 275.30090332031256},
            {"lat": 74.78449550320545, "lng": 245.78063964843753}
        ],
        positions: [
            {"lat": 80.13834056838962, "lng": 348.67309570312506},
            {"lat": 80.141162608798, "lng": 349.91455078125},
            {"lat": 78.98818668348777, "lng": 353.91357421875006},
            {"lat": 73.87371654457475, "lng": 358.96728515625006},
            {"lat": 70.90226826757711, "lng": 358.84643554687506},
            {"lat": 70.71809882433223, "lng": 346.45385742187506},
            {"lat": 71.08474366259543, "lng": 346.497802734375},
            {"lat": 70.71809882433223, "lng": 346.45385742187506},
            {"lat": 62.895217544882044, "lng": 341.3232421875},
            {"lat": 60.973107109199425, "lng": 323.08593750000006},
            {"lat": 64.20637724320852, "lng": 304.71679687500006},
            {"lat": 72.97762259146452, "lng": 303.64013671875006},
            {"lat": 73.12653976036125, "lng": 302.33276367187506},
            {"lat": 72.97762259146452, "lng": 303.64013671875006},
            {"lat": 73.94071394020898, "lng": 303.92578125},
            {"lat": 75.64498434288939, "lng": 306.5625},
            {"lat": 75.68850096854739, "lng": 305.46386718750006},
            {"lat": 75.91886229511059, "lng": 304.83764648437506},
            {"lat": 75.68850096854739, "lng": 305.46386718750006},
            {"lat": 75.34506171162991, "lng": 305.23315429687506},
            {"lat": 74.34593721891483, "lng": 302.32177734375},
            {"lat": 74.42282753118305, "lng": 300.79467773437506},
            {"lat": 75.52464464250062, "lng": 300.19042968750006},
            {"lat": 75.57125612747366, "lng": 299.48730468750006},
            {"lat": 75.37837872661018, "lng": 299.37194824218756},
            {"lat": 75.57125612747366, "lng": 299.48730468750006},
            {"lat": 76.47063313334205, "lng": 294.71923828125006},
            {"lat": 77.8741990405409, "lng": 294.23583984375006},
            {"lat": 78.03468777041608, "lng": 294.85107421875006},
            {"lat": 78.30940815087652, "lng": 294.23583984375006},
            {"lat": 78.73993797917838, "lng": 294.18090820312506},
            {"lat": 78.95034938035768, "lng": 291.90673828125006},
            {"lat": 78.93138260865257, "lng": 288.86352539062506},
            {"lat": 79.09573797855488, "lng": 288.62182617187506},
            {"lat": 78.93138260865257, "lng": 288.86352539062506},
            {"lat": 78.04834616078803, "lng": 286.94091796875006},
            {"lat": 77.37510457991046, "lng": 286.08398437500006},
            {"lat": 76.97272178439832, "lng": 285.63354492187506},
            {"lat": 76.65318152537525, "lng": 286.58386230468756},
            {"lat": 76.97272178439832, "lng": 285.63354492187506},
            {"lat": 76.44233211889495, "lng": 281.62353515625006},
            {"lat": 75.76164255318794, "lng": 281.53564453125006},
            {"lat": 75.4585892414553, "lng": 282.21679687500006},
            {"lat": 75.0248250056641, "lng": 281.81030273437506},
            {"lat": 75.12386410829582, "lng": 280.84899902343756},
            {"lat": 75.0248250056641, "lng": 281.81030273437506},
            {"lat": 73.92855278552236, "lng": 282.52441406250006},
            {"lat": 71.52490903732816, "lng": 281.18408203125006},
            {"lat": 68.84766505841037, "lng": 276.87744140625006},
            {"lat": 69.29696896468664, "lng": 275.30090332031256},
            {"lat": 68.84766505841037, "lng": 276.87744140625006},
            {"lat": 68.06509825098962, "lng": 265.47363281250006},
            {"lat": 69.10777677331498, "lng": 263.45214843750006},
            {"lat": 73.59679245247814, "lng": 245.06103515625003},
            {"lat": 74.75996761715504, "lng": 244.86328125000003},
            {"lat": 74.78449550320545, "lng": 245.78063964843753},
            {"lat": 74.75996761715504, "lng": 244.86328125000003},


        ],
        title: "Charter Ship",
        category: Categories.BOATS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS + ' zeah',
        stops: [
            {"lat": 76.74291687836927, "lng": 305.9637451171875},
            {"lat": 82.06017004062555, "lng": 224.81872558593753},
            {"lat": 78.87958780617919, "lng": 203.719482421875},
        ],
        positions: [
            {"lat": 76.74291687836927, "lng": 305.9637451171875},
            {"lat": 76.15873701495826, "lng": 307.17773437500006},
            {"lat": 75.75894014501688, "lng": 307.06787109375},
            {"lat": 73.71427576088443, "lng": 303.72802734375006},
            {"lat": 69.85476220252649, "lng": 301.57470703125006},
            {"lat": 69.4421276134176, "lng": 294.06005859375006},
            {"lat": 67.941650035336, "lng": 265.58349609375006},
            {"lat": 73.49097744965937, "lng": 243.28125000000003},
            {"lat": 79.71860546904045, "lng": 239.89746093750003},
            {"lat": 82.08819592233121, "lng": 227.8125},
            {"lat": 82.06017004062555, "lng": 224.81872558593753},
            {"lat": 82.08819592233121, "lng": 227.8125},
            {"lat": 80.52483958061848, "lng": 229.70214843750003},
            {"lat": 79.15894345219259, "lng": 228.84521484375003},
            {"lat": 78.84457080539549, "lng": 222.64892578125003},
            {"lat": 78.88276578290562, "lng": 204.89501953125003},
            {"lat": 78.87958780617919, "lng": 203.719482421875},
        ],
        title: "Zeah Boat",
        category: Categories.BOATS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.OTHER + 'muli_destination canoes',
        stops: [
            {"lat": 76.65191339742755, "lng": 318.27941894531256},
            {"lat": 78.1728342204629, "lng": 315.7196044921875},
            {"lat": 79.01857364724425, "lng": 309.73205566406256},
            {"lat": 80.20584929835839, "lng": 310.96252441406256},
            {"lat": 80.67199803126927, "lng": 309.56726074218756}
        ],
        positions: [
            {"lat": 76.65191339742755, "lng": 318.27941894531256},
            {"lat": 76.64049492108859, "lng": 318.08715820312506},
            {"lat": 76.90444330264503, "lng": 317.97729492187506},
            {"lat": 77.13516590007856, "lng": 317.69165039062506},
            {"lat": 77.34986665415636, "lng": 316.84020996093756},
            {"lat": 77.82100561582477, "lng": 316.49414062500006},
            {"lat": 77.9064655335818, "lng": 316.15905761718756},
            {"lat": 77.99590541527189, "lng": 315.91735839843756},
            {"lat": 78.0948965009262, "lng": 315.63171386718756},
            {"lat": 78.1728342204629, "lng": 315.7196044921875},
            {"lat": 78.0948965009262, "lng": 315.63171386718756},
            {"lat": 78.2301168948472, "lng": 314.26391601562506},
            {"lat": 78.32720375114681, "lng": 313.76953125},
            {"lat": 78.264802026314, "lng": 313.11035156250006},
            {"lat": 78.28489551177036, "lng": 312.62695312500006},
            {"lat": 78.40253749367973, "lng": 312.34130859375006},
            {"lat": 78.67108403464248, "lng": 312.01721191406256},
            {"lat": 78.74529976505912, "lng": 311.52832031250006},
            {"lat": 78.75494462937102, "lng": 310.85815429687506},
            {"lat": 78.778486629468, "lng": 310.24291992187506},
            {"lat": 78.89758448753416, "lng": 309.73205566406256},
            {"lat": 78.96402763947822, "lng": 309.65515136718756},
            {"lat": 79.02066624438999, "lng": 309.50683593750006},
            {"lat": 79.01857364724425, "lng": 309.73205566406256},
            {"lat": 79.02066624438999, "lng": 309.50683593750006},
            {"lat": 79.15894345219259, "lng": 309.30908203125006},
            {"lat": 79.21459369716146, "lng": 309.34204101562506},
            {"lat": 79.29856025794246, "lng": 309.77050781250006},
            {"lat": 79.35248724991952, "lng": 309.62219238281256},
            {"lat": 79.4283403025159, "lng": 309.26513671875006},
            {"lat": 79.64283716222033, "lng": 309.1058349609375},
            {"lat": 79.83365517648035, "lng": 309.18273925781256},
            {"lat": 79.981890541616, "lng": 309.62219238281256},
            {"lat": 80.07321244890505, "lng": 310.3802490234375},
            {"lat": 80.135517728182, "lng": 310.73730468750006},
            {"lat": 80.18620666179095, "lng": 310.81420898437506},
            {"lat": 80.20584929835839, "lng": 310.96252441406256},
            {"lat": 80.18620666179095, "lng": 310.81420898437506},
            {"lat": 80.26361497839086, "lng": 311.0504150390625},
            {"lat": 80.33673098695078, "lng": 311.055908203125},
            {"lat": 80.36803099414996, "lng": 310.73181152343756},
            {"lat": 80.46315010000394, "lng": 310.45166015625006},
            {"lat": 80.56184346817072, "lng": 310.1220703125},
            {"lat": 80.58164013978059, "lng": 309.957275390625},
            {"lat": 80.61752872092254, "lng": 309.91882324218756},
            {"lat": 80.67199803126927, "lng": 309.56726074218756},


        ],
        title: "River Lum Log boats",
        category: Categories.OTHER
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.CARPET_RIDES + ' carpet_ride',
        stops: [
            {"lat": 74.50522056937588, "lng": 322.89916992187506},
            {"lat": 74.5755046849982, "lng": 333.25927734375006},
            {"lat": 72.52648040023779, "lng": 325.54138183593756},
            {"lat": 73.31682283096622, "lng": 314.46716308593756},
        ],
        positions: [
            {"lat": 74.50522056937588, "lng": 322.89916992187506},
            {"lat": 74.5755046849982, "lng": 333.25927734375006},
            {"lat": 74.50522056937588, "lng": 322.89916992187506},
            {"lat": 72.52648040023779, "lng": 325.54138183593756},
            {"lat": 74.50522056937588, "lng": 322.89916992187506},
            {"lat": 73.31682283096622, "lng": 314.46716308593756},
            {"lat": 74.50522056937588, "lng": 322.89916992187506},

        ],
        title: "Desert Magic Carpets",
        category: Categories.CARPET_RIDES
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.CARPET_RIDES + ' carpet_ride',
        stops: [
            {"lat": 71.33949860626103, "lng": 325.140380859375},
            {"lat": 70.76158594641528, "lng": 328.71093750000006},
            {"lat": 68.41737291929003, "lng": 321.38854980468756},
            {"lat": 68.366801093914, "lng": 318.48815917968756},
        ],
        positions: [
            {"lat": 71.33949860626103, "lng": 325.140380859375},
            {"lat": 70.76158594641528, "lng": 328.71093750000006},
            {"lat": 71.33949860626103, "lng": 325.140380859375},
            {"lat": 68.41737291929003, "lng": 321.38854980468756},
            {"lat": 71.33949860626103, "lng": 325.140380859375},
            {"lat": 68.366801093914, "lng": 318.48815917968756},
            {"lat": 71.33949860626103, "lng": 325.140380859375}


        ],
        title: "Desert Magic Carpets",
        category: Categories.CARPET_RIDES
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.GNOME_GLIDERS,
        stops: [
            {"lat":80.12798624249334,"lng":266.80847167968756},
            {"lat":80.11762115289953,"lng":292.17590332031256},
            {"lat":79.28018409166839,"lng":323.56933593750006}, //Cant fly from here
            {"lat":76.26739068351604,"lng":320.71838378906256},
            {"lat":71.98408532635747,"lng":300.49255371093756},
            {"lat":68.17563985633973,"lng":283.41979980468756},
            {"lat":71.88016180394868,"lng":272.07641601562506},
        ],
        positions: [
        ],
        title: "Gnome Gliders",
        category: Categories.GNOME_GLIDERS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.SPIRIT_TREES,
        stops: [
            {"lat":76.96776789443538,"lng":272.99377441406256},
            {"lat":79.47459894016727,"lng":266.73706054687506},
            {"lat":75.51228166167071,"lng":271.94458007812506},
            {"lat":80.21892275562932,"lng":314.5330810546875},
            {"lat":69.27559678639956,"lng":268.45092773437506}
        ],
        positions: [
        ],
        title: "Spirit Trees",
        category: Categories.SPIRIT_TREES
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BALLOON_TRANSPORT,
        stops: [
            {"lat":74.52282083394752,"lng":266.67663574218756},
            {"lat":78.28601082129987,"lng":289.57763671875006},
            {"lat":79.62999072905671,"lng":267.99499511718756},
            {"lat":77.57877763581085,"lng":297.19116210937506},
            {"lat":79.18164994073766,"lng":298.18542480468756},
            {"lat":79.87622823235664,"lng":322.04772949218756},

        ],
        positions: [

        ],
        title: "Balloon Transport System",
        category: Categories.BALLOON_TRANSPORT
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.MAGIC_MUSHROOMS,
        stops: [
            {"lat":83.5337864118568,"lng":346.82739257812506},
            {"lat":82.61299277110686,"lng":346.95373535156256},
            {"lat":82.62146305852085,"lng":352.29858398437506},
        ],
        positions: [

        ],
        title: "Magic mushroom teleports",
        category: Categories.MAGIC_MUSHROOMS
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: Categories.BOATS,
        stops: [
            {"lat":83.70109641601667,"lng":350.72204589843756},
            {"lat":83.75331316974862,"lng":352.76550292968756},
            {"lat":83.02555186844917,"lng":350.46936035156256}
        ],
        positions: [
            {"lat":83.70109641601667,"lng":350.72204589843756},
            {"lat":83.75331316974862,"lng":352.76550292968756},
            {"lat":83.63079724346103,"lng":355.30883789062506},
            {"lat":83.22865871114548,"lng":358.4619140625},
            {"lat":82.47614570236671,"lng":358.143310546875},
            {"lat":82.07911723397942,"lng":352.47436523437506},
            {"lat":82.28533149704582,"lng":349.310302734375},
            {"lat":82.50056138051086,"lng":349.09057617187506},
            {"lat":82.63415038289305,"lng":349.486083984375},
            {"lat":82.65735415554457,"lng":349.94201660156256},
            {"lat":82.86430834427168,"lng":349.3048095703125},
            {"lat":83.02555186844917,"lng":350.46936035156256},
        ],
        title: "Fossil Island row boats",
        category: Categories.BOATS
    },
];

export const types = [
    {
        label: 'teleports',
        data: Teleports,
        shown: true
    },
    {
        label: 'point_to_points',
        data: PointToPoints,
        shown: true
    },
    {
        label: 'point_to_many_points',
        data: PointToManyPoints,
        shown: true
    },
    {
        label: 'fairy_rings',
        data: FairyRings,
        shown: true
    }
];


//Multi points
/*
- Trander boats
- Log flumes
- gliders
- Kourend Ships

 */
/* Need to create multi point to points
{
    iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
    className: 'boat_transport',
    positions: [
        {"lat":76.74417651594321,"lng":305.96923828125},
        {"lat":75.75894014501688,"lng":307.88085937500006},
        {"lat":74.44935750063425,"lng":304.07958984375006},
        {"lat":69.4575536150494,"lng":302.56347656250006},
        {"lat":67.32292427995345,"lng":260.68359375000006},
        {"lat":73.57816726137321,"lng":241.61132812500003},
        {"lat":78.93770843550641,"lng":241.08398437500003},
        {"lat":78.84457080539549,"lng":221.85791015625003},
        {"lat":78.87852828127829,"lng":203.72497558593753}
    ],
    title: "Lands End ↔ Port Sarim",
}*/