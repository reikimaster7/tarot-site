function hello(){
  alert("成功！");
}

// カード（短い意味）
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

// 長文（正位置）
const meanings = {
  "愚者":"新しい始まりの時です。恐れず一歩踏み出しましょう。",
  "魔術師":"行動すればチャンスを掴めます。",
  "女教皇":"直感を信じることが大切です。",
  "女帝":"愛情と豊かさに恵まれます。",
  "皇帝":"安定と成功の象徴です。",
  "教皇":"信頼できる助言が鍵です。",
  "恋人":"重要な選択の時です。",
  "戦車":"強い意志で成功へ進めます。",
  "力":"忍耐で乗り越えられます。",
  "隠者":"自分を見つめ直す時期です。",
  "運命の輪":"大きな転機が訪れます。",
  "正義":"公平な判断が必要です。",
  "吊るされた男":"今は耐える時です。",
  "死神":"終わりと再生のタイミングです。",
  "節制":"バランスを大切に。",
  "悪魔":"執着に注意。",
  "塔":"突然の変化が起こります。",
  "星":"希望が見えています。",
  "月":"不安や迷いに注意。",
  "太陽":"成功と喜びの時。",
  "審判":"新たなチャンス到来。",
  "世界":"完成と達成です。"
};

// 長文（逆位置）
const reversedMeanings = {
  "愚者":"軽率な行動に注意。",
  "魔術師":"自信のなさが障害に。",
  "女教皇":"迷いが生じています。",
  "女帝":"依存に注意。",
  "皇帝":"支配的になりすぎ。",
  "教皇":"常識に縛られすぎ。",
  "恋人":"すれ違いが起きています。",
  "戦車":"暴走に注意。",
  "力":"不安が強まっています。",
  "隠者":"孤立しすぎています。",
  "運命の輪":"停滞の時期。",
  "正義":"偏った判断に注意。",
  "吊るされた男":"無駄な我慢。",
  "死神":"変化を拒んでいます。",
  "節制":"バランス崩壊。",
  "悪魔":"依存状態。",
  "塔":"大きな崩壊は回避。",
  "星":"希望を失いかけています。",
  "月":"真実が見えてきます。",
  "太陽":"成功が遅れます。",
  "審判":"決断できない状態。",
  "世界":"あと一歩足りない。"
};

// シャッフル
function shuffle(arr){
  return arr.sort(()=>0.5 - Math.random());
}

// 3枚引き
function drawThree(){
  const result = document.getElementById("result");
  result.innerHTML = "🔮 シャッフル中...";

  setTimeout(()=>{
    result.innerHTML = "";

    const draw = shuffle([...cards]).slice(0,3);
    const positions = ["過去","現在","未来"];

    draw.forEach((card,index)=>{
      const isReversed = Math.random() < 0.5;

      const short = isReversed ? card.rev : card.up;
      const long = isReversed
        ? reversedMeanings[card.name]
        : meanings[card.name];

      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <h3>${positions[index]}</h3>
        <img src="${card.img}" class="${isReversed?'reversed':''}">
        <p>${card.name}</p>
        <p>${isReversed ? "🔻逆位置" : "🔺正位置"}</p>
        <p><b>${short}</b></p>
        <p>${long}</p>
      `;

      result.appendChild(div);

      setTimeout(()=>div.classList.add("show"), 500 * index);

      div.onclick = ()=>{
        openModal(card, isReversed);
      };
    });

  },1000);
}

// モーダル
function openModal(card, isReversed){
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalImg").src = card.img;
  document.getElementById("modalName").textContent = card.name;

  document.getElementById("modalText").textContent =
    isReversed
      ? reversedMeanings[card.name]
      : meanings[card.name];
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}