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
    // TEMP DEBUG: enable keyboard browsing of fortunes on the result screen
    this.debugFortuneBrowse = false;
    
    // Debug variable to test prize wins (turn on for testing)
    this.dpw = false;
    
    // Prize winner tracking
    this.ipw = false;
    this.hasCheckedWinner = false;
    // Orientation overlay handling on mobile
    const handleOrientation = () => {
      try{
        const isLandscape = window.matchMedia('(orientation: landscape)').matches || (window.innerWidth > window.innerHeight);
        const el = document.getElementById('orientationOverlay');
        if(!el) return;
        if(this.e && this.e.mobile===true && isLandscape){
          el.style.display = 'flex';
        }else{
          el.style.display = 'none';
        }
      }catch(err){}
    };
    window.addEventListener('orientationchange', handleOrientation);
    window.addEventListener('resize', handleOrientation);
    // initial check
    handleOrientation();
    
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
      this.downloadTarotMacabre();
    });

    document.getElementById("shareBut").addEventListener('touchstart', (event) => {
      this.downloadTarotMacabre();
    });

    document.getElementById("shareFortune").addEventListener('click', (event) => {
      this.share();
    });

    document.getElementById("shareFortune").addEventListener('touchstart', (event) => {
      event.preventDefault();
      this.share();
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

    // TEMP DEBUG: Arrow key navigation through fortunes while on the fortune display
    document.addEventListener('keydown', (event) => {
      if(!this.debugFortuneBrowse) return;
      if(this.action!=="ticket6") return;
      if(this.dpw || this.ipw) return; // don't browse when prize ticket
      if(event.key === 'ArrowRight'){
        this.navigateFortunes(1);
      }else if(event.key === 'ArrowLeft'){
        this.navigateFortunes(-1);
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
    
    // Reset prize winner state before checking
    this.ipw = false;
    
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
        this.ipw = true;
        console.log('Player is a winner! Play count:', data.play_count);
      }
    })
    .catch(error => {
      console.error('Error checking for winner:', error);
      // Fall back to debug mode if API fails
      if(this.dpw){
        this.ipw = true;
      }
    });
    
  }

  async checkForWinnerSync(){
    
    // Reset prize winner state before checking
    this.ipw = false;
    this.prizeResultFound = false;

    try {
      const response = await fetch('play_counter.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      // console.log('Play counter response:', data);
      
      if(data.is_winner){
        this.ipw = true;
        this.prizeResultFound = true;
        this.currentPlayCount = data.play_count;
        console.log('W:', data.play_count);
      }else{
        this.ipw = false;
        this.prizeResultFound = true;
        this.currentPlayCount = data.play_count;
        console.log('L:', data.play_count);
      }

    } catch(error) {
      
      console.error('Error checking for winner:', error);
      console.error('Error type:', typeof error);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      this.prizeResultFound = true;

    }
    
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

        // Prefer blob; iOS: open in new tab for long-press; Desktop: direct download
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        canvas.toBlob(async (blob) => {
          if(!blob){
            // Fallback to data URL if blob unavailable
            const imageData = canvas.toDataURL('image/png');
            if(isIOS){
            // Show overlay and populate iframe for long-press save (safeguarded)
            this.openShareOverlayWithSrc(imageData, false);
              return;
            }
            const link = document.createElement('a');
            link.download = 'shareScore.png';
            link.href = imageData;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            return;
          }

          const objectUrl = URL.createObjectURL(blob);
          if(isIOS){
            // Show overlay via helper; revoke on close managed by currentShareObjectUrl
            this.openShareOverlayWithSrc(objectUrl, true);
            return;
          }

          // Desktop and other browsers: trigger download
          const link = document.createElement('a');
          link.download = 'shareScore.png';
          link.href = objectUrl;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setTimeout(() => URL.revokeObjectURL(objectUrl), 10000);
        }, 'image/png');
    }
    img.src = './src/img/shareScore.png';

  }

  shareFortune(){

    // Capture the visible ticket area to a PNG for social sharing
    const fortuneDiv = document.getElementById('fortuneDiv');
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    // Open a blank tab synchronously on iOS to avoid popup blocking; we'll populate it later (not needed with iframe, but keep fallback)
    let tempWindow = null;
    if(isIOS){
      try{ tempWindow = window.open('', '_blank'); }catch(e){ tempWindow = null; }
    }

    // Safety: pause animations and hide external iframes to avoid capture artifacts/CORS
    const prevAniStates = [];
    if(this.e && this.e.ui && Array.isArray(this.e.ui.animatedSprites)){
      for(let i=0;i<this.e.ui.animatedSprites.length;i++){
        const spr = this.e.ui.animatedSprites[i];
        prevAniStates[i] = spr.aniPause;
        spr.aniPause = true;
      }
    }

    const spotify = document.getElementById('spotifyPlayer');
    const prevSpotifyOpacity = spotify ? spotify.style.opacity : null;
    const prevSpotifyPE = spotify ? spotify.style.pointerEvents : null;
    if(spotify){
      spotify.style.opacity = 0;
      spotify.style.pointerEvents = 'none';
    }

    // Insert temporary overlay text to replace any "play again" callout with site URL
    const tempOverlay = document.createElement('div');
    tempOverlay.textContent = 'tarot-macabre.com';
    tempOverlay.style.position = 'absolute';
    tempOverlay.style.left = '50%';
    tempOverlay.style.bottom = '7px';
    tempOverlay.style.transform = 'translateX(-50%)';
    // Match sp1 font and color
    const sp1 = document.getElementById('sp1');
    if(sp1){
      const sp1Style = window.getComputedStyle(sp1);
      tempOverlay.style.fontFamily = sp1Style.fontFamily;
      tempOverlay.style.fontSize = sp1Style.fontSize;
      tempOverlay.style.fontWeight = sp1Style.fontWeight;
      tempOverlay.style.letterSpacing = sp1Style.letterSpacing;
      tempOverlay.style.color = sp1Style.color;
    }
    // No shadow per request
    tempOverlay.style.textShadow = 'none';
    // Keep on one line
    tempOverlay.style.whiteSpace = 'nowrap';
    tempOverlay.style.maxWidth = Math.round(fortuneDiv.clientWidth * 0.9) + 'px';
    tempOverlay.style.overflow = 'hidden';
    tempOverlay.style.textOverflow = 'clip';
    tempOverlay.style.zIndex = '99999';
    tempOverlay.style.pointerEvents = 'none';
    fortuneDiv.appendChild(tempOverlay);

    // Increase scale for sharper result on mobile/IG
    const scale = Math.min(2, Math.max(1, window.devicePixelRatio || 1.5));

    html2canvas(fortuneDiv, {
      backgroundColor: '#000000',
      scale: scale,
      useCORS: true,
      allowTaint: false,
      logging: false,
      windowWidth: document.documentElement.scrollWidth,
      windowHeight: document.documentElement.scrollHeight
    }).then(canvas => {
      // Restore state
      if(this.e && this.e.ui && Array.isArray(this.e.ui.animatedSprites)){
        for(let i=0;i<this.e.ui.animatedSprites.length;i++){
          this.e.ui.animatedSprites[i].aniPause = prevAniStates[i];
        }
      }
      if(spotify){
        spotify.style.opacity = prevSpotifyOpacity;
        spotify.style.pointerEvents = prevSpotifyPE;
      }
      if(tempOverlay && tempOverlay.parentNode){
        tempOverlay.parentNode.removeChild(tempOverlay);
      }

      // Prefer blob for better iOS compatibility; populate iframe with the image
      canvas.toBlob(async (blob) => {
        if(!blob){
          // Fallback to data URL if blob unavailable
          const imageData = canvas.toDataURL('image/png');
          if(this.e && this.e.mobile===false){
            const link = document.createElement('a');
            link.download = 'tarotmacabre.png';
            link.href = imageData;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            return;
          }
          const frame = document.getElementById('shareFrame');
          try{
            const doc = frame.contentDocument || frame.contentWindow.document;
            doc.open();
            doc.write('<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></head><body style="margin:0;background:#000;display:flex;align-items:center;justify-content:center;height:100vh;">\n' +
                      '<img src="' + imageData + '" style="max-width:100%;max-height:100%;object-fit:contain;" />\n' +
                      '</body></html>');
            doc.close();
          }catch(e){
            frame.src = imageData;
          }
          return;
        }

        const objectUrl = URL.createObjectURL(blob);
        if(this.e && this.e.mobile===false){
          // Desktop: direct download
          const link = document.createElement('a');
          link.download = 'tarotmacabre.png';
          link.href = objectUrl;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setTimeout(() => URL.revokeObjectURL(objectUrl), 10000);
        }else{
          // Mobile: Safeguarded overlay population
          this.openShareOverlayWithSrc(objectUrl, true);
        }
      }, 'image/png');
    }).catch(err => {
      // Restore state on error
      if(this.e && this.e.ui && Array.isArray(this.e.ui.animatedSprites)){
        for(let i=0;i<this.e.ui.animatedSprites.length;i++){
          this.e.ui.animatedSprites[i].aniPause = prevAniStates[i];
        }
      }
      if(spotify){
        spotify.style.opacity = prevSpotifyOpacity;
        spotify.style.pointerEvents = prevSpotifyPE;
      }
      if(tempOverlay && tempOverlay.parentNode){
        tempOverlay.parentNode.removeChild(tempOverlay);
      }
      console.error('Share capture failed:', err);
    });

  }

  share(){
    // Desktop: download directly; Mobile: show overlay and long-press via iframe
    if(this.e && this.e.mobile===false){
      this.shareFortune();
      return;
    }
    document.getElementById('shareDiv').style.display = "inline";
    this.shareFortune();
  }

  closeShare(){
    document.getElementById('shareDiv').style.display = "none";
    this.resetShareOverlay();
  }

  downloadShare(){

    console.log("ds")

    const image = document.getElementById('shareImage');
    const imageUrl = image.src;
    const imageName = 'tarotmacabre.png';

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    // iOS: open current object/data URL in a new tab for long-press save
    if(isIOS){
      if(this.currentShareObjectUrl){
        window.open(this.currentShareObjectUrl, '_blank');
        return;
      }
      if(imageUrl && (imageUrl.startsWith('blob:') || imageUrl.startsWith('data:'))){
        window.open(imageUrl, '_blank');
        return;
      }
      // If we have a normal URL, fall through to fetch -> blob -> open
    }

    // Desktop and non-iOS: fetch and trigger download; iOS fallback opens new tab
    fetch(imageUrl, { mode: 'same-origin' })
      .then(res => res.blob())
      .then(async (blob) => {
        const file = new File([blob], imageName, { type: blob.type || 'image/png' });

        const objectUrl = URL.createObjectURL(blob);
        if(isIOS){
          // iOS Safari: open in a new tab for long-press save
          window.open(objectUrl, '_blank');
          setTimeout(() => URL.revokeObjectURL(objectUrl), 10000);
          return;
        }

        const link = document.createElement('a');
        link.href = objectUrl;
        link.download = imageName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(objectUrl), 10000);
      })
      .catch(() => {
        // Last-resort fallback: attempt direct navigation
        if(isIOS){
          window.open(imageUrl, '_blank');
        }else{
          const link = document.createElement('a');
          link.href = imageUrl;
          link.download = imageName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      });

  }

  // --- Share overlay helpers (safeguards) ---
  resetShareOverlay(){
    // Revoke any active object URL used for overlay
    if(this.currentShareObjectUrl){
      try{ URL.revokeObjectURL(this.currentShareObjectUrl); }catch(e){}
      this.currentShareObjectUrl = null;
    }
    // Clear iframe content to a known baseline and remove any previous src
    const frame = document.getElementById('shareFrame');
    if(frame){
      try{
        frame.removeAttribute('src');
        const doc = frame.contentDocument || frame.contentWindow.document;
        doc.open();
        doc.write('<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></head><body style="margin:0;background:#000;display:flex;align-items:center;justify-content:center;height:100vh;"></body></html>');
        doc.close();
      }catch(e){ frame.src = 'about:blank'; }
    }
  }

  openShareOverlayWithSrc(imageSrc, isObjectUrl){
    // Always start from a clean state
    this.resetShareOverlay();
    const frame = document.getElementById('shareFrame');
    if(frame){
      try{
        const doc = frame.contentDocument || frame.contentWindow.document;
        doc.open();
        doc.write('<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /></head><body style="margin:0;background:#000;display:flex;align-items:center;justify-content:center;height:100vh;">\n' +
                  '<img src="' + imageSrc + '" style="max-width:100%;max-height:100%;object-fit:contain;image-rendering:auto;" />\n' +
                  '</body></html>');
        doc.close();
      }catch(e){
        frame.src = imageSrc;
      }
    }
    if(isObjectUrl){
      this.currentShareObjectUrl = imageSrc;
    }
    document.getElementById('shareDiv').style.display = "inline";
  }

  // Download the static tarotMacabre image without showing the ticket share overlay
  downloadTarotMacabre(){

    const imagePath = './src/img/tarotMacabre.png';
    const imageName = 'tarotmacabre.png';

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    if(isIOS){
      // Open in a new tab for long-press save
      window.open(imagePath, '_blank');
      return;
    }

    // Desktop and others: trigger download
    const link = document.createElement('a');
    link.href = imagePath;
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

  async update(){

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
        this.ipw = false;
        
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
        this.callOnce=true;
        this.action="ticket2_processing"

        this.e.s.p("tear")

        gsap.to( this.e.ui.ticket, { y: 3000, duration: .2, ease: "sine.out"});
        
      }

    }else if(this.action==="ticket2_processing"){

      console.log("process >>>")

      if(this.callOnce===true){
        this.checkForWinnerSync();
        this.callOnce=false;
      }
      this.action="ticket2_processing2"

    }else if(this.action==="ticket2_processing2"){

      if(this.prizeResultFound===true){

        this.action="ticket2"

        console.log("------------------")

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
        // Show the back card image
        this.e.ui.cardImageBack.style.display = "block";
        gsap.set(this.e.ui.cardImageBack, { scaleX: 1 });
        this.e.ui.cardImageFront1.style.display = "none";
        this.e.ui.cardImageFront2.style.display = "none";
        this.e.ui.cardImageFront3.style.display = "none";
        this.e.ui.cardImageFront4.style.display = "none";
        this.e.ui.cardImageBlack.style.display = "none";
        
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
        gsap.to( this.e.ui.cardImageBack, { scaleX: 0, duration: .5, ease: "sine.out"});

        this.e.s.p("flip")

        this.count=0;
        this.action="ticket5"

      }

    }else if(this.action==="ticket5"){

      this.count+=this.e.dt;
      if(this.count>.5){

        if(this.dpw || this.ipw){
          
          // Hide all card images
          this.e.ui.cardImageBack.style.display = "none";
          this.e.ui.cardImageFront1.style.display = "none";
          gsap.set(this.e.ui.cardImageFront1, { scaleX: 1 });
          this.e.ui.cardImageFront2.style.display = "none";
          gsap.set(this.e.ui.cardImageFront2, { scaleX: 1 });
          this.e.ui.cardImageFront3.style.display = "none";
          gsap.set(this.e.ui.cardImageFront3, { scaleX: 1 });
          this.e.ui.cardImageFront4.style.display = "none";
          gsap.set(this.e.ui.cardImageFront4, { scaleX: 1 });
          
          // Show black ticket with prize
          this.e.ui.cardImageBlack.style.display = "block";
          gsap.set(this.e.ui.cardImageBlack, { scaleX: 0 });
          this.cardLetter = "PRIZE";
          
          // Assign visible card for prize
          this.visibleCard = this.e.ui.cardImageBlack;
          
          // Get the current play count to determine which code to show
          const merchCodes = [
            "FXGY7S81316Y",  // 500
            "15E4WWN9B9D6",  // 1000
            "2SWF2GBKWJ4Q",  // 1500
            "TQ53Y1Z29B6B",  // 2000
            "BKFASF6S8X9E"   // 2500
          ];
          
          // Determine which code to show based on play count
          let codeIndex = 0;
          if (this.currentPlayCount >= 2500) codeIndex = 4;
          else if (this.currentPlayCount >= 2000) codeIndex = 3;
          else if (this.currentPlayCount >= 1500) codeIndex = 2;
          else if (this.currentPlayCount >= 1000) codeIndex = 1;
          else if (this.currentPlayCount >= 500) codeIndex = 0;
          
          document.getElementById("sp1").innerHTML = "BLACK TICKET<br><br>You're a winner!<br><br>Use the merch code:<br><strong>" + merchCodes[codeIndex] + "</strong><br><br>For discounts at the merch store:<br><a href='https://duranduranofficialstore.com' target='_blank' style='color: white;'>duranduranofficialstore.com</a>";
          document.getElementById("sp2").innerHTML = "";
          document.getElementById("sp3").innerHTML = "";
          
          // Set text color to white for prize ticket
          document.getElementById("sp1").style.color = "#ffffff";
          document.getElementById("sp2").style.color = "#ffffff";
          document.getElementById("sp3").style.color = "#ffffff";
          
          // Hide share fortune button for prize tickets
          document.getElementById("shareFortune").style.display = "none";
          
        } else {
          
          // Reset text colors to original brown and red for regular fortunes
          document.getElementById("sp1").style.color = "#341f07";
          document.getElementById("sp2").style.color = "#872200";
          document.getElementById("sp3").style.color = "#341f07";
          
          // Show share fortune button for regular fortunes
          document.getElementById("shareFortune").style.display = "block";
          
          // Hide all card images first
          this.e.ui.cardImageBack.style.display = "none";
          this.e.ui.cardImageFront1.style.display = "none";
          gsap.set(this.e.ui.cardImageFront1, { scaleX: 1 });
          this.e.ui.cardImageFront2.style.display = "none";
          gsap.set(this.e.ui.cardImageFront2, { scaleX: 1 });
          this.e.ui.cardImageFront3.style.display = "none";
          gsap.set(this.e.ui.cardImageFront3, { scaleX: 1 });
          this.e.ui.cardImageFront4.style.display = "none";
          gsap.set(this.e.ui.cardImageFront4, { scaleX: 1 });
          this.e.ui.cardImageBlack.style.display = "none";
          gsap.set(this.e.ui.cardImageBlack, { scaleX: 1 });

          if(this.qNum===1){

            this.cardNum = this.debugFortuneBrowse ? 0 : this.e.u.ran( this.e.words.fortune1.length );
            this.myFortune = this.e.words.fortune1[this.cardNum];

            // this.myFortune = this.e.u.ap( this.e.words.fortune1 );
            this.e.ui.cardImageFront1.style.display = "block";
            gsap.set(this.e.ui.cardImageFront1, { scaleX: 0 });
            this.cardLetter = "A";
            this.visibleCard = this.e.ui.cardImageFront1;

          }else if(this.qNum===2){

            this.cardNum = this.debugFortuneBrowse ? 0 : this.e.u.ran( this.e.words.fortune2.length );
            this.myFortune = this.e.words.fortune2[this.cardNum];

            // this.myFortune = this.e.u.ap( this.e.words.fortune2 );
            this.e.ui.cardImageFront2.style.display = "block";
            gsap.set(this.e.ui.cardImageFront2, { scaleX: 0 });
            this.cardLetter = "B";
            this.visibleCard = this.e.ui.cardImageFront2;

          }else if(this.qNum===3){

            this.cardNum = this.debugFortuneBrowse ? 0 : this.e.u.ran( this.e.words.fortune3.length );
            this.myFortune = this.e.words.fortune3[this.cardNum];

            // this.myFortune = this.e.u.ap( this.e.words.fortune3 );
            this.e.ui.cardImageFront3.style.display = "block";
            gsap.set(this.e.ui.cardImageFront3, { scaleX: 0 });
            this.cardLetter = "C";
            this.visibleCard = this.e.ui.cardImageFront3;

          }else if(this.qNum===4){

            this.cardNum = this.debugFortuneBrowse ? 0 : this.e.u.ran( this.e.words.fortune4.length );
            this.myFortune = this.e.words.fortune4[this.cardNum];

            // this.myFortune = this.e.u.ap( this.e.words.fortune4 );
            this.e.ui.cardImageFront4.style.display = "block";
            gsap.set(this.e.ui.cardImageFront4, { scaleX: 0 });
            this.cardLetter = "D";
            this.visibleCard = this.e.ui.cardImageFront4;

          }
    
          console.log(this.myFortune);
    
          document.getElementById("sp1").innerHTML = this.myFortune[0];
          document.getElementById("sp2").innerHTML = "\u201C"+this.myFortune[1]+"\u201D";
          document.getElementById("sp3").innerHTML = this.myFortune[2];
          
        }
  
        // this.e.ui.ticketBig.texture = this.e.ui.s.ticketBigFront;
        // gsap.to( this.e.ui.bigTicketInnerCont.scale, { x: 1, duration: .5, ease: "sine.out"});
        
        // Animate the visible card image
        gsap.to( this.visibleCard, { scaleX: 1, duration: .5, ease: "sine.out"});
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
      // Release schedule (2025):
      // 1) Psycho Killer ft. Victoria De Angelis — Launch: Oct 16, 2025
      // 2) Danse Macabre — Launch: Oct 23, 2025
      // 3) Paint it Black — Launch: Oct 31, 2025 (last day of October)
      var targetDate1 = new Date('2025-10-16T00:00:00');
      var targetDate2 = new Date('2025-10-23T00:00:00');
      var targetDate3 = new Date('2025-10-31T00:00:00');

      document.getElementById("inputAnswer").value = "";

      if (currentDate >= targetDate3) {

        // question 3 — Paint it Black (Oct 30, 2024)
        console.log("It is October 31, 2025, or later.");
        document.getElementById("riddleText").innerHTML = "At the 5th second, a pulse quickens with life, and by the 97th, the warmth has drained into something colder, merging into one form. What remains from this eerie transformation?";
        this.answer = "purple";
        document.getElementById("spotifyPlayer").src = "https://open.spotify.com/embed/track/4WLkxJ687m7aConmw5t88M?utm_source=generator";
        document.getElementById("rSong").innerHTML = "Paint it Black";

      } else if (currentDate >= targetDate2) {

        // question 2 — Danse Macabre (Oct 23, 2024)
        console.log("It is October 23, 2025, or later.");
        document.getElementById("riddleText").innerHTML = "At 25 seconds, an unseen force wraps around you, tightening with every step. And as the clock nears 7 minutes before 2:00, its grip sinks deeper, dragging you down. What sinister power holds you captive in this endless dance?";
        this.answer = "shackles";
        document.getElementById("spotifyPlayer").src = "https://open.spotify.com/embed/track/738RLtOpxjfII8Vps19R6i?utm_source=generator";
        document.getElementById("rSong").innerHTML = "Danse Macabre";

      } else if (currentDate >= targetDate1) {

        // question 1 — Psycho Killer ft. Victoria De Angelis (Oct 16, 2024)
        console.log("It is October 16, 2025, or later.");
        document.getElementById("riddleText").innerHTML = "At 43 seconds, something ignites where you should rest, turning comfort into danger. What word burns at the heart of this restless moment?";
        this.answer = "fire";
        document.getElementById("spotifyPlayer").src = "https://open.spotify.com/embed/track/2V0lfCii0ALLtDNux5HshS?utm_source=generator";
        document.getElementById("rSong").innerHTML = "Psycho Killer ft. Victoria De Angelis";

      } else {

        // Default to question 1 — Psycho Killer ft. Victoria De Angelis (Oct 16, 2025)
        console.log("It is before October 16, 2025. Defaulting to first riddle.");
        document.getElementById("riddleText").innerHTML = "At 43 seconds, something ignites where you should rest, turning comfort into danger. What word burns at the heart of this restless moment?";
        this.answer = "fire";
        document.getElementById("spotifyPlayer").src = "https://open.spotify.com/embed/track/2V0lfCii0ALLtDNux5HshS?utm_source=generator";
        document.getElementById("rSong").innerHTML = "Psycho Killer ft. Victoria De Angelis";

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

  // TEMP DEBUG: navigate fortunes left/right when on the fortune display
  navigateFortunes(delta){
    let list;
    if(this.qNum===1){ list = this.e.words.fortune1; }
    else if(this.qNum===2){ list = this.e.words.fortune2; }
    else if(this.qNum===3){ list = this.e.words.fortune3; }
    else if(this.qNum===4){ list = this.e.words.fortune4; }
    else { return; }

    if(!Array.isArray(list) || list.length===0) return;
    this.cardNum = ( (this.cardNum || 0) + delta + list.length ) % list.length;
    this.myFortune = list[this.cardNum];

    // Update text fields
    if(this.myFortune){
      document.getElementById("sp1").innerHTML = this.myFortune[0] || "";
      document.getElementById("sp2").innerHTML = this.myFortune[1] ? ("\u201C"+this.myFortune[1]+"\u201D") : "";
      document.getElementById("sp3").innerHTML = this.myFortune[2] || "";
    }
  }

}