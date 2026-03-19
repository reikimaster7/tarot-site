function hello(){
  alert("成功！");
}

// カード（短い意味）
const cards = [

{name:"愚者", img:"images/major_01_fool.png"},
{name:"魔術師", img:"images/major_02_magician.png"},
{name:"女教皇", img:"images/major_03_high_priestess.png"},
{name:"女帝", img:"images/major_04_empress.png"},
{name:"皇帝", img:"images/major_05_emperor.png"},
{name:"教皇", img:"images/major_06_hierophant.png"},
{name:"恋人", img:"images/major_07_lovers.png"},
{name:"戦車", img:"images/major_08_chariot.png"},
{name:"力", img:"images/major_09_strength.png"},
{name:"隠者", img:"images/major_10_hermit.png"},
{name:"運命の輪", img:"images/major_11_wheel_of_fortune.png"},
{name:"正義", img:"images/major_12_justice.png"},
{name:"吊るされた男", img:"images/major_13_hanged_man.png"},
{name:"死神", img:"images/major_14_death.png"},
{name:"節制", img:"images/major_15_temperance.png"},
{name:"悪魔", img:"images/major_16_devil.png"},
{name:"塔", img:"images/major_17_tower.png"},
{name:"星", img:"images/major_18_star.png"},
{name:"月", img:"images/major_19_moon.png"},
{name:"太陽", img:"images/major_20_sun.png"},
{name:"審判", img:"images/major_21_judgement.png"},
{name:"世界", img:"images/major_22_world.png"}
];

// 正位置

const meanings = {
"愚者":"新しい始まりの時です。恐れず一歩踏み出すことで運命が動き出します。直感を信じて行動することが成功の鍵となるでしょう。",
"魔術師":"あなたにはすべてを実現する力があります。今は行動することでチャンスを掴めるタイミングです。",
"女教皇":"直感が冴えています。焦らず内面の声に耳を傾けることで正しい答えが見つかります。",
"女帝":"豊かさや愛情に恵まれる時期です。人との関係も良好に進んでいくでしょう。",
"皇帝":"安定と成功の象徴です。自信を持ってリーダーシップを発揮することで道が開けます。",
"教皇":"正しい道を示す存在です。信頼できる人の助言を受け入れることで良い結果につながります。",
"恋人":"愛と調和を象徴します。大切な選択のタイミングであり、心に従うことが重要です。",
"戦車":"勢いと勝利のカードです。強い意志を持って進むことで成功を掴めます。",
"力":"忍耐と優しさで困難を乗り越えられます。焦らず自分を信じて進みましょう。",
"隠者":"内省の時期です。自分を見つめ直すことで重要な気づきを得られます。",
"運命の輪":"大きな転機が訪れます。流れに身を任せることで幸運を掴めるでしょう。",
"正義":"公平な判断が求められます。誠実な行動が良い結果につながります。",
"吊るされた男":"忍耐の時期です。今は無理に動かず待つことで未来が開けます。",
"死神":"終わりと再生の象徴です。新しいスタートのための変化が訪れています。",
"節制":"バランスと調和が大切な時です。無理せず自然体でいることで安定します。",
"悪魔":"執着や誘惑に注意が必要です。自分を縛るものに気づくことが大切です。",
"塔":"突然の変化が起こりますが、それは新しい道へのきっかけでもあります。",
"星":"希望と癒しのカードです。未来は明るく、願いは叶う方向に進んでいます。",
"月":"不安や迷いがある状態です。慎重に行動し、真実を見極めましょう。",
"太陽":"成功と喜びに満ちた状態です。すべてが良い方向へ進んでいきます。",
"審判":"復活と目覚めの時です。過去を乗り越え、新たなチャンスが訪れます。",
"世界":"完成と達成を意味します。努力が実を結び、大きな成功を手にします。"


};

// 逆位置

const reversedMeanings = {
"愚者":"軽率な行動や無計画さがトラブルを招く暗示です。今は慎重に判断することが必要です。",
"魔術師":"自信のなさや迷いがチャンスを逃しています。本来の力を信じることが重要です。",
"女教皇":"直感が鈍り、迷いや不安に支配されやすい状態です。冷静さを取り戻しましょう。",
"女帝":"依存や甘えが強くなっています。自立する意識が必要です。",
"皇帝":"支配的になりすぎています。柔軟な考え方を持つことが大切です。",
"教皇":"常識に縛られすぎています。自分の価値観を大切にしましょう。",
"恋人":"すれ違いや迷いが生じています。重要な決断は慎重に行うべきです。",
"戦車":"焦りや暴走による失敗に注意。冷静な判断が必要です。",
"力":"自信のなさや不安が強くなっています。自分を信じることが大切です。",
"隠者":"孤独になりすぎています。周囲との関係も大切にしましょう。",
"運命の輪":"タイミングが合わず停滞しています。今は流れを待つことが必要です。",
"正義":"不公平な判断や偏った考えに注意が必要です。客観的に物事を見ましょう。",
"吊るされた男":"無駄な我慢や停滞が続いています。視点を変える必要があります。",
"死神":"変化を恐れています。不要なものを手放すことで道が開けます。",
"節制":"バランスが崩れています。生活や心の調整が必要です。",
"悪魔":"執着や依存から抜け出せない状態です。原因に気づくことが重要です。",
"塔":"最悪の事態は回避されますが、注意が必要な状況です。",
"星":"希望を失いかけていますが、諦めなければ状況は改善します。",
"月":"不安が晴れ、真実が見えてきます。冷静な判断ができるようになります。",
"太陽":"成功は近いですが、結果が出るまでに時間がかかります。",
"審判":"決断できず過去にとらわれています。前に進む覚悟が必要です。",
"世界":"あと一歩で完成です。最後まで努力を続けることが成功の鍵です。"
};


// シャッフル
function shuffle(arr){
  return arr.sort(()=>0.5-Math.random());
}

// 総合
function generateReading(draw){
  return `
過去：${draw[0].name}<br>
現在：${draw[1].name}<br>
未来：${draw[2].name}<br><br>
焦らず進むことで道が開けます。
`;
}

// 占い
function drawThree(){
  const result = document.getElementById("result");
  result.innerHTML = "🔮 シャッフル中...";

  setTimeout(()=>{
    result.innerHTML="";
    const draw = shuffle([...cards]).slice(0,3);
    const positions = ["過去","現在","未来"];

    draw.forEach((card,index)=>{
      const isReversed = Math.random() < 0.5;

      console.log(card.name, isReversed); // ← 修正済み

      const div = document.createElement("div");
      div.className="card";

      const text = isReversed
        ? reversedMeanings[card.name] || "解釈準備中"
        : meanings[card.name] || "解釈準備中";

      div.innerHTML=`
        <h3>${positions[index]}</h3>
        <img src="${card.img}" class="${isReversed?'reversed':''}">
        <p>${card.name}</p>
        <p style="color:${isReversed ? '#ff6b6b' : '#6bffb3'}">
          ${isReversed ? "🔻逆位置" : "🔺正位置"}
        </p>
        <p>${text}</p>
      `;

      result.appendChild(div);

      setTimeout(()=>div.classList.add("show"), 500*index);

      div.onclick = ()=>{
        openModal(card, isReversed);
      }
    });

    const summary = document.createElement("div");
    summary.className="summary";
    summary.innerHTML = generateReading(draw);
    result.appendChild(summary);

  },1000);
}


img.onerror = () => {
  img.src = "images/noimage.png";
};


// モーダル
function openModal(card, isReversed){
  document.getElementById("modal").style.display="flex";
  document.getElementById("modalImg").src=card.img;
  document.getElementById("modalName").textContent=card.name;

  document.getElementById("modalText").textContent =
    isReversed
      ? reversedMeanings[card.name]
      : meanings[card.name];
}

console.log(card.name);
console.log(meanings[card.name]);

const text = isReversed
  ? reversedMeanings[card.name] || "（逆位置 未登録）"
  : meanings[card.name] || "（正位置 未登録）";





function closeModal(){
  document.getElementById("modal").style.display="none";
}

