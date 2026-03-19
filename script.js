function hello(){
  alert("成功！");
}

// カード
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
"愚者":"新しい始まりの時です。",
"魔術師":"チャンスを掴めます。",
"女教皇":"直感を信じて。",
"女帝":"豊かさの時期。",
"皇帝":"安定と成功。",
"教皇":"助言が鍵。",
"恋人":"選択の時。",
"戦車":"勝利へ進む。",
"力":"忍耐が必要。",
"隠者":"内省の時。",
"運命の輪":"転機到来。",
"正義":"公平が重要。",
"吊るされた男":"耐える時。",
"死神":"再生の始まり。",
"節制":"バランス大事。",
"悪魔":"執着注意。",
"塔":"変化あり。",
"星":"希望あり。",
"月":"不安注意。",
"太陽":"成功。",
"審判":"復活。",
"世界":"完成。"
};

// 逆位置
const reversedMeanings = {
"愚者":"軽率に注意。",
"魔術師":"迷いあり。",
"女教皇":"混乱状態。",
"女帝":"依存注意。",
"皇帝":"支配的。",
"教皇":"縛られている。",
"恋人":"すれ違い。",
"戦車":"暴走。",
"力":"不安。",
"隠者":"孤独。",
"運命の輪":"停滞。",
"正義":"不公平。",
"吊るされた男":"無駄。",
"死神":"変化拒否。",
"節制":"乱れ。",
"悪魔":"依存。",
"塔":"回避。",
"星":"失望。",
"月":"明確になる。",
"太陽":"遅れ。",
"審判":"迷い。",
"世界":"未完成。"
};

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

      const text = isReversed
        ? reversedMeanings[card.name]
        : meanings[card.name];

      const div = document.createElement("div");
      div.className="card";

      div.innerHTML = `
        <h3>${positions[index]}</h3>
        <img src="${card.img}" class="${isReversed?'reversed':''}">
        <p>${card.name}</p>
        <p>${isReversed ? "🔻逆位置" : "🔺正位置"}</p>
        <p>${text}</p>
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
  document.getElementById("modalImg").src=card.img;
  document.getElementById("modalName").textContent=card.name;
  document.getElementById("modalText").textContent =
    isReversed
      ? reversedMeanings[card.name]
      : meanings[card.name];
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}

// ボタン動作（これ超重要）
window.onload = () => {
  document.getElementById("drawBtn").addEventListener("click", drawThree);
  document.getElementById("closeBtn").addEventListener("click", closeModal);
};