    <tasting-note>


        <div id="wrapper">
            <section>
                <ul id="gallery">
                     <li each ={p in opts.content}> {p.wineName} {p.vintageTag} {p.wineryName}{p.vintageImg}

                        <a href="">
                            <img src="http://188.166.241.7/wine_thumbnail/{p.vintageImg}.jpg" alt="">
                        </a>
                    </li>
                </ul>

        <script>
            this.on('mount', function(){
                console.log('Riot mount event fired')
                opts.callback(this)
        })

        this.on('data_loaded', function(wines){
            opts.content = wines
            this.update()
        })
        </script>
    </tasting-note>