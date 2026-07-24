alert("script.js 已加载");

// 获取元素
const hall = document.getElementById("hall");
const popup = document.getElementById("hall-popup");
const closeBtn = document.getElementById("closeBtn");
const upgradeBtn = document.getElementById("upgradeBtn");

const hallLevel = document.getElementById("hallLevel");
const wood = document.getElementById("wood");
const food = document.getElementById("food");

// 数据
let level = 1;
let woodNum = 5000;
let foodNum = 6000;

// 点击城主府
hall.addEventListener("click", function () {
    popup.style.display = "block";
});

// 关闭窗口
closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
});

// 升级
upgradeBtn.addEventListener("click", function () {

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
