const prevPageButton = document.querySelector('#prev-page');
const nextPageButton = document.querySelector('#next-page');
const $pages = document.querySelectorAll('.section');

var currentPage = 0;
var previousPage = 0;
// If I don't scroll the main page into view every time, website caching will mess up the count :) Uncomment this for deployment.
$pages[0].scrollIntoView();

const maxPage = $pages.length;

// Mousewheel controls
var prevTime = 0
function onMouseWheelFunc(event) {
    //Throttling it so you can't scroll 2137 times a second :)
    curTime = new Date().getTime();
    timeDiff = curTime - prevTime;
    
    // describes how much time in ms has to pass between scrolling
    const timeLimit = 500;

    if (timeDiff > timeLimit) {
        if (event.deltaY == '-102') {
            prevPage();
        }
        if (event.deltaY == '102') {
            nextPage();
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
    previousPage = currentPage;

    if (currentPage > 0) {
        currentPage -= 1;
        trackPagePosition();
    }
    $pages[currentPage].scrollIntoView();
};

function nextPage() {
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

const $pageMarkerImg = document.querySelectorAll(".bar-img");
function trackPagePosition() {
    $pageMarkerImg[previousPage].classList.remove('bar-img-focused')

    $pageMarkerImg[currentPage].classList.add('bar-img-focused');
};

trackPagePosition()