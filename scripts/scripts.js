function classifyText(fe, parent, str, cls) {
    // fe : decides if class should be applied for each character separately (0=No, 1=Yes)
    // parent : parent element (by ID) that you want the child to be attached to
    // str : text content of the element
    // cls : class that you want to add to the child element

    const pnt = document.getElementById(parent);

    if (fe == 1) {
        for (let i = 0; i < str.length; i++) {
            var ele = document.createElement("span");
            
            ele.classList.add(cls);

            var node = document.createTextNode(str[i]);
            ele.appendChild(node);

            pnt.appendChild(ele);
        }
    } else {
    var ele = document.createElement("span");
    
    ele.classList.add(cls);

    var node = document.createTextNode(str);

    pnt.appendChild(ele);
    }
}

classifyText(1, "name", "Michał Fleites-Jończyk", "beautify")
classifyText(1, "mail-link", "michalfleites@gmail.com", "beautify")


if (window.matchMedia('(prefers-color-scheme: dark)')) {
    localStorage.setItem('theme', 'dark');
} else {
    localStorage.setItem('theme', 'light');
}


const $linkedin = document.querySelector("#linkedin");
const $github = document.querySelector("#github");
const $replit = document.querySelector("#replit");
const $twitter = document.querySelector("#twitter");
const $readcv = document.querySelector("#readcv");

function changeScheme() {
    if (localStorage.getItem('theme') == 'dark') {
        localStorage.setItem('theme', 'light');

        $linkedin.src = "assets/icons/LinkedLight.svg";
        $github.src = "assets/icons/Github_Light.svg";
        $replit.src = "assets/icons/ReplitLight.svg";
        $twitter.src = "assets/icons/TwitterLight.svg";
        $readcv.src = "assets/icons/ReadCVLight.svg";


        document.documentElement.style.setProperty('--main', 'white');
        document.documentElement.style.setProperty('--aux', 'black');
        document.documentElement.style.setProperty('--highlight-background', '#a8a8a8')
    } else {
        localStorage.setItem('theme', 'dark');

        $linkedin.src = "assets/icons/LinkedDark.svg";
        $github.src = "assets/icons/Github_Dark.svg";
        $replit.src = "assets/icons/ReplitDark.svg";
        $twitter.src = "assets/icons/TwitterDark.svg";
        $readcv.src = "assets/icons/ReadCVDark.svg";

        document.documentElement.style.setProperty('--main', '#202124');
        document.documentElement.style.setProperty('--aux', 'white');
        document.documentElement.style.setProperty('--highlight-background', '#606060')
        
    }
}

const $themeIndicator = document.querySelector('#theme-indicator')
function hideThemeIndicator() {
    $themeIndicator.classList.add('hidden')
}