
    let creap = {
        name: "Creap",
        health: 150,
        damage: 50,
        money: 100
    }
    
    let huskar = {
        name: "huskar",
        health: 130,
        damage: 60,
        money: 70
    }

    let wraithKing = {
        name: "wraith-king",
        health: 160,
        damage: 65,
        money: 100
    }

    let lichKing = {
        name: "lich",
        health: 220,
        damage: 50,
        money: 130
    }

    let roshan = {
        name: "Roshan",
        health: 300,
        damage: 70,
        money: 200,
    }

    let shopItems = {
        smallhpPotion : 50,
        bigHpPotion: 80, 
        woodBlade: 30,
        ironBlade: 55,
    }

function myStat(){
    alert(`HP = ${creap.health} \nDamage = ${creap.damage}\nЗолота = ${creap.money}`)
}

function husk(){
    alert(`HP = ${huskar.health} \nDamage = ${huskar.damage}`) 
}
function wraith(){
    alert(`HP = ${wraithKing.health} \nDamage = ${wraithKing.damage}`) 
}
function lich(){
    alert(`HP = ${lichKing.health} \nDamage = ${lichKing.damage}`) 
}
function boss(){
    alert(`HP = ${roshan.health} \nDamage = ${roshan.damage}`) 
}

function shopp(){
    alert(`Товары магазина:\n1.Малое зелье здоровья за ${shopItems.smallhpPotion}.\n2.Большое зелье здоровья за ${shopItems.bigHpPotion}.\n3.Деревяный меч за ${shopItems.woodBlade}.\n4.Железный меч за ${shopItems.ironBlade}.`)
    let choseUser = confirm(`Хотите ли совершить покупку в магазине?`)
    if(choseUser){
        let userChose = prompt(`Выберете значение от 1 до 4, что хотите приобрести.`)
        switch (userChose) {
            case "1":
                if(creap.money < shopItems.smallhpPotion){
                    alert(`У вас не хватает денег`)
                }
                else{
                    creap.money = creap.money - shopItems.smallhpPotion
                    creap.health = creap.health + shopItems.smallhpPotion
                    alert(`Ваша здоровье = ${creap.health}, остаток денег = ${creap.money}`)
                }
                break;

            case "2":
                    if(creap.money < shopItems.bigHpPotion){
                        alert(`У вас не хватает денег`)
                    }
                    else{
                        creap.money = creap.money - shopItems.bigHpPotion
                        creap.health = creap.health + shopItems.bigHpPotion
                        alert(`Ваша здоровье = ${creap.health}, остаток денег = ${creap.money}`)
                    }
                    break;
                    
            case "3":
                if(creap.money < shopItems.woodBlade){
                     alert(`У вас не хватает денег`)
                }
                else{
                    creap.money = creap.money - shopItems.woodBlade
                    creap.damage = creap.damage + shopItems.woodBlade
                    alert(`Ваша атака = ${creap.damage}, остаток денег = ${creap.money}`)
                    }
                    break;
            case "4":
                if(creap.money < shopItems.ironBlade){
                    alert(`У вас не хватает денег`)
                }
                else{
                    creap.money = creap.money - shopItems.ironBlade
                    creap.damage = creap.damage + shopItems.ironBlade
                    alert(`Ваша атака = ${creap.damage}, остаток денег = ${creap.money}`)
                    }
                    break;                         
        
            default:
                break;
        }
    }
  
    
}

function battle(obj){

    let hero = 0
    let enemy = 0
    
    if( creap.health == 0){
        alert(`Вы потеряли уже всё здоровье и не можете больше сражаться`)
    }
    else{

        if(obj.health == 0){
            alert(`Этот противник уже не может сражаться, так как у него 0 здоровья`)
        }
        else{
    for (hero = 0; creap.health > obj.damage; hero++) {
        creap.health = creap.health - obj.damage;
    }  
        for (enemy = 0; obj.health > creap.damage; enemy++) {
            obj.health = obj.health - creap.damage
        }

        if( hero > enemy){
            creap.money = creap.money + obj.money
            creap.health = creap.health + (obj.damage * hero)
            obj.health = 0;
            alert(`Вы победили и забрали у врага ${obj.money}, теперь у вас всего ${creap.money}`)
            
            
        }

        else{
            creap.health = 0
            alert(`Вы проиграли у вас ${creap.health} здоровья`)
            
      
        }
      }  
    }
    
}

function exit(){
    let leave = confirm(`Выйти из игры?`)
    if( leave == true){
        alert(`Пока`)
    window.close()
    }
}
