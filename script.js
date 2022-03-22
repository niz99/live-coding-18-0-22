let grid = document.getElementById("grid");
 
for( let i = 1; i <=64; i++){
  
   let box = document.createElement("div");
   box.innerHTML += getRandomInt(1, 100);
   box.classList.add("box");
   grid.appendChild(box);
 
   box.addEventListener("click", function(){
       console.log(this);
       this.classList.add("clicked");
       console.log(this.innerHTML);
       let numero = this.innerHTML;
 
       if(numero % 2 == 0){
           console.log("pari");
           box.classList.add("boxGreen");
       } else {
           console.log("Dispari");
           box.classList.add("boxRed");
       }
 
   });
 
}
 
function getRandomInt(min, max){
   min = Math.ceil(min);
   max= Math.ceil(max);
   return Math.floor(Math.random() * (max - min) + min);
}
