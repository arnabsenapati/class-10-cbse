import { Subtopic } from '../../../types/curriculum';

export const subtopicKarChaleHumFida: Subtopic = {
  id: 'hindi-kavya-06-kar-chale',
  slug: 'kar-chale-hum-fida',
  title: 'पाठ 6: कैफ़ी आज़मी — कर चले हम फ़िदा (Kar Chale Hum Fida)',
  subtitle:
    '1962 के भारत-चीन युद्ध व फिल्म ‘हकीकत’ की पृष्ठभूमि पर रचित अमर देशभक्ति गीत — उर्दू-फ़ारसी शब्दावली, प्रतीकार्थ और रामायण संदर्भ।',
  estimatedMinutes: 26,
  difficulty: 'Core CBSE',
  ncertSection: 'स्पर्श भाग-2 • काव्यखंड पाठ 6',
  learningObjectives: [
    'गीत की ऐतिहासिक पृष्ठभूमि (1962 युद्ध, फिल्म ‘हकीकत’, चेतन आनंद) और ‘साथियो’ संबोधन का महत्व समझना।',
    '‘सर हिमालय का हमने न झुकने दिया’, ‘धरती बनी है दुलहन’ और ‘सर से कफ़न बाँधना’ का भावार्थ लिखना।',
    'उर्दू-फ़ारसी काव्य शब्दों (`फ़िदा`, `नब्ज़`, `बाँकपन`, `रुत`, `रुस्वा`, `क़ाफ़िले` / `काफ़िले`, `फ़तह`, `जश्न`) का शुद्ध मानक हिंदी अर्थ व नुक्ता जानना।',
    'अंतिम छंद में रामायण के प्रतीकों (`खूँ से लकीर` = लक्ष्मण रेखा, `रावन` = शत्रु, `सीता का दामन` = भारत माता का सम्मान, `राम-लक्ष्मण` = देशवासी) की व्याख्या करना।',
  ],
  keywords: [
    'कर चले हम फ़िदा',
    'कैफ़ी आज़मी',
    'हकीकत',
    'सर हिमालय का',
    'बाँकपन',
    'धरती बनी है दुलहन',
    'कफ़न बाँधना',
    'सीता का दामन',
    '1962 युद्ध',
    'मुहावरे',
    'समास',
    'शब्दार्थ',
    'english transcript',
  ],
  sections: [
    {
      id: 'kar-chale-context',
      title: '1. गीतकार-परिचय, ऐतिहासिक पृष्ठभूमि व प्रतीक-तालिका',
      blocks: [
        {
          type: 'ncert-reference',
          title: 'पाठ 6: कैफ़ी आज़मी — कर चले हम फ़िदा — Official NCERT PDF',
          bookName: 'स्पर्श भाग-2 — काव्यखंड',
          pdfPath: '/ncert/hindi/jhsp106.pdf',
          pdfStartPage: 1,
          pdfEndPage: 5,
          note: 'Preview or open the official NCERT Sparsh Bhag-2 chapter PDF (गीतकार-परिचय, गीत, प्रश्न-अभ्यास व शब्दार्थ) alongside the Word Lens & bilingual transcript below.',
        },
        {
          type: 'quick-summary',
          title: 'कैफ़ी आज़मी व ‘कर चले हम फ़िदा’ — Exam Glance',
          bullets: [
            '**कवि / गीतकार:** कैफ़ी आज़मी (अतहर हुसैन रिज़वी, 1919–2002 ई.), प्रगतिशील उर्दू शायर व गीतकार।',
            '**ऐतिहासिक पृष्ठभूमि (NCERT क-1):** यह गीत **1962 के भारत-चीन युद्ध** की पृष्ठभूमि पर निर्माता-निर्देशक चेतन आनंद द्वारा बनाई गई फिल्म **‘हक़ीक़त’** के लिए लिखा गया था।',
            '**वक्ता और श्रोता:** युद्धभूमि में मातृभूमि की रक्षा करते हुए बलिदान दे रहे **भारतीय सैनिक** अपने देशवासियों (**‘साथियो’**) को संबोधित करके देश की सुरक्षा का उत्तरदायित्व सौंप रहे हैं।',
          ],
        },
        {
          type: 'table',
          caption: 'गीत के 5 प्रमुख काव्य-प्रतीक (Board Questions सीधे इनसे बनते हैं)',
          headers: ['काव्य-प्रतीक', 'किसका प्रतीक है? (Board Keyword)'],
          rows: [
            ['**हिमालय का सर**', 'भारत के स्वाभिमान, गौरव और अखंडता का प्रतीक'],
            ['**धरती बनी है दुलहन**', 'शहीदों के लाल रक्त रूपी जोड़े से सजी मातृभूमि (जिसकी रक्षा प्रेमी/रक्षक का कर्तव्य है)'],
            ['**सर से कफ़न बाँधना**', 'मौत की परवाह न कर बलिदान के लिए पूर्णतः तैयार रहना'],
            ['**खूँ से ज़मीं पर लकीर**', 'सीमा की रक्षा-रेखा (लक्ष्मण रेखा), जिसे कोई शत्रु पार न कर सके'],
            ['**सीता / रावन / राम-लक्ष्मण**', 'सीता = भारत माता का सम्मान; रावन = आक्रमणकारी शत्रु; राम-लक्ष्मण = देश की रक्षा करने वाले युवा देशवासी'],
          ],
        },
      ],
    },
    {
      id: 'kar-chale-stanzas',
      title: '2. संपूर्ण गीत — छंदवार Inline Word Lens व भावार्थ',
      blocks: [
        {
          type: 'poetic-stanza',
          stanzaLabel: 'छंद 1 — हिमालय का गौरव और मरते-मरते भी बना बाँकपन',
          dialectBadge: 'उर्दू-हिंदी मिश्रित देशभक्ति गीत',
          stanzaText: `कर चले हम फ़िदा जानो-तन साथियो
अब तुम्हारे हवाले वतन साथियो
साँस थमती गई, नब्ज़ जमती गई
फिर भी बढ़ते कदम को न रुकने दिया
कट गए सर हमारे तो कुछ गम नहीं
सर हिमालय का हमने न झुकने दिया
मरते-मरते रहा बाँकपन साथियो
अब तुम्हारे हवाले वतन साथियो`,
          words: [
            {
              word: 'फ़िदा',
              hindiMeaning: 'न्योछावर / बलिदान / अर्पित',
              englishMeaning: 'sacrificed / devoted unto death',
              grammarNote: 'अरबी आगत विशेषण (फ़ के नीचे नुक्ता)',
              exampleSentence: 'वीर सैनिकों ने मातृभूमि की रक्षा में अपने प्राण फ़िदा कर दिए।',
            },
            {
              word: 'जानो-तन',
              hindiMeaning: 'प्राण और शरीर (जान व तन)',
              englishMeaning: 'life and body',
              grammarNote: 'द्वंद्व समास (जान और तन) • उर्दू ‘ओ’ संयोजक',
              exampleSentence: 'देश के रक्षकों ने देश पर अपना जानो-तन अर्पित कर दिया।',
            },
            {
              word: 'हवाले',
              hindiMeaning: 'सौंपना / सुपुर्द करना',
              englishMeaning: 'entrusted to / in the care of',
              grammarNote: 'अरबी-उर्दू संज्ञा पद',
              exampleSentence: 'बलिदानी सैनिकों ने देश की रक्षा की बागडोर देशवासियों के हवाले की है।',
            },
            {
              word: 'वतन',
              hindiMeaning: 'देश / मातृभूमि',
              englishMeaning: 'homeland / motherland',
              grammarNote: 'अरबी आगत संज्ञा • पर्याय: देश, स्वदेश, मातृभूमि',
              exampleSentence: 'हमें अपने वतन की एकता और सम्मान की सदैव रक्षा करनी चाहिए।',
            },
            {
              word: 'नब्ज़',
              hindiMeaning: 'नाड़ी (बर्फीली ठंड में रक्त-प्रवाह थमने का संकेत)',
              englishMeaning: 'pulse (freezing in bitter mountain cold)',
              grammarNote: 'अरबी संज्ञा • 1962 हिमालय के बर्फीले मोर्चे का सजीव चित्रण',
              exampleSentence: 'भीषण शीतलहर में भी नब्ज़ जमने पर सैनिकों का साहस कम न हुआ।',
            },
            {
              word: 'सर हिमालय का',
              hindiMeaning: 'भारत के स्वाभिमान व गौरव का प्रतीक हिमालय',
              englishMeaning: 'the pride and dignity of India (symbolized by Himalayas)',
              grammarNote: 'प्रतीकात्मक प्रयोग (गौरव व संप्रभुता)',
              exampleSentence: 'भारतीय जवानों ने सीमा पर अडिग रहकर हिमालय का मस्तक ऊँचा रखा।',
            },
            {
              word: 'बाँकपन',
              hindiMeaning: 'वीरता का गर्व / टेढ़ापन रहित अद्भुत जोश व बलिदानी उत्साह',
              englishMeaning: 'fearless swagger / gallant youthful courage',
              grammarNote: 'तद्भव भाववाचक संज्ञा (‘बाँका’ + पन प्रत्यय)',
              exampleSentence: 'अंतिम साँस तक सैनिकों के चेहरे पर देशभक्ति का बाँकपन बना रहा।',
            },
          ],
          prasang:
            'प्रस्तुत पंक्तियाँ कैफ़ी आज़मी रचित देशभक्ति गीत ‘कर चले हम फ़िदा’ से ली गई हैं। इसमें युद्धभूमि में शहीद होते सैनिक देशवासियों को संबोधित कर अपना अंतिम संदेश दे रहे हैं।',
          bhavarthHindi:
            'शहीद होते हुए सैनिक अपने देशवासियों (‘साथियो’) से कहते हैं कि हमने अपने प्राण और शरीर देश पर न्योछावर कर दिए हैं; अब यह देश हम तुम्हें सौंपकर जा रहे हैं। हिमालय की बर्फीली पहाड़ियों पर लड़ते हुए हमारी साँसें रुकने लगीं और ठंड के कारण नाड़ी (नब्ज़) भी जमने लगी, फिर भी हमने अपने बढ़ते हुए कदमों को नहीं रुकने दिया। हमारे सिर कट गए तो हमें इसका कोई दुख नहीं है, पर हमें गर्व है कि हमने भारत के गौरव रूपी हिमालय का सिर शत्रु के आगे झुकने नहीं दिया। अंतिम साँस तक हमारे भीतर वीरता व बलिदान का जोश (बाँकपन) बना रहा। अब इस वतन की रक्षा तुम्हारे हाथों में है।',
          englishHelper:
            'We depart having sacrificed (`फ़िदा`) our lives and bodies (`जानो-तन`), friends; now the homeland (`वतन`) is entrusted to you (`तुम्हारे हवाले`). Even as breath faltered and pulses froze (`नब्ज़ जमती गई`), we never let our marching steps stop. We feel no grief though our heads fell — we never let the proud head of the Himalayas bow! That fearless gallantry (`बाँकपन`) stayed till our dying breath.',
          poeticDevices: [
            '**‘साथियो’ में अनुस्वार क्यों नहीं?** NCERT भाषा अध्ययन नियम: संबोधन के बहुवचन में अनुस्वार नहीं लगता (जैसे— भाइयो, बहिनो, साथियो)।',
            '**प्रतीक:** ‘सर हिमालय का झुकने न देना’ = देश के स्वाभिमान पर आँच न आने देना।',
          ],
        },
        {
          type: 'poetic-stanza',
          stanzaLabel: 'छंद 2 — जवानी की सार्थकता और दुलहन बनी धरती',
          dialectBadge: 'उर्दू-फ़ारसी शब्दावली प्रधान',
          stanzaText: `जिंदा रहने के मौसम बहुत हैं मगर
जान देने की रुत रोज़ आती नहीं
हुस्न और इश्क़ दोनों को रुस्वा करे
वो जवानी जो खूँ में नहाती नहीं
आज धरती बनी है दुलहन साथियो
अब तुम्हारे हवाले वतन साथियो`,
          words: [
            {
              word: 'रुत',
              hindiMeaning: 'ऋतु / मौसम / विशेष अवसर',
              englishMeaning: 'season / rare sacred occasion',
              grammarNote: 'तद्भव संज्ञा (‘ऋतु’ का तद्भव रूप)',
              exampleSentence: 'देश के लिए बलिदान होने का गौरवशाली अवसर (रुत) बार-बार नहीं आता।',
            },
            {
              word: 'हुस्न',
              hindiMeaning: 'सुंदरता / सौंदर्य',
              englishMeaning: 'beauty / grace',
              grammarNote: 'अरबी संज्ञा',
              exampleSentence: 'त्याग और कर्तव्य से मनुष्य का आंतरिक हुस्न निखर उठता है।',
            },
            {
              word: 'इश्क़',
              hindiMeaning: 'प्रेम / अनुराग (यहाँ देशप्रेम व कर्तव्य-प्रेम)',
              englishMeaning: 'love / passionate devotion (here: love for motherland)',
              grammarNote: 'अरबी संज्ञा',
              exampleSentence: 'देश से सच्चा इश्क़ रखने वाले जवान कर्तव्य से पीछे नहीं हटते।',
            },
            {
              word: 'रुस्वा',
              hindiMeaning: 'बदनाम / लज्जित / कलंकित',
              englishMeaning: 'disgraced / shamed',
              grammarNote: 'फ़ारसी विशेषण • मानक: बदनाम / अपमानित',
              exampleSentence: 'कायरता दिखाकर कोई भी सैनिक अपने देश की आन को रुस्वा नहीं होने देता।',
            },
            {
              word: 'खूँ में नहाती',
              hindiMeaning: 'देश-रक्षा में अपना लहू बहाना (बलिदान को तत्पर रहना)',
              englishMeaning: 'willing to bathe in one’s own blood for the nation',
              grammarNote: 'मुहावरेदार प्रयोग • ‘खूँ’ = खून/रक्त',
              exampleSentence: 'युद्धभूमि में खूँ में नहाकर भी वीर जवान विजय का विश्वास रखते हैं।',
            },
            {
              word: 'दुलहन',
              hindiMeaning: 'नववधू (खून की लालिमा में सजी धरती का रूपक)',
              englishMeaning: 'bride adorned in crimson (metaphor for blood-stained soil)',
              grammarNote: 'रूपक / मानवीकरण प्रयोग',
              exampleSentence: 'शहीदों के रक्त से लाल हुई मातृभूमि मानो लाल जोड़े में सजी दुलहन दिखती है।',
            },
          ],
          prasang:
            'इस छंद में सैनिक युवाओं को संबोधित करते हुए बताते हैं कि मातृभूमि के लिए मर मिटने का अवसर सौभाग्य से ही मिलता है।',
          bhavarthHindi:
            'सैनिक कहते हैं कि जीवन जीने और सुख मनाने के अवसर तो बहुत मिल जाते हैं, परंतु मातृभूमि की रक्षा में प्राण न्योछावर करने का पावन अवसर (रुत) रोज़-रोज़ नहीं आता। वह जवानी जो देश की रक्षा के लिए युद्धभूमि में खून से नहाने से कतराती है, वह जवानी की सुंदरता (हुस्न) और प्रेम (इश्क़) दोनों को कलंकित (रुस्वा) करती है। आज हमारे रक्त से लाल होकर यह धरती किसी लाल जोड़े में सजी दुलहन की भाँति सुशोभित हो रही है — इसकी रक्षा का भार अब तुम्हारे हाथों में है।',
          englishHelper:
            'There are plenty of seasons to stay alive, yet the season (`रुत`) to lay down one’s life comes rarely. A youth that refuses to bleed for its homeland (`खूँ में नहाती नहीं`) brings shame (`रुस्वा`) to both beauty (`हुस्न`) and love (`इश्क़`). Today the soil has dressed like a crimson bride (`दुलहन`) — look after this homeland now!',
          poeticDevices: [
            '**‘धरती को दुलहन’ क्यों कहा? (NCERT क-3):** जिस प्रकार दुलहन लाल जोड़े में सजती है और उसकी रक्षा का वचन लिया जाता है, उसी प्रकार शहीदों के लाल रक्त से धरती लाल जोड़े-सी सजी है जिसकी रक्षा देशवासियों का कर्तव्य है।',
          ],
        },
        {
          type: 'poetic-stanza',
          stanzaLabel: 'छंद 3 — कुर्बानियों के काफ़िले और सर पर कफ़न',
          dialectBadge: 'उर्दू-हिंदी ओजस्वी काव्य',
          stanzaText: `राह कुर्बानियों की न वीरान हो
तुम सजाते ही रहना नए काफ़िले
फ़तह का जश्न इस जश्न के बाद है
ज़िंदगी मौत से मिल रही है गले
बाँध लो अपने सर से कफ़न साथियो
अब तुम्हारे हवाले वतन साथियो`,
          words: [
            {
              word: 'कुर्बानियों',
              hindiMeaning: 'बलिदानों / त्यागों की',
              englishMeaning: 'of sacrifices / martyrdom',
              grammarNote: 'अरबी आगत संज्ञा (बहुवचन)',
              exampleSentence: 'देश की आज़ादी अनगिनत वीरों की कुर्बानियों का परिणाम है।',
            },
            {
              word: 'वीरान',
              hindiMeaning: 'सूना / खाली / जनशून्य',
              englishMeaning: 'deserted / empty / barren',
              grammarNote: 'फ़ारसी विशेषण • विलोम: आबाद / भरा-पूरा',
              exampleSentence: 'हमें ध्यान रखना होगा कि देश-सेवा का मार्ग कभी वीरान न पड़े।',
            },
            {
              word: 'काफ़िले',
              hindiMeaning: 'यात्रियों या बलिदानियों के दल / समूह',
              englishMeaning: 'caravans / groups of marching volunteers',
              grammarNote: 'अरबी आगत संज्ञा (एकवचन: काफ़िला)',
              exampleSentence: 'शहीदों की प्रेरणा से देशभक्त युवाओं के नए काफ़िले आगे बढ़ते रहे।',
            },
            {
              word: 'फ़तह',
              hindiMeaning: 'जीत / विजय',
              englishMeaning: 'victory / triumph',
              grammarNote: 'अरबी संज्ञा • पर्याय: विजय, जय',
              exampleSentence: 'सैनिकों के अदम्य साहस के बाद देश को फ़तह प्राप्त हुई।',
            },
            {
              word: 'जश्न',
              hindiMeaning: 'उत्सव / खुशी मनाना',
              englishMeaning: 'celebration / jubilation',
              grammarNote: 'फ़ारसी संज्ञा (यहाँ बलिदान को भी एक उत्सव कहा गया है)',
              exampleSentence: 'युद्ध में विजय मिलने पर पूरे राष्ट्र में जश्न मनाया गया।',
            },
            {
              word: 'सर से कफ़न',
              hindiMeaning: 'मृत्यु से भयभीत न होकर बलिदान के लिए तैयार रहना',
              englishMeaning: 'tying one’s shroud (ready to die without fear)',
              grammarNote: 'मुहावरा: ‘सर पर कफ़न बाँधना’',
              exampleSentence: 'क्रांतिकारी नौजवान सर पर कफ़न बाँधकर स्वतंत्रता के लिए निकल पड़े।',
            },
          ],
          prasang:
            'इस छंद में सैनिक देश के नौजवानों से आह्वान करते हैं कि बलिदान की यह परंपरा कभी रुकने न पाए।',
          bhavarthHindi:
            'सैनिक कहते हैं कि देश पर बलिदान होने की यह राह कभी सूनी (वीरान) नहीं पड़नी चाहिए। हमारे जाने के बाद तुम देशभक्तों के नए-नए दल (काफ़िले) तैयार करके इस राह को सजाते रहना। क्योंकि विजय (फ़तह) का वास्तविक उत्सव इस बलिदान के उत्सव के बाद ही आता है। आज युद्धभूमि में हमारी ज़िंदगी स्वयं हँसते-हँसते मौत से गले मिल रही है। हे साथियो, तुम भी मृत्यु का भय त्यागकर अपने सिर पर कफ़न बाँध लो (बलिदान को तत्पर रहो), क्योंकि अब यह वतन तुम्हारे हवाले है।',
          englishHelper:
            'May the path of sacrifice (`कुर्बानियों`) never grow deserted (`वीरान`) — keep adorning it with fresh caravans (`काफ़िले`) of brave youths! Victory’s celebration (`फ़तह का जश्न`) follows this celebration of sacrifice. Today life itself embraces death; tie the shroud around your heads (`सर पर कफ़न बाँधना` = fear no death), friends — the homeland is yours to guard!',
          poeticDevices: [
            '**मुहावरे:** ‘मौत से गले मिलना’ (बलिदान को सहर्ष स्वीकारना), ‘सर से कफ़न बाँधना’ (प्राण देने को तैयार रहना)।',
            '**‘दो जश्न’ कौन-से हैं?** पहला जश्न = बलिदान का पर्व (मौत से गले मिलना); दूसरा जश्न = जीत (फ़तह) का उत्सव।',
          ],
        },
        {
          type: 'poetic-stanza',
          stanzaLabel: 'छंद 4 — खूँ से लकीर और रामायण के प्रतीकों का आह्वान',
          dialectBadge: 'पौराणिक-प्रतीक आधारित देशभक्ति',
          stanzaText: `खींच दो अपने खूँ से ज़मीं पर लकीर
इस तरफ़ आने पाए न रावन कोई
तोड़ दो हाथ अगर हाथ उठने लगे
छू न पाए सीता का दामन कोई
राम भी तुम, तुम्हीं लक्ष्मण साथियो
अब तुम्हारे हवाले वतन साथियो।`,
          words: [
            {
              word: 'खूँ',
              hindiMeaning: 'खून / रक्त / बलिदान',
              englishMeaning: 'blood (sacrifice)',
              grammarNote: 'फ़ारसी संज्ञा (‘खून’ का काव्य-संक्षिप्त रूप)',
              exampleSentence: 'शहीदों ने अपने खूँ से मातृभूमि की सीमाओं की रक्षा की।',
            },
            {
              word: 'ज़मीं',
              hindiMeaning: 'ज़मीन / धरती / सीमा',
              englishMeaning: 'land / soil / border ground',
              grammarNote: 'फ़ारसी संज्ञा (ज़मीन)',
              exampleSentence: 'एक इंच ज़मीं पर भी शत्रु का अधिकार नहीं होने दिया जाएगा।',
            },
            {
              word: 'लकीर',
              hindiMeaning: 'रेखा (लक्ष्मण-रेखा रूपी अभेद्य सीमा-रेखा)',
              englishMeaning: 'line / boundary (alluding to Lakshman Rekha)',
              grammarNote: 'तद्भव संज्ञा • प्रतीक: अजेय सीमा-रक्षा रेखा',
              exampleSentence: 'भारतीय सीमा पर खिंची रक्षा की लकीर को कोई शत्रु पार नहीं कर सकता।',
            },
            {
              word: 'रावन',
              hindiMeaning: 'रावण (प्रतीक: अत्याचारी शत्रु / विदेशी आक्रमणकारी)',
              englishMeaning: 'Ravana (symbol of aggressive invaders/enemies)',
              grammarNote: 'व्यक्तिवाचक संज्ञा का जातिवाचक/प्रतीक प्रयोग',
              exampleSentence: 'देश के सम्मान को क्षति पहुँचाने वाले किसी भी रावण को बख्शा नहीं जाएगा।',
            },
            {
              word: 'सीता',
              hindiMeaning: 'माता सीता (प्रतीक: भारत माता की पवित्रता व सम्मान)',
              englishMeaning: 'Sita (symbol of Mother India’s honor & sanctity)',
              grammarNote: 'पौराणिक प्रतीक',
              exampleSentence: 'हर नागरिक का कर्तव्य है कि भारत माता रूपी सीता के सम्मान की रक्षा करे।',
            },
            {
              word: 'दामन',
              hindiMeaning: 'आँचल / वस्त्र का छोर (प्रतीक: अस्मिता व स्वाभिमान)',
              englishMeaning: 'hem of garment / honor & dignity',
              grammarNote: 'फ़ारसी संज्ञा • ‘दामन छूना’ = सम्मान को ठेस पहुँचाना',
              exampleSentence: 'सजग प्रहरी कभी अपने देश के स्वाभिमान के दामन पर आँच नहीं आने देते।',
            },
            {
              word: 'राम',
              hindiMeaning: 'श्रीराम (प्रतीक: धर्म, नेतृत्व व रक्षा के आदर्श नायक — देशवासी)',
              englishMeaning: 'Lord Rama (symbol of righteous protector — the citizens)',
              grammarNote: 'पौराणिक प्रतीक',
              exampleSentence: 'मुश्किल घड़ी में प्रत्येक देशवासी को राम और लक्ष्मण की भाँति कर्तव्य निभाना चाहिए।',
            },
            {
              word: 'लक्ष्मण',
              hindiMeaning: 'लक्ष्मण (प्रतीक: सीमा-रक्षक व अडिग प्रहरी — देशवासी)',
              englishMeaning: 'Lakshmana (symbol of vigilant border guardian)',
              grammarNote: 'पौराणिक प्रतीक',
              exampleSentence: 'देश की रक्षा में हर युवा को लक्ष्मण के समान तत्पर रहना होगा।',
            },
          ],
          prasang:
            'गीत के अंतिम छंद में सैनिक भारतीय नागरिकों को रामायण के आदर्श रक्षकों (राम व लक्ष्मण) के रूप में देखते हुए देश की सीमा व अस्मिता की रक्षा का दायित्व सौंपते हैं।',
          bhavarthHindi:
            'सैनिक देशवासियों का आह्वान करते हुए कहते हैं कि तुम अपने रक्त से देश की सीमा-ज़मीन पर ऐसी लक्ष्मण-रेखा (लकीर) खींच दो कि कोई भी शत्रु रूपी रावण इस तरफ़ कदम न रख सके। यदि कोई शत्रु भारत माता रूपी सीता के सम्मान (दामन) को छूने के लिए हाथ उठाए, तो उसके हाथ तोड़ दो। हे साथियो! आज इस भारत माता की रक्षा करने वाले राम भी तुम ही हो और लक्ष्मण भी तुम्हीं हो— अब यह संपूर्ण वतन तुम्हारे हवाले है।',
          englishHelper:
            'Draw a line (`लकीर` = Lakshman Rekha) on the border soil (`ज़मीं`) with your own blood (`खूँ`) so no enemy Ravana (`रावन`) dares step inside. Break any hand raised to touch Mother India’s honor (`सीता का दामन`). You yourselves are Rama and you are Lakshmana, friends — now the homeland is entrusted to you!',
          poeticDevices: [
            '**पौराणिक रूपक / प्रतीकात्मकता:** पूरी छंद में रामायण की रक्षा-कथा के प्रतीकों (लक्ष्मण-रेखा, रावण, सीता, राम-लक्ष्मण) से देशभक्ति का उच्चतम स्तर रचा गया है।',
          ],
        },
        {
          type: 'notebook-mistake',
          studentName: 'अंशिका',
          title: '‘साथियो’ की वर्तनी व गीत के वक्ता की पहचान में त्रुटि',
          wrongWork: 'कवि कैफ़ी आज़मी अपनी कक्षा के साथियों से कह रहे हैं कि हमारे साथियोँ को लड़ना चाहिए।',
          teacherFix:
            'गीत में ‘साथियो’ शब्द **बलिदानी सैनिकों** द्वारा **समस्त देशवासियों (आने वाली पीढ़ी)** के लिए प्रयुक्त हुआ है; और संबोधन बहुवचन ‘साथियो’ पर **अनुस्वार (बिंदी) नहीं** लगती।',
          whyWrong:
            'NCERT पाठ की टिप्पणी तथा प्रश्न (क-5) दोनों यही पूछते हैं— वक्ता **देश के सैनिक** हैं और श्रोता/साथी **देशवासी** हैं।',
        },
      ],
    },
    {
      id: 'kar-chale-english-transcript',
      title: '3. संपूर्ण अंग्रेज़ी अनुवाद (Full English Transcript — Complete Song)',
      blocks: [
        {
          type: 'english-transcript',
          title: 'Kar Chale Hum Fida — Complete Bilingual Transcript',
          intro:
            'Understand Kaifi Azmi’s immortal 1962 war-front farewell song line-by-line alongside every Urdu-Persian nuance.',
          segments: [
            {
              label: 'छंद 1 — हिमालय का गौरव व अंतिम साँस तक बाँकपन',
              hindiOriginal: `कर चले हम फ़िदा जानो-तन साथियो
अब तुम्हारे हवाले वतन साथियो
साँस थमती गई, नब्ज़ जमती गई
फिर भी बढ़ते कदम को न रुकने दिया
कट गए सर हमारे तो कुछ गम नहीं
सर हिमालय का हमने न झुकने दिया
मरते-मरते रहा बाँकपन साथियो
अब तुम्हारे हवाले वतन साथियो`,
              englishText:
                'We depart having sacrificed (`फ़िदा`) our lives and bodies (`जानो-तन`), companions;\nnow our homeland (`वतन`) is entrusted to your care, companions.\nThough breath kept halting and our pulses froze (`नब्ज़ जमती गई`),\nstill we never let our marching steps stop.\nIf our heads were severed, there is no sorrow —\nwe never let the proud head of the Himalayas bow.\nEven while dying, our gallant fearlessness (`बाँकपन`) remained intact, companions;\nnow the homeland is entrusted to you, companions.',
            },
            {
              label: 'छंद 2 — जवानी की कसौटी व लाल जोड़े में सजी धरती',
              hindiOriginal: `जिंदा रहने के मौसम बहुत हैं मगर
जान देने की रुत रोज़ आती नहीं
हुस्न और इश्क़ दोनों को रुस्वा करे
वो जवानी जो खूँ में नहाती नहीं
आज धरती बनी है दुलहन साथियो
अब तुम्हारे हवाले वतन साथियो`,
              englishText:
                'There are many seasons to remain alive, yet\nthe season (`रुत`) to lay down one’s life does not come every day.\nThat youth which refuses to bathe in blood (`खूँ में नहाती नहीं`) for duty\nbrings disgrace (`रुस्वा`) upon both beauty (`हुस्न`) and love (`इश्क़`).\nToday the motherland has adorned herself like a crimson bride (`दुलहन`), companions;\nnow the homeland is entrusted to you, companions.',
            },
            {
              label: 'छंद 3 — बलिदान का काफ़िला व सर पर कफ़न',
              hindiOriginal: `राह कुर्बानियों की न वीरान हो
तुम सजाते ही रहना नए काफ़िले
फ़तह का जश्न इस जश्न के बाद है
ज़िंदगी मौत से मिल रही है गले
बाँध लो अपने सर से कफ़न साथियो
अब तुम्हारे हवाले वतन साथियो`,
              englishText:
                'May the path of sacrifices (`कुर्बानियों`) never turn deserted (`वीरान`);\nkeep adorning it with new caravans (`काफ़िले`) of brave martyrs.\nThe festival of victory (`फ़तह का जश्न`) follows right after this festival (of martyrdom);\ntoday life itself is embracing death (`मौत से गले मिलना`).\nTie the shroud around your heads (`सर से कफ़न बाँध लो`), companions;\nnow the homeland is entrusted to you, companions.',
            },
            {
              label: 'छंद 4 — खूँ से लकीर, सीता-रावन व राम-लक्ष्मण आह्वान',
              hindiOriginal: `खींच दो अपने खूँ से ज़मीं पर लकीर
इस तरफ़ आने पाए न रावन कोई
तोड़ दो हाथ अगर हाथ उठने लगे
छू न पाए सीता का दामन कोई
राम भी तुम, तुम्हीं लक्ष्मण साथियो
अब तुम्हारे हवाले वतन साथियो।`,
              englishText:
                'Draw a line (`लकीर` = Lakshman Rekha) upon the border earth (`ज़मीं`) with your own blood,\nso that no enemy Ravana (`रावन`) may dare step across to this side.\nBreak any hand if a hand dares rise against her,\nso that no invader may touch Mother India’s Sita-like honor (`सीता का दामन`).\nYou are Rama and you yourselves are Lakshmana, companions;\nnow the homeland is entrusted to you, companions.',
            },
          ],
        },
      ],
    },
    {
      id: 'kar-chale-word-meanings',
      title: '4. संपूर्ण शब्दार्थ संकलन (Chapter Word Meanings & Self-Test)',
      blocks: [
        {
          type: 'chapter-word-bank',
          title: 'कर चले हम फ़िदा — उर्दू-फ़ारसी व देशभक्ति शब्दार्थ तालिका',
          intro:
            'नुक्ता वाले शब्द (`फ़िदा`, `ज़मीं`, `फ़तह`, `खूँ`) और रामायण प्रतीकों के अर्थ Search व Self-Test द्वारा पक्के करें।',
          extraWords: [
            {
              word: 'थमती',
              hindiMeaning: 'रुकती / मंद पड़ती हुई',
              englishMeaning: 'halting / slowing down',
              grammarNote: 'अकर्मक क्रिया (वर्तमान कृदंत)',
              exampleSentence: 'बर्फीली ऊँचाई पर ऑक्सीजन की कमी से सैनिकों की साँस थमती जा रही थी।',
            },
            {
              word: 'गम',
              hindiMeaning: 'दुख / शोक / अफ़सोस',
              englishMeaning: 'sorrow / regret',
              grammarNote: 'अरबी आगत संज्ञा (उर्दू में ग़म)',
              exampleSentence: 'देश की रक्षा में प्राण गंवाने वाले वीरों को अपने कटे सिर का कोई गम नहीं।',
            },
          ],
        },
      ],
    },
    {
      id: 'kar-chale-muhavre',
      title: '5. पाठ के मुहावरे व वाक्य-प्रयोग (CBSE Muhavre Corner)',
      blocks: [
        {
          type: 'muhavre-list',
          title: 'कर चले हम फ़िदा — #1 CBSE बोर्ड मुहावरा खज़ाना',
          note: '**‘सर पर कफ़न बाँधना’**, **‘मौत को गले लगाना’** और **‘सर न झुकने देना’** CBSE बोर्ड व्याकरण खंड के सर्वाधिक लोकप्रिय मुहावरे हैं!',
          items: [
            {
              idiom: 'सर से कफ़न बाँधना (सर पर कफ़न बाँधना)',
              hindiMeaning: 'मृत्यु से भयभीत न होकर बलिदान देने के लिए सदैव तैयार रहना',
              englishMeaning: 'to tie a shroud on one’s head (be fearless unto death)',
              sourceLine: 'छंद 3: “बाँध लो अपने सर से कफ़न साथियो”',
              examSentence:
                'भगत सिंह और उनके क्रांतिकारी साथी **सर पर कफ़न बाँधकर** आज़ादी के संग्राम में कूद पड़े।',
            },
            {
              idiom: 'सर न झुकने देना',
              hindiMeaning: 'गौरव, सम्मान और स्वाभिमान पर तनिक भी आँच न आने देना',
              englishMeaning: 'never letting national pride or honor bow down',
              sourceLine: 'छंद 1: “सर हिमालय का हमने न झुकने दिया”',
              examSentence:
                'भारतीय जवानों ने अपने प्राण न्योछावर कर दिए, पर शत्रु के आगे देश का **सर झुकने नहीं दिया**।',
            },
            {
              idiom: 'मौत से गले मिलना (मौत को गले लगाना)',
              hindiMeaning: 'हँसते-हँसते कर्तव्य के लिए मृत्यु को स्वीकार कर लेना',
              englishMeaning: 'to embrace death willingly with courage',
              sourceLine: 'छंद 3: “ज़िंदगी मौत से मिल रही है गले”',
              examSentence:
                'सीमा पर तैनात वीर सैनिक मातृभूमि की रक्षा में **मौत से गले मिलने** से भी नहीं घबराते।',
            },
            {
              idiom: 'खूँ में नहाना (लहूलुहान होना)',
              hindiMeaning: 'देश-रक्षा या संघर्ष में अपना रक्त बहाने के लिए तत्पर रहना',
              englishMeaning: 'to be bathed in blood in valiant combat/sacrifice',
              sourceLine: 'छंद 2: “वो जवानी जो खूँ में नहाती नहीं”',
              examSentence:
                'सच्चा देशभक्त आवश्यकता पड़ने पर राष्ट्र की रक्षा हेतु **खूँ में नहाने** से कभी पीछे नहीं हटता।',
            },
            {
              idiom: 'हाथ तोड़ देना / हाथ उठने न देना',
              hindiMeaning: 'दुस्साहस करने वाले शत्रु की शक्ति को पूरी तरह कुचल देना',
              englishMeaning: 'to crush the aggressor’s daring / shatter enemy hands raised in aggression',
              sourceLine: 'छंद 4: “तोड़ दो हाथ अगर हाथ उठने लगे”',
              examSentence:
                'यदि कोई विदेशी आक्रमणकारी हमारे देश की ओर **हाथ उठाएगा**, तो वीर सैनिक उसके **हाथ तोड़ देंगे**।',
            },
            {
              idiom: 'खून से लकीर खींचना',
              hindiMeaning: 'अत्यंत कठोर और अटल रक्षा-मर्यादा स्थापित करना',
              englishMeaning: 'to draw an inviolable boundary line with blood and sacrifice',
              sourceLine: 'छंद 4: “खींच दो अपने खूँ से ज़मीं पर लकीर”',
              examSentence:
                'सीमा रक्षकों ने अपने बलिदान से सरहद पर **खून की लकीर खींचकर** देश को सुरक्षित रखा है।',
            },
            {
              idiom: 'कट गए सर (सिर कट जाना)',
              hindiMeaning: 'मातृभूमि के सम्मान की रक्षा में वीरगति प्राप्त कर लेना',
              englishMeaning: 'sacrificing one’s life in battle without regret',
              sourceLine: 'छंद 1: “कट गए सर हमारे तो कुछ गम नहीं” (NCERT भाषा अध्ययन प्रश्न 1)',
              examSentence:
                'देश की अखंडता की रक्षा करते हुए यदि वीर जवानों के **सिर कट भी जाएँ**, तो उन्हें कोई दुख नहीं होता।',
            },
            {
              idiom: 'नब्ज़ जमती जाना',
              hindiMeaning: 'अत्यधिक शीत व प्राणांतक परिस्थितियों के कारण जीवन-चेतना थमने लगना',
              englishMeaning: 'pulse freezing / life force ebbing away in extreme cold',
              sourceLine: 'छंद 1: “साँस थमती गई, नब्ज़ जमती गई” (NCERT भाषा अध्ययन प्रश्न 1)',
              examSentence:
                'हिमालय की भीषण ठंड में **नब्ज़ जमती जाने** पर भी भारतीय जवानों ने मोर्चा नहीं छोड़ा।',
            },
            {
              idiom: 'जान देने की रुत',
              hindiMeaning: 'मातृभूमि पर बलिदान होने का दुर्लभ व गौरवशाली अवसर',
              englishMeaning: 'the rare, noble season/opportunity to sacrifice one’s life',
              sourceLine: 'छंद 2: “जिंदा रहने के मौसम बहुत हैं मगर / जान देने की रुत रोज़ आती नहीं” (NCERT भाषा अध्ययन प्रश्न 1)',
              examSentence:
                'सैनिकों के अनुसार देश के काम आने और **जान देने की रुत** जीवन में बार-बार नहीं आती।',
            },
          ],
        },
        {
          type: 'callout',
          variant: 'ncert',
          title: 'NCERT भाषा अध्ययन प्रश्न 2 — संबोधन बहुवचन में अनुस्वार (बिंदी) का नियम',
          body: 'गीत की पंक्ति “अब तुम्हारे हवाले वतन साथियो!” में **‘साथियो’** शब्द पर अनुस्वार (ं) का प्रयोग नहीं हुआ है, जबकि सामान्य कारक-युक्त वाक्य “साथियों ने देश बचाया” में ‘साथियों’ पर अनुस्वार लगता है।\n• **नियम:** हिंदी व्याकरण में **संबोधन (पुकारने)** के बहुवचन शब्द-रूपों पर अनुस्वार का प्रयोग नहीं होता — जैसे **भाइयो, बहिनो, देवियो, सज्जनो, साथियो**!\n• **बोर्ड अलर्ट:** परीक्षा में गीत के उद्धरण या संबोधन के बहुवचन लिखते समय कभी `साथियों` (बिंदी सहित) न लिखें; सदैव **`साथियो`** लिखें।',
        },
      ],
    },
    {
      id: 'kar-chale-samas',
      title: '6. पाठ के प्रमुख समास-विग्रह (Samas Breakdown)',
      blocks: [
        {
          type: 'samas-list',
          title: 'कर चले हम फ़िदा — प्रमुख समस्तपद, विग्रह व समास-भेद',
          note: 'गीत के शब्दों (`जानो-तन`, `राम-लक्ष्मण`, `हिमालय`) और पाठ से जुड़े देशभक्ति समस्तपदों का विग्रह अभ्यास करें।',
          items: [
            {
              samastPad: 'जानो-तन (जान-ओ-तन)',
              vigrah: 'जान और तन (प्राण और शरीर)',
              samasType: 'द्वंद्व समास',
              englishMeaning: 'life and body',
              examTrap: 'उर्दू संयोजक ‘ओ’ वास्तव में ‘और’ के अर्थ में आता है — अतः **द्वंद्व समास**।',
            },
            {
              samastPad: 'राम-लक्ष्मण',
              vigrah: 'राम और लक्ष्मण',
              samasType: 'द्वंद्व समास',
              englishMeaning: 'Rama and Lakshmana',
            },
            {
              samastPad: 'हिमालय',
              vigrah: 'हिम (बर्फ़) का आलय (घर)',
              samasType: 'संबंध तत्पुरुष समास',
              englishMeaning: 'abode of snow (the Himalayas)',
              examTrap: 'यद्यपि हिमालय एक विशेष पर्वत है, CBSE व्याकरण में मानक विग्रह **‘हिम का आलय’ (संबंध तत्पुरुष)** ही सर्वाधिक मान्य है।',
            },
            {
              samastPad: 'लक्ष्मण-रेखा (लकीर संदर्भ)',
              vigrah: 'लक्ष्मण द्वारा खींची गई रेखा',
              samasType: 'मध्यमपदलोपी / करण तत्पुरुष समास',
              englishMeaning: 'Lakshman’s protective boundary line',
            },
            {
              samastPad: 'मातृभूमि / देशभक्ति',
              vigrah: 'माता की भूमि / देश के लिए भक्ति',
              samasType: 'संबंध / संप्रदान तत्पुरुष समास',
              englishMeaning: 'motherland / devotion for the country',
              examTrap: '‘देशभक्ति’ = **देश के लिए भक्ति** (संप्रदान तत्पुरुष; ‘देश की भक्ति’ मत लिखें!)।',
            },
            {
              samastPad: 'बलिदान-पथ / देशवासी',
              vigrah: 'बलिदान का पथ / देश के वासी',
              samasType: 'संबंध तत्पुरुष समास',
              englishMeaning: 'path of sacrifice / citizens of the nation',
            },
          ],
        },
      ],
    },
    {
      id: 'kar-chale-cbse-qa',
      title: '7. NCERT प्रश्न-अभ्यास व CBSE बोर्ड प्रश्नोत्तर (2–3 अंक)',
      blocks: [
        {
          type: 'qa',
          marks: 2,
          tag: 'NCERT प्रश्न-अभ्यास',
          question: 'क्या इस गीत की कोई ऐतिहासिक पृष्ठभूमि है? (NCERT क-1)',
          answer:
            'हाँ, यह गीत **सन 1962 के भारत-चीन युद्ध** की ऐतिहासिक पृष्ठभूमि पर आधारित है। इसे निर्माता-निर्देशक चेतन आनंद की देशभक्ति फिल्म **‘हक़ीक़त’** के लिए लिखा गया था, जिसमें भारतीय सैनिकों के अदम्य साहस और बलिदान का चित्रण है।',
          markingTip: '1962 भारत-चीन युद्ध + फिल्म ‘हक़ीक़त’ का उल्लेख अनिवार्य है।',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'NCERT प्रश्न-अभ्यास',
          question: '‘सर हिमालय का हमने न झुकने दिया’, इस पंक्ति में हिमालय किस बात का प्रतीक है? (NCERT क-2)',
          answer:
            'इस पंक्ति में ‘हिमालय’ भारत के गौरव, स्वाभिमान, सम्मान और अखंड स्वतंत्रता का प्रतीक है। सैनिकों ने बर्फीले मोर्चे पर अपने प्राण गँवाकर भी देश की आन-बान और सीमाओं की गरिमा पर कोई आँच नहीं आने दी।',
          markingTip: '‘भारत के गौरव व स्वाभिमान का प्रतीक’ मुख्य की-वर्ड है।',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'NCERT प्रश्न-अभ्यास',
          question: 'इस गीत में धरती को दुलहन क्यों कहा गया है? (NCERT क-3)',
          answer:
            'जिस प्रकार विवाह के समय दुलहन लाल जोड़े में सजी होती है और उसकी रक्षा तथा सम्मान की जिम्मेदारी वर की होती है, उसी प्रकार युद्धभूमि में बलिदानी सैनिकों के लाल रक्त से धरती लाल जोड़े जैसी सज उठी है। अतः देशवासियों का कर्तव्य है कि वे इस दुलहन रूपी मातृभूमि के सम्मान की रक्षा करें।',
          markingTip: '‘रक्त रूपी लाल जोड़ा’ और ‘सम्मान-रक्षा का दायित्व’ दोनों लिखें।',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'NCERT प्रश्न-अभ्यास',
          question:
            'गीत में ऐसी क्या खास बात होती है कि वे जीवन भर याद रह जाते हैं? (NCERT क-4)',
          answer:
            'जिन गीतों में सच्ची मानवीय संवेदना, मर्मस्पर्शी भाव, संगीतात्मक लय-ताल तथा देशप्रेम, बलिदान या जीवन के गहरे अनुभव जुड़े होते हैं, वे सीधे श्रोता के हृदय को छू लेते हैं। सरल भाषा और मार्मिक प्रेरणा होने के कारण ऐसे गीत जीवन भर याद रह जाते हैं।',
          markingTip: 'हृदयस्पर्शी भाव, लय-संगीतात्मकता व प्रेरणादायक संदेश लिखें।',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'NCERT प्रश्न-अभ्यास',
          question: 'कवि ने ‘साथियो’ संबोधन का प्रयोग किसके लिए किया है? (NCERT क-5)',
          answer:
            'कवि ने ‘साथियो’ संबोधन का प्रयोग **देश के समस्त नागरिकों और युवा पीढ़ी (देशवासियों)** के लिए किया है, जिन्हें शहीद होते हुए सैनिक देश की स्वतंत्रता व अखंडता की रक्षा का दायित्व सौंपकर जा रहे हैं।',
          markingTip: 'वक्ता = बलिदानी सैनिक; ‘साथियो’ = देशवासी व आने वाली पीढ़ी।',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'NCERT प्रश्न-अभ्यास',
          question: 'कवि ने इस कविता में किस काफ़िले को आगे बढ़ाते रहने की बात कही है? (NCERT क-6)',
          answer:
            'कवि ने देश-रक्षा के लिए सर्वस्व न्योछावर करने वाले बलिदानियों और देशभक्तों के काफ़िले को आगे बढ़ाते रहने की बात कही है, ताकि बलिदान की राह कभी सूनी (वीरान) न हो और देश सदैव सुरक्षित रहे।',
          markingTip: '‘देशभक्तों / बलिदानियों का काफ़िला’ लिखें।',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'NCERT प्रश्न-अभ्यास',
          question: 'इस गीत में ‘सर पर कफ़न बाँधना’ किस ओर संकेत करता है? (NCERT क-7)',
          answer:
            'इस गीत में ‘सर पर कफ़न बाँधना’ मृत्यु के भय से पूरी तरह मुक्त होकर मातृभूमि की रक्षा के लिए प्राण न्योछावर (बलिदान) करने हेतु सदैव तैयार रहने की ओर संकेत करता है।',
          markingTip: '‘मौत की परवाह न कर बलिदान के लिए तत्पर रहना’ मुख्य आशय है।',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'NCERT प्रश्न-अभ्यास',
          question: 'इस कविता का प्रतिपाद्य अपने शब्दों में लिखिए। (NCERT क-8)',
          answer:
            '‘कर चले हम फ़िदा’ गीत का मुख्य प्रतिपाद्य देशभक्ति, कर्तव्यनिष्ठा और मातृभूमि के प्रति सर्वस्व समर्पण की भावना जगाना है। 1962 के युद्ध में अपने प्राणों की आहुति देने वाले सैनिक देशवासियों से यही अपेक्षा करते हैं कि वे देश के स्वाभिमान (हिमालय का सिर) को कभी झुकने न दें, बलिदान की परंपरा को जीवित रखें तथा राम-लक्ष्मण की भाँति सजग रहकर भारत माता रूपी सीता के सम्मान की रक्षा करें।',
          markingTip: 'प्रतिपाद्य में सैनिकों का बलिदान + देशवासियों को रक्षा का दायित्व सौंपने का संदेश लिखें।',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'NCERT प्रश्न-अभ्यास',
          question:
            '‘छू न पाए सीता का दामन कोई / राम भी तुम, तुम्हीं लक्ष्मण साथियो’ — का भाव स्पष्ट कीजिए। (NCERT ख-3)',
          answer:
            'इन पंक्तियों में सैनिक देशवासियों से कहते हैं कि वे अपने देश (सीता रूपी भारत माता) के सम्मान की रक्षा के लिए स्वयं राम और लक्ष्मण के समान कर्तव्यनिष्ठ बनें। जिस प्रकार राम और लक्ष्मण ने सीता की रक्षा की, उसी प्रकार हर नागरिक को सतर्क रहकर भारत की अस्मिता पर आँच डालने वाले किसी भी आक्रमणकारी शत्रु का डटकर मुकाबला करना होगा।',
          markingTip: '‘सीता = भारत माता का सम्मान’ तथा ‘राम-लक्ष्मण = देशवासी रक्षक’ स्पष्ट जोड़ें।',
        },
      ],
    },
  ],
};
