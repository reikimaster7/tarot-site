console.log("JS読み込みOK");

// ===== DOM取得（最適化） =====
const resultEl = document.getElementById("result");
const drawBtn = document.getElementById("drawBtn");

const modalEl = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalName = document.getElementById("modalName");
const modalText = document.getElementById("modalText");
const closeBtn = document.getElementById("closeBtn");

// ===== カードデータ =====
const cards = [
{
name:"愚者",
img:"images/major_01_fool.png",
up:"新しい始まりの時です。",
rev:"軽率な行動に注意。"
},
{
name:"魔術師",
img:"images/major_02_magician.png",
up:"すべてを実現する力があります。",
rev:"自信のなさに注意。"
},
{
name:"女教皇",
img:"images/major_03_high_priestess.png",
up:"直感が冴えています。",
rev:"迷いに注意。"
}
];

// ===== 正しいシャッフル =====
function shuffle(array){
  const arr = [...array];
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ===== 占い =====
function drawThree(){
  drawBtn.disabled = true;
  resultEl.innerHTML = "🔮 シャッフル中...";

  setTimeout(()=>{
    resultEl.innerHTML = "";

    const draw = shuffle(cards).slice(0,3);
    const positions = ["過去","現在","未来"];

    draw.forEach((card,index)=>{
      setTimeout(()=>{

        const isReversed = Math.random() < 0.5;
        const text = isReversed ? card.rev : card.up;

        const div = document.createElement("div");
        div.className = "card";

        // 要素生成
        const title = document.createElement("h3");
        title.textContent = positions[index];

        const img = document.createElement("img");
        img.src = card.img;
        if(isReversed) img.classList.add("reversed");

        const name = document.createElement("p");
        name.className = "name";
        name.textContent = card.name;

        const pos = document.createElement("p");
        pos.className = `pos ${isReversed ? 'rev' : 'up'}`;
        pos.textContent = isReversed ? "🔻逆位置" : "🔺正位置";

        const textEl = document.createElement("p");
        textEl.className = "text";
        textEl.textContent = text;

        div.append(title, img, name, pos, textEl);

        div.addEventListener("click", ()=>{
          openModal(card, isReversed);
        });

        resultEl.appendChild(div);

      }, index * 400); // 演出
    });

    drawBtn.disabled = false;

  },1000);
}

// ===== モーダル =====
function openModal(card, isReversed){
  modalEl.classList.add("active");
  modalImg.src = card.img;
  modalName.textContent = card.name;
  modalText.textContent = isReversed ? card.rev : card.up;
}

function closeModal(){
  modalEl.classList.remove("active");
}

// ===== イベント =====
drawBtn.addEventListener("click", drawThree);
closeBtn.addEventListener("click", closeModal);

// 背景クリックで閉じる
modalEl.addEventListener("click", (e)=>{
  if(e.target === modalEl){
    closeModal();
  }
});