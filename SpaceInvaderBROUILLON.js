var ship={
	posX:45,
	posY:80,
	element:document.getElementById("shipIm"),
	move:function(e){
		var key_code=e.which||e.keyCode;
		if (key_code==37){ //move left
			if (this.posX>0) {
				this.posX=this.posX-1;
			}
		}
		if (key_code==38){ //move up
			if (this.posY>0) {
				this.posY=this.posY-1;
			}
		}
		if (key_code==39){ //move right
			if (this.posX<95) {
				this.posX=this.posX+1;
			}
		}
		if (key_code==40){ //move down
			if (this.posY<90) {
				this.posY=this.posY+1;
			}
		}
	},
	show:function(){
		this.element.style.position='absolute';
		this.element.style.left=this.posX+'%';
		this.element.style.top=this.posY+'%';
	}
};

function main(e){

}