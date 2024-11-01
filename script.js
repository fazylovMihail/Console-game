console.log('Я загадал число от 1 до 10. Попробуй угадать его!');

let secretNum = Math.floor(Math.random()*10+1);
let attamtes = 3;

while(attamtes>0){
    let userNum = Number(prompt('Введите число: '));

    if(userNum < secretNum){
        attamtes--;
        console.log('Секретное число больше.');
        console.log('У вас осталось', attamtes)
    }
    else if(userNum == secretNum){
        console.log('Вы угадали!');
        break;
    }
    else{
        attamtes--;
        console.log('Секретное число меньше.');
        console.log('У вас осталось', attamtes, 'попытки!')
    }
}

if(attamtes<=0){
    console.log('Вы проиграли!')
}