import Typed from 'typed.js';

const loadDynamicBannerText = () => {
    new Typed('#banner-typed-text', {
        strings: ["the planet", "your children's future", "your neighborhood"],
        typeSpeed: 50,
        loop: true
    });
}

export { loadDynamicBannerText };