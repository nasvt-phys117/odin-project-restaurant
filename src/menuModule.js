function loadMenu() {
    const contentDiv = document.getElementById("content")
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.lastChild)
    };
    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('class', 'textDiv');
    menuDiv.textContent = "MEAT IS BACK ON THE MENU BOYS!"
    contentDiv.appendChild(menuDiv);
}

export { loadMenu };