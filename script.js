// 踏入修行界 → 切換到第二個畫面
document.getElementById("startBtn").addEventListener("click", function() {
  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const origin = document.getElementById("origin").value;

  // 顯示角色資訊
  document.getElementById("summary").innerText =
    `姓名：${name}\n性別：${gender}\n出身：${origin}`;

  // 切換畫面
  document.getElementById("screen1").classList.remove("active");
  document.getElementById("screen2").classList.add("active");
});

// 繼續冒險 → 切換到第三個畫面
document.getElementById("nextBtn").addEventListener("click", function() {
  document.getElementById("screen2").classList.remove("active");
  document.getElementById("screen3").classList.add("active");
});
