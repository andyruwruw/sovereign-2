window.onload = function() 
{
    let game = new Vue                                  // VUE OBJECT
    ({
        el: '#about',
        data: {
            start: 1,
            makeingOf: 0,
            howToPlay: 0,
            actions: 0,
            buildings: 0,
            disasters: 0,
            specials: 0,
            cheats: 0,
            SOUNDS: {click: {sound: "click", volume: .3}
        
                    },
            starving: 1,
            invasions: 0,
            satisfaction: 0,
        },
        methods:
        {
            makingOfPage()
            {
                this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                this.makeingOf = 1;
                this.howToPlay = 0;
                this.actions = 0;
                this.buildings = 0;
                this.disasters = 0;
                this.specials = 0;
                this.start = 0;
                this.cheats = 0;
            },
            howToPlayPage()
            {
                this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                this.makeingOf = 0;
                this.howToPlay = 1;
                this.actions = 0;
                this.buildings = 0;
                this.disasters = 0;
                this.specials = 0;
                this.start = 0;
                this.cheats = 0;
            },
            actionsPage()
            {
                this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                this.makeingOf = 0;
                this.howToPlay = 0;
                this.actions = 1;
                this.buildings = 0;
                this.disasters = 0;
                this.specials = 0;
                this.start = 0;
                this.cheats = 0;
            },
            buildingsPage()
            {
                this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                this.makeingOf = 0;
                this.howToPlay = 0;
                this.actions = 0;
                this.buildings = 1;
                this.disasters = 0;
                this.specials = 0;
                this.start = 0;
                this.cheats = 0;
            },
            disastersPage()
            {
                this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                this.makeingOf = 0;
                this.howToPlay = 0;
                this.actions = 0;
                this.buildings = 0;
                this.disasters = 1;
                this.specials = 0;
                this.start = 0;
                this.cheats = 0;
            },
            specialsPage()
            {
                this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                this.makeingOf = 0;
                this.howToPlay = 0;
                this.actions = 0;
                this.buildings = 0;
                this.disasters = 0;
                this.specials = 1;
                this.start = 0;
                this.cheats = 0;
            },
            cheatsPage()
            {
                this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                this.makeingOf = 0;
                this.howToPlay = 0;
                this.actions = 0;
                this.buildings = 0;
                this.disasters = 0;
                this.specials = 0;
                this.start = 0;
                this.cheats = 1;
            },
            starvingPage()
            {
                this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);

                this.starving = 1;
                this.invasions = 0;
                this.satisfaction = 0;
            },
            invasionsPage()
            {
                this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);

                this.starving = 0;
                this.invasions = 1;
                this.satisfaction = 0;
            },
            satisfactionPage()
            {
                this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);

                this.starving = 0;
                this.invasions = 0;
                this.satisfaction = 1;
            },
            playSound(sound, volume)
            {
                var media = document.getElementById(sound);
                media.volume = volume;
                const playPromise = media.play();
                if (playPromise !== null){
                    playPromise.catch(() => { media.play(); })
                }
            },
        },
        computed:
        {

        }
    })
}

function playMusic()
{
    var media = document.getElementById("myMusic");
    media.volume = 0.3;
    const playPromise = media.play();
    if (playPromise !== null){
        playPromise.catch(() => { media.play(); })

    }
}