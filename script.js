// 城主府点击区域
const hall = document.getElementById("hall-hitbox");

// 弹窗
const popup = document.getElementById("hall-popup");

// 关闭按钮
const closeBtn = document.getElementById("closeBtn");

// 升级按钮
const upgradeBtn = document.getElementById("upgradeBtn");

// 点击城主府
hall.addEventListener("click", () => {

    popup.style.display = "block";

});

// 点击关闭
closeBtn.addEventListener("click", () => {

    popup.style.display = "none";

});

// 点击升级
upgradeBtn.addEventListener("click", () => {

    alert("升级成功！（后面接真实升级逻辑）");

});
