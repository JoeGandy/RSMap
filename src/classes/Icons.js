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
        className: 'fairy_ring',
        position: {"lat": 74.5915675990001, "lng": 302.069091796875},
        title: "Fairy ring",
        description: "A I Q (aiq)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 76.81578187834086, "lng": 282.55737304687506},
        title: "Fairy ring",
        description: "A I R (air)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 81.3265643369573, "lng": 287.83081054687506},
        title: "Fairy ring",
        description: "A J R (ajr)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 83.73055909431551, "lng": 269.37927246093756},
        title: "Fairy ring",
        description: "A J S (ajs)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 81.34559639180898, "lng": 257.43713378906256},
        title: "Fairy ring",
        description: "A K Q (akq)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 71.65156224242223, "lng": 274.05395507812506},
        title: "Fairy ring",
        description: "A K S (aks)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 81.55142594298475, "lng": 269.57153320312506},
        title: "Fairy ring",
        description: "A L P (alp)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 80.05994617616484, "lng": 341.82312011718756},
        title: "Fairy ring",
        description: "A L Q (alq)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 80.07226543955538, "lng": 278.86596679687506},
        title: "Fairy ring",
        description: "A L S (als)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 77.92601462331328, "lng": 329.35913085937506},
        title: "Fairy ring",
        description: "B I P (bip)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 74.29248881670038, "lng": 318.75183105468756},
        title: "Fairy ring",
        description: "B I Q (biq)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 77.09964896517972, "lng": 278.34411621093756},
        title: "Fairy ring",
        description: "B I S (bis)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 73.82022893610119, "lng": 246.17065429687503},
        title: "Fairy ring",
        description: "B J S (bjs)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 73.22194329309737, "lng": 261.79321289062506},
        title: "Fairy ring",
        description: "B K S (bks)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 79.31486848891893, "lng": 333.24829101562506},
        title: "Fairy ring",
        description: "B K R (bkr)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 78.29381505701517, "lng": 285.19958496093756},
        title: "Fairy ring",
        description: "B L R (blr)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 83.64358148767488, "lng": 270.23620605468756},
        title: "Fairy ring",
        description: "C I P (cip)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 74.88651947809277, "lng": 271.22497558593756},
        title: "Fairy ring",
        description: "C I Q (ciq)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 82.67208232814555, "lng": 190.54138183593753},
        title: "Fairy ring",
        description: "C I R (cir)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 83.51147766926859, "lng": 212.6239013671875},
        title: "Fairy ring",
        description: "C I S (cis)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 80.95091652512318, "lng": 282.89794921875006},
        title: "Fairy ring",
        description: "C J R (cjr)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 72.6038360424019, "lng": 289.20959472656256},
        title: "Fairy ring",
        description: "C K R (ckr)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 79.78213873561926, "lng": 331.79260253906256},
        title: "Fairy ring",
        description: "C K S (cks)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 76.18630710027861, "lng": 307.73803710937506},
        title: "Fairy ring",
        description: "C L P (clp)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 66.52420417769652, "lng": 285.06774902343756},
        title: "Fairy ring",
        description: "C L R (clr)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 74.07540384020064, "lng": 281.37084960937506},
        title: "Fairy ring",
        description: "C L S (cls)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 75.22646574076222, "lng": 309.58374023437506},
        title: "Fairy ring",
        description: "D I S (dis)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 76.56029664074973, "lng": 279.79431152343756},
        title: "Fairy ring",
        description: "D J P (djp)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 81.75160686385584, "lng": 200.36865234375},
        title: "Fairy ring",
        description: "D J R (djr)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 74.61052999955676, "lng": 295.74645996093756},
        title: "Fairy ring",
        description: "D K P (dkp)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 80.05994617616484, "lng": 310.70434570312506},
        title: "Fairy ring",
        description: "D K R (dkr)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 82.31770944958727, "lng": 285.45776367187506},
        title: "Fairy ring",
        description: "D K S (dks)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 72.85659981428137, "lng": 330.21606445312506},
        title: "Fairy ring",
        description: "D L Q (dlq)"
    },
    {
        iconUrl: require('../../static/icons/misc/fairy_ring_icon.png'),
        className: 'fairy_ring',
        position: {"lat": 74.39920828363479, "lng": 250.45532226562503},
        title: "Fairy ring",
        description: "D L R (dlr)"
    },
];

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
            {"lat": 75.71969873605714, "lng": 318.54858398437506},
            {"lat": 75.72105364905663, "lng": 319.40551757812506}
        ],
        title: "River lum grapple"
    },
    {
        iconUrl: require('../../static/icons/misc/agility_shortcut.png'),
        className: 'agility_shortcut',
        positions: [
            {"lat": 75.12668436992617, "lng": 294.03259277343756},
            {"lat": 74.87075679591987, "lng": 294.09851074218756}
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
        title: "Entrana ↔ Port Sarim"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        positions: [
            {"lat": 76.34411731923645, "lng": 304.32128906250006},
            {"lat": 76.32854604438678, "lng": 306.88110351562506},
            {"lat": 75.54659778735001, "lng": 307.28759765625006},
            {"lat": 74.11003203722439, "lng": 301.94824218750006},
            {"lat": 74.43167575527531, "lng": 300.56396484375006},
            {"lat": 75.16048677152297, "lng": 299.43786621093756}
        ],
        title: "Karajama ↔ Port Sarim"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        positions: [
            {"lat": 76.07570266770183, "lng": 304.97497558593756},
            {"lat": 76.02405595861573, "lng": 307.38647460937506},
            {"lat": 75.75894014501688, "lng": 307.88085937500006},
            {"lat": 74.44935750063425, "lng": 304.07958984375006},
            {"lat": 69.4575536150494, "lng": 302.56347656250006},
            {"lat": 68.3910896345649, "lng": 280.28320312500006},
            {"lat": 64.78816837781196, "lng": 279.92065429687506}
        ],
        title: "Void Knights' Outpost ↔ Port Sarim"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        positions: [
            {"lat": 76.59090394154062, "lng": 287.37487792968756},
            {"lat": 76.93552245725151, "lng": 285.85327148437506},
            {"lat": 76.99251884527192, "lng": 282.61230468750006},
            {"lat": 76.98757235359201, "lng": 281.34887695312506},
            {"lat": 77.20104488844608, "lng": 280.97534179687506}
        ],
        title: "Brimhaven ↔ Ardougne"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        positions: [
            {"lat": 77.62006466839729, "lng": 284.07348632812506},
            {"lat": 77.823323145214, "lng": 284.95239257812506},
            {"lat": 77.7256119827769, "lng": 285.87524414062506},
            {"lat": 77.06403564302136, "lng": 286.01806640625006},
            {"lat": 77.0344894800739, "lng": 287.32543945312506},
            {"lat": 77.14372454012101, "lng": 287.83630371093756}
        ],
        title: "Witchaven ↔ Fishing Platform"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        positions: [
            {"lat": 74.11303971567467, "lng": 286.39160156250006},
            {"lat": 71.77737688385326, "lng": 279.53613281250006}
        ],
        title: "Tai Brwo Wannai ↔ Feldip Hills (East)",
        description: "You need a herb to get a ride: Rogue's Purse, Ardrigal, Snake weed, Volencia Moss"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
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
        title: "Digsite ↔ Fossil island"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        positions: [
            {"lat": 75.54248405616636, "lng": 336.80236816406256},
            {"lat": 75.37837872661018, "lng": 337.1923828125},
            {"lat": 75.58493740869223, "lng": 341.40014648437506}
        ],
        title: "Burgh de Rott ↔ Maeiverditch"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        positions: [
            {"lat": 80.60318958039112, "lng": 346.56372070312506},
            {"lat": 80.63452828742753, "lng": 349.991455078125},
            {"lat": 78.77634845965974, "lng": 353.95751953125006},
            {"lat": 76.83581324577173, "lng": 352.68310546875006},
            {"lat": 77.27748451804051, "lng": 346.5252685546875},
            {"lat": 77.26174811323173, "lng": 345.97045898437506}
        ],
        title: "Ectofuntus ↔ Slepe (below)"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        positions: [
            {"lat": 79.95605676110063, "lng": 348.74450683593756},
            {"lat": 79.978067468869, "lng": 350.36499023437506},
            {"lat": 80.93188942542847, "lng": 353.045654296875},
            {"lat": 80.86585369109436, "lng": 354.50683593750006},
            {"lat": 80.77295426341277, "lng": 354.54528808593756}
        ],
        title: "Port Phasmatys ↔ Dragontooth Island",
        description: "Costs 25 Ecto tokens"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
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
        title: "Port Phasmatys ↔ Mos Le'Harmless"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        positions: [
            {"lat": 82.44154190785918, "lng": 283.08471679687506},
            {"lat": 82.7833364185014, "lng": 280.33813476562506},
            {"lat": 84.28798568789594, "lng": 279.93164062500006},
            {"lat": 84.34618778559923, "lng": 279.79431152343756}
        ],
        title: "Rellekka (east) ↔ Iceberg"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        positions: [
            {"lat": 82.39806458235162, "lng": 283.05175781250006},
            {"lat": 82.7833364185014, "lng": 280.33813476562506},
            {"lat": 83.86057046571278, "lng": 280.30517578125006},
            {"lat": 84.20871395105432, "lng": 292.31872558593756}
        ],
        title: "Rellekka (east) ↔ Weiss"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        positions: [
            {"lat": 82.20155624480994, "lng": 278.86047363281256},
            {"lat": 82.05485676133894, "lng": 270.76904296875006},
            {"lat": 82.70145058672428, "lng": 264.25415039062506},
            {"lat": 82.82187709826647, "lng": 264.17175292968756}
        ],
        title: "Rellekka ↔ Jatizso"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        positions: [
            {"lat": 82.22165518221166, "lng": 278.59680175781256},
            {"lat": 82.05485676133894, "lng": 270.76904296875006},
            {"lat": 82.70145058672428, "lng": 257.14599609375006},
            {"lat": 82.81294844307736, "lng": 256.92077636718756}
        ],
        title: "Rellekka ↔ Neitiznot"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        positions: [
            {"lat": 81.97626600019842, "lng": 277.41577148437506},
            {"lat": 82.56907533737537, "lng": 275.55908203125006},
            {"lat": 82.63837466796491, "lng": 272.68066406250006}
        ],
        title: "Rellekka ↔ Waterbirth Island"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        positions: [
            {"lat": 82.11310903654756, "lng": 278.53637695312506},
            {"lat": 82.85884739680901, "lng": 273.01025390625006},
            {"lat": 82.99145133235486, "lng": 267.49511718750006},
            {"lat": 83.84174225396225, "lng": 266.02294921875006},
            {"lat": 84.4740645845916, "lng": 254.97070312500003},
            {"lat": 84.63769756726754, "lng": 254.67407226562503}
        ],
        title: "Rellekka ↔ Ungael"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        positions: [
            {"lat": 82.0168018903175, "lng": 277.39929199218756},
            {"lat": 82.1424513249561, "lng": 273.77929687500006},
            {"lat": 82.30300897675623, "lng": 257.93701171875006},
            {"lat": 82.72583469134848, "lng": 250.59814453125003},
            {"lat": 82.93559934286549, "lng": 250.46081542968753}
        ],
        title: "Rellekka ↔ Pirates Cove"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        positions: [
            {"lat": 82.05941121693256, "lng": 277.81127929687506},
            {"lat": 83.05948730257296, "lng": 277.50366210937506},
            {"lat": 83.27641888844767, "lng": 275.48217773437506},
            {"lat": 83.34552174104411, "lng": 274.64721679687506}
        ],
        title: "Rellekka ↔ Miscellania"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        positions: [
            {"lat": 82.95179467304061, "lng": 251.17492675781253},
            {"lat": 83.13080913050881, "lng": 251.42211914062503},
            {"lat": 83.19619730940111, "lng": 252.37792968750003},
            {"lat": 83.30593848760384, "lng": 251.76269531250003},
            {"lat": 83.60270411519305, "lng": 247.22534179687503},
            {"lat": 83.6417567328638, "lng": 245.70922851562503},
            {"lat": 83.73775349611977, "lng": 245.51147460937503}
        ],
        title: "Pirates Cove ↔ Lunar Isle"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
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
        title: "Rimmington ↔ Corsair Cove"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        positions: [
            {"lat": 79.23000193927321, "lng": 275.89416503906256},
            {"lat": 79.38997509071015, "lng": 276.89392089843756}

        ],
        title: "Fishing Guild ↔ Kylie Minnow's fishing platform"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
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
        title: "Eagles Peak ↔ Piscatoris Fishing Colony"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        positions: [
            {"lat":83.36839854826567,"lng":345.838623046875},
            {"lat":83.68178108996156,"lng":342.509765625},
            {"lat":84.24793541158849,"lng":340.76843261718756}

        ],
        title: "Fossil Island (Mushroom forest) ↔ Lithkren"
    },

    //<<<<<< One ways >>>>>>>>>>>>>>
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        one_way: true,
        positions: [
            {"lat": 79.16823815620724, "lng": 289.48425292968756},
            {"lat": 78.92821835577044, "lng": 289.81933593750006},
            {"lat": 78.90710049623647, "lng": 287.82531738281256}
        ],
        title: "Catherby ➝ Keep Le Faye",
        description: "Get in the crate behind the candle store"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
        one_way: true,
        positions: [
            {"lat": 71.63426216732036, "lng": 286.61682128906256},
            {"lat": 71.79454673720774, "lng": 283.79882812500006},
            {"lat": 75.1548582574413, "lng": 282.13989257812506},
            {"lat": 75.27261992123154, "lng": 281.21704101562506}
        ],
        title: "Cairn Isle (below) ➝ Port Khazard",
        description: "Get in the crate behind the candle store"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport',
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
        title: "Cairn Isle (below) ➝ Port Khazard",
        description: "Get in the crate behind the candle store"
    },
    // <<<<<<<<<<<<<<<<<<<<<< Boats <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
];

export const PointToManyPoints = [
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport charter_ship',
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
        title: "Charter Ship"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'boat_transport zeah',
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
        title: "Zeah Boat"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'muli_destination canoes',
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
        title: "River Lum Log boats"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'carpet_ride',
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
        title: "Desert Magic Carpets"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'carpet_ride',
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
        title: "Desert Magic Carpets"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'gnome_glider',
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
        title: "Gnome Gliders"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'spirit_trees',
        stops: [
            {"lat":76.96776789443538,"lng":272.99377441406256},
            {"lat":79.47459894016727,"lng":266.73706054687506},
            {"lat":75.51228166167071,"lng":271.94458007812506},
            {"lat":80.21892275562932,"lng":314.5330810546875},
            {"lat":69.27559678639956,"lng":268.45092773437506}
        ],
        positions: [
        ],
        title: "Spirit Trees"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'balloon_transport',
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
        title: "Balloon Transport System"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'magic_mushroom',
        stops: [
            {"lat":83.5337864118568,"lng":346.82739257812506},
            {"lat":82.61299277110686,"lng":346.95373535156256},
            {"lat":82.62146305852085,"lng":352.29858398437506},


        ],
        positions: [

        ],
        title: "Magic mushroom teleports"
    },
    {
        iconUrl: require('../../static/icons/misc/Transportation_icon.png'),
        className: 'fossil_island_row_boats',
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
        title: "Fossil Island row boats"
    },
];

const types = [
    {
        label: 'teleports',
        data: Teleports
    },
    {
        label: 'point_to_points',
        data: PointToPoints
    },
    {
        label: 'point_to_many_points',
        data: PointToManyPoints
    },
    {
        label: 'fairy_rings',
        data: FairyRings
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