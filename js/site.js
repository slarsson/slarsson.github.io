'use strict';

// don't care about older browsers, the site do not need js to work
if (!('Promise' in window)) {throw 'ES6 NOT SUPPORTED, ABORT!';}

// resize
window.addEventListener('resize', () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
});