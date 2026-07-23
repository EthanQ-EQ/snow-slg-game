alert("script.js 已加载");
const hall = document.getElementById("hall-hitbox");
const popup = document.getElementById("hall-popup");

const closeBtn = document.getElementById("closeBtn");
const upgradeBtn = document.getElementById("upgradeBtn");

const hallLevel = document.getElementById("hallLevel");
const wood = document.getElementById("wood");
const food = document.getElementById("food");

let level = 1;
let woodNum = 5000;
let foodNum = 6000;

hall.addEventListener("click", () => {
    popup.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

upgradeBtn.addEventListener("click", () => {

    if (woodNum < 500 || foodNum < 500) {
        alert("资源不足");
        return;
    }

    woodNum -= 500;
    foodNum -= 500;
    level++;

    hallLevel.textContent = level;
    wood.textContent = woodNum;
    food.textContent = foodNum;

});
