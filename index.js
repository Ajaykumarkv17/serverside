var rect=require('./rect');

function solverect(l,b){
    console.log("solving for rectangle"+l+" "+b+" ");
    if(l<=0||b<=3){
        console.log("invalid rectangles");
    }
    else{
        console.log("the area of the rectangles is "+ rect.area(l,b));
        console.log("the perimeter of the rectangles is "+ rect.perimeter(l,b));
        
    }
}
solverect(2,3);
solverect(2,4);
solverect(2,5);
solverect(4,5);
