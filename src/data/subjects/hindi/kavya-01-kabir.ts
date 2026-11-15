import { Subtopic } from '../../../types/curriculum';

export const subtopicKabirKiSakhi: Subtopic = {
  id: 'hindi-kavya-01-kabir',
  slug: 'kabir-ki-sakhi',
  title: 'पाठ 1: कबीर — साखी (Kabir ki Sakhi)',
  subtitle:
    'सधुक्कड़ी व पचमेल खिचड़ी भाषा की 8 अमूल्य साखियाँ — अहंकार-त्याग, ईश्वर-अनुभूति, निंदक का महत्व और प्रेम-भक्ति (Hover/Tap Word Lens + CBSE Q&A)।',
  estimatedMinutes: 25,
  difficulty: 'Core CBSE',
  ncertSection: 'स्पर्श भाग-2 • काव्यखंड पाठ 1',
  learningObjectives: [
    '‘साखी’ शब्द का अर्थ (‘साक्षी’ का तद्भव रूप, प्रत्यक्ष ज्ञान) व दोहा छंद (13-11 मात्राएँ) समझना।',
    'सधुक्कड़ी / पचमेल खिचड़ी शब्दों (जैसे नेड़ा, भुवंगम, अषिर, मुराड़ा) का मानक हिंदी रूप जानना।',
    'मीठी वाणी, ‘मैं’ (अहंकार) बनाम ‘हरि’, निंदक के लाभ और प्रेम के ढाई आखर का भावार्थ लिखना।',
    'पठित काव्यांश (5 अंक) व वर्णनात्मक बोर्ड प्रश्नों (2–3 अंक) में मानक हिंदी में सटीक उत्तर लिखना।',
  ],
  keywords: [
    'कबीर',
    'साखी',
    'कस्तूरी कुंडलि',
    'बिरह भुवंगम',
    'निंदक नेड़ा',
    'पोथी पढ़ि पढ़ि',
    'सधुक्कड़ी',
    'पचमेल खिचड़ी',
    'मुहावरे',
    'समास',
    'शब्दार्थ',
    'english transcript',
    'kabir sakhi',
  ],
  sections: [
    {
      id: 'kabir-parichay-and-language',
      title: '1. कवि-परिचय, ‘साखी’ का अर्थ और भाषा की पहचान',
      blocks: [
        {
          type: 'ncert-reference',
          title: 'पाठ 1: कबीर — साखी — Official NCERT PDF',
          bookName: 'स्पर्श भाग-2 — काव्यखंड',
          pdfPath: '/ncert/hindi/jhsp101.pdf',
          pdfStartPage: 1,
          pdfEndPage: 7,
          note: 'Preview or open the official NCERT Sparsh Bhag-2 chapter PDF (कवि-परिचय, पाठ-प्रवेश, 8 साखियाँ, प्रश्न-अभ्यास व शब्दार्थ) alongside the Word Lens & bilingual transcript below.',
        },
        {
          type: 'quick-summary',
          title: 'कबीर और साखी — Exam Glance',
          bullets: [
            '**कवि:** संत कबीरदास (1398–1518 ई.), जन्म: काशी, गुरु: रामानंद, देहावसान: मगहर।',
            '**‘साखी’ क्या है?** संस्कृत शब्द **‘साक्षी’** का तद्भव रूप, जो **‘साक्ष्य’** (प्रत्यक्ष अनुभव-ज्ञान) से बना है। कबीर शास्त्रीय (किताबी) ज्ञान से अधिक प्रत्यक्ष अनुभव व सत्संग को महत्व देते थे।',
            '**छंद:** साखी वस्तुतः **दोहा छंद** है (पहले व तीसरे चरण में 13 और दूसरे व चौथे चरण में 11 मात्राएँ — कुल 24 मात्राएँ)।',
            '**भाषा:** **सधुक्कड़ी** या **पचमेल खिचड़ी** (अवधी, राजस्थानी, भोजपुरी और पंजाबी शब्दों का मेल)।',
          ],
        },
        {
          type: 'callout',
          variant: 'analogy',
          title: 'For English-Medium Thinkers: How to Study Kabir Without Confusion',
          body: 'Kabir travelled across North India speaking to ordinary people, so his poems mix regional words (`बाँणी`, `नेड़ा`, `मुवा`, `अषिर`). Think of these verses like **two-line proverbs (दोहे)**:\n• Every highlighted word below shows its **Exam-Safe मानक हिंदी (Standard Hindi)** meaning + English meaning when you hover or tap.\n• In CBSE board answers, ALWAYS translate regional dialect words into standard Hindi (write `वाणी`, `निकट`, `मर गया`, `अक्षर` — never dialect forms!).',
        },
      ],
    },
    {
      id: 'kabir-sakhis-1-to-4',
      title: '2. साखियाँ 1 से 4: वाणी, घट-घट में राम, अहंकार और आध्यात्मिक जागृति',
      blocks: [
        {
          type: 'poetic-stanza',
          stanzaLabel: 'साखी 1 — मीठी वाणी और अहंकार का त्याग',
          dialectBadge: 'सधुक्कड़ी (दोहा छंद)',
          stanzaText: `ऐसी बाँणी बोलिये, मन का आपा खोइ।
अपना तन सीतल करै, औरन कौं सुख होइ।।`,
          words: [
            {
              word: 'बाँणी',
              hindiMeaning: 'वाणी / बोली',
              englishMeaning: 'speech / words spoken',
              grammarNote: 'तद्भव (सधुक्कड़ी) • मानक रूप: वाणी',
              exampleSentence: 'हमें सदैव विनम्र और मधुर वाणी का प्रयोग करना चाहिए।',
            },
            {
              word: 'आपा',
              hindiMeaning: 'अहंकार / घमंड (अहं भाव)',
              englishMeaning: 'ego / arrogance / pride',
              grammarNote: 'भाववाचक संज्ञा • पर्याय: अहंकार, दर्प',
              exampleSentence: 'अहंकार का त्याग करने से मन में शांति आती है।',
            },
            {
              word: 'सीतल',
              hindiMeaning: 'शीतल / शांत और सुखद',
              englishMeaning: 'cool / calm / peaceful',
              grammarNote: 'तद्भव रूप • मानक रूप: शीतल',
              exampleSentence: 'मधुर वचन सुनकर श्रोता का मन शीतल हो जाता है।',
            },
            {
              word: 'औरन',
              hindiMeaning: 'दूसरों को / अन्य लोगों को',
              englishMeaning: 'others / fellow beings',
              grammarNote: 'सधुक्कड़ी बहुवचन रूप • मानक: दूसरों (कौं = को)',
              exampleSentence: 'सज्जन व्यक्ति दूसरों के सुख का सदा ध्यान रखते हैं।',
            },
          ],
          prasang:
            'प्रस्तुत साखी हमारी पाठ्यपुस्तक ‘स्पर्श भाग-2’ में संकलित संत कबीर की ‘साखी’ से ली गई है। इसमें कबीर ने अहंकार त्यागकर मधुर वाणी बोलने की शिक्षा दी है।',
          bhavarthHindi:
            'कबीरदास जी कहते हैं कि मनुष्य को अपने मन का अहंकार त्यागकर ऐसी मीठी और विनम्र वाणी बोलनी चाहिए जिससे बोलने वाले का अपना तन-मन भी शांत और शीतल हो जाए तथा सुनने वाले अन्य लोगों को भी सुख और आनंद की अनुभूति हो। मीठी वाणी से कटुता समाप्त होती है और आपसी प्रेम बढ़ता है।',
          englishHelper:
            'Give up ego (`आपा`) and speak such gentle, sweet words (`बाँणी`) that both you feel inner peace/coolness (`तन सीतल`) and others (`औरन`) experience comfort and joy.',
          poeticDevices: [
            '‘बाँणी बोलिये’ और ‘आपा खोइ’ में सहज अनुप्रास व मुहावरेदार प्रयोग (आपा खोना = अहंकार छोड़ना)।',
            '‘तन सीतल करै’ का लाक्षणिक अर्थ: क्रोध रहित मानसिक शांति मिलना।',
          ],
        },
        {
          type: 'poetic-stanza',
          stanzaLabel: 'साखी 2 — कस्तूरी मृग और घट-घट में ईश्वर',
          dialectBadge: 'सधुक्कड़ी (दृष्टांत भाव)',
          stanzaText: `कस्तूरी कुंडलि बसै, मृग ढूँढै बन माँहि।
ऐसैं घटि घटि राँम है, दुनियाँ देखै नाँहिं।।`,
          words: [
            {
              word: 'कस्तूरी',
              hindiMeaning: 'हिरण की नाभि में पाया जाने वाला सुगंधित पदार्थ',
              englishMeaning: 'fragrant musk found in a deer’s navel',
              grammarNote: 'संज्ञा (स्त्रीलिंग) • आध्यात्मिक प्रतीक: भीतर स्थित ईश्वर',
              exampleSentence: 'मनुष्य सुख को बाहर खोजता है, जबकि वास्तविक शांति कस्तूरी की भाँति उसके भीतर ही है।',
            },
            {
              word: 'कुंडलि',
              hindiMeaning: 'नाभि',
              englishMeaning: 'navel',
              grammarNote: 'सधुक्कड़ी रूप • मानक रूप: नाभि',
              exampleSentence: 'सुगंधित कस्तूरी मृग की नाभि में ही विद्यमान रहती है।',
            },
            {
              word: 'मृग',
              hindiMeaning: 'हिरण (प्रतीक: अज्ञानी मनुष्य)',
              englishMeaning: 'deer (symbol for ignorant human)',
              grammarNote: 'तत्सम संज्ञा',
              exampleSentence: 'अज्ञानवश मनुष्य कस्तूरी मृग की तरह बाहर भटकता रहता है।',
            },
            {
              word: 'माँहि',
              hindiMeaning: 'में / भीतर',
              englishMeaning: 'inside / within',
              grammarNote: 'सधुक्कड़ी अधिकरण अव्यय • मानक: में',
              exampleSentence: 'ईश्वर प्रत्येक प्राणी के हृदय में निवास करते हैं।',
            },
            {
              word: 'घटि घटि',
              hindiMeaning: 'कण-कण में / प्रत्येक प्राणी के हृदय में',
              englishMeaning: 'in every heart / every particle',
              grammarNote: 'पुनरुक्ति प्रकाश अलंकार • अर्थ: सर्वव्यापी होना',
              exampleSentence: 'संतों के अनुसार परमात्मा घट-घट में व्याप्त हैं।',
            },
          ],
          prasang:
            'प्रस्तुत साखी में कबीर ने कस्तूरी मृग के उदाहरण द्वारा ईश्वर की सर्वव्यापकता और मनुष्य के अज्ञान को प्रकट किया है।',
          bhavarthHindi:
            'कबीर कहते हैं कि जिस प्रकार सुगंधित कस्तूरी हिरण की अपनी ही नाभि में बसती है, परंतु अज्ञानता के कारण वह उस सुगंध को पूरे जंगल में ढूँढता फिरता है; ठीक उसी प्रकार ईश्वर संसार के कण-कण और प्रत्येक मनुष्य के हृदय में बसते हैं, पर अज्ञान और मोह-माया के कारण दुनिया उन्हें अपने भीतर न देखकर मंदिर-मस्जिद या बाहरी आडंबरों में खोजती है।',
          englishHelper:
            'Just as musk lies inside the deer’s own navel while the deer frantically searches the forest for its scent, God (`राँम`) resides within every heart (`घटि घटि`), yet worldly people fail to notice due to ignorance.',
          poeticDevices: [
            '**पुनरुक्ति प्रकाश अलंकार:** ‘घटि घटि’ (शब्द दोहराव से सर्वव्यापकता पर बल)।',
            '**दृष्टांत अलंकार:** हिरण की कस्तूरी और मनुष्य के भीतर ईश्वर की स्थिति में समानता।',
          ],
        },
        {
          type: 'poetic-stanza',
          stanzaLabel: 'साखी 3 — अहंकार (‘मैं’) बनाम ईश्वर (‘हरि’)',
          dialectBadge: 'सधुक्कड़ी (रूपकातिशयोक्ति)',
          stanzaText: `जब मैं था तब हरि नहीं, अब हरि हैं मैं नाँहि।
सब अँधियारा मिटि गया, जब दीपक देख्या माँहि।।`,
          words: [
            {
              word: 'मैं',
              hindiMeaning: 'अहंकार / ‘मैं ही सब कुछ हूँ’ का भाव',
              englishMeaning: 'ego / false sense of “I”',
              grammarNote: 'यहाँ सर्वनाम नहीं, ‘अहंकार’ का प्रतीक है',
              exampleSentence: 'जब तक मन में ‘मैं’ (अहंकार) रहता है, तब तक विनय का उदय नहीं होता।',
            },
            {
              word: 'हरि',
              hindiMeaning: 'परमात्मा / ईश्वर',
              englishMeaning: 'God / Supreme Spirit',
              grammarNote: 'तत्सम संज्ञा • आध्यात्मिक प्रतीक: परम सत्य',
              exampleSentence: 'अहंकार के समाप्त होते ही हृदय में ईश्वर का वास होता है।',
            },
            {
              word: 'अँधियारा',
              hindiMeaning: 'अंधकार (प्रतीक: अज्ञान व माया-मोह)',
              englishMeaning: 'darkness (symbol of ignorance)',
              grammarNote: 'तद्भव रूप • प्रतीक: अज्ञान रूपी अंधकार',
              exampleSentence: 'सद्ज्ञान के प्रकाश से अज्ञान का सारा अंधकार मिट जाता है।',
            },
            {
              word: 'दीपक',
              hindiMeaning: 'दीया (प्रतीक: ज्ञान और भक्ति का प्रकाश)',
              englishMeaning: 'lamp (symbol of spiritual wisdom)',
              grammarNote: 'तत्सम संज्ञा • प्रतीक: आत्मज्ञान',
              exampleSentence: 'गुरु के उपदेश से हृदय में ज्ञान का दीपक प्रज्वलित हुआ।',
            },
            {
              word: 'देख्या',
              hindiMeaning: 'देखा / अनुभव किया',
              englishMeaning: 'saw / realized within',
              grammarNote: 'सधुक्कड़ी क्रिया रूप • मानक: देखा',
              exampleSentence: 'आत्मचिंतन करने पर मनुष्य को अपने भीतर ही सत्य दिखाई देता है।',
            },
          ],
          prasang:
            'इस साखी में कबीर ने बताया है कि अहंकार और ईश्वर एक साथ एक ही हृदय में नहीं रह सकते।',
          bhavarthHindi:
            'कबीरदास कहते हैं कि जब तक मेरे मन में ‘मैं’ अर्थात अहंकार का वास था, तब तक मुझे ईश्वर (हरि) की प्राप्ति नहीं हुई। अब हृदय में ईश्वर का निवास हो गया है और अहंकार पूरी तरह समाप्त हो गया है। जैसे ही मैंने अपने अंतर्मन में ज्ञान रूपी दीपक को देखा (अर्थात ईश्वर के दर्शन किए), मेरे भीतर का अज्ञान रूपी सारा अंधकार मिट गया।',
          englishHelper:
            'When ego (“I”) existed inside me, God was absent; now that God dwells within, ego is gone. All inner darkness of ignorance vanished the moment I beheld the lamp of wisdom (`दीपक`) inside my heart.',
          poeticDevices: [
            '**प्रतीकात्मकता (Symbolism):** `मैं` = अहंकार, `अँधियारा` = अज्ञान, `दीपक` = ज्ञान का प्रकाश।',
            '**विरोधाभास / सिद्धांत:** एक म्यान में दो तलवारें नहीं समा सकतीं — अहंकार और भक्ति साथ नहीं रह सकते।',
          ],
        },
        {
          type: 'poetic-stanza',
          stanzaLabel: 'साखी 4 — अज्ञानी संसार का सुख बनाम कबीर का दुख',
          dialectBadge: 'सधुक्कड़ी (प्रतीक प्रधान)',
          stanzaText: `सुखिया सब संसार है, खायै अरू सोवै।
दुखिया दास कबीर है, जागै अरू रोवै।।`,
          words: [
            {
              word: 'सुखिया',
              hindiMeaning: 'सुखी (भौतिक भोग में मग्न अज्ञानी लोग)',
              englishMeaning: 'carefree / superficially happy',
              grammarNote: 'तद्भव विशेषण • मानक: सुखी',
              exampleSentence: 'सांसारिक सुखों में डूबा व्यक्ति स्वयं को सुखी मान बैठता है।',
            },
            {
              word: 'खायै',
              hindiMeaning: 'खाता है (सांसारिक भोग करता है)',
              englishMeaning: 'eats / indulges in worldly pleasures',
              grammarNote: 'क्रिया (सधुक्कड़ी) • मानक: खाता है',
              exampleSentence: 'केवल खाना और सोना मनुष्य जीवन का एकमात्र उद्देश्य नहीं है।',
            },
            {
              word: 'अरू',
              hindiMeaning: 'और',
              englishMeaning: 'and',
              grammarNote: 'समुच्चयबोधक अव्यय (तद्भव) • मानक: और',
              exampleSentence: 'संत ज्ञान और भक्ति के मार्ग पर चलते हैं।',
            },
            {
              word: 'दुखिया',
              hindiMeaning: 'दुखी / चिंतित',
              englishMeaning: 'sorrowful / deeply troubled',
              grammarNote: 'विशेषण • मानक: दुखी',
              exampleSentence: 'सच्चे संत संसार की अज्ञानता को देखकर दुखी होते हैं।',
            },
            {
              word: 'जागै',
              hindiMeaning: 'जागता है (प्रतीक: ईश्वर के प्रति सचेत व जागरूक)',
              englishMeaning: 'stays awake (symbol: spiritually alert)',
              grammarNote: 'क्रिया • प्रतीक: आत्मिक जागरण',
              exampleSentence: 'ज्ञानी व्यक्ति आध्यात्मिक सत्य के प्रति सदैव जाग्रत रहता है।',
            },
          ],
          prasang:
            'प्रस्तुत साखी में कबीर ने भौतिक सुखों में डूबे अज्ञानी संसार और प्रभु-भक्ति में व्याकुल साधक के अंतर को दर्शाया है।',
          bhavarthHindi:
            'कबीर कहते हैं कि सारा संसार अज्ञान के कारण सुखी प्रतीत होता है क्योंकि लोग केवल खाते-पीते हैं और अज्ञान की नींद सोए रहते हैं; उन्हें जीवन के वास्तविक उद्देश्य या ईश्वर की कोई चिंता नहीं है। इसके विपरीत, प्रभु के दास कबीर दुखी हैं क्योंकि वे सत्य के प्रति जाग्रत हैं और ईश्वर के विरह तथा संसार की अज्ञानता को देखकर रोते हैं।',
          englishHelper:
            'The worldly crowd seems “happy” merely eating and sleeping in spiritual ignorance (`सोना` = ignorance). Meanwhile, servant Kabir is “sorrowful” because he is spiritually awake (`जागना` = awareness) and weeps yearning for God and seeing humanity lost in illusion.',
          poeticDevices: [
            '**प्रतीक (CBSE Direct Question!):** `सोना` = अज्ञान में बेसुध रहना; `जागना` = ईश्वर व सत्य के प्रति जागरूक होना।',
            '**विरोध / व्यंग्य:** अज्ञानी का सुख वास्तव में अज्ञान है, और ज्ञानी का दुख ईश्वर-मिलन की तड़प है।',
          ],
        },
        {
          type: 'checkpoint',
          prompt:
            'CBSE Board Trap Check: चौथी साखी में ‘सोना’ और ‘जागना’ क्रमशः किसके प्रतीक हैं?',
          options: [
            { id: 'a', label: 'रात की नींद और सुबह उठना', sublabel: 'Literal sleep & waking' },
            { id: 'b', label: 'अज्ञान में डूबे रहना और प्रभु के प्रति जागरूक रहना', sublabel: 'Spiritual ignorance vs. spiritual awakening' },
            { id: 'c', label: 'आलस्य और कठिन परिश्रम', sublabel: 'Laziness vs. hard work' },
          ],
          correctIds: ['b'],
          successMsg: 'बिल्कुल सही! यही NCERT प्रश्न (क-4) का मुख्य बिंदु है — यहाँ ‘सोना’ अज्ञानता का और ‘जागना’ ईश्वर के प्रति चेतना/जागरूकता का प्रतीक है।',
          hintMsg: 'ध्यान दें: कबीर आध्यात्मिक संदर्भ में बात कर रहे हैं। केवल शारीरिक नींद इसका उत्तर नहीं है।',
        },
      ],
    },
    {
      id: 'kabir-sakhis-5-to-8',
      title: '3. साखियाँ 5 से 8: विरह-वेदना, निंदक का लाभ, प्रेम का अक्षर और सर्वस्व त्याग',
      blocks: [
        {
          type: 'poetic-stanza',
          stanzaLabel: 'साखी 5 — विरह रूपी सर्प और प्रभु-मिलन की व्याकुलता',
          dialectBadge: 'सधुक्कड़ी (रूपक अलंकार)',
          stanzaText: `बिरह भुवंगम तन बसै, मंत्र न लागै कोइ।
राम बियोगी ना जिवै, जिवै तो बौरा होइ।।`,
          words: [
            {
              word: 'बिरह',
              hindiMeaning: 'विरह / बिछड़ने की पीड़ा (तड़प)',
              englishMeaning: 'pangs of separation / longing for God',
              grammarNote: 'तद्भव संज्ञा • मानक वर्तनी: विरह',
              exampleSentence: 'ईश्वर से विरह की पीड़ा भक्त के हृदय को व्याकुल कर देती है।',
            },
            {
              word: 'भुवंगम',
              hindiMeaning: 'भुजंग / साँप (सर्प)',
              englishMeaning: 'venomous snake / serpent',
              grammarNote: 'तद्भव रूप • मानक रूप: भुजंग / सर्प',
              exampleSentence: 'विरह रूपी सर्प के डँसने पर कोई सांसारिक उपचार काम नहीं आता।',
            },
            {
              word: 'बियोगी',
              hindiMeaning: 'वियोगी / प्रिय (ईश्वर) से बिछड़ा हुआ भक्त',
              englishMeaning: 'one separated from the Beloved (God)',
              grammarNote: 'तद्भव रूप • मानक: वियोगी',
              exampleSentence: 'सच्चा वियोगी प्रभु के दर्शन बिना चैन नहीं पाता।',
            },
            {
              word: 'जिवै',
              hindiMeaning: 'जीता है / जीवित रहता है',
              englishMeaning: 'lives / survives',
              grammarNote: 'क्रिया रूप • मानक: जीता है / जीना',
              exampleSentence: 'प्राणों के बिना शरीर जीवित नहीं रह सकता।',
            },
            {
              word: 'बौरा',
              hindiMeaning: 'पागल / बावला (प्रेम में सुध-बुध खोया हुआ)',
              englishMeaning: 'mad / ecstatic / beside oneself in love',
              grammarNote: 'तद्भव विशेषण • मानक: पागल / बावला',
              exampleSentence: 'प्रभु के प्रेम में लीन भक्त संसार को पागल-सा प्रतीत होता है।',
            },
          ],
          prasang:
            'प्रस्तुत साखी में कबीर ने ईश्वर से विछोह (विरह) की तीव्र पीड़ा का मार्मिक वर्णन किया है।',
          bhavarthHindi:
            'कबीर कहते हैं कि जिस व्यक्ति के शरीर रूपी हृदय में ईश्वर से बिछड़ने का ‘विरह रूपी साँप’ बस जाता है, उस पर कोई भी मंत्र, झाड़-फूँक या सांसारिक उपाय असर नहीं करता। ठीक इसी तरह, ईश्वर (राम) के वियोग में तड़पने वाला सच्चा भक्त या तो जीवित ही नहीं रह पाता, और यदि वह जीवित रह भी जाए तो ईश्वर-प्रेम में पागल (बौरा) जैसा हो जाता है। उसका उपचार केवल प्रभु-मिलन से ही संभव है।',
          englishHelper:
            'When the serpent of separation (`बिरह भुवंगम`) dwells inside the body, no earthly charm or medicine (`मंत्र`) works. A devotee separated from God (`राम बियोगी`) cannot survive normally — and if they do, they become mad/ecstatic in divine longing (`बौरा`).',
          poeticDevices: [
            '**रूपक अलंकार:** ‘बिरह भुवंगम’ — विरह पर भुजंग (साँप) का अभेद आरोप (विरह रूपी साँप)।',
            '**भाव-सौंदर्य:** सांसारिक औषधि/मंत्र आध्यात्मिक तड़प को शांत नहीं कर सकते।',
          ],
        },
        {
          type: 'poetic-stanza',
          stanzaLabel: 'साखी 6 — निंदक को पास रखने का महत्व',
          dialectBadge: 'सधुक्कड़ी (व्यावहारिक नीति)',
          stanzaText: `निंदक नेड़ा राखिये, आँगणि कुटी बँधाइ।
बिन साबण पाँणीं बिना, निरमल करै सुभाइ।।`,
          words: [
            {
              word: 'निंदक',
              hindiMeaning: 'निंदा या आलोचना करने वाला व्यक्ति',
              englishMeaning: 'critic / one who points out faults',
              grammarNote: 'संज्ञा / विशेषण • विलोम: प्रशंसक',
              exampleSentence: 'सच्चे निंदक की बातों से हमें अपने दोष सुधारने का अवसर मिलता है।',
            },
            {
              word: 'नेड़ा',
              hindiMeaning: 'निकट / पास',
              englishMeaning: 'near / close by',
              grammarNote: 'राजस्थानी/सधुक्कड़ी अव्यय • मानक: निकट',
              exampleSentence: 'बुद्धिमान व्यक्ति अपने आलोचकों को अपने निकट रखते हैं।',
            },
            {
              word: 'आँगणि',
              hindiMeaning: 'आँगन में',
              englishMeaning: 'in the courtyard',
              grammarNote: 'तद्भव अधिकरण रूप • मानक: आँगन में',
              exampleSentence: 'आलोचक को अपने आँगन में स्थान देना आत्म-सुधार का मार्ग है।',
            },
            {
              word: 'साबण',
              hindiMeaning: 'साबुन',
              englishMeaning: 'soap',
              grammarNote: 'तद्भव संज्ञा • मानक वर्तनी: साबुन',
              exampleSentence: 'अच्छी संगति बिना साबुन के मन के मैल को धो देती है।',
            },
            {
              word: 'निरमल',
              hindiMeaning: 'निर्मल / पवित्र / स्वच्छ',
              englishMeaning: 'pure / spotless / clean',
              grammarNote: 'तद्भव रूप • मानक रूप: निर्मल (निः + मल)',
              exampleSentence: 'दोषों को दूर करने से मनुष्य का स्वभाव निर्मल हो जाता है।',
            },
            {
              word: 'सुभाइ',
              hindiMeaning: 'स्वभाव (आचरण)',
              englishMeaning: 'nature / character / temperament',
              grammarNote: 'तद्भव रूप • मानक रूप: स्वभाव',
              exampleSentence: 'नियमित आत्म-निरीक्षण से हमारा स्वभाव सुंदर बनता है।',
            },
          ],
          prasang:
            'इस साखी में कबीर ने जीवन में आलोचना और आत्म-सुधार की उपयोगिता स्पष्ट की है।',
          bhavarthHindi:
            'कबीरदास कहते हैं कि जो व्यक्ति हमारी कमियाँ बताकर हमारी निंदा करता है, उसे हमें अपने सबसे निकट रखना चाहिए — हो सके तो अपने ही आँगन में उसके लिए कुटिया बनवा देनी चाहिए। क्योंकि वह आलोचक बिना साबुन और बिना पानी के ही हमारी बुराइयों को बार-बार सामने लाकर हमारे स्वभाव को पूर्णतः स्वच्छ और निर्मल बना देता है।',
          englishHelper:
            'Keep your critic (`निंदक`) close by (`नेड़ा`) — even build them a hut in your own courtyard! By constantly pointing out your flaws, they cleanse your character (`सुभाइ`) spotless (`निरमल`) without needing soap or water.',
          poeticDevices: [
            '**विभावना अलंकार:** कारण (साबुन-पानी) के बिना कार्य (स्वभाव स्वच्छ होना) का होना।',
            '**अनुप्रास अलंकार:** ‘निंदक नेड़ा’, ‘बिन साबण पाँणीं बिना’।',
          ],
        },
        {
          type: 'poetic-stanza',
          stanzaLabel: 'साखी 7 — किताबी ज्ञान से श्रेष्ठ प्रेम का एक अक्षर',
          dialectBadge: 'सधुक्कड़ी (मानवतावादी संदेश)',
          stanzaText: `पोथी पढ़ि पढ़ि जग मुवा, पंडित भया न कोइ।
ऐकै अषिर पीव का, पढ़ै सु पंडित होइ।।`,
          words: [
            {
              word: 'पोथी',
              hindiMeaning: 'धार्मिक पुस्तक / मोटी किताब',
              englishMeaning: 'thick religious book / scriptures',
              grammarNote: 'तद्भव संज्ञा (स्त्रीलिंग)',
              exampleSentence: 'केवल मोटी पुस्तकें रट लेने से व्यावहारिक ज्ञान नहीं आता।',
            },
            {
              word: 'मुवा',
              hindiMeaning: 'मर गया / समाप्त हो गया',
              englishMeaning: 'died / perished',
              grammarNote: 'सधुक्कड़ी भूतकालिक क्रिया • मानक: मर गया',
              exampleSentence: 'बिना अनुभव के केवल ग्रंथ पढ़ते-पढ़ते अनेक लोग चले गए।',
            },
            {
              word: 'अषिर',
              hindiMeaning: 'अक्षर (यहाँ ‘प्रेम’ या ‘ईश्वर’ का ज्ञान)',
              englishMeaning: 'letter / word (here: the word “Love/God”)',
              grammarNote: 'तद्भव रूप • मानक रूप: अक्षर',
              exampleSentence: 'प्रेम का एक ही अक्षर मनुष्य को सच्चा ज्ञानी बना देता है।',
            },
            {
              word: 'पीव',
              hindiMeaning: 'प्रिय (प्रभु / ईश्वर / प्रेम)',
              englishMeaning: 'Beloved (God / Divine Love)',
              grammarNote: 'तद्भव रूप • मानक रूप: प्रिय / परमात्मा',
              exampleSentence: 'भक्त के लिए उसका प्रिय परमात्मा ही सर्वस्व होता है।',
            },
            {
              word: 'पंडित',
              hindiMeaning: 'सच्चा ज्ञानी / विद्वान',
              englishMeaning: 'truly wise person / scholar',
              grammarNote: 'तत्सम संज्ञा',
              exampleSentence: 'विनम्र और प्रेमपूर्ण आचरण करने वाला ही सच्चा ज्ञानी (पंडित) है।',
            },
          ],
          prasang:
            'प्रस्तुत साखी में कबीर ने कोरे किताबी ज्ञान की अपेक्षा ईश्वर-प्रेम और मानव-प्रेम के महत्व को सर्वोपरि बताया है।',
          bhavarthHindi:
            'कबीर कहते हैं कि इस संसार के लोग मोटी-मोटी धार्मिक पुस्तकें (पोथियाँ) पढ़-पढ़कर मर गए, परंतु केवल पुस्तकीय ज्ञान से कोई भी सच्चा ज्ञानी (पंडित) नहीं बन सका। जो मनुष्य अपने प्रियतम ईश्वर अर्थात सच्चे प्रेम के एक भी अक्षर को हृदय से पढ़ और समझ लेता है, वही वास्तव में सच्चा ज्ञानी और विद्वान होता है।',
          englishHelper:
            'The whole world wore itself out reading thick holy books (`पोथी`), yet no one became truly wise (`पंडित`). Whoever reads and understands even a single letter (`अषिर`) of the Beloved (`पीव` — divine love) becomes genuinely wise.',
          poeticDevices: [
            '**पुनरुक्ति प्रकाश व अनुप्रास:** ‘पढ़ि पढ़ि’ (बार-बार पढ़ने की निरर्थकता); ‘पोथी पढ़ि पढ़ि... पंडित’ में ‘प’ वर्ण की आवृत्ति।',
            '**केंद्रीय विचार:** पुस्तकीय ज्ञान से बढ़कर अनुभव, प्रेम और करुणा का ज्ञान है।',
          ],
        },
        {
          type: 'poetic-stanza',
          stanzaLabel: 'साखी 8 — मोह-माया का त्याग और भक्ति का मार्ग',
          dialectBadge: 'सधुक्कड़ी (रूपक और प्रतीकात्मक)',
          stanzaText: `हम घर जाल्या आपणाँ, लिया मुराड़ा हाथि।
अब घर जालौं तास का, जे चलै हमारे साथि।।`,
          words: [
            {
              word: 'जाल्या',
              hindiMeaning: 'जला दिया / नष्ट कर दिया',
              englishMeaning: 'burnt down / destroyed',
              grammarNote: 'सधुक्कड़ी क्रिया • मानक: जलाया / जला दिया',
              exampleSentence: 'साधक ने अपने मन के मोह और स्वार्थ को जला दिया।',
            },
            {
              word: 'आपणाँ',
              hindiMeaning: 'अपना',
              englishMeaning: 'one’s own',
              grammarNote: 'सधुक्कड़ी सर्वनाम • मानक: अपना',
              exampleSentence: 'मनुष्य को सबसे पहले अपना आचरण सुधारना चाहिए।',
            },
            {
              word: 'मुराड़ा',
              hindiMeaning: 'जलती हुई लकड़ी / मशाल (प्रतीक: ज्ञान की मशाल)',
              englishMeaning: 'burning log / torch (symbol of knowledge)',
              grammarNote: 'सधुक्कड़ी संज्ञा • मानक रूप: मशाल / जलती लकड़ी',
              exampleSentence: 'ज्ञान की मशाल हाथ में लेकर अज्ञान के बंधन काटे जा सकते हैं।',
            },
            {
              word: 'जालौं',
              hindiMeaning: 'जलाऊँ / जला दूँगा',
              englishMeaning: 'I shall burn',
              grammarNote: 'क्रिया रूप • मानक: जलाऊँगा',
              exampleSentence: 'गुरु शिष्य के मन के सारे भ्रम दूर कर देता है।',
            },
            {
              word: 'तास',
              hindiMeaning: 'उसका',
              englishMeaning: 'that person’s / his or hers',
              grammarNote: 'तद्भव सर्वनाम • मानक: उसका',
              exampleSentence: 'जो सत्य के मार्ग पर चलता है, उसी का कल्याण होता है।',
            },
          ],
          prasang:
            'अंतिम साखी में कबीर ने भक्ति के मार्ग पर चलने के लिए सांसारिक मोह-माया के पूर्ण त्याग की शर्त रखी है।',
          bhavarthHindi:
            'कबीर कहते हैं कि मैंने हाथ में ज्ञान रूपी जलती हुई मशाल (मुराड़ा) लेकर अपना घर (अर्थात अपने मन का अहंकार और सांसारिक मोह-माया) स्वयं जला दिया है। अब जो भी साधक भक्ति के मार्ग पर मेरे साथ चलना चाहता है, मैं ज्ञान की इसी मशाल से उसका भी मोह-माया रूपी घर जला दूँगा — अर्थात प्रभु-भक्ति में सर्वस्व त्याग आवश्यक है।',
          englishHelper:
            'I took the burning torch of wisdom (`मुराड़ा`) in hand and burnt down my own house (ego & worldly attachment — `घर`). Now I will burn the house of anyone who chooses to walk the spiritual path with me!',
          poeticDevices: [
            '**प्रतीकार्थ:** `घर` = मोह-माया, स्वार्थ और सांसारिक वासनाएँ (भौतिक घर नहीं!); `मुराड़ा` = वैराग्य व ज्ञान की मशाल।',
            '**विशेष:** यह साखी वास्तविक घर जलाने की नहीं, बल्कि भीतर के विकार नष्ट करने की प्रेरणा देती है।',
          ],
        },
        {
          type: 'notebook-mistake',
          studentName: 'रोहन',
          title: 'साखी के उत्तर में बोली के शब्दों का सीधा प्रयोग',
          wrongWork:
            'कबीर ने निंदक को नेड़ा रखने को कहा क्योंकि वह बिना साबण पाँणीं के सुभाइ निरमल करता है।',
          teacherFix:
            'कबीर ने निंदक को अपने निकट रखने की सलाह दी है क्योंकि वह बिना साबुन और पानी के ही हमारे स्वभाव को निर्मल बना देता है।',
          whyWrong:
            'बोर्ड परीक्षा में उत्तर सदैव **मानक हिंदी (Standard Hindi)** में लिखे जाते हैं। `नेड़ा`, `साबण`, `पाँणीं`, `सुभाइ`, `मुवा` जैसे सधुक्कड़ी शब्दों को ज्यों-का-त्यों लिखने से वर्तनी व अभिव्यक्ति के अंक कटते हैं।',
        },
      ],
    },
    {
      id: 'kabir-english-transcript',
      title: '4. संपूर्ण अंग्रेज़ी अनुवाद (Full English Transcript — All 8 Sakhis)',
      blocks: [
        {
          type: 'english-transcript',
          title: 'Kabir ki Sakhi — Complete Bilingual Transcript',
          intro:
            'Read all 8 couplets alongside their faithful English translation to grasp Kabir’s spiritual logic before writing Standard Hindi (`मानक हिंदी`) answers in the exam.',
          segments: [
            {
              label: 'साखी 1 — मीठी वाणी व अहंकार-त्याग',
              hindiOriginal: `ऐसी बाँणी बोलिये, मन का आपा खोइ।
अपना तन सीतल करै, औरन कौं सुख होइ।।`,
              englishText:
                'Speak such gentle and sweet words, shedding all ego of your mind,\nthat your own body and mind grow cool and serene, and others too feel joy.',
            },
            {
              label: 'साखी 2 — कस्तूरी मृग',
              hindiOriginal: `कस्तूरी कुंडलि बसै, मृग ढूँढै बन माँहि।
ऐसैं घटि घटि राँम है, दुनियाँ देखै नाँहिं।।`,
              englishText:
                'The fragrant musk lies within the deer’s own navel, yet the deer searches for it across the entire forest;\nin the same way, God (`राँम`) dwells in every heart, yet the world fails to see Him within.',
            },
            {
              label: 'साखी 3 — ‘मैं’ बनाम ‘हरि’',
              hindiOriginal: `जब मैं था तब हरि नहीं, अब हरि हैं मैं नाँहि।
सब अँधियारा मिटि गया, जब दीपक देख्या माँहि।।`,
              englishText:
                'When “I” (ego) existed within me, Hari (God) was not there; now Hari dwells within, and ego is no more.\nAll darkness of ignorance vanished the moment I beheld the lamp of wisdom inside my heart.',
            },
            {
              label: 'साखी 4 — अज्ञानी संसार बनाम जागृत कबीर',
              hindiOriginal: `सुखिया सब संसार है, खायै अरू सोवै।
दुखिया दास कबीर है, जागै अरू रोवै।।`,
              englishText:
                'The entire world appears “happy,” merely eating and sleeping in spiritual unawareness;\nonly God’s servant Kabir is “sorrowful,” staying spiritually awake and weeping out of longing for truth and God.',
            },
            {
              label: 'साखी 5 — बिरह भुवंगम',
              hindiOriginal: `बिरह भुवंगम तन बसै, मंत्र न लागै कोइ।
राम बियोगी ना जिवै, जिवै तो बौरा होइ।।`,
              englishText:
                'When the serpent of separation dwells within one’s body, no earthly charm or remedy works;\none separated from Rama (God) cannot live — and if they survive, they become mad in divine love.',
            },
            {
              label: 'साखी 6 — निंदक का महत्व',
              hindiOriginal: `निंदक नेड़ा राखिये, आँगणि कुटी बँधाइ।
बिन साबण पाँणीं बिना, निरमल करै सुभाइ।।`,
              englishText:
                'Keep your critic close by — even build them a hut in your very courtyard;\nfor without soap and without water, they cleanse your nature and character spotless.',
            },
            {
              label: 'साखी 7 — प्रेम का ढाई/एक अक्षर',
              hindiOriginal: `पोथी पढ़ि पढ़ि जग मुवा, पंडित भया न कोइ।
ऐकै अषिर पीव का, पढ़ै सु पंडित होइ।।`,
              englishText:
                'The whole world kept reading thick scriptures and perished, yet none became truly wise;\nwhoever reads and lives even a single syllable of the Beloved’s love becomes genuinely wise.',
            },
            {
              label: 'साखी 8 — मोह-माया का घर जलाना',
              hindiOriginal: `हम घर जाल्या आपणाँ, लिया मुराड़ा हाथि।
अब घर जालौं तास का, जे चलै हमारे साथि।।`,
              englishText:
                'Taking the burning torch of wisdom in my hand, I burnt down my own house (ego and worldly attachment);\nnow I shall burn the house of anyone else who wishes to walk the spiritual path alongside me.',
            },
          ],
        },
      ],
    },
    {
      id: 'kabir-word-meanings',
      title: '5. संपूर्ण शब्दार्थ संकलन (Chapter Word Meanings & Self-Test)',
      blocks: [
        {
          type: 'chapter-word-bank',
          title: 'कबीर की साखी — संपूर्ण शब्दार्थ व मानक रूप तालिका',
          intro:
            'सधुक्कड़ी व तद्भव शब्दों को बोर्ड-अनुमोदित **मानक हिंदी** तथा English अर्थ सहित खोजें और `Self-Test: अर्थ छिपाएँ` बटन से स्वयं का परीक्षण करें।',
          extraWords: [
            {
              word: 'खोइ',
              hindiMeaning: 'खोकर / त्यागकर',
              englishMeaning: 'by giving up / discarding',
              grammarNote: 'पूर्वकालिक क्रिया (सधुक्कड़ी) • मानक: त्यागकर',
              exampleSentence: 'मन का अहंकार त्यागकर बोलने से संबंध प्रगाढ़ होते हैं।',
            },
            {
              word: 'नाँहिं',
              hindiMeaning: 'नहीं',
              englishMeaning: 'not',
              grammarNote: 'सधुक्कड़ी निषेधात्मक अव्यय • मानक: नहीं',
              exampleSentence: 'बिना परिश्रम के स्थायी सफलता नहीं मिलती।',
            },
            {
              word: 'राँम',
              hindiMeaning: 'निराकार ईश्वर / परमात्मा',
              englishMeaning: 'the formless Supreme Being (God)',
              grammarNote: 'कबीर के निर्गुण ईश्वर का नाम (दशरथ-पुत्र तक सीमित नहीं)',
              exampleSentence: 'कबीर के अनुसार राम सृष्टि के कण-कण में व्याप्त हैं।',
            },
          ],
        },
        {
          type: 'table',
          caption: 'NCERT भाषा अध्ययन प्रश्न 1 — पाठ में आए सधुक्कड़ी शब्दों के प्रचलित मानक हिंदी रूप',
          headers: ['पाठ का शब्द (सधुक्कड़ी)', 'प्रचलित हिंदी रूप', 'अर्थ (Meaning)'],
          rows: [
            ['जिवै', 'जीता है / जीना', 'lives / survives'],
            ['औरन', 'औरों को / दूसरों को', 'to others / fellow beings'],
            ['माँहि', 'में / भीतर', 'inside / within'],
            ['देख्या', 'देखा', 'saw / perceived'],
            ['भुवंगम', 'भुजंग / साँप', 'serpent / snake'],
            ['नेड़ा', 'निकट / पास', 'near / close by'],
            ['आँगणि', 'आँगन में', 'in the courtyard'],
            ['साबण', 'साबुन', 'soap'],
            ['मुवा', 'मर गया', 'died / perished'],
            ['पीव', 'प्रिय / परमात्मा', 'Beloved / God'],
            ['जालौं', 'जलाऊँ / जला दूँगा', 'I shall burn'],
            ['तास', 'उसका / उसके', 'his or hers / that person’s'],
          ],
        },
      ],
    },
    {
      id: 'kabir-muhavre',
      title: '6. पाठ के मुहावरे व वाक्य-प्रयोग (CBSE Muhavre Corner)',
      blocks: [
        {
          type: 'muhavre-list',
          title: 'कबीर की साखी से जुड़े प्रमुख मुहावरे व लाक्षणिक प्रयोग',
          note: 'CBSE में **अर्थ लिखने के साथ वाक्य में मूल मुहावरे का प्रयोग** करना होता है (वाक्य में अर्थ नहीं, मुहावरा आना चाहिए)। ध्यान दें कि साखी 1 में ‘आपा खोना’ का अर्थ ‘अहंकार त्यागना’ है, जबकि सामान्य हिंदी मुहावरे में इसका अर्थ ‘क्रोध में नियंत्रण खोना’ भी होता है।',
          items: [
            {
              idiom: 'आपा खोना',
              hindiMeaning: 'साखी संदर्भ: अहंकार/घमंड त्यागना • सामान्य मुहावरा: क्रोध या आवेग में विवेक खो बैठना',
              englishMeaning: 'giving up ego (Kabir) / losing temper or self-control (idiomatic)',
              sourceLine: 'साखी 1: “ऐसी बाँणी बोलिये, मन का आपा खोइ”',
              examSentence:
                'अवसर के अनुकूल प्रयोग: (कबीर) संत जन अपना **आपा खोकर** सबसे मधुर व्यवहार करते हैं। / (सामान्य) परीक्षा में प्रश्न कठिन देखकर राघव ने **आपा खो दिया**।',
            },
            {
              idiom: 'अपना घर जलाना / फूँकना',
              hindiMeaning: 'सांसारिक मोह-माया व स्वार्थ का पूर्ण त्याग करना (या स्वयं अपना नुकसान कर लेना)',
              englishMeaning: 'to renounce worldly attachments / sacrifice one’s selfish interests',
              sourceLine: 'साखी 8: “हम घर जाल्या आपणाँ, लिया मुराड़ा हाथि”',
              examSentence:
                'सच्चे साधक परमात्मा के मार्ग पर चलने के लिए मोह-माया रूपी **अपना घर जलाने** से भी पीछे नहीं हटते।',
            },
            {
              idiom: 'मुराड़ा हाथ में लेना (ज्ञान की मशाल उठाना)',
              hindiMeaning: 'अज्ञान व बुराइयों को समाप्त करने का दृढ़ संकल्प लेना',
              englishMeaning: 'to take up the torch of wisdom and inner reform',
              sourceLine: 'साखी 8: “लिया मुराड़ा हाथि”',
              examSentence:
                'समाज से अंधविश्वास मिटाने के लिए युवा सुधारकों ने **ज्ञान का मुराड़ा हाथ में ले लिया**।',
            },
            {
              idiom: 'मंत्र न लगना (कोई उपाय काम न आना)',
              hindiMeaning: 'किसी प्रयास, दवा या युक्ति का कोई असर न होना',
              englishMeaning: 'no remedy or trick proving effective',
              sourceLine: 'साखी 5: “बिरह भुवंगम तन बसै, मंत्र न लागै कोइ”',
              examSentence:
                'असाध्य अहंकार से ग्रस्त व्यक्ति को समझाने पर किसी नीतिज्ञ का **कोई मंत्र नहीं लगता**।',
            },
            {
              idiom: 'अंधियारा मिटना / ज्ञान का दीपक जलना',
              hindiMeaning: 'मन का अज्ञान व भ्रम दूर होकर सत्य का बोध होना',
              englishMeaning: 'darkness of ignorance vanishing upon realization of truth',
              sourceLine: 'साखी 3: “सब अँधियारा मिटि गया, जब दीपक देख्या माँहि”',
              examSentence:
                'गुरु के सान्निध्य में आते ही शिष्य के मन का **सारा अंधियारा मिट गया**।',
            },
          ],
        },
      ],
    },
    {
      id: 'kabir-samas',
      title: '7. पाठ के प्रमुख समास-विग्रह (Samas Breakdown)',
      blocks: [
        {
          type: 'samas-list',
          title: 'कबीर की साखी — प्रमुख समस्तपद, विग्रह व समास-भेद',
          note: 'CBSE में समास की पहचान **आपके लिखे विग्रह** पर निर्भर करती है। शब्द-आवृत्ति (`घटि-घटि`) प्रायः **अव्ययीभाव** होती है, जबकि ‘रूपी’ संबंध आने पर **कर्मधारय**।',
          items: [
            {
              samastPad: 'घटि-घटि',
              vigrah: 'प्रत्येक घट (हृदय/कण) में',
              samasType: 'अव्ययीभाव समास',
              englishMeaning: 'in every heart / particle',
              examTrap: 'संज्ञा शब्द की आवृत्ति (`घटि-घटि`, `घर-घर`, `गाँव-गाँव`) होने पर पुनरुक्ति द्वारा **अव्ययीभाव समास** बनता है — द्वंद्व मत लिखें!',
            },
            {
              samastPad: 'बिरह-भुवंगम',
              vigrah: 'विरह रूपी भुवंगम (सर्प)',
              samasType: 'कर्मधारय समास',
              englishMeaning: 'the serpent of separation',
              examTrap: 'उपमेय-उपमान (‘रूपी’) संबंध होने के कारण **कर्मधारय समास** और रूपक अलंकार दोनों हैं।',
            },
            {
              samastPad: 'राम-वियोगी',
              vigrah: 'राम (ईश्वर) का वियोगी',
              samasType: 'संबंध तत्पुरुष समास',
              englishMeaning: 'one separated from God',
              examTrap: '‘का’ कारक चिह्न का लोप होने से संबंध तत्पुरुष।',
            },
            {
              samastPad: 'निर्मल (निरमल)',
              vigrah: 'मल (दोष) से रहित / बिना मल के',
              samasType: 'अव्ययीभाव समास',
              englishMeaning: 'spotless / pure',
              examTrap: '‘निर्’ उपसर्ग के कारण सामान्यतः **अव्ययीभाव** मान्य; यदि ‘मल रहित है जो (मन/स्वभाव)’ लिखें तो बहुव्रीहि बनता है।',
            },
            {
              samastPad: 'साबुन-पानी',
              vigrah: 'साबुन और पानी',
              samasType: 'द्वंद्व समास',
              englishMeaning: 'soap and water',
              examTrap: 'दोनों पद प्रधान और ‘और’ योजक का लोप।',
            },
            {
              samastPad: 'सद्गुरु / सतसंग',
              vigrah: 'सत् (सच्चा) है जो गुरु / सत् (सच्चे जनों) का संग',
              samasType: 'कर्मधारय / तत्पुरुष',
              englishMeaning: 'true teacher / good company',
              examTrap: '‘सद्गुरु’ = **कर्मधारय** (विशेषण-विशेष्य), जबकि ‘सत्संग’ = **संबंध तत्पुरुष**।',
            },
          ],
        },
      ],
    },
    {
      id: 'kabir-cbse-qa',
      title: '8. NCERT प्रश्न-अभ्यास व CBSE बोर्ड परीक्षा प्रश्नोत्तर (2–3 अंक)',
      blocks: [
        {
          type: 'qa',
          marks: 2,
          tag: 'NCERT प्रश्न-अभ्यास',
          question:
            'मीठी वाणी बोलने से औरों को सुख और अपने तन को शीतलता कैसे प्राप्त होती है? (NCERT क-1)',
          answer:
            'जब मनुष्य अहंकार त्यागकर मीठी और विनम्र वाणी बोलता है, तो उसके भीतर का क्रोध और ईर्ष्या शांत हो जाती है, जिससे उसके अपने मन और तन को शीतलता (शांति) मिलती है। दूसरी ओर, मधुर वचन सुनकर श्रोताओं के हृदय को भी प्रसन्नता और सुख की अनुभूति होती है तथा आपसी संबंध मधुर बनते हैं।',
          markingTip:
            'दोनों पक्ष लिखें: (1) वक्ता के मन का अहंकार व क्रोध समाप्त → तन को शीतलता, (2) श्रोता को सम्मान व प्रसन्नता → औरों को सुख।',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'NCERT प्रश्न-अभ्यास',
          question:
            'दीपक दिखाई देने पर अँधियारा कैसे मिट जाता है? साखी के संदर्भ में स्पष्ट कीजिए। (NCERT क-2)',
          answer:
            'यहाँ ‘दीपक’ ईश्वर-भक्ति व आत्मज्ञान का और ‘अँधियारा’ अज्ञान एवं अहंकार का प्रतीक है। जिस प्रकार दीपक के जलते ही कमरे का अंधकार मिट जाता है, उसी प्रकार हृदय में ईश्वर-ज्ञान रूपी दीपक के प्रकाशित होते ही मन का सारा अज्ञान, भ्रम और अहंकार (‘मैं’) स्वतः समाप्त हो जाता है।',
          markingTip:
            '‘दीपक = ज्ञान’ और ‘अँधियारा = अज्ञान/अहंकार’ के प्रतीकार्थ लिखने पर पूरे अंक मिलते हैं।',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'NCERT प्रश्न-अभ्यास',
          question:
            'ईश्वर कण-कण में व्याप्त है, पर हम उसे क्यों नहीं देख पाते? (NCERT क-3)',
          answer:
            'ईश्वर संसार के कण-कण में और प्रत्येक प्राणी के हृदय में कस्तूरी की भाँति विद्यमान है, परंतु अज्ञान, अहंकार और मोह-माया के आवरण के कारण मनुष्य उन्हें अपने भीतर नहीं देख पाता। अज्ञानी व्यक्ति ईश्वर को अपने अंतर्मन में खोजने के बजाय मंदिर, मस्जिद, तीर्थयात्रा और बाहरी कर्मकांडों में भटकता रहता है।',
          markingTip:
            '‘कस्तूरी मृग का दृष्टांत’ + ‘अज्ञान, अहंकार व बाहरी आडंबर’ अवश्य लिखें।',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'NCERT प्रश्न-अभ्यास',
          question:
            'संसार में सुखी व्यक्ति कौन है और दुखी कौन? यहाँ ‘सोना’ और ‘जागना’ किसके प्रतीक हैं? इसका प्रयोग यहाँ क्यों किया गया है? स्पष्ट कीजिए। (NCERT क-4)',
          answer:
            'कबीर के अनुसार संसार में अज्ञानी और भौतिक सुखों (केवल खाने-पीने व सोने) में मग्न व्यक्ति स्वयं को सुखी समझता है, जबकि प्रभु-भक्ति और संसार के दुखों के प्रति जागरूक कबीर स्वयं को दुखी कहते हैं। यहाँ ‘सोना’ अज्ञान व मोह-माया में बेसुध पड़े रहने का प्रतीक है और ‘जागना’ ईश्वर एवं आध्यात्मिक सत्य के प्रति चेतना का प्रतीक है। इन प्रतीकों का प्रयोग इसलिए किया गया है ताकि आम पाठक अज्ञान की निद्रा और ज्ञान के जागरण का अंतर सहजता से समझ सके।',
          markingTip:
            'तीनों भाग स्पष्ट लिखें: (1) कौन सुखी-दुखी, (2) सोना = अज्ञान, जागना = आध्यात्मिक चेतना, (3) प्रयोग का उद्देश्य।',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'NCERT प्रश्न-अभ्यास',
          question:
            'अपने स्वभाव को निर्मल रखने के लिए कबीर ने क्या उपाय सुझाया है? (NCERT क-5)',
          answer:
            'अपने स्वभाव को निर्मल रखने के लिए कबीर ने निंदा करने वाले (निंदक) को अपने सबसे निकट, यहाँ तक कि अपने आँगन में कुटी बनाकर रखने का उपाय सुझाया है। निंदक हमारे दोषों को बार-बार उजागर करता है, जिससे हम अपनी कमियों को सुधार पाते हैं और बिना साबुन-पानी के हमारा स्वभाव स्वच्छ व पवित्र बन जाता है।',
          markingTip:
            '‘निंदक को निकट रखना’ तथा ‘दोषों से अवगत होकर आत्म-सुधार’ शब्दों का प्रयोग आवश्यक है।',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'NCERT प्रश्न-अभ्यास',
          question:
            '‘ऐकै अषिर पीव का, पढ़ै सु पंडित होइ’—इस पंक्ति द्वारा कवि क्या कहना चाहता है? (NCERT क-6)',
          answer:
            'इस पंक्ति के माध्यम से कबीर यह स्पष्ट करना चाहते हैं कि बड़ी-बड़ी धार्मिक पुस्तकें पढ़कर केवल शास्त्रीय पांडित्य का प्रदर्शन करने से कोई सच्चा ज्ञानी नहीं बन जाता। वास्तविक ज्ञानी (पंडित) वही है जो ‘पीव’ अर्थात परमात्मा और प्राणिमात्र के प्रति सच्चे प्रेम का एक भी अक्षर हृदय से पढ़ ले और उसे अपने आचरण में उतार ले।',
          markingTip:
            '‘पोथी ज्ञान (किताबी ज्ञान) की निरर्थकता’ बनाम ‘ईश्वर-प्रेम व मानव-प्रेम की श्रेष्ठता’ मुख्य बिंदु हैं।',
        },
        {
          type: 'qa',
          marks: 3,
          tag: 'NCERT प्रश्न-अभ्यास',
          question:
            'कबीर की उद्धृत साखियों की भाषा की विशेषता स्पष्ट कीजिए। (NCERT क-7)',
          answer:
            'कबीर की भाषा को **‘सधुक्कड़ी’** या **‘पचमेल खिचड़ी’** कहा जाता है, क्योंकि वे भ्रमणशील संत थे और उनकी वाणी में अवधी, राजस्थानी, भोजपुरी तथा पंजाबी शब्दों का स्वाभाविक मिश्रण मिलता है (जैसे— नेड़ा, आँगणि, मुवा, अषिर, जाल्या)। भाषा अत्यंत सरल, सहज, सजीव, उपदेशात्मक और दोहा छंद में रचित है, जिसमें प्रतीकों व रूपक-दृष्टांत अलंकारों का प्रभावी प्रयोग हुआ है।',
          markingTip:
            '‘सधुक्कड़ी / पचमेल खिचड़ी’ + कम से कम 2 बोलियों के नाम + 2–3 उदाहरण शब्द लिखें।',
        },
        {
          type: 'qa',
          marks: 2,
          tag: 'CBSE Board Pattern',
          question:
            '‘हम घर जाल्या आपणाँ, लिया मुराड़ा हाथि’ — यहाँ कबीर किस घर को जलाने की बात कर रहे हैं और क्यों?',
          answer:
            'यहाँ ‘घर’ मनुष्य के मन के अहंकार, स्वार्थ और सांसारिक मोह-माया का प्रतीक है। कबीर ने ज्ञान रूपी मशाल (मुराड़ा) से अपने भीतर के मोह-माया रूपी बंधनों को नष्ट कर दिया है ताकि वे निष्काम भाव से ईश्वर-भक्ति के मार्ग पर चल सकें।',
          markingTip:
            'कभी भी यह न लिखें कि कबीर ने सचमुच का घर जलाया — ‘मोह-माया और अहंकार का प्रतीक’ अवश्य लिखें।',
        },
      ],
    },
  ],
};
