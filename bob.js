class bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2
			}
        this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(x,y,r, options);
 		World.add(world, this.body);
		

        }
		display(){
			var bobPos=this.body.position;		

			push()
			translate(bobPos.x, bobPos.y);
			//rectMode(CENTER)/
			//strokeWeight(4);
			fill(128,128,128)
			ellipse(0,0,this.r, this.r);
			
			pop()




		}
    }