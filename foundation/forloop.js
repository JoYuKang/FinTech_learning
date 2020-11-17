cars = ["BMW","Volvo","Audi","Ford","Fiat"];

var text = "";
var i;

text += cars[0] + " ";
text += cars[1] + " ";
text += cars[2] + " ";
text += cars[3] + " ";
text += cars[4] + " ";
console.log(text);
text = "";

for(i = 0; i<cars.length;i++){
    text += cars[i]+"/";
}
console.log(text);

cars.map((car)=>{
    console.log(car);
})
