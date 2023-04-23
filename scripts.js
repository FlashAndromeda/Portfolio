function classifyText(fe, parent, str, cls) {
    // fe : decides if class should be applied for each character separately (0=No, 1=Yes)
    // parent : parent element that you want the child to be attached to
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
