/* script.js
   Versão final corrigida:
   - banner (faixa) começa escondido e só é exibido após resposta/timeout
   - imagem inserida apenas na Q6
   - Questão 9 com texto completo (preenchido)
   - limpeza de intervalos para evitar o banner aparecendo na inicialização
*/

(() => {
  // --- DATA: perguntas, alternativas, respostas, tempo em segundos, pontuação ---
  const quiz = [
    {
      id:1,
      title:"Questão 1",
      text:`Leia o trecho de uma campanha publicitária:\n\n“Se beber, não dirija. A estrada não perdoa.”\n\nO objetivo principal desse tipo de mensagem é:`,
      options:[
        "informar sobre os riscos de dirigir sob influência de álcool.",
        "persuadir comportamentos mais seguros no trânsito.",
        "descrever estatísticas de acidentes automobilísticos.",
        "narrar uma experiência pessoal de um acidente.",
        "argumentar sobre a segurança viária."
      ],
      correct:1,
      time:60,
      points:90
    },
    {
      id:2,
      title:"Questão 2",
      text:`Leia este fragmento de texto jornalístico adaptado:\n\n“A leitura digital cresce nas escolas, mas ainda está longe de substituir os livros impressos. Porém, muitos educadores avaliam que o formato eletrônico amplia o acesso ao conhecimento.”\n\nA função da linguagem presente no fragmento é:`,
      options:[
        "expressiva – revela a opinião pessoal de quem escreve.",
        "conativa – busca convencer o leitor a usar leitura digital.",
        "referencial – apresenta informação de forma objetiva.",
        "poética – valoriza a linguagem estética.",
        "fática – mantém a comunicação ativa."
      ],
      correct:2,
      time:60,
      points:90
    },
    {
      id:3,
      title:"Questão 3",
      text:`Leia o trecho que define "LUTA":\n\nLUTA: prática corporal imprevisível, caracterizada por determinado estado de contato proposital, que possibilita a duas ou mais pessoas se enfrentarem numa constante troca de ações ofensivas e/ou defensivas, regida por regras, com o objetivo mútuo sobre um alvo móvel personificado no oponente.\n\nDe acordo com o texto, podemos identificar uma abordagem das lutas nas aulas de educação física quando o professor realiza uma proposta envolvendo`,
      options:[
        "contato corporal intenso entre o aluno e seu oponente.",
        "contenda entre os alunos que se agridem fisicamente.",
        "confronto corporal em que os vencedores são previamente identificados.",
        "combate corporal intencional com ações regulamentadas entre os oponentes.",
        "conflito resolvido pelos alunos por meio de regras previamente estabelecidas."
      ],
      correct:3,
      time:60,
      points:90
    },
    {
      id:4,
      title:"Questão 4",
      text:`Considere a frase informal: “Tá ligado que tá tudo ok aí?”\n\nA principal diferença em relação à norma culta da língua está no(a):`,
      options:[
        "uso de abreviações de letra em redes sociais.",
        "emprego da variante coloquial “tá” em vez de “está”.",
        "presença de pronome de tratamento informal.",
        "construção sintática usada apenas na fala.",
        "característica de linguagem poética."
      ],
      correct:1,
      time:60,
      points:90
    },
    {
      id:5,
      title:"Questão 5",
      text:`Leia o trecho da canção:\n\nSitting on a park bench\nThinking about a friend of mine\nHe was only twenty-three\nGone before he had his time.\n\nO sofrimento retratado nessa canção foi causado:`,
      options:[
        "pela traição por parte de uma pessoa próxima.",
        "pela morte precoce de um amigo jovem.",
        "pelo término de um relacionamento amoroso.",
        "pela mudança de um amigo para outro país.",
        "pelo fim de uma amizade de longa data."
      ],
      correct:1,
      time:60,
      points:90
    },
    {
      id:6,
      title:"Questão 6",
      text:`(Observe a charge exibida)\n\nO argumento presente na charge consiste em uma metáfora relativa à teoria evolucionista e ao desenvolvimento tecnológico. Considerando o contexto apresentado, verifica-se que o impacto tecnológico pode ocasionar:`,
      options:[
        "o surgimento de um homem dependente de um novo modelo tecnológico.",
        "a mudança do homem em razão dos novos inventos que destroem sua realidade.",
        "a problemática social de grande exclusão digital a partir da interferência da máquina.",
        "a invenção de equipamentos que dificultam o trabalho do homem, em sua esfera social.",
        "o retrocesso do desenvolvimento do homem em face da criação de ferramentas como lança, máquina e computador."
      ],
      correct:0,
      time:60,
      points:90,
      image: "./Images/charge.png" // imagem apenas aqui
    },
    {
      id:7,
      title:"Questão 7",
      text:`Na modernidade, o corpo foi descoberto, despido e modelado pelos exercícios físicos da moda. Novos espaços e práticas esportivas e de ginástica passaram a convocar as pessoas a modelarem seus corpos. Multiplicaram-se as academias de ginástica, as salas de musculação e o número de pessoas correndo pelas ruas.\n\nDiante do exposto, é possível perceber que houve um aumento da procura por:`,
      options:[
        "exercícios físicos aquáticos (natação/hidroginástica).",
        "mecanismos que permitem combinar alimentação e exercício físico.",
        "programas saudáveis de emagrecimento.",
        "exercícios de relaxamento, reeducação postural e alongamentos.",
        "dietas que preconizam a ingestão excessiva ou restrita de macronutrientes, bem como exercícios para modelar o corpo."
      ],
      correct:4,
      time:60,
      points:100
    },
    {
      id:8,
      title:"Questão 8",
      text:`A pergunta “o que é música” tem sido alvo de discussão há décadas. Alguns autores defendem que música é a combinação de sons e silêncios de uma maneira organizada. Vamos explicar: um ruído de rádio emite sons, mas não de uma forma organizada, por isso não é classificado como música. Essa definição parece simples e completa, mas definir música não é algo tão óbvio assim. Podemos classificar um alarme de carro como música? Ele emite sons e silêncios de uma maneira organizada, mas garanto que a maioria das pessoas não chamaria esse som de música.\n\nO fragmento define o que é a música de forma simplificada. Como estratégia de construção do texto, o autor faz uso recorrente de:`,
      options:[
        "enumerações para sustentar o ponto de vista apresentado.",
        "exemplificações para ilustrar a distinção entre a música e outros sons cotidianos.",
        "generalizações para sintetizar as diversas percepções sobre o que é a música.",
        "adjetivações para descrever os tipos de música.",
        "sinonímias para retomar as características das obras musicais."
      ],
      correct:1,
      time:120,
      points:150
    },
    {
      id:9,
      title:"Questão 9",
      text:`Muitos dos superpoderes do querido Homem-Aranha de fato se assemelham às habilidades biológicas das aranhas e são objeto de estudo para produção de novos materiais.\n\nO “sentido-aranha” adquirido por Peter Parker funciona quase como um sexto sentido, uma espécie de habilidade premonitória e, por isso, soa como um mero elemento ficcional. No entanto, as aranhas realmente têm um sentido mais aguçado. Na verdade, elas têm um dos sistemas sensoriais mais impressionantes da natureza.\n\nOs pelos sensoriais das aranhas, que estão espalhados por todo o corpo, funcionam como uma forma muito boa de perceber o mundo e captar informações do ambiente. Em muitas espécies, esse tato por meio dos pelos tem papel mais importante que a própria visão, uma vez que muitas aranhas conseguem prender e atacar suas presas na completa escuridão. E por que os pelos humanos não são tão eficientes como órgãos sensoriais como os das aranhas? Primeiro, porque um ser humano tem em média 60 fios de pelo em cada cm² do corpo, enquanto algumas espécies de aranha podem chegar a ter 40 mil pelos por cm²; segundo, porque cada pelo das aranhas possui até 3 nervos para fazer a comunicação entre a sensação percebida e o cérebro, enquanto nós, seres humanos, temos apenas 1 nervo por pelo.\n\nComo estratégia de progressão do texto, o autor simula uma interlocução com o público leitor ao recorrer à:`,
      options:[
        "revelação do “sentido-aranha” adquirido pelo super-herói como um sexto sentido.",
        "caracterização do afeto do público pelo super-herói marcado pela palavra “querido”.",
        "comparação entre os poderes do super-herói e as habilidades biológicas das aranhas.",
        "pergunta retórica na introdução das causas da eficiência do sistema sensorial das aranhas.",
        "comprovação das diferenças entre a constituição física do homem e da aranha por meio de dados numéricos."
      ],
      correct:3,
      time:330,
      points:150
    },
    {
      id:10,
      title:"Questão 10",
      text:`Trecho de outdoor:\n\nDon’t drink and drive.\n\nEssa mensagem tem como função social:`,
      options:[
        "Incentivar o consumo de bebidas alcoólicas.",
        "Prevenir acidentes de trânsito.",
        "Alertar sobre a venda ilegal de bebidas.",
        "Denunciar o consumo em locais proibidos.",
        "Indicar locais de venda de bebidas."
      ],
      correct:1,
      time:30,
      points:60
    }
  ];

  // --- DOM elements ---
  const startBtn = document.getElementById('startBtn');
  const startScreen = document.getElementById('start-screen');
  const quizArea = document.getElementById('quiz-area');
  const questionTitle = document.getElementById('questionTitle');
  const questionText = document.getElementById('questionText');
  const answersEl = document.getElementById('answers');
  const timerEl = document.getElementById('timer');
  const progressFill = document.getElementById('progressFill');
  const qIndexEl = document.getElementById('qIndex');
  const qTotalEl = document.getElementById('qTotal');
  const scoreEl = document.getElementById('score');
  const hitsEl = document.getElementById('hits');
  const countdownScreen = document.getElementById('countdown-screen');
  const bannerMsg = document.getElementById('bannerMsg');
  const countdownNumber = document.getElementById('countdownNumber');
  const finalScreen = document.getElementById('final-screen');
  const finalScoreEl = document.getElementById('finalScore');
  const finalHitsEl = document.getElementById('finalHits');
  const finalText = document.getElementById('finalText');
  const finalTitle = document.getElementById('finalTitle');
  const retryBtn = document.getElementById('retryBtn');
  const questionImageContainer = document.getElementById('questionImageContainer');

  const qTotal = quiz.length;
  qTotalEl.textContent = qTotal;

  // state
  let current = 0;
  let score = 0;
  let hits = 0;
  let questionTimer = null;
  let remaining = 0;
  let answered = false;
  let bannerInterval = null;

  // audio using WebAudio for correctness and error
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  function playTone(frequency=440, duration=0.15, type='sine', gain=0.15){
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = type;
    o.frequency.value = frequency;
    g.gain.value = gain;
    o.connect(g);
    g.connect(audioCtx.destination);
    o.start();
    g.gain.setValueAtTime(gain, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    o.stop(audioCtx.currentTime + duration + 0.02);
  }
  function playCorrect(){
    playTone(880,0.08,'sine',0.06);
    setTimeout(()=>playTone(1320,0.12,'sine',0.08),90);
  }
  function playWrong(){
    playTone(220,0.18,'sawtooth',0.08);
  }

  // confetti
  function launchConfetti(){
    const confettiRoot = document.createElement('div');
    confettiRoot.style.position = 'fixed';
    confettiRoot.style.left = 0;
    confettiRoot.style.top = 0;
    confettiRoot.style.width = '100%';
    confettiRoot.style.height = '100%';
    confettiRoot.style.pointerEvents='none';
    confettiRoot.style.zIndex=9999;
    document.body.appendChild(confettiRoot);

    const colors = ['#ff6b6b','#ffd166','#6bf0c2','#6b9cff','#ff7bb5','#c17bff'];
    for(let i=0;i<120;i++){
      const el = document.createElement('div');
      el.className='confetti';
      el.style.position='absolute';
      el.style.width = (Math.random()*10+6)+'px';
      el.style.height = (Math.random()*6+6)+'px';
      el.style.left = Math.random()*100 + '%';
      el.style.top = '-10%';
      el.style.opacity = 0.95;
      el.style.background = colors[Math.floor(Math.random()*colors.length)];
      el.style.transform = `rotate(${Math.random()*360}deg)`;
      el.style.borderRadius='2px';
      confettiRoot.appendChild(el);

      const duration = 3000 + Math.random()*2500;
      el.animate([
        { transform: `translateY(0px) rotate(0deg)`, offset: 0 },
        { transform: `translateY(${window.innerHeight + 200}px) rotate(${Math.random()*720}deg)`, offset: 1 }
      ], { duration: duration, easing: 'cubic-bezier(.2,.7,.2,1)', delay: Math.random()*500 });

      setTimeout(()=> el.remove(), duration+800);
    }
    setTimeout(()=> confettiRoot.remove(), 7000);
  }

  // hide banner and clear interval safely
  function hideBanner(){
    if(bannerInterval){
      clearInterval(bannerInterval);
      bannerInterval = null;
    }
    if(countdownScreen && !countdownScreen.classList.contains('hidden')){
      countdownScreen.classList.add('hidden');
      countdownScreen.setAttribute('aria-hidden','true');
    }
  }

  // render question
  function renderQuestion(i){
    // ensure banner hidden when new question loads
    hideBanner();

    const q = quiz[i];
    current = i;
    qIndexEl.textContent = i+1;
    questionTitle.textContent = q.title;
    // Use innerHTML: questions contain line breaks handled as <br> via replace
    // We'll convert \n\n to <br><br> so text formatting appears.
    questionText.innerHTML = q.text.replace(/\n/g, '<br>');
    scoreEl.textContent = score;
    hitsEl.textContent = hits;
    progressFill.style.width = ((i)/qTotal*100) + '%';

    // --- IMAGE: inserimos aqui somente se a questão tiver `image` ---
    if(q.image){
      questionImageContainer.innerHTML = `<img src="${q.image}" alt="Imagem da questão ${q.id}" class="charge">`;
      questionImageContainer.setAttribute('aria-hidden','false');
    } else {
      questionImageContainer.innerHTML = '';
      questionImageContainer.setAttribute('aria-hidden','true');
    }

    // build answers
    answersEl.innerHTML = '';
    const letters = ['a','b','c','d','e'];
    q.options.forEach((opt, idx) => {
      const btn = document.createElement('div');
      btn.className = 'answer';
      btn.dataset.idx = idx;
      btn.innerHTML = `<span class="letter">${letters[idx]}</span><div class="opt-text">${opt}</div>`;
      btn.addEventListener('click', ()=> handleAnswer(btn, idx));
      answersEl.appendChild(btn);
    });

    // reset state for this question
    answered = false;
    // start timer
    startQuestionTimer(q.time);
  }

  // handle answer click
  function handleAnswer(btn, idx){
    if(answered) return;
    answered = true;
    stopQuestionTimer();

    const q = quiz[current];
    const correctIdx = q.correct;
    const allBtns = Array.from(answersEl.querySelectorAll('.answer'));
    allBtns.forEach(b => b.classList.add('disabled'));
    if(idx === correctIdx){
      btn.classList.add('correct');
      score += q.points;
      hits += 1;
      playCorrect();
      if(current + 1 < qTotal){
        showCountdown(q.points);
      } else {
        showFinal();
      }

    } else {
      btn.classList.add('wrong');
      const correctBtn = allBtns.find(b => Number(b.dataset.idx) === correctIdx);
      if(correctBtn) correctBtn.classList.add('correct');
      playWrong();
      showCountdown(0);
    }
    scoreEl.textContent = score;
    hitsEl.textContent = hits;
  }

  // timer functions
  function startQuestionTimer(seconds){
    remaining = seconds;
    updateTimerDisplay(remaining);
    if(questionTimer) clearInterval(questionTimer);
    questionTimer = setInterval(() => {
      remaining--;
      updateTimerDisplay(remaining);
      if(remaining<=0){
        clearInterval(questionTimer);
        questionTimer = null;
        onTimeExpired();
      }
    },1000);
  }
  function stopQuestionTimer(){
    if(questionTimer) { clearInterval(questionTimer); questionTimer = null; }
  }
  function updateTimerDisplay(sec){
    const mm = Math.floor(sec/60).toString().padStart(2,'0');
    const ss = (sec%60).toString().padStart(2,'0');
    timerEl.textContent = `${mm}:${ss}`;
    const q = quiz[current] || {time:1};
    const percent = Math.max(0, ((q.time - sec)/q.time)*100);
    progressFill.style.width = percent + '%';
  }

  function onTimeExpired(){
    if(answered) return;
    answered = true;
    const q = quiz[current];
    const allBtns = Array.from(answersEl.querySelectorAll('.answer'));
    allBtns.forEach(b => b.classList.add('disabled'));
    const correctBtn = allBtns.find(b => Number(b.dataset.idx) === q.correct);
    if(correctBtn) correctBtn.classList.add('correct');
    playWrong();
    showCountdown(0);
  }

  // show 3s banner between perguntas (apenas quando chamada por resposta/timeout)
  function showCountdown(pointsEarned){
    // limpa qualquer banner anterior
    hideBanner();

    // esconde quiz e mostra banner
    quizArea.classList.add('hidden');
    quizArea.setAttribute('aria-hidden','true');

    bannerMsg.textContent = (pointsEarned>0? `+${pointsEarned} pontos!` : `+0`);
    countdownNumber.textContent = '3';
    countdownScreen.classList.remove('hidden');
    countdownScreen.setAttribute('aria-hidden','false');

    let n = 3;
    bannerMsg.animate([{transform:'scale(0.9)'},{transform:'scale(1.08)'},{transform:'scale(1)'}],{duration:700,iterations:1});

    bannerInterval = setInterval(()=>{
      n--;
      countdownNumber.textContent = String(n);
      if(n<=0){
        clearInterval(bannerInterval);
        bannerInterval = null;
        countdownScreen.classList.add('hidden');
        countdownScreen.setAttribute('aria-hidden','true');
        setTimeout(()=> nextOrFinish(), 120);
      }
    }, 1000);
  }

  function nextOrFinish(){
    if(current+1 < qTotal){
      renderQuestion(current+1);
      quizArea.classList.remove('hidden');
      quizArea.setAttribute('aria-hidden','false');
    } else {
      showFinal();
    }
  }

  // start quiz
  startBtn.addEventListener('click', ()=>{
    // start audio context on user gesture
    if(audioCtx.state === 'suspended') audioCtx.resume().catch(()=>{});
    hideBanner();
    startScreen.classList.add('hidden');
    startScreen.setAttribute('aria-hidden','true');
    quizArea.classList.remove('hidden');
    quizArea.setAttribute('aria-hidden','false');
    renderQuestion(0);
  });

  // final screen
  function showFinal(){
    stopQuestionTimer();
    hideBanner();
    quizArea.classList.add('hidden');
    quizArea.setAttribute('aria-hidden','true');
    finalScreen.classList.remove('hidden');
    finalScreen.setAttribute('aria-hidden','false');

    finalScoreEl.textContent = score;
    finalHitsEl.textContent = hits;

    if(score >= 500){
      finalTitle.textContent = "Parabéns!";
      finalText.innerHTML = `Você conseguiu <strong>${score}</strong> pontos e <strong>${hits}</strong> acertos. Excelente!`;
      launchConfetti();
    } else {
      finalTitle.textContent = "Continue se esforçando!";
      finalText.innerHTML = `Sua pontuação foi <strong>${score}</strong> com <strong>${hits}</strong> acertos. Continue praticando — você chega lá!`;
    }
  }

  retryBtn.addEventListener('click', ()=>{
    current = 0; score = 0; hits = 0; answered = false;
    scoreEl.textContent = score; hitsEl.textContent = hits;
    hideBanner();
    finalScreen.classList.add('hidden');
    finalScreen.setAttribute('aria-hidden','true');
    questionImageContainer.innerHTML = '';
    startScreen.classList.remove('hidden');
    startScreen.setAttribute('aria-hidden','false');
  });

  // initial UI
  qIndexEl.textContent = 0;
  document.addEventListener('DOMContentLoaded', ()=> {
    // Garantias extras: esconde banner e limpa intervalos logo no carregamento
    hideBanner();
    if(questionTimer){ clearInterval(questionTimer); questionTimer = null; }
    // anima start button
    startBtn.animate([{transform:'translateY(6px)', opacity:0},{transform:'translateY(0)',opacity:1}],{duration:600,easing:'cubic-bezier(.2,.7,.2,1)'});
  });

  // prevent accidental text selection drag on answers
  document.addEventListener('selectstart', e => {
    if(e.target.closest('.answer')) e.preventDefault();
  });

})();
