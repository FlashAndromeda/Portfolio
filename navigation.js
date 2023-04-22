const prevPageButton = document.querySelector('#prev-page');
const nextPageButton = document.querySelector('#next-page');
const $pages = document.querySelectorAll('.section');

var currentPage = 0;
// If I don't scroll the main page into view every time, website caching will mess up the count :) Uncomment this for deployment.
// $pages[0].scrollIntoView();

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
    if (currentPage > 0) {
        currentPage -= 1;
    }
    $pages[currentPage].scrollIntoView();
};

function nextPage() {
    if (currentPage < maxPage-1) {
        currentPage += 1;
    }
    $pages[currentPage].scrollIntoView();
}

//Checking if element is in view
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}