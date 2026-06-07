
let projetoMarcado = false;      
let labMarcado = false;          
let mostrarPausa = false;

// guarda o momento em que a pausa apareceu
let tempoPausa = 0;

// cor atual da cabeça (estado emocional)
let corEstado = "#000000";  // começa preto



function setup() {
var myCanvas = createCanvas(450, 450);
    myCanvas.parent("idnameofdiv");
                
  //createCanvas(450, 450);
  background(255);
  noStroke();
  textFont("Arial");
}

const cinzaBorder = "#C3C3C3";
const textoCinza = "#6A6A6A";
const azulHora = "#0094D8";

function draw() {
  background(255);

  // -------------------------
  //  HORA E DATA DO SISTEMA
  // -------------------------
  let agora = new Date();
  let horas = nf(agora.getHours(), 2);
  let minutos = nf(agora.getMinutes(), 2);
  let textoHora = `${horas}:${minutos}`;

  const dias = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const meses = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  let diaSemana = dias[agora.getDay()];
  let diaMes = nf(agora.getDate(), 2);
  let mes = meses[agora.getMonth()];
  let ano = String(agora.getFullYear()).slice(2);
  let textoData = `${diaSemana} ${diaMes}.${mes}.${ano}`;

  // -------------------------
  //  HORA
  // -------------------------
  noStroke();
  fill(azulHora);
  textAlign(CENTER, CENTER);
  textSize(40);
  text(textoHora, width / 2, 80);

  // -------------------------
  //  DATA
  // -------------------------
  fill(0);
  textSize(22);
  text(textoData, width / 2, 120);

  // -------------------------
  //  ÍCONE DE BATERIA
  // -------------------------
  stroke(0);
  strokeWeight(2);
  noFill();
  rect(140, 150, 40, 22, 4);   // contorno da bateria
  rect(180, 156, 6, 10);        // terminal da bateria

  // preenchimento interno azul da bateria
  noStroke();
  fill("#0094D8");
  rect(142, 152, 22, 18, 3);    // retângulo interno representando carga

  fill(0);
  textSize(18);
  textAlign(LEFT, CENTER);
  text("55%", 200, 161);

  // -------------------------
  //  CARA (preenchida com a cor do estado emocional)
  // -------------------------
  stroke(0);             // contorno preto para contraste
  strokeWeight(3);
  fill(corEstado);       // preenchimento com cor do estado
  circle(320, 165, 38);  

  fill(0);                // olhos pretos
  noStroke();
  circle(312, 158, 5);  
  circle(328, 158, 5);

  stroke(0);              // boca preta
  strokeWeight(3);
  line(312, 175, 328, 175);

  // -------------------------
  //  BARRA EMOCIONAL
  // -------------------------
  noStroke();
  fill("#59C35E"); rect(230, 200, 70, 10);   // VERDE
  fill("#E6E65A"); rect(300, 200, 70, 10);   // AMARELO
  fill("#B1262A"); rect(370, 200, 70, 10);   // VERMELHO

  // ------------------------------------------------
  //   CAIXA 1 – "Trabalho de Laboratório"
  // ------------------------------------------------
  let cx1 = 40, cy1 = 260, cw1 = 370, ch1 = 40;
  let hover1 = mouseX > cx1 && mouseX < cx1 + cw1 &&
               mouseY > cy1 && mouseY < cy1 + ch1;

  stroke(cinzaBorder);
  strokeWeight(2);
  if (hover1 && !labMarcado) fill("#EDEDED");
  else noFill();
  rect(cx1, cy1, cw1, ch1, 12);

  noStroke();
  fill(0);
  textSize(22);

  if (labMarcado) {
    text("✓", 63, 283);
  } else {
    stroke(0); strokeWeight(1);
    noFill();
    rect(55, 273, 18, 18, 3);
  }

  noStroke();
  if (hover1 && !labMarcado) {
    fill(0);
    textSize(20);
  } else {
    fill(textoCinza);
    textSize(16);
  }
  textAlign(LEFT, CENTER);
  text("Trabalho de Laboratório", 85, 280);

  // ------------------------------------------------
  //   CAIXA 2 – "Trabalho de Projeto"
  // ------------------------------------------------
  let cx2 = 40, cy2 = 315, cw2 = 370, ch2 = 40;
  let hover2 = mouseX > cx2 && mouseX < cx2 + cw2 &&
               mouseY > cy2 && mouseY < cy2 + ch2;

  stroke(cinzaBorder);
  strokeWeight(2);
  if (hover2 && !projetoMarcado) fill("#EDEDED");
  else noFill();
  rect(cx2, cy2, cw2, ch2, 12);

  noStroke();
  fill(0);
  textSize(22);

  if (projetoMarcado) {
    text("✓", 63, 338);
  } else {
    stroke(0);
    strokeWeight(1);
    noFill();
    rect(55, 328, 18, 18, 3);
  }

  noStroke();
  if (hover2 && !projetoMarcado) {
    fill(0);
    textSize(20);
  } else {
    fill(textoCinza);
    textSize(16);
  }
  text("Trabalho de Projeto", 85, 335);

  // ------------------------------------------------
  //  VER SE PASSARAM 2 SEGUNDOS
  // ------------------------------------------------
  if (mostrarPausa) {
    if (millis() - tempoPausa > 2000) {  
      mostrarPausa = false;
    }
  }

  // ------------------------------------------------
  //     RETÂNGULO “PAUSA MERECIDA”
  // ------------------------------------------------
  if (mostrarPausa) {
    fill(255, 255, 255, 245);
    stroke("#C3C3C3");
    strokeWeight(3);
    rect(75, 140, 300, 130, 20);

    noStroke();
    fill("#6A6A6A");
    textAlign(CENTER, CENTER);
    textSize(26);
    text("⏸ Pausa Merecida!", width / 2, 205);
  }
}

function mousePressed() {

  // ⭐ CLIQUE NA BARRA EMOCIONAL
  if (mouseY > 200 && mouseY < 210) {

    // VERDE
    if (mouseX > 230 && mouseX < 300) {
      corEstado = "#59C35E";
    }

    // AMARELO
    if (mouseX > 300 && mouseX < 370) {
      corEstado = "#E6E65A";
    }

    // VERMELHO
    if (mouseX > 370 && mouseX < 440) {
      corEstado = "#B1262A";
    }
  }

  // Caixa 1
  if (mouseX > 40 && mouseX < 410 && mouseY > 260 && mouseY < 300) {
    labMarcado = !labMarcado;

    if (labMarcado || projetoMarcado) {
      mostrarPausa = true;
      tempoPausa = millis();  
    }
  }

  // Caixa 2
  if (mouseX > 40 && mouseX < 410 && mouseY > 315 && mouseY < 355) {
    projetoMarcado = !projetoMarcado;

    if (labMarcado || projetoMarcado) {
      mostrarPausa = true;
      tempoPausa = millis();  
    }
  }
}

