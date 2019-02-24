let one_sqaure_in_minutes = 1.875;
//0,0 center
export const center = {"lat":75.41162164538234,"lng":265.55053710937506};
export const one_sqaure_right = {"lat":75.41162164538234,"lng":265.61645507812506};
export const one_sqaure_down = {"lat":75.39500943841519,"lng":265.55053710937506};

export const square_width = -(center.lng - one_sqaure_right.lng);
export const square_height = -(center.lat - one_sqaure_down.lat);

let amount_to_generater = 1000;
export function buildChunkGrid() {
    let vertical_bars = [];
    for(let x = -amount_to_generater; x < amount_to_generater; x++){
        vertical_bars.push({
            positions: [
                {lat: center.lat - amount_to_generater, lng: center.lng + (x*square_width)},
                {lat: center.lat + amount_to_generater, lng: center.lng + (x*square_width)}
            ]
        });
    }

    for(let x = -amount_to_generater; x < amount_to_generater; x++){
        vertical_bars.push({
            positions: [
                {lat: center.lat + (x*square_height), lng: center.lng - amount_to_generater},
                {lat: center.lat + (x*square_height), lng: center.lng + amount_to_generater}
            ]
        });
    }


    return vertical_bars;
}