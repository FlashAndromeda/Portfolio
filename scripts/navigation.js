const prevPageButton = document.querySelector('#prev-page');
const nextPageButton = document.querySelector('#next-page');
const $pages = document.querySelectorAll('.section');

document.addEventListener("wheel", (event) => onMouseWheelFunc(event));

var currentPage = 0;
var previousPage = 0;
// If I don't scroll the main page into view every time, website caching will mess up the count :)
// Change to $pages[0] for deployment :)
$pages[0].scrollIntoView();

const maxPage = $pages.length;

// Mousewheel controls
var prevTime = 0
function onMouseWheelFunc(event) {
    console.log('mousewheel fired off');
    //Throttling it so you can't scroll 2137 times a second :)
    curTime = new Date().getTime();
    timeDiff = curTime - prevTime;
    
    // describes how much time in ms has to pass between scrolling
    const timeLimit = 500;

    if (timeDiff > timeLimit) {
        if (event.deltaY < 0) {
            prevPage();
            console.log('scroll to prev');
        }
        if (event.deltaY > 0) {
            nextPage();
            console.log('scroll to next');
        }
        prevTime = new Date().getTime();
    }
}

// Keyboard controls
function onKeyDownFunc(event) {
    if (event.key == 'ArrowUp') {
    prevPage();
    }

    if (event.key == 'ArrowDown') {
    nextPage();
    }
}

function prevPage() {
    if (is_displayed == true) {
        return
    }

    previousPage = currentPage;

    if (currentPage > 0) {
        currentPage -= 1;
        trackPagePosition();
    }
    $pages[currentPage].scrollIntoView();
};

function nextPage() {
    if (is_displayed == true) {
        return
    }

    previousPage = currentPage;

    if (currentPage < maxPage-1) {
        currentPage += 1;
        trackPagePosition();
    }
    $pages[currentPage].scrollIntoView();
    
}

function moveToPage(pageIndex) {

    previousPage = currentPage;
    currentPage = pageIndex;
    
    $pages[pageIndex].scrollIntoView();
    trackPagePosition();

}

// Page navigation through bars
const $barNavigator = document.querySelector('#progress-bar');

function createBarElements() {
    for (i = 0; i < $pages.length; i++) {
        var bar = document.createElement('div');
        bar.classList.add('page-bar');
        bar.setAttribute( "onclick", 'javascript: moveToPage(' + i + ');');

        var bar_img = document.createElement('div');
        bar_img.classList.add('bar-img');
        
        bar.appendChild(bar_img);
        
        $barNavigator.appendChild(bar);
    };
};
createBarElements()

class Scroll_Indicator_Class {
    constructor(element)  {
        this.element = element;
        this.height = element.offsetHeight;
        this.width = element.offsetWidth;
        this.classes = element.classList;
    }

    // Getters
    get elementObject() {
        return this.element;
    }

    // Methods
    positionLeft(pos) {
        this.element.style.left = pos;
    }

    positionBottom(pos) {
        this.element.style.bottom = pos;
    }

};

const $scrollIndicator = document.getElementById('scroll-indicator');
let scrollIndicatorElement = new Scroll_Indicator_Class($scrollIndicator);
scrollIndicatorElement.positionLeft('calc(4vw - '+ $barNavigator.offsetWidth + 'px)');
scrollIndicatorElement.positionBottom(scrollIndicatorElement.width/2 + 'px');

function manageScrollIndicatorVisibility() {
    if (currentPage > 0) {
        scrollIndicatorElement.positionBottom('-15vh');
    } else {
        scrollIndicatorElement.positionBottom(scrollIndicatorElement.width/2 + 'px');
    }
}

const $pageMarkerImg = document.querySelectorAll(".bar-img");
function trackPagePosition() {
    manageScrollIndicatorVisibility();

    $pageMarkerImg[previousPage].classList.remove('bar-img-focused');

    $pageMarkerImg[currentPage].classList.add('bar-img-focused');
};
trackPagePosition()

const $aboutContent = document.querySelector('#about-content')
let is_displayed = false;
function displayAboutPage() {
    if (is_displayed == false) { // Move into view
        is_displayed = true;
        
        $aboutContent.style.left = '0';
        $aboutContent.style.opacity = '1';
    } else if (is_displayed == true) { // Hide from view
        is_displayed = false;
        $aboutContent.style.left = '100vw';
        $aboutContent.style.opacity = '0';
    }
}
