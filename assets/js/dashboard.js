/* ==========================================================
   CyberTerminal v2
   dashboard.js
   Dynamic Data Loader
========================================================== */

const Dashboard = {

    projects: [],
    skills: [],
    timeline: [],
    certifications: [],
    ctf: [],

    async init() {

        await Promise.all([

            this.loadProjects(),
            this.loadSkills(),
            this.loadTimeline(),
            this.loadCertifications(),
            this.loadCTF()

        ]);

        this.renderSidebarProjects();
        this.renderSkills();

        console.log("Dashboard Loaded");

    },

    async loadProjects() {

        const res = await fetch("data/projects.json");
        this.projects = await res.json();

    },

    async loadSkills() {

        const res = await fetch("data/skills.json");
        this.skills = await res.json();

    },

    async loadTimeline() {

        const res = await fetch("data/timeline.json");
        this.timeline = await res.json();

    },

    async loadCertifications() {

        const res = await fetch("data/certifications.json");
        this.certifications = await res.json();

    },

    async loadCTF() {

        const res = await fetch("data/ctf.json");
        this.ctf = await res.json();

    },

    renderSidebarProjects() {

        const menu = document.querySelector(".menu ul");

        if (!menu) return;

        menu.innerHTML = "";

        this.projects.forEach(project => {

            const li = document.createElement("li");

            li.innerHTML = "📁 " + project.name;

            menu.appendChild(li);

        });

    },

    renderSkills() {

        console.table(this.skills);

    }

};

window.addEventListener("load", () => {

    Dashboard.init();

});