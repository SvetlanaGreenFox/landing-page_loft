const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-content');

navBtn.addEventListener('click', () => {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-content--mobile');
    document.body.classList.toggle('no-scroll');
})

// Phone Mask
mask('[data-tel-input]');

// Inputs Handler

const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.value == '+') input.value = '';
    });

    input.addEventListener('blur', () => {
        if (input.value == '+') input.value = '';
    });
})

/* Yandex Map */

const LOCATION = {center: [30.338928, 59.94354], zoom: 16};

let map;

main();
async function main() {
    await ymaps3.ready;
    const {
        YMap,
        YMapDefaultSchemeLayer,
        YMapControls,
        YMapDefaultFeaturesLayer,
        YMapMarker
    } = ymaps3;

    const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');

    map = new YMap(document.getElementById('map'), {location: LOCATION});

    map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapDefaultFeaturesLayer());

    map.addChild(new YMapControls({position: 'right'}).addChild(new YMapZoomControl({})));

    const myMarker = document.createElement('div');
    myMarker.className = 'my-marker';
    // myMarker.src = './location-pin.svg';

    myMarker.onclick = () => map.update({location: {...LOCATION, duration: 400}});
    map.addChild(new YMapMarker({coordinates: LOCATION.center}, myMarker));
}
