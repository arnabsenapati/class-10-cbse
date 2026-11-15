import { Subtopic } from '../../../types/curriculum';

export const subtopicManushyata: Subtopic = {
  id: 'hindi-kavya-03-manushyata',
  slug: 'manushyata',
  title: 'पाठ 3: मैथिलीशरण गुप्त — मनुष्यता (Manushyata)',
  subtitle:
    'विशुद्ध संस्कृतनिष्ठ खड़ी बोली के सभी 8 छंद — सुमृत्यु, पशु-प्रवृत्ति बनाम सच्ची मनुष्यता, पौराणिक दानी महापुरुष, सहानुभूति व विश्व-बंधुत्व।',
  estimatedMinutes: 35,
  difficulty: 'Board Mastery',
  ncertSection: 'स्पर्श भाग-2 • काव्यखंड पाठ 3',
  learningObjectives: [
    '‘मनुष्य वही है जो मनुष्य के लिए मरे’ — स्वार्थ (पशु-प्रवृत्ति) और परोपकार (सच्ची मनुष्यता) का अंतर स्पष्ट करना।',
    'रंतिदेव, दधीचि, उशीनर नरेश शिबि, कर्ण और महात्मा बुद्ध के त्याग-प्रसंगों को संक्षेप में याद करना।',
    'संस्कृतनिष्ठ तत्सम शब्दों व समासों (`मर्त्य`, `क्षुधार्त`, `परार्थ`, `मदांध`, `परस्परावलंब`, `अंतरैक्य`) का अर्थ और विग्रह समझना।',
    '“मनुष्य मात्र बंधु है” और “चलो अभीष्ट मार्ग में” के परीक्षा-उपयोगी भावार्थ लिखना।',
  ],
  keywords: [
    'मनुष्यता',
    'मैथिलीशरण गुप्त',
    'सुमृत्यु',
    'रंतिदेव',
    'दधीचि',
    'उशीनर',
    'कर्ण',
    'महाविभूति',
    'मदांध',
    'मनुष्य मात्र बंधु है',
    'मुहावरे',
    'समास',
    'शब्दार्थ',
    'english transcript',
  ],
  sections: [
    {
      id: 'manushyata-overview-and-heroes',
      title: '1. कवि-परिचय और पौराणिक महापुरुष संदर्भ (Board Quick-Map)',
      blocks: [
        {
          type: 'ncert-reference',
          title: 'पाठ 3: मैथिलीशरण गुप्त — मनुष्यता — Official NCERT PDF',
          bookName: 'स्पर्श भाग-2 — काव्यखंड',
          pdfPath: '/ncert/hindi/jhsp103.pdf',
          pdfStartPage: 1,
          pdfEndPage: 7,
          note: 'Preview or open the official NCERT Sparsh Bhag-2 chapter PDF (कवि-परिचय, सभी 8 छंद, प्रश्न-अभ्यास व शब्दार्थ) alongside the Word Lens & bilingual transcript below.',
        },
        {
          type: 'quick-summary',
          title: 'मैथिलीशरण गुप्त और ‘मनुष्यता’',
          bullets: [
            '**कवि:** राष्ट्रकवि मैथिलीशरण गुप्त (1886–1964 ई.), जन्म: चिरगाँव (झाँसी)। प्रमुख कृतियाँ: *साकेत, यशोधरा, जयद्रथ वध*।',
            '**भाषा:** **विशुद्ध खड़ी बोली** (संस्कृत के तत्सम शब्दों व समासों का प्रचुर प्रयोग — इसलिए यहाँ शब्दार्थ व समास समझना बहुत ज़रूरी है)।',
            '**मूल संदेश:** जन्म-मरण अटल है। जो केवल अपने लिए जीता है वह पशु-तुल्य है; जो दूसरों के हित में जीता-मरता है, उसकी मृत्यु ही **सुमृत्यु** है और वही युगों तक अमर रहता है।',
          ],
        },
        {
          type: 'table',
          caption: 'कविता में वर्णित 5 महान त्याग-प्रतीक (CBSE 2–3 अंकों में सीधे पूछे जाते हैं)',
          headers: ['महापुरुष', 'त्याग का कार्य', 'कविता में संदेश'],
          rows: [
            [
              '**राजा रंतिदेव**',
              'स्वयं कई दिनों के भूखे होते हुए भी हाथ में आया अंतिम भोजन (करस्थ थाल) अतिथि को दे दिया।',
              'परोपकार के लिए अपने सुख-भोजन का भी सहर्ष त्याग।',
            ],
            [
              '**महर्षि दधीचि**',
              'देवताओं की रक्षा व वृत्रासुर के वध के लिए अपनी जीवित देह की अस्थियाँ (इंद्र के वज्र हेतु) दान कर दीं।',
              'अनिश्चित शरीर का उपयोग लोक-कल्याण के लिए करना।',
            ],
            [
              '**उशीनर नरेश (शिबि)**',
              'शरण में आए कबूतर के प्राण बचाने के लिए बाज को अपने शरीर का मांस काटकर दे दिया।',
              'शरणागत की रक्षा सर्वस्व देकर भी करनी चाहिए।',
            ],
            [
              '**वीर कर्ण**',
              'माँगे जाने पर अपने प्राण-रक्षक जन्मजात दिव्य कवच और कुंडल (शरीर-चर्म) खुशी-खुशी दान दे दिए।',
              'नश्वर देह के मोह से ऊपर उठकर दानवीरता दिखाना।',
            ],
            [
              '**महात्मा बुद्ध**',
              'करुणा के प्रवाह में बहकर तत्कालीन रूढ़ियों व पारंपरिक अंधविश्वासों का विरोध किया; विनीत विश्व झुक गया।',
              'करुणा व सहानुभूति से विरोध भी विनम्रता में बदल जाता है।',
            ],
          ],
        },
      ],
    },
    {
      id: 'manushyata-stanzas-1-to-4',
      title: '2. छंद 1 से 4: सुमृत्यु, उदारता का यश, महान दानी व बुद्ध की करुणा',
      blocks: [
        {
          type: 'poetic-stanza',
          stanzaLabel: 'छंद 1 — सुमृत्यु और पशु-प्रवृत्ति बनाम मनुष्यता',
          dialectBadge: 'तत्सम प्रधान खड़ी बोली',
          stanzaText: `विचार लो कि मर्त्य हो न मृत्यु से डरो कभी,
मरो, परंतु यों मरो कि याद जो करें सभी।
हुई न यों सुमृत्यु तो वृथा मरे, वृथा जिए,
मरा नहीं वही कि जो जिया न आपके लिए।
वही पशु-प्रवृत्ति है कि आप आप ही चरे,
वही मनुष्य है कि जो मनुष्य के लिए मरे।।`,
          words: [
            {
              word: 'मर्त्य',
              hindiMeaning: 'मरणशील (जिसका मरना निश्चित हो)',
              englishMeaning: 'mortal (bound to die)',
              grammarNote: 'तत्सम विशेषण • विलोम: अमर / अमर्त्य',
              exampleSentence: 'मानव देह मर्त्य है, परंतु अच्छे कर्म मनुष्य को अमर बनाते हैं।',
            },
            {
              word: 'सुमृत्यु',
              hindiMeaning: 'अच्छी, गौरवपूर्ण व सार्थक मृत्यु',
              englishMeaning: 'noble / meaningful death',
              grammarNote: '‘सु’ उपसर्ग + मृत्यु • विलोम: कुमृत्यु',
              exampleSentence: 'देश और समाज के हित में प्राण देना ही वास्तविक सुमृत्यु है।',
            },
            {
              word: 'वृथा',
              hindiMeaning: 'व्यर्थ / बेकार',
              englishMeaning: 'in vain / useless',
              grammarNote: 'तत्सम अव्यय • पर्याय: व्यर्थ, निष्फल',
              exampleSentence: 'बिना लक्ष्य और सेवा के बिताया जीवन वृथा माना जाता है।',
            },
            {
              word: 'पशु-प्रवृत्ति',
              hindiMeaning: 'पशु जैसा स्वार्थी स्वभाव',
              englishMeaning: 'animal-like selfish instinct',
              grammarNote: 'तत्सम समस्तपद (पशु की प्रवृत्ति — संबंध तत्पुरुष)',
              exampleSentence: 'केवल अपने स्वार्थ के लिए जीना पशु-प्रवृत्ति के समान है।',
            },
          ],
          prasang:
            'यह छंद राष्ट्रकवि मैथिलीशरण गुप्त की प्रसिद्ध कविता ‘मनुष्यता’ का प्रारंभिक पद है, जिसमें वे मृत्यु के भय को मिटाकर सार्थक जीवन जीने का आह्वान करते हैं।',
          bhavarthHindi:
            'कवि कहते हैं कि मनुष्य को यह सत्य समझ लेना चाहिए कि वह मरणशील (मर्त्य) है, इसलिए मृत्यु से कभी भयभीत नहीं होना चाहिए। परंतु मृत्यु ऐसी होनी चाहिए कि जाने के बाद भी सारा संसार तुम्हें सम्मान से याद रखे। यदि जीवन और मृत्यु इस प्रकार गौरवशाली (सुमृत्यु) नहीं हुई, तो जीना और मरना दोनों व्यर्थ (वृथा) हैं। वास्तव में अमर वही है जो केवल अपने लिए नहीं, बल्कि दूसरों के लिए जिया हो। केवल अपना ही पेट भरना (आप आप ही चरना) पशु-प्रवृत्ति है; सच्चा मनुष्य तो वही है जो दूसरे मनुष्य के काम आए और उसके लिए बलिदान दे सके।',
          englishHelper:
            'Accept that you are mortal (`मर्त्य`), so never fear death — die such a noble death (`सुमृत्यु`) that everyone remembers you. Living or dying selfishly is completely in vain (`वृथा`). Grazing only for yourself is animal nature (`पशु-प्रवृत्ति`); a true human is one who lives and dies for fellow humans.',
          poeticDevices: [
            '**यमक / पुनरुक्ति:** ‘आप आप ही चरे’ में स्वार्थपूर्ण जीवन का सटीक व्यंग्य चित्रण।',
            '**टेक पंक्ति (Refrain):** “वही मनुष्य है कि जो मनुष्य के लिए मरे” पूरी कविता के केंद्रीय भाव को बांधती है।',
          ],
        },
        {
          type: 'poetic-stanza',
          stanzaLabel: 'छंद 2 — उदार व्यक्ति की कीर्ति और विश्व-आत्मभाव',
          dialectBadge: 'तत्सम प्रधान खड़ी बोली',
          stanzaText: `उसी उदार की कथा सरस्वती बखानती,
उसी उदार से धरा कृतार्थ भाव मानती।
उसी उदार की सदा सजीव कीर्ति कूजती;
तथा उसी उदार को समस्त सृष्टि पूजती।
अखंड आत्म भाव जो असीम विश्व में भरे,
वही मनुष्य है कि जो मनुष्य के लिए मरे।।`,
          words: [
            {
              word: 'उदार',
              hindiMeaning: 'दानशील / विशाल हृदय वाला / सहृदय',
              englishMeaning: 'generous / magnanimous / large-hearted',
              grammarNote: 'तत्सम विशेषण • विलोम: कृपण / अनुदार',
              exampleSentence: 'उदार हृदय व्यक्ति बिना किसी भेदभाव के सबकी सहायता करता है।',
            },
            {
              word: 'बखानती',
              hindiMeaning: 'वर्णन / गुणगान करती है',
              englishMeaning: 'praises / narrates the glory of',
              grammarNote: 'सकर्मक क्रिया • यहाँ ‘सरस्वती’ = साहित्य व इतिहास',
              exampleSentence: 'इतिहास की पुस्तकें आज भी दानवीरों की गाथा का बखान करती हैं।',
            },
            {
              word: 'कृतार्थ',
              hindiMeaning: 'आभारी / धन्य / उपकृत',
              englishMeaning: 'grateful / blessed / indebted',
              grammarNote: 'तत्सम विशेषण (कृत + अर्थ)',
              exampleSentence: 'परोपकारी संतों के जन्म से यह धरती स्वयं को कृतार्थ मानती है।',
            },
            {
              word: 'कीर्ति',
              hindiMeaning: 'यश / प्रसिद्धि / गौरव',
              englishMeaning: 'fame / glory / lasting renown',
              grammarNote: 'तत्सम संज्ञा (स्त्रीलिंग) • विलोम: अपकीर्ति',
              exampleSentence: 'सद्कर्मों से प्राप्त कीर्ति मृत्यु के बाद भी जीवित रहती है।',
            },
            {
              word: 'कूजती',
              hindiMeaning: 'मधुर ध्वनि से गूँजती है',
              englishMeaning: 'echoes sweetly / sings',
              grammarNote: 'क्रिया • मानवीकरण भाव',
              exampleSentence: 'सच्चे समाज-सेवकों का यश युगों तक समाज में गूँजता रहता है।',
            },
            {
              word: 'अखंड आत्म भाव',
              hindiMeaning: 'संपूर्ण विश्व में अपनत्व व एकता की अटूट भावना',
              englishMeaning: 'unbroken feeling of oneness with the whole world',
              grammarNote: 'कर्मधारय समास + तत्सम पद',
              exampleSentence: 'अखंड आत्मभाव अपनाकर ही विश्व-शांति स्थापित की जा सकती है।',
            },
          ],
          prasang:
            'इस छंद में कवि ने उदार और परोपकारी मनुष्य के संसार-व्यापी सम्मान व अमर यश का वर्णन किया है।',
          bhavarthHindi:
            'कवि कहते हैं कि जो व्यक्ति विशाल हृदय व उदार स्वभाव का होता है, विद्या और साहित्य की देवी सरस्वती (अर्थात इतिहास और ग्रंथ) सदा उसकी कथा का गुणगान करती हैं। यह पृथ्वी भी ऐसे उदार मनुष्य के जन्म से स्वयं को धन्य (कृतार्थ) मानती है। संपूर्ण संसार में उसका जीवंत यश गूँजता है और समस्त सृष्टि उसकी पूजा करती है। जो संपूर्ण असीम संसार में अटूट अपनत्व (वसुधैव कुटुंबकम्) का भाव भर दे, वही सच्चा मनुष्य है।',
          englishHelper:
            'Books and learning (`सरस्वती`) tell the story of that generous soul (`उदार`); the earth (`धरा`) feels blessed (`कृतार्थ`); their living fame (`सजीव कीर्ति`) echoes forever, and the whole creation honors them — those who fill the boundless universe with an unbroken spirit of kinship (`अखंड आत्म भाव`).',
          poeticDevices: [
            '**पुनरुक्ति व पद-प्रभाव:** चार बार ‘उसी उदार’ की आवृत्ति से परोपकारी व्यक्ति के प्रति विशेष आदर प्रकट होता है।',
            '**मानवीकरण अलंकार:** सरस्वती द्वारा बखान करना, धरा का कृतार्थ मानना व कीर्ति का कूजना।',
          ],
        },
        {
          type: 'poetic-stanza',
          stanzaLabel: 'छंद 3 — पौराणिक दानी महापुरुषों के उदाहरण',
          dialectBadge: 'पौराणिक दृष्टांत (तत्सम)',
          stanzaText: `क्षुधार्त रंतिदेव ने दिया करस्थ थाल भी,
तथा दधीचि ने दिया परार्थ अस्थिजाल भी।
उशीनर क्षितीश ने स्वमांस दान भी किया,
सहर्ष वीर कर्ण ने शरीर-चर्म भी दिया।
अनित्य देह के लिए अनादि जीव क्या डरे?
वही मनुष्य है कि जो मनुष्य के लिए मरे।।`,
          words: [
            {
              word: 'क्षुधार्त',
              hindiMeaning: 'भूख से व्याकुल / अत्यंत भूखा',
              englishMeaning: 'tormented by hunger / starving',
              grammarNote: 'संधि: क्षुधा + आर्त (दीर्घ संधि) • समास: क्षुधा से आर्त (तत्पुरुष)',
              exampleSentence: 'कई दिनों से क्षुधार्त होने पर भी राजा रंतिदेव ने अपना भोजन दान कर दिया।',
            },
            {
              word: 'करस्थ',
              hindiMeaning: 'हाथ में लिया हुआ / हाथ में रखा हुआ',
              englishMeaning: 'held in one’s hand',
              grammarNote: 'उपपद तत्पुरुष (कर = हाथ + स्थ = स्थित)',
              exampleSentence: 'याचक को देखकर उन्होंने करस्थ थाल सहर्ष सौंप दिया।',
            },
            {
              word: 'परार्थ',
              hindiMeaning: 'दूसरों के हित के लिए / परोपकार हेतु',
              englishMeaning: 'for the welfare of others',
              grammarNote: 'संधि: पर + अर्थ • विलोम: स्वार्थ',
              exampleSentence: 'महर्षि दधीचि ने परार्थ अपनी अस्थियों का दान किया।',
            },
            {
              word: 'अस्थिजाल',
              hindiMeaning: 'हड्डियों का समूह (ढाँचा)',
              englishMeaning: 'framework of bones / skeleton',
              grammarNote: 'संबंध तत्पुरुष समास (अस्थियों का जाल)',
              exampleSentence: 'दधीचि के अस्थिजाल से बने वज्र द्वारा देवताओं ने असुरों पर विजय पाई।',
            },
            {
              word: 'उशीनर',
              hindiMeaning: 'उशीनर (गांधार) देश के राजा शिबि',
              englishMeaning: 'King Shibi of Ushinar',
              grammarNote: 'व्यक्तिवाचक संज्ञा (पौराणिक संदर्भ)',
              exampleSentence: 'शरणागत कबूतर की रक्षा के लिए उशीनर नरेश ने अनूठा त्याग किया।',
            },
            {
              word: 'क्षितीश',
              hindiMeaning: 'राजा / पृथ्वी का स्वामी',
              englishMeaning: 'king / lord of the earth',
              grammarNote: 'संधि: क्षिति + ईश (दीर्घ स्वर संधि)',
              exampleSentence: 'प्राचीन भारत में अनेक प्रजावत्सल क्षितीश हुए।',
            },
            {
              word: 'स्वमांस',
              hindiMeaning: 'अपने शरीर का मांस',
              englishMeaning: 'flesh from one’s own body',
              grammarNote: 'कर्मधारय/तत्पुरुष समास (स्व का मांस)',
              exampleSentence: 'राजा शिबि ने कबूतर के बदले अपना स्वमांस तराजू पर रख दिया।',
            },
            {
              word: 'अनित्य',
              hindiMeaning: 'नश्वर / जो सदा न रहे (नाशवान)',
              englishMeaning: 'impermanent / perishable',
              grammarNote: 'नञ् तत्पुरुष समास (न नित्य) • विलोम: नित्य / शाश्वत',
              exampleSentence: 'यह शरीर अनित्य है, जबकि आत्मा को अनादि माना जाता है।',
            },
          ],
          prasang:
            'प्रस्तुत छंद में कवि भारतीय इतिहास व पुराणों के चार परम दानवीरों के उदाहरण देकर सिद्ध करते हैं कि नश्वर शरीर से परे परोपकार ही श्रेष्ठ है।',
          bhavarthHindi:
            'कवि उदाहरण देते हैं कि स्वयं कई दिनों की भूख से व्याकुल राजा रंतिदेव ने अपने हाथ में आया भोजन का थाल भी भूखे अतिथि को दे दिया। महर्षि दधीचि ने देवताओं के कल्याण (परार्थ) हेतु अपनी हड्डियों का ढाँचा (अस्थिजाल) दान कर दिया। उशीनर देश के राजा शिबि ने कबूतर की रक्षा के लिए अपने शरीर का मांस तक दान किया और दानवीर कर्ण ने खुशी-खुशी अपने शरीर से जुड़े कवच-कुंडल (शरीर-चर्म) दे दिए। फिर भला इस नश्वर (अनित्य) शरीर के लिए अमर/अनादि जीवात्मा क्यों डरे? सच्चा मनुष्य वही है जो मानवता के लिए बलिदान दे।',
          englishHelper:
            'Starving King Rantideva gave away the food plate in his hand; Sage Dadhichi gave his very bones (`अस्थिजाल`) for others’ good (`परार्थ`); King Shibi of Ushinar offered his own flesh; and heroic Karna cheerfully gave his body-armor (`शरीर-चर्म`). Why should the eternal soul (`अनादि जीव`) fear losing an impermanent body (`अनित्य देह`)?',
          poeticDevices: [
            '**संदर्भ अलंकार / ऐतिहासिक दृष्टांत:** रंतिदेव, दधीचि, शिबि और कर्ण के प्रसिद्ध त्याग प्रसंग।',
            '**विरोधी युग्म:** `अनित्य देह` (नाशवान शरीर) बनाम `अनादि जीव` (अमर आत्मा)।',
          ],
        },
        {
          type: 'poetic-stanza',
          stanzaLabel: 'छंद 4 — सहानुभूति की महाविभूति और महात्मा बुद्ध की करुणा',
          dialectBadge: 'तत्सम खड़ी बोली',
          stanzaText: `सहानुभूति चाहिए, महाविभूति है यही;
वशीकृता सदैव है बनी हुई स्वयं मही।
विरुद्धवाद बुद्ध का दया-प्रवाह में बहा,
विनीत लोकवर्ग क्या न सामने झुका रहा?
अहा! वही उदार है परोपकार जो करे,
वही मनुष्य है कि जो मनुष्य के लिए मरे।।`,
          words: [
            {
              word: 'महाविभूति',
              hindiMeaning: 'सबसे बड़ी पूँजी / महान वैभव या संपत्ति',
              englishMeaning: 'supreme wealth / greatest treasure',
              grammarNote: 'कर्मधारय समास (महान है जो विभूति)',
              exampleSentence: 'दूसरों के प्रति सहानुभूति और करुणा ही मनुष्य की सबसे बड़ी महाविभूति है।',
            },
            {
              word: 'वशीकृता',
              hindiMeaning: 'वश में की हुई / अनुकूल बनी हुई',
              englishMeaning: 'won over / subdued by love',
              grammarNote: 'स्त्रीलिंग विशेषण (मही के लिए प्रयुक्त)',
              exampleSentence: 'करुणा और प्रेम से संपूर्ण पृथ्वी को वश में किया जा सकता है।',
            },
            {
              word: 'मही',
              hindiMeaning: 'पृथ्वी / धरती',
              englishMeaning: 'the earth',
              grammarNote: 'तत्सम संज्ञा • पर्याय: धरा, वसुंधरा, भूमि',
              exampleSentence: 'सहानुभूतिशील व्यक्ति के प्रति यह पृथ्वी सदैव अनुकूल रहती है।',
            },
            {
              word: 'विरुद्धवाद',
              hindiMeaning: 'विरोध करने वाले पारंपरिक विचार / रूढ़ियों का विरोध',
              englishMeaning: 'opposition / hostile orthodox arguments',
              grammarNote: 'तत्सम संज्ञा',
              exampleSentence: 'बुद्ध की करुणा के समक्ष समाज का सारा विरोध-भाव बह गया।',
            },
            {
              word: 'विनीत',
              hindiMeaning: 'विनम्र / झुका हुआ',
              englishMeaning: 'humble / respectful',
              grammarNote: 'तत्सम विशेषण • विलोम: उद्दंड / अभिमानी',
              exampleSentence: 'महापुरुषों के सामने सारा संसार विनीत होकर नमन करता है।',
            },
            {
              word: 'लोकवर्ग',
              hindiMeaning: 'जन-समुदाय / संसार के सभी लोग',
              englishMeaning: 'all sections of society / humanity',
              grammarNote: 'संबंध तत्पुरुष समास (लोक का वर्ग)',
              exampleSentence: 'सत्य और दया की शक्ति के आगे संपूर्ण लोकवर्ग झुक जाता है।',
            },
          ],
          prasang:
            'इस छंद में कवि सहानुभूति और करुणा को मनुष्य की सबसे बड़ी पूँजी बताते हुए महात्मा बुद्ध का उदाहरण प्रस्तुत करते हैं।',
          bhavarthHindi:
            'कवि कहते हैं कि मनुष्य के हृदय में दूसरों के प्रति सहानुभूति और दया का भाव होना चाहिए, क्योंकि यही मानव जीवन की सबसे बड़ी संपत्ति (महाविभूति) है। सहानुभूति और प्रेम से संपूर्ण पृथ्वी सदा वश में रहती है। उदाहरण के लिए, महात्मा बुद्ध ने दया और करुणा के कारण समाज की पुरानी रूढ़ियों व भेदभाव का विरोध किया, तो प्रारंभिक विरोध (विरुद्धवाद) भी उनकी करुणा की धारा में बह गया और सारा संसार विनम्र होकर उनके सामने झुक गया। सचमुच वही उदार है जो परोपकार करे।',
          englishHelper:
            'What a person truly needs is empathy (`सहानुभूति`) — that alone is the supreme wealth (`महाविभूति`), keeping the whole earth (`मही`) won over (`वशीकृता`). All opposition to the Buddha (`विरुद्धवाद`) swept away in the flood of his compassion, and all people bowed humbly (`विनीत`) before him.',
          poeticDevices: [
            '**प्रश्न अलंकार:** “विनीत लोकवर्ग क्या न सामने झुका रहा?” — उत्तर स्पष्ट है कि सभी झुक गए।',
            '**विशेष:** यह छंद दर्शाता है कि करुणा की शक्ति तलवार या धन से बड़ी होती है।',
          ],
        },
        {
          type: 'checkpoint',
          prompt:
            'CBSE Concept Check: ‘मनुष्यता’ कविता के अनुसार मनुष्य की सबसे बड़ी ‘महाविभूति’ (सबसे बड़ी पूँजी) क्या है?',
          options: [
            { id: 'a', label: 'अत्यधिक धन-संपत्ति और अस्त्र-शस्त्र', sublabel: 'Wealth & weapons' },
            { id: 'b', label: 'दया, करुणा और सहानुभूति का भाव', sublabel: 'Sympathy & compassion' },
            { id: 'c', label: 'ऊँचे महल और राज-पाट', sublabel: 'Palaces & kingdom' },
          ],
          correctIds: ['b'],
          successMsg: 'सही! “सहानुभूति चाहिए, महाविभूति है यही” — सहानुभूति व करुणा ही मानव की सर्वोत्तम पूँजी है।',
          hintMsg: 'छंद 4 की पहली पंक्ति पढ़ें: “सहानुभूति चाहिए, महाविभूति है यही”।',
        },
      ],
    },
    {
      id: 'manushyata-stanzas-5-to-8',
      title: '3. छंद 5 से 8: गर्व-रहित जीवन, परस्परावलंब, बंधुत्व और एकता का पथ',
      blocks: [
        {
          type: 'poetic-stanza',
          stanzaLabel: 'छंद 5 — धन के अहंकार का निषेध और ‘अनाथ कौन है यहाँ?’',
          dialectBadge: 'तत्सम + समास प्रधान',
          stanzaText: `रहो न भूल के कभी मदांध तुच्छ वित्त में,
सनाथ जान आपको करो न गर्व चित्त में।
अनाथ कौन है यहाँ? त्रिलोकनाथ साथ हैं,
दयालु दीनबंधु के बड़े विशाल हाथ हैं।
अतीव भाग्यहीन है अधीर भाव जो करे,
वही मनुष्य है कि जो मनुष्य के लिए मरे।।`,
          words: [
            {
              word: 'मदांध',
              hindiMeaning: 'अहंकार / घमंड से अंधा',
              englishMeaning: 'blinded by pride / arrogance',
              grammarNote: 'करण तत्पुरुष समास (मद से अंधा) + संधि: मद + अंध',
              exampleSentence: 'धन-दौलत पाकर मनुष्य को कभी मदांध नहीं होना चाहिए।',
            },
            {
              word: 'तुच्छ',
              hindiMeaning: 'छोटा / महत्वहीन / नगण्य',
              englishMeaning: 'petty / insignificant / trivial',
              grammarNote: 'तत्सम विशेषण • धन को यहाँ तुच्छ कहा गया है',
              exampleSentence: 'सच्ची मानवता के सामने भौतिक वैभव अत्यंत तुच्छ है।',
            },
            {
              word: 'वित्त',
              hindiMeaning: 'धन-संपत्ति / रुपया-पैसा',
              englishMeaning: 'wealth / money / material riches',
              grammarNote: 'तत्सम संज्ञा',
              exampleSentence: 'धन या वित्त स्थायी सुख नहीं दे सकता।',
            },
            {
              word: 'सनाथ',
              hindiMeaning: 'सहारे वाला / जिसके रक्षक या स्वामी साथ हों',
              englishMeaning: 'protected / having a guardian',
              grammarNote: 'विशेषण • विलोम: अनाथ',
              exampleSentence: 'ईश्वर की छत्रछाया में संपूर्ण सृष्टि स्वयं को सनाथ पाती है।',
            },
            {
              word: 'त्रिलोकनाथ',
              hindiMeaning: 'तीनों लोकों के स्वामी (परमात्मा)',
              englishMeaning: 'Lord of the Three Worlds (God)',
              grammarNote: 'द्विगु / बहुव्रीहि समास (तीन लोकों के नाथ = ईश्वर)',
              exampleSentence: 'संकट के समय त्रिलोकनाथ हर प्राणी की रक्षा करते हैं।',
            },
            {
              word: 'दीनबंधु',
              hindiMeaning: 'दीन-दुखियों के मित्र / सहायक (ईश्वर)',
              englishMeaning: 'friend and protector of the helpless',
              grammarNote: 'तत्पुरुष समास (दीनों के बंधु)',
              exampleSentence: 'ईश्वर को दीनबंधु कहा जाता है क्योंकि वे गरीबों के रक्षक हैं।',
            },
            {
              word: 'अधीर',
              hindiMeaning: 'धैर्यहीन / व्याकुल / उतावला',
              englishMeaning: 'impatient / restless / losing faith',
              grammarNote: 'नञ् तत्पुरुष (न धीर) • विलोम: धीर',
              exampleSentence: 'विपत्ति आने पर हमें अधीर नहीं, बल्कि धैर्यवान बने रहना चाहिए।',
            },
          ],
          prasang:
            'इस छंद में कवि ने धन-दौलत और अपनों के होने पर किए जाने वाले झूठे घमंड से बचने का उपदेश दिया है।',
          bhavarthHindi:
            'कवि समझाते हैं कि मनुष्य को भूलकर भी तुच्छ धन-संपत्ति के नशे में घमंड से अंधा (मदांध) नहीं होना चाहिए, और न ही स्वयं को सनाथ (बलवान व संरक्षित) समझकर मन में अभिमान करना चाहिए। इस संसार में कोई अनाथ नहीं है, क्योंकि सबके साथ तीनों लोकों के स्वामी (त्रिलोकनाथ) ईश्वर हैं; उन दयालु दीनबंधु के सहायता करने वाले हाथ अत्यंत विशाल हैं। सबसे बड़ा अभागा (अतीव भाग्यहीन) तो वह व्यक्ति है जो ईश्वर के रहते हुए भी धैर्य खो देता है और व्याकुल (अधीर) होता है।',
          englishHelper:
            'Never get blinded by arrogance (`मदांध`) over petty wealth (`तुच्छ वित्त`), nor boast in your heart thinking you have strong backing (`सनाथ`). Who is truly an orphan here? The Lord of the Three Worlds (`त्रिलोकनाथ`) is with everyone; the merciful friend of the poor (`दीनबंधु`) has vast protecting hands. Truly unfortunate is the one who still grows restless (`अधीर`)!',
          poeticDevices: [
            '**प्रश्न अलंकार:** “अनाथ कौन है यहाँ?” (कोई नहीं!)।',
            '**समास अभ्यास:** `मदांध` = करण तत्पुरुष; `त्रिलोकनाथ` = बहुव्रीहि/तत्पुरुष; `दीनबंधु` = संबंध तत्पुरुष।',
          ],
        },
        {
          type: 'poetic-stanza',
          stanzaLabel: 'छंद 6 — परस्परावलंब और देवताओं द्वारा स्वागत',
          dialectBadge: 'तत्सम प्रधान खड़ी बोली',
          stanzaText: `अनंत अंतरिक्ष में अनंत देव हैं खड़े,
समक्ष ही स्वबाहु जो बढ़ा रहे बड़े-बड़े।
परस्परावलंब से उठो तथा बढ़ो सभी,
अभी अमर्त्य-अंक में अपंक हो चढ़ो सभी।
रहो न यों कि एक से न काम और का सरे,
वही मनुष्य है कि जो मनुष्य के लिए मरे।।`,
          words: [
            {
              word: 'अनंत',
              hindiMeaning: 'जिसका कोई अंत न हो / असीम / असंख्य',
              englishMeaning: 'infinite / endless / countless',
              grammarNote: 'नञ् तत्पुरुष समास (न अंत) • पर्याय: असीम',
              exampleSentence: 'अनंत आकाश में असंख्य तारे चमक रहे हैं।',
            },
            {
              word: 'स्वबाहु',
              hindiMeaning: 'अपनी भुजाएँ / अपने हाथ',
              englishMeaning: 'their own arms',
              grammarNote: 'तत्सम समस्तपद (स्व = अपनी + बाहु = भुजा)',
              exampleSentence: 'परोपकारी मनुष्यों के स्वागत हेतु देवता अपनी भुजाएँ फैलाए खड़े हैं।',
            },
            {
              word: 'परस्परावलंब',
              hindiMeaning: 'एक-दूसरे का सहारा / आपसी सहयोग',
              englishMeaning: 'mutual support / interdependence',
              grammarNote: 'संधि: परस्पर + अवलंब (दीर्घ संधि)',
              exampleSentence: 'समाज की उन्नति परस्परावलंब और सहयोग से ही संभव है।',
            },
            {
              word: 'अमर्त्य-अंक',
              hindiMeaning: 'देवता की गोद (अमर लोक का आश्रय)',
              englishMeaning: 'lap of the immortals / gods’ embrace',
              grammarNote: '‘अंक’ के अनेकार्थी अर्थ: गोद, संख्या, नाटक का भाग',
              exampleSentence: 'निष्कलंक जीवन जीने वाले महापुरुष देवताओं की गोद में स्थान पाते हैं।',
            },
            {
              word: 'अपंक',
              hindiMeaning: 'कलंक-रहित / दोष-रहित / पवित्र',
              englishMeaning: 'spotless / free from blemish (pank = mud)',
              grammarNote: 'अ + पंक (पंक = कीचड़/कलंक) • विलोम: सकलंक',
              exampleSentence: 'हमें सदैव अपना चरित्र निष्कलंक और अपंक रखना चाहिए।',
            },
          ],
          prasang:
            'प्रस्तुत छंद में कवि मानव समाज को आपसी सहयोग (परस्परावलंब) से आगे बढ़ने और निष्कलंक जीवन जीने की प्रेरणा देते हैं।',
          bhavarthHindi:
            'कवि कहते हैं कि इस असीम अंतरिक्ष में असंख्य देवता अपनी विशाल भुजाएँ फैलाए परोपकारी मनुष्यों के स्वागत के लिए खड़े हैं। इसलिए हे मनुष्यों, तुम सब एक-दूसरे का सहारा बनकर (परस्परावलंब से) उन्नति के पथ पर उठो और आगे बढ़ो, ताकि इसी जीवन में कलंक-रहित (अपंक) बनकर देवताओं की गोद (अमर्त्य-अंक) में स्थान पा सको। जीवन ऐसा स्वार्थी न हो कि किसी एक से दूसरे का कोई काम ही न सधे — परोपकार में ही मानव जीवन की सार्थकता है।',
          englishHelper:
            'In boundless space, countless gods stand holding out their mighty arms to welcome noble humans. Rise and advance together through mutual support (`परस्परावलंब`), and ascend stainless (`अपंक`) into the lap of the immortals (`अमर्त्य-अंक`). Never live so uselessly that one person cannot help another!',
          poeticDevices: [
            '**पुनरुक्ति प्रकाश:** ‘बड़े-बड़े’; अनुप्रास: ‘अनंत अंतरिक्ष’, ‘अभी अमर्त्य-अंक में अपंक’।',
            '**अनेकार्थी शब्द Alert:** यहाँ **अंक** का अर्थ **गोद** है (संख्या नहीं)।',
          ],
        },
        {
          type: 'poetic-stanza',
          stanzaLabel: 'छंद 7 — ‘मनुष्य मात्र बंधु है’ और एकता का दर्शन',
          dialectBadge: 'वेदांतिक व तार्किक खड़ी बोली',
          stanzaText: `‘मनुष्य मात्र बंधु है’ यही बड़ा विवेक है,
पुराणपुरुष स्वयंभू पिता प्रसिद्ध एक है।
फलानुसार कर्म के अवश्य बाह्य भेद हैं,
परंतु अंतरैक्य में प्रमाणभूत वेद हैं।
अनर्थ है कि बंधु ही न बंधु की व्यथा हरे,
वही मनुष्य है कि जो मनुष्य के लिए मरे।।`,
          words: [
            {
              word: 'विवेक',
              hindiMeaning: 'सही-गलत को परखने की बुद्धि / सच्ची समझ',
              englishMeaning: 'wisdom / discrimination between right & wrong',
              grammarNote: 'तत्सम संज्ञा',
              exampleSentence: 'सबको अपना भाई समझना ही सबसे बड़ा विवेक है।',
            },
            {
              word: 'पुराणपुरुष',
              hindiMeaning: 'सृष्टि के आदि-पुरुष ईश्वर',
              englishMeaning: 'the Ancient/Primordial Being (God)',
              grammarNote: 'कर्मधारय समास (पुराण/प्राचीन हैं जो पुरुष)',
              exampleSentence: 'सभी प्राणियों के पिता एक ही पुराणपुरुष परमात्मा हैं।',
            },
            {
              word: 'स्वयंभू',
              hindiMeaning: 'स्वयं उत्पन्न होने वाले (परमात्मा)',
              englishMeaning: 'self-born / self-existent (God)',
              grammarNote: 'तत्सम विशेषण (स्वयं + भू)',
              exampleSentence: 'सृष्टि के रचयिता स्वयंभू ईश्वर सर्वशक्तिमान हैं।',
            },
            {
              word: 'बाह्य भेद',
              hindiMeaning: 'बाहरी अंतर (रंग, रूप, जाति, पद की भिन्नता)',
              englishMeaning: 'external/superficial differences',
              grammarNote: 'विशेषण + संज्ञा • विपरीत: आंतरिक एकता',
              exampleSentence: 'मनुष्यों में केवल बाहरी भेद हैं, भीतर से सभी समान हैं।',
            },
            {
              word: 'अंतरैक्य',
              hindiMeaning: 'आत्मा या अंतःकरण की एकता',
              englishMeaning: 'inner spiritual unity / oneness of souls',
              grammarNote: 'वृद्धि संधि: अंतः/अंतर + ऐक्य',
              exampleSentence: 'वेद भी सभी प्राणियों के बीच आंतरिक एकता (अंतरैक्य) को प्रमाणित करते हैं।',
            },
            {
              word: 'प्रमाणभूत',
              hindiMeaning: 'साक्षी / प्रमाण देने वाले',
              englishMeaning: 'authoritative witness / living proof',
              grammarNote: 'तत्सम विशेषण (प्रमाण + भूत)',
              exampleSentence: 'प्राचीन ग्रंथ मानव-एकता के प्रमाणभूत साक्षी हैं।',
            },
            {
              word: 'व्यथा',
              hindiMeaning: 'पीड़ा / कष्ट / दुख',
              englishMeaning: 'agony / sorrow / distress',
              grammarNote: 'तत्सम संज्ञा • पर्याय: पीड़ा, वेदना, कष्ट',
              exampleSentence: 'सच्चा मित्र अपने साथी की व्यथा दूर करने का प्रयास करता है।',
            },
          ],
          prasang:
            'इस छंद में कवि विश्व-बंधुत्व की दार्शनिक आधारशिला रखते हुए सभी मनुष्यों को एक ही परमपिता की संतान बताते हैं।',
          bhavarthHindi:
            'कवि कहते हैं कि “सभी मनुष्य आपस में भाई-भाई हैं” — यही संसार का सबसे बड़ा ज्ञान और विवेक है। क्योंकि हम सबका परमपिता एक ही आदि-पुरुष, स्वयं उत्पन्न होने वाला परमात्मा (स्वयंभू) है। यद्यपि अपने-अपने कर्मों के फल के अनुसार लोगों के बीच रूप-रंग, धन या परिस्थिति के बाहरी भेद अवश्य दिखाई देते हैं, परंतु भीतर से सभी की आत्मा एक है (अंतरैक्य) — इस सत्य के साक्षी स्वयं हमारे वेद हैं। इसलिए यदि एक भाई ही अपने दूसरे भाई की पीड़ा दूर न करे, तो इससे बड़ा अनर्थ क्या होगा!',
          englishHelper:
            'The highest wisdom (`बड़ा विवेक`) is realizing “All humans are brothers/kin.” Our primordial self-existent Father (`स्वयंभू पिता`) is one. External differences (`बाह्य भेद`) arise from actions and results, yet the Vedas bear witness (`प्रमाणभूत`) to our inner spiritual unity (`अंतरैक्य`). It is an outrage (`अनर्थ`) if a brother fails to ease a brother’s pain (`व्यथा`)!',
          poeticDevices: [
            '**केंद्रीय CBSE प्रश्न:** “मनुष्य मात्र बंधु है” से आशय — एक ही परमात्मा की संतान होने से भेदभाव निरर्थक है।',
            '**संधि लिंक:** `अंतरैक्य` (वृद्धि संधि), `फलानुसार` (दीर्घ संधि: फल + अनुसार)।',
          ],
        },
        {
          type: 'poetic-stanza',
          stanzaLabel: 'छंद 8 — अभीष्ट मार्ग पर एकता और सतर्कता के साथ बढ़ना',
          dialectBadge: 'तत्सम प्रधान खड़ी बोली',
          stanzaText: `चलो अभीष्ट मार्ग में सहर्ष खेलते हुए,
विपत्ति, विघ्न जो पड़ें उन्हें ढकेलते हुए।
घटे न हेलमेल हाँ, बढ़े न भिन्नता कभी,
अतर्क एक पंथ के सतर्क पंथ हों सभी।
तभी समर्थ भाव है कि तारता हुआ तरे,
वही मनुष्य है कि जो मनुष्य के लिए मरे।।`,
          words: [
            {
              word: 'अभीष्ट',
              hindiMeaning: 'इच्छित / मनचाहा / लक्ष्य का',
              englishMeaning: 'desired / cherished (goal/path)',
              grammarNote: 'दीर्घ संधि: अभि + इष्ट',
              exampleSentence: 'कठिन परिश्रम से विद्यार्थी अपने अभीष्ट लक्ष्य को प्राप्त कर लेता है।',
            },
            {
              word: 'सहर्ष',
              hindiMeaning: 'प्रसन्नता के साथ / खुशी-खुशी',
              englishMeaning: 'happily / cheerfully',
              grammarNote: 'अव्ययीभाव समास (हर्ष के सहित)',
              exampleSentence: 'हमें जीवन की चुनौतियों का सामना सहर्ष करना चाहिए।',
            },
            {
              word: 'विघ्न',
              hindiMeaning: 'बाधा / रुकावट / अड़चन',
              englishMeaning: 'obstacle / hindrance',
              grammarNote: 'तत्सम संज्ञा • पर्याय: बाधा, अवरोध',
              exampleSentence: 'साहसी मनुष्य मार्ग के सभी विघ्नों को पार कर जाते हैं।',
            },
            {
              word: 'अतर्क',
              hindiMeaning: 'तर्क से परे / निर्विवाद (बिना व्यर्थ बहस के)',
              englishMeaning: 'beyond petty dispute / unquestioned unity',
              grammarNote: 'नञ् तत्पुरुष (न तर्क)',
              exampleSentence: 'प्रेम और सहयोग का मार्ग तर्क-वितर्क से परे एक अटल सत्य है।',
            },
            {
              word: 'सतर्क पंथ',
              hindiMeaning: 'सावधान यात्री / सजग पथिक',
              englishMeaning: 'vigilant / alert travelers',
              grammarNote: 'विशेषण-विशेष्य पद (यहाँ पंथ = पथिक/राही के अर्थ में)',
              exampleSentence: 'प्रगति के पथ पर सभी नागरिकों को सतर्क यात्री बनकर चलना चाहिए।',
            },
            {
              word: 'समर्थ भाव',
              hindiMeaning: 'सच्ची सामर्थ्य या योग्यता (जो स्वयं तरते हुए दूसरों को भी तारे)',
              englishMeaning: 'true capability (saving others while crossing oneself)',
              grammarNote: 'विशेषण + संज्ञा',
              exampleSentence: 'स्वयं के साथ समाज का उद्धार करना ही सच्चा समर्थ भाव है।',
            },
          ],
          prasang:
            'कविता के अंतिम छंद में गुप्त जी सबको मिल-जुलकर, भेदभाव भुलाकर और बाधाओं को पार करते हुए जीवन-पथ पर आगे बढ़ने की प्रेरणा देते हैं।',
          bhavarthHindi:
            'कवि आह्वान करते हैं कि हमें अपने इच्छित लक्ष्य (अभीष्ट मार्ग) पर प्रसन्नतापूर्वक हँसते-खेलते चलना चाहिए और रास्ते में आने वाली सभी मुसीबतों व बाधाओं को धकेलते हुए आगे बढ़ना चाहिए। बस ध्यान रहे कि आपसी मेलजोल कम न हो और मतभेद (भिन्नता) कभी न बढ़ें। हम सभी तर्क-वितर्क से परे एक ही एकता के मार्ग के सावधान यात्री (सतर्क पंथ) बनें। सच्ची सामर्थ्य इसी में है कि मनुष्य स्वयं उन्नति/उद्धार प्राप्त करते हुए दूसरों का भी कल्याण (तारता हुआ तरे) करे!',
          englishHelper:
            'Walk your chosen path (`अभीष्ट मार्ग`) cheerfully (`सहर्ष`), pushing aside any calamities and obstacles (`विपत्ति, विघ्न`). Never let fellowship decline or divisions grow — let everyone be alert travelers (`सतर्क पंथ`) on one harmonious path beyond futile argument (`अतर्क`). True capability (`समर्थ भाव`) lies in uplifting others as you rise yourself!',
          poeticDevices: [
            '**अंत्यानुप्रास व यमक-सदृश प्रयोग:** “तारता हुआ तरे” — स्वयं पार उतरते हुए दूसरों को भी पार उतारे।',
            '**विशेष:** NCERT अभ्यास में `अतर्क एक पंथ के सतर्क पंथ हों सभी` का भावार्थ बार-बार पूछा जाता है।',
          ],
        },
        {
          type: 'notebook-mistake',
          studentName: 'सानिया',
          title: '‘अतर्क एक पंथ के सतर्क पंथ हों सभी’ की गलत व्याख्या',
          wrongWork: 'कवि कहते हैं कि बिना सोचे-समझे एक रास्ते पर आँख बंद करके चलते रहना चाहिए।',
          teacherFix:
            '‘अतर्क’ का अर्थ है— आपसी भेदभाव व व्यर्थ वाद-विवाद से मुक्त एकता का मार्ग, और ‘सतर्क पंथ’ का अर्थ है— एकता व भाईचारे के प्रति सावधान यात्री बनना।',
          whyWrong:
            '‘अतर्क’ का आशय अंधभक्ति नहीं है, बल्कि यह कि बंधुत्व और मानवता के लक्ष्य पर कोई व्यर्थ विवाद न हो, जबकि मार्ग की कठिनाइयों और एकता की रक्षा के प्रति सबको सजग (`सतर्क`) रहना है।',
        },
      ],
    },
    {
      id: 'manushyata-english-transcript',
      title: '4. संपूर्ण अंग्रेज़ी अनुवाद (Full English Transcript — All 8 Stanzas)',
      blocks: [
        {
          type: 'english-transcript',
          title: 'Manushyata (Humanity) — Complete Bilingual Transcript',
          intro:
            'Read Maithilisharan Gupt’s entire 8-stanza poem side-by-side in Hindi and English so Sanskritized words become crystal clear.',
          segments: [
            {
              label: 'छंद 1 — सुमृत्यु बनाम पशु-प्रवृत्ति',
              hindiOriginal: `विचार लो कि मर्त्य हो न मृत्यु से डरो कभी,
मरो, परंतु यों मरो कि याद जो करें सभी।
हुई न यों सुमृत्यु तो वृथा मरे, वृथा जिए,
मरा नहीं वही कि जो जिया न आपके लिए।
वही पशु-प्रवृत्ति है कि आप आप ही चरे,
वही मनुष्य है कि जो मनुष्य के लिए मरे।।`,
              englishText:
                'Reflect that you are mortal (`मर्त्य`), so never fear death;\ndie, yet die in such a way that everyone remembers you with honor.\nWithout such a noble death (`सुमृत्यु`), both dying and living are in vain (`वृथा`).\nOnly he is truly immortal who did not live merely for himself.\nIt is animal instinct (`पशु-प्रवृत्ति`) that one grazes only for oneself;\nonly he is truly human who lives and dies for fellow humans.',
            },
            {
              label: 'छंद 2 — उदार व्यक्ति की अमर कीर्ति',
              hindiOriginal: `उसी उदार की कथा सरस्वती बखानती,
उसी उदार से धरा कृतार्थ भाव मानती।
उसी उदार की सदा सजीव कीर्ति कूजती;
तथा उसी उदार को समस्त सृष्टि पूजती।
अखंड आत्म भाव जो असीम विश्व में भरे,
वही मनुष्य है कि जो मनुष्य के लिए मरे।।`,
              englishText:
                'Goddess Saraswati (literature and history) narrates the tale of that generous soul;\nthe earth (`धरा`) feels grateful (`कृतार्थ`) for the birth of that noble person.\nThat generous soul’s living fame echoes eternally,\nand the entire creation reveres that generous being.\nHe who fills the boundless universe with unbroken kinship (`अखंड आत्म भाव`),\nonly he is truly human who dies for fellow humans.',
            },
            {
              label: 'छंद 3 — रंतिदेव, दधीचि, शिबि व कर्ण का त्याग',
              hindiOriginal: `क्षुधार्त रंतिदेव ने दिया करस्थ थाल भी,
तथा दधीचि ने दिया परार्थ अस्थिजाल भी।
उशीनर क्षितीश ने स्वमांस दान भी किया,
सहर्ष वीर कर्ण ने शरीर-चर्म भी दिया।
अनित्य देह के लिए अनादि जीव क्या डरे?
वही मनुष्य है कि जो मनुष्य के लिए मरे।।`,
              englishText:
                'Starving King Rantideva gave away even the food plate held in his hand (`करस्थ थाल`),\nand Sage Dadhichi offered his very skeleton (`अस्थिजाल`) for others’ good (`परार्थ`).\nKing Shibi of Ushinar donated his own flesh (`स्वमांस`),\nand brave Karna cheerfully surrendered his inborn body-armor (`शरीर-चर्म`).\nWhy should the eternal soul (`अनादि जीव`) fear for a perishable body (`अनित्य देह`)?\nOnly he is truly human who dies for fellow humans.',
            },
            {
              label: 'छंद 4 — सहानुभूति की महाविभूति व बुद्ध',
              hindiOriginal: `सहानुभूति चाहिए, महाविभूति है यही;
वशीकृता सदैव है बनी हुई स्वयं मही।
विरुद्धवाद बुद्ध का दया-प्रवाह में बहा,
विनीत लोकवर्ग क्या न सामने झुका रहा?
अहा! वही उदार है परोपकार जो करे,
वही मनुष्य है कि जो मनुष्य के लिए मरे।।`,
              englishText:
                'Empathy (`सहानुभूति`) is what is needed — this alone is the supreme wealth (`महाविभूति`);\nby it, the entire earth (`मही`) remains eternally won over (`वशीकृता`).\nOpposition to the Buddha (`विरुद्धवाद`) washed away in the flood of his compassion;\ndid not humble humanity (`विनीत लोकवर्ग`) bow down before him?\nAh! Truly generous is he who practices benevolence (`परोपकार`);\nonly he is truly human who dies for fellow humans.',
            },
            {
              label: 'छंद 5 — धन-अभिमान का त्याग व त्रिलोकनाथ का सहारा',
              hindiOriginal: `रहो न भूल के कभी मदांध तुच्छ वित्त में,
सनाथ जान आपको करो न गर्व चित्त में।
अनाथ कौन है यहाँ? त्रिलोकनाथ साथ हैं,
दयालु दीनबंधु के बड़े विशाल हाथ हैं।
अतीव भाग्यहीन है अधीर भाव जो करे,
वही मनुष्य है कि जो मनुष्य के लिए मरे।।`,
              englishText:
                'Never, even by mistake, grow blinded by pride (`मदांध`) over petty wealth (`तुच्छ वित्त`);\nknowing you have protectors (`सनाथ`), do not nurture arrogance in your heart.\nWho is an orphan (`अनाथ`) here? The Lord of the Three Worlds (`त्रिलोकनाथ`) is with everyone;\nthe merciful friend of the poor (`दीनबंधु`) has vast sheltering hands.\nExceedingly unfortunate is he who turns impatient and loses faith;\nonly he is truly human who dies for fellow humans.',
            },
            {
              label: 'छंद 6 — परस्परावलंब व देवताओं का स्वागत',
              hindiOriginal: `अनंत अंतरिक्ष में अनंत देव हैं खड़े,
समक्ष ही स्वबाहु जो बढ़ा रहे बड़े-बड़े।
परस्परावलंब से उठो तथा बढ़ो सभी,
अभी अमर्त्य-अंक में अपंक हो चढ़ो सभी।
रहो न यों कि एक से न काम और का सरे,
वही मनुष्य है कि जो मनुष्य के लिए मरे।।`,
              englishText:
                'In infinite space stand countless gods,\nextending right before you their great welcoming arms.\nRise and advance together through mutual support (`परस्परावलंब`);\nascend spotless (`अपंक`) right now into the lap of the immortals (`अमर्त्य-अंक`).\nDo not live so uselessly that one person cannot aid another’s need;\nonly he is truly human who dies for fellow humans.',
            },
            {
              label: 'छंद 7 — मनुष्य मात्र बंधु है व अंतरैक्य',
              hindiOriginal: `‘मनुष्य मात्र बंधु है’ यही बड़ा विवेक है,
पुराणपुरुष स्वयंभू पिता प्रसिद्ध एक है।
फलानुसार कर्म के अवश्य बाह्य भेद हैं,
परंतु अंतरैक्य में प्रमाणभूत वेद हैं।
अनर्थ है कि बंधु ही न बंधु की व्यथा हरे,
वही मनुष्य है कि जो मनुष्य के लिए मरे।।`,
              englishText:
                '“Every human being is a brother/kin” — this is the highest wisdom (`बड़ा विवेक`);\nour primordial, self-existent Father (`पुराणपुरुष स्वयंभू`) is famously One.\nOwing to fruits of deeds, external differences (`बाह्य भेद`) surely exist,\nbut the Vedas stand as authoritative proof of inner spiritual unity (`अंतरैक्य`).\nIt is tragic injustice (`अनर्थ`) if one brother fails to soothe a brother’s pain (`व्यथा`);\nonly he is truly human who dies for fellow humans.',
            },
            {
              label: 'छंद 8 — अभीष्ट मार्ग पर एकता और सतर्कता',
              hindiOriginal: `चलो अभीष्ट मार्ग में सहर्ष खेलते हुए,
विपत्ति, विघ्न जो पड़ें उन्हें ढकेलते हुए।
घटे न हेलमेल हाँ, बढ़े न भिन्नता कभी,
अतर्क एक पंथ के सतर्क पंथ हों सभी।
तभी समर्थ भाव है कि तारता हुआ तरे,
वही मनुष्य है कि जो मनुष्य के लिए मरे।।`,
              englishText:
                'Walk along your cherished path (`अभीष्ट मार्ग`) cheerfully as in joyful play,\npushing aside whatever calamities and obstacles (`विपत्ति, विघ्न`) block the way.\nYes, let fellowship never diminish and divisions never grow;\nlet all become alert travelers (`सतर्क पंथ`) on one unquestioned path (`अतर्क एक पंथ`).\nTrue capability lies in liberating others while crossing over oneself;\nonly he is truly human who dies for fellow humans.',
            },
          ],
        },
      ],
    },
    {
      id: 'manushyata-word-meanings',
      title: '5. संपूर्ण शब्दार्थ संकलन (Chapter Word Meanings & Self-Test)',
      blocks: [
        {
          type: 'chapter-word-bank',
          title: 'मनुष्यता — संस्कृतनिष्ठ तत्सम शब्दार्थ व संधि-समास बैंक',
          intro:
            'यह पूरी पुस्तक के सबसे अधिक तत्सम शब्दों वाली कविता है। Search बॉक्स और `Self-Test` बटन का उपयोग कर शब्दार्थ पक्के करें।',
          extraWords: [
            {
              word: 'अनादि',
              hindiMeaning: 'जिसका कोई आरंभ न हो (अमर आत्मा)',
              englishMeaning: 'eternal / without beginning',
              grammarNote: 'नञ् तत्पुरुष समास (न आदि) • विलोम: सादि',
              exampleSentence: 'कवि ने जीवात्मा को अनादि और शरीर को अनित्य बताया है।',
            },
            {
              word: 'परोपकार',
              hindiMeaning: 'दूसरों की भलाई / निस्वार्थ सेवा',
              englishMeaning: 'benevolence / helping others selflessly',
              grammarNote: 'गुण स्वर संधि: पर + उपकार',
              exampleSentence: 'परोपकार करने से मनुष्य को सच्चा आत्मिक संतोष प्राप्त होता है।',
            },
            {
              word: 'अतीव',
              hindiMeaning: 'बहुत अधिक / अत्यंत',
              englishMeaning: 'exceedingly / extremely',
              grammarNote: 'दीर्घ स्वर संधि: अति + इव • संस्कृत अव्यय',
              exampleSentence: 'परमात्मा के रहते धैर्य खोने वाला व्यक्ति अतीव भाग्यहीन होता है।',
            },
            {
              word: 'रंतिदेव',
              hindiMeaning: 'एक परम दानी राजा (जिन्होंने स्वयं भूखे रहकर भी अपना भोजन अतिथि को दे दिया)',
              englishMeaning: 'King Rantideva (renowned for supreme charity)',
              grammarNote: 'पौराणिक व्यक्तिवाचक संज्ञा (NCERT शब्दार्थ व टिप्पणी)',
              exampleSentence: 'क्षुधार्त होते हुए भी राजा रंतिदेव ने याचक को अपना थाल सौंप दिया।',
            },
            {
              word: 'दधीचि',
              hindiMeaning: 'एक प्रसिद्ध ऋषि जिनकी अस्थियों (हड्डियों) से इंद्र का वज्र बना था',
              englishMeaning: 'Sage Dadhichi (who donated his bones for Indra’s Vajra)',
              grammarNote: 'पौराणिक व्यक्तिवाचक संज्ञा (NCERT शब्दार्थ व टिप्पणी)',
              exampleSentence: 'महर्षि दधीचि ने लोक-कल्याण के लिए अपने प्राण व अस्थियाँ दान कर दीं।',
            },
            {
              word: 'कर्ण',
              hindiMeaning: 'दान देने के लिए प्रसिद्ध कुंती-पुत्र (जिन्होंने जन्मजात कवच-कुंडल दान दे दिए)',
              englishMeaning: 'Karna, son of Kunti famed for boundless generosity',
              grammarNote: 'महाभारतकालीन व्यक्तिवाचक संज्ञा (NCERT शब्दार्थ व टिप्पणी)',
              exampleSentence: 'दानवीर कर्ण ने सहर्ष अपने शरीर-चर्म समान कवच-कुंडल दान कर दिए।',
            },
            {
              word: 'विरुद्धवाद बुद्ध का दया-प्रवाह में बहा',
              hindiMeaning: 'बुद्ध ने करुणावश उस समय की पारंपरिक मान्यताओं व रूढ़ियों का विरोध किया था',
              englishMeaning: 'opposition to Buddha’s revolt against orthodoxy dissolved in compassion',
              grammarNote: 'NCERT विशेष टिप्पणी (छंद 4)',
              exampleSentence: 'दया और करुणा से कठोर से कठोर विरोध भी शांत हो जाता है।',
            },
          ],
        },
      ],
    },
    {
      id: 'manushyata-muhavre',
      title: '6. पाठ के मुहावरे व वाक्य-प्रयोग (CBSE Muhavre Corner)',
      blocks: [
        {
          type: 'muhavre-list',
          title: 'मनुष्यता पाठ के प्रमुख मुहावरे व मुहावरेदार प्रयोग',
          note: 'CBSE में भाव-प्रधान वाक्यांशों व मुहावरों दोनों का प्रयोग वाक्य में स्वाभाविक व सटीक होना चाहिए।',
          items: [
            {
              idiom: 'मदांध होना (अहंकार से अंधा होना)',
              hindiMeaning: 'धन, पद या शक्ति के घमंड में उचित-अनुचित न सूझना',
              englishMeaning: 'to be blinded by wealth or arrogance',
              sourceLine: 'छंद 5: “रहो न भूल के कभी मदांध तुच्छ वित्त में”',
              examSentence:
                'अचानक अपार संपत्ति मिलने के बाद भी सज्जन व्यक्ति कभी **मदांध नहीं होता**।',
            },
            {
              idiom: 'हाथ बढ़ाना (सहयोग के लिए हाथ फैलाना)',
              hindiMeaning: 'सहायता या स्वागत के लिए तत्पर होकर आगे आना',
              englishMeaning: 'to extend a helping or welcoming hand',
              sourceLine: 'छंद 6: “समक्ष ही स्वबाहु जो बढ़ा रहे बड़े-बड़े”',
              examSentence:
                'प्राकृतिक आपदा के समय पीड़ितों की रक्षा के लिए पूरे देश ने मदद का **हाथ बढ़ाया**।',
            },
            {
              idiom: 'कीर्ति / गुणगान गूँजना',
              hindiMeaning: 'चारों ओर यश और सम्मान फैलना',
              englishMeaning: 'fame and glory resounding far and wide',
              sourceLine: 'छंद 2: “उसी उदार की सदा सजीव कीर्ति कूजती”',
              examSentence:
                'निस्वार्थ सेवा करने वाले समाज-सुधारकों का यश युगों तक **समाज में गूँजता है**।',
            },
            {
              idiom: 'व्यथा हरना',
              hindiMeaning: 'दूसरे का दुख या पीड़ा दूर करना',
              englishMeaning: 'to relieve someone’s sorrow or agony',
              sourceLine: 'छंद 7: “अनर्थ है कि बंधु ही न बंधु की व्यथा हरे”',
              examSentence:
                'सच्चा मित्र वही है जो संकट के समय अपने साथी की **व्यथा हर ले**।',
            },
            {
              idiom: 'प्रवाह में बह जाना',
              hindiMeaning: 'किसी प्रबल प्रभाव या भावना के आगे समस्त विरोध का समाप्त हो जाना',
              englishMeaning: 'opposition sweeping away before a strong wave (of compassion)',
              sourceLine: 'छंद 4: “विरुद्धवाद बुद्ध का दया-प्रवाह में बहा”',
              examSentence:
                'महात्मा गांधी के सत्य और अहिंसा के **प्रवाह में** बड़े-बड़े विरोध भी **बह गए**।',
            },
            {
              idiom: 'तारता हुआ तरना (स्वयं और दूसरों दोनों का कल्याण करना)',
              hindiMeaning: 'अपनी उन्नति के साथ-साथ दूसरों को भी आगे बढ़ाना व सहारा देना',
              englishMeaning: 'uplifting others while rising oneself',
              sourceLine: 'छंद 8: “तभी समर्थ भाव है कि तारता हुआ तरे”',
              examSentence:
                'अच्छे शिक्षक और मार्गदर्शक स्वयं ज्ञान अर्जित करते हुए विद्यार्थियों को भी सफलता के पार **तारते हुए तरते हैं**।',
            },
          ],
        },
      ],
    },
    {
      id: 'manushyata-samas',
      title: '7. पाठ के प्रमुख समास-विग्रह (Samas Breakdown)',
      blocks: [
        {
          type: 'samas-list',
          title: 'मनुष्यता — 8 बोर्ड-महत्वपूर्ण समास (तत्सम समास खज़ाना)',
          note: 'CBSE में **‘मदांध’**, **‘त्रिलोकनाथ’**, **‘परस्परावलंब’**, **‘अनंत/अनित्य’** और **‘सहर्ष’** जैसे तत्सम शब्दों के समास-विग्रह बार-बार पूछे जाते हैं।',
          items: [
            {
              samastPad: 'मदांध',
              vigrah: 'मद (अहंकार) से अंधा',
              samasType: 'करण तत्पुरुष समास',
              englishMeaning: 'blinded by pride',
              examTrap: '‘से’ (कारण/साधन अर्थ) आने के कारण **करण तत्पुरुष** (अपादान मत लिखें)।',
            },
            {
              samastPad: 'सुमृत्यु / महाविभूति',
              vigrah: 'सुंदर/सार्थक है जो मृत्यु / महान है जो विभूति',
              samasType: 'कर्मधारय समास',
              englishMeaning: 'noble death / supreme wealth',
              examTrap: 'पहला पद (‘सु’, ‘महा’) विशेषण और दूसरा संज्ञा (विशेष्य) होने से **कर्मधारय**।',
            },
            {
              samastPad: 'लोकहित / परार्थ',
              vigrah: 'लोक (जनता) के लिए हित / दूसरों के लिए अर्थ (भलाई)',
              samasType: 'संप्रदान तत्पुरुष समास',
              englishMeaning: 'public welfare / welfare of others',
            },
            {
              samastPad: 'त्रिलोकनाथ',
              vigrah: 'तीन लोकों के नाथ (स्वामी) हैं जो (ईश्वर)',
              samasType: 'बहुव्रीहि समास',
              englishMeaning: 'Lord of the Three Worlds (God)',
              examTrap: 'यदि केवल **‘त्रिलोक’** पूछा जाए (‘तीन लोकों का समूह’) → **द्विगु समास**; पर **‘त्रिलोकनाथ’** तीसरे विशेष अर्थ (परमात्मा) के कारण **बहुव्रीहि** बनता है!',
            },
            {
              samastPad: 'सहर्ष',
              vigrah: 'हर्ष के सहित (प्रसन्नता के साथ)',
              samasType: 'अव्ययीभाव समास',
              englishMeaning: 'with joy / cheerfully',
              examTrap: '‘स’ उपसर्ग (‘के सहित’ अर्थ) वाले पद (`सहर्ष`, `सपरिवार`, `सभय`) CBSE में प्रायः **अव्ययीभाव** माने जाते हैं (कुछ संदर्भों में सहबहुव्रीहि भी मिलता है — विग्रह स्पष्ट लिखें)।',
            },
            {
              samastPad: 'अनंत / अनित्य / अतर्क',
              vigrah: 'न अंत / न नित्य / न तर्क (या तर्क से परे)',
              samasType: 'नञ् तत्पुरुष समास',
              englishMeaning: 'endless / impermanent / beyond dispute',
              examTrap: '‘अ’ या ‘अन्’ निषेध उपसर्ग वाले शब्दों को **नञ् तत्पुरुष** लिखें (Course B में ‘तत्पुरुष’ श्रेणी के अंतर्गत आता है)।',
            },
            {
              samastPad: 'पुराणपुरुष',
              vigrah: 'पुराण (आदि/प्राचीन) हैं जो पुरुष',
              samasType: 'कर्मधारय समास',
              englishMeaning: 'the primordial Being',
            },
            {
              samastPad: 'दीनबंधु',
              vigrah: 'दीनों (गरीबों-दुखियों) के बंधु',
              samasType: 'संबंध तत्पुरुष समास',
              englishMeaning: 'friend of the poor (God)',
            },
          ],
        },
      ],
    },
    {
      id: 'manushyata-cbse-qa',
      title: '8. NCERT प्रश्न-अभ्यास व CBSE बोर्ड प्रश्नोत्तर (2–3 अंक)',
      blocks: [
        {
          type: 'qa',
          marks: 2,
          tag: 'NCERT प्रश्न-अभ्यास',
          question: 'कवि ने कैसी मृत्यु को सुमृत्यु कहा है? (NCERT क-1)',
          answer:
            'कवि ने उस मृत्यु को ‘सुमृत्यु’ कहा है जो दूसरों के हित, परोपकार और मानवता की सेवा करते हुए आए — जिसके कारण संसार उस व्यक्ति को उसके जाने के बाद भी युगों तक सम्मान के साथ याद रखे।',
          markingTip: 'परोपकार + मरणोपरांत कीर्ति/स्मरण दोनों बिंदु लिखें।',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'NCERT प्रश्न-अभ्यास',
          question: 'उदार व्यक्ति की पहचान कैसे हो सकती है? (NCERT क-2)',
          answer:
            'उदार व्यक्ति की पहचान उसके निस्वार्थ परोपकार और विश्व-बंधुत्व के भाव से होती है। वह संपूर्ण असीम संसार में अपनत्व का भाव भरता है, इतिहास व साहित्य (सरस्वती) सदैव उसका गुणगान करते हैं, पृथ्वी उसके प्रति कृतज्ञ होती है और समस्त सृष्टि उसकी पूजा करती है।',
          markingTip: 'परोपकार, संपूर्ण विश्व में अखंड आत्मभाव भरना व सजीव कीर्ति मुख्य बिंदु हैं।',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'NCERT प्रश्न-अभ्यास',
          question:
            'कवि ने दधीचि, कर्ण आदि महान व्यक्तियों का उदाहरण देकर ‘मनुष्यता’ के लिए क्या संदेश दिया है? (NCERT क-3)',
          answer:
            'रंतिदेव, दधीचि, राजा शिबि और कर्ण जैसे दानवीरों का उदाहरण देकर कवि यह संदेश देते हैं कि शरीर नश्वर (अनित्य) है, इसलिए उसकी चिंता छोड़कर हमें परोपकार, त्याग और लोक-कल्याण के लिए अपना सर्वस्व अर्पित करने को तत्पर रहना चाहिए।',
          markingTip: '‘अनित्य देह’ के लिए मोह न रखकर ‘परार्थ त्याग’ की प्रेरणा पर बल दें।',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'NCERT प्रश्न-अभ्यास',
          question:
            'कवि ने किन पंक्तियों में यह व्यक्त किया है कि हमें गर्व-रहित जीवन व्यतीत करना चाहिए? (NCERT क-4)',
          answer:
            'कवि ने पाँचवें छंद की निम्नलिखित पंक्तियों में गर्व-रहित जीवन जीने की प्रेरणा दी है—\n“रहो न भूल के कभी मदांध तुच्छ वित्त में,\nसनाथ जान आपको करो न गर्व चित्त में।”\nअर्थात तुच्छ धन-संपत्ति या अपनों के संरक्षण के बल पर मनुष्य को कभी अहंकार नहीं करना चाहिए, क्योंकि तीनों लोकों के स्वामी ईश्वर सबके रक्षक हैं।',
          markingTip: 'दोनों मूल पंक्तियाँ उद्धृत करके धन व संरक्षण के घमंड के त्याग का आशय लिखें।',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'NCERT प्रश्न-अभ्यास',
          question: '‘मनुष्य मात्र बंधु है’ से आप क्या समझते हैं? स्पष्ट कीजिए। (NCERT क-5)',
          answer:
            '‘मनुष्य मात्र बंधु है’ का आशय है कि संसार के सभी मनुष्य एक ही परमपिता (स्वयंभू पुराणपुरुष) की संतान होने के कारण आपस में भाई-भाई हैं। कर्म के अनुसार बाहरी भिन्नता हो सकती है, परंतु सबकी आत्मा एक है (अंतरैक्य)। अतः किसी भी बंधु को दूसरे बंधु का दुख हरने में संकोच नहीं करना चाहिए — यही सबसे बड़ा विवेक है।',
          markingTip: '‘एक पिता की संतान’, ‘बाह्य भेद’ व ‘अंतरैक्य’ मुख्य की-वर्ड हैं।',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'NCERT प्रश्न-अभ्यास',
          question: 'कवि ने सबको एक होकर चलने की प्रेरणा क्यों दी है? (NCERT क-6)',
          answer:
            'कवि ने सबको एक होकर चलने की प्रेरणा इसलिए दी है ताकि आपसी सहयोग (परस्परावलंब) से जीवन-मार्ग में आने वाली बाधाओं को आसानी से पार किया जा सके, समाज में भेदभाव न बढ़े और सभी एक-दूसरे का उद्धार करते हुए उन्नति प्राप्त कर सकें।',
          markingTip: '‘परस्परावलंब’ तथा ‘तारता हुआ तरे’ भाव को जोड़ने से उत्तर प्रभावी बनता है।',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'NCERT प्रश्न-अभ्यास',
          question:
            'व्यक्ति को किस प्रकार का जीवन व्यतीत करना चाहिए? इस कविता के आधार पर लिखिए। (NCERT क-7)',
          answer:
            'कविता के आधार पर व्यक्ति को मृत्यु से निर्भय होकर परोपकारी, उदार, सहानुभूतिपूर्ण और अहंकार-रहित जीवन व्यतीत करना चाहिए। उसे स्वार्थ की पशु-प्रवृत्ति त्यागकर सब मनुष्यों को अपना बंधु मानना चाहिए, आपसी सहयोग (परस्परावलंब) से आगे बढ़ना चाहिए तथा स्वयं उन्नति करते हुए दूसरों के कल्याण के लिए सतर्क भाव से कर्म करना चाहिए।',
          markingTip: 'निस्वार्थ सेवा, सहानुभूति, निरभिमान, विश्व-बंधुत्व व परस्परावलंब — 4-5 बिंदु लिखें।',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'NCERT प्रश्न-अभ्यास',
          question: '‘मनुष्यता’ कविता के माध्यम से कवि क्या संदेश देना चाहता है? (NCERT क-8)',
          answer:
            '‘मनुष्यता’ कविता के माध्यम से कवि स्वार्थ की पशु-प्रवृत्ति छोड़कर परोपकार, उदारता, सहानुभूति, अहंकार-रहित जीवन, विश्व-बंधुत्व और आपसी सहयोग के साथ जीने का संदेश देते हैं। सच्चा मनुष्य वही है जो नश्वर शरीर के मोह से ऊपर उठकर संपूर्ण मानवता के कल्याण में अपना जीवन सार्थक करे।',
          markingTip: '5 मूल गुण शामिल करें: परोपकार, उदारता, सहानुभूति, गर्व-हीनता, विश्व-बंधुत्व।',
        },
      ],
    },
  ],
};
