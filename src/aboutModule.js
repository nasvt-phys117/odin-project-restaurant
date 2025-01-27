function loadAbout() {
    const contentDiv = document.getElementById("content")
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.lastChild)
    };
    const aboutDiv = document.createElement('div');
    aboutDiv.setAttribute('class', 'textDiv');
    aboutDiv.textContent = "This is the About page. About! About! About!"
    contentDiv.appendChild(aboutDiv);
}

export {loadAbout};