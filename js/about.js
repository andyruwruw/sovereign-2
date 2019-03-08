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
            SOUNDS: {click: {sound: "click", volume: .2}
        
                    },
            starving: 1,
            invasions: 0,
            satisfaction: 0,
            highscores: 0,

            HSLIST: [{username: "",days: 0,invasions: 0, disasters: 0,maxpop: 0,actions: 0},
                     {username: "",days: 0,invasions: 0, disasters: 0,maxpop: 0,actions: 0},
                     {username: "",days: 0,invasions: 0, disasters: 0,maxpop: 0,actions: 0},
                     {username: "",days: 0,invasions: 0, disasters: 0,maxpop: 0,actions: 0},
                     {username: "",days: 0,invasions: 0, disasters: 0,maxpop: 0,actions: 0},
                     {username: "",days: 0,invasions: 0, disasters: 0,maxpop: 0,actions: 0},
                     {username: "",days: 0,invasions: 0, disasters: 0,maxpop: 0,actions: 0},
                     {username: "",days: 0,invasions: 0, disasters: 0,maxpop: 0,actions: 0},
                     {username: "",days: 0,invasions: 0, disasters: 0,maxpop: 0,actions: 0},
                     {username: "",days: 0,invasions: 0, disasters: 0,maxpop: 0,actions: 0}],
            highscoreHolderActions: 0,
            highscoreHolderDisasters: 0,
            highscoreHolderInvasions: 0,
            highscoreHolderMaxPop: 0,
            viewingHighscoreHolders: 0,
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
                this.highscores = 0;
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
                this.highscores = 0;
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
                this.highscores = 0;
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
                this.highscores = 0;
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
                this.highscores = 0;
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
                this.highscores = 0;
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
                this.highscores = 0;
            },
            highscorePage()
            {
                this.updateHighScores();
                this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                this.makeingOf = 0;
                this.howToPlay = 0;
                this.actions = 0;
                this.buildings = 0;
                this.disasters = 0;
                this.specials = 0;
                this.start = 0;
                this.cheats = 0;
                this.highscores = 1;
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
            updateHighScores()
            {
                var days;
                var name;
                var actions;
                var disasters;
                var invasions;
                var maxpop;
                
                firebase.database().ref("highscore").on("value", function (snapshot) {
                days = snapshot.child("days").val();
                name = snapshot.child("username").val();
                actions = snapshot.child("actions").val();
                disasters = snapshot.child("disasters").val();
                invasions = snapshot.child("invasions").val();
                maxpop = snapshot.child("maxpop").val();
                });
                  
                this.HSLIST[0].days = days;
                this.HSLIST[0].username = name;
                this.HSLIST[0].actions = actions;
                this.HSLIST[0].disasters = disasters;
                this.HSLIST[0].invasions = invasions;
                this.HSLIST[0].maxpop = maxpop;

                firebase.database().ref("highscore2").on("value", function (snapshot) {
                days = snapshot.child("days").val();
                name = snapshot.child("username").val();
                actions = snapshot.child("actions").val();
                disasters = snapshot.child("disasters").val();
                invasions = snapshot.child("invasions").val();
                maxpop = snapshot.child("maxpop").val();
                });

                this.HSLIST[1].days = days;
                this.HSLIST[1].username = name;
                this.HSLIST[1].actions = actions;
                this.HSLIST[1].disasters = disasters;
                this.HSLIST[1].invasions = invasions;
                this.HSLIST[1].maxpop = maxpop;

                firebase.database().ref("highscore3").on("value", function (snapshot) {
                days = snapshot.child("days").val();
                name = snapshot.child("username").val();
                actions = snapshot.child("actions").val();
                disasters = snapshot.child("disasters").val();
                invasions = snapshot.child("invasions").val();
                maxpop = snapshot.child("maxpop").val();
                });
    
                this.HSLIST[2].days = days;
                this.HSLIST[2].username = name;
                this.HSLIST[2].actions = actions;
                this.HSLIST[2].disasters = disasters;
                this.HSLIST[2].invasions = invasions;
                this.HSLIST[2].maxpop = maxpop;

                firebase.database().ref("highscore4").on("value", function (snapshot) {
                days = snapshot.child("days").val();
                name = snapshot.child("username").val();
                actions = snapshot.child("actions").val();
                disasters = snapshot.child("disasters").val();
                invasions = snapshot.child("invasions").val();
                maxpop = snapshot.child("maxpop").val();
                });

                this.HSLIST[3].days = days;
                this.HSLIST[3].username = name;
                this.HSLIST[3].actions = actions;
                this.HSLIST[3].disasters = disasters;
                this.HSLIST[3].invasions = invasions;
                this.HSLIST[3].maxpop = maxpop;

                firebase.database().ref("highscore5").on("value", function (snapshot) {
                days = snapshot.child("days").val();
                name = snapshot.child("username").val();
                actions = snapshot.child("actions").val();
                disasters = snapshot.child("disasters").val();
                invasions = snapshot.child("invasions").val();
                maxpop = snapshot.child("maxpop").val();
                });

                this.HSLIST[4].days = days;
                this.HSLIST[4].username = name;
                this.HSLIST[4].actions = actions;
                this.HSLIST[4].disasters = disasters;
                this.HSLIST[4].invasions = invasions;
                this.HSLIST[4].maxpop = maxpop;

                firebase.database().ref("highscore6").on("value", function (snapshot) {
                days = snapshot.child("days").val();
                name = snapshot.child("username").val();
                actions = snapshot.child("actions").val();
                disasters = snapshot.child("disasters").val();
                invasions = snapshot.child("invasions").val();
                maxpop = snapshot.child("maxpop").val();
                });

                this.HSLIST[5].days = days;
                this.HSLIST[5].username = name;
                this.HSLIST[5].actions = actions;
                this.HSLIST[5].disasters = disasters;
                this.HSLIST[5].invasions = invasions;
                this.HSLIST[5].maxpop = maxpop;

                firebase.database().ref("highscore7").on("value", function (snapshot) {
                days = snapshot.child("days").val();
                name = snapshot.child("username").val();
                actions = snapshot.child("actions").val();
                disasters = snapshot.child("disasters").val();
                invasions = snapshot.child("invasions").val();
                maxpop = snapshot.child("maxpop").val();
                });

                this.HSLIST[6].days = days;
                this.HSLIST[6].username = name;
                this.HSLIST[6].actions = actions;
                this.HSLIST[6].disasters = disasters;
                this.HSLIST[6].invasions = invasions;
                this.HSLIST[6].maxpop = maxpop;

                firebase.database().ref("highscore8").on("value", function (snapshot) {
                days = snapshot.child("days").val();
                name = snapshot.child("username").val();
                actions = snapshot.child("actions").val();
                disasters = snapshot.child("disasters").val();
                invasions = snapshot.child("invasions").val();
                maxpop = snapshot.child("maxpop").val();
                });

                this.HSLIST[7].days = days;
                this.HSLIST[7].username = name;
                this.HSLIST[7].actions = actions;
                this.HSLIST[7].disasters = disasters;
                this.HSLIST[7].invasions = invasions;
                this.HSLIST[7].maxpop = maxpop;

                firebase.database().ref("highscore9").on("value", function (snapshot) {
                days = snapshot.child("days").val();
                name = snapshot.child("username").val();
                actions = snapshot.child("actions").val();
                disasters = snapshot.child("disasters").val();
                invasions = snapshot.child("invasions").val();
                maxpop = snapshot.child("maxpop").val();
                });

                this.HSLIST[8].days = days;
                this.HSLIST[8].username = name;
                this.HSLIST[8].actions = actions;
                this.HSLIST[8].disasters = disasters;
                this.HSLIST[8].invasions = invasions;
                this.HSLIST[8].maxpop = maxpop;

                firebase.database().ref("highscore10").on("value", function (snapshot) {
                days = snapshot.child("days").val();
                name = snapshot.child("username").val();
                actions = snapshot.child("actions").val();
                disasters = snapshot.child("disasters").val();
                invasions = snapshot.child("invasions").val();
                maxpop = snapshot.child("maxpop").val();
                });

                this.HSLIST[9].days = days;
                this.HSLIST[9].username = name;
                this.HSLIST[9].actions = actions;
                this.HSLIST[9].disasters = disasters;
                this.HSLIST[9].invasions = invasions;
                this.HSLIST[9].maxpop = maxpop; 
                console.log("Loaded Highscores");
            },
            backtotopten()
            {
                this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                this.viewingHighscoreHolders = 0;
            },
            setViewHighscore1()
            {
                this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                if (this.viewingHighscoreHolders == 1)
                {
                    this.viewingHighscoreHolders = 0;
                }
                else
                {
                    this.viewingHighscoreHolders = 1
                    this.highScoreInformation();
                }
            },
            setViewHighscore2()
            {
                this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                if (this.viewingHighscoreHolders == 2)
                {
                    this.viewingHighscoreHolders = 0;
                }
                else
                {
                    this.viewingHighscoreHolders = 2
                    this.highScoreInformation();
                }
            },
            setViewHighscore3()
            {
                this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                if (this.viewingHighscoreHolders == 3)
                {
                    this.viewingHighscoreHolders = 0;
                }
                else
                {
                    this.viewingHighscoreHolders = 3
                    this.highScoreInformation();
                }
            },
            setViewHighscore4()
            {
                this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                if (this.viewingHighscoreHolders == 4)
                {
                    this.viewingHighscoreHolders = 0;
                }
                else
                {
                    this.viewingHighscoreHolders = 4
                    this.highScoreInformation();
                }
            },
            setViewHighscore5()
            {
                this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                if (this.viewingHighscoreHolders == 1)
                {
                    this.viewingHighscoreHolders = 0;
                }
                else
                {
                    this.viewingHighscoreHolders = 5
                    this.highScoreInformation();
                }
            },
            setViewHighscore6()
            {
                this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                if (this.viewingHighscoreHolders == 6)
                {
                    this.viewingHighscoreHolders = 0;
                }
                else
                {
                    this.viewingHighscoreHolders = 6
                    this.highScoreInformation();
                }
            },
            setViewHighscore7()
            {
                this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                if (this.viewingHighscoreHolders == 7)
                {
                    this.viewingHighscoreHolders = 0;
                }
                else
                {
                    this.viewingHighscoreHolders = 7
                    this.highScoreInformation();
                }
            },
            setViewHighscore8()
            {
                this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                if (this.viewingHighscoreHolders == 8)
                {
                    this.viewingHighscoreHolders = 0;
                }
                else
                {
                    this.viewingHighscoreHolders = 8
                    this.highScoreInformation();
                }
            },
            setViewHighscore9()
            {
                this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                if (this.viewingHighscoreHolders == 9)
                {
                    this.viewingHighscoreHolders = 0;
                }
                else
                {
                    this.viewingHighscoreHolders == 9
                    this.highScoreInformation();
                }
            },
            setViewHighscore10()
            {
                this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                if (this.viewingHighscoreHolders == 10)
                {
                    this.viewingHighscoreHolders = 0;
                }
                else
                {
                    this.viewingHighscoreHolders = 10
                    this.highScoreInformation();
                }
            },

            highScoreInformation()
            { 
                if (this.viewingHighscoreHolders > 0)
                {
                    this.highscoreHolderActions = this.HSLIST[this.viewingHighscoreHolders-1].actions
                    this.highscoreHolderDisasters = this.HSLIST[this.viewingHighscoreHolders-1].disasters
                    this.highscoreHolderInvasions = this.HSLIST[this.viewingHighscoreHolders-1].invasions
                    this.highscoreHolderMaxPop = this.HSLIST[this.viewingHighscoreHolders-1].maxpop
                }
            },
        },
        computed:
        {
            highScoreNameCalc()
            {
                if (this.HSLIST[0].username == "")
                {
                    return "Unknown";
                }
                else
                {
                    return this.HSLIST[0].username;
                }
            },
            highScoreCalc()
            {
                var totalDays = this.HSLIST[0].days;
                
                var years = 0;
                while (totalDays > 372)
                {
                    years += 1;
                    totalDays -= 372;
                }
                var months = 0
                while (totalDays > 31)
                {
                    months += 1;
                    totalDays -= 31;
                }
                var days = totalDays;
                return years + " Years,   " + months + " Months,   " + days + " Days.";
            },
            highScoreNameCalc2()
            {
                if (this.HSLIST[1].username == "")
                {
                    return "Unknown";
                }
                else
                {
                    return this.HSLIST[1].username;
                }
            },
            highScoreCalc2()
            {
                var totalDays = this.HSLIST[1].days;
                var years = 0;
                while (totalDays > 372)
                {
                    years += 1;
                    totalDays -= 372;
                }
                var months = 0
                while (totalDays > 31)
                {
                    months += 1;
                    totalDays -= 31;
                }
                var days = totalDays;
                return years + " Years,   " + months + " Months,   " + days + " Days.";
            },
            highScoreNameCalc3()
            {
                if (this.HSLIST[2].username == "")
                {
                    return "Unknown";
                }
                else
                {
                    return this.HSLIST[2].username;
                }
            },
            highScoreCalc3()
            {
                var totalDays = this.HSLIST[2].days;
                var years = 0;
                while (totalDays > 372)
                {
                    years += 1;
                    totalDays -= 372;
                }
                var months = 0
                while (totalDays > 31)
                {
                    months += 1;
                    totalDays -= 31;
                }
                var days = totalDays;
                return years + " Years,   " + months + " Months,   " + days + " Days.";
            },
            highScoreNameCalc4()
            {
                if (this.HSLIST[3].username == "")
                {
                    return "Unknown";
                }
                else
                {
                    return this.HSLIST[3].username;
                }
            },
            highScoreCalc4()
            {
                var totalDays = this.HSLIST[3].days;
                var years = 0;
                while (totalDays > 372)
                {
                    years += 1;
                    totalDays -= 372;
                }
                var months = 0
                while (totalDays > 31)
                {
                    months += 1;
                    totalDays -= 31;
                }
                var days = totalDays;
                return years + " Years,   " + months + " Months,   " + days + " Days.";
            },
            highScoreNameCalc5()
            {
                if (this.HSLIST[4].username == "")
                {
                    return "Unknown";
                }
                else
                {
                    return this.HSLIST[4].username;
                }
            },
            highScoreCalc5()
            {
                var totalDays = this.HSLIST[4].days;
                var years = 0;
                while (totalDays > 372)
                {
                    years += 1;
                    totalDays -= 372;
                }
                var months = 0
                while (totalDays > 31)
                {
                    months += 1;
                    totalDays -= 31;
                }
                var days = totalDays;
                return years + " Years,   " + months + " Months,   " + days + " Days.";
            },
            highScoreNameCalc6()
            {
                if (this.HSLIST[5].username == "")
                {
                    return "Unknown";
                }
                else
                {
                    return this.HSLIST[5].username;
                }
            },
            highScoreCalc6()
            {
                var totalDays = this.HSLIST[5].days;
                var years = 0;
                while (totalDays > 372)
                {
                    years += 1;
                    totalDays -= 372;
                }
                var months = 0
                while (totalDays > 31)
                {
                    months += 1;
                    totalDays -= 31;
                }
                var days = totalDays;
                return years + " Years,   " + months + " Months,   " + days + " Days.";
            },
            highScoreNameCalc7()
            {
                if (this.HSLIST[6].username == "")
                {
                    return "Unknown";
                }
                else
                {
                    return this.HSLIST[6].username;
                }
            },
            highScoreCalc7()
            {
                var totalDays = this.HSLIST[6].days;
                var years = 0;
                while (totalDays > 372)
                {
                    years += 1;
                    totalDays -= 372;
                }
                var months = 0
                while (totalDays > 31)
                {
                    months += 1;
                    totalDays -= 31;
                }
                var days = totalDays;
                return years + " Years,   " + months + " Months,   " + days + " Days.";
            },
            highScoreNameCalc8()
            {
                if (this.HSLIST[7].username == "")
                {
                    return "Unknown";
                }
                else
                {
                    return this.HSLIST[7].username;
                }
            },
            highScoreCalc8()
            {
                var totalDays = this.HSLIST[7].days;
                var years = 0;
                while (totalDays > 372)
                {
                    years += 1;
                    totalDays -= 372;
                }
                var months = 0
                while (totalDays > 31)
                {
                    months += 1;
                    totalDays -= 31;
                }
                var days = totalDays;
                return years + " Years,   " + months + " Months,   " + days + " Days.";
            },
            highScoreNameCalc9()
            {
                if (this.HSLIST[8].username == "")
                {
                    return "Unknown";
                }
                else
                {
                    return this.HSLIST[8].username;
                }
            },
            highScoreCalc9()
            {
                var totalDays = this.HSLIST[8].days;
                var years = 0;
                while (totalDays > 372)
                {
                    years += 1;
                    totalDays -= 372;
                }
                var months = 0
                while (totalDays > 31)
                {
                    months += 1;
                    totalDays -= 31;
                }
                var days = totalDays;
                return years + " Years,   " + months + " Months,   " + days + " Days.";
            },
            highScoreNameCalc10()
            {
                if (this.HSLIST[9].username == "")
                {
                    return "Unknown";
                }
                else
                {
                    return this.HSLIST[9].username;
                }
            },
            highScoreCalc10()
            {
                var totalDays = this.HSLIST[9].days;
                var years = 0;
                while (totalDays > 372)
                {
                    years += 1;
                    totalDays -= 372;
                }
                var months = 0
                while (totalDays > 31)
                {
                    months += 1;
                    totalDays -= 31;
                }
                var days = totalDays;
                return years + " Years,   " + months + " Months,   " + days + " Days.";
            },
        },
        created()
        {
            this.updateHighScores();
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