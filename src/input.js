
export class Input {
    
    setUp(e) {

        this.e=e;

        this.keyRight = false;
        this.keyLeft = false;
        this.keyUp = false;
        this.keyDown = false;

        document.addEventListener("keydown", event => {

            //---arrow keyes---------------------------------------

            if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") {

                this.keyRight = true;

            } else if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {

                this.keyLeft = true;

            } else if (event.key === "ArrowUp" || event.key === "w" || event.key === "W") {

                this.keyUp = true;

            } else if (event.key === "ArrowDown" || event.key === "s" || event.key === "S") {

                this.keyDown = true;

            } else if (event.key === "1") {

                // this.e.ui.action = "to lights";
                this.e.scene.shareScore();

            } else if (event.key === "2") {

                // this.e.ui.action = "to wait";

            }else if (event.key === "3") {

                // this.e.ui.makeSparkles()

            }else if (event.key === "4") {

                // this.e.ui.playAnimation()

            }

        });

        document.addEventListener("keyup", event => {

            //---arrow keyes---------------------------------------

            if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") {

                this.keyRight = false;

            } else if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {

                this.keyLeft = false;

            } else if (event.key === "ArrowUp" || event.key === "w" || event.key === "W") {

                this.keyUp = false;

            } else if (event.key === "ArrowDown" || event.key === "s" || event.key === "S") {

                this.keyDown = false;

            }

        });

        //---tart--------------------------------------------------------------------------------------------------------------

        // log in button to spotify (goes to complex log in)

        document.getElementById("logInBut").addEventListener("click", evt => {

            console.log("login")
            // this.e.scene.action="wait for first press"

            document.getElementById("logInDiv").style.display="none";

            // window.location.href = 'https://powertoplay.mcfly.com/connect';
            

        });

        // mobile log in (just opens album in spotify)

        // document.getElementById("mobileSpotifyBut").addEventListener("click", evt => {

            // window.open("https://open.spotify.com/playlist/2GR2bU98onEsVfkDrzSGhE?si=c65f7fe94cf6418a", "_blank");


        // });

        // spotify button if you didn't log in (goes to complex log in)

        // document.getElementById("spotifyBut").addEventListener("click", evt => {

        //     // window.location.href = 'https://powertoplay.mcfly.com/connect';
        //     console.log("connect after")
            
        // });

        // skip log in

        document.getElementById("skipBut").addEventListener("click", evt => {

            console.log("press skip")
            document.getElementById("logInDiv").style.opacity=.5;
            // document.getElementById('spotifyButDiv').style.display="block"
            // this.e.hasSkipped=true;

        });

        //---touchstart--------------------------------------------------------------------------------------------------------------

        this.ongoingTouches = [];

        document.addEventListener("touchstart", evt => {

            for (var i = 0; i < evt.touches.length; i++) {
                var found = false;

                //only add the touch if it is not listed yet, prevent doubles

                for (var j = 0; j < this.ongoingTouches.length; j++) {

                    if (evt.touches[i].identifier === this.ongoingTouches[j].identifier) {
                        found = true;
                    }

                }

                if (found === false) {
                    this.ongoingTouches.push(evt.touches[i]);

                    
                }
            }

        });

        //---touchmove--------------------------------------------------------------------------------------------------------------

        this.ongoingTouches = [];

        document.addEventListener("touchmove", evt => {

            for (var i = 0; i < evt.touches.length; i++) {
            
                this.e.touch.x=evt.touches[i].clientX
                this.e.touch.y=evt.touches[i].clientY

                this.e.mouse.x = evt.touches[i].clientX
                this.e.mouse.y = evt.touches[i].clientY

            }

        });

        //---touchend--------------------------------------------------------------------------------------------------------------

        document.addEventListener("touchend", evt => {

            //evt.preventDefault();
            var touches = evt.changedTouches;

            for (var i = 0; i < touches.length; i++) {

                for (var j = 0; j < this.ongoingTouches.length; j++) {

                    if (touches[i].identifier === this.ongoingTouches[j].identifier) {
                        this.ongoingTouches.splice(j, 1);
                    }
                }
            }

        });

        //---touchcancel--------------------------------------------------------------------------------------------------------------

        document.addEventListener("touchcancel", evt => {

            //evt.preventDefault();
            var touches = evt.changedTouches;

            for (var i = 0; i < touches.length; i++) {

                for (var j = 0; j < this.ongoingTouches.length; j++) {

                    if (touches[i].identifier === this.ongoingTouches[j].identifier) {
                        this.ongoingTouches.splice(j, 1);
                    }

                }

            }

        });

    }

}