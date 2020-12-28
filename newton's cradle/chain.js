class chain {
    constructor(body1, body2,offsetX,offsetY)
    {

      this.offsetX=offsetX
      this.offsetY=offsetY
var options={

bodyA:body1,
bodyB:body2,
pointB:{x:this.offsetX,y:this.offsetY}


}
  this.chain=Constraint.create(options)
  World.add(world,this.chain)
    }
    attach(body){
      this.sling.bodyA=body;
      
     
       }
    display(){
      
      
    }
}