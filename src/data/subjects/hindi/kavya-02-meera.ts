import { Subtopic } from '../../../types/curriculum';

export const subtopicMeeraKePad: Subtopic = {
  id: 'hindi-kavya-02-meera',
  slug: 'meera-ke-pad',
  title: 'पाठ 2: मीरा — पद (Meera ke Pad)',
  subtitle:
    'राजस्थानी मिश्रित ब्रजभाषा में श्रीकृष्ण के प्रति दास्य व माधुर्य भक्ति के दोनों पद — भीर हरने की प्रार्थना, चाकरी और रूप-सौंदर्य वर्णन।',
  estimatedMinutes: 25,
  difficulty: 'Core CBSE',
  ncertSection: 'स्पर्श भाग-2 • काव्यखंड पाठ 2',
  learningObjectives: [
    'पद 1 में द्रौपदी, प्रह्लाद (नरसिंह अवतार) और गजराज की कथाओं का संदर्भ समझना।',
    'पद 2 में मीरा की श्रीकृष्ण की ‘चाकरी’ (दासी बनने) के पीछे छिपे तीन लाभ (दर्शन, स्मरण, भाव-भक्ति) याद करना।',
    'राजस्थानी व ब्रज शब्दों (`भीर`, `कुण्जर`, `म्हाने`, `हिवड़ो`, `कुसुम्बी`, `बारी`) का मानक हिंदी रूप जानना।',
    'मीरा द्वारा किए गए श्रीकृष्ण के रूप-सौंदर्य (मोर मुकुट, पीतांबर, वैजंती माला) का सटीक वर्णन लिखना।',
  ],
  keywords: [
    'मीरा के पद',
    'हरि आप हरो जन री भीर',
    'स्याम म्हाने चाकर राखो',
    'कुण्जर',
    'द्रोपदी',
    'प्रह्लाद',
    'चाकरी',
    'वैजन्ती माला',
    'कुसुम्बी साड़ी',
    'मुहावरे',
    'समास',
    'शब्दार्थ',
    'english transcript',
  ],
  sections: [
    {
      id: 'meera-parichay-context',
      title: '1. कवयित्री-परिचय, भक्ति-भाव और पौराणिक संदर्भ',
      blocks: [
        {
          type: 'ncert-reference',
          title: 'पाठ 2: मीरा — पद — Official NCERT PDF',
          bookName: 'स्पर्श भाग-2 — काव्यखंड',
          pdfPath: '/ncert/hindi/jhsp102.pdf',
          pdfStartPage: 1,
          pdfEndPage: 5,
          note: 'Preview or open the official NCERT Sparsh Bhag-2 chapter PDF (कवयित्री-परिचय, दोनों पद, प्रश्न-अभ्यास व शब्दार्थ) alongside the Word Lens & bilingual transcript below.',
        },
        {
          type: 'quick-summary',
          title: 'मीराबाई और उनके पद — Exam Glance',
          bullets: [
            '**कवयित्री:** मीराबाई (1503–1546 ई.), जन्म: चोकड़ी (कुड़की), जोधपुर; गुरु: संत रैदास।',
            '**भक्ति का स्वरूप:** **दैन्य और माधुर्य भाव** (वे स्वयं को श्रीकृष्ण की दासी मानती हैं, लाड़ भी लड़ाती हैं और कर्तव्य भी याद दिलाती हैं)।',
            '**भाषा:** **राजस्थानी, ब्रज और गुजराती** का मधुर मिश्रण (`म्हाने`, `रहस्यूँ`, `पास्यूँ`, `हिवड़ो`, `घणो`) तथा संगीतात्मक गेय पद शैली।',
          ],
        },
        {
          type: 'table',
          caption: 'पद (1) में वर्णित तीन पौराणिक रक्षा-प्रसंग (Must-Know for 2–3 Mark Answers)',
          headers: ['भक्त / पात्र', 'संकट (Crisis)', 'श्रीकृष्ण / ईश्वर द्वारा रक्षा'],
          rows: [
            [
              '**द्रौपदी**',
              'कौरव सभा में दुशासन द्वारा चीरहरण (अपमान)',
              'श्रीकृष्ण ने साड़ी (चीर) को अनंत बढ़ाकर द्रौपदी की लाज बचाई।',
            ],
            [
              '**भक्त प्रह्लाद**',
              'पिता हिरण्यकश्यप द्वारा प्राण-संकट व अत्याचार',
              'भक्त की रक्षा हेतु भगवान ने नरहरि (नरसिंह) का रूप धारण कर हिरण्यकश्यप का वध किया।',
            ],
            [
              '**गजराज (ऐरावत हाथी)**',
              'नदी में डूबते हुए हाथी को मगरमच्छ ने जकड़ा',
              'भगवान ने मगरमच्छ को मारकर डूबते गजराज को बचाया और उसकी पीड़ा काटी।',
            ],
          ],
        },
      ],
    },
    {
      id: 'meera-pad-1-and-2',
      title: '2. मीरा के दोनों पद (Inline Word Lens व भावार्थ सहित)',
      blocks: [
        {
          type: 'poetic-stanza',
          stanzaLabel: 'पद (1) — भक्तों की पीड़ा हरने की विनती',
          dialectBadge: 'राजस्थानी + ब्रजभाषा',
          stanzaText: `हरि आप हरो जन री भीर।
द्रोपदी री लाज राखी, आप बढ़ायो चीर।
भगत कारण रूप नरहरि, धर्यो आप सरीर।
बूढ़तो गजराज राख्यो, काटी कुण्जर पीर।
दासी मीराँ लाल गिरधर, हरो म्हारी भीर।।`,
          words: [
            {
              word: 'हरो',
              hindiMeaning: 'दूर कीजिए / हर लीजिए',
              englishMeaning: 'remove / take away (suffering)',
              grammarNote: 'आज्ञार्थक विनय क्रिया',
              exampleSentence: 'हे प्रभु, आप अपने भक्तों के सभी कष्ट हर लीजिए।',
            },
            {
              word: 'जन',
              hindiMeaning: 'भक्त / सेवक',
              englishMeaning: 'devotee / servant of God',
              grammarNote: 'तत्सम संज्ञा • संदर्भ: भक्तगण',
              exampleSentence: 'ईश्वर सदैव अपने सच्चे भक्त की सहायता करते हैं।',
            },
            {
              word: 'री',
              hindiMeaning: 'की (संबंध कारक)',
              englishMeaning: 'of (possessive particle)',
              grammarNote: 'राजस्थानी संबंध चिह्न • मानक: की',
              exampleSentence: 'माँ की ममता सबसे अनमोल होती है।',
            },
            {
              word: 'भीर',
              hindiMeaning: 'पीड़ा / कष्ट / दुख (भीड़ नहीं!)',
              englishMeaning: 'pain / distress / suffering (NOT “crowd”!)',
              grammarNote: 'CBSE Top Trap! • ब्रज/राजस्थानी रूप • मानक: पीड़ा',
              exampleSentence: 'मीरा ने प्रभु से अपनी सांसारिक पीड़ा दूर करने की प्रार्थना की।',
            },
            {
              word: 'चीर',
              hindiMeaning: 'वस्त्र / साड़ी',
              englishMeaning: 'cloth / garment / saree',
              grammarNote: 'तद्भव संज्ञा • नोट: ‘चिर’ (दीर्घ) से भिन्न',
              exampleSentence: 'श्रीकृष्ण ने असीम वस्त्र (चीर) बढ़ाकर द्रौपदी का सम्मान बचाया।',
            },
            {
              word: 'नरहरि',
              hindiMeaning: 'नरसिंह अवतार (आधा मनुष्य, आधा सिंह)',
              englishMeaning: 'Narasimha incarnation (half-man, half-lion)',
              grammarNote: 'पौराणिक संज्ञा • प्रह्लाद की रक्षा हेतु अवतार',
              exampleSentence: 'भगवान ने भक्त प्रह्लाद के लिए नरसिंह का रूप धारण किया।',
            },
            {
              word: 'धर्यो',
              hindiMeaning: 'धारण किया',
              englishMeaning: 'assumed / took form',
              grammarNote: 'ब्रज/राजस्थानी भूतकाल • मानक: धारण किया',
              exampleSentence: 'धर्म की रक्षा हेतु ईश्वर ने अनेक रूप धारण किए।',
            },
            {
              word: 'बूढ़तो',
              hindiMeaning: 'डूबता हुआ',
              englishMeaning: 'drowning / sinking',
              grammarNote: 'राजस्थानी कृदंत • मानक: डूबता हुआ',
              exampleSentence: 'नदी में डूबते हुए हाथी ने ईश्वर को पुकारा।',
            },
            {
              word: 'गजराज',
              hindiMeaning: 'हाथियों के राजा (ऐरावत)',
              englishMeaning: 'king of elephants (Airavata)',
              grammarNote: 'तत्पुरुष समास (गजों का राजा)',
              exampleSentence: 'विपत्ति में फँसे गजराज की पुकार प्रभु ने तुरंत सुनी।',
            },
            {
              word: 'कुण्जर',
              hindiMeaning: 'हाथी',
              englishMeaning: 'elephant',
              grammarNote: 'तत्सम पर्यायवाची • पर्याय: गज, हस्ती, मतंग',
              exampleSentence: 'भगवान ने मगरमच्छ को मारकर हाथी (कुंजर) की पीड़ा काटी।',
            },
            {
              word: 'गिरधर',
              hindiMeaning: 'पर्वत (गोवर्धन) को धारण करने वाले श्रीकृष्ण',
              englishMeaning: 'Lord Krishna (Bearer of Govardhan Mountain)',
              grammarNote: 'बहुव्रीहि समास (गिरि को धारण किया है जिसने = श्रीकृष्ण)',
              exampleSentence: 'मीरा गिरधर गोपाल की अनन्य भक्त थीं।',
            },
            {
              word: 'म्हारी',
              hindiMeaning: 'हमारी / मेरी',
              englishMeaning: 'my / our',
              grammarNote: 'राजस्थानी सर्वनाम • मानक: मेरी / हमारी',
              exampleSentence: 'हे ईश्वर, मेरी विनती स्वीकार कीजिए।',
            },
          ],
          prasang:
            'प्रस्तुत पद ‘स्पर्श भाग-2’ के पाठ ‘मीरा के पद’ से लिया गया है। इसमें मीराबाई भगवान श्रीकृष्ण को उनके पूर्व भक्त-रक्षा प्रसंग याद दिलाकर अपने कष्ट दूर करने की प्रार्थना कर रही हैं।',
          bhavarthHindi:
            'मीराबाई श्रीकृष्ण से विनती करती हैं कि हे हरि, आप अपने भक्तों की पीड़ा दूर करने वाले हैं। आपने ही कौरव सभा में अपमानित होती द्रौपदी की साड़ी (चीर) बढ़ाकर उसकी लाज बचाई थी; अपने भक्त प्रह्लाद की रक्षा के लिए आपने नरसिंह (नरहरि) का रूप धारण किया था; और मगरमच्छ द्वारा पकड़े गए डूबते गजराज की पीड़ा दूर कर उसे बचाया था। उसी प्रकार आपकी दासी मीरा आपसे प्रार्थना करती है कि हे गिरधर लाल, आप मेरी भी सांसारिक पीड़ा दूर कीजिए।',
          englishHelper:
            'O Lord Hari, please remove (`हरो`) the suffering (`भीर`) of your devotees! You saved Draupadi’s honor by lengthening her saree (`चीर`); you took the Narasimha form for Prahlad; and you rescued the drowning elephant king (`गजराज`/`कुण्जर`) from the crocodile. I, your servant Meera, ask you to end my suffering too.',
          poeticDevices: [
            '**उदाहरण / दृष्टांत शैली:** तीन प्रसिद्ध कथाओं (द्रौपदी, प्रह्लाद, गजराज) के प्रमाण देकर प्रभु को उनका ‘भक्त-वत्सल’ कर्तव्य स्मरण कराना।',
            '**भक्ति का रूप:** **दास्य भाव** (`दासी मीराँ`) और आर्त-विनय।',
            '**समास Link:** `गिरधर` = बहुव्रीहि समास; `गजराज` = संबंध तत्पुरुष समास।',
          ],
        },
        {
          type: 'poetic-stanza',
          stanzaLabel: 'पद (2) — श्याम की चाकरी, रूप-सौंदर्य और दर्शन की आतुरता',
          dialectBadge: 'राजस्थानी + ब्रज + गुजराती मिश्रण',
          stanzaText: `स्याम म्हाने चाकर राखो जी,
गिरधारी लाला म्हाँने चाकर राखोजी।
चाकर रहस्यूँ बाग लगास्यूँ नित उठ दरसण पास्यूँ।
बिन्दरावन री कुंज गली में, गोविन्द लीला गास्यूँ।
चाकरी में दरसण पास्यूँ, सुमरण पास्यूँ खरची।
भाव भगती जागीरी पास्यूँ, तीनूं बाताँ सरसी।
मोर मुगट पीताम्बर सोहे, गल वैजन्ती माला।
बिन्दरावन में धेनु चरावे, मोहन मुरली वाला।
ऊँचा ऊँचा महल बणावं बिच बिच राखूँ बारी।
साँवरिया रा दरसण पास्यूँ, पहर कुसुम्बी साड़ी।
आधी रात प्रभु दरसण, दीज्यो जमनाजी रे तीरां।
मीराँ रा प्रभु गिरधर नागर, हिवड़ो घणो अधीराँ।।`,
          words: [
            {
              word: 'म्हाने',
              hindiMeaning: 'मुझे',
              englishMeaning: 'me (to me)',
              grammarNote: 'राजस्थानी सर्वनाम • मानक: मुझे',
              exampleSentence: 'भक्त कहता है— हे प्रभु, मुझे अपनी सेवा में रख लीजिए।',
            },
            {
              word: 'चाकर',
              hindiMeaning: 'सेवक / नौकर / दासी',
              englishMeaning: 'servant / attendant',
              grammarNote: 'संज्ञा (प्रतीक: निस्वार्थ सेवा-भाव)',
              exampleSentence: 'मीरा श्रीकृष्ण के दर्शन पाने के लिए उनकी सेविका बनने को भी तैयार हैं।',
            },
            {
              word: 'रहस्यूँ',
              hindiMeaning: 'रहूँगी',
              englishMeaning: 'I will live / stay',
              grammarNote: 'राजस्थानी भविष्यत् काल • मानक: रहूँगी',
              exampleSentence: 'मैं सदा सत्य और कर्तव्य के मार्ग पर अडिग रहूँगी।',
            },
            {
              word: 'दरसण',
              hindiMeaning: 'दर्शन / साक्षात्कार',
              englishMeaning: 'sacred sight / glimpse (darshan)',
              grammarNote: 'तद्भव रूप • मानक रूप: दर्शन',
              exampleSentence: 'सवेरे उठते ही ईश्वर के दर्शन पाना भक्त की सबसे बड़ी इच्छा होती है।',
            },
            {
              word: 'सुमरण',
              hindiMeaning: 'ईश्वर का नाम-स्मरण / याद करना',
              englishMeaning: 'remembrance of God’s name',
              grammarNote: 'तद्भव रूप • मानक: स्मरण',
              exampleSentence: 'कठिन समय में ईश्वर का स्मरण मन को संबल देता है।',
            },
            {
              word: 'खरची',
              hindiMeaning: 'जेब-खर्च / वेतन (आध्यात्मिक कमाई)',
              englishMeaning: 'pocket money / wages (spiritual allowance)',
              grammarNote: 'तद्भव संज्ञा • रूपक: नाम-स्मरण रूपी वेतन',
              exampleSentence: 'भक्त को सेवा के बदले प्रभु-स्मरण रूपी जेब-खर्च मिलता है।',
            },
            {
              word: 'जागीरी',
              hindiMeaning: 'जागीर / साम्राज्य / संपत्ति',
              englishMeaning: 'estate / kingdom / permanent wealth',
              grammarNote: 'फारसी-प्रभावित रूप • मानक: जागीर / संपत्ति',
              exampleSentence: 'भाव-भक्ति की जागीर सांसारिक धन-दौलत से कहीं अधिक अमूल्य है।',
            },
            {
              word: 'सरसी',
              hindiMeaning: 'पूरी होंगी / सफल होंगी',
              englishMeaning: 'will be fulfilled / accomplished',
              grammarNote: 'ब्रज/राजस्थानी क्रिया • मानक: पूरी हो जाएँगी',
              exampleSentence: 'परिश्रम करने से जीवन की सभी उत्तम कामनाएँ पूर्ण हो जाती हैं।',
            },
            {
              word: 'पीताम्बर',
              hindiMeaning: 'पीला वस्त्र (पीत है जो अंबर)',
              englishMeaning: 'yellow garment / silk attire',
              grammarNote: 'तत्सम + समास • कर्मधारय (पीत अंबर) / बहुव्रीहि (श्रीकृष्ण)',
              exampleSentence: 'मोर-मुकुट और पीले वस्त्रों में श्रीकृष्ण की शोभा अद्भुत लगती है।',
            },
            {
              word: 'वैजन्ती',
              hindiMeaning: 'वन के फूलों की पवित्र माला',
              englishMeaning: 'garland of sacred wild/Vaijayanti flowers',
              grammarNote: 'तत्सम संज्ञा',
              exampleSentence: 'श्रीकृष्ण के गले में वैजंती माला सुशोभित हो रही है।',
            },
            {
              word: 'धेनु',
              hindiMeaning: 'गायें',
              englishMeaning: 'cows',
              grammarNote: 'तत्सम संज्ञा • पर्याय: गाय, गो, सुरभि',
              exampleSentence: 'वृंदावन के वनों में श्रीकृष्ण प्रतिदिन गायें चराया करते थे।',
            },
            {
              word: 'बारी',
              hindiMeaning: 'फुलवाड़ी / बगीचा (या खिड़की)',
              englishMeaning: 'flower-bed / garden path (or small window)',
              grammarNote: 'तद्भव संज्ञा • मानक: फुलवाड़ी / बगीचा',
              exampleSentence: 'ऊँचे महलों के बीच सजी फुलवाड़ी से दर्शन का अवसर मिलता है।',
            },
            {
              word: 'कुसुम्बी',
              hindiMeaning: 'केसरिया / गहरे लाल रंग की',
              englishMeaning: 'saffron / bright crimson-red',
              grammarNote: 'विशेषण • भक्ति व समर्पण के रंग का प्रतीक',
              exampleSentence: 'प्रेम और भक्ति के प्रतीक रूप में मीरा ने कुसुंबी साड़ी पहनने की बात कही है।',
            },
            {
              word: 'तीरां',
              hindiMeaning: 'किनारे पर',
              englishMeaning: 'on the bank / shore',
              grammarNote: 'तद्भव अधिकरण रूप • मानक: किनारे (तीर = तट/किनारा)',
              exampleSentence: 'चाँदनी रात में यमुना के किनारे का दृश्य अत्यंत शांत था।',
            },
            {
              word: 'हिवड़ो',
              hindiMeaning: 'हृदय / मन',
              englishMeaning: 'heart',
              grammarNote: 'राजस्थानी रूप • मानक: हृदय',
              exampleSentence: 'प्रिय के दर्शन की प्रतीक्षा में भक्त का हृदय व्याकुल है।',
            },
            {
              word: 'घणो',
              hindiMeaning: 'बहुत / अत्यधिक',
              englishMeaning: 'very / deeply',
              grammarNote: 'राजस्थानी परिमाणवाचक क्रिया-विशेषण • मानक: बहुत',
              exampleSentence: 'ईश्वर से मिलने के लिए मीरा का मन अत्यंत व्याकुल था।',
            },
            {
              word: 'अधीराँ',
              hindiMeaning: 'व्याकुल / अधीर / बेचैन',
              englishMeaning: 'restless / impatient / eager',
              grammarNote: 'तत्सम-तद्भव विशेषण • मानक: अधीर / व्याकुल',
              exampleSentence: 'लंबे समय से प्रतीक्षारत मित्र का मन अधीर हो उठा।',
            },
          ],
          prasang:
            'प्रस्तुत पद में मीराबाई श्रीकृष्ण के प्रति अपने अनन्य प्रेम को प्रकट करते हुए उनकी सेविका बनने की इच्छा जताती हैं और उनके मनमोहक रूप व दर्शन की लालसा व्यक्त करती हैं।',
          bhavarthHindi:
            'मीराबाई कहती हैं कि हे श्याम, हे गिरधारी लाल, आप मुझे अपनी दासी (चाकर) बना लीजिए। मैं आपकी सेविका बनकर आपके लिए बाग-बगीचे लगाऊँगी ताकि सुबह उठते ही नित्य आपके दर्शन पा सकूँ। मैं वृंदावन की कुंज गलियों में आपकी लीलाओं का गुणगान करूँगी। इस चाकरी से मुझे एक साथ तीन लाभ (तीनों बातें) सिद्ध होंगी— (1) नित्य दर्शन का अवसर, (2) नाम-स्मरण रूपी जेब-खर्च, और (3) भाव-भक्ति रूपी स्थायी जागीर!\nआगे मीरा श्रीकृष्ण के सौंदर्य का वर्णन करती हैं कि उनके सिर पर मोरपंख का मुकुट और शरीर पर पीतांबर सुशोभित है, गले में वैजंती माला है और वे वृंदावन में मधुर मुरली बजाते हुए गायें चराते हैं। मीरा कहती हैं कि मैं ऊँचे-ऊँचे महल बनवाकर बीच-बीच में फुलवाड़ी/झरोखे रखूँगी और कुसुंबी (केसरिया) साड़ी पहनकर साँवरिया के दर्शन पाऊँगी। अंत में वे विनती करती हैं कि हे प्रभु गिरधर नागर, मेरा हृदय अत्यंत व्याकुल है — आप मुझे आधी रात को यमुना नदी के किनारे अपने दर्शन अवश्य दीजिए।',
          englishHelper:
            'Keep me as your servant (`चाकर`), O Shyam! I will tend your gardens and wake up every day to see you (`दरसण`), singing your glories in Vrindavan’s lanes. Serving you fulfills three goals at once: daily darshan, remembering your name as wages (`सुमरण खरची`), and loving devotion as my permanent estate (`भाव भगती जागीरी`). Meera then describes Krishna’s peacock crown, yellow robe (`पीताम्बर`), Vaijayanti garland, and flute as he grazes cows — finally begging him to appear at midnight on the banks of the Yamuna because her heart (`हिवड़ो`) is deeply restless (`अधीराँ`).',
          poeticDevices: [
            '**पुनरुक्ति प्रकाश:** ‘ऊँचा ऊँचा’, ‘बिच बिच’।',
            '**अनुप्रास अलंकार:** ‘मोर मुगट’, ‘मोहन मुरली’, ‘भाव भगती’।',
            '**संगीतात्मकता (Musicality):** ‘रहस्यूँ, लगास्यूँ, पास्यूँ, गास्यूँ’ जैसी तुकांत क्रियाएँ पद को मधुर व गेय बनाती हैं।',
          ],
        },
        {
          type: 'checkpoint',
          prompt:
            'High-Frequency Board Question: ‘चाकरी में दरसण पास्यूँ... तीनूं बाताँ सरसी’ — मीरा की कौन-सी ‘तीन बातें’ चाकरी करने से पूरी होती हैं?',
          options: [
            { id: 'a', label: 'धन, महल और राजगद्दी मिलना', sublabel: 'Wealth, palaces & throne' },
            { id: 'b', label: 'श्रीकृष्ण के दर्शन, नाम-स्मरण रूपी खरची और भाव-भक्ति की जागीर', sublabel: 'Darshan + Nam-Smaran + Bhav-Bhakti' },
            { id: 'c', label: 'बाग लगाना, गाय चराना और यमुना स्नान', sublabel: 'Gardening, herding & bathing' },
          ],
          correctIds: ['b'],
          successMsg: 'सटीक उत्तर! यही तीनों ‘बाताँ’ (दर्शन + स्मरण + भाव-भक्ति रूपी जागीर) CBSE की मार्किंग स्कीम में अनिवार्य रूप से माँगी जाती हैं।',
          hintMsg: 'पद की पंक्ति पाँच–छह ध्यान से पढ़ें: “दरसण पास्यूँ, सुमरण पास्यूँ खरची, भाव भगती जागीरी पास्यूँ”।',
        },
        {
          type: 'notebook-mistake',
          studentName: 'आदित्य',
          title: '‘भीर’ और ‘भीड़’ तथा ‘चीर’ और ‘चिर’ का भ्रम',
          wrongWork: 'हरि आप हरो जन री भीर — यानी लोगों की भीड़ को दूर कीजिए।',
          teacherFix: '‘भीर’ का अर्थ ‘पीड़ा / कष्ट / दुख’ है, ‘भीड़ (crowd)’ नहीं। मीरा भक्तों के संकट हरने की प्रार्थना कर रही हैं।',
          whyWrong:
            'पठित काव्यांश के MCQs में परीक्षक जानबूझकर विकल्प में ‘भीड़ (समूह)’ देते हैं ताकि वर्तनी न समझने वाले छात्र फँस जाएँ। राजस्थानी/ब्रज में `भीर = पीड़ा/कष्ट` होता है।',
        },
      ],
    },
    {
      id: 'meera-english-transcript',
      title: '3. संपूर्ण अंग्रेज़ी अनुवाद (Full English Transcript — Both Pads)',
      blocks: [
        {
          type: 'english-transcript',
          title: 'Meera ke Pad — Complete Bilingual Transcript',
          intro:
            'Compare Meera’s Rajasthani-Braj verses line-by-line with their English meaning to remember every mythological episode and spiritual reward clearly.',
          segments: [
            {
              label: 'पद (1) — भक्तों की पीड़ा हरने की विनती',
              hindiOriginal: `हरि आप हरो जन री भीर।
द्रोपदी री लाज राखी, आप बढ़ायो चीर।
भगत कारण रूप नरहरि, धर्यो आप सरीर।
बूढ़तो गजराज राख्यो, काटी कुण्जर पीर।
दासी मीराँ लाल गिरधर, हरो म्हारी भीर।।`,
              englishText:
                'O Lord Hari, please remove the suffering (`भीर`) of your devotees!\nYou protected Draupadi’s honor by endlessly lengthening her saree (`चीर`).\nFor the sake of your devotee (Prahlad), you assumed the body of Narasimha (half-man, half-lion).\nYou saved the drowning king of elephants (`गजराज`) and cut away the elephant’s (`कुण्जर`) agony.\nMeera is your servant, O Beloved Giridhar — please take away my suffering too!',
            },
            {
              label: 'पद (2) — श्याम की चाकरी व मिलन की व्याकुलता',
              hindiOriginal: `स्याम म्हाने चाकर राखो जी,
गिरधारी लाला म्हाँने चाकर राखोजी।
चाकर रहस्यूँ बाग लगास्यूँ नित उठ दरसण पास्यूँ।
बिन्दरावन री कुंज गली में, गोविन्द लीला गास्यूँ।
चाकरी में दरसण पास्यूँ, सुमरण पास्यूँ खरची।
भाव भगती जागीरी पास्यूँ, तीनूं बाताँ सरसी।
मोर मुगट पीताम्बर सोहे, गल वैजन्ती माला।
बिन्दरावन में धेनु चरावे, मोहन मुरली वाला।
ऊँचा ऊँचा महल बणावं बिच बिच राखूँ बारी।
साँवरिया रा दरसण पास्यूँ, पहर कुसुम्बी साड़ी।
आधी रात प्रभु दरसण, दीज्यो जमनाजी रे तीरां।
मीराँ रा प्रभु गिरधर नागर, हिवड़ो घणो अधीराँ।।`,
              englishText:
                'O Shyam, keep me as your servant!\nO Giridhari Lal, please engage me in your service!\nStaying as your servant, I will plant gardens so that waking up every day I may get your sacred glimpse (`दरसण`).\nIn the shaded groves and lanes of Vrindavan, I will sing the divine pastimes of Govinda.\nIn your service I shall receive your darshan, I shall earn the remembrance of your name as my pocket allowance (`खरची`),\nand I shall inherit loving devotion (`भाव भगती`) as my permanent estate (`जागीरी`) — thus all three treasures (`तीनूं बाताँ`) will be fulfilled!\nA peacock-feather crown and yellow silk garment (`पीताम्बर`) adorn Him, with a garland of Vaijayanti flowers around His neck;\nplaying His enchanting flute, Mohana grazes cows in Vrindavan.\nI shall build lofty palaces with garden-beds/windows (`बारी`) in between,\nand wearing a saffron-crimson saree (`कुसुम्बी साड़ी`), I shall behold my dark-hued Beloved (`साँवरिया`).\nO Lord, grant me your darshan at midnight on the banks of the Yamuna river;\nO Meera’s clever Lord Giridhar, my heart (`हिवड़ो`) grows deeply restless!',
            },
          ],
        },
      ],
    },
    {
      id: 'meera-word-meanings',
      title: '4. संपूर्ण शब्दार्थ संकलन (Chapter Word Meanings & Self-Test)',
      blocks: [
        {
          type: 'chapter-word-bank',
          title: 'मीरा के पद — संपूर्ण शब्दार्थ व मानक रूप तालिका',
          intro:
            'राजस्थानी, ब्रज व गुजराती शब्दों के मानक हिंदी रूप व बोर्ड-जाल (जैसे `भीर`, `चीर`, `कुण्जर`) एक साथ दोहराएँ।',
          extraWords: [
            {
              word: 'काटी',
              hindiMeaning: 'दूर की / समाप्त की',
              englishMeaning: 'cut away / ended (pain)',
              grammarNote: 'सकर्मक क्रिया (भूतकाल)',
              exampleSentence: 'प्रभु ने गजराज पर आया संकट तुरंत काट दिया।',
            },
            {
              word: 'नागर',
              hindiMeaning: 'चतुर / गुणवान (गिरधर नागर = श्रीकृष्ण)',
              englishMeaning: 'clever / wise / accomplished',
              grammarNote: 'तत्सम विशेषण (यहाँ श्रीकृष्ण का विशेषण)',
              exampleSentence: 'गिरधर नागर अपने भक्तों के मन की बात भली-भाँति जानते हैं।',
            },
            {
              word: 'कुंज',
              hindiMeaning: 'लताओं व पेड़ों से घिरा छायादार स्थान',
              englishMeaning: 'shaded bower / grove of creepers',
              grammarNote: 'तत्सम संज्ञा',
              exampleSentence: 'वृंदावन की कुंज गलियों में मधुर संगीत गूँजता रहता है।',
            },
            {
              word: 'बढ़ायो',
              hindiMeaning: 'बढ़ाया / मान रखा',
              englishMeaning: 'lengthened / increased (protected honor)',
              grammarNote: 'ब्रज/राजस्थानी भूतकाल क्रिया • मानक: बढ़ाया (द्रौपदी के संदर्भ में)',
              exampleSentence: 'श्रीकृष्ण ने द्रौपदी का चीर अनंत बढ़ाकर उसकी लाज रखी।',
            },
            {
              word: 'पास्यूँ',
              hindiMeaning: 'पाऊँगी / प्राप्त करूँगी',
              englishMeaning: 'I shall receive / attain',
              grammarNote: 'राजस्थानी भविष्यत् काल क्रिया • मानक: पाऊँगी',
              exampleSentence: 'नित्य उठकर प्रभु के दर्शन पाऊँगी — यही मीरा की कामना है।',
            },
            {
              word: 'लीला',
              hindiMeaning: 'विविध रूप / दिव्य क्रीड़ाएँ और चरित्र',
              englishMeaning: 'divine plays / wondrous deeds',
              grammarNote: 'तत्सम संज्ञा • गोविन्द की लीलाओं का गान',
              exampleSentence: 'मीरा वृंदावन की कुंज गलियों में गोविंद की लीला गाने को उत्सुक हैं।',
            },
          ],
        },
        {
          type: 'table',
          caption: 'NCERT भाषा अध्ययन प्रश्न 1 — ब्रज-राजस्थानी शब्दों के प्रचलित मानक हिंदी रूप',
          headers: ['पाठ का शब्द', 'प्रचलित हिंदी रूप', 'अर्थ (Meaning)'],
          rows: [
            ['भीर (उदाहरण)', 'पीड़ा / कष्ट / दुख', 'pain / distress (NOT भीड़/crowd)'],
            ['री (उदाहरण)', 'की', 'of (possessive particle)'],
            ['चीर', 'वस्त्र / साड़ी', 'garment / saree'],
            ['धर्यो', 'धारण किया / रखा', 'assumed / took form'],
            ['कुण्जर', 'हाथी', 'elephant'],
            ['बिन्दरावन', 'वृंदावन', 'Vrindavan'],
            ['रहस्यूँ', 'रहूँगी', 'I shall live / stay'],
            ['राखो', 'रखो / रख लीजिए', 'keep'],
            ['बूढ़ता (बूढ़तो)', 'डूबता हुआ', 'drowning / sinking'],
            ['लगास्यूँ', 'लगाऊँगी', 'I shall plant'],
            ['घणा (घणो)', 'बहुत / अत्यधिक', 'very / deeply'],
            ['सरसी', 'पूरा होना / सफल होना', 'will be fulfilled / accomplished'],
            ['हिवड़ा (हिवड़ो)', 'हृदय / मन', 'heart'],
            ['कुसुम्बी', 'केसरिया / गहरे लाल रंग की', 'saffron / bright crimson-red'],
          ],
        },
      ],
    },
    {
      id: 'meera-muhavre',
      title: '5. पाठ के मुहावरे व वाक्य-प्रयोग (CBSE Muhavre Corner)',
      blocks: [
        {
          type: 'muhavre-list',
          title: 'मीरा के पद — प्रमुख मुहावरे एवं परीक्षा वाक्य-प्रयोग',
          note: 'CBSE में मुहावरे का वाक्य बनाते समय ध्यान रहे कि **मूल मुहावरा अपने सही रूप में (लिंग-वचन के अनुसार बदलते हुए)** वाक्य के भीतर स्पष्ट प्रयोग हो।',
          items: [
            {
              idiom: 'लाज रखना',
              hindiMeaning: 'सम्मान या मर्यादा की रक्षा करना',
              englishMeaning: 'to protect someone’s honor / dignity',
              sourceLine: 'पद 1: “द्रोपदी री लाज राखी, आप बढ़ायो चीर”',
              examSentence:
                'अंतिम ओवर में सटीक गेंदबाज़ी करके भारतीय गेंदबाज़ ने पूरी टीम की **लाज रख ली**।',
            },
            {
              idiom: 'पीड़ा काटना / भीर हरना',
              hindiMeaning: 'कष्ट या संकट को पूरी तरह दूर कर देना',
              englishMeaning: 'to remove distress / cut short suffering',
              sourceLine: 'पद 1: “हरो जन री भीर” / “काटी कुण्जर पीर”',
              examSentence:
                'बाढ़ पीड़ितों को समय पर राहत पहुँचाकर स्वयंसेवकों ने उनकी **पीड़ा हर ली**।',
            },
            {
              idiom: 'चाकरी करना (जी-जान से सेवा करना)',
              hindiMeaning: 'सेवक बनकर समर्पित भाव से किसी के अधीन सेवा करना',
              englishMeaning: 'to serve with total devotion',
              sourceLine: 'पद 2: “स्याम म्हाने चाकर राखो जी”',
              examSentence:
                'भक्ति में अहंकार त्यागकर प्रभु की **चाकरी करना** ही सच्चा समर्पण है।',
            },
            {
              idiom: 'मन / हृदय अधीर होना',
              hindiMeaning: 'प्रतीक्षा या चिंता के कारण अत्यंत बेचैन व व्याकुल हो उठना',
              englishMeaning: 'heart becoming restless / impatient',
              sourceLine: 'पद 2: “हिवड़ो घणो अधीराँ”',
              examSentence:
                'बोर्ड परीक्षा का परिणाम आने से ठीक पहले विद्यार्थियों का **मन अधीर हो उठता** है।',
            },
            {
              idiom: 'बातें सरना (सारे काम बन जाना)',
              hindiMeaning: 'एक साथ सभी उद्देश्य या कामनाएँ पूर्ण हो जाना',
              englishMeaning: 'all goals/wishes getting accomplished together',
              sourceLine: 'पद 2: “तीनूं बाताँ सरसी”',
              examSentence:
                'अच्छे गुरु का मार्गदर्शन मिल जाए तो विद्यार्थी की पढ़ाई की सभी **बातें सर जाती हैं (बन जाती हैं)**।',
            },
          ],
        },
      ],
    },
    {
      id: 'meera-samas',
      title: '6. पाठ के प्रमुख समास-विग्रह (Samas Breakdown)',
      blocks: [
        {
          type: 'samas-list',
          title: 'मीरा के पद — समस्तपद, विग्रह एवं भेद (Board Traps सहित)',
          note: '**‘पीताम्बर’** और **‘नरसिंह’** CBSE Course B के सबसे प्रसिद्ध उदाहरण हैं — इनका **समास का भेद आपके लिखे विग्रह** पर निर्भर करता है!',
          items: [
            {
              samastPad: 'गिरधर',
              vigrah: 'गिरि (गोवर्धन पर्वत) को धारण किया है जिसने (अर्थात श्रीकृष्ण)',
              samasType: 'बहुव्रीहि समास',
              englishMeaning: 'He who lifted the mountain (Lord Krishna)',
              examTrap: 'दोनों पद मिलकर किसी तीसरे विशेष व्यक्ति (श्रीकृष्ण) का बोध कराते हैं, अतः सदैव **बहुव्रीहि**।',
            },
            {
              samastPad: 'पीताम्बर',
              vigrah: 'पीला है जो अंबर (वस्त्र) [कर्मधारय]  •  पीत हैं अंबर जिसके (श्रीकृष्ण) [बहुव्रीहि]',
              samasType: 'कर्मधारय / बहुव्रीहि समास',
              englishMeaning: 'yellow garment / One clad in yellow (Krishna)',
              examTrap: 'पद में **“मोर मुगट पीताम्बर सोहे”** वस्त्र के अर्थ में है (`पीला है जो वस्त्र` → **कर्मधारय**); यदि तीसरे अर्थ (श्रीकृष्ण) में विग्रह करें तो **बहुव्रीहि**।',
            },
            {
              samastPad: 'नरहरि / नरसिंह',
              vigrah: 'नर और सिंह के समान रूप वाले (भगवान का अवतार — बहुव्रीहि) / सिंह के समान नर (कर्मधारय)',
              samasType: 'बहुव्रीहि / कर्मधारय समास',
              englishMeaning: 'half-man, half-lion incarnation of Vishnu',
              examTrap: 'विष्णु के विशेष अवतार के रूप में विग्रह करने पर **बहुव्रीहि समास** प्राथमिकता से माना जाता है।',
            },
            {
              samastPad: 'गजराज',
              vigrah: 'गजों (हाथियों) का राजा',
              samasType: 'संबंध तत्पुरुष समास',
              englishMeaning: 'king of elephants',
            },
            {
              samastPad: 'मोर-मुकुट (मोर मुगट)',
              vigrah: 'मोर के पंखों से बना मुकुट',
              samasType: 'मध्यमपदलोपी तत्पुरुष समास',
              englishMeaning: 'crown adorned with peacock feathers',
              examTrap: '‘के पंखों से बना’ मध्य पदों का लोप हुआ है।',
            },
            {
              samastPad: 'भाव-भक्ति (भाव भगती)',
              vigrah: 'भाव और भक्ति (तथा श्रद्धा से युक्त भक्ति)',
              samasType: 'द्वंद्व / कर्मधारय समास',
              englishMeaning: 'emotion and devotion / loving devotion',
              examTrap: '‘भाव और भक्ति’ लिखने पर **द्वंद्व**, और ‘भावपूर्ण है जो भक्ति’ लिखने पर **कर्मधारय**।',
            },
            {
              samastPad: 'अधीर (अधीराँ)',
              vigrah: 'न धीर (धैर्य से रहित)',
              samasType: 'नञ् तत्पुरुष समास',
              englishMeaning: 'without patience / restless',
              examTrap: '‘अ’ निषेधवाचक उपसर्ग लगने से **नञ् तत्पुरुष** (या अव्ययीभाव यदि ‘धैर्य रहित’ लिखें)।',
            },
          ],
        },
      ],
    },
    {
      id: 'meera-cbse-qa',
      title: '7. NCERT प्रश्न-अभ्यास व CBSE बोर्ड प्रश्नोत्तर (2–3 अंक)',
      blocks: [
        {
          type: 'qa',
          marks: 2,
          tag: 'NCERT प्रश्न-अभ्यास',
          question: 'पहले पद में मीरा ने हरि से अपनी पीड़ा हरने की विनती किस प्रकार की है? (NCERT क-1)',
          answer:
            'पहले पद में मीरा ने स्वयं को गिरधर की दासी बताकर तथा प्रभु को उनके भक्त-रक्षा के तीन पूर्व उदाहरण याद दिलाकर विनती की है— जैसे आपने दुशासन से द्रौपदी की लाज बचाई, भक्त प्रह्लाद के लिए नरसिंह रूप धरा और डूबते गजराज की पीड़ा काटी, वैसे ही मेरी भी सांसारिक पीड़ा दूर कीजिए।',
          markingTip: 'द्रौपदी, प्रह्लाद और गजराज — तीनों उदाहरण संक्षेप में अवश्य लिखें।',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'NCERT प्रश्न-अभ्यास',
          question:
            'दूसरे पद में मीराबाई श्याम की चाकरी क्यों करना चाहती हैं? स्पष्ट कीजिए। (NCERT क-2)',
          answer:
            'मीराबाई हर पल श्रीकृष्ण के समीप रहकर उनके दर्शन पाना चाहती हैं, इसलिए वे उनकी चाकरी (सेवा) करने को तत्पर हैं। वे मानती हैं कि चाकरी करने से उन्हें एक साथ तीन आध्यात्मिक लाभ (तीनों बातें) प्राप्त होंगे— नित्य दर्शन का अवसर, प्रभु के नाम-स्मरण रूपी जेब-खर्च और भाव-भक्ति रूपी स्थायी जागीर।',
          markingTip: '‘तीनों लाभ’ (दर्शन, स्मरण, भाव-भक्ति) को बिंदुवार स्पष्ट करने से 3/3 अंक पक्के होते हैं।',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'NCERT प्रश्न-अभ्यास',
          question: 'मीराबाई ने श्रीकृष्ण के रूप-सौंदर्य का वर्णन कैसे किया है? (NCERT क-3)',
          answer:
            'मीरा के अनुसार श्रीकृष्ण के सिर पर मोरपंख का मुकुट और शरीर पर पीले वस्त्र (पीतांबर) अत्यंत शोभायमान हैं। उनके गले में वनफूलों की वैजंती माला सुशोभित है और वे वृंदावन में मधुर मुरली बजाते हुए गायें चराते हैं।',
          markingTip: '4 मुख्य विशेषण याद रखें: मोर-मुकुट, पीतांबर, वैजंती माला और मुरली बजाते हुए धेनु चराना।',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'NCERT प्रश्न-अभ्यास',
          question: 'मीराबाई की भाषा शैली पर प्रकाश डालिए। (NCERT क-4)',
          answer:
            'मीराबाई की काव्य-भाषा में राजस्थानी, ब्रज और गुजराती भाषाओं का स्वाभाविक मिश्रण मिलता है तथा कहीं-कहीं पंजाबी, खड़ी बोली और पूर्वी बोलियों के प्रयोग भी दिखाई देते हैं (जैसे— म्हाने, रहस्यूँ, पास्यूँ, घणो, हिवड़ो)। उनकी शैली अत्यंत सरल, सहज, भावानुकूल और संगीतात्मक गेय पद शैली है, जिसमें दैन्य एवं माधुर्य भाव की भक्ति, अनुप्रास-दृष्टांत अलंकार तथा सजीव बिंब-विधान प्रमुखता से दिखाई देते हैं।',
          markingTip: 'तीन प्रमुख बोलियाँ (राजस्थानी, ब्रज, गुजराती) + संगीतात्मक गेय शैली + उदाहरण शब्द अवश्य लिखें।',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'NCERT प्रश्न-अभ्यास',
          question: 'मीरा श्रीकृष्ण को पाने के लिए क्या-क्या कार्य करने को तैयार हैं? (NCERT क-5)',
          answer:
            'मीरा श्रीकृष्ण की दासी (चाकर) बनने, उनके लिए बाग-बगीचे लगाने, वृंदावन की कुंज गलियों में उनकी लीलाएँ गाने, ऊँचे महलों के बीच फुलवाड़ी/झरोखे बनवाने और कुसुंबी साड़ी पहनकर आधी रात को यमुना तट पर प्रतीक्षा करने को भी तैयार हैं।',
          markingTip: 'प्रभु के प्रति समर्पण व निस्वार्थ प्रेम की भावना को अंतिम पंक्ति में जोड़ें।',
        },
      ],
    },
  ],
};
