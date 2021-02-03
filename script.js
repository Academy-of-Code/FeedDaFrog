let health = 20;
let hunger = 10;
let thirst = 10;
let happy_points = 100;

let allowRefresh = true

function refreshData()
{
		checkHP()
    printStats()
    RNG_event()

    setTimeout(refreshData, 2000);
}

refreshData()

function RNG_event(){
	var RNG_eventInt1 = getRandomInt(2)
  if (RNG_eventInt1 === 1){
    var RNG_eventInt2 = getRandomInt(3)
    if(RNG_eventInt2 === 1){hunger = hunger - 1; console.log("RNG 2 = "+RNG_eventInt2)}
    if(RNG_eventInt2 === 2){thirst = thirst - 1; console.log("RNG 2 = "+RNG_eventInt2)}
    
  }
  else if(RNG_eventInt1 === 2)
  {
  return "Failed"
  }
  
  console.log("RNG 1 = "+RNG_eventInt1)
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function e()
{
document.getElementById("frog").src = "https://cdn.discordapp.com/attachments/744992454452707448/806351730623119380/2Q.png"

setTimeout(() => {  document.getElementById("frog").src = "https://cdn.discordapp.com/attachments/744992454452707448/806351776944095232/images.png"}, 500);

actions()
}

function actions(){
	if(document.getElementById('food').checked === true){
  	if(hunger === 10){
    	if(happy_points === 0){checkHP()}
      else{
        happy_points = happy_points-5
        printStats()
      }
    }
    else if (hunger != 10){hunger=hunger+1; if(happy_points === 100){}else{ happy_points=happy_points+5;} printStats()}
  }
  
  else if(document.getElementById('water').checked === true){
  	if(thirst === 10){
    	if(happy_points === 0){checkHP()}
      else{
        happy_points = happy_points-10
        printStats()
       }
    }
    else if (thirst != 10){thirst=thirst+1; if(happy_points === 100){}else{ happy_points=happy_points+10;} printStats()}
  }
  
  else if(document.getElementById('water').checked === false && document.getElementById('food').checked === false){
  	
  }
}

function checkHP(){
	if(health === 0 && allowRefresh == true){
  	alert("Poor frog! He died, you monster.")
    location.reload();
  }
  
  else if(happy_points === 0)
  {
  	health = health - 1
    printStats();
  }
  
  else if(hunger === 0)
  {
  	health = health - 1
    printStats();
  }
  
  else if(thirst === 0)
  {
  	health = health - 1
    printStats();
  }
}

function printStats(){
document.getElementById("health").innerHTML = "Health: "+health+"/20"
document.getElementById("hunger").innerHTML = "Hunger: "+hunger+"/10"
document.getElementById("thirst").innerHTML = "Thirst: "+thirst+"/10"
document.getElementById("happiness").innerHTML = "Happiness: "+happy_points+"/100"
}
