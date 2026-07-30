/* ==========================================================
   CyberTerminal v2
   app.js
   Application Initialization
========================================================== */

/* ===========================
   LIVE CLOCK
=========================== */

function updateClock() {

    const clock = document.getElementById("clock");

    if (!clock) return;

    const now = new Date();

    clock.textContent = now.toLocaleTimeString("en-US", {
        hour12: false
    });

}

setInterval(updateClock, 1000);
updateClock();

/* ===========================
   MATRIX BACKGROUND
=========================== */

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

const chars =
"01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&@";

const fontSize = 16;

let columns = Math.floor(canvas.width / fontSize);

let drops = [];

function initDrops() {

    columns = Math.floor(canvas.width / fontSize);

    drops = [];

    for (let i = 0; i < columns; i++) {

        drops[i] = Math.random() * -100;

    }

}

initDrops();

window.addEventListener("resize", initDrops);

function drawMatrix() {

    ctx.fillStyle = "rgba(5,7,13,0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff88";
    ctx.font = fontSize + "px JetBrains Mono";

    for (let i = 0; i < drops.length; i++) {

        const text =
            chars[Math.floor(Math.random() * chars.length)];

        ctx.fillText(
            text,
            i * fontSize,
            drops[i] * fontSize
        );

        if (
            drops[i] * fontSize > canvas.height &&
            Math.random() > 0.975
        ) {

            drops[i] = 0;

        }

        drops[i]++;

    }

}

setInterval(drawMatrix, 35);

/* ===========================
   TERMINAL AUTOFOCUS
=========================== */

window.addEventListener("click", () => {

    const terminal = document.getElementById("terminal");

    if (terminal) {

        terminal.focus();

    }

});

/* ===========================
   STARTUP MESSAGE
=========================== */

window.addEventListener("load", () => {

    console.log(
        "%cCyberTerminal v2 Loaded",
        "color:#00ff88;font-size:18px;font-weight:bold;"
    );

    console.log(
        "%cDeveloped by Krish",
        "color:#00d9ff;font-size:14px;"
    );

});

/* ===========================
   FUTURE MODULES
=========================== */

// GitHub API
// JSON Loader
// Theme Switcher
// AI Assistant
// Blog Loader
// Notifications
// Visitor Counter
