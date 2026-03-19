function hello(){
  alert("成功！");
}


const cards = [
  {name:"愚者", img:"images/major_01_fool.png", up:"自由・始まり", rev:"無計画・軽率"},
  {name:"魔術師", img:"images/major_02_magician.png", up:"創造・チャンス", rev:"詐欺・迷い"},
  {name:"女教皇", img:"images/major_03_high_priestess.png", up:"直感", rev:"混乱"},
  {name:"女帝", img:"images/major_04_empress.png", up:"豊かさ", rev:"依存"},
  {name:"皇帝", img:"images/major_05_emperor.png", up:"安定", rev:"支配"},
  {name:"教皇", img:"images/major_06_hierophant.png", up:"教え", rev:"束縛"},
  {name:"恋人", img:"images/major_07_lovers.png", up:"愛", rev:"すれ違い"},
  {name:"戦車", img:"images/major_08_chariot.png", up:"勝利", rev:"暴走"},
  {name:"力", img:"images/major_09_strength.png", up:"忍耐", rev:"不安"},
  {name:"隠者", img:"images/major_10_hermit.png", up:"内省", rev:"孤独"},
  {name:"運命の輪", img:"images/major_11_wheel_of_fortune.png", up:"転機", rev:"停滞"},
  {name:"正義", img:"images/major_12_justice.png", up:"公平", rev:"不正"},
  {name:"吊るされた男", img:"images/major_13_hanged_man.png", up:"忍耐", rev:"無駄"},
  {name:"死神", img:"images/major_14_death.png", up:"再生", rev:"停滞"},
  {name:"節制", img:"images/major_15_temperance.png", up:"調和", rev:"乱れ"},
  {name:"悪魔", img:"images/major_16_devil.png", up:"執着", rev:"解放"},
  {name:"塔", img:"images/major_17_tower.png", up:"崩壊", rev:"回避"},
  {name:"星", img:"images/major_18_star.png", up:"希望", rev:"失望"},
  {name:"月", img:"images/major_19_moon.png", up:"不安", rev:"明確"},
  {name:"太陽", img:"images/major_20_sun.png", up:"成功", rev:"遅れ"},
  {name:"審判", img:"images/major_21_judgement.png", up:"復活", rev:"迷い"},
  {name:"世界", img:"images/major_22_world.png", up:"完成", rev:"未完成"}
];



const cards = [
  {name:"愚者", img:"images/major_01_fool.png", up:"自由・始まり", rev:"無計画・軽率"},
  {name:"魔術師", img:"images/major_02_magician.png", up:"創造・チャンス", rev:"詐欺・迷い"},
  {name:"女教皇", img:"images/major_03_high_priestess.png", up:"直感", rev:"混乱"},
  {name:"女帝", img:"images/major_04_empress.png", up:"豊かさ", rev:"依存"},
  {name:"皇帝", img:"images/major_05_emperor.png", up:"安定", rev:"支配"},
  {name:"教皇", img:"images/major_06_hierophant.png", up:"教え", rev:"束縛"},
  {name:"恋人", img:"images/major_07_lovers.png", up:"愛", rev:"すれ違い"},
  {name:"戦車", img:"images/major_08_chariot.png", up:"勝利", rev:"暴走"},
  {name:"力", img:"images/major_09_strength.png", up:"忍耐", rev:"不安"},
  {name:"隠者", img:"images/major_10_hermit.png", up:"内省", rev:"孤独"},
  {name:"運命の輪", img:"images/major_11_wheel_of_fortune.png", up:"転機", rev:"停滞"},
  {name:"正義", img:"images/major_12_justice.png", up:"公平", rev:"不正"},
  {name:"吊るされた男", img:"images/major_13_hanged_man.png", up:"忍耐", rev:"無駄"},
  {name:"死神", img:"images/major_14_death.png", up:"再生", rev:"停滞"},
  {name:"節制", img:"images/major_15_temperance.png", up:"調和", rev:"乱れ"},
  {name:"悪魔", img:"images/major_16_devil.png", up:"執着", rev:"解放"},
  {name:"塔", img:"images/major_17_tower.png", up:"崩壊", rev:"回避"},
  {name:"星", img:"images/major_18_star.png", up:"希望", rev:"失望"},
  {name:"月", img:"images/major_19_moon.png", up:"不安", rev:"明確"},
  {name:"太陽", img:"images/major_20_sun.png", up:"成功", rev:"遅れ"},
  {name:"審判", img:"images/major_21_judgement.png", up:"復活", rev:"迷い"},
  {name:"世界", img:"images/major_22_world.png", up:"完成", rev:"未完成"}
];

// 3枚引き
function drawThree(){
  const result = document.getElementById("result");
  result.innerHTML = ""; // 前回の結果クリア

  // カードをシャッフルして3枚取得
  const shuffled = [...cards].sort(()=>0.5 - Math.random());
  const draw = shuffled.slice(0,3);

  const positions = ["過去", "現在", "未来"];

  draw.forEach((card,index) => {
    const isReversed = Math.random() < 0.5;
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${positions[index]}：${card.name}</h3>
      <img src="${card.img}" class="${isReversed?'reversed':''}">
      <p>${isReversed ? "🔻逆位置：" + card.rev : "🔺正位置：" + card.up}</p>
    `;
    result.appendChild(div);
  });
}


function drawCard(){
  const result = document.getElementById("result");

  const card = cards[Math.floor(Math.random() * cards.length)];

  // 逆位置判定（50%）
  const isReversed = Math.random() < 0.5;

  result.innerHTML = `
    <h2>${card.name}</h2>
    <img src="${card.img}" class="${isReversed ? 'reversed' : ''}" width="200">
    <p>${isReversed ? "🔻逆位置：" + card.rev : "🔺正位置：" + card.up}</p>
  `;



  function drawThree() {
  const result = document.getElementById("result");
  result.innerHTML = ""; // 前回のカード削除

  const shuffled = [...cards].sort(() => 0.5 - Math.random());
  const draw = shuffled.slice(0, 3);
  const positions = ["過去", "現在", "未来"];

  draw.forEach((card, index) => {
    const isReversed = Math.random() < 0.5;
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${positions[index]}：${card.name}</h3>
      <img src="${card.img}" class="${isReversed ? "reversed" : ""}">
      <p>${isReversed ? "🔻逆位置：" + card.rev : "🔺正位置：" + card.up}</p>
    `;
    result.appendChild(div);

    // アニメーションタイミング
    setTimeout(() => {
      div.classList.add("show");
    }, 600 * index); // 0.6秒ずつずらして順番にめくる
  });
}


<script>
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalName = document.getElementById("modalName");
const modalMeaning = document.getElementById("modalMeaning");
const closeModal = document.getElementById("closeModal");

// カード作成時にクリックイベント追加
function drawThree(){
  const result = document.getElementById("result");
  result.innerHTML = "";
  const shuffled = [...cards].sort(()=>0.5 - Math.random());
  const draw = shuffled.slice(0,3);
  const positions = ["過去","現在","未来"];

  draw.forEach((card,index)=>{
    const isReversed = Math.random() < 0.5;
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${positions[index]}：${card.name}</h3>
      <img src="${card.img}" class="${isReversed?'reversed':''}">
      <p>${isReversed ? "🔻逆位置：" + card.rev : "🔺正位置：" + card.up}</p>
    `;
    result.appendChild(div);

    // 順番にめくる
    setTimeout(()=>{ div.classList.add("show"); }, 600*index);

    // クリックでモーダル表示
    div.addEventListener("click", ()=>{
      modal.style.display = "flex";
      modalImg.src = card.img;
      modalName.textContent = card.name;
      modalMeaning.textContent = isReversed ? "逆位置：" + card.rev : "正位置：" + card.up;
    });
  });
}

// モーダル閉じる
closeModal.addEventListener("click", ()=>{ modal.style.display = "none"; });
modal.addEventListener("click", (e)=>{
  if(e.target === modal) modal.style.display = "none";
});
</script>

}