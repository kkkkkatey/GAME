// 模擬 AI 劇情生成（這裡用隨機文字代替，之後可接 AI API）
function generateStory(choice) {
  // 這裡你可以改成呼叫 AI API，例如 OpenAI 或其他模型
  const storyText = `你選擇了「${choice}」，前方的劇情正在展開...`;
  const choices = [
    "迎上前去",
    "隱匿觀察",
    "呼喊同伴"
  ];
  return { text: storyText, choices };
}

// 更新劇情文字與選項
function updateStory(choice) {
  const result = generateStory(choice);
  document.getElementById("story-text").innerText = result.text;
  document.getElementById("choice1").innerText = result.choices[0];
  document.getElementById("choice2").innerText = result.choices[1];
  document.getElementById("choice3").innerText = result.choices[2];
}

// 綁定選項按鈕
document.getElementById("choice1").addEventListener("click", () => {
  updateStory(document.getElementById("choice1").innerText);
});
document.getElementById("choice2").addEventListener("click", () => {
  updateStory(document.getElementById("choice2").innerText);
});
document.getElementById("choice3").addEventListener("click", () => {
  updateStory(document.getElementById("choice3").innerText);
});

// 初始化
updateStory("開始旅程");
