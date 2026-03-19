// カードデータ
const cards = [
{name:"愚者", img:"images/major_01_fool.png", up:"新しい始まりの時です。", rev:"軽率に注意。"},
{name:"魔術師", img:"images/major_02_magician.png", up:"チャンスを掴めます。", rev:"迷いあり。"},
{name:"女教皇", img:"images/major_03_high_priestess.png", up:"直感を信じて。", rev:"混乱状態。"},
{name:"女帝", img:"images/major_04_empress.png", up:"豊かさの時期。", rev:"依存注意。"},
{name:"皇帝", img:"images/major_05_emperor.png", up:"安定と成功。", rev:"支配的。"},
{name:"教皇", img:"images/major_06_hierophant.png", up:"助言が鍵。", rev:"縛られている。"},
{name:"恋人", img:"images/major_07_lovers.png", up:"選択の時。", rev:"すれ違い。"},
{name:"戦車", img:"images/major_08_chariot.png", up:"勝利へ進む。", rev:"暴走。"},
{name:"力", img:"images/major_09_strength.png", up:"忍耐が必要。", rev:"不安。"},
{name:"隠者", img:"images/major_10_hermit.png", up:"内省の時。", rev:"孤独。"},
{name:"運命の輪", img:"images/major_11_wheel_of_fortune.png", up:"転機到来。", rev:"停滞。"},
{name:"正義", img:"images/major_12_justice.png", up:"公平が重要。", rev:"不公平。"},
{name:"吊るされた男", img:"images/major_13_hanged_man.png", up:"耐える時。", rev:"無駄。"},
{name:"死神", img:"images/major_14_death.png", up:"再生の始まり。", rev:"変化拒否。"},
{name:"節制", img:"images/major_15_temperance.png", up:"バランス大事。", rev:"乱れ。"},
{name:"悪魔", img:"images/major_16_devil.png", up:"執着注意。", rev:"依存。"},
{name:"塔", img:"images/major_17_tower.png", up:"変化あり。", rev:"回避。"},
{name:"星", img:"images/major_18_star.png", up:"希望あり。", rev:"失望。"},
{name:"月", img:"images/major_19_moon.png", up:"不安注意。", rev:"明確になる。"},
{name:"太陽", img:"images/major_20_sun.png", up:"成功。", rev:"遅れ。"},
{name:"審判", img:"images/major_21_judgement.png", up:"復活。", rev:"迷い。"},
{name:"世界", img:"images/major_22_world.png", up:"完成。", rev:"未完成。"}
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
  document.getElementById("modalImg").src = card.img;
  document.getElementById("modalName").textContent = card.name;
  document.getElementById("modalText").textContent =
    isReversed ? card.rev : card.up;
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}

// イベント登録
window.onload = () => {
  document.getElementById("drawBtn").addEventListener("click", drawThree);
  document.getElementById("closeBtn").addEventListener("click", closeModal);
};