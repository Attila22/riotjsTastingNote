riot.tag2('tasting-note', '<div id="wrapper"> <section> <ul id="gallery"> <li each="{p in opts.content}"> {p.wineName} {p.vintageTag} {p.wineryName}{p.vintageImg} <a href=""> <img riot-src="http://188.166.241.7/wine_thumbnail/{p.vintageImg}.jpg" alt=""> </a> </li> </ul>', '', '', function(opts) {
        this.on('mount', function(){
            console.log('Riot mount event fired')
            opts.callback(this)
    })

    this.on('data_loaded', function(wines){
        opts.content = wines
        this.update()
    })
}, '{ }');
riot.tag2('wine-note', '<section> <ul id="gallery"> <li> <a href=""> <img src="" alt=""> <p>First wine.</p> </a> </li> </ul> </section>', '', '', function(opts) {
});