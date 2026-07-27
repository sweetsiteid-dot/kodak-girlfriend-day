/* =====================================================
LOADER
===================================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 2500);

});

/* =====================================================
ELEMENT
===================================================== */

const music = document.getElementById("music");

const flash = document.getElementById("flash");

const startStory = document.getElementById("startStory");

const hero = document.getElementById("hero");

const storyBtn = document.getElementById("storyBtn");

const letterBtn = document.getElementById("letterBtn");

/* =====================================================
FLASH EFFECT
===================================================== */

function cameraFlash(){

    flash.style.opacity = "1";

    setTimeout(()=>{

        flash.style.opacity = "0";

    },180);

}

/* =====================================================
START STORY
===================================================== */

startStory.addEventListener("click",()=>{

    cameraFlash();

    music.play().catch(()=>{});

    setTimeout(()=>{

        hero.scrollIntoView({

            behavior:"smooth"

        });

    },300);

});

/* =====================================================
HERO BUTTON
===================================================== */

storyBtn.addEventListener("click",()=>{

    document.getElementById("filmRoll").scrollIntoView({

        behavior:"smooth"

    });

});

letterBtn.addEventListener("click",()=>{

    document.getElementById("loveLetter").scrollIntoView({

        behavior:"smooth"

    });

});

/* =====================================================
LOVE LETTER
===================================================== */

const envelope = document.getElementById("openEnvelope");

const paper = document.querySelector(".letter-paper");

const envelopeFront = document.querySelector(".envelope-front");

const letterContent = document.getElementById("letterContent");

const letterText = `Happy National Girlfriend Day, Sayangg.

Terima kasih karena sudah hadir dan menjadi alasan banyak senyum di hidupku.

Semoga setiap foto yang ada di website ini bisa menjadi pengingat bahwa setiap momen bersamamu selalu berarti.

Aku akan terus menjaga semua kenangan kita, sekecil apa pun itu.

I love you today, tomorrow, and forever. ❤️`;

let indexLetter = 0;

envelope.addEventListener("click",()=>{

    envelopeFront.style.display = "none";

    paper.style.display = "block";

    typeLetter();

});

function typeLetter(){

    if(indexLetter < letterText.length){

        letterContent.innerHTML += letterText.charAt(indexLetter);

        indexLetter++;

        setTimeout(typeLetter,28);

    }

}

/* =====================================================
CAMERA DEVELOP
===================================================== */

const developBtn = document.getElementById("developBtn");

const polaroid = document.getElementById("polaroid");

const photo = document.querySelector(".polaroid-photo img");

developBtn.addEventListener("click",()=>{

    cameraFlash();

    polaroid.style.display = "block";

    photo.style.filter = "grayscale(100%) brightness(2)";

    photo.style.transition = "2.5s";

    setTimeout(()=>{

        photo.style.filter = "grayscale(0) brightness(1)";

    },400);

});

/* =====================================================
REASONS
===================================================== */

const reasons=[

"I love your smile.",

"I love your kindness.",

"I love your patience.",

"I love your beautiful eyes.",

"I love every little thing you do.",

"I love your warm heart.",

"I love making memories with you.",

"I simply love you."

];

const nextReason=document.getElementById("nextReason");

const reasonText=document.getElementById("reasonText");

let reasonIndex=0;

nextReason.addEventListener("click",()=>{

    reasonText.style.opacity="0";

    setTimeout(()=>{

        reasonText.innerHTML=reasons[reasonIndex];

        reasonText.style.opacity="1";

        reasonIndex++;

        if(reasonIndex>=reasons.length){

            reasonIndex=0;

        }

    },250);

});

/* =====================================================
SCRAPBOOK
===================================================== */

const pages = document.querySelectorAll(".scrap-page");

const nextPage = document.getElementById("nextPage");

const prevPage = document.getElementById("prevPage");

let currentPage = 0;

function showPage(index){

    pages.forEach(page=>{

        page.classList.remove("active");

    });

    pages[index].classList.add("active");

}

nextPage.addEventListener("click",()=>{

    currentPage++;

    if(currentPage >= pages.length){

        currentPage = 0;

    }

    showPage(currentPage);

});

prevPage.addEventListener("click",()=>{

    currentPage--;

    if(currentPage < 0){

        currentPage = pages.length - 1;

    }

    showPage(currentPage);

});

showPage(currentPage);

/* =====================================================
VHS TIMER
===================================================== */

const vhsTimer = document.getElementById("vhsTimer");

let second = 1;

function updateTimer(){

    const h = String(Math.floor(second / 3600)).padStart(2,"0");

    const m = String(Math.floor((second % 3600) / 60)).padStart(2,"0");

    const s = String(second % 60).padStart(2,"0");

    vhsTimer.innerHTML = `${h}:${m}:${s}`;

    second++;

}

setInterval(updateTimer,1000);

/* =====================================================
QUOTE SLIDER
===================================================== */

const quoteText = document.getElementById("quoteText");

const quotes = [

"Every picture reminds me why I love you.",

"You are my favorite chapter.",

"Love is found in every little memory.",

"You'll always be my safest place.",

"Thank you for choosing me every day.",

"Forever starts with you.",

"I'll always keep our memories alive.",

"You are my happiest coincidence."

];

let quoteIndex = 0;

setInterval(()=>{

    quoteText.style.opacity = "0";

    setTimeout(()=>{

        quoteIndex++;

        if(quoteIndex >= quotes.length){

            quoteIndex = 0;

        }

        quoteText.innerHTML = quotes[quoteIndex];

        quoteText.style.opacity = "1";

    },300);

},5000);

/* =====================================================
FILM CARD ANIMATION
===================================================== */

const filmCards = document.querySelectorAll(".film-card");

const filmObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

},{

    threshold:0.2

});

filmCards.forEach(card=>{

    card.style.opacity = "0";

    card.style.transform = "translateY(60px)";

    card.style.transition = ".8s";

    filmObserver.observe(card);

});

/* =====================================================
SECTION FADE
===================================================== */

const sections = document.querySelectorAll("section");

const sectionObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

},{

    threshold:0.15

});

sections.forEach(section=>{

    if(section.id !== "intro"){

        section.style.opacity = "0";

        section.style.transform = "translateY(70px)";

        section.style.transition = "1s";

        sectionObserver.observe(section);

    }

});

/* =====================================================
BACK TO TOP
===================================================== */

const backTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        backTop.style.display = "flex";

        backTop.style.alignItems = "center";

        backTop.style.justifyContent = "center";

    }else{

        backTop.style.display = "none";

    }

});

backTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* =====================================================
SECRET MEMORY
===================================================== */

const unlockSecret = document.getElementById("unlockSecret");

const secretBox = document.getElementById("secretBox");

let secretOpened = false;

unlockSecret.addEventListener("click",()=>{

    if(secretOpened) return;

    secretOpened = true;

    cameraFlash();

    secretBox.style.display = "block";

    secretBox.style.opacity = "0";

    secretBox.style.transform = "translateY(40px)";

    secretBox.style.transition = ".8s";

    setTimeout(()=>{

        secretBox.style.opacity = "1";

        secretBox.style.transform = "translateY(0)";

    },100);

});

/* =====================================================
VHS SLIDESHOW
===================================================== */

const vhsImage = document.getElementById("vhsImage");

const vhsPhotos = [

    "assets/photos/photo11.jpg",

    "assets/photos/photo12.jpg",

    "assets/photos/photo13.jpg",

    "assets/photos/photo14.jpg",

    "assets/photos/photo15.jpg"

];

let vhsIndex = 0;

setInterval(()=>{

    vhsImage.style.opacity = ".15";

    setTimeout(()=>{

        vhsIndex++;

        if(vhsIndex >= vhsPhotos.length){

            vhsIndex = 0;

        }

        vhsImage.src = vhsPhotos[vhsIndex];

        vhsImage.style.opacity = "1";

    },250);

},4000);

/* =====================================================
PARALLAX LIGHT LEAK
===================================================== */

const lightLeak = document.querySelector(".light-leak");

window.addEventListener("scroll",()=>{

    const offset = window.scrollY * 0.12;

    lightLeak.style.transform = `translateY(${offset}px)`;

});

/* =====================================================
FLOATING HEARTS
===================================================== */

function createHeart(){

    const heart = document.createElement("span");

    heart.innerHTML = "🤎";

    heart.style.position = "fixed";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize = (18 + Math.random()*18) + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    heart.style.transition = "all 5s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.bottom = "110vh";

        heart.style.opacity = "0";

        heart.style.transform =
        `translateX(${Math.random()*120-60}px)
         rotate(${Math.random()*360}deg)`;

    },100);

    setTimeout(()=>{

        heart.remove();

    },5200);

}

setInterval(createHeart,2200);

/* =====================================================
CAMERA CURSOR FLASH
===================================================== */

document.addEventListener("click",(e)=>{

    const flashPoint = document.createElement("div");

    flashPoint.style.position = "fixed";

    flashPoint.style.left = e.clientX + "px";

    flashPoint.style.top = e.clientY + "px";

    flashPoint.style.width = "18px";

    flashPoint.style.height = "18px";

    flashPoint.style.borderRadius = "50%";

    flashPoint.style.background = "#ffffff";

    flashPoint.style.boxShadow = "0 0 35px #fff";

    flashPoint.style.pointerEvents = "none";

    flashPoint.style.zIndex = "9999";

    flashPoint.style.opacity = "1";

    flashPoint.style.transition = ".5s";

    document.body.appendChild(flashPoint);

    setTimeout(()=>{

        flashPoint.style.transform = "scale(8)";

        flashPoint.style.opacity = "0";

    },20);

    setTimeout(()=>{

        flashPoint.remove();

    },500);

});

/* =====================================================
ENDING FADE
===================================================== */

const ending = document.getElementById("ending");

const endingObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            ending.style.backgroundPosition = "center";

            ending.style.transition = "2s";

        }

    });

});

endingObserver.observe(ending);

/* =====================================================
CONSOLE MESSAGE
===================================================== */

console.log("%c📷 Kodak Memories Premium",
"font-size:18px;color:#8A5A44;font-weight:bold;");

console.log("%cMade with 🤎 by Akbar",
"font-size:14px;color:#C9A86A;");
