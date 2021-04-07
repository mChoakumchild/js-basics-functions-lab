// Code your solution in this file!
function distanceFromHqInBlocks(x){
    return Math.abs(x-42)

}

function distanceFromHqInFeet(x){
    return Math.abs(x-42)*264;
}

function distanceTravelledInFeet(x,y){
    return Math.abs(y-x)*264;
}

function calculatesFarePrice(st, dt){
    if (distanceTravelledInFeet(st,dt) <= 400){
        return 0;
    }
    else if(distanceTravelledInFeet(st,dt)<= 2000 && 400 < distanceTravelledInFeet(st,dt) ){ 
        let pr = 0.02*(distanceTravelledInFeet(st,dt)-400);
        return pr;
    }
    else if (distanceTravelledInFeet(st,dt) > 2500)
    { 
        return 'cannot travel that far';
    }   
    else (distanceTravelledInFeet(st,dt) > 2000 )
    { 
        
        return 25;
    }
}