var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var RANDOM_IMAGE_SELECTOR = '[data-image-role="random"]';

function setDetails(imageUrl, titleText) {
    'use strict'
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    /*detailImage.setAttribute('src', 'img/futaba.jpg');*/
    detailImage.setAttribute('src', imageUrl);
    
    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    /*detailTitle.textContent = 'Sakura Futaba';*/
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
    'use strict'
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
    'use strict'
    thumb.addEventListener('click', function (event) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
    });
}

function getThumbnailsArray() {
    'use strict'
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function initializeEvents() {
    'use strict'
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();


/*random images*/


var adsImg = [
    ['img/ads/Arsene.gif','Arsene'],
    ['img/ads/Zorro.gif','Zorro'],
    ['img/ads/Captain_Kidd.gif','Captain_Kidd'],
    ['img/ads/Carmen.gif','Carmen'],
    ['img/ads/Goemon.gif','Goemon'],
    ['img/ads/Johanna.gif','Johanna'],
    ['img/ads/Necronomicon.gif','Necronomicon'],
    ['img/ads/Milady.gif','Milady'],
    ['img/ads/Loki.gif','Loki']];
    
    
function setDetailsFromRand() {
    'use strict'
    var r = Math.floor(Math.random() * 9);
    setDetails(adsImg[r][0],adsImg[r][1]);
}

function addRandClickHandler(rand) {
    'use strict'
    rand.addEventListener('click', function (event) {
        event.preventDefault();
        setDetailsFromRand();
    });
}

function getRandomsArray() {
    'use strict'
    var randoms = document.querySelectorAll(".random-thumbnail-item");
    var randomArray = [].slice.call(randoms);
    return randomArray;
}

function initializeEventsR() {
    'use strict'
    var randoms = getRandomsArray();
    randoms.forEach(addRandClickHandler);
}

initializeEventsR();
   