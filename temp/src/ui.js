import { gsap } from "./greensock/all.js";
// import * as PIXI from 'pixi.js';

// import * as PIXI from 'pixi.js';

export class UI {

    setUp(e) {

        this.e = e;

        this.animatedSprites=[];

        //-----------------

        console.log('PixiJS Version:', PIXI.VERSION);

        this.app = new PIXI.Application();
        this.app
          .init({ background: "#000000", resizeTo: window, hello: true,  })
          .then(async () => {
            document.body.appendChild(this.app.canvas);
        });

        // PIXI.settings.RESOLUTION = window.devicePixelRatio || 1;

    }

    load() {

        console.log("LOAD IMAGES")

        console.log(PIXI)
        console.log(PIXI.Assets);

        var images = [
            "black",
            "white",
            "front",
            "back",
            "crystalBall",
            "light2",
            "danceWords",
            "record",
            "sparkle",
            "ticket",
            "ticketBigBack",
            "ticketBigFront",
            "ticketBigBlack"
        ]

        const imagePaths = [];

        for(var i=0; i<images.length; i++){
           imagePaths.push( "./src/img/"+images[i]+".png" )
        }

        for(var i=0; i<=80; i++){
            var frameNum = i.toString().padStart(4, '0');
            imagePaths.push( "./src/img/sk/sk_"+frameNum+".png" )
         }
 
        const texturesPromise = PIXI.Assets.load(imagePaths);

        texturesPromise.then((textures) => {
            console.log(textures);  
            console.log("loaded")

            this.s = {};

            imagePaths.forEach((path) => {
                const filename = path.split('/').pop().split('.')[0];
                const texture = PIXI.Texture.from(path);
                this.s[filename] = texture;
                // console.log(filename);
            });

            // console.log("Textures loaded dynamically:");
            // console.log(this.s);
            // console.log(this.s.black);
            // console.log(this.s.black.texture);

            this.isLoaded_UI=true;

            this.build();
            
        });

        //----------------------------------------------------
        //----------------------------------------------------
        //----------------------------------------------------

    }

    //---------------------------------------------------------------------------------------------------------

    build(){

        this.tw = new Object();
        this.tw.cardOffset=2000;

        this.fortuneDiv = document.getElementById("fortuneDiv");
        this.cardImage = document.getElementById("cardImage");
        this.cardText = document.getElementById("cardText");
        // this.textCont = document.getElementById("textCont");

        console.log("---------------------------")
        console.log("build")

        // let redBox = new PIXI.Graphics();
        // redBox.beginFill(0xFF0000);
        // redBox.drawRect(30, 30, 100, 100);
        // redBox.endFill();
        // console.log(this.app);
        // console.log(this.app.stage);
        // this.app.stage.addChild(redBox);

        this.size = 2868;

        this.tester = new PIXI.Sprite(this.s.black);
        this.tester.width=50;
        this.tester.height=50;
        this.tester._zIndex=100000;
        // this.app.stage.addChild(this.tester);

        this.baseCont = new PIXI.Container();
        this.baseCont.sortableChildren = true;
        this.app.stage.addChild(this.baseCont);

        this.front = new PIXI.Sprite(this.s.front);
        this.front.anchor.x=.5;
        this.front._zIndex=100;
        this.baseCont.addChild(this.front);

        this.black = new PIXI.Sprite(this.s.black);
        this.black.anchor.x=.5;
        this.black.width=1300;
        this.black.height=this.size;
        this.black._zIndex=70;
        this.black.alpha=0;
        this.baseCont.addChild(this.black);

        this.back = new PIXI.Sprite(this.s.back);
        this.back.anchor.x=.5;
        this.back._zIndex=1;
        this.baseCont.addChild(this.back);

        this.skeliton = new PIXI.Sprite(this.s.sk_0000);
        this.skeliton.anchor.x=.5;
        this.skeliton.anchor.y=1;
        this.skeliton.scale.x=this.skeliton.scale.y=2.97
        this.skeliton.y=1970;
        this.skeliton._zIndex=50;
        this.baseCont.addChild(this.skeliton);

        this.skeliton2 = new PIXI.Sprite(this.s.sk_0000);
        this.skeliton2.anchor.x=.5;
        this.skeliton2.anchor.y=1;
        this.skeliton2.scale.x=this.skeliton2.scale.y=2.97
        this.skeliton2.y=1970;
        this.skeliton2._zIndex=51;
        this.skeliton2.alpha=0;
        this.baseCont.addChild(this.skeliton2);

        this.magentaOverlay = new PIXI.Sprite(this.s.white);
        this.magentaOverlay.anchor.x=.5;
        this.magentaOverlay.anchor.y=.5;
        this.magentaOverlay.width=1300;
        this.magentaOverlay.height=5000;
        this.magentaOverlay.tint=0xFF00FF;
        this.magentaOverlay.alpha=0;
        this.magentaOverlay._zIndex=60;
        this.baseCont.addChild(this.magentaOverlay);

        this.skAni = [];
        for(var i=0; i<=80; i++){
            var frameNum = i.toString().padStart(4, '0');
            this.skAni.push(this.s['sk_'+frameNum]);
        }
           
        this.skeliton.ani = this.e.ui.skAni;
        this.skeliton.aniSpeed = .075;
        this.e.ui.animatedSprites.push(this.skeliton)
        this.skeliton.aniLoop=false;
        this.skeliton.aniPause=true;
        // this.skeliton.play();

        this.crystalBall = new PIXI.Sprite(this.s.crystalBall);
        this.crystalBall.y=1430;
        this.crystalBall.x=-9;
        this.crystalBall.anchor.x=.5;
        this.crystalBall._zIndex=151;
        // this.baseCont.addChild(this.crystalBall);

        this.danceWords = new PIXI.Sprite(this.s.danceWords);
        this.danceWords.y=1978;
        this.danceWords.x=-2;
        this.danceWords.anchor.x=.5;
        this.danceWords._zIndex=121;
        this.baseCont.addChild(this.danceWords);

        this.lights=[];

        for(var i=0; i<6; i++){

            this.light = new PIXI.Sprite(this.s.light2);

            if(i===0){
                this.light.x=-571;
            }else if(i===1){
                this.light.x=-462;
            }else if(i===2){
                this.light.x=-352;
            }else if(i===3){
                this.light.x=351;
            }else if(i===4){
                this.light.x=458;
            }else if(i===5){
                this.light.x=568;
            }

            this.light.y=2021;
            this.light.anchor.x=.5;
            this.light.anchor.y=.5;
            this.light._zIndex=121;
            this.baseCont.addChild(this.light);

            this.lights.push(this.light);
    
        }

        this.record1 = new PIXI.Sprite(this.s.record);
        this.record1.y=2412;
        this.record1.x=-495;
        this.record1.anchor.x=.5;
        this.record1.anchor.y=.5;
        this.record1._zIndex=121;
        this.baseCont.addChild(this.record1);

        this.record2 = new PIXI.Sprite(this.s.record);
        this.record2.y=2412;
        this.record2.x=496;
        this.record2.anchor.x=.5;
        this.record2.anchor.y=.5;
        this.record2._zIndex=161;
        this.baseCont.addChild(this.record2);

        this.glows = [];

        for(var i=0; i<200; i++){

            this.glow = new PIXI.Sprite(this.s.sparkle);
            this.glow.y=1812;
            // this.glow.alpha=0;
            this.glow.anchor.x=.5;
            this.glow.anchor.y=.5;
            this.glow._zIndex=21;
            this.baseCont.addChild(this.glow);

            this.glows.push(this.glow);

        }

        // this.glows2 = [];

        // for(var i=0; i<30; i++){

        //     this.glow = new PIXI.Sprite(this.s.sparkle);
        //     this.glow.y=1812;
        //     this.glow.alpha=0;
        //     this.glow.anchor.x=.5;
        //     this.glow.anchor.y=.5;
        //     this.glow._zIndex=91;
        //     this.baseCont.addChild(this.glow);

        //     this.glows2.push(this.glow);

        // }

        this.ticket = new PIXI.Sprite(this.s.ticket);
        this.ticket.y=2280;
        this.ticket.scale.x=this.ticket.scale.y=1;
        this.ticket.anchor.x=.5;
        this.ticket.anchor.y=.5;
        this.ticket.alpha=1;
        this.ticket._zIndex=161;
        this.baseCont.addChild(this.ticket);

        this.ticketMask = new PIXI.Sprite(this.s.white);
        this.ticketMask.y=2410;
        this.ticketMask.anchor.x=.5;
        // this.ticketMask.anchor.y=.5;
        this.ticketMask.width=200;
        this.ticketMask.height=600;
        this.ticketMask._zIndex=190;
        this.ticketMask.alpha=1;
        this.baseCont.addChild(this.ticketMask);

        this.ticket.mask=this.ticketMask;

        //

        this.bigTicketCont = new PIXI.Container();
        this.bigTicketCont.sortableChildren = true;
        // this.app.stage.addChild(this.bigTicketCont);

        this.bigTicketCont._zIndex=200;

        this.bigTicketInnerCont = new PIXI.Container();
        this.bigTicketInnerCont.sortableChildren = true;
        this.bigTicketCont.addChild(this.bigTicketInnerCont);
        // this.bigTicketInnerCont.position.y=1000;

        // this.ticketBig = new PIXI.Sprite(this.s.ticketBigBack);
        this.ticketBig = new PIXI.Sprite(this.s.ticketBigFront);
        this.ticketBig.scale.x=this.ticketBig.scale.y=.5;
        this.ticketBig.anchor.x=.5;
        this.ticketBig.anchor.y=.5;
        this.ticketBig.alpha=1;
        this.ticketBig._zIndex=1161;
        this.bigTicketInnerCont.addChild(this.ticketBig);
        // this.ticketBig.y=1000;

        const style = new PIXI.TextStyle({
            fontFamily: 'Arial', // Font family
            fontSize: 14, // Font size
            fill: '#000000', // Font color
            wordWrap: true, // Enable word wrapping
            wordWrapWidth: 250, // Width before wrapping text
            align: 'left', // Text alignment
            lineHeight: 21,
            resolution: 3,
        });
    
        this.fortuneBox = new PIXI.Text('This is an example of a wrapped text box in Pixi.js. You can adjust the text, style, and wrapping as needed.', style);
        this.fortuneBox.x = -120;
        this.fortuneBox.y = -90;
        this.fortuneBox._zIndex=2161;
        this.bigTicketInnerCont.addChild(this.fortuneBox);

        this.blackFader = new PIXI.Sprite(this.s.black);
        this.blackFader.anchor.x=.5;
        this.blackFader.anchor.y=.5;
        this.blackFader.width=3000;
        this.blackFader.height=3000;
        this.blackFader._zIndex=170;
        this.blackFader.alpha=0;
        this.app.stage.addChild(this.blackFader);

        this.whiteFader = new PIXI.Sprite(this.s.white);
        this.whiteFader.anchor.x=.5;
        this.whiteFader.anchor.y=.5;
        this.whiteFader.width=3000;
        this.whiteFader.height=3000;
        this.whiteFader._zIndex=220;
        this.whiteFader.alpha=0;
        this.app.stage.addChild(this.whiteFader);

        this.correct = document.getElementById("correct");

        console.log(this.tester);

        this.flashCount=0;
        this.bulbCount=0;
        this.bulbCue=0;
        this.wordCount=0
        this.showCount=0;
        this.showCorrect=false;
 
        this.lightAction='to wait'

    }

    playAnimation(){

        this.makeSparkles();
        this.skeliton.curFrame=0;
        this.skeliton.aniPause=false;
        this.skeliton.alpha=1;
        this.skeliton2.alpha=0;
        this.lightAction="to lights";
        this.action="playing"

    }

    makeSparkles(){

        for(var i=0; i<this.glows.length; i++){

            this.glows[i].position.x = this.e.u.nran(500);
            this.glows[i].position.y = 2242;
            this.glows[i].scale.x = this.glows[i].scale.y = (this.e.u.ran(70)+30)/50;
            this.glows[i].alpha=1;

            gsap.killTweensOf(this.glow);
            gsap.killTweensOf(this.glow.position);

            var div = 23;
            var del = this.e.u.ran(100)/div;
            var dur = this.e.u.ran(150)/div;
            gsap.to( this.glows[i], { alpha: 0, duration: dur, delay: del*1.5, ease: "sine.out"});
            gsap.to( this.glows[i].position, { y: 0, duration: dur, delay: del, ease: "sine.out"});
            gsap.to( this.glows[i].scale, { x: 0, y: 0, duration: dur, delay: del, ease: "sine.out"});

        }

        // for(var i=0; i<this.glows2.length; i++){

        //     this.glows2[i].position.x = 0;
        //     this.glows2[i].position.y = 1742;
        //     this.glows2[i].scale.x = this.glows2[i].scale.y = (this.e.u.ran(70)+30)/100;
        //     this.glows2[i].alpha=0;

        //     gsap.killTweensOf(this.glows2[i]);
        //     gsap.killTweensOf(this.glows2[i].position);
        //     gsap.killTweensOf(this.glows2[i].scale);

        //     var div = 60;
        //     var del = this.e.u.ran(100)/div;
        //     var dur = this.e.u.ran(150)/div;
        //     gsap.to( this.glows2[i], { alpha: 1, duration: .25, ease: "sine.out"});
        //     gsap.to( this.glows2[i].position, { x: this.e.u.nran(1000), y: 1742-this.e.u.ran(2000), duration: dur, delay: del, ease: "sine.out"});
        //     gsap.to( this.glows2[i].scale, { x: 0, y: 0, duration: dur, delay: del, ease: "sine.out"});

        // }

    }

    //---------------------------------------------------------------------------------------------------------

    update(){

        this.fortuneDiv.style.top = ((window.innerHeight/2)+this.tw.cardOffset)+"px";

        this.cardWidth = this.cardImage.clientWidth;
        this.cardText.style.width = Math.round(this.cardWidth*.87)+"px";

        // if the display is super skinny, shrink it down

        if(Number(this.cardImage.clientWidth)>=Number(this.fortuneDiv.clientWidth)-1){
            this.cardImage.style.width=this.fortuneDiv.clientWidth+"px";
        }else{
            this.cardImage.style.width="auto"
        }

        //-----------------------------------------------------

        this.whiteFader.position.x=window.innerWidth/2;
        this.whiteFader.position.y=window.innerHeight/2;

        this.blackFader.position.x=window.innerWidth/2;
        this.blackFader.position.y=window.innerHeight/2;

        this.bigTicketCont.position.x=window.innerWidth/2;
        this.bigTicketCont.position.y=window.innerHeight/2;

        if(this.action==="playing"){

            // Magenta overlay animation based on skeleton frame
            if(this.skeliton.curFrame === 40 && this.magentaOverlay.alpha === 0){
                gsap.to(this.magentaOverlay, { alpha: 0.25, duration: 0.5, ease: "sine.inOut" });
            } else if(this.skeliton.curFrame === 52 && this.magentaOverlay.alpha < 0.25){
                gsap.to(this.magentaOverlay, { alpha: 0.25, duration: 0.2, ease: "sine.out" });
            } else if(this.skeliton.curFrame >= 60 && this.magentaOverlay.alpha > 0){
                gsap.to(this.magentaOverlay, { alpha: 0, duration: 0.3, ease: "sine.in" });
            }

            if(this.skeliton.curFrame===70){

                gsap.to(this.skeliton, { alpha: 0, duration: .75, delay: .75, ease: "linear" });
                gsap.to(this.skeliton2, { alpha: 1, duration: .75, ease: "linear" });

            }

            if(this.skeliton.curFrame===71){

                this.action="animation over";

            }

        }else if(this.action==="animation over"){

            this.lightAction="to wait";
            this.action="ticket";

        }else if(this.action==="ticket"){



        }

        if(this.showCorrect===true){

            this.showCount+=this.e.dt;
            if(this.showCount>.033){

                if(this.correct.style.opacity==="0.6"){
                    this.correct.style.opacity="0.2";
                }else{
                    this.correct.style.opacity="0.6";
                }
                this.showCount=0;

            }

        }else{

            this.correct.style.opacity=0;

        }

        //

        this.contScale = window.innerHeight / this.size;
        this.baseCont.scale.x = this.baseCont.scale.y = this.contScale;
        this.baseCont.x = window.innerWidth/2;

        //

        this.bigTicketScale = window.innerHeight / 750;
        this.bigTicketCont.scale.x = this.bigTicketCont.scale.y = this.bigTicketScale;
        this.bigTicketCont.x = window.innerWidth/2;

        //

        if(this.lightAction==="lights"){

            this.flashCount+=this.e.dt;
            if(this.flashCount>.05){
                this.black.alpha = this.e.u.ran(55)/100;
                this.flashCount=0;
            }
    
        }else{

            this.flashCount+=this.e.dt;
            if(this.flashCount>.05){
                this.black.alpha = this.e.u.ran(15)/100;
                this.flashCount=0;
            }
    
        }

        if(this.lightAction==="to wait"){

            this.danceWords.alpha=1;

            this.lights[0].alpha=1;
            this.lights[5].alpha=1;
            this.lights[1].alpha=1;
            this.lights[4].alpha=1;
            this.lights[2].alpha=1;
            this.lights[3].alpha=1;

            gsap.killTweensOf(this.crystalBall);
            gsap.to( this.crystalBall, { alpha: 0, duration: .5, ease: "linear"});

            this.lightAction="wait";

        }else if(this.lightAction==="wait"){



        }else if(this.lightAction==="to lights"){

            gsap.to( this.crystalBall, { alpha: 1, yoyo: true, repeat: -1, duration: .5, ease: "linear"});

            this.lightAction="lights";

        }else if(this.lightAction==="lights"){

            //

            this.wordCount+=this.e.dt;
            if(this.wordCount>.4){

            if(this.danceWords.alpha===0){
                this.danceWords.alpha=1;
            }else{
                this.danceWords.alpha=0;
            }

                this.wordCount=0;

            }

            //

            this.record1.rotation+=this.e.dt;
            this.record2.rotation+=this.e.dt;

            //

            this.bulbCount+=this.e.dt;
            if(this.bulbCount>.05){

                this.bulbCount=0;

                this.bulbCue+=1;
                if(this.bulbCue===1){

                    this.lights[0].alpha=1;
                    this.lights[5].alpha=1;

                    this.lights[1].alpha=0;
                    this.lights[4].alpha=0;

                    this.lights[2].alpha=0;
                    this.lights[3].alpha=0;

                }else if(this.bulbCue===2){

                    this.lights[0].alpha=0;
                    this.lights[5].alpha=0;

                    this.lights[1].alpha=1;
                    this.lights[4].alpha=1;

                    this.lights[2].alpha=0;
                    this.lights[3].alpha=0;

                }else if(this.bulbCue===3){

                    this.lights[0].alpha=0;
                    this.lights[5].alpha=0;

                    this.lights[1].alpha=0;
                    this.lights[4].alpha=0;

                    this.lights[2].alpha=1;
                    this.lights[3].alpha=1;

                    this.bulbCue=0;

                }

            }

        }

        // console.log("aass")

        // //base cont
        // this.baseCont = new PIXI.Container();
        // this.baseCont.sortableChildren = true;
        // this.app.stage.addChild(this.baseCont);

        // this.tester = new PIXI.Sprite(this.white);
        // this.tester.width=50;
        // this.tester.height=50;
        // this.tester.alpha=0;
        // this.tester._zIndex=100000;
        // this.app.stage.addChild(this.tester);

        // //main cont
        // this.mainCont = new PIXI.Container();
        // this.mainCont.sortableChildren = true;
        // this.baseCont.addChild(this.mainCont);

        // //center main cont
        // this.mainCont.position.x = Math.round(window.innerWidth/2);

        this.animate();

    }

    animate() {

        for (var i = 0; i < this.animatedSprites.length; i++) {

            if (this.animatedSprites !== null) {

                var a = this.animatedSprites[i];

                if (a.aniCount === undefined) {
                    a.aniCount = 0;
                    a.curFrame = 0;
                }

                if (a.aniSpeed === undefined) {
                    a.aniSpeed = .25;
                }

                if (a.ani === undefined) {
                    a.ani = [];
                }

                if(a.aniPause!==true){
                    a.aniCount += this.e.dt;
                }

                if (a.aniCount > a.aniSpeed) {

                    a.aniCount = 0;
                    if(a.aniLoop===false){
                        if (a.curFrame < a.ani.length-1){
                            a.curFrame += 1;
                        }
                    }else{
                        a.curFrame += 1;
                    }
                    
                    if (a.curFrame >= a.ani.length && a.aniLoop!==false) {
                        a.curFrame = 0;
                    }

                    a.texture = a.ani[a.curFrame];

                }

            }

        }

    }

}