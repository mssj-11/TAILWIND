// Buttons functions
let profileBtn = document.querySelector('#profileBtn');
let colorsBtn = document.querySelector('#colorsBtn');
let notificationsBtn = document.querySelector('#notificationsBtn');


profileBtn.onclick = function() {

    let profileDiv = document.querySelector('#profileDiv');
    showHide(profileDiv);
}

colorsBtn.onclick = function() {

    let colorsDiv = document.querySelector('#colorsDiv');
    showHide(colorsDiv);
}

notificationsBtn.onclick = function() {

    let notificationsDiv = document.querySelector('#notificationsDiv');
    showHide(notificationsDiv);
}

function showHide(element) {
    if(element.classList.contains('hidden')){
        element.classList.remove('hidden');

    } else {
        element.classList.add('hidden');
    }
}


// Change Sidebar color
function setColor(color) {
    let sidebar = document.querySelector('aside');
    let sidebarMobile = document.querySelector('#sidebarMobile');

    localStorage.setItem('color', color);
    sidebar.className = color + ' relative h-screen w-72 md:w-64 hidden sm:block shadow-xl';
    sidebarMobile.className = color + ' w-full py-5 px-6 hidden sm:hidden';
}

if(localStorage.getItem('color') === 'null'){
    var colorStg = 'bg-blue-500';

} else {
    var colorStg = localStorage.getItem('color');
}

setColor(colorStg);


// Show Hide Sidebar
let sidebarBtn = document.querySelector('#sidebarBtn');
sidebarBtn.onclick = function() {

    let sidebar = document.querySelector('aside');
    let sidebarMobile = document.querySelector('#sidebarMobile');

    if(sidebar.classList.contains('sm:block')) {
    sidebar.classList.replace('sm:block', 'sm:hidden');
    }
    else {
    sidebar.classList.replace('sm:hidden', 'sm:block');
    }

    if(sidebarMobile.classList.contains('hidden')) {
    sidebarMobile.classList.remove('hidden');
    }
    else {
    sidebarMobile.classList.add('hidden');
    }
}