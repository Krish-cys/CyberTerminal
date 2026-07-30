/*=====================================================
    KRISH OS
======================================================*/

window.addEventListener("load", () => {

    console.log("Initializing KRISH OS...");

    if(typeof Dashboard !== "undefined")
        Dashboard.init();

    if(typeof Widgets !== "undefined")
        Widgets.init();

    if(typeof Clock !== "undefined")
        Clock.init();

    if(typeof Matrix !== "undefined")
        Matrix.init();

    if(typeof NotificationCenter !== "undefined")
        NotificationCenter.init();

});