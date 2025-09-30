import { gsap } from "./greensock/all.js";

export class Scene {
    
  setUp(e) {

    this.e=e;

    this.showInstructions=true;

  }

  buildScene(){

    this.action="set";
    this.count=0;
    this.mins = 0;
    this.secs = 0;
    
    // Debug variable to test prize wins (turn on for testing)
    this.debugPrizeWin = false;
    
    // Prize winner tracking
    this.isPrizeWinner = false;
    this.hasCheckedWinner = false;
    
    window.addEventListener('click', (event) => {

      // if(this.action==="ticket6"){
      //   this.action="ticket7"
      // }
      
    });

    window.addEventListener('touchstart', (event) => {

      // if(this.action==="ticket6"){
      //   this.action="ticket7"
      // }
      
    });

    document.getElementById("qbut1").addEventListener('click', (event) => {
      this.qBut(1);
    });

    document.getElementById("qbut1").addEventListener('touchstart', (event) => {
      this.qBut(1);
    });

    document.getElementById("qbut2").addEventListener('click', (event) => {
      this.qBut(2);
    });

    document.getElementById("qbut2").addEventListener('touchstart', (event) => {
      this.qBut(2);
    });

    document.getElementById("qbut3").addEventListener('click', (event) => {
      this.qBut(3);
    });

    document.getElementById("qbut3").addEventListener('touchstart', (event) => {
      this.qBut(3);
    });

    document.getElementById("qbut4").addEventListener('click', (event) => {
      this.qBut(4);
    });

    document.getElementById("qbut4").addEventListener('touchstart', (event) => {
      this.qBut(4);
    });

    document.getElementById("qbut5").addEventListener('click', (event) => {
      this.riddleBut();
    });

    document.getElementById("qbut5").addEventListener('touchstart', (event) => {
      this.riddleBut()
    });

    document.getElementById("backButton").addEventListener('click', (event) => {
      this.backButton();
    });

    document.getElementById("backButton").addEventListener('touchstart', (event) => {
      this.backButton()
    });

    document.getElementById("backButton2").addEventListener('click', (event) => {
      this.backButton();
    });

    document.getElementById("backButton2").addEventListener('touchstart', (event) => {
      this.backButton()
    });

    document.getElementById("enterButton").addEventListener('click', (event) => {
      this.enterButton();
    });

    document.getElementById("enterButton").addEventListener('touchstart', (event) => {
      this.enterButton()
    });

    document.getElementById("noteBut").addEventListener('click', (event) => {
      document.getElementById("spotifyPlayer").style.opacity="1";
      document.getElementById("spotifyPlayer").style.pointerEvents="auto";
    });

    document.getElementById("noteBut").addEventListener('touchstart', (event) => {
      document.getElementById("spotifyPlayer").style.opacity="1";
      document.getElementById("spotifyPlayer").style.pointerEvents="auto";
    });

    document.getElementById("downloadBut").addEventListener('click', (event) => {
      this.downloadShare();
    });

    document.getElementById("downloadBut").addEventListener('touchstart', (event) => {
      this.downloadShare();
    });

    document.getElementById("closeBut").addEventListener('click', (event) => {
      this.closeShare();
    });

    document.getElementById("closeBut").addEventListener('touchstart', (event) => {
      this.closeShare();
    });

    document.getElementById("resultBottom").addEventListener('click', (event) => {
      if(this.e.mobile===false){
        this.shareScore();
      }
    });

    document.getElementById("resultBottom").addEventListener('touchstart', (event) => {
      if(this.e.mobile===true){
        this.shareScore();
      }
    });

    document.getElementById("shareBut").addEventListener('click', (event) => {
      this.share();
    });

    document.getElementById("shareBut").addEventListener('touchstart', (event) => {
      this.share();
    });

    document.getElementById("shareFortune").addEventListener('click', (event) => {
      if(this.e.mobile===false){
        this.shareFortune();
      }
    });

    document.getElementById("shareFortune").addEventListener('touchstart', (event) => {
      if(this.e.mobile===true){
        this.shareFortune();
      }
    });

    document.getElementById("homeBut").addEventListener('click', (event) => {
      if(this.e.mobile===false){
        this.home();
      }
    });

    document.getElementById("homeBut").addEventListener('touchstart', (event) => {
      if(this.e.mobile===true){
        this.home();
      }
    });

  }

  home(){

    if(this.action==="ticket6"){
        gsap.to( this.e.ui.blackFader, { alpha: 0, duration: 1, ease: "linear"});
        this.action="ticket7"
    }

  }

  checkForWinner(){
    
    fetch('play_counter.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Play counter response:', data);
      if(data.is_winner){
        this.isPrizeWinner = true;
        console.log('Player is a winner! Play count:', data.play_count);
      }
    })
    .catch(error => {
      console.error('Error checking for winner:', error);
      // Fall back to debug mode if API fails
      if(this.debugPrizeWin){
        this.isPrizeWinner = true;
      }
    });
    
  }

  shareScore(){

    // this.riddleCount = this.e.u.ran(200);
    // console.log(this.riddleCount)

    const img = new Image();
    img.onload = () => {
        const canvas = document.getElementById('canvasShare');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);

        ctx.font = '130px fortuneFont';
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.textAlign = 'center';

        console.log(this.riddleCount)

        this.mins = Math.floor(this.riddleCount/60);
        this.secs = Math.floor(this.riddleCount - Math.floor(this.mins*60));

        if(this.mins===0){
          var text = this.secs+" seconds"
        }else{
          text = this.mins+" min "+this.secs+" sec"
        }
        
        ctx.strokeText(text, canvas.width / 2, canvas.height *.93 + 15);
        ctx.fillText(text, canvas.width / 2, canvas.height *.93 + 15);

        // document.getElementById('canvasShare').style.display="block";

        const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
        const link = document.createElement('a');
        link.download = 'shareScore.png';
        link.href = image;
        link.click();
    }
    img.src = './src/img/shareScore.png';

  }

  shareFortune(){

    console.log("./src/img/shareCards/card"+this.cardLetter+"_"+(this.cardNum+1)+".png")

    const image = document.getElementById('shareFortuneImage');
    image.src = "./src/img/shareCards/card"+this.cardLetter+"_"+(this.cardNum+1)+".png";
    const imageUrl = image.src;
    const imageName = 'tarotmacabre.png';

    const link = document.createElement('a');
    link.href = imageUrl; 
    link.download = imageName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  }

  share(){
    document.getElementById('shareDiv').style.display = "inline";
  }

  closeShare(){
    document.getElementById('shareDiv').style.display = "none";
  }

  downloadShare(){

    console.log("ds")

    const image = document.getElementById('shareImage');
    const imageUrl = image.src;
    const imageName = 'tarotmacabre.png';

    const link = document.createElement('a');
    link.href = imageUrl; 
    link.download = imageName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  }

  backButton(){
    this.action="back button"
  }

  enterButton(){
    this.action="enter answer"
  }

  qBut(num){

    gsap.killTweensOf(document.getElementById("gameButs"));
    gsap.to( document.getElementById("gameButs"), { opacity: 0, duration: .15, ease: "linear"});
    document.getElementById("gameButs").style.pointerEvents="none";
    this.dest="ticket";
    this.action="button pressed"

    this.qNum = num;

  }

  riddleBut(){

    gsap.killTweensOf(document.getElementById("gameButs"));
    gsap.to( document.getElementById("gameButs"), { opacity: 0, duration: .15, ease: "linear"});
    document.getElementById("gameButs").style.pointerEvents="none";
    this.dest="riddle";
    this.action="button pressed";

  }

  hidePlayer(){

    gsap.to( document.getElementById("spotifyPlayer"), { opacity: 0, duration: .15, ease: "linear"});
    document.getElementById("spotifyPlayer").style.pointerEvents="none";

  }

  update(){

    document.getElementById("feedback").innerHTML = this.action+"";

    if(this.action==="set"){

      

    }else if(this.action==="press player"){

      // console.log(document.activeElement.id)

      if(document.activeElement.id==="spotifyPlayer"){

        this.action="press player2"

     }

    }else if(this.action==="press player2"){

      this.showInstructions=false;

      gsap.killTweensOf(document.getElementById("gameButs"));
      // gsap.to( document.getElementById("spotifyPlayer"), { opacity: 0, duration: .15, ease: "linear"});
      gsap.to( document.getElementById("startBut"), { opacity: 0, duration: .15, ease: "linear"});
      gsap.to( document.getElementById("gameButs"), { opacity: 1, duration: .15, delay: 1.45, ease: "linear"});
      gsap.to( this.e.ui.blackFader, { alpha: 0, duration: 1, ease: "linear"});

      document.getElementById("startBut").style.pointerEvents="none";
      // document.getElementById("spotifyPlayer").style.pointerEvents="none";

      this.hidePlayer()

      this.count=0;
      this.action="show buttons"

    }else if(this.action==="show buttons"){

      this.count+=this.e.dt;
      if(this.count>1.45){

        this.e.s.p("mystery");
        this.e.ui.whiteFader.alpha=.75;
        gsap.to( this.e.ui.whiteFader, { alpha: 0, duration: 1, ease: "linear"});
        // gsap.to( this.e.ui.blackFader, { alpha: .75, duration: .15, ease: "linear"});
        gsap.to( this.e.ui.blackFader, { alpha: 0, duration: .15, ease: "linear"});

        this.hidePlayer();

        this.action="show buttons2";

      }

    }else if(this.action==="show buttons2"){

      this.count+=this.e.dt;
      if(this.count>.15){

        this.count=0;
        document.getElementById("gameButs").style.pointerEvents="auto";
        this.action="wait for button press";

      }

    }else if(this.action==="button pressed"){

      this.count+=this.e.dt;
      if(this.count>.5){

        this.count=0;
        this.e.s.p("mystery2");
        this.e.s.p("servo");
        this.e.ui.playAnimation();
        
        // Reset winner check for new game
        this.hasCheckedWinner = false;
        this.isPrizeWinner = false;
        
        this.action="animate"
        gsap.to( this.e.ui.blackFader, { alpha: 0, duration: .15, ease: "linear"});

        this.hidePlayer()

        

      }

    }else if(this.action==="animate"){

      this.count+=this.e.dt;
      if(this.count>6.25){

        this.hidePlayer()

        this.count=0;
        this.e.ui.showCorrect=false;

        if(this.dest==="ticket"){

          this.action="ticket"
          this.e.s.p("ticket");
          gsap.to( this.e.ui.ticket, { y: 2500, duration: 2, ease: "sine.out"});

        }else if(this.dest==="riddle"){

          this.riddleCount=0;
          this.action="riddle"

        }else if(this.dest==="correct result"){

          this.action="correct result"

        }
        
      }

    }else if(this.action==="ticket"){

      console.log("ticket")
      this.action="ticket wait"

    }else if(this.action==="ticket wait"){

      this.count+=this.e.dt;
      if(this.count>3){

        this.hidePlayer()

        this.count=0;
        this.action="ticket2"

        this.e.s.p("tear")

        gsap.to( this.e.ui.ticket, { y: 3000, duration: .2, ease: "sine.out"});
        
      }

    }else if(this.action==="ticket2"){

      this.count+=this.e.dt;
      if(this.count>1){

        this.count=0;
        this.action="ticket3"

        this.e.s.p("reveal")

        // gsap.to( this.e.ui.bigTicketInnerCont, { y: 0, duration: .5, ease: "sine.out"});
        gsap.to( this.e.ui.tw, { cardOffset: -40, duration: .5, ease: "sine.out"});
        this.e.ui.cardText.style.opacity=0;
        this.e.ui.cardImage.src = "./src/img/ticketBigBack.png";
        
        this.e.ui.whiteFader.alpha=.75;
        gsap.to( this.e.ui.whiteFader, { alpha: 0, duration: 3, ease: "linear"});
        gsap.to( this.e.ui.blackFader, { alpha: .75, duration: .5, ease: "linear"});

      }

    }else if(this.action==="ticket3"){

      // gsap.to( this.e.ui.bigTicketCont, { y: 0, duration: .5, ease: "sine.out"});
      this.action="ticket4"

    }else if(this.action==="ticket4"){

      this.count+=this.e.dt;
      if(this.count>1){

        // gsap.to( this.e.ui.bigTicketInnerCont.scale, { x: 0, duration: .5, ease: "sine.out"});
        gsap.to( this.e.ui.cardImage, { scaleX: 0, duration: .5, ease: "sine.out"});

        this.e.s.p("flip")

        this.count=0;
        this.action="ticket5"

      }

    }else if(this.action==="ticket5"){

      this.count+=this.e.dt;
      if(this.count>.5){

        // Check for prize winner via PHP API (only once per game)
        if(!this.hasCheckedWinner){
          this.checkForWinner();
          this.hasCheckedWinner = true;
        }

        // Check if player wins a prize
        if(this.debugPrizeWin || this.isPrizeWinner){
          
          // Show black ticket with prize
          this.e.ui.cardImage.src = "./src/img/ticketBigBlack.png";
          this.cardLetter = "PRIZE";
          
          document.getElementById("sp1").innerHTML = "BLACK TICKET";
          document.getElementById("sp2").innerHTML = "You're a winner!<br>Use the merch code:<br><strong>53692</strong><br>For discounts at the merch store:<br><a href='https://duranduranofficialstore.com' target='_blank' style='color: white;'>duranduranofficialstore.com</a>";
          document.getElementById("sp3").innerHTML = "";
          
          // Set text color to white for prize ticket
          document.getElementById("sp1").style.color = "#ffffff";
          document.getElementById("sp2").style.color = "#ffffff";
          document.getElementById("sp3").style.color = "#ffffff";
          
          // Hide share fortune button for prize tickets
          document.getElementById("shareFortune").style.display = "none";
          
          // Turn off debug mode after first win
          this.debugPrizeWin = false;
          
        } else {
          
          // Reset text colors to original brown and red for regular fortunes
          document.getElementById("sp1").style.color = "#341f07";
          document.getElementById("sp2").style.color = "#872200";
          document.getElementById("sp3").style.color = "#341f07";
          
          // Show share fortune button for regular fortunes
          document.getElementById("shareFortune").style.display = "block";
          
          if(this.qNum===1){

            this.cardNum = this.e.u.ran( this.e.words.fortune1.length );
            this.myFortune = this.e.words.fortune1[this.cardNum];

            // this.myFortune = this.e.u.ap( this.e.words.fortune1 );
            this.e.ui.cardImage.src = "./src/img/ticketBigFront1.png";
            this.cardLetter = "A";

          }else if(this.qNum===2){

            this.cardNum = this.e.u.ran( this.e.words.fortune2.length );
            this.myFortune = this.e.words.fortune2[this.cardNum];

            // this.myFortune = this.e.u.ap( this.e.words.fortune2 );
            this.e.ui.cardImage.src = "./src/img/ticketBigFront2.png";
            this.cardLetter = "B";

          }else if(this.qNum===3){

            this.cardNum = this.e.u.ran( this.e.words.fortune3.length );
            this.myFortune = this.e.words.fortune3[this.cardNum];

            // this.myFortune = this.e.u.ap( this.e.words.fortune3 );
            this.e.ui.cardImage.src = "./src/img/ticketBigFront3.png";
            this.cardLetter = "C";

          }else if(this.qNum===4){

            this.cardNum = this.e.u.ran( this.e.words.fortune4.length );
            this.myFortune = this.e.words.fortune4[this.cardNum];

            // this.myFortune = this.e.u.ap( this.e.words.fortune4 );
            this.e.ui.cardImage.src = "./src/img/ticketBigFront4.png";
            this.cardLetter = "D";

          }
    
          console.log(this.myFortune);
    
          document.getElementById("sp1").innerHTML = this.myFortune[0];
          document.getElementById("sp2").innerHTML = "\u201C"+this.myFortune[1]+"\u201D";
          document.getElementById("sp3").innerHTML = this.myFortune[2];
          
        }
  
        // this.e.ui.ticketBig.texture = this.e.ui.s.ticketBigFront;
        // gsap.to( this.e.ui.bigTicketInnerCont.scale, { x: 1, duration: .5, ease: "sine.out"});
        
        gsap.to( this.e.ui.cardImage, { scaleX: 1, duration: .5, ease: "sine.out"});
        gsap.to( this.e.ui.cardText, { opacity: 1, duration: .15, delay: .4, ease: "linear"});
        gsap.to( document.getElementById("endDiv"), { opacity: 1, duration: .25, delay: 1, ease: "linear"});
        document.getElementById("endDiv").style.pointerEvents = "auto";
        // this.e.ui.cardText.style.opacity=1;
        
        this.count=0;
        this.action="ticket6"

      }

    }else if(this.action==="ticket7"){

      this.e.s.p("tear")
      gsap.to( this.e.ui.tw, { cardOffset: 2000, duration: .5, ease: "sine.out"});
      // gsap.to( this.e.ui.bigTicketInnerCont, { y: 2000, duration: .5, ease: "sine.out"});
      // gsap.to( this.e.ui.cardImage, { scaleX: 1, duration: .5, ease: "sine.out"});

      gsap.to( document.getElementById("endDiv"), { opacity: 0, duration: .25, ease: "linear"});
      document.getElementById("endDiv").style.pointerEvents = "none";

      gsap.to( this.e.ui.whiteFader, { alpha: 0, duration: 1, ease: "linear"});

      this.count=0;
      this.action="ticket8"

    }else if(this.action==="ticket8"){

      this.count+=this.e.dt;
      if(this.count>2.5){

        this.e.ui.ticket.y=2280;

        gsap.to( document.getElementById("gameButs"), { opacity: 1, duration: .15, ease: "linear"});
        gsap.to( this.e.ui.blackFader, { alpha: 0, duration: .15, ease: "linear"});

        this.e.s.p("mystery");
        this.e.ui.whiteFader.alpha=.75;
        gsap.to( this.e.ui.whiteFader, { alpha: 0, duration: 1, ease: "linear"});

        this.e.ui.ticketBig.texture = this.e.ui.s.ticketBigBack;

        document.getElementById("gameButs").style.pointerEvents="auto";
        this.action="wait for button press";

      }

    }else if(this.action==="riddle"){

      console.log("riddle")

      var currentDate = new Date();
      var targetDate2 = new Date('2024-10-24T00:00:00');
      var targetDate3 = new Date('2024-10-24T00:00:00');

      document.getElementById("inputAnswer").value = "";

      if (currentDate >= targetDate2) {

        //question 2

        document.getElementById("riddleText").innerHTML = "At 25 seconds, an unseen force wraps around you, tightening with every step. And as the clock nears 7 minutes before 2:00, its grip sinks deeper, dragging you down. What sinister power holds you captive in this endless dance?";
        this.answer="shackles";
        document.getElementById("spotifyPlayer").src = "https://open.spotify.com/embed/track/738RLtOpxjfII8Vps19R6i?utm_source=generator";
        document.getElementById("rSong").innerHTML = "Danse Macabre";

        console.log("It is October 25, 2024, or later.");

      } else if(currentDate >= targetDate3){

        //question 3

        console.log("It is October 30, 2024, or later.");

        document.getElementById("riddleText").innerHTML = "At the 5th second, a pulse quickens with life, and by the 97th, the warmth has drained into something colder, merging into one form. What remains from this eerie transformation?";
        this.answer="purple"
        document.getElementById("spotifyPlayer").src = "https://open.spotify.com/embed/track/4WLkxJ687m7aConmw5t88M?utm_source=generator";
        document.getElementById("rSong").innerHTML = "Paint it Black";

      } else {

        //question 1

        console.log("It is not yet October 24, 2024.");

        document.getElementById("riddleText").innerHTML = "At 43 seconds, something ignites where you should rest, turning comfort into danger. What word burns at the heart of this restless moment?";
        this.answer="fire";
        document.getElementById("spotifyPlayer").src = "https://open.spotify.com/embed/track/2V0lfCii0ALLtDNux5HshS?utm_source=generator";
        document.getElementById("rSong").innerHTML = "Psycho Killer";

      }

      this.riddleCount+=this.e.dt;

      console.log(this.riddleCount);

      this.e.s.p("mystery");
      this.e.ui.whiteFader.alpha=.75;
      gsap.to( this.e.ui.whiteFader, { alpha: 0, duration: 1, ease: "linear"});

      gsap.killTweensOf(document.getElementById("gameButs"));
      gsap.to( document.getElementById("gameButs"), { opacity: 0, duration: .15, ease: "linear"});
      gsap.to( document.getElementById("spotifyPlayer"), { opacity: 1, duration: .15, ease: "linear"});
      document.getElementById("gameButs").style.pointerEvents="none";
      document.getElementById("riddle").style.pointerEvents="auto";
      document.getElementById("spotifyPlayer").style.pointerEvents="auto";

      gsap.to( document.getElementById("riddle"), { opacity: 1, duration: .15, ease: "linear"});

      this.action="riddle2"

    }else if(this.action==="riddle2"){

      // console.log(this.riddleCount);

      this.riddleCount+=this.e.dt;

    }else if(this.action==="enter answer"){

      // console.log("enter")

      if(document.getElementById("inputAnswer").value.toLowerCase()===this.answer){

        this.action="correct"

      }else{

        this.action="incorrect"

      }

    }else if(this.action==="correct"){

      document.getElementById("correct").style.display = "inline";
      document.getElementById("riddle").style.opacity = "0";
      document.getElementById("riddle").style.pointerEvents="none";
      document.getElementById("qbut5").style.display="none";
      this.e.ui.showCorrect=true;
      this.count=1;
      this.dest="correct result";

      this.action="button pressed";

    }else if(this.action==="correct result"){

      document.getElementById("resultMid").innerHTML = this.convertTime(this.riddleCount);
      gsap.to( document.getElementById("resultCont"), { opacity: 1, duration: .15, ease: "linear"});
      document.getElementById("resultCont").style.pointerEvents="auto";
      this.action="correct result wait";

    }else if(this.action==="correct result wait"){

    }else if(this.action==="incorrect"){

      document.getElementById("incorrect").style.display = "inline"
      this.action="riddle2"

    }else if(this.action==="back button"){

      document.getElementById("riddle").style.pointerEvents="none";
      document.getElementById("resultCont").style.pointerEvents="none";
      document.getElementById("spotifyPlayer").style.pointerEvents="none";
      gsap.to( document.getElementById("resultCont"), { opacity: 0, duration: .15, ease: "linear"});
      gsap.to( document.getElementById("riddle"), { opacity: 0, duration: .15, ease: "linear"});
      gsap.to( document.getElementById("spotifyPlayer"), { opacity: 0, duration: .15, ease: "linear"});

      this.action="press player2";

    }

  }

  convertTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60);
      const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
      return `${minutes}:${formattedSeconds}`;
  }

}