/*=====================================================
    KRISH OS
    widgets.js
======================================================*/

const Widgets = {

    cpu: 18,
    ram: 32,
    disk: 21,
    uptime: 0,

    init() {

        this.update();

        setInterval(() => {

            this.update();

        }, 2000);

    },

    random(min, max) {

        return Math.floor(Math.random() * (max - min + 1)) + min;

    },

    update() {

        this.cpu = this.random(10, 55);

        this.ram = this.random(25, 70);

        this.disk = this.random(15, 40);

        this.uptime++;

        const cpu = document.getElementById("cpu");
        const memory = document.getElementById("memory");
        const disk = document.getElementById("disk");
        const uptime = document.getElementById("uptime");

        if(cpu)
            cpu.textContent = this.cpu + "%";

        if(memory)
            memory.textContent = this.ram + "%";

        if(disk)
            disk.textContent = this.disk + "%";

        if(uptime)
            uptime.textContent = this.formatTime();

    },

    formatTime(){

        let h = Math.floor(this.uptime/3600);

        let m = Math.floor((this.uptime%3600)/60);

        let s = this.uptime%60;

        return `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;

    }

};