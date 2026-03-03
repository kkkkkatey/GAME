// 初始劇情
let storyIndex = 0;

// 劇情選項（由 AI 模擬生成）
const storyData = [
  {
    text: "你來到老鴉嘴海灣，陰雲密布，子時末的潮聲拍打著岸邊。",
    choices: ["立刻隨李參事返回官驛", "先為灰隼處理傷口", "詢問李參事關於內應名單"]
  },
  {
    text: "李參事神色凝重，灰隼低鳴，似乎在提醒你有危險逼近。",
    choices: ["追問危險來源", "安撫灰隼", "準備迎戰"]
  },
  {
    text: "遠處傳來腳步聲，你的選擇將決定接下來的命運。",
    choices: ["迎上前去", "隱匿觀察", "呼喊同伴"]
  }
];

// 更新劇情文字與選項
function updateStory() {
  const current = storyData[storyIndex];
  document.getElementById("story-text").innerText = current.text;
  document.getElementById("choice1").innerText = current.choices[0];
  document.getElementById("choice2").innerText = current.choices[1];
  document.getElementById("choice3").innerText = current.choices[2];
}

// 綁定選項按鈕
document.getElementById("choice1").addEventListener("click", () => {
  storyIndex = (storyIndex + 1) % storyData.length;
  updateStory();
});
document.getElementById("choice2").addEventListener("click", () => {
  storyIndex = (storyIndex + 1) % storyData.length;
  updateStory();
});
document.getElementById("choice3").addEventListener("click", () => {
  storyIndex = (storyIndex + 1) % storyData.length;
  updateStory();
});

// 初始化
updateStory();
