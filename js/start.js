window.onload = function() 
{
    let start = new Vue                                  // VUE OBJECT
    ({
        el: '#start',
        data: {
            currentText: 0,
            TEXT: [{text: "Your home sits on the edge of the woods.", button: "Cool", sound: 0},
             {text:"Usually undisturbed by robbers or travelers.", button: "That's Good", sound: 0}, 
             {text: "Usually.", button: "Oh", sound: 0}, 
             {text: "You hear a shallow knock on the door.", button: "Open Door", sound: 1}, 
             {text: "A worn traveler lays collapsed at your door.", button: "Bring Her In", sound: 2}, 
             {text: "She's ice cold and barely muttering.", button: "Put Log on Fire", sound: 3}, 
             {text: "She begins to become more responsive.", button: "Thank Goodness", sound: 0}, 
             {text: "She sits up and huddles by the fire.", button: "Who are you?", sound: 0}, 
             {text: "She says shes a builder. Her town was just burned down.", button: "...", sound: 4},
             {text: "She says together, you both can help people.", button: "game", sound: 4}, ],
             game: 0,
             startBool: 0,
        },
        methods:
        {
            clickFunction()
            {
                console.log("CLICK");
                if (!this.startBool)
                {
                    document.getElementById("interaction").style.paddingTop = "0px";
                    this.start();
                }
                else
                {
                    this.currentText += 1;
                    if (this.TEXT[this.currentText].button == "game")
                    {
                        this.game = 1;
                    }
                    document.getElementById("text").innerHTML = this.TEXT[this.currentText].text;
                    document.getElementById("interaction").innerHTML = this.TEXT[this.currentText].button;
                    if (this.TEXT[this.currentText].sound > 0)
                    {
                        switch (this.TEXT[this.currentText].sound)
                        {
                            case 0:
                                break;
                            case 1:
                                this.playNoise("knock", 1);
                                break;
                            case 2:
                                this.playNoise("opendoor", .5);
                                break;
                            case 3:
                                this.playNoise("thunder", .2);
                                break;
                            case 4:
                                this.playNoise("builder", .3);
                            default:
                        }
                    }
                }
            },
            start()
            {
                document.getElementById("text").innerHTML = this.TEXT[this.currentText].text;
                document.getElementById("interaction").innerHTML = this.TEXT[this.currentText].button;
                this.startBool = 1;
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