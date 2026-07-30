/* ==========================================================
   CyberTerminal v2
   terminal.js
   Interactive Terminal Engine
========================================================== */

const terminal = document.getElementById("terminal");
const output = document.getElementById("terminal-output");

const history = [];
let historyIndex = -1;

/* ===========================
   COMMAND DATABASE
=========================== */

const commands = {

help: `
<div class="command-box">

<h3>Available Commands</h3>

<div class="help-grid">

<span>help</span>
<span>about</span>

<span>whoami</span>
<span>projects</span>

<span>skills</span>
<span>resume</span>

<span>github</span>
<span>contact</span>

<span>clear</span>
<span>neofetch</span>

</div>

</div>
`,

about: `
<div class="terminal-table">

<div>Name</div>
<div>Krish</div>

<div>Role</div>
<div>Cyber Security Student</div>

<div>Focus</div>
<div>AI Security & Defensive Security</div>

<div>Interests</div>
<div>CTFs • AI • Web Security • Malware Analysis</div>

</div>
`,

whoami: `
<div class="terminal-table">

<div>User</div>
<div>Krish</div>

<div>Status</div>
<div class="success">ONLINE</div>

<div>Shell</div>
<div>CyberTerminal v2</div>

<div>Mode</div>
<div>Interactive Portfolio</div>

</div>
`,

projects: `

<div class="project-card">

<h3>🛡 CipherWatch</h3>

<p>Quantum Readiness Scanner</p>

</div>

<div class="project-card">

<h3>⚡ RansomShield</h3>

<p>Offline AI EDR</p>

</div>

<div class="project-card">

<h3>🤖 JARVIS</h3>

<p>Personal AI Assistant</p>

</div>

`,

skills: `

<div class="terminal-table">

<div>Python</div>
<div>★★★★★</div>

<div>Java</div>
<div>★★★★☆</div>

<div>C</div>
<div>★★★★☆</div>

<div>Bash</div>
<div>★★★★☆</div>

<div>Git</div>
<div>★★★★☆</div>

<div>Linux</div>
<div>★★★★★</div>

</div>

`,

resume: `
<p>
Resume module coming soon.
</p>
`,

github: `
<p>
GitHub:
<br><br>

<a href="https://github.com/Krish-cys" target="_blank">

https://github.com/Krish-cys

</a>

</p>
`,

contact: `
<p>

Email

<br><br>

jaikrishnap230605@gmail.com

</p>
`,

neofetch: `

<pre class="ascii-output">

          ██████████

      KRISH TERMINAL

────────────────────────────

OS        CyberTerminal OS

User      Krish

Shell     JavaScript

Editor    VS Code

Status    ONLINE

Projects  3

Language  Python Java C Bash

</pre>

`

};

/* ===========================
   PRINT
=========================== */

function print(html){

    output.innerHTML += html;

    output.scrollTop = output.scrollHeight;

}

/* ===========================
   EXECUTE
=========================== */

function execute(command){

    if(command==="") return;

    print(

`<p class="command">

krish@cyberterminal:~$ ${command}

</p>`

    );

    if(command==="clear"){

        output.innerHTML="";

        return;

    }

    if(commands[command]){

        print(commands[command]);

    }

    else{

        print(

`<p class="error">

Command not found:
${command}

</p>`

        );

    }

}

/* ===========================
   ENTER
=========================== */

terminal.addEventListener("keydown",e=>{

    if(e.key==="Enter"){

        const cmd=terminal.value.trim();

        history.push(cmd);

        historyIndex=history.length;

        execute(cmd);

        terminal.value="";

    }

});

/* ===========================
   HISTORY
=========================== */

terminal.addEventListener("keydown",e=>{

    if(e.key==="ArrowUp"){

        if(historyIndex>0){

            historyIndex--;

            terminal.value=history[historyIndex];

        }

    }

    if(e.key==="ArrowDown"){

        if(historyIndex<history.length-1){

            historyIndex++;

            terminal.value=history[historyIndex];

        }

        else{

            historyIndex=history.length;

            terminal.value="";

        }

    }

});