const input=document.getElementById("command-input");

const output=document.getElementById("output");

input.addEventListener("keydown",(e)=>{

    if(e.key!=="Enter") return;

    const cmd=input.value.trim();

    output.innerHTML+=`<p>guest@portfolio:~$ ${cmd}</p>`;

    switch(cmd){

        case "help":

            output.innerHTML+=`
            <p>
            help<br>
            about<br>
            projects<br>
            skills<br>
            github<br>
            contact<br>
            clear
            </p>
            `;

            break;

        case "about":

            output.innerHTML+=`
            <p>
            P Jai Krishna<br>
            Cyber Security Student<br>
            AI Security Researcher<br>
            CTF Player
            </p>
            `;

            break;

        case "clear":

            output.innerHTML="";

            break;

        default:

            output.innerHTML+=`<p>Unknown command.</p>`;

    }

    input.value="";

    output.scrollTop=output.scrollHeight;

});