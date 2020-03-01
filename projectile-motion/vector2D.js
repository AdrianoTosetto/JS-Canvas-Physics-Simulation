class Vector2D {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;	
    }
	lengthSquared() {
		return this.x*this.x + this.y*this.y;
	}
	length() {
		return Math.sqrt(this.lengthSquared());
	}
	clone() {
		return new Vector2D(this.x,this.y);
	}
	negate() {
		this.x = - this.x;
		this.y = - this.y;
	}
	normalize() {
		const length = this.length();
		if (length > 0) {
			this.x /= length;
			this.y /= length;
		}
		return this.length();
	}
	add(vec) {
		return new Vector2D(this.x + vec.x,this.y + vec.y);
	}
	incrementBy(vec) {
		this.x += vec.x;
		this.y += vec.y;
	}
	subtract(vec) {
		return new Vector2D(this.x - vec.x,this.y - vec.y);
	}
	decrementBy(vec) {
		this.x -= vec.x;
		this.y -= vec.y;
	}
	multiply(k) {
		return new Vector2D(k*this.x,k*this.y);
	}
	addScaled(vec,k) {
		return new Vector2D(this.x + k*vec.x, this.y + k*vec.y);
	}
	scaleBy(k) {
		this.x *= k;
		this.y *= k;
	}
	dotProduct (vec) {
		return this.x*vec.x + this.y*vec.y;
	}
}

Vector2D.distance =  function(vec1,vec2){
	return (vec1.subtract(vec2)).length(); 
}
Vector2D.angleBetween = function(vec1,vec2){
	return Math.acos(vec1.dotProduct(vec2)/(vec1.length()*vec2.length()));
}