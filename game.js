// Creating variables
let myX = 0, myY = 0,updates=0, dy=-3, ostavastogorivo=300, gorivoX=603, gorivoY=8, razmer=147, dopgorivoX=900, dopgorivoY=300;
let hardmode=false,colision=false,delay=31,bonusjivot,dopbonusX=900,dopbonusY=900,veroqtnostbonus=1050;
let jivot1X=30, jivot1Y=10, jivot2X=60, jivot2Y=10, jivot3X=90 ,jivot3Y=10, vragX=900, vragY=100, brjivoti=3, explosionX=1000, explosionY=1000;
let brTochki = 0, txtX = -1500000, dvijenie = 3, myRazmerX = 100, myRazmerY = 110;
function init(){
	dopbonusY=randomInteger(500);
}
function update() {
    // Napisanoto tuk se izpulnqva otnovo i otnovo mnogo puti v sekunda
/*    myX = myX+(mouseX-myX)/10;
    myY = myY+(mouseY-myY)/10;*/

    if(brjivoti >= 1){
        brTochki++
    }
	
	dopgorivoX = dopgorivoX - dvijenie
	
	vragX = vragX - dvijenie
	
	myY=myY+dy;

	if(isKeyPressed[32]){
	   dy=dy-0.1
		ostavastogorivo=ostavastogorivo-1
		razmer=razmer-0.5
	   }else{
		dy=dy+0.1   
	};
	
	if(ostavastogorivo<=0){
	   dy=dy+0.1
	};
	if(dy>=15){
		dy-=0.1;
	}
	if(razmer<=0){
	   razmer=0
	};
	
	if(areColliding(myX,myY,80,110,dopgorivoX,dopgorivoY,80,110)){
	   razmer=147
		ostavastogorivo=300
		dopgorivoX=900
	};
	
	if(dopgorivoX<=-80){
	   dopgorivoX=900
	};
	
	if(dopgorivoX>=800){
		dopgorivoY=randomInteger(500)
	};
	
	if(vragX>=800){
		vragY=randomInteger(500)
	};
	
	if(vragX<=-100){
	   vragX=900
	};
	
	if(areColliding(myX,myY,80,110,vragX,vragY,100,100)){
	   brjivoti=brjivoti-1
		vragX=900
		delay=0;
		colision=true;
	};
	
	if(brjivoti<=2){
	   jivot3X=10000
	}else{
		jivot3X=90
	}
	if(brjivoti<=1){
	   jivot2X=10000   
	}else{
		jivot2X=60
	}
	
	if(brjivoti==0){
	   jivot1X=10000
	}else{
		jivot1X=30
	}
	
	
	if(areColliding(dopbonusX,dopbonusY,60,60,dopgorivoX,dopgorivoY,80,100)){
		dopgorivoY=randomInteger(500);
	 };

	if(areColliding(vragX,vragY,100,100,dopbonusX,dopbonusY,60,60)){
		vragY=randomInteger(500)
	};
	if(areColliding(vragX,vragY,100,100,dopgorivoX,dopgorivoY,80,100)){
		vragY=randomInteger(500)
	};

	if(areColliding(myX,myY,80,110,dopbonusX,dopbonusY,60,60)){
		brjivoti=brjivoti+1
		 dopbonusX=900
	 };
	if(dopbonusX<=-60){
		dopbonusX=900;
	}	
	if(jivot1X == 10000){
	   myX = -900
	};
	
	if(myY >= 1000){
		brjivoti = 0	
	};
	
	if(myY <= -1000){
	   brjivoti = 0
	};

    if(myY <= -50){
        myY = 550
    };
	if(myY>550){
		myY=-45
	}

    if(isKeyPressed[73]){
        txtX = 150
    }else{
        txtX = -15000000
    };

    if(isKeyPressed[69]){//easy E
        dvijenie = 3
        myRazmerX = 100
        myRazmerY  = 110
		hardmode=false;
    };

    if(isKeyPressed[72]){//hard H
        dvijenie = 10
        myRazmerX = 80
        myRazmerY  = 80
		hardmode=true;
    };
	
	if(isKeyPressed[65]){//left A
		if(hardmode){
			if(myX<=0){
				myX-=0;
			}else{
				myX-=10;
			}
		}else{
			if(myX<=0){
				myX-=0;
			}else{
				myX-=7;
			}
		}
	};

	if(isKeyPressed[68]){//right D
		if(hardmode){
			if(myX>=800-myRazmerX-20){
				myX+=0;
			}else{
				myX+=10;
			}
		}else{
			if(myX>=800-myRazmerX-20){
				myX+=0;
			}else{
				myX+=7;
			}
		}
	};
	if(delay==0){
		explosionX=myX+myRazmerX/2;
		explosionY=myY+myRazmerY/2;
	};
	delay++;
	if(colision){
		dvijenie=1.75;
	}else{
		if(hardmode==false){
			dvijenie=3;
		}else{
			dvijenie=10;
		}
	}
	if(delay>=30){
		explosionX=1000;
		explosionY=1000;
		colision=false;
	}
	if(hardmode==true){
		veroqtnostbonus=10500;
	}else{
		veroqtnostbonus=1050;
	}
	if(brjivoti==3){
		bonusjivot=40;
	}
	if(brjivoti<=2){
		if(bonusjivot!=34){
			bonusjivot=randomInteger(veroqtnostbonus);
		}
		else{
			dopbonusX-=dvijenie;
		}
	}
}
function draw() {
    // tuk naprogramirai kakvo da se risuva
    drawImage(Space, 0, 0, 800, 600);
    drawImage(Ship, myX, myY, myRazmerX, myRazmerY);
	drawImage(paddle, 600, 5, 150, 27);
	drawImage(box, gorivoX, gorivoY, razmer, 22);
	drawImage(barrelGreen, dopgorivoX, dopgorivoY, 80, 100);
	drawImage(heart, jivot1X, jivot1Y, 30, 30);
	drawImage(heart, jivot2X, jivot2Y, 30, 30);
	drawImage(heart, jivot3X, jivot3Y, 30, 30);
	drawImage(heart, dopbonusX, dopbonusY, 60, 60);
	drawImage(jelly[0], vragX, vragY, 100, 100);
    drawImage(txt, txtX, 30, 600, 400);
	drawImage(explosionirl,explosionX,explosionY,myRazmerX-15,myRazmerY-15)

    if (brjivoti <= 0){
        drawImage(gameOver,0, 0, 800, 600);
    };

    context.font = "20px Arial"
    context.fillStyle = "white"
    context.fillText("Точки:" + brTochki, 40, 50, 400, 10);

    context.font = "20px Arial"
    context.fillStyle = "white"
    if(brjivoti <= 0){
        context.fillText("Натисни Refresh, за да почнеш наново.", 220, 550, 400, 10);
    };
    context.font = "20px Arial"
    context.fillStyle = "white"

    if(brjivoti >= 1 ){
        context.fillText("Задръж I за инструкции.", 140, 10, 400, 10);
    };

    context.font = "20px Arial"
    context.fillStyle = "white"

	if(brjivoti >= 1){
        context.fillText("Натисни H за по - висока трудност и E за по - ниска трудност.", 0, 530, 500, 10);
	};

	
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);


    
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};

