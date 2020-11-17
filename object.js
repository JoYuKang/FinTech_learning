var car1 = {
    name : "sonata",
    ph : "500ph",
    start : function(){
        console.log("engine is starting")
    },
    stop : function(){
        console.log("engine is stoped")
    }
}

var car2 = {
    name : "avante",
    ph : "300ph",
    start : function(){
        console.log("engine is starting")
    },
    stop : function(){
        console.log("engine is stoped")
    }
}


var car3 = {
    name : "Volvo",
    ph : "600ph",
    start : function(){
        console.log("engine is starting")
    },
    stop : function(){
        console.log("engine is stoped")
    }
}


console.log(car1.name);
car1.start();

console.log(car2.name);
car2.start();

var cars = [car1,car2,car3];
console.log(cars);

// work2 자동차 2번째 요소에 이름을 출력하세요

console.log(car2.name);
console.log(cars[1].name);


// work3 자동차 이름이 "BMW"가 있으면 "!" 출력해주세요 FOR/IF 사용

if(car3.name = "Volvo"){
    console.log("!!!!!!")
}else{
    console.log("Car3의 이름은 "+car3.name + "입니다.")
}
