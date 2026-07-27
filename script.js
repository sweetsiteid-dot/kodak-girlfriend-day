/* =====================================================
LOADER
===================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";
        loader.style.transition = "0.8s";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 1800);

});

/* =====================================================
ELEMENT
===================================================== */

const intro = document.getElementById("intro");

const hero = document.getElementById("hero");

const openMemory = document.getElementById("openMemory");

const flash = document.getElementById("cameraFlash");

const music = document.getElementById("bgMusic");

const scrollBtn = document.querySelector(".scroll-btn");

/* =====================================================
OPEN MEMORY
===================================================== */

openMemory.addEventListener("click", () => {

    flash.style.opacity = "1";

    setTimeout(() => {

        flash.style.opacity = "0";

    }, 180);

    music.play().catch(() => {});

    setTimeout(() => {

        hero.scrollIntoView({

            behavior: "smooth"

        });

    }, 250);

});

/* =====================================================
SCROLL BUTTON
===================================================== */

scrollBtn.addEventListener("click", () => {

    document.getElementById("filmStrip").scrollIntoView({

        behavior: "smooth"

    });

});

/* =====================================================
LETTER
===================================================== */

const envelope = document.querySelector(".envelope-front");

const letter = document.querySelector(".letter-paper");

const letterText = document.getElementById("letterText");

const message = `Happy National Girlfriend Day, Sayangg.

Terima kasih karena sudah hadir dan menjadi bagian paling indah dalam hidupku.

Setiap hari bersamamu selalu terasa spesial, bahkan hal-hal sederhana pun berubah menjadi kenangan yang ingin selalu kuingat.

Aku bersyukur bisa mengenalmu sejak 3 Maret 2026, karena sejak hari itu hidupku menjadi lebih berwarna.

Semoga kita bisa terus membuat cerita baru, mengumpulkan lebih banyak foto, lebih banyak tawa, dan lebih banyak kenangan yang suatu hari nanti akan kita lihat kembali sambil tersenyum.

Aku mungkin bukan orang yang sempurna, tapi aku akan selalu berusaha menjadi seseorang yang bisa membuatmu merasa dicintai setiap hari.

Happy Girlfriend Day, Sayangg.

I love you, today, tomorrow, and always. 🤎`;

let typingIndex = 0;

envelope.addEventListener("click", () => {

    envelope.style.display = "none";

    letter.style.display = "block";

    typeLetter();

});

function typeLetter() {

    if (typingIndex < message.length) {

        letterText.innerHTML += message.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeLetter, 25);

    }

}

/* =====================================================
REASONS I LOVE YOU
===================================================== */

const reasons = [

    "I love your beautiful smile.",

    "I love the way you make me feel safe.",

    "I love your kindness.",

    "I love your laugh.",

    "I love every little thing about you.",

    "I love spending time with you.",

    "I love how you understand me.",

    "I simply love you."

];

const reasonBtn = document.getElementById("reasonBtn");

const reasonText = document.getElementById("reasonText");

reasonBtn.addEventListener("click", () => {

    const random = Math.floor(Math.random() * reasons.length);

    reasonText.textContent = reasons[random];

});

/* =====================================================
CAMERA POLAROID
===================================================== */

const takePhoto = document.getElementById("takePhoto");

const polaroid = document.getElementById("polaroid");

takePhoto.addEventListener("click", () => {

    flash.style.opacity = "1";

    setTimeout(() => {

        flash.style.opacity = "0";

    }, 150);

    polaroid.style.display = "block";

    polaroid.animate([

        {

            transform: "translateY(-80px)",
            opacity: 0

        },

        {

            transform: "translateY(0)",
            opacity: 1

        }

    ], {

        duration: 700,
        fill: "forwards"

    });

});

/* =====================================================
QUOTES
===================================================== */

const quotes = [

    "Every picture reminds me why I choose you every single day.",

    "You are my favorite memory.",

    "Home is wherever you are.",

    "Every love story is beautiful, but ours is my favorite.",

    "You make ordinary days feel extraordinary.",

    "Loving you is my favorite adventure.",

    "Thank you for becoming my happiest place.",

    "Forever isn't enough with you."

];

const quoteText = document.getElementById("quoteText");

let quoteIndex = 0;

function changeQuote(){

    quoteText.style.opacity = "0";

    setTimeout(()=>{

        quoteIndex++;

        if(quoteIndex >= quotes.length){

            quoteIndex = 0;

        }

        quoteText.textContent = quotes[quoteIndex];

        quoteText.style.opacity = "1";

    },300);

}

setInterval(changeQuote,5000);

/* =====================================================
SECRET MEMORY
===================================================== */

const unlockSecret = document.getElementById("unlockSecret");

const secretContent = document.getElementById("secretContent");

unlockSecret.addEventListener("click",()=>{

    secretContent.style.display = "block";

    unlockSecret.style.display = "none";

    secretContent.animate([

        {

            opacity:0,

            transform:"translateY(60px)"

        },

        {

            opacity:1,

            transform:"translateY(0)"

        }

    ],{

        duration:800,

        fill:"forwards"

    });

});

/* =====================================================
BACK TO TOP
===================================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 600){

        backToTop.style.display = "block";

    }

    else{

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* =====================================================
FADE IN ANIMATION
===================================================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.15

});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

/* =====================================================
FILM FRAME HOVER
===================================================== */

const frames = document.querySelectorAll(".film-frame");

frames.forEach(frame=>{

    frame.addEventListener("mouseenter",()=>{

        frame.style.transition = ".35s";

        frame.style.transform = "translateY(-12px) rotate(-2deg) scale(1.03)";

    });

    frame.addEventListener("mouseleave",()=>{

        frame.style.transform = "";

    });

});

/* =====================================================
SCRAPBOOK EFFECT
===================================================== */

const scraps = document.querySelectorAll(".scrap-item");

scraps.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        item.style.zIndex = "10";

    });

    item.addEventListener("mouseleave",()=>{

        item.style.zIndex = "1";

    });

});

/* =====================================================
HERO PARALLAX
===================================================== */

const heroSection = document.getElementById("hero");

window.addEventListener("scroll", () => {

    const scroll = window.pageYOffset;

    if (heroSection) {

        heroSection.style.backgroundPositionY = `${scroll * 0.4}px`;

    }

});

/* =====================================================
VHS EFFECT
===================================================== */

const vhsScreen = document.querySelector(".vhs-screen");

if (vhsScreen) {

    setInterval(() => {

        vhsScreen.style.filter = `
            brightness(${0.95 + Math.random() * 0.12})
            contrast(${0.95 + Math.random() * 0.15})
            saturate(${0.85 + Math.random() * 0.2})
        `;

    }, 180);

}

/* =====================================================
LIGHT LEAK
===================================================== */

const leak = document.querySelector(".light-leak");

if (leak) {

    setInterval(() => {

        leak.style.opacity = (0.12 + Math.random() * 0.12).toFixed(2);

    }, 3000);

}

/* =====================================================
FILM STRIP AUTO SCROLL
===================================================== */

const filmContainer = document.querySelector(".film-container");

if (filmContainer) {

    let direction = 1;

    setInterval(() => {

        filmContainer.scrollLeft += direction;

        if (

            filmContainer.scrollLeft + filmContainer.clientWidth >=
            filmContainer.scrollWidth - 5

        ) {

            direction = -1;

        }

        if (filmContainer.scrollLeft <= 0) {

            direction = 1;

        }

    }, 25);

}

/* =====================================================
ENDING PHOTO
===================================================== */

const endingPhoto = document.querySelector(".ending-photo");

if (endingPhoto) {

    endingPhoto.animate(

        [

            {

                transform: "rotate(-3deg) scale(1)"

            },

            {

                transform: "rotate(-1deg) scale(1.04)"

            },

            {

                transform: "rotate(-3deg) scale(1)"

            }

        ],

        {

            duration: 5000,

            iterations: Infinity

        }

    );

}

/* =====================================================
FLOATING BUTTON
===================================================== */

if (backToTop) {

    setInterval(() => {

        backToTop.animate(

            [

                {

                    transform: "translateY(0px)"

                },

                {

                    transform: "translateY(-8px)"

                },

                {

                    transform: "translateY(0px)"

                }

            ],

            {

                duration: 1800

            }

        );

    }, 1800);

}

/* =====================================================
MUSIC RESUME
===================================================== */

document.addEventListener("click", () => {

    if (music && music.paused) {

        music.play().catch(() => {});

    }

}, {

    once: false

});

/* =====================================================
FADE STYLE
===================================================== */

const fadeStyle = document.createElement("style");

fadeStyle.innerHTML = `

.hidden{

opacity:0;

transform:translateY(60px);

transition:.8s ease;

}

.show{

opacity:1;

transform:translateY(0);

}

`;

document.head.appendChild(fadeStyle);

/* =====================================================
CAMERA FLASH ON PHOTO
===================================================== */

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("click", () => {

        flash.style.opacity = "0.8";

        setTimeout(() => {

            flash.style.opacity = "0";

        }, 120);

    });

});

/* =====================================================
TITLE CHANGE
===================================================== */

const titles = [

    "Happy Girlfriend Day ❤️",

    "Kodak Memories 📷",

    "For Deandra 🤎",

    "Every Picture Has A Story"

];

let titleIndex = 0;

setInterval(() => {

    titleIndex++;

    if (titleIndex >= titles.length) {

        titleIndex = 0;

    }

    document.title = titles[titleIndex];

}, 3000);

/* =====================================================
CONSOLE MESSAGE
===================================================== */

console.clear();

console.log("%cKodak Memories", "font-size:28px;color:#8b5e3c;font-weight:bold;");

console.log("%cMade with 🤎 by Akbar", "font-size:16px;color:#b8860b;");

console.log("%cHappy National Girlfriend Day!", "font-size:14px;color:#444;");

/* =====================================================
THE END
===================================================== */
