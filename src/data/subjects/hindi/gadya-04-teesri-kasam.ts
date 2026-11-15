import { Subtopic } from '../../../types/curriculum';

const PASSAGE_1 = `‘संगम’ की अद्भुत सफलता ने राजकपूर में गहन आत्मविश्वास भर दिया और उसने एक साथ चार फ़िल्मों के निर्माण की घोषणा की–‘मेरा नाम जोकर’, ‘अजन्ता’, ‘मैं और मेरा दोस्त’ और ‘सत्यम् शिवम् सुंदरम्’। पर जब 1965 में राजकपूर ने ‘मेरा नाम जोकर’ का निर्माण आरंभ किया तब संभवतः उसने भी यह कल्पना नहीं की होगी कि इस फ़िल्म का एक ही भाग बनाने में छह वर्षों का समय लग जाएगा।
इन छह वर्षों के अंतराल में राजकपूर द्वारा अभिनीत कई फ़िल्में प्रदर्शित हुईं, जिनमें सन् 1966 में प्रदर्शित कवि शैलेंद्र की ‘तीसरी कसम’ भी शामिल है। यह वह फ़िल्म है जिसमें राजकपूर ने अपने जीवन की सर्वोत्कृष्ट भूमिका अदा की। यही नहीं, ‘तीसरी कसम’ वह फ़िल्म है जिसने हिंदी साहित्य की एक अत्यंत मार्मिक कृति को सैल्यूलाइड पर पूरी सार्थकता से उतारा। ‘तीसरी कसम’ फ़िल्म नहीं, सैल्यूलाइड पर लिखी कविता थी।
‘तीसरी कसम’ शैलेंद्र के जीवन की पहली और अंतिम फ़िल्म है। ‘तीसरी कसम’ को ‘राष्ट्रपति स्वर्णपदक’ मिला, बंगाल फ़िल्म जर्नलिस्ट एसोसिएशन द्वारा सर्वश्रेष्ठ फ़िल्म और कई अन्य पुरस्कारों द्वारा सम्मानित किया गया। मास्को फ़िल्म फ़ेस्टिवल में भी यह फ़िल्म पुरस्कृत हुई। इसकी कलात्मकता की लंबी-चौड़ी तारीफ़ें हुईं। इसमें शैलेंद्र की संवेदनशीलता पूरी शिद्दत के साथ मौजूद है। उन्होंने ऐसी फ़िल्म बनाई थी जिसे सच्चा कवि-हृदय ही बना सकता था।`;

const PASSAGE_2 = `शैलेंद्र ने राजकपूर की भावनाओं को शब्द दिए हैं। राजकपूर ने अपने अनन्य सहयोगी की फ़िल्म में उतनी ही तन्मयता के साथ काम किया, किसी पारिश्रमिक की अपेक्षा किए बगैर। शैलेंद्र ने लिखा था कि वे राजकपूर के पास ‘तीसरी कसम’ की कहानी सुनाने पहुँचे तो कहानी सुनकर उन्होंने बड़े उत्साहपूर्वक काम करना स्वीकार कर लिया। पर तुरंत गंभीरतापूर्वक बोले–“मेरा पारिश्रमिक एडवांस देना होगा।” शैलेंद्र को ऐसी उम्मीद नहीं थी कि राजकपूर ज़िंदगी-भर की दोस्ती का ये बदला देंगे। शैलेंद्र का मुरझाया हुआ चेहरा देखकर राजकपूर ने मुसकराते हुए कहा, “निकालो एक रुपया, मेरा पारिश्रमिक! पूरा एडवांस।” शैलेंद्र राजकपूर की इस याराना मस्ती से परिचित तो थे, लेकिन एक निर्माता के रूप में बड़े व्यावसायिक सूझबूझ वाले भी चक्कर खा जाते हैं, फिर शैलेंद्र तो फ़िल्म-निर्माता बनने के लिए सर्वथा अयोग्य थे। राजकपूर ने एक अच्छे और सच्चे मित्र की हैसियत से शैलेंद्र को फ़िल्म की असफलता के खतरों से आगाह भी किया। पर वह तो एक आदर्शवादी भावुक कवि था, जिसे अपार संपत्ति और यश तक की इतनी कामना नहीं थी जितनी आत्म-संतुष्टि के सुख की अभिलाषा थी। ‘तीसरी कसम’ कितनी ही महान फ़िल्म क्यों न रही हो, लेकिन यह एक दुखद सत्य है कि इसे प्रदर्शित करने के लिए बमुश्किल वितरक मिले। बावजूद इसके कि ‘तीसरी कसम’ में राजकपूर और वहीदा रहमान जैसे नामज़द सितारे थे, शंकर-जयकिशन का संगीत था, जिनकी लोकप्रियता उन दिनों सातवें आसमान पर थी और इसके गीत भी फ़िल्म के प्रदर्शन के पूर्व ही बेहद लोकप्रिय हो चुके थे, लेकिन इस फ़िल्म को खरीदने वाला कोई नहीं था। दरअसल इस फ़िल्म की संवेदना किसी दो से चार बनाने का गणित जानने वाले की समझ से परे थी। उसमें रची-बसी करुणा तराज़ू पर तौली जा सकने वाली चीज़ नहीं थी। इसीलिए बमुश्किल जब ‘तीसरी कसम’ रिलीज़ हुई तो इसका कोई प्रचार नहीं हुआ। फ़िल्म कब आई, कब चली गई, मालूम ही नहीं पड़ा।`;

const PASSAGE_3 = `ऐसा नहीं है कि शैलेंद्र बीस सालों तक फ़िल्म इंडस्ट्री में रहते हुए भी वहाँ के तौर-तरीकों से नावाकिफ़ थे, परंतु उनमें उलझकर वे अपनी आदमियत नहीं खो सके थे। ‘श्री 420’ का एक लोकप्रिय गीत है–‘प्यार हुआ, इकरार हुआ है, प्यार से फिर क्यूँ डरता है दिल’। इसके अंतरे की एक पंक्ति–‘रातें दसों दिशाओं से कहेंगी अपनी कहानियाँ’ पर संगीतकार जयकिशन ने आपत्ति की। उनका खयाल था कि दर्शक ‘चार दिशाएँ’ तो समझ सकते हैं–‘दस दिशाएँ’ नहीं। लेकिन शैलेंद्र परिवर्तन के लिए तैयार नहीं हुए। उनका दृढ़ मंतव्य था कि दर्शकों की रुचि की आड़ में हमें उथलेपन को उन पर नहीं थोपना चाहिए। कलाकार का यह कर्तव्य भी है कि वह उपभोक्ता की रुचियों का परिष्कार करने का प्रयत्न करे। और उनका यकीन गलत नहीं था। यही नहीं, वे बहुत अच्छे गीत भी जो उन्होंने लिखे बेहद लोकप्रिय हुए। शैलेंद्र ने झूठे अभिजात्य को कभी नहीं अपनाया। उनके गीत भाव-प्रवण थे–दुरूह नहीं। ‘मेरा जूता है जापानी, ये पतलून इंगलिस्तानी, सर पे लाल टोपी रूसी, फिर भी दिल है हिंदुस्तानी’–यह गीत शैलेंद्र ही लिख सकते थे। शांत नदी का प्रवाह और समुद्र की गहराई लिए हुए। यही विशेषता उनकी ज़िंदगी की थी और यही उन्होंने अपनी फ़िल्म के द्वारा भी साबित किया था।`;

const PASSAGE_4 = `‘तीसरी कसम’ यदि एकमात्र नहीं तो चंद उन फ़िल्मों में से है जिन्होंने साहित्य-रचना के साथ शत-प्रतिशत न्याय किया हो। शैलेंद्र ने राजकपूर जैसे स्टार को ‘हीरामन’ बना दिया था। हीरामन पर राजकपूर हावी नहीं हो सका। और छींट की सस्ती साड़ी में लिपटी ‘हीराबाई’ ने वहीदा रहमान की प्रसिद्ध ऊँचाइयों को बहुत पीछे छोड़ दिया था। कजरी नदी के किनारे उकड़ू बैठा हीरामन जब गीत गाते हुए हीराबाई से पूछता है ‘मन समझती हैं न आप?’ तब हीराबाई ज़ुबान से नहीं, आँखों से बोलती है। दुनिया-भर के शब्द उस भाषा को अभिव्यक्ति नहीं दे सकते। ऐसी ही सूक्ष्मताओं से स्पंदित थी–‘तीसरी कसम’। अपनी मस्ती में डूबकर झूमते गाते गाड़ीवान–‘चलत मुसाफ़िर मोह लियो रे पिंजड़े वाली मुनिया।’ टप्पर-गाड़ी में हीराबाई को जाते हुए देखकर उनके पीछे दौड़ते-गाते बच्चों का हुजूम–‘लाली-लाली डोलिया में लाली रे दुलहनिया’, एक नौटंकी की बाई में अपनापन खोज लेने वाला सरल हृदय गाड़ीवान! अभावों की ज़िंदगी जीते लोगों के सपनीले कहकहे।`;

const PASSAGE_5 = `हमारी फ़िल्मों की सबसे बड़ी कमज़ोरी होती है, लोक-तत्त्व का अभाव। वे ज़िंदगी से दूर होती है। यदि त्रासद स्थितियों का चित्रांकन होता है तो उन्हें ग्लोरीफ़ाई किया जाता है। दुख का ऐसा वीभत्स रूप प्रस्तुत होता है जो दर्शकों का भावनात्मक शोषण कर सके। और ‘तीसरी कसम’ की यह खास बात थी कि वह दुख को भी सहज स्थिति में, जीवन-सापेक्ष प्रस्तुत करती है।
मैंने शैलेंद्र को गीतकार नहीं, कवि कहा है। वे सिनेमा की चकाचौंध के बीच रहते हुए यश और धन-लिप्सा से कोसों दूर थे। जो बात उनकी ज़िंदगी में थी वही उनके गीतों में भी। उनके गीतों में सिर्फ़ करुणा नहीं, जूझने का संकेत भी था और वह प्रक्रिया भी मौजूद थी जिसके तहत अपनी मंज़िल तक पहुँचा जाता है। व्यथा आदमी को पराजित नहीं करती, उसे आगे बढ़ने का संदेश देती है।
शैलेंद्र ने ‘तीसरी कसम’ को अपनी भावप्रवणता का सर्वश्रेष्ठ तथ्य प्रदान किया। मुकेश की आवाज़ में शैलेंद्र का यह गीत तो अद्वितीय बन गया है–
सजनवा बैरी हो गए हमार चिठिया हो तो हर कोई बाँचै भाग न बाँचै कोय...`;

const PASSAGE_6 = `अभिनय के दृष्टिकोण से ‘तीसरी कसम’ राजकपूर की ज़िंदगी की सबसे हसीन फ़िल्म है। राजकपूर जिन्हें समीक्षक और कला-मर्मज्ञ आँखों से बात करने वाला कलाकार मानते हैं, ‘तीसरी कसम’ में मासूमियत के चर्मोत्कर्ष को छूते हैं। अभिनेता राजकपूर जितनी ताकत के साथ ‘तीसरी कसम’ में मौजूद हैं, उतना ‘जागते रहो’ में भी नहीं। ‘जागते रहो’ में राजकपूर के अभिनय को बहुत सराहा गया था, लेकिन ‘तीसरी कसम’ वह फ़िल्म है जिसमें राजकपूर अभिनय नहीं करता। वह हीरामन के साथ एकाकार हो गया है। खालिस देहाती भुच्च गाड़ीवान जो सिर्फ़ दिल की ज़ुबान समझता है, दिमाग की नहीं। जिसके लिए मोहब्बत के सिवा किसी दूसरी चीज़ का कोई अर्थ नहीं।`;

const PASSAGE_7 = `बहुत बड़ी बात यह है कि ‘तीसरी कसम’ राजकपूर के अभिनय-जीवन का वह मुकाम है, जब वह एशिया के सबसे बड़े शोमैन के रूप में स्थापित हो चुके थे। उनका अपना व्यक्तित्व एक किंवदंती बन चुका था। लेकिन ‘तीसरी कसम’ में वह महिमामय व्यक्तित्व पूरी तरह हीरामन की आत्मा में उतर गया है। वह कहीं हीरामन का अभिनय नहीं करता, अपितु खुद हीरामन में ढल गया है। हीराबाई की फेनू-गिलासी बोली पर रीझता हुआ, उसकी ‘मनुआ-नटुआ’ जैसी भोली सूरत पर न्योछावर होता हुआ और हीराबाई की तनिक-सी उपेक्षा पर अपने अस्तित्व से जूझता हुआ सच्चा हीरामन बन गया है।
‘तीसरी कसम’ की पटकथा मूल कहानी के लेखक फणीश्वरनाथ रेणु ने स्वयं तैयार की थी। कहानी का रेशा-रेशा, उसकी छोटी-से-छोटी बारीकियाँ फ़िल्म में पूरी तरह उतर आईं।`;

export const gadya04TeesriKasam: Subtopic = {
  id: 'hindi-gadya-04-teesri-kasam',
  slug: 'teesri-kasam-ke-shilpkar-shailendra',
  title: 'पाठ 4: तीसरी कसम के शिल्पकार शैलेंद्र (प्रह्लाद अग्रवाल)',
  subtitle:
    'संपूर्ण NCERT पाठ (सभी 11 अनुच्छेद व उद्धृत गीत-पंक्तियाँ) Inline Word Lens सहित, पूरा अंग्रेज़ी अनुवाद, सभी 48 शब्दार्थ, भाषा-अध्ययन व प्रश्न-अभ्यास',
  estimatedMinutes: 45,
  difficulty: 'Core CBSE',
  ncertSection: 'स्पर्श भाग-2 › गद्यखंड › पाठ 4',
  learningObjectives: [
    'फ़िल्म ‘तीसरी कसम’ (1966) को ‘सैल्यूलाइड पर लिखी कविता’ कहे जाने के साहित्यिक व कलात्मक कारण समझना।',
    'शैलेंद्र के आदर्शवादी फ़िल्म-निर्माण, राजकपूर के ₹1 अग्रिम पारिश्रमिक तथा वितरकों की व्यावसायिक गणित के अंतर का विश्लेषण करना।',
    '‘त्रासद स्थितियों को ग्लोरीफ़ाई न करना’, लोक-तत्त्व, शैलेंद्र के गीतों की भावप्रवणता और राजकपूर-वहीदा रहमान के जीवंत अभिनय को समझना।',
    'NCERT ‘भाषा अध्ययन’ (कारक चिह्न ‘से’, वाक्य-संरचना, मुहावरे, हिंदी पर्याय, संधिविच्छेद व समास) तथा सभी मौखिक-लिखित प्रश्नों का अभ्यास करना।',
  ],
  keywords: [
    'तीसरी कसम के शिल्पकार शैलेंद्र',
    'प्रह्लाद अग्रवाल',
    'राजकपूर',
    'हीरामन हीराबाई',
    'फणीश्वरनाथ रेणु',
    'सैल्यूलाइड पर लिखी कविता',
    'Teesri Kasam full NCERT text',
  ],
  sections: [
    {
      id: 'intro',
      title: '1. लेखक परिचय व पाठ-प्रवेश (Author & Core Theme)',
      blocks: [
        {
          type: 'ncert-reference',
          title: 'पाठ 4: तीसरी कसम के शिल्पकार शैलेंद्र (प्रह्लाद अग्रवाल) — Official NCERT PDF',
          bookName: 'स्पर्श भाग-2 — गद्यखंड',
          pdfPath: '/ncert/hindi/jhsp111.pdf',
          pdfStartPage: 1,
          pdfEndPage: 10,
          note: 'Official NCERT Sparsh Bhag-2 PDF (पृ. 79–88) को देखें या नीचे संपूर्ण NCERT मूल पाठ Inline Word Lens व Bilingual Transcript के साथ सीधे पढ़ें।',
        },
        {
          type: 'callout',
          variant: 'ncert',
          title: 'प्रह्लाद अग्रवाल (जन्म 1947) व NCERT ‘पाठ प्रवेश’',
          body: 'भारत की आज़ादी के साल (1947) मध्य प्रदेश के जबलपुर शहर में जन्मे प्रह्लाद अग्रवाल ने हिंदी से एम.ए. तक शिक्षा हासिल की। किशोर वय से ही उन्हें हिंदी फ़िल्मों के इतिहास, फ़िल्मकारों के जीवन और अभिनय पर चर्चा करने का शौक रहा। सतना के शासकीय स्वशासी स्नातकोत्तर महाविद्यालय में प्राध्यापन के साथ उन्होंने फ़िल्म-जगत पर अनेक चर्चित पुस्तकें लिखी हैं—‘सातवाँ दशक’, ‘तानाशाह’, ‘मैं खुशबू’, ‘सुपर स्टार’, ‘राजकपूर : आधी हकीकत आधा फ़साना’, ‘कवि शैलेंद्र : ज़िंदगी की जीत में यकीन’, ‘प्यासा : चिर अतृप्त गुरुदत्त’, ‘उत्ताल उमंग : सुभाष घई की फ़िल्मकला’, ‘ओ रे माँझी : बिमल राय का सिनेमा’ और ‘महाबाज़ार के महानायक : इक्कीसवीं सदी का सिनेमा’।',
          bullets: [
            'पाठ प्रवेश का सार: अधिकांश व्यावसायिक फ़िल्में सिनेमाघर से निकलते ही भुला दी जाती हैं, पर जब कोई फ़िल्मकार किसी साहित्यिक कृति को पूरी लगन और ईमानदारी से पर्दे पर उतारता है तो वह यादगार और संदेशप्रद बनती है।',
            'मील का पत्थर: कवि-गीतकार शैलेंद्र ने फणीश्वर नाथ रेणु की अमर कृति ‘तीसरी कसम उर्फ़ मारे गए गुलफाम’ को सिने पर्दे पर उतारा, जिसमें शोमैन राजकपूर ने अपने फ़िल्मी जीवन की बेहतरीन एक्टिंग की और हीरोइन वहीदा रहमान ने उम्मीदों के अनुरूप सशक्त अभिनय किया।',
            'मुख्य शिल्पी व सम्मान: निर्माता—शैलेंद्र; कहानी व पटकथा—फणीश्वरनाथ रेणु; संगीत—शंकर-जयकिशन; मुख्य गीत—‘सजनवा बैरी हो गए हमार...’ (स्वर: मुकेश); पुरस्कार—राष्ट्रपति स्वर्णपदक, बंगाल फ़िल्म जर्नलिस्ट एसोसिएशन पुरस्कार व मास्को फ़िल्म फ़ेस्टिवल सम्मान।',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'CBSE Hot Question Alert: ‘ग्लोरीफ़ाई न करना’ व ‘सैल्यूलाइड पर लिखी कविता’',
          body: 'बोर्ड में ‘त्रासद स्थितियों को ग्लोरीफ़ाई न करना’ और ‘सैल्यूलाइड पर लिखी कविता’ का आशय बार-बार पूछा जाता है। सटीक लिखें: मुख्यधारा की फ़िल्में दुख का भावनात्मक शोषण करने के लिए उसे महिमामंडित (‘ग्लोरीफ़ाई’) करती हैं, जबकि शैलेंद्र ने हीरामन-हीराबाई की व्यथा को सहज व जीवन-सापेक्ष रूप में एक कोमल कविता की तरह प्रस्तुत किया।',
        },
      ],
    },
    {
      id: 'passages',
      title: '2. संपूर्ण NCERT पाठ — भाग (1): Inline Word Lens (पृ. 81–82)',
      blocks: [
        {
          type: 'poetic-stanza',
          passageMode: 'prose',
          stanzaLabel: 'गद्यांश 1 — ‘संगम’ की सफलता, सन् 1966 की ‘तीसरी कसम’ व प्रमुख सम्मान (अनुच्छेद 1–3)',
          dialectBadge: 'NCERT पृ. 81 • समीक्षात्मक खड़ी बोली गद्य',
          stanzaText: PASSAGE_1,
          prasang:
            'प्रस्तुत अंश प्रह्लाद अग्रवाल रचित निबंध ‘तीसरी कसम के शिल्पकार शैलेंद्र’ के प्रारंभिक तीन अनुच्छेद हैं। इसमें राजकपूर की चार फ़िल्मों की घोषणा, ‘मेरा नाम जोकर’ में लगे छह वर्षों के अंतराल और उसी बीच सन् 1966 में प्रदर्शित शैलेंद्र की एकमात्र फ़िल्म ‘तीसरी कसम’ के राष्ट्रीय-अंतर्राष्ट्रीय सम्मानों का परिचय दिया गया है।',
          bhavarthHindi:
            '‘संगम’ की अपार सफलता से उत्साहित राजकपूर ने ‘मेरा नाम जोकर’, ‘अजन्ता’, ‘मैं और मेरा दोस्त’ और ‘सत्यम् शिवम् सुंदरम्’ नामक चार फ़िल्मों की घोषणा की, पर सन् 1965 में शुरू हुई ‘मेरा नाम जोकर’ का एक भाग बनने में ही छह वर्ष लग गए। इसी अंतराल में सन् 1966 में शैलेंद्र की पहली और अंतिम फ़िल्म ‘तीसरी कसम’ आई। इसमें राजकपूर ने अपने जीवन का सर्वोत्कृष्ट अभिनय किया और साहित्य की मर्मस्पर्शी कृति को कैमरे की रील पर पूरी सार्थकता से उतारा। अपनी गहन संवेदनशीलता और कलात्मकता के कारण इस फ़िल्म ने राष्ट्रपति स्वर्णपदक, बंगाल फ़िल्म जर्नलिस्ट एसोसिएशन तथा मास्को फ़िल्म फ़ेस्टिवल जैसे अनेक सम्मान प्राप्त किए।',
          englishHelper:
            'Flush with confidence after “Sangam,” Raj Kapoor announced four films together—Mera Naam Joker, Ajanta, Main Aur Mera Dost, and Satyam Shivam Sundaram—never imagining one part of Joker alone would take six years from 1965. Meanwhile, poet Shailendra’s first and last film “Teesri Kasam” (1966) released, featuring Raj Kapoor’s finest role and translating a poignant literary work meaningfully onto celluloid like a poem. Driven by a true poet’s intensity, it won the President’s Gold Medal, the Bengal Film Journalists’ Best Film award, and acclaim at the Moscow Film Festival.',
          poeticDevices: [
            '‘सैल्यूलाइड पर लिखी कविता’ — रूपक द्वारा फ़िल्म की कोमल, काव्यात्मक और मर्मस्पर्शी प्रकृति को व्यक्त किया गया है।',
            'तथ्यात्मक व संस्मरणात्मक शैली — सन् 1965–1966, फ़िल्मों के नाम और पुरस्कारों का उल्लेख पाठ को प्रामाणिक बनाता है।',
          ],
          words: [
            {
              word: 'अद्भुत',
              hindiMeaning: 'आश्चर्यजनक, अनोखी, बेमिसाल',
              englishMeaning: 'Extraordinary / marvellous',
              grammarNote: 'तत्सम विशेषण (adbhut)',
            },
            {
              word: 'आत्मविश्वास',
              hindiMeaning: 'स्वयं की क्षमता पर गहरा भरोसा',
              englishMeaning: 'Self-confidence',
              grammarNote: 'अधिकरण तत्पुरुष (आत्मा पर विश्वास)',
            },
            {
              word: 'घोषणा',
              hindiMeaning: 'सार्वजनिक ऐलान',
              englishMeaning: 'Announcement / declaration',
              grammarNote: 'तत्सम स्त्रीलिंग संज्ञा (ghoshanaa)',
            },
            {
              word: 'अंतराल',
              hindiMeaning: 'के बाद / दो घटनाओं के बीच की समय-अवधि',
              englishMeaning: 'Interval / intervening span of time',
              grammarNote: 'NCERT शब्दार्थ: के बाद',
            },
            {
              word: 'अभिनीत',
              hindiMeaning: 'अभिनय किया गया',
              englishMeaning: 'Acted / starred in',
              grammarNote: 'NCERT शब्दार्थ: अभिनय किया गया (अभि + नीत)',
            },
            {
              word: 'प्रदर्शित',
              hindiMeaning: 'सिनेमाघरों में दिखाई गई, रिलीज़ हुई',
              englishMeaning: 'Released / screened publicly',
              grammarNote: 'विशेषण (प्रदर्शन + इत)',
            },
            {
              word: 'सर्वोत्कृष्ट',
              hindiMeaning: 'सबसे अच्छा, श्रेष्ठतम',
              englishMeaning: 'Finest / best of all',
              grammarNote: 'NCERT शब्दार्थ: सबसे अच्छा (सर्व + उत्कृष्ट • गुण संधि)',
            },
            {
              word: 'मार्मिक',
              hindiMeaning: 'हृदय के मर्म को छूने वाली',
              englishMeaning: 'Poignant / deeply touching',
              grammarNote: 'विशेषण (मर्म + इक प्रत्यय)',
            },
            {
              word: 'सैल्यूलाइड',
              hindiMeaning: 'कैमरे की रील में उतार चित्र पर प्रस्तुत करना (फ़िल्म की रील)',
              englishMeaning: 'Celluloid (cinema film strip)',
              grammarNote: 'NCERT शब्दार्थ: कैमरे की रील में उतार चित्र पर प्रस्तुत करना',
            },
            {
              word: 'सार्थकता',
              hindiMeaning: 'सफलता के साथ, अर्थपूर्ण ढंग से',
              englishMeaning: 'Meaningfulness / purposeful success',
              grammarNote: 'NCERT शब्दार्थ: सफलता के साथ (सार्थक + ता)',
            },
            {
              word: 'पुरस्कृत',
              hindiMeaning: 'पुरस्कार प्राप्त, सम्मानित',
              englishMeaning: 'Awarded / honoured',
              grammarNote: 'विशेषण (पुरस्कार + इत)',
            },
            {
              word: 'कलात्मकता',
              hindiMeaning: 'कला से परिपूर्ण होने का गुण',
              englishMeaning: 'Artistry / aesthetic excellence',
              grammarNote: 'NCERT शब्दार्थ: कला से परिपूर्ण',
            },
            {
              word: 'तारीफ़ें',
              hindiMeaning: 'प्रशंसा, सराहना',
              englishMeaning: 'Praises / accolades',
              grammarNote: 'अरबी स्त्रीलिंग बहुवचन (एकवचन: तारीफ़ • ‘फ़’ में नुक़्ता)',
            },
            {
              word: 'संवेदनशीलता',
              hindiMeaning: 'भावुकता, सूक्ष्म अनुभव करने की क्षमता',
              englishMeaning: 'Sensitivity / emotional depth',
              grammarNote: 'NCERT शब्दार्थ: भावुकता',
            },
            {
              word: 'शिद्दत',
              hindiMeaning: 'तीव्रता, गहराई, प्रबल आवेग',
              englishMeaning: 'Intensity / passion',
              grammarNote: 'NCERT शब्दार्थ: तीव्रता (अरबी संज्ञा)',
            },
            {
              word: 'कवि-हृदय',
              hindiMeaning: 'कवि जैसा संवेदनशील और भावुक मन',
              englishMeaning: 'A true poet’s heart',
              grammarNote: 'तत्पुरुष / कर्मधारय समास',
            },
          ],
        },
        {
          type: 'poetic-stanza',
          passageMode: 'prose',
          stanzaLabel: 'गद्यांश 2 — एक रुपया अग्रिम पारिश्रमिक, मित्र की चेतावनी और वितरकों की बेरुखी (अनुच्छेद 4)',
          dialectBadge: 'NCERT पृ. 81–82 • संस्मरणात्मक व बाज़ारवाद-विश्लेषण',
          stanzaText: PASSAGE_2,
          prasang:
            'यह गद्यांश पाठ के सबसे मार्मिक प्रसंगों में से एक है, जिसमें राजकपूर की निश्छल दोस्ती (‘एक रुपया, मेरा पारिश्रमिक! पूरा एडवांस’), अनुभवी मित्र के रूप में उनकी चेतावनी तथा आदर्शवादी शैलेंद्र को फ़िल्म के वितरण व प्रचार में आई कठिनाइयों का वर्णन है।',
          bhavarthHindi:
            'शैलेंद्र ने राजकपूर की भावनाओं को गीतों के माध्यम से स्वर दिया था, और राजकपूर ने भी अपने इस परम सहयोगी की फ़िल्म में बिना किसी मेहनताने की चाह के पूरी तल्लीनता से काम किया। कहानी सुनते ही उन्होंने काम स्वीकार किया और मज़ाक में पूरा एडवांस माँगकर शैलेंद्र को चौंकाया, फिर हँसकर केवल एक रुपया लिया। यद्यपि राजकपूर ने सच्चे मित्र की तरह शैलेंद्र को फ़िल्म न चल पाने के खतरों से सचेत भी किया था, परंतु शैलेंद्र को अपार धन-दौलत से अधिक आत्म-संतुष्टि की कामना थी। परिणामतः राजकपूर-वहीदा रहमान जैसे नामी सितारों व शंकर-जयकिशन के सुपरहिट संगीत के बावजूद ‘दो से चार बनाने’ वाले मुनाफ़ाख़ोर वितरक इस करुणापूर्ण फ़िल्म की संवेदना को न समझ सके और बिना प्रचार के यह फ़िल्म चुपचाप आई और चली गई।',
          englishHelper:
            'Shailendra had given words to Raj Kapoor’s screen feelings, and Raj Kapoor reciprocated with total dedication without expecting remuneration. After hearing the story, he teasingly demanded his fee “in full advance,” causing Shailendra’s face to fall before laughing and asking for just ₹1! Yet as a loyal friend, Raj Kapoor also warned Shailendra of commercial failure. Being an idealistic poet who sought inner contentment over wealth, Shailendra went ahead—and despite stars like Raj Kapoor and Waheeda Rehman and Shankar-Jaikishan’s chart-topping music, profit-minded distributors blind to compassion shunned the film, leaving it to release silently without publicity.',
          poeticDevices: [
            'नाटकीय संवाद-योजना — “निकालो एक रुपया, मेरा पारिश्रमिक! पूरा एडवांस।” से राजकपूर-शैलेंद्र की आत्मीयता सजीव हो उठी है।',
            'मुहावरेदार अभिव्यक्ति — ‘चेहरा मुरझाना’, ‘चक्कर खा जाना’, ‘सातवें आसमान पर होना’, ‘दो से चार बनाना’।',
          ],
          words: [
            {
              word: 'अनन्य',
              hindiMeaning: 'परम / अत्यधिक, जिसके समान दूसरा न हो',
              englishMeaning: 'Paramount / unmatched / devoted',
              grammarNote: 'NCERT शब्दार्थ: परम / अत्यधिक (नञ् तत्पुरुष: न अन्य)',
            },
            {
              word: 'तन्मयता',
              hindiMeaning: 'तल्लीनता, पूर्ण एकाग्रता',
              englishMeaning: 'Total absorption / immersion',
              grammarNote: 'NCERT शब्दार्थ: तल्लीनता (तत् + मय + ता)',
            },
            {
              word: 'पारिश्रमिक',
              hindiMeaning: 'मेहनताना, काम के बदले मिलने वाला धन',
              englishMeaning: 'Remuneration / professional fee',
              grammarNote: 'NCERT शब्दार्थ: मेहनताना (परिश्रम + इक)',
            },
            {
              word: 'अपेक्षा',
              hindiMeaning: 'आशा, उम्मीद, चाह',
              englishMeaning: 'Expectation',
              grammarNote: 'स्त्रीलिंग तत्सम संज्ञा (apekshaa)',
            },
            {
              word: 'बगैर',
              hindiMeaning: 'के बिना',
              englishMeaning: 'Without',
              grammarNote: 'अरबी-उर्दू संबंधबोधक अव्यय',
            },
            {
              word: 'उत्साहपूर्वक',
              hindiMeaning: 'पूरे जोश और उमंग के साथ',
              englishMeaning: 'Enthusiastically',
              grammarNote: 'रीतिवाचक क्रिया-विशेषण',
            },
            {
              word: 'गंभीरतापूर्वक',
              hindiMeaning: 'संजीदगी से, गंभीर मुद्रा बनाकर',
              englishMeaning: 'Seriously / solemnly',
              grammarNote: 'रीतिवाचक क्रिया-विशेषण',
            },
            {
              word: 'मुरझाया',
              hindiMeaning: 'उदास या निराश हो गया (चेहरा मुरझाना)',
              englishMeaning: 'Wilted / fell in disappointment',
              grammarNote: 'भूतकालिक कृदंत विशेषण',
            },
            {
              word: 'याराना मस्ती',
              hindiMeaning: 'दोस्ताना अंदाज़, मित्रतापूर्ण चुहलबाज़ी',
              englishMeaning: 'Playful friendly banter / camaraderie',
              grammarNote: 'NCERT शब्दार्थ: दोस्ताना अंदाज़',
            },
            {
              word: 'व्यावसायिक',
              hindiMeaning: 'व्यापार या मुनाफ़े से संबंधित',
              englishMeaning: 'Commercial / business-minded',
              grammarNote: 'विशेषण (व्यवसाय + इक)',
            },
            {
              word: 'सर्वथा',
              hindiMeaning: 'पूरी तरह से, बिलकुल',
              englishMeaning: 'Wholly / completely / altogether',
              grammarNote: 'रीतिवाचक अव्यय (sarvathaa)',
            },
            {
              word: 'हैसियत',
              hindiMeaning: 'क्षमता, पद या रिश्ते का दर्जा',
              englishMeaning: 'Capacity / standing / role',
              grammarNote: 'अरबी स्त्रीलिंग संज्ञा (haisiyat)',
            },
            {
              word: 'आगाह',
              hindiMeaning: 'सचेत, सावधान, पूर्वसूचित',
              englishMeaning: 'Forewarned / alerted',
              grammarNote: 'NCERT शब्दार्थ: सचेत (फ़ारसी विशेषण)',
            },
            {
              word: 'आत्म-संतुष्टि',
              hindiMeaning: 'अपनी तुष्टि, आंतरिक संतोष',
              englishMeaning: 'Self-satisfaction / inner fulfilment',
              grammarNote: 'NCERT शब्दार्थ: अपनी तुष्टि (संबंध तत्पुरुष)',
            },
            {
              word: 'अभिलाषा',
              hindiMeaning: 'तीव्र इच्छा, कामना',
              englishMeaning: 'Desire / longing / aspiration',
              grammarNote: 'तत्सम स्त्रीलिंग संज्ञा (abhilaashaa)',
            },
            {
              word: 'बमुश्किल',
              hindiMeaning: 'बहुत कठिनाई से',
              englishMeaning: 'With great difficulty / barely',
              grammarNote: 'NCERT शब्दार्थ: बहुत कठिनाई से (ब + मुश्किल)',
            },
            {
              word: 'वितरक',
              hindiMeaning: 'प्रसारित करने वाले लोग (फ़िल्म डिस्ट्रीब्यूटर)',
              englishMeaning: 'Film distributors',
              grammarNote: 'NCERT शब्दार्थ: प्रसारित करने वाले लोग',
            },
            {
              word: 'नामज़द',
              hindiMeaning: 'विख्यात, नामचीन, प्रसिद्ध',
              englishMeaning: 'Famous / celebrated',
              grammarNote: 'NCERT शब्दार्थ: विख्यात (‘ज़’ में नुक़्ता)',
            },
            {
              word: 'लोकप्रियता',
              hindiMeaning: 'जन-सामान्य में प्रसिद्ध व प्रिय होना',
              englishMeaning: 'Popularity',
              grammarNote: 'भाववाचक संज्ञा (लोकप्रिय + ता)',
            },
            {
              word: 'संवेदना',
              hindiMeaning: 'गहरी अनुभूति, सहानुभूति व मार्मिक भाव',
              englishMeaning: 'Sensibility / deep feeling / empathy',
              grammarNote: 'तत्सम स्त्रीलिंग संज्ञा',
            },
            {
              word: 'तराज़ू',
              hindiMeaning: 'तौलने का काँटा / मापदंड',
              englishMeaning: 'Weighing scale / balance',
              grammarNote: 'फ़ारसी संज्ञा (‘ज़’ में नुक़्ता)',
            },
          ],
        },
        {
          type: 'poetic-stanza',
          passageMode: 'prose',
          stanzaLabel: 'गद्यांश 3 — ‘श्री 420’ प्रसंग, कलाकार का कर्तव्य और गीतों की भाव-प्रवणता (अनुच्छेद 5)',
          dialectBadge: 'NCERT पृ. 82 • कला-दर्शन एवं गीत-विवेचन',
          stanzaText: PASSAGE_3,
          prasang:
            'प्रह्लाद अग्रवाल इस अनुच्छेद में स्पष्ट करते हैं कि बीस वर्षों तक फ़िल्म उद्योग में रहकर भी शैलेंद्र ने अपनी मानवीयता व साहित्यिक गरिमा नहीं खोई। ‘श्री 420’ के गीत ‘प्यार हुआ, इकरार हुआ है’ की पंक्ति को लेकर संगीतकार जयकिशन से हुए मतभेद द्वारा वे शैलेंद्र के सिद्धांतवादी दृष्टिकोण को उजागर करते हैं।',
          bhavarthHindi:
            'शैलेंद्र फ़िल्म इंडस्ट्री के तौर-तरीकों से अनजान नहीं थे, पर उन्होंने कभी अपनी इंसानियत नहीं गँवाई। जब संगीतकार जयकिशन ने ‘श्री 420’ के गीत की पंक्ति ‘रातें दसों दिशाओं से कहेंगी अपनी कहानियाँ’ पर यह कहकर आपत्ति की कि दर्शक चार दिशाएँ ही समझते हैं, दस नहीं—तो शैलेंद्र ने बदलने से साफ़ मना कर दिया। उनका मानना था कि दर्शकों की पसंद के बहाने उन पर सस्ता उथलापन नहीं थोपना चाहिए; कलाकार का कर्तव्य जनता की रुचियों को परिष्कृत (संस्कारित) करना भी है। शैलेंद्र ने झूठा बनावटी पांडित्य नहीं अपनाया—उनके गीत ‘मेरा जूता है जापानी...’ जैसे सरल होकर भी शांत नदी के प्रवाह और समुद्र की गहराई लिए हुए थे।',
          englishHelper:
            'Despite spending twenty years in the film industry, Shailendra never lost his humanity. When composer Jaikishan objected to “ten directions” in a song from ‘Shri 420’, arguing audiences only knew four directions, Shailendra refused to alter a word. He firmly believed an artist must never hide behind public taste to serve shallowness, but strive to refine audience sensibilities. Shunning false elitism, his lyrics—such as “Mera Joota Hai Japani…”—were deeply emotional yet never obscure, carrying a calm river’s flow and an ocean’s depth.',
          poeticDevices: [
            'प्रकृति-उपमा — गीतों की तुलना ‘शांत नदी का प्रवाह और समुद्र की गहराई’ से कर सरलता व गहनता के अद्भुत मेल को दर्शाया गया है।',
            'उद्धृत फ़िल्मी गीत — ‘प्यार हुआ, इकरार हुआ है...’ व ‘मेरा जूता है जापानी...’ के सटीक उद्धरण से तर्क को पुष्ट किया गया है।',
          ],
          words: [
            {
              word: 'तौर-तरीकों',
              hindiMeaning: 'कार्य करने की रीति, चाल-ढाल, दाँव-पेंच',
              englishMeaning: 'Ways / industry practices',
              grammarNote: 'द्वंद्व-युग्म संज्ञा',
            },
            {
              word: 'नावाकिफ़',
              hindiMeaning: 'अनजान, अपरिचित, अनभिज्ञ',
              englishMeaning: 'Unfamiliar / unaware',
              grammarNote: 'NCERT शब्दार्थ: अनजान (‘ना’ उपसर्ग + वाकिफ़ • ‘फ़’ में नुक़्ता)',
            },
            {
              word: 'आदमियत',
              hindiMeaning: 'इंसानियत, मानवीयता, भलमनसाहत',
              englishMeaning: 'Humanity / decency',
              grammarNote: 'भाववाचक संज्ञा (आदमी + यत)',
            },
            {
              word: 'इकरार',
              hindiMeaning: 'सहमति, स्वीकृति, वचन',
              englishMeaning: 'Consent / avowal of love',
              grammarNote: 'NCERT शब्दार्थ: सहमति (अरबी पुल्लिंग संज्ञा)',
            },
            {
              word: 'अंतरे',
              hindiMeaning: 'गीत के मुख्य भाग (मुखड़े/स्थायी) के बाद आने वाले छंद',
              englishMeaning: 'Stanzas / verses of a song (Antara)',
              grammarNote: 'पुल्लिंग बहुवचन (एकवचन: अंतरा)',
            },
            {
              word: 'आपत्ति',
              hindiMeaning: 'एतराज़, असहमति',
              englishMeaning: 'Objection',
              grammarNote: 'तत्सम स्त्रीलिंग संज्ञा',
            },
            {
              word: 'खयाल',
              hindiMeaning: 'विचार, सोच, धारणा',
              englishMeaning: 'Thought / opinion / assumption',
              grammarNote: 'अरबी पुल्लिंग संज्ञा',
            },
            {
              word: 'मंतव्य',
              hindiMeaning: 'इच्छा, विचार, दृढ़ मत',
              englishMeaning: 'Intention / firm conviction / view',
              grammarNote: 'NCERT शब्दार्थ: इच्छा (मन् + तव्य)',
            },
            {
              word: 'उथलेपन',
              hindiMeaning: 'सतही या हल्के स्तर (मानक रूप: उथलापन)',
              englishMeaning: 'Shallowness / superficiality',
              grammarNote: 'NCERT शब्दार्थ: सतही / नीचा',
            },
            {
              word: 'उपभोक्ता',
              hindiMeaning: 'उपभोग करने वाला (यहाँ: फ़िल्म का दर्शक या श्रोता)',
              englishMeaning: 'Consumer (audience / viewer)',
              grammarNote: 'तत्सम संज्ञा (उप + भोक्ता)',
            },
            {
              word: 'परिष्कार',
              hindiMeaning: 'शुद्धीकरण, सुधार, स्तर ऊँचा उठाना',
              englishMeaning: 'Refinement / elevation (of taste)',
              grammarNote: 'परि + कार (विसर्ग-समान ष संयोग)',
            },
            {
              word: 'प्रयत्न',
              hindiMeaning: 'प्रयास, कोशिश',
              englishMeaning: 'Effort / endeavour',
              grammarNote: 'प्र + यत्न (पुल्लिंग संज्ञा)',
            },
            {
              word: 'यकीन',
              hindiMeaning: 'विश्वास, भरोसा',
              englishMeaning: 'Belief / conviction',
              grammarNote: 'अरबी पुल्लिंग संज्ञा (NCERT भाषा अध्ययन शब्द)',
            },
            {
              word: 'अभिजात्य',
              hindiMeaning: 'परिष्कृत, कुलीनता या श्रेष्ठता का गुण',
              englishMeaning: 'Refinement / elitism / aristocratic air',
              grammarNote: 'NCERT शब्दार्थ: परिष्कृत (अभिजात + य)',
            },
            {
              word: 'भाव-प्रवण',
              hindiMeaning: 'भावनाओं से भरा हुआ',
              englishMeaning: 'Full of deep emotion / heartfelt',
              grammarNote: 'NCERT शब्दार्थ: भावनाओं के भरा हुआ (करण तत्पुरुष)',
            },
            {
              word: 'दुरूह',
              hindiMeaning: 'कठिन, जिसे समझना जटिल हो',
              englishMeaning: 'Difficult / obscure / abstruse',
              grammarNote: 'NCERT शब्दार्थ: कठिन (‘दुर्’ + ऊह)',
            },
            {
              word: 'प्रवाह',
              hindiMeaning: 'बहाव, सहज गति',
              englishMeaning: 'Flow / natural stream',
              grammarNote: 'पुल्लिंग तत्सम संज्ञा',
            },
          ],
        },
      ],
    },
    {
      id: 'passages-part-2',
      title: '3. संपूर्ण NCERT पाठ — भाग (2): Inline Word Lens (पृ. 82–84)',
      blocks: [
        {
          type: 'poetic-stanza',
          passageMode: 'prose',
          stanzaLabel: 'गद्यांश 4 — साहित्य-रचना से न्याय, हीरामन-हीराबाई और ग्रामीण लोकगीत (अनुच्छेद 6)',
          dialectBadge: 'NCERT पृ. 82–83 • अभिनय एवं आंचलिक संवेदना',
          stanzaText: PASSAGE_4,
          prasang:
            'यह गद्यांश पाठ के मध्य भाग से उद्धृत है, जिसमें लेखक बताते हैं कि ‘तीसरी कसम’ ने मूल साहित्य-रचना के साथ पूरा न्याय किया और राजकपूर व वहीदा रहमान ने अपने स्टारडम को मिटाकर हीरामन-हीराबाई के रूप में कालजयी अभिनय किया।',
          bhavarthHindi:
            '‘तीसरी कसम’ उन चुनिंदा फ़िल्मों में है जिन्होंने साहित्यिक कृति से शत-प्रतिशत न्याय किया। राजकपूर हीरामन के भोलेपन में इतने डूब गए कि उन पर उनका स्टारडम हावी न हो सका, और छींट की सस्ती साड़ी पहने हीराबाई बनी वहीदा रहमान ने अपनी पिछली सभी ऊँचाइयों को पीछे छोड़ दिया। कजरी नदी किनारे उकड़ू बैठकर हीरामन का पूछना और हीराबाई का आँखों से मौन उत्तर देना शब्दों से परे है। ऐसी ही सूक्ष्म अनुभूतियों, गाड़ीवान के गीत (‘चलत मुसाफ़िर मोह लियो रे पिंजड़े वाली मुनिया’), टप्पर-गाड़ी के पीछे दौड़ते बच्चों (‘लाली-लाली डोलिया में लाली रे दुलहनिया’) तथा अभावों में जीते लोगों के सपनीले कहकहों से यह फ़िल्म जीवंत हो उठती है।',
          englishHelper:
            '‘Teesri Kasam’ is among the rare films that did 100% justice to literature. Raj Kapoor disappeared completely into Hiraman, never letting stardom overshadow the character, while Waheeda Rehman in an inexpensive chintz sari surpassed all her celebrated heights as Hirabai. When Hiraman squats by the Kajri river asking “Do you understand the heart?”, Hirabai answers not with speech but through her eyes—a silent language no words can match. Pulsing with folk songs like “Chalat Musaafir Moh Liyo Re” and “Laali-Laali Doliya Mein,” the film captures the dreamy laughter of people living amidst scarcity.',
          poeticDevices: [
            '‘आँखों से बोलना’ व ‘अभावों की ज़िंदगी जीते लोगों के सपनीले कहकहे’ — विरोधाभास-मिश्रित संवेदनशील भाषा जो ग्रामीण भारत के यथार्थ व आनंद को एक साथ दिखाती है।',
            'लोकगीतों का सजीव समावेश — ‘चलत मुसाफ़िर...’ व ‘लाली-लाली डोलिया...’ से आंचलिक वातावरण सजीव हुआ है।',
          ],
          words: [
            {
              word: 'चंद',
              hindiMeaning: 'कुछ, गिने-चुने',
              englishMeaning: 'A few / select handful',
              grammarNote: 'फ़ारसी संख्यावाचक विशेषण',
            },
            {
              word: 'शत-प्रतिशत',
              hindiMeaning: 'सौ प्रतिशत, पूरी तरह से',
              englishMeaning: 'Hundred percent / completely',
              grammarNote: 'अव्यय / विशेषण पदबंध',
            },
            {
              word: 'हावी',
              hindiMeaning: 'प्रभावी, दूसरे पर पूर्ण अधिकार या दबदबा बनाने वाला',
              englishMeaning: 'Dominating / overshadowing',
              grammarNote: 'अरबी विशेषण (NCERT भाषा अध्ययन प्रश्न 4)',
            },
            {
              word: 'छींट',
              hindiMeaning: 'रंगीन फूल-पत्ती के छापे वाला सस्ता सूती कपड़ा',
              englishMeaning: 'Chintz (printed cotton fabric)',
              grammarNote: 'तद्भव संज्ञा (chheent)',
            },
            {
              word: 'ऊँचाइयों',
              hindiMeaning: 'सफलता व श्रेष्ठता के शिखर',
              englishMeaning: 'Heights / pinnacles of success',
              grammarNote: 'भाववाचक स्त्रीलिंग बहुवचन',
            },
            {
              word: 'उकड़ू',
              hindiMeaning: 'घुटने मोड़कर पैर के तलवों के सहारे बैठना',
              englishMeaning: 'Squatting on the soles of one’s feet',
              grammarNote: 'NCERT शब्दार्थ: घुटने मोड़कर पैर के तलवों के सहारे बैठना',
            },
            {
              word: 'ज़ुबान',
              hindiMeaning: 'जीभ, वाणी, बोली',
              englishMeaning: 'Tongue / spoken words',
              grammarNote: 'फ़ारसी स्त्रीलिंग संज्ञा (‘ज़’ में नुक़्ता)',
            },
            {
              word: 'अभिव्यक्ति',
              hindiMeaning: 'भावों या विचारों को प्रकट करना',
              englishMeaning: 'Expression / articulation',
              grammarNote: 'तत्सम स्त्रीलिंग संज्ञा (अभि + व्यक्ति)',
            },
            {
              word: 'सूक्ष्मताओं',
              hindiMeaning: 'बारीकियों, सूक्ष्म विवरणों (मानक रूप: सूक्ष्मता)',
              englishMeaning: 'Subtleties / fine nuances',
              grammarNote: 'NCERT शब्दार्थ: सूक्ष्मता – बारीकी',
            },
            {
              word: 'स्पंदित',
              hindiMeaning: 'संचालित करना / गतिमान, जीवंत धड़कन से युक्त',
              englishMeaning: 'Pulsating / vibrant / animated',
              grammarNote: 'NCERT शब्दार्थ: संचालित करना / गतिमान',
            },
            {
              word: 'गाड़ीवान',
              hindiMeaning: 'बैलगाड़ी चलाने वाला',
              englishMeaning: 'Bullock-cart driver',
              grammarNote: 'गाड़ी + वान प्रत्यय',
            },
            {
              word: 'मुसाफ़िर',
              hindiMeaning: 'यात्री, राहगीर, बटोही',
              englishMeaning: 'Traveller / wayfarer',
              grammarNote: 'अरबी पुल्लिंग संज्ञा (‘फ़’ में नुक़्ता)',
            },
            {
              word: 'टप्पर-गाड़ी',
              hindiMeaning: 'अर्धगोलाकार छप्पर युक्त बैलगाड़ी',
              englishMeaning: 'Canopied bullock cart',
              grammarNote: 'NCERT शब्दार्थ: अर्धगोलाकार छप्पर युक्त बैलगाड़ी',
            },
            {
              word: 'हुजूम',
              hindiMeaning: 'भीड़, जनसमुदाय (NCERT शब्दार्थ वर्तनी: हुज़ूम)',
              englishMeaning: 'Crowd / throng',
              grammarNote: 'NCERT शब्दार्थ: हुज़ूम – भीड़',
            },
            {
              word: 'अपनापन',
              hindiMeaning: 'आत्मीयता, अपने होने का अहसास',
              englishMeaning: 'Sense of belonging / warmth',
              grammarNote: 'भाववाचक संज्ञा (अपना + पन)',
            },
            {
              word: 'सपनीले',
              hindiMeaning: 'सपनों से भरे हुए, मधुर कल्पनायुक्त',
              englishMeaning: 'Dreamy / full of sweet dreams',
              grammarNote: 'विशेषण (सपना + ईला)',
            },
            {
              word: 'कहकहे',
              hindiMeaning: 'खुलकर लगाए गए ज़ोरदार ठहाके',
              englishMeaning: 'Hearty bursts of laughter',
              grammarNote: 'पुल्लिंग बहुवचन (एकवचन: कहकहा)',
            },
          ],
        },
        {
          type: 'poetic-stanza',
          passageMode: 'prose',
          stanzaLabel: 'गद्यांश 5 — लोक-तत्त्व, त्रासद स्थितियों की सहजता और गीत ‘सजनवा बैरी हो गए हमार...’ (अनुच्छेद 7–9)',
          dialectBadge: 'NCERT पृ. 83 • करुणा-दर्शन व लोकगीत संवेदना',
          stanzaText: PASSAGE_5,
          prasang:
            'इन तीन अनुच्छेदों में लेखक मुख्यधारा की व्यावसायिक फ़िल्मों की बनावटी दुख-प्रस्तुति की आलोचना करते हैं और शैलेंद्र की जीवन-दृष्टि, करुणा से जूझने की प्रेरणा तथा मुकेश के स्वर में गाए गए कालजयी गीत ‘सजनवा बैरी हो गए हमार’ की भावप्रवणता का विवेचन करते हैं।',
          bhavarthHindi:
            'हमारी फ़िल्मों की सबसे बड़ी कमी लोक-तत्त्व का अभाव है—वे वास्तविक जीवन से कटकर दुख को बनावटी ढंग से ‘ग्लोरीफ़ाई’ करती हैं ताकि दर्शकों की भावनाओं का शोषण हो सके। इसके विपरीत ‘तीसरी कसम’ दुख को सहज, जीवन-सापेक्ष रूप में दिखाती है। लेखक शैलेंद्र को गीतकार नहीं, सच्चा कवि मानते हैं क्योंकि चकाचौंध में रहते हुए भी वे यश व धन-लिप्सा से दूर थे। उनके गीतों में केवल दुख ही नहीं, परिस्थितियों से जूझकर मंज़िल पाने की प्रेरणा भी थी। उनकी भावप्रवणता का सर्वश्रेष्ठ उदाहरण मुकेश की आवाज़ में अमर गीत ‘सजनवा बैरी हो गए हमार चिठिया हो तो हर कोई बाँचै भाग न बाँचै कोय...’ है।',
          englishHelper:
            'The greatest weakness of mainstream Indian films is the absence of folk realism—they sensationalise and glamorise tragedy to exploit viewers emotionally. ‘Teesri Kasam’, by contrast, keeps sorrow natural and true to life. Prahlad Agrawal calls Shailendra a poet rather than a lyricist because amidst glamour he stayed miles away from fame and greed; his verses inspire people to struggle forward rather than accept defeat. This emotional depth shines brightest in Mukesh’s immortal song: “Sajanwa bairi ho gaye hamaar, chithiyaa ho to har koi baanchai, bhaag na baanchai koy…”',
          poeticDevices: [
            '‘व्यथा आदमी को पराजित नहीं करती, उसे आगे बढ़ने का संदेश देती है’ — सूक्तिपरक जीवन-दर्शन जो करुणा को कर्म-प्रेरणा में बदल देता है।',
            'भोजपुरी-अवधी पुट लिए लोकगीत का उद्धरण — ‘चिठिया हो तो हर कोई बाँचै, भाग न बाँचै कोय...’ (भाग्य और मानवीय विवशता की मर्मस्पर्शी तुलना)।',
          ],
          words: [
            {
              word: 'कमज़ोरी',
              hindiMeaning: 'दुर्बलता, कमी, त्रुटि',
              englishMeaning: 'Weakness / flaw',
              grammarNote: 'भाववाचक स्त्रीलिंग संज्ञा (‘ज़’ में नुक़्ता)',
            },
            {
              word: 'लोक-तत्त्व',
              hindiMeaning: 'लोक संबंधी, जनसामान्य की संस्कृति, बोली और जीवन का स्वाभाविक गुण',
              englishMeaning: 'Folk element / grassroots authenticity',
              grammarNote: 'NCERT शब्दार्थ: लोक संबंधी (संबंध तत्पुरुष)',
            },
            {
              word: 'त्रासद',
              hindiMeaning: 'दुखद, करुणा और पीड़ा से भरा',
              englishMeaning: 'Tragic / sorrowful',
              grammarNote: 'NCERT शब्दार्थ: दुखद (विशेषण)',
            },
            {
              word: 'चित्रांकन',
              hindiMeaning: 'चित्र द्वारा अंकन, सजीव वर्णन या फिल्मांकन',
              englishMeaning: 'Portrayal / depiction',
              grammarNote: 'चित्र + अंकन (दीर्घ संधि • संबंध तत्पुरुष)',
            },
            {
              word: 'ग्लोरीफ़ाई',
              hindiMeaning: 'गुणगान / महिमामंडित करना, अवास्तविक व भव्य बनाकर दिखाना',
              englishMeaning: 'To glorify / glamorise unrealistically',
              grammarNote: 'NCERT शब्दार्थ: गुणगान / महिमामंडित करना (‘फ़’ में नुक़्ता)',
            },
            {
              word: 'वीभत्स',
              hindiMeaning: 'भयावह, घृणा या जुगुप्सा उत्पन्न करने वाला',
              englishMeaning: 'Grotesque / dreadful / gruesome',
              grammarNote: 'NCERT शब्दार्थ: भयावह (विशेषण)',
            },
            {
              word: 'शोषण',
              hindiMeaning: 'अनुचित लाभ उठाना (यहाँ: भावनाओं से खेलना)',
              englishMeaning: 'Exploitation',
              grammarNote: 'तत्सम पुल्लिंग संज्ञा',
            },
            {
              word: 'जीवन-सापेक्ष',
              hindiMeaning: 'जीवन के प्रति, वास्तविक जीवन से जुड़ा और यथार्थ के अनुकूल',
              englishMeaning: 'True to life / grounded in lived reality',
              grammarNote: 'NCERT शब्दार्थ: जीवन के प्रति',
            },
            {
              word: 'चकाचौंध',
              hindiMeaning: 'आँखों को चौंधिया देने वाली चकमक व कृत्रिम चमक-दमक',
              englishMeaning: 'Dazzling glamour / glitz',
              grammarNote: 'स्त्रीलिंग संज्ञा',
            },
            {
              word: 'धन-लिप्सा',
              hindiMeaning: 'धन की अत्यधिक चाह, पैसे का लोभ',
              englishMeaning: 'Greed / lust for wealth',
              grammarNote: 'NCERT शब्दार्थ: धन की अत्यधिक चाह (संबंध तत्पुरुष)',
            },
            {
              word: 'जूझने',
              hindiMeaning: 'कठिन परिस्थितियों से संघर्ष करने',
              englishMeaning: 'Struggling / grappling bravely',
              grammarNote: 'क्रियार्थक संज्ञा (जूझना)',
            },
            {
              word: 'प्रक्रिया',
              hindiMeaning: 'प्रणाली, कार्य करने की पद्धति या ढंग',
              englishMeaning: 'Process / system / path of action',
              grammarNote: 'NCERT शब्दार्थ: प्रणाली (प्र + क्रिया)',
            },
            {
              word: 'मंज़िल',
              hindiMeaning: 'लक्ष्य, गंतव्य स्थान',
              englishMeaning: 'Destination / goal',
              grammarNote: 'अरबी स्त्रीलिंग संज्ञा (‘ज़’ में नुक़्ता)',
            },
            {
              word: 'व्यथा',
              hindiMeaning: 'पीड़ा, मानसिक दुख, कष्ट',
              englishMeaning: 'Agony / sorrow / distress',
              grammarNote: 'तत्सम स्त्रीलिंग संज्ञा',
            },
            {
              word: 'पराजित',
              hindiMeaning: 'हारा हुआ, परास्त',
              englishMeaning: 'Defeated / vanquished',
              grammarNote: 'विशेषण (पराजय + इत)',
            },
            {
              word: 'भावप्रवणता',
              hindiMeaning: 'भावों की गहराई व सघन संवेदनशीलता',
              englishMeaning: 'Emotional richness / intensity of feeling',
              grammarNote: 'भाववाचक संज्ञा (भावप्रवण + ता)',
            },
            {
              word: 'अद्वितीय',
              hindiMeaning: 'अनुपम, जिसके समान दूसरा कोई न हो',
              englishMeaning: 'Matchless / unique',
              grammarNote: 'नञ् तत्पुरुष / बहुव्रीहि (न द्वितीय)',
            },
            {
              word: 'चिठिया',
              hindiMeaning: 'पत्र, चिट्ठी (लोकबोली रूप)',
              englishMeaning: 'Letter / written epistle (folk dialect)',
              grammarNote: 'आंचलिक/भोजपुरी प्रयोग',
            },
            {
              word: 'बाँचै',
              hindiMeaning: 'पढ़ना, वाचन करना (पढ़ सके)',
              englishMeaning: 'Reads / deciphers aloud',
              grammarNote: 'NCERT शब्दार्थ: पढ़ना (लोकबोली क्रिया रूप)',
            },
            {
              word: 'भाग',
              hindiMeaning: 'भाग्य, किस्मत, तकदीर',
              englishMeaning: 'Fate / destiny',
              grammarNote: 'NCERT शब्दार्थ: भाग्य (तद्भव रूप)',
            },
          ],
        },
        {
          type: 'poetic-stanza',
          passageMode: 'prose',
          stanzaLabel: 'गद्यांश 6 — अभिनय का चर्मोत्कर्ष व ‘जागते रहो’ से तुलना: हीरामन से एकाकार राजकपूर (अनुच्छेद 10, भाग क)',
          dialectBadge: 'NCERT पृ. 83 • अभिनय-समीक्षा',
          stanzaText: PASSAGE_6,
          prasang:
            'यह अंश पाठ के अंतिम चरण से है, जहाँ समीक्षक प्रह्लाद अग्रवाल राजकपूर के अभिनय की तुलना उनकी ही प्रसिद्ध फ़िल्म ‘जागते रहो’ से करते हुए सिद्ध करते हैं कि ‘तीसरी कसम’ में वे अभिनय नहीं करते बल्कि स्वयं हीरामन बन जाते हैं।',
          bhavarthHindi:
            'अभिनय की दृष्टि से ‘तीसरी कसम’ राजकपूर की सबसे सुंदर फ़िल्म है। जिन्हें कला-मर्मज्ञ ‘आँखों से बात करने वाला कलाकार’ कहते हैं, वे इस फ़िल्म में भोलेपन की पराकाष्ठा (चर्मोत्कर्ष) को छू लेते हैं। ‘जागते रहो’ में उनके अभिनय की खूब प्रशंसा हुई थी, पर जितनी आत्मिक शक्ति से वे ‘तीसरी कसम’ में हैं, वैसा कहीं और नहीं। यहाँ राजकपूर अभिनय करते नहीं दिखते, बल्कि खालिस देहाती और निश्छल गाड़ीवान हीरामन के साथ एकाकार हो जाते हैं—एक ऐसा गाड़ीवान जो दिमाग का नहीं, केवल दिल की भाषा और मोहब्बत का मर्म समझता है।',
          englishHelper:
            'From the standpoint of acting, ‘Teesri Kasam’ is the finest film of Raj Kapoor’s career. Called an actor who “speaks with his eyes” by critics and connoisseurs, here he touches the pinnacle of innocence—surpassing even his acclaimed performance in ‘Jagte Raho’. In ‘Teesri Kasam’, Raj Kapoor does not act; he merges into Hiraman—a pure, simple rustic cart-driver who understands only the language of the heart and love, not worldly calculation.',
          poeticDevices: [
            'तुलनात्मक समीक्षा — ‘जागते रहो’ और ‘तीसरी कसम’ के अभिनय की तुलना करके कलात्मक उत्कर्ष सिद्ध किया गया है।',
          ],
          words: [
            {
              word: 'दृष्टिकोण',
              hindiMeaning: 'देखने का ढंग, नजरिया',
              englishMeaning: 'Perspective / point of view',
              grammarNote: 'तत्सम पुल्लिंग संज्ञा (दृष्टि + कोण)',
            },
            {
              word: 'हसीन',
              hindiMeaning: 'सुंदर, मनमोहक, लाजवाब',
              englishMeaning: 'Beautiful / exquisite / finest',
              grammarNote: 'अरबी विशेषण',
            },
            {
              word: 'समीक्षक',
              hindiMeaning: 'समीक्षा करने वाला, कला या साहित्य का आलोचक',
              englishMeaning: 'Critic / reviewer',
              grammarNote: 'NCERT शब्दार्थ: समीक्षा करने वाला',
            },
            {
              word: 'कला-मर्मज्ञ',
              hindiMeaning: 'कला की परख करने वाला, कला के मर्म का ज्ञाता',
              englishMeaning: 'Connoisseur / subtle judge of art',
              grammarNote: 'NCERT शब्दार्थ: कला की परख करने वाला (तत्पुरुष समास)',
            },
            {
              word: 'मासूमियत',
              hindiMeaning: 'भोलापन, निश्छलता',
              englishMeaning: 'Innocence / guilelessness',
              grammarNote: 'भाववाचक स्त्रीलिंग संज्ञा (मासूम + इयत)',
            },
            {
              word: 'चर्मोत्कर्ष',
              hindiMeaning: 'ऊँचाई के शिखर पर, चरम उत्कर्ष या पराकाष्ठा',
              englishMeaning: 'Pinnacle / zenith / climax',
              grammarNote: 'NCERT शब्दार्थ: ऊँचाई के शिखर पर (चर्म + उत्कर्ष • गुण संधि)',
            },
            {
              word: 'सराहा',
              hindiMeaning: 'प्रशंसा की, सराहना की',
              englishMeaning: 'Praised / acclaimed',
              grammarNote: 'भूतकालिक क्रिया (सराहना)',
            },
            {
              word: 'एकाकार',
              hindiMeaning: 'एक रूप हो जाना, पूर्णतः घुल-मिल जाना',
              englishMeaning: 'Merged into one / completely unified',
              grammarNote: 'एक + आकार (दीर्घ संधि)',
            },
            {
              word: 'खालिस',
              hindiMeaning: 'शुद्ध, विशुद्ध, ठेठ',
              englishMeaning: 'Pure / unadulterated / genuine',
              grammarNote: 'NCERT शब्दार्थ: शुद्ध (अरबी विशेषण)',
            },
            {
              word: 'देहाती',
              hindiMeaning: 'ग्रामीण, गाँव का सीधा-सादा व्यक्ति',
              englishMeaning: 'Rustic / village-bred',
              grammarNote: 'विशेषण (देहात + ई)',
            },
            {
              word: 'भुच्च',
              hindiMeaning: 'निरा / बिलकुल (भोला व सांसारिक चालाकी से कोरा)',
              englishMeaning: 'Utterly naive / completely unworldly',
              grammarNote: 'NCERT शब्दार्थ: निरा / बिलकुल (देशज विशेषण)',
            },
            {
              word: 'मोहब्बत',
              hindiMeaning: 'प्रेम, अनुराग, स्नेह',
              englishMeaning: 'Love / affection',
              grammarNote: 'अरबी स्त्रीलिंग संज्ञा',
            },
          ],
        },
        {
          type: 'poetic-stanza',
          passageMode: 'prose',
          stanzaLabel: 'गद्यांश 7 — शोमैन से हीरामन में रूपांतरण, फणीश्वरनाथ रेणु की पटकथा और समापन (अनुच्छेद 10 भाग ख व 11)',
          dialectBadge: 'NCERT पृ. 83–84 • चरम संवेदन व समापन',
          stanzaText: PASSAGE_7,
          prasang:
            'यह पाठ का अंतिम भाग है। इसमें प्रह्लाद अग्रवाल बताते हैं कि किस प्रकार शोमैन के रूप में किंवदंती बन चुके राजकपूर स्वयं हीरामन में ढल गए और मूल लेखक फणीश्वरनाथ रेणु द्वारा स्वयं पटकथा लिखने के कारण कहानी की प्रत्येक बारीकी पर्दे पर जीवंत हो उठी।',
          bhavarthHindi:
            'जब राजकपूर एशिया के सबसे बड़े शोमैन के रूप में एक किंवदंती बन चुके थे, तब भी ‘तीसरी कसम’ में उनका महिमामय व्यक्तित्व पूरी तरह हीरामन की आत्मा में समा गया। वे हीरामन का अभिनय नहीं करते, बल्कि हीराबाई की मीठी बोली (‘फेनू-गिलासी’) पर रीझते, उसकी ‘मनुआ-नटुआ’ जैसी भोली सूरत पर न्योछावर होते और उसकी ज़रा-सी उपेक्षा पर अपने अस्तित्व से जूझते सच्चे हीरामन बन गए। अंततः लेखक निष्कर्ष देते हैं कि इस फ़िल्म की पटकथा स्वयं मूल कहानीकार फणीश्वरनाथ रेणु ने लिखी थी, जिससे उनकी कहानी का रेशा-रेशा और हर सूक्ष्म बारीकी पर्दे पर साकार हो उठी।',
          englishHelper:
            'Remarkably, Raj Kapoor acted in ‘Teesri Kasam’ at a stage when he had already become a living legend as Asia’s greatest showman—yet that grand aura dissolved wholly into Hiraman’s soul. Captivated by Hirabai’s frothy, sweet speech, enchanted by her innocent face, and agonising over her slightest indifference, he became the true Hiraman. Above all, author Phanishwar Nath Renu wrote the screenplay himself, ensuring every fine thread and subtle nuance of the original story came alive intact on screen.',
          poeticDevices: [
            '‘रेशा-रेशा’ (पुनरुक्ति प्रकाश) तथा आंचलिक उपमाएँ (‘फेनू-गिलासी बोली’, ‘मनुआ-नटुआ जैसी भोली सूरत’) — पात्रों की मिट्टी से जुड़ी जीवंतता को उभारती हैं।',
          ],
          words: [
            {
              word: 'मुकाम',
              hindiMeaning: 'पड़ाव, स्तर या विशेष चरण',
              englishMeaning: 'Stage / milestone',
              grammarNote: 'अरबी पुल्लिंग संज्ञा',
            },
            {
              word: 'स्थापित',
              hindiMeaning: 'प्रतिष्ठित, सुदृढ़ रूप से जमा हुआ',
              englishMeaning: 'Established / acclaimed',
              grammarNote: 'विशेषण (स्थापना + इत)',
            },
            {
              word: 'व्यक्तित्व',
              hindiMeaning: 'किसी व्यक्ति की संपूर्ण चारित्रिक पहचान व छवि',
              englishMeaning: 'Personality / persona',
              grammarNote: 'भाववाचक संज्ञा (व्यक्ति + त्व)',
            },
            {
              word: 'किंवदंती',
              hindiMeaning: 'कहावत, जनश्रुति, लोगों में प्रचलित प्रसिद्ध गाथा',
              englishMeaning: 'Legend / folklore',
              grammarNote: 'NCERT शब्दार्थ: कहावत',
            },
            {
              word: 'महिमामय',
              hindiMeaning: 'गौरवशाली, महान व प्रभावशाली',
              englishMeaning: 'Majestic / illustrious / larger-than-life',
              grammarNote: 'विशेषण (महिमा + मय)',
            },
            {
              word: 'अपितु',
              hindiMeaning: 'बल्कि, वरन्',
              englishMeaning: 'Rather / on the contrary',
              grammarNote: 'संस्कृत समुच्चयबोधक अव्यय',
            },
            {
              word: 'रीझता',
              hindiMeaning: 'मोहित होता, मुग्ध होता',
              englishMeaning: 'Charmed / delighted by',
              grammarNote: 'वर्तमान कृदंत विशेषण (रीझना)',
            },
            {
              word: 'न्योछावर',
              hindiMeaning: 'समर्पित, बलिहारी जाना',
              englishMeaning: 'Devoted / ready to give all',
              grammarNote: 'विशेषण/अव्यय प्रयोग',
            },
            {
              word: 'उपेक्षा',
              hindiMeaning: 'अनादर, ध्यान न देना, अनदेखी',
              englishMeaning: 'Indifference / slight neglect',
              grammarNote: 'तत्सम स्त्रीलिंग संज्ञा (उप + ईक्षा • गुण संधि)',
            },
            {
              word: 'अस्तित्व',
              hindiMeaning: 'होने का भाव, वजूद, जीवन-सत्ता',
              englishMeaning: 'Existence / inner being',
              grammarNote: 'भाववाचक पुल्लिंग संज्ञा (अस्ति + त्व)',
            },
            {
              word: 'जूझता',
              hindiMeaning: 'संघर्ष करता हुआ, मन ही मन लड़ता हुआ',
              englishMeaning: 'Struggling / wrestling with',
              grammarNote: 'वर्तमान कृदंत विशेषण',
            },
            {
              word: 'पटकथा',
              hindiMeaning: 'फ़िल्म के दृश्य, पात्र व संवादों की कथा (स्क्रीनप्ले)',
              englishMeaning: 'Screenplay / film script',
              grammarNote: 'संबंध तत्पुरुष (पट की कथा)',
            },
            {
              word: 'रेशा-रेशा',
              hindiMeaning: 'प्रत्येक सूक्ष्म अंश व तंतु, कण-कण',
              englishMeaning: 'Every fine thread / every fibre',
              grammarNote: 'पुनरुक्त संज्ञा-युग्म (NCERT भाषा अध्ययन शब्द)',
            },
            {
              word: 'बारीकियाँ',
              hindiMeaning: 'सूक्ष्म विशेषताएँ, छोटे-छोटे विवरण',
              englishMeaning: 'Fine nuances / subtle details',
              grammarNote: 'स्त्रीलिंग बहुवचन (एकवचन: बारीकी)',
            },
          ],
        },
      ],
    },
    {
      id: 'english-transcript',
      title: '4. संपूर्ण अंग्रेज़ी अनुवाद (Complete Side-by-Side Bilingual Transcript)',
      blocks: [
        {
          type: 'english-transcript',
          title: 'तीसरी कसम के शिल्पकार शैलेंद्र — Complete Verbatim Hindi & English Translation',
          intro:
            'Read Prahlad Agrawal’s complete essay sentence by sentence alongside faithful English translation, including all quoted film songs.',
          segments: [
            {
              label: 'Segment 1 (अनुच्छेद 1–3) — After “Sangam,” “Teesri Kasam” & National-International Honours',
              hindiOriginal: PASSAGE_1,
              englishText: `The extraordinary success of ‘Sangam’ filled Raj Kapoor with deep self-confidence, and he simultaneously announced the production of four films—‘Mera Naam Joker’, ‘Ajanta’, ‘Main Aur Mera Dost’, and ‘Satyam Shivam Sundaram’. However, when Raj Kapoor began filming ‘Mera Naam Joker’ in 1965, perhaps even he had not imagined that making just one part of that film would take six years.
During the interval of these six years, several films starring Raj Kapoor were released, among which poet Shailendra’s ‘Teesri Kasam’, released in 1966, was also included. This is the film in which Raj Kapoor delivered the finest performance of his life. Not only this, ‘Teesri Kasam’ is the film that translated an extraordinarily poignant work of Hindi literature onto celluloid with complete meaningfulness. ‘Teesri Kasam’ was not a film; it was a poem written on celluloid.
‘Teesri Kasam’ is the first and final film of Shailendra’s life. ‘Teesri Kasam’ received the ‘President’s Gold Medal’, was honoured as Best Film by the Bengal Film Journalists’ Association, and won several other awards. At the Moscow Film Festival too, this film was awarded. Its artistry drew wide and lavish praise. Shailendra’s sensitivity is present in it with full intensity. He had made a film that only a true poet’s heart could have created.`,
            },
            {
              label: 'Segment 2 (अनुच्छेद 4) — ₹1 Advance Fee, Raj Kapoor’s Caution & Distributors’ Reluctance',
              hindiOriginal: PASSAGE_2,
              englishText: `Shailendra gave words to Raj Kapoor’s emotions. Raj Kapoor worked in his unmatched associate’s film with equal absorption, without expecting any remuneration. Shailendra had written that when he went to Raj Kapoor to narrate the story of ‘Teesri Kasam’, after hearing the story he enthusiastically agreed to work in it. Yet immediately he said gravely—“My remuneration will have to be paid in advance.” Shailendra had not expected that Raj Kapoor would repay a lifelong friendship like this. Seeing Shailendra’s downcast face, Raj Kapoor smiled and said, “Take out one rupee, my remuneration! Full advance.” Shailendra was certainly familiar with this playful camaraderie of Raj Kapoor, yet as a producer even people with great business acumen get baffled—and Shailendra was completely unfit to become a film producer. As a good and true friend, Raj Kapoor also forewarned Shailendra of the risks of the film’s failure. But he was an idealistic, emotional poet who did not crave boundless wealth and fame as much as he longed for the joy of self-satisfaction. No matter how great a film ‘Teesri Kasam’ was, it is a sad truth that it found distributors only with great difficulty. Despite the fact that ‘Teesri Kasam’ starred celebrated icons like Raj Kapoor and Waheeda Rehman, had the music of Shankar-Jaikishan whose popularity in those days was sky-high, and whose songs had already become immensely popular prior to the film’s release, there was no one willing to buy this film. In truth, the sensibility of this film lay beyond the comprehension of anyone knowing only the arithmetic of turning two into four. The compassion woven into it was not something that could be weighed on a scale. Therefore, when ‘Teesri Kasam’ somehow got released with great difficulty, it received no publicity. When the film arrived and when it departed was never even noticed.`,
            },
            {
              label: 'Segment 3 (अनुच्छेद 5) — ‘Shri 420’ Lyric Stand, Elevating Audience Taste & “Mera Joota Hai Japani”',
              hindiOriginal: PASSAGE_3,
              englishText: `It is not that Shailendra, despite living in the film industry for twenty years, was unfamiliar with its ways; yet entangled in them, he never lost his humanity. A popular song from ‘Shri 420’ goes—“Pyaar hua, iqraar hua hai, pyaar se phir kyoon darta hai dil” (Love has bloomed, consent is spoken—why then does the heart still fear love?). On one line of its verse—“Raaten dason dishaon se kahengi apni kahaaniyaan” (Nights from all ten directions will tell their tales)—composer Jaikishan raised an objection. He thought audiences could understand “four directions,” not “ten directions.” But Shailendra refused to change it. His firm conviction was that under the pretext of audience taste we must not impose shallowness upon them. It is also an artist’s duty to strive to refine the consumer’s tastes. And his belief was not wrong. Not only that, even the truly fine songs he wrote became immensely popular. Shailendra never adopted false elitism. His songs were rich in genuine emotion—not obscure. “Mera joota hai Jaapaani, ye patloon Inglistaani, sar pe laal topi Roosi, phir bhi dil hai Hindustaani” (My shoes are Japanese, these trousers English, the red cap on my head Russian, yet my heart remains Indian)—only Shailendra could write such a song, carrying the flow of a serene river and the depth of the sea. This very quality marked his life, and this is what he proved through his film as well.`,
            },
            {
              label: 'Segment 4 (अनुच्छेद 6) — Doing 100% Justice to Literature, Hiraman-Hirabai & Folk Songs',
              hindiOriginal: PASSAGE_4,
              englishText: `‘Teesri Kasam’, if not the sole one, is among the handful of films that did a hundred percent justice to a literary work. Shailendra had turned a star like Raj Kapoor into ‘Hiraman’. Raj Kapoor could never overshadow Hiraman. And wrapped in an inexpensive chintz sari, ‘Hirabai’ left Waheeda Rehman’s celebrated heights far behind. Squatting by the Kajri river while singing, when Hiraman asks Hirabai, “Man samajhti hain na aap?” (You understand the heart, don’t you?), Hirabai speaks not with her tongue, but with her eyes. All the words in the world cannot give expression to that language. Pulsating with just such subtleties was ‘Teesri Kasam’. Swaying and singing absorbed in his own joy, the cart-driver—“Chalat musaafir moh liyo re pinjde waali muniyaa” (O myna in the cage, you have enchanted this passing traveller). Seeing Hirabai riding away in the canopied bullock cart, a throng of children running and singing behind her—“Laali-laali doliya mein laali re dulhaniyaa” (In the crimson palanquin sits the blushing bride)—a simple-hearted cart-driver discovering kinship in a nautanki dancer! The dreamy bursts of laughter of people living lives of scarcity.`,
            },
            {
              label: 'Segment 5 (अनुच्छेद 7–9) — Folk Elements, Unvarnished Tragedy & “Sajanwa Bairi Ho Gaye Hamaar”',
              hindiOriginal: PASSAGE_5,
              englishText: `The biggest weakness of our films is the lack of folk elements. They remain distant from real life. If tragic situations are portrayed, they are glorified. Such a grotesque form of sorrow is presented as can emotionally exploit the audience. And the special quality of ‘Teesri Kasam’ was that it presents even sorrow in a natural state, true to life.
I have called Shailendra not a lyricist, but a poet. Living amidst the glitter of cinema, he remained miles away from fame and greed for wealth. What was in his life was in his songs too. In his songs there was not merely pathos, there was also a call to struggle, and that process too was present through which one reaches one’s destination. Sorrow does not defeat a person; it gives the message to keep moving forward.
Shailendra gave ‘Teesri Kasam’ the finest substance of his emotional depth. In Mukesh’s voice, this song of Shailendra became truly matchless—
“Sajanwa bairi ho gaye hamaar, chithiyaa ho to har koi baanchai, bhaag na baanchai koy…” (My beloved has turned cruel toward me; if it were a letter anyone could read it, yet no one can read one’s fate…)`,
            },
            {
              label: 'Segment 6 (अनुच्छेद 10, भाग क) — Raj Kapoor Merging into Innocent Hiraman',
              hindiOriginal: PASSAGE_6,
              englishText: `From the perspective of acting, ‘Teesri Kasam’ is the loveliest film of Raj Kapoor’s life. Raj Kapoor, whom critics and art connoisseurs consider an actor who speaks with his eyes, touches the pinnacle of innocence in ‘Teesri Kasam’. Actor Raj Kapoor is not present with as much strength even in ‘Jagte Raho’ as he is in ‘Teesri Kasam’. In ‘Jagte Raho’, Raj Kapoor’s acting was greatly praised, yet ‘Teesri Kasam’ is the film in which Raj Kapoor does not act. He has become one with Hiraman—a pure, simple rustic cart-driver who understands only the language of the heart, not of the calculating mind; for whom nothing other than love holds any meaning.`,
            },
            {
              label: 'Segment 7 (अनुच्छेद 10, भाग ख व 11) — Showman Dissolving into Hiraman & Renu’s Screenplay',
              hindiOriginal: PASSAGE_7,
              englishText: `The really big thing is that ‘Teesri Kasam’ belongs to that milestone in Raj Kapoor’s acting life when he had already become established as Asia’s greatest showman. His own personality had become a legend. Yet in ‘Teesri Kasam’, that majestic personality descended completely into Hiraman’s soul. Nowhere does he act the part of Hiraman; rather, he himself has melted into Hiraman. Charmed by Hirabai’s frothy-sweet speech, pouring his heart out over her innocent ‘manua-natua’ face, and wrestling with his very existence at Hirabai’s slightest indifference, he has become the true Hiraman.
The screenplay of ‘Teesri Kasam’ was prepared by the author of the original story, Phanishwar Nath Renu, himself. Every fine fibre of the story, its smallest of small nuances, came across completely in the film.`,
            },
          ],
        },
      ],
    },
    {
      id: 'word-bank',
      title: '5. संपूर्ण पाठ शब्दार्थ कोश — NCERT शब्दार्थ व टिप्पणियाँ (Chapter Word Bank)',
      blocks: [
        {
          type: 'chapter-word-bank',
          title: 'NCERT ‘शब्दार्थ और टिप्पणियाँ’ तथा समीक्षा-शब्दावली — तीसरी कसम के शिल्पकार शैलेंद्र',
          intro:
            'ऊपर गद्यांशों में प्रयुक्त शब्दों के अतिरिक्त NCERT की 48 प्रविष्टियों के मानक/मूल शब्द रूप और परीक्षा-पयोगी टिप्पणियाँ।',
          extraWords: [
            {
              word: 'याराना मस्ती',
              hindiMeaning: 'दोस्ताना अंदाज़',
              englishMeaning: 'Playful, friendly camaraderie',
              grammarNote: 'NCERT शब्दार्थ: दोस्ताना अंदाज़',
              exampleSentence: 'शैलेंद्र राजकपूर की याराना मस्ती से भली-भाँति परिचित थे।',
            },
            {
              word: 'आत्म-संतुष्टि',
              hindiMeaning: 'अपनी तुष्टि, आंतरिक संतोष',
              englishMeaning: 'Self-satisfaction / inner contentment',
              grammarNote: 'NCERT शब्दार्थ: अपनी तुष्टि (संबंध तत्पुरुष)',
            },
            {
              word: 'उथलापन',
              hindiMeaning: 'सतही / नीचा, गंभीरता का अभाव (पाठ में रूप: उथलेपन)',
              englishMeaning: 'Shallowness / superficiality',
              grammarNote: 'NCERT शब्दार्थ: सतही / नीचा (भाववाचक संज्ञा)',
            },
            {
              word: 'भाव-प्रवण',
              hindiMeaning: 'भावनाओं से भरा हुआ',
              englishMeaning: 'Rich in genuine emotion',
              grammarNote: 'NCERT शब्दार्थ: भावनाओं के भरा हुआ (करण तत्पुरुष)',
            },
            {
              word: 'सूक्ष्मता',
              hindiMeaning: 'बारीकी (पाठ में बहुवचन रूप: सूक्ष्मताओं)',
              englishMeaning: 'Subtlety / fine nuance',
              grammarNote: 'NCERT शब्दार्थ: बारीकी (सूक्ष्म + ता)',
            },
            {
              word: 'लालायित',
              hindiMeaning: 'इच्छुक, ललचाया हुआ',
              englishMeaning: 'Eager / yearning',
              grammarNote: 'NCERT शब्दार्थ: इच्छुक (विशेषण)',
            },
            {
              word: 'टप्पर-गाड़ी',
              hindiMeaning: 'अर्धगोलाकार छप्पर युक्त बैलगाड़ी',
              englishMeaning: 'Bullock cart with a curved canopy',
              grammarNote: 'NCERT शब्दार्थ: अर्धगोलाकार छप्पर युक्त बैलगाड़ी',
            },
            {
              word: 'हुज़ूम',
              hindiMeaning: 'भीड़, जनसमूह (पाठ पृ. 83 में वर्तनी: हुजूम)',
              englishMeaning: 'Throng / lively crowd',
              grammarNote: 'NCERT शब्दार्थ: भीड़ (अरबी संज्ञा)',
            },
            {
              word: 'प्रतिरूप',
              hindiMeaning: 'छाया, हूबहू रूप या प्रतिबिंब',
              englishMeaning: 'Counterpart / likeness / reflection',
              grammarNote: 'NCERT शब्दार्थ: छाया (‘प्रति’ उपसर्ग + रूप)',
            },
            {
              word: 'रूपांतरण',
              hindiMeaning: 'किसी एक रूप से दूसरे रूप में परिवर्तित करना',
              englishMeaning: 'Adaptation / transformation (e.g., story into film)',
              grammarNote: 'NCERT शब्दार्थ: किसी एक रूप से दूसरे रूप में परिवर्तित करना (रूप + अंतरण)',
            },
            {
              word: 'लोक-तत्त्व',
              hindiMeaning: 'लोक संबंधी, जनसामान्य की संस्कृति व परंपरा से जुड़ा गुण',
              englishMeaning: 'Folk element / grassroots authenticity',
              grammarNote: 'NCERT शब्दार्थ: लोक संबंधी (संबंध तत्पुरुष)',
            },
            {
              word: 'जीवन-सापेक्ष',
              hindiMeaning: 'जीवन के प्रति / वास्तविक जीवन से जुड़ा हुआ',
              englishMeaning: 'True to life / grounded in lived reality',
              grammarNote: 'NCERT शब्दार्थ: जीवन के प्रति',
            },
            {
              word: 'धन-लिप्सा',
              hindiMeaning: 'धन की अत्यधिक चाह, पैसे का लालच',
              englishMeaning: 'Greed / lust for wealth',
              grammarNote: 'NCERT शब्दार्थ: धन की अत्यधिक चाह (संबंध तत्पुरुष)',
            },
            {
              word: 'भरमाये',
              hindiMeaning: 'भ्रम होना / झूठा आश्वासन',
              englishMeaning: 'Deluded / misled by false promises',
              grammarNote: 'NCERT शब्दार्थ: भ्रम होना / झूठा आश्वासन',
            },
            {
              word: 'कला-मर्मज्ञ',
              hindiMeaning: 'कला की परख करने वाला, कला के मर्म का ज्ञाता',
              englishMeaning: 'Connoisseur of art',
              grammarNote: 'NCERT शब्दार्थ: कला की परख करने वाला',
            },
            {
              word: 'पटकथा',
              hindiMeaning: 'फ़िल्म या नाटक के दृश्य-संवादों की लिखित कथा (स्क्रीनप्ले)',
              englishMeaning: 'Screenplay / film script',
              grammarNote: 'संबंध तत्पुरुष (पट की कथा • रेणु जी ने स्वयं लिखी)',
            },
            {
              word: 'अर्से',
              hindiMeaning: 'समय, अवधि (पाठ प्रवेश में प्रयुक्त)',
              englishMeaning: 'Span of time / while',
              grammarNote: 'अरबी संज्ञा (अर्सा का तिर्यक् रूप)',
            },
            {
              word: 'उद्देश्यपरक',
              hindiMeaning: 'सार्थक लक्ष्य या सामाजिक संदेश से युक्त',
              englishMeaning: 'Purposeful / meaningful',
              grammarNote: 'तत्सम विशेषण (उद्देश्य + परक)',
            },
            {
              word: 'चमत्कृत',
              hindiMeaning: 'आश्चर्यचकित, प्रभावित',
              englishMeaning: 'Dazzled / astonished',
              grammarNote: 'तत्सम विशेषण (पाठ प्रवेश)',
            },
            {
              word: 'शोमैन',
              hindiMeaning: 'भव्य, आकर्षक और लोकप्रिय मनोरंजन प्रस्तुत करने वाला प्रसिद्ध फ़िल्मकार',
              englishMeaning: 'Showman (grand, charismatic entertainer)',
              grammarNote: 'आगत अंग्रेज़ी संज्ञा (राजकपूर के लिए प्रयुक्त)',
            },
          ],
        },
      ],
    },
    {
      id: 'muhavre',
      title: '6. पाठगत मुहावरे व वाक्य-प्रयोग (NCERT भाषा अध्ययन प्रश्न 3 सहित)',
      blocks: [
        {
          type: 'muhavre-list',
          title: '‘तीसरी कसम के शिल्पकार शैलेंद्र’ व NCERT भाषा अध्ययन (प्रश्न 3) के मुहावरे',
          note: 'NCERT भाषा अध्ययन प्रश्न 3 में दिए गए चारों मुहावरों सहित पाठ के प्रमुख मुहावरे।',
          items: [
            {
              idiom: 'चेहरा मुरझाना',
              hindiMeaning: 'उदास, मायूस या निराश हो जाना',
              englishMeaning: 'For one’s face to fall / lose cheer',
              examSentence:
                'राजकपूर द्वारा एडवांस पारिश्रमिक की गंभीर माँग सुनते ही शैलेंद्र का चेहरा मुरझा गया।',
              sourceLine: 'NCERT भाषा अध्ययन (प्रश्न 3) व अनुच्छेद 4: “शैलेंद्र का मुरझाया हुआ चेहरा देखकर...”',
            },
            {
              idiom: 'चक्कर खा जाना',
              hindiMeaning: 'हैरान या भ्रमित हो जाना, समझ में न आना',
              englishMeaning: 'To be baffled / thrown into confusion',
              examSentence:
                'व्यावसायिक दाँव-पेंच की जटिल दुनिया में बड़े-बड़े अनुभवी निर्माता भी चक्कर खा जाते हैं।',
              sourceLine: 'NCERT भाषा अध्ययन (प्रश्न 3) व अनुच्छेद 4: “बड़े व्यावसायिक सूझबूझ वाले भी चक्कर खा जाते हैं...”',
            },
            {
              idiom: 'दो से चार बनाना',
              hindiMeaning: 'अधिक मुनाफ़ा कमाने का व्यावसायिक गणित लगाना',
              englishMeaning: 'To double one’s money / pursue commercial profit',
              examSentence:
                '‘तीसरी कसम’ की मानवीय संवेदना केवल दो से चार बनाने वाले स्वार्थी वितरकों की समझ से परे थी।',
              sourceLine: 'NCERT भाषा अध्ययन (प्रश्न 3) व अनुच्छेद 4: “किसी दो से चार बनाने का गणित जानने वाले...”',
            },
            {
              idiom: 'आँखों से बोलना',
              hindiMeaning: 'बिना शब्दों के केवल आँखों के भावों से गहन संवेदना व्यक्त करना',
              englishMeaning: 'To speak silently through expressive eyes',
              examSentence:
                '‘तीसरी कसम’ में वहीदा रहमान ने हीराबाई की मौन व्यथा में ज़ुबान से नहीं, आँखों से बोलकर प्राण फूँक दिए।',
              sourceLine: 'NCERT भाषा अध्ययन (प्रश्न 3) व अनुच्छेद 6: “तब हीराबाई ज़ुबान से नहीं, आँखों से बोलती है।”',
            },
            {
              idiom: 'सातवें आसमान पर होना',
              hindiMeaning: 'लोकप्रियता, सफलता या घमंड के चरम शिखर पर होना',
              englishMeaning: 'To be at the very pinnacle of fame or success',
              examSentence:
                'सन् साठ के दशक में संगीतकार शंकर-जयकिशन की लोकप्रियता सातवें आसमान पर थी।',
              sourceLine: 'अनुच्छेद 4: “जिनकी लोकप्रियता उन दिनों सातवें आसमान पर थी...”',
            },
            {
              idiom: 'कोसों दूर रहना',
              hindiMeaning: 'किसी बात या लालच से बिलकुल अलग और निर्लिप्त रहना',
              englishMeaning: 'To stay miles away from / remain untouched by',
              examSentence:
                'फ़िल्मी चकाचौंध के बीच रहते हुए भी शैलेंद्र धन-लिप्सा और दिखावे से कोसों दूर थे।',
              sourceLine: 'अनुच्छेद 8: “यश और धन-लिप्सा से कोसों दूर थे।”',
            },
            {
              idiom: 'हावी होना',
              hindiMeaning: 'किसी अन्य व्यक्तित्व या भाव पर पूरी तरह प्रभाव जमा लेना',
              englishMeaning: 'To overshadow / dominate',
              examSentence:
                '‘तीसरी कसम’ में देहाती गाड़ीवान हीरामन के भोलेपन पर राजकपूर का स्टारडम हावी नहीं हो सका।',
              sourceLine: 'अनुच्छेद 6: “हीरामन पर राजकपूर हावी नहीं हो सका।”',
            },
            {
              idiom: 'न्योछावर होना',
              hindiMeaning: 'किसी पर पूर्णतः समर्पित या मुग्ध हो जाना',
              englishMeaning: 'To dedicate oneself / be completely captivated by',
              examSentence:
                'सीधा-सादा हीरामन हीराबाई की भोली सूरत और मधुर बोली पर तन-मन से न्योछावर हो गया।',
              sourceLine: 'अनुच्छेद 10: “उसकी ‘मनुआ-नटुआ’ जैसी भोली सूरत पर न्योछावर होता हुआ...”',
            },
          ],
        },
      ],
    },
    {
      id: 'samas',
      title: '7. पाठगत समास-विग्रह व NCERT भाषा-अध्ययन (पृ. 85–86)',
      blocks: [
        {
          type: 'samas-list',
          title: '‘तीसरी कसम के शिल्पकार शैलेंद्र’ आधारित प्रमुख समास (NCERT प्रश्न 6 सहित)',
          note: 'NCERT भाषा अध्ययन प्रश्न 6 के तीनों समस्तपदों सहित पाठ के सभी प्रमुख समास-विग्रह।',
          items: [
            {
              samastPad: 'कला-मर्मज्ञ',
              vigrah: 'कला का मर्मज्ञ (कला के मर्म को जानने वाला)',
              samasType: 'संबंध तत्पुरुष समास (अथवा उपपद तत्पुरुष)',
              englishMeaning: 'Connoisseur of art — NCERT भाषा अध्ययन प्रश्न 6(क)।',
            },
            {
              samastPad: 'लोकप्रिय',
              vigrah: 'लोक में प्रिय',
              samasType: 'अधिकरण तत्पुरुष समास',
              englishMeaning: 'Popular among the masses — NCERT भाषा अध्ययन प्रश्न 6(ख) (‘में’ कारक चिह्न)।',
            },
            {
              samastPad: 'राष्ट्रपति',
              vigrah: 'राष्ट्र का पति (स्वामी / प्रमुख)',
              samasType: 'संबंध तत्पुरुष समास',
              englishMeaning: 'President of the nation — NCERT भाषा अध्ययन प्रश्न 6(ग)।',
            },
            {
              samastPad: 'चित्रांकन',
              vigrah: 'चित्र का अंकन',
              samasType: 'संबंध तत्पुरुष समास',
              englishMeaning: 'Portrayal / depiction — ‘का’ कारक विभक्ति लोप।',
            },
            {
              samastPad: 'आत्म-संतुष्टि',
              vigrah: 'आत्मा (स्वयं) की संतुष्टि',
              samasType: 'संबंध तत्पुरुष समास',
              englishMeaning: 'Self-satisfaction — ‘की’ कारक विभक्ति लोप।',
            },
            {
              samastPad: 'भाव-प्रवण',
              vigrah: 'भाव से प्रवण (भावनाओं से भरा हुआ)',
              samasType: 'करण तत्पुरुष समास',
              englishMeaning: 'Filled with deep emotion — ‘से’ विभक्ति लोप।',
            },
            {
              samastPad: 'धन-लिप्सा',
              vigrah: 'धन की लिप्सा (लालसा)',
              samasType: 'संबंध तत्पुरुष समास',
              englishMeaning: 'Greed for wealth — ‘की’ कारक विभक्ति लोप।',
            },
            {
              samastPad: 'लोक-तत्त्व',
              vigrah: 'लोक का तत्त्व',
              samasType: 'संबंध तत्पुरुष समास',
              englishMeaning: 'Folk essence — ‘का’ विभक्ति लोप।',
            },
            {
              samastPad: 'स्वर्णपदक',
              vigrah: 'स्वर्ण (सोने) का पदक',
              samasType: 'संबंध तत्पुरुष समास',
              englishMeaning: 'Gold medal — ‘राष्ट्रपति स्वर्णपदक’ प्रसंग से।',
            },
            {
              samastPad: 'पटकथा',
              vigrah: 'पट (परदे) की कथा',
              samasType: 'संबंध तत्पुरुष समास',
              englishMeaning: 'Screenplay — फणीश्वरनाथ रेणु द्वारा रचित।',
            },
          ],
        },
        {
          type: 'table',
          caption: 'NCERT भाषा अध्ययन (प्रश्न 1 व 2) — ‘से’ के विभिन्न प्रयोग एवं वाक्य-संरचना विश्लेषण',
          headers: ['NCERT अभ्यास प्रश्न', 'पाठ का मूल वाक्य', 'व्याकरणिक व संरचनात्मक विश्लेषण'],
          rows: [
            [
              'प्रश्न 1 (क) — ‘से’ का प्रयोग',
              'राजकपूर ने एक अच्छे और सच्चे मित्र की हैसियत **से** शैलेंद्र को फ़िल्म की असफलता के खतरों **से** आगाह भी किया।',
              'पहला ‘से’ = **करण/रीति कारक** (मित्र की हैसियत के रूप में/द्वारा); दूसरा ‘से’ = **अपादान/सावधानी संदर्भ** (खतरों के प्रति सचेत करना)।',
            ],
            [
              'प्रश्न 1 (ख) — ‘से’ का प्रयोग',
              'रातें दसों दिशाओं **से** कहेंगी अपनी कहानियाँ।',
              '**अपादान कारक / स्रोत** — दसों दिशाओं से कहानियों का उद्गम या प्रसार व्यक्त हो रहा है।',
            ],
            [
              'प्रश्न 1 (ग) — ‘से’ का प्रयोग',
              'फ़िल्म इंडस्ट्री में रहते हुए भी वहाँ के तौर-तरीकों **से** नावाकिफ़ थे।',
              '**संबंध / अपादान सूचक प्रयोग** — ‘नावाकिफ़’ (अनजान/दूर) विशेषण के साथ अलगाव या अनभिज्ञता का भाव।',
            ],
            [
              'प्रश्न 1 (घ) — ‘से’ का प्रयोग',
              'दरअसल इस फ़िल्म की संवेदना किसी दो **से** चार बनाने के गणित जानने वाले की समझ **से** परे थी।',
              '‘दो से चार’ = **प्रारंभ/आधार बिंदु** (2 से बढ़कर 4); ‘समझ से परे’ = **अपादान/दूरी सूचक** (समझ की सीमा से बाहर)।',
            ],
            [
              'प्रश्न 1 (ङ) — ‘से’ का प्रयोग',
              'शैलेंद्र राजकपूर की इस याराना दोस्ती **से** परिचित तो थे।',
              '**करण / संबद्धता सूचक प्रयोग** — ‘परिचित’ के योग में ‘से’ का प्रयोग।',
            ],
            [
              'प्रश्न 2 (क, ख, ग, घ) — वाक्य-संरचना',
              '• (क) ‘तीसरी कसम’ फ़िल्म नहीं, सैल्यूलाइड पर लिखी कविता थी।\n• (ख) उन्होंने ऐसी फ़िल्म बनाई थी जिसे सच्चा कवि-हृदय ही बना सकता था।\n• (ग) फ़िल्म कब आई, कब चली गई, मालूम ही नहीं पड़ा।\n• (घ) खालिस देहाती भुच्च गाड़ीवान जो सिर्फ़ दिल की ज़ुबान समझता है, दिमाग की नहीं।',
              '• **(क)** निषेधात्मक विरोध द्वारा परिभाषा (नहीं X, बल्कि Y) — **संयुक्त/सरल व्याख्यात्मक वाक्य**।\n• **(ख)** ‘ऐसी... जिसे’ योजक द्वारा **मिश्र वाक्य** (विशेषण उपवाक्य)।\n• **(ग)** संक्षिप्त उपवाक्यों (‘कब आई, कब चली गई’) से क्षिप्रता दर्शाता **मिश्र वाक्य**।\n• **(घ)** ‘जो...’ द्वारा संज्ञा ‘गाड़ीवान’ का विस्तार करता **मिश्र वाक्य** (विरोधी पक्ष: दिल बनाम दिमाग)।',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'NCERT भाषा अध्ययन (प्रश्न 4 व 5) — हिंदी पर्याय शब्द तथा संधिविच्छेद',
          headers: ['NCERT प्रश्न', 'शब्द', 'मानक उत्तर (हिंदी पर्याय / संधिविच्छेद व भेद)'],
          rows: [
            ['प्रश्न 4 (क) हिंदी पर्याय', 'शिद्दत', '**तीव्रता**, प्रबलता, गहराई'],
            ['प्रश्न 4 (ख) हिंदी पर्याय', 'याराना', '**दोस्ताना**, मैत्रीपूर्ण'],
            ['प्रश्न 4 (ग) हिंदी पर्याय', 'बमुश्किल', '**कठिनाई से**, बड़ी मुश्किल से'],
            ['प्रश्न 4 (घ) हिंदी पर्याय', 'खालिस', '**शुद्ध**, विशुद्ध, निरा'],
            ['प्रश्न 4 (ङ) हिंदी पर्याय', 'नावाकिफ़', '**अनजान**, अपरिचित, अनभिज्ञ'],
            ['प्रश्न 4 (च) हिंदी पर्याय', 'यकीन', '**विश्वास**, भरोसा'],
            ['प्रश्न 4 (छ) हिंदी पर्याय', 'हावी', '**प्रभावी**, प्रबल (पूर्ण अधिकार जमाने वाला)'],
            ['प्रश्न 4 (ज) हिंदी पर्याय', 'रेशा', '**तंतु**, सूक्ष्म कण या बारीकी'],
            ['प्रश्न 5 (क) संधिविच्छेद', 'चित्रांकन', '**चित्र + अंकन** (दीर्घ स्वर संधि: अ + अ = आ)'],
            ['प्रश्न 5 (ख) संधिविच्छेद', 'सर्वोत्कृष्ट', '**सर्व + उत्कृष्ट** (गुण स्वर संधि: अ + उ = ओ)'],
            ['प्रश्न 5 (ग) संधिविच्छेद', 'चर्मोत्कर्ष', '**चर्म + उत्कर्ष** (गुण स्वर संधि: अ + उ = ओ)'],
            ['प्रश्न 5 (घ) संधिविच्छेद', 'रूपांतरण', '**रूप + अंतरण** (दीर्घ स्वर संधि: अ + अ = आ)'],
            ['प्रश्न 5 (ङ) संधिविच्छेद', 'घनानंद', '**घन + आनंद** (दीर्घ स्वर संधि: अ + आ = आ)'],
          ],
        },
      ],
    },
    {
      id: 'qa',
      title: '8. NCERT प्रश्न-अभ्यास (मौखिक, लिखित क/ख/ग) व Competency Q&A',
      blocks: [
        {
          type: 'qa',
          question:
            'मौखिक प्रश्न (1 से 4): (1) ‘तीसरी कसम’ फ़िल्म को कौन-कौन से पुरस्कारों से सम्मानित किया गया है? (2) शैलेंद्र ने कितनी फ़िल्में बनाईं? (3) राजकपूर द्वारा निर्देशित कुछ फ़िल्मों के नाम बताइए। (4) ‘तीसरी कसम’ फ़िल्म के नायक व नायिकाओं के नाम बताइए और फ़िल्म में इन्होंने किन पात्रों का अभिनय किया है?',
          answer:
            '(1) ‘तीसरी कसम’ को ‘राष्ट्रपति स्वर्णपदक’, बंगाल फ़िल्म जर्नलिस्ट एसोसिएशन द्वारा सर्वश्रेष्ठ फ़िल्म पुरस्कार तथा मास्को फ़िल्म फ़ेस्टिवल सहित कई अन्य पुरस्कारों से सम्मानित किया गया। (2) शैलेंद्र ने अपने जीवन में केवल एक ही फ़िल्म (‘तीसरी कसम’) बनाई—यह उनके जीवन की पहली और अंतिम फ़िल्म थी। (3) पाठ में उल्लिखित राजकपूर द्वारा निर्मित/निर्देशित फ़िल्में हैं—‘संगम’, ‘मेरा नाम जोकर’, ‘अजन्ता’, ‘मैं और मेरा दोस्त’ तथा ‘सत्यम् शिवम् सुंदरम्’ (यद्यपि उनमें से कुछ पूर्ण न हो सकीं)। (4) ‘तीसरी कसम’ के नायक राजकपूर हैं जिन्होंने ग्रामीण गाड़ीवान ‘हीरामन’ की भूमिका निभाई, और नायिका वहीदा रहमान हैं जिन्होंने नौटंकी की नर्तकी ‘हीराबाई’ का अभिनय किया।',
          markingTip:
            'English Helper: Covers Oral Q1–Q4: Awards (President’s Gold Medal, BFJA, Moscow), 1 film by Shailendra, Raj Kapoor’s projects, and Hiraman (Raj Kapoor) / Hirabai (Waheeda Rehman).',
          marks: 4,
          tag: 'NCERT प्रश्न-अभ्यास',
        },
        {
          type: 'qa',
          question:
            'मौखिक प्रश्न (5 से 8): (5) फ़िल्म ‘तीसरी कसम’ का निर्माण किसने किया था? (6) राजकपूर ने ‘मेरा नाम जोकर’ के निर्माण के समय किस बात की कल्पना भी नहीं की थी? (7) राजकपूर की किस बात पर शैलेंद्र का चेहरा मुरझा गया? (8) फ़िल्म समीक्षक राजकपूर को किस तरह का कलाकार मानते थे?',
          answer:
            '(5) फ़िल्म ‘तीसरी कसम’ का निर्माण प्रसिद्ध कवि और गीतकार शैलेंद्र ने किया था। (6) सन् 1965 में ‘मेरा नाम जोकर’ का निर्माण आरंभ करते समय राजकपूर ने यह कल्पना भी नहीं की थी कि इस फ़िल्म का एक ही भाग बनाने में छह वर्षों का समय लग जाएगा। (7) जब राजकपूर ने गंभीरतापूर्वक कहा कि “मेरा पारिश्रमिक एडवांस देना होगा”, तब ज़िंदगी-भर की दोस्ती का यह बदला सुनकर शैलेंद्र का चेहरा मुरझा गया (बाद में राजकपूर ने हँसकर केवल एक रुपया माँग लिया)। (8) फ़िल्म समीक्षक और कला-मर्मज्ञ राजकपूर को ‘आँखों से बात करने वाला कलाकार’ मानते थे।',
          markingTip:
            'English Helper: Covers Oral Q5–Q8: Producer Shailendra, 6 years for 1 part of Mera Naam Joker, demanding advance fee, and critics calling Raj Kapoor an actor who speaks with his eyes.',
          marks: 4,
          tag: 'NCERT प्रश्न-अभ्यास',
        },
        {
          type: 'qa',
          question:
            'लिखित (क) प्रश्न 1 व 2: (1) ‘तीसरी कसम’ फ़िल्म को ‘सैल्यूलाइड पर लिखी कविता’ क्यों कहा गया है? (2) ‘तीसरी कसम’ फ़िल्म को खरीददार क्यों नहीं मिल रहे थे?',
          answer:
            '(1) जिस प्रकार एक उत्कृष्ट कविता कम शब्दों में गहन मानवीय संवेदना और कोमल भावनाओं को अभिव्यक्त करती है, उसी प्रकार ‘तीसरी कसम’ ने बिना किसी व्यावसायिक शोर-शराबे के ग्रामीण भारत, लोकगीतों और हीरामन-हीराबाई की निश्छल करुणा को कैमरे की रील पर साकार किया—इसलिए इसे ‘सैल्यूलाइड पर लिखी कविता’ कहा गया है। (2) फ़िल्म में राजकपूर-वहीदा रहमान जैसे बड़े सितारे और शंकर-जयकिशन का लोकप्रिय संगीत होने पर भी इसे खरीददार (वितरक) नहीं मिल रहे थे, क्योंकि इसकी गहन संवेदना ‘दो से चार बनाने’ का मुनाफ़ाख़ोर गणित जानने वाले व्यापारियों की समझ से परे थी और इसमें रची-बसी करुणा तराज़ू पर तौली जा सकने वाली चीज़ नहीं थी।',
          markingTip:
            'English Helper: Written (क) Q1 & Q2: Poetic sensitivity on film reel vs commercial distributors’ inability to monetise subtle compassion.',
          marks: 4,
          tag: 'NCERT प्रश्न-अभ्यास',
        },
        {
          type: 'qa',
          question:
            'लिखित (क) प्रश्न 3, 4 व 5: (3) शैलेंद्र के अनुसार कलाकार का कर्तव्य क्या है? (4) फ़िल्मों में त्रासद स्थितियों का चित्रांकन ग्लोरीफ़ाई क्यों कर दिया जाता है? (5) ‘शैलेंद्र ने राजकपूर की भावनाओं को शब्द दिए हैं’–इस कथन से आप क्या समझते हैं?',
          answer:
            '(3) शैलेंद्र के अनुसार कलाकार का कर्तव्य यह है कि वह दर्शकों की सस्ती रुचि की आड़ में उन पर उथलापन न थोपे, बल्कि उपभोक्ता (दर्शक) की रुचियों का परिष्कार करने का प्रयत्न करे। (4) व्यावसायिक फ़िल्मों में त्रासद स्थितियों को बढ़ा-चढ़ाकर ‘ग्लोरीफ़ाई’ इसलिए किया जाता है ताकि दुख का वीभत्स व नाटकीय रूप दिखाकर दर्शकों का भावनात्मक शोषण किया जा सके और बॉक्स-ऑफ़िस पर अधिक धन कमाया जा सके। (5) ‘शैलेंद्र ने राजकपूर की भावनाओं को शब्द दिए हैं’ का अर्थ है कि शैलेंद्र ने राजकपूर की फ़िल्मों के लिए ऐसे भावप्रवण व सार्थक गीत लिखे जिन्होंने राजकपूर के मूक अभिनय, संवेदनाओं और चरित्र को मधुर वाणी प्रदान की।',
          markingTip:
            'English Helper: Written (क) Q3–Q5: Elevating audience taste, emotional exploitation via melodrama, and Shailendra giving poetic voice to Raj Kapoor’s screen feelings.',
          marks: 6,
          tag: 'NCERT प्रश्न-अभ्यास',
        },
        {
          type: 'qa',
          question:
            'लिखित (क) प्रश्न 6 व 7: (6) लेखक ने राजकपूर को एशिया का सबसे बड़ा शोमैन कहा है। शोमैन से आप क्या समझते हैं? (7) फ़िल्म ‘श्री 420’ के गीत ‘रातों दसों दिशाओं से कहेंगी अपनी कहानियाँ’ पर संगीतकार जयकिशन ने आपत्ति क्यों की?',
          answer:
            '(6) ‘शोमैन’ का अर्थ है ऐसा अत्यंत लोकप्रिय, प्रभावशाली और करिश्माई कला-प्रस्तुतकर्ता जो भव्यता, मनोरंजन व अनूठे अंदाज़ से जनसामान्य के दिलों पर राज करता हो। राजकपूर अपने शानदार फ़िल्म-निर्माण व अद्वितीय अभिनय के कारण एशिया के सबसे बड़े शोमैन कहलाते थे। (7) ‘श्री 420’ के गीत ‘प्यार हुआ, इकरार हुआ है’ के अंतरे ‘रातें दसों दिशाओं से कहेंगी अपनी कहानियाँ’ पर जयकिशन ने यह आपत्ति की कि आम दर्शक तो ‘चार दिशाएँ’ ही जानते और समझते हैं, ‘दस दिशाएँ’ नहीं—अतः वे चाहते थे कि शैलेंद्र पंक्ति बदल दें, किंतु शैलेंद्र ने परिवर्तन से इनकार कर दिया।',
          markingTip:
            'English Helper: Written (क) Q6–Q7: Definition of Showman and Jaikishan’s objection that ordinary audiences understand 4 directions rather than 10.',
          marks: 4,
          tag: 'NCERT प्रश्न-अभ्यास',
        },
        {
          type: 'qa',
          question:
            'लिखित (ख) प्रश्न 1 व 2: (1) राजकपूर द्वारा फ़िल्म की असफलता के खतरों से आगाह करने पर भी शैलेंद्र ने यह फ़िल्म क्यों बनाई? (2) ‘तीसरी कसम’ में राजकपूर का महिमामय व्यक्तित्व किस तरह हीरामन की आत्मा में उतर गया है?',
          answer:
            '(1) राजकपूर ने सच्चे मित्र की हैसियत से शैलेंद्र को व्यावसायिक असफलता के खतरों से सचेत किया था, पर शैलेंद्र कोई मुनाफ़ाख़ोर व्यापारी नहीं बल्कि एक आदर्शवादी भावुक कवि थे। उन्हें अपार संपत्ति या यश की उतनी कामना नहीं थी जितनी आत्म-संतुष्टि के सुख की अभिलाषा थी, इसलिए उन्होंने जोखिम उठाकर भी यह कलात्मक फ़िल्म बनाई। (2) यद्यपि उस समय राजकपूर एशिया के सबसे बड़े शोमैन के रूप में किंवदंती बन चुके थे, किंतु ‘तीसरी कसम’ में उनका स्टारडम कहीं आड़े नहीं आया। वे खालिस देहाती भुच्च गाड़ीवान हीरामन के साथ एकाकार हो गए—हीराबाई की बोली पर रीझते, उसकी भोली सूरत पर न्योछावर होते और तनिक-सी उपेक्षा पर अपने अस्तित्व से जूझते हुए वे अभिनय नहीं करते, बल्कि स्वयं हीरामन में ढल जाते हैं।',
          markingTip:
            'English Helper: Written (ख) Q1–Q2 (50–60 words): Idealism & inner satisfaction over wealth; Raj Kapoor dissolving his legendary stardom into rustic Hiraman.',
          marks: 6,
          tag: 'NCERT प्रश्न-अभ्यास',
        },
        {
          type: 'qa',
          question:
            'लिखित (ख) प्रश्न 3 व 4: (3) लेखक ने ऐसा क्यों लिखा है कि ‘तीसरी कसम’ ने साहित्य-रचना के साथ शत-प्रतिशत न्याय किया है? (4) शैलेंद्र के गीतों की क्या विशेषताएँ हैं? अपने शब्दों में लिखिए।',
          answer:
            '(3) प्रायः फ़िल्में साहित्यिक रचनाओं के मूल भाव को तोड़-मरोड़ देती हैं, किंतु ‘तीसरी कसम’ की पटकथा स्वयं मूल कहानीकार फणीश्वरनाथ रेणु ने तैयार की थी। कहानी का रेशा-रेशा और उसकी छोटी-से-छोटी बारीकियाँ फ़िल्म में पूरी तरह उतर आईं; राजकपूर व वहीदा रहमान के जीवंत अभिनय और लोकगीतों ने रेणु की मूल संवेदना से कोई समझौता नहीं किया, इसलिए इसे साहित्य के साथ शत-प्रतिशत न्याय कहा गया है। (4) शैलेंद्र के गीत झूठे अभिजात्य से मुक्त, भाव-प्रवण और सहज थे—दुरूह या बनावटी नहीं। उनमें शांत नदी का प्रवाह और समुद्र की गहराई थी। उनके गीतों में केवल करुणा ही नहीं बल्कि दुख से जूझने और आगे बढ़ने का संदेश भी निहित रहता था (जैसे ‘मेरा जूता है जापानी...’ तथा ‘सजनवा बैरी हो गए हमार...’)।',
          markingTip:
            'English Helper: Written (ख) Q3–Q4: Renu’s own screenplay preserved every nuance; Shailendra’s songs combined emotional depth, river-like ease, and resilience.',
          marks: 6,
          tag: 'NCERT प्रश्न-अभ्यास',
        },
        {
          type: 'qa',
          question:
            'लिखित (ख) प्रश्न 5, 6 व 7: (5) फ़िल्म निर्माता के रूप में शैलेंद्र की विशेषताओं पर प्रकाश डालिए। (6) शैलेंद्र के निजी जीवन की छाप उनकी फ़िल्म में झलकती है–कैसे? (7) ‘तीसरी कसम’ फ़िल्म कोई सच्चा कवि-हृदय ही बना सकता था—आप कहाँ तक सहमत हैं?',
          answer:
            '(5) फ़िल्म निर्माता के रूप में शैलेंद्र व्यावसायिक जोड़-तोड़ से सर्वथा अनजान, आदर्शवादी व संवेदनशील थे। उन्होंने सस्ते मनोरंजन व झूठी चकाचौंध के बजाय साहित्यिक ईमानदारी, लोक-तत्त्व व दर्शक की रुचि के परिष्कार को चुना। (6) शैलेंद्र फ़िल्म इंडस्ट्री की चकाचौंध में रहकर भी यश और धन-लिप्सा से कोसों दूर थे, वे आदमियत व करुणा के पक्षधर थे और व्यथा को पराजय नहीं संघर्ष की प्रेरणा मानते थे—यही सादगी, सहज करुणा और संवेदनशीलता उनकी फ़िल्म ‘तीसरी कसम’ के कण-कण में झलकती है। (7) हम इस कथन से शत-प्रतिशत सहमत हैं क्योंकि मुनाफ़े को ताक पर रखकर त्रासद जीवन को बिना ग्लोरीफ़ाई किए सूक्ष्म व काव्यात्मक ढंग से पर्दे पर उतारने का साहस केवल एक सच्चा कवि-हृदय ही कर सकता है।',
          markingTip:
            'English Helper: Written (ख) Q5–Q7: Shailendra as an idealistic producer whose personal simplicity and refusal of greed shaped the poetic film.',
          marks: 6,
          tag: 'मूल्यपरक प्रश्न (Competency)',
        },
        {
          type: 'qa',
          question:
            'लिखित (ग) आशय स्पष्ट कीजिए — (1) “...वह तो एक आदर्शवादी भावुक कवि था, जिसे अपार संपत्ति और यश तक की इतनी कामना नहीं थी जितनी आत्म-संतुष्टि के सुख की अभिलाषा थी।” तथा (2) “उनका यह दृढ़ मंतव्य था कि दर्शकों की रुचि की आड़ में हमें उथलेपन को उन पर नहीं थोपना चाहिए। कलाकार का यह कर्तव्य भी है कि वह उपभोक्ता की रुचियों का परिष्कार करने का प्रयत्न करे।”',
          answer:
            '(1) **आशय:** शैलेंद्र बाज़ारवाद से प्रेरित मुनाफ़ाख़ोर निर्माता नहीं थे। वे धन-दौलत और शोहरत बटोरने के बजाय ऐसी कला रचने में विश्वास रखते थे जिससे उनके अपने कवि-हृदय को सच्चा आत्म-संतोष और आनंद प्राप्त हो। (2) **आशय:** प्रायः फ़िल्मकार ‘जनता यही पसंद करती है’ का बहाना बनाकर सस्ता व अश्लील मनोरंजन परोसते हैं। शैलेंद्र इसके घोर विरोधी थे; उनका मानना था कि सच्चे कलाकार को अपने श्रेष्ठ सृजन द्वारा दर्शकों की सौंदर्य-चेतना और रुचि का स्तर ऊँचा उठाना चाहिए।',
          markingTip:
            'English Helper: Explain-with-reference (ग) 1 & 2: Inner creative fulfilment over wealth; artist’s duty to refine rather than degrade public taste.',
          marks: 4,
          tag: 'पठित गद्यांश',
        },
        {
          type: 'qa',
          question:
            'लिखित (ग) आशय स्पष्ट कीजिए — (3) “व्यथा आदमी को पराजित नहीं करती, उसे आगे बढ़ने का संदेश देती है।” (4) “दरअसल इस फ़िल्म की संवेदना किसी दो से चार बनाने वाले की समझ से परे है।” (5) “उनके गीत भाव-प्रवण थे–दुरूह नहीं।”',
          answer:
            '(3) **आशय:** शैलेंद्र के जीवन और गीतों में दुख मनुष्य को तोड़कर निराश नहीं करता, बल्कि जीवन के संघर्षों से जूझने, धैर्य रखने और अपनी मंज़िल की ओर निरंतर अग्रसर होने की प्रेरणा देता है। (4) **आशय:** जो व्यापारी केवल पूँजी निवेश कर दो से चार बनाने (दोगुना मुनाफ़ा कमाने) का गणित जानते हैं, वे ‘तीसरी कसम’ जैसी सूक्ष्म, मानवीय और करुणापूर्ण कला के मर्म को कभी नहीं समझ सकते। (5) **आशय:** शैलेंद्र के गीत गहन भावनाओं और अर्थ की गंभीरता से परिपूर्ण थे, किंतु उनकी भाषा इतनी सहज और सरल थी कि आम जनमानस भी बिना किसी क्लिष्टता (दुरूहता) के उन्हें हृदयंगम कर लेता था।',
          markingTip:
            'English Helper: Explain-with-reference (ग) 3, 4 & 5: Sorrow inspiring resilience, commercial greed blind to artistic depth, and emotional clarity without obscurity.',
          marks: 5,
          tag: 'Title & Theme Justification',
        },
      ],
    },
  ],
};
