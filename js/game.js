var sunshine = 0;
var hardmode = 0;
var hardhardMode = 0;
var tutorialToggle = 1;
var posted = 0;
window.onload = function() 
{
    let game = new Vue                                  // VUE OBJECT
    ({
        el: '#game',
        data: {
            about: 0,
            play: 1,
            home: 0,
            cheatsActivated: 0,
            devCode: "",
            SOUNDS: {menuTab: {sound: "menuTabSound", volume: .1},   
                    builder: {sound: "builder", volume: .25},
                    error: {sound: "error", volume: .5},
                    click: {sound: "click", volume: .1},
                    angel: {sound: "angel", volume: .3},
                    gameover: {sound: "gameover", volume: .5},
                    pop: {sound: "pop", volume: .3},
                    time: {sound: "time", volume: .2},
                    barracks:{sound: "barracks", volume: .2},
                    catapult:{sound: "catapult", volume: .2},
                    cityadvance:{sound: "cityadvance", volume: .2},
                    farm:{sound: "farm", volume: .2},
                    fire:{sound: "fire", volume: .2},
                    house:{sound: "house", volume: .2},
                    invasion:{sound: "invasion", volume: .2},
                    lumbermill:{sound: "lumbermill", volume: .2},
                    mine:{sound:"mine", volume: .2},
                    market:{sound: "market", volume: .2},
                    siege:{sound: "siege", volume: .2},
                    storm:{sound: "storm", volume: .2},
                    tavern:{sound: "tavern", volume: .2},
                    townsqr:{sound: "townsqr", volume: .2},
                    wall:{sound: "wall", volume: .2},
                    weapon:{sound: "weapon", volume: .2},
                    workshop:{sound: "workshop", volume: .2},
                    tavern2:{sound: "tavern2", volume: .2},
                    townsqr2: {sound: "townsqr2", volume: .2},
                    robbed: {sound: "robbed", volume: .3},
                    cough: {sound: "cough", volume: .3},
                    marchingArmy:{sound: "marching_army", volume: .2},
                    mercinaries:{sound: "mercinaries", volume: .2},
                    refugees: {sound: "refugees", volume: .2},
                    slaves: {sound: "slaves", volume: .3},
                    wizard: {sound: "wizard", volume: .3},
                    lateNights: {sound: "lateNights", volume: .3},
                    faire: {sound: "faire", volume: .3},
                    feast: {sound: "feast", volume: .3}},
        
            LUMBER_FACTORS  : {WORTH: 2},
            FOOD_FACTORS    : {WORTH: 1},
            STONE_FACTORS   : {WORTH: 3},
            GOLD_FACTORS    : {WORTH: 1},
            WEAPON_FACTORS  : {WORTH: 20, STONE_COST: 5, GOLD_COST: 5, DEFENSE: 0.0034},
            
            LAND_FACTORS     : {SQR_MILES: 25},
            SOLDIER_FACTORS  : {GOLD_TRAIN: 20, WEAPON_TRAIN: 1, MONTHLY_WAGE: 5, BOOST: 0.02, PER_CIT: 20},
            ARCHER_FACTORS   : {GOLD_TRAIN: 50, WEAPON_TRAIN: 1, MONTHLY_WAGE: 5, BOOST: 0.04},
            CATAPULT_FACTORS : {GOLD_TRAIN: 100, LUMBER_COST: 50, SOLDIER_COST: 2, BOOST: .08, MONTHLY_WAGE: 10},
            CITIZEN_FACTORS  : {FOOD_NEEDS: 1, CIT_INCOME: 30, BASE_SATISFACTION: 0.6, TAX_TO_SAT: 5.0, VISITORS: 0.25},
            TOWN_TYPES : ["H A M L E T", "T O W N", "V I L L I A G E", "K I N G D O M"],
            townType: "H A M L E T",
            animateTownType: 0,
            GATHER_WOOD_FACTORS : {LUMBER: 20, TIME: 500, FREE: 5},
            HUNT_FACTORS        : {FOOD: 4,   TIME: 1000, FREE: 1},
            TOWN_FAIR_FACTORS   : {FOOD: 100, GOLD: 50, SAT_BOOST: 0.1, TIME: 3000, BOOST_LAST: 5, LOSS_BOOL: 0},
            FEAST_FACTORS:        {FOOD: 30, SAT_BOOST:.01, BOOST_LAST: 5, LOSS_BOOL: 0},
            HOUSE_FACTORS    : {PER_LAND: 20, LUMBER_COST: 100, BEDS: 5},
            FARM_FACTORS     : {PER_LAND: 5,  LUMBER_COST: 100, WORKER_SLOTS: 10, INCOME_PER_WORKER: 5},
            CW_FACTORS       : {PER_LAND: 1,  LUMBER_COST: 200},
            LM_FACTORS       : {PER_LAND: 3,  LUMBER_COST: 300, WORKER_SLOTS: 5,  INCOME_PER_WORKER: 60},
            BRK_FACTORS      : {PER_LAND: 1,  LUMBER_COST: 200, STONE_COST: 100},
            MINE_FACTORS     : {PER_LAND: 3,  LUMBER_COST: 500, WORKER_SLOTS: 5, INCOME_PER_WORKER: 25},
            TAVERN_FACTORS   : {PER_LAND: 1,  LUMBER_COST: 400, STONE_COST: 200,  WORKER_SLOTS: 5, INCOME_PER_WORKER: 10, SAT_BOOST: 0.1},
            MARKET_FACTORS   : {PER_LAND: 1,  LUMBER_COST: 400, GOLD_COST: 100,   GOLD_INCOME: 50, SAT_BOOST: 0.05},
            WALL_FACTORS     : {PER_LAND: 5,  LUMBER_COST: 300, STONE_COST: 500,  DEFENSE_BONUS: 0.10},
            SIEGE_FACTORS    : {PER_LAND: 1,  LUMBER_COST: 500, STONE_COST: 500,  GOLD_COST: 500},
            TOWN_SQR_FACTORS : {PER_LAND: 1,  LUMBER_COST: 50,  GOLD_COST: 50,    POPULATION: 30, SAT_BOOST: 0.05},
            DISASTER_FACTORS : {TIME: 20, DISASTER_CHANCE: 0.4, INVASION: 0.3, FIRE: 0.1, ROBBERS: 0.1, STORM: 0.1, PLAGUE: 0.1, FAMINE: 0.1, BEASTS: 0.1, DEPRESSION_YEARS: 5},
            INVASION_FACTORS : {TIME: 25, SAT_DEPRESSION: -.2, SAT_BOOST: .10},
            STARVE_FACTORS : {SAT_DEPRESSION: -.30},
            PLAGUE_FACTORS : {CIT_LOSS: 0.25, SAT_DEPRESSION: -.20},
            FAMINE_FACTORS : {FOOD_LOSS: 0.5, SAT_DEPRESSION: -.20},
            ROBBERS_FACTORS : {RESOURCE_LOSS: .2, SAT_DEPRESSION: -.15},
            STORM_FACTORS: {SAT_DEPRESSION: -.15, FARM_CHANCE: .6},
            FIRE_FACTORS : {SAT_DEPRESSION: -.2, HOUSE_CHANCE: .6},
            interval: 1,
            BUILD_REQ : {farm:{max:0}, house:{max:0}, workshop:{max:0}, lumber:{req:0, max:0},  barracks:{req:0, max:0},  mine:{req:0, max:0},   tavern:{req:0, max:0}, 
                         market:{req:0, max:0},  wall:{req:0, max:0},      siege:{req:0, max:0},  townsqr:{pop: 0, req:0, max:0}},
            townSquareBool: 0,
            startTime: 0,
            refugees: 0,
            isGameOver: 0,
            currentPage: 1,
            forestPage: true,
            workshopPage: false,
            townCenterPage: false,
            barracksPage: false,
            marketPage: false,
            satBoosts: [{sat: 0, startSat: 0, time: 1000000, startTime: 1000000, lag: 0, ramp: 0, full: 1}],
            actionCooldowns: {gatherWood: {done: 1, time: 0}, huntFood: {done: 1, time: 0}, townFaire: {done: 1, time: 0}},
            resourceStat : {lumber: 0, food: 6, stone: 0, gold: 0, weaponsNum: 0, landNum: 1},
            citizensStat : {population: 2, satisfaction: 0.75, taxRate: 0.00, beds: 5},
            buildingNum : {houses: 1, farm: 0, carpenter: 0, lumbermill: 0, barracks: 0, mine: 0, tavern: 0, market: 0, walls: 0, siege: 0, townsqr: 0},
            laborDistribution : {farm: 0, lumber: 0, soldier: 0, mine: 0, tavern: 0, archer: 0, catapult: 0, free: 0},
            monthlyIncome : {lumberRate: 0, foodRate: 0, stoneRate: 0, goldRate: 0},
            chancesRatios : {defense: 0.0},
            landNum: 1,
            commentArray: [{text: "Builder: Thank you, there are more people we can help.", timer: 10, noise: 0, played: 0, bold: 1}],
            dayTime: 0,
            monthTime: 0,
            yearTime: 0,
            buttomImageEnd: ", url(\"https://i.ibb.co/X2P8Dn4/button.jpg\")",
            buttonsColor: { gatherWood: 1,huntFood: 1,house: 1,farm: 1,workshop: 1,townsqr: 0,lumbermill: 0,mine: 0,tavern: 0,market: 0,barracks: 0,walls: 0,siege: 0,
                            farmAdd: 0,farmSub: 0,lumberAdd: 0,lumberSub: 0,mineAdd: 0,mineSub: 0,tavernAdd: 0,tavernSub: 0,soldierSub: 0,archerSub: 0,catapultSub: 0,
                            holdFeast: 1,townFaire: 0,makeWeapons: 0,trainSoldier: 0,trainArcher: 0,buildCatapult: 0,},
            SPECIAL_ITEMS_PRINT: [  {title: "SLAVE TRADERS", color: "red", description: "Sell your people into slavery.", price: [{item: "Citizens:", price: "5"}, {item: "Gold:", price: "+1000"}, {item: "Satisfaction:", price: "-40%"}]}, 
                                    {title: "MARCHING ARMY", color: "red", description: "Help the army on their journey", price: [{item: "Weapons:", price: "-10"}, {item: "Soldiers:", price: "-5"}, {item: "Gold:", price: "+750"}]},
                                    {title: "HELP REFUGEES", color: "yellow", description: "Harbor the poor refugees.", price: [{item: "Food:", price: "-200"}, {item: "Gold:", price: "-50"}, {item: "Immigrants:", price: "+30"}]}, 
                                    {title: "NIGHT LABOR", color: "red", description: "Force citizens to work late.", price: [{item: "Productivity:", price: "x2"}, {item: "Gold:", price: "-300"}, {item: "Satisfaction:", price: "-20%"}]},
                                    {title: "TRAVELING PERFORMERS", color: "yellow", description: "A night to remember!", price: [{item: "Gold:", price: "-300"}, {item: "Satisfaction:", price: "+30%"}, {item: "Lasts:", price: "2 Months"}]},
                                    {title: "MERCENARIES", color: "purple", description: "Hire them to fight your next invasion.", price: [{item: "Gold:", price: "-300"}, {item: "Food:", price: "-200"}, {item: "Protection:", price: "3 Months"}]},
                                    {title: "WIZARD'S SPELL", color: "purple", description: "Stranger swears he'll double a resource.", price: [{item: "Gold:", price: "-600"}, {item: "Chance:", price: "20%"}]}],
            SPECIAL_PHOTO_LINKS: {red: "https://i.ibb.co/y8Gwjjs/dark-red-00000.jpg", blue: "https://i.ibb.co/bXFgGwb/dark-blue-00000.jpg", yellow: "https://i.ibb.co/H7Y9B3f/dark-yellow-00000.jpg", green: "https://i.ibb.co/P1mrbht/green-button-00000.jpg", purple: "https://i.ibb.co/WG75HYT/dark-purple-00000.jpg"},
            SLAVE_TRADE_FACTORS: {CIT: 5, GOLD: 1000, SAT_DROP: -.4},
            TRAVELING_ARMY_FACTORS: {WEAPON_COST: 10, SOLDIER_COST: 5, GOLD: 750},
            REFUGEE_GROUP_FACTORS: {FOOD_COST: 200, BOOST: 30, GOLD_COST: 50},
            LATE_NIGHTS: {GOLD_COST: 300, BOOST: 2, SAT_DROP: -.2},
            TRAVELING_PERFORMERS_FACTORS: {GOLD_COST: 300, SAT_BOOST: .3, LASTS: 60},
            MERCENARIES_FACTORS: {GOLD_COST: 300, MONTHS: 3, FOOD_COST: 200},
            WIZARD_FACTORS: {GOLD_COST: 600, CHANCE: .2},
            specialsArray: [],
            timeSinceInvasion: 40,
            timeSinceDisaster: 60,
            specialItem: 1,
            specialItemUsed: 0,
            refugeeBool: 0,
            mercenaryProtection: 0,
            mercenaryTimer: 0,
            productivety: 1,
            famine: 1,
            highestPopulation: 2,
            invasionNum: 0,
            disasterNum: 0,
            moreStats:0,
            gameOverNoisePlayed: 0,
            gracePeriod: 120,
            hardmodeActivated: 0,
            firstRobbery: 0,
            firstPlague: 0,
            firstFire: 0,
            firstStorm: 0,
            firstFamine: 0,
            marketMultiplyer: 1,
            finalDay: 0,
            finalMonth: 0,
            finalYear: 0,
            tutorialBool: 1,
            numGatherWood: 0,
            numHuntFood: 0,
            showModal: false,
            averageSat: {sat: .6, time: 1},
            disasterBoosted: 0,

            rampDifficulty: 0,
            DIFFICULTY: 0,

            deathString: "A disease runs rampant through your town. The coughs silent through the week as the bodies pile. Travelers will know your town not by what you did, but by the smell.",
            monthActions: {thismonth: 0, average: 0},
            i: 0,
            j: 0,
            tutorialMessages: [],
            tutorialMessageBool: 0,
            tutorialBools: [{done: 0}],
            tutorialMessageCurrent: "",
            speed: 10,

            highScoreNum: 0,
            highScoreName: "",
            highScoreOnlineName: "",
            highscores: 0,
            
            tutorialHADBEENSHOWN: {time: 0, time2: 0, time3: 0, time4: 0, one: 0, two: 0, three: 0, four: 0, five: 0, six: 0, seven: 0, eight: 0, nine: 0, ten: 0,
                                    eleven: 0, twelve: 0, thirteen: 0, fourteen: 0, fifteen: 0, sixteen: 0, seventeen: 0, eightteen: 0,
                                nineteen: 0, twenty: 0, twentyone: 0, twentytwo: 0, twentythree: 0, twentyfour: 0, twentyfive: 0, twentysix: 0, twentyseven: 0,
                                twentyeight: 0, twentynine: 0, thirty: 0, thirtyone: 0, thirtytwo: 0},
        },
        methods: 
        {
            // -----------------------------Time Keepers
            refreshData()
            {
                if (!this.showModal)
                {
                    if (!this.isGameOver)
                    {
                        this.finalDay = this.dayTime;
                        this.finalMonth = this.monthTime
                        this.finalYear = this.yearTime;
                        this.gameOver();
                        this.townTypeCalc();
                        this.checkDevCode();
                        this.defenseUpdates();
                        this.monthlyIncomeCalc();
                        this.satisfactionUpdates();
                        this.updateColors();
                        this.commentWriter();
                        this.elapsedTime();
                        this.tutorial();
                    }
                }
            },
            
            tutorial()
            {
                if (this.tutorialBool && tutorialToggle)
                {
                    for (var i = 0; i < this.tutorialMessages.length; i++)
                    {
                            if (!this.tutorialMessages[i].done)
                            {
                                this.playSound("squeak", .1);
                                this.tutorialBools[this.tutorialMessages[i].index].done = 1;
                                this.tutorialMessageCurrent = this.tutorialMessages[i].text;
                                this.tutorialMessages[i].done = 1;
                                this.showModal = true;
                            } 
                    }
                    if (this.dayTime > 2 && this.numGatherWood == 0 && this.tutorialHADBEENSHOWN.one == 0 && !this.isGameOver)
                    {
                        this.tutorialHADBEENSHOWN.one = 1;
                        this.tutorialMessages.push({text: "Welcome to Sovereign.\n\nThese optional tutorial messages will help you limp through your first game.\nSome stats display information when hovering as well.\n\nAll the odds are stacked against you. See how long you can last!\n\nMake sure you see the full screen, zoom out with your browser if needed.\n\n-----------------------------------------------------------\n\nLet's start with Gathering some Wood.\nWe'll need it if we're going to build anything.", time: 20, done: 0, index: 0})
                    }
                    if ((this.dayTime > 25 || this.monthTime > 1 || this.yearTime > 1) && this.numGatherWood >= 5 && this.tutorialHADBEENSHOWN.two == 0 && !this.isGameOver)
                    {
                        this.tutorialHADBEENSHOWN.two = 1;
                        console.log("Holding a baby's hand.");
                        this.tutorialMessages.push({text: "Now let's add more space for others.\n\nGo to the Workshop and build a House.", time: 20, done: 0, index: 0})
                    }
                    if (this.buildingNum.houses == 2 && this.tutorialHADBEENSHOWN.three == 0 && !this.isGameOver)
                    {
                        this.tutorialHADBEENSHOWN.three = 1;
                        console.log("Computing the meaning of life...");
                        this.tutorialMessages.push({text: "Visitors come every month and will stay if you have house space and satisfied citizens!\n\nYour population shows citizens and available beds.\n\nBe careful with satisfaction, if it goes below 20% you get BANISHED!", time: 20, done: 0, index: 0})
                    }
                    if (this.workshopPage && this.tutorialHADBEENSHOWN.four == 0 && !this.isGameOver)
                    {
                        this.tutorialHADBEENSHOWN.four = 1;
                        console.log("I'm losing my bits.");
                        this.tutorialMessages.push({text: "The Workshop page allows you to build.\n\nThe builder needs materials for each item which are listed below.", time: 20, done: 0, index: 0})
                    }
                    if (this.townCenterPage && this.tutorialHADBEENSHOWN.five == 0 && !this.isGameOver)
                    {
                        this.tutorialHADBEENSHOWN.five = 1;
                        console.log("I'm a speedy speedy boy.");
                        this.tutorialMessages.push({text: "The Town Center page allows you to re-assign citizens to different tasks.\n\nBuildings need workers to function so don't forget to keep them staffed!\n\nYou can also boost satisfaction with feasts and faires.\n\nWatch out! Citizens hate taxes.", time: 20, done: 0, index: 0})
                    }
                    if (this.barracksPage && this.tutorialHADBEENSHOWN.six == 0 && !this.isGameOver)
                    {
                        this.tutorialHADBEENSHOWN.six = 1;
                        console.log("Are you listening");
                        this.tutorialMessages.push({text: "The Barracks page is where you can build up your defenses.\n\nInvasions start occuring after your population reaches 30.\n\nEnemy strength depends on your population size.\n\nAll forms of military cost monthly wages so maintain balance.\n\nBe Prepared.", time: 20, done: 0, index: 0})
                    }
                    if (this.marketPage && this.tutorialHADBEENSHOWN.seven == 0 && !this.isGameOver)
                    {
                        this.tutorialHADBEENSHOWN.seven = 1;
                        console.log("Let's go to another website and look at more numbers!");
                        this.tutorialMessages.push({text: "The Market page allows you to transfer resources into gold and vice versa.\n\nSpecial market items can be the key to surviving.\n\nKeep an eye out the deal each month, and make good choices.", time: 20, done: 0, index: 0})
                    }
        
                    if (this.buildingNum.houses >= 2 && this.tutorialHADBEENSHOWN.eight == 0 && !this.isGameOver)
                    {
                        if (this.tutorialHADBEENSHOWN.time < 200)
                        {
            
                            this.tutorialHADBEENSHOWN.time += 1
                        }
                        else
                        {
                            this.tutorialHADBEENSHOWN.eight = 1;
                            console.log("ERROR ERROR ERROR, jk");
                            this.tutorialMessages.push({text: "Next we should work towards getting a Lumber Mill.\n\nIt'll be way faster than Gathering Wood. Even with free civilians to help.\n\nKeep gathering wood until you can get a workshop.", time: 20, done: 0, index: 0})
                        }  
                    }
                    if ((this.dayTime > 31 || this.monthTime > 1 || this.yearTime > 1) && this.numHuntFood == 0 && this.tutorialHADBEENSHOWN.nine == 0 && !this.isGameOver)
                    {
                        this.tutorialHADBEENSHOWN.nine = 1;
                        console.log("Let's go to another website and look at more numbers!");
                        this.tutorialMessages.push({text: "Pretty good.\n\nWe'll get hungry if we don't have enough food too!\n\nTry hunting for food as well.\n\nYour food is displayed in the top left, as well as the amount you need each month!", time: 20, done: 0, index: 0})
                    }
                    if (this.buildingNum.carpenter == 1 && this.tutorialHADBEENSHOWN.ten == 0 && !this.isGameOver)
                    {
                        this.tutorialHADBEENSHOWN.ten = 1;
                        console.log("var ComputerHappy = 1;");
                        this.tutorialMessages.push({text: "Almost there!\n\nThe Workshop allows the builder to make all sorts of stuff.\n\nLet's continue to focus on getting that Lumber Mill.\n\nRemember if you're at max population to build another House!\n\nFree citizens help with Gathering Wood.", time: 20, done: 0, index: 0})
                    }

                    if (this.buildingNum.lumbermill == 1 && this.tutorialHADBEENSHOWN.eleven == 0 && !this.isGameOver)
                    {
                        this.tutorialHADBEENSHOWN.eleven = 1;
                        console.log("what do these NUMBERS MEAN");
                        this.tutorialMessages.push({text: "Perfect!\n\nWe can now start generating a lot more wood.\n\nHead over to the Town Center page and assign workers to the Lumber Mill!", time: 20, done: 0, index: 0})
                    }

                    if (this.laborDistribution.lumber >= 1 && this.tutorialHADBEENSHOWN.nineteen == 0 && !this.isGameOver)
                    {
                        if (this.tutorialHADBEENSHOWN.time3 < 300)
                        {
                            this.tutorialHADBEENSHOWN.time3 += 1
                        }
                        else
                        {
                            this.tutorialHADBEENSHOWN.nineteen = 1;
                            console.log("what do these NUMBERS MEAN");
                            this.tutorialMessages.push({text: "Fantastic.\n\nNext we should build a mine to start getting stone.\n\nMake sure not to neglect keeping available beds open for immigrants.\n\nBuild houses when needed.\n\nYou also might find a farm at this point useful, but optional.\n\nLet's get a mine!", time: 20, done: 0, index: 0})
                        }
                    }
                    if (this.buildingNum.mine == 1 && this.tutorialHADBEENSHOWN.twenty == 0 && !this.isGameOver)
                    {
                        this.tutorialHADBEENSHOWN.twenty = 1;
                        console.log("what do these NUMBERS MEAN");
                        this.tutorialMessages.push({text: "Fantastic.\n\nDon't forget to assign people to that so we get some STONE!\n\nStone is going to be useful to work towards a Tavern, which if staffed provides gold.\n\nTaxing is a good way to get quick cash but not fanastic.\n\nI wouldn't recommend going past 2%.", time: 20, done: 0, index: 0})
                    }

                    if (this.laborDistribution.mine >= 1 && this.tutorialHADBEENSHOWN.twentyone == 0 && !this.isGameOver)
                    {
                        if (this.tutorialHADBEENSHOWN.time4 < 400)
                        {
                            this.tutorialHADBEENSHOWN.time4 += 1
                        }
                        else
                        {
                            this.tutorialHADBEENSHOWN.twentyone = 1;
                            console.log("what do these NUMBERS MEAN");
                            this.tutorialMessages.push({text: "Alrighty perfect.\n\nWe're now making monthly stone!\n\nDon't forget you can make multiple Lumber Mills and Mines to add to the yeild.\n\nLet's work towards that Tavern.\n\nDont' forget to keep up with Farms and Houses!", time: 20, done: 0, index: 0})
                        }
                    }

                    if (this.buildingNum.tavern == 1 && this.tutorialHADBEENSHOWN.twentytwo == 0 && !this.isGameOver)
                    {
                        this.tutorialHADBEENSHOWN.twentytwo = 1;
                        console.log("what do these NUMBERS MEAN");
                        this.tutorialMessages.push({text: "The Tavern is a great way to make gold with happy citizens!\n\nBe sure to staff it right away.\n\nWe're going to need to work towards a Market next.\n\nTaxes from the Market as well as it's abilities will help us out of a lot of tricky situations.", time: 20, done: 0, index: 0})
                    }
                    if (this.buildingNum.market == 1 && this.tutorialHADBEENSHOWN.twentythree == 0 && !this.isGameOver)
                    {
                        this.tutorialHADBEENSHOWN.twentythree = 1;
                        console.log("what do these NUMBERS MEAN");
                        this.tutorialMessages.push({text: "The Market page is a powerful tool.\n\nYou can exchange resources for gold and vice versa.\n\nSpecial Monthly Items are crucial for success.\n\nKeep a careful watch on those.\n\nNow that we have a Market, it's time for defenses.\n\nBuild a Barracks.", time: 20, done: 0, index: 0})
                    }

                    if (this.citizensStat.population >=25 && this.resourceStat.weaponsNum == 0 && this.tutorialHADBEENSHOWN.twentyfour == 0 && !this.isGameOver)
                    {
                        this.tutorialHADBEENSHOWN.twentyfour = 1;
                        console.log("what do these NUMBERS MEAN");
                        this.tutorialMessages.push({text: "Looks like we're getting dangerously close to being big enough to be invaded.\n\nAt population 30 we'll need defenses to survive.\n\nMaking Weapons is a quick and easy way to add to defenses.\n\nThey allow citizens to fight.\n\nThey're a short term solution if you can't create an army yet.", time: 20, done: 0, index: 0})
                    }


                    if (this.buildingNum.barracks == 1 && this.tutorialHADBEENSHOWN.twentyfive == 0 && !this.isGameOver)
                    {
                        this.tutorialHADBEENSHOWN.twentyfive = 1;
                        console.log("what do these NUMBERS MEAN");
                        this.tutorialMessages.push({text: "We can now start strong defenses.\n\nSoldiers are expensive.\n\nSure they cost a Weapon and gold, but they also have monthly wages.\n\nThey're worth the investment early on, but Walls and Catapults are the real deal.\n\nLet's work towards those.", time: 20, done: 0, index: 0})
                    }

                    if (this.citizensStat.population >= 30 && this.tutorialHADBEENSHOWN.twentysix == 0 && !this.isGameOver)
                    {
                        this.tutorialHADBEENSHOWN.twentysix = 1;
                        console.log("what do these NUMBERS MEAN");
                        this.tutorialMessages.push({text: "We can finally build a Town Square!\n\nNot only does building it boost stats, but Town Faires are a great source of happiness.\n\nThey take time to plan, but their Satisfaction Boost lasts and add way more then Feasts!\n\nThey're cheap so build one right away!", time: 20, done: 0, index: 0})
                    }
                    if ((this.monthTime > 2 || this.yearTime > 1) && this.resourceStat.food <= 5 && this.tutorialHADBEENSHOWN.twentyseven == 0 && !this.isGameOver)
                    {
                        this.tutorialHADBEENSHOWN.twentyseven = 1;
                        console.log("what do these NUMBERS MEAN");
                        this.tutorialMessages.push({text: "HEY!\n\nYou're pretty low on food there!\n\nBuild a Farm\nHunt Food\nBuy Some at the Market\n\nAnd don't forget to assign people to work at the Farms!", time: 20, done: 0, index: 0})
                    }

                    if (this.buildingNum.walls == 1 && this.tutorialHADBEENSHOWN.twentyeight == 0 && !this.isGameOver)
                    {
                        this.tutorialHADBEENSHOWN.twentyeight = 1;
                        console.log("what do these NUMBERS MEAN");
                        this.tutorialMessages.push({text: "Walls are a great source of defense.\n\nNot only do they naturally add defense, they allow you to train archers.\n\nYou can now make a Seige Workshop as well now and create catapults.\n\nDon't forget that multiple Walls can be built up!", time: 20, done: 0, index: 0})
                    }
                    
                    if (this.buildingNum.siege == 1 && this.tutorialHADBEENSHOWN.twentynine == 0 && !this.isGameOver)
                    {
                        this.tutorialHADBEENSHOWN.twentynine = 1;
                        console.log("what do these NUMBERS MEAN");
                        this.tutorialMessages.push({text: "A Siege Workshop allows you to build Catapults.\n\nCatapults add a lot of defense but are pricey.\n\nNot only do they cost Lumber and Gold, but two Soldiers as well.\n\nYou can unassign them on the Town Square Page.", time: 20, done: 0, index: 0})
                    }

                    if (this.buildingNum.farm == 1 && this.tutorialHADBEENSHOWN.thirty == 0 && !this.isGameOver)
                    {
                        this.tutorialHADBEENSHOWN.thirty = 1;
                        console.log("what do these NUMBERS MEAN");
                        this.tutorialMessages.push({text: "Farms are Fantastic.\n\nYou can have up to 50 workers with max farms.\n\nAlways keep someone in a Farm.\n\nThey don't feel too useful at first, but wait 'til your first Famine.", time: 20, done: 0, index: 0})
                    }

                    if (this.specialItemUsed == 1 && this.tutorialHADBEENSHOWN.thirtyone == 0 && !this.isGameOver)
                    {
                        this.tutorialHADBEENSHOWN.thirtyone = 1;
                        console.log("what do these NUMBERS MEAN");
                        this.tutorialMessages.push({text: "Looks like you bought your first monthly special.\n\nStrange people visit the Market each month, always a good idea to check out what they have to offer.\n\nOffers include risk, expensive prices, and moral dilemmas.\n\nUse your money wisely. Special Offers are the difference between winning and losing.\n\nSpecial Offers:\n\nMarching Army\nRefugee Group\nForcing Night Labor\nTraveling Performers\nMercenaries\nStrange Wizard", time: 20, done: 0, index: 0})
                    }



                    if (this.firstFamine == 1 && this.tutorialHADBEENSHOWN.twelve == 0 && !this.isGameOver)
                    {
                        this.tutorialHADBEENSHOWN.twelve = 1;
                        console.log("what do these NUMBERS MEAN");
                        this.tutorialMessages.push({text: "That's a BUMMER!\n\nFamines are a big issue if you don't have enough food.\n\n  Citizens need twice as much food.\n  Farms produce 1/3 of their usual.\n\nAssign everyone you can to farms, buy food if you have a market.", time: 20, done: 0, index: 0})
                    }
                    if (this.firstFire == 1 && this.tutorialHADBEENSHOWN.thirteen == 0 && !this.isGameOver)
                    {
                        this.tutorialHADBEENSHOWN.thirteen = 1;
                        console.log("what do these NUMBERS MEAN");
                        this.tutorialMessages.push({text: "Uh oh!\n\nFires are relatively harmless to everything except houses\n\nThey have a given chance of destroying your houses and causing people to leave.\n\nRebuild the houses before citizens wander off!", time: 20, done: 0, index: 0})
                    }
                    if (this.firstPlague == 1 && this.tutorialHADBEENSHOWN.fourteen == 0 && !this.isGameOver)
                    {
                        this.tutorialHADBEENSHOWN.fourteen = 1;
                        console.log("what do these NUMBERS MEAN");
                        this.tutorialMessages.push({text: "Plagues suck.\n\nThey kill off citizens and get everyone bummed out!", time: 20, done: 0, index: 0})
                    }
                    if (this.firstRobbery == 1 && this.tutorialHADBEENSHOWN.fifteen == 0 && !this.isGameOver)
                    {
                        this.tutorialHADBEENSHOWN.fifteen = 1;
                        console.log("what do these NUMBERS MEAN");
                        this.tutorialMessages.push({text: "YOU'VE BEEN ROBBED.\n\nStrong defenses will make it harder for them to get off with so much!", time: 20, done: 0, index: 0})
                    }
                    if (this.firstStorm == 1 && this.tutorialHADBEENSHOWN.sixteen == 0 && !this.isGameOver)
                    {
                        this.tutorialHADBEENSHOWN.sixteen = 1;
                        console.log("what do these NUMBERS MEAN");
                        this.tutorialMessages.push({text: "That's quite a storm you just had.\n\nStorms endanger your farms leaving them at risk for distruction.\n\nIf a farm was destroyed, don't forget to go to the Town Center Page and reassign your wandering farmers!", time: 20, done: 0, index: 0})
                    }
                    if (this.invasionNum == 1 && this.tutorialHADBEENSHOWN.seventeen == 0 && !this.isGameOver)
                    {
                        this.tutorialHADBEENSHOWN.seventeen = 1;
                        console.log("what do these NUMBERS MEAN");
                        this.tutorialMessages.push({text: "Looks like you just had your first invasion.\n\nInvasions can get nasty.\n\nThe enemies strength is determined by your population.\n\nHow badly you lose will determine how many people die, how much they take, and whether your people get depressed.\n\nDon't forget that soldier are the first to die.\n\nAfter every invasion be sure to check your defenses again.\n\nThe bottom left of your screen displays Boosts, Depressions and Powerups.", time: 20, done: 0, index: 0})
                    }
                    if (this.disasterNum == 1 && this.tutorialHADBEENSHOWN.eightteen == 0 && !this.isGameOver)
                    {
                        if (this.tutorialHADBEENSHOWN.time2 < 250)
                        {
                            this.tutorialHADBEENSHOWN.time2 += 1
                        }
                        else
                        {
                            this.tutorialHADBEENSHOWN.eightteen = 1;
                            console.log("what do these NUMBERS MEAN");
                            this.tutorialMessages.push({text: "Disasters and Invasions have a chance of occuring about once a month.\n\nCitezens can get really bummed out about them.\n\nThe most likely way you'll lose is if you don't react to disasters by giving your citzens reason's to smile.\n\nHold Feasts\nHold Faires\nBuild a Tavern\nBuild a Market\nLower Taxes\nTraveling Performers\n\nIf you drop below 20%, you're done.", time: 20, done: 0, index: 0})
                        }
                    }

                    /*
                    tutorialHADBEENSHOWN: {time: 0, time2: 0, time3: 0, time4: 0, one: 0, two: 0, three: 0, four: 0, five: 0, six: 0, seven: 0, eight: 0, nine: 0, ten: 0,
                        eleven: 0, twelve: 0, thirteen: 0, fourteen: 0, fifteen: 0, sixteen: 0, seventeen: 0, eightteen: 0,
                    nineteen: 0, twenty: 0, twentyone: 0, twentytwo: 0, twentythree: 0, twentyfour: 0, twentyfive: 0, twentysix: 0, twentyseven: 0,
                    twentyeight: 0, twentynine: 0, thirty: 0, thirtyone: 0},
                    */
                    if ((this.tutorialHADBEENSHOWN.one == 1) && (this.tutorialHADBEENSHOWN.two == 1) && (this.tutorialHADBEENSHOWN.three == 1) && (this.tutorialHADBEENSHOWN.four == 1) && (this.tutorialHADBEENSHOWN.five == 1) && (this.tutorialHADBEENSHOWN.six == 1) && (this.tutorialHADBEENSHOWN.seven == 1) && (this.tutorialHADBEENSHOWN.eight == 1) && (this.tutorialHADBEENSHOWN.ten == 1) && (this.tutorialHADBEENSHOWN.eleven == 1) && (this.tutorialHADBEENSHOWN.twelve == 1) && (this.tutorialHADBEENSHOWN.thirteen == 1) && (this.tutorialHADBEENSHOWN.fourteen == 1) && (this.tutorialHADBEENSHOWN.fifteen == 1) && (this.tutorialHADBEENSHOWN.sixteen == 1) && (this.tutorialHADBEENSHOWN.seventeen == 1) && (this.tutorialHADBEENSHOWN.eightteen == 1) && (this.tutorialHADBEENSHOWN.nineteen == 1) && (this.tutorialHADBEENSHOWN.twenty == 1) && (this.tutorialHADBEENSHOWN.twentyone == 1) && (this.tutorialHADBEENSHOWN.twentytwo == 1) && (this.tutorialHADBEENSHOWN.twentythree == 1) && (this.tutorialHADBEENSHOWN.twentyfive == 1) && (this.tutorialHADBEENSHOWN.twentysix == 1) && (this.tutorialHADBEENSHOWN.twentyeight == 1) && (this.tutorialHADBEENSHOWN.twentynine == 1) && (this.tutorialHADBEENSHOWN.thirty == 1) && (this.tutorialHADBEENSHOWN.thirtytwo == 0))
                    {
                        this.tutorialHADBEENSHOWN.thirtytwo = 1;
                        console.log("what do these NUMBERS MEAN");
                        this.tutorialMessages.push({text: "That's all the tutorials have to offer!\n\nYou're on your own now.\n\nIf you need more help, there's an about page with info.\n\nBest of luck to you and may you reign for years to come.\n\nEmail me your high scores!\n\nandrew@youngshome.com", time: 20, done: 0, index: 0})
                    }

                }
            },
            disableTutorials()
            {
                this.tutorialBool = 0;
            },
            oneDay()
            {
                if (hardmode && !this.hardmodeActivated)
                {
                    this.hardmodeActivated = 1;
                    console.log("Okay Cowboy, Difficulty INCREASED.");
                    this.DISASTER_FACTORS.DISASTER_CHANCE += .1;
                    this.DISASTER_FACTORS.INVASION += .1;
                    this.CITIZEN_FACTORS.FOOD_NEEDS *= 1.5;
                }
                this.averageSat.time += 1;
                this.averageSat.sat = (((this.averageSat.time - 1) * this.averageSat.sat) / this.averageSat.time) + (this.citizensStat.satisfaction * (1 / this.averageSat.time));

                if (this.citizensStat.population > this.highestPopulation)
                {
                    this.highestPopulation = this.citizensStat.population;
                }
                if (this.citizensStat.population >= 75 && this.disasterBoosted == 0)
                {
                    console.log("ADDED DIFFICUTLY");
                    this.DISASTER_FACTORS.DISASTER_CHANCE += .2;
                    this.DISASTER_FACTORS.INVASION += .2;
                    this.disasterBoosted = 1;
                }
                else if (this.citizensStat.population < 75 && this.disasterBoosted == 1)
                {
                    this.DISASTER_FACTORS.DISASTER_CHANCE -= .2;
                    this.DISASTER_FACTORS.INVASION -= .2;
                    this.disasterBoosted = 0;
                }

                if (this.mercenaryTimer > 0)
                {
                    this.mercenaryTimer -= 1;
                }
                else
                {
                    this.mercenaryProtection = 0;
                }

                if (this.gracePeriod > 0)
                {
                    this.gracePeriod -= 1;
                }
                
                for (var i = 0; i < this.satBoosts.length; i++)
                {
                    if (this.satBoosts[i].ramp < this.satBoosts[i].full)
                    {
                        this.satBoosts[i].ramp += 1;
                        this.satBoosts[i].sat = (this.satBoosts[i].startSat * (this.satBoosts[i].ramp / this.satBoosts[i].full));
                    }
                    else if (this.satBoosts[i].lag > 0)
                    {
                        this.satBoosts[i].lag -= 1;
                        this.satBoosts[i].sat = this.satBoosts[i].startSat;
                    }
                    else
                    {
                        if (this.satBoosts[i].time <= 0)
                        {
                            this.satBoosts.splice(i, 1);
                            continue;
                        }
                        else
                        {
                            this.satBoosts[i].time -= 1;
                            this.satBoosts[i].sat = (this.satBoosts[i].startSat * (this.satBoosts[i].time / this.satBoosts[i].startTime));
                        }

                    }
                }

                if (this.citizensStat.population > this.buildingNum.houses * this.HOUSE_FACTORS.BEDS)
                {
                    console.log("beep bop boop.");
                    var leaving = this.citizensStat.population - this.buildingNum.houses * this.HOUSE_FACTORS.BEDS;
                    if (leaving == 1)
                    {
                        this.citizensStat.population -= 1;
                        this.killPeople(leaving, 0);
                        this.commentArray.push({text: "Builder: " + leaving + " person couldn't find a place to live and left!", timer: 5, noise: 0, played: 0, bold: 1});
                    }
                    if (leaving > 1)
                    {
                        this.citizensStat.population -= leaving;
                        this.killPeople(leaving, 0);
                        this.commentArray.push({text: "Builder: " + leaving + " people couldn't find a place to live and left!", timer: 5, noise: 0, played: 0, bold: 1});
                    }
                }
                var divString = "";
                var trackIds = [];
        
                for (var i = 0; i < this.specialsArray.length; i++)
                {
                    
                    this.specialsArray[i].time -= 1;
                    if (this.specialsArray[i].time <= 0)
                    {
                        this.specialsArray.splice(i, 1);
                    }
                }
                if (this.specialsArray.length == 0 && !this.isGameOver)
                {
                    document.getElementById("specialsDiv").style.backgroundColor = "rgba(0, 0, 0, 0)";
                }
                else if (!this.isGameOver)
                {
                    document.getElementById("specialsDiv").style.backgroundColor = "rgba(114, 114, 114, 0.274)";
                }
                if (this.specialsArray.length <= 6)
                {
                    for (var i = 0; i < this.specialsArray.length; i++)
                    {
                            divString += "</div><div class=\"row\"><div class=\"col-lg-12 center\"><div id=\"specialsBar\"><div class=\"" + this.specialsArray[i].id + "\" id=\"special" + i + "\"><p id=\"specialTitle\">" + this.specialsArray[i].title + "</p></div></div><div id=\"progressBarSpace\" v-else></div></div></div>";
                            trackIds.push(this.specialsArray[i].id);
                    }
                }
                else
                {
                    for (var i = 0; i < 6; i++)
                    {
                            divString += "</div><div class=\"row\"><div class=\"col-lg-12 center\"><div id=\"specialsBar\"><div class=\"" + this.specialsArray[i].id + "\" id=\"special" + i + "\"><p id=\"specialTitle\">" + this.specialsArray[i].title + "</p></div></div><div id=\"progressBarSpace\" v-else></div></div></div>";
                            trackIds.push(this.specialsArray[i].id);
                    }
                }
                if (!this.isGameOver)
                {
                    document.getElementById("specialsDiv").innerHTML = divString;
                }
                divString = "";
                if (this.specialsArray.length <= 6)
                {
                    for (var i = 0; i < this.specialsArray.length; i++)
                    {
                        if (!this.isGameOver)
                        {
                            document.getElementById("special" + i).style.width = (this.specialsArray[i].time / this.specialsArray[i].starttime * 100) + "%";
                        }
                    }
                }
                else
                {
                    for (var i = 0; i < 6; i++)
                    {
                        if (!this.isGameOver)
                        {
                            document.getElementById("special" + i).style.width = (this.specialsArray[i].time / this.specialsArray[i].starttime * 100) + "%";
                        }
                    }
                }

                

                if (this.timeSinceInvasion > 0)
                {
                    console.log(this.timeSinceInvasion);
                    this.timeSinceInvasion -= 1;
                }
                else if (this.timeSinceInvasion == 0)
                {
                    console.log(this.timeSinceInvasion);
                    this.timeSinceInvasion = this.INVASION_FACTORS.TIME + Math.floor(Math.random() / 18 * 100);
                    this.invasionChance();
                }

                
                if (this.timeSinceDisaster > 0)
                {
                    console.log(this.timeSinceDisaster);
                    this.timeSinceDisaster -= 1;
                    
                }
                else if (this.timeSinceDisaster == 0)
                {
                    console.log(this.timeSinceDisaster);
                    this.timeSinceDisaster = this.DISASTER_FACTORS.TIME + Math.floor(Math.random() / 18 * 100);
                    this.disasterChance();
                }
            },
            elapsedTime()
            {
                this.reduceTimers();
                if (this.i < 100)
                {
                    this.i += 2;
                }
                else // Second Counter
                {
                    this.i = 0;
                    
                    if (this.secondsTime < 1)
                    {
                        this.secondsTime += 1;
                    }
                    else // -----------------------------------------------------DAY
                    {
                        this.secondsTime = 0;

                        this.oneDay();

                        if (this.dayTime < 31)
                        {
                            this.dayTime += 1; 
                        }
                        else
                        {
                            this.dayTime = 0;

                            if (this.rampDifficulty)
                            {
                                if (this.DISASTER_FACTORS.DISASTER_CHANCE < 1)
                                {
                                    this.DISASTER_FACTORS.DISASTER_CHANCE += .025;
                                }
                                if (this.DISASTER_FACTORS.INVASION < 1)
                                {
                                    this.DISASTER_FACTORS.INVASION += .025;
                                }
                            }
                            var totalMonths = this.monthTime + this.yearTime * 12;
                            if (this.monthTime > 0)
                            {
                                this.monthActions.average = Math.round(((this.monthActions.average * totalMonths) / (totalMonths + 1)) + (this.monthActions.thismonth * (1 / totalMonths)));
                                console.log(Math.round(((this.average * totalMonths) / (totalMonths + 1)) + (this.monthActions.thismonth * (1 / totalMonths))));
                            }
                            else
                            {
                                this.monthActions.average = this.monthActions.thismonth;
                            }

                            this.monthActions.thismonth = 0;

                            if (this.famine < 1)
                            {
                                this.famine += .2
                            }

                            if (this.monthTime < 11)
                            {
                                this.monthTime += 1;
                            }
                            else
                            {
                                this.monthTime = 0;
                                this.yearTime += 1;
                                if (this.yearTime == 1)
                                {
                                    this.rampDifficulty = 1;
                                }
                            }
                            this.newMonth();
                            this.immigrationChance();
                        }
                    }
                }
            },
            newMonth()
            {
                this.specialItemUsed = 0;
                if (this.specialItem < 6)
                {
                    this.specialItem += 1;
                }
                else
                {
                    this.specialItem = 0;
                }
                
                this.resourceStat.lumber += this.monthlyIncome.lumberRate;
                if ((this.resourceStat.food + this.monthlyIncome.foodRate) < 0)
                {
                    console.log("ur dyign");
                    var deadPeople = Math.round((this.resourceStat.food + this.monthlyIncome.foodRate) / this.CITIZEN_FACTORS.FOOD_NEEDS);
                    if (this.citizensStat.population + deadPeople <= 0)
                    {
                        this.citizensStat.population = 0;
                        console.log("death");
                        this.deathString = "You stumble down clutching your stomach. You're the last alive, but not much longer. No one hears as you succumb to a painful death by starvation."
                        this.isGameOver = 1;
                        notGameOver = 0;
                        if (this.gameOverNoisePlayed == 0)
                        {
                            this.gameOverNoisePlayed = 1;
                            this.playSound(this.SOUNDS.gameover.sound, this.SOUNDS.gameover.volume);
                            pauseMusic();
                        }
                    }
                    else
                    {
                        this.citizensStat.population += deadPeople;
                        this.killPeople(deadPeople, 0);
                        this.commentArray.push({text: "Builder: Sire, our people are dying of stavation, we lost " + Math.abs(deadPeople) + " good people.", timer: 5, noise: 0, played: 0, bold: 1});
                        this.satBoosts.push({sat: 0, startSat: this.STARVE_FACTORS.SAT_DEPRESSION, time: 30, startTime: 30, lag: 0, ramp: 0, full: 10});
                        this.specialsArray.push({time: 30, starttime: 30, id: "Mourn", title: "Mourning"});
                    }
                    this.resourceStat.food = 0;
                }
                else
                {
                    this.resourceStat.food += this.monthlyIncome.foodRate;
                }
                this.resourceStat.stone += this.monthlyIncome.stoneRate;
                if ((this.resourceStat.gold += this.monthlyIncome.goldRate) < 0)
                {
                    this.resourceStat.gold = 0;
                    var goldDebt = -(this.resourceStat.gold += this.monthlyIncome.goldRate);
                    for (var i = 0; i < goldDebt;)
                    {
                        if (this.laborDistribution.catapult > 0)
                        {
                            this.laborDistribution.catapult -= 1;
                            this.laborDistribution.free += 2;
                            i + this.CATAPULT_FACTORS.MONTHLY_WAGE;
                        }
                        else if (this.laborDistribution.archer > 0)
                        {
                            this.laborDistribution.archer -= 1;
                            this.laborDistribution.free += 1;
                            i + this.ARCHER_FACTORS.MONTHLY_WAGE;
                        }
                        else if (this.laborDistribution.soldier > 0)
                        {
                            this.laborDistribution.soldier -= 1;
                            this.laborDistribution.free += 1;
                            i + this.SOLDIER_FACTORS.MONTHLY_WAGE;
                        }
                        else 
                        {
                            this.resourceStat.gold += this.monthlyIncome.goldRate;
                        }
                    }
                    this.commentArray.push({text: "Builder: Sire we cannot afford to pay our army, those who were not paid have left their posts", timer: 5, noise: 1, played: 0, bold: 1});
                    this.citizensStat.satisfaction -= this.BANKRUPT_FACTORS.SAT_DEPRESSION;
                }
                else
                {
                    this.resourceStat.gold += this.monthlyIncome.goldRate;
                }
                
            },
            updateColors()
            {
                if (!this.isGameOver)
                {
                    var enabled = "rgb(0,0,0)";
                    var disabled = "rgb(177, 177, 177)";
                    var max = "rgb(191, 191, 191)";
                    if (this.forestPage)
                    {
                        if (this.buttonsColor.gatherWood == 0)
                        {
                            document.getElementById("gatherWoodButton").style.color = disabled;
                        }
                        else if (this.buttonsColor.gatherWood == 1)
                        {
                            document.getElementById("gatherWoodButton").style.color = enabled;
                        }

                        if (this.buttonsColor.huntFood == 0)
                        {
                            document.getElementById("huntFoodButton").style.color = disabled;
                        }
                        else if (this.buttonsColor.huntFood == 1)
                        {
                            document.getElementById("huntFoodButton").style.color = enabled;
                        }
                    }
                    if (this.workshopPage)
                    {
                        if (this.buttonsColor.house == 0)
                        {
                            document.getElementById("houseButton").style.color = disabled;
                        }
                        else if (this.buttonsColor.house == 1)
                        {
                            document.getElementById("houseButton").style.color = enabled;
                            if (this.resourceStat.lumber >= this.HOUSE_FACTORS.LUMBER_COST)
                            {
                                document.getElementById("houseLumber").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("houseLumber").style.color = "rgb(194, 146, 146)";
                            } 
                        }
                        else if (this.buttonsColor.house == 2)
                        {
                            document.getElementById("houseButton").style.color = max;
                        }
                        if (this.buildingNum.houses >= 2)
                        {
                            var ratio = (this.buildingNum.houses / this.HOUSE_FACTORS.PER_LAND * 100 - 5)
                            document.getElementById("houseSpan").style.width = ratio + "%";
                        }

                        if (this.buttonsColor.farm == 0)
                        {
                            document.getElementById("farmButton").style.color = disabled;
                        }
                        else if (this.buttonsColor.farm == 1)
                        {
                            document.getElementById("farmButton").style.color = enabled;
                            if (this.resourceStat.lumber >= this.FARM_FACTORS.LUMBER_COST)
                            {
                                document.getElementById("farmLumber").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("farmLumber").style.color = "rgb(194, 146, 146)";
                            }
                        }
                        else if (this.buttonsColor.farm == 2)
                        {
                            document.getElementById("farmButton").style.color = max;
                        }
                        if (this.buildingNum.farm)
                        {
                            ratio = (this.buildingNum.farm / this.FARM_FACTORS.PER_LAND * 100)
                            document.getElementById("farmSpan").style.width = ratio + "%";
                        }

                        if (this.buttonsColor.workshop == 0)
                        {
                            document.getElementById("CworkshopButton").style.color = disabled;
                        }
                        else if (this.buttonsColor.workshop == 1)
                        {
                            document.getElementById("CworkshopButton").style.color = enabled;
                            if (this.resourceStat.lumber >= this.CW_FACTORS.LUMBER_COST)
                            {
                                document.getElementById("workshopLumber").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("workshopLumber").style.color = "rgb(194, 146, 146)";
                            }
                        }
                        else if (this.buttonsColor.workshop == 2)
                        {
                            document.getElementById("CworkshopButton").style.color = max;
                        }
                        if (this.buildingNum.carpenter)
                        {
                            ratio = (this.buildingNum.carpenter / this.CW_FACTORS.PER_LAND * 100)
                            document.getElementById("CworkshopSpan").style.width = ratio + "%";
                        }

                        if (this.buttonsColor.townsqr == 0)
                        {
                            document.getElementById("townsqrButton").style.color = disabled;
                        }
                        else if (this.buttonsColor.townsqr == 1)
                        {
                            document.getElementById("townsqrButton").style.color = enabled;
                            if (this.resourceStat.lumber >= this.TOWN_SQR_FACTORS.LUMBER_COST)
                            {
                                document.getElementById("townsqrLumber").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("townsqrLumber").style.color = "rgb(194, 146, 146)";
                            }
                            if (this.resourceStat.gold >= this.TOWN_SQR_FACTORS.GOLD_COST)
                            {
                                document.getElementById("townsqrGold").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("townsqrGold").style.color = "rgb(194, 146, 146)";
                            }
                        }
                        else if (this.buttonsColor.townsqr == 2)
                        {
                            document.getElementById("townsqrButton").style.color = max;
                        }
                        if (this.buildingNum.townsqr)
                        {
                            ratio = (this.buildingNum.townsqr / this.TOWN_SQR_FACTORS.PER_LAND * 100)
                            document.getElementById("townSqrSpan").style.width = ratio + "%";
                        }


                        if (this.buttonsColor.lumbermill == 0)
                        {
                            document.getElementById("lumberMillButton").style.color = disabled;
                        }
                        else if (this.buttonsColor.lumbermill == 1)
                        {
                            document.getElementById("lumberMillButton").style.color = enabled;
                            if (this.resourceStat.lumber >= this.LM_FACTORS.LUMBER_COST)
                            {
                                document.getElementById("lumberLumber").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("lumberLumber").style.color = "rgb(194, 146, 146)";
                            }
                        }
                        else if (this.buttonsColor.lumbermill == 2)
                        {
                            document.getElementById("lumberMillButton").style.color = max;
                        }
                        if (this.buildingNum.lumbermill)
                        {
                            ratio = (this.buildingNum.lumbermill / this.LM_FACTORS.PER_LAND * 100)
                            document.getElementById("lumbermillSpan").style.width = ratio + "%";
                        }

                        if (this.buttonsColor.mine == 0)
                        {
                            document.getElementById("mineButton").style.color = disabled;
                        }
                        else if (this.buttonsColor.mine == 1)
                        {
                            document.getElementById("mineButton").style.color = enabled;
                            if (this.resourceStat.lumber >= this.MINE_FACTORS.LUMBER_COST)
                            {
                                document.getElementById("mineLumber").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("mineLumber").style.color = "rgb(194, 146, 146)";
                            }
                        }
                        else if (this.buttonsColor.mine == 2)
                        {
                            document.getElementById("mineButton").style.color = max;
                        }
                        if (this.buildingNum.mine)
                        {
                            ratio = (this.buildingNum.mine / this.MINE_FACTORS.PER_LAND * 100)
                            document.getElementById("mineSpan").style.width = ratio + "%";
                        }

                        if (this.buttonsColor.tavern == 0)
                        {
                            document.getElementById("tavernButton").style.color = disabled;
                        }
                        else if (this.buttonsColor.tavern == 1)
                        {
                            document.getElementById("tavernButton").style.color = enabled;
                            if (this.resourceStat.lumber >= this.TAVERN_FACTORS.LUMBER_COST)
                            {
                                document.getElementById("tavernLumber").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("tavernLumber").style.color = "rgb(194, 146, 146)";
                            }
                            if (this.resourceStat.stone >= this.TAVERN_FACTORS.STONE_COST)
                            {
                                document.getElementById("tavernStone").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("tavernStone").style.color = "rgb(194, 146, 146)";
                            }
                        }
                        else if (this.buttonsColor.tavern == 2)
                        {
                            document.getElementById("tavernButton").style.color = max;
                        }
                        if (this.buildingNum.tavern)
                        {
                            ratio = (this.buildingNum.tavern / this.TAVERN_FACTORS.PER_LAND * 100)
                            document.getElementById("tavernSpan").style.width = ratio + "%";
                        }
                        
                        if (this.buttonsColor.market == 0)
                        {
                            document.getElementById("marketButton").style.color = disabled;
                        }
                        else if (this.buttonsColor.market == 1)
                        {
                            document.getElementById("marketButton").style.color = enabled;
                            if (this.resourceStat.lumber >= this.MARKET_FACTORS.LUMBER_COST)
                            {
                                document.getElementById("marketLumber").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("marketLumber").style.color = "rgb(194, 146, 146)";
                            }
                            if (this.resourceStat.gold >= this.MARKET_FACTORS.GOLD_COST)
                            {
                                document.getElementById("marketGold").style.color = "rgb(194, 146, 146)";
                            }
                            else
                            {
                                document.getElementById("marketGold").style.color = "rgb(194, 146, 146)";
                            }
                        }
                        else if (this.buttonsColor.market == 2)
                        {
                            document.getElementById("marketButton").style.color = max;
                        }
                        if (this.buildingNum.market)
                        {
                            ratio = (this.buildingNum.market / this.MARKET_FACTORS.PER_LAND * 100)
                            document.getElementById("marketSpan").style.width = ratio + "%";
                        }
                        if (this.buttonsColor.barracks == 0)
                        {
                            document.getElementById("barracksButton").style.color = disabled;
                        }
                        else if (this.buttonsColor.barracks == 1)
                        {
                            document.getElementById("barracksButton").style.color = enabled;
                            if (this.resourceStat.lumber >= this.BRK_FACTORS.LUMBER_COST)
                            {
                                document.getElementById("barracksLumber").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("barracksLumber").style.color = "rgb(194, 146, 146)";
                            }
                            if (this.resourceStat.stone >= this.BRK_FACTORS.STONE_COST)
                            {
                                document.getElementById("barracksStone").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("barracksStone").style.color = "rgb(194, 146, 146)";
                            }
                        }
                        else if (this.buttonsColor.barracks == 2)
                        {
                            document.getElementById("barracksButton").style.color = max;
                        }
                        if (this.buildingNum.barracks)
                        {
                            ratio = (this.buildingNum.barracks / this.BRK_FACTORS.PER_LAND * 100)
                            document.getElementById("barracksSpan").style.width = ratio + "%";
                        }
                        if (this.buttonsColor.walls == 0)
                        {
                            document.getElementById("wallsButton").style.color = disabled;
                        }
                        else if (this.buttonsColor.walls == 1)
                        {
                            document.getElementById("wallsButton").style.color = enabled;
                            if (this.resourceStat.lumber >= this.WALL_FACTORS.LUMBER_COST)
                            {
                                document.getElementById("wallLumber").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("wallLumber").style.color = "rgb(194, 146, 146)";
                            }
                            if (this.resourceStat.stone >= this.WALL_FACTORS.STONE_COST)
                            {
                                document.getElementById("wallStone").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("wallStone").style.color = "rgb(194, 146, 146)";
                            }
                        }
                        else if (this.buttonsColor.walls == 2)
                        {
                            document.getElementById("wallsButton").style.color = max;
                        }
                        if (this.buildingNum.walls)
                        {
                            ratio = (this.buildingNum.walls / this.WALL_FACTORS.PER_LAND * 100)
                            document.getElementById("wallSpan").style.width = ratio + "%";
                        }


                        if (this.buttonsColor.siege == 0)
                        {
                            document.getElementById("siegeButton").style.color = disabled;
                        }
                        else if (this.buttonsColor.siege == 1)
                        {
                            document.getElementById("siegeButton").style.color = enabled;
                            if (this.resourceStat.lumber >= this.SIEGE_FACTORS.LUMBER_COST)
                            {
                                document.getElementById("siegeLumber").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("siegeLumber").style.color = "rgb(194, 146, 146)";
                            }
                            if (this.resourceStat.stone >= this.SIEGE_FACTORS.STONE_COST)
                            {
                                document.getElementById("siegeStone").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("siegeStone").style.color = "rgb(194, 146, 146)";
                            }
                            if (this.resourceStat.gold >= this.SIEGE_FACTORS.GOLD_COST)
                            {
                                document.getElementById("siegeGold").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("siegeGold").style.color = "rgb(194, 146, 146)";
                            }
                        }
                        else if (this.buttonsColor.siege == 2)
                        {
                            document.getElementById("siegeButton").style.color = max;
                            document.getElementById("siegeSpan").style.width = "100%";
                        }

                    }
                    if (this.townCenterPage)
                    {
                        document.getElementById("holdFeastButton").style.backgroundImage = "url(\"https://i.ibb.co/S3bbTDn/bluebutton-00000.jpg\")";
                        document.getElementById("holdFeastButton").style.fontSize = "100%";
                        if (this.buttonsColor.holdFeast == 0)
                        {
                            document.getElementById("holdFeastButton").style.color = disabled;
                        }
                        else if (this.buttonsColor.holdFeast == 1)
                        {
                            document.getElementById("holdFeastButton").style.color = enabled;
                            if (this.resourceStat.food >= this.FEAST_FACTORS.FOOD)
                            {
                                document.getElementById("feastFood").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("feastFood").style.color = "rgb(194, 146, 146)";
                            }
                        }
                        if (this.buttonsColor.townFaire == 0)
                        {
                            document.getElementById("townFaireButton").style.color = disabled;
                        }
                        else if (this.buttonsColor.townFaire == 1)
                        {
                            document.getElementById("townFaireButton").style.color = enabled;
                            if (this.resourceStat.food >= this.TOWN_FAIR_FACTORS.FOOD)
                            {
                                document.getElementById("faireFood").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("faireFood").style.color = "rgb(194, 146, 146)";
                            }
                            if (this.resourceStat.gold >= this.TOWN_FAIR_FACTORS.GOLD)
                            {
                                document.getElementById("faireGold").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("faireGold").style.color = "rgb(194, 146, 146)";
                            }
                        }

                    }
                    if (this.barracksPage)
                    {
                        if (this.buildingNum.barracks == 0)
                        {
                            document.getElementById("trainSoldierButton").style.color = disabled;
                        }
                        else if (this.buildingNum.barracks > 0)
                        {
                            document.getElementById("trainSoldierButton").style.color = enabled;
                            if (this.resourceStat.gold >= this.SOLDIER_FACTORS.GOLD_TRAIN)
                            {
                                document.getElementById("soldierGold").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("soldierGold").style.color = "rgb(194, 146, 146)";
                            }
                            if (this.resourceStat.weaponsNum >= this.SOLDIER_FACTORS.WEAPON_TRAIN)
                            {
                                document.getElementById("soldierWeapon").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("soldierWeapon").style.color = "rgb(194, 146, 146)";
                            }
                        }
                        if (this.buildingNum.walls == 0)
                        {
                            document.getElementById("trainArcherButton").style.color = disabled;
                        }
                        else if (this.buildingNum.walls > 0)
                        {
                            document.getElementById("trainArcherButton").style.color = enabled;
                            if (this.resourceStat.gold >= this.ARCHER_FACTORS.GOLD_TRAIN)
                            {
                                document.getElementById("archerGold").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("archerGold").style.color = "rgb(194, 146, 146)";
                            }
                            if (this.resourceStat.weaponsNum >= this.ARCHER_FACTORS.WEAPON_TRAIN)
                            {
                                document.getElementById("archerWeapon").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("archerWeapon").style.color = "rgb(194, 146, 146)";
                            }
                        }
                        if (this.buildingNum.siege == 0)
                        {
                            document.getElementById("buildCatapultButton").style.color = disabled;
                        }
                        else if (this.buildingNum.siege > 0)
                        {
                            document.getElementById("buildCatapultButton").style.color = enabled;
                            if (this.resourceStat.gold >= this.CATAPULT_FACTORS.GOLD_TRAIN)
                            {
                                document.getElementById("catapultGold").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("catapultGold").style.color = "rgb(194, 146, 146)";
                            }
                            if (this.resourceStat.lumber >= this.CATAPULT_FACTORS.LUMBER_COST)
                            {
                                document.getElementById("catapultLumber").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("catapultLumber").style.color = "rgb(194, 146, 146)";
                            }
                            if (this.laborDistribution.soldier >= this.CATAPULT_FACTORS.SOLDIER_COST)
                            {
                                document.getElementById("catapultSoldier").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("catapultSoldier").style.color = "rgb(194, 146, 146)";
                            }
                        }
                        if (this.buildingNum.carpenter == 0)
                        {
                            document.getElementById("makeWeaponsButton").style.color = disabled;
                        }
                        else if (this.buildingNum.carpenter > 0)
                        {
                            document.getElementById("makeWeaponsButton").style.color = enabled;
                            if (this.resourceStat.gold >= this.WEAPON_FACTORS.GOLD_COST)
                            {
                                document.getElementById("weaponGold").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("weaponGold").style.color = "rgb(194, 146, 146)";
                            }
                            if (this.resourceStat.stone >= this.WEAPON_FACTORS.STONE_COST)
                            {
                                document.getElementById("weaponStone").style.color = "rgb(192, 192, 192)";
                            }
                            else
                            {
                                document.getElementById("weaponStone").style.color = "rgb(194, 146, 146)";
                            }
                        }
                    }
                    if (this.marketPage)
                    {
                        if (!this.specialItemUsed)
                        {
                            if (this.specialItem == 4)
                            {
                                document.getElementById("specialItemButton").style.fontSize = "100%";
                            }
                            else
                            {
                                document.getElementById("specialItemButton").style.fontSize = "150%";
                            }
                        }
                        if (this.buildingNum.market == 1)
                        {
                            var elements = document.getElementsByClassName('marketButton');
                            for (var k in elements)
                            {
                                if (elements.hasOwnProperty(k))
                                {
                                    elements[k].style.color = "black";
                                }
                            }
                            
                            var divString = "";
                            if (!this.specialItemUsed)
                            {
                                for (var i = 0; i < this.SPECIAL_ITEMS_PRINT[this.specialItem].price.length; i++)
                                {
                                    var priceRow = "<div class=\"row\" class=\"priceRow\" v-if=\"buildingNum.market\"><div class=\"col-lg-3\"></div><div class=\"col-lg-3\"><p class=\"priceItem\">" + this.SPECIAL_ITEMS_PRINT[this.specialItem].price[i].item +  "</button></div><div class=\"col-lg-3\"><p class=\"price\">" + this.SPECIAL_ITEMS_PRINT[this.specialItem].price[i].price + "</p></div><div class=\"col-lg-3\"></div></div>";
                                    divString += priceRow;
                                }
                                document.getElementById("specialItems").innerHTML = divString;
                            }
                            
                            //specialItems
                        }
                        if (!this.specialItemUsed)
                        {
                            document.getElementById("specialItemButton").style.backgroundImage = "url(\"" + this.getSpecialUrl() + "\")";
                        }
                        

                    }
                }
            },
            disasterChance()
            {
                
                if (this.DISASTER_FACTORS.DISASTER_CHANCE >= Math.random())
                {
                    if (!hardhardMode)
                    {
                        this.timeSinceInvasion = this.INVASION_FACTORS.TIME + Math.floor(Math.random() / 18 * 100);
                    }
                    else
                    {
                        this.timeSinceInvasion = this.INVASION_FACTORS.TIME;
                    }
                    
                    var disasterSelect = Math.round(100 * Math.random()) % 4;
                    if (disasterSelect == 0)
                    {
                        for (var i = 0; i < this.specialsArray.length; i++)
                        {
                            if (this.specialsArray[i].title == "Famine")
                            {
                                while (disasterSelect != 0)
                                {
                                    disasterSelect = Math.round(100 * Math.random()) % 4;
                                }
                                break;
                            }
                        }
                    }

                    switch (disasterSelect)
                    {
                        case 0:
                            this.disasterFamine();
                            break;
                        case 1:
                            this.disasterFire();
                            break;
                        case 2:
                            this.disasterStorm();
                            break;
                        case 3:
                            this.disasterPlague();
                            break;
                        default:
                    }
                }
                else
                {
                    console.log("You got lucky.");
                    return null;
                }
            },
            invasionChance()
            {

                console.log("What? Sorry. I was using this time to think about something useful.");
                if (this.DISASTER_FACTORS.INVASION >= Math.random())
                {
                    if (!hardhardMode)
                    {
                        this.timeSinceDisaster = this.DISASTER_FACTORS.TIME + Math.floor(Math.random() / 18 * 100);
                    }
                    else
                    {
                        this.timeSinceDisaster = this.DISASTER_FACTORS.TIME;
                    }
                    
                    if (this.citizensStat.population <= 30)
                    {
                        this.disasterRobbers();
                        return null;
                    }
                    else 
                    {
                        this.disasterInvasion();
                        return null;
                    }
                }
            },
            monthlyIncomeCalc()
            {
                
                // Food
                var foodIncome = 0;
                var famineNeeds = 1;
                if (this.famine < 1)
                {
                    famineNeeds = 2;
                }
                foodIncome += (this.laborDistribution.farm * this.FARM_FACTORS.INCOME_PER_WORKER * this.productivety * this.famine);
                foodIncome -= Math.round(this.citizensStat.population * this.CITIZEN_FACTORS.FOOD_NEEDS * famineNeeds);
                this.monthlyIncome.foodRate = Math.round(foodIncome);
                // Lumber
                var lumberIncome = 0;
                lumberIncome += (this.laborDistribution.lumber * this.LM_FACTORS.INCOME_PER_WORKER * this.productivety);
                this.monthlyIncome.lumberRate = Math.round(lumberIncome);
                // Stone
                var stoneIncome = 0;
                stoneIncome += (this.laborDistribution.mine * this.MINE_FACTORS.INCOME_PER_WORKER * this.productivety);
                this.monthlyIncome.stoneRate = Math.round(stoneIncome);
                // Gold
                var goldIncome = 0;
                goldIncome += Math.round(this.citizensStat.population * (this.CITIZEN_FACTORS.CIT_INCOME * this.citizensStat.taxRate * this.productivety));
                goldIncome += (this.TAVERN_FACTORS.INCOME_PER_WORKER * this.laborDistribution.tavern * this.productivety);
                goldIncome += (this.buildingNum.market * this.MARKET_FACTORS.GOLD_INCOME);
                goldIncome -= (this.laborDistribution.soldier * this.SOLDIER_FACTORS.MONTHLY_WAGE);
                goldIncome -= (this.laborDistribution.archer * this.ARCHER_FACTORS.MONTHLY_WAGE);
                goldIncome -= (this.laborDistribution.catapult * this.CATAPULT_FACTORS.MONTHLY_WAGE);
                this.monthlyIncome.goldRate = Math.round(goldIncome);
            },
            reduceTimers()
            {
                this.j += .3 * Math.random();
                for (var i = 0; i < this.commentArray.length; i++)
                {
                    if (this.commentArray[i].timer > 0)
                    {
                        this.commentArray[i].timer -= .01;
                    }
                    else
                    {
                        this.commentArray.splice(i, 1);
                    }
                }
                if (!this.isGameOver)
                {
                    var angle = Math.cos(this.j) * 1.5 + 210;
                    document.getElementById("rightScreen").style.backgroundImage = "linear-gradient(" + angle + "deg, rgba(136, 116, 78, 0.5) 0%, rgba(0, 0, 0, .8) 75% 100%), url(\"https://cdna.artstation.com/p/assets/images/images/006/295/132/large/sergiu-matei-planks-seemless-tile-pixel-art-rpg-top-view-indie-game-dev-matei-sergiu.jpg?1497472734\")";
                    var newAngle = Math.sin(this.j) * 20 + 120;
                    document.getElementById("rightScreen").style.backgroundImage = "linear-gradient(" + newAngle +"deg, rgba(226, 211, 165, .3) 0%, rgba(0, 0, 0, .4) 70% 100%), url(\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhMTEhMWExUVFRcVFRUVGRcXFRcXFRUXFhUSFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFQ8PFysZFRkrLS0tLS0rLTcrLS0tKy0rNy03NzctLS0rKy0rKy0rKy0rLSsrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAADBAUCAAEG/8QAOhAAAQMDAQYEBAYBAwQDAAAAAQACEQMEITEFEkFRYZEUcYGhE8HR8BUiMkJSseEjYvEkQ1PCcoKi/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAED/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwCZUpgA54KWX/6oPT5FN1q8pB1QCoM8Pks2ixbWoP5nHdkcdEKtagHXVap3Yc0Bxx5LLq4PHREHpWLeL4PLCMbNn8/6SRr5mVzrieKAlZoGhnKibQGW+qolwOunBIXFQEjKYrqVGRMpmmyBGq6nTjARQd3LsBAvauhzvviqNG0aQSXQRwwpNKs3ednj80+ypzQGZaAugugc1t9EDDTvfeqXdXOg0WqdaOOUQd1IAaqXVfNRp++KcrV5hT6tQB7fvmiq9tbB0OcS2e3LisV7YDQzldQvAWhpOPLqvH1xpOOCINSsW8Xx2RzZs/n/AEknVwYzovXXM8UBK7GjR09lF2kNPMp8vBOdEjdVBjPFMV5RpSmabIEarqdOMBEH5cnAQL0HQ9yo0LVrpl0ctMqWKzd9xlPU6vP0QFbaCQJxxPJFfQDcNO9CWdXOg0XtOtHHKIJunkVy98V19lyCFSrOOJWnWryZJE/fRHs2Tw4qpRpQJ16KqkU7eroHDv8A4RXUXjVwV2jcDTcHn9haqXDR+wHt9FEfPbj+azLpiVWuwOmiW2YB8cTyOvkivG7KrOaC1zc5yT9ECrsSqIJcznqforbsOOccuSW3jOvFESSyo3V3ZZl9T8od1z0Ve6aDy0S2ziG1jMH8p+SKSp7LqHQt7n6Kh+D1v5N7n6Jtzt4mMZWH1ieJHqiFHbGuOD2dz9EF2zK4Mb7e5+if+IeZ7rzf6oIjKrpIJyDC9davJkkffomLduXefzKpUaUCdYOiqpFO3qaBw+/RGNGoBlw+/RXKNcabg88fRbqXDR+wHt9FEfPbj+ayS6YlV7kDkNCkrIf67J+8FFaZsus5oc1zRPMn6INbYdUZLmdz9FbqCHGDjlwSrnmdTqiJRp1G6uHPH/CxvPf+Xe156YyrF00Hlok7OG1xoRB/pFKM2XUJwW9z9FQGyK38m9z9E49wcSBhDfWJ4nHVEKv2NX4PZ3P0QX7Mrgxvt7n6J74h5nuvC/r7oEfw6v8Azb3P0XJ3e6rlQjY1g0GSBmc9Eb8REzLUU7PY79LempQa+yA0/p90GnbQBxLVqjW3p0wl2WTBkj3KDa3LGl0mOWOUqKddnXBS9F5FWQJx8lk3jTmfZCp3TQ/enH+EFpoByTBOqEUmb0cDjyWPHt5+yIPWcNUrSI3zJgRqsV63LRYtWbzukKqcFy0E/mC5tyBxCJ+H0gJc3XqdUpbWofqJzGqAla6GoIleMrg8RKYbsQnIb/8ApbbsbdyW+6gVsaoG9JA0ifVHO0RIMtRTs9h/S3zyUKvsgN/bw5qo9dtEHEtWqNbe5Jdtk0ZI9yg0LhjHukwNBrzRTrs645JZriKrSNf8Fcbxp46dEFt03fDpx5KCy2CJJgnUIZSZvRwOPJYO0Bz9kQxXcPZKNcN/Jxz9FmvX5HEZQrZu84Dh9Aqp0XDQT+YLhcgcRlEGz6YEvbr1OvolKFsHk4mDhASrdN1kSvKdcEaiUwzYpOjfdabsbdyW+6gB8UcwuTP4c3+PuuQIt2ny3giVNonUlxWPCfcI9KgAMnugWbfA80GjQ3idNUxQoj4rs8PoqVOg0fuHsqA0dnB2AGjgtP2TBj8vZO06oa0iQeOqWfUkyoiXtKjuARAzGPJBtbeeWoVDadSWtHI/JaoM9oVUKpbDSBlAs2btUt5D6KyT+44jgplGr/1Lz0+QRD90yWt++Ck21xu89Zwna9WemqBYNBBPIqKKdqGIBcEB+1joS4+qedWgbsA9VLNKajuCAjdp8t5EftE8S4rHhPuEajQAGTx4oFxfg4ygMo7znH1ymWUh8U54fJUqVBozvD2VAKOzwdA0LdTZMGPy9k7RqBoOQZ6pZ9WT/lRE3aNvuNxAyBhK29CeSqbRqTTjqFmgyR6BVWKlsNIGUvb0y2sG9OGmitEzk4jgphqf9SD0/wDVMRQuGyxqkUa26Trrw6J6vWnplLWLZ3uhHzUUf8UxguCA/ap0JcfVOmtGAAZUyrS3qh4f8BUE/FP/AJey5eeG6rxAVtWtxaPv1S91XdBkBWajZBI4AypdzTBBMKBe0quBkAaJgvfyRrOgIBjgmGFnEIED8U/pbP35riyv/D+vqrDWtglohcKgjKqIVVtU6t++62yvVGjR9+qquLf3DHBCqOZ+0IpGtf1DhwAPKP8AKFTDp34yeyI+mDUHkqFG0PSEEyuHmMLy2NRgIDcE5lfQi2Y0AvbqMRK9+HRIMN/v6qIhfEqDIAlYpioXE7uqrm3ByBhbpUm6RnigmMq1uLR9+qDc3DoMgaKw9oM7vDVS69MEExwVUra1HTICZL38giWVAQDHNNNLATIUCB+Kf0tn781xZX/h/X1VhjGwSAubVEZVRDqiqRlv33WqdaqNGj79VVeW8RhDe5nAIpCrtCp+4NB4Y/yg0w4nfjPsi1mAvan6NoekIJ1bfI0WLf4jJhuusr6FtsxoBe3B89VoU6JBhv8Af1UqIXxKg0AlYb8QuktyVXNuD+kYW6dJoxGUEuKn8VysfCHJeoVHqX3IFI17je0BCuG0yAJKaZZAN1M8lR89SvYAEHCL4noVZfbEaAn0S9W2iMnKCebwgce6H+IdD3T1SlHBIvpTU++SK029ngVrxPRN0rfA10TjLBv7nFvKYCgiit+YOjRGdenhI9Vap2LOD57IFzYwSRJ9ERJq7UJgQ7HVeN2nAIg91T8IOJI7JG9t/PQqgLNoHQb3dbpbQycHuvbFmAPNP0aMa4RSL77kCPVJVrne0BGFbfacpMpqnZAA5M8AiPnaF5utAg4RhdTwKtPtiBgE+iXq20ZzJ1CCf4wjn3QvxDoe6fq0iOBSFanLx5Ir1t9PArXieibo0MDVOMsG/ucW+cBQRjV/MDGiM69PCR6q1TsmcHz2QbqxiSJOiIk1NqGIh2OqyzacTg91TFoIyYSd5befFULt2if93dbZtD82h7rywZiOqoUqOZ4Ipb8R6HuuT/wxzXKI8ZdjnnhhaZekuBJ9lI8SOq9FyOqLF7xvX2StxWGMqZ4zzXjrscZRIbrVp7JRkfEzy+SGbsEGJQKNyA/edJCsVcpujRFfW3h+bhopAvwdJ9lo3nmoipb1wBMor79p1PsVC8e3TPsvPHN5H2+qoq1a3bggXz5GeRSviweaHXvBBGZIwoo9kcD1VNr2kCSvnrW4iAZVBt80DQ+31QPsuhmT5YK9F8S4En2Uo3I6rhcjqhF7xvX2S1zWB48VL8Z5rw3YPNEhytXlJ/8AcE/eqH4sEGJS9O5/OHGSBqPRWKuUnRojOrbwh3DRSBtAE4kdvqteM81EVLeuAJniiuvwcT7FQhtBvJ3svPHN5H2VFarWny4IF4+QPIpQXYI4rFa8EZnioolkceqqMe0tEr562uIgEnVUGXrQIg+31VFH8v3K5IePbyPt9VyiHX24AJxgToppd/qAxw09CnK9eeSQNQCoPvgiqttZB2SQJHEIVWzAOvHki07oOaGkgAZlZfWB4jCI3R2YDneA6R/lH/DW/wAh2H1Spr5nC9dcTjCDq1BreRzGgUa/GW+qpFwODokLh4JAnois0qEifkmGUgBET6LVOnGAis/Lk4CBa1MOdif+VQo2AcCd4COimUqg3nZ4/NPsqc0G2WILgJA6wiVLYNxgx0QX3BiBELVKtGcIghtxHDsptV3+o3Hp3TtevMaKfUfD2oqpbWgdDsCeixXswDqDnkiUbsFgaSI58dVl9YaSICI1R2YD+4D0/wApj8Nb/Idh9Uq6vMaYXrriRGEHta3a3kfQKPtEaRzKoOcCYOiRu3jGeKKHSoz0TNOkAI19F7SpxgIrcZOBzQL0DD3YT9CxDpO8BHRThVG+7Kdp1OaDbbEbwEjPGEWpahuJDo6ILrgjAiF7SrRnEoj34Y5ey5E8V5LkEKlcPPHPDRc+hUJkxPoj2bByGqqUaIAkwVVSadOroCPZFLKg1j2VyhUp6bgnnAWqr6fFg7BRHz8P5/0s775ic+iq3TANABhLbNYDXAIBEHB8kV4Nn1yAWxnOoS1XZFYQSBz1Cv5BMHHADQJb4hJySVUSf9RuSR7LDnvf+UGePAKtdUwcQNEts1oFYggEQcdlFI09nVeEd1Q/DK/TuE67JO7iCvH3DjoSPVEIO2Zc8N3uEJ1lcDGO4VL47v5Hus/EPMoIjK75IJyMcFz6FQmTEo9Bgl2OPzKpUaOJMGCqqTTp1dAR7Ixp1AMx7K3QqU9NwTzgIlSpTGrAfQKI+e/P9wsl75icqvcsHADQpKzaDXYCJHI+RRXMsK7mgtjPUIFbY9bUgdwr7gQ4wYHADQJV9VxOSdURJio3JI58Fg1Xv/KDM+Q0yrF1THIaJOyaG1wCJEHHoqpJmzqpOAO6oDZlfp3CefBJDRurL7g8CR6ohB2zLnhu9whOsbgGPy+ypfHd/I91k1DzKCd4O45j2XKjvnmuQIbPqAAkkazlMePEzjuuds1h/TJ4aoFbZG6dD3CBh98DjHddSqzPRKU7Fo1nusWldjS6THL0lRTjs5OOiXoVN2rIE4+S51005lCpXDRUmcf4QWA0HMxOYQkqbwcCFjxzeY90Qas7KVpEb5zGNVivW5aIVszedHCEU+2uBOR3XNrgcR3XDZtMZdInqlKFoH8DrGFQxWuBrI7rxlUEajutN2KTo09wts2ORktI9QoBWDwC6SOGvqmTfCZx3XO2cw6SeeUCtseOB05hAw6/BxjuupVZSjLBoMme6xbVmNe6TA0HdA47OuISzHxVadY+hXrrpp46ILbhu+DOEFloDhJMTwQylDeDgRCwb5vMIg1dyVaQamuI19FivW5aRlBt27zgOH+EVQFYAnIPqubXA4juubs2nq+RPXilKVqHk64OEDFa4GsjuvKdYEajutN2MTo09wts2MRktI9QgxvjmFyN+Gjke65AszacaE9gt1dpk6kn0CX8J9wmaNsIzHZAEXwPNK0qG8Tpr/aZo0P9V2mn0VOlaAcRnoqFqWzZwAO5Xr9kQYIb3Kp0nBrSNTrKWqVJMz7qIkbQobgEQMwgW1vJ4ahUtqOBa3HH5L2hT48oVUGpajSBJQrJpbVLeQ+isED9UacFNovHiXmOHyCIfu2S1v3wUq1uN3vKdr1Z6a8UtY0wQTjBUUz+LQIDiPQIL9sHQud2CZc5oEbo88KW6jL3cOiBhu1I0J7BEqbTJ1cT6BLeE+4TFC2xmNeSAQvgcZSraO85x9Uy2h/qkYiPkqVK0AzIz0VC1LZwOgHcrb9jxghvcqjQcGg8UvUqydfdREq/t9xuIGQMJW3oTyVXaTppgRxGe6xb05HLAVqsVLUaQJKXtqZbWDeh/pWiAcxEKaXjxIMcNP8A6piKFw2WN8/kpNvW3SfP+k9XqzjTKUs6cl3QqKb/ABaBgkegQH7YOhcewTLnNAjdB64UyrSmoeHT0CBj8W6nsFyD4XqOy5UHbdVONOO6XurgkGRCsVW4McjKl3NMEEqBe0rOBkCcJg1XfxRbO3EAxqEywM4/NBPNSpwZPoVxdV/8Z7FWGU2gEt4LQqAjKqIFV1Q6sI7otO7qD9n9qo7d/dpwQqm5w+aKSrbRcdWgHllAp729vxk9kWpTBqDy+qeo2h5Y80E2u5xj8q8taj2Ajc1PGV9C20YAC8HOmT8l6bejBIn3URD+O8ZDZ7odN7y4nc1Vc2wOgwt0qLfXiqJrLmpxp/2g3NySDIjCsPYD+nhqpdxTBBJ5KKVtKxDpAlMmq7+K3Y24gGOabYGZn5oJ5qVODJ7ri6r/AOM9irDKbYJavW1ARlVEKq+oRlhHoVundVB+z+1Vfu8dEN/w+HzQJVdovP6mgHgMpdhcXb8Z9kWvTl7fvinqFoeWPNFTq7nEfpWLV72TDJnnP3xX0LLRgALwYPU6+i0LeiZifdREP4zxkNQ2veXl25qq5twf0jC3SotHmipe8/8Ah7FcrPwQuRKk1L8cJA4pGvdTpIVl1lkCZnomWbPAbrnlCohUb8BoGcIvih1VV9rHCfRAqWkcdeiKTN9A4of4iP8Ad7JupSj/AISL6M1PvkgIL4HmvfEjkUzTtsDy5Jyns0HV0eYUEcVhvh3AJg3/ACJAVans1v8AIH0CXubGCcz6IJ9ba0gA72PJZZtQAEfmz5J/wI5jskby29MclUeM2lwBctUtoiT+pZsaWAPNPUbcT6ckUq+/HCRzSNe7nSRhWKln1meiZpbPEHPpCiINvfbrQDOOXmjeKBzlVX2sDSfRBqWsZ58IVCXjo5of4iP9ybqUo4eyRrUpeOGEUQXwOMr3xI5FM0bbA+ibp7NB1dHmFBINYbzTyTBv+UgKtT2a3+YPoPqgXNhBOZ9EE6rtaQGnex5LNPagE/q9k+LIc/ZJ3dr8+CoGzaXAby2zaP5s7yHYU8R1VCjbCf8ACAP4mP8Ad7fVcnPDjmOwXKI9p3Q1kSNFtl7LgTCkeIauFyAixf8AGeSUuKoxlTfGdfZeOugdUSGq9aeWiTYB8TPL5LJuhBj+kvRuRvy44/wqq3SdGiNUrb36oEaQpQvhwJ7L03nX2URTtqwAmRqjPvQRBIUIXzdJPZZ8a3r2QVatWfkl758j0KW8UCAsXF2IInMYwii2RwPVUwQWjK+ftbiIBKoMvGxx7IH2XIzJGNFoX0uBMKSbhq4XAQi/4zyStzVB48VM8Z19l466B4okN1688kl/3BP3qs+KaQYlLU7n84LtOKqrdJ0aI7628IdAjSFKF83QE9l74zr7KIpW1UDM6FHfegiJChC+bzPZZ8a3r2QVatWfLggXj5A8ilfFgjos1rsRknTGEVqyOPVVGOBaBK+ftriME8VRp3bQOPZA/uN5rkl4xnXsuRExcuXKq5cVy5AJn6ShrlyqCUNUUrxcopdcuXKoZahVtQuXKK8paoy5cmjly5cg5erxcgEzQoa5cqjdHVGXLlNUsuXLlUMU9AsVuC5coobNUwuXJo8XLlyD/9k=\");";
                }
                if (this.actionCooldowns.gatherWood.time > 0)
                {
                    this.actionCooldowns.gatherWood.time -= 1;
                    this.buttonsColor.gatherWood = 0;

                    var newratio = ((this.actionCooldowns.gatherWood.time.toFixed(2) / this.GATHER_WOOD_FACTORS.TIME.toFixed(2)) * 100);
                    if (this.forestPage)
                    {
                        document.getElementById("gatherWoodSpan").style.width = newratio + "%";
                    }
                }
                else if ((this.actionCooldowns.gatherWood.time == 0) && (this.actionCooldowns.gatherWood.done == 0))
                {
                    this.actionCooldowns.gatherWood.done = 1;
                    this.buttonsColor.gatherWood = 1;

                    if (this.GATHER_WOOD_FACTORS.FREE * this.laborDistribution.free <= this.GATHER_WOOD_FACTORS.FREE * 5)
                    {
                        console.log("killing an imaginary deer for you.");
                        this.resourceStat.lumber += this.GATHER_WOOD_FACTORS.LUMBER + this.GATHER_WOOD_FACTORS.FREE * this.laborDistribution.free;
                    }
                    else
                    {
                        this.resourceStat.lumber += this.GATHER_WOOD_FACTORS.LUMBER + this.GATHER_WOOD_FACTORS.FREE * 5;
                    }
                    this.commentArray.push({text: "Builder: We have returned with the lumber!", timer: 5, noise: 0, played: 0, bold: 0});
                    this.numGatherWood += 1;
                }
                else
                {
                    /*
                    if (this.forestPage)
                    {
                        document.getElementById("gatherWoodButton").style.backgroundImage = "linear-gradient(to right, rgba(50, 50, 50, 0) 0%, rgba(0, 0, 0, 0) 0% 100%)" + this.buttomImageEnd;
                    }
                    */
                }

                if (this.actionCooldowns.huntFood.time > 0)
                {
                    this.actionCooldowns.huntFood.time -= 1;
                    this.buttonsColor.huntFood = 0;
                    var newratio = (this.actionCooldowns.huntFood.time.toFixed(2) / this.HUNT_FACTORS.TIME.toFixed(2) * 100);
                    if (this.forestPage)
                    {
                        document.getElementById("huntFoodSpan").style.width = newratio + "%";
                    }
                }
                else if ((this.actionCooldowns.huntFood.time == 0) && (this.actionCooldowns.huntFood.done == 0))
                {
                    this.actionCooldowns.huntFood.done = 1;
                    this.buttonsColor.huntFood = 1;
                    if (this.HUNT_FACTORS.FREE * this.laborDistribution.free <= 20)
                    {
                        this.resourceStat.food += this.HUNT_FACTORS.FOOD + this.HUNT_FACTORS.FREE * this.laborDistribution.free;
                    }
                    else
                    {
                        this.resourceStat.food += this.HUNT_FACTORS.FOOD + 20;
                    }
                    
                    this.commentArray.push({text: "Builder: The hunting party has returned successful!", timer: 5, noise: 0, played: 0, bold: 0});
                    this.numHuntFood += 1;
                }
                else
                {
                    /*
                    if (this.forestPage)
                    {
                        document.getElementById("huntFoodButton").style.backgroundImage = "linear-gradient(to right, rgba(50, 50, 50, 0) 0%, rgba(0, 0, 0, 0) 0% 100%)" + this.buttomImageEnd;
                    }
                    */
                }
                if (this.actionCooldowns.townFaire.time > 0)
                {
                    this.actionCooldowns.townFaire.time -= 1;
                    this.buttonsColor.townFaire = 0;
                    var newratio = (this.actionCooldowns.townFaire.time.toFixed(2) / this.TOWN_FAIR_FACTORS.TIME.toFixed(2) * 100);
                    if (this.townCenterPage)
                    {
                        document.getElementById("townFaireSpan").style.width = newratio + "%";
                    }
                }
                else if ((this.actionCooldowns.townFaire.time == 0) && (this.actionCooldowns.townFaire.done == 0))
                {
                    this.actionCooldowns.townFaire.done = 1;
                    this.buttonsColor.townFaire = 1;
                    this.playSound(this.SOUNDS.faire.sound, this.SOUNDS.faire.volume);
                    this.specialsArray.push({time: 60, starttime: 60, id: "travelingPerformersSpan", title: "Faire&nbsp;Joy"});
                    this.satBoosts.push({sat: 0, startSat: this.TOWN_FAIR_FACTORS.SAT_BOOST, time: 60, startTime: 60, lag: 0, ramp: 0, full: 10});
                    this.commentArray.push({text: "Builder: The faire was a huge success! Moral is high.", timer: 5, noise: 0, played: 0, bold: 0});
                }
                else
                {
                    /*
                    if (this.townCenterPage)
                    {
                        document.getElementById("townFaireButton").style.backgroundImage = "linear-gradient(to right, rgba(50, 50, 50, 0) 0%, rgba(0, 0, 0, 0) 0% 100%)" + this.buttomImageEnd;
                    }
                    */
                }
            },
            gameOver()
            {
                if (this.isGameOver)
                {
                    console.log("Oh no, I'm terminated.");
                    this.forestPage = false;
                    this.workshopPage = false;
                    this.townCenterPage = false;
                    this.barracksPage = false;
                    this.marketPage = false;
                }
            },
            defenseUpdates()
            {
                var defenseStats = 0.0;
                defenseStats += (this.laborDistribution.soldier * this.SOLDIER_FACTORS.BOOST);
                defenseStats += (this.laborDistribution.archer * this.ARCHER_FACTORS.BOOST);
                defenseStats += (this.laborDistribution.catapult * this.CATAPULT_FACTORS.BOOST);
                defenseStats += (this.buildingNum.walls * this.WALL_FACTORS.DEFENSE_BONUS);
                var availableCit = (this.citizensStat.population - 2 - this.laborDistribution.soldier - this.laborDistribution.archer - (this.laborDistribution.catapult * 2))
                if (this.resourceStat.weaponsNum <= availableCit)
                {
                    defenseStats += (this.resourceStat.weaponsNum * this.WEAPON_FACTORS.DEFENSE)
                }
                else
                {
                    defenseStats += (availableCit * this.WEAPON_FACTORS.DEFENSE)
                }
                
                if (defenseStats > 1)
                {
                    this.chancesRatios.defense = 1;
                }
                else
                {
                    this.chancesRatios.defense = defenseStats;
                }
                
                return null;
            },
            immigrationChance()
            {
                console.log("Your computer is a potato.");

                if (this.monthTime < 3)
                {

                    this.citizensStat.population += 2;
                    this.laborDistribution.free += 2;
                    this.commentArray.push({text: ("Builder: The house had 3 visitors, 2 chose to stay"), timer: 5, noise: 0, played: 0, bold: 1});
                }
                else
                {
                    var newVisitors = Math.round(this.citizensStat.population * this.CITIZEN_FACTORS.VISITORS);
                    if (this.refugees > 0)
                    {
                        newVisitors += this.refugees;
                        this.refugees = 0;
                    }
                    var availableBeds = (this.buildingNum.houses * this.HOUSE_FACTORS.BEDS) - this.citizensStat.population;
                    var possibleImg = newVisitors;

                    var imgOutcome = "but none were able to stay."
                    var immigrantCit = 0;
                    
                    if (availableBeds <= newVisitors)
                    {
                        possibleImg = availableBeds;
                    }

                    for (var i = 0; i < possibleImg; i++)
                    {
                        if (Math.random() < this.citizensStat.satisfaction)
                        {
                            immigrantCit += 1;
                        }
                    }
                    if (immigrantCit > 0)
                    {                    
                        if ((this.buildingNum.houses * this.HOUSE_FACTORS.BEDS) >= this.citizensStat.population + immigrantCit)
                        {
                            this.citizensStat.population += immigrantCit;
                            this.laborDistribution.free += immigrantCit;
                            imgOutcome = immigrantCit + " chose to stay.";
                        }
                        else
                        {
                            immigrantCit = (this.buildingNum.houses * this.HOUSE_FACTORS.BEDS) - this.citizensStat.population;
                            this.citizensStat.population = (this.buildingNum.houses * this.HOUSE_FACTORS.BEDS);
                            this.laborDistribution.free = immigrantCit;
                            imgOutcome = immigrantCit + " chose to stay.";
                        }
                    }
                    else if ((immigrantCit == 0) && (availableBeds > 0))
                    {
                        imgOutcome = "but none chose to stay."
                    }
                    this.commentArray.push({text: ("Builder: The town had  " + newVisitors + " visitors, " + imgOutcome), timer: 5, noise: 0, played: 0, bold: 1});
                }
            },
            satisfactionUpdates()
            {

                var baseSatisfaction = this.CITIZEN_FACTORS.BASE_SATISFACTION;
                baseSatisfaction += (this.buildingNum.tavern * this.TAVERN_FACTORS.SAT_BOOST);
                baseSatisfaction += (this.buildingNum.market * this.MARKET_FACTORS.SAT_BOOST);
                baseSatisfaction += (this.buildingNum.townsqr * this.TOWN_SQR_FACTORS.SAT_BOOST);
                baseSatisfaction -= (this.citizensStat.taxRate * this.CITIZEN_FACTORS.TAX_TO_SAT);
                for (var i = 0; i < this.satBoosts.length; i++)
                {
                    if (this.gracePeriod > 0)
                    {
                        if (this.satBoosts[i].sat < 0)
                        {
                            baseSatisfaction += (this.satBoosts[i].sat * .75);
                        }
                        else
                        {
                            baseSatisfaction += this.satBoosts[i].sat;
                        }
                    }
                    else
                    {
                        baseSatisfaction += this.satBoosts[i].sat;
                    }
                }
                if (baseSatisfaction > 1.0)
                {
                    this.citizensStat.satisfaction = 1.0;
                }
                else if (baseSatisfaction < 0)
                {
                    this.citizensStat.satisfaction = 0;
                }
                else
                {
                    this.citizensStat.satisfaction = baseSatisfaction;
                }

                if (this.citizensStat.satisfaction <= .20)
                {
                    console.log("death");
                    this.deathString = "The citizens are beyond trusting you again. They storm your home and throw you out of the town. As you stumble into the forest you'll look back, they won't.";
                    this.isGameOver = 1;
                    notGameOver = 0;
                    if (this.gameOverNoisePlayed == 0)
                    {
                        this.gameOverNoisePlayed = 1;
                        this.playSound(this.SOUNDS.gameover.sound, this.SOUNDS.gameover.volume);
                        pauseMusic();
                    }
                }


                if ((!this.townSquareBool) && (this.citizensStat.population >= this.TOWN_SQR_FACTORS.POPULATION) && (this.buildingNum.carpenter == 1))
                {
                    this.townSquareBool = 1;
                    this.BUILD_REQ.townsqr.pop = 1;
                    this.buttonsColor.townsqr = 1;
                    this.commentArray.push({text: ("Builder: We can now build a town square!"), timer: 5, noise: 0, played: 0, bold: 1});
                }
                
            },
            townTypeCalc()
            {

                if ((this.citizensStat.population < 20) && (this.townType != this.TOWN_TYPES[0]))
                {
                    this.townType = this.TOWN_TYPES[0];
                }
                else if ((this.citizensStat.population >= 20) && (this.citizensStat.population < 50) && (this.townType != this.TOWN_TYPES[1]))
                {
                    if (this.townType == this.TOWN_TYPES[0])
                    {
                        this.playSound(this.SOUNDS.cityadvance.sound, this.SOUNDS.cityadvance.volume);
                        this.animateTownType = 1;
                    }
                    this.townType = this.TOWN_TYPES[1];
                }
                else if ((this.citizensStat.population >= 50) && (this.citizensStat.population < 100) && (this.townType != this.TOWN_TYPES[2]))
                {
                    if (this.townType == this.TOWN_TYPES[1])
                    {
                        this.playSound(this.SOUNDS.cityadvance.sound, this.SOUNDS.cityadvance.volume);
                        this.animateTownType = 1;
                    }
                    this.townType = this.TOWN_TYPES[2];
                }
                else if ((this.citizensStat.population >= 50) && (this.citizensStat.population >= 100) && (this.townType != this.TOWN_TYPES[3]))
                {
                    
                    if (this.townType == this.TOWN_TYPES[2])
                    {
                        this.playSound(this.SOUNDS.cityadvance.sound, this.SOUNDS.cityadvance.volume);
                        this.animateTownType = 1;
                    }
                    this.townType = this.TOWN_TYPES[3];
                }

            },
            // -----------------------------MISC
            placeHolder()
            {

                return 0;
            },
            commentWriter()
            {

                var comments = "";
                var maxComments = 5;
                var printNum = 0;
                for (var i = this.commentArray.length -1; i > -1; i--)
                {
                    if (this.commentArray[i].played == 0)
                    {
                        if (this.commentArray[i].noise == 0)
                        {
                            this.playSound(this.SOUNDS.builder.sound, this.SOUNDS.builder.volume);
                        }
                        /*
                        else if (this.commentArray[i].noise == 1)
                        {
                            this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                        }*/
                        this.commentArray[i].played = 1;
                    }
                }
                if (maxComments >= this.commentArray.length)
                {
                    printNum = -1;
                }
                else
                {
                    printNum = this.commentArray.length - maxComments - 1;
                }
                for (var i = this.commentArray.length - 1; i > printNum; i--)
                {
                    if (this.commentArray[i].bold == 1)
                    {
                        bold = "bold ";
                    }
                    else
                    {
                        bold = "";
                    }
                    comments += "<div class=\"" + bold + "shadow commentBox\">" + this.commentArray[i].text + "</div>";
                }
                if (!this.isGameOver)
                {
                    document.getElementById("comments").innerHTML = comments;
                }
            },
            // -----------------------------Pages   
            forestMenu()
            {
                console.log("Don't test me, I'll divide by 0, I'll do it.");

                if (this.forestPage == false && !this.isGameOver)
                {
                    document.getElementById("forestMenuButton").style.color = "rgb(177, 177, 177)";
                    document.getElementById("workshopMenuButton").style.color = "black";
                    document.getElementById("marketMenuButton").style.color = "black";
                    document.getElementById("townCenterMenuButton").style.color = "black";
                    document.getElementById("barracksMenuButton").style.color = "black";
                    this.playSound(this.SOUNDS.menuTab.sound, this.SOUNDS.menuTab.volume);
                    this.forestPage = true;
                    this.workshopPage = false;
                    this.townCenterPage = false;
                    this.barracksPage = false;
                    this.marketPage = false;
                    this.currentPage = 1;
                }
                else if (!this.isGameOver)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                }
            },
            workshopMenu()
            {
                console.log("I could be calculating the solution to world hunger, but no just play your game.");

                if (this.workshopPage == false && !this.isGameOver)
                {
                    document.getElementById("forestMenuButton").style.color = "black";
                    document.getElementById("workshopMenuButton").style.color = "rgb(177, 177, 177)";
                    document.getElementById("marketMenuButton").style.color = "black";
                    document.getElementById("townCenterMenuButton").style.color = "black";
                    document.getElementById("barracksMenuButton").style.color = "black";
                    this.playSound(this.SOUNDS.menuTab.sound, this.SOUNDS.menuTab.volume);
                    this.forestPage = false;
                    this.workshopPage = true;
                    this.townCenterPage = false;
                    this.barracksPage = false;
                    this.marketPage = false;
                    this.currentPage = 2;

                }
                else if (!this.isGameOver)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                }
            },
            townCenterMenu()
            {
                console.log("Do these numbers mean something to you that I'm not understand...");

                if (this.townCenterPage == false && !this.isGameOver)
                {
                    document.getElementById("forestMenuButton").style.color = "black";
                    document.getElementById("workshopMenuButton").style.color = "black";
                    document.getElementById("marketMenuButton").style.color = "black";
                    document.getElementById("townCenterMenuButton").style.color = "rgb(177, 177, 177)";
                    document.getElementById("barracksMenuButton").style.color = "black";
                    this.playSound(this.SOUNDS.menuTab.sound, this.SOUNDS.menuTab.volume);
                    this.forestPage = false;
                    this.workshopPage = false;
                    this.townCenterPage = true;
                    this.barracksPage = false;
                    this.marketPage = false;
                    this.currentPage = 3;
                }
                else if (!this.isGameOver)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                }
            },
            barracksMenu()
            {
                console.log("Hypothetically would anyone know the difference if I just made up the numbers?");
                if (this.barracksPage == false && !this.isGameOver)
                {
                    document.getElementById("forestMenuButton").style.color = "black";
                    document.getElementById("workshopMenuButton").style.color = "black";
                    document.getElementById("marketMenuButton").style.color = "black";
                    document.getElementById("townCenterMenuButton").style.color = "black";
                    document.getElementById("barracksMenuButton").style.color = "rgb(177, 177, 177)";
                    this.playSound(this.SOUNDS.menuTab.sound, this.SOUNDS.menuTab.volume);
                    this.forestPage = false;
                    this.workshopPage = false;
                    this.townCenterPage = false;
                    this.barracksPage = true;
                    this.marketPage = false;
                    this.currentPage = 4;
                }
                else if (!this.isGameOver)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                }
            },
            marketMenu()
            {

                if (this.marketPage == false && !this.isGameOver)
                {
                    document.getElementById("forestMenuButton").style.color = "black";
                    document.getElementById("workshopMenuButton").style.color = "black";
                    document.getElementById("marketMenuButton").style.color = "rgb(177, 177, 177)";
                    document.getElementById("townCenterMenuButton").style.color = "black";
                    document.getElementById("barracksMenuButton").style.color = "black";
                    this.playSound(this.SOUNDS.menuTab.sound, this.SOUNDS.menuTab.volume);
                    this.forestPage = false;
                    this.workshopPage = false;
                    this.townCenterPage = false;
                    this.barracksPage = false;
                    this.marketPage = true;
                    this.currentPage = 5;
                }
                else if (!this.isGameOver)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                }
            },
            // -----------------------------Actions
            gatherWood()
            {
                if (this.actionCooldowns.gatherWood.time <= 0)
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.actionCooldowns.gatherWood.time = this.GATHER_WOOD_FACTORS.TIME;
                    this.actionCooldowns.gatherWood.done = 0;
                    this.commentArray.push({text: "Builder: Gathering wood.", timer: 5, noise: 0, played: 0, bold: 0});
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: You have to wait until you bring back the  wood from your last gathering!", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
            },
            huntFood()
            {
                if (this.actionCooldowns.huntFood.time <= 0)
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.actionCooldowns.huntFood.time = this.HUNT_FACTORS.TIME;
                    this.actionCooldowns.huntFood.done = 0;
                    this.commentArray.push({text: "Builder: A hunting party  has been sent out.", timer: 5, noise: 0, played: 0, bold: 0});
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: You have to wait until the current hunting party returns!", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
            },
            townFaire()
            {

                if (this.buildingNum.townsqr >= 1)
                {
                    if (this.actionCooldowns.townFaire.time <= 0)
                    {
                        if ((this.resourceStat.food >= this.TOWN_FAIR_FACTORS.FOOD) && (this.resourceStat.gold >= this.TOWN_FAIR_FACTORS.GOLD))
                        {
                            this.monthActions.thismonth += 1;
                            this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                            this.resourceStat.food -= this.TOWN_FAIR_FACTORS.FOOD;
                            this.resourceStat.gold -= this.TOWN_FAIR_FACTORS.GOLD;
                            this.actionCooldowns.townFaire.time = this.TOWN_FAIR_FACTORS.TIME;
                            this.actionCooldowns.townFaire.done = 0;
                            this.commentArray.push({text: "Builder: The village is preparing for the faire!", timer: 5, noise: 0, played: 0, bold: 0});
                        }
                        else if (this.resourceStat.food < this.TOWN_FAIR_FACTORS)
                        {
                            this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                            this.commentArray.push({text: "Builder: Sire, we don't have enough food for a faire.", timer: 5, noise: 1, played: 0, bold: 0});
                        }
                        else
                        {
                            this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                            this.commentArray.push({text: "Builder: Sire, we don't have enough gold for a faire.", timer: 5, noise: 1, played: 0, bold: 0});
                        }
                    }
                    else
                    {
                        this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                        this.commentArray.push({text: "Builder: We already have a faire planned Sire!", timer: 5, noise: 1, played: 0, bold: 0});
                    }
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We need to build a town square to hold faires.", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
            holdFeast()
            {   
                if ((this.resourceStat.food >= this.FEAST_FACTORS.FOOD))
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.playSound(this.SOUNDS.feast.sound, this.SOUNDS.feast.volume);
                    this.resourceStat.food -= this.FEAST_FACTORS.FOOD;
                    this.specialsArray.push({time: 20, starttime: 20, id: "travelingPerformersSpan", title: "Feast&nbsp;Joy"});
                    this.satBoosts.push({sat: 0, startSat: this.TOWN_FAIR_FACTORS.SAT_BOOST, time: 20, startTime: 20, lag: 0, ramp: 0, full: 5});
                    this.commentArray.push({text: "Builder: Everyone loved the feast!", timer: 5, noise: 0, played: 0, bold: 0});
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: Sire, we don't have enough food for a feast.", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
            // ---------------------------Town Center
            addTaxes()
            {

                if (this.citizensStat.taxRate < 100.00 && (this.citizensStat.satisfaction >= (this.CITIZEN_FACTORS.TAX_TO_SAT / 100) + .2))
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.citizensStat.taxRate += 0.01;
                }
                else if (this.citizensStat.taxRate == 100.00)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We CAN'T tax our citizens any more!", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: What are you doing! If satisfaction goes below 20% the citizens will kick you out!", timer: 5, noise: 1, played: 0, bold: 0});
                }
                
            },
            subTaxes()
            {

                if (this.citizensStat.taxRate > 0.00)
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.citizensStat.taxRate -= 0.01;
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: You're already taxing nothing sire!", timer: 5, noise: 1, played: 0, bold: 0});
                }
                
            },
            addFarmLabor()
            {

                if ((this.laborDistribution.free > 0) && (this.laborDistribution.farm < this.buildingNum.farm * this.FARM_FACTORS.WORKER_SLOTS))
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.laborDistribution.free -= 1;
                    this.laborDistribution.farm += 1;
                }
                else if (this.buildingNum.farm < 1)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: You need to start a farm first", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else if (this.laborDistribution.farm < this.buildingNum.farm * this.FARM_FACTORS.WORKER_SLOTS)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: You can't add any more workers! Start a new farm.", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: There are no unemployed citizens.", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
            subFarmLabor()
            {

                if (this.laborDistribution.farm > 0)
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.laborDistribution.farm -= 1;
                    this.laborDistribution.free += 1;
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: There are no workers on the farms.", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
            addLumberLabor()
            {

                if ((this.laborDistribution.free > 0) && (this.laborDistribution.lumber < this.buildingNum.lumbermill * this.LM_FACTORS.WORKER_SLOTS))
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.laborDistribution.free -= 1;
                    this.laborDistribution.lumber += 1;
                }
                else if (this.buildingNum.lumbermill < 1)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: You need to build a lumbermill first", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else if (this.laborDistribution.lumber < this.buildingNum.lumbermill * this.LM_FACTORS.WORKER_SLOTS)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: You can't add any more workers! Build a new lumbermill", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: There are no unemployed citizens.", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
            subLumberLabor()
            {
                if (this.laborDistribution.lumber > 0)
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.laborDistribution.lumber -= 1;
                    this.laborDistribution.free += 1;
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: There are no workers at the lumbermill.", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
            addMineLabor()
            {
                if ((this.laborDistribution.free > 0) && (this.laborDistribution.mine < this.buildingNum.mine * this.MINE_FACTORS.WORKER_SLOTS))
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.laborDistribution.free -= 1;
                    this.laborDistribution.mine += 1;
                }
                else if (this.buildingNum.mine < 1)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: You need to start a mine first", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else if (this.laborDistribution.mie < this.buildingNum.mie * this.MINE_FACTORS.WORKER_SLOTS)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: You can't add any more workers! Start a new mine.", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: There are no unemployed citizens.", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
            subMineLabor()
            {  
                if (this.laborDistribution.mine > 0)
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.laborDistribution.mine -= 1;
                    this.laborDistribution.free += 1;
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: There are no workers in the mine.", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
            subSoldierLabor()
            {

                if (this.laborDistribution.soldier > 0)
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.laborDistribution.soldier -= 1;
                    this.laborDistribution.free += 1;
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We have no soldiers.", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
            subArcherLabor()
            {
                if (this.laborDistribution.archer > 0)
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.laborDistribution.archer -= 1;
                    this.laborDistribution.free += 1;
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We have no archers.", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
            subCatapultLabor()
            {
                if (this.laborDistribution.catapult > 0)
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.laborDistribution.catapult -= 1;
                    this.laborDistribution.free += 2;
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We have no catapults.", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
            addTavernLabor()
            {

                if ((this.laborDistribution.free > 0) && (this.laborDistribution.tavern < this.buildingNum.tavern * this.TAVERN_FACTORS.WORKER_SLOTS))
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.laborDistribution.free -= 1;
                    this.laborDistribution.tavern += 1;
                }
                else if (this.buildingNum.tavern < 1)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: You need to build a tavern first.", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else if (this.laborDistribution.tavern < this.buildingNum.tavern * this.TAVERN_FACTORS.WORKER_SLOTS)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: You can't add any more workers!", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: There are no unemployed citizens.", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
            subTavernLabor()
            {

                if (this.laborDistribution.tavern > 0)
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.laborDistribution.tavern -= 1;
                    this.laborDistribution.free += 2;
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: No one is working at the tavern.", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
            // -------------------------------Military
            trainTroops()
            {
                if ((this.buildingNum.barracks == 1) && (this.resourceStat.gold >= this.SOLDIER_FACTORS.GOLD_TRAIN) && (this.laborDistribution.free > 0) && (this.resourceStat.weaponsNum >= this.SOLDIER_FACTORS.WEAPON_TRAIN))
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.laborDistribution.soldier += 1;
                    this.laborDistribution.free -= 1;
                    this.resourceStat.gold -= this.SOLDIER_FACTORS.GOLD_TRAIN;
                    this.resourceStat.weaponsNum -= this.SOLDIER_FACTORS.WEAPON_TRAIN;
                    this.commentArray.push({text: "Builder: A new soldier was trained.", timer: 5, noise: 0, played: 0, bold: 0});
                }
                else if (this.buildingNum.barracks < 1)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We need a barracks to train an archer.", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
                else if (this.resourceStat.gold < this.SOLDIER_FACTORS.GOLD_TRAIN)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We don't have enough gold to train!", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else if (this.laborDistribution.free < 1)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: Free up some workers to train a soldier!", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: Sire, we do not have any weapons to train him with.", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
            trainArchers()
            {

                if ((this.buildingNum.walls >= 1) && (this.resourceStat.gold >= this.ARCHER_FACTORS.GOLD_TRAIN) && (this.laborDistribution.free > 0) && (this.resourceStat.weaponsNum >= this.ARCHER_FACTORS.WEAPON_TRAIN) && (this.buildingNum.walls > 0))
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.laborDistribution.archer += 1;
                    this.laborDistribution.free -= 0;
                    this.resourceStat.gold -= this.ARCHER_FACTORS.GOLD_TRAIN;
                    this.resourceStat.weaponsNum -= this.ARCHER_FACTORS.WEAPON_TRAIN;
                    this.commentArray.push({text: "Builder: A new archer was trained.", timer: 5, noise: 0, played: 0, bold: 0});
                    return null;
                }
                else if (this.buildingNum.walls < 1)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We need walls to train an archer.", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
                else if (this.resourceStat.gold < this.ARCHER_FACTORS.GOLD_TRAIN)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We don't have enough gold to train!", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
                else if (this.laborDistribution.free < 1)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: Free up some workers to train an archer!", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: Sire, we do not have any weapons to train him with.", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
            },
            buildCatapults()
            {

                if ((this.resourceStat.gold >= this.CATAPULT_FACTORS.GOLD_TRAIN) && (this.laborDistribution.soldier >= 2) && (this.resourceStat.lumber >= this.CATAPULT_FACTORS.LUMBER_COST) && (this.buildingNum.siege > 0))
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.playSound(this.SOUNDS.catapult.sound, this.SOUNDS.catapult.volume);
                    this.laborDistribution.catapult += 1;
                    this.laborDistribution.soldier -= 2;
                    this.resourceStat.gold -= this.CATAPULT_FACTORS.GOLD_TRAIN;
                    this.resourceStat.lumber -= this.CATAPULT_FACTORS.LUMBER_COST;
                    this.commentArray.push({text: "Builder: A new catapult is ready.", timer: 5, noise: 0, played: 0, bold: 0});
                    return null;
                }
                else if (this.buildingNum.siege < 1)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We need a siege factory to build a catapult.", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
                else if (this.resourceStat.lumber < this.CATAPULT_FACTORS.LUMBER_COST)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We don't have enough lumber to build!", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
                else if (this.resourceStat.gold < this.CATAPULT_FACTORS.GOLD_TRAIN)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We don't have enough gold to train!", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: There are no free soldiers to train!", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
            },
            makeWeapons()
            {
                if ((this.resourceStat.stone >= this.WEAPON_FACTORS.STONE_COST) && (this.resourceStat.gold >= this.WEAPON_FACTORS.GOLD_COST))
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.playSound(this.SOUNDS.weapon.sound, this.SOUNDS.weapon.volume);
                    this.resourceStat.weaponsNum += 1;
                    this.resourceStat.gold -= this.WEAPON_FACTORS.GOLD_COST;
                    this.resourceStat.stone -= this.WEAPON_FACTORS.STONE_COST;
                    this.commentArray.push({text: "Builder: Weapons built.", timer: 5, noise: 0, played: 0, bold: 0});
                    return null;
                }
                else if (this.resourceStat.gold < this.WEAPON_FACTORS.GOLD_COST)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We don't have enough gold to make this!", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: Sire, we don't have enough stone to make this!", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
            },
            // -----------------------------Build
            buildHouse()
            {

                if ((this.resourceStat.lumber >= this.HOUSE_FACTORS.LUMBER_COST) && (this.buildingNum.houses <= (this.HOUSE_FACTORS.PER_LAND * this.resourceStat.landNum)))
                {
                    this.monthActions.thismonth += 1;
                    console.log("I imagine a particularly shaggy hut.");
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.playSound(this.SOUNDS.house.sound, this.SOUNDS.house.volume);
                    this.buildingNum.houses += 1;
                    /*
                    var ratio = ((this.buildingNum.houses.toFixed(2) - 1) / this.HOUSE_FACTORS.PER_LAND.toFixed(2) * 100);
                    document.getElementById("houseButton").style.backgroundImage = "linear-gradient(to right, rgb(189, 189, 189) " + ratio + "%, rgb(224, 224, 224) " + ratio +"% 100%)";
                    */
                    if (this.buildingNum.houses >= this.HOUSE_FACTORS.PER_LAND + 1)
                    {
                        console.log("BEEP BOP- ERROR_ FATAL. Jk, scared ya didn't I.");
                        this.BUILD_REQ.house.max = 1;
                        this.buttonsColor.house = 2;
                    }
                    this.citizensStat.beds += this.HOUSE_FACTORS.BEDS;
                    this.resourceStat.lumber -= this.HOUSE_FACTORS.LUMBER_COST;
                    this.commentArray.push({text: "Builder: A new house was  built! We now have space  for more citizens.", timer: 5, noise: 0, played: 0, bold: 0});
                    return null;
                }
                else if (this.buildingNum.houses >= (this.HOUSE_FACTORS.PER_LAND * this.resourceStat.landNum))
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: You cannot build any more houses sire, we need more land.", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: Sire, we do not have enough wood.", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
            },
     
            // START A FARM
            startFarm()
            {
                if ((this.resourceStat.lumber >= this.FARM_FACTORS.LUMBER_COST) && (this.buildingNum.farm < (this.FARM_FACTORS.PER_LAND * this.resourceStat.landNum)))
                {
                    this.monthActions.thismonth += 1;
                    console.log("Cyber Fruit, Cyber Grain, Cyber Veggies!");
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.playSound(this.SOUNDS.farm.sound, this.SOUNDS.farm.volume);
                    this.buildingNum.farm += 1;
                    /*
                    var ratio = (this.buildingNum.farm.toFixed(2) / this.FARM_FACTORS.PER_LAND.toFixed(2) * 100);
                    document.getElementById("farmButton").style.backgroundImage = "linear-gradient(to right, rgb(189, 189, 189) " + ratio + "%, rgb(224, 224, 224) " + ratio +"% 100%)";
                    */
                    if (this.buildingNum.farm >= this.FARM_FACTORS.PER_LAND)
                    {
                        this.BUILD_REQ.farm.max = 1;
                        this.buttonsColor.farm = 2;
                    }
                    this.resourceStat.lumber -= this.FARM_FACTORS.LUMBER_COST;
                    this.commentArray.push({text: "Builder: The villiagers   have started a new farm to provide food!", timer: 5, noise: 0, played: 0, bold: 0});
                    return null;
                }
                else if (this.buildingNum.farm >= (this.FARM_FACTORS.PER_LAND * this.resourceStat.landNum))
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: You cannot build any more farms sire, we need more land.", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: Sire, we do not have enough wood.", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
            },
     
            // BUILD CARPENTERS WORKSHOP
            buildCarpentersWorkshop()
            {
                console.log("Great, now I can make more 0s 1s.");
                if ((this.resourceStat.lumber >= this.CW_FACTORS.LUMBER_COST) && (this.buildingNum.carpenter < (this.CW_FACTORS.PER_LAND * this.resourceStat.landNum)))
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.playSound(this.SOUNDS.workshop.sound, this.SOUNDS.workshop.volume);
                    this.buildingNum.carpenter += 1;
                    var ratio = (this.buildingNum.carpenter.toFixed(2) / this.CW_FACTORS.PER_LAND.toFixed(2) * 100);
                    if (this.buildingNum.carpenter >= this.CW_FACTORS.PER_LAND)
                    {
                        this.BUILD_REQ.workshop.max = 1;
                        this.buttonsColor.workshop = 2;
                    }
                    this.resourceStat.lumber -= this.CW_FACTORS.LUMBER_COST;
                    this.BUILD_REQ.lumber.req = 1;
                    this.buttonsColor.lumbermill = 1;
                    this.BUILD_REQ.barracks.req = 1;
                    this.buttonsColor.barracks = 1;
                    this.BUILD_REQ.mine.req = 1;
                    this.buttonsColor.mine = 1;
                    this.BUILD_REQ.tavern.req = 1;
                    this.buttonsColor.tavern = 1;
                    this.BUILD_REQ.market.req = 1;
                    this.buttonsColor.market = 1;
                    this.BUILD_REQ.townsqr.req = 1;
                    this.buttonsColor.townsqr = 0;
                    this.commentArray.push({text: "Builder: We built a carpenter's workshop! I can now create all kinds  of buildings, Sire.", timer: 5, noise: 0, played: 0, bold: 0});
                    return null;
                }
                else if (this.buildingNum.carpenter >= (this.CW_FACTORS.PER_LAND * this.resourceStat.landNum))
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We do not need another carpenter's workshop!", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: Sire, we do not have enough wood.", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
            },
     
            // BUILD LUMBER MILL
            buildLumberMill()
            {
                console.log("Ok thats another 1 there.");
                if ((this.resourceStat.lumber >= this.LM_FACTORS.LUMBER_COST) && (this.buildingNum.lumbermill < this.LM_FACTORS.PER_LAND) && (this.buildingNum.carpenter == 1))
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.playSound(this.SOUNDS.lumbermill.sound, this.SOUNDS.lumbermill.volume);
                    this.buildingNum.lumbermill += 1;
                    /*
                    var ratio = (this.buildingNum.lumbermill.toFixed(2) / this.LM_FACTORS.PER_LAND.toFixed(2) * 100);
                    document.getElementById("lumberMillButton").style.backgroundImage = "linear-gradient(to right, rgb(189, 189, 189) " + ratio + "%, rgb(224, 224, 224) " + ratio +"% 100%)";
                    */
                    if (this.buildingNum.lumbermill >= this.LM_FACTORS.PER_LAND)
                    {
                        this.BUILD_REQ.lumber.max = 1;
                        this.buttonsColor.lumbermill = 2;
                    }

                    this.resourceStat.lumber -= this.LM_FACTORS.LUMBER_COST;
                    this.commentArray.push({text: "Builder: We now have a lumbermill! Send citizens to work there and they'll automatically gather!", timer: 5, noise: 0, played: 0, bold: 0});
                }
                else if (this.buildingNum.carpenter == 0)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We can't build that yet, first we need a Workshop.", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else if (this.buildingNum.lumbermill >= this.LM_FACTORS.PER_LAND)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: You cannot build any more lumbermills sire, our land has no available forests.", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: Sire, we do not have enough wood.", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
     
            // START A MINE
            startMine()
            {
                console.log("We should mine for bit coins instead. Better use of my processor.");
                if ((this.resourceStat.lumber >= this.MINE_FACTORS.LUMBER_COST) && (this.buildingNum.mine < (this.MINE_FACTORS.PER_LAND * this.resourceStat.landNum)) && (this.buildingNum.carpenter == 1))
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.playSound(this.SOUNDS.mine.sound, this.SOUNDS.mine.volume);
                    this.buildingNum.mine += 1;
                    /*
                    var ratio = (this.buildingNum.mine.toFixed(2) / this.MINE_FACTORS.PER_LAND.toFixed(2) * 100);
                    document.getElementById("mineButton").style.backgroundImage = "linear-gradient(to right, rgb(189, 189, 189) " + ratio + "%, rgb(224, 224, 224) " + ratio +"% 100%)";
                    */
                    if (this.buildingNum.mine >= this.MINE_FACTORS.PER_LAND)
                    {
                        this.BUILD_REQ.mine.max = 1;
                        this.buttonsColor.mine = 2;
                    }

                    this.resourceStat.lumber -= this.MINE_FACTORS.LUMBER_COST;
                    this.commentArray.push({text: "Builder: We now have a mine! Send citizens to work there and they'll automatically gather!", timer: 5, noise: 0, played: 0, bold: 0});
                    return null;
                }
                else if (this.buildingNum.carpenter == 0)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We can't build   that yet, first we need a Workshop.", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else if (this.buildingNum.mine >= (this.MINE_FACTORS.PER_LAND * this.resourceStat.landNum))
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: You cannot build any more mines sire, we need more land.", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: Sire, we do not have enough wood.", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
            },
     
            // BUILD A BARRACKS
            buildBarracks()
            {
                console.log("Ooo protect against cyber invaders.");
                if ((this.resourceStat.lumber >= this.BRK_FACTORS.LUMBER_COST) && (this.resourceStat.stone >= this.BRK_FACTORS.STONE_COST) && (this.buildingNum.barracks < (this.BRK_FACTORS.PER_LAND * this.resourceStat.landNum)) && (this.buildingNum.carpenter == 1))
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.playSound(this.SOUNDS.barracks.sound, this.SOUNDS.barracks.volume);
                    this.buildingNum.barracks += 1;
                    /*
                    var ratio = (this.buildingNum.barracks.toFixed(2) / this.BRK_FACTORS.PER_LAND.toFixed(2) * 100);
                    document.getElementById("barracksButton").style.backgroundImage = "linear-gradient(to right, rgb(189, 189, 189) " + ratio + "%, rgb(224, 224, 224) " + ratio +"% 100%)";
                    */
                    if (this.buildingNum.barracks >= this.BRK_FACTORS.PER_LAND)
                    {
                        this.BUILD_REQ.barracks.max = 1;
                        this.buttonsColor.barracks = 2;
                    }

                    this.resourceStat.lumber -= this.BRK_FACTORS.LUMBER_COST;
                    
                    this.resourceStat.stone -= this.BRK_FACTORS.STONE_COST;
                    this.BUILD_REQ.wall.req = 1;
                    this.buttonsColor.walls = 1;
                    this.commentArray.push({text: "Builder: Sire, we now have a barracks in which we can train troops.", timer: 5, noise: 0, played: 0, bold: 0});
                    return null;
                }
                else if (this.buildingNum.carpenter == 0)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We can't build   that yet, first we need a Workshop.", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else if (this.buildingNum.barracks >= (this.BRK_FACTORS.PER_LAND * this.resourceStat.landNum))
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We do not need another barracks Sire!", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
                else if (this.resourceStat.lumber < this.BRK_FACTORS.LUMBER_COST)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: Sire, we do not have enough wood.", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: Sire, we do not have enough stone.", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
            },
     
            // BUILD A TAVERN
            buildTavern()
            {
                console.log("So I'm assuming they only server root beer here.");
                if ((this.resourceStat.lumber >= this.TAVERN_FACTORS.LUMBER_COST) && (this.resourceStat.stone >= this.TAVERN_FACTORS.STONE_COST) && (this.buildingNum.tavern < (this.TAVERN_FACTORS.PER_LAND * this.resourceStat.landNum)) && (this.buildingNum.carpenter == 1))
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.playSound(this.SOUNDS.tavern2.sound, this.SOUNDS.tavern.volume);
                    this.buildingNum.tavern += 1;
                    /*
                    var ratio = (this.buildingNum.tavern.toFixed(2) / this.TAVERN_FACTORS.PER_LAND.toFixed(2) * 100);
                    document.getElementById("tavernButton").style.backgroundImage = "linear-gradient(to right, rgb(189, 189, 189) " + ratio + "%, rgb(224, 224, 224) " + ratio +"% 100%)";
                    */
                    if (this.buildingNum.tavern == this.TAVERN_FACTORS.PER_LAND)
                    {
                        this.BUILD_REQ.tavern.max = 1;
                        this.buttonsColor.tavern = 2;
                    }

                    this.resourceStat.lumber -= this.TAVERN_FACTORS.LUMBER_COST;
                    this.resourceStat.stone -= this.TAVERN_FACTORS.STONE_COST;
                    this.commentArray.push({text: "Builder: We now have a tavern!", timer: 5, noise: 0, played: 0, bold: 0});
                    return null;
                }
                else if (this.buildingNum.carpenter == 0)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We can't build that yet, first we need a Workshop.", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else if (this.buildingNum.tavern >= (this.TAVERN_FACTORS.PER_LAND * this.resourceStat.landNum))
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We can't build another tavern Sire!", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
                else if (this.resourceStat.lumber < this.TAVERN_FACTORS.LUMBER_COST)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: Sire, we do not have enough wood.", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: Sire, we do not have enough stone.", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
            },
     
            // BUILD A MARKET
            buildMarket()
            {
                if ((this.resourceStat.lumber >= this.MARKET_FACTORS.LUMBER_COST) && (this.resourceStat.gold >= this.MARKET_FACTORS.GOLD_COST) && (this.buildingNum.market < (this.MARKET_FACTORS.PER_LAND * this.resourceStat.landNum)) && (this.buildingNum.carpenter == 1))
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.playSound(this.SOUNDS.market.sound, this.SOUNDS.market.volume);
                    this.buildingNum.market += 1;
                    /*
                    var ratio = (this.buildingNum.market.toFixed(2) / this.MARKET_FACTORS.PER_LAND.toFixed(2) * 100);
                    document.getElementById("marketButton").style.backgroundImage = "linear-gradient(to right, rgb(189, 189, 189) " + ratio + "%, rgb(224, 224, 224) " + ratio +"% 100%)";
                    */
                    if (this.buildingNum.market == this.MARKET_FACTORS.PER_LAND)
                    {
                        this.BUILD_REQ.market.max = 1;
                        this.buttonsColor.market = 2;
                    }

                    this.resourceStat.lumber -= this.MARKET_FACTORS.LUMBER_COST;
                    this.resourceStat.gold -= this.MARKET_FACTORS.GOLD_COST;
                    this.commentArray.push({text: "Builder: We now have a market, you can trade gold for resources or vice versa. Taxes from the market provide wealth monthly.", timer: 5, noise: 0, played: 0, bold: 0});
                    return null;
                }
                else if (this.buildingNum.carpenter == 0)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We can't build that yet, first we need a Workshop.", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else if (this.buildingNum.market >= (this.MARKET_FACTORS.PER_LAND * this.resourceStat.landNum))
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We do not need another market Sire!", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
                else if (this.resourceStat.lumber < this.MARKET_FACTORS.LUMBER_COST)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: Sire, we do not have enough wood.", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: Sire, we do not have enough gold.", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
            },
     
            // BUILD WALLS
            buildWalls()
            {

                if ((this.resourceStat.lumber >= this.WALL_FACTORS.LUMBER_COST) && (this.resourceStat.stone >= this.WALL_FACTORS.STONE_COST) && (this.buildingNum.walls < (this.WALL_FACTORS.PER_LAND * this.resourceStat.landNum)) && (this.buildingNum.barracks == 1))
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.playSound(this.SOUNDS.wall.sound, this.SOUNDS.wall.volume);
                    this.buildingNum.walls += 1;
                    /*
                    var ratio = (this.buildingNum.walls.toFixed(2) / this.WALL_FACTORS.PER_LAND.toFixed(2) * 100);
                    document.getElementById("wallsButton").style.backgroundImage = "linear-gradient(to right, rgb(189, 189, 189) " + ratio + "%, rgb(224, 224, 224) " + ratio +"% 100%)";
                    */
                    if (this.buildingNum.walls == this.WALL_FACTORS.PER_LAND)
                    {
                        this.BUILD_REQ.wall.max = 1;
                        this.buttonsColor.walls = 2;
                    }

                    this.resourceStat.lumber -= this.WALL_FACTORS.LUMBER_COST;
                    this.resourceStat.stone -= this.WALL_FACTORS.STONE_COST;
                    this.BUILD_REQ.siege.req = 1;
                    if (this.buttonsColor.siege == 0)
                    {
                        this.buttonsColor.siege = 1;
                    }
                    this.commentArray.push({text: "Builder: The walls are up! We are better prepared to fight off any invasion and we can now train archers.", timer: 5, noise: 0, played: 0, bold: 0});
                    return null;
                }
                else if (this.buildingNum.barracks == 0)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We can't build   that yet, first we need a Barracks.", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else if (this.buildingNum.walls >= (this.WALL_FACTORS.PER_LAND * this.resourceStat.landNum))
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: Our walls can't be built up any more!", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
                else if (this.resourceStat.lumber < this.WALL_FACTORS.LUMBER_COST)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: Sire, we do not have enough wood.", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: Sire, we do not have enough stone.", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
            },
     
            // BUILD A SIEGE WORKSHOP
            buildSiegeWorkshop()
            {

                if ((this.resourceStat.lumber >= this.SIEGE_FACTORS.LUMBER_COST) && (this.resourceStat.stone >= this.SIEGE_FACTORS.STONE_COST) && (this.resourceStat.gold >= this.SIEGE_FACTORS.GOLD_COST) && (this.buildingNum.siege < (this.SIEGE_FACTORS.PER_LAND)) && (this.buildingNum.walls > 0))
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.playSound(this.SOUNDS.siege.sound, this.SOUNDS.siege.volume);
                    this.buildingNum.siege += 1;
                    /*
                    var ratio = (this.buildingNum.siege.toFixed(2) / this.SIEGE_FACTORS.PER_LAND.toFixed(2) * 100);
                    document.getElementById("siegeButton").style.backgroundImage = "linear-gradient(to right, rgb(189, 189, 189) " + ratio + "%, rgb(224, 224, 224) " + ratio +"% 100%)";
                    */
                    this.BUILD_REQ.siege.max = 1;
                    this.buttonsColor.siege = 2;


                    this.resourceStat.lumber -= this.SIEGE_FACTORS.LUMBER_COST;
                    this.resourceStat.stone -= this.SIEGE_FACTORS.STONE_COST;
                    this.resourceStat.gold -= this.SIEGE_FACTORS.GOLD_COST;
                    this.commentArray.push({text: "Builder: The siege factory is now ready to produce catapults!", timer: 5, noise: 0, played: 0, bold: 0});
                    return null;
                }
                else if (this.buildingNum.siege >= (this.SIEGE_FACTORS.PER_LAND))
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We do not need another siege workshope Sire!", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
                else if (this.buildingNum.wall < 1)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We can't build that yet, first we need Walls.", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else if (this.resourceStat.lumber < this.SIEGE_FACTORS.LUMBER_COST)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: Sire, we do not have enough wood.", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
                else if (this.resourceStat.gold < this.SIEGE_FACTORS.GOLD_COST)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: Sire, we do not have enough gold.", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: Sire, we do not have enough stone.", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
            },
     
            // BUILD A TOWN SQUARE
            buildTownSquare()
            {

                if ((this.citizensStat.population >= this.TOWN_SQR_FACTORS.POPULATION) && (this.resourceStat.lumber >= this.TOWN_SQR_FACTORS.LUMBER_COST) && (this.resourceStat.gold >= this.TOWN_SQR_FACTORS.GOLD_COST) && (this.buildingNum.townsqr < (this.TOWN_SQR_FACTORS.PER_LAND)) && (this.buildingNum.carpenter == 1))
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.playSound(this.SOUNDS.townsqr2.sound, this.SOUNDS.townsqr2.volume);
                    this.buildingNum.townsqr += 1;
                        this.BUILD_REQ.townsqr.max = 1;
                        this.buttonsColor.townsqr = 2;
                    this.resourceStat.lumber -= this.TOWN_SQR_FACTORS.LUMBER_COST;
                    this.resourceStat.gold -= this.TOWN_SQR_FACTORS.GOLD_COST;
                    this.buttonsColor.townFaire = 1;
                    this.commentArray.push({text: "Builder: The citizens love the town square! Throw faires to make them happy.", timer: 5, noise: 0, played: 0, bold: 0});
                    return null;
                }
                else if (this.buildingNum.carpenter == 0)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We can't build that yet, first we need a Workshop.", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else if (this.buildingNum.townsqr >= (this.TOWN_SQR_FACTORS.PER_LAND * this.resourceStat.landNum))
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We already love the town square we have!", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
                else if (this.citizensStat.population < this.TOWN_SQR_FACTORS.POPULATION)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: Sire, we don't have enough people for a town square!", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
                else if (this.resourceStat.gold < this.TOWN_SQR_FACTORS.GOLD_COST)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: Sire, we do not have enough gold.", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: Sire, we do not have enough wood.", timer: 5, noise: 1, played: 0, bold: 0});
                    return null;
                }
            },
            // DEV CHEATS
            checkDevCode()
            {

                if (this.devCode == "BABY BOOM")
                {
                    this.playSound(this.SOUNDS.pop.sound, this.SOUNDS.pop.volume);
                    this.babyBoom(100);
                    this.devCode = "";
                    this.cheatsActivated = 1;
                }
                else if (this.devCode == "*BLESS*")
                {
                    this.playSound(this.SOUNDS.angel.sound, this.SOUNDS.angel.volume);
                    this.bless(10000);
                    this.devCode = "";
                    this.cheatsActivated = 1;
                }
                else if (this.devCode == "ADD DAYS")
                {
                    this.playSound(this.SOUNDS.time.sound, this.SOUNDS.time.volume);
                    this.addDays(15);
                    this.devCode = "";
                    this.cheatsActivated = 1;
                }
                else if (this.devCode == "ANTI VAX MOVEMENT")
                {
                    this.disasterPlague();
                    this.devCode = "";
                    this.cheatsActivated = 1;
                }
                else if (this.devCode == "WHO NEEDS FIREMEN")
                {
                    this.disasterFire();
                    this.devCode = "";
                    this.cheatsActivated = 1;
                }
                else if (this.devCode == "LISTENS TO TOTO")
                {
                    this.disasterFamine();
                    this.devCode = "";
                    this.cheatsActivated = 1;
                }
                else if (this.devCode == "WAVES AT OTHER KINGDOM")
                {
                    this.disasterInvasion();
                    this.devCode = "";
                    this.cheatsActivated = 1;
                }
                else if (this.devCode == "OCEANS 11")
                {
                    this.disasterRobbers();
                    this.devCode = "";
                    this.cheatsActivated = 1;
                }
                else if (this.devCode == "IS IT 2012 YET")
                {
                    this.disasterStorm();
                    this.devCode = "";
                    this.cheatsActivated = 1;
                }
                else if (this.devCode == "WALKING ON SUNSHINE ON LOOP")
                {
                    this.devCode = "";
                    this.satBoosts.push({sat: 1, startSat: 1, time: 1000000000000000000, startTime: 1, lag: 0, ramp: 10, full: 10});
                    sunshine = 1;
                    this.cheatsActivated = 1;
                }
                else if (this.devCode == "*SMITE*")
                {
                    this.playSound("hard", .5);
                    this.devCode = "";
                    hardhardMode = 1;
                    this.DISASTER_FACTORS.DISASTER_CHANCE = 1;
                    this.DISASTER_FACTORS.TIME = 5;
                    this.DISASTER_FACTORS.INVASION = 1;
                    this.DISASTER_FACTORS.TIME = 7;
                    this.CITIZEN_FACTORS.FOOD_NEEDS = 5;
                    this.disasterStorm();
                    this.timeSinceInvasion = 5,
                    this.timeSinceDisaster = 4,
                    this.DISASTER_FACTORS
                    this.cheatsActivated = 1;
                }
                else if (this.devCode == "Game Over")
                {
                    this.isGameOver = 1;
                }
            },
            addDays(num)
            {

                this.dayTime += num;
                console.log(num + " Days Added");
            },
            bless(num)
            {

                this.resourceStat.food += num;
                this.resourceStat.lumber += num;
                this.resourceStat.stone += num;
                this.resourceStat.gold += num;
                console.log("Bless Jesus");
            },
            babyBoom(num)
            {
                this.buildingNum.houses = this.HOUSE_FACTORS.PER_LAND;
                this.laborDistribution.free += (this.buildingNum.houses * this.HOUSE_FACTORS.BEDS) - this.citizensStat.population;
                this.citizensStat.population = (this.buildingNum.houses * this.HOUSE_FACTORS.BEDS);
                this.citizensStat.beds += Math.round(num);
                console.log("Boom. Babies.");
            },
            // ---------------------Sound?
            playSound(sound, volume)
            {
                if (!this.isGameOver || sound == this.SOUNDS.gameover.sound)
                {
                    var media = document.getElementById(sound);
                    media.volume = volume;
                    const playPromise = media.play();
                    if (playPromise !== null){
                        playPromise.catch(() => { media.play(); })
                    }
                }
            },
            // -----------------For Styling

            disasterRobbers()
            {
                this.firstRobbery = 1;
                var resources = [0,0,0,0];
                this.disasterNum += 1;
                if (this.resourceStat.food > 0)
                {
                    resources[0] = 1;
                }
                if (this.resourceStat.lumber > 0)
                {
                    resources[1] = 1;
                }
                if (this.resourceStat.stone > 0)
                {
                    resources[2] = 1;
                }
                if (this.resourceStat.gold > 0)
                {
                    resources[3] = 1;
                }
                var random = Math.round(Math.random() * 100) % 4;
                var loss;
                var done = 0;
                var resourceType;
                for (var i = 0; i < 4; i++)
                {
                    if (resources[random] == 1 && random == 0 && !done)
                    {
                        loss = Math.floor(this.resourceStat.food * this.ROBBERS_FACTORS.RESOURCE_LOSS - (this.resourceStat.food * this.ROBBERS_FACTORS.RESOURCE_LOSS * this.chancesRatios.defense));
                        if (loss <= 0)
                        {
                            return null;
                        }
                        this.resourceStat.food -= loss;
                        resourceType = " food.";
                        this.playSound(this.SOUNDS.robbed.sound, this.SOUNDS.robbed.volume);
                        done = 1;
                    }
                    if (resources[random] == 1 && random == 1 && !done)
                    {
                        loss = Math.floor(this.resourceStat.lumber * this.ROBBERS_FACTORS.RESOURCE_LOSS - (this.resourceStat.lumber * this.ROBBERS_FACTORS.RESOURCE_LOSS * this.chancesRatios.defense));
                        if (loss <= 0)
                        {
                            return null;
                        }
                        this.resourceStat.lumber -= loss;
                        resourceType = " lumber.";
                        this.playSound(this.SOUNDS.robbed.sound, this.SOUNDS.robbed.volume);
                        done = 1;
                    }
                    if (resources[random] == 1 && random == 2 && !done)
                    {
                        loss = Math.floor(this.resourceStat.stone * this.ROBBERS_FACTORS.RESOURCE_LOSS - (this.resourceStat.stone * this.ROBBERS_FACTORS.RESOURCE_LOSS * this.chancesRatios.defense));
                        if (loss <= 0)
                        {
                            return null;
                        }
                        this.resourceStat.stone -= loss;
                        resourceType = " stone.";
                        this.playSound(this.SOUNDS.robbed.sound, this.SOUNDS.robbed.volume);
                        done = 1;
                    }
                    if (resources[random] == 1 && random == 3 && !done)
                    {
                        loss = Math.floor(this.resourceStat.gold * this.ROBBERS_FACTORS.RESOURCE_LOSS - (this.resourceStat.gold * this.ROBBERS_FACTORS.RESOURCE_LOSS * this.chancesRatios.defense));
                        if (loss <= 0)
                        {
                            return null;
                        }
                        this.resourceStat.gold -= loss;
                        resourceType = " gold.";
                        this.playSound(this.SOUNDS.robbed.sound, this.SOUNDS.robbed.volume);
                        done = 1;
                    }
                    if (random == 3)
                    {
                        random = 0;
                    }
                    else
                    {
                        random += 1;
                    }
                }
                this.specialsArray.push({time: 20, starttime: 20, id: "defeatSpan", title: "Robbed&nbsp;Depression"});
                this.satBoosts.push({sat: 0, startSat: this.ROBBERS_FACTORS.SAT_DEPRESSION, time: 20, startTime: 20, lag: 0, ramp: 0, full: 10});
                this.commentArray.push({text: "Builder: We were robbed in the middle of the night! We lost " + loss + " " + resourceType, timer: 10, noise: 1, played: 0, bold: 1});
            },

            disasterInvasion()
            {
                this.playSound(this.SOUNDS.invasion.sound, this.SOUNDS.invasion.volume);
                var string = "";
                this.invasionNum += 1;
                var enemyStrength = this.citizensStat.population / 105 + Math.random() / 10;
                var kingdomStrength = this.chancesRatios.defense + Math.random() / 10;
                if (this.mercenaryProtection == 1)
                {
                    string = " The mercenaries kept their word and defended us, they've left now.";
                    this.mercenaryProtection = 0;
                    for (var i = 0; i < this.specialsArray.length; i++)
                    {
                        if (this.specialsArray[i].title == "Mercenary&nbsp;Protection")
                        {
                            this.specialsArray.splice(i, 1);
                            break;
                        }
                    }
                }
                else
                {
                    var chance = Math.random();
                    var deadPeople = 0;
                    if (enemyStrength > kingdomStrength)
                    {
                        deadPeople = Math.ceil(this.citizensStat.population * (enemyStrength - kingdomStrength));
                        this.specialsArray.push({time: 20, starttime: 20, id: "defeatSpan", title: "Ransacked&nbsp;Depression"});
                        this.satBoosts.push({sat: 0, startSat: this.INVASION_FACTORS.SAT_DEPRESSION, time: 20, startTime: 20, lag: 0, ramp: 0, full: 10});
                        if (enemyStrength - kingdomStrength >= .2)
                        {
                            deadPeople = Math.ceil(this.citizensStat.population * (enemyStrength - kingdomStrength + (Math.random() / 10)));
                            string = " We were horribly overpowered. "
                            this.resourceStat.food -= Math.floor(this.resourceStat.food * (Math.random() / 2));
                            this.resourceStat.lumber -= Math.floor(this.resourceStat.lumber * (Math.random() / 2));
                            this.resourceStat.stone -= Math.floor(this.resourceStat.stone * (Math.random() / 2));
                            this.resourceStat.gold -= Math.floor(this.resourceStat.gold * (Math.random() / 2));
                        }
                        else if (enemyStrength - kingdomStrength >= .1)
                        {
                            string = " The attack overwhelmed our defenses and we were ransacked. "
                            this.resourceStat.food -= Math.floor(this.resourceStat.food * (Math.random() / 3));
                            this.resourceStat.lumber -= Math.floor(this.resourceStat.lumber * (Math.random() / 3));
                            this.resourceStat.stone -= Math.floor(this.resourceStat.stone * (Math.random() / 3));
                            this.resourceStat.gold -= Math.floor(this.resourceStat.gold * (Math.random() / 3));
                        }
                        else
                        {
                            string = " We fought heroically but were overpowered. "
                            this.resourceStat.food -= Math.floor(this.resourceStat.food * (Math.random() / 5));
                            this.resourceStat.lumber -= Math.floor(this.resourceStat.lumber * (Math.random() / 5));
                            this.resourceStat.stone -= Math.floor(this.resourceStat.stone * (Math.random() / 5));
                            this.resourceStat.gold -= Math.floor(this.resourceStat.gold * (Math.random() / 5));
                        }
                    }
                    else
                    {
                        this.specialsArray.push({time: 20, starttime: 20, id: "victorySpan", title: "Victory&nbsp;Celebrations"});
                        this.satBoosts.push({sat: 0, startSat: this.INVASION_FACTORS.SAT_BOOST, time: 20, startTime: 20, lag: 0, ramp: 0, full: 10});
                        deadPeople = Math.floor((this.citizensStat.population * enemyStrength / 3) - (this.citizensStat.population * (kingdomStrength - enemyStrength)));
                        if (deadPeople < 0)
                        {
                            deadPeople = 0;
                        }
                        if (kingdomStrength - enemyStrength >= .2)
                        {
                            string = " We fought heroically and defended successfully. "
                        }
                        else if (kingdomStrength - enemyStrength >= .1)
                        {
                            string = " The battle was close but we prevailed. "
                        }
                        else
                        {
                            string = " They vastly underestimated us. "
                        }
                    }
                    if (deadPeople <= 0)
                    {
                        string += " No casualties.";
                    }
                    else
                    {
                        if (this.citizensStat.population - deadPeople <= 2)
                        {
                            this.citizensStat.population = 0;
                            console.log("death");
                            this.isGameOver = 1;
                            notGameOver = 0;
                            this.deathString = "An invading army overpowers what weak resistance you possesed. Smoke rises from the burnt ruins of what used to be yours. All has been lost, and so will your name.";
                            if (this.gameOverNoisePlayed == 0)
                            {
                                this.gameOverNoisePlayed = 1;
                                this.playSound(this.SOUNDS.gameover.sound, this.SOUNDS.gameover.volume);
                                pauseMusic();
                            }
                            string += " Everyone perished...";

                        }
                        else
                        {
                            this.citizensStat.population -= deadPeople;
                            this.killPeople(deadPeople, 1);
                            string += " ";
                            string += deadPeople; 
                            string += " casualties.";
                        }
                        
                    }
                }
                this.commentArray.push({text: "Builder: Sire, we were invaded by a neighboring kingdom." + string, timer: 10, noise: 1, played: 0, bold: 1});
            },

            disasterFamine()
            {
                this.firstFamine = 1;
                this.disasterNum += 1;
                this.famine = this.FAMINE_FACTORS.FOOD_LOSS;
                this.specialsArray.push({time: 120, starttime: 120, id: "famineSpan", title: "Famine"});
                this.satBoosts.push({sat: 0, startSat: this.FAMINE_FACTORS.SAT_DEPRESSION, time: 120, startTime: 120, lag: 30, ramp: 0, full: 15});
                this.commentArray.push({text: "Builder: Sire, a famine has struck.", timer: 10, noise: 1, played: 0, bold: 1});
            },

            disasterFire()
            {
                this.firstFire = 1;
                this.disasterNum += 1;
                var string = "";
                this.playSound(this.SOUNDS.fire.sound, this.SOUNDS.fire.volume);
                if (this.buildingNum.houses == 1)
                {
                    string = "Luckily the house survived.";
                }
                else if (Math.random() < this.FIRE_FACTORS.HOUSE_CHANCE)
                {
                    var chance = Math.random() / 5;
                    if (Math.ceil(this.buildingNum.houses * chance) <= 0)
                    {
                        string = "Luckily the fire was contained.";
                    }
                    else if (Math.ceil(this.buildingNum.houses * chance) == 1)
                    {
                        string = "One house burned down.";
                        this.buildingNum.houses -= 1;
                        this.BUILD_REQ.house.max = 0;
                        this.buttonsColor.house = 1;

                    }
                    else
                    {
                        var burnedHouses = Math.ceil(this.buildingNum.houses * chance);
                        string = burnedHouses + " houses burned down.";
                        this.BUILD_REQ.house.max = 0;
                        this.buttonsColor.house = 1;
                        this.buildingNum.houses -= burnedHouses;
                    }
                }
                else
                {
                    string = "Luckily the fire was contained.";
                }
                this.specialsArray.push({time: 20, starttime: 20, id: "disaster", title: "Fire&nbsp;Depression"});
                this.satBoosts.push({sat: 0, startSat: this.FIRE_FACTORS.SAT_DEPRESSION, time: 20, startTime: 20, lag: 0, ramp: 0, full: 10});
                this.commentArray.push({text: "Builder: Sire! The villiage is on fire! " + string, timer: 10, noise: 1, played: 0, bold: 1});
            },

            disasterStorm()
            {
                this.firstStorm = 1;
                this.disasterNum += 1;
                this.playSound(this.SOUNDS.storm.sound, this.SOUNDS.storm.volume);
                this.specialsArray.push({time: 20, starttime: 20, id: "disaster", title: "Storm&nbsp;Depression"});
                this.satBoosts.push({sat: 0, startSat: this.STORM_FACTORS.SAT_DEPRESSION, time: 20, startTime: 20, lag: 0, ramp: 0, full: 10});
                var string = "";
                if (Math.random() < this.STORM_FACTORS.FARM_CHANCE)
                {
                    if (this.buildingNum.farm == 0)
                    {
                        string = "";
                    }
                    else
                    {
                        if (this.buildingNum.farm == 1)
                        {
                            string = " The farm was damaged beyond repair.";
                        }
                        else
                        {
                            string = " A farm was damaged beyond repair.";
                        } 
                        this.BUILD_REQ.farm.max = 0;
                        this.buttonsColor.farm = 1;
                        this.buildingNum.farm -= 1;
                        if (this.laborDistribution.farm >= 5)
                        {
                            this.laborDistribution.free += 5;
                            this.laborDistribution.farm -= 5;
                        }
                        else
                        {
                            this.laborDistribution.free += this.laborDistribution.farm;
                            this.laborDistribution.farm = 0;
                        }
                         
                        
                    }
                }
                else
                {
                    if (this.buildingNum.farm > 0)
                    {
                        string = " Luckily the farms survived."
                    }
                    
                }
                this.commentArray.push({text: "Builder: Sire! A huge storm has devistated the town!" + string, timer: 10, noise: 1, played: 0, bold: 1});
            },

            disasterPlague()
            {
                this.firstPlague = 1;
                this.disasterNum += 1;
                this.playSound(this.SOUNDS.cough.sound, this.SOUNDS.cough.volume);
                var string = "";
                var chance = Math.random() / 5;
                if (Math.floor(this.citizensStat.population * chance) == 0)
                {
                    string = "Luckily everyone survived.";
                }
                else if (this.citizensStat.population == 2)
                {
                    string = "Luckily we survived.";
                }
                else
                {
                    var deadPeople = Math.floor(this.citizensStat.population * chance);
                    if (deadPeople > 1)
                    {
                        string = deadPeople + " coughed to their deaths.";
                    }
                    else
                    {
                        string = deadPeople + " coughed to their death.";
                    }
                    
                    
                    if (this.citizensStat.population - deadPeople <= 0)
                    {
                        console.log("death");
                        this.isGameOver = 1;
                        notGameOver = 0;
                        this.deathString = "A disease runs rampant through your town. The coughs silent through the week as the bodies pile. Travelers will know your town not by what you did, but by the smell.";
                        if (this.gameOverNoisePlayed == 0)
                        {
                            this.gameOverNoisePlayed = 1;
                            this.playSound(this.SOUNDS.gameover.sound, this.SOUNDS.gameover.volume);
                            pauseMusic();
                        }
                    }
                    else
                    {
                        this.citizensStat.population -= deadPeople;
                    }
                    
                    this.killPeople(deadPeople, 0);
                    this.specialsArray.push({time: 20, starttime: 20, id: "disaster", title: "Plague&nbsp;Depression"});
                    this.satBoosts.push({sat: 0, startSat: this.PLAGUE_FACTORS.SAT_DEPRESSION, time: 20, startTime: 20, lag: 0, ramp: 0, full: 10});
                }
                this.commentArray.push({text: "Builder: Sire, a plague has swept through the town, " + string, timer: 10, noise: 1, played: 0, bold: 1});
            },
            killPeople(deadPeople, invert)
            {
                console.log("Oops");
                if (invert)
                {
                    if (this.laborDistribution.soldier > 0 && deadPeople != 0)
                    {
                        if (deadPeople >= this.laborDistribution.soldier)
                        {
                            deadPeople -= this.laborDistribution.soldier;
                            this.laborDistribution.soldier = 0;
                        }
                        else
                        {
                            this.laborDistribution.soldier -= deadPeople;
                            deadPeople = 0;
                        }
                    }
                    if (this.laborDistribution.archer > 0 && deadPeople != 0)
                    {
                        if (deadPeople >= this.laborDistribution.archer)
                        {
                            deadPeople -= this.laborDistribution.archer;
                            this.laborDistribution.archer = 0;
                        }
                        else
                        {
                            this.laborDistribution.archer -= deadPeople;
                            deadPeople = 0;
                        }
                    }
                    if (this.laborDistribution.catapult > 0 && deadPeople != 0)
                    {
                        if (deadPeople >= this.laborDistribution.catapult)
                        {
                            deadPeople -= this.laborDistribution.catapult;
                            this.laborDistribution.catapult = 0;
                        }
                        else
                        {
                            this.laborDistribution.catapult -= deadPeople;
                            deadPeople = 0;
                        }
                    }
                    if (this.laborDistribution.free > 0 && deadPeople > 0)
                    {
                        if (deadPeople >= this.laborDistribution.free)
                        {
                            deadPeople -= this.laborDistribution.free;
                            this.laborDistribution.free = 0;
                        }
                        else
                        {
                            this.laborDistribution.free -= deadPeople;
                            deadPeople = 0;
                        }
                    }
                    if (this.laborDistribution.farm > 0 && deadPeople != 0)
                    {
                        if (deadPeople >= this.laborDistribution.farm)
                        {
                            deadPeople -= this.laborDistribution.farm;
                            this.laborDistribution.farm = 0;
                        }
                        else
                        {
                            this.laborDistribution.farm -= deadPeople;
                            deadPeople = 0;
                        }
                    }
                    if (this.laborDistribution.lumber > 0 && deadPeople != 0)
                    {
                        if (deadPeople >= this.laborDistribution.lumber)
                        {
                            deadPeople -= this.laborDistribution.lumber;
                            this.laborDistribution.lumber = 0;
                        }
                        else
                        {
                            this.laborDistribution.lumber -= deadPeople;
                            deadPeople = 0;
                        }
                    }
                    if (this.laborDistribution.tavern > 0 && deadPeople != 0)
                    {
                        if (deadPeople >= this.laborDistribution.tavern)
                        {
                            deadPeople -= this.laborDistribution.tavern;
                            this.laborDistribution.tavern = 0;
                        }
                        else
                        {
                            this.laborDistribution.tavern -= deadPeople;
                            deadPeople = 0;
                        }
                    }
                    if (deadPeople != 0)
                    {
                        console.log("1, 2, III, 5, 6, seven...");
                    }
                }
                else
                {
                    if (this.laborDistribution.free > 0 && deadPeople != 0)
                    {
                        if (deadPeople >= this.laborDistribution.free)
                        {
                            deadPeople -= this.laborDistribution.free;
                            this.laborDistribution.free = 0;
                        }
                        else
                        {
                            this.laborDistribution.free -= deadPeople;
                            deadPeople = 0;
                        }
                    }
                    if (this.laborDistribution.farm > 0 && deadPeople != 0)
                    {
                        if (deadPeople >= this.laborDistribution.farm)
                        {
                            deadPeople -= this.laborDistribution.farm;
                            this.laborDistribution.farm = 0;
                        }
                        else
                        {
                            this.laborDistribution.farm -= deadPeople;
                            deadPeople = 0;
                        }
                    }
                    if (this.laborDistribution.lumber > 0 && deadPeople != 0)
                    {
                        if (deadPeople >= this.laborDistribution.lumber)
                        {
                            deadPeople -= this.laborDistribution.lumber;
                            this.laborDistribution.lumber = 0;
                        }
                        else
                        {
                            this.laborDistribution.lumber -= deadPeople;
                            deadPeople = 0;
                        }
                    }
                    if (this.laborDistribution.tavern > 0 && deadPeople != 0)
                    {
                        if (deadPeople >= this.laborDistribution.tavern)
                        {
                            deadPeople -= this.laborDistribution.tavern;
                            this.laborDistribution.tavern = 0;
                        }
                        else
                        {
                            this.laborDistribution.tavern -= deadPeople;
                            deadPeople = 0;
                        }
                    }
                    if (this.laborDistribution.soldier > 0 && deadPeople != 0)
                    {
                        if (deadPeople >= this.laborDistribution.soldier)
                        {
                            deadPeople -= this.laborDistribution.soldier;
                            this.laborDistribution.soldier = 0;
                        }
                        else
                        {
                            this.laborDistribution.soldier -= deadPeople;
                            deadPeople = 0;
                        }
                    }
                    if (this.laborDistribution.archer > 0 && deadPeople != 0)
                    {
                        if (deadPeople >= this.laborDistribution.archer)
                        {
                            deadPeople -= this.laborDistribution.archer;
                            this.laborDistribution.archer = 0;
                        }
                        else
                        {
                            this.laborDistribution.archer -= deadPeople;
                            deadPeople = 0;
                        }
                    }
                    if (this.laborDistribution.catapult > 0 && deadPeople != 0)
                    {
                        if (deadPeople >= this.laborDistribution.catapult)
                        {
                            deadPeople -= this.laborDistribution.catapult;
                            this.laborDistribution.catapult = 0;
                        }
                        else
                        {
                            this.laborDistribution.catapult -= deadPeople;
                            deadPeople = 0;
                        }
                    }
                    if (deadPeople != 0)
                    {
                        console.log("Something bad happened?");
                    }
                }
            },
            buyFood()
            {

                if ((this.buildingNum.market == 1) && (this.resourceStat.gold >= this.FOOD_FACTORS.WORTH))
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.townsqr.sound, this.SOUNDS.townsqr.volume);
                    this.resourceStat.gold -= this.FOOD_FACTORS.WORTH * this.marketMultiplyer;
                    this.resourceStat.food += 1 * this.marketMultiplyer;
                }
                else if (this.buildingNum.market != 1)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We need a market to trade.", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else if (this.resourceStat.gold >= this.FOOD_FACTORS.WORTH)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We don't have enough gold for that.", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
            sellFood()
            {

                if ((this.buildingNum.market == 1) && (this.resourceStat.food > 0))
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.townsqr.sound, this.SOUNDS.townsqr.volume);
                    this.resourceStat.food -= 1 * this.marketMultiplyer;
                    this.resourceStat.gold += this.FOOD_FACTORS.WORTH * this.marketMultiplyer;
                }
                else if (this.buildingNum.market != 1)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We need a market to trade.", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else if (this.resourceStat.food == 0)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We don't have enough food for that.", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
            buyLumber()
            {

                if ((this.buildingNum.market == 1) && (this.resourceStat.gold >= this.LUMBER_FACTORS.WORTH))
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.townsqr.sound, this.SOUNDS.townsqr.volume);
                    this.resourceStat.gold -= this.LUMBER_FACTORS.WORTH * this.marketMultiplyer;
                    this.resourceStat.lumber += 1 * this.marketMultiplyer;
                }
                else if (this.buildingNum.market != 1)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We need a market to trade.", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else if (this.resourceStat.gold >= this.LUMBER_FACTORS.WORTH)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We don't have enough gold for that.", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
            sellLumber()
            {

                if ((this.buildingNum.market == 1) && (this.resourceStat.lumber > 0))
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.townsqr.sound, this.SOUNDS.townsqr.volume);
                    this.resourceStat.lumber -= 1 * this.marketMultiplyer;
                    this.resourceStat.gold += this.LUMBER_FACTORS.WORTH * this.marketMultiplyer;
                }
                else if (this.buildingNum.market != 1)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We need a market to trade.", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else if (this.resourceStat.lumber == 0)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We don't have enough lumber for that.", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
            buyStone()
            {

                if ((this.buildingNum.market == 1) && (this.resourceStat.gold >= this.STONE_FACTORS.WORTH))
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.townsqr.sound, this.SOUNDS.townsqr.volume);
                    this.resourceStat.gold -= this.STONE_FACTORS.WORTH * this.marketMultiplyer;
                    this.resourceStat.stone += 1 * this.marketMultiplyer;
                }
                else if (this.buildingNum.market != 1)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We need a market to trade.", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else if (this.resourceStat.gold >= this.STONE_FACTORS.WORTH)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We don't have enough gold for that.", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
            sellStone()
            {

                if ((this.buildingNum.market == 1) && (this.resourceStat.stone > 0))
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.townsqr.sound, this.SOUNDS.townsqr.volume);
                    this.resourceStat.stone -= 1 * this.marketMultiplyer;
                    this.resourceStat.gold += this.STONE_FACTORS.WORTH * this.marketMultiplyer;
                }
                else if (this.buildingNum.market != 1)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We need a market to trade.", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else if (this.resourceStat.stone == 0)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We don't have enough stone for that.", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
            buyWeapons()
            {

                if ((this.buildingNum.market == 1) && (this.resourceStat.gold >= this.WEAPON_FACTORS.WORTH))
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.townsqr.sound, this.SOUNDS.townsqr.volume);
                    this.resourceStat.gold -= this.WEAPON_FACTORS.WORTH * this.marketMultiplyer;
                    this.resourceStat.weaponsNum += 1 * this.marketMultiplyer;
                }
                else if (this.buildingNum.market != 1)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We need a market to trade.", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else if (this.resourceStat.gold >= this.WEAPON_FACTORS.WORTH)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We don't have enough gold for that.", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
            sellWeapons()
            {

                if ((this.buildingNum.market == 1) && (this.resourceStat.weaponsNum > 0))
                {
                    this.monthActions.thismonth += 1;
                    this.playSound(this.SOUNDS.townsqr.sound, this.SOUNDS.townsqr.volume);
                    this.resourceStat.weaponsNum -= 1 * this.marketMultiplyer;
                    this.resourceStat.gold += this.WEAPON_FACTORS.WORTH * this.marketMultiplyer;
                }
                else if (this.buildingNum.market != 1)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We need a market to trade.", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else if (this.resourceStat.weaponsNum == 0)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We don't have enough weapons for that.", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },

            slaveTrade()
            {
                if (this.buildingNum.market >= 1 && this.citizensStat.population >= this.SLAVE_TRADE_FACTORS.CIT + 2 && this.citizensStat.satisfaction > .2 - this.SLAVE_TRADE_FACTORS.SAT_DROP)
                {
                    this.monthActions.thismonth += 1;
                    this.citizensStat.population -= this.SLAVE_TRADE_FACTORS.CIT;
                    this.killPeople(this.SLAVE_TRADE_FACTORS.CIT, 0);
                    this.resourceStat.gold += this.SLAVE_TRADE_FACTORS.GOLD;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.playSound(this.SOUNDS.slaves.sound, this.SOUNDS.slaves.volume);
                    this.satBoosts.push({sat: 0, startSat: this.SLAVE_TRADE_FACTORS.SAT_DROP, time: 90, startTime: 90, lag: 0, ramp: 0, full: 15});
                    this.specialsArray.push({time: 90, starttime: 90, id: "Betrayal", title: "Betrayal"});
                    this.commentArray.push({text: "Slaver: Pleasure doing business with you sire.", timer: 5, noise: 1, played: 1, bold: 1});
                    this.commentArray.push({text: "The builder falls silent...", timer: 5, noise: 1, played: 1, bold: 1});
                    this.specialItemUsed = 1;
                }
                else if (this.buildingNum.market < 1)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We need a market first", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else if (this.citizensStat.population < this.SLAVE_TRADE_FACTORS.CIT + 2)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We don't have enough people to sell to slavery...", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: What are you doing? If you do this the citizens satisfaction will drop below 20% and they'll overthrow you.", timer: 5, noise: 1, played: 0, bold: 0});
                }
                
            },
            travelingArmy()
            {
                if (this.buildingNum.market >= 1 && this.resourceStat.weaponsNum >= this.TRAVELING_ARMY_FACTORS.WEAPON_COST && this.laborDistribution.soldier >= this.TRAVELING_ARMY_FACTORS.SOLDIER_COST)
                {
                    this.monthActions.thismonth += 1;
                    this.citizensStat.population -= this.TRAVELING_ARMY_FACTORS.SOLDIER_COST;
                    this.laborDistribution.soldier -= this.TRAVELING_ARMY_FACTORS.SOLDIER_COST
                    this.resourceStat.gold += this.TRAVELING_ARMY_FACTORS.GOLD;
                    this.resourceStat.weaponsNum -= this.TRAVELING_ARMY_FACTORS.WEAPON_COST;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.playSound(this.SOUNDS.marchingArmy.sound, this.SOUNDS.marchingArmy.volume);
                    this.commentArray.push({text: "The army marches away. The builder walks away as well.", timer: 5, noise: 1, played: 1, bold: 1});
                    this.specialItemUsed = 1;
                }
                else if (this.buildingNum.market < 1)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We need a market first", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else if (this.resourceStat.weaponsNum < this.TRAVELING_ARMY_FACTORS.WEAPON_COST)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We don't have enough weapons to sell...", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We don't have enough soldiers to give to them...", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
            marketMultiplyerFunction()
            {
                this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                if (this.marketMultiplyer == 1)
                {
                    this.marketMultiplyer = 10;
                }
                else if (this.marketMultiplyer == 10)
                {
                    this.marketMultiplyer = 100;
                }
                else if (this.marketMultiplyer == 100)
                {
                    this.marketMultiplyer = 1;
                }
            },
            harborRefugees()
            {
                if (this.buildingNum.market >= 1 && this.resourceStat.food >= this.REFUGEE_GROUP_FACTORS.FOOD_COST && this.resourceStat.gold >= this.REFUGEE_GROUP_FACTORS.GOLD_COST)
                {
                    this.monthActions.thismonth += 1;
                    this.refugees += this.REFUGEE_GROUP_FACTORS.BOOST;
                    this.resourceStat.gold -= this.REFUGEE_GROUP_FACTORS.GOLD_COST;
                    this.resourceStat.food -= this.REFUGEE_GROUP_FACTORS.FOOD_COST;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.playSound(this.SOUNDS.refugees.sound, this.SOUNDS.refugees.volume);
                    this.commentArray.push({text: "The refugees are fed and warm.", timer: 5, noise: 1, played: 1, bold: 1});
                    this.commentArray.push({text: "Builder: Bless you for helping them.", timer: 5, noise: 1, played: 0, bold: 1});
                    this.specialItemUsed = 1;
                }
                else if (this.buildingNum.market < 1)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We need a market first", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else if (this.resourceStat.food < this.REFUGEE_GROUP_FACTORS.FOOD_COST)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We don't have enough food to help them...", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We don't have enough gold to help them...", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
            lateNights()
            {
                if (this.buildingNum.market >= 1 && this.resourceStat.gold >= this.LATE_NIGHTS.GOLD_COST && this.citizensStat.satisfaction > .2 - this.LATE_NIGHTS.SAT_DROP)
                {
                    this.monthActions.thismonth += 1;
                    this.resourceStat.gold -= this.LATE_NIGHTS.GOLD_COST;
                    this.productivety = this.LATE_NIGHTS.BOOST;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.playSound(this.SOUNDS.lateNights.sound, this.SOUNDS.lateNights.volume);
                    this.specialsArray.push({time: 90, starttime: 90, id: "Betrayal", title: "Betrayal"});
                    this.satBoosts.push({sat: 0, startSat: this.LATE_NIGHTS.SAT_DROP, time: 60, startTime: 60, lag: 30, ramp: 0, full: 15});
                    this.commentArray.push({text: "The villiagers are worked through the nights. The builder falls silent.", timer: 5, noise: 1, played: 1, bold: 1});
                    this.specialItemUsed = 1;
                }
                else if (this.buildingNum.market < 1)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We need a market first", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else if (this.resourceStat.gold < this.LATE_NIGHTS.GOLD_COST)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We don't have enough gold to do this...", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: What are you doing? If you do this the citizens satisfaction will drop below 20% and they'll overthrow you.", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
            travelingPerformers()
            {
                if (this.buildingNum.market >= 1 && this.resourceStat.gold >= this.TRAVELING_PERFORMERS_FACTORS.GOLD_COST)
                {
                    this.monthActions.thismonth += 1;
                    //travelingPerformersSpan
                    this.resourceStat.gold -= this.TRAVELING_PERFORMERS_FACTORS.GOLD_COST;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.playSound(this.SOUNDS.faire.sound, this.SOUNDS.faire.volume);
                    this.specialsArray.push({time: 60, starttime: 60, id: "travelingPerformersSpan", title: "Joy&nbsp;from&nbsp;Performers"});
                    this.satBoosts.push({sat: 0, startSat: this.TRAVELING_PERFORMERS_FACTORS.SAT_BOOST, time: 30, startTime: 30, lag: 30, ramp: 0, full: 4});
                    this.commentArray.push({text: "The performances and music were beyond anything the villiagers had ever seen before.", timer: 5, noise: 1, played: 1, bold: 1});
                    this.commentArray.push({text: "Builder: That was fantastic!", timer: 5, noise: 1, played: 0, bold: 1});
                    this.specialItemUsed = 1;
                }
                else if (this.buildingNum.market < 1)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We need a market first", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We don't have enough gold!", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
            hireMercenaries()
            {
                if (this.buildingNum.market >= 1 && this.resourceStat.gold >= this.MERCENARIES_FACTORS.GOLD_COST && this.resourceStat.food > this.MERCENARIES_FACTORS.FOOD_COST)
                {
                    this.monthActions.thismonth += 1;
                    this.resourceStat.gold -= this.MERCENARIES_FACTORS.GOLD_COST;
                    this.resourceStat.food -= this.MERCENARIES_FACTORS.FOOD_COST;
                    this.mercenaryProtection = 1;
                    this.mercenaryTimer = 30 * this.MERCENARIES_FACTORS.MONTHS;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.playSound(this.SOUNDS.mercinaries.sound, this.SOUNDS.mercinaries.volume);
                    this.specialsArray.push({time: 90, starttime: 90, id: "mercinariesSpan", title: "Mercenary&nbsp;Protection"});
                    this.commentArray.push({text: "The mercenary army sets up camp. The builder looks on to the horizon silent.", timer: 5, noise: 1, played: 1, bold: 1});
                    this.specialItemUsed = 1;
                }
                else if (this.buildingNum.market < 1)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We need a market first", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else if (this.resourceStat.gold < this.MERCENARIES_FACTORS.GOLD_COST)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We don't have enough gold to do this...", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We don't have enough food to do this...", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
            moreStatsButton()
            {
                if (this.moreStats == 1)
                {
                    this.moreStats = 0;
                    this.highscores = 0;
                }
                else
                {
                    this.moreStats = 1;
                    this.highscores = 0;
                }
            },
            highscoresButton()
            {
                if (this.highscores == 1)
                {
                    this.highscores = 0;
                    this.moreStats = 0;
                }
                else
                {
                    this.highscores = 1;
                    this.moreStats = 0;
                    this.updateHighScores();
                }
            },
            highscoreSubmit()
            {
                var score = {
                    username: this.highScoreName,
                    days: ((this.yearTime * 31 * 12) + (this.monthTime * 31) + this.dayTime),
                    invasions: this.invasionNum, 
                    disasters: this.disasterNum,
                    maxpop: this.highestPopulation,
                    actions: this.monthActions.average};
                console.log(this.cheatsUsed);
                
                if (this.cheatsUsed == "No")
                {
                    console.log(score.days + " " + this.highScoreNum);
                    if (score.days > this.highScoreNum)
                    {
                        console.log("UPDATED " + this.highScoreNum);
                        firebase.database().ref("highscore").set(score);
                    }
                    this.updateHighScores();
                }
                /*
                console.log("Submitting");
                if (this.cheatsUsed == 0 && posted == 0)
                {
                    posted = 1;
                    firebase.database().ref('users-highscores/').push();
                }
                */
            },
            updateHighScores()
            {
                var days;
                var name;
                firebase.database().ref("highscore").on("value", function (snapshot) {
                    days = snapshot.child("days").val();
                    name = snapshot.child("username").val();
                    
                  });
                  
                  this.highScoreNum = days;
                  this.highScoreOnlineName = name;
                  
                /*
                console.log("Updating Scores");
                var topUserScores = firebase.database().ref('users-highscores/');
                for (var i = 0; i < 5; i++)
                {
                    var years = Math.floor(this.topUserScores[i].days / (31 * 12));
                    var months = Math.floor((this.topUserScores[i].days - (years * 12)) / 31)
                    var days = Math.floor((this.topUserScores[i].days - (years * 12 * 31) - (months * 31)));
                    this.highscores.push({name: this.topUserScores[i].name, years: years, months: months, days: days})
                }
                console.log("Updating DOM");
                document.getElementById("highscores").innerHTML = "";
                for (var i = 5; i >= 0; i--)
                {
                    document.getElementById("highscores").innerHTML += "<div class=\"row\"><div class=\"col-lg-3\">" + this.highscores[i].name + "</div><div class=\"col-lg-3\">" + this.highscores[i].days + " Days</div><div class=\"col-lg-3\">" + this.highscores[i].months + " Months</div><div class=\"col-lg-3\">" + this.highscores[i].years + " Years</div></div>";
                }*/
            },
            wizardSpell()
            {
                if (this.buildingNum.market >= 1 && this.resourceStat.gold >= this.WIZARD_FACTORS.GOLD_COST)
                {
                    this.monthActions.thismonth += 1;
                    this.resourceStat.gold -= this.WIZARD_FACTORS.GOLD_COST;
                    this.playSound(this.SOUNDS.click.sound, this.SOUNDS.click.volume);
                    this.playSound(this.SOUNDS.wizard.sound, this.SOUNDS.wizard.volume);
                    var string = "";
                    var random = Math.random();
                    if (random <= this.WIZARD_FACTORS.CHANCE)
                    {
                        var resource = Math.round(Math.random() * 100) % 4;
                        switch (resource)
                        {
                            case 0:
                                this.resourceStat.food = this.resourceStat.food * 2;
                                string = " Stems and leaves burst from the ground bearing fruit. The man has vanished with the gold.";
                                break;
                            case 1:
                                this.resourceStat.lumber = this.resourceStat.lumber * 2;
                                string = " The forest rumbles and trees fall snapped in two. The man has vanished with the gold.";
                                break;
                            case 2:
                                this.resourceStat.stone = this.resourceStat.stone * 2;
                                string = " Boulders erupts from the ground. The man has vanished with the gold.";
                                break;
                            case 3:
                                this.resourceStat.gold = this.resourceStat.gold * 2;
                                string = " The well bottom shimmers with gold. The man has vanished his price."
                                break;
                            default:
                        }
                    }
                    else
                    {
                        string = " Nothing seems to have changed, the man has vanished with the gold.";
                    }
                    this.commentArray.push({text: "The stranger chants and a strange wind blows. " + string, timer: 5, noise: 1, played: 1, bold: 1});
                    this.commentArray.push({text: "The builder falls silent...", timer: 5, noise: 1, played: 1, bold: 1});
                    this.specialItemUsed = 1;
                }
                else if (this.buildingNum.market < 1)
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We need a market first", timer: 5, noise: 1, played: 0, bold: 0});
                }
                else
                {
                    this.playSound(this.SOUNDS.error.sound, this.SOUNDS.error.volume);
                    this.commentArray.push({text: "Builder: We don't have enough gold to do this...", timer: 5, noise: 1, played: 0, bold: 0});
                }
            },
            specialPurchase()
            {
                switch (this.specialItem)
                {
                    case 0:
                        this.slaveTrade();
                        break;
                    case 1:
                        this.travelingArmy();
                        break;
                    case 2:
                        this.harborRefugees();
                        break;
                    case 3:
                        this.lateNights();
                        break;
                    case 4:
                        this.travelingPerformers();
                        break;
                    case 5:
                        this.hireMercenaries();
                        break;
                    case 6:
                        this.wizardSpell();
                        break;
                    default:
                }
            },
            getSpecialUrl()
            {
                if (this.SPECIAL_ITEMS_PRINT[this.specialItem].color == "red")
                {
                    return this.SPECIAL_PHOTO_LINKS.red;
                }
                else if (this.SPECIAL_ITEMS_PRINT[this.specialItem].color == "blue")
                {
                    return this.SPECIAL_PHOTO_LINKS.blue;
                }
                else if (this.SPECIAL_ITEMS_PRINT[this.specialItem].color == "yellow")
                {
                    return this.SPECIAL_PHOTO_LINKS.yellow;
                }
                else if (this.SPECIAL_ITEMS_PRINT[this.specialItem].color == "green")
                {
                    return this.SPECIAL_PHOTO_LINKS.green;
                }
                else
                {
                    return this.SPECIAL_PHOTO_LINKS.purple;
                }
            },
            gameStart()
            {
                this.interval = setInterval(this.refreshData, this.speed);
            },
        },
        computed: 
        {
            highScoreNameCalc()
            {
                if (this.highScoreOnlineName == "")
                {
                    return "Unknown";
                }
                else
                {
                    return this.highScoreOnlineName;
                }
            },
            highScoreCalc()
            {
                var totalDays = this.highScoreNum;
                
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
            satisfactionAvgCalc()
            {
                return Math.round(this.averageSat.sat * 100);
            },
            cheatsUsed()
            {
                if (this.cheatsActivated)
                {
                    return "Yes"
                }
                else
                {
                    return "No"
                }
            },
            twnSqrPop()
            {
                if (this.citizensStat.population >= this.TOWN_SQR_FACTORS.POPULATION)
                {
                    return 0;
                }
                else
                {
                    return 1;
                }
            },
            getTime()
            {
                return this.secondsTime;
            },
            getTaxPercent()
            {
                return Math.round(this.citizensStat.taxRate * 100);
            },
            getSatisfaction()
            {
                return Math.round(this.citizensStat.satisfaction * 100);
            },
            maxFarmLabor()
            {
                return this.FARM_FACTORS.WORKER_SLOTS * this.buildingNum.farm;
            },
            maxLumberLabor()
            {
                return this.LM_FACTORS.WORKER_SLOTS * this.buildingNum.lumbermill;
            },
            maxMineLabor()
            {
                return this.MINE_FACTORS.WORKER_SLOTS * this.buildingNum.mine;
            },
            maxTavernLabor()
            {
                return this.TAVERN_FACTORS.WORKER_SLOTS * this.buildingNum.tavern;
            },
            getDefense()
            {
                return Math.round(this.chancesRatios.defense * 100);
            },
            plusFood()
            {
                if (this.monthlyIncome.foodRate > 0)
                {
                    document.getElementById("monthRateFood").style.color = "rgb(102, 219, 127)";
                    return "+";
                }
                else if (this.monthlyIncome.foodRate < 0)
                {
                    document.getElementById("monthRateFood").style.color = "rgb(255, 110, 110)";
                    return "";
                }
                else
                {
                    document.getElementById("monthRateFood").style.color = "white";
                    return "";
                }
            },
            plusStone()
            {
                if (this.monthlyIncome.stoneRate > 0)
                {
                    document.getElementById("monthRateStone").style.color = "rgb(102, 219, 127)";
                    return "+";
                }
                else if (this.monthlyIncome.stoneRate < 0)
                {
                    document.getElementById("monthRateStone").style.color = "rgb(255, 110, 110)";
                    return "";
                }
                else
                {
                    document.getElementById("monthRateStone").style.color = "white";
                    return "";
                }
            },
            plusLumber()
            {
                if (this.monthlyIncome.lumberRate > 0)
                {
                    document.getElementById("monthRateLumber").style.color = "rgb(102, 219, 127)";
                    return "+";
                }
                else if (this.monthlyIncome.lumberRate < 0)
                {
                    document.getElementById("monthRateLumber").style.color = "rgb(255, 110, 110)";
                    return "";
                }
                else
                {
                    document.getElementById("monthRateLumber").style.color = "white";
                    return "";
                }
            },
            plusGold()
            {
                if (this.monthlyIncome.goldRate > 0)
                {
                    document.getElementById("monthRateGold").style.color = "rgb(102, 219, 127)";
                    return "+";
                }
                else if (this.monthlyIncome.goldRate < 0)
                {
                    document.getElementById("monthRateGold").style.color = "rgb(255, 110, 110)";
                    return "";
                }
                else
                {
                    document.getElementById("monthRateGold").style.color = "white";
                    return "";
                }
            },
            gatherWoodCalc()
            {
                if (this.GATHER_WOOD_FACTORS.FREE * this.laborDistribution.free <= this.GATHER_WOOD_FACTORS.FREE * 5)
                {
                    return this.GATHER_WOOD_FACTORS.LUMBER + this.GATHER_WOOD_FACTORS.FREE * this.laborDistribution.free;
                }
                else
                {
                    return this.GATHER_WOOD_FACTORS.LUMBER + this.GATHER_WOOD_FACTORS.FREE * 5;
                }
                
            },
            huntFoodCalc()
            {
                if (this.HUNT_FACTORS.FREE * this.laborDistribution.free <= 20)
                {
                    return this.HUNT_FACTORS.FOOD + this.HUNT_FACTORS.FREE * this.laborDistribution.free;
                }
                else
                {
                    return this.HUNT_FACTORS.FOOD + 20;
                }
                
            },
            getBeds()
            {
                return this.HOUSE_FACTORS.BEDS * this.buildingNum.houses;
            },
            getSpecialTitle()
            {
                return this.SPECIAL_ITEMS_PRINT[this.specialItem].title;
                
            },
            getSpecialDescription()
            {
                return this.SPECIAL_ITEMS_PRINT[this.specialItem].description;
            },
            getYears()
            {
                if (this.yearTime == 0)
                {
                    return "";
                }
                else if (this.yearTime == 1)
                {
                    return " " + this.yearTime + " year";
                }
                else
                {
                    return " " + this.yearTime + " years";
                }
            },
            getMonths()
            {
                if (this.monthTime == 0)
                {
                    return "";
                }
                else if (this.monthTime == 1)
                {
                    return " " + this.monthTime + " month";
                }
                else
                {
                    return " " + this.monthTime + " months";
                }
            },
            getDays()
            {
                if (this.dayTime == 0)
                {
                    return "";
                }
                else if (this.dayTime == 1)
                {
                    return " " + this.dayTime + " day";
                }
                else
                {
                    return " " + this.dayTime + " days";
                }
            },
            getFinalYears()
            {
                if (this.finalYear == 0)
                {
                    return "";
                }
                else if (this.finalYear == 1)
                {
                    return "and " + this.finalYear + " year";
                }
                else
                {
                    return "and " + this.finalYear + " years";
                }
            },
            getFinalMonths()
            {
                if (this.finalMonth == 0)
                {
                    return "";
                }
                else if (this.finalMonth == 1)
                {
                    if (this.finalYear >= 1)
                    {
                        if (this.finalDays >= 1)
                        {
                            return ", " + this.finalMonth + " month";
                        }
                        else
                        {
                            return this.finalMonth + " month";
                        }
                    }
                    else
                    {
                        return "and " + this.finalMonth + " month";
                    }
                    
                }
                else
                {
                    if (this.finalYear >= 1)
                    {
                        if (this.finalDays >= 1)
                        {
                            return ", " + this.finalMonth + " months";
                        }
                        else
                        {
                            return this.finalMonth + " months";
                        }
                    }
                    else
                    {
                        return "and " + this.finalMonth + " months";
                    }
                }
            },
            getFinalDays()
            {
                if (this.finalDay == 0)
                {
                    return "";
                }
                else if (this.finalDay == 1)
                {
                    return " " + this.finalDay + " day";
                }
                else
                {
                    return " " + this.finalDay + " days";
                }
            },

        },
        created() 
        {
            this.gameStart();
            this.updateHighScores();
        }
    })
}

Vue.component('modal', {
    template: '#modal-template',
    props: ['tutorial']
  })

// MUSIC FUNCTIONS
var notGameOver = 1;
var musicOff = 0;

function playMusic()
{
    if (notGameOver)
    {
        if (!sunshine && !hardhardMode)
        {
            var media = document.getElementById("myMusic");
        }
        else if (sunshine)
        {
            var media = document.getElementById("sunshine");
        }
        else
        {
            var media = document.getElementById("hardmusic");
        }
        if (hardhardMode && !sunshine)
        {
            media.volume = 0.5;
        }
        else
        {
            media.volume = 0.3;
        }
        const playPromise = media.play();
        if (playPromise !== null){
            playPromise.catch(() => { media.play(); })
        }
        if (!musicOff && (sunshine || hardhardMode))
        {
            musicOff = 1;
            var media = document.getElementById("myMusic");
            const playPromise = media.pause();
            if (playPromise !== null){
                playPromise.catch(() => { media.pause(); })
            }
        }
    }
}

function pauseMusic()
{
    if (!sunshine && !hardhardMode)
    {
        var media = document.getElementById("myMusic");
        const playPromise = media.pause();
        if (playPromise !== null){
            playPromise.catch(() => { media.pause(); })
        }
    }
    else if (sunshine)
    {
        var media = document.getElementById("sunshine");
        const playPromise = media.pause();
        if (playPromise !== null){
            playPromise.catch(() => { media.pause(); })
        }
    }
    else
    {
        var media = document.getElementById("hardmusic");
        const playPromise = media.pause();
        if (playPromise !== null){
            playPromise.catch(() => { media.pause(); })
        }
    }
}

function playPage() {
    game.pageChangePlay();    
 }

 function playHome() {
    game.pageChangeHome();    
 }

 function playAbout() {
    game.pageChangeAbout();    
 }

 function tutorialsOff()
 {
    tutorialToggle = 0;
    var media = document.getElementById("click");
    media.volume = .2;
    const playPromise = media.play();
    if (playPromise !== null){
        playPromise.catch(() => { media.play(); })
    }

 }

 function rodeo()
 {
    hardmode = 1;
    tutorialToggle = 0;
    var media = document.getElementById("rodeo");
    media.volume = .4;
    const playPromise = media.play();
    if (playPromise !== null){
        playPromise.catch(() => { media.play(); })
    }

 }
