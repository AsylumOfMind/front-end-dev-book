var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_VIDEO_SELECTOR = '[data-video-role="target"]';
var DETAIL_SOURCE_SELECTOR = '[data-source-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LEFT_LINK_SELECTOR = '[data-image-role="trigger"]';
var THUMBNAIL_RIGHT_LINK_SELECTOR = '[data-video-role="trigger"]';
var RANDOM_IMAGE_SELECTOR = '[data-image-role="random"]';

var prev = '';

function activateAnimations(name) {
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    /*var detailImage = document.querySelector(".detail-image-frame");*/
    if (prev != '') {
        detailImage.classList.toggle(prev);
    }
    detailImage.classList.toggle(name);
    prev = name;
}

function animFromThumb(thumbnail) {
    'use strict'
    return thumbnail.getAttribute('name');
}

function setDetailImg(imageUrl, titleText) {
    'use strict'
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    /*detailImage.setAttribute('src', 'img/jpg/futaba.jpg');*/
    detailImage.setAttribute('src', imageUrl);
    
    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    /*detailTitle.textContent = 'Sakura Futaba';*/
    detailTitle.textContent = titleText;
    
    var detailVideo = document.querySelector(DETAIL_VIDEO_SELECTOR);
    var detailSource = document.querySelector(DETAIL_SOURCE_SELECTOR);
    detailImage.style.visibility = "visible";
    detailVideo.style.visibility = "hidden";
    detailSource.setAttribute('src','img/mp4/play.mp4');
    detailVideo.load();
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailImgFromThumb(thumbnail) {
    'use strict'
    setDetailImg(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
    activateAnimations(animFromThumb(thumbnail));
    
}

function addThumbClickHandler(thumb) {
    'use strict'
    thumb.addEventListener('click', function (event) {
        event.preventDefault();
        setDetailImgFromThumb(thumb);
    });
}

function getThumbnailsArray() {
    'use strict'
    var thumbnails = document.querySelectorAll(THUMBNAIL_LEFT_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function initializeEvents() {
    'use strict'
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();


/////////*random images*///////////////


/*var jpgImg = [
    ['img/gif/Arsene.gif','Arsene'],
    ['img/gif/Zorro.gif','Zorro'],
    ['img/gif/Captain_Kidd.gif','Captain_Kidd'],
    ['img/gif/Carmen.gif','Carmen'],
    ['img/gif/Goemon.gif','Goemon'],
    ['img/gif/Johanna.gif','Johanna'],
    ['img/gif/Necronomicon.gif','Necronomicon'],
    ['img/gif/Milady.gif','Milady'],
    ['img/gif/Loki.gif','Loki']];*/


////////*Random Videos*////////////////    
var mp4Img = [
    ['img/mp4/Arsene.mp4','Arsene'],
    ['img/mp4/Zorro.mp4','Zorro'],
    ['img/mp4/Captain_Kidd.mp4','Captain_Kidd'],
    ['img/mp4/Carmen.mp4','Carmen'],
    ['img/mp4/Goemon.mp4','Goemon'],
    ['img/mp4/Johanna.mp4','Johanna'],
    ['img/mp4/Necronomicon.mp4','Necronomicon'],
    ['img/mp4/Milady.mp4','Milady'],
    ['img/mp4/Loki.mp4','Loki']];  
    
function detailVidPlay() {
    
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    var detailVideo = document.querySelector(DETAIL_VIDEO_SELECTOR);
    detailImage.style.visibility = "hidden";
    detailVideo.style.visibility = "visible";
    detailVideo.load();
    detailVideo.play();
}    

function setDetailVid(vidUrl, titleText) {
    'use strict'
    
    var detailSource = document.querySelector(DETAIL_SOURCE_SELECTOR);
    detailSource.setAttribute('src', vidUrl);
    
    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
    
    detailVidPlay();
}
    
function setDetailVidFromRand() {
    'use strict'
    var r = Math.floor(Math.random() * 9);
    setDetailVid(mp4Img[r][0],mp4Img[r][1]);
}

function addRandClickHandler(rand) {
    'use strict'
    rand.addEventListener('click', function (event) {
        event.preventDefault();
        setDetailVidFromRand();
    });
}

function getRandomsArray() {
    'use strict'
    var randoms = document.querySelectorAll(THUMBNAIL_RIGHT_LINK_SELECTOR);
    var randomArray = [].slice.call(randoms);
    return randomArray;
}

function initializeEventsR() {
    'use strict'
    var randoms = getRandomsArray();
    randoms.forEach(addRandClickHandler);
}

initializeEventsR();
   