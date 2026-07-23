alert("script.js 已加载");

const hall = document.getElementById("hall-hitbox");
const popup = document.getElementById("hall-popup");
const closeBtn = document.getElementById("closeBtn");

console.log(hall);
console.log(popup);

hall.addEventListener("click", function () {
    alert("点击到了城主府");
    popup.style.display = "block";
});

closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
});
