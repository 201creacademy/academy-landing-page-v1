//MOBLIE NAV
let bottomNavItems = document.querySelectorAll(".mb-nav-item");
let bottomMove = document.querySelector(".mb-move-item");
bottomNavItems.forEach((item, index) => {
    item.addEventListener("click", function (e) {
        let crrItem = document.querySelector(".mb-nav-item.active");
        crrItem.classList.remove("active");
        item.classList.add("active");
        bottomMove.style.left = index * 20 + "%";
    })
})


//navigation
let menuItems = document.getElementsByClassName("menu-item");

Array.from(menuItems).forEach(item => {

    item.addEventListener("click", function () {

        Array.from(menuItems).forEach(item => {

            item.classList.remove("active");
        });
        item.classList.add("active");
    })
})

//button back to top
const btnBackToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", function () {

    if (window.scrollY > 200 || document.documentElement.scrollTop > 200) {

        btnBackToTop.style.display = "flex";
    } else {

        btnBackToTop.style.display = "none";
    }
})


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}


// on  scroll animation
let scroll = window.requestAnimationFrame || function name(callback) {

    window.setTimeout(callback, 1000 / 60)

}

let elToShow = document.querySelectorAll('.play-on-scroll');

isElInViewPort = (el) => {

    let rect = el.getBoundingClientRect();

    // console.log(rect);

    return (

        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))

    )
    loop()
}

loop = () => {
    elToShow.forEach((item) => {

        //console.log(typeof(isElInViewPort(item)));

        if (isElInViewPort(item)) {

            item.classList.add("start")
        } else {

            item.classList.remove("start")

        }
    })
    scroll(loop);
}

loop();

//Facebook
var chatbox = document.getElementById('fb-customer-chat');

chatbox.setAttribute("page_id", "117614761445138");
chatbox.setAttribute("attribution", "biz_inbox");
window.fbAsyncInit = function () {
    FB.init({
        xfbml: true,
        version: 'v18.0'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//Zalo
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { document.getElementById("linkzalo").href = "https://zalo.me/0966139100"; }


/* Open when someone clicks on the span element */
var acc = document.getElementsByClassName("question-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

