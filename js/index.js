const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src2": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// imgs
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let mainimg = document.getElementById("cta-img");
mainimg.setAttribute('src', siteContent["cta"]["img-src2"]);

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//nav
let navItem = document.querySelectorAll("a");
navItem.forEach((element, index) => {
  element.textContent = siteContent['nav'][`nav-item-${index+1}`]
});

let append = document.createElement("a");
let newText = document.createTextNode("Append");
append.appendChild(newText);
document.querySelector("nav").appendChild(append);

let prepend2 = document.createElement("a");
let newText2 = document.createTextNode("Prepend");
prepend2.prepend(newText2);
document.querySelector("nav").prepend(prepend2);

let navColor = document.querySelectorAll("a");
navColor.forEach((element) => {
  element.style.color = "green"
});

//top content
let ctaText = document.querySelector("h1");
ctaText.textContent = siteContent.cta.h1;

let ctaButton = document.querySelector("button")
ctaButton.textContent = siteContent.cta.button;

//h4's
let h4Title = document.querySelectorAll("h4");
h4Title[0].textContent = siteContent["main-content"]["features-h4"];
h4Title[1].textContent = siteContent["main-content"]["about-h4"];
h4Title[2].textContent = siteContent["main-content"]["services-h4"];
h4Title[3].textContent = siteContent["main-content"]["product-h4"];
h4Title[4].textContent = siteContent["main-content"]["vision-h4"];
h4Title[5].textContent = siteContent.contact["contact-h4"];

let paragrphs = document.querySelectorAll("p");
paragrphs[0].textContent = siteContent["main-content"]["features-content"];
paragrphs[1].textContent = siteContent["main-content"]["about-content"];
paragrphs[2].textContent = siteContent["main-content"]["services-content"];
paragrphs[3].textContent = siteContent["main-content"]["product-content"];
paragrphs[4].textContent = siteContent["main-content"]["vision-content"];
paragrphs[5].textContent = siteContent.contact.address;
paragrphs[6].textContent = siteContent.contact.phone;
paragrphs[7].textContent = siteContent.contact.email;
paragrphs[8].textContent = siteContent.footer.copyright;


//stretch
let navBg = document.querySelector("header");
navBg.style.background = "lightgrey";

let Bg = document.querySelector(".container");
Bg.style.background = "lightblue";

let buttonBg = document.querySelector("button")
buttonBg.style.background = "lightgrey"