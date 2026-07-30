const lines=[

"Initializing BIOS...",

"Loading Security Modules...",

"Loading AI Engine...",

"Loading Portfolio...",

"Checking Integrity...",

"Access Granted."

];

const boot=document.getElementById("boot-text");

let i=0;

function nextLine(){

    if(i<lines.length){

        boot.innerHTML+=lines[i]+"<br>";

        i++;

        setTimeout(nextLine,700);

    }

    else{

        setTimeout(()=>{

            document.getElementById("boot-screen").style.display="none";

            document.getElementById("terminal-container").classList.remove("hidden");

            document.getElementById("command-input").focus();

        },1000);

    }

}

nextLine();