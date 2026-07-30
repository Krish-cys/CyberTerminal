/* ==========================================================
   CyberTerminal v2
   terminal.js
========================================================== */

const terminal = document.getElementById("terminal");
const output = document.getElementById("terminal-output");

let history = [];
let historyIndex = -1;

/* ==========================
   PRINT
========================== */

function print(html) {

    output.innerHTML += html;
    output.scrollTop = output.scrollHeight;

}

/* ==========================
   TYPEWRITER EFFECT
========================== */

function typeHTML(html, speed = 8) {

    let i = 0;

    const box = document.createElement("div");

    output.appendChild(box);

    const timer = setInterval(() => {

        box.innerHTML = html.substring(0, i);

        output.scrollTop = output.scrollHeight;

        i++;

        if (i > html.length) {

            clearInterval(timer);

        }

    }, speed);

}

/* ==========================
   COMMAND EXECUTOR
========================== */

function execute(command) {

    if (!command.trim()) return;

    print(`<p class="command">krish@cyberterminal:~$ ${command}</p>`);

    const args = command.trim().split(" ");

    const cmd = args[0].toLowerCase();

    /* ---------- clear ---------- */

    if (cmd === "clear") {

        output.innerHTML = "";

        return;

    }

    /* ---------- date ---------- */

    if (cmd === "date") {

        typeHTML(`<p>${new Date().toDateString()}</p>`);

        return;

    }

    /* ---------- time ---------- */

    if (cmd === "time") {

        typeHTML(`<p>${new Date().toLocaleTimeString()}</p>`);

        return;

    }

    /* ---------- open ---------- */

    if (cmd === "open") {

        if (args.length < 2) {

            typeHTML("<p class='warning'>Usage : open project-name</p>");

            return;

        }

        const page = args[1].toLowerCase();

        if (page === "cipherwatch") {

            window.location.href = "pages/cipherwatch.html";

            return;

        }

        if (page === "ransomshield") {

            window.location.href = "pages/ransomshield.html";

            return;

        }

        if (page === "jarvis") {

            window.location.href = "pages/jarvis.html";

            return;

        }

        typeHTML("<p class='error'>Unknown project.</p>");

        return;

    }

    /* ---------- theme ---------- */

    if (cmd === "theme") {

        document.body.classList.toggle("light");

        typeHTML("<p>Theme changed.</p>");

        return;

    }

    /* ---------- matrix ---------- */

    if (cmd === "matrix") {

        const canvas = document.getElementById("matrix");

        canvas.style.display =
            canvas.style.display === "none"
                ? "block"
                : "none";

        typeHTML("<p>Matrix effect toggled.</p>");

        return;

    }

    /* ---------- COMMAND DATABASE ---------- */

    if (COMMANDS[cmd]) {

        typeHTML(COMMANDS[cmd]);

    }

    else {

        typeHTML(

`<p class="error">

Unknown command.

Type <span class="cmd">help</span>

</p>`

        );

    }

}

/* ==========================
   ENTER
========================== */

terminal.addEventListener("keydown", e => {

    if (e.key === "Enter") {

        const cmd = terminal.value.trim();

        history.push(cmd);

        historyIndex = history.length;

        execute(cmd);

        terminal.value = "";

    }

});

/* ==========================
   HISTORY
========================== */

terminal.addEventListener("keydown", e => {

    if (e.key === "ArrowUp") {

        e.preventDefault();

        if (historyIndex > 0) {

            historyIndex--;

            terminal.value = history[historyIndex];

        }

    }

    if (e.key === "ArrowDown") {

        e.preventDefault();

        if (historyIndex < history.length - 1) {

            historyIndex++;

            terminal.value = history[historyIndex];

        }

        else {

            historyIndex = history.length;

            terminal.value = "";

        }

    }

});

/* ==========================
   TAB AUTOCOMPLETE
========================== */

terminal.addEventListener("keydown", e => {

    if (e.key !== "Tab") return;

    e.preventDefault();

    const value = terminal.value.toLowerCase();

    const keys = Object.keys(COMMANDS);

    const match = keys.find(k => k.startsWith(value));

    if (match) {

        terminal.value = match;

    }

});