import { Subtopic } from '../../../types/curriculum';

const PASSAGE_1 = `शुद्ध सोना अलग है और गिन्नी का सोना अलग। गिन्नी के सोने में थोड़ा-सा ताँबा मिलाया हुआ होता है, इसलिए वह ज़्यादा चमकता है और शुद्ध सोने से मज़बूत भी होता है। औरतें अकसर इसी सोने के गहने बनवा लेती हैं।
फिर भी होता तो वह है गिन्नी का ही सोना।
शुद्ध आदर्श भी शुद्ध सोने के जैसे ही होते हैं। चंद लोग उनमें व्यावहारिकता का थोड़ा-सा ताँबा मिला देते हैं और चलाकर दिखाते हैं। तब हम लोग उन्हें ‘प्रैक्टिकल आइडियालिस्ट’ कहकर उनका बखान करते हैं।
पर बात न भूलें कि बखान आदर्शों का नहीं होता, बल्कि व्यावहारिकता का होता है। और जब व्यावहारिकता का बखान होने लगता है तब ‘प्रैक्टिकल आइडियालिस्टों’ के जीवन से आदर्श धीरे-धीरे पीछे हटने लगते हैं और उनकी व्यावहारिक सूझबूझ ही आगे आने लगती है।
सोना पीछे रहकर ताँबा ही आगे आता है।`;

const PASSAGE_2 = `चंद लोग कहते हैं, गांधीजी ‘प्रैक्टिकल आइडियालिस्ट’ थे। व्यावहारिकता को पहचानते थे। उसकी कीमत जानते थे। इसीलिए वे अपने विलक्षण आदर्श चला सके। वरना हवा में ही उड़ते रहते। देश उनके पीछे न जाता।
हाँ, पर गांधीजी कभी आदर्शों को व्यावहारिकता के स्तर पर उतरने नहीं देते थे। बल्कि व्यावहारिकता को आदर्शों के स्तर पर चढ़ाते थे। वे सोने में ताँबा नहीं बल्कि ताँबे में सोना मिलाकर उसकी कीमत बढ़ाते थे।
इसलिए सोना ही हमेशा आगे आता रहता था।`;

const PASSAGE_3 = `व्यवहारवादी लोग हमेशा सजग रहते हैं। लाभ-हानि का हिसाब लगाकर ही कदम उठाते हैं। वे जीवन में सफल होते हैं, अन्यों से आगे भी जाते हैं पर क्या वे ऊपर चढ़ते हैं। खुद ऊपर चढ़ें और अपने साथ दूसरों को भी ऊपर ले चलें, यही महत्त्व की बात है। यह काम तो हमेशा आदर्शवादी लोगों ने ही किया है। समाज के पास अगर शाश्वत मूल्यों जैसा कुछ है तो वह आदर्शवादी लोगों का ही दिया हुआ है। व्यवहारवादी लोगों ने तो समाज को गिराया ही है।`;

const PASSAGE_4 = `जापान में मैंने अपने एक मित्र से पूछा, “यहाँ के लोगों को कौन-सी बीमारियाँ अधिक होती हैं?”
“मानसिक”, उन्होंने जवाब दिया, “यहाँ के अस्सी फ़ीसदी लोग मनोरुग्ण हैं।”
“इसकी क्या वजह है?”
कहने लगे, “हमारे जीवन की रफ़्तार बढ़ गई है। यहाँ कोई चलता नहीं, बल्कि दौड़ता है। कोई बोलता नहीं, बकता है। हम जब अकेले पड़ते हैं तब अपने आपसे लगातार बड़बड़ाते रहते हैं। ...अमेरिका से हम प्रतिस्पर्धा करने लगे। एक महीने में पूरा होने वाला काम एक दिन में ही पूरा करने की कोशिश करने लगे। वैसे भी दिमाग की रफ़्तार हमेशा तेज़ ही रहती है। उसे ‘स्पीड’ का इंजन लगाने पर वह हज़ार गुना अधिक रफ़्तार से दौड़ने लगता है। फिर एक क्षण ऐसा आता है जब दिमाग का तनाव बढ़ जाता है और पूरा इंजन टूट जाता है। ...यही कारण है जिससे मानसिक रोग यहाँ बढ़ गए हैं।...”`;

const PASSAGE_5 = `शाम को वह मुझे एक ‘टी-सेरेमनी’ में ले गए। चाय पीने की यह एक विधि है। जापानी में उसे चा-नो-यू कहते हैं।
वह एक छह मंज़िली इमारत थी जिसकी छत पर दफ़्ती की दीवारोंवाली और तातामी (चटाई) की ज़मीनवाली एक सुंदर पर्णकुटी थी। बाहर बेढब-सा एक मिट्टी का बरतन था। उसमें पानी भरा हुआ था। हमने अपने हाथ-पाँव इस पानी से धोए। तौलिए से पोंछे और अंदर गए। अंदर ‘चाजीन’ बैठा था। हमें देखकर वह खड़ा हुआ। कमर झुकाकर उसने हमें प्रणाम किया। दो...झो...(आइए, तशरीफ़ लाइए) कहकर स्वागत किया। बैठने की जगह हमें दिखाई। अँगीठी सुलगाई। उस पर चायदानी रखी। बगल के कमरे में जाकर कुछ बरतन ले आया। तौलिए से बरतन साफ़ किए। सभी क्रियाएँ इतनी गरिमापूर्ण ढंग से कीं कि उसकी हर भंगिमा से लगता था मानो जयजयवंती के सुर गूँज रहे हों। वहाँ का वातावरण इतना शांत था कि चायदानी के पानी का खदबदाना भी सुनाई दे रहा था।`;

const PASSAGE_6 = `चाय तैयार हुई। उसने वह प्यालों में भरी। फिर वे प्याले हमारे सामने रख दिए गए। वहाँ हम तीन मित्र ही थे। इस विधि में शांति मुख्य बात होती है। इसलिए वहाँ तीन से अधिक आदमियों को प्रवेश नहीं दिया जाता। प्याले में दो घूँट से अधिक चाय नहीं थी। हम ओठों से प्याला लगाकर एक-एक बूँद चाय पीते रहे। करीब डेढ़ घंटे तक चुस्कियों का यह सिलसिला चलता रहा।
पहले दस-पंद्रह मिनट तो मैं उलझन में पड़ा। फिर देखा, दिमाग की रफ़्तार धीरे-धीरे धीमी पड़ती जा रही है। थोड़ी देर में बिलकुल बंद भी हो गई। मुझे लगा, मानो अनंतकाल में मैं जी रहा हूँ। यहाँ तक कि सन्नाटा भी मुझे सुनाई देने लगा।
अकसर हम या तो गुज़रे हुए दिनों की खट्टी-मीठी यादों में उलझे रहते हैं या भविष्य के रंगीन सपने देखते रहते हैं। हम या तो भूतकाल में रहते हैं या भविष्यकाल में। असल में दोनों काल मिथ्या हैं। एक चला गया है, दूसरा आया नहीं है। हमारे सामने जो वर्तमान क्षण है, वही सत्य है। उसी में जीना चाहिए। चाय पीते-पीते उस दिन मेरे दिमाग से भूत और भविष्य दोनों काल उड़ गए थे। केवल वर्तमान क्षण सामने था। और वह अनंतकाल जितना विस्तृत था।
जीना किसे कहते हैं, उस दिन मालूम हुआ।
झेन परंपरा की यह बड़ी देन मिली है जापानियों को!`;

export const gadya06PatjharMeinTootiPattiyan: Subtopic = {
  id: 'hindi-gadya-06-patjhar',
  slug: 'patjhar-mein-tooti-pattiyan',
  title: 'पाठ 6: पतझर में टूटी पत्तियाँ (रवींद्र केलेकर)',
  subtitle:
    'संपूर्ण NCERT पाठ (दोनों प्रसंग: ‘गिन्नी का सोना’ और ‘झेन की देन’, पृ. 99–101 के सभी अनुच्छेद) Inline Word Lens सहित, 1-to-1 अंग्रेज़ी अनुवाद, सभी 28 NCERT शब्दार्थ, भाषा-अध्ययन व संपूर्ण प्रश्न-अभ्यास',
  estimatedMinutes: 45,
  difficulty: 'Core CBSE',
  ncertSection: 'स्पर्श भाग-2 › गद्यखंड › पाठ 6',
  learningObjectives: [
    'दोनों NCERT गद्य प्रसंगों — (I) ‘गिन्नी का सोना’ और (II) ‘झेन की देन’ — का संपूर्ण मूल पाठ Inline Word Lens व 1-to-1 अंग्रेज़ी अनुवाद के साथ पढ़कर आत्मसात करना।',
    '‘शुद्ध सोना’ (24 कैरेट/शुद्ध आदर्श) बनाम ‘गिन्नी का सोना’ (22 कैरेट/व्यावहारिकता) के रूपक तथा गांधीजी की ‘ताँबे में सोना मिलाने’ की अनूठी जीवन-शैली का विश्लेषण करना।',
    'जापान में 80% लोगों के मनोरुग्ण होने के कारण (‘स्पीड’ का इंजन व प्रतिस्पर्धा) तथा ‘टी-सेरेमनी’ (चा-नो-यू) की मानसिक शांति और ‘वर्तमान क्षण’ के दर्शन को समझना।',
    'NCERT ‘शब्दार्थ और टिप्पणियाँ’ के सभी 28 शब्दों तथा ‘भाषा-अध्ययन’ (द्वंद्व समास, भाववाचक संज्ञा, अनेकार्थी शब्द, संयुक्त व मिश्र वाक्य) का पूर्ण अभ्यास करना।',
  ],
  keywords: [
    'पतझर में टूटी पत्तियाँ',
    'रवींद्र केलेकर',
    'गिन्नी का सोना',
    'झेन की देन',
    'प्रैक्टिकल आइडियालिस्ट',
    'टी-सेरेमनी चा-नो-यू',
    'चाजीन',
    'द्वंद्व समास',
    'Patjhar mein Tooti Pattiyan full NCERT text',
  ],
  sections: [
    {
      id: 'intro',
      title: '1. लेखक परिचय व ‘पाठ प्रवेश’ (Author Bio & Two Parables Intro)',
      blocks: [
        {
          type: 'ncert-reference',
          title: 'पाठ 6: पतझर में टूटी पत्तियाँ — गिन्नी का सोना व झेन की देन — Official NCERT PDF',
          bookName: 'स्पर्श भाग-2 — गद्यखंड',
          pdfPath: '/ncert/hindi/jhsp113.pdf',
          pdfStartPage: 1,
          pdfEndPage: 10,
          note: 'Official NCERT Sparsh Bhag-2 PDF (पृ. 97–106) को देखें या नीचे दोनों प्रसंगों का संपूर्ण मूल पाठ Inline Word Lens व 1-to-1 Bilingual Transcript के साथ पढ़ें।',
        },
        {
          type: 'callout',
          variant: 'ncert',
          title: 'रवींद्र केलेकर (1925–2010) एवं NCERT ‘पाठ प्रवेश’ (पृ. 97–98)',
          body: '7 मार्च 1925 को कोंकण क्षेत्र में जन्मे रवींद्र केलेकर छात्र जीवन से ही गोवा मुक्ति आंदोलन में शामिल हो गए थे। गांधीवादी चिंतक के रूप में विख्यात केलेकर ने जन-जीवन के विविध पक्षों, मान्यताओं और व्यक्तिगत विचारों को देश और समाज के परिप्रेक्ष्य में प्रस्तुत किया है। कोंकणी में पच्चीस, मराठी में तीन, हिंदी और गुजराती में भी उनकी पुस्तकें प्रकाशित हैं; उन्होंने काका कालेलकर की अनेक पुस्तकों का संपादन व अनुवाद भी किया। गोवा कला अकादमी के साहित्य पुरस्कार सहित अनेक सम्मान प्राप्त केलेकर की प्रमुख कृतियाँ हैं—कोंकणी में ‘उजवाडाचे सूर’, ‘समिधा’, ‘सांगली’, ‘ओथांबे’; मराठी में ‘कोंकणीचें राजकरण’, ‘जापान जसा दिसला’ तथा हिंदी में ‘पतझर में टूटी पत्तियाँ’।',
          bullets: [
            'पाठ प्रवेश का सूत्र (‘थोड़े में बहुत कुछ’): ऐसा माना जाता है कि थोड़े में बहुत कुछ कह देना कविता का गुण है। जब यह गुण गद्य में दिखता है तो पाठक को ‘सार-सार को गहि रहे, थोथा देय उड़ाय’ मुहावरा याद नहीं रखना पड़ता। सूक्ति कथाएँ, आगम कथाएँ, जातक कथाएँ और पंचतंत्र की कहानियाँ इसी के प्रमाण हैं—यही काम कोंकणी में रवींद्र केलेकर ने किया है।',
            'प्रस्तुत पाठ के दोनों प्रसंग पढ़ने वालों से ‘थोड़ा कहा बहुत समझना’ की माँग करते हैं और एक जागरूक व सक्रिय नागरिक बनने की प्रेरणा देते हैं।',
            'भाग (I) ‘गिन्नी का सोना’: जीवन में अपने लिए सुख-साधन जुटाने वालों से नहीं, बल्कि उन लोगों से परिचित कराता है जो इस जगत को जीने और रहने योग्य बनाए हुए हैं।',
            'भाग (II) ‘झेन की देन’: बौद्ध दर्शन में वर्णित ध्यान की उस पद्धति की याद दिलाता है जिसके कारण जापान के लोग आज भी अपनी व्यस्ततम दिनचर्या के बीच कुछ चैन भरे पल पा जाते हैं।',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'CBSE Exam Alert: दोनों प्रसंगों का केंद्रीय सूत्र व ‘भाषा अध्ययन’',
          body: 'बोर्ड परीक्षा में एक ओर ‘सोने में ताँबे’ और ‘ताँबे में सोना’ मिलाने का अंतर, ‘टी-सेरेमनी’ में तीन व्यक्तियों की सीमा तथा ‘सत्य केवल वर्तमान है’ का आशय पूछा जाता है, वहीं NCERT ‘भाषा अध्ययन’ से द्वंद्व समास (लाभ-हानि, माता-पिता, पाप-पुण्य, सुख-दुख, रात-दिन, अन्न-जल, घर-बाहर, देश-विदेश), भाववाचक संज्ञा, अनेकार्थी शब्द (सोना, उत्तर, कर, अंक, नग) तथा संयुक्त-मिश्र वाक्य रूपांतरण सीधे आते हैं।',
        },
      ],
    },
    {
      id: 'passages',
      title: '2. भाग (I): ‘गिन्नी का सोना’ — संपूर्ण NCERT पाठ व Inline Word Lens (पृ. 99–100)',
      blocks: [
        {
          type: 'poetic-stanza',
          passageMode: 'prose',
          stanzaLabel: 'गद्यांश 1 (गिन्नी का सोना, पृ. 99 प्रारंभ) — शुद्ध सोना बनाम गिन्नी का सोना और ‘प्रैक्टिकल आइडियालिस्ट’',
          dialectBadge: 'NCERT पृ. 99 • सूत्र-शैली व व्यंग्यपूर्ण चिंतनपरक गद्य',
          stanzaText: PASSAGE_1,
          prasang:
            'प्रस्तुत गद्यांश रवींद्र केलेकर द्वारा रचित पाठ ‘पतझर में टूटी पत्तियाँ’ के प्रथम प्रसंग ‘गिन्नी का सोना’ से अवतरित है। इसमें लेखक शुद्ध सोने और गिन्नी के सोने के उदाहरण द्वारा शुद्ध आदर्श और व्यावहारिकता के सूक्ष्म अंतर को स्पष्ट करते हैं।',
          bhavarthHindi:
            'जिस प्रकार 24 कैरेट शुद्ध सोने में थोड़ा-सा ताँबा मिलाने से बनने वाला 22 कैरेट ‘गिन्नी का सोना’ अधिक चमकदार और मज़बूत तो हो जाता है (जिससे गहने बनते हैं), फिर भी वह शुद्ध सोना न रहकर गिन्नी का सोना ही कहलाता है—उसी प्रकार कुछ लोग शुद्ध आदर्शों में व्यावहारिकता का थोड़ा ताँबा मिलाकर व्यवहार में लाते हैं और समाज उन्हें ‘प्रैक्टिकल आइडियालिस्ट’ कहकर सराहता है। परंतु लेखक सचेत करते हैं कि ऐसी प्रशंसा आदर्शों की नहीं बल्कि व्यावहारिकता की होती है; धीरे-धीरे उनके जीवन से आदर्श पीछे हटने लगते हैं और केवल स्वार्थपूर्ण व्यावहारिक सूझबूझ (अर्थात् सोना पीछे रहकर ताँबा) ही आगे रह जाती है।',
          englishHelper:
            'Pure 24-carat gold differs from 22-carat guinea gold, which contains a little copper for extra shine and strength so women often use it for ornaments—yet it remains only guinea gold. Likewise, pure ideals resemble pure gold; some mix a dash of practicality into them and are praised as “practical idealists.” Yet that praise goes to expediency, not ideals—gradually ideals recede, worldly shrewdness dominates, and copper steps ahead of gold.',
          poeticDevices: [
            'सांकेतिक रूपक (Allegory) — ‘शुद्ध सोना’ निःस्वार्थ शुद्ध आदर्श का प्रतीक है तथा ‘ताँबा’ सांसारिक व्यावहारिकता का।',
            '‘सोना पीछे रहकर ताँबा ही आगे आता है’ — संक्षिप्त सूत्र-वाक्य (सूक्ति-शैली) द्वारा आदर्श के क्षरण पर तीखा कटाक्ष।',
          ],
          words: [
            {
              word: 'शुद्ध',
              hindiMeaning: 'मिलावटरहित, खरा, पवित्र',
              englishMeaning: 'Pure / unadulterated',
              grammarNote: 'तत्सम विशेषण (shuddha • NCERT शब्दार्थ: ‘शुद्ध सोना’ = 24 कैरेट का सोना)',
            },
            {
              word: 'सोना',
              hindiMeaning: 'स्वर्ण धातु (यहाँ शुद्ध आदर्श का प्रतीक)',
              englishMeaning: 'Gold (symbol of pure idealism)',
              grammarNote: 'तद्भव द्रव्यवाचक संज्ञा • अनेकार्थी (स्वर्ण / शयन करना)',
            },
            {
              word: 'गिन्नी',
              hindiMeaning: 'सोने का एक पुराना सिक्का या 22 कैरेट का मिश्रित सोना',
              englishMeaning: 'Guinea gold (22-carat alloyed gold)',
              grammarNote: 'संज्ञा (ginnee • NCERT शब्दार्थ: ‘गिन्नी का सोना’ = 22 कैरेट सोना)',
            },
            {
              word: 'थोड़ा-सा',
              hindiMeaning: 'अल्प मात्रा में, ज़रा-सा',
              englishMeaning: 'A little bit of / a pinch of',
              grammarNote: 'अनिश्चित परिमाणवाचक विशेषण (योजक चिह्न सहित)',
            },
            {
              word: 'ताँबा',
              hindiMeaning: 'ताम्र धातु (यहाँ व्यावहारिकता का प्रतीक)',
              englishMeaning: 'Copper (symbol of worldly practicality)',
              grammarNote: 'तद्भव संज्ञा (taambaa • चंद्रबिंदु सहित)',
            },
            {
              word: 'ज़्यादा',
              hindiMeaning: 'अधिक, बढ़कर',
              englishMeaning: 'More / greater',
              grammarNote: 'फ़ारसी/अरबी आगत विशेषण (zyaadaa • नुक़्ता ‘ज़’ पर)',
            },
            {
              word: 'मज़बूत',
              hindiMeaning: 'दृढ़, टिकाऊ, सशक्त',
              englishMeaning: 'Strong / sturdy / durable',
              grammarNote: 'अरबी आगत विशेषण (mazboot • नुक़्ता ‘ज़’ पर)',
            },
            {
              word: 'अकसर',
              hindiMeaning: 'प्रायः, ज़्यादातर',
              englishMeaning: 'Often / usually',
              grammarNote: 'रीतिवाचक क्रियाविशेषण (aksar • पाठ में बिना नुक़्ता मुद्रित)',
            },
            {
              word: 'गहने',
              hindiMeaning: 'आभूषण, ज़ेवर',
              englishMeaning: 'Ornaments / jewellery',
              grammarNote: 'पुल्लिंग बहुवचन संज्ञा (एकवचन: गहना)',
            },
            {
              word: 'आदर्श',
              hindiMeaning: 'उच्च नैतिक मूल्य, अनुकरणीय सिद्धांत',
              englishMeaning: 'Ideal / elevated moral standard',
              grammarNote: 'तत्सम संज्ञा व विशेषण (aadarsh)',
              exampleSentence: 'हमें कठिन परिस्थितियों में भी अपने नैतिक आदर्श नहीं छोड़ने चाहिए।',
            },
            {
              word: 'चंद',
              hindiMeaning: 'कुछ, गिने-चुने',
              englishMeaning: 'A few / handful of',
              grammarNote: 'फ़ारसी अनिश्चित संख्यावाचक विशेषण (chand)',
            },
            {
              word: 'व्यावहारिकता',
              hindiMeaning: 'समय और अवसर देखकर कार्य करने की सूझ',
              englishMeaning: 'Practicality / worldly pragmatism',
              grammarNote: 'भाववाचक संज्ञा (vyavahaariktaa • NCERT शब्दार्थ) • व्यवहार + इक + ता',
              exampleSentence: 'गांधीजी ने कभी आदर्शों को व्यावहारिकता के स्तर पर नहीं गिरने दिया।',
            },
            {
              word: 'प्रैक्टिकल',
              hindiMeaning: 'व्यावहारिक, अवसर के अनुकूल सूझ रखने वाला',
              englishMeaning: 'Practical / pragmatic',
              grammarNote: 'अंग्रेज़ी आगत विशेषण (practical)',
            },
            {
              word: 'आइडियालिस्ट',
              hindiMeaning: 'आदर्शवादी व्यक्ति',
              englishMeaning: 'Idealist',
              grammarNote: 'अंग्रेज़ी आगत संज्ञा (idealist • NCERT शब्दार्थ: ‘प्रैक्टिकल आइडियालिस्ट’ = व्यावहारिक आदर्श)',
            },
            {
              word: 'बखान',
              hindiMeaning: 'वर्णन करना / बयान करना, प्रशंसा करना',
              englishMeaning: 'Description / praise / extolling',
              grammarNote: 'तद्भव संज्ञा (bakhaan • NCERT शब्दार्थ)',
            },
            {
              word: 'आदर्शों',
              hindiMeaning: 'उच्च नैतिक सिद्धांतों',
              englishMeaning: 'Moral ideals / principles',
              grammarNote: 'पुल्लिंग बहुवचन तिर्यक् रूप (aadarshon)',
            },
            {
              word: 'धीरे-धीरे',
              hindiMeaning: 'शनेः-शनैः, क्रमशः',
              englishMeaning: 'Gradually / slowly',
              grammarNote: 'पुनरुक्त रीतिवाचक क्रियाविशेषण',
            },
            {
              word: 'व्यावहारिक',
              hindiMeaning: 'व्यवहार से संबंधित, सांसारिक सूझवाला',
              englishMeaning: 'Practical / pragmatic',
              grammarNote: 'तत्सम विशेषण (व्यवहार + इक • ‘भाषा अध्ययन’ प्रश्न 3 में प्रयुक्त)',
            },
            {
              word: 'सूझबूझ',
              hindiMeaning: 'काम करने की समझ, विवेक व चतुराई',
              englishMeaning: 'Prudence / practical understanding',
              grammarNote: 'स्त्रीलिंग संज्ञा (soojhboojh • NCERT शब्दार्थ: ‘सूझ-बूझ’ = काम करने की समझ)',
              exampleSentence: 'कठिन संकट में भी सही सूझबूझ से काम लेने पर मार्ग निकल आता है।',
            },
          ],
        },
        {
          type: 'poetic-stanza',
          passageMode: 'prose',
          stanzaLabel: 'गद्यांश 2 (गिन्नी का सोना, पृ. 99 अंत) — गांधीजी: सोने में ताँबा नहीं, ताँबे में सोना',
          dialectBadge: 'NCERT पृ. 99 • गांधीवादी जीवन-दर्शन',
          stanzaText: PASSAGE_2,
          prasang:
            'यह गद्यांश ‘गिन्नी का सोना’ प्रसंग का मध्य भाग है। इसमें रवींद्र केलेकर यह स्पष्ट करते हैं कि महात्मा गांधी को लोग ‘प्रैक्टिकल आइडियालिस्ट’ कहते अवश्य हैं, किंतु वे स्वार्थी व्यवहारवादियों से सर्वथा भिन्न थे।',
          bhavarthHindi:
            'कुछ लोग मानते हैं कि गांधीजी व्यावहारिक आदर्शवादी थे क्योंकि वे परिस्थिति और व्यावहारिकता की कीमत पहचानते थे—यदि वे केवल हवा में उड़ते (कोरी कल्पना करते) तो इतने विलक्षण आदर्श चला न पाते और देश उनके पीछे न चलता। परंतु गांधीजी व सामान्य ‘प्रैक्टिकल आइडियालिस्टों’ में मौलिक अंतर यह था कि उन्होंने कभी अपने आदर्शों को व्यावहारिकता के निचले स्तर पर उतरने नहीं दिया, बल्कि सांसारिक व्यावहारिकता को ही ऊपर उठाकर आदर्शों के स्तर तक पहुँचाया। वे सोने में ताँबा नहीं बल्कि ताँबे में सोना मिलाकर उसकी कीमत बढ़ाते थे, इसलिए सदा आदर्श रूपी सोना ही प्रमुख रहता था।',
          englishHelper:
            'Some call Gandhiji a “practical idealist” because he recognized reality and knew practicality’s worth—otherwise he could not have carried forward his extraordinary ideals, would merely have floated in the air, and the nation would not have followed him. Yet Gandhiji never let ideals drop to expediency’s level; he raised practicality up to the level of ideals. Mixing gold into copper rather than copper into gold, he raised its value so pure gold always led the way.',
          poeticDevices: [
            'विरोधी-संतुलन (Antithesis) — ‘सोने में ताँबा नहीं बल्कि ताँबे में सोना मिलाकर’ पंक्ति दो विरोधी जीवन-दृष्टियों को एक सूत्र में बाँधती है।',
            'मुहावरा-प्रयोग — ‘हवा में उड़ना’ (कोरी कल्पना में रहना) तथा ‘पीछे जाना’ (अनुसरण करना)।',
          ],
          words: [
            {
              word: 'प्रैक्टिकल',
              hindiMeaning: 'व्यावहारिक सूझबूझ वाला',
              englishMeaning: 'Practical',
              grammarNote: 'अंग्रेज़ी आगत विशेषण',
            },
            {
              word: 'आइडियालिस्ट',
              hindiMeaning: 'आदर्शों को मानने वाला व्यक्ति',
              englishMeaning: 'Idealist',
              grammarNote: 'अंग्रेज़ी आगत संज्ञा',
            },
            {
              word: 'व्यावहारिकता',
              hindiMeaning: 'परिस्थिति व अवसर के अनुकूल कार्य करने की सूझ',
              englishMeaning: 'Practicality / realism',
              grammarNote: 'भाववाचक संज्ञा',
            },
            {
              word: 'पहचानते',
              hindiMeaning: 'परख रखते थे, भलीभाँति समझते थे',
              englishMeaning: 'Recognised / understood well',
              grammarNote: 'सकर्मक क्रिया (पहचानना)',
            },
            {
              word: 'कीमत',
              hindiMeaning: 'मूल्य, महत्त्व',
              englishMeaning: 'Value / worth / importance',
              grammarNote: 'स्त्रीलिंग संज्ञा (keemat • पाठ में बिना नुक़्ता मुद्रित)',
            },
            {
              word: 'विलक्षण',
              hindiMeaning: 'असाधारण, अद्भुत, अनोखा',
              englishMeaning: 'Extraordinary / remarkable / unique',
              grammarNote: 'तत्सम विशेषण (वि + लक्षण • ‘भाषा अध्ययन’ शब्द-प्रयोग)',
              exampleSentence: 'गांधीजी के सत्य और अहिंसा जैसे विलक्षण आदर्शों ने पूरे विश्व को प्रेरित किया।',
            },
            {
              word: 'वरना',
              hindiMeaning: 'अन्यथा, नहीं तो',
              englishMeaning: 'Otherwise / else',
              grammarNote: 'फ़ारसी अव्यय (व्यतिरेकवाचक समुच्चयबोधक)',
            },
            {
              word: 'आदर्शों',
              hindiMeaning: 'नैतिक सिद्धांतों',
              englishMeaning: 'Ideals / moral principles',
              grammarNote: 'बहुवचन तिर्यक् रूप',
            },
            {
              word: 'स्तर',
              hindiMeaning: 'श्रेणी, दर्जा, धरातल',
              englishMeaning: 'Level / standard / grade',
              grammarNote: 'तत्सम पुल्लिंग संज्ञा (star • NCERT शब्दार्थ: स्तर = श्रेणी; के स्तर = के बराबर)',
            },
            {
              word: 'उतरने',
              hindiMeaning: 'नीचे गिरने, झुकने',
              englishMeaning: 'To descend / stoop down',
              grammarNote: 'अकर्मक क्रिया (उतरना)',
            },
            {
              word: 'चढ़ाते',
              hindiMeaning: 'ऊँचा उठाते थे, उन्नत करते थे',
              englishMeaning: 'Elevated / raised up',
              grammarNote: 'प्रेरणार्थक क्रिया (चढ़ाना)',
            },
          ],
        },
        {
          type: 'poetic-stanza',
          passageMode: 'prose',
          stanzaLabel: 'गद्यांश 3 (गिन्नी का सोना, पृ. 100 प्रारंभ) — व्यवहारवादी बनाम आदर्शवादी और शाश्वत मूल्य',
          dialectBadge: 'NCERT पृ. 100 • नैतिक मूल्य-विवेचन',
          stanzaText: PASSAGE_3,
          prasang:
            'यह ‘गिन्नी का सोना’ प्रसंग का अंतिम अनुच्छेद है। इसमें लेखक स्वार्थी व्यवहारवादियों की सफलता की सीमा दिखाते हुए समाज में शाश्वत मूल्यों की स्थापना का सारा श्रेय आदर्शवादी लोगों को देते हैं।',
          bhavarthHindi:
            'व्यवहारवादी लोग सदा सतर्क रहते हैं और केवल अपने लाभ-हानि का हिसाब लगाकर ही कोई कदम उठाते हैं। ऐसे लोग भौतिक जीवन में सफल भी होते हैं और दूसरों से आगे भी निकल जाते हैं, पर उनका नैतिक उत्थान नहीं होता। वास्तव में महत्त्वपूर्ण बात यह है कि मनुष्य स्वयं भी ऊपर उठे और अपने साथ दूसरों को भी ऊपर ले चले। यह महान कार्य सदैव आदर्शवादी लोगों ने ही किया है। आज समाज के पास जो भी सत्य, करुणा, अहिंसा व परोपकार जैसे शाश्वत मूल्य बचे हैं, वे उन्हीं आदर्शवादियों की देन हैं; व्यवहारवादी लोगों ने तो केवल समाज के नैतिक स्तर को गिराया ही है।',
          englishHelper:
            'Pragmatic calculators always stay alert, taking every step only after weighing profit and loss. They succeed in life and outpace others, yet do they truly rise? Rising oneself while lifting others along—that is what truly matters, and idealists alone have achieved this. Whatever eternal values society possesses come solely from idealists; calculating pragmatists have only dragged society down.',
          poeticDevices: [
            'प्रश्न-अलंकार व वैषम्य — ‘पर क्या वे ऊपर चढ़ते हैं।’ वाक्य (अवधारक प्रश्न-चिह्न के बजाय विराम सहित) बाहरी सफलता और आंतरिक उत्थान के बीच गहरा भेद स्थापित करता है।',
          ],
          words: [
            {
              word: 'व्यवहारवादी',
              hindiMeaning: 'केवल निजी लाभ-हानि देखकर आचरण करने वाले लोग',
              englishMeaning: 'Opportunistic pragmatists / self-serving realists',
              grammarNote: 'संज्ञा/विशेषण (व्यवहार + वादी)',
            },
            {
              word: 'सजग',
              hindiMeaning: 'सचेत, सावधान, चौकन्ना',
              englishMeaning: 'Alert / watchful / vigilant',
              grammarNote: 'विशेषण (sajag • NCERT शब्दार्थ: सचेत • भाववाचक संज्ञा: सजगता)',
            },
            {
              word: 'लाभ-हानि',
              hindiMeaning: 'नफ़ा और नुकसान, फ़ायदा और घाटा',
              englishMeaning: 'Profit and loss',
              grammarNote: 'द्वंद्व समास (लाभ और हानि • NCERT ‘भाषा अध्ययन’ उदाहरण)',
            },
            {
              word: 'हिसाब',
              hindiMeaning: 'लेखा-जोखा, गणना',
              englishMeaning: 'Calculation / reckoning',
              grammarNote: 'अरबी पुल्लिंग संज्ञा (hisaab)',
            },
            {
              word: 'कदम',
              hindiMeaning: 'डग, प्रयास या कार्रवाई',
              englishMeaning: 'Step / move / action',
              grammarNote: 'अरबी पुल्लिंग संज्ञा (kadam)',
            },
            {
              word: 'सफल',
              hindiMeaning: 'कामयाब, फलप्राप्त',
              englishMeaning: 'Successful',
              grammarNote: 'विशेषण (स + फल • भाववाचक संज्ञा: सफलता)',
            },
            {
              word: 'अन्यों',
              hindiMeaning: 'दूसरे लोगों से, औरों से',
              englishMeaning: 'Others',
              grammarNote: 'सर्वनाम/संज्ञावत बहुवचन तिर्यक् रूप (अन्य)',
            },
            {
              word: 'महत्त्व',
              hindiMeaning: 'अहमियत, गौरव, श्रेष्ठता',
              englishMeaning: 'Importance / true worth',
              grammarNote: 'भाववाचक संज्ञा (महत् + त्व • शुद्ध वर्तनी: दो ‘त्’)',
            },
            {
              word: 'आदर्शवादी',
              hindiMeaning: 'उच्च नैतिक सिद्धांतों पर चलने वाले लोग',
              englishMeaning: 'Idealists',
              grammarNote: 'संज्ञा/विशेषण (आदर्श + वादी • भाववाचक संज्ञा: आदर्शवादिता)',
            },
            {
              word: 'शाश्वत',
              hindiMeaning: 'जो सदैव एक-सा रहे, जो बदला न जा सके; चिरस्थायी',
              englishMeaning: 'Eternal / timeless / immutable',
              grammarNote: 'तत्सम विशेषण (shaashwat • NCERT शब्दार्थ)',
              exampleSentence: 'सत्य, अहिंसा और करुणा समाज के शाश्वत मूल्य हैं।',
            },
            {
              word: 'मूल्यों',
              hindiMeaning: 'नैतिक सिद्धांतों, मानवीय गुणों',
              englishMeaning: 'Values / ethical standards',
              grammarNote: 'पुल्लिंग बहुवचन तिर्यक् रूप (मूल्य)',
            },
          ],
        },
      ],
    },
    {
      id: 'passages-part-2',
      title: '3. भाग (II): ‘झेन की देन’ — संपूर्ण NCERT पाठ व Inline Word Lens (पृ. 100–101)',
      blocks: [
        {
          type: 'poetic-stanza',
          passageMode: 'prose',
          stanzaLabel: 'गद्यांश 4 (झेन की देन, पृ. 100 मध्य) — जापान में मानसिक रोग, प्रतिस्पर्धा और ‘स्पीड’ का इंजन',
          dialectBadge: 'NCERT पृ. 100 • संवादात्मक एवं व्यंग्यात्मक गद्य',
          stanzaText: PASSAGE_4,
          prasang:
            'प्रस्तुत गद्यांश पाठ के दूसरे प्रसंग ‘झेन की देन’ का प्रारंभिक भाग है। जापान यात्रा के दौरान लेखक अपने जापानी मित्र से वहाँ की प्रमुख बीमारियों के बारे में पूछते हैं और मित्र आधुनिक भागदौड़ से उत्पन्न मानसिक तनाव की भयावह स्थिति बयान करते हैं।',
          bhavarthHindi:
            'लेखक ने जब अपने जापानी मित्र से पूछा कि जापान के लोगों को कौन-सी बीमारियाँ अधिक होती हैं, तो उन्होंने बताया कि यहाँ के अस्सी फ़ीसदी लोग मनोरुग्ण (मानसिक रोग से पीड़ित) हैं। कारण पूछने पर मित्र ने कहा कि आधुनिक जीवन की रफ़्तार अत्यधिक बढ़ गई है—यहाँ कोई आराम से चलता नहीं, बल्कि दौड़ता है; कोई शांत संवाद नहीं करता, बल्कि बकता है और अकेले पड़ने पर लोग अपने आपसे बड़बड़ाते रहते हैं। अमेरिका से अंधी प्रतिस्पर्धा करने के कारण एक महीने का काम एक दिन में निपटाने की होड़ शुरू हो गई। मस्तिष्क की स्वाभाविक गति पहले से ही तेज़ होती है, उस पर ‘स्पीड’ का इंजन लगा देने से वह हज़ार गुना अधिक रफ़्तार से दौड़ता है और अंततः अत्यधिक तनाव के कारण पूरा दिमागी इंजन टूट जाता है।',
          englishHelper:
            'In Japan I asked a friend which illnesses are most common here. “Mental,” he replied; “80% of people here are mentally stressed.” Asked why, he explained that life’s pace has surged: nobody walks, everyone runs; nobody speaks, everyone rambles, muttering to themselves when alone. Competing with America, people tried finishing a month’s work in a single day. Mounting a “speed” engine onto an already fast mind drives it a thousand times faster until tension builds and the whole engine breaks down.',
          poeticDevices: [
            'यांत्रिक रूपक (Mechanical Metaphor) — मानव मस्तिष्क के मानसिक संतुलन टूटने की तुलना ‘स्पीड का इंजन टूटने’ से कर अति-यांत्रिक जीवन-शैली पर व्यंग्य किया गया है।',
            'वाक्य-लाघव व संवादात्मकता — ‘कोई चलता नहीं, बल्कि दौड़ता है। कोई बोलता नहीं, बकता है।’ जैसी संतुलित पंक्तियाँ आधुनिक बेचैनी को सजीव करती हैं।',
          ],
          words: [
            {
              word: 'बीमारियाँ',
              hindiMeaning: 'रोग, अस्वस्थताएँ',
              englishMeaning: 'Illnesses / ailments',
              grammarNote: 'स्त्रीलिंग बहुवचन संज्ञा (एकवचन: बीमारी)',
            },
            {
              word: 'मानसिक',
              hindiMeaning: 'मस्तिष्क संबंधी, दिमागी',
              englishMeaning: 'Mental / psychological',
              grammarNote: 'तत्सम विशेषण (मनस् + इक • NCERT शब्दार्थ)',
            },
            {
              word: 'फ़ीसदी',
              hindiMeaning: 'प्रतिशत (प्रति सैकड़ा)',
              englishMeaning: 'Percent (%)',
              grammarNote: 'अरबी/फ़ारसी आगत शब्द (feesadee • नुक़्ता ‘फ़’ पर)',
            },
            {
              word: 'मनोरुग्ण',
              hindiMeaning: 'तनाव के कारण मन से अस्वस्थ, मानसिक रोगी',
              englishMeaning: 'Mentally ill / stressed-out',
              grammarNote: 'मनः + रुग्ण (विसर्ग संधि • NCERT शब्दार्थ)',
            },
            {
              word: 'वजह',
              hindiMeaning: 'कारण, हेतु',
              englishMeaning: 'Reason / cause',
              grammarNote: 'अरबी स्त्रीलिंग संज्ञा (wajah)',
            },
            {
              word: 'रफ़्तार',
              hindiMeaning: 'गति, चाल, तेज़ी',
              englishMeaning: 'Speed / pace',
              grammarNote: 'फ़ारसी स्त्रीलिंग संज्ञा (raftaar • नुक़्ता ‘फ़’ पर)',
            },
            {
              word: 'बकता',
              hindiMeaning: 'बिना सोचे-समझे तेज़ी से बोलता (अर्थहीन प्रलाप)',
              englishMeaning: 'Babbles / chatters compulsively',
              grammarNote: 'अकर्मक/सकर्मक क्रिया (बकना)',
            },
            {
              word: 'लगातार',
              hindiMeaning: 'निरंतर, बिना रुके',
              englishMeaning: 'Continuously / incessantly',
              grammarNote: 'कालवाचक क्रियाविशेषण',
            },
            {
              word: 'बड़बड़ाते',
              hindiMeaning: 'स्वयं से अस्पष्ट या असंबद्ध बातें बोलते रहते हैं',
              englishMeaning: 'Mutter / ramble to oneself',
              grammarNote: 'ध्वन्यात्मक क्रिया (बड़बड़ाना)',
            },
            {
              word: 'प्रतिस्पर्धा',
              hindiMeaning: 'होड़, मुक़ाबला, प्रतियोगिता',
              englishMeaning: 'Competition / rivalry',
              grammarNote: '‘प्रति’ उपसर्ग + स्पर्धा (pratispardhaa • NCERT शब्दार्थ: होड़)',
            },
            {
              word: 'तेज़',
              hindiMeaning: 'तीव्र, द्रुतगामी',
              englishMeaning: 'Fast / rapid',
              grammarNote: 'फ़ारसी विशेषण (tez • नुक़्ता ‘ज़’ पर)',
            },
            {
              word: 'स्पीड',
              hindiMeaning: 'गति, अत्यधिक तेज़ी',
              englishMeaning: 'Speed',
              grammarNote: 'अंग्रेज़ी आगत संज्ञा (speed • NCERT शब्दार्थ: गति)',
            },
            {
              word: 'हज़ार',
              hindiMeaning: 'सहस्र (1000)',
              englishMeaning: 'Thousand',
              grammarNote: 'फ़ारसी संख्यावाचक शब्द (hazaar • नुक़्ता ‘ज़’ पर)',
            },
            {
              word: 'क्षण',
              hindiMeaning: 'पल, समय का अत्यंत छोटा अंश',
              englishMeaning: 'Moment / instant',
              grammarNote: 'तत्सम पुल्लिंग संज्ञा (kshan)',
            },
            {
              word: 'तनाव',
              hindiMeaning: 'मानसिक दबाव या खिंचाव',
              englishMeaning: 'Mental tension / stress',
              grammarNote: 'पुल्लिंग संज्ञा (tanaav)',
            },
          ],
        },
        {
          type: 'poetic-stanza',
          passageMode: 'prose',
          stanzaLabel: 'गद्यांश 5 (झेन की देन, पृ. 100 अंत) — ‘टी-सेरेमनी’ (चा-नो-यू), पर्णकुटी और ‘चाजीन’ की गरिमा',
          dialectBadge: 'NCERT पृ. 100 • चित्रात्मक एवं सांस्कृतिक वर्णन',
          stanzaText: PASSAGE_5,
          prasang:
            'जापान के मानसिक तनाव से भरे जीवन की चर्चा के बाद लेखक का मित्र उसी शाम उन्हें पारंपरिक जापानी ‘टी-सेरेमनी’ (चा-नो-यू) में ले जाता है। यहाँ लेखक उस शांत पर्णकुटी और चाय परोसने वाले ‘चाजीन’ की सलीकेदार क्रियाओं का सजीव शब्द-चित्र खींचते हैं।',
          bhavarthHindi:
            'शाम को मित्र लेखक को चाय पीने की विशेष जापानी विधि ‘टी-सेरेमनी’ (चा-नो-यू) में ले गए। वह छह मंज़िली इमारत की छत पर बनी एक सुंदर पर्णकुटी थी, जिसकी दीवारें चित्रित दफ़्ती की तथा ज़मीन तातामी (चटाई) की थी। बाहर रखे बेढब-से मिट्टी के बरतन के पानी से हाथ-पाँव धोकर और तौलिए से पोंछकर वे भीतर गए। अंदर बैठे ‘चाजीन’ ने खड़े होकर कमर झुकाकर प्रणाम किया और ‘दो...झो...’ (आइए, तशरीफ़ लाइए) कहकर स्वागत किया। उसने बैठने की जगह दिखाई, अँगीठी सुलगाई, चायदानी रखी, बगल के कमरे से बरतन लाकर तौलिए से साफ़ किए। उसकी हर मुद्रा व क्रिया इतनी गरिमापूर्ण थी मानो शास्त्रीय राग जयजयवंती के सुर गूँज रहे हों; वहाँ इतनी शांति थी कि चायदानी में पानी का खदबदाना भी स्पष्ट सुनाई दे रहा था।',
          englishHelper:
            'That evening he took me to a “Tea Ceremony,” a Japanese tea-drinking ritual called Cha-no-yu. On the roof of a six-storey building stood a lovely leaf-hut with sliding shoji partitions and a tatami-mat floor. Outside was a roughly shaped earthen pot filled with water; we washed our hands and feet, wiped them with a towel, and stepped inside. Seated within, the “Chajin” rose, bowed gracefully, and welcomed us saying “Do...zho...” (Please come in). He showed us seats, lit the brazier, set the kettle, fetched cups from the next room and wiped them. Every gesture was so dignified it seemed the notes of Raga Jaijaivanti resonated; such silence reigned that even the kettle’s simmering water could be heard.',
          poeticDevices: [
            'उत्प्रेक्षा अलंकार व दृश्य-श्रव्य बिंब — ‘उसकी हर भंगिमा से लगता था मानो जयजयवंती के सुर गूँज रहे हों’ में नृत्य-संगीत की लय को चाय बनाने की क्रिया में पिरोया गया है।',
            'ध्वनि-बिंब — ‘चायदानी के पानी का खदबदाना भी सुनाई दे रहा था’ वातावरण की असीम निस्तब्धता को उभारता है।',
          ],
          words: [
            {
              word: 'टी-सेरेमनी',
              hindiMeaning: 'जापान में चाय पीने का विशेष आयोजन',
              englishMeaning: 'Tea Ceremony',
              grammarNote: 'अंग्रेज़ी आगत योजक पद (NCERT शब्दार्थ)',
            },
            {
              word: 'विधि',
              hindiMeaning: 'तरीका, रीति, पद्धति',
              englishMeaning: 'Method / ritual / protocol',
              grammarNote: 'तत्सम स्त्रीलिंग संज्ञा (vidhi)',
            },
            {
              word: 'चा-नो-यू',
              hindiMeaning: 'जापानी भाषा में टी-सेरेमनी का नाम',
              englishMeaning: 'Cha-no-yu (Japanese Tea Ceremony)',
              grammarNote: 'जापानी सांस्कृतिक शब्द (NCERT शब्दार्थ)',
            },
            {
              word: 'मंज़िली',
              hindiMeaning: 'तल्लों या खंडों वाली (छह मंज़िली = छह तल्लों की)',
              englishMeaning: 'Storeyed (six-storeyed)',
              grammarNote: 'विशेषण (मंज़िल + ई • नुक़्ता ‘ज़’ पर)',
            },
            {
              word: 'दफ़्ती',
              hindiMeaning: 'लकड़ी की खोखली सरकने वाली दीवार जिस पर चित्रकारी होती है',
              englishMeaning: 'Hollow sliding paper/wooden shoji partition with paintings',
              grammarNote: 'स्त्रीलिंग संज्ञा (daftee • नुक़्ता ‘फ़’ पर • NCERT शब्दार्थ)',
            },
            {
              word: 'दीवारोंवाली',
              hindiMeaning: 'दीवारों से युक्त',
              englishMeaning: 'Having walls of / walled with',
              grammarNote: 'विशेषण पद (पाठ पृ. 100 में संयुक्ताक्षर रूप में मुद्रित)',
            },
            {
              word: 'तातामी',
              hindiMeaning: 'जापानी घास से बुनी पारंपरिक चटाई',
              englishMeaning: 'Traditional Japanese tatami mat',
              grammarNote: 'जापानी आगत संज्ञा (tataami)',
            },
            {
              word: 'ज़मीनवाली',
              hindiMeaning: 'फ़र्श या ज़मीन से युक्त',
              englishMeaning: 'Having a floor of / floored with',
              grammarNote: 'विशेषण पद (नुक़्ता ‘ज़’ पर)',
            },
            {
              word: 'पर्णकुटी',
              hindiMeaning: 'पत्तों से बनी कुटिया',
              englishMeaning: 'Leaf-hut / serene thatched pavilion',
              grammarNote: 'मध्यमपदलोपी तत्पुरुष समास (पर्ण से बनी कुटी • NCERT शब्दार्थ)',
            },
            {
              word: 'बेढब-सा',
              hindiMeaning: 'बेडौल-सा, अनगढ़ आकार वाला',
              englishMeaning: 'Roughly shaped / asymmetrical / rustic',
              grammarNote: '‘बे’ उपसर्ग + ढब + सा (NCERT शब्दार्थ: बेडौल-सा)',
            },
            {
              word: 'बरतन',
              hindiMeaning: 'पात्र, भाँड़े',
              englishMeaning: 'Vessel / utensil / pot',
              grammarNote: 'पुल्लिंग संज्ञा (पाठ में मानक ‘बरतन’ वर्तनी प्रयुक्त)',
            },
            {
              word: 'चाजीन',
              hindiMeaning: 'जापानी विधि से चाय पिलाने वाला व्यक्ति',
              englishMeaning: 'Chajin (Japanese tea ceremony host/master)',
              grammarNote: 'जापानी आगत संज्ञा (chaajeen • NCERT शब्दार्थ)',
            },
            {
              word: 'प्रणाम',
              hindiMeaning: 'अभिवादन, नमस्कार',
              englishMeaning: 'Respectful bow / greeting',
              grammarNote: 'तत्सम पुल्लिंग संज्ञा (pranaam)',
            },
            {
              word: 'दो...झो...',
              hindiMeaning: 'जापानी आतिथ्य-वाक्य: ‘आइए, तशरीफ़ लाइए’',
              englishMeaning: 'Japanese welcome phrase (“Dozo” = Please / Welcome)',
              grammarNote: 'जापानी संवादात्मक अभिव्यक्ति',
            },
            {
              word: 'तशरीफ़',
              hindiMeaning: 'सम्मानपूर्वक पधारने या बैठने का आदरसूचक शब्द',
              englishMeaning: 'Gracious presence (honorific: please come in)',
              grammarNote: 'अरबी आगत आदरसूचक संज्ञा (tashreef • नुक़्ता ‘फ़’ पर)',
            },
            {
              word: 'अँगीठी',
              hindiMeaning: 'कोयला आदि जलाने का पात्र, सिगड़ी',
              englishMeaning: 'Charcoal brazier / hearth',
              grammarNote: 'तद्भव स्त्रीलिंग संज्ञा (angeethee • चंद्रबिंदु सहित)',
            },
            {
              word: 'सुलगाई',
              hindiMeaning: 'जलाई, प्रज्वलित की',
              englishMeaning: 'Lit / kindled',
              grammarNote: 'सकर्मक क्रिया (सुलगाना)',
            },
            {
              word: 'चायदानी',
              hindiMeaning: 'चाय बनाने व उबालने का पात्र, केतली',
              englishMeaning: 'Teapot / kettle',
              grammarNote: 'स्त्रीलिंग संज्ञा (chaaydaanee)',
            },
            {
              word: 'साफ़',
              hindiMeaning: 'स्वच्छ, निर्मल',
              englishMeaning: 'Clean / spotless',
              grammarNote: 'अरबी विशेषण (saaf • नुक़्ता ‘फ़’ पर)',
            },
            {
              word: 'गरिमापूर्ण',
              hindiMeaning: 'सलीके से, मर्यादा व गौरव से परिपूर्ण',
              englishMeaning: 'Graceful / dignified / poised',
              grammarNote: 'तत्सम विशेषण (गरिमा + पूर्ण • NCERT शब्दार्थ: सलीके से)',
            },
            {
              word: 'भंगिमा',
              hindiMeaning: 'मुद्रा, हाव-भाव, शरीर की स्थिति',
              englishMeaning: 'Posture / graceful gesture',
              grammarNote: 'तत्सम स्त्रीलिंग संज्ञा (bhangimaa • NCERT शब्दार्थ: मुद्रा)',
            },
            {
              word: 'जयजयवंती',
              hindiMeaning: 'भारतीय शास्त्रीय संगीत का एक मधुर राग',
              englishMeaning: 'Jaijaivanti (a serene Indian classical Raga)',
              grammarNote: 'व्यक्तिवाचक संज्ञा (NCERT शब्दार्थ: एक राग का नाम)',
            },
            {
              word: 'गूँज',
              hindiMeaning: 'प्रतिध्वनित हो रहे हों, गूँजार कर रहे हों',
              englishMeaning: 'Resonating / echoing',
              grammarNote: 'क्रिया/संज्ञा धातु (गूँजना • चंद्रबिंदु सहित)',
            },
            {
              word: 'खदबदाना',
              hindiMeaning: 'उबलना, धीमी आँच पर बुलबुलों के साथ आवाज़ करना',
              englishMeaning: 'Gentle boiling / simmering sound',
              grammarNote: 'ध्वन्यात्मक क्रिया/संज्ञा (NCERT शब्दार्थ: उबलना)',
            },
          ],
        },
        {
          type: 'poetic-stanza',
          passageMode: 'prose',
          stanzaLabel: 'गद्यांश 6 (झेन की देन, पृ. 101 संपूर्ण) — तीन मित्रों की सीमा, डेढ़ घंटे की चुस्कियाँ और वर्तमान क्षण',
          dialectBadge: 'NCERT पृ. 101 • बौद्ध ध्यान-दर्शन (Zen Mindfulness)',
          stanzaText: PASSAGE_6,
          prasang:
            'यह ‘झेन की देन’ तथा संपूर्ण पाठ का समापन अंश है। इसमें लेखक बताते हैं कि चा-नो-यू की शांत साधना में तीन व्यक्तियों की सीमा क्यों रखी जाती है और डेढ़ घंटे तक चाय की चुस्कियाँ लेने से उनके मन से भूत व भविष्य कैसे विलीन हो गए।',
          bhavarthHindi:
            'चाय तैयार होने पर चाजीन ने प्यालों में भरकर तीनों मित्रों के सामने रख दी। इस विधि में शांति मुख्य बात होने के कारण तीन से अधिक व्यक्तियों को प्रवेश नहीं दिया जाता। प्याले में दो घूँट से अधिक चाय न थी; वे ओठों से प्याला लगाकर डेढ़ घंटे तक एक-एक बूँद चाय की चुस्कियाँ लेते रहे। पहले दस-पंद्रह मिनट लेखक उलझन में रहे, पर धीरे-धीरे दिमाग की रफ़्तार धीमी पड़ते-पड़ते बिलकुल बंद हो गई और उन्हें लगा मानो वे अनंतकाल में जी रहे हैं—यहाँ तक कि सन्नाटा भी सुनाई देने लगा। लेखक निष्कर्ष देते हैं कि मनुष्य प्रायः गुज़रे हुए दिनों की खट्टी-मीठी यादों (भूतकाल) या भविष्य के रंगीन सपनों (भविष्यकाल) में उलझा रहता है, जबकि ये दोनों काल मिथ्या हैं—एक बीत गया, दूसरा आया नहीं। केवल वर्तमान क्षण ही सत्य है और उसी में जीना चाहिए। उस दिन चाय पीते-पीते भूत व भविष्य उड़ गए और अनंतकाल जितना विस्तृत वर्तमान ही सामने बचा—जापानियों को झेन परंपरा की यही महान देन मिली है।',
          englishHelper:
            'When the tea was ready, he poured it into cups and placed them before us. There were only three friends, since peace is central here and no more than three guests are admitted. Each cup held barely two sips; touching our lips to the cup, we sipped drop by drop for about an hour and a half. For the first ten to fifteen minutes I felt perplexed; then my mind’s speed gradually slowed and stopped completely—I felt as though living in eternity, hearing even the silence. Usually we stay tangled in bittersweet memories or colourful future dreams, yet both past and future are illusions: one has gone, the other has not arrived. Only the present moment is real, and we must live inside it. Sipping tea that day, past and future vanished, leaving a present vast as eternity—that day I learned what living truly means, the great gift of the Zen tradition to Japan!',
          poeticDevices: [
            'दार्शनिक सूक्ति-शैली — ‘एक चला गया है, दूसरा आया नहीं है। हमारे सामने जो वर्तमान क्षण है, वही सत्य है।’ जैसे संक्षिप्त वाक्य पाठ को उपनिषद्-तुल्य गहराई देते हैं।',
            'विरोधाभास (Paradox) — ‘यहाँ तक कि सन्नाटा भी मुझे सुनाई देने लगा’ तथा ‘वर्तमान क्षण... अनंतकाल जितना विस्तृत था’।',
          ],
          words: [
            {
              word: 'प्यालों',
              hindiMeaning: 'छोटे कपों में',
              englishMeaning: 'Cups (plural oblique)',
              grammarNote: 'पुल्लिंग बहुवचन तिर्यक् रूप (एकवचन: प्याला)',
            },
            {
              word: 'प्रवेश',
              hindiMeaning: 'अंदर आना, दाखिला',
              englishMeaning: 'Entry / admission',
              grammarNote: '‘प्र’ उपसर्ग + वेश (पुल्लिंग संज्ञा)',
            },
            {
              word: 'घूँट',
              hindiMeaning: 'एक बार में निगला जाने वाला तरल का अंश',
              englishMeaning: 'Sip / gulp',
              grammarNote: 'पुल्लिंग संज्ञा (ghoont • चंद्रबिंदु सहित)',
            },
            {
              word: 'ओठों',
              hindiMeaning: 'होंठों, अधरों',
              englishMeaning: 'Lips (plural oblique)',
              grammarNote: 'पुल्लिंग बहुवचन तिर्यक् रूप (पाठ पृ. 101 में ‘ओठों’ मुद्रित)',
            },
            {
              word: 'बूँद',
              hindiMeaning: 'अत्यंत सूक्ष्म जल/द्रव का कण',
              englishMeaning: 'Drop',
              grammarNote: 'स्त्रीलिंग संज्ञा (boond • चंद्रबिंदु सहित)',
            },
            {
              word: 'करीब',
              hindiMeaning: 'लगभग, अनुमानतः',
              englishMeaning: 'Approximately / about',
              grammarNote: 'अव्यय (kareeb • पाठ में बिना नुक़्ता मुद्रित)',
            },
            {
              word: 'चुस्कियों',
              hindiMeaning: 'धीरे-धीरे घूँट भरकर पीने की क्रियाओं',
              englishMeaning: 'Slow sips',
              grammarNote: 'स्त्रीलिंग बहुवचन तिर्यक् रूप (एकवचन: चुस्की)',
            },
            {
              word: 'सिलसिला',
              hindiMeaning: 'क्रम, लगातार चलने वाली शृंखला',
              englishMeaning: 'Sequence / uninterrupted process',
              grammarNote: 'अरबी पुल्लिंग संज्ञा (silsilaa)',
            },
            {
              word: 'उलझन',
              hindiMeaning: 'असमंजस की स्थिति, मानसिक दुविधा',
              englishMeaning: 'Perplexity / mental restlessness',
              grammarNote: 'स्त्रीलिंग संज्ञा (uljhan • NCERT शब्दार्थ)',
            },
            {
              word: 'बिलकुल',
              hindiMeaning: 'पूरी तरह से, सर्वथा',
              englishMeaning: 'Completely / totally',
              grammarNote: 'अव्यय/क्रियाविशेषण (पाठ में वर्तनी: बिलकुल)',
            },
            {
              word: 'अनंतकाल',
              hindiMeaning: 'वह काल जिसका अंत न हो, असीम समय',
              englishMeaning: 'Eternity / endless time',
              grammarNote: 'कर्मधारय समास (अनंत है जो काल • NCERT शब्दार्थ)',
            },
            {
              word: 'सन्नाटा',
              hindiMeaning: 'खामोशी, गहन निस्तब्धता',
              englishMeaning: 'Deep silence / stillness',
              grammarNote: 'पुल्लिंग संज्ञा (sannaataa • NCERT शब्दार्थ: खामोशी)',
            },
            {
              word: 'गुज़रे',
              hindiMeaning: 'बीते हुए, अतीत के',
              englishMeaning: 'Gone by / past',
              grammarNote: 'भूतकालिक कृदंत विशेषण (guzare • नुक़्ता ‘ज़’ पर)',
            },
            {
              word: 'खट्टी-मीठी',
              hindiMeaning: 'सुखद और दुखद दोनों प्रकार की (मिली-जुली)',
              englishMeaning: 'Bittersweet',
              grammarNote: 'द्वंद्व समास / विशेषण युग्म',
            },
            {
              word: 'उलझे',
              hindiMeaning: 'फँसे हुए, व्यस्त',
              englishMeaning: 'Entangled / preoccupied',
              grammarNote: 'अकर्मक क्रिया/कृदंत (उलझना)',
            },
            {
              word: 'भूतकाल',
              hindiMeaning: 'बीता हुआ समय (अतीत)',
              englishMeaning: 'Past / past tense',
              grammarNote: 'कर्मधारय समास (भूत है जो काल)',
            },
            {
              word: 'भविष्यकाल',
              hindiMeaning: 'आने वाला समय',
              englishMeaning: 'Future / future time',
              grammarNote: 'तत्पुरुष/कर्मधारय संज्ञा (भविष्य का काल)',
            },
            {
              word: 'मिथ्या',
              hindiMeaning: 'भ्रम, असत्य, जिसका वर्तमान में वास्तविक अस्तित्व न हो',
              englishMeaning: 'Illusion / unreal / false',
              grammarNote: 'तत्सम अव्यय/विशेषण (mithyaa • NCERT शब्दार्थ: भ्रम)',
            },
            {
              word: 'वर्तमान',
              hindiMeaning: 'जो समय अभी चल रहा है, मौजूदा क्षण',
              englishMeaning: 'The present',
              grammarNote: 'तत्सम विशेषण/संज्ञा (vartamaan)',
            },
            {
              word: 'विस्तृत',
              hindiMeaning: 'फैला हुआ, व्यापक, विशाल',
              englishMeaning: 'Vast / expansive / stretched out',
              grammarNote: 'तत्सम विशेषण (vistrit)',
            },
            {
              word: 'परंपरा',
              hindiMeaning: 'पीढ़ी-दर-पीढ़ी चली आ रही सांस्कृतिक परिपाटी',
              englishMeaning: 'Tradition / heritage',
              grammarNote: 'तत्सम स्त्रीलिंग संज्ञा (paramparaa)',
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
          title: 'पतझर में टूटी पत्तियाँ — Complete Verbatim Hindi & Sentence-by-Sentence English Translation',
          intro:
            'Read both episodes of Ravindra Kelekar’s NCERT lesson—(I) Ginni ka Sona and (II) Jhen ki Den—paragraph by paragraph alongside a faithful sentence-by-sentence English translation.',
          segments: [
            {
              label: 'Segment 1 (गिन्नी का सोना, पृ. 99 प्रारंभ) — Pure Gold vs Guinea Gold & Practical Idealists',
              hindiOriginal: PASSAGE_1,
              englishText: `Pure gold is one thing and guinea gold is another. In guinea gold a little bit of copper is mixed in, which is why it shines brighter and is also stronger than pure gold. Women often get ornaments made out of this very gold.
Even so, it remains only guinea gold after all.
Pure ideals too are just like pure gold. A handful of people mix a little bit of the copper of practicality into them and put them into circulation. Then we praise them by calling them “practical idealists.”
Yet let us not forget that the praise is not for ideals, but for practicality. And when practicality starts being praised, ideals slowly begin retreating from the lives of “practical idealists,” and their practical shrewdness alone starts coming to the fore.
Gold stays behind and copper alone steps forward.`,
            },
            {
              label: 'Segment 2 (गिन्नी का सोना, पृ. 99 अंत) — Gandhiji’s Way: Gold Added to Copper',
              hindiOriginal: PASSAGE_2,
              englishText: `A few people say Gandhiji was a “practical idealist.” He recognized practicality. He knew its worth. That is why he could put his extraordinary ideals into practice. Otherwise he would have kept floating in thin air. The country would not have followed behind him.
Yes, yet Gandhiji never allowed ideals to descend to the level of practicality. Rather, he raised practicality up to the level of ideals. He mixed not copper into gold, but gold into copper, thereby raising its value.
That is why gold alone kept coming to the forefront every time.`,
            },
            {
              label: 'Segment 3 (गिन्नी का सोना, पृ. 100 प्रारंभ) — Shrewd Pragmatists vs Idealists & Eternal Values',
              hindiOriginal: PASSAGE_3,
              englishText: `Pragmatic calculators always stay alert. They take a step only after calculating profit and loss. They succeed in life and even move ahead of others, yet do they rise upward. Rising oneself and carrying others upward along with oneself—that alone is what truly matters. This work has always been done by idealistic people alone. If society possesses anything like eternal values, it is solely what idealistic people have given it. Calculating pragmatists have only brought society down.`,
            },
            {
              label: 'Segment 4 (झेन की देन, पृ. 100 मध्य) — Mental Illness in Japan & The Engine of “Speed”',
              hindiOriginal: PASSAGE_4,
              englishText: `In Japan I asked a friend of mine, “Which illnesses afflict the people here the most?”
“Mental,” he replied, “eighty percent of the people here are mentally ill.”
“What is the reason for this?”
He began saying, “The pace of our life has increased. Nobody walks here; instead everyone runs. Nobody speaks; everyone babbles. Whenever we are left alone, we keep muttering incessantly to ourselves. …We began competing with America. We began trying to finish in a single day work that used to take an entire month. As it is, the mind’s speed always remains fast. When fitted with a ‘speed’ engine, it begins racing a thousand times faster. Then a moment arrives when the brain’s tension builds up and the entire engine breaks down. …This is the very reason mental ailments have increased here…”`,
            },
            {
              label: 'Segment 5 (झेन की देन, पृ. 100 अंत) — Cha-no-yu Tea Ceremony, Leaf-Hut & Dignified Chajin',
              hindiOriginal: PASSAGE_5,
              englishText: `In the evening he took me to a “Tea Ceremony.” This is a method of drinking tea. In Japanese it is called Cha-no-yu.
It was a six-storey building on whose roof stood a lovely leaf-hut with sliding shoji walls and a floor of tatami (mats). Outside there was a roughly shaped earthen vessel. Water was filled inside it. We washed our hands and feet with this water. We wiped them with a towel and went inside. Inside sat the “Chajin.” Seeing us, he stood up. Bending at the waist, he greeted us with a bow. Saying “Do...zho...” (Please come in, make yourself comfortable), he welcomed us. He showed us our seating places. He lit a charcoal brazier. He placed a teapot upon it. Going into the adjoining room, he brought out a few vessels. He wiped the vessels clean with a towel. He performed every action in so dignified a manner that from every posture of his it seemed as though the notes of Raga Jaijaivanti were resonating. The atmosphere there was so serene that even the simmering bubbling of water in the teapot could be heard.`,
            },
            {
              label: 'Segment 6 (झेन की देन, पृ. 101 संपूर्ण) — Three Friends, Ninety Minutes of Sipping & Eternal Now',
              hindiOriginal: PASSAGE_6,
              englishText: `The tea became ready. He poured it into cups. Then those cups were placed before us. There were only the three of us friends there. In this ritual, peace is the main thing. Therefore more than three people are not granted entry there. There were no more than two sips of tea in each cup. Pressing the cup to our lips, we kept drinking the tea drop by drop. For nearly an hour and a half this sequence of sipping went on.
For the first ten or fifteen minutes I felt perplexed. Then I noticed the mind’s speed gradually slowing down. In a short while it stopped completely too. I felt as though I were living in eternity. To such an extent that I began to hear even the silence.
Usually we either remain entangled in bittersweet memories of bygone days or keep seeing colourful dreams of the future. We live either in the past or in the future. In reality, both periods of time are illusions. One has gone away; the other has not arrived. Only the present moment before us is the truth. One ought to live in it alone. While drinking tea that day, both past and future vanished from my mind. Only the present moment stood before me. And it was as vast as eternity.
What living truly means became clear to me that day.
What a great gift of the Zen tradition the Japanese have received!`,
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
          title: 'NCERT ‘शब्दार्थ और टिप्पणियाँ’ (सभी 28 शब्द) एवं ‘लेखक परिचय / पाठ प्रवेश’ शब्दावली',
          intro:
            'ऊपर गद्यांशों में प्रयुक्त 101 Inline शब्दों के अतिरिक्त NCERT की बहु-शब्दीय एवं मानक ‘शब्दार्थ और टिप्पणियाँ’ (पृ. 105–106) तथा ‘लेखक परिचय’ व ‘पाठ प्रवेश’ (पृ. 97–98) की प्रमुख शब्दावली।',
          extraWords: [
            {
              word: 'शुद्ध सोना',
              hindiMeaning: '24 कैरेट का (बिना मिलावट का) सोना — पाठ में शुद्ध, निःस्वार्थ आदर्श का प्रतीक',
              englishMeaning: '24-carat pure (unadulterated) gold',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 105)',
              exampleSentence: 'शुद्ध सोना कोमल होता है, ठीक वैसे ही शुद्ध आदर्श बिना किसी स्वार्थ-मिलावट के होते हैं।',
            },
            {
              word: 'गिन्नी का सोना',
              hindiMeaning: '22 कैरेट (सोने में ताँबा मिला हुआ) का सोना जिससे गहने बनाए जाते हैं',
              englishMeaning: '22-carat gold alloyed with copper used for jewellery',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 105)',
              exampleSentence: 'थोड़ा ताँबा मिलने से गिन्नी का सोना मज़बूत और चमकदार हो जाता है।',
            },
            {
              word: 'प्रैक्टिकल आइडियालिस्ट',
              hindiMeaning: 'व्यावहारिक आदर्श (आदर्श में व्यावहारिकता का पुट देने वाला व्यक्ति)',
              englishMeaning: 'Practical idealist',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 105) — अंग्रेज़ी से आगत पद',
            },
            {
              word: 'सूझ-बूझ',
              hindiMeaning: 'काम करने की समझ, विवेक व चतुराई (मूल पाठ पृ. 99 में ‘सूझबूझ’ रूप में प्रयुक्त)',
              englishMeaning: 'Practical wisdom / shrewd discernment',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 105)',
            },
            {
              word: 'के स्तर',
              hindiMeaning: 'के बराबर, के दर्जे या श्रेणी तक',
              englishMeaning: 'At par with / to the level of',
              grammarNote: 'NCERT शब्दार्थ और टिप्पणियाँ (पृ. 105)',
              exampleSentence: 'गांधीजी व्यावहारिकता को आदर्शों के स्तर पर चढ़ाते थे।',
            },
            {
              word: 'परिप्रेक्ष्य',
              hindiMeaning: 'संदर्भ, दृष्टिकोण, परिदृश्य (‘लेखक परिचय’ पृ. 97)',
              englishMeaning: 'Perspective / context',
              grammarNote: 'तत्सम पुल्लिंग संज्ञा (pariprekshya)',
            },
            {
              word: 'अनुभवजन्य',
              hindiMeaning: 'व्यक्तिगत अनुभवों से उत्पन्न या उपजा हुआ (‘लेखक परिचय’ पृ. 97)',
              englishMeaning: 'Experiential / born of lived experience',
              grammarNote: 'तत्सम विशेषण (अनुभव + जन्य)',
            },
            {
              word: 'मौलिकता',
              hindiMeaning: 'नवीनता, अपने चिंतन की स्वतंत्र विशेषता (‘लेखक परिचय’ पृ. 97)',
              englishMeaning: 'Originality',
              grammarNote: 'भाववाचक संज्ञा (मूल + इक + ता)',
            },
            {
              word: 'चेष्टा',
              hindiMeaning: 'प्रयास, प्रयत्न, कोशिश (‘लेखक परिचय’ पृ. 97)',
              englishMeaning: 'Effort / earnest endeavour',
              grammarNote: 'तत्सम स्त्रीलिंग संज्ञा (cheshtaa)',
            },
            {
              word: 'शीर्षस्थ',
              hindiMeaning: 'सर्वोच्च स्थान पर स्थित, अग्रणी (‘लेखक परिचय’ पृ. 97)',
              englishMeaning: 'Topmost / foremost / eminent',
              grammarNote: 'तत्सम विशेषण (शीर्ष + स्थ)',
            },
            {
              word: 'सूक्ति कथाएँ',
              hindiMeaning: 'नीति और गहरे जीवन-सत्य पर आधारित संक्षिप्त कथाएँ (‘पाठ प्रवेश’ पृ. 98)',
              englishMeaning: 'Aphoristic parables / maxims',
              grammarNote: 'स्त्रीलिंग बहुवचन संज्ञा (सूक्ति = सु + उक्ति)',
            },
            {
              word: 'जातक कथाएँ',
              hindiMeaning: 'भगवान बुद्ध के पूर्व जन्मों से संबंधित बोधकथाएँ (‘पाठ प्रवेश’ पृ. 98)',
              englishMeaning: 'Jataka tales (Buddhist birth stories)',
              grammarNote: 'बौद्ध साहित्य शब्दावली',
            },
            {
              word: 'आगम कथाएँ',
              hindiMeaning: 'प्राचीन जैन व शास्त्रीय परंपरा की उपदेशात्मक कथाएँ (‘पाठ प्रवेश’ पृ. 98)',
              englishMeaning: 'Canonical / Agama parables',
              grammarNote: 'शास्त्रीय साहित्य शब्दावली',
            },
            {
              word: 'पढ़ने-गुनने',
              hindiMeaning: 'केवल पढ़ने और सतही ढंग से विचार करने के लिए (‘पाठ प्रवेश’ पृ. 98)',
              englishMeaning: 'Merely reading and pondering casually',
              grammarNote: 'क्रियार्थक युग्म पद',
            },
            {
              word: 'जागरूक',
              hindiMeaning: 'चेतन, सजग, अपने कर्तव्य के प्रति सावधान (‘पाठ प्रवेश’ पृ. 98)',
              englishMeaning: 'Aware / alert / conscientious',
              grammarNote: 'तत्सम विशेषण (jaagarook)',
            },
            {
              word: 'व्यस्ततम',
              hindiMeaning: 'सबसे अधिक व्यस्त, अत्यंत भागदौड़ से भरी (‘पाठ प्रवेश’ पृ. 98)',
              englishMeaning: 'Busiest / most hectic',
              grammarNote: 'उत्तमावस्था विशेषण (व्यस्त + तम)',
            },
            {
              word: 'दिनचर्या',
              hindiMeaning: 'प्रतिदिन की कामकाज की नियमावली या क्रम (‘पाठ प्रवेश’ पृ. 98)',
              englishMeaning: 'Daily routine',
              grammarNote: 'तत्पुरुष समास (दिन की चर्या)',
            },
          ],
        },
      ],
    },
    {
      id: 'muhavre',
      title: '6. पाठगत व संगत मुहावरे व वाक्य-प्रयोग (CBSE Exam Drills)',
      blocks: [
        {
          type: 'muhavre-list',
          title: '‘पतझर में टूटी पत्तियाँ’ से जुड़े प्रमुख मुहावरे व लाक्षणिक प्रयोग',
          note: 'समीक्षात्मक उत्तरों, आशय-स्पष्टीकरण तथा मुहावरा-प्रयोग प्रश्नों में उपयोगी 8 सटीक प्रयोग।',
          items: [
            {
              idiom: 'हवा में उड़ना',
              hindiMeaning: 'व्यावहारिक सच्चाई से कटकर कोरी कल्पनाओं में खोए रहना',
              englishMeaning: 'To have one’s head in the clouds / remain detached from ground reality',
              examSentence:
                'यदि गांधीजी व्यावहारिकता की कीमत न पहचानते, तो उनके आदर्श केवल हवा में ही उड़ते रहते।',
              sourceLine: 'गद्यांश 2 (‘गिन्नी का सोना’): “वरना हवा में ही उड़ते रहते। देश उनके पीछे न जाता।”',
            },
            {
              idiom: 'लाभ-हानि का हिसाब लगाना',
              hindiMeaning: 'हर काम में केवल निजी स्वार्थ और नफ़े-नुकसान की गणना करना',
              englishMeaning: 'To calculate personal profit and loss before every step',
              examSentence:
                'व्यवहारवादी लोग सदैव लाभ-हानि का हिसाब लगाकर ही कोई कदम उठाते हैं।',
              sourceLine: 'गद्यांश 3 (‘गिन्नी का सोना’): “लाभ-हानि का हिसाब लगाकर ही कदम उठाते हैं।”',
            },
            {
              idiom: 'पीछे हटना / पीछे रह जाना',
              hindiMeaning: 'प्राथमिकता खोकर गौण हो जाना या प्रभाव कम हो जाना',
              englishMeaning: 'To recede / fall into the background',
              examSentence:
                'व्यावहारिकता का बखान बढ़ते ही ‘प्रैक्टिकल आइडियालिस्टों’ के जीवन से आदर्श धीरे-धीरे पीछे हटने लगते हैं।',
              sourceLine: 'गद्यांश 1 (‘गिन्नी का सोना’): “जीवन से आदर्श धीरे-धीरे पीछे हटने लगते हैं...”',
            },
            {
              idiom: 'ऊपर चढ़ाना / स्तर पर लाना',
              hindiMeaning: 'किसी साधारण आचरण को नैतिक ऊँचाई प्रदान कर श्रेष्ठ बनाना',
              englishMeaning: 'To elevate ordinary conduct to high moral standards',
              examSentence:
                'गांधीजी कभी आदर्शों को नीचे नहीं गिराते थे, बल्कि व्यावहारिकता को आदर्शों के स्तर पर चढ़ाते थे।',
              sourceLine: 'गद्यांश 2 (‘गिन्नी का सोना’): “व्यावहारिकता को आदर्शों के स्तर पर चढ़ाते थे।”',
            },
            {
              idiom: 'इंजन टूट जाना',
              hindiMeaning: 'अत्यधिक मानसिक दबाव व भागदौड़ से मानसिक स्वास्थ्य का ध्वस्त हो जाना',
              englishMeaning: 'To suffer a complete mental breakdown from overload',
              examSentence:
                'प्रतिस्पर्धा की अंधी दौड़ में दिमाग पर ‘स्पीड’ का इंजन लगाने से एक दिन तनाव बढ़कर पूरा इंजन टूट जाता है।',
              sourceLine: 'गद्यांश 4 (‘झेन की देन’): “जब दिमाग का तनाव बढ़ जाता है और पूरा इंजन टूट जाता है।”',
            },
            {
              idiom: 'सन्नाटा सुनाई देना',
              hindiMeaning: 'परम एकाग्रता और निस्तब्धता में गहन मौन का अनुभव होना',
              englishMeaning: 'To hear even the silence in deep meditative calm',
              examSentence:
                'टी-सेरेमनी के शांत वातावरण में लेखक के मन की गति थम गई और उन्हें सन्नाटा भी सुनाई देने लगा।',
              sourceLine: 'गद्यांश 6 (‘झेन की देन’): “यहाँ तक कि सन्नाटा भी मुझे सुनाई देने लगा।”',
            },
            {
              idiom: 'खट्टी-मीठी यादों में उलझना',
              hindiMeaning: 'अतीत की सुखद-दुखद घटनाओं में मन को भटकाए रखना',
              englishMeaning: 'To remain entangled in bittersweet memories of the past',
              examSentence:
                'वर्तमान क्षण का आनंद लेने के बजाय हम अकसर गुज़रे दिनों की खट्टी-मीठी यादों में उलझे रहते हैं।',
              sourceLine: 'गद्यांश 6 (‘झेन की देन’): “गुज़रे हुए दिनों की खट्टी-मीठी यादों में उलझे रहते हैं...”',
            },
            {
              idiom: 'रंगीन सपने देखना',
              hindiMeaning: 'भविष्य की आकर्षक और काल्पनिक योजनाओं में खोए रहना',
              englishMeaning: 'To weave colourful daydreams about the future',
              examSentence:
                'भविष्य के रंगीन सपने देखते रहने से मनुष्य अपने सामने खड़े सत्य वर्तमान क्षण को खो देता है।',
              sourceLine: 'गद्यांश 6 (‘झेन की देन’): “या भविष्य के रंगीन सपने देखते रहते हैं।”',
            },
          ],
        },
      ],
    },
    {
      id: 'samas',
      title: '7. संपूर्ण NCERT ‘भाषा अध्ययन’ — समास, संज्ञा, अनेकार्थी शब्द व वाक्य रूपांतरण',
      blocks: [
        {
          type: 'samas-list',
          title: 'NCERT ‘भाषा अध्ययन’ (पृ. 103, प्रश्न 2) — सभी द्वंद्व समास + पाठगत प्रमुख समास',
          note: 'NCERT में ‘लाभ-हानि’ उदाहरण सहित पूछे गए सभी सात द्वंद्व समास (क से छ तक) तथा पाठ के अन्य प्रमुख समास-विग्रह:',
          items: [
            {
              samastPad: 'लाभ-हानि',
              vigrah: 'लाभ और हानि (या लाभ अथवा हानि)',
              samasType: 'द्वंद्व समास',
              englishMeaning: 'Profit and loss — NCERT उदाहरण (पृ. 103); दोनों पद प्रधान।',
            },
            {
              samastPad: 'माता-पिता',
              vigrah: 'माता और पिता',
              samasType: 'द्वंद्व समास',
              englishMeaning: 'Mother and father — NCERT ‘भाषा अध्ययन’ प्रश्न 2(क)।',
            },
            {
              samastPad: 'पाप-पुण्य',
              vigrah: 'पाप और पुण्य (या पाप या पुण्य)',
              samasType: 'द्वंद्व समास',
              englishMeaning: 'Sin and virtue — NCERT ‘भाषा अध्ययन’ प्रश्न 2(ख)।',
            },
            {
              samastPad: 'सुख-दुख',
              vigrah: 'सुख और दुख',
              samasType: 'द्वंद्व समास',
              englishMeaning: 'Joy and sorrow — NCERT ‘भाषा अध्ययन’ प्रश्न 2(ग)।',
            },
            {
              samastPad: 'रात-दिन',
              vigrah: 'रात और दिन',
              samasType: 'द्वंद्व समास',
              englishMeaning: 'Night and day — NCERT ‘भाषा अध्ययन’ प्रश्न 2(घ)।',
            },
            {
              samastPad: 'अन्न-जल',
              vigrah: 'अन्न और जल',
              samasType: 'द्वंद्व समास',
              englishMeaning: 'Food and water — NCERT ‘भाषा अध्ययन’ प्रश्न 2(ङ)।',
            },
            {
              samastPad: 'घर-बाहर',
              vigrah: 'घर और बाहर',
              samasType: 'द्वंद्व समास',
              englishMeaning: 'Home and outside — NCERT ‘भाषा अध्ययन’ प्रश्न 2(च)।',
            },
            {
              samastPad: 'देश-विदेश',
              vigrah: 'देश और विदेश',
              samasType: 'द्वंद्व समास',
              englishMeaning: 'Homeland and abroad — NCERT ‘भाषा अध्ययन’ प्रश्न 2(छ)।',
            },
            {
              samastPad: 'पर्णकुटी',
              vigrah: 'पर्ण (पत्तों) से बनी कुटी',
              samasType: 'तत्पुरुष समास (मध्यमपदलोपी)',
              englishMeaning: 'Leaf hut — टी-सेरेमनी वाली कुटिया (NCERT शब्दार्थ)।',
            },
            {
              samastPad: 'अनंतकाल',
              vigrah: 'अनंत (अंत से रहित) है जो काल',
              samasType: 'कर्मधारय समास',
              englishMeaning: 'Endless time / eternity — विशेषण-विशेष्य संबंध।',
              examTrap: 'यदि ‘न अंत जिसका’ विग्रह कर केवल ‘अनंत’ पूछें तो नञ् तत्पुरुष या बहुव्रीहि होता है; ‘अनंतकाल’ में कर्मधारय मुख्य है।',
            },
            {
              samastPad: 'भूतकाल',
              vigrah: 'भूत (बीता हुआ) है जो काल',
              samasType: 'कर्मधारय समास',
              englishMeaning: 'Past time — विशेषण-विशेष्य संबंध।',
            },
            {
              samastPad: 'जन-जीवन',
              vigrah: 'जन का जीवन',
              samasType: 'संबंध तत्पुरुष समास',
              englishMeaning: 'Life of the common people — ‘लेखक परिचय’ (पृ. 97) से।',
            },
          ],
        },
        {
          type: 'table',
          caption: 'NCERT भाषा अध्ययन — प्रश्न I.1 (पृ. 103): शब्दों का वाक्य में प्रयोग',
          headers: ['शब्द', 'अर्थ व व्याकरणिक कोटि', 'सटीक मानक वाक्य प्रयोग'],
          rows: [
            ['व्यावहारिकता', 'समय-अवसर के अनुसार कार्य करने की सूझ (भाववाचक संज्ञा)', 'गांधीजी ने कभी अपने आदर्शों को **व्यावहारिकता** के स्तर पर उतरने नहीं दिया।'],
            ['आदर्श', 'उच्च नैतिक सिद्धांत (संज्ञा/विशेषण)', 'महापुरुषों के **आदर्श** समाज को सदा सही दिशा दिखाते रहते हैं।'],
            ['सूझबूझ', 'काम करने की समझ व विवेक (स्त्रीलिंग संज्ञा)', 'संकट के समय धैर्य और **सूझबूझ** से काम लेने पर हर समस्या हल हो जाती है।'],
            ['विलक्षण', 'असाधारण, अनोखा (विशेषण)', 'विवेकानंद की **विलक्षण** प्रतिभा ने समूचे विश्व को भारत की ओर आकर्षित किया।'],
            ['शाश्वत', 'जो सदैव एक-सा रहे, अमर (विशेषण)', 'सत्य, प्रेम और करुणा जीवन के **शाश्वत** मूल्य हैं।'],
          ],
        },
        {
          type: 'table',
          caption: 'NCERT भाषा अध्ययन — प्रश्न I.3 (पृ. 103–104): विशेषण शब्दों से भाववाचक संज्ञा बनाइए',
          headers: ['क्रमांक व विशेषण शब्द', 'प्रत्यय / निर्माण', 'भाववाचक संज्ञा (उत्तर)'],
          rows: [
            ['(क) सफल', 'सफल + ता', '**सफलता**'],
            ['(ख) विलक्षण', 'विलक्षण + ता', '**विलक्षणता**'],
            ['(ग) व्यावहारिक', 'व्यावहारिक + ता', '**व्यावहारिकता**'],
            ['(घ) सजग', 'सजग + ता', '**सजगता**'],
            ['(ङ) आदर्शवादी', 'आदर्शवादी + ता', '**आदर्शवादिता**'],
            ['(च) शुद्ध', 'शुद्ध + ता', '**शुद्धता**'],
          ],
        },
        {
          type: 'table',
          caption: 'NCERT भाषा अध्ययन — प्रश्न I.4 (पृ. 104): अनेकार्थी शब्दों के भिन्न-भिन्न अर्थ व वाक्य-प्रयोग',
          headers: ['अनेकार्थी शब्द', 'अर्थ 1 व वाक्य प्रयोग', 'अर्थ 2 व वाक्य प्रयोग'],
          rows: [
            [
              '**सोना** (NCERT उदाहरण)',
              '**स्वर्ण (धातु):** शुद्ध **सोना** अलग है।',
              '**सोना (क्रिया):** बहुत रात हो गई अब हमें **सोना** चाहिए।',
            ],
            [
              '**उत्तर**',
              '**जवाब (Response):** छात्र ने गुरुजी के प्रश्न का सटीक **उत्तर** दिया।',
              '**दिशा / बाद का (North / Later):** हिमालय पर्वत भारत की **उत्तर** दिशा में स्थित है।',
            ],
            [
              '**कर**',
              '**हाथ (Hand):** उसने दोनों **कर** जोड़कर अतिथि का स्वागत किया।',
              '**टैक्स / करना क्रिया (Tax / Action):** प्रत्येक नागरिक को ईमानदारी से आय-**कर** चुकाना चाहिए।',
            ],
            [
              '**अंक**',
              '**संख्या / नंबर (Number / Marks):** परीक्षा में मोहन को गणित में शत-प्रतिशत **अंक** मिले।',
              '**गोद / नाटक का भाग (Lap / Act):** माँ ने रोते हुए शिशु को अपने **अंक** (गोद) में भर लिया।',
            ],
            [
              '**नग**',
              '**पर्वत (Mountain):** हिमालय भारत का सबसे ऊँचा **नग** (पर्वत) है।',
              '**रत्न / संख्या (Gem / Piece):** अँगूठी में जड़ा नीला **नग** बहुत चमक रहा था।',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'NCERT भाषा अध्ययन — प्रश्न II.5 (पृ. 104): सरल वाक्यों को संयुक्त वाक्य में बदलिए',
          headers: ['क्रमांक', 'NCERT सरल वाक्य युग्म', 'रूपांतरित संयुक्त वाक्य (योजक सहित)'],
          rows: [
            [
              '(क)',
              '1. अँगीठी सुलगायी। 2. उस पर चायदानी रखी।',
              'उसने अँगीठी सुलगायी **और** उस पर चायदानी रखी।',
            ],
            [
              '(ख)',
              '1. चाय तैयार हुई। 2. उसने वह प्यालों में भरी।',
              'चाय तैयार हुई **और** उसने वह प्यालों में भरी।',
            ],
            [
              '(ग)',
              '1. बगल के कमरे से जाकर कुछ बरतन ले आया। 2. तौलिये से बरतन साफ़ किए।',
              'वह बगल के कमरे से जाकर कुछ बरतन ले आया **तथा** उसने तौलिये से बरतन साफ़ किए।',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'NCERT भाषा अध्ययन — प्रश्न II.6 (पृ. 104): सरल वाक्यों से मिश्र वाक्य बनाइए',
          headers: ['क्रमांक', 'NCERT सरल वाक्य युग्म', 'रूपांतरित मिश्र वाक्य (आश्रित उपवाक्य सहित)'],
          rows: [
            [
              '(क)',
              '1. चाय पीने की यह एक विधि है। 2. जापानी में उसे चा-नो-यू कहते हैं।',
              'चाय पीने की यह एक ऐसी विधि है **जिसे** जापानी में चा-नो-यू कहते हैं।',
            ],
            [
              '(ख)',
              '1. बाहर बेढब-सा एक मिट्टी का बरतन था। 2. उसमें पानी भरा हुआ था।',
              'बाहर बेढब-सा एक मिट्टी का बरतन था **जिसमें** पानी भरा हुआ था।',
            ],
            [
              '(ग)',
              '1. चाय तैयार हुई। 2. उसने वह प्यालों में भरी। 3. फिर वे प्याले हमारे सामने रख दिए।',
              '**जब** चाय तैयार हुई, **तब** उसने वह प्यालों में भरी और फिर वे प्याले हमारे सामने रख दिए।',
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
            'मौखिक प्रश्न (भाग I: गिन्नी का सोना, प्रश्न 1–3): (1) शुद्ध सोना और गिन्नी का सोना अलग क्यों होता है? (2) प्रैक्टिकल आइडियालिस्ट किसे कहते हैं? (3) पाठ के संदर्भ में शुद्ध आदर्श क्या है?',
          answer:
            '(1) शुद्ध सोना 24 कैरेट का और पूर्णतः मिलावटरहित होता है, जबकि गिन्नी का सोना 22 कैरेट का होता है जिसमें थोड़ा-सा ताँबा मिलाया जाता है; ताँबे के कारण गिन्नी का सोना अधिक चमकदार और मज़बूत होता है। (2) जो लोग शुद्ध आदर्शों में व्यावहारिकता का थोड़ा-सा ताँबा मिलाकर अपने आदर्शों को व्यवहार में चलाकर दिखाते हैं, उन्हें ‘प्रैक्टिकल आइडियालिस्ट’ कहते हैं। (3) पाठ के संदर्भ में वे मानवीय व नैतिक आदर्श ‘शुद्ध आदर्श’ हैं जिनमें निजी स्वार्थ या लाभ-हानि की व्यावहारिक मिलावट न हो—अर्थात् स्वयं ऊपर उठकर दूसरों को भी ऊपर ले चलने वाले शाश्वत मूल्य।',
          markingTip:
            'English Helper: Oral I (Q1–Q3): 24k pure vs 22k copper-mixed guinea gold; practical idealists blend pragmatism into ideals; pure ideals carry zero selfish compromise.',
          marks: 3,
          tag: 'NCERT प्रश्न-अभ्यास',
        },
        {
          type: 'qa',
          question:
            'मौखिक प्रश्न (भाग II: झेन की देन, प्रश्न 4–6): (4) लेखक ने जापानियों के दिमाग में ‘स्पीड’ का इंजन लगने की बात क्यों कही है? (5) जापानी में चाय पीने की विधि को क्या कहते हैं? (6) जापान में जहाँ चाय पिलाई जाती है, उस स्थान की क्या विशेषता है?',
          answer:
            '(4) अमेरिका से प्रतिस्पर्धा के कारण जापानी लोग एक महीने में होने वाला काम एक दिन में ही निपटाने का प्रयास करते हैं; पहले से ही तेज़ दिमाग पर अधिक रफ़्तार का दबाव पड़ने के कारण लेखक ने कहा है कि उनके दिमाग में ‘स्पीड’ का इंजन लग गया है। (5) जापानी में चाय पीने की इस विशेष विधि (‘टी-सेरेमनी’) को ‘चा-नो-यू’ कहते हैं। (6) जापान में जहाँ चाय पिलाई जाती है, वह स्थान छह मंज़िली इमारत की छत पर बनी एक सुंदर पर्णकुटी है, जिसकी दीवारें चित्रित दफ़्ती की और ज़मीन तातामी (चटाई) की होती है तथा वहाँ अत्यंत शांतिपूर्ण वातावरण रहता है।',
          markingTip:
            'English Helper: Oral II (Q4–Q6): US rivalry pushing a month’s work into one day = “speed” engine; Cha-no-yu; serene rooftop leaf-hut with shoji partitions and tatami mats.',
          marks: 3,
          tag: 'NCERT प्रश्न-अभ्यास',
        },
        {
          type: 'qa',
          question:
            'लिखित (क) प्रश्न 1 व 2 (25–30 शब्दों में): (1) शुद्ध आदर्श की तुलना सोने से और व्यावहारिकता की तुलना ताँबे से क्यों की गई है? (2) चाजीन ने कौन-सी क्रियाएँ गरिमापूर्ण ढंग से पूरी कीं?',
          answer:
            '(1) शुद्ध सोना 24 कैरेट का व मिलावटरहित होता है, ठीक वैसे ही शुद्ध आदर्श भी स्वार्थहीन व सर्वोत्तम होते हैं। इसके विपरीत ताँबा कम मूल्य का होते हुए भी सोने को मज़बूती व चमक देता है; उसी प्रकार व्यावहारिकता आदर्शों को व्यवहार में लागू करने में सहायक तो होती है, किंतु अधिकता होने पर आदर्शों का मूल्य घटा देती है। (2) चाजीन ने अतिथियों को देख खड़े होकर कमर झुकाकर प्रणाम किया, ‘दो...झो...’ कहकर स्वागत किया, बैठने की जगह दिखाई, अँगीठी सुलगाकर उस पर चायदानी रखी, बगल के कमरे से बरतन लाकर तौलिए से पोंछे और अत्यंत सलीके से चाय बनाकर प्यालों में परोसी—ये सभी क्रियाएँ उसने जयजयवंती राग की-सी गरिमा के साथ पूरी कीं।',
          markingTip:
            'English Helper: Written (क) Q1 & Q2: Gold = pure timeless ideals, copper = practical strength that dilutes purity if overused; Chajin bowed, greeted (“Do...zho...”), kindled brazier, wiped vessels, and served tea with poised grace.',
          marks: 4,
          tag: 'NCERT प्रश्न-अभ्यास',
        },
        {
          type: 'qa',
          question:
            'लिखित (क) प्रश्न 3 व 4 (25–30 शब्दों में): (3) ‘टी-सेरेमनी’ में कितने आदमियों को प्रवेश दिया जाता था और क्यों? (4) चाय पीने के बाद लेखक ने स्वयं में क्या परिवर्तन महसूस किया?',
          answer:
            '(3) ‘टी-सेरेमनी’ में एक बार में तीन से अधिक आदमियों को प्रवेश नहीं दिया जाता था, क्योंकि इस विधि में मानसिक शांति मुख्य बात होती है और अधिक व्यक्तियों की उपस्थिति या कोलाहल से शांति भंग हो सकती है। (4) डेढ़ घंटे तक चाय की दो घूँट चुस्कियाँ लेने के बाद लेखक के दिमाग की तेज़ रफ़्तार पहले धीमी और फिर बिलकुल बंद हो गई। उनके मन से भूत और भविष्य दोनों काल उड़ गए, उन्हें अनंतकाल जितना विस्तृत वर्तमान अनुभव हुआ और सन्नाटा भी सुनाई देने लगा।',
          markingTip:
            'English Helper: Written (क) Q3 & Q4: Maximum 3 guests so silence stays undisturbed; slow sipping stilled racing thoughts, erasing past/future into an eternal present.',
          marks: 4,
          tag: 'NCERT प्रश्न-अभ्यास',
        },
        {
          type: 'qa',
          question:
            'लिखित (ख) प्रश्न 1 व 2 (50–60 शब्दों में): (1) गांधीजी में नेतृत्व की अद्भुत क्षमता थी; उदाहरण सहित इस बात की पुष्टि कीजिए। (2) आपके विचार से कौन-से ऐसे मूल्य हैं जो शाश्वत हैं? वर्तमान समय में इन मूल्यों की प्रासंगिकता स्पष्ट कीजिए।',
          answer:
            '(1) गांधीजी में अद्भुत नेतृत्व क्षमता थी क्योंकि वे केवल हवाई आदर्शवादी नहीं थे; वे देश की जमीनी वास्तविकता और व्यावहारिकता को बखूबी पहचानते थे। सत्य, अहिंसा, सत्याग्रह, असहयोग और दांडी मार्च जैसे आंदोलनों में उन्होंने जनसामान्य को जोड़ा। उन्होंने कभी आदर्शों से समझौता नहीं किया बल्कि व्यावहारिक राजनीति को भी नैतिक ऊँचाई दी, जिससे करोड़ों देशवासी निःसंकोच उनके पीछे चल पड़े। (2) सत्य, अहिंसा, करुणा, ईमानदारी, परोपकार, सहिष्णुता और न्याय जैसे मूल्य शाश्वत हैं क्योंकि समय बदलने पर भी इनकी सार्थकता कम नहीं होती। आज के स्वार्थ, हिंसा, भ्रष्टाचार और डिजिटल तनाव के युग में ये शाश्वत मूल्य ही समाज में विश्वास, शांति और मानवीयता को जीवित रख सकते हैं।',
          markingTip:
            'English Helper: Written (ख) Q1 & Q2 (50–60 words): Gandhiji’s grounded leadership uniting the nation through Satyagraha/Dandi March without lowering ideals; eternal values (truth, non-violence, compassion, honesty) essential against modern greed and strife.',
          marks: 6,
          tag: 'NCERT प्रश्न-अभ्यास',
        },
        {
          type: 'qa',
          question:
            'लिखित (ख) प्रश्न 3 व 4 (50–60 शब्दों में): (3) अपने जीवन की किसी ऐसी घटना का उल्लेख कीजिए जब (1) शुद्ध आदर्श से आपको हानि-लाभ हुआ हो, (2) शुद्ध आदर्श में व्यावहारिकता का पुट देने से लाभ हुआ हो। (4) ‘शुद्ध सोने में ताँबे की मिलावट या ताँबे में सोना’, गांधीजी के आदर्श और व्यवहार के संदर्भ में यह बात किस तरह झलकती है?',
          answer:
            '(3) (1) **शुद्ध आदर्श का अनुभव:** परीक्षा या प्रतियोगिता में किसी मित्र द्वारा नकल की सहायता माँगने पर मैंने सत्य का पक्ष लेते हुए मना कर दिया; यद्यपि मित्र कुछ दिनों के लिए रूठ गया (तात्कालिक हानि), पर आत्म-संतोष और गुरुजनों का विश्वास प्राप्त हुआ (दीर्घकालिक लाभ)। (2) **व्यावहारिकता का पुट:** कक्षा की स्वच्छता मुहिम में केवल उपदेश देने से छात्र नहीं जुड़े, किंतु जब मैंने व्यवहारिक तरीका अपनाते हुए कार्य को छोटे-छोटे खेल और समूह पुरस्कारों से जोड़ा, तो सभी ने उत्साह से भाग लिया। (4) आम ‘प्रैक्टिकल आइडियालिस्ट’ आदर्श रूपी सोने में व्यावहारिकता का ताँबा मिलाते-मिलाते आदर्श ही खो देते हैं; इसके विपरीत गांधीजी ने व्यावहारिकता रूपी ताँबे में आदर्श रूपी सोना मिलाया—अर्थात् राजनीति और जन-संगठन जैसे व्यावहारिक क्षेत्रों में भी सत्य व अहिंसा को सर्वोपरि रखा, जिससे सदैव आदर्श ही आगे रहे।',
          markingTip:
            'English Helper: Written (ख) Q3 & Q4: Personal reflections on uncompromising honesty vs practical tact; Gandhiji infused gold (truth/ethics) into copper (politics), elevating practical action.',
          marks: 6,
          tag: 'NCERT प्रश्न-अभ्यास',
        },
        {
          type: 'qa',
          question:
            'लिखित (ख) प्रश्न 5 (50–60 शब्दों में): ‘गिरगिट’ कहानी में आपने समाज में व्याप्त अवसरानुसार अपने व्यवहार को पल-पल में बदल डालने की एक बानगी देखी। इस पाठ के अंश ‘गिन्नी का सोना’ के संदर्भ में स्पष्ट कीजिए कि ‘आदर्शवादिता’ और ‘व्यावहारिकता’ इनमें से जीवन में किसका महत्त्व है?',
          answer:
            'चेखव की कहानी ‘गिरगिट’ के ख्यूक्रिन व ओचुमेलॉव जैसे अवसरवादी लोग अपने स्वार्थ के अनुसार पल-पल रंग बदलते हैं—यह शुद्ध व्यवहारवादिता का निकृष्ट रूप है, जो समाज को नैतिक पतन की ओर ले जाता है। ‘गिन्नी का सोना’ के संदर्भ में जीवन में सर्वाधिक महत्त्व **आदर्शवादिता** का है, क्योंकि समाज के पास जो भी शाश्वत मूल्य हैं, वे आदर्शवादियों की ही देन हैं। तथापि कोरी आदर्शवादिता से समाज नहीं जुड़ पाता; अतः व्यावहारिकता का सीमित महत्त्व केवल इतना है कि गांधीजी की भाँति उसे आदर्शों के स्तर तक उठाकर मार्ग प्रशस्त किया जाए।',
          markingTip:
            'English Helper: Written (ख) Q5: Contrasts Girgit’s opportunistic chameleons with Ginni ka Sona—idealism is paramount as the creator of eternal values, while practicality matters only when subordinated to ideals.',
          marks: 4,
          tag: 'NCERT प्रश्न-अभ्यास',
        },
        {
          type: 'qa',
          question:
            'लिखित (ख) प्रश्न 6 व 7 (भाग II: झेन की देन, 50–60 शब्दों में): (6) लेखक के मित्र ने मानसिक रोग के क्या-क्या कारण बताए? आप इन कारणों से कहाँ तक सहमत हैं? (7) लेखक के अनुसार सत्य केवल वर्तमान है, उसी में जीना चाहिए। लेखक ने ऐसा क्यों कहा होगा?',
          answer:
            '(6) लेखक के मित्र ने जापान में 80% लोगों के मनोरुग्ण होने के मुख्य कारण बताए: जीवन की अत्यधिक रफ़्तार, अमेरिका से अंधी प्रतिस्पर्धा, एक महीने का काम एक दिन में निपटाने की होड़, चलते-बोलते रहने के बजाय दौड़ना व बकना, तथा अकेले में बड़बड़ाते रहना—जिससे दिमाग पर ‘स्पीड’ का इंजन लगकर तनाव से टूट जाता है। हम इन कारणों से पूर्णतः सहमत हैं क्योंकि आज मोबाइल, इंटरनेट और गलाकाट प्रतिस्पर्धा के युग में यही तनाव पूरे विश्व में देखा जा रहा है। (7) लेखक ने ऐसा इसलिए कहा क्योंकि मनुष्य या तो अतीत की खट्टी-मीठी यादों (भूतकाल) में उलझा रहता है या भविष्य के रंगीन सपनों (भविष्यकाल) की चिंता में घुलता है। भूत बीत चुका है और भविष्य अनिश्चित है; हमारे हाथ में केवल वर्तमान क्षण है, जिसमें कर्म और शांति दोनों संभव हैं।',
          markingTip:
            'English Helper: Written (ख) Q6 & Q7: Rivalry with America, frantic rushing, and mental overload cause 80% stress (still true today); past and future are unreal, only the present permits true living and action.',
          marks: 6,
          tag: 'NCERT प्रश्न-अभ्यास',
        },
        {
          type: 'qa',
          question:
            'लिखित (ग) आशय स्पष्ट कीजिए — (1) “समाज के पास अगर शाश्वत मूल्यों जैसा कुछ है तो वह आदर्शवादी लोगों का ही दिया हुआ है।” तथा (2) “जब व्यावहारिकता का बखान होने लगता है तब ‘प्रैक्टिकल आइडियालिस्टों’ के जीवन से आदर्श धीरे-धीरे पीछे हटने लगते हैं और उनकी व्यावहारिक सूझ-बूझ ही आगे आने लगती है।”',
          answer:
            '(1) **आशय:** जो व्यक्ति केवल अपना लाभ-हानि तौलता है, वह स्वयं तो धनी या सफल हो सकता है किंतु समाज का नैतिक उत्थान नहीं कर सकता। समाज को सत्य, त्याग, प्रेम, सेवा और अहिंसा जैसे स्थायी (शाश्वत) जीवन-मूल्य सदा उन आदर्शवादी महापुरुषों से मिले हैं जिन्होंने निज स्वार्थ से ऊपर उठकर सबकी भलाई के लिए कष्ट सहे। (2) **आशय:** जब समाज ‘व्यावहारिक आदर्शवादियों’ की सफलता पर मोहित होकर उनके आदर्श के बजाय उनकी दुनियादारी व चतुरता का गुणगान करने लगता है, तब वे भी प्रशंसा के लोभ में धीरे-धीरे अपने नैतिक सिद्धांतों से समझौता करने लगते हैं। अंततः उनके जीवन से आदर्श गौण हो जाते हैं और केवल स्वार्थपूर्ण व्यावहारिक सूझबूझ ही शेष रह जाती है।',
          markingTip:
            'English Helper: Explain-with-reference (ग) 1 & 2: Eternal human ethics owe everything to selfless idealists; applauding pragmatism over principle gradually crowds ideals out of a “practical idealist’s” conduct.',
          marks: 4,
          tag: 'पठित गद्यांश',
        },
        {
          type: 'qa',
          question:
            'लिखित (ग) आशय स्पष्ट कीजिए — (3) “हमारे जीवन की रफ़्तार बढ़ गई है। यहाँ कोई चलता नहीं बल्कि दौड़ता है। कोई बोलता नहीं, बकता है। हम जब अकेले पड़ते हैं तब अपने आपसे लगातार बड़बड़ाते रहते हैं।” तथा (4) “सभी क्रियाएँ इतनी गरिमापूर्ण ढंग से कीं कि उसकी हर भंगिमा से लगता था मानो जयजयवंती के सुर गूँज रहे हों।”',
          answer:
            '(3) **आशय:** इन पंक्तियों में आधुनिक औद्योगिक व प्रतिस्पर्धात्मक समाज की बेचैनी का सजीव चित्र है। मनुष्य अपनी सहज स्वाभाविक गति और संवाद खो चुका है; हर काम को जल्दी पूरा करने की होड़ में वह सहज चलने के बजाय भागता है, शांति से बात करने के बजाय निरर्थक बकता है और विश्राम के क्षणों में भी मन शांत न रहने से अकेले में स्वयं से बड़बड़ाता रहता है। (4) **आशय:** टी-सेरेमनी में चाय परोसने वाले चाजीन का प्रत्येक कार्य—झुककर प्रणाम करना, अँगीठी जलाना, बरतन साफ़ करना व चाय डालना—इतने लयबद्ध, शांत और सलीकेदार ढंग से संपन्न हुआ कि दर्शक को उसमें भारतीय शास्त्रीय राग जयजयवंती जैसी मधुर संगीतमय गरिमा और अलौकिक शांति की अनुभूति हुई।',
          markingTip:
            'English Helper: Explain-with-reference (ग) 3 & 4: Satirises frantic hyper-speed and mental restlessness in modern urban life; compares the Chajin’s serene choreography to the melodic poise of Raga Jaijaivanti.',
          marks: 4,
          tag: 'पठित गद्यांश',
        },
        {
          type: 'qa',
          question:
            'शीर्षक की सार्थकता एवं दोनों प्रसंगों की एकता (CBSE Board Pattern): इस पाठ का नाम ‘पतझर में टूटी पत्तियाँ’ क्यों रखा गया है? ‘गिन्नी का सोना’ और ‘झेन की देन’ में क्या वैचारिक संबंध है?',
          answer:
            '‘पतझर में टूटी पत्तियाँ’ का प्रतीकात्मक अर्थ है—आधुनिक भौतिकवाद, स्वार्थ और अंधी प्रतिस्पर्धा रूपी पतझर में झरते हुए मानवीय मूल्य व मानसिक शांति। लेखक ने इस पाठ में दो पूरक बोध-प्रसंग रखकर मनुष्य के बाहरी व आंतरिक दोनों पक्षों को संतुलित करने का सूत्र दिया है: पहला प्रसंग ‘गिन्नी का सोना’ हमारे **सामाजिक आचरण** को दिशा देता है कि हम स्वार्थी व्यवहारवादी न बनकर गांधीजी की भाँति आदर्शों को सर्वोपरि रखें; वहीं दूसरा प्रसंग ‘झेन की देन’ हमारे **आंतरिक मन** को दिशा देता है कि हम भागमभाग छोड़कर वर्तमान क्षण में शांति से जीना सीखें। इस प्रकार शीर्षक और दोनों अंश एक-दूसरे के पूरक हैं।',
          markingTip:
            'English Helper: Explains the symbolic title (“fallen leaves in autumn” = eroding human values and calm) and links Part I (external ethics) with Part II (internal mindfulness).',
          marks: 4,
          tag: 'Title & Theme Justification',
        },
        {
          type: 'qa',
          question:
            'व्यावहारिक व्याकरण एवं Competency प्रश्न (CBSE 4 अंक): (क) ‘पाप-पुण्य’ और ‘अन्न-जल’ का समास-विग्रह कर भेद बताइए। (ख) ‘विलक्षण’ और ‘सजग’ से भाववाचक संज्ञा बनाइए। (ग) मिश्र वाक्य बनाइए— “बाहर बेढब-सा एक मिट्टी का बरतन था। उसमें पानी भरा हुआ था।” (घ) आज के डिजिटल और परीक्षा-तनाव के युग में ‘झेन की देन’ से विद्यार्थियों को क्या सीख मिलती है?',
          answer:
            '(क) **समास-विग्रह:** ‘पाप-पुण्य’ = पाप और पुण्य (या पाप या पुण्य) — **द्वंद्व समास**; ‘अन्न-जल’ = अन्न और जल — **द्वंद्व समास**।\n(ख) **भाववाचक संज्ञा:** विलक्षण → **विलक्षणता**, सजग → **सजगता**।\n(ग) **मिश्र वाक्य:** बाहर बेढब-सा एक मिट्टी का बरतन था **जिसमें** पानी भरा हुआ था।\n(घ) **विद्यार्थियों के लिए सीख:** सोशल मीडिया और अंकों की अंधी प्रतिस्पर्धा में दिमाग पर ‘स्पीड’ का इंजन लगाने से तनाव और अवसाद बढ़ता है। ‘झेन की देन’ सिखाती है कि अतीत के पछतावे व भविष्य के भय से निकलकर शांत चित्त से केवल **वर्तमान क्षण** में एकाग्र होकर कार्य व अध्ययन करना ही सच्ची सफलता और सुख की कुंजी है।',
          markingTip:
            'English Helper: Integrates NCERT Language Study (dvandva samas, abstract nouns, complex sentence synthesis) with real-life student mindfulness.',
          marks: 4,
          tag: 'व्यावहारिक व्याकरण',
        },
      ],
    },
  ],
};
