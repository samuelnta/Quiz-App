
console.log('this is script.js');
let upload = document.getElementById('upload');
let outputBx = document.getElementById('outputBx');

upload.addEventListener('change', ()=>{
  let fr = new FileReader();
  fr.readAsText(upload.files[0]);
  fr.onload = function(){
    outputBx.innerHTML = fr.result;
  }
}
);

const quizData = [
  
    {
      question: '1. Ijambo akayira bivuga inzira nyabagendwa ifunganye yagenewe gusa?',
      options: [
        'a) Abanyamaguru',
        'b) Ibinyabiziga bigendera ku biziga bibiri', 
        'c) A na B ni ibisubizo by`ukuri', 
        'd) Nta gisubizo cy`ukuri kirimo',
      ],
      answer: 'c) A na B ni ibisubizo by`ukuri',
    },
    {
      question: '2. Umurongo uciyemo uduce umenyesha ahegereye umurongo ushobora kuzuzwa n`uturanga gukata tw`ibara ryera utwo turanga cyerekezo tumenyesha?',
      options: [
        'a) Igisate cy`umuhanda abayobozi bagomba gukurikira ', 
        'b) Ahegereye umurongo ukomeje', 
        'c) Igabanurwa ry`umubare w`ibisate by`umuhanda mu cyerekezo bajyamo', 
        'd) A na C nibyo',
      ],
      answer: 'c) Igabanurwa ry`umubare w`ibisate by`umuhanda mu cyerekezo bajyamo',
    },
    {
      question: '3. Ahantu ho kugendera mu muhanda herekanwa n`ibimenyetso bimurika ibinyabiziga ntibishobora kuhagenda?',
      options: [
        'a) Biteganye', 
        'b) Ku murongo umwe', 
        'c) A na B nibyo', 
        'd) Nta gisubizo cy`ukuri kirimo',
      ],
      answer: 'd) Nta gisubizo cy`ukuri kirimo',
    },
    {
      question: '4. Ibinyabiziga bikurikira bigomba gukorerwa isuzumwa buri mwaka?',
      options: [
        'a) Ibinyabiziga bigenewe gutwara abagenzi muri rusange',
        'b) Ibinyabiziga bigenewe gutwara ibintu birengeje toni 3.5', 
        'c) Ibinyabiziga bigenewe kwigisha gutwara', 
        'd) Nta gisubizo cy`ukuri kirimo',
      ],
      answer: 'd) Nta gisubizo cy`ukuri kirimo',
    },
    {
      question: '5. Ubugari bwa romoruki ikuruwe n`ikinyamitende itatu ntibugomba kurenza ibipimo bikurikira?',
      options: [
        'a) cm75',
        'b) cm125',
        'c) cm265',
        'd) Nta gisubizo cy`ukuri',
      ],
      answer: 'd) Nta gisubizo cy`ukuri',
    },
    {
      question: '6. Uburebure bw`ibinyabiziga bikurikira ntibugomba kurenga metero 11?',
      options: [
        'a) Ibifite umutambiko umwe uhuza imipira', 
        'b) Ibifite imitambiko ibiri ikurikiranye mu bugari bwayo', 
        'c)Makuzungu', 
        'd) Nta gisubizo cy`ukuri',
      ],
      answer: 'd) Nta gisubizo cy`ukuri',
    },
    {
      question: '7. Ikinyabiziga kibujijwe guhagarara akanya kanini aha hakurikira?',
      options: [
        'a) Ahatarengeje metero 1 imbere cyangwa inyuma y`ikinyabiziga gihagaze akanya gato cyangwa kanini',
        'b) Ahantu hari ibimenyetso bibuza byabugenewe',
        'c) Aho abanyamaguru banyura mu muhanda ngo bakikire inkomyi',
        'd) Ibisubizo byose nibyo',
      ],
      answer: 'd) Ibisubizo byose nibyo',
    },
    {
      question: '8. Kunyuranaho bikorerwa?',
      options: [
        'a) Mu ruhande rw`iburyo gusa', 
        'b) Igihe cyose ni ibumoso', 
        'c) Iburyo iyo unyura ku nyamaswa', 
        'd) Nta gisubizo cy`ukuri kirimo',
      ],
      answer: 'd) Nta gisubizo cy`ukuri kirimo',
    },
    {
      question: '9. Icyapa cyerekana umuvuduko ntarengwa ikinyabiziga kitagomba kurenza gishyirwa gusa ku binyabiziga bifite uburemere ntarengwa bukurikira?',
      options: [
        'a) Burenga toni 1',
        'b) Burenga toni 2',
        'c) Burenga toni 24',
        'd) Nta gisubizo cy`ukuri kirimo',
      ],
      answer: 'd) Nta gisubizo cy`ukuri kirimo',
    },
    {
      question: '10. Ahatari mu nsisiro umuvuduko ntarengwa mu isaha wa velomoteri ni?',
      options: [
        'a) Km50', 
        'b) Km40', 
        'c) Km30', 
        'd) Nta gisubizo cy`ukuri',
      ],
      answer: 'a) Km50',
    },
    {
      question: '11. Amatara maremare y`ikinyabiziga agomba kuzimwa mu bihe bikurikira?',
      options: [
        'a) Iyo umuhanda umurikiye umuyobozi abasha kureba muri metero 20',
        'b) Iyo ikinyabiziga kigiye kubisikana n`ibindi', 
        'c) Iyo ari mu nsisiro', 
        'd) Ibisubizo byose ni ukuri',
     ],
     answer: 'b) Iyo ikinyabiziga kigiye kubisikana n`ibindi',
    },
    {
      question: '12. Umuyobozi ugenda mu muhanda igihe ubugari bwawo budatuma anyuranaho nta nkomyi ashobora kunyura mu kayira k`abanyamaguru ariko amaze kureba ibi bikurikira?',
      options: [
      'a) Umuvuduko w`abanyamaguru',
      'b) Ubugari bw`umuhanda',
      'c) Umubare w`abanyamaguru',
      'd) Nta gisubizo cy`ukuri kirimo',
      ],
     answer: 'd) Nta gisubizo cy`ukuri kirimo',
    },
    {
      question: '13. Ku byerekeye kwerekana ibinyabiziga n`ukumurika kwabyo ndetse no kwerekana ihindura ry`ibyerekezo byabyo. Birabujijwe gukora andi matara cyangwa utugarurarumuri uretse ibitegetswe ariko ntibireba amatara akurikira?', 
      options: [
      'a) Amatara ndanga',
      'b) Amatara ari imbere mu modoka',
      'c) Amatara ndangaburambarare',
      'd) Ibisubizo byose nibyo',
    ],
    answer: 'b) Amatara ari imbere mu modoka',
    },
    {
      question: '14. Iyo nta mategeko awugabanya by`umwihariko umuvuduko ntarengwa w`amapikipiki mu isaha ni?',
      options: [
      'a) Km25', 
      'b) Km70', 
      'c) Km40', 
      'd) Nta gisubizo cy`ukuri kirimo',
    ],
    answer: 'd) Nta gisubizo cy`ukuri kirimo',
    },
    {
      question: '15. Uburyo bukoreshwa kugirango ikinyabiziga kigende gahoro igihe feri idakora neza babwita?',
      options: [
      'a) Feri y`urugendo', 
      'b) Feri yo guhagarara umwanya munini', 
      'c) Feri yo gutabara', 
      'd) Nta gisubizo cy`ukuri kirimo',
    ],
    answer: 'd) Nta gisubizo cy`ukuri kirimo',
    },
    {
      question: '16. Nibura ikinyabiziga gitegetswe kugira uduhanagurakirahure tungahe',
      options: [
        'a) 2',
        'b) 3',
        'c) 1',
        'd) Nta gisubizo cy`ukuri kirimo',
      ],
      answer: 'c) 1',
    },
    {
      question: '17. Ikinyabiziga ntigishobora kugira amatara arenga abiri y`ubwoko bumwe keretse kubyerekeye amatara akurikira',
      options: [
        'a) Itara ndangamubyimba',
        'b) Itara ryerekana icyerekezo',
        'c) Itara ndangaburumbarare',
        'd) Ibisubizo byose ni ukuri',
      ],
      answer: 'd) Ibisubizo byose ni ukuri',
    },
    {
      question: '18. Ubugari bwa romoruki ikuruwe n`igare cyangwa velomoteri ntiburenza ibipimo bikurikira',
      options: [
        'a) cm25',
        'b) cm125',
        'c) cm45',
        'd) Nta gisubizo cy`ukuri kirimo',
      ],
      answer: 'd) Nta gisubizo cy`ukuri kirimo',
    },
    {
      question: '19. Ibinyabiziga bikoreshwa nka tagisi, bitegerereza abantu mu nzira nyabagendwa, bishobora gushyirwaho itara ryerekana ko ikinyabiziga kitakodeshejwe. Iryo tara rishyirwaho ku buryo bukurikira',
      options: [
        'a) Ni itara ry`icyatsi rishyirwa imbere ku kinyabiziga',
        'b) Ni itara ry`icyatsi rishyirwa ibumoso',
        'c) Ni itara ry`umuhondo rishyirwa inyuma',
        'd) A na C ni ibisubizo by`ukuri',
      ],
      answer: 'a) Ni itara ry`icyatsi rishyirwa imbere ku kinyabiziga',
    },
    {
      question: '20. Za otobisi zagenewe gutwara abanyeshuri zishobora gushyirwaho amatara abiri asa n`icunga rihishije amyasa kugirango yerekane ko zihagaze no kwerekana ko bagomba kwitonda, ayo matara ashyirwaho ku buryo bukurikira',
      options: [
        'a) Amatara abiri ashyirwa inyuma',
        'b) Amatara abiri ashyirwa imbere',
        'c) Rimwe rishyirwa imbere irindi inyuma',
        'd) b na c ni ibisubizo by`ukuri',
      ],
      answer: 'c) Rimwe rishyirwa imbere irindi inyuma',
    },
    {
      question: '21. Itara ryo guhagarara ry`ibara ritukura rigomba kugaragara igihe ijuru rikeye nibura mu ntera ikurikira',
      options: [
        'a) Metero 100 ku manywa na metero 20 mu ijoro',
        'b) Metero 150 ku manywa na metero 50 mu ijoro',
        'c) Metero 200 ku manywa na metero100 mu ijoro',
        'd) Nta gisubizo cy`ukuri kirimo',
      ],
      answer: 'd) Nta gisubizo cy`ukuri kirimo',
    },
    {
      question: '22. Iyo umuvuduko w`ibinyabiziga bidapakiye ushobora kurenga km50 mu isaha ahategamye, bigomba kuba bifite ibikoresho by`ihoni byumvikanira mu ntera',
      options: [
        'a) Metero 100',
        'b) Metero 200',
        'c) Metero 50',
        'd) Metero 150',
      ],
      answer: 'c) Metero 50',
    },
    {
      question: '23. Birabujijwe kugenza ibinyabiziga bigendeshwa na moteri naza romoruki zikururwa nabyo, iyo ibiziga byambaye inziga zidahagwa cyangwa inziga zikururuka zifite umubyimba uri hasi ya cm 4. Ariko ibyo ntibikurikizwa kubinyabiziga bikurikira',
      options: [
        'a) Ku binyabiziga by`ingabo bijya ahatarenga km25',
        'b) Ibinyabiziga bihinga',
        'c) Ibinyabiziga bya police',
        'd) Nta gisubizo cy`ukuri kirimo',
      ],
      answer: 'd) Nta gisubizo cy`ukuri kirimo',
    },
    {
      question: '24. Igice cy`inzira nyabagendwa kigarukira ku mirongo ibiri yera icagaguye ibangikanye kandi gifite ubugari budahagije kugira ngo imodoka zitambuke neza, kiba ari',
      options: [
        'a) Ahanyurwa n`amagare na velomoteri',
        'b) Ahanyurwa n`ingorofani',
        'c) Ahanyurwa n`ibinyamitende',
        'd) Nta gisubizo cy`ukuri kirimo',
      ],
      answer: 'c) Ahanyurwa n`ibinyamitende',
    },
    {
      question: '25. Ubugari bwa romoruki ntiburenza ubugari bw`ikinyabiziga kiyikurura iyo ikuruwe n`ibinyabiziga bikurikira',
      options: [
        'a) Igare',
        'b) Velomoteri',
        'c) Ipikipiki ifite akanyabiziga kometse ku ruhande rwayo',
        'd) Nta gisubizo cy`ukuri kirimo',
      ],
      answer: 'c) Ipikipiki ifite akanyabiziga kometse ku ruhande rwayo',
    },
    {
      question: '26. Iyo hatarimo indi myanya birabujijwe gutwara ku ntebe y`imbere y`imodoka abana badafite imyaka',
      options: [
        'a) Imyaka 10',
        'b) Imyaka 12',
        'c) Imyaka 7',
        'd) Ntagisubizo cy`ukuri kirimo',
      ],
      answer: 'b) Imyaka 12',
    },
    {
      question: '27. Icyapa kivuga gutambuka mbere y`ibinyabiziga biturutse imbere gifite amabara akurikira',
      options: [
        'a) Ubuso ni umweru',
        'b) Ikirango ni umutuku n`umukara',
        'c) Ikirango ni umweru n`umukara',
        'd) Nta gisubizo cy`ukuri kirimo',
      ],
      answer: 'd) Nta gisubizo cy`ukuri kirimo',
    },
    {
      question: '28. Ni ryari itegeko rigenga gutambuka mbere kw`iburyo rikurikizwa mu masangano',
      options: [
        'a) Iyo nta cyapa cyo gutambuka mbere gihari',
        'b) Iyo ikimenyetso kimurika cyagenewe ibinyabiziga kidakora',
        'c) A na B ni ibisubizo by`ukuri',
        'd) Nta gisubizo cy`ukuri',
      ],
      answer: 'c) A na B ni ibisubizo by`ukuri',
    },
    {
      question: '29. Ibimenyetso bimurika byerekana uburyo bwo kugendera mu muhanda kw`ibinyabiziga bishyirwa iburyo bw`umuhanda. Ariko bishobora no gushyirwa ibumoso cyangwa hejuru y`umuhanda',
      options: [
        'a) Hakurikijwe icyerekezo abagenzi bireba baganamo',
        'b) Hakurikijwe icyo ibyo bimenyetso bigamije kwerekana',
        'c) Kugirango birusheho kugaragara neza',
        'd) Ibisubizo byose ni ukuri',
      ],
      answer: 'c) Kugirango birusheho kugaragara neza',
    },
    {
      question: '30. Iyo itara ry`umuhondo rimyatsa rikoreshejwe mu masangano y`amayira ahwanyije agaciro rishyirwa ahagana he',
      options: [
        'a) Kuri buri nzira',
        'b) Hagati y`amasangano',
        'c) Iburyo bw`amasangano',
        'd) a na b ni ibisubizo by`ukuri',
      ],
      answer: 'd) a na b ni ibisubizo by`ukuri',
    },
    {
      question: '31. Inkombe z`inzira nyabagendwa cyangwa z`umuhanda zishobora kugaragazwa n`ibikoresho ngarurarumuri. Ibyo bikoresho bigomba gushyirwaho ku buryo abagenzi babibona',
      options: [
        'a) Babona gusa ibumoso bwabo iby`ibara ritukura',
        'b) Iburyo babona iby`ibara risa n`icunga rihishije gusa',
        'c) Babona iby`ibara ry`umuhondo ibumoso',
        'd) Nta gisubizo cy`ukuri kirimo',
      ],
      answer: 'd) Nta gisubizo cy`ukuri kirimo',
    },
    {
      question: '32. Ibinyabiziga bikurikira bigomba gukorerwa isuzumwa rimwe mu mezi 6',
      options: [
        'a) Ibinyabiziga bitwara abagenzi muri rusange',
        'b) Ibinyabiziga bigenewe gutwara ibintu birengeje toni 3.5',
        'c) Ibinyabiziga bigenewe kwigisha gutwara',
        'd) Ibisubizo byose ni ukuri',
      ],
      answer: 'd) Ibisubizo byose ni ukuri',
    },
    {
      question: '33. Iyo kuyobya umuhanda ari ngombwa bigaragazwa kuva aho uhera no kuburebure bwawo n`icyapa gifite ubuso bw`amabara akurikira',
      options: [
        'a) Ubururu',
        'b) Umweru',
        'c) Umutuku',
        'd) Nta gisubizo cy`ukuri',
      ],
      answer: 'a) Ubururu',
    },
    {
      question: '34. Ku mihanda ibyapa bikurikira bigomba kugaragazwa ku buryo bumwe',
      options: [
        'a) Ibyapa biyobora n`ibitegeka',
        'b) Ibyapa biburira n`ibitegeka',
        'c) Ibyapa bibuza n`ibitegeka',
        'd) Nta gisubizo cy`ukuri kirimo',
      ],
      answer: 'c) Ibyapa bibuza n`ibitegeka',
    },
    {
      question: '35. Ni iyihe feri ituma imodoka igenda buhoro kandi igahagarara ku buryo bwizewe bubangutse kandi nyabwo, uko imodoka yaba yikoreye kose yaba igeze ahacuramye cyangwa ahaterera',
      options: [
        'a) Feri y`urugendo',
        'b) Feri yo gutabara',
        'c) Feri yo guhagarara umwanya munini',
        'd) Nta gisubizo cy`ukuri kirimo',
      ],
      answer: 'a) Feri y`urugendo',
    },
    {
      question: '36. Ibizirikisho by`iminyururu cyangwa by`insinga kimwe n`ibindi by`ingoboka bikoreshwa gusa igihe nta kundi umuntu yabigenza kandi nta kindi bigiriwe uretse gusa kugirango ikinyabiziga kigere aho kigomba gukorerwa kandi nturenze na rimwe km 20 mu isaha ibyo bizirikisho bigaragazwa ku buryo bukurikira',
      options: [
        'a) Agatambaro gatukura kuri cm 50 z`umuhanda',
        'b) Ikimenyetso cy`itara risa n`icunga rihishije',
        'c) Icyapa cyera cya mpande enye zingana gifite cm 20 kuri buri ruhande',
        'd) Nta gisubizo cy`ukuri kirimo',
      ],
      answer: 'd) Nta gisubizo cy`ukuri kirimo',
    },
    {
      question: '37. Uretse mu mujyi, ku yindi mihanda yajyenwe na minisitiri ushinzwe gutwara abantu n`ibintu, uburemere ntarengwa ku binyabiziga bifite imitambiko itatu cyangwa irenga hatarimo makuzungu ni',
      options: [
        'a) Toni 10',
        'b) Toni 12',
        'c) Toni 16',
        'd) Toni 24',
      ],
      answer: 'c) Toni 16',
    },
    {
      question: '38. Ubugari bw`imizigo yikorewe n`ibinyamitende itatu n`ubwiyikorewe n`ibinyamitende 4 bifite cyangwa bidafite moteri kimwe n`ubw`iyikorewe na romuruki zikuruwe n`ibyo binyabiziga ntibushobora kurenga ibipimo bikurikira',
      options: [
        'a) cm 30 ku bugari bw`icyo kinyabiziga kidapakiye',
        'b) Ubugari ntarengwa budakuka ni metero 2 na sentimetero 50',
        'c) A na B ni ibisubizo by`ukuri',
        'd) Nta gisubizo cy`ukuri kirimo',
      ],
      answer: 'c) A na B ni ibisubizo by`ukuri',
    },
    {
      question: '39. Kunyura ku binyabiziga bindi, uretse icy`ibiziga bibiri, bibujijwe aha hakurikira',
      options: [
        'a) Hafi y`iteme iyo hari umuhanda ufunganye',
        'b) Hafi y`aho abanyamaguru banyura',
        'c) Hafi y`ibice by`umuhanda bimeze nabi',
        'd) Ibi bisubizo byose ni ukuri',
      ],
      answer: 'd) Ibi bisubizo byose ni ukuri',
    },
    {
      question: '40. Iyo nta mategeko awugabanya by`umwihariko, umuvuduko ntarengwa ku modoka zitwara abagenzi mu buryo bwa rusange ni',
      options: [
        'a) Km 60 mu isaha',
        'b) Km 40 mu isaha',
        'c) Km 25 mu isaha',
        'd) Km20 mu isaha',
      ],
      answer: 'a) Km 60 mu isaha',
    },
    {
      question: '41. Iyo nta mategeko awugabanya by`umwihariko, umuvuduko ntarengwa ku modoka zikoreshwa nk`amavatiri y`ifasi cyangwa amatagisi zifite uburemere bwemewe butarenga kilogarama 3500 ni',
      options: [
        'a) Km 60 mu isaha',
        'b) Km 40 mu isaha',
        'c) Km 75 mu isaha',
        'd) Km20 mu isaha',
      ],
      answer: 'c) Km 75 mu isaha',
    },
    {
      question: '42. Ikinyabiziga kibujijwe guhagarara akanya kanini aha hakurikira',
      options: [
        'a) Imbere y`ahantu hinjirwa hakasohokerwa n`abantu benshi',
        'b) Mu muhanda aho ugabanyijemo ibisate bigaragazwa n`imirongo idacagaguye',
        'c) A na B ni ibisubizo by`ukuri',
        'd) Nta gisubizo cy`ukuri kirimo',
      ],
      answer: 'c) A na B ni ibisubizo by`ukuri',
    },
    {
      question: '43. Iyo bwije kugeza bukeye cyangwa bitewe n`uko ibihe bimeze nk`igihe cy`ibihu cyangwa cy`imvura bitagishoboka kubona neza muri m 200, udutsiko twose tw`abanyamaguru nk`imperekerane cyangwa udutsiko tw`abanyeshuri bari ku murongo bayobowe n`umwarimu, iyo bagenda mu muhanda ku isonga hakaba hari abantu barenze umwe bagomba kugaragazwa kuburyo bukurikira',
      options: [
        'a) Imbere ni itara ry`umuhondo ritwariwe ibumoso',
        'b) Inyuma ni itara ryera ritwariwe ibumoso n`umuntu uri ku murongo w`inyuma hafi y`umurongo ugabanya umuhanda mo kabiri',
        'c) A na B ni ibisubizo by`ukuri',
        'd) Nta gisubizo cy`ukuri kirimo',
      ],
      answer: 'd) Nta gisubizo cy`ukuri kirimo',
    },
    {
      question: '44. Utuyira turi ku mpande z`umuhanda n`inkengero zigiye hejuru biharirwa abanyamaguru mu bihe bikurikira',
      options: [
        'a) Iyo hari amategeko yihariye yerekanwa n`ibimenyetso',
        'b) Iyo badatatanye kandi bayobowe n`umwarimu',
        'c) Iyo hatari amategeko yihariye yerekanwa n`ibimenyetso',
        'd) Ibisubizo byose ni ukuri',
      ],
      answer: 'c) Iyo hatari amategeko yihariye yerekanwa n`ibimenyetso',
    },
    {
      question: '45. Imburira zimurika zemerewe gukoreshwa kugirango bamenyeshe umuyobozi ko bagiye kumunyuraho aha hakurikira',
      options: [
        'a) Mu nsisiro gusa',
        'b) Ahegereye inyamaswa zikurura',
        'c) Hafi y`amatungo',
        'd) Nta gisubizo cy`ukuri kirimo',
      ],
      answer: 'd) Nta gisubizo cy`ukuri kirimo',
    },
  ];
  
  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  const submitButton = document.getElementById('submit');
  const retryButton = document.getElementById('retry');
  const showAnswerButton = document.getElementById('showAnswer');
  
  let currentQuestion = 0;
  let score = 0;
  let incorrectAnswers = [];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestion() {
    const questionData = quizData[currentQuestion];
  
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
  
    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
  
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
  
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        });
      }
      currentQuestion++;
      selectedOption.checked = false;
      if (currentQuestion < quizData.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    }
  }
  
  function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
  }
  
  function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.innerHTML = '';
    displayQuestion();
  }
  
  function showAnswer() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'none';
  
    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
        <p>
          <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
    }
  
    resultContainer.innerHTML = `
      <p>You scored ${score} out of ${quizData.length}!</p>
      <p>Incorrect Answers:</p>
      ${incorrectAnswersHtml}
    `;
  }
  
  submitButton.addEventListener('click', checkAnswer);
  retryButton.addEventListener('click', retryQuiz);
  showAnswerButton.addEventListener('click', showAnswer);
  
  displayQuestion();