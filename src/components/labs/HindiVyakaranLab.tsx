import { useMemo, useState } from 'react';
import {
  CheckCircle2,
  Feather,
  GitBranch,
  Layers,
  RotateCcw,
  Scale,
  Sparkles,
  Trophy,
  XCircle,
} from 'lucide-react';

type VyakaranTab = 'padbandh' | 'vakya' | 'samas' | 'muhavre';

interface GrammarQuestion {
  id: string;
  tag: string;
  before: string;
  highlight: string;
  after: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  shortcutRule: string;
}

const PADBANDH_QUESTIONS: GrammarQuestion[] = [
  {
    id: 'pb-1',
    tag: 'शीर्ष पद = संज्ञा',
    before: 'तालाब में खिले ',
    highlight: 'नीले रंग के सुंदर कमल',
    after: ' सबको आकर्षित करते हैं।',
    prompt: 'रेखांकित (Highlighted) अंश में कौन-सा पदबंध है?',
    options: ['संज्ञा पदबंध', 'विशेषण पदबंध', 'सर्वनाम पदबंध', 'क्रिया-विशेषण पदबंध'],
    correctIndex: 0,
    shortcutRule:
      'रेखांकित अंश का अंतिम मुख्य पद (शीर्ष पद) ‘कमल’ संज्ञा है, इसलिए पूरा पदबंध संज्ञा पदबंध होगा।',
  },
  {
    id: 'pb-2',
    tag: 'विशेषता तक ही रेखांकन',
    before: 'मैदान में ',
    highlight: 'तेज़ दौड़ने वाला',
    after: ' खिलाड़ी आज प्रथम आया।',
    prompt: 'रेखांकित अंश में कौन-सा पदबंध है?',
    options: ['संज्ञा पदबंध', 'विशेषण पदबंध', 'क्रिया पदबंध', 'सर्वनाम पदबंध'],
    correctIndex: 1,
    shortcutRule:
      'ध्यान दें: ‘खिलाड़ी’ संज्ञा को रेखांकित नहीं किया गया है! रेखांकन ‘तेज़ दौड़ने वाला’ पर समाप्त हो रहा है, जो ‘खिलाड़ी’ की विशेषता बता रहा है — अतः विशेषण पदबंध।',
  },
  {
    id: 'pb-3',
    tag: 'शीर्ष पद = सर्वनाम',
    before: '',
    highlight: 'शोर मचाने वाले तुम सब',
    after: ' तुरंत कक्षा से बाहर जाओ।',
    prompt: 'रेखांकित अंश का सही पदबंध भेद चुनें:',
    options: ['संज्ञा पदबंध', 'विशेषण पदबंध', 'सर्वनाम पदबंध', 'क्रिया पदबंध'],
    correctIndex: 2,
    shortcutRule:
      'अंतिम शीर्ष पद ‘तुम सब’ एक सर्वनाम है, जिससे पहले विशेषण विस्तार जुड़ा है — इसलिए यह सर्वनाम पदबंध है।',
  },
  {
    id: 'pb-4',
    tag: 'क्रिया समूह',
    before: 'तताँरा दिन-रात परिश्रम ',
    highlight: 'करता चला जा रहा था।',
    after: '',
    prompt: 'रेखांकित अंश में निहित पदबंध पहचानिए:',
    options: ['संज्ञा पदबंध', 'विशेषण पदबंध', 'क्रिया पदबंध', 'क्रिया-विशेषण पदबंध'],
    correctIndex: 2,
    shortcutRule:
      '‘करता चला जा रहा था’ में मुख्य क्रिया ‘करना’ के साथ रंजक व सहायक क्रियाएँ मिलकर एक कार्य व्यापार पूरा कर रही हैं — अतः क्रिया पदबंध।',
  },
  {
    id: 'pb-5',
    tag: 'क्रिया की रीति/स्थान',
    before: 'सुभाष बाबू का जुलूस ',
    highlight: 'बड़े ही शांत व अनुशासित ढंग से',
    after: ' आगे बढ़ रहा था।',
    prompt: 'रेखांकित अंश का पदबंध भेद बताइए:',
    options: ['विशेषण पदबंध', 'संज्ञा पदबंध', 'क्रिया-विशेषण पदबंध', 'क्रिया पदबंध'],
    correctIndex: 2,
    shortcutRule:
      'रेखांकित अंश ‘आगे बढ़ रहा था’ क्रिया के होने का ढंग (रीति) बता रहा है। ‘कैसे?’ का उत्तर मिलने पर क्रिया-विशेषण पदबंध होता है।',
  },
  {
    id: 'pb-6',
    tag: 'NCERT आधारित',
    before: '',
    highlight: 'मेहनत करने वाले छात्रों में से कुछ',
    after: ' ही छात्रवृत्ति प्राप्त कर सके।',
    prompt: 'रेखांकित अंश में कौन-सा पदबंध है?',
    options: ['सर्वनाम पदबंध', 'संज्ञा पदबंध', 'विशेषण पदबंध', 'क्रिया-विशेषण पदबंध'],
    correctIndex: 0,
    shortcutRule:
      'अंतिम शब्द ‘कुछ’ अनिश्चयवाचक सर्वनाम है (‘छात्रों में से कुछ’), अतः यह सर्वनाम पदबंध है। यदि केवल ‘मेहनत करने वाले छात्र’ होता तो संज्ञा पदबंध होता।',
  },
  {
    id: 'pb-7',
    tag: 'NCERT स्पर्श — बड़े भाई साहब',
    before: '',
    highlight: 'आसमान में उड़ती हुई पतंग',
    after: ' को देखकर मेरा मन ललचा उठा।',
    prompt: 'रेखांकित अंश में कौन-सा पदबंध है?',
    options: ['क्रिया पदबंध', 'विशेषण पदबंध', 'संज्ञा पदबंध', 'क्रिया-विशेषण पदबंध'],
    correctIndex: 2,
    shortcutRule:
      'शीर्ष पद ‘पतंग’ (जातिवाचक संज्ञा) रेखांकन के भीतर शामिल है, इसलिए पूरा पदबंध संज्ञा पदबंध है।',
  },
  {
    id: 'pb-8',
    tag: 'समय/स्थान वाचक',
    before: 'गाँव के सभी लोग ',
    highlight: 'सुबह से शाम तक',
    after: ' खेतों में काम करते हैं।',
    prompt: 'रेखांकित अंश का पदबंध भेद पहचानिए:',
    options: ['संज्ञा पदबंध', 'सर्वनाम पदबंध', 'विशेषण पदबंध', 'क्रिया-विशेषण पदबंध'],
    correctIndex: 3,
    shortcutRule:
      '‘सुबह से शाम तक’ काल (समय) का बोध कराकर ‘काम करते हैं’ क्रिया की विशेषता बता रहा है — कालवाचक क्रिया-विशेषण पदबंध।',
  },
  {
    id: 'pb-9',
    tag: 'मुहावरेदार विशेषण',
    before: 'वज़ीर अली ',
    highlight: 'अत्यंत निडर और साहसी',
    after: ' सिपाही था।',
    prompt: 'रेखांकित अंश में कौन-सा पदबंध है?',
    options: ['संज्ञा पदबंध', 'विशेषण पदबंध', 'सर्वनाम पदबंध', 'क्रिया-विशेषण पदबंध'],
    correctIndex: 1,
    shortcutRule:
      '‘अत्यंत निडर और साहसी’ पदसमूह ‘सिपाही’ संज्ञा का गुण बता रहा है (सिपाही रेखांकित नहीं है), अतः विशेषण पदबंध।',
  },
  {
    id: 'pb-10',
    tag: 'बोर्ड परीक्षा प्रश्न',
    before: 'कबूतरों ने अपने अंडे ',
    highlight: 'दुमंज़िले घर की छत के रोशनदान पर',
    after: ' दे रखे थे।',
    prompt: 'ध्यान से देखें: ‘दुमंज़िले घर की छत के रोशनदान पर’ (कार्य का स्थान) किस पदबंध के अंतर्गत आएगा?',
    options: [
      'स्थानवाचक क्रिया-विशेषण पदबंध',
      'क्रिया पदबंध',
      'सर्वनाम पदबंध',
      'संबंधबोधक संज्ञा',
    ],
    correctIndex: 0,
    shortcutRule:
      '‘कहाँ दे रखे थे?’ का उत्तर मिलने और ‘पर’ कारक-चिह्न के साथ क्रिया के स्थान का बोध कराने के कारण यह क्रिया-विशेषण पदबंध है।',
  },
];

const VAKYA_QUESTIONS: GrammarQuestion[] = [
  {
    id: 'vk-1',
    tag: 'वाक्य भेद पहचान',
    before: '',
    highlight: 'वज़ीर अली ने अपने अधिकारों के लिए कंपनी के वकील की हत्या कर दी।',
    after: '',
    prompt: 'रचना के आधार पर यह किस प्रकार का वाक्य है?',
    options: ['सरल वाक्य', 'संयुक्त वाक्य', 'मिश्र वाक्य', 'प्रश्नवाचक वाक्य'],
    correctIndex: 0,
    shortcutRule:
      'इसमें केवल एक मुख्य उद्देश्य (‘वज़ीर अली’) और एक ही समापिका क्रिया (‘हत्या कर दी’) है, कोई योजक नहीं — अतः सरल वाक्य।',
  },
  {
    id: 'vk-2',
    tag: 'योजक पहचान',
    before: '',
    highlight: 'बड़े भाई साहब उपदेश देते थे और छोटे भाई का मन खेल-कूद में लगा रहता था।',
    after: '',
    prompt: 'इस वाक्य का सही भेद चुनिए:',
    options: ['सरल वाक्य', 'संयुक्त वाक्य', 'मिश्र वाक्य', 'संज्ञा उपवाक्य'],
    correctIndex: 1,
    shortcutRule:
      'दो स्वतंत्र उपवाक्य समानाधिकरण योजक ‘और’ से जुड़े हैं। दोनों अपने-आप में पूर्ण अर्थ रखते हैं — इसलिए संयुक्त वाक्य।',
  },
  {
    id: 'vk-3',
    tag: 'मिश्र वाक्य + उपवाक्य',
    before: '',
    highlight: 'गांधीजी कहते थे कि आदर्श को व्यावहारिकता के स्तर पर मत उतरने दो।',
    after: '',
    prompt: 'रेखांकित वाक्य का भेद और ‘कि’ के बाद वाले उपवाक्य का नाम चुनिए:',
    options: [
      'मिश्र वाक्य (संज्ञा आश्रित उपवाक्य)',
      'संयुक्त वाक्य (प्रधान उपवाक्य)',
      'मिश्र वाक्य (विशेषण आश्रित उपवाक्य)',
      'सरल वाक्य',
    ],
    correctIndex: 0,
    shortcutRule:
      '‘कि’ योजक से शुरू होने वाला आश्रित उपवाक्य हमेशा ‘संज्ञा आश्रित उपवाक्य’ होता है और पूरा वाक्य ‘मिश्र वाक्य’ कहलाता है।',
  },
  {
    id: 'vk-4',
    tag: 'रूपांतरण: सरल → मिश्र',
    before: 'सरल वाक्य: ',
    highlight: 'परिश्रम करने पर वह अवश्य सफल होगा।',
    after: '',
    prompt: 'इसका शुद्ध मिश्र वाक्य रूपांतरण क्या होगा?',
    options: [
      'वह परिश्रम करेगा और अवश्य सफल होगा।',
      'यदि वह परिश्रम करेगा, तो अवश्य सफल होगा।',
      'परिश्रम करके वह सफल होगा।',
      'परिश्रमी व्यक्ति सफल होता है इसलिए वह सफल होगा।',
    ],
    correctIndex: 1,
    shortcutRule:
      '‘यदि ... तो’ व्यधिकरण योजक युग्म से बना शर्तसूचक वाक्य शुद्ध मिश्र वाक्य होता है। विकल्प A ‘और’ के कारण संयुक्त वाक्य है।',
  },
  {
    id: 'vk-5',
    tag: 'रूपांतरण: संयुक्त → सरल',
    before: 'संयुक्त वाक्य: ',
    highlight: 'वर्षा बंद हुई और आकाश में इंद्रधनुष दिखाई देने लगा।',
    after: '',
    prompt: 'इसका सटीक सरल वाक्य रूपांतरण चुनिए:',
    options: [
      'जैसे ही वर्षा बंद हुई, वैसे ही इंद्रधनुष दिखने लगा।',
      'वर्षा बंद होते ही आकाश में इंद्रधनुष दिखाई देने लगा।',
      'क्योंकि वर्षा बंद हुई, इसलिए इंद्रधनुष दिखा।',
      'वर्षा बंद हुई परंतु इंद्रधनुष दिखने लगा।',
    ],
    correctIndex: 1,
    shortcutRule:
      'सरल वाक्य बनाने के लिए योजक ‘और’ हटाकर पहली क्रिया को ‘होते ही’ (असमापिका कृदंत) में बदला जाता है ताकि एक ही समापिका क्रिया बचे।',
  },
  {
    id: 'vk-6',
    tag: 'विशेषण उपवाक्य',
    before: '',
    highlight: 'यह वही तोप है जिसने 1857 में अच्छे-अच्छे सूरमाओं के धज्जे उड़ाए थे।',
    after: '',
    prompt: '‘जिसने 1857 में... उड़ाए थे’ किस प्रकार का आश्रित उपवाक्य है?',
    options: [
      'संज्ञा आश्रित उपवाक्य',
      'विशेषण आश्रित उपवाक्य',
      'क्रिया-विशेषण आश्रित उपवाक्य',
      'प्रधान उपवाक्य',
    ],
    correctIndex: 1,
    shortcutRule:
      '‘जो / जिसने / जिसे / जिसका’ से आरंभ होने वाला उपवाक्य मुख्य संज्ञा (‘तोप’) की विशेषता बताता है — अतः विशेषण आश्रित उपवाक्य।',
  },
  {
    id: 'vk-7',
    tag: 'क्रिया-विशेषण उपवाक्य',
    before: '',
    highlight: 'जब तताँरा ने धरती में तलवार भोंकी, तब द्वीप के दो टुकड़े हो गए।',
    after: '',
    prompt: 'यहाँ आश्रित उपवाक्य कौन-सा भेद है?',
    options: [
      'क्रिया-विशेषण उपवाक्य (कालवाचक)',
      'संज्ञा उपवाक्य',
      'विशेषण उपवाक्य',
      'संयुक्त वाक्य',
    ],
    correctIndex: 0,
    shortcutRule:
      '‘जब ... तब’ समय का बोध कराकर क्रिया की विशेषता बताता है, अतः कालवाचक क्रिया-विशेषण उपवाक्य (मिश्र वाक्य)।',
  },
  {
    id: 'vk-8',
    tag: 'रूपांतरण: मिश्र → संयुक्त',
    before: 'मिश्र वाक्य: ',
    highlight: 'यद्यपि हरिहर काका अनपढ़ थे, तथापि वे दुनिया की बातें अच्छी तरह समझते थे।',
    after: '',
    prompt: 'इसका शुद्ध संयुक्त वाक्य रूपांतरण चुनिए:',
    options: [
      'अनपढ़ होने के बावजूद हरिहर काका दुनिया की बातें समझते थे।',
      'हरिहर काका अनपढ़ थे, परंतु वे दुनिया की बातें अच्छी तरह समझते थे।',
      'जो अनपढ़ हरिहर काका थे, वे सब समझते थे।',
      'हरिहर काका अनपढ़ होकर सब समझते थे।',
    ],
    correctIndex: 1,
    shortcutRule:
      '‘यद्यपि–तथापि’ हटाकर विरोधसूचक समानाधिकरण योजक ‘परंतु / किंतु / लेकिन’ लगाने से सटीक संयुक्त वाक्य बनता है।',
  },
  {
    id: 'vk-9',
    tag: 'NCERT परीक्षा प्रश्न',
    before: '',
    highlight: 'सुलेमान का काफ़िला रुका इसलिए चींटियों की जान बच गई।',
    after: '',
    prompt: '‘इसलिए’ योजक के कारण यह कौन-सा वाक्य भेद है?',
    options: ['सरल वाक्य', 'मिश्र वाक्य', 'संयुक्त वाक्य', 'संदेहवाचक वाक्य'],
    correctIndex: 2,
    shortcutRule:
      '‘इसलिए / अतः’ परिणामसूचक समानाधिकरण योजक है जो संयुक्त वाक्य बनाता है। (ध्यान: ‘क्योंकि’ मिश्र वाक्य बनाता है, ‘इसलिए’ संयुक्त वाक्य!)।',
  },
  {
    id: 'vk-10',
    tag: 'सरल वाक्य रूपांतरण',
    before: 'मिश्र वाक्य: ',
    highlight: 'जो व्यक्ति मीठी वाणी बोलता है, वह सबको सुख देता है।',
    after: '',
    prompt: 'इसका सही सरल वाक्य रूप क्या होगा?',
    options: [
      'मीठी वाणी बोलने वाला व्यक्ति सबको सुख देता है।',
      'व्यक्ति मीठी वाणी बोलता है और सबको सुख देता है।',
      'यदि व्यक्ति मीठी वाणी बोले, तो सबको सुख मिले।',
      'चूँकि वह मीठी वाणी बोलता है, इसलिए सबको सुख देता है।',
    ],
    correctIndex: 0,
    shortcutRule:
      '‘जो ... वह’ हटाकर विशेषण वाक्यांश (‘मीठी वाणी बोलने वाला’) बना देने से वाक्य एक मुख्य क्रिया वाला सरल वाक्य बन जाता है।',
  },
];

const SAMAS_QUESTIONS: GrammarQuestion[] = [
  {
    id: 'sm-1',
    tag: 'विग्रह-आधारित भेद',
    before: 'समस्तपद: ',
    highlight: 'पीताम्बर',
    after: ' — विग्रह: ‘पीले हैं वस्त्र जिसके अर्थात श्रीकृष्ण/विष्णु’',
    prompt: 'इस दिए गए विग्रह के अनुसार ‘पीताम्बर’ में कौन-सा समास होगा?',
    options: ['कर्मधारय समास', 'द्विगु समास', 'बहुव्रीहि समास', 'अव्ययीभाव समास'],
    correctIndex: 2,
    shortcutRule:
      'विग्रह में ‘जिसके अर्थात श्रीकृष्ण’ तीसरा विशेष अर्थ निकलने से यह बहुव्रीहि समास है। (‘पीला है जो अंबर’ होता तो कर्मधारय होता।)',
  },
  {
    id: 'sm-2',
    tag: 'उपसर्ग / अव्यय प्रथम पद',
    before: 'समस्तपद: ',
    highlight: 'यथाशक्ति / प्रतिदिन / आजन्म',
    after: '',
    prompt: '‘यथा’, ‘प्रति’, ‘आ’, ‘बे’, ‘भर’ से आरंभ होने वाले पद किस समास के होते हैं?',
    options: ['तत्पुरुष समास', 'अव्ययीभाव समास', 'द्वंद्व समास', 'कर्मधारय समास'],
    correctIndex: 1,
    shortcutRule:
      'जहाँ पूर्वपद अव्यय या उपसर्ग हो (‘शक्ति के अनुसार’, ‘प्रत्येक दिन’, ‘जन्म भर’), वहाँ हमेशा अव्ययीभाव समास होता है।',
  },
  {
    id: 'sm-3',
    tag: 'नञ् / कारक तत्पुरुष',
    before: 'समस्तपद: ',
    highlight: 'अकालपीड़ित',
    after: ' (विग्रह: अकाल से पीड़ित)',
    prompt: '‘अकाल से पीड़ित’ में कारक-चिह्न के आधार पर कौन-सा समास है?',
    options: [
      'करण तत्पुरुष समास',
      'अपादान तत्पुरुष समास',
      'अव्ययीभाव समास',
      'कर्मधारय समास',
    ],
    correctIndex: 0,
    shortcutRule:
      'यहाँ ‘से’ अलग होने (अपादान) का नहीं बल्कि कारण/साधन (‘अकाल के द्वारा पीड़ित’) का बोध कराता है, अतः करण तत्पुरुष।',
  },
  {
    id: 'sm-4',
    tag: 'प्रथम पद संख्या बनाम समूह',
    before: 'समस्तपद: ',
    highlight: 'त्रिवेणी',
    after: ' (विग्रह: तीन वेणियों (नदियों) का समाहार)',
    prompt: 'संख्यावाची पूर्वपद और ‘समाहार’ विग्रह होने से यह कौन-सा समास है?',
    options: ['द्वंद्व समास', 'कर्मधारय समास', 'द्विगु समास', 'बहुव्रीहि समास'],
    correctIndex: 2,
    shortcutRule:
      'पूर्वपद संख्या (‘तीन’) हो और समस्तपद समूह/समाहार का बोध कराए, तो द्विगु समास होता है।',
  },
  {
    id: 'sm-5',
    tag: 'द्वंद्व समास Trap',
    before: 'समस्तपद: ',
    highlight: 'रातोरात / हाथोंहाथ',
    after: ' बनाम ',
    prompt: 'सावधान! योजक चिह्न न होने या शब्दों की आवृत्ति होने पर ‘रातोरात’ (रात ही रात में) में कौन-सा समास है?',
    options: [
      'द्वंद्व समास',
      'अव्ययीभाव समास',
      'तत्पुरुष समास',
      'द्विगु समास',
    ],
    correctIndex: 1,
    shortcutRule:
      'Board Trap! एक ही संज्ञा शब्द की पुनरावृत्ति होने पर (‘रातोरात’, ‘घर-घर’, ‘पल-पल’) द्वंद्व नहीं, बल्कि अव्ययीभाव समास होता है! द्वंद्व में ‘माता-पिता’ या ‘पाप-पुण्य’ जैसे दो अलग/विपरीत पद होते हैं।',
  },
  {
    id: 'sm-6',
    tag: 'उपमान-उपमेय / विशेषण-विशेष्य',
    before: 'समस्तपद: ',
    highlight: 'भवसागर',
    after: ' (विग्रह: संसार रूपी सागर)',
    prompt: '‘रूपी’ अथवा ‘है जो’ आने पर कौन-सा समास होता है?',
    options: ['कर्मधारय समास', 'द्वंद्व समास', 'तत्पुरुष समास', 'अव्ययीभाव समास'],
    correctIndex: 0,
    shortcutRule:
      'जहाँ दोनों पदों में विशेषण-विशेष्य (‘महापुरुष’) या उपमेय-उपमान (‘भव रूपी सागर’, ‘चरणकमल’) का संबंध हो, वहाँ कर्मधारय समास होता है।',
  },
  {
    id: 'sm-7',
    tag: 'नञ् तत्पुरुष समास',
    before: 'समस्तपद: ',
    highlight: 'असहनीय / अनपढ़ / अधर्म',
    after: '',
    prompt: 'नकारात्मक ‘अ / अन्’ उपसर्ग वाले ये समस्तपद (‘न सहनीय’, ‘न पढ़ा हुआ’) किस समास के अंतर्गत आते हैं?',
    options: ['अव्ययीभाव समास', 'कर्मधारय समास', 'तत्पुरुष समास (नञ् तत्पुरुष)', 'बहुव्रीहि समास'],
    correctIndex: 2,
    shortcutRule:
      '‘असत्य’ (न सत्य), ‘अनपढ़’ (न पढ़ा हुआ) जैसे निषेधार्थक पद ‘नञ् तत्पुरुष समास’ के अंतर्गत आते हैं। CBSE में ‘तत्पुरुष समास’ लिखना भी पूर्णतः सही माना जाता है।',
  },
  {
    id: 'sm-8',
    tag: 'NCERT स्पर्श — कविता/गद्य',
    before: 'समस्तपद: ',
    highlight: 'देश-प्रेम / देशभक्ति',
    after: '',
    prompt: '‘देशभक्ति’ का शुद्ध समास-विग्रह और भेद पहचानिए:',
    options: [
      'देश और भक्ति — द्वंद्व समास',
      'देश के लिए भक्ति — संप्रदान तत्पुरुष',
      'देश की भक्ति — संबंध तत्पुरुष',
      'देश में भक्ति — अधिकरण तत्पुरुष',
    ],
    correctIndex: 1,
    shortcutRule:
      'भक्ति ‘देश के लिए’ समर्पित होती है (देशहित में), इसलिए मानक CBSE विग्रह ‘देश के लिए भक्ति’ (संप्रदान तत्पुरुष) है।',
  },
  {
    id: 'sm-9',
    tag: 'विग्रह-भेद मिलान',
    before: 'समस्तपद: ',
    highlight: 'दशानन',
    after: ' — विग्रह: ‘दस हैं आनन (मुख) जिसके अर्थात रावण’',
    prompt: 'भले ही इसमें ‘दस’ संख्या है, इस विग्रह के अनुसार सही समास चुनें:',
    options: ['द्विगु समास', 'बहुव्रीहि समास', 'कर्मधारय समास', 'द्वंद्व समास'],
    correctIndex: 1,
    shortcutRule:
      'चूँकि ‘दस हैं मुख जिसके — रावण’ में तीसरा विशेष व्यक्ति रूढ़ अर्थ बन गया है, इसलिए द्विगु नहीं बल्कि बहुव्रीहि समास होगा।',
  },
  {
    id: 'sm-10',
    tag: 'अधिकरण तत्पुरुष',
    before: 'समस्तपद: ',
    highlight: 'युद्धभूमि बनाम आपबीती',
    after: '',
    prompt: '‘आपबीती’ (अपने पर बीती) में कौन-सा समास है?',
    options: [
      'कर्मधारय समास',
      'अधिकरण तत्पुरुष समास',
      'अव्ययीभाव समास',
      'द्वंद्व समास',
    ],
    correctIndex: 1,
    shortcutRule:
      '‘में / पर’ विभक्ति चिह्न का लोप होने के कारण ‘अपने पर बीती’ = अधिकरण तत्पुरुष समास।',
  },
];

const MUHAVRE_QUESTIONS: GrammarQuestion[] = [
  {
    id: 'mh-1',
    tag: 'पाठ 1: बड़े भाई साहब',
    before: 'कठिन गणित के प्रश्न हल करते समय मेरे ',
    highlight: '______',
    after: '। (अर्थ: अत्यधिक कठिनाई होना)',
    prompt: 'रिक्त स्थान में सटीक मुहावरे का प्रयोग चुनिए:',
    options: [
      'दाँतों पसीना आ गया',
      'अंधे के हाथ बटेर लग गई',
      'तलवार खींच ली',
      'फूला न समाया',
    ],
    correctIndex: 0,
    shortcutRule:
      '‘दाँतों पसीना आना’ का अर्थ है कठिन परिश्रम या बहुत कष्ट होना — प्रेमचंद की कहानी ‘बड़े भाई साहब’ में अंग्रेज़ी-ज्यामिति के संदर्भ में प्रयुक्त।',
  },
  {
    id: 'mh-2',
    tag: 'पाठ 1: बड़े भाई साहब',
    before: 'बिना अधिक पढ़ाई किए कक्षा में प्रथम आ जाने पर बड़े भाई साहब ने कहा कि यह सफलता नहीं, बल्कि ',
    highlight: '______',
    after: ' वाली बात है।',
    prompt: '‘बिना योग्यता के अचानक कोई अच्छी चीज़ मिल जाना’ के लिए उपयुक्त मुहावरा:',
    options: [
      'घाव पर नमक छिड़कना',
      'अंधे के हाथ बटेर लगना',
      'पापड़ बेलना',
      'लोहे के चने चबाना',
    ],
    correctIndex: 1,
    shortcutRule:
      '‘अंधे के हाथ बटेर लगना’ — बड़े भाई साहब छोटे भाई को घमंड से बचाने के लिए यही मुहावरा कहते हैं।',
  },
  {
    id: 'mh-3',
    tag: 'पाठ 1: बड़े भाई साहब',
    before: 'इतिहास और अलजेब्रा के कठिन नियम याद करना मानो ',
    highlight: '______',
    after: ' के बराबर है।',
    prompt: '‘अत्यंत कठिन कार्य करना’ अर्थ वाला उपयुक्त मुहावरा चुनिए:',
    options: [
      'आँखें चुराना',
      'हवा से बातें करना',
      'लोहे के चने चबाना',
      'दाँतों तले उँगली दबाना',
    ],
    correctIndex: 2,
    shortcutRule:
      '‘लोहे के चने चबाना’ अर्थात बहुत कठिन या दुस्साध्य काम करना।',
  },
  {
    id: 'mh-4',
    tag: 'पाठ 7: कारतूस',
    before: 'वज़ीर अली के साहस और चतुराई से परेशान होकर कर्नल को लगता था कि उसे पकड़ने में अंग्रेज़ों को ',
    highlight: '______',
    after: ' पड़ रहे हैं। (अर्थ: धूल चाटना / पराजित अनुभव करना)',
    prompt: '‘हाथ न आना / चकमा दे जाना’ संदर्भ में कौन-सा मुहावरा सही अर्थ रखता है?',
    options: [
      'आँखों में धूल झोंकना',
      'कान भरना',
      'हाथ धो बैठना',
      'मुँह की खाना',
    ],
    correctIndex: 0,
    shortcutRule:
      'वज़ीर अली अंग्रेज़ी फ़ौज की ‘आँखों में धूल झोंककर’ कर्नल के खेमे से ही 10 कारतूस ले जाता है (धोखा देकर निकल जाना)।',
  },
  {
    id: 'mh-5',
    tag: 'संचयन: हरिहर काका',
    before: 'काका की पंद्रह बीघे ज़मीन देखकर ठाकुरबारी के महंत और उनके सगे भाइयों की ',
    highlight: '______',
    after: '।',
    prompt: '‘लालच होना’ अर्थ के लिए सही मुहावरा चुनिए:',
    options: [
      'मुँह में पानी भर आना / नीयत डोलना',
      'प्राण सूख जाना',
      'घी के दीये जलाना',
      'रफूचक्कर हो जाना',
    ],
    correctIndex: 0,
    shortcutRule:
      'ज़मीन देखकर महंत और भाइयों दोनों की नीयत डोल गई / लार टपकने लगी।',
  },
  {
    id: 'mh-6',
    tag: 'संचयन: टोपी शुक्ला',
    before: 'दादी की मृत्यु का समाचार सुनकर टोपी का ',
    highlight: '______',
    after: ' और वह फूट-फूटकर रोने लगा।',
    prompt: '‘अत्यधिक दुख होना / भीतर तक टूट जाना’ के लिए उपयुक्त मुहावरा:',
    options: [
      'कलेजा मुँह को आना / दिल भर आना',
      'नौ दो ग्यारह होना',
      'कमर कसना',
      'बाएँ हाथ का खेल होना',
    ],
    correctIndex: 0,
    shortcutRule:
      'भावुक दुख में ‘कलेजा मुँह को आना’ या ‘दिल भर आना’ सर्वाधिक सटीक है।',
  },
  {
    id: 'mh-7',
    tag: 'पाठ 1: बड़े भाई साहब',
    before: 'बड़े भाई साहब की तीखी डाँट सुनकर छोटे भाई के ',
    highlight: '______',
    after: '। (अर्थ: बहुत डर जाना)',
    prompt: 'उचित मुहावरे से रिक्त स्थान भरें:',
    options: ['प्राण सूख जाते थे', 'पौ बारह हो जाते थे', 'चार चाँद लग जाते थे', 'रंग उड़ जाता था'],
    correctIndex: 0,
    shortcutRule:
      '‘प्राण सूखना’ = भय से घबरा जाना। प्रेमचंद ने छोटे भाई के डर के लिए यही प्रयोग किया है।',
  },
  {
    id: 'mh-8',
    tag: 'पाठ 2: डायरी का एक पन्ना',
    before: 'सुभाष बाबू के जुलूस और स्त्रियों के अदम्य साहस ने ब्रिटिश पुलिस के ',
    highlight: '______',
    after: '।',
    prompt: '‘योजना विफल करना / अचरज या पराजय में डालना’ के लिए सटीक विकल्प:',
    options: [
      'मंसूबों पर पानी फेर दिया',
      'पीठ दिखा दी',
      'ईंट से ईंट बजा दी',
      'गले का हार बना लिया',
    ],
    correctIndex: 0,
    shortcutRule:
      'पुलिस चाहती थी कि जुलूस न निकले, पर कलकत्ता के लोगों ने उनके मंसूबों पर पानी फेर दिया।',
  },
  {
    id: 'mh-9',
    tag: 'पाठ 1: बड़े भाई साहब',
    before: 'चुपचाप खेलने जाने पर बड़े भाई साहब ने छोटे भाई को ',
    highlight: '______',
    after: '। (अर्थ: खरी-खोटी सुनाना / कठोरता से समझाना)',
    prompt: 'सही मुहावरा चुनिए:',
    options: [
      'आड़े हाथों लिया',
      'सिर पर उठा लिया',
      'हाथ-पाँव मारने दिया',
      'मुँह फुला लिया',
    ],
    correctIndex: 0,
    shortcutRule:
      '‘आड़े हाथों लेना’ = कड़े शब्दों में डाँटना या फटकार लगाना।',
  },
  {
    id: 'mh-10',
    tag: 'भ्रामक मुहावरा युग्म',
    before: 'सरपंच ने समझाया कि अपने पड़ोसियों के विरुद्ध किसी की ',
    highlight: '______',
    after: ' अच्छी आदत नहीं है। (अर्थ: चुगली करना)',
    prompt: 'सावधान! ‘चुगली करना’ का सही मुहावरा चुनिए:',
    options: [
      'कान भरना',
      'कान कतरना',
      'कान पर जूँ न रेंगना',
      'कान खड़े होना',
    ],
    correctIndex: 0,
    shortcutRule:
      'कान भरना = चुगली करना | कान कतरना = बहुत चालाक होना | कान पर जूँ न रेंगना = कोई असर न होना | कान खड़े होना = चौकन्ना होना।',
  },
  {
    id: 'mh-11',
    tag: 'भ्रामक मुहावरा युग्म',
    before: 'दोपहर में कठिन गणित पढ़ते-पढ़ते कब ',
    highlight: '______',
    after: ', छात्र को पता ही नहीं चला। (अर्थ: नींद आ जाना)',
    prompt: '‘सो जाना / झपकी आना’ के लिए सटीक मुहावरा चुनें:',
    options: [
      'आँख लग गई',
      'आँख खुल गई',
      'आँख तरेर ली',
      'आँखों का तारा बन गई',
    ],
    correctIndex: 0,
    shortcutRule:
      'आँख लगना = सो जाना | आँख खुलना = होश आना/सच्चाई समझना | आँख दिखाना = क्रोध करना/धमकाना।',
  },
  {
    id: 'mh-12',
    tag: 'पाठ 3: तताँरा-वामीरो कथा',
    before: 'गाँव वालों के सामने अन्याय देख तताँरा क्रोध से ',
    highlight: '______',
    after: ' हो उठा।',
    prompt: '‘अत्यधिक क्रोधित होना’ अर्थ वाला मुहावरा चुनें:',
    options: ['आग-बबूला', 'गदगद', 'नौ दो ग्यारह', 'दूध का दूध'],
    correctIndex: 0,
    shortcutRule:
      '‘आग-बबूला होना’ = बहुत अधिक क्रोध में आ जाना।',
  },
];

const TAB_CONFIG: Record<
  VyakaranTab,
  { label: string; badge: string; questions: GrammarQuestion[]; tip: string }
> = {
  padbandh: {
    label: '1. पदबंध (4M)',
    badge: 'अंतिम शीर्ष पद नियम',
    questions: PADBANDH_QUESTIONS,
    tip: 'हमेशा रेखांकित अंश के बिल्कुल **अंतिम मुख्य शब्द (शीर्ष पद)** को देखें — संज्ञा पर रुके तो संज्ञा पदबंध, विशेषण पर रुके तो विशेषण पदबंध!',
  },
  vakya: {
    label: '2. वाक्य भेद (4M)',
    badge: 'सरल • संयुक्त • मिश्र',
    questions: VAKYA_QUESTIONS,
    tip: 'सरल = 1 समापिका क्रिया | संयुक्त = और, किंतु, परंतु, इसलिए, या | मिश्र = कि, जो-वह, जब-तब, यदि-तो, क्योंकि।',
  },
  samas: {
    label: '3. समास (4M)',
    badge: 'विग्रह-आधारित भेद',
    questions: SAMAS_QUESTIONS,
    tip: 'कर्मधारय vs बहुव्रीहि व द्विगु vs बहुव्रीहि में पहले **दिया गया समास-विग्रह** पढ़ें — यदि ‘अर्थात कोई तीसरा विशेष’ आए तो बहुव्रीहि चुनें।',
  },
  muhavre: {
    label: '4. मुहावरे (4M)',
    badge: 'स्पर्श + संचयन संदर्भ',
    questions: MUHAVRE_QUESTIONS,
    tip: 'वाक्य प्रयोग में अर्थ नहीं लिखना होता; मुहावरे को मूल रूप में काल-लिंग के अनुसार वाक्य में पिरोना होता है।',
  },
};

export function HindiVyakaranLab() {
  const [activeTab, setActiveTab] = useState<VyakaranTab>('padbandh');
  const [qIndexByTab, setQIndexByTab] = useState<Record<VyakaranTab, number>>({
    padbandh: 0,
    vakya: 0,
    samas: 0,
    muhavre: 0,
  });
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const tabInfo = TAB_CONFIG[activeTab];
  const questions = tabInfo.questions;
  const currentIdx = qIndexByTab[activeTab] % questions.length;
  const currentQ = questions[currentIdx];
  const selectedOpt = answers[currentQ.id];

  const { totalAnswered, totalCorrect, tabCorrect, tabAnswered } = useMemo(() => {
    const all = [
      ...PADBANDH_QUESTIONS,
      ...VAKYA_QUESTIONS,
      ...SAMAS_QUESTIONS,
      ...MUHAVRE_QUESTIONS,
    ];
    let totAns = 0;
    let totCor = 0;
    for (const q of all) {
      if (answers[q.id] !== undefined) {
        totAns++;
        if (answers[q.id] === q.correctIndex) totCor++;
      }
    }
    let tAns = 0;
    let tCor = 0;
    for (const q of questions) {
      if (answers[q.id] !== undefined) {
        tAns++;
        if (answers[q.id] === q.correctIndex) tCor++;
      }
    }
    return {
      totalAnswered: totAns,
      totalCorrect: totCor,
      tabCorrect: tCor,
      tabAnswered: tAns,
    };
  }, [answers, questions]);

  const selectOption = (optIdx: number) => {
    if (selectedOpt !== undefined) return;
    setAnswers((prev) => ({ ...prev, [currentQ.id]: optIdx }));
  };

  const setTabIdx = (idx: number) => {
    setQIndexByTab((prev) => ({ ...prev, [activeTab]: idx }));
  };

  const TabIcon =
    activeTab === 'padbandh'
      ? Layers
      : activeTab === 'vakya'
      ? GitBranch
      : activeTab === 'samas'
      ? Scale
      : Feather;

  return (
    <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50/60 via-white to-sky-50/40 p-4 sm:p-6 shadow-xs dark:border-indigo-900/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-indigo-100 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
            <Layers className="h-5 w-5" />
          </span>
          <div>
            <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
              CBSE 16-Mark व्यावहारिक व्याकरण Interactive Lab
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              पदबंध (4M) • वाक्य रूपांतरण (4M) • समास (4M) • मुहावरे (4M) — कुल 42 परीक्षा प्रश्न (100% Offline)
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {totalAnswered > 0 && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-extrabold text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-300">
              <Trophy className="h-3.5 w-3.5" />
              Overall: {totalCorrect}/{totalAnswered} (
              {Math.round((totalCorrect / totalAnswered) * 100)}%)
            </span>
          )}
          <button
            type="button"
            onClick={() => setAnswers({})}
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-600 hover:bg-slate-50 cursor-pointer dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Reset All
          </button>
        </div>
      </div>

      {/* 4 Grammar Topic Tabs */}
      <div className="flex flex-wrap gap-2">
        {(Object.keys(TAB_CONFIG) as VyakaranTab[]).map((key) => {
          const cfg = TAB_CONFIG[key];
          const active = activeTab === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key)}
              className={`rounded-xl px-3.5 py-2 text-xs font-extrabold transition cursor-pointer ${
                active
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-indigo-400 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200'
              }`}
            >
              {cfg.label}
            </button>
          );
        })}
      </div>

      {/* Golden Tip Strip */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-indigo-200/80 bg-white/90 px-3.5 py-2.5 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-300">
        <div className="flex items-start gap-2">
          <TabIcon className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
          <span>{tabInfo.tip.replace(/\*\*/g, '')}</span>
        </div>
        <span className="font-bold text-indigo-700 dark:text-indigo-400 shrink-0">
          Section Score: {tabCorrect}/{tabAnswered}
        </span>
      </div>

      {/* Question Number Pills */}
      <div className="flex flex-wrap gap-1.5">
        {questions.map((q, idx) => {
          const ans = answers[q.id];
          const isCurrent = idx === currentIdx;
          let pillStyle =
            'bg-white border-slate-200 text-slate-600 hover:border-indigo-400 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300';
          if (ans !== undefined) {
            pillStyle =
              ans === q.correctIndex
                ? 'bg-emerald-100 border-emerald-400 text-emerald-900 dark:bg-emerald-950/60 dark:border-emerald-700 dark:text-emerald-300'
                : 'bg-rose-100 border-rose-400 text-rose-900 dark:bg-rose-950/60 dark:border-rose-700 dark:text-rose-300';
          }
          if (isCurrent) {
            pillStyle += ' ring-2 ring-indigo-500';
          }
          return (
            <button
              key={q.id}
              type="button"
              onClick={() => setTabIdx(idx)}
              className={`h-7 min-w-[2rem] px-2 rounded-lg border text-xs font-extrabold transition cursor-pointer ${pillStyle}`}
            >
              Q{idx + 1}
            </button>
          );
        })}
      </div>

      {/* Active Question Card */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 space-y-4 shadow-2xs dark:border-slate-800 dark:bg-slate-950">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-md bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 text-[11px] font-extrabold text-indigo-800 dark:bg-indigo-950/60 dark:border-indigo-800 dark:text-indigo-300">
            प्रश्न {currentIdx + 1} / {questions.length} • {currentQ.tag}
          </span>
          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
            {tabInfo.badge}
          </span>
        </div>

        {/* Highlighted Sentence Showcase */}
        <div className="rounded-xl border border-amber-200 bg-amber-50/40 px-4 py-3.5 text-base sm:text-lg font-medium leading-relaxed text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
          {currentQ.before}
          <span className="rounded bg-amber-200/80 border-b-2 border-amber-700 px-1.5 py-0.5 font-extrabold text-slate-950 dark:bg-amber-500/30 dark:border-amber-300 dark:text-amber-200">
            {currentQ.highlight}
          </span>
          {currentQ.after}
        </div>

        <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
          {currentQ.prompt}
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {currentQ.options.map((opt, oi) => {
            const isPicked = selectedOpt === oi;
            const isRight = oi === currentQ.correctIndex;
            let btnStyle =
              'border-slate-200 bg-slate-50/70 text-slate-800 hover:border-indigo-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200';
            if (selectedOpt !== undefined) {
              if (isRight) {
                btnStyle =
                  'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold dark:bg-emerald-950/60 dark:text-emerald-200';
              } else if (isPicked && !isRight) {
                btnStyle =
                  'border-rose-500 bg-rose-50 text-rose-950 dark:bg-rose-950/60 dark:text-rose-200';
              }
            }

            return (
              <button
                key={oi}
                type="button"
                disabled={selectedOpt !== undefined}
                onClick={() => selectOption(oi)}
                className={`w-full text-left rounded-xl border px-3.5 py-2.5 text-xs sm:text-sm font-semibold transition flex items-start justify-between gap-2 cursor-pointer disabled:cursor-default ${btnStyle}`}
              >
                <span>
                  <span className="font-mono text-xs opacity-70 mr-1.5">
                    {String.fromCharCode(65 + oi)}.
                  </span>
                  {opt}
                </span>
                {selectedOpt !== undefined && isRight && (
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                )}
                {selectedOpt !== undefined && isPicked && !isRight && (
                  <XCircle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {selectedOpt !== undefined && (
          <div
            className={`rounded-xl border p-3 text-xs space-y-1 ${
              selectedOpt === currentQ.correctIndex
                ? 'border-emerald-200 bg-emerald-50/80 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-200'
                : 'border-rose-200 bg-rose-50/80 text-rose-950 dark:border-rose-900 dark:bg-rose-950/30 dark:text-rose-200'
            }`}
          >
            <div className="flex items-center gap-1.5 font-extrabold">
              <Sparkles className="h-3.5 w-3.5 shrink-0" />
              {selectedOpt === currentQ.correctIndex
                ? 'सही उत्तर! Golden Rule समझें:'
                : `सही उत्तर: ${currentQ.options[currentQ.correctIndex]}`}
            </div>
            <div className="leading-relaxed">{currentQ.shortcutRule}</div>
          </div>
        )}

        <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={() =>
              setTabIdx((currentIdx - 1 + questions.length) % questions.length)
            }
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            ← पिछला प्रश्न
          </button>
          <button
            type="button"
            onClick={() => setTabIdx((currentIdx + 1) % questions.length)}
            className="rounded-lg bg-indigo-600 px-4 py-1.5 text-xs font-bold text-white hover:bg-indigo-700 cursor-pointer"
          >
            अगला प्रश्न →
          </button>
        </div>
      </div>
    </div>
  );
}
