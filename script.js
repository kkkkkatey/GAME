document.getElementById("startBtn").addEventListener("click", function() {
  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const origin = document.getElementById("origin").value;

  document.getElementById("summary").innerText =
    `姓名：${name}\n性別：${gender}\n出身：${origin}`;

  document.getElementById("screen1").classList.remove("active");
  document.getElementById("screen2").classList.add("active");
});

document.getElementById("nextBtn").addEventListener("click", function() {
  alert("下一步劇情即將展開！");
});
