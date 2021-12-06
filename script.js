const obj ={}

for(let i= 1; i<=10; i++){
    var name = prompt('Введите имя');
    do{
     var age = +prompt('Ведите возраст');
    }while (isNaN(age));
    
    obj.data = {
        user: `Пользватель ${i}`,
        name: `Имя: ${name}`,
        age:`Возраст: ${age}`
    }

for(key in obj){
    for(newkey in obj[key]){
        console.log(obj[key][newkey]);
    }
}

}

