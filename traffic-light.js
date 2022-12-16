const lights = {
    red: 'red',
    yellow: 'yellow',
    green: 'green'
};

const classes_by_light = {
    [lights.red]: 'traffic-light_red',
    [lights.yellow]: 'traffic-light_yellow',
    [lights.green]: 'traffic-light_green',
};

const next_light_by_light = {
    [lights.red]: lights.green,
    [lights.green]: lights.yellow,
    [lights.yellow]: lights.red,
};

let currentLight = lights.red

function switchLight(node) {
    const currentClass = classes_by_light[currentLight];
    const nextLight = next_light_by_light[currentLight];
    const nextClass = classes_by_light[nextLight];

    currentLight = next_light_by_light[currentLight];

    node.classList.replace(currentClass, nextClass);
}

function initLight(node) {
    node.classList.add(classes_by_light[currentLight]);
}