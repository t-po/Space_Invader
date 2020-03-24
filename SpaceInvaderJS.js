//init object globally
		var shipIm= null;
		var bulletIm=null;
		var mobIm= {
			pox:20
		};
		function MobIm(posx){
			this.pox=+posx;

		}

		function init(){
			shipIm=document.getElementById("shipIm");				
			shipIm.style.position='absolute';
			shipIm.style.left='45%';
			shipIm.style.top='80%';

			bulletIm=document.getElementById("bulletIm");
			bulletIm.style.position='absolute';
			bulletIm.style.left=parseInt(shipIm.style.left)+1.25+'%';
			bulletIm.style.top=parseInt(shipIm.style.top)-10+'%';
			bulletIm.style.visibility="hidden";

			mobIm=document.getElementById("mobIm");
			mobIm.style.position='absolute';
			mobIm.style.left='20%';
			mobIm.style.top='10%';

		}

		async function getKeyAndMove(e){	
					
			var key_code=e.which||e.keyCode;
			if (key_code==32) {
				fire();
			}
			if (key_code==37){
				if (parseInt(shipIm.style.left)>0) {
					moveLeft();
				};
			}
			if (key_code==38){
				if (parseInt(shipIm.style.top)>0) {
					moveUp();
				};
			}
			if (key_code==39){
				if (parseInt(shipIm.style.left)<95) {
					moveRight();
				};
			}
			if (key_code==40){
				if (parseInt(shipIm.style.top)<95) {
					moveDown();
				};
			}

		}
		function mob(){
			tabmobIm= new Array();
			var mob= new MobIm(5);
			mob.style.left='25%';
			for (var j=1; j<=5;j++){
				var mob= new MobIm(5);
				mob.style.left=parseInt(mob.style.left)+5+'%';
				tabmobIm.push(mob);
				//tabmobIm[j].style.left=parseInt(tabmobIm[j-1].style.left)+5+'%';
			}

		}
		function fire(){
			bulletIm.style.visibility="visible";
			bulletIm.style.left=parseInt(shipIm.style.left)+1.25+'%';
			bulletIm.style.top=parseInt(shipIm.style.top)-10+'%';

			setTimeout(()=>{
				for (var i = 0; i <= 100; i++) {
					setTimeout(() => {  bulletIm.style.top=parseInt(bulletIm.style.top)-1+'%'; }, 50+2*i);
				}
			},10);
		}
		function moveLeft(){
			shipIm.style.left=parseInt(shipIm.style.left)-1 +'%';
		}
		function moveUp(){
			shipIm.style.top=parseInt(shipIm.style.top)-1 +'%';
		}
		function moveRight(){
			shipIm.style.left=parseInt(shipIm.style.left)+1 +'%';
		}
		function moveDown(){
			shipIm.style.top=parseInt(shipIm.style.top)+1 +'%';
		}
		window.onload=init;
		mob();