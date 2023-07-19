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

const LOCATION = {
  center: [30.338928, 59.943543],
  zoom: 16,
};

let map;

main();
async function main() {

    await ymaps3.ready;
    const {
        YMap,
        YMapDefaultSchemeLayer,
        YMapControls,
        YMapDefaultFeaturesLayer,
        YMapMarker,
    } = ymaps3;

    const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');

    map = new YMap(document.getElementById('map'), {location: LOCATION});

    map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapDefaultFeaturesLayer());
    map.addChild(new YMapControls({position: 'right'}).addChild(new YMapZoomControl({})));
    

    const myMarker = document.createElement('div');
    myMarker.innerHTML = `
      <div class="my-marker__img"></div>
      <div class="my-marker__content">
        <div class="my-marker__content-item">Набережная реки Фонтанки <bl/> 10-15</div>
        <div class="my-marker__content-item">
          <a class="my-marker__link" href="tel:+78121234567">+8 (812) 123-45-67</a>
        </div>
      </div>`;
    myMarker.className = 'my-marker';
   
    map.addChild(new YMapMarker(
      {coordinates: LOCATION.center}, 
      myMarker));
}
