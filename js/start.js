window.onload = function() 
{
    let start = new Vue                                  // VUE OBJECT
    ({
        el: '#start',
        data: {
            time: 0,
            SOUNDS: {click: {sound: "click", volume: .3},
                     fire: {sound: "fire", volume: .5}
                    },
            activeInteraction: 1,
            activeText: 0,
            done: 0,
            moveTime: 1,
            startBool: 0,
            game: 0,
            knocked: 0,
        },
        methods:
        {
            refreshTime()
            {
                console.log(this.time);
                console.log(this.moveTime);
                if (this.moveTime)
                {
                    this.time += 1;
                }
                this.checkForEvents();
            },
            checkForEvents()
            {
                if (this.time == 200)
                {
                    document.getElementById("text").innerHTML = "Your home sits on the edge of the woods.";
                    document.getElementById("interaction").innerHTML = "";
                    this.activeText = 1;
                    this.activeInteraction = 0;
                    this.moveTime = 1;
                }
                if (this.time == 650)
                {
                    document.getElementById("text").innerHTML = "";
                    document.getElementById("interaction").innerHTML = "";
                    this.activeText = 0;
                    this.activeInteraction = 0;
                    this.moveTime = 1;
                }
                if (this.time == 740)
                {
                    document.getElementById("text").innerHTML = "Usually undisturbed by robbers or travelers.";
                    document.getElementById("interaction").innerHTML = "";
                    this.activeText = 1;
                    this.activeInteraction = 0;
                    this.moveTime = 1;
                }
                if (this.time == 1000)
                {
                    document.getElementById("text").innerHTML = "Usually.";
                    document.getElementById("interaction").innerHTML = "";
                    this.activeText = 1;
                    this.activeInteraction = 0;
                    this.moveTime = 1;
                }
                if (this.time == 1150)
                {
                    document.getElementById("text").innerHTML = "";
                    document.getElementById("interaction").innerHTML = "";
                    this.activeText = 1;
                    this.activeInteraction = 0;
                    this.moveTime = 1;
                }

                if (this.time == 1300)
                {
                    if (!this.knocked)
                    {
                        this.playNoise("knock", 1);
                        this.knocked = 1;
                    }
                    document.getElementById("text").innerHTML = "You hear a shallow knock";
                    this.activeText = 1;
                    this.activeInteraction = 1;
                    this.moveTime = 0;
                    document.getElementById("interaction").innerHTML = "Open Door";
                }
                if (this.time == 1355)
                {
                    document.getElementById("text").innerHTML = "A worn traveler lays collapsed at your door.";
                    this.activeText = 1;
                    this.activeInteraction = 1;
                    document.getElementById("interaction").innerHTML = "Bring Her In";
                    this.moveTime = 0;
                }
                if (this.time == 1450)
                {
                    this.playNoise("thunder", .2);
                    document.getElementById("text").innerHTML = "She's ice cold and barely muttering.";
                    document.getElementById("interaction").innerHTML = "";
                    this.activeText = 1;
                    this.activeInteraction = 0;
                    this.moveTime = 1;
                }
                if (this.time == 1850)
                {
                    
                    document.getElementById("text").innerHTML = "";
                    document.getElementById("interaction").innerHTML = "";
                    this.activeText = 1;
                    this.activeInteraction = 0;
                    this.moveTime = 1;
                }
                if (this.time == 2100)
                {
                    document.getElementById("text").innerHTML = "She begins to become more responsive.";
                    document.getElementById("interaction").innerHTML = "";
                    this.activeText = 1;
                    this.activeInteraction = 0;
                    this.moveTime = 1;
                }
                if (this.time == 2500)
                {
                    document.getElementById("text").innerHTML = "";
                    document.getElementById("interaction").innerHTML = "";
                    this.activeText = 1;
                    this.activeInteraction = 0;
                    this.moveTime = 1;
                }

                if (this.time == 2700)
                {
                    document.getElementById("text").innerHTML = "She sits up and huddles by the fire.";
                    document.getElementById("interaction").innerHTML = "Ask Her Who She Is";
                    this.activeText = 1;
                    this.activeInteraction = 0;
                    this.moveTime = 0;
                }
                if (this.time == 2770)
                {
                    document.getElementById("text").innerHTML = "She says shes a builder. Her town was just burned down.";
                    document.getElementById("interaction").innerHTML = "";
                    this.activeText = 1;
                    this.game= 0;
                    this.activeInteraction = 0;
                    this.moveTime = 1;
                }

                if (this.time == 3150)
                {
                    document.getElementById("text").innerHTML = "She says together, you both can help people.";
                    this.activeText = 1;
                    this.game= 1;
                    this.activeInteraction = 0;
                    this.moveTime = 0;
                }
            },
            clickFunction()
            {
                console.log("CLICK");
                if (!this.startBool)
                {
                    this.start();
                }
                else if (this.moveTime == 0)
                {
                    this.time += 50;
                    this.moveTime = 1;
                }
            },
            start()
            {
                document.getElementById("interaction").innerHTML = "";
                this.activeInteraction = 0;
                this.startBool = 1;
                setInterval(this.refreshTime, 10);
            },
            playNoise(sound, volume)
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

        },
        created()
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