import { Subtopic } from '../../../types/curriculum';

const PASSAGE_1 = `कारतूस

पात्र – कर्नल, लेफ़्टीनेंट, सिपाही, सवार
अवधि – 5 मिनट
ज़माना – सन् 1799
समय – रात्रि का
स्थान – गोरखपुर के जंगल में कर्नल कालिंज के खेमे का अंदरूनी हिस्सा।
(दो अंग्रेज़ बैठे बातें कर रहे हैं, कर्नल कालिंज और एक लेफ़्टीनेंट खेमे के बाहर हैं, चाँदनी छिटकी हुई है, अंदर लैंप जल रहा है।)
कर्नल – जंगल की ज़िंदगी बड़ी खतरनाक होती है।
लेफ़्टीनेंट – हफ़्तों हो गए यहाँ खेमा डाले हुए। सिपाही भी तंग आ गए हैं। ये वज़ीर अली आदमी है या भूत, हाथ ही नहीं लगता।
कर्नल – उसके अफ़साने सुन के रॉबिनहुड के कारनामे याद आ जाते हैं। अंग्रेज़ों के खिलाफ़ उसके दिल में किस कदर नफ़रत है। कोई पाँच महीने हुकूमत की होगी। मगर इस पाँच महीने में वो अवध के दरबार को अंग्रेज़ी असर से बिलकुल पाक कर देने में तकरीबन कामयाब हो गया था।
लेफ़्टीनेंट – कर्नल कालिंज ये सआदत अली कौन है?
कर्नल – आसिफ़उद्दौला का भाई है। वज़ीर अली का और उसका दुश्मन। असल में नवाब आसिफ़उद्दौला के यहाँ लड़के की कोई उम्मीद नहीं थी। वज़ीर अली की पैदाइश को सआदत अली ने अपनी मौत खयाल किया।
लेफ़्टीनेंट – मगर सआदत अली को अवध के तख्त पर बिठाने में क्या मसलेहत थी?
कर्नल – सआदत अली हमारा दोस्त है और बहुत ऐश पसंद आदमी है इसलिए हमें अपनी आधी मुमलिकत (जायदाद, दौलत) दे दी और दस लाख रुपये नगद। अब वो भी मज़े करता है और हम भी।`;

const PASSAGE_2 = `लेफ़्टीनेंट – सुना है ये वज़ीर अली अफ़गानिस्तान के बादशाह शाहे-ज़मा को हिंदुस्तान पर हमला करने की दावत (आमंत्रण) दे रहा है।
कर्नल – अफ़गानिस्तान को हमले की दावत सबसे पहले असल में टीपू सुल्तान ने दी फिर वज़ीर अली ने भी उसे दिल्ली बुलाया और फिर शमसुद्दौला ने भी।
लेफ़्टीनेंट – कौन शमसुद्दौला?
कर्नल – नवाब बंगाल का निस्बती (रिश्ते) भाई। बहुत ही खतरनाक आदमी है।
लेफ़्टीनेंट – इसका तो मतलब ये हुआ कि कंपनी के खिलाफ़ सारे हिंदुस्तान में एक लहर दौड़ गई है।
कर्नल – जी हाँ, और अगर ये कामयाब हो गई तो बक्सर और प्लासी के कारनामे धरे रह जाएँगे और कंपनी जो कुछ लॉर्ड क्लाइव के हाथों हासिल कर चुकी है, लॉर्ड वेल्जली के हाथों सब खो बैठेगी।
लेफ़्टीनेंट – वज़ीर अली की आज़ादी बहुत खतरनाक है। हमें किसी न किसी तरह इस शख्स को गिरफ़्तार कर ही लेना चाहिए।
कर्नल – पूरी एक फ़ौज लिए उसका पीछा कर रहा हूँ और बरसों से वो हमारी आँखों में धूल झोंक रहा है और इन्हीं जंगलों में फिर रहा है और हाथ नहीं आता। उसके साथ चंद जाँबाज़ हैं। मुट्ठी भर आदमी मगर ये दमखम है।`;

const PASSAGE_3 = `लेफ़्टीनेंट – सुना है वज़ीर अली जाती तौर से भी बहुत बहादुर आदमी है।
कर्नल – बहादुर न होता तो यूँ कंपनी के वकील को कत्ल कर देता?
लेफ़्टीनेंट – ये कत्ल का क्या किस्सा हुआ था कर्नल?
कर्नल – किस्सा क्या हुआ था उसको उसके पद से हटाने के बाद हमने वज़ीर अली को बनारस पहुँचा दिया और तीन लाख रुपया सालाना वज़ीफ़ा मुकर्रर कर दिया। कुछ महीने बाद गवर्नर जनरल ने उसे कलकत्ता (कोलकाता) तलब किया। वज़ीर अली कंपनी के वकील के पास गया जो बनारस में रहता था और उससे शिकायत की कि गवर्नर जनरल उसे कलकत्ता में क्यूँ तलब करता है। वकील ने शिकायत की परवाह नहीं की उलटा उसे बुरा-भला सुना दिया। वज़ीर अली के तो दिल में यूँ भी अंग्रेज़ों के खिलाफ़ नफ़रत कूट–कूटकर भरी है उसने खंजर से वकील का काम तमाम कर दिया।
लेफ़्टीनेंट – और भाग गया?
कर्नल – अपने जानिसारों समेत आज़मगढ़ की तरफ़ भाग गया। आज़मगढ़ के हुक्मरां ने उन लोगों को अपनी हिफ़ाज़त में घागरा तक पहुँचा दिया। अब ये कारवाँ इन जंगलों में कई साल से भटक रहा है।`;

const PASSAGE_4 = `लेफ़्टीनेंट – मगर वज़ीर अली की स्कीम क्या है?
कर्नल – स्कीम ये है कि किसी तरह नेपाल पहुँच जाए। अफ़गानी हमले का इंतेज़ार करे, अपनी ताकत बढ़ाए, सआदत अली को उसके पद से हटाकर खुद अवध पर कब्ज़ा करे और अंग्रेज़ों को हिंदुस्तान से निकाल दे।
लेफ़्टीनेंट – नेपाल पहुँचना तो कोई ऐसा मुश्किल नहीं, मुमकिन है कि पहुँच गया हो।
कर्नल – हमारी फ़ौजें और नवाब सआदत अली खाँ के सिपाही बड़ी सख्ती से उसका पीछा कर रहे हैं। हमें अच्छी तरह मालूम है कि वो इन्हीं जंगलों में है। (एक सिपाही तेज़ी से दाखिल होता है)
कर्नल – (उठकर) क्या बात है?
गोरा – दूर से गर्द उठती दिखाई दे रही है।
कर्नल – सिपाहियों से कह दो कि तैयार रहें (सिपाही सलाम करके चला जाता है)
लेफ़्टीनेंट – (जो खिड़की से बाहर देखने में मसरूफ़ था) गर्द तो ऐसी उड़ रही है जैसे कि पूरा एक काफ़िला चला आ रहा हो मगर मुझे तो एक ही सवार नज़र आता है।
कर्नल – (खिड़की के पास जाकर) हाँ एक ही सवार है। सरपट घोड़ा दौड़ाए चला आ रहा है।
लेफ़्टीनेंट – और सीधा हमारी तरफ़ आता मालूम होता है (कर्नल ताली बजाकर सिपाही को बुलाता है)
कर्नल – (सिपाही से) सिपाहियों से कहो, इस सवार पर नज़र रखें कि ये किस तरफ़ जा रहा है (सिपाही सलाम करके चला जाता है)
लेफ़्टीनेंट – शुब्हे की तो कोई गुंजाइश ही नहीं तेज़ी से इसी तरफ़ आ रहा है (टापों की आवाज़ बहुत करीब आकर रुक जाती है)`;

const PASSAGE_5 = `सवार – (बाहर से) मुझे कर्नल से मिलना है।
गोरा – (चिल्लाकर) बहुत खूब।
सवार – (बाहर से) सी।
गौरा – (अंदर आकर) हुज़ूर सवार आपसे मिलना चाहता है।
कर्नल – भेज दो।
लेफ़्टीनेंट – वज़ीर अली का कोई आदमी होगा हमसे मिलकर उसे गिरफ़्तार करवाना चाहता होगा।
कर्नल – खामोश रहो (सवार सिपाही के साथ अंदर आता है)
सवार – (आते ही पुकार उठता है) तन्हाई! तन्हाई!
कर्नल – साहब यहाँ कोई गैर आदमी नहीं है आप राज़ेदिल कह दें।
सवार – दीवार हमगोश दारद, तन्हाई।
(कर्नल, लेफ़्टीनेंट और सिपाही को इशारा करता है। दोनों बाहर चले जाते हैं। जब कर्नल और सवार खेमे में तन्हा रह जाते हैं तो ज़रा वक्फ़े के बाद चारों तरफ़ देखकर सवार कहता है)`;

const PASSAGE_6 = `सवार – आपने इस मुकाम पर क्यों खेमा डाला है?
कर्नल – कंपनी का हुक्म है कि वज़ीर अली को गिरफ़्तार किया जाए।
सवार – लेकिन इतना लावलश्कर क्या मायने?
कर्नल – गिरफ़्तारी में मदद देने के लिए।
सवार – वज़ीर अली की गिरफ़्तारी बहुत मुश्किल है साहब।
कर्नल – क्यों?
सवार – वो एक जाँबाज़ सिपाही है।
कर्नल – मैंने भी यह सुन रखा है। आप क्या चाहते हैं?
सवार – चंद कारतूस।
कर्नल – किसलिए?
सवार – वज़ीर अली को गिरफ़्तार करने के लिए।
कर्नल – ये लो दस कारतूस
सवार – (मुसकराते हुए) शुक्रिया।
कर्नल – आपका नाम?
सवार – वज़ीर अली। आपने मुझे कारतूस दिए इसलिए आपकी जान बख्शी करता हूँ। (ये कहकर बाहर चला जाता है, टापों का शोर सुनाई देता है। कर्नल एक सन्नाटे में है। हक्का-बक्का खड़ा है कि लेफ़्टीनेंट अंदर आता है)
लेफ़्टीनेंट – कौन था?
कर्नल – (दबी ज़बान से अपने आप से कहता है) एक जाँबाज़ सिपाही।`;

export const gadya07Kartoos: Subtopic = {
  id: 'hindi-gadya-07-kartoos',
  slug: 'kartoos',
  title: 'पाठ 7: कारतूस (हबीब तनवीर)',
  subtitle:
    'संपूर्ण NCERT एकांकी (पृ. 109–113 का शत-प्रतिशत मूल पाठ, पात्र-परिचय, मंच-निर्देश व चरम संवाद) Inline Word Lens सहित, 1-to-1 अंग्रेज़ी अनुवाद, सभी 25 NCERT शब्दार्थ, भाषा-अध्ययन व संपूर्ण प्रश्न-अभ्यास',
  estimatedMinutes: 45,
  difficulty: 'Core CBSE',
  ncertSection: 'स्पर्श भाग-2 › गद्यखंड › पाठ 7',
  learningObjectives: [
    'संपूर्ण NCERT एकांकी ‘कारतूस’ (सन् 1799, रात्रि का समय, गोरखपुर का जंगल) का प्रत्येक संवाद और रंगमंच-निर्देश Inline Word Lens व 1-to-1 अंग्रेज़ी अनुवाद सहित आत्मसात करना।',
    'अवध के नवाब आसिफ़उद्दौला, सआदत अली की गद्दारी, लॉर्ड क्लाइव व लॉर्ड वेल्जली की नीतियों तथा वज़ीर अली के रॉबिनहुड-सदृश देशप्रेम और कूटनीतिक सूझबूझ का विश्लेषण करना।',
    'बनारस में कंपनी के वकील के कत्ल, आज़मगढ़-घागरा पलायन, नेपाल की स्कीम तथा अकेले सवार बनकर कर्नल कालिंज से दस कारतूस हासिल करने के चरम नाटकीय मोड़ को समझना।',
    'NCERT ‘शब्दार्थ और टिप्पणियाँ’ (सभी 25 शब्द) तथा ‘भाषा अध्ययन’ (पर्यायवाची, मुहावरे, कारक, क्रिया-अन्विति व ‘ने’ प्रयोग, विराम-चिह्न) व ‘प्रश्न-अभ्यास’ (मौखिक, लिखित क/ख/ग) का पूर्ण अभ्यास करना।',
  ],
  keywords: [
    'कारतूस एकांकी',
    'हबीब तनवीर',
    'वज़ीर अली',
    'कर्नल कालिंज',
    'सआदत अली',
    'गोरखपुर का जंगल',
    'दस कारतूस',
    'दीवार हमगोश दारद',
    'Kartoos full NCERT play',
  ],
  sections: [
    {
      id: 'intro',
      title: '1. लेखक परिचय व ‘पाठ प्रवेश’ (Author Bio & Historical Context)',
      blocks: [
        {
          type: 'ncert-reference',
          title: 'पाठ 7: कारतूस (हबीब तनवीर) — Official NCERT PDF',
          bookName: 'स्पर्श भाग-2 — गद्यखंड',
          pdfPath: '/ncert/hindi/jhsp114.pdf',
          pdfStartPage: 1,
          pdfEndPage: 10,
          note: 'Official NCERT Sparsh Bhag-2 PDF (पृ. 107–116) को देखें या नीचे संपूर्ण 5-मिनट की एकांकी का शत-प्रतिशत मूल पाठ Inline Word Lens व 1-to-1 Bilingual Transcript के साथ पढ़ें।',
        },
        {
          type: 'callout',
          variant: 'ncert',
          title: 'हबीब तनवीर (1923–2009) एवं NCERT ‘पाठ प्रवेश’ (पृ. 107–108)',
          body: '1923 में छत्तीसगढ़ के रायपुर में जन्मे हबीब तनवीर ने 1944 में नागपुर से स्नातक की उपाधि प्राप्त की। तत्पश्चात ब्रिटेन की नाटक अकादमी से नाट्य-लेखन का अध्ययन करने गए और फिर दिल्ली लौटकर पेशेवर नाट्यमंच की स्थापना की। नाटककार, कवि, पत्रकार, नाट्य निर्देशक, अभिनेता जैसे कई रूपों में ख्याति प्राप्त हबीब तनवीर ने लोकनाट्य के क्षेत्र में भी महत्त्वपूर्ण कार्य किया। कई पुरस्कारों, फेलोशिप और पद्मश्री से सम्मानित हबीब तनवीर के प्रमुख नाटक हैं–आगरा बाज़ार, चरनदास चोर, देख रहे हैं नैन, हिरमा की अमर कहानी। इन्होंने बसंत ऋतु का सपना, शाजापुर की शांति बाई, मिट्टी की गाड़ी और मुद्राराक्षस नाटकों का आधुनिक रूपांतर भी किया।',
          bullets: [
            'पाठ प्रवेश का ऐतिहासिक संदर्भ (पृ. 108): अंग्रेज़ इस देश में व्यापारी के भेष में आए थे। शुरू में व्यापार ही करते रहे, लेकिन उनके इरादे केवल व्यापार करने के नहीं थे। धीरे-धीरे उनकी ईस्ट इंडिया कंपनी ने रियासतों पर कब्ज़ा जमाना शुरू कर दिया। उनकी नीयत उजागर होते ही अंग्रेज़ों को हिंदुस्तान से खदेड़ने के प्रयास भी शुरू हो गए।',
            'प्रस्तुत पाठ का नायक (जाँबाज़ वज़ीर अली): प्रस्तुत पाठ में एक ऐसे ही जाँबाज़ के कारनामों का वर्णन है जिसका एकमात्र लक्ष्य था अंग्रेज़ों को इस देश से बाहर करना। कंपनी के हुक्मरानों की नींद हराम कर देने वाला यह दिलेर इतना निडर था कि शेर की माँद में पहुँचकर उससे दो-दो हाथ करने की मानिंद कंपनी की बटालियन के खेमे में ही नहीं आ पहुँचा, बल्कि उनके कर्नल पर ऐसा रौब गालिब किया कि उसके मुँह से भी वे शब्द निकले जो किसी शत्रु या अपराधी के लिए तो नहीं ही बोले जा सकते थे।',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'CBSE High-Yield Line: “एक जाँबाज़ सिपाही।” और ‘दीवार हमगोश दारद’',
          body: 'बोर्ड परीक्षा में बार-बार पूछा जाता है कि शत्रु होने पर भी कर्नल ने वज़ीर अली को ‘एक जाँबाज़ सिपाही’ क्यों कहा, सवार ने तन्हाई माँगते समय ‘दीवार हमगोश दारद’ (दीवारों के भी कान होते हैं) क्यों कहा, और दस कारतूस देकर जाने के बाद कर्नल हक्का-बक्का क्यों खड़ा रह गया? इसके अतिरिक्त NCERT ‘भाषा अध्ययन’ (पृ. 114–115) के पर्यायवाची, मुहावरे, कारक भेद, ‘ने’ परसर्ग द्वारा क्रिया-अन्विति तथा विराम-चिह्न सीधे बोर्ड प्रश्नों में आते हैं।',
        },
      ],
    },
    {
      id: 'passages',
      title: '2. संपूर्ण NCERT एकांकी — भाग (1): ऐतिहासिक पृष्ठभूमि व संघर्ष (पृ. 109–110)',
      blocks: [
        {
          type: 'poetic-stanza',
          passageMode: 'prose',
          stanzaLabel: 'गद्यांश 1 (पृ. 109 संपूर्ण) — पात्र, स्थान, खेमे का दृश्य, वज़ीर अली के अफ़साने और सआदत अली की गद्दारी',
          dialectBadge: 'NCERT पृ. 109 • एकांकी आरंभ, मंच-निर्देश व ऐतिहासिक संवाद',
          stanzaText: PASSAGE_1,
          prasang:
            'यह अंश हबीब तनवीर द्वारा रचित प्रसिद्ध ऐतिहासिक एकांकी ‘कारतूस’ के आरंभ से लिया गया है। सन् 1799 की चाँदनी रात में गोरखपुर के जंगल में खेमे के भीतर बैठे अंग्रेज़ अधिकारी कर्नल कालिंज और लेफ़्टीनेंट, वज़ीर अली की देशभक्ति और उसके चाचा सआदत अली के स्वार्थपूर्ण विश्वासघात पर चर्चा कर रहे हैं।',
          bhavarthHindi:
            'पाँच मिनट की इस एकांकी में चार पात्र हैं—कर्नल, लेफ़्टीनेंट, सिपाही और सवार। हफ़्तों से जंगल में डेरा डाले सिपाही परेशान हैं क्योंकि वज़ीर अली पकड़ में नहीं आ रहा। कर्नल स्वीकार करता है कि वज़ीर अली के कारनामे रॉबिनहुड जैसे हैं; पाँच माह की अल्प हुकूमत में ही उसने अवध दरबार को अंग्रेज़ी प्रभाव से लगभग पवित्र (मुक्त) कर दिया था। दूसरी ओर नवाब आसिफ़उद्दौला के संतानहीन रहने की आस में सत्ता का लोभी उनका भाई सआदत अली वज़ीर अली के जन्म को अपनी मृत्यु मान बैठा था। वह ऐश-पसंद व्यक्ति था, इसलिए अंग्रेज़ों ने आधी संपत्ति (मुमलिकत) और दस लाख रुपये नगद लेकर उसे अवध के तख्त पर बैठा दिया।',
          englishHelper:
            'Opening stage sheet & Scene 1 (1799, midnight at Colonel Collins’s forest camp in Gorakhpur): Frustrated after weeks of hunting Wazir Ali, Collins likens his daring feats to Robin Hood—in just five months of rule he nearly purged the Awadh court of British influence. Collins explains how Asaf-ud-daula’s luxury-loving brother Saadat Ali, viewing Wazir Ali’s birth as his own doom, struck a deal gifting the British half his realm and ten lakh rupees in cash for the throne.',
          poeticDevices: [
            'रंगमंच-निर्देश (Stage Directions) — ‘चाँदनी छिटकी हुई है, अंदर लैंप जल रहा है’ से जंगल की रात का रहस्यमय वातावरण सजीव होता है।',
            'चरित्र-वैषम्य (Character Contrast) — देशभक्त वज़ीर अली के समक्ष विलासी व अवसरवादी सआदत अली को रखकर उपनिवेशवाद के सहयोगियों का चरित्र उजागर किया गया है।',
          ],
          words: [
            {
              word: 'पात्र',
              hindiMeaning: 'नाटक या एकांकी के चरित्र / भूमिका निभाने वाले व्यक्ति',
              englishMeaning: 'Characters / dramatis personae',
              grammarNote: 'तत्सम संज्ञा (paatra)',
            },
            {
              word: 'अवधि',
              hindiMeaning: 'समय-सीमा, मंचन का कुल समय',
              englishMeaning: 'Duration / time span',
              grammarNote: 'तत्सम स्त्रीलिंग संज्ञा (avadhi)',
            },
            {
              word: 'ज़माना',
              hindiMeaning: 'काल, युग या ऐतिहासिक समय',
              englishMeaning: 'Era / historical period',
              grammarNote: 'अरबी पुल्लिंग संज्ञा (zamaanaa • नुक़्ता ‘ज़’ पर)',
            },
            {
              word: 'खेमे',
              hindiMeaning: 'अस्थायी पड़ाव, तंबू या डेरे (एकवचन: खेमा)',
              englishMeaning: 'Military camp / tent (oblique singular/plural of खेमा)',
              grammarNote: 'पुल्लिंग संज्ञा (kheme • NCERT शब्दार्थ: खेमा = डेरा / अस्थायी पड़ाव)',
            },
            {
              word: 'लैंप',
              hindiMeaning: 'रोशनी का दीपक या लालटेन',
              englishMeaning: 'Lamp / lantern',
              grammarNote: 'अंग्रेज़ी आगत संज्ञा (lamp)',
            },
            {
              word: 'ज़िंदगी',
              hindiMeaning: 'जीवन, प्राण-यात्रा',
              englishMeaning: 'Life',
              grammarNote: 'फ़ारसी स्त्रीलिंग संज्ञा (zindagee • नुक़्ता ‘ज़’ पर)',
            },
            {
              word: 'खतरनाक',
              hindiMeaning: 'भयानक, जोखिम भरा, प्राणघातक',
              englishMeaning: 'Dangerous / perilous',
              grammarNote: 'फ़ारसी विशेषण (khatarnaak)',
            },
            {
              word: 'हफ़्तों',
              hindiMeaning: 'कई सप्ताहों तक',
              englishMeaning: 'For weeks',
              grammarNote: 'बहुवचन संज्ञा (hafton • नुक़्ता ‘फ़’ पर)',
            },
            {
              word: 'खेमा',
              hindiMeaning: 'डेरा / अस्थायी पड़ाव, तंबू',
              englishMeaning: 'Camp / tent / temporary halt',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 115) — पुल्लिंग संज्ञा',
            },
            {
              word: 'अफ़साने',
              hindiMeaning: 'कहानियाँ, वीरता के क़िस्से (एकवचन: अफ़साना)',
              englishMeaning: 'Tales / legends (singular: afsaanaa)',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 115) — पुल्लिंग बहुवचन (नुक़्ता ‘फ़’ पर)',
            },
            {
              word: 'कारनामे',
              hindiMeaning: 'ऐसे काम जो याद रहें, असाधारण साहसिक कार्य (एकवचन: कारनामा)',
              englishMeaning: 'Memorable exploits / deeds',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 115) — पुल्लिंग बहुवचन',
            },
            {
              word: 'खिलाफ़',
              hindiMeaning: 'विरुद्ध, विपरीत',
              englishMeaning: 'Against / opposed to',
              grammarNote: 'NCERT भाषा अध्ययन प्रश्न 1 (पर्यायवाची शब्द) • नुक़्ता ‘फ़’ पर',
            },
            {
              word: 'कदर',
              hindiMeaning: 'मात्रा, सीमा, हद (‘किस कदर’ = किस हद तक)',
              englishMeaning: 'Extent / degree',
              grammarNote: 'अरबी संज्ञा (kadar / qadar)',
            },
            {
              word: 'नफ़रत',
              hindiMeaning: 'घृणा, अत्यंत द्वेष',
              englishMeaning: 'Hatred / loathing',
              grammarNote: 'NCERT भाषा अध्ययन प्रश्न 1 (पर्यायवाची शब्द) • नुक़्ता ‘फ़’ पर',
            },
            {
              word: 'हुकूमत',
              hindiMeaning: 'शासन, राजकाज',
              englishMeaning: 'Rule / reign / governance',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 115) — अरबी स्त्रीलिंग संज्ञा',
            },
            {
              word: 'असर',
              hindiMeaning: 'प्रभाव',
              englishMeaning: 'Influence / impact',
              grammarNote: 'अरबी पुल्लिंग संज्ञा (asar)',
            },
            {
              word: 'पाक',
              hindiMeaning: 'पवित्र, शुद्ध, किसी बुराई से पूर्णतः मुक्त',
              englishMeaning: 'Pure / cleansed / free from',
              grammarNote: 'NCERT भाषा अध्ययन प्रश्न 1 (पर्यायवाची शब्द) — फ़ारसी विशेषण',
            },
            {
              word: 'तकरीबन',
              hindiMeaning: 'लगभग, प्रायः',
              englishMeaning: 'Almost / nearly',
              grammarNote: 'अरबी क्रियाविशेषण (taqreeban)',
            },
            {
              word: 'कामयाब',
              hindiMeaning: 'सफल, लक्ष्य प्राप्त करने वाला',
              englishMeaning: 'Successful',
              grammarNote: 'NCERT भाषा अध्ययन प्रश्न 1 (पर्यायवाची शब्द) — फ़ारसी विशेषण',
            },
            {
              word: 'उम्मीद',
              hindiMeaning: 'आशा, अपेक्षा',
              englishMeaning: 'Hope / expectation',
              grammarNote: 'NCERT भाषा अध्ययन प्रश्न 1 (पर्यायवाची शब्द) — फ़ारसी स्त्रीलिंग संज्ञा',
            },
            {
              word: 'पैदाइश',
              hindiMeaning: 'जन्म',
              englishMeaning: 'Birth',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 115) — फ़ारसी स्त्रीलिंग संज्ञा',
            },
            {
              word: 'खयाल',
              hindiMeaning: 'विचार, धारणा (‘खयाल किया’ = मान लिया)',
              englishMeaning: 'Thought / regarded as',
              grammarNote: 'अरबी संज्ञा (khayaal)',
            },
            {
              word: 'तख्त',
              hindiMeaning: 'सिंहासन, राजगद्दी',
              englishMeaning: 'Royal throne',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 115) — फ़ारसी पुल्लिंग संज्ञा (तख़्त का पाठ-रूप)',
            },
            {
              word: 'मसलेहत',
              hindiMeaning: 'रहस्य, कूटनीतिक उद्देश्य या छिपा कारण',
              englishMeaning: 'Secret motive / diplomatic expediency',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 115) — अरबी स्त्रीलिंग संज्ञा',
            },
            {
              word: 'ऐश पसंद',
              hindiMeaning: 'भोग-विलास पसंद करने वाला',
              englishMeaning: 'Pleasure-seeking / luxury-loving',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 115) में ‘ऐश-पसंद’ रूप में वर्णित',
            },
            {
              word: 'मुमलिकत',
              hindiMeaning: 'राज्य, जायदाद, दौलत या संपत्ति',
              englishMeaning: 'Realm / kingdom / royal estate',
              grammarNote: 'अरबी स्त्रीलिंग संज्ञा (mumlikat • पाठ में कोष्ठक अर्थ सहित)',
            },
            {
              word: 'नगद',
              hindiMeaning: 'तुरंत हाथ में दी जाने वाली रोकड़ राशि',
              englishMeaning: 'Hard cash',
              grammarNote: 'अरबी विशेषण/संज्ञा (nagad / naqad)',
            },
            {
              word: 'मज़े',
              hindiMeaning: 'आनंद, सुख-चैन, मौज',
              englishMeaning: 'Pleasure / enjoyment',
              grammarNote: 'फ़ारसी संज्ञा (maze • नुक़्ता ‘ज़’ पर)',
            },
          ],
        },
        {
          type: 'poetic-stanza',
          passageMode: 'prose',
          stanzaLabel: 'गद्यांश 2 (पृ. 110 पूर्वार्ध) — शाहे-ज़मा को आमंत्रण, देशव्यापी लहर और मुट्ठी भर जाँबाज़ों का दमखम',
          dialectBadge: 'NCERT पृ. 110 • स्वतंत्रता-संघर्ष की व्याप्ति व कंपनी का भय',
          stanzaText: PASSAGE_2,
          prasang:
            'यह संवाद ‘कारतूस’ एकांकी के मध्य से है जिसमें लेफ़्टीनेंट और कर्नल, वज़ीर अली द्वारा अंग्रेज़ों के विरुद्ध रचे जा रहे व्यापक राजनीतिक गठबंधन और उसकी अदम्य युद्ध-शक्ति की चर्चा करते हैं।',
          bhavarthHindi:
            'लेफ़्टीनेंट बताता है कि वज़ीर अली अफ़गानिस्तान के शासक शाहे-ज़मा को हिंदुस्तान पर आक्रमण का न्योता दे रहा है। कर्नल स्पष्ट करता है कि ऐसा आमंत्रण सबसे पहले टीपू सुल्तान ने दिया था, फिर वज़ीर अली और बंगाल के नवाब के रिश्तेदार शमसुद्दौला ने भी। यह सुनकर लेफ़्टीनेंट घबरा जाता है कि पूरे हिंदुस्तान में कंपनी के खिलाफ़ विद्रोह की लहर दौड़ गई है। कर्नल भी मानता है कि यदि यह गठजोड़ सफल हो गया तो लॉर्ड क्लाइव द्वारा बक्सर और प्लासी में हासिल की गई अंग्रेज़ी सत्ता लॉर्ड वेल्जली के हाथों से छिन जाएगी। एक पूरी फ़ौज लेकर भी वह बरसों से जंगल में मुट्ठी भर जाँबाज़ साथियों वाले वज़ीर अली को पकड़ने में नाकाम रहा है।',
          englishHelper:
            'The Lieutenant reports that Wazir Ali is inviting Afghan ruler Shah-e-Zaman to invade India—a move first initiated by Tipu Sultan and echoed by Bengal’s Shamsuddaula. Fearing a nationwide anti-Company wave, Collins warns that everything Lord Clive won at Buxar and Plassey could be lost under Lord Wellesley. Despite chasing him with an entire army for years, Collins admits a handful of daredevils keep throwing dust in their eyes.',
          poeticDevices: [
            'ऐतिहासिक यथार्थवाद — टीपू सुल्तान, शमसुद्दौला, शाहे-ज़मा, बक्सर-प्लासी और लॉर्ड क्लाइव-वेल्जली के उल्लेख से एकांकी को प्रामाणिक ऐतिहासिक आधार मिलता है।',
            'मुहावरेदार अभिव्यक्ति — ‘आँखों में धूल झोंकना’ तथा ‘धरे रह जाना’ ने अंग्रेज़ी सत्ता की बेबसी को सटीक शब्दों में व्यक्त किया है।',
          ],
          words: [
            {
              word: 'बादशाह',
              hindiMeaning: 'सम्राट, राजा, सुलतान',
              englishMeaning: 'Emperor / monarch',
              grammarNote: 'फ़ारसी पुल्लिंग संज्ञा (baadshaah)',
            },
            {
              word: 'शाहे-ज़मा',
              hindiMeaning: 'अफ़गानिस्तान के तत्कालीन शासक (ज़मान शाह)',
              englishMeaning: 'Shah-e-Zaman (ruler of Afghanistan)',
              grammarNote: 'व्यक्तिवाचक संज्ञा (योजक चिह्न व नुक़्ता ‘ज़’ सहित)',
            },
            {
              word: 'हमला',
              hindiMeaning: 'आक्रमण, धावा',
              englishMeaning: 'Attack / invasion',
              grammarNote: 'NCERT भाषा अध्ययन प्रश्न 1 (पर्यायवाची शब्द) — पुल्लिंग संज्ञा',
            },
            {
              word: 'दावत',
              hindiMeaning: 'आमंत्रण, बुलावा, न्योता',
              englishMeaning: 'Invitation',
              grammarNote: 'अरबी स्त्रीलिंग संज्ञा (daavat • पाठ में कोष्ठक अर्थ: आमंत्रण)',
            },
            {
              word: 'निस्बती',
              hindiMeaning: 'रिश्ते का (वैवाहिक आदि संबंध से जुड़ा)',
              englishMeaning: 'Related by marriage / kinship',
              grammarNote: 'अरबी विशेषण (nisbatee • पाठ में कोष्ठक अर्थ: रिश्ते)',
            },
            {
              word: 'लहर',
              hindiMeaning: 'तरंग, जोश या आंदोलन की भावना',
              englishMeaning: 'Wave / surge (of rebellion)',
              grammarNote: 'तद्भव स्त्रीलिंग संज्ञा (lahar)',
            },
            {
              word: 'बक्सर',
              hindiMeaning: '1764 ई. का ऐतिहासिक युद्ध जहाँ अंग्रेज़ों की निर्णायक जीत हुई',
              englishMeaning: 'Battle of Buxar (1764)',
              grammarNote: 'ऐतिहासिक स्थानवाचक संज्ञा',
            },
            {
              word: 'प्लासी',
              hindiMeaning: '1757 ई. का युद्ध जिससे भारत में कंपनी शासन की नींव पड़ी',
              englishMeaning: 'Battle of Plassey (1757)',
              grammarNote: 'ऐतिहासिक स्थानवाचक संज्ञा',
            },
            {
              word: 'धरे',
              hindiMeaning: 'बेकार पड़े रह जाना (‘धरे रह जाएँगे’ = व्यर्थ हो जाएँगे)',
              englishMeaning: 'Left futile / rendered useless',
              grammarNote: 'मुहावरेदार क्रिया-प्रयोग (dhare)',
            },
            {
              word: 'हासिल',
              hindiMeaning: 'प्राप्त, उपलब्ध',
              englishMeaning: 'Achieved / acquired / gained',
              grammarNote: 'NCERT भाषा अध्ययन प्रश्न 1 (पर्यायवाची शब्द) — अरबी संज्ञा/विशेषण',
            },
            {
              word: 'आज़ादी',
              hindiMeaning: 'स्वतंत्रता, स्वच्छंद विचरण',
              englishMeaning: 'Freedom / being at large',
              grammarNote: 'फ़ारसी स्त्रीलिंग संज्ञा (aazaadee • नुक़्ता ‘ज़’ पर)',
            },
            {
              word: 'शख्स',
              hindiMeaning: 'व्यक्ति, आदमी',
              englishMeaning: 'Person / individual',
              grammarNote: 'अरबी पुल्लिंग संज्ञा (shakhs)',
            },
            {
              word: 'गिरफ़्तार',
              hindiMeaning: 'बंदी बनाया हुआ, पकड़ा गया',
              englishMeaning: 'Arrested / captured',
              grammarNote: 'फ़ारसी विशेषण (giraftaar • नुक़्ता ‘फ़’ पर)',
            },
            {
              word: 'फ़ौज',
              hindiMeaning: 'सेना, सैन्य-दल',
              englishMeaning: 'Army / military force',
              grammarNote: 'अरबी स्त्रीलिंग संज्ञा (fauj • नुक़्ता ‘फ़’ पर)',
            },
            {
              word: 'बरसों',
              hindiMeaning: 'अनेक वर्षों से',
              englishMeaning: 'For years',
              grammarNote: 'तद्भव बहुवचन संज्ञा (एकवचन: बरस/वर्ष)',
            },
            {
              word: 'चंद',
              hindiMeaning: 'कुछ, गिने-चुने',
              englishMeaning: 'A few / handful of',
              grammarNote: 'फ़ारसी अनिश्चित संख्यावाचक विशेषण (chand)',
            },
            {
              word: 'जाँबाज़',
              hindiMeaning: 'जान की बाज़ी लगाने वाला, अत्यंत निडर योद्धा',
              englishMeaning: 'Daredevil / fearless warrior',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 115) — फ़ारसी विशेषण/संज्ञा',
            },
            {
              word: 'मुट्ठी भर',
              hindiMeaning: 'बहुत कम संख्या में, गिने-चुने',
              englishMeaning: 'A mere handful',
              grammarNote: 'परिमाणवाचक/संख्यावाचक पदबंध (प्रश्न-अभ्यास में ‘मुट्ठीभर’)',
            },
            {
              word: 'दमखम',
              hindiMeaning: 'शक्ति और दृढ़ता, अदम्य साहस',
              englishMeaning: 'Grit, strength and resolve',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 115) — फ़ारसी पुल्लिंग संज्ञा',
            },
          ],
        },
        {
          type: 'poetic-stanza',
          passageMode: 'prose',
          stanzaLabel: 'गद्यांश 3 (पृ. 110 उत्तरार्ध) — बनारस के वकील का कत्ल, वज़ीफ़ा और आज़मगढ़-घागरा पलायन',
          dialectBadge: 'NCERT पृ. 110 • वकील-हत्याकांड और वज़ीर अली का स्वाभिमान',
          stanzaText: PASSAGE_3,
          prasang:
            'लेफ़्टीनेंट द्वारा यह पूछने पर कि वज़ीर अली ने कंपनी के वकील का कत्ल क्यों किया, कर्नल कालिंज बनारस की घटना और उसके बाद के पलायन का पूरा वृत्तांत सुनाता है।',
          bhavarthHindi:
            'पदच्युत किए जाने के बाद अंग्रेज़ों ने वज़ीर अली को तीन लाख रुपये सालाना वज़ीफ़ा तय कर बनारस भेज दिया था। कुछ महीनों बाद गवर्नर जनरल ने उसे कलकत्ता तलब किया। जब वज़ीर अली बनारस स्थित कंपनी के वकील के पास इस बुलावे की शिकायत लेकर गया, तो वकील ने उसकी बात अनसुनी कर उसे अपशब्द कहे। पहले से ही अंग्रेज़ों के विरुद्ध भरी नफ़रत के कारण वज़ीर अली ने स्वाभिमान की रक्षा में खंजर से वकील का काम तमाम कर दिया और अपने वफ़ादार साथियों (जानिसारों) के साथ आज़मगढ़ भाग निकला। आज़मगढ़ के शासकों ने उन्हें सुरक्षा प्रदान कर घागरा नदी तक पहुँचा दिया और तभी से यह कारवाँ जंगलों में भटक रहा है।',
          englishHelper:
            'When asked about Wazir Ali’s personal bravery, Collins recounts how, after being deposed to Banaras on a ₹3-lakh annual stipend, Wazir Ali was summoned to Calcutta by the Governor General. Protesting to the Company’s Banaras lawyer—who rudely insulted him—Wazir Ali’s deep hatred flared and he slew the lawyer with a dagger. He fled with his devoted followers to Azamgarh, whose rulers escorted them safely to the Ghaghara, and his band has roamed these forests ever since.',
          poeticDevices: [
            'प्रवाहपूर्ण कथा-शैली — छोटे-छोटे प्रश्नों (‘और भाग गया?’) के बीच कर्नल के विस्तृत कथन से ऐतिहासिक घटनाक्रम स्पष्ट और रोचक बनता है।',
            '‘कूट–कूटकर भरी है’ व ‘काम तमाम कर दिया’ — मुहावरों के सटीक प्रयोग से क्रोध और प्रतिशोध की तीव्रता सजीव हुई है।',
          ],
          words: [
            {
              word: 'जाती तौर से',
              hindiMeaning: 'व्यक्तिगत रूप से, निजी स्वभाव से',
              englishMeaning: 'Personally / by personal temperament',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 115) — क्रियाविशेषण पदबंध',
            },
            {
              word: 'कत्ल',
              hindiMeaning: 'वध, हत्या',
              englishMeaning: 'Murder / slaying',
              grammarNote: 'अरबी पुल्लिंग संज्ञा (qatl)',
            },
            {
              word: 'किस्सा',
              hindiMeaning: 'घटना, कहानी, वृत्तांत',
              englishMeaning: 'Incident / episode / story',
              grammarNote: 'अरबी पुल्लिंग संज्ञा (qissaa)',
            },
            {
              word: 'सालाना',
              hindiMeaning: 'वार्षिक, प्रति वर्ष मिलने वाला',
              englishMeaning: 'Annual / yearly',
              grammarNote: 'फ़ारसी विशेषण (saalaanaa)',
            },
            {
              word: 'वज़ीफ़ा',
              hindiMeaning: 'परवरिश के लिए दी जाने वाली राशि (पेंशन/वृत्ति)',
              englishMeaning: 'Stipend / allowance / pension',
              grammarNote: 'NCERT शब्दार्थ (पृ. 115) व भाषा अध्ययन प्रश्न 1 (नुक़्ता ‘ज़’ व ‘फ़’ पर)',
            },
            {
              word: 'मुकर्रर',
              hindiMeaning: 'तय करना, निश्चित करना',
              englishMeaning: 'Fixed / appointed / settled',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 115) — अरबी विशेषण',
            },
            {
              word: 'तलब किया',
              hindiMeaning: 'याद किया, आदेश देकर बुलवाया',
              englishMeaning: 'Summoned / sent for',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 115) — संयुक्त क्रिया',
            },
            {
              word: 'शिकायत',
              hindiMeaning: 'उलाहना, असंतोष या आपत्ति प्रकट करना',
              englishMeaning: 'Complaint / grievance',
              grammarNote: 'अरबी स्त्रीलिंग संज्ञा (shikaayat)',
            },
            {
              word: 'परवाह',
              hindiMeaning: 'चिंता, ध्यान, फ़िक्र',
              englishMeaning: 'Concern / heed',
              grammarNote: 'फ़ारसी स्त्रीलिंग संज्ञा (parvaah)',
            },
            {
              word: 'उलटा',
              hindiMeaning: 'विपरीत, इसके बदले में',
              englishMeaning: 'On the contrary / instead',
              grammarNote: 'क्रियाविशेषण (ultaa)',
            },
            {
              word: 'बुरा-भला',
              hindiMeaning: 'कठोर और अपमानजनक शब्द, डाँट-फटकार',
              englishMeaning: 'Rebuke / harsh insults',
              grammarNote: 'द्वंद्व समास / युग्म शब्द (बुरा और भला)',
            },
            {
              word: 'खंजर',
              hindiMeaning: 'कटार, छुरा',
              englishMeaning: 'Dagger',
              grammarNote: 'अरबी पुल्लिंग संज्ञा (khanjar)',
            },
            {
              word: 'तमाम',
              hindiMeaning: 'समाप्त (‘काम तमाम करना’ = मार डालना)',
              englishMeaning: 'Finished off / ended',
              grammarNote: 'अरबी विशेषण (tamaam)',
            },
            {
              word: 'जानिसारों',
              hindiMeaning: 'प्राण न्योछावर करने वाले वफ़ादार साथियों',
              englishMeaning: 'Devoted loyalists ready to lay down their lives',
              grammarNote: 'फ़ारसी बहुवचन संज्ञा (जान + निसार)',
            },
            {
              word: 'समेत',
              hindiMeaning: 'सहित, के साथ',
              englishMeaning: 'Along with / together with',
              grammarNote: 'संबंधबोधक अव्यय (samet)',
            },
            {
              word: 'हुक्मरां',
              hindiMeaning: 'शासक, हुकूमत चलाने वाला',
              englishMeaning: 'Ruler / sovereign / authority',
              grammarNote: 'NCERT शब्दार्थ (पृ. 115) में ‘हुकमरां’ रूप से वर्णित (पाठ में ‘हुक्मरां’)',
            },
            {
              word: 'हिफ़ाज़त',
              hindiMeaning: 'सुरक्षा, रक्षा, बचाव',
              englishMeaning: 'Protection / safekeeping',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 115) — नुक़्ता ‘फ़’ व ‘ज़’ पर',
            },
            {
              word: 'कारवाँ',
              hindiMeaning: 'यात्रियों या सैनिकों का काफ़िला / दल',
              englishMeaning: 'Caravan / wandering band',
              grammarNote: 'फ़ारसी संज्ञा (kaarvaan • चंद्रबिंदु सहित)',
            },
          ],
        },
      ],
    },
    {
      id: 'passages-part-2',
      title: '3. संपूर्ण NCERT एकांकी — भाग (2): सवार का आगमन व चरम मोड़ (पृ. 111–113)',
      blocks: [
        {
          type: 'poetic-stanza',
          passageMode: 'prose',
          stanzaLabel: 'गद्यांश 4 (पृ. 111 पूर्वार्ध) — नेपाल की स्कीम, दूर से उठती गर्द और एक सवार का आगमन',
          dialectBadge: 'NCERT पृ. 111 • रहस्य और नाटकीय गति का प्रारंभ',
          stanzaText: PASSAGE_4,
          prasang:
            'यह अंश एकांकी में नाटकीय मोड़ लाता है। वज़ीर अली की रणनीति पर बातचीत करते-करते अचानक दूर जंगल में धूल उड़ती दिखाई देती है और एक अकेला घुड़सवार तेज़ी से खेमे की ओर बढ़ता है।',
          bhavarthHindi:
            'कर्नल बताता है कि वज़ीर अली की योजना किसी तरह नेपाल पहुँचने, अफ़गानी हमले की प्रतीक्षा में अपनी सैन्य शक्ति बढ़ाने, सआदत अली को गद्दी से हटाकर अवध पर पुनः अधिकार करने और अंग्रेज़ों को हिंदुस्तान से बाहर खदेड़ने की है। तभी एक सिपाही आकर दूर से गर्द (धूल) उठने की सूचना देता है। लेफ़्टीनेंट खिड़की से देखता है कि धूल तो ऐसे उड़ रही है मानो पूरा काफ़िला चला आ रहा हो, पर वास्तव में केवल एक ही सवार सरपट घोड़ा दौड़ाता हुआ सीधे उनके खेमे की तरफ़ आ रहा है। कर्नल सिपाहियों को उस पर नज़र रखने का आदेश देता है और शीघ्र ही घोड़ों की टापों की आवाज़ खेमे के बिलकुल निकट आकर रुक जाती है।',
          englishHelper:
            'Collins reveals Wazir Ali’s scheme: reach Nepal, await the Afghan invasion, rebuild strength, oust Saadat Ali, reclaim Awadh, and drive the British out of India. Just then a soldier rushes in—dust is rising on the horizon. Peering out the window, the Lieutenant marvels that the dust looks like a whole caravan, yet only one lone rider gallops straight toward them. Soon hoofbeats thunder right up to the tent and halt.',
          poeticDevices: [
            'उत्प्रेक्षा/उपमा का नाटकीय प्रयोग — ‘गर्द तो ऐसी उड़ रही है जैसे कि पूरा एक काफ़िला चला आ रहा हो’ पंक्ति अकेले सवार के तेज़ वेग और प्रभाव को दर्शाती है।',
            'ध्वनि-बिंब (Auditory Imagery) — ‘टापों की आवाज़ बहुत करीब आकर रुक जाती है’ मंच पर तनाव और उत्सुकता को चरम पर पहुँचाता है।',
          ],
          words: [
            {
              word: 'स्कीम',
              hindiMeaning: 'योजना, रणनीति, गुप्त कार्ययोजना',
              englishMeaning: 'Scheme / strategic plan',
              grammarNote: 'अंग्रेज़ी आगत स्त्रीलिंग संज्ञा (scheme)',
            },
            {
              word: 'इंतेज़ार',
              hindiMeaning: 'प्रतीक्षा, बाट जोहना',
              englishMeaning: 'Wait / anticipation',
              grammarNote: 'NCERT भाषा अध्ययन प्रश्न 1 (पर्यायवाची शब्द) • नुक़्ता ‘ज़’ पर',
            },
            {
              word: 'ताकत',
              hindiMeaning: 'शक्ति, बल, सैन्य सामर्थ्य',
              englishMeaning: 'Strength / military power',
              grammarNote: 'अरबी स्त्रीलिंग संज्ञा (taaqat)',
            },
            {
              word: 'कब्ज़ा',
              hindiMeaning: 'अधिकार, नियंत्रण',
              englishMeaning: 'Possession / control / capture',
              grammarNote: 'अरबी पुल्लिंग संज्ञा (qabzaa • नुक़्ता ‘ज़’ पर)',
            },
            {
              word: 'मुश्किल',
              hindiMeaning: 'कठिन, दुर्गम',
              englishMeaning: 'Difficult / hard',
              grammarNote: 'अरबी विशेषण (mushkil)',
            },
            {
              word: 'मुमकिन',
              hindiMeaning: 'संभव, हो सकने योग्य',
              englishMeaning: 'Possible / likely',
              grammarNote: 'NCERT भाषा अध्ययन प्रश्न 1 (पर्यायवाची शब्द) — अरबी विशेषण',
            },
            {
              word: 'फ़ौजें',
              hindiMeaning: 'सेनाएँ (बहुवचन)',
              englishMeaning: 'Armies / troops',
              grammarNote: 'स्त्रीलिंग बहुवचन संज्ञा (faujen • नुक़्ता ‘फ़’ पर)',
            },
            {
              word: 'सख्ती',
              hindiMeaning: 'कठोरता, कड़ाई',
              englishMeaning: 'Strictness / severity / vigour',
              grammarNote: 'फ़ारसी भाववाचक संज्ञा (sakhtee)',
            },
            {
              word: 'दाखिल',
              hindiMeaning: 'प्रवेश करना (‘दाखिल होता है’ = अंदर आता है)',
              englishMeaning: 'Enters / steps in',
              grammarNote: 'अरबी विशेषण (daakhil)',
            },
            {
              word: 'गर्द',
              hindiMeaning: 'धूल (सरपट दौड़ते घोड़े से उड़ने वाली धूल)',
              englishMeaning: 'Dust / cloud of dust',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 116) — फ़ारसी स्त्रीलिंग संज्ञा',
            },
            {
              word: 'मसरूफ़',
              hindiMeaning: 'व्यस्त, तल्लीन, लगा हुआ',
              englishMeaning: 'Busy / absorbed / engrossed',
              grammarNote: 'अरबी विशेषण (masroof • नुक़्ता ‘फ़’ पर)',
            },
            {
              word: 'काफ़िला',
              hindiMeaning: 'एक क्षेत्र से दूसरे क्षेत्र में जाने वाले यात्रियों का समूह',
              englishMeaning: 'Caravan / large marching troop',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 116) — नुक़्ता ‘फ़’ पर',
            },
            {
              word: 'नज़र',
              hindiMeaning: 'दृष्टि, निगाह (‘नज़र रखना’ = निगरानी करना)',
              englishMeaning: 'Sight / gaze / watch',
              grammarNote: 'अरबी स्त्रीलिंग संज्ञा (nazar • नुक़्ता ‘ज़’ पर)',
            },
            {
              word: 'सरपट',
              hindiMeaning: 'तेज़ दौड़, पूरी रफ़्तार से',
              englishMeaning: 'At full gallop',
              grammarNote: 'रीतिवाचक क्रियाविशेषण (sarpat)',
            },
            {
              word: 'शुब्हे',
              hindiMeaning: 'संदेह, शक',
              englishMeaning: 'Doubt / suspicion',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 116) — अरबी संज्ञा',
            },
            {
              word: 'गुंजाइश',
              hindiMeaning: 'संभावना, स्थान या अवकाश',
              englishMeaning: 'Possibility / scope / room',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 116) — फ़ारसी स्त्रीलिंग संज्ञा',
            },
            {
              word: 'टापों',
              hindiMeaning: 'घोड़े के खुरों की आवाज़ / पदचाप',
              englishMeaning: 'Hoofbeats (of a galloping horse)',
              grammarNote: 'बहुवचन संज्ञा (एकवचन: टाप)',
            },
            {
              word: 'आवाज़',
              hindiMeaning: 'ध्वनि, स्वर, आहट',
              englishMeaning: 'Sound / noise',
              grammarNote: 'फ़ारसी स्त्रीलिंग संज्ञा (aavaaz • नुक़्ता ‘ज़’ पर)',
            },
          ],
        },
        {
          type: 'poetic-stanza',
          passageMode: 'prose',
          stanzaLabel: 'गद्यांश 5 (पृ. 111 उत्तरार्ध) — खेमे में प्रवेश और “दीवार हमगोश दारद, तन्हाई।”',
          dialectBadge: 'NCERT पृ. 111 • रहस्यमय संवाद और एकांत की माँग',
          stanzaText: PASSAGE_5,
          prasang:
            'यह दृश्य खेमे के बाहर सवार के पहुँचने और अंदर आकर कर्नल से एकांत (तन्हाई) माँगने का है, जहाँ लेफ़्टीनेंट और सिपाही को बाहर भेज दिया जाता है।',
          bhavarthHindi:
            'बाहर से सवार कर्नल से मिलने की अनुमति माँगता है। गोरा सिपाही भीतर आकर ‘हुज़ूर’ कहकर सूचना देता है। लेफ़्टीनेंट अनुमान लगाता है कि शायद यह वज़ीर अली का कोई भेदिया है जो उसे गिरफ़्तार करवाना चाहता होगा, पर कर्नल उसे चुप कराकर सवार को अंदर बुलवाता है। खेमे में प्रवेश करते ही सवार आत्मविश्वास से ‘तन्हाई! तन्हाई!’ पुकारता है। कर्नल के यह कहने पर कि यहाँ कोई पराया नहीं है, वह बेहिचक अपना राज़ेदिल कह दे—सवार फ़ारसी कहावत ‘दीवार हमगोश दारद’ (दीवारों के भी कान होते हैं) दोहराकर पूर्ण एकांत माँगता है। कर्नल लेफ़्टीनेंट व सिपाही को बाहर भेज देता है और दोनों तन्हा रह जाते हैं।',
          englishHelper:
            'Outside, the rider asks to meet the Colonel. The guard announces him while the Lieutenant guesses he might be one of Wazir Ali’s men seeking to betray him. Silencing the Lieutenant, Collins admits the rider, who immediately cries, “Tanhai! Tanhai!” (Privacy!). Assured no strangers are present to hear his heart’s secret, the rider quotes the proverb “Deewar hamgosh darad” (even the walls have ears). Collins motions the Lieutenant and soldier out; after a brief pause, looking all around, the rider speaks.',
          poeticDevices: [
            'फ़ारसी लोकोक्ति (‘दीवार हमगोश दारद’) — अल्प शब्दों में गोपनीयता का वातावरण रचकर श्रोता (कर्नल) को विश्वास में लेने की चतुराई।',
            'नाटकीय संदेह (Dramatic Tension) — लेफ़्टीनेंट की ग़लतफहमी पाठकों की जिज्ञासा को चरम बिंदु की ओर ले जाती है।',
          ],
          words: [
            {
              word: 'खूब',
              hindiMeaning: 'बहुत बढ़िया, अच्छा (‘बहुत खूब’ = ठीक है)',
              englishMeaning: 'Very well / splendid',
              grammarNote: 'फ़ारसी विशेषण/अव्यय (khoob)',
            },
            {
              word: 'हुज़ूर',
              hindiMeaning: 'श्रीमान, महाशय (अधिकारी हेतु आदरसूचक संबोधन)',
              englishMeaning: 'Sir / Your Honour',
              grammarNote: 'अरबी संबोधन (huzoor • नुक़्ता ‘ज़’ पर)',
            },
            {
              word: 'गिरफ़्तार',
              hindiMeaning: 'पकड़वाना, बंदी बनाना',
              englishMeaning: 'Arrested / captured',
              grammarNote: 'फ़ारसी विशेषण (नुक़्ता ‘फ़’ पर)',
            },
            {
              word: 'खामोश',
              hindiMeaning: 'चुप, मौन, शांत',
              englishMeaning: 'Silent / quiet',
              grammarNote: 'फ़ारसी विशेषण (khaamosh)',
            },
            {
              word: 'तन्हाई',
              hindiMeaning: 'एकांत, अकेलापन (जहाँ कोई तीसरा न सुन सके)',
              englishMeaning: 'Solitude / privacy',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 116) — फ़ारसी स्त्रीलिंग संज्ञा',
            },
            {
              word: 'गैर',
              hindiMeaning: 'पराया, अनजान, बाहरी व्यक्ति',
              englishMeaning: 'Stranger / outsider',
              grammarNote: 'अरबी विशेषण (gair)',
            },
            {
              word: 'राज़ेदिल',
              hindiMeaning: 'मन की गुप्त बात, हृदय का रहस्य',
              englishMeaning: 'Heart’s secret / closely guarded confidence',
              grammarNote: 'फ़ारसी इज़ाफ़त समास (राज़-ए-दिल • नुक़्ता ‘ज़’ पर)',
            },
            {
              word: 'दीवार हमगोश दारद',
              hindiMeaning: 'दीवारों के भी कान होते हैं (गुप्त बात सावधानी से करने की फ़ारसी कहावत)',
              englishMeaning: 'Even the walls have ears (Persian proverb)',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 116) — फ़ारसी लोकोक्ति',
            },
            {
              word: 'इशारा',
              hindiMeaning: 'संकेत',
              englishMeaning: 'Gesture / signal',
              grammarNote: 'अरबी पुल्लिंग संज्ञा (ishaaraa)',
            },
            {
              word: 'तन्हा',
              hindiMeaning: 'अकेला, एकांत में',
              englishMeaning: 'Alone / solitary',
              grammarNote: 'फ़ारसी विशेषण (tanhaa)',
            },
            {
              word: 'ज़रा',
              hindiMeaning: 'थोड़ा-सा, क्षण भर',
              englishMeaning: 'A little / brief',
              grammarNote: 'अरबी विशेषण/क्रियाविशेषण (zaraa • नुक़्ता ‘ज़’ पर)',
            },
            {
              word: 'वक्फ़े',
              hindiMeaning: 'विराम, अंतराल, कुछ क्षण का ठहराव',
              englishMeaning: 'Pause / brief interval',
              grammarNote: 'अरबी संज्ञा (vaqfe • एकवचन: वक्फ़ा • नुक़्ता ‘फ़’ पर)',
            },
          ],
        },
        {
          type: 'poetic-stanza',
          passageMode: 'prose',
          stanzaLabel: 'गद्यांश 6 (पृ. 112–113 संपूर्ण) — दस कारतूस, “वज़ीर अली” की घोषणा और “एक जाँबाज़ सिपाही।”',
          dialectBadge: 'NCERT पृ. 112–113 • चरमोत्कर्ष (Climax) व नाटकीय पटाक्षेप',
          stanzaText: PASSAGE_6,
          prasang:
            'यह ‘कारतूस’ एकांकी का चरम और अंतिम दृश्य है। एकांत पाकर सवार अपनी वाक्पटुता से स्वयं कर्नल के हाथों दस कारतूस प्राप्त कर लेता है और जाते-जाते अपना असली परिचय देकर सबको स्तब्ध छोड़ जाता है।',
          bhavarthHindi:
            'सवार कर्नल से पूछता है कि इस मुकाम पर इतने बड़े लावलश्कर के साथ खेमा क्यों डाला गया है। कर्नल बताता है कि कंपनी के हुक्म से वज़ीर अली को गिरफ़्तार करना है। सवार चतुराई से उसकी गिरफ़्तारी को बेहद कठिन बताते हुए उसे ‘एक जाँबाज़ सिपाही’ कहता है और उसी को पकड़ने के बहाने ‘चंद कारतूस’ माँगता है। कर्नल बिना शक किए तुरंत दस कारतूस थमा देता है। मुसकराकर शुक्रिया अदा करने के बाद जब कर्नल नाम पूछता है, तो सवार निर्भीकता से घोषित करता है—“वज़ीर अली। आपने मुझे कारतूस दिए इसलिए आपकी जान बख्शी करता हूँ।” यह कहकर वह बाहर निकल घोड़े पर सवार हो ओझल हो जाता है। लेफ़्टीनेंट के ‘कौन था?’ पूछने पर हक्का-बक्का खड़ा कर्नल दबी ज़बान से अपने आपसे केवल इतना कह पाता है—“एक जाँबाज़ सिपाही।”',
          englishHelper:
            'Alone with Collins, the rider asks why such a massive force is encamped at this spot. Told the Company ordered Wazir Ali’s arrest, he warns that Wazir Ali is a fearless soldier—then calmly asks for a few cartridges “to arrest Wazir Ali.” Collins hands over ten cartridges! Smiling “Thank you,” the rider answers the Colonel’s question “Your name?” with: “Wazir Ali. Because you gave me cartridges, I spare your life.” He vanishes into the night amidst hoofbeats; stunned and speechless as the Lieutenant rushes in asking “Who was it?”, Collins whispers to himself: “A fearless soldier.”',
          poeticDevices: [
            'नाटकीय व्यंग्य (Dramatic Irony) — कर्नल जिसे वज़ीर अली का विरोधी या मददगार समझकर स्वयं दस कारतूस सौंप देता है, वही व्यक्ति स्वयं वज़ीर अली निकलता है।',
            'सूक्ष्म व तीव्र पटाक्षेप — ‘एक जाँबाज़ सिपाही।’ वाक्य से शत्रु के मुख से भी नायक के शौर्य की स्वीकारोक्ति कराकर एकांकी को अविस्मरणीय अंत दिया गया है।',
          ],
          words: [
            {
              word: 'मुकाम',
              hindiMeaning: 'पड़ाव, ठहरने का विशेष स्थान',
              englishMeaning: 'Encampment / halting spot',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 116) — अरबी पुल्लिंग संज्ञा',
            },
            {
              word: 'खेमा',
              hindiMeaning: 'डेरा / अस्थायी पड़ाव',
              englishMeaning: 'Camp / tent',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 115)',
            },
            {
              word: 'हुक्म',
              hindiMeaning: 'आदेश, आज्ञा',
              englishMeaning: 'Order / command',
              grammarNote: 'अरबी पुल्लिंग संज्ञा (hukm)',
            },
            {
              word: 'लावलश्कर',
              hindiMeaning: 'सेना का बड़ा समूह और युद्ध-सामग्री',
              englishMeaning: 'Huge army battalion and war equipage',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 116)',
            },
            {
              word: 'मायने',
              hindiMeaning: 'अर्थ, मतलब, तात्पर्य',
              englishMeaning: 'Meaning / purpose / point',
              grammarNote: 'अरबी बहुवचन संज्ञा (maayne)',
            },
            {
              word: 'गिरफ़्तारी',
              hindiMeaning: 'बंदी बनाए जाने की क्रिया, धरपकड़',
              englishMeaning: 'Arrest / capture',
              grammarNote: 'फ़ारसी भाववाचक संज्ञा (giraftaaree • नुक़्ता ‘फ़’ पर)',
            },
            {
              word: 'जाँबाज़',
              hindiMeaning: 'जान की बाज़ी लगाने वाला, अत्यंत वीर योद्धा',
              englishMeaning: 'Daredevil / fearless soldier',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 115)',
            },
            {
              word: 'चंद',
              hindiMeaning: 'कुछ, थोड़े-से',
              englishMeaning: 'A few',
              grammarNote: 'फ़ारसी विशेषण (chand)',
            },
            {
              word: 'कारतूस',
              hindiMeaning: 'पीतल और दफ़्ती आदि की एक नली जिसमें गोली तथा बारूद भरी रहती है',
              englishMeaning: 'Cartridge (brass/cardboard tube packed with bullet and gunpowder)',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 116) — पुल्लिंग संज्ञा',
            },
            {
              word: 'मुसकराते',
              hindiMeaning: 'मंद हास्य के साथ, मुसकान बिखेरते हुए',
              englishMeaning: 'Smiling',
              grammarNote: 'कृदंत विशेषण (muskaraate)',
            },
            {
              word: 'शुक्रिया',
              hindiMeaning: 'धन्यवाद, आभार',
              englishMeaning: 'Thank you / gratitude',
              grammarNote: 'अरबी संज्ञा/अव्यय (shukriyaa)',
            },
            {
              word: 'बख्शी',
              hindiMeaning: 'क्षमादान (‘जान बख्शी करता हूँ’ = प्राण छोड़ देता हूँ)',
              englishMeaning: 'Spared / pardoned',
              grammarNote: 'फ़ारसी संज्ञा/क्रिया प्रयोग (पाठ में ‘बख्शी’; भाषा अध्ययन में ‘जान बख्श देना’)',
            },
            {
              word: 'सन्नाटे',
              hindiMeaning: 'गहरी निस्तब्धता, स्तब्ध मौन',
              englishMeaning: 'Deep stunned silence',
              grammarNote: 'पुल्लिंग संज्ञा (एकवचन: सन्नाटा)',
            },
            {
              word: 'हक्का-बक्का',
              hindiMeaning: 'चकित, स्तब्ध, भौंचक्का',
              englishMeaning: 'Stunned / dumbfounded / taken aback',
              grammarNote: 'विशेषण युग्म (मुहावरा: हक्का-बक्का रह जाना)',
            },
            {
              word: 'ज़बान',
              hindiMeaning: 'जीभ, वाणी (‘दबी ज़बान से’ = धीमे या बुदबुदाते स्वर में)',
              englishMeaning: 'Tongue / voice (‘under one’s breath’)',
              grammarNote: 'फ़ारसी स्त्रीलिंग संज्ञा (zabaan • नुक़्ता ‘ज़’ पर)',
            },
          ],
        },
      ],
    },
    {
      id: 'english-transcript',
      title: '4. संपूर्ण अंग्रेज़ी अनुवाद (Complete 1-to-1 Bilingual Transcript)',
      blocks: [
        {
          type: 'english-transcript',
          title: 'कारतूस — Complete Verbatim Play & Sentence-by-Sentence English Translation',
          intro:
            'Every single Hindi stage direction and dialogue line from NCERT Sparsh Bhag-2 (pp. 109–113) matched 1-to-1 with its complete English translation.',
          segments: [
            {
              label: 'Scene 1 (p. 109) — Cast, Setting, Night Forest & Saadat Ali’s Betrayal',
              hindiOriginal: PASSAGE_1,
              englishText:
                'Kartoos (Cartridges). Characters: Colonel, Lieutenant, Soldier, Rider. Duration: 5 minutes. Era: 1799 CE. Time: Night. Setting: Inside Colonel Collins’s tent in the forest of Gorakhpur. (Two Englishmen sit talking; Colonel Collins and a Lieutenant are outside the tent, moonlight is scattered around, and a lamp burns inside.) Colonel: Forest life is very dangerous. Lieutenant: It has been weeks since we pitched camp here. Even the soldiers have grown weary. Is this Wazir Ali a man or a ghost—he simply cannot be caught! Colonel: Hearing tales of him brings Robin Hood’s exploits to mind. What intense hatred he harbours in his heart against the British! He must have ruled for barely five months, yet within those five months he nearly succeeded in completely cleansing the Awadh court of British influence. Lieutenant: Colonel Collins, who is this Saadat Ali? Colonel: Asaf-ud-daula’s brother—Wazir Ali’s enemy, and his as well. Actually, there was no expectation of a son being born to Nawab Asaf-ud-daula. Saadat Ali considered Wazir Ali’s birth his own death. Lieutenant: But what was the secret motive behind placing Saadat Ali on the throne of Awadh? Colonel: Saadat Ali is our friend and a very pleasure-loving man; that is why he gave us half his realm (property and wealth) and ten lakh rupees in cash. Now he enjoys himself, and so do we.',
            },
            {
              label: 'Scene 2 (p. 110 Part 1) — Afghan Alliance, Plassey-Buxar Stakes & Daredevil Band',
              hindiOriginal: PASSAGE_2,
              englishText:
                'Lieutenant: I have heard this Wazir Ali is sending an invitation to Shah-e-Zaman, the King of Afghanistan, to attack India. Colonel: The invitation to Afghanistan to invade was actually first extended by Tipu Sultan; then Wazir Ali too invited him to Delhi, and after that Shamsuddaula did so as well. Lieutenant: Who is Shamsuddaula? Colonel: The brother-in-kin of the Nawab of Bengal—a very dangerous man indeed. Lieutenant: That means a wave has swept across all of India against the Company! Colonel: Yes, indeed; and if it succeeds, all the feats of Buxar and Plassey will come to nothing, and everything the Company has won through Lord Clive, it will lose through Lord Wellesley. Lieutenant: Wazir Ali’s freedom is extremely dangerous. By hook or by crook we must arrest this man. Colonel: I am chasing him with an entire army, yet for years he has been throwing dust in our eyes, roaming these very forests without ever falling into our hands. With him are just a few daredevils—a mere handful of men, yet look at this grit and resilience!',
            },
            {
              label: 'Scene 3 (p. 110 Part 2) — Banaras Lawyer’s Slaying & Escape to Azamgarh',
              hindiOriginal: PASSAGE_3,
              englishText:
                'Lieutenant: I have heard Wazir Ali is personally a very brave man as well. Colonel: Had he not been brave, would he have murdered the Company’s lawyer like that? Lieutenant: What was that episode of the murder, Colonel? Colonel: What episode was it—after removing him from his position, we sent Wazir Ali away to Banaras and fixed an annual stipend of three lakh rupees for him. A few months later the Governor General summoned him to Calcutta (Kolkata). Wazir Ali went to the Company’s lawyer who lived in Banaras and complained why the Governor General was summoning him to Calcutta. Paying no heed to his complaint, the lawyer instead heaped insults on him. Wazir Ali’s heart was already filled to the brim with hatred against the British—he finished off the lawyer with a dagger. Lieutenant: And fled? Colonel: With his loyal companions he fled toward Azamgarh. The rulers of Azamgarh escorted them under their protection as far as the Ghaghara. Since then, this wandering band has been roaming these forests for several years.',
            },
            {
              label: 'Scene 4 (p. 111 Part 1) — The Nepal Scheme & Approaching Hoofbeats',
              hindiOriginal: PASSAGE_4,
              englishText:
                'Lieutenant: Wait—what is Wazir Ali’s scheme? Colonel: The scheme is to reach Nepal somehow, await the Afghan attack, build up his strength, remove Saadat Ali from his post to seize Awadh himself, and drive the British out of India. Lieutenant: Reaching Nepal is not so difficult; it is possible he has already reached there. Colonel: Our armies and Nawab Saadat Ali Khan’s soldiers are pursuing him with extreme rigour. We know for certain that he is inside these very forests. (A soldier enters hastily.) Colonel: (rising) What is the matter? Guard (Gora): Dust is seen rising in the distance. Colonel: Tell the soldiers to stay ready. (The soldier salutes and exits.) Lieutenant: (who had been absorbed looking out the window) The dust is billowing as though an entire caravan were approaching, yet I can see only a single rider! Colonel: (walking to the window) Yes, there is only one rider—galloping his horse straight ahead at full speed. Lieutenant: And he appears to be heading straight toward us. (The Colonel claps to summon the soldier.) Colonel: (to the soldier) Tell the soldiers to keep watch on this rider and see which way he goes. (The soldier salutes and exits.) Lieutenant: There is not the slightest room for doubt—he is speeding directly this way. (The sound of hoofbeats draws very close and stops.)',
            },
            {
              label: 'Scene 5 (p. 111 Part 2) — Entering the Tent & “Even the Walls Have Ears”',
              hindiOriginal: PASSAGE_5,
              englishText:
                'Rider: (from outside) I have to meet the Colonel. Guard (Gora): (shouting) Very well! Rider: (from outside) See! Guard (Gaura): (entering) Sir, the rider wishes to meet you. Colonel: Send him in. Lieutenant: He must be one of Wazir Ali’s men—wanting to collude with us and have him arrested. Colonel: Keep quiet. (The rider enters with the soldier.) Rider: (crying out immediately upon entering) Privacy! Privacy! Colonel: Sir, there is no stranger here; you may speak your heart’s secret. Rider: Deewar hamgosh darad—even the walls have ears—privacy! (The Colonel signals to the Lieutenant and the soldier. Both go outside. When the Colonel and the rider remain alone in the tent, after a brief pause, looking around in all four directions, the rider speaks.)',
            },
            {
              label: 'Scene 6 (pp. 112–113) — Ten Cartridges, “Wazir Ali” & “A Fearless Soldier!”',
              hindiOriginal: PASSAGE_6,
              englishText:
                'Rider: Why have you pitched camp at this spot? Colonel: It is the Company’s order that Wazir Ali be arrested. Rider: But what is the point of such a huge army and war train? Colonel: To assist in the arrest. Rider: Arresting Wazir Ali is very difficult, sir. Colonel: Why? Rider: He is a fearless daredevil soldier. Colonel: I too have heard that. What do you want? Rider: A few cartridges. Colonel: What for? Rider: To arrest Wazir Ali. Colonel: Here, take these ten cartridges. Rider: (smiling) Thank you. Colonel: Your name? Rider: Wazir Ali. Because you gave me cartridges, I spare your life. (Saying this, he walks outside; the clatter of hoofbeats is heard. The Colonel stands in stunned silence, utterly dumbfounded, just as the Lieutenant walks back inside.) Lieutenant: Who was it? Colonel: (murmuring under his breath to himself) A fearless soldier.',
            },
          ],
        },
      ],
    },
    {
      id: 'word-bank',
      title: '5. संपूर्ण NCERT शब्दार्थ कोश — शब्दार्थ और टिप्पणियाँ (Chapter Word Bank)',
      blocks: [
        {
          type: 'chapter-word-bank',
          title: 'NCERT ‘शब्दार्थ और टिप्पणियाँ’ (सभी 25 शब्द) तथा ‘लेखक परिचय / पाठ प्रवेश’ की प्रमुख शब्दावली',
          intro:
            'ऊपर गद्यांशों के Inline Word Lens में जुड़े सभी 25 NCERT शब्दार्थों के साथ यहाँ उनके मूल कोष-शीर्षक, ‘लेखक परिचय’ व ‘पाठ प्रवेश’ के विशिष्ट शब्द संकलित हैं।',
          extraWords: [
            {
              word: 'अफ़साने (अफ़साना)',
              hindiMeaning: 'कहानियाँ',
              englishMeaning: 'Tales / legends (NCERT शब्दार्थ पृ. 115)',
              grammarNote: 'पुल्लिंग बहुवचन (एकवचन: अफ़साना)',
              exampleSentence: 'वज़ीर अली के अफ़साने सुनकर कर्नल को रॉबिनहुड की याद आ जाती थी।',
            },
            {
              word: 'कारनामे (कारनामा)',
              hindiMeaning: 'ऐसे काम जो याद रहें',
              englishMeaning: 'Memorable exploits / feats (NCERT शब्दार्थ पृ. 115)',
              grammarNote: 'पुल्लिंग बहुवचन (एकवचन: कारनामा)',
            },
            {
              word: 'ऐश-पसंद',
              hindiMeaning: 'भोग-विलास पसंद करने वाला (मूल संवाद में ‘ऐश पसंद’ रूप प्रयुक्त)',
              englishMeaning: 'Pleasure-seeking / indulgent (NCERT शब्दार्थ पृ. 115)',
              grammarNote: 'कर्म तत्पुरुष समास (ऐश को पसंद करने वाला)',
            },
            {
              word: 'हुकमरां',
              hindiMeaning: 'शासक (मूल संवाद में ‘हुक्मरां’ रूप प्रयुक्त)',
              englishMeaning: 'Ruler / governor / sovereign (NCERT शब्दार्थ पृ. 115)',
              grammarNote: 'अरबी-फ़ारसी संज्ञा (आज़मगढ़ के हुक्मरां)',
            },
            {
              word: 'दफ़्ती',
              hindiMeaning: 'मोटा गत्ता या कार्डबोर्ड जिससे कारतूस की नली बनती थी',
              englishMeaning: 'Cardboard / stiff paperboard (used inside ‘कारतूस’ definition, p. 116)',
              grammarNote: 'फ़ारसी स्त्रीलिंग संज्ञा (daftee • नुक़्ता ‘फ़’ पर)',
            },
            {
              word: 'स्नातक',
              hindiMeaning: 'विश्वविद्यालय की डिग्री प्राप्त (ग्रेजुएट)',
              englishMeaning: 'University graduate (‘लेखक परिचय’ पृ. 107)',
              grammarNote: 'तत्सम संज्ञा/विशेषण (snaatak)',
            },
            {
              word: 'लोकनाट्य',
              hindiMeaning: 'लोक-परंपरा और जन-सामान्य की शैली पर आधारित नाटक',
              englishMeaning: 'Folk theatre / folk drama (‘लेखक परिचय’ पृ. 107)',
              grammarNote: 'संबंध तत्पुरुष समास (लोक का नाट्य)',
            },
            {
              word: 'रूपांतर',
              hindiMeaning: 'किसी रचना का नया या आधुनिक नाट्य-स्वरूप',
              englishMeaning: 'Adaptation / modernized transformation (‘लेखक परिचय’ पृ. 107)',
              grammarNote: 'दीर्घ संधि (रूप + अंतर)',
            },
            {
              word: 'रियासतों',
              hindiMeaning: 'देसी राजाओं-नवाबों के अधीन राज्य (एकवचन: रियासत)',
              englishMeaning: 'Princely states / kingdoms (‘पाठ प्रवेश’ पृ. 108)',
              grammarNote: 'अरबी स्त्रीलिंग बहुवचन संज्ञा',
            },
            {
              word: 'नीयत',
              hindiMeaning: 'मंशा, इरादा, अंदरूनी उद्देश्य',
              englishMeaning: 'Intention / true motive (‘पाठ प्रवेश’ पृ. 108)',
              grammarNote: 'अरबी स्त्रीलिंग संज्ञा (neeyat)',
            },
            {
              word: 'उजागर',
              hindiMeaning: 'प्रकट, सबके सामने स्पष्ट होना',
              englishMeaning: 'Exposed / revealed openly (‘पाठ प्रवेश’ पृ. 108)',
              grammarNote: 'विशेषण (ujaagar)',
            },
            {
              word: 'खदेड़ने',
              hindiMeaning: 'मार-भगाने, देश से बाहर निकालने',
              englishMeaning: 'To drive out / expel (‘पाठ प्रवेश’ पृ. 108)',
              grammarNote: 'सकर्मक क्रिया (khadednaa)',
            },
            {
              word: 'हुक्मरानों',
              hindiMeaning: 'अधिकारियों, शासकों (‘हुक्मरां’ का बहुवचन)',
              englishMeaning: 'Rulers / officials (‘पाठ प्रवेश’ पृ. 108)',
              grammarNote: 'पुल्लिंग बहुवचन संज्ञा (hukmraanon)',
            },
            {
              word: 'दिलेर',
              hindiMeaning: 'साहसी, हिम्मत वाला, निडर',
              englishMeaning: 'Brave / courageous / stout-hearted (‘पाठ प्रवेश’ पृ. 108)',
              grammarNote: 'फ़ारसी विशेषण (diler)',
            },
            {
              word: 'माँद',
              hindiMeaning: 'शेर या हिंसक पशु के रहने की गुफा (‘शेर की माँद’)',
              englishMeaning: 'Lion’s den / lair (‘पाठ प्रवेश’ पृ. 108)',
              grammarNote: 'तद्भव स्त्रीलिंग संज्ञा (maand)',
            },
            {
              word: 'मानिंद',
              hindiMeaning: 'की तरह, के समान',
              englishMeaning: 'Like / akin to (‘पाठ प्रवेश’ पृ. 108)',
              grammarNote: 'फ़ारसी अव्यय (maanind)',
            },
            {
              word: 'बटालियन',
              hindiMeaning: 'सैनिकों की बड़ी टुकड़ी / पलटन',
              englishMeaning: 'Military battalion (‘पाठ प्रवेश’ पृ. 108)',
              grammarNote: 'अंग्रेज़ी आगत संज्ञा (battalion)',
            },
            {
              word: 'रौब गालिब',
              hindiMeaning: 'प्रबल धाक या आतंकपूर्ण प्रभाव जमाना',
              englishMeaning: 'To cast awe / exert commanding dominance (‘पाठ प्रवेश’ पृ. 108)',
              grammarNote: 'अरबी-फ़ारसी पदबंध (raub gaalib)',
            },
            {
              word: 'शत्रु',
              hindiMeaning: 'दुश्मन, वैरी',
              englishMeaning: 'Enemy / foe (‘पाठ प्रवेश’ पृ. 108)',
              grammarNote: 'तत्सम पुल्लिंग संज्ञा (shatru)',
            },
          ],
        },
      ],
    },
    {
      id: 'muhavre',
      title: '6. NCERT ‘भाषा अध्ययन’ (प्रश्न 2) के प्रमुख मुहावरे व वाक्य-प्रयोग',
      blocks: [
        {
          type: 'muhavre-list',
          title: 'NCERT पृष्ठ 114 (प्रश्न 2) के सभी 5 मुहावरे + 5 अतिरिक्त पाठगत मुहावरे',
          note: 'ये प्रथम पाँचों मुहावरे सीधे NCERT ‘भाषा अध्ययन’ प्रश्न 2 में पूछे गए हैं—बोर्ड परीक्षा में वाक्य-प्रयोग हेतु अत्यंत महत्त्वपूर्ण हैं।',
          items: [
            {
              idiom: 'आँखों में धूल झोंकना',
              hindiMeaning: 'साफ़ तौर पर धोखा देना / चकमा देकर निकल जाना',
              englishMeaning: 'To throw dust in someone’s eyes / deceive openly',
              examSentence:
                'वज़ीर अली अकेले घुड़सवार के रूप में कर्नल की आँखों में धूल झोंककर दस कारतूस ले गया।',
              sourceLine: 'NCERT पृ. 110 व भाषा अध्ययन प्रश्न 2: “बरसों से वो हमारी आँखों में धूल झोंक रहा है।”',
            },
            {
              idiom: 'कूट-कूट कर भरना',
              hindiMeaning: 'कोई भाव या गुण मन में पूरी तरह समाया होना',
              englishMeaning: 'To be filled to the brim with an intense feeling or trait',
              examSentence:
                'वज़ीर अली के हृदय में अंग्रेज़ों की गुलामी के विरुद्ध विद्रोह की भावना कूट-कूट कर भरी थी।',
              sourceLine: 'NCERT पृ. 110 व भाषा अध्ययन प्रश्न 2: “अंग्रेज़ों के खिलाफ़ नफ़रत कूट–कूटकर भरी है।”',
            },
            {
              idiom: 'काम तमाम कर देना',
              hindiMeaning: 'मार डालना / जीवन समाप्त कर देना',
              englishMeaning: 'To finish off / put an end to someone’s life',
              examSentence:
                'बनारस में कंपनी के वकील के अपमान से क्रोधित वज़ीर अली ने खंजर से उसका काम तमाम कर दिया।',
              sourceLine: 'NCERT पृ. 110 व भाषा अध्ययन प्रश्न 2: “उसने खंजर से वकील का काम तमाम कर दिया।”',
            },
            {
              idiom: 'जान बख्श देना',
              hindiMeaning: 'प्राण छोड़ देना / क्षमा कर जीवित जाने देना',
              englishMeaning: 'To spare someone’s life',
              examSentence:
                'दस कारतूस मिलने के एहसान के बदले वज़ीर अली ने कर्नल कालिंज की जान बख्श दी।',
              sourceLine: 'NCERT पृ. 113 व भाषा अध्ययन प्रश्न 2: “इसलिए आपकी जान बख्शी करता हूँ।”',
            },
            {
              idiom: 'हक्का-बक्का रह जाना',
              hindiMeaning: 'अत्यधिक आश्चर्य से स्तब्ध या भौंचक्का रह जाना',
              englishMeaning: 'To be left utterly stunned and dumbfounded',
              examSentence:
                'सवार के मुँह से ‘वज़ीर अली’ नाम सुनते ही कर्नल कालिंज खेमे में हक्का-बक्का खड़ा रह गया।',
              sourceLine: 'NCERT पृ. 113 व भाषा अध्ययन प्रश्न 2: “हक्का-बक्का खड़ा है कि लेफ़्टीनेंट अंदर आता है।”',
            },
            {
              idiom: 'हाथ न आना / हाथ न लगना',
              hindiMeaning: 'लाख प्रयास करने पर भी पकड़ में न आना',
              englishMeaning: 'To remain completely elusive / out of reach',
              examSentence:
                'पूरी फ़ौज लेकर पीछा करने के बाद भी जाँबाज़ वज़ीर अली अंग्रेज़ों के हाथ न आया।',
              sourceLine: 'NCERT पृ. 109–110: “आदमी है या भूत, हाथ ही नहीं लगता।” / “और हाथ नहीं आता।”',
            },
            {
              idiom: 'धरे रह जाना',
              hindiMeaning: 'सारे प्रयास या उपलब्धियाँ व्यर्थ हो जाना',
              englishMeaning: 'To come to naught / be rendered useless',
              examSentence:
                'कर्नल को डर था कि भारतीय शासकों के एकजुट होते ही बक्सर और प्लासी के कारनामे धरे रह जाएँगे।',
              sourceLine: 'NCERT पृ. 110: “तो बक्सर और प्लासी के कारनामे धरे रह जाएँगे।”',
            },
            {
              idiom: 'राज़ेदिल कह देना',
              hindiMeaning: 'मन का गहरा और गुप्त रहस्य उजागर कर देना',
              englishMeaning: 'To reveal one’s closely guarded secret',
              examSentence:
                'खेमे में कोई अनजान व्यक्ति न होने का भरोसा दिलाकर कर्नल ने सवार से राज़ेदिल कह देने को कहा।',
              sourceLine: 'NCERT पृ. 111: “साहब यहाँ कोई गैर आदमी नहीं है आप राज़ेदिल कह दें।”',
            },
            {
              idiom: 'नींद हराम कर देना',
              hindiMeaning: 'चैन छीन लेना / लगातार भय और बेचैनी में रखना',
              englishMeaning: 'To rob of sleep / cause relentless anxiety',
              examSentence:
                'मुट्ठी भर साथियों के दम पर वज़ीर अली ने ईस्ट इंडिया कंपनी के हुक्मरानों की नींद हराम कर दी थी।',
              sourceLine: 'NCERT ‘पाठ प्रवेश’ पृ. 108: “कंपनी के हुक्मरानों की नींद हराम कर देने वाला यह दिलेर...”',
            },
            {
              idiom: 'दो-दो हाथ करना',
              hindiMeaning: 'आमने-सामने भिड़कर बराबर का मुकाबला करना',
              englishMeaning: 'To confront head-on / lock horns boldly',
              examSentence:
                'निडर वज़ीर अली मानो शेर की माँद में उससे दो-दो हाथ करने स्वयं कर्नल के खेमे में जा पहुँचा।',
              sourceLine: 'NCERT ‘पाठ प्रवेश’ पृ. 108: “शेर की माँद में पहुँचकर उससे दो-दो हाथ करने की मानिंद...”',
            },
          ],
        },
      ],
    },
    {
      id: 'samas',
      title: '7. संपूर्ण NCERT ‘भाषा अध्ययन’ (पृ. 114–115) — समास, पर्यायवाची, कारक, अन्विति व विराम-चिह्न',
      blocks: [
        {
          type: 'samas-list',
          title: '‘कारतूस’ (एकांकी, पाठ प्रवेश व भाषा अध्ययन) पर आधारित 12 प्रमुख समास-विग्रह',
          note: 'बोर्ड परीक्षा में समास-विग्रह व भेद पहचानने हेतु पाठ व पृष्ठभूमि से चुने गए मानक समस्तपद:',
          items: [
            {
              samastPad: 'ऐश-पसंद',
              vigrah: 'ऐश (भोग-विलास) को पसंद करने वाला',
              samasType: 'कर्म तत्पुरुष समास',
              englishMeaning: 'Pleasure-loving — सआदत अली के लिए प्रयुक्त NCERT शब्दार्थ।',
            },
            {
              samastPad: 'राज़ेदिल',
              vigrah: 'दिल का राज़',
              samasType: 'संबंध तत्पुरुष समास',
              englishMeaning: 'Secret of the heart — फ़ारसी इज़ाफ़त संबंध से बना समस्तपद।',
            },
            {
              samastPad: 'निडर',
              vigrah: 'बिना डर के (डर से रहित)',
              samasType: 'अव्ययीभाव समास',
              englishMeaning: 'Fearless — ‘नि’ उपसर्ग प्रधान (‘पाठ प्रवेश’ पृ. 108)।',
            },
            {
              samastPad: 'मुट्ठीभर',
              vigrah: 'मुट्ठी के बराबर (थोड़ा-सा)',
              samasType: 'अव्ययीभाव समास',
              englishMeaning: 'Handful — ‘भर’ अव्यय प्रधान (NCERT प्रश्न-अभ्यास (ग) 1)।',
            },
            {
              samastPad: 'देशभर',
              vigrah: 'पूरे देश में / देश भर',
              samasType: 'अव्ययीभाव समास',
              englishMeaning: 'Nationwide — ‘भर’ अव्यय (‘भाषा अध्ययन’ प्रश्न 4(घ))।',
            },
            {
              samastPad: 'बुरा-भला',
              vigrah: 'बुरा और भला (या बुरा या भला)',
              samasType: 'द्वंद्व समास',
              englishMeaning: 'Good and bad / harsh words — दोनों पद प्रधान।',
            },
            {
              samastPad: 'नाट्य-लेखन',
              vigrah: 'नाट्य का लेखन',
              samasType: 'संबंध तत्पुरुष समास',
              englishMeaning: 'Playwriting — ‘लेखक परिचय’ पृ. 107 से।',
            },
            {
              samastPad: 'लोकनाट्य',
              vigrah: 'लोक का नाट्य',
              samasType: 'संबंध तत्पुरुष समास',
              englishMeaning: 'Folk drama — ‘लेखक परिचय’ पृ. 107 से।',
            },
            {
              samastPad: 'नाट्यमंच',
              vigrah: 'नाट्य के लिए मंच',
              samasType: 'संप्रदान तत्पुरुष समास',
              englishMeaning: 'Theatre stage — ‘लेखक परिचय’ पृ. 107 से।',
            },
            {
              samastPad: 'एकमात्र',
              vigrah: 'केवल एक (एक ही है जो मात्र)',
              samasType: 'कर्मधारय समास',
              englishMeaning: 'Sole / one and only — ‘पाठ प्रवेश’ पृ. 108 से।',
            },
            {
              samastPad: 'देशभक्त',
              vigrah: 'देश का भक्त',
              samasType: 'संबंध तत्पुरुष समास',
              englishMeaning: 'Patriot — वज़ीर अली के चरित्र संदर्भ में।',
            },
            {
              samastPad: 'रणभूमि',
              vigrah: 'रण (युद्ध) की भूमि',
              samasType: 'संबंध तत्पुरुष समास',
              englishMeaning: 'Battlefield — बक्सर व प्लासी के संदर्भ में।',
            },
          ],
        },
        {
          type: 'table',
          caption: 'NCERT भाषा अध्ययन — प्रश्न 1 (पृ. 114): निम्नलिखित शब्दों का एक-एक पर्याय लिखिए',
          headers: ['क्रमांक व NCERT शब्द', 'अर्थ (Meaning)', 'मानक पर्यायवाची शब्द (उत्तर)'],
          rows: [
            ['1. खिलाफ़', 'Against / opposed', '**विरुद्ध**, विपरीत'],
            ['2. पाक', 'Pure / unblemished', '**पवित्र**, शुद्ध'],
            ['3. उम्मीद', 'Hope / expectation', '**आशा**, अपेक्षा'],
            ['4. हासिल', 'Obtained / achieved', '**प्राप्त**, उपलब्ध'],
            ['5. कामयाब', 'Successful', '**सफल**, कृतकार्य'],
            ['6. वज़ीफ़ा', 'Stipend / allowance', '**वृत्ति**, छात्रवृत्ति / परवरिश-राशि'],
            ['7. नफ़रत', 'Hatred / disgust', '**घृणा**, द्वेष'],
            ['8. हमला', 'Attack / assault', '**आक्रमण**, धावा'],
            ['9. इंतेज़ार', 'Waiting / expectation', '**प्रतीक्षा**, इंतज़ार'],
            ['10. मुमकिन', 'Possible', '**संभव**, संभावित'],
          ],
        },
        {
          type: 'table',
          caption: 'NCERT भाषा अध्ययन — प्रश्न 3 (पृ. 114): कारकों को रेखांकित कर उनके नाम लिखिए',
          headers: ['वाक्य (NCERT पृ. 114)', 'रेखांकित कारक चिह्न (परसर्ग)', 'कारक का नाम व तर्क'],
          rows: [
            [
              '(क) जंगल **की** ज़िंदगी बड़ी खतरनाक होती है।',
              '**की** (जंगल की)',
              '**संबंध कारक** — ‘जंगल’ का ‘ज़िंदगी’ से संबंध प्रकट होता है।',
            ],
            [
              '(ख) कंपनी **के** खिलाफ़ सारे हिंदुस्तान **में** एक लहर दौड़ गई।',
              '**के** (कंपनी के), **में** (हिंदुस्तान में)',
              '**के = संबंध कारक**; **में = अधिकरण कारक** (स्थान/आधार का बोध)।',
            ],
            [
              '(ग) वज़ीर **को** उसके पद **से** हटा दिया गया।',
              '**को** (वज़ीर को), **से** (पद से)',
              '**को = कर्म कारक**; **से = अपादान कारक** (पद से अलग होने/हटाए जाने का भाव)।',
            ],
            [
              '(घ) फ़ौज **के लिए** कारतूस **की** आवश्यकता थी।',
              '**के लिए** (फ़ौज के लिए), **की** (कारतूस की)',
              '**के लिए = संप्रदान कारक** (उद्देश्य/हित); **की = संबंध कारक**।',
            ],
            [
              '(ङ) सिपाही घोड़े **पर** सवार था।',
              '**पर** (घोड़े पर)',
              '**अधिकरण कारक** — क्रिया के आधार/स्थान का बोध।',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'law',
          title: 'NCERT व्याकरण नियम (प्रश्न 4, पृ. 114): क्रिया की ‘अन्विति’ और ‘ने’ परसर्ग',
          body: 'वाक्य में कर्ता और कर्म के लिंग, वचन और पुरुष के अनुसार जब क्रिया के लिंग, वचन आदि में परिवर्तन होता है तो उसे ‘अन्विति’ कहते हैं। परिवर्तन तभी होता है जब कर्ता या कर्म परसर्ग रहित हों (जैसे—‘सवार कारतूस माँग रहा था’ में कर्ता के कारण, ‘सवार ने कारतूस माँगे’ में कर्म ‘कारतूस’ बहुवचन के कारण)। यदि कर्ता और कर्म दोनों परसर्ग सहित हों (‘कर्नल ने वज़ीर अली को नहीं पहचाना’), तो क्रिया किसी से प्रभावित न होकर एकवचन पुल्लिंग में ही प्रयुक्त होती है।',
        },
        {
          type: 'table',
          caption: 'NCERT भाषा अध्ययन — प्रश्न 4 (पृ. 114–115): नीचे दिए गए वाक्यों में ‘ने’ लगाकर उन्हें दुबारा लिखिए',
          headers: ['क्रमांक', 'NCERT मूल वाक्य', '‘ने’ लगाकर रूपांतरित वाक्य व अन्विति कारण'],
          rows: [
            [
              '(क)',
              'घोड़ा पानी पी रहा था।',
              'घोड़े **ने** पानी पिया। *(या ‘घोड़े ने पानी पी लिया था।’ — कर्म ‘पानी’ पुल्लिंग एकवचन के अनुसार क्रिया)*',
            ],
            [
              '(ख)',
              'बच्चे दशहरे का मेला देखने गए।',
              'बच्चों **ने** दशहरे का मेला देखा। *(कर्म ‘मेला’ पुल्लिंग एकवचन के अनुसार क्रिया ‘देखा’)*',
            ],
            [
              '(ग)',
              'रॉबिनहुड गरीबों की मदद करता था।',
              'रॉबिनहुड **ने** गरीबों की मदद की। *(कर्म ‘मदद’ स्त्रीलिंग एकवचन के अनुसार क्रिया ‘की’)*',
            ],
            [
              '(घ)',
              'देशभर के लोग उसकी प्रशंसा कर रहे थे।',
              'देशभर के लोगों **ने** उसकी प्रशंसा की। *(कर्म ‘प्रशंसा’ स्त्रीलिंग एकवचन के अनुसार क्रिया ‘की’)*',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'NCERT भाषा अध्ययन — प्रश्न 5 (पृ. 115): निम्नलिखित वाक्यों में उचित विराम-चिह्न लगाइए',
          headers: ['क्रमांक', 'बिना विराम-चिह्न के NCERT वाक्य', 'उचित विराम-चिह्न युक्त शुद्ध वाक्य'],
          rows: [
            [
              '(क)',
              'कर्नल ने कहा सिपाहियों इस पर नज़र रखो ये किस तरफ़ जा रहा है',
              'कर्नल ने कहा**, “**सिपाहियों**!** इस पर नज़र रखो**,** ये किस तरफ़ जा रहा है**?”**',
            ],
            [
              '(ख)',
              'सवार ने पूछा आपने इस मकाम पर क्यों खेमा डाला है इतने लावलश्कर की क्या ज़रूरत है',
              'सवार ने पूछा**, “**आपने इस मकाम पर क्यों खेमा डाला है**?** इतने लावलश्कर की क्या ज़रूरत है**?”**',
            ],
            [
              '(ग)',
              'खेमे के अंदर दो व्यक्ति बैठे बातें कर रहे थे चाँदनी छिटकी हुई थी और बाहर सिपाही पहरा दे रहे थे एक व्यक्ति कह रहा था दुश्मन कभी भी हमला कर सकता है',
              'खेमे के अंदर दो व्यक्ति बैठे बातें कर रहे थे**,** चाँदनी छिटकी हुई थी और बाहर सिपाही पहरा दे रहे थे**।** एक व्यक्ति कह रहा था**, “**दुश्मन कभी भी हमला कर सकता है**।”**',
            ],
          ],
        },
      ],
    },
    {
      id: 'qa',
      title: '8. संपूर्ण NCERT प्रश्न-अभ्यास (मौखिक, लिखित क/ख/ग) व Competency Q&A',
      blocks: [
        {
          type: 'qa',
          question:
            'मौखिक प्रश्न 1 व 2 (एक-दो पंक्तियों में): (1) कर्नल कालिंज का खेमा जंगल में क्यों लगा हुआ था? (2) वज़ीर अली से सिपाही क्यों तंग आ चुके थे?',
          answer:
            '(1) कर्नल कालिंज का खेमा गोरखपुर के जंगल में वज़ीर अली को गिरफ़्तार करने के लिए लगा हुआ था, क्योंकि कंपनी का हुक्म था कि उसे किसी भी तरह पकड़ा जाए। (2) सिपाही वज़ीर अली से इसलिए तंग आ चुके थे क्योंकि वे हफ़्तों से जंगल में खेमा डाले बैठे थे, किंतु वज़ीर अली भूत की तरह चकमा दे जाता था और हाथ ही नहीं लगता था।',
          markingTip:
            'English Helper: Oral Q1–Q2: Camped in Gorakhpur forest to arrest Wazir Ali; soldiers were fed up after weeks because he eluded capture like a ghost.',
          marks: 2,
          tag: 'NCERT प्रश्न-अभ्यास',
        },
        {
          type: 'qa',
          question:
            'मौखिक प्रश्न 3 व 4 (एक-दो पंक्तियों में): (3) कर्नल ने सवार पर नज़र रखने के लिए क्यों कहा? (4) सवार ने क्यों कहा कि वज़ीर अली की गिरफ़्तारी बहुत मुश्किल है?',
          answer:
            '(3) कर्नल ने सवार पर नज़र रखने के लिए इसलिए कहा ताकि पता चल सके कि तेज़ी से आता यह अकेला सवार किस तरफ़ जा रहा है और कहीं वज़ीर अली से जुड़ा कोई व्यक्ति तो नहीं है। (4) सवार (जो स्वयं वज़ीर अली था) ने कर्नल का विश्वास जीतने और अपनी वीरता जताने के लिए कहा कि वज़ीर अली एक जाँबाज़ सिपाही है, इसलिए उसकी गिरफ़्तारी बहुत मुश्किल है।',
          markingTip:
            'English Helper: Oral Q3–Q4: Ordered watch to track the lone rider’s direction/intent; the rider called Wazir Ali’s arrest tough because he was a fearless warrior.',
          marks: 2,
          tag: 'NCERT प्रश्न-अभ्यास',
        },
        {
          type: 'qa',
          question:
            'लिखित (क) प्रश्न 1 (25–30 शब्दों में): वज़ीर अली के अफ़साने सुनकर कर्नल को रॉबिनहुड की याद क्यों आ जाती थी?',
          answer:
            'रॉबिनहुड अपनी वीरता, अदम्य साहस और शक्तिशाली सत्ता को चकमा देने की कला के लिए प्रसिद्ध था। वज़ीर अली भी मुट्ठी भर जाँबाज़ साथियों के बल पर वर्षों से पूरी अंग्रेज़ी फ़ौज की आँखों में धूल झोंक रहा था और पाँच महीने के छोटे से शासन में ही उसने अवध को अंग्रेज़ी असर से लगभग पाक कर दिया था—इसीलिए कर्नल को रॉबिनहुड की याद आ जाती थी।',
          markingTip:
            'English Helper: Written (क) Q1: Like Robin Hood, Wazir Ali boldly outwitted an entire imperial army for years and nearly freed Awadh’s court from British control.',
          marks: 2,
          tag: 'NCERT प्रश्न-अभ्यास',
        },
        {
          type: 'qa',
          question:
            'लिखित (क) प्रश्न 2 व 3 (25–30 शब्दों में): (2) सआदत अली कौन था? उसने वज़ीर अली की पैदाइश को अपनी मौत क्यों समझा? (3) सआदत अली को अवध के तख्त पर बिठाने के पीछे कर्नल का क्या मकसद था?',
          answer:
            '(2) सआदत अली अवध के नवाब आसिफ़उद्दौला का भाई और वज़ीर अली का चाचा व दुश्मन था। आसिफ़उद्दौला के कोई पुत्र न होने की उम्मीद से सआदत अली स्वयं अवध का नवाब बनने का सपना देख रहा था; अतः वज़ीर अली के जन्म से उसका उत्तराधिकार समाप्त हो गया और उसने इस पैदाइश को अपनी मौत समझा। (3) सआदत अली अंग्रेज़ों का दोस्त और ऐश पसंद आदमी था। उसे अवध के तख्त पर बिठाने के पीछे कर्नल का मकसद अपनी स्वार्थ-सिद्धि था—बदले में सआदत अली ने कंपनी को अपनी आधी मुमलिकत (जायदाद, दौलत) और दस लाख रुपये नगद दे दिए।',
          markingTip:
            'English Helper: Written (क) Q2–Q3: Saadat Ali was Asaf-ud-daula’s brother whose succession hopes died at Wazir Ali’s birth; the British enthroned him in exchange for half the realm and ₹10 lakh cash.',
          marks: 4,
          tag: 'NCERT प्रश्न-अभ्यास',
        },
        {
          type: 'qa',
          question:
            'लिखित (क) प्रश्न 4 व 5 (25–30 शब्दों में): (4) कंपनी के वकील का कत्ल करने के बाद वज़ीर अली ने अपनी हिफ़ाज़त कैसे की? (5) सवार के जाने के बाद कर्नल क्यों हक्का-बक्का रह गया?',
          answer:
            '(4) बनारस में कंपनी के वकील का कत्ल करने के बाद वज़ीर अली अपने वफ़ादार साथियों (जानिसारों) समेत आज़मगढ़ की तरफ़ भाग गया। आज़मगढ़ के शासक (हुक्मरां) ने उन्हें अपनी सुरक्षा में घागरा नदी तक पहुँचा दिया और तब से वह इन घने जंगलों में छिपकर अपनी हिफ़ाज़त कर रहा था। (5) सवार ने बड़ी चतुराई से स्वयं कर्नल से दस कारतूस ले लिए और जाते समय मुसकराकर अपना नाम ‘वज़ीर अली’ बताकर उसकी जान बख़्श दी। जिस शत्रु को पकड़ने के लिए कर्नल लावलश्कर सहित जंगल में बैठा था, उसी के सामने से कारतूस ले जाने और अपनी चूक देखकर कर्नल हक्का-बक्का रह गया।',
          markingTip:
            'English Helper: Written (क) Q4–Q5: Escaped with loyalists to Azamgarh and under its ruler’s protection to the Ghaghara forests; Collins was stunned because his chief enemy walked right in, obtained ten cartridges, and spared his life.',
          marks: 4,
          tag: 'NCERT प्रश्न-अभ्यास',
        },
        {
          type: 'qa',
          question:
            'लिखित (ख) प्रश्न 1 व 2 (50–60 शब्दों में): (1) लेफ़्टीनेंट को ऐसा क्यों लगा कि कंपनी के खिलाफ़ सारे हिंदुस्तान में एक लहर दौड़ गई है? (2) वज़ीर अली ने कंपनी के वकील का कत्ल क्यों किया?',
          answer:
            '(1) जब कर्नल ने बताया कि वज़ीर अली अफ़गानिस्तान के बादशाह शाहे-ज़मा को हिंदुस्तान पर हमला करने की दावत दे रहा है और इससे पहले मैसूर के टीपू सुल्तान तथा बंगाल के नवाब के रिश्ते के भाई शमसुद्दौला ने भी ऐसा ही निमंत्रण भेजा था, तब उत्तर से दक्षिण व पूर्व तक भारतीय शासकों का यह साझा विरोध देखकर लेफ़्टीनेंट को लगा कि कंपनी के खिलाफ़ सारे हिंदुस्तान में एक लहर दौड़ गई है। (2) अवध की गद्दी से हटाकर तीन लाख सालाना वज़ीफ़े पर बनारस भेजे जाने के बाद गवर्नर जनरल ने वज़ीर अली को कलकत्ता तलब किया। वज़ीर अली जब बनारस में कंपनी के वकील के पास इसका कारण पूछने व शिकायत करने गया, तो वकील ने उसकी शिकायत सुनने के बजाय उलटा उसे बुरा-भला सुना दिया। पहले से ही अंग्रेज़ों के विरुद्ध नफ़रत से भरे वज़ीर अली से यह अपमान सहन न हुआ और उसने खंजर से वकील का काम तमाम कर दिया।',
          markingTip:
            'English Helper: Written (ख) Q1–Q2: Tipu Sultan, Wazir Ali, and Bengal’s Shamsuddaula independently rallying Shah-e-Zaman signaled pan-India revolt; the Banaras lawyer dismissed Wazir Ali’s protest over the Calcutta summons and insulted him, provoking the fatal dagger strike.',
          marks: 6,
          tag: 'NCERT प्रश्न-अभ्यास',
        },
        {
          type: 'qa',
          question:
            'लिखित (ख) प्रश्न 3 (50–60 शब्दों में): सवार ने कर्नल से कारतूस कैसे हासिल किए?',
          answer:
            'अकेला सवार सरपट घोड़ा दौड़ाता कर्नल के खेमे में पहुँचा और आते ही ‘तन्हाई! तन्हाई!’ पुकारकर व ‘दीवार हमगोश दारद’ कहकर लेफ़्टीनेंट तथा सिपाही को बाहर भिजवा दिया। एकांत मिलने पर उसने कर्नल से इतने बड़े लावलश्कर का कारण पूछा और जानबूझकर वज़ीर अली को एक जाँबाज़ व पकड़ से बाहर सिपाही बताया। उसने कर्नल को विश्वास दिलाया कि वह भी वज़ीर अली को गिरफ़्तार करना चाहता है और इसी काम के लिए उसने ‘चंद कारतूस’ माँगे। कर्नल उसकी बातों में आ गया और उसने अपने ही हाथों उसे दस कारतूस दे दिए।',
          markingTip:
            'English Helper: Written (ख) Q3: Demanding strict privacy (“walls have ears”), he cleared the tent, praised Wazir Ali’s elusiveness, claimed he needed ammunition to arrest Wazir Ali, and fooled Collins into handing over 10 cartridges.',
          marks: 3,
          tag: 'पठित गद्यांश',
        },
        {
          type: 'qa',
          question:
            'लिखित (ख) प्रश्न 4 (50–60 शब्दों में): वज़ीर अली एक जाँबाज़ सिपाही था, कैसे? स्पष्ट कीजिए।',
          answer:
            'वज़ीर अली का संपूर्ण जीवन उसके अदम्य साहस और देशभक्ति का प्रमाण है: (i) मात्र पाँच माह के शासन में उसने अवध के दरबार को अंग्रेज़ी प्रभाव से मुक्त करने का साहस दिखाया; (ii) पद से हटाए जाने पर वज़ीफ़े के लालच में न झुककर अपमान करने वाले कंपनी के वकील को खंजर से दंडित किया; (iii) मुट्ठी भर साथियों के साथ वर्षों तक पूरी ब्रिटिश फ़ौज की आँखों में धूल झोंकी और टीपू सुल्तान-जैसे शासकों के संग अंग्रेज़ी हुकूमत उखाड़ने का प्रयास किया; (iv) अंततः दुश्मन की बटालियन के बीच (‘शेर की माँद’) अकेले जाकर उन्हीं के कर्नल से दस कारतूस लेकर जान बख्श आना उसकी जाँबाज़ी को पूर्णतः सिद्ध करता है।',
          markingTip:
            'English Helper: Written (ख) Q4: Four proofs—purging Awadh court of British influence, striking back at the insulting lawyer, eluding an army for years with a handful of men, and walking solo into Collins’s camp for cartridges.',
          marks: 3,
          tag: 'NCERT प्रश्न-अभ्यास',
        },
        {
          type: 'qa',
          question:
            'लिखित (ग) आशय स्पष्ट कीजिए — प्रश्न 1: “मुट्ठीभर आदमी और ये दमखम।”',
          answer:
            'आशय: यह कथन कर्नल कालिंज ने आश्चर्य और विवशता के साथ वज़ीर अली व उसके थोड़े-से साथियों के लिए कहा है। वज़ीर अली के पास कोई विशाल सेना या भारी युद्ध-सामग्री नहीं थी, केवल गिने-चुने (मुट्ठी भर) वफ़ादार जानिसार थे; फिर भी उनमें इतना अदम्य साहस, ऊर्जा और संघर्ष-शक्ति (दमखम) थी कि वे वर्षों से कर्नल की पूरी फ़ौज को जंगलों में छका रहे थे और पकड़े नहीं जाते थे। यह पंक्ति सिद्ध करती है कि संख्या से अधिक मनोबल और देशप्रेम महत्त्वपूर्ण होता है।',
          markingTip:
            'English Helper: Written (ग) Q1 (Explain meaning): Despite having only a tiny band of loyal fighters, Wazir Ali possessed extraordinary grit and courage that baffled an entire British regiment.',
          marks: 3,
          tag: 'पठित गद्यांश',
        },
        {
          type: 'qa',
          question:
            'लिखित (ग) आशय स्पष्ट कीजिए — प्रश्न 2: “गर्द तो ऐसे उड़ रही है जैसे कि पूरा एक काफ़िला चला आ रहा हो मगर मुझे तो एक ही सवार नज़र आता है।”',
          answer:
            'आशय: खिड़की से बाहर देखते समय लेफ़्टीनेंट यह वाक्य कहता है। जंगल के रास्ते पर घुड़सवार इतनी तेज़ रफ़्तार (सरपट) से घोड़ा दौड़ाता आ रहा था कि उसके पीछे आसमान तक धूल का गुबार उठ रहा था, जिससे दूर से देखने पर किसी बड़े काफ़िले या सैन्य-टुकड़ी के आने का भ्रम होता था। वास्तव में वह अकेला वज़ीर अली था—धूल का यह विराट रूप उसके अकेले के तेज़ वेग, निर्भीकता और विशाल व्यक्तित्व का प्रतीक है।',
          markingTip:
            'English Helper: Written (ग) Q2 (Explain meaning): The rider galloped so furiously that the billowing dust looked like an advancing caravan, symbolizing Wazir Ali’s solo speed, fearlessness, and larger-than-life stature.',
          marks: 3,
          tag: 'पठित गद्यांश',
        },
        {
          type: 'qa',
          question:
            'शीर्षक की सार्थकता (Title Justification): हबीब तनवीर की इस एकांकी का शीर्षक ‘कारतूस’ कितना सार्थक और उपयुक्त है? स्पष्ट कीजिए।',
          answer:
            '‘कारतूस’ शीर्षक संक्षिप्त, कौतूहलपूर्ण और एकांकी के कथानक के सर्वथा उपयुक्त है। संपूर्ण एकांकी का केंद्रीय लक्ष्य वज़ीर अली की स्वतंत्रता-लड़ाई और उसका चरम मोड़ ‘दस कारतूस’ प्राप्त करना है। एक ओर कर्नल के पास पूरी फ़ौज, तोप-बंदूक और लावलश्कर है, वहीं दूसरी ओर अकेला वज़ीर अली बिना गोली चलाए अपनी बुद्धि और साहस से स्वयं शत्रु के हाथों ‘दस कारतूस’ हासिल कर लेता है। ये कारतूस केवल बारूद भरी नलियाँ नहीं, बल्कि अंग्रेज़ी सत्ता के विरुद्ध प्रतिरोध और जाँबाज़ी के प्रतीक हैं—इसीलिए अंतिम क्षण में कारतूस पाना ही कथा का चरमोत्कर्ष बनता है।',
          markingTip:
            'English Helper: Title Justification: All tension builds toward the climax where Wazir Ali outwits the Colonel to secure ten cartridges—making “Kartoos” both the plot pivot and symbol of fearless resistance.',
          marks: 3,
          tag: 'Title & Theme Justification',
        },
        {
          type: 'qa',
          question:
            'मूल्यपरक एवं चरित्र-तुलना प्रश्न (Competency Q&A): वज़ीर अली और सआदत अली के चरित्रों की तुलना कीजिए। एकांकी में ‘दीवार हमगोश दारद’ लोकोक्ति किस रणनीतिक चतुराई को दर्शाती है?',
          answer:
            'चरित्र-तुलना: वज़ीर अली स्वाभिमानी, देशभक्त, निर्भीक और त्याग की मूर्ति है, जिसने तीन लाख के वज़ीफ़े व विलासिता को ठुकराकर जंगल का कठिन जीवन चुना ताकि भारत से अंग्रेज़ों को खदेड़ा जा सके। इसके विपरीत उसका चाचा सआदत अली स्वार्थी, देशद्रोही और ऐश-पसंद व्यक्ति था, जिसने गद्दी के लालच में अंग्रेज़ों को आधी मुमलिकत व दस लाख रुपये नगद सौंप दिए। ‘दीवार हमगोश दारद’ (दीवारों के भी कान होते हैं) कहकर सवार ने न केवल गोपनीयता का आभास रचा, बल्कि कर्नल के लेफ़्टीनेंट व पहरेदार सिपाही को कमरे से बाहर करवाकर स्वयं को सुरक्षित किया और एकांत में कर्नल को भ्रमित कर दस कारतूस हासिल कर लिए।',
          markingTip:
            'English Helper: Competency Contrast: Patriotism & self-respect (Wazir Ali) vs greed & collaboration (Saadat Ali); quoting “walls have ears” tactically cleared armed witnesses out of the tent.',
          marks: 4,
          tag: 'मूल्यपरक प्रश्न (Competency)',
        },
        {
          type: 'qa',
          question:
            'व्यावहारिक व्याकरण (NCERT भाषा अध्ययन सारांश): ‘कारक’ तथा क्रिया की ‘अन्विति’ पर ‘ने’ परसर्ग का क्या प्रभाव पड़ता है? ‘कारतूस’ पाठ के उदाहरणों सहित समझाइए।',
          answer:
            'कारक संज्ञा या सर्वनाम का क्रिया से संबंध बताता है—जैसे ‘जंगल की ज़िंदगी’ में संबंध कारक (की), ‘वज़ीर को उसके पद से हटाया’ में कर्म कारक (को) व अपादान कारक (से), तथा ‘घोड़े पर सवार’ में अधिकरण कारक (पर)। इसी प्रकार क्रिया का लिंग और वचन कर्ता-कर्म के अनुसार बदलना ‘अन्विति’ कहलाता है। जब कर्ता ‘ने’ परसर्ग सहित हो और कर्म परसर्ग रहित हो (जैसे ‘सवार ने कारतूस माँगे’), तब क्रिया कर्म के लिंग-वचन के अनुसार चलती है; किंतु जब कर्ता (‘ने’) और कर्म (‘को’) दोनों परसर्ग सहित हों (‘कर्नल ने वज़ीर अली को नहीं पहचाना’), तब क्रिया किसी से प्रभावित न होकर सदा एकवचन पुल्लिंग में रहती है।',
          markingTip:
            'English Helper: Practical Grammar Summary: Case markers (karak) establish noun-verb relations, while verb agreement (anviti) shifts from subject to object with “ने” and defaults to masculine singular if both subject and object take postpositions.',
          marks: 3,
          tag: 'व्यावहारिक व्याकरण',
        },
      ],
    },
  ],
};
