/* ==========================================================
   CyberTerminal v2
   boot.js
   Cinematic Boot Sequence
========================================================== */

const bootLines = [

"Powering CyberTerminal...",
"Checking BIOS............................OK",
"Checking Memory..........................OK",
"Loading Security Modules................OK",
"Loading Threat Intelligence.............OK",
"Loading AI Engine.......................OK",
"Connecting GitHub.......................OK",
"Verifying Portfolio.....................OK",
"Authentication Successful",
"",
"Welcome back, Krish."

];

const bootLog = document.getElementById("boot-log");
const progress = document.getElementById("loading-progress");
const bootScreen = document.getElementById("boot-screen");
const app = document.getElementById("app");
const status = document.getElementById("boot-status");

let currentLine = 0;

function typeBootLine(){

    if(currentLine >= bootLines.length){

        status.textContent = "ACCESS GRANTED";

        setTimeout(() => {

            bootScreen.classList.add("fade-out");

            setTimeout(() => {

                bootScreen.style.display = "none";

                app.classList.remove("hidden");

                document.getElementById("terminal").focus();

            },1000);

        },800);

        return;

    }

    const p = document.createElement("p");

    p.textContent = bootLines[currentLine];

    bootLog.appendChild(p);

    bootLog.scrollTop = bootLog.scrollHeight;

    progress.style.width =
        ((currentLine + 1) / bootLines.length * 100) + "%";

    currentLine++;

    setTimeout(typeBootLine,550);

}

window.addEventListener("load",()=>{

    setTimeout(typeBootLine,600);

});