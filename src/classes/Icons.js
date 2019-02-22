import {IconBaseClass} from "./IconBaseClass";

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
        for (let key in type.data) {
            icons[type.label][key] = new IconBaseClass(type.data[key]);
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
    return closest;
}

export const Teleports = [
    // >>>>>>>>>>>>>>>>>>>>> Standard Spell book >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    {
        iconUrl: require('../../static/icons/teleport/Home_Teleport_icon.png'),
        className: 'teleport teleport_home regular_spellbook',
        position: {"lat": 76.35967119570851, "lng": 317},
        title: "Home Teleport Spell"
    },
    {
        iconUrl: require('../../static/icons/teleport/Lumbridge_Teleport_icon.png'),
        className: 'teleport teleport_lumbridge regular_spellbook',
        position: {"lat": 76.35967119570851, "lng": 317.3},
        title: "Teleport to Lumbridge"
    },
    {
        iconUrl: require('../../static/icons/teleport/Varrock_Teleport_icon.png'),
        className: 'teleport teleport_varrock regular_spellbook',
        position: {"lat": 79.19401548509859, "lng": 316.37329101562506},
        title: "Teleport to Varrock"
    },
    {
        iconUrl: require('../../static/icons/teleport/Falador_Teleport_icon.png'),
        className: 'teleport teleport_faladaor regular_spellbook',
        position: {"lat": 78.66244812600279, "lng": 300.06408691406256},
        title: "Teleport to Falador"
    },
    {
        iconUrl: require('../../static/icons/teleport/Teleport_to_House_icon.png'),
        className: 'teleport teleport_house teleport_rimmington regular_spellbook',
        position: {"lat": 76.43718024219102, "lng": 299.33898925781256},
        title: "Teleport to House (Rimmington)"
    },
    {
        iconUrl: require('../../static/icons/teleport/Teleport_to_House_icon.png'),
        className: 'teleport teleport_house teleport_yannile regular_spellbook',
        position: {"lat": 74.27909894347644, "lng": 272.32360839843756},
        title: "Teleport to House (Yannille)"
    },
    {
        iconUrl: require('../../static/icons/teleport/Teleport_to_House_icon.png'),
        className: 'teleport teleport_house teleport_rellekka regular_spellbook',
        position: {"lat": 81.50935493057601, "lng": 280.56884765625006},
        title: "Teleport to House (Rellekka)"
    },
    {
        iconUrl: require('../../static/icons/teleport/Teleport_to_House_icon.png'),
        className: 'teleport teleport_house teleport_brimhaven regular_spellbook',
        position: {"lat": 75.70342995730704, "lng": 286.46850585937506},
        title: "Teleport to House (Brimhaven)"
    },
    {
        iconUrl: require('../../static/icons/teleport/Teleport_to_House_icon.png'),
        className: 'teleport teleport_house teleport_taverly regular_spellbook',
        position: {"lat": 79.69701350577613, "lng": 295.46081542968756},
        title: "Teleport to House (Taverly)"
    },
    {
        iconUrl: require('../../static/icons/teleport/Teleport_to_House_icon.png'),
        className: 'teleport teleport_house teleport_pollnivneach regular_spellbook',
        position: {"lat": 72.6038360424019, "lng": 324.73388671875006},
        title: "Teleport to House (Pollnivneach)"
    },
    {
        iconUrl: require('../../static/icons/teleport/Teleport_to_House_icon.png'),
        className: 'teleport teleport_house teleport_hosidius regular_spellbook',
        position: {"lat": 80.29607550360463, "lng": 219.63867187500003},
        title: "Teleport to House (Hosidius)"
    },
    {
        iconUrl: require('../../static/icons/teleport/Camelot_Teleport_icon.png'),
        className: 'teleport teleport_camelot regular_spellbook',
        position: {"lat": 79.84818858331862, "lng": 286.38061523437506},
        title: "Teleport to Camelot"
    },
    {
        iconUrl: require('../../static/icons/teleport/Ardougne_Teleport_icon.png'),
        className: 'teleport teleport_ardougne regular_spellbook',
        position: {"lat": 77.64712256067553, "lng": 280.04150390625006},
        title: "Teleport to Ardougne"
    },
    {
        iconUrl: require('../../static/icons/teleport/Watchtower_Teleport_icon.png'),
        className: 'teleport teleport_watchtower regular_spellbook',
        position: {"lat": 74.63238139647521, "lng": 272.51037597656256},
        title: "Teleport to the Watchtower"
    },
    {
        iconUrl: require('../../static/icons/teleport/Trollheim_Teleport_icon.png'),
        className: 'teleport teleport_trollheim regular_spellbook',
        position: {"lat": 81.92164259401909, "lng": 295.20263671875006},
        title: "Teleport to Trollheim"
    },
    {
        iconUrl: require('../../static/icons/teleport/Ape_Atoll_Teleport_%28standard%29_icon.png'),
        className: 'teleport teleport_apeatol regular_spellbook',
        position: {"lat": 67.86519487931152, "lng": 289.03930664062506},
        title: "Teleport to Ape Atol"
    },
    {
        iconUrl: require('../../static/icons/teleport/Kourend_Castle_Teleport_icon.png'),
        className: 'teleport teleport_kourendcastle regular_spellbook',
        position: {"lat": 81.88295389538273, "lng": 213.01391601562503},
        title: "Teleport to Kourend Castle"
    },
    // <<<<<<<<<<<<<<<<<<<<< Standard Spell book <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    // >>>>>>>>>>>>>>>>>>>>> Ancient Spell book >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    {
        iconUrl: require('../../static/icons/teleport/Paddewwa_Teleport_icon.png'),
        className: 'teleport teleport_paddewwa regular_spellbook',
        position: {"lat": 79.85302848224637, "lng": 308.58947753906256},
        title: "Teleport to Paddewwa"
    },
    {
        iconUrl: require('../../static/icons/teleport/Senntisten_Teleport_icon.png'),
        className: 'teleport teleport_senntisten regular_spellbook',
        position: {"lat": 78.1344931829381, "lng": 325.71166992187506},
        title: "Teleport to Paddewwa"
    },
    {
        iconUrl: require('../../static/icons/teleport/Kharyrll_Teleport_icon.png'),
        className: 'teleport teleport_kharyrll regular_spellbook',
        position: {"lat": 79.95509868922989, "lng": 334.85778808593756},
        title: "Teleport to Kharyrll "
    },
    {
        iconUrl: require('../../static/icons/teleport/Lassar_Teleport_icon.png'),
        className: 'teleport teleport_lassar regular_spellbook',
        position: {"lat": 79.9799791857134, "lng": 302.9095458984375},
        title: "Teleport to Lassar "
    },
    {
        iconUrl: require('../../static/icons/teleport/Dareeyak_Teleport_icon.png'),
        className: 'teleport teleport_dareeyak regular_spellbook',
        position: {"lat": 82.08290127808056, "lng": 300.44860839843756},
        title: "Teleport to Dareeyak"
    },
    {
        iconUrl: require('../../static/icons/teleport/Carrallangar_Teleport_icon.png'),
        className: 'teleport teleport_carrallangar regular_spellbook',
        position: {"lat": 81.88140252510168, "lng": 313.34106445312506},
        title: "Teleport to Carrallangar "
    },
    {
        iconUrl: require('../../static/icons/teleport/Annakarl_Teleport_icon.png'),
        className: 'teleport teleport_annakarl regular_spellbook',
        position: {"lat": 83.63932291491399, "lng": 321.41601562500006},
        title: "Teleport to Annakarl "
    },
    {
        iconUrl: require('../../static/icons/teleport/Ghorrock_Teleport_icon.png'),
        className: 'teleport teleport_ghorrock regular_spellbook',
        position: {"lat": 83.7896675689016, "lng": 299.09729003906256},
        title: "Teleport to Ghorrock "
    },
];

export const PointToPoints = [
    // >>>>>>>>>>>>>>>>>>>>> Agility Shortcuts >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    {
        iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
        className: 'agility_shortcut',
        positions: [
            {"lat":75.71969873605714,"lng":318.54858398437506},
            {"lat":75.72105364905663,"lng":319.40551757812506}
        ],
        title: "River lum grapple"
    },
    {
        iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
        className: 'agility_shortcut',
        positions: [
            {"lat":75.12668436992617,"lng":294.03259277343756},
            {"lat":74.87075679591987,"lng":294.09851074218756}
        ],
        title: "Brimhaven Grapple"
    },
    // <<<<<<<<<<<<<<<<<<<<<< Agility Shortcuts <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    // >>>>>>>>>>>>>>>>>>>>> Boats >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //<<<<<< Two ways >>>>>>>>>>>>>>
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        positions: [
            {"lat":76.57815922398312,"lng":305.43090820312506},
            {"lat":76.11662168423263,"lng":307.24365234375},
            {"lat":75.59587329063447,"lng":307.28759765625006},
            {"lat":74.0799247270789,"lng":302.25585937500006},
            {"lat":74.64256835016351,"lng":299.52026367187506},
            {"lat":75.33672086232664,"lng":300.89355468750006},
            {"lat":76.34411731923645,"lng":294.79614257812506},
            {"lat":77.64124536695779,"lng":294.10400390625006},
            {"lat":78.03696523649174,"lng":291.39038085937506}
        ],
        title: "Entrana ↔ Port Sarim"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        positions: [
            {"lat":76.34411731923645,"lng":304.32128906250006},
            {"lat":76.32854604438678,"lng":306.88110351562506},
            {"lat":75.54659778735001,"lng":307.28759765625006},
            {"lat":74.11003203722439,"lng":301.94824218750006},
            {"lat":74.43167575527531,"lng":300.56396484375006},
            {"lat":75.16048677152297,"lng":299.43786621093756}
        ],
        title: "Karajama ↔ Port Sarim"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        positions: [
            {"lat":76.07570266770183,"lng":304.97497558593756},
            {"lat":76.02405595861573,"lng":307.38647460937506},
            {"lat":75.75894014501688,"lng":307.88085937500006},
            {"lat":74.44935750063425,"lng":304.07958984375006},
            {"lat":69.4575536150494,"lng":302.56347656250006},
            {"lat":68.3910896345649,"lng":280.28320312500006},
            {"lat":64.78816837781196,"lng":279.92065429687506}
        ],
        title: "Void Knights' Outpost ↔ Port Sarim"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        positions: [
            {"lat":76.59090394154062,"lng":287.37487792968756},
            {"lat":76.93552245725151,"lng":285.85327148437506},
            {"lat":76.99251884527192,"lng":282.61230468750006},
            {"lat":76.98757235359201,"lng":281.34887695312506},
            {"lat":77.20104488844608,"lng":280.97534179687506}
        ],
        title: "Brimhaven ↔ Ardougne"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        positions: [
            {"lat":77.62006466839729,"lng":284.07348632812506},
            {"lat":77.823323145214,"lng":284.95239257812506},
            {"lat":77.7256119827769,"lng":285.87524414062506},
            {"lat":77.06403564302136,"lng":286.01806640625006},
            {"lat":77.0344894800739,"lng":287.32543945312506},
            {"lat":77.14372454012101,"lng":287.83630371093756}
        ],
        title: "Witchaven ↔ Fishing Platform"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        positions: [
            {"lat":74.11303971567467,"lng":286.39160156250006},
            {"lat":71.77737688385326,"lng":279.53613281250006}
        ],
        title: "Tai Brwo Wannai ↔ Feldip Hills (East)",
        description: "You need a herb to get a ride: Rogue's Purse, Ardrigal, Snake weed, Volencia Moss"
    },
    //<<<<<< One ways >>>>>>>>>>>>>>
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        one_way: true,
        positions: [
            {"lat":79.16823815620724,"lng":289.48425292968756},
            {"lat":78.92821835577044,"lng":289.81933593750006},
            {"lat":78.90710049623647,"lng":287.82531738281256}
        ],
        title: "Catherby ➝ Keep Le Faye",
        description: "Get in the crate behind the candle store"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        one_way: true,
        positions: [
            {"lat":71.63426216732036,"lng":286.61682128906256},
            {"lat":71.79454673720774,"lng":283.79882812500006},
            {"lat":75.1548582574413,"lng":282.13989257812506},
            {"lat":75.27261992123154,"lng":281.21704101562506}
        ],
        title: "Cairn Isle (below) ➝ Port Khazard",
        description: "Get in the crate behind the candle store"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        one_way: true,
        positions: [
            {"lat":71.6308002628789,"lng":286.92993164062506},
            {"lat":71.62214274510511,"lng":284.67773437500006},
            {"lat":69.67998950911426,"lng":285.44677734375006},
            {"lat":69.38804929116819,"lng":303.20068359375006},
            {"lat":74.71224441731964,"lng":304.23339843750006},
            {"lat":75.7805453532386,"lng":307.65014648437506},
            {"lat":76.4654918099891,"lng":306.76025390625006},
            {"lat":76.61381450204217,"lng":305.78247070312506}
        ],
        title: "Cairn Isle (below) ➝ Port Khazard",
        description: "Get in the crate behind the candle store"
    },
    // <<<<<<<<<<<<<<<<<<<<<< Boats <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
];


const types = [
    {
        label: 'teleports',
        data: Teleports
    },
    {
        label: 'point_to_points',
        data: PointToPoints
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