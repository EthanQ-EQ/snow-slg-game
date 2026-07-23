//======================
// 数据
//======================

let hallLevel = 1;

let wood = 5000;

let food = 6000;


//======================
// DOM
//======================

const hall=document.getElementById("hall-hitbox");

const popup=document.getElementById("hall-popup");

const closeBtn=document.getElementById("closeBtn");

const upgradeBtn=document.getElementById("upgradeBtn");

const hallLevelText=document.getElementById("hallLevel");

const woodText=document.getElementById("wood");

const foodText=document.getElementById("food");


//======================
// 点击建筑
//======================

hall.onclick=()=>{

    popup.style.display="block";

}


//======================
// 关闭
//======================

closeBtn.onclick=()=>{

    popup.style.display="none";

}


//======================
// 升级
//======================

upgradeBtn.onclick=()=>{

    if(wood<500){

        alert("木材不足");

        return;

    }

    if(food<500){

        alert("粮食不足");

        return;

    }

    wood-=500;

    food-=500;

    hallLevel++;

    hallLevelText.innerText=hallLevel;

    woodText.innerText=wood;

    foodText.innerText=food;

}
