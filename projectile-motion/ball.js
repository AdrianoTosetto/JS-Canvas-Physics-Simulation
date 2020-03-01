class Ball {
    constructor(radius = 10, color = 'white', mass = 1, charge = 0, gradient = null) {
        this.radius = radius
        this.color = color
        this.mass = mass
        this.charge = charge
        this.gradient = gradient
        this.x = 0
        this.y = 0
        this.vx = 0
        this.vy = 0
    }
	get pos2D () {
		return new Vector2D(this.x,this.y);			
	}
	set pos2D (pos){
		this.x = pos.x;
		this.y = pos.y;
	}
	get velo2D () {
		return new Vector2D(this.vx,this.vy);			
	}
	set velo2D (velo){
		this.vx = velo.x;
		this.vy = velo.y;
	}
	draw(context) {  
		if (this.gradient) {
			grad = context.createRadialGradient(this.x,this.y,0,this.x,this.y,this.radius);
			grad.addColorStop(0,'#ffffff');
			grad.addColorStop(1,this.color);
			context.fillStyle = grad;
		} else {
			context.fillStyle = this.color;
		}	
		context.beginPath();
		context.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true);
		context.closePath();
		context.fill();		
	}
}