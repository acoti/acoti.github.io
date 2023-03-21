

// Execute Upon DOM Load

document.addEventListener("DOMContentLoaded", function(event) { 
    setNewWindows();
});




// Set New Window Functionality

function setNewWindows() {
    elements = document.querySelectorAll("a.newWindow");
    Array.from(elements).forEach(function(el) {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
    });
};