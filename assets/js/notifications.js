/*=====================================================
    Notification Center
======================================================*/

const NotificationCenter = {

    init(){

        this.notify("Dashboard Initialized");

        setTimeout(()=>{

            this.notify("Threat Engine Active");

        },1500);

        setTimeout(()=>{

            this.notify("GitHub Module Loaded");

        },3000);

    },

    notify(text){

        console.log("[NOTIFY]",text);

    }

};