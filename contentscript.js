function executeJS(rawCode) {
    var s = document.createElement('script');
    s.textContent = rawCode;
    s.onload = function () {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
}

window.addEventListener("load", function (event) {
    if ('ScreebObject' in window || '$screeb' in window)
        return;

    // executeJS(`
    //     (function (w,d,s,o,f,js,fjs) {
    //         w['ScreebObject']=o;w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
    //         js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];js.type='text/javascript';
    //         js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);
    //     }(window,document,'script','$screeb','http://localhost:2020/tag.js'));
    //     $screeb('init', 'c796994e-f2dd-41c5-a88c-91d54fc42b0e');
    //     // $screeb('campaign.start', '0e1cf96a-244b-48e3-a36c-90e52b6b0599');
    // `);

    executeJS(`
        (function (w,d,s,o,f,js,fjs) {
            w['ScreebObject']=o;w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
            js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];js.type='text/javascript';
            js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);
        }(window,document,'script','$screeb','https://t.screeb.app/tag.js'));
        $screeb('init', 'a13482eb-0687-4bf3-a499-97126e6e110c');
        // $screeb('campaign.start', '8da9d644-2ff5-40af-949c-34f17960482e');
    `);
});