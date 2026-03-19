console.log("JS読み込みOK");

// カード

const cards = [
{
name:"愚者",
img:"images/major_01_fool.png",
up:"新しい始まりの時です。恐れず一歩踏み出すことで運命が動き出します。直感を信じることが成功の鍵です。",
rev:"無計画な行動や軽率さに注意が必要です。今は慎重に進むべきタイミングです。"
},
{
name:"魔術師",
img:"images/major_02_magician.png",
up:"あなたにはすべてを実現する力があります。行動を起こせばチャンスを掴めます。",
rev:"自信のなさや迷いがチャンスを逃す原因に。決断力が求められています。"
},
{
name:"女教皇",
img:"images/major_03_high_priestess.png",
up:"直感が冴えています。焦らず内面の声に耳を傾けることで正しい答えが見つかります。",
rev:"迷いや不安が強くなりがち。冷静さを取り戻すことが大切です。"
},
{
name:"女帝",
img:"images/major_04_empress.png",
up:"豊かさや愛情に恵まれる時期です。人との関係も良好に進みます。",
rev:"依存や甘えに注意。バランスを意識する必要があります。"
},
{
name:"皇帝",
img:"images/major_05_emperor.png",
up:"安定と成功の象徴。リーダーシップを発揮することで道が開けます。",
rev:"支配的になりすぎる傾向。柔軟さを持つことが重要です。"
},
{
name:"教皇",
img:"images/major_06_hierophant.png",
up:"正しい道を示す存在。信頼できる人の助言が鍵になります。",
rev:"常識に縛られすぎています。自分の考えも大切にしましょう。"
},
{
name:"恋人",
img:"images/major_07_lovers.png",
up:"愛と調和の象徴。大切な選択の時が来ています。",
rev:"すれ違いや迷いが生じやすい時期です。慎重な判断が必要です。"
},
{
name:"戦車",
img:"images/major_08_chariot.png",
up:"勢いと勝利。強い意志で突き進めば成功を掴めます。",
rev:"焦りや暴走に注意。冷静さが必要です。"
},
{
name:"力",
img:"images/major_09_strength.png",
up:"忍耐と優しさで困難を乗り越えられます。",
rev:"不安や自信のなさが障害に。自分を信じることが大切です。"
},
{
name:"隠者",
img:"images/major_10_hermit.png",
up:"内省の時期。自分を見つめ直すことで答えが見つかります。",
rev:"孤独や閉じこもりすぎに注意。外とのつながりも大切です。"
},
{
name:"運命の輪",
img:"images/major_11_wheel_of_fortune.png",
up:"大きな転機が訪れます。流れに乗ることで幸運が訪れます。",
rev:"停滞やタイミングのズレ。焦らず待つことも必要です。"
},
{
name:"正義",
img:"images/major_12_justice.png",
up:"公平な判断が求められます。誠実さが成功につながります。",
rev:"不公平や誤った判断に注意。冷静な視点を持ちましょう。"
},
{
name:"吊るされた男",
img:"images/major_13_hanged_man.png",
up:"忍耐と自己犠牲。今は耐えることで未来が開けます。",
rev:"無駄な我慢や停滞。視点を変える必要があります。"
},
{
name:"死神",
img:"images/major_14_death.png",
up:"終わりと再生。新しいスタートの前兆です。",
rev:"変化を拒んでいます。手放すことが必要です。"
},
{
name:"節制",
img:"images/major_15_temperance.png",
up:"バランスと調和。穏やかな流れが続きます。",
rev:"乱れや不調和。生活の見直しが必要です。"
},
{
name:"悪魔",
img:"images/major_16_devil.png",
up:"執着や誘惑に注意。抜け出す意識が必要です。",
rev:"束縛からの解放。新しい自由が見えてきます。"
},
{
name:"塔",
img:"images/major_17_tower.png",
up:"突然の変化や崩壊。価値観が大きく変わる出来事が起きます。",
rev:"最悪の事態は回避されますが注意は必要です。"
},
{
name:"星",
img:"images/major_18_star.png",
up:"希望と癒し。未来は明るい方向に進みます。",
rev:"不安や失望。希望を持つことが大切です。"
},
{
name:"月",
img:"images/major_19_moon.png",
up:"不安や迷いがある状態。慎重に行動しましょう。",
rev:"真実が明らかになり、状況がはっきりしてきます。"
},
{
name:"太陽",
img:"images/major_20_sun.png",
up:"成功と喜び。すべてが良い方向に進みます。",
rev:"成功はするが遅れが出る可能性があります。"
},
{
name:"審判",
img:"images/major_21_judgement.png",
up:"復活と目覚め。チャンスが再び訪れます。",
rev:"迷いや決断できない状態。過去にとらわれています。"
},
{
name:"世界",
img:"images/major_22_world.png",
up:"完成と達成。願いが叶うタイミングです。",
rev:"あと一歩で未完成。最後の努力が必要です。"
}
];


// シャッフル
function shuffle(arr){
  return arr.sort(()=>0.5 - Math.random());
}

// 占い
function drawThree(){
  const result = document.getElementById("result");
  result.innerHTML = "🔮 シャッフル中...";

  setTimeout(()=>{
    result.innerHTML = "";

    const draw = shuffle([...cards]).slice(0,3);
    const positions = ["過去","現在","未来"];

    draw.forEach((card,index)=>{
      const isReversed = Math.random() < 0.5;
      const text = isReversed ? card.rev : card.up;

      const div = document.createElement("div");
      div.className="card";

      div.innerHTML = `
        <h3>${positions[index]}</h3>
        <img src="${card.img}" class="${isReversed ? 'reversed' : ''}">
        <p class="name">${card.name}</p>
        <p class="pos">${isReversed ? "🔻逆位置" : "🔺正位置"}</p>
        <p class="text">${text}</p>
      `;

      result.appendChild(div);

      div.onclick = ()=>{
        openModal(card, isReversed);
      };
    });

  },1000);
}

// モーダル
function openModal(card, isReversed){
  document.getElementById("modal").style.display="flex";
  document.getElementById("modalImg").src = card.img;
  document.getElementById("modalName").textContent = card.name;
  document.getElementById("modalText").textContent =
    isReversed ? card.rev : card.up;
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}

// ボタン
window.onload = () => {
  document.getElementById("drawBtn").addEventListener("click", drawThree);
  document.getElementById("closeBtn").addEventListener("click", closeModal);
};