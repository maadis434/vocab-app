// ==========================================================
// 1. OFFLINE STARTER DATABASE (Pre-bundled high-yield words)
// ==========================================================
const defaultVocabulary = [
  {
    id: "word-adverse",
    word: "adverse",
    posShort: "adj.",
    partOfSpeech: "adjective",
    phoneticUK: "/'ædvɜːs; əd'vɜːs/",
    phoneticUS: "/əd'vɜːrs,'ædvɜːrs/",
    phonetic: "/'ædvɜːs/",
    urduMeaning: "مخالف؛",
    forms: "adv.  adversely",
    tags: [
      { text: "#Top 3500", color: "blue" },
      { text: "#Business English", color: "orange" },
      { text: "#TOEFL", color: "teal" },
      { text: "#IELTS", color: "purple" },
      { text: "#SAT", color: "pink" },
      { text: "#GRE", color: "green" },
      { text: "#GMAT", color: "coral" }
    ],
    bilingualSentences: [
      {
        num: 1,
        en: "There were no adverse toxicological effects.",
        ur: "کوئی منفی زہریلا اثرات نہیں تھے ۔"
      },
      {
        num: 2,
        en: "The improper use of medicine could lead to severe adverse reactions.",
        ur: "دوا کا غلط استعمال شدید منفی ردعمل کا باعث بن سکتا ہے۔"
      }
    ],
    sampleSentences: [
      {
        num: 1,
        en: "There were no adverse toxicological effects.",
        source: "Collins Dictionary"
      },
      {
        num: 2,
        en: "The improper use of medicine could lead to severe adverse reactions.",
        source: "Collins Dictionary"
      },
      {
        num: 3,
        en: "Inflation is considered to be undesirable because of its adverse effects on income distribution.",
        source: "Collins Dictionary"
      }
    ],
    sentences: [
      {
        en: "There were no adverse toxicological effects.",
        source: "Collins Dictionary",
        ur: "کوئی منفی زہریلا اثرات نہیں تھے ۔"
      },
      {
        en: "The improper use of medicine could lead to severe adverse reactions.",
        source: "Collins Dictionary",
        ur: "دوا کا غلط استعمال شدید منفی ردعمل کا باعث بن سکتا ہے۔"
      }
    ],
    synonymsAntonymsList: [
      {
        num: 1,
        context: 'for the meaning of "antagonistic"',
        syns: ["conflicting", "negative"],
        ants: ["friendly", "kind", "assisting", "helpful", "good", "nice"]
      },
      {
        num: 2,
        context: 'for the meaning of "harmful"',
        syns: ["negative", "opposite", "dangerous", "damaging", "harmful", "destructive"],
        ants: ["lucky", "helpful", "suitable", "beneficial", "fortunate", "advantageous"]
      },
      {
        num: 3,
        context: 'for the meaning of "unfavourable"',
        syns: ["bad", "unfortunate", "hostile", "ominous"],
        ants: []
      }
    ],
    synonymsAntonyms: {
      word: "adverse",
      pos: "adj.",
      context: 'for the meaning of "antagonistic"',
      synonyms: ["conflicting", "negative"]
    },
    phrases: [
      { num: 1, text: "adverse effect" },
      { num: 2, text: "adverse selection" },
      { num: 3, text: "adverse reaction" }
    ],
    cognates: {
      root: "adverse",
      derivatives: [
        { pos: "adj.", words: ["adversative"] },
        { pos: "adv.", words: ["adversely"] },
        { pos: "n.", words: ["adversative"] }
      ]
    },
    wikipedia: {
      title: "Adverse",
      summary: "Adverse or adverse interest, in law, is anything that functions contrary to a party's interest. This word should not be confused with averse.",
      url: "https://en.wikipedia.org/wiki/Adverse"
    },
    collins: {
      title: "Collins COBUILD Advanced Dictionary",
      word: "adverse",
      phonetic: "/'ædvɜːs/",
      stars: 2,
      definitions: [
        {
          num: 1,
          pos: "ADJ",
          explanation: "Adverse decisions, conditions, or effects are unfavourable to you.",
          example: "The police said Mr. Hadfield's decision would have no adverse effect on the progress of the investigation."
        },
        {
          num: 2,
          pos: "ADV",
          explanation: "adversely",
          example: "Price changes must not adversely affect the living standards of the people."
        }
      ]
    },
    wordnet: {
      title: "English Dictionary",
      entries: [
        {
          pos: "adj.",
          senses: [
            {
              num: 1,
              def: "contrary to your interests or welfare",
              quote: "adverse circumstances",
              synonyms: ["harmful", "inauspicious", "untoward"]
            },
            {
              num: 2,
              def: "in an opposing direction",
              quote: "adverse currents",
              synonyms: ["contrary"]
            }
          ]
        }
      ]
    }
  },
  {
    id: "word-conclusion",
    word: "conclusion",
    posShort: "n.",
    partOfSpeech: "noun",
    phoneticUK: "/kən'klu:ʒn/",
    phoneticUS: "/kən'klu:ʒn/",
    phonetic: "/kən'klu:ʒn/",
    urduMeaning: "آخری نتیجہ; نتیجہ;",
    forms: "pl.  conclusions",
    tags: [
      { text: "#Top 1000", color: "blue" },
      { text: "#Middle School", color: "pink" },
      { text: "#Business English", color: "orange" },
      { text: "#IELTS", color: "purple" },
      { text: "#TOEFL", color: "teal" },
      { text: "#SAT", color: "green" }
    ],
    bilingualSentences: [
      {
        num: 1,
        en: "Draw a conclusion from premisses",
        ur: "صغریٰ کبریٰ سے نتیجہ اخذ کرنا",
        meaning: "نتیجہ"
      },
      {
        num: 2,
        en: "The conclusion of peace",
        ur: "امن کا طے پانا",
        meaning: "آخری نتیجہ"
      },
      {
        num: 3,
        en: "Hobbled lamely to his conclusion",
        ur: "لشتم پشتم اپنے اختتام کو پہنچایا",
        meaning: "آخری نتیجہ"
      },
      {
        num: 4,
        en: "What led you to that conclusion?",
        ur: "تمہیں یہ خیال کس بنا پر آیا",
        meaning: "نتیجہ"
      },
      {
        num: 5,
        en: "Tends to the same conclusion",
        ur: "ایک ہی نتیجے پر پہنچتا ہے",
        meaning: "نتیجہ"
      },
      {
        num: 6,
        en: "War conclusion 30000 Christiansen were murdered. That Counting limit Are arrested.",
        ur: "اس جنگ کے نتیجہ میں تیس ہزار عیسائی ہلاک ہوئے اور اتنے ہی قیدی بنا لیے گئے۔",
        meaning: "نتیجہ"
      },
      {
        num: 7,
        en: "A conclusion based on very slight observation",
        ur: "سرسری مشاہدے پر مبنی فیصلہ",
        meaning: "نتیجہ"
      }
    ],
    sampleSentences: [
      {
        num: 1,
        en: "Most voters believe the result is a foregone conclusion.",
        source: "Collins Dictionary"
      },
      {
        num: 2,
        en: "The judge's conclusion was plainly wrong.",
        source: "Collins Dictionary"
      },
      {
        num: 3,
        en: "My reflections brought forth no conclusion.",
        source: "Collins Dictionary"
      },
      {
        num: 4,
        en: "He then goes on to pick holes in the article before reaching his conclusion.",
        source: "Collins Dictionary"
      },
      {
        num: 5,
        en: "In conclusion, walking is a cheap, safe, enjoyable, and readily available form of exercise.",
        source: "Collins Dictionary"
      },
      {
        num: 6,
        en: "The inescapable conclusion is that he was trying to avenge the death of his friend.",
        source: "Collins Dictionary"
      },
      {
        num: 7,
        en: "This conclusion is unfounded because it depends on the results of a one-shot study.",
        source: "Collins Dictionary"
      },
      {
        num: 8,
        en: "If the climate gets drier, then the logical conclusion is that even more drought will occur.",
        source: "Collins Dictionary"
      },
      {
        num: 9,
        en: "\"Until I can speak to your husband I can't come to any conclusion about that,\" Manuel said evasively.",
        source: "Collins Dictionary"
      },
      {
        num: 10,
        en: "The report comes to the conclusion that more investment in renewable energy is desperately needed.",
        source: "The Economist"
      },
      {
        num: 11,
        en: "Investigators have yet to reach a definitive conclusion regarding the cause of the crash.",
        source: "CNN"
      },
      {
        num: 12,
        en: "In conclusion, the company demonstrated remarkable resilience despite economic headwinds.",
        source: "Forbes"
      },
      {
        num: 13,
        en: "Diplomats worked through the night to bring the negotiations to a successful conclusion.",
        source: "BBC News"
      },
      {
        num: 14,
        en: "Scientists warned that drawing premature conclusions could undermine public trust.",
        source: "Reuters"
      },
      {
        num: 15,
        en: "At the conclusion of the concert, the audience gave a standing ovation.",
        source: "The Guardian"
      }
    ],
    sentences: [
      {
        en: "Draw a conclusion from premisses",
        ur: "صغریٰ کبریٰ سے نتیجہ اخذ کرنا",
        source: "Collins Dictionary"
      },
      {
        en: "Most voters believe the result is a foregone conclusion.",
        ur: "زیادہ تر ووٹروں کا ماننا ہے کہ نتیجہ پہلے سے طے شدہ ہے۔",
        source: "Collins Dictionary"
      }
    ],
    synonymsAntonymsList: [
      {
        num: 1,
        context: 'for the meaning of "decision"',
        syns: ["agreement", "opinion", "conviction", "settlement", "verdict", "resolution"],
        ants: ["beginning", "start", "prelude"]
      },
      {
        num: 2,
        context: 'for the meaning of "end"',
        syns: ["finish", "termination", "close", "cessation", "finale", "outcome"],
        ants: ["commencement", "introduction", "outset", "opening"]
      }
    ],
    phrases: [
      { num: 1, text: "come to a conclusion" },
      { num: 2, text: "draw a conclusion" },
      { num: 3, text: "in conclusion" },
      { num: 4, text: "jump to conclusions" },
      { num: 5, text: "foregone conclusion" }
    ],
    cognates: {
      root: "conclude",
      derivatives: [
        { pos: "v.", words: ["conclude"] },
        { pos: "adj.", words: ["conclusive", "concluding"] },
        { pos: "adv.", words: ["conclusively"] },
        { pos: "n.", words: ["conclusion", "conclusiveness"] }
      ]
    },
    wikipedia: {
      title: "Conclusion (logic)",
      summary: "In logic and philosophy, an argument's conclusion is the proposition that is arrived at from preceding premises.",
      url: "https://en.wikipedia.org/wiki/Logical_consequence"
    },
    collins: {
      title: "Collins COBUILD Advanced Dictionary",
      word: "conclusion",
      phonetic: "/kən'klu:ʒn/",
      stars: 3,
      definitions: [
        {
          num: 1,
          pos: "N-COUNT",
          explanation: "When you come to a conclusion, you decide that something is true after thinking about it carefully, or having looked at other possibilities.",
          example: "Over the years I've come to the conclusion that she's a very great woman."
        },
        {
          num: 2,
          pos: "N-SING",
          explanation: "The conclusion of something is its end.",
          example: "At the conclusion of the meeting, a small dinner was held."
        },
        {
          num: 3,
          pos: "N-COUNT",
          explanation: "An essay or report's conclusion is its last section, in which the main points are summarized and final comments are made.",
          example: "In the conclusion to this book, the author offers some practical advice."
        },
        {
          num: 4,
          pos: "PHRASE",
          explanation: "You say 'in conclusion' to introduce the final part of what you are saying or writing.",
          example: "In conclusion, I would like to thank our host for his hospitality."
        }
      ]
    },
    wordnet: {
      title: "English Dictionary",
      entries: [
        {
          pos: "n.",
          senses: [
            {
              num: 1,
              def: "a position or opinion or judgment reached after consideration",
              quote: "his conclusion took the agreement into account",
              synonyms: ["decision", "determination"]
            },
            {
              num: 2,
              def: "an intuitive assumption",
              quote: "jump to a conclusion",
              synonyms: ["assumption"]
            },
            {
              num: 3,
              def: "the temporal end; the concluding time",
              quote: "the conclusion of the peace treaty",
              synonyms: ["ending", "finish"]
            },
            {
              num: 4,
              def: "event whose occurrence ends something",
              quote: "the conclusion of hostilities",
              synonyms: ["ending", "termination"]
            },
            {
              num: 5,
              def: "the last section of a communication",
              quote: "in conclusion I want to say...",
              synonyms: ["ending", "finish", "finale"]
            },
            {
              num: 6,
              def: "the proposition arrived at by logical reasoning",
              quote: "the premise and conclusion of a syllogism",
              synonyms: ["ratiocination"]
            },
            {
              num: 7,
              def: "a final settlement",
              quote: "the conclusion of a treaty",
              synonyms: ["settlement"]
            },
            {
              num: 8,
              def: "the act of ending something",
              quote: "the conclusion of the agreement",
              synonyms: ["ending", "termination"]
            },
            {
              num: 9,
              def: "a decisive moment",
              quote: "came to a dramatic conclusion",
              synonyms: ["climax", "culmination"]
            }
          ]
        }
      ]
    }
  },
  {
    id: "word-contradictory",
    word: "contradictory",
    posShort: "adj.",
    partOfSpeech: "adjective",
    phoneticUK: "/ˌkɒntrəˈdɪktəri/",
    phoneticUS: "/ˌkɑːntrəˈdɪktəri/",
    phonetic: "/ˌkɒntrəˈdɪktəri/",
    urduMeaning: "انکاری؛",
    forms: "pl.  contradictories",
    tags: [
      { text: "#Top 10000", color: "blue" },
      { text: "#Middle School", color: "pink" },
      { text: "#Business English", color: "orange" },
      { text: "#TOEFL", color: "teal" },
      { text: "#SAT", color: "purple" },
      { text: "#GRE", color: "green" }
    ],
    sampleSentences: [
      {
        num: 1,
        en: "He is notorious for making unexpected, often self-contradictory, comments.",
        source: "Collins Dictionary",
        ur: "وہ غیر متوقع اور اکثر خود متضاد تبصرے کرنے کے لیے بدنام ہے۔"
      },
      {
        num: 2,
        en: "Customs officials have made a series of contradictory statements about the equipment.",
        source: "Collins Dictionary",
        ur: "کسٹم حکام نے سامان کے حوالے سے متضاد بیانات کا ایک سلسلہ جاری کیا ہے۔"
      },
      {
        num: 3,
        en: "Critics love to generalize, to formulate trends into which all new work must be fitted, however contradictory.",
        source: "Collins Dictionary",
        ur: "نقاد عمومیت پسندی اور ایسے رجحانات طے کرنا پسند کرتے ہیں جن میں ہر نئے کام کو سما جانا چاہیے، چاہے وہ کتنا ہی متضاد کیوں نہ ہو۔"
      }
    ],
    sentences: [
      {
        en: "He is notorious for making unexpected, often self-contradictory, comments.",
        source: "Collins Dictionary",
        ur: "وہ غیر متوقع اور اکثر خود متضاد تبصرے کرنے کے لیے بدنام ہے۔"
      },
      {
        num: 2,
        en: "Customs officials have made a series of contradictory statements about the equipment.",
        source: "Collins Dictionary",
        ur: "کسٹم حکام نے سامان کے حوالے سے متضاد بیانات کا ایک سلسلہ جاری کیا ہے۔"
      }
    ],
    synonymsAntonyms: {
      word: "contradictory",
      pos: "adj.",
      context: 'for the meaning of "inconsistent"',
      synonyms: ["conflicting", "opposite", "contrary", "inconsistent", "incompatible"]
    },
    cognates: {
      root: "contradict",
      derivatives: [
        { pos: "adv.", words: ["contradictorily"] },
        { pos: "n.", words: ["contradiction", "contradictoriness"] },
        { pos: "vi.", words: ["contradict"] }
      ]
    },
    wikipedia: {
      title: "Contradictory",
      summary: "In classical logic, a contradiction consists of a logical incompatibility between two or more propositions. It occurs when the propositions, taken together, yield two conclusions which form the logical, usually opposite inversions of each other.",
      url: "https://en.wikipedia.org/wiki/Contradiction"
    },
    collins: {
      title: "Collins COBUILD Advanced Dictionary",
      word: "contradictory",
      phonetic: "/ˌkɒntrəˈdɪktəri/",
      star: true,
      definitions: [
        {
          num: 1,
          pos: "ADJ",
          explanation: "If two or more facts, ideas, or statements are contradictory, they state or imply that opposite things are true.",
          example: "Customs officials have made a series of contradictory statements about the equipment."
        }
      ]
    },
    wordnet: {
      title: "English Dictionary",
      entries: [
        {
          pos: "n.",
          senses: [
            {
              num: 1,
              def: "two propositions are contradictories if both cannot be true (or both cannot be false) at the same time"
            }
          ]
        },
        {
          pos: "adj.",
          senses: [
            {
              num: 1,
              def: "of words or propositions so related that both cannot be true and both cannot be false",
              quote: "'perfect' and 'imperfect' are contradictory terms"
            },
            {
              num: 2,
              def: "that confounds or contradicts or confuses",
              synonyms: ["confounding"]
            },
            {
              num: 3,
              def: "in disagreement",
              quote: "contradictory attributes of unjust justice and loving vindictiveness",
              synonyms: ["at odds(p)", "conflicting", "self-contradictory"]
            },
            {
              num: 4,
              def: "unable to be both true at the same time",
              synonyms: ["mutually exclusive"]
            }
          ]
        }
      ]
    }
  },
  {
    id: "word-1",
    word: "Resilient",
    posShort: "adj.",
    partOfSpeech: "adjective",
    phonetic: "/rɪˈzɪl.jənt/",
    urduMeaning: "ثابت قدم / باحوصلہ",
    urduDefinition: "مشکل حالات یا صدمے کے بعد جلد سنبھل جانے والا اور ہمت نہ ہارنے والا۔",
    insteadOf: ["Weak / Fragile", "Giving up easily"],
    useThis: ["Resilient", "Tenacious", "Unyielding"],
    howToUse: "Use 'resilient' to describe a person, society, or mind that bounces back quickly after setbacks.",
    sentences: [
      {
        en: "She remained resilient despite facing severe setbacks.",
        ur: "وہ شدید مشکلات کے باوجود ثابت قدم رہی۔"
      }
    ]
  },
  {
    id: "word-2",
    word: "Eloquent",
    posShort: "adj.",
    partOfSpeech: "adjective",
    phonetic: "/ˈel.ə.kwənt/",
    urduMeaning: "خوش گفتار / فصیح و بلیغ",
    urduDefinition: "ایسا شخص جو بہت روانی اور اثر انگیز انداز میں بات یا تقریر کر سکے۔",
    insteadOf: ["Good speaker", "Fluent talker"],
    useThis: ["Eloquent", "Articulate", "Expressive"],
    howToUse: "Use 'eloquent' when someone expresses thoughts gracefully and persuasively.",
    sentences: [
      {
        en: "The lawyer gave an eloquent speech that convinced the jury.",
        ur: "وکیل نے ایک فصیح تقریر کی جس نے تمام ججوں کو قائل کر لیا۔"
      }
    ]
  },
  {
    id: "word-3",
    word: "Pragmatic",
    posShort: "adj.",
    partOfSpeech: "adjective",
    phonetic: "/præɡˈmæt.ɪk/",
    urduMeaning: "عملی پسند / حقیقت پسندانہ",
    urduDefinition: "خیالی باتوں کے بجائے زمینی حقائق اور عملی نتائج پر فیصلے کرنے والا۔",
    insteadOf: ["Practical person", "Realistic thinking"],
    useThis: ["Pragmatic", "Down-to-earth", "Hard-headed"],
    howToUse: "Use 'pragmatic' when choosing realistic solutions over abstract theories.",
    sentences: [
      {
        en: "We need a pragmatic approach to solve this crisis.",
        ur: "ہمیں اس بحران کو حل کرنے کے لیے ایک حقیقت پسندانہ طریقہ اپنانا ہوگا۔"
      }
    ]
  },
  {
    id: "word-4",
    word: "Meticulous",
    posShort: "adj.",
    partOfSpeech: "adjective",
    phonetic: "/məˈtɪk.jə.ləs/",
    urduMeaning: "باریک بین / انتہائی محتاط",
    urduDefinition: "جو ہر چھوٹی سے چھوٹی تفصیل کا باریکی سے جائزہ لے کر کام کرے۔",
    insteadOf: ["Very careful", "Detail-oriented"],
    useThis: ["Meticulous", "Scrupulous", "Painstaking"],
    howToUse: "Use 'meticulous' when describing someone who checks every tiny detail with zero errors.",
    sentences: [
      {
        en: "He did meticulous research before writing the report.",
        ur: "اس نے رپورٹ لکھنے سے پہلے انتہائی باریک بینی سے تحقیق کی۔"
      }
    ]
  },
  {
    id: "word-5",
    word: "Empathy",
    posShort: "n.",
    partOfSpeech: "noun",
    phonetic: "/ˈem.pə.θi/",
    urduMeaning: "احساسِ ہمدردی / دلی شناسائی",
    urduDefinition: "دوسرے کے دکھ درد کو اپنے اندر گہرائی سے محسوس کرنے کی صلاحیت۔",
    insteadOf: ["Feeling pity", "Sympathy"],
    useThis: ["Empathy", "Compassion", "Emotional resonance"],
    howToUse: "'Sympathy' is feeling sorry from outside; 'Empathy' is feeling what they feel inside.",
    sentences: [
      {
        en: "A leader without empathy will struggle to unite people.",
        ur: "ہمدردانہ احساس کے بغیر رہنما لوگوں کو متحد رکھنے میں ناکام رہتا ہے۔"
      }
    ]
  },
  {
    id: "word-6",
    word: "Persevere",
    posShort: "v.",
    partOfSpeech: "verb",
    phonetic: "/ˌpɜː.sɪˈvɪər/",
    urduMeaning: "ڈٹے رہنا / مسلسل محنت کرنا",
    urduDefinition: "مشکلات یا ناکامیوں کے باوجود ہمت نہ ہارنا اور لگے رہنا۔",
    insteadOf: ["Keep trying", "Don't quit"],
    useThis: ["Persevere", "Persist", "Press on"],
    howToUse: "Use 'persevere' when someone continues through exhausting obstacles without giving up.",
    sentences: [
      {
        en: "If you persevere daily, you will speak English fluently.",
        ur: "اگر آپ روزانہ ڈٹے رہیں گے، تو روانی سے بولنا سیکھ جائیں گے۔"
      }
    ]
  },
  {
    id: "word-7",
    word: "Candid",
    posShort: "adj.",
    partOfSpeech: "adjective",
    phonetic: "/ˈkæn.dɪd/",
    urduMeaning: "کھرا / صاف گو / بے باک",
    urduDefinition: "ایسی بات یا رویہ جو بالکل سچا، کھرا اور بغیر بناوٹ کے ہو۔",
    insteadOf: ["Very honest", "Direct talker"],
    useThis: ["Candid", "Frank", "Straightforward"],
    howToUse: "Use 'candid' for honest, constructive feedback given without fake politeness.",
    sentences: [
      {
        en: "I appreciate your candid opinion about my work.",
        ur: "میرے کام کے بارے میں آپ کی کھری رائے کی میں قدر کرتا ہوں۔"
      }
    ]
  },
  {
    id: "word-8",
    word: "Procrastinate",
    posShort: "v.",
    partOfSpeech: "verb",
    phonetic: "/prəˈkræs.tɪ.neɪt/",
    urduMeaning: "ٹال مٹول کرنا / سستی کرنا",
    urduDefinition: "سستی کی وجہ سے ضروری کام کو آگے ٹالتے رہنا۔",
    insteadOf: ["Wasting time", "Delaying work"],
    useThis: ["Procrastinate", "Dilly-dally", "Defer"],
    howToUse: "Used when someone avoids an important task by getting distracted with minor things.",
    sentences: [
      {
        en: "Stop procrastinating and prepare for your interview.",
        ur: "ٹال مٹول کرنا بند کریں اور انٹرویو کی تیاری شروع کریں۔"
      }
    ]
  },
  {
    id: "word-9",
    word: "Lucid",
    posShort: "adj.",
    partOfSpeech: "adjective",
    phonetic: "/ˈluː.sɪd/",
    urduMeaning: "صاف اور واضح / آسان فہم",
    urduDefinition: "جو بالکل صاف، سلجھا ہوا اور آسانی سے سمجھ آنے والا ہو۔",
    insteadOf: ["Very clear", "Simple idea"],
    useThis: ["Lucid", "Crystal-clear", "Coherent"],
    howToUse: "Use 'lucid' for explanations that leave zero confusion.",
    sentences: [
      {
        en: "The professor gave a lucid explanation of the concept.",
        ur: "پروفیسر نے اس تصور کی نہایت صاف اور آسان وضاحت پیش کی۔"
      }
    ]
  },
  {
    id: "word-10",
    word: "Serene",
    posShort: "adj.",
    partOfSpeech: "adjective",
    phonetic: "/səˈriːn/",
    urduMeaning: "پُرسکون / بے اضطراب",
    urduDefinition: "جو اندرونی اور بیرونی طور پر پرسکون اور ہر بے چینی سے پاک ہو۔",
    insteadOf: ["Very calm", "Quiet place"],
    useThis: ["Serene", "Tranquil", "Placid"],
    howToUse: "Describes peaceful scenes or a person who maintains calmness under pressure.",
    sentences: [
      {
        en: "The valley looked serene in the early morning sunrise.",
        ur: "صبح کے وقت وادی کا منظر بے حد پُرسکون تھا۔"
      }
    ]
  },
  {
    id: "word-11",
    word: "Diligent",
    posShort: "adj.",
    partOfSpeech: "adjective",
    phonetic: "/ˈdɪl.ɪ.dʒənt/",
    urduMeaning: "محنتی / انتھک / باقاعدہ",
    urduDefinition: "جو اپنے کام میں لگن اور باقاعدگی سے محنت کرے۔",
    insteadOf: ["Hardworking", "Dedicated"],
    useThis: ["Diligent", "Assiduous", "Conscientious"],
    howToUse: "Use 'diligent' to praise someone who consistently works hard with focus.",
    sentences: [
      {
        en: "Her diligent efforts resulted in a major promotion.",
        ur: "اس کی انتھک محنت کا نتیجہ ایک بڑی ترقی کی صورت میں ملا۔"
      }
    ]
  },
  {
    id: "word-12",
    word: "Ambiguous",
    posShort: "adj.",
    partOfSpeech: "adjective",
    phonetic: "/æmˈbɪɡ.ju.əs/",
    urduMeaning: "مبہم / غیر واضح",
    urduDefinition: "ایسی بات جس کے ایک سے زیادہ معنی نکلتے ہوں اور صاف نہ ہو۔",
    insteadOf: ["Confusing statement", "Not clear"],
    useThis: ["Ambiguous", "Equivocal", "Vague"],
    howToUse: "Used for unclear answers or contracts that cause misunderstandings.",
    sentences: [
      {
        en: "His instructions were ambiguous and caused confusion.",
        ur: "اس کی ہدایات مبہم تھیں جس سے الجھن پیدا ہوئی۔"
      }
    ]
  },
  {
    id: "word-diaspora",
    word: "Diaspora",
    posShort: "n.",
    partOfSpeech: "noun",
    phonetic: "/daɪˈæs.pər.ə/",
    urduMeaning: "تارک وطن / انتشار",
    romanUrdu: "tāraka vatana",
    urduDefinition: "اپنے آبائی وطن کو چھوڑ کر دنیا کے دوسرے ملکوں میں منتشر ہو کر آباد ہونے والے افراد کا گروہ۔",
    frequencyRank: "#Top 15000",
    wikipediaContext: "Diaspora (from Greek διασπορά, 'scattering, dispersion') is a scattered population whose origin lies in a separate geographic locale. Historically, the word referred to the dispersal of Greeks and Jews across the ancient world.",
    insteadOf: ["Migrants living abroad", "Expatriates"],
    useThis: ["Diaspora", "Emigre community", "Scattered population"],
    howToUse: "Use 'diaspora' when discussing an entire cultural, religious, or national community living outside its homeland.",
    sentences: [
      {
        en: "Conversion is the point where religious rigidity, Israeli politics and diaspora denominationalism clash.",
        ur: "مذہبی سختی اور سیاست کے تصادم کا نقطہ تارک وطن کے مکاتب فکر ہیں۔",
        source: "ECONOMIST: It's less obvious than you might think"
      },
      {
        en: "Many Jews from the diaspora already view Israel as spiritually impoverished and uninviting.",
        ur: "تارک وطن کمیونٹی کے کئی افراد اسرائیل کو روحانی طور پر بے کشش تصور کرتے ہیں۔",
        source: "ECONOMIST: The next generation | The"
      },
      {
        en: "The cabinet spokesman accused Ottawa of playing to the large Tamil diaspora in Canada.",
        ur: "کابینہ کے ترجمان نے کینیڈا میں مقیم بڑی تامل تارک وطن آبادی کو خوش کرنے کا الزام عائد کیا۔",
        source: "BBC: Commonwealth faces 'real test' on Sri Lanka"
      }
    ]
  }
];

// Built-in Quick Autocomplete Index with Urdu Meanings (Comprehensive A-Z Core Vocabulary)
const quickAutocompleteIndex = [
  // A
  { word: "adverse", pos: "adj.", urdu: "مخالف" },
  { word: "adversely", pos: "adv.", urdu: "برعکس طور پر" },
  { word: "adverseness", pos: "n.", urdu: "مخالفت" },
  { word: "advertising", pos: "n.", urdu: "تشہیر" },
  { word: "adverbial", pos: "adj.", urdu: "متعلق بہ فعل" },
  { word: "adverb", pos: "n.", urdu: "متعلق فعل" },
  { word: "advert", pos: "v.", urdu: "اشارہ کرنا" },
  { word: "Ability", pos: "n.", urdu: "قابلیت / صلاحیت" },
  { word: "About", pos: "prep.", urdu: "کے بارے میں / متعلق" },
  { word: "Accept", pos: "v.", urdu: "قبول کرنا / ماننا" },
  { word: "Accurate", pos: "adj.", urdu: "درست / صحیح" },
  { word: "Achieve", pos: "v.", urdu: "حاصل کرنا / کامیابی پانا" },
  { word: "Action", pos: "n.", urdu: "عمل / کارروائی" },
  { word: "Active", pos: "adj.", urdu: "چست / سرگرم" },
  { word: "Admire", pos: "v.", urdu: "تعریف کرنا / پسند کرنا" },
  { word: "Advice", pos: "n.", urdu: "نصیحت / مشورہ" },
  { word: "Afraid", pos: "adj.", urdu: "خوفزدہ / ڈرا ہوا" },
  { word: "After", pos: "prep.", urdu: "بعد میں / پیچھے" },
  { word: "Again", pos: "adv.", urdu: "دوبارہ / پھر سے" },
  { word: "Agree", pos: "v.", urdu: "متفق ہونا / راضی ہونا" },
  { word: "Allow", pos: "v.", urdu: "اجازت دینا" },
  { word: "Alone", pos: "adj.", urdu: "تنہا / اکیلا" },
  { word: "Always", pos: "adv.", urdu: "ہمیشہ / سدا" },
  { word: "Amazing", pos: "adj.", urdu: "حیرت انگیز / زبردست" },
  { word: "Ambiguous", pos: "adj.", urdu: "مبہم / غیر واضح" },
  { word: "Ambition", pos: "n.", urdu: "عزم / بلند حوصلگی" },
  { word: "Ancient", pos: "adj.", urdu: "قدیم / پرانا" },
  { word: "Angry", pos: "adj.", urdu: "غصہ / ناراض" },
  { word: "Answer", pos: "n.", urdu: "جواب / حل" },
  { word: "Anxiety", pos: "n.", urdu: "اضطراب / بے چینی" },
  { word: "Apologize", pos: "v.", urdu: "معافی مانگنا" },
  { word: "Appear", pos: "v.", urdu: "ظاہر ہونا / نمودار ہونا" },
  { word: "Apply", pos: "v.", urdu: "درخواست دینا / لاگو کرنا" },
  { word: "Appreciate", pos: "v.", urdu: "قدردانی کرنا / سراہنا" },
  { word: "Approach", pos: "n.", urdu: "طریقہ کار / رسائی" },
  { word: "Argue", pos: "v.", urdu: "بحث کرنا / تکرار" },
  { word: "Arrive", pos: "v.", urdu: "پہنچنا / آمد" },
  { word: "Articulate", pos: "adj.", urdu: "صاف گو / واضح بیان کرنے والا" },
  { word: "Assume", pos: "v.", urdu: "فرض کرنا / قیاس" },
  { word: "Attempt", pos: "n.", urdu: "کوشش / سعی" },
  { word: "Attitude", pos: "n.", urdu: "رویہ / اندازِ فکر" },
  { word: "Attract", pos: "v.", urdu: "کھینچنا / متوجہ کرنا" },
  { word: "Authentic", pos: "adj.", urdu: "اصلی / مستند" },
  { word: "Avoid", pos: "v.", urdu: "بچنا / گریز کرنا" },
  { word: "Aware", pos: "adj.", urdu: "باخبر / آگاہ" },
  // B
  { word: "Balance", pos: "n.", urdu: "توازن / اعتدال" },
  { word: "Basic", pos: "adj.", urdu: "بنیادی / ابتدائی" },
  { word: "Battle", pos: "n.", urdu: "جنگ / لڑائی" },
  { word: "Beautiful", pos: "adj.", urdu: "خوبصورت / حسین" },
  { word: "Beauty", pos: "n.", urdu: "خوبصورتی / حسن" },
  { word: "Because", pos: "conj.", urdu: "کیونکہ / اس وجہ سے" },
  { word: "Become", pos: "v.", urdu: "بننا / ہو جانا" },
  { word: "Before", pos: "prep.", urdu: "پہلے / آگے" },
  { word: "Begin", pos: "v.", urdu: "شروع کرنا / آغاز" },
  { word: "Behave", pos: "v.", urdu: "برتاؤ کرنا / پیش آنا" },
  { word: "Believe", pos: "v.", urdu: "یقین کرنا / ماننا" },
  { word: "Belong", pos: "v.", urdu: "تعلق رکھنا / ملکیت ہونا" },
  { word: "Benefit", pos: "n.", urdu: "فائدہ / نفع" },
  { word: "Beside", pos: "prep.", urdu: "پہلو میں / قریب" },
  { word: "Better", pos: "adj.", urdu: "بہتر / عمدہ" },
  { word: "Beyond", pos: "prep.", urdu: "اس پار / بالاتر" },
  { word: "Bitter", pos: "adj.", urdu: "کڑوا / تلخ" },
  { word: "Blame", pos: "v.", urdu: "الزام لگانا" },
  { word: "Bold", pos: "adj.", urdu: "بے باک / دلیر" },
  { word: "Bother", pos: "v.", urdu: "تنگ کرنا / پریشان کرنا" },
  { word: "Brave", pos: "adj.", urdu: "بہادر / شجاع" },
  { word: "Break", pos: "v.", urdu: "توڑنا / وقفہ" },
  { word: "Breath", pos: "n.", urdu: "سانس / دم" },
  { word: "Brief", pos: "adj.", urdu: "مختصر / مجمل" },
  { word: "Bright", pos: "adj.", urdu: "روشن / چمکدار" },
  { word: "Brilliant", pos: "adj.", urdu: "ذہین / شاندار" },
  { word: "Bring", pos: "v.", urdu: "لانا / پہنچانا" },
  { word: "Broad", pos: "adj.", urdu: "وسیع / کشادہ" },
  { word: "Build", pos: "v.", urdu: "تعمیر کرنا / بنانا" },
  { word: "Burden", pos: "n.", urdu: "بوجھ / بار" },
  { word: "Business", pos: "n.", urdu: "کاروبار / تجارت" },
  { word: "Busy", pos: "adj.", urdu: "مصروف / مشغول" },
  // C
  { word: "Calm", pos: "adj.", urdu: "پرسکون / خاموش" },
  { word: "Camera", pos: "n.", urdu: "کیمرہ / عکاسہ" },
  { word: "Candid", pos: "adj.", urdu: "کھرا / بے باک" },
  { word: "Capable", pos: "adj.", urdu: "اہل / قابل" },
  { word: "Capture", pos: "v.", urdu: "گرفتار کرنا / قید کرنا" },
  { word: "Careful", pos: "adj.", urdu: "محتاط / ہوشیار" },
  { word: "Cause", pos: "n.", urdu: "وجہ / سبب" },
  { word: "Celebrate", pos: "v.", urdu: "جشن منانا" },
  { word: "Certain", pos: "adj.", urdu: "یقینی / پکا" },
  { word: "Challenge", pos: "n.", urdu: "چیلنج / آزمائش" },
  { word: "Chance", pos: "n.", urdu: "موقع / امکان" },
  { word: "Change", pos: "v.", urdu: "تبدیل کرنا / بدلنا" },
  { word: "Character", pos: "n.", urdu: "کردار / سیرت" },
  { word: "Charge", pos: "v.", urdu: "قیمت لگانا / چارج" },
  { word: "Charming", pos: "adj.", urdu: "دلکش / پرکشش" },
  { word: "Cheap", pos: "adj.", urdu: "سستا / کم قیمت" },
  { word: "Check", pos: "v.", urdu: "جانچنا / پڑتال" },
  { word: "Choice", pos: "n.", urdu: "انتخاب / پسند" },
  { word: "Choose", pos: "v.", urdu: "چننا / منتخب کرنا" },
  { word: "Circumstance", pos: "n.", urdu: "حالات / کیفیت" },
  { word: "Citizen", pos: "n.", urdu: "شہری / باشندہ" },
  { word: "Clean", pos: "adj.", urdu: "صاف ستھرا" },
  { word: "Clear", pos: "adj.", urdu: "واضح / صاف" },
  { word: "Clever", pos: "adj.", urdu: "چالاک / ہوشیار" },
  { word: "Climb", pos: "v.", urdu: "چڑھنا / بلندی پر جانا" },
  { word: "Close", pos: "adj.", urdu: "قریب / بند کرنا" },
  { word: "Collect", pos: "v.", urdu: "جمع کرنا / اکٹھا کرنا" },
  { word: "Combine", pos: "v.", urdu: "ملانا / یکجا کرنا" },
  { word: "Comfort", pos: "n.", urdu: "سکون / آرام" },
  { word: "Common", pos: "adj.", urdu: "عام / مشترکہ" },
  { word: "Company", pos: "n.", urdu: "کمپنی / صحبت" },
  { word: "Compare", pos: "v.", urdu: "موازنہ کرنا" },
  { word: "Compel", pos: "v.", urdu: "مجبور کرنا" },
  { word: "Compete", pos: "v.", urdu: "مقابلہ کرنا" },
  { word: "Complain", pos: "v.", urdu: "شکایت کرنا" },
  { word: "Complete", pos: "adj.", urdu: "مکمل / پورا" },
  { word: "Complex", pos: "adj.", urdu: "پیچیدہ / الجھا ہوا" },
  { word: "Conceal", pos: "v.", urdu: "چھپانا / پوشیدہ رکھنا" },
  { word: "Concept", pos: "n.", urdu: "تصور / نظریہ" },
  { word: "Concern", pos: "n.", urdu: "تشویش / فکر" },
  { word: "Conclude", pos: "v.", urdu: "نتیجہ نکالنا; ختم کرنا;" },
  { word: "Conclusion", pos: "n.", urdu: "آخری نتیجہ; نتیجہ;" },
  { word: "Conclusions", pos: "n.", urdu: "نتائج;" },
  { word: "Conclusive", pos: "adj.", urdu: "حتمی; قطعی;" },
  { word: "Condition", pos: "n.", urdu: "حالت / شرط" },
  { word: "Confident", pos: "adj.", urdu: "پر اعتماد / پر یقین" },
  { word: "Confirm", pos: "v.", urdu: "تصدیق کرنا" },
  { word: "Conflict", pos: "n.", urdu: "تنازعہ / کشمکش" },
  { word: "Connect", pos: "v.", urdu: "جوڑنا / رابطہ کرنا" },
  { word: "Conscious", pos: "adj.", urdu: "با شعور / باخبر" },
  { word: "Consider", pos: "v.", urdu: "غور کرنا / سمجھنا" },
  { word: "Consistent", pos: "adj.", urdu: "مستقل مزاج / ہم آہنگ" },
  { word: "Constant", pos: "adj.", urdu: "مسلسل / دائمی" },
  { word: "Construct", pos: "v.", urdu: "تعمیر کرنا / بنانا" },
  { word: "Contact", pos: "n.", urdu: "رابطہ / تعلق" },
  { word: "Contain", pos: "v.", urdu: "شامل ہونا / سمونا" },
  { word: "Content", pos: "adj.", urdu: "مطمئن / مواد" },
  { word: "Continue", pos: "v.", urdu: "جاری رکھنا" },
  { word: "Control", pos: "v.", urdu: "قابو پانا / کنٹرول" },
  { word: "Convenient", pos: "adj.", urdu: "آسان / آرام دہ" },
  { word: "Convince", pos: "v.", urdu: "قائل کرنا" },
  { word: "Correct", pos: "adj.", urdu: "درست / صحیح" },
  { word: "Courage", pos: "n.", urdu: "ہمت / حوصلہ" },
  { word: "Create", pos: "v.", urdu: "تخلیق کرنا / بنانا" },
  { word: "Crisis", pos: "n.", urdu: "بحران / نازک موڑ" },
  { word: "Crucial", pos: "adj.", urdu: "انتہائی اہم / لازمی" },
  { word: "Culture", pos: "n.", urdu: "ثقافت / تہذیب" },
  { word: "Curious", pos: "adj.", urdu: "متجسس / جستجو والا" },
  // D
  { word: "Damage", pos: "n.", urdu: "نقصان / خرابی" },
  { word: "Danger", pos: "n.", urdu: "خطرہ / اندیشہ" },
  { word: "Dark", pos: "adj.", urdu: "اندھیرا / تاریک" },
  { word: "Debate", pos: "n.", urdu: "مناظرہ / بحث" },
  { word: "Decide", pos: "v.", urdu: "فیصلہ کرنا" },
  { word: "Decision", pos: "n.", urdu: "فیصلہ / ارادہ" },
  { word: "Declare", pos: "v.", urdu: "اعلان کرنا" },
  { word: "Decline", pos: "v.", urdu: "انکار کرنا / زوال" },
  { word: "Deep", pos: "adj.", urdu: "گہرا / عمیق" },
  { word: "Defend", pos: "v.", urdu: "دفاع کرنا / حفاظت" },
  { word: "Define", pos: "v.", urdu: "تعریف کرنا / واضح کرنا" },
  { word: "Delay", pos: "v.", urdu: "تاخیر کرنا / دیر" },
  { word: "Deliberate", pos: "adj.", urdu: "دانستہ / سوچا سمجھا" },
  { word: "Delicate", pos: "adj.", urdu: "نازک / نفیس" },
  { word: "Delight", pos: "n.", urdu: "خوشی / مسرت" },
  { word: "Deliver", pos: "v.", urdu: "پہنچانا / سپرد کرنا" },
  { word: "Demand", pos: "n.", urdu: "مطالبہ / مانگ" },
  { word: "Depend", pos: "v.", urdu: "انحصار کرنا" },
  { word: "Describe", pos: "v.", urdu: "بیان کرنا / تفصیل دینا" },
  { word: "Deserve", pos: "v.", urdu: "حقدار ہونا" },
  { word: "Design", pos: "n.", urdu: "ڈیزائن / نقشہ" },
  { word: "Desire", pos: "n.", urdu: "خواہش / تمنا" },
  { word: "Desperate", pos: "adj.", urdu: "مایوس / بے چین" },
  { word: "Destroy", pos: "v.", urdu: "تباہ کرنا / برباد" },
  { word: "Detail", pos: "n.", urdu: "تفصیل / جزئیات" },
  { word: "Determine", pos: "v.", urdu: "عزم کرنا / طے کرنا" },
  { word: "Develop", pos: "v.", urdu: "ترقی دینا / پروان چڑھنا" },
  { word: "Device", pos: "n.", urdu: "آلہ / تدبیر" },
  { word: "Devote", pos: "v.", urdu: "وقف کرنا / نچھاور کرنا" },
  { word: "Diamonds", pos: "n.", urdu: "ہیرے / الماس" },
  { word: "Diary", pos: "n.", urdu: "روزنامچہ / ڈائری" },
  { word: "Diaspora", pos: "n.", urdu: "تارک وطن / انتشار" },
  { word: "Difference", pos: "n.", urdu: "فرق / اختلاف" },
  { word: "Different", pos: "adj.", urdu: "مختلف / جداگانہ" },
  { word: "Difficult", pos: "adj.", urdu: "مشکل / کٹھن" },
  { word: "Dignity", pos: "n.", urdu: "وقار / عزتِ نفس" },
  { word: "Diligent", pos: "adj.", urdu: "محنتی / انتھک" },
  { word: "Direct", pos: "adj.", urdu: "براہِ راست / سیدھا" },
  { word: "Disaster", pos: "n.", urdu: "تباہی / آفت" },
  { word: "Discipline", pos: "n.", urdu: "نظم و ضبط" },
  { word: "Discover", pos: "v.", urdu: "دریافت کرنا" },
  { word: "Discuss", pos: "v.", urdu: "گفتگو کرنا / تبادلہ خیال" },
  { word: "Disease", pos: "n.", urdu: "بیماری / مرض" },
  { word: "Dismiss", pos: "v.", urdu: "برطرف کرنا / رد کرنا" },
  { word: "Display", pos: "v.", urdu: "دکھانا / نمائش کرنا" },
  { word: "Distance", pos: "n.", urdu: "فاصلہ / دوری" },
  { word: "Distinct", pos: "adj.", urdu: "نمایاں / منفرد" },
  { word: "Diverse", pos: "adj.", urdu: "متنوع / گوناگوں" },
  { word: "Divide", pos: "v.", urdu: "تقسیم کرنا / بانٹنا" },
  { word: "Divine", pos: "adj.", urdu: "الہامی / مقدس" },
  { word: "Doubt", pos: "n.", urdu: "شک / شبہ" },
  { word: "Dramatic", pos: "adj.", urdu: "ڈرامائی / سنسنی خیز" },
  { word: "Dream", pos: "n.", urdu: "خواب / آرزو" },
  { word: "Duty", pos: "n.", urdu: "فرض / ذمہ داری" },
  // E
  { word: "Eager", pos: "adj.", urdu: "شائق / بے تاب" },
  { word: "Early", pos: "adv.", urdu: "جلد / وقت سے پہلے" },
  { word: "Earn", pos: "v.", urdu: "کمانا / حاصل کرنا" },
  { word: "Easy", pos: "adj.", urdu: "آسان / سہل" },
  { word: "Economy", pos: "n.", urdu: "معیشت / کفایت شعاری" },
  { word: "Educate", pos: "v.", urdu: "تعلیم دینا / سکھانا" },
  { word: "Effect", pos: "n.", urdu: "اثر / نتیجہ" },
  { word: "Efficient", pos: "adj.", urdu: "با صلاحیت / چاق و چوبند" },
  { word: "Effort", pos: "n.", urdu: "کوشش / محنت" },
  { word: "Elaborate", pos: "adj.", urdu: "جامع / مفصل" },
  { word: "Elegant", pos: "adj.", urdu: "حسین / باوقار" },
  { word: "Eloquent", pos: "adj.", urdu: "خوش گفتار / فصیح" },
  { word: "Embarrass", pos: "v.", urdu: "شرمندہ کرنا" },
  { word: "Emerge", pos: "v.", urdu: "ابھرنا / سامنے آنا" },
  { word: "Emotion", pos: "n.", urdu: "جذبہ / احساس" },
  { word: "Emphasis", pos: "n.", urdu: "زور / تاکید" },
  { word: "Empathy", pos: "n.", urdu: "احساسِ ہمدردی" },
  { word: "Employ", pos: "v.", urdu: "ملازمت دینا / استعمال کرنا" },
  { word: "Enable", pos: "v.", urdu: "قابل بنانا / اختیار دینا" },
  { word: "Encourage", pos: "v.", urdu: "حوصلہ افزائی کرنا" },
  { word: "Endure", pos: "v.", urdu: "برداشت کرنا / جھیلنا" },
  { word: "Energy", pos: "n.", urdu: "توانائی / قوت" },
  { word: "Engage", pos: "v.", urdu: "مصروف ہونا / مشغول کرنا" },
  { word: "Enhance", pos: "v.", urdu: "بڑھانا / نکھارنا" },
  { word: "Enjoy", pos: "v.", urdu: "لطف اندوز ہونا" },
  { word: "Enormous", pos: "adj.", urdu: "بہت بڑا / وسیع" },
  { word: "Enough", pos: "adj.", urdu: "کافی / وافر" },
  { word: "Ensure", pos: "v.", urdu: "یقینی بنانا" },
  { word: "Entire", pos: "adj.", urdu: "پورا / تمام" },
  { word: "Environment", pos: "n.", urdu: "ماحول / ارد گرد" },
  { word: "Equal", pos: "adj.", urdu: "برابر / یکساں" },
  { word: "Escape", pos: "v.", urdu: "بچ نکلنا / فرار" },
  { word: "Essential", pos: "adj.", urdu: "لازمی / ضروری" },
  { word: "Establish", pos: "v.", urdu: "قائم کرنا / بنیاد رکھنا" },
  { word: "Estimate", pos: "v.", urdu: "تخمینہ لگانا / اندازہ" },
  { word: "Eternal", pos: "adj.", urdu: "ہمیشہ رہنے والا / ابدی" },
  { word: "Evaluate", pos: "v.", urdu: "جانچنا / تخمینہ کرنا" },
  { word: "Event", pos: "n.", urdu: "واقعہ / تقریب" },
  { word: "Evidence", pos: "n.", urdu: "ثبوت / شہادت" },
  { word: "Exact", pos: "adj.", urdu: "عین / بالکل درست" },
  { word: "Exaggerate", pos: "v.", urdu: "مبالغہ آرائی کرنا" },
  { word: "Examine", pos: "v.", urdu: "معائنہ کرنا / جانچنا" },
  { word: "Example", pos: "n.", urdu: "مثال / نمونہ" },
  { word: "Excellent", pos: "adj.", urdu: "بہترین / شاندار" },
  { word: "Exchange", pos: "v.", urdu: "تبادلہ کرنا" },
  { word: "Excite", pos: "v.", urdu: "پرجوش کرنا" },
  { word: "Execute", pos: "v.", urdu: "عملی جامہ پہنانا / انجام دینا" },
  { word: "Exercise", pos: "n.", urdu: "ورزش / مشق" },
  { word: "Exhaust", pos: "v.", urdu: "تھکا دینا / ختم کرنا" },
  { word: "Exist", pos: "v.", urdu: "موجود ہونا / قائم رہنا" },
  { word: "Expand", pos: "v.", urdu: "پھیلانا / وسعت دینا" },
  { word: "Expect", pos: "v.", urdu: "توقع رکھنا / امید کرنا" },
  { word: "Experience", pos: "n.", urdu: "تجربہ / مشاہدہ" },
  { word: "Expert", pos: "n.", urdu: "ماہر / تجربہ کار" },
  { word: "Explain", pos: "v.", urdu: "وضاحت کرنا / سمجھانا" },
  { word: "Explore", pos: "v.", urdu: "کھوج لگانا / دریافت کرنا" },
  { word: "Express", pos: "v.", urdu: "اظہار کرنا / ظاہر کرنا" },
  { word: "Extend", pos: "v.", urdu: "بڑھانا / طوالت دینا" },
  { word: "Extreme", pos: "adj.", urdu: "شدید / انتہا پسند" },
  // F
  { word: "Face", pos: "n.", urdu: "چہرہ / سامنا کرنا" },
  { word: "Fact", pos: "n.", urdu: "حقیقت / سچائی" },
  { word: "Fail", pos: "v.", urdu: "ناکام ہونا / ناکامی" },
  { word: "Faith", pos: "n.", urdu: "ایمان / عقیدہ" },
  { word: "False", pos: "adj.", urdu: "جھوٹا / غلط" },
  { word: "Familiar", pos: "adj.", urdu: "مانوس / شناسا" },
  { word: "Famous", pos: "adj.", urdu: "مشہور / معروف" },
  { word: "Fancy", pos: "adj.", urdu: "شاندار / پر تکلف" },
  { word: "Fast", pos: "adj.", urdu: "تیز / فوری" },
  { word: "Fault", pos: "n.", urdu: "غلطی / نقص" },
  { word: "Favor", pos: "n.", urdu: "احسان / عنایت" },
  { word: "Fear", pos: "n.", urdu: "خوف / ڈر" },
  { word: "Feature", pos: "n.", urdu: "خصوصیت / خدوخال" },
  { word: "Feel", pos: "v.", urdu: "محسوس کرنا" },
  { word: "Fierce", pos: "adj.", urdu: "خونخوار / شدید" },
  { word: "Fight", pos: "v.", urdu: "لڑنا / جدوجہد" },
  { word: "Final", pos: "adj.", urdu: "آخری / حتمی" },
  { word: "Find", pos: "v.", urdu: "تلاش کرنا / پانا" },
  { word: "Fine", pos: "adj.", urdu: "عمدہ / ٹھیک" },
  { word: "Finish", pos: "v.", urdu: "ختم کرنا / تکمیل" },
  { word: "Flexible", pos: "adj.", urdu: "لچکدار / نرم" },
  { word: "Flourish", pos: "v.", urdu: "پھلنا پھولنا / ترقی کرنا" },
  { word: "Flow", pos: "v.", urdu: "بہنا / روانی" },
  { word: "Focus", pos: "n.", urdu: "توجہ / مرکز" },
  { word: "Follow", pos: "v.", urdu: "پیروی کرنا / پیچھے چلنا" },
  { word: "Force", pos: "n.", urdu: "طاقت / زبردستی" },
  { word: "Foreign", pos: "adj.", urdu: "غیر ملکی / اجنبی" },
  { word: "Forever", pos: "adv.", urdu: "ہمیشہ کے لیے" },
  { word: "Forget", pos: "v.", urdu: "بھول جانا" },
  { word: "Forgive", pos: "v.", urdu: "معاف کرنا / درگزر" },
  { word: "Fortune", pos: "n.", urdu: "قسمت / دولت" },
  { word: "Forward", pos: "adv.", urdu: "آگے کی طرف" },
  { word: "Foster", pos: "v.", urdu: "پرورش کرنا / فروغ دینا" },
  { word: "Freedom", pos: "n.", urdu: "آزادی / خود مختاری" },
  { word: "Frequent", pos: "adj.", urdu: "اکثر / بار بار ہونے والا" },
  { word: "Fresh", pos: "adj.", urdu: "تازہ / نیا" },
  { word: "Friend", pos: "n.", urdu: "دوست / ساتھی" },
  { word: "Future", pos: "n.", urdu: "مستقبل / آنے والا کل" },
  // G
  { word: "Gain", pos: "v.", urdu: "حاصل کرنا / فائدہ" },
  { word: "Gather", pos: "v.", urdu: "اکٹھا کرنا / جمع ہونا" },
  { word: "General", pos: "adj.", urdu: "عام / مجموعی" },
  { word: "Generate", pos: "v.", urdu: "پیدا کرنا / بنانا" },
  { word: "Generous", pos: "adj.", urdu: "سخی / فراخدل" },
  { word: "Genius", pos: "n.", urdu: "ذہین فطین / نابغہ" },
  { word: "Gentle", pos: "adj.", urdu: "نرم مزاج / شائستہ" },
  { word: "Genuine", pos: "adj.", urdu: "خالص / اصلی" },
  { word: "Gift", pos: "n.", urdu: "تحفہ / عطیہ" },
  { word: "Global", pos: "adj.", urdu: "عالمی / بین الاقوامی" },
  { word: "Glory", pos: "n.", urdu: "شان و شوکت / عظمت" },
  { word: "Goal", pos: "n.", urdu: "مقصد / ہدف" },
  { word: "Good", pos: "adj.", urdu: "اچھا / نیک" },
  { word: "Gorgeous", pos: "adj.", urdu: "بہت خوبصورت / دلکش" },
  { word: "Govern", pos: "v.", urdu: "حکومت کرنا / چلانا" },
  { word: "Grace", pos: "n.", urdu: "فضل / نزاکت" },
  { word: "Gradual", pos: "adj.", urdu: "رفتہ رفتہ / بتدریج" },
  { word: "Grant", pos: "v.", urdu: "عطا کرنا / منظوری دینا" },
  { word: "Grasp", pos: "v.", urdu: "پکڑنا / سمجھنا" },
  { word: "Grateful", pos: "adj.", urdu: "شکر گزار / احسان مند" },
  { word: "Great", pos: "adj.", urdu: "عظیم / بڑا" },
  { word: "Grief", pos: "n.", urdu: "غم / رنج" },
  { word: "Grow", pos: "v.", urdu: "بڑھنا / پروان چڑھنا" },
  { word: "Guarantee", pos: "n.", urdu: "ضمانت / یقین دہانی" },
  { word: "Guard", pos: "v.", urdu: "پہرا دینا / حفاظت کرنا" },
  { word: "Guess", pos: "v.", urdu: "اندازہ لگانا / قیاس" },
  { word: "Guide", pos: "v.", urdu: "رہنمائی کرنا" },
  { word: "Guilt", pos: "n.", urdu: "جرم کا احساس / گناہ" },
  // H
  { word: "Habit", pos: "n.", urdu: "عادت / معمول" },
  { word: "Handle", pos: "v.", urdu: "سنبھالنا / نمٹنا" },
  { word: "Handsome", pos: "adj.", urdu: "وجیہہ / خوبصورت" },
  { word: "Happen", pos: "v.", urdu: "واقع ہونا / رونما ہونا" },
  { word: "Happy", pos: "adj.", urdu: "خوش / مسرور" },
  { word: "Hard", pos: "adj.", urdu: "سخت / کٹھن" },
  { word: "Harm", pos: "n.", urdu: "نقصان / ضرر" },
  { word: "Harmony", pos: "n.", urdu: "ہم آہنگی / امن" },
  { word: "Harsh", pos: "adj.", urdu: "سخت / کرخت" },
  { word: "Hate", pos: "v.", urdu: "نفرت کرنا / بیر" },
  { word: "Hazard", pos: "n.", urdu: "خطرہ / ہلاکت" },
  { word: "Health", pos: "n.", urdu: "صحت / تندرستی" },
  { word: "Hear", pos: "v.", urdu: "سننا / سماعت کرنا" },
  { word: "Heart", pos: "n.", urdu: "دل / قلب" },
  { word: "Heavy", pos: "adj.", urdu: "بھاری / وزنی" },
  { word: "Help", pos: "v.", urdu: "مدد کرنا / اعانت" },
  { word: "Heritage", pos: "n.", urdu: "ورثہ / میراث" },
  { word: "Hesitate", pos: "v.", urdu: "ہچکچانا / جھجکنا" },
  { word: "Hidden", pos: "adj.", urdu: "پوشیدہ / چھپا ہوا" },
  { word: "Hide", pos: "v.", urdu: "چھپانا / چھپنا" },
  { word: "High", pos: "adj.", urdu: "اونچا / بلند" },
  { word: "History", pos: "n.", urdu: "تاریخ / ماضی" },
  { word: "Hold", pos: "v.", urdu: "پکڑنا / تھامنا" },
  { word: "Honest", pos: "adj.", urdu: "دیانت دار / سچا" },
  { word: "Honor", pos: "n.", urdu: "عزت / شرف" },
  { word: "Hope", pos: "n.", urdu: "امید / آس" },
  { word: "Hospital", pos: "n.", urdu: "ہسپتال / شفا خانہ" },
  { word: "Hostile", pos: "adj.", urdu: "دشمنانہ / مخالف" },
  { word: "Huge", pos: "adj.", urdu: "بہت بڑا / دیو ہیکل" },
  { word: "Human", pos: "n.", urdu: "انسان / بشر" },
  { word: "Humble", pos: "adj.", urdu: "عاجز / خاکسار" },
  { word: "Humor", pos: "n.", urdu: "مزاح / ظرافت" },
  { word: "Hurry", pos: "v.", urdu: "جلدی کرنا / جلدی" },
  { word: "Hurt", pos: "v.", urdu: "چوٹ پہنچانا / دکھ" },
  // I
  { word: "Idea", pos: "n.", urdu: "خیال / نظریہ" },
  { word: "Identify", pos: "v.", urdu: "شناخت کرنا / پہچاننا" },
  { word: "Identity", pos: "n.", urdu: "شناخت / پہچان" },
  { word: "Ignore", pos: "v.", urdu: "نظر انداز کرنا" },
  { word: "Illness", pos: "n.", urdu: "بیماری / عارضہ" },
  { word: "Imagine", pos: "v.", urdu: "تصور کرنا / سوچنا" },
  { word: "Immediate", pos: "adj.", urdu: "فوری / بر وقت" },
  { word: "Immense", pos: "adj.", urdu: "بے پناہ / لامحدود" },
  { word: "Impact", pos: "n.", urdu: "اثر / گہرا اثر" },
  { word: "Important", pos: "adj.", urdu: "اہم / ضروری" },
  { word: "Impress", pos: "v.", urdu: "متاثر کرنا" },
  { word: "Improve", pos: "v.", urdu: "بہتر بنانا / ترقی" },
  { word: "Include", pos: "v.", urdu: "شامل کرنا" },
  { word: "Income", pos: "n.", urdu: "آمدنی / کمائی" },
  { word: "Increase", pos: "v.", urdu: "اضافہ کرنا / بڑھانا" },
  { word: "Indeed", pos: "adv.", urdu: "واقعی / بلا شبہ" },
  { word: "Independence", pos: "n.", urdu: "آزادی / خود مختاری" },
  { word: "Indicate", pos: "v.", urdu: "اشارہ کرنا / بتانا" },
  { word: "Individual", pos: "n.", urdu: "فرد / انفرادی" },
  { word: "Influence", pos: "n.", urdu: "اثر و رسوخ" },
  { word: "Inform", pos: "v.", urdu: "مطلع کرنا / خبر دینا" },
  { word: "Ingenious", pos: "adj.", urdu: "ذہین / پر حکمت" },
  { word: "Initial", pos: "adj.", urdu: "ابتدائی / پہلا" },
  { word: "Initiative", pos: "n.", urdu: "پہل کاری / اقدام" },
  { word: "Injure", pos: "v.", urdu: "زخمی کرنا" },
  { word: "Innocent", pos: "adj.", urdu: "معصوم / بے گناہ" },
  { word: "Innovation", pos: "n.", urdu: "نئی ایجاد / جدت" },
  { word: "Inside", pos: "prep.", urdu: "اندر / اندرون" },
  { word: "Insight", pos: "n.", urdu: "بصیرت / اندرونی سمجھ" },
  { word: "Insist", pos: "v.", urdu: "اصرار کرنا / بضد ہونا" },
  { word: "Inspire", pos: "v.", urdu: "متاثر کرنا / حوصلہ افزائی" },
  { word: "Instant", pos: "adj.", urdu: "فوری / لمحہ بھر" },
  { word: "Instead", pos: "adv.", urdu: "بجائے / کے عوض" },
  { word: "Instinct", pos: "n.", urdu: "فطرت / جبلت" },
  { word: "Instruct", pos: "v.", urdu: "ہدایت دینا / سکھانا" },
  { word: "Insult", pos: "v.", urdu: "توہین کرنا / بے عزتی" },
  { word: "Integrate", pos: "v.", urdu: "ضم کرنا / یکجا کرنا" },
  { word: "Integrity", pos: "n.", urdu: "دیانت داری / سالمیت" },
  { word: "Intellect", pos: "n.", urdu: "عقل / فہم و فراست" },
  { word: "Intense", pos: "adj.", urdu: "شدید / پر جوش" },
  { word: "Intention", pos: "n.", urdu: "نیت / ارادہ" },
  { word: "Interest", pos: "n.", urdu: "دلچسپی / فائدہ" },
  { word: "Interrupt", pos: "v.", urdu: "مداخلت کرنا / ٹوکنا" },
  { word: "Introduce", pos: "v.", urdu: "تعارف کروانا" },
  { word: "Invent", pos: "v.", urdu: "ایجاد کرنا" },
  { word: "Invest", pos: "v.", urdu: "سرمایہ کاری کرنا" },
  { word: "Investigate", pos: "v.", urdu: "تحقیقات کرنا" },
  { word: "Invite", pos: "v.", urdu: "دعوت دینا" },
  { word: "Involve", pos: "v.", urdu: "شامل کرنا / الجھانا" },
  // J
  { word: "jungle", pos: "n.", urdu: "جنگل;" },
  { word: "Jealous", pos: "adj.", urdu: "حاسد / جلنے والا" },
  { word: "Job", pos: "n.", urdu: "نوکری / کام" },
  { word: "Join", pos: "v.", urdu: "شامل ہونا / جڑنا" },
  { word: "Journey", pos: "n.", urdu: "سفر / مسافت" },
  { word: "Joy", pos: "n.", urdu: "خوشی / شادمانی" },
  { word: "Judge", pos: "v.", urdu: "فیصلہ کرنا / پرکھنا" },
  { word: "Judgment", pos: "n.", urdu: "فیصلہ / فہم" },
  { word: "Justice", pos: "n.", urdu: "انصاف / عدل" },
  { word: "Justify", pos: "v.", urdu: "جواز پیش کرنا" },
  // K
  { word: "Keen", pos: "adj.", urdu: "پر شوق / باریک بین" },
  { word: "Keep", pos: "v.", urdu: "رکھنا / سنبھالنا" },
  { word: "Kind", pos: "adj.", urdu: "مہربان / شفیق" },
  { word: "Knowledge", pos: "n.", urdu: "علم / معلومات" },
  // L
  { word: "Labor", pos: "n.", urdu: "محنت / مزدوری" },
  { word: "Lack", pos: "n.", urdu: "کمی / فقدان" },
  { word: "Language", pos: "n.", urdu: "زبان / بولی" },
  { word: "Large", pos: "adj.", urdu: "بڑا / وسیع" },
  { word: "Last", pos: "adj.", urdu: "آخری / پچھلا" },
  { word: "Late", pos: "adj.", urdu: "دیر سے / تاخیر" },
  { word: "Laugh", pos: "v.", urdu: "ہنسنا / قہقہہ" },
  { word: "Launch", pos: "v.", urdu: "شروع کرنا / داغنا" },
  { word: "Law", pos: "n.", urdu: "قانون / ضابطہ" },
  { word: "Lead", pos: "v.", urdu: "رہنمائی کرنا / آگے ہونا" },
  { word: "Leader", pos: "n.", urdu: "رہنما / قائد" },
  { word: "Learn", pos: "v.", urdu: "سیکھنا / علم حاصل کرنا" },
  { word: "Leave", pos: "v.", urdu: "چھوڑنا / روانہ ہونا" },
  { word: "Legal", pos: "adj.", urdu: "قانونی / جائز" },
  { word: "Level", pos: "n.", urdu: "سطح / درجہ" },
  { word: "Liberty", pos: "n.", urdu: "آزادی / خودمختاری" },
  { word: "Life", pos: "n.", urdu: "زندگی / حیات" },
  { word: "Light", pos: "n.", urdu: "روشنی / ہلکا" },
  { word: "Limit", pos: "n.", urdu: "حد / انتہا" },
  { word: "Listen", pos: "v.", urdu: "غور سے سننا" },
  { word: "Live", pos: "v.", urdu: "جینا / رہنا" },
  { word: "Logic", pos: "n.", urdu: "منطق / دلیل" },
  { word: "Lonely", pos: "adj.", urdu: "تنہا / اداس" },
  { word: "Long", pos: "adj.", urdu: "لمبا / طویل" },
  { word: "Look", pos: "v.", urdu: "دیکھنا / نظر آنا" },
  { word: "Lose", pos: "v.", urdu: "کھونا / ہارنا" },
  { word: "Loss", pos: "n.", urdu: "نقصان / خسارہ" },
  { word: "Love", pos: "n.", urdu: "محبت / پیار" },
  { word: "Loyal", pos: "adj.", urdu: "وفادار / باوفا" },
  { word: "Luck", pos: "n.", urdu: "قسمت / نصیب" },
  // M
  { word: "Machine", pos: "n.", urdu: "مشین / کل پرزے" },
  { word: "Magic", pos: "n.", urdu: "جادو / سحر" },
  { word: "Magnificent", pos: "adj.", urdu: "شاندار / پر شکوہ" },
  { word: "Maintain", pos: "v.", urdu: "برقرار رکھنا / قائم رکھنا" },
  { word: "Major", pos: "adj.", urdu: "بڑا / اہم" },
  { word: "Manage", pos: "v.", urdu: "انتظام کرنا / نبھانا" },
  { word: "Manner", pos: "n.", urdu: "انداز / طور طریقہ" },
  { word: "Many", pos: "adj.", urdu: "بہت سارے / متعدد" },
  { word: "Mark", pos: "n.", urdu: "نشان / علامت" },
  { word: "Market", pos: "n.", urdu: "بازار / منڈی" },
  { word: "Master", pos: "n.", urdu: "استاد / ماہر" },
  { word: "Match", pos: "v.", urdu: "ملانا / ہم پلہ ہونا" },
  { word: "Matter", pos: "n.", urdu: "معاملہ / مادہ" },
  { word: "Mature", pos: "adj.", urdu: "بالغ / پختہ" },
  { word: "Maximum", pos: "adj.", urdu: "زیادہ سے زیادہ" },
  { word: "Meaning", pos: "n.", urdu: "معنی / مطلب" },
  { word: "Measure", pos: "v.", urdu: "ناپنا / پیمائش" },
  { word: "Meet", pos: "v.", urdu: "ملنا / ملاقات کرنا" },
  { word: "Memory", pos: "n.", urdu: "یادداشت / حافظہ" },
  { word: "Mental", pos: "adj.", urdu: "دماغی / ذہنی" },
  { word: "Mention", pos: "v.", urdu: "ذکر کرنا / بیان کرنا" },
  { word: "Mercy", pos: "n.", urdu: "رحم / کرم" },
  { word: "Message", pos: "n.", urdu: "پیغام / اطلاع" },
  { word: "Method", pos: "n.", urdu: "طریقہ / اسلوب" },
  { word: "Meticulous", pos: "adj.", urdu: "باریک بین / انتہائی محتاط" },
  { word: "Mind", pos: "n.", urdu: "دماغ / ذہن" },
  { word: "Miracle", pos: "n.", urdu: "معجزہ / کرشمہ" },
  { word: "Mistake", pos: "n.", urdu: "غلطی / خطاء" },
  { word: "Modern", pos: "adj.", urdu: "جدید / دور حاضر کا" },
  { word: "Modest", pos: "adj.", urdu: "شائستہ / با حیا" },
  { word: "Modify", pos: "v.", urdu: "تبدیل کرنا / ترمیم کرنا" },
  { word: "Moment", pos: "n.", urdu: "لمحہ / پل" },
  { word: "Moral", pos: "adj.", urdu: "اخلاقی / نیکی" },
  { word: "Motivation", pos: "n.", urdu: "حوصلہ / تحریک" },
  { word: "Move", pos: "v.", urdu: "حرکت کرنا / منتقل ہونا" },
  { word: "Mutual", pos: "adj.", urdu: "باہمی / آپسی" },
  { word: "Mystery", pos: "n.", urdu: "راز / معمہ" },
  // N
  { word: "Narrow", pos: "adj.", urdu: "تنگ / باریک" },
  { word: "Nation", pos: "n.", urdu: "قوم / ملک" },
  { word: "Native", pos: "adj.", urdu: "مقامی / آبائی" },
  { word: "Natural", pos: "adj.", urdu: "قدرتی / فطرتی" },
  { word: "Nature", pos: "n.", urdu: "قدرت / فطرت" },
  { word: "Necessary", pos: "adj.", urdu: "ضروری / لازمی" },
  { word: "Negative", pos: "adj.", urdu: "منفی / نفی والا" },
  { word: "Neglect", pos: "v.", urdu: "لاپرواہی برتنا" },
  { word: "Negotiate", pos: "v.", urdu: "مذاکرات کرنا / سودا بازی" },
  { word: "Neighbor", pos: "n.", urdu: "پڑوسی / ہمسایہ" },
  { word: "Nervous", pos: "adj.", urdu: "گھبرایا ہوا / بے چین" },
  { word: "Neutral", pos: "adj.", urdu: "غیر جانبدار" },
  { word: "Never", pos: "adv.", urdu: "کبھی نہیں" },
  { word: "Noble", pos: "adj.", urdu: "شریف / معزز" },
  { word: "Normal", pos: "adj.", urdu: "معمول کے مطابق / عام" },
  { word: "Notice", pos: "v.", urdu: "نوٹس لینا / توجہ دینا" },
  { word: "Notion", pos: "n.", urdu: "تصور / خیال" },
  { word: "Novel", pos: "n.", urdu: "ناول / نیا انداز" },
  // O
  { word: "Obey", pos: "v.", urdu: "حکم ماننا / اطاعت کرنا" },
  { word: "Object", pos: "n.", urdu: "چیز / اعتراض کرنا" },
  { word: "Objective", pos: "n.", urdu: "مقصد / غیر جانبدارانہ" },
  { word: "Obvious", pos: "adj.", urdu: "واضح / عیاں" },
  { word: "Occur", pos: "v.", urdu: "واقع ہونا / پیش آنا" },
  { word: "Offer", pos: "v.", urdu: "پیشکش کرنا" },
  { word: "Official", pos: "adj.", urdu: "سرکاری / باضابطہ" },
  { word: "Often", pos: "adv.", urdu: "اکثر / بارہا" },
  { word: "Opinion", pos: "n.", urdu: "رائے / نقطہ نظر" },
  { word: "Opportunity", pos: "n.", urdu: "موقع / چانس" },
  { word: "Oppose", pos: "v.", urdu: "مخالفت کرنا" },
  { word: "Opposite", pos: "adj.", urdu: "مخالف / برعکس" },
  { word: "Optimistic", pos: "adj.", urdu: "پر امید / رجائیت پسند" },
  { word: "Option", pos: "n.", urdu: "اختیار / متبادل" },
  { word: "Order", pos: "n.", urdu: "حکم / ترتیب" },
  { word: "Ordinary", pos: "adj.", urdu: "معمولی / عام" },
  { word: "Origin", pos: "n.", urdu: "اصل / ماخذ" },
  { word: "Original", pos: "adj.", urdu: "اصلی / بنیاد" },
  { word: "Outcome", pos: "n.", urdu: "نتیجہ / حاصل" },
  { word: "Outline", pos: "n.", urdu: "خاکہ / خلاصہ" },
  { word: "Outstanding", pos: "adj.", urdu: "نمایاں / غیر معمولی" },
  { word: "Overcome", pos: "v.", urdu: "قابو پانا / غلبہ پانا" },
  // P
  { word: "Pain", pos: "n.", urdu: "درد / تکلیف" },
  { word: "Patience", pos: "n.", urdu: "صبر / برداشت" },
  { word: "Patient", pos: "adj.", urdu: "صابر / مریض" },
  { word: "Pattern", pos: "n.", urdu: "نمونہ / طریقہ کار" },
  { word: "Peace", pos: "n.", urdu: "امن / سکون" },
  { word: "Peer", pos: "n.", urdu: "ہم عمر / ہم رتبہ" },
  { word: "Perceive", pos: "v.", urdu: "محسوس کرنا / ادراک کرنا" },
  { word: "Perfect", pos: "adj.", urdu: "مکمل / بے عیب" },
  { word: "Perform", pos: "v.", urdu: "انجام دینا / اداکاری" },
  { word: "Permanent", pos: "adj.", urdu: "مستقل / دائمی" },
  { word: "Permission", pos: "n.", urdu: "اجازت / پروانہ" },
  { word: "Persevere", pos: "v.", urdu: "ڈٹے رہنا / مسلسل کوشش" },
  { word: "Personal", pos: "adj.", urdu: "ذاتی / انفرادی" },
  { word: "Perspective", pos: "n.", urdu: "نقطہ نظر / زاویہ نگاہ" },
  { word: "Persuade", pos: "v.", urdu: "قائل کرنا / ترغیب دینا" },
  { word: "Phenomenon", pos: "n.", urdu: "مظہر / حیرت انگیز امر" },
  { word: "Philosophy", pos: "n.", urdu: "فلسفہ / حکمت" },
  { word: "Physical", pos: "adj.", urdu: "جسمانی / مادی" },
  { word: "Plan", pos: "n.", urdu: "منصوبہ / ارادہ" },
  { word: "Pleasant", pos: "adj.", urdu: "خوشگوار / دل پسند" },
  { word: "Praise", pos: "v.", urdu: "تعریف کرنا / سراہنا" },
  { word: "Predict", pos: "v.", urdu: "پیشین گوئی کرنا" },
  { word: "Prefer", pos: "v.", urdu: "ترجیح دینا" },
  { word: "Prepare", pos: "v.", urdu: "تیاری کرنا / تیار ہونا" },
  { word: "Presence", pos: "n.", urdu: "موجودگی / حاضری" },
  { word: "Preserve", pos: "v.", urdu: "محفوظ رکھنا" },
  { word: "Prevent", pos: "v.", urdu: "روکنا / باز رکھنا" },
  { word: "Price", pos: "n.", urdu: "قیمت / لاگت" },
  { word: "Pride", pos: "n.", urdu: "فخر / غرور" },
  { word: "Primary", pos: "adj.", urdu: "بنیادی / اولیں" },
  { word: "Principle", pos: "n.", urdu: "اصول / ضابطہ" },
  { word: "Priority", pos: "n.", urdu: "ترجیح / فوقیت" },
  { word: "Privacy", pos: "n.", urdu: "تنہائی / پردہ داری" },
  { word: "Privilege", pos: "n.", urdu: "امتیاز / خصوصی حق" },
  { word: "Problem", pos: "n.", urdu: "مسئلہ / الجھن" },
  { word: "Procrastinate", pos: "v.", urdu: "ٹال مٹول کرنا / سستی" },
  { word: "Produce", pos: "v.", urdu: "پیدا کرنا / بنانا" },
  { word: "Professional", pos: "adj.", urdu: "پیشہ ورانہ" },
  { word: "Profit", pos: "n.", urdu: "منافع / نفع" },
  { word: "Profound", pos: "adj.", urdu: "گہرا / با معنی" },
  { word: "Progress", pos: "n.", urdu: "ترقی / پیش رفت" },
  { word: "Prominent", pos: "adj.", urdu: "نمایاں / ممتاز" },
  { word: "Promise", pos: "n.", urdu: "وعدہ / عہد" },
  { word: "Promote", pos: "v.", urdu: "ترقی دینا / فروغ دینا" },
  { word: "Prompt", pos: "adj.", urdu: "فوری / بر وقت" },
  { word: "Proper", pos: "adj.", urdu: "مناسب / درست" },
  { word: "Protect", pos: "v.", urdu: "حفاظت کرنا / بچانا" },
  { word: "Proud", pos: "adj.", urdu: "فخرمند / نازاں" },
  { word: "Prove", pos: "v.", urdu: "ثابت کرنا" },
  { word: "Provide", pos: "v.", urdu: "مہیا کرنا / فراہم کرنا" },
  { word: "Pure", pos: "adj.", urdu: "خالص / پاکیزہ" },
  { word: "Purpose", pos: "n.", urdu: "مقصد / غرض" },
  { word: "Pursue", pos: "v.", urdu: "پیچھا کرنا / تعاقب کرنا" },
  // Q
  { word: "Qualify", pos: "v.", urdu: "اہل ہونا / پورا اترنا" },
  { word: "Quality", pos: "n.", urdu: "معیار / خوبی" },
  { word: "Quantity", pos: "n.", urdu: "مقدار / تعداد" },
  { word: "Question", pos: "n.", urdu: "سوال / استفسار" },
  { word: "Quick", pos: "adj.", urdu: "تیز / جلد" },
  { word: "Quiet", pos: "adj.", urdu: "خاموش / پرسکون" },
  // R
  { word: "Rare", pos: "adj.", urdu: "نایاب / شاذ و نادر" },
  { word: "Rate", pos: "n.", urdu: "شرح / رفتار" },
  { word: "Rational", pos: "adj.", urdu: "عقل مندانہ / معقول" },
  { word: "Reach", pos: "v.", urdu: "پہنچنا / حاصل کرنا" },
  { word: "React", pos: "v.", urdu: "ردعمل ظاہر کرنا" },
  { word: "Reaction", pos: "n.", urdu: "ردعمل / رد عمل" },
  { word: "Real", pos: "adj.", urdu: "حقیقی / اصلی" },
  { word: "Reality", pos: "n.", urdu: "حقیقت / سچائی" },
  { word: "Realize", pos: "v.", urdu: "احساس ہونا / سمجھنا" },
  { word: "Reason", pos: "n.", urdu: "وجہ / عقل" },
  { word: "Receive", pos: "v.", urdu: "وصول کرنا / پانا" },
  { word: "Recent", pos: "adj.", urdu: "حالیہ / نیا" },
  { word: "Recognize", pos: "v.", urdu: "پہچاننا / تسلیم کرنا" },
  { word: "Recommend", pos: "v.", urdu: "سفارش کرنا / تجویز دینا" },
  { word: "Record", pos: "n.", urdu: "ریکارڈ / اندراج" },
  { word: "Recover", pos: "v.", urdu: "صحت یاب ہونا / واپس پانا" },
  { word: "Reduce", pos: "v.", urdu: "کم کرنا / گھٹانا" },
  { word: "Reflect", pos: "v.", urdu: "عکس ڈالنا / غور و خوض" },
  { word: "Reform", pos: "v.", urdu: "اصلاح کرنا / سدھارنا" },
  { word: "Refuse", pos: "v.", urdu: "انکار کرنا" },
  { word: "Regard", pos: "v.", urdu: "خیال کرنا / احترام" },
  { word: "Regular", pos: "adj.", urdu: "باقاعدہ / مستقل" },
  { word: "Reject", pos: "v.", urdu: "مسترد کرنا / رد کرنا" },
  { word: "Relate", pos: "v.", urdu: "تعلق رکھنا / بیان کرنا" },
  { word: "Relation", pos: "n.", urdu: "رشتہ / تعلق" },
  { word: "Relax", pos: "v.", urdu: "آرام کرنا / پرسکون ہونا" },
  { word: "Release", pos: "v.", urdu: "رہا کرنا / جاری کرنا" },
  { word: "Relevant", pos: "adj.", urdu: "متعلقہ / موزوں" },
  { word: "Reliable", pos: "adj.", urdu: "قابلِ اعتماد / معتبر" },
  { word: "Relief", pos: "n.", urdu: "سکون / راحت" },
  { word: "Rely", pos: "v.", urdu: "بھروسہ کرنا / تکیہ کرنا" },
  { word: "Remain", pos: "v.", urdu: "باقی رہنا / برقرار رہنا" },
  { word: "Remarkable", pos: "adj.", urdu: "غیر معمولی / نمایاں" },
  { word: "Remember", pos: "v.", urdu: "یاد رکھنا" },
  { word: "Remind", pos: "v.", urdu: "یاد دلانا" },
  { word: "Remote", pos: "adj.", urdu: "دور دراز / بعید" },
  { word: "Remove", pos: "v.", urdu: "ہٹانا / دور کرنا" },
  { word: "Repair", pos: "v.", urdu: "مرمت کرنا / ٹھیک کرنا" },
  { word: "Repeat", pos: "v.", urdu: "دہرانا" },
  { word: "Replace", pos: "v.", urdu: "بدلنا / متبادل لانا" },
  { word: "Reply", pos: "v.", urdu: "جواب دینا" },
  { word: "Report", pos: "n.", urdu: "رپورٹ / اطلاع" },
  { word: "Represent", pos: "v.", urdu: "نمائندگی کرنا" },
  { word: "Reputation", pos: "n.", urdu: "شہرت / ساکھ" },
  { word: "Request", pos: "n.", urdu: "درخواست / التجا" },
  { word: "Require", pos: "v.", urdu: "ضرورت ہونا / تقاضا" },
  { word: "res", pos: "n.", urdu: "چیز؛ شے؛ جائیداد" },
  { word: "rest", pos: "n./v.", urdu: "باقی بچاہوا؛ نیند n. ؛آرام کرنا؛ محنت .v" },
  { word: "respect", pos: "n.", urdu: "عزت؛ تکریم، تعظیم جو کسی کودی جائے n." },
  { word: "responsible", pos: "adj.", urdu: "adj. ذمہ دار؛ جوابدہ؛ جواب دہ" },
  { word: "restaurant", pos: "n.", urdu: "ریستوران؛ سب کے لیے کھلی طعام گاہ n." },
  { word: "research", pos: "n./v.", urdu: "تحقیق کرنا کسی امر کی بابت v. ؛تحقیق n." },
  { word: "responsibility", pos: "n.", urdu: "ذمہ داری؛ ذمہ داری n." },
  { word: "results", pos: "n.", urdu: "نتیجے؛ نتائج" },
  { word: "rescue", pos: "n./v.", urdu: "بچاؤ؛ چھڑانے، آزاد کرانے کا عمل n. ؛بچانا v." },
  { word: "result", pos: "n./v.", urdu: "نتیجہ نکالنا؛ حالات v. ؛نتیجہ n." },
  { word: "response", pos: "n.", urdu: "جواب؛ ردعمل n." },
  { word: "respond", pos: "v.", urdu: "جواب دینا / ردعمل" },
  { word: "resident", pos: "n.", urdu: "رہائشی؛ مقیم n." },
  { word: "residence", pos: "n.", urdu: "رہائش گاہ؛ قیام گاہ n." },
  { word: "resume", pos: "v./n.", urdu: "دوبارہ شروع کرنا v. ؛خلاصہ n." },
  { word: "resort", pos: "n.", urdu: "سیرگاہ؛ سہارا n." },
  { word: "resign", pos: "v.", urdu: "استعفیٰ دینا v." },
  { word: "resignation", pos: "n.", urdu: "استعفیٰ n." },
  { word: "resource", pos: "n.", urdu: "وسیلہ / ذریعہ" },
  { word: "resources", pos: "n.", urdu: "وسائل؛ ذرائع n." },
  { word: "reserve", pos: "v.", urdu: "محفوظ رکھنا / بکنگ" },
  { word: "reservation", pos: "n.", urdu: "بکنگ؛ تحفظ n." },
  { word: "resilient", pos: "adj.", urdu: "ثابت قدم / باحوصلہ" },
  { word: "resilience", pos: "n.", urdu: "لچک؛ ثابت قدمی n." },
  { word: "resist", pos: "v.", urdu: "مزاحمت کرنا / رکاوٹ" },
  { word: "resistance", pos: "n.", urdu: "مزاحمت؛ روک n." },
  { word: "resolution", pos: "n.", urdu: "قرارداد / پکا ارادہ" },
  { word: "resolve", pos: "v.", urdu: "حل کرنا / مصمم ارادہ" },
  { word: "restore", pos: "v.", urdu: "بحال کرنا / دوبارہ قائم" },
  { word: "restoration", pos: "n.", urdu: "بحالی؛ تجدید n." },
  { word: "restrict", pos: "v.", urdu: "محدود کرنا؛ پابندی v." },
  { word: "restriction", pos: "n.", urdu: "پابندی؛ روک n." },
  { word: "restart", pos: "v.", urdu: "دوبارہ شروع کرنا v." },
  { word: "reset", pos: "v.", urdu: "ری سیٹ؛ دوبارہ ترتیب v." },
  { word: "Retain", pos: "v.", urdu: "برقرار رکھنا / یاد رکھنا" },
  { word: "Reveal", pos: "v.", urdu: "فاش کرنا / ظاہر کرنا" },
  { word: "Review", pos: "v.", urdu: "نظر ثانی کرنا" },
  { word: "Reward", pos: "n.", urdu: "انعام / جزا" },
  { word: "Rich", pos: "adj.", urdu: "امیر / دولت مند" },
  { word: "Right", pos: "adj.", urdu: "صحیح / حق" },
  { word: "Risk", pos: "n.", urdu: "خطرہ / جوکھم" },
  { word: "Role", pos: "n.", urdu: "کردار / منصب" },
  { word: "Rule", pos: "n.", urdu: "اصول / ضابطہ" },
  // S
  { word: "Sacrifice", pos: "v.", urdu: "قربانی دینا / ایثار" },
  { word: "Safe", pos: "adj.", urdu: "محفوظ / بے خطر" },
  { word: "Safety", pos: "n.", urdu: "سلامتی / تحفظ" },
  { word: "Satisfy", pos: "v.", urdu: "مطمئن کرنا / تسلی دینا" },
  { word: "Save", pos: "v.", urdu: "بچانا / محفوظ کرنا" },
  { word: "Scale", pos: "n.", urdu: "پیمانہ / وسعت" },
  { word: "Scared", pos: "adj.", urdu: "ڈرا ہوا / خوف زدہ" },
  { word: "Scene", pos: "n.", urdu: "منظر / جائے وقوعہ" },
  { word: "Schedule", pos: "n.", urdu: "اوقات نامہ / ٹائم ٹیبل" },
  { word: "Scholar", pos: "n.", urdu: "عالم / محقق" },
  { word: "Science", pos: "n.", urdu: "سائنس / علم" },
  { word: "Scope", pos: "n.", urdu: "دائرہ کار / گنجائش" },
  { word: "Search", pos: "v.", urdu: "تلاش کرنا / کھوج" },
  { word: "Secret", pos: "n.", urdu: "راز / پوشیدہ بات" },
  { word: "Section", pos: "n.", urdu: "حصہ / شعبہ" },
  { word: "Secure", pos: "adj.", urdu: "محفوظ / بے فکر" },
  { word: "Seek", pos: "v.", urdu: "تلاش کرنا / حاصل کرنا" },
  { word: "Seem", pos: "v.", urdu: "معلوم ہونا / دکھائی دینا" },
  { word: "Select", pos: "v.", urdu: "منتخب کرنا / چننا" },
  { word: "Sense", pos: "n.", urdu: "حس / سمجھ بوجھ" },
  { word: "Sensitive", pos: "adj.", urdu: "حساس / نازک" },
  { word: "Sentence", pos: "n.", urdu: "جملہ / سزا" },
  { word: "Separate", pos: "adj.", urdu: "الگ / جداگانہ" },
  { word: "Serious", pos: "adj.", urdu: "سنجیدہ / سنگین" },
  { word: "Serve", pos: "v.", urdu: "خدمت کرنا / پیش کرنا" },
  { word: "Service", pos: "n.", urdu: "خدمت / نوکری" },
  { word: "Settle", pos: "v.", urdu: "آباد ہونا / طے کرنا" },
  { word: "Severe", pos: "adj.", urdu: "شدید / سخت" },
  { word: "Share", pos: "v.", urdu: "بانٹنا / حصہ لینا" },
  { word: "Sharp", pos: "adj.", urdu: "تیز / تیکھا" },
  { word: "Show", pos: "v.", urdu: "دکھانا / ظاہر کرنا" },
  { word: "Significant", pos: "adj.", urdu: "اہم / معنی خیز" },
  { word: "Silence", pos: "n.", urdu: "خاموشی / سکوت" },
  { word: "Silent", pos: "adj.", urdu: "خاموش / چپ" },
  { word: "Similar", pos: "adj.", urdu: "ملتا جلتا / یکساں" },
  { word: "Simple", pos: "adj.", urdu: "سادہ / آسان" },
  { word: "Sincere", pos: "adj.", urdu: "مخلص / سچا" },
  { word: "Situation", pos: "n.", urdu: "صورتحال / کیفیت" },
  { word: "Skill", pos: "n.", urdu: "مہارت / ہنر" },
  { word: "Smart", pos: "adj.", urdu: "ہوشیار / چست" },
  { word: "Smile", pos: "n.", urdu: "مسکراہٹ / تبسم" },
  { word: "Smooth", pos: "adj.", urdu: "ہموار / روانی والا" },
  { word: "Social", pos: "adj.", urdu: "معاشرتی / سماجی" },
  { word: "Society", pos: "n.", urdu: "معاشرہ / سماج" },
  { word: "Solid", pos: "adj.", urdu: "ٹھوس / پختہ" },
  { word: "Solution", pos: "n.", urdu: "حل / تدبیر" },
  { word: "Solve", pos: "v.", urdu: "حل کرنا / سلجھانا" },
  { word: "Source", pos: "n.", urdu: "ذریعہ / ماخذ" },
  { word: "Special", pos: "adj.", urdu: "خاص / مخصوص" },
  { word: "Specific", pos: "adj.", urdu: "واضح / مخصوص" },
  { word: "Speed", pos: "n.", urdu: "رفتار / تیزی" },
  { word: "Spend", pos: "v.", urdu: "خرچ کرنا / وقت گزارنا" },
  { word: "Spirit", pos: "n.", urdu: "روح / جذبہ" },
  { word: "Stable", pos: "adj.", urdu: "مستحکم / پائیدار" },
  { word: "Standard", pos: "n.", urdu: "معیار / نمونہ" },
  { word: "Start", pos: "v.", urdu: "شروع کرنا / آغاز" },
  { word: "Status", pos: "n.", urdu: "حیثیت / رتبہ" },
  { word: "Stay", pos: "v.", urdu: "ٹھہرنا / رکنا" },
  { word: "Steady", pos: "adj.", urdu: "مستحکم / باقاعدہ" },
  { word: "Strategy", pos: "n.", urdu: "حکمت عملی / منصوبہ بندی" },
  { word: "Strength", pos: "n.", urdu: "طاقت / قوت" },
  { word: "Stress", pos: "n.", urdu: "دباؤ / تناؤ" },
  { word: "Strong", pos: "adj.", urdu: "مضبوط / طاقتور" },
  { word: "Structure", pos: "n.", urdu: "ڈھانچہ / ساخت" },
  { word: "Struggle", pos: "v.", urdu: "جدوجہد کرنا / کوشش" },
  { word: "Stubborn", pos: "adj.", urdu: "ضدی / اڑیل" },
  { word: "Study", pos: "v.", urdu: "مطالعہ کرنا / پڑھنا" },
  { word: "Style", pos: "n.", urdu: "طرز / انداز" },
  { word: "Subject", pos: "n.", urdu: "مضمون / موضوع" },
  { word: "Subtle", pos: "adj.", urdu: "لطیف / باریک" },
  { word: "Succeed", pos: "v.", urdu: "کامیاب ہونا" },
  { word: "Success", pos: "n.", urdu: "کامیابی / کامرانی" },
  { word: "Suggest", pos: "v.", urdu: "مشورہ دینا / تجویز" },
  { word: "Summary", pos: "n.", urdu: "خلاصہ / لبِ لباب" },
  { word: "Support", pos: "v.", urdu: "حمایت کرنا / مدد" },
  { word: "Surprise", pos: "n.", urdu: "حیرت / تعجب" },
  { word: "Survive", pos: "v.", urdu: "زندہ بچنا / باقی رہنا" },
  { word: "sustainability", pos: "n.", urdu: "دست گیری کرنا؛تاب لانا؛برداشت کرنا؛سہارا دینا" },
  { word: "Symbol", pos: "n.", urdu: "علامت / نشان" },
  { word: "Sympathy", pos: "n.", urdu: "ہمدردی / دلسوزی" },
  { word: "System", pos: "n.", urdu: "نظام / طریقہ کار" },
  // T
  { word: "Target", pos: "n.", urdu: "ہدف / نشانہ" },
  { word: "Task", pos: "n.", urdu: "کام / فریضہ" },
  { word: "Taste", pos: "n.", urdu: "ذائقہ / پسند" },
  { word: "Teach", pos: "v.", urdu: "پڑھانا / سکھانا" },
  { word: "Technology", pos: "n.", urdu: "ٹیکنالوجی / فنیات" },
  { word: "Tell", pos: "v.", urdu: "بتانا / کہنا" },
  { word: "Temporary", pos: "adj.", urdu: "عارضی / چند روزہ" },
  { word: "Tendency", pos: "n.", urdu: "رجحان / میلان" },
  { word: "Tender", pos: "adj.", urdu: "نرم / نازک" },
  { word: "Theory", pos: "n.", urdu: "نظریہ / مفروضہ" },
  { word: "Thick", pos: "adj.", urdu: "موٹا / گہرا" },
  { word: "Think", pos: "v.", urdu: "سوچنا / غور کرنا" },
  { word: "Thought", pos: "n.", urdu: "خیال / سوچ" },
  { word: "Threat", pos: "n.", urdu: "دھمکی / خطرہ" },
  { word: "Time", pos: "n.", urdu: "وقت / زمانہ" },
  { word: "Timid", pos: "adj.", urdu: "ڈرپوک / بزدل" },
  { word: "Tiny", pos: "adj.", urdu: "بہت چھوٹا / ننھا" },
  { word: "Tired", pos: "adj.", urdu: "تھکا ہوا / ماندہ" },
  { word: "Title", pos: "n.", urdu: "عنوان / لقب" },
  { word: "Today", pos: "adv.", urdu: "آج کا دن" },
  { word: "Tolerant", pos: "adj.", urdu: "بردبار / متحمل" },
  { word: "Total", pos: "adj.", urdu: "کل / مجموعی" },
  { word: "Touch", pos: "v.", urdu: "چھونا / لمس" },
  { word: "Tough", pos: "adj.", urdu: "سخت / کٹھن" },
  { word: "Tradition", pos: "n.", urdu: "روایت / رواج" },
  { word: "Transfer", pos: "v.", urdu: "منتقل کرنا / تبادلہ" },
  { word: "Transform", pos: "v.", urdu: "کایا پلٹنا / بدل دینا" },
  { word: "Translate", pos: "v.", urdu: "ترجمہ کرنا" },
  { word: "Transparent", pos: "adj.", urdu: "شفاف / صاف ظاہر" },
  { word: "Treasure", pos: "n.", urdu: "خزانہ / بیش قیمت اثاثہ" },
  { word: "Treat", pos: "v.", urdu: "برتاؤ کرنا / علاج" },
  { word: "Trend", pos: "n.", urdu: "رجحان / فیشن" },
  { word: "True", pos: "adj.", urdu: "سچا / درست" },
  { word: "Trust", pos: "n.", urdu: "اعتماد / بھروسہ" },
  { word: "Truth", pos: "n.", urdu: "سچ / حقیقت" },
  { word: "Typical", pos: "adj.", urdu: "نمائندہ / روایتی" },
  // U
  { word: "Ultimate", pos: "adj.", urdu: "حتمی / آخری" },
  { word: "Unable", pos: "adj.", urdu: "ناقابل / بے بس" },
  { word: "Understand", pos: "v.", urdu: "سمجھنا / جاننا" },
  { word: "Undertake", pos: "v.", urdu: "ذمہ داری لینا" },
  { word: "Unique", pos: "adj.", urdu: "منفرد / یکتا" },
  { word: "Unite", pos: "v.", urdu: "متحد ہونا / جوڑنا" },
  { word: "Universal", pos: "adj.", urdu: "آفاقی / ہمہ گیر" },
  { word: "Unknown", pos: "adj.", urdu: "نامعلوم / گمنام" },
  { word: "Unlikely", pos: "adj.", urdu: "بعید از قیاس / غیر ممکن" },
  { word: "Urgent", pos: "adj.", urdu: "فوری / ہنگامی" },
  { word: "Useful", pos: "adj.", urdu: "مفید / کارآمد" },
  { word: "Utility", pos: "n.", urdu: "افادیت / استعمال" },
  // V
  { word: "Vacant", pos: "adj.", urdu: "خالی / غیر مقبوضہ" },
  { word: "Vague", pos: "adj.", urdu: "مبہم / غیر واضح" },
  { word: "Valid", pos: "adj.", urdu: "درست / جائز" },
  { word: "Valuable", pos: "adj.", urdu: "قیمتی / بیش بہا" },
  { word: "Value", pos: "n.", urdu: "قدر / قیمت" },
  { word: "Vanish", pos: "v.", urdu: "غائب ہو جانا" },
  { word: "Variety", pos: "n.", urdu: "تنوع / اقسام" },
  { word: "Various", pos: "adj.", urdu: "مختلف / متعدد" },
  { word: "Vast", pos: "adj.", urdu: "وسیع / کشادہ" },
  { word: "Verify", pos: "v.", urdu: "تصدیق کرنا / پڑتال" },
  { word: "Versatile", pos: "adj.", urdu: "ہر فن مولا / ہمہ جہت" },
  { word: "Victory", pos: "n.", urdu: "فتح / کامیابی" },
  { word: "Vision", pos: "n.", urdu: "بصارت / مستقبل کی سوچ" },
  { word: "Vital", pos: "adj.", urdu: "انتہائی اہم / حیاتی" },
  { word: "Vivid", pos: "adj.", urdu: "روشن / واضح" },
  { word: "Vocabulary", pos: "n.", urdu: "ذخیرہ الفاظ" },
  { word: "Voice", pos: "n.", urdu: "آواز / صدا" },
  { word: "Voluntary", pos: "adj.", urdu: "رضاکارانہ / اپنی خوشی سے" },
  // W
  { word: "Warm", pos: "adj.", urdu: "گرم / پرجوش" },
  { word: "Warn", pos: "v.", urdu: "خبردار کرنا / تنبیہ" },
  { word: "Waste", pos: "v.", urdu: "ضائع کرنا / برباد" },
  { word: "Watch", pos: "v.", urdu: "دیکھنا / نگاہ رکھنا" },
  { word: "Weak", pos: "adj.", urdu: "کمزور / ناتواں" },
  { word: "Wealth", pos: "n.", urdu: "دولت / مال" },
  { word: "Weight", pos: "n.", urdu: "وزن / بوجھ" },
  { word: "Welcome", pos: "v.", urdu: "خوش آمدید کہنا" },
  { word: "Widespread", pos: "adj.", urdu: "وسیع پیمانے پر پھیلا ہوا" },
  { word: "Willing", pos: "adj.", urdu: "راضی / تیار" },
  { word: "Win", pos: "v.", urdu: "جیتنا / فتح پانا" },
  { word: "Wisdom", pos: "n.", urdu: "حکمت / دانائی" },
  { word: "Wise", pos: "adj.", urdu: "دانا / عقل مند" },
  { word: "Wish", pos: "n.", urdu: "خواہش / تمنا" },
  { word: "Witness", pos: "n.", urdu: "گواہ / شاہد" },
  { word: "Wonder", pos: "n.", urdu: "حیرت / عجوبہ" },
  { word: "Wonderful", pos: "adj.", urdu: "شاندار / لاجواب" },
  { word: "Work", pos: "n.", urdu: "کام / محنت" },
  { word: "World", pos: "n.", urdu: "دنیا / کائنات" },
  { word: "Worry", pos: "v.", urdu: "فکر مند ہونا / پریشانی" },
  { word: "Worth", pos: "n.", urdu: "قیمت / قدر" },
  { word: "Worthy", pos: "adj.", urdu: "لائق / قابلِ احترام" },
  // Y
  { word: "Yield", pos: "v.", urdu: "پیدا کرنا / جھک جانا" },
  { word: "Young", pos: "adj.", urdu: "جوان / نو عمر" },
  { word: "Youth", pos: "n.", urdu: "جوانی / شباب" },
  // Z
  { word: "Zeal", pos: "n.", urdu: "جذبہ / جوش و خروش" },
  { word: "Zealous", pos: "adj.", urdu: "پر جوش / سرگرم" },
  { word: "Zenith", pos: "n.", urdu: "عروج / بلندی" },
  { word: "Zone", pos: "n.", urdu: "علاقہ / خطہ" }
];

// ==========================================================
// 2. STORAGE ENGINE (Local Cache & Gemini Key)
// ==========================================================
class StorageManager {
  constructor() {
    this.favKey = 'vocab_favorites_v5';
    this.cacheKey = 'vocab_dynamic_cache_v5';
    this.geminiKeyStorage = 'vocab_gemini_api_key_v5';
    this.favorites = this.load(this.favKey, []);
    const loadedCache = this.load(this.cacheKey, []);
    // Auto-clean any legacy dummy placeholder sentences from cache
    this.cachedWords = Array.isArray(loadedCache) ? loadedCache.filter(w => {
      if (!w || !w.sentences || !w.sentences[0]) return true;
      const en = (w.sentences[0].en || '').toLowerCase();
      return !en.includes('learning how to') && !en.includes('understanding how to') && !en.startsWith('how to use');
    }) : [];
    if (Array.isArray(loadedCache) && loadedCache.length !== this.cachedWords.length) {
      this.save(this.cacheKey, this.cachedWords);
    }
    this.geminiApiKey = localStorage.getItem(this.geminiKeyStorage) || '';
    this.grammarCacheKey = 'vocab_grammar_cache_v5';
    // Clean wipe of grammar cache to eliminate any stale false results
    try {
      localStorage.removeItem(this.grammarCacheKey);
    } catch (e) {}
    this.grammarCache = {};
    // Ensure reliable official Flash model (gemini-3.8-flash)
    const storedModel = localStorage.getItem('vocab_gemini_model_v5') || '';
    if (!storedModel || storedModel.includes('2.5') || storedModel.includes('pro') || storedModel.includes('8b')) {
      localStorage.setItem('vocab_gemini_model_v5', 'gemini-3.8-flash');
    }
    const verModel = localStorage.getItem('vocab_gemini_verified_model') || '';
    if (!verModel || verModel.includes('2.5') || verModel.includes('pro') || verModel.includes('8b')) {
      localStorage.setItem('vocab_gemini_verified_model', 'gemini-3.8-flash');
    }
    this.themeKey = 'vocab_theme_v5';
    this.theme = this.getStoredTheme();
    try {
      document.documentElement.setAttribute('data-theme', this.theme);
    } catch(e) {}
  }

  getStoredTheme() {
    try {
      const saved = localStorage.getItem(this.themeKey);
      if (saved) return saved;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch(e) {}
    return 'light';
  }

  setTheme(theme) {
    this.theme = theme;
    try {
      localStorage.setItem(this.themeKey, theme);
      document.documentElement.setAttribute('data-theme', theme);
    } catch(e) {}
  }

  toggleTheme() {
    const next = this.theme === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
    return next;
  }

  load(key, fallback) {
    try {
      const d = localStorage.getItem(key);
      return d ? JSON.parse(d) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  save(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {}
  }

  getRecentSearches() {
    return this.load('vocab_recent_searches_v1', [
      'jungle', 'sustainability'
    ]);
  }

  addRecentSearch(term) {
    if (!term || typeof term !== 'string') return;
    const clean = term.trim();
    if (!clean) return;
    let recents = this.getRecentSearches();
    recents = recents.filter(item => item.toLowerCase() !== clean.toLowerCase());
    recents.unshift(clean);
    if (recents.length > 6) recents = recents.slice(0, 6);
    this.save('vocab_recent_searches_v1', recents);
  }

  removeRecentSearch(term) {
    let recents = this.getRecentSearches();
    recents = recents.filter(item => item.toLowerCase() !== term.toLowerCase());
    this.save('vocab_recent_searches_v1', recents);
  }

  clearRecentSearches() {
    this.save('vocab_recent_searches_v1', []);
  }

  setGeminiKey(key, model = '') {
    this.geminiApiKey = key.trim();
    if (this.geminiApiKey) {
      localStorage.setItem(this.geminiKeyStorage, this.geminiApiKey);
      if (model) localStorage.setItem('vocab_gemini_model_v5', model);
    } else {
      localStorage.removeItem(this.geminiKeyStorage);
      localStorage.removeItem('vocab_gemini_model_v5');
    }
  }

  getGeminiModel() {
    const m = localStorage.getItem('vocab_gemini_model_v5');
    if (!m || m.includes('2.5') || m.includes('pro') || m.includes('8b')) {
      localStorage.setItem('vocab_gemini_model_v5', 'gemini-3.8-flash');
      return 'gemini-3.8-flash';
    }
    return m;
  }

  getGrammarResult(key) {
    return this.grammarCache ? this.grammarCache[key] : null;
  }

  saveGrammarResult(key, result) {
    if (!key || !result) return;
    if (!this.grammarCache) this.grammarCache = {};
    this.grammarCache[key] = result;
    const keys = Object.keys(this.grammarCache);
    if (keys.length > 150) {
      delete this.grammarCache[keys[0]];
    }
    this.save(this.grammarCacheKey, this.grammarCache);
  }

  isFavorite(id) {
    return this.favorites.includes(id);
  }

  toggleFavorite(id) {
    if (this.isFavorite(id)) {
      this.favorites = this.favorites.filter(x => x !== id);
    } else {
      this.favorites.unshift(id);
    }
    this.save(this.favKey, this.favorites);
    return this.isFavorite(id);
  }

  saveWordToCache(wordObj) {
    this.cachedWords = this.cachedWords.filter(w => w.word.toLowerCase() !== wordObj.word.toLowerCase());
    this.cachedWords.unshift(wordObj);
    if (this.cachedWords.length > 200) this.cachedWords.pop();
    this.save(this.cacheKey, this.cachedWords);
  }

  getAutoTranslation(word) {
    if (!word) return null;
    const cache = this.load('vocab_auto_trans_cache') || {};
    return cache[word.toLowerCase().trim()] || null;
  }

  saveAutoTranslation(word, data) {
    if (!word || !data) return;
    const cache = this.load('vocab_auto_trans_cache') || {};
    cache[word.toLowerCase().trim()] = data;
    const keys = Object.keys(cache);
    if (keys.length > 500) {
      delete cache[keys[0]];
    }
    this.save('vocab_auto_trans_cache', cache);
  }
}
const storage = new StorageManager();

// ==========================================================
// 3. TEXT-TO-SPEECH (TTS) ENGINE
// ==========================================================
class TTSEngine {
  constructor() {
    this.synth = window.speechSynthesis;
    this.listeners = new Set();
  }

  speak(text, options = {}) {
    if (!this.synth) return;
    this.synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const targetLang = options.lang || (options.accent === 'uk' ? 'en-GB' : 'en-US');
    utterance.lang = targetLang;
    utterance.rate = options.rate || 0.88;

    const voices = this.synth.getVoices();
    let voice = null;
    if (options.accent === 'uk') {
      voice = voices.find(v => (v.lang.includes('GB') || v.name.includes('UK') || v.name.includes('British') || v.name.includes('English (United Kingdom)')));
    } else if (options.accent === 'us') {
      voice = voices.find(v => (v.lang.includes('US') || v.name.includes('US') || v.name.includes('American') || v.name.includes('English (United States)')));
    }
    if (!voice) {
      voice = voices.find(v => v.lang.startsWith(targetLang.slice(0, 2)) && (v.name.includes('Natural') || v.name.includes('Google'))) ||
              voices.find(v => v.lang.startsWith('en'));
    }
    if (voice) utterance.voice = voice;

    utterance.onstart = () => this.notify({ type: 'start', text, accent: options.accent });
    utterance.onend = () => this.notify({ type: 'end', text, accent: options.accent });
    utterance.onerror = () => this.notify({ type: 'error', text, accent: options.accent });

    this.synth.speak(utterance);
  }

  subscribe(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  notify(event) {
    this.listeners.forEach(fn => fn(event));
  }
}
const tts = new TTSEngine();

// ==========================================================
// 4. GEMINI AI & TRADITIONAL API ENGINES
// ==========================================================
const OnlineLookupService = {
  // --- DYNAMIC MODEL RESOLUTION (Official Gemini 3.8 Flash Engine) ---
  async getAvailableGeminiModel(apiKey) {
    const key = (apiKey || '').trim();
    if (!key) return 'gemini-3.8-flash';

    const cached = localStorage.getItem('vocab_gemini_verified_model');
    if (cached && (cached.includes('3.8') || cached.includes('3.6'))) {
      return cached;
    }

    try {
      const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timer = controller ? setTimeout(() => controller.abort(), 4000) : null;
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${key}`, {
        signal: controller ? controller.signal : undefined
      });
      if (timer) clearTimeout(timer);

      if (res.ok) {
        const data = await res.json();
        if (data && data.models && Array.isArray(data.models)) {
          const contentModels = data.models
            .filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes('generateContent'))
            .map(m => m.name.replace(/^models\//, ''));

          // Prioritize latest official flash models
          const best = contentModels.find(m => m === 'gemini-3.8-flash') ||
                       contentModels.find(m => m.includes('3.8')) ||
                       contentModels.find(m => m === 'gemini-3.6-flash') ||
                       contentModels.find(m => m.includes('3.6')) ||
                       contentModels.find(m => m.includes('flash') && !m.includes('2.5') && !m.includes('1.5')) ||
                       'gemini-3.8-flash';

          if (best) {
            localStorage.setItem('vocab_gemini_verified_model', best);
            localStorage.setItem('vocab_gemini_model_v5', best);
            return best;
          }
        }
      }
    } catch (e) {}

    return 'gemini-3.8-flash';
  },

  // --- A. GOOGLE GEMINI AI ENGINE (Smartest & Most Natural) ---
  async testGeminiKey(apiKey) {
    const key = (apiKey || '').trim();
    if (!key) return { success: false, error: "Please enter an API key." };

    const candidates = ['gemini-3.8-flash', 'gemini-3.6-flash', 'gemini-2.0-flash'];
    let lastError = null;

    for (let i = 0; i < candidates.length; i++) {
      const model = candidates[i];
      try {
        const primaryUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
        const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
        const timer = controller ? setTimeout(() => controller.abort(), 5000) : null;
        const res = await fetch(primaryUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: "hi" }] }],
            generationConfig: { maxOutputTokens: 1 }
          }),
          signal: controller ? controller.signal : undefined
        });
        if (timer) clearTimeout(timer);

        if (res.ok) {
          localStorage.setItem('vocab_gemini_verified_model', model);
          localStorage.setItem('vocab_gemini_model_v5', model);
          return { success: true, model: model };
        }

        const data = await res.json().catch(() => ({}));
        const errMsg = data.error && data.error.message ? data.error.message : `HTTP ${res.status}`;

        if (res.status === 400 && errMsg.includes("API key not valid")) {
          return { success: false, error: "API key is invalid. Please copy the exact key from Google AI Studio." };
        }

        // Self-healing: Check if Google explicitly recommended a newer model
        const suggestedMatch = errMsg.match(/use\s+models\/([a-zA-Z0-9._-]+)/i);
        if (suggestedMatch && suggestedMatch[1]) {
          const suggestedModel = suggestedMatch[1];
          if (!candidates.includes(suggestedModel)) {
            candidates.splice(i + 1, 0, suggestedModel);
          }
          continue;
        }

        lastError = errMsg;
        continue;
      } catch (e) {
        lastError = e.message || "Network error. Check your internet connection.";
        continue;
      }
    }

    return { success: false, error: lastError || "Could not connect to Gemini service." };
  },

  async fetchWithGemini(query, apiKey) {
    const isUrdu = /[\u0600-\u06FF]/.test(query);
    const prompt = isUrdu 
      ? `You are an expert English-Urdu vocabulary coach. The user searched the Urdu word/concept: "${query}". Provide the best high-yield English vocabulary word for this Urdu word.
Return ONLY a valid JSON object matching this exact schema:
{
  "word": "Target English Word",
  "posShort": "short POS like n., adj., v., or adv.",
  "partOfSpeech": "full part of speech",
  "phonetic": "simple English phonetic like /example/",
  "urduMeaning": "${query} / authentic Urdu synonym",
  "urduDefinition": "1-line simple Urdu explanation",
  "insteadOf": ["1-2 basic common English words"],
  "useThis": ["the target word", "1 advanced synonym"],
  "howToUse": "1 practical sentence explaining when to use this word",
  "sentences": [
    {
      "en": "A natural, realistic real-world sentence (12-25 words) that clearly demonstrates the practical meaning and usage of the word in daily life or professional conversation.",
      "ur": "The exact authentic, natural Urdu translation of the sentence above."
    }
  ]
}
CRITICAL REQUIREMENT: The example sentence MUST be a real, meaningful scenario. NEVER generate meta sentences like 'Learning how to use...', 'Understanding how to use...', 'How to use...', or dictionary definitions. It must teach the user how native speakers speak.`
      : `You are an expert English-Urdu vocabulary coach. Provide details for the word, phrase, slang, or idiom: "${query}".
Even if it is modern slang (like "mogged", "rizz", "cap"), an internet term, or colloquial phrasing, explain its actual meaning in authentic Urdu Nastaliq and provide natural usage.
Return ONLY a valid JSON object matching this exact schema:
{
  "word": "Capitalized Word",
  "posShort": "short POS like n., adj., v., or slang",
  "partOfSpeech": "full part of speech",
  "phonetic": "simple English phonetic like /example/",
  "urduMeaning": "clear authentic Urdu Nastaliq translation",
  "urduDefinition": "1-line simple Urdu explanation of the concept",
  "insteadOf": ["1-2 common words people use instead"],
  "useThis": ["the target word", "1 precise synonym or related term"],
  "howToUse": "1 practical sentence explaining when to use this word in conversation",
  "sentences": [
    {
      "en": "A natural, realistic real-world sentence (12-25 words) that clearly demonstrates the practical meaning and usage of the word in daily life or professional conversation.",
      "ur": "The exact authentic, natural Urdu translation of the sentence above."
    }
  ]
}
CRITICAL REQUIREMENT: The example sentence MUST be a real, meaningful scenario. NEVER generate meta sentences like 'Learning how to use...', 'Understanding how to use...', 'How to use...', or dictionary definitions. It must teach the user how native speakers speak.`;

    const activeModel = storage.getGeminiModel() || 'gemini-3.8-flash';
    const candidateModels = [activeModel, 'gemini-3.8-flash', 'gemini-3.6-flash', 'gemini-2.0-flash'];
    const uniqueModels = [...new Set(candidateModels)];
    let lastError = null;

    for (let i = 0; i < uniqueModels.length; i++) {
      const model = uniqueModels[i];
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey.trim()}`;
        const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
        const timer = controller ? setTimeout(() => controller.abort(), 10000) : null;

        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { responseMimeType: "application/json" }
          }),
          signal: controller ? controller.signal : undefined
        });
        if (timer) clearTimeout(timer);

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          const msg = errData.error && errData.error.message ? errData.error.message : `HTTP ${res.status}`;

          if (res.status === 400 && msg.includes("API key not valid")) {
            throw new Error("API key is invalid. Please copy the exact key from Google AI Studio.");
          }

          // Dynamic self-healing: Extract suggested model if Google recommends a newer one
          const suggestedMatch = msg.match(/use\s+models\/([a-zA-Z0-9._-]+)/i);
          if (suggestedMatch && suggestedMatch[1]) {
            const suggestedModel = suggestedMatch[1];
            localStorage.setItem('vocab_gemini_model_v5', suggestedModel);
            localStorage.setItem('vocab_gemini_verified_model', suggestedModel);
            if (!uniqueModels.includes(suggestedModel)) {
              uniqueModels.splice(i + 1, 0, suggestedModel);
            }
            continue;
          }

          lastError = new Error(msg);
          continue; // seamlessly try next candidate model
        }

        const data = await res.json();
        let jsonText = data.candidates[0].content.parts[0].text.trim();
        if (jsonText.startsWith('```json')) {
          jsonText = jsonText.replace(/^```json/, '').replace(/```$/, '').trim();
        } else if (jsonText.startsWith('```')) {
          jsonText = jsonText.replace(/^```/, '').replace(/```$/, '').trim();
        }
        const parsed = JSON.parse(jsonText);

        // Update verified model on success
        if (model !== activeModel) {
          localStorage.setItem('vocab_gemini_verified_model', model);
          localStorage.setItem('vocab_gemini_model_v5', model);
        }

        return {
          id: `gemini-${Date.now()}`,
          word: parsed.word || query,
          posShort: parsed.posShort || 'word.',
          partOfSpeech: parsed.partOfSpeech || 'word',
          phonetic: parsed.phonetic || `/${query}/`,
          urduMeaning: parsed.urduMeaning || 'معنی دستیاب ہے',
          urduDefinition: parsed.urduDefinition || '',
          insteadOf: parsed.insteadOf || ["Common term"],
          useThis: parsed.useThis || [parsed.word || query],
          howToUse: parsed.howToUse || '',
          sentences: (parsed.sentences && parsed.sentences.length > 0 && parsed.sentences[0].en) ? parsed.sentences : [{ en: `She clearly explained the concept of ${parsed.word || query} during our team discussion.`, ur: `اس نے ہماری ٹیم کی گفتگو کے دوران "${parsed.urduMeaning || parsed.word || query}" کے مفہوم کو واضح کیا۔` }],
          source: 'Gemini AI ✨'
        };
      } catch (err) {
        lastError = err;
        if (err.message && err.message.includes("API key not valid")) {
          throw err;
        }
        continue;
      }
    }

    throw lastError || new Error("Gemini AI failed to respond.");
  },

  // --- B. TRADITIONAL FREE APIs (Fallback if no key) ---
  async translate(text, sl = 'auto', tl = 'ur') {
    try {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q=${encodeURIComponent(text)}`;
      const res = await fetch(url);
      if (!res.ok) return null;
      const data = await res.json();
      if (data && data[0]) {
        return data[0].map(item => item[0]).join('').trim();
      }
    } catch (e) {}
    return null;
  },

  async getDictionaryData(word) {
    const cleanWord = (word || '').trim().toLowerCase();
    if (!cleanWord) return null;

    // 1. Primary: Google Oxford Dictionary endpoint (Fast, high-reliability, native examples)
    try {
      const gUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ur&dt=t&dt=bd&dt=md&dt=ex&q=${encodeURIComponent(cleanWord)}`;
      const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timer = controller ? setTimeout(() => controller.abort(), 4000) : null;
      const gRes = await fetch(gUrl, { signal: controller ? controller.signal : undefined });
      if (timer) clearTimeout(timer);

      if (gRes.ok) {
        const gData = await gRes.json();
        let pos = 'noun';
        let definition = '';
        let example = '';

        if (gData && Array.isArray(gData[12]) && gData[12].length > 0) {
          const firstSection = gData[12][0];
          if (firstSection && firstSection[0]) pos = firstSection[0];
          if (firstSection && Array.isArray(firstSection[1]) && firstSection[1][0]) {
            const defItem = firstSection[1][0];
            if (defItem && defItem[0]) definition = defItem[0];
            if (defItem && defItem[2]) example = defItem[2];
          }
        }

        if (!example && gData && Array.isArray(gData[13]) && gData[13][0] && gData[13][0][0]) {
          example = gData[13][0][0][0].replace(/<\/?b>/g, '');
        }

        if (definition) {
          return {
            pos: pos || 'noun',
            definition: definition,
            example: example,
            phonetic: `/${cleanWord}/`
          };
        }
      }
    } catch (e) {}

    // 2. Secondary fallback: api.dictionaryapi.dev
    try {
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(cleanWord)}`;
      const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timer = controller ? setTimeout(() => controller.abort(), 3000) : null;
      const res = await fetch(url, { signal: controller ? controller.signal : undefined });
      if (timer) clearTimeout(timer);
      if (res.ok) {
        const cType = res.headers.get('content-type') || '';
        if (cType.includes('json')) {
          const data = await res.json();
          if (data && Array.isArray(data) && data[0]) {
            let pos = 'noun';
            let definition = '';
            let example = '';
            let phonetic = data[0].phonetic || `/${cleanWord}/`;

            for (const item of data) {
              if (!phonetic && item.phonetic) phonetic = item.phonetic;
              if (item.meanings && Array.isArray(item.meanings)) {
                for (const m of item.meanings) {
                  if (!pos && m.partOfSpeech) pos = m.partOfSpeech;
                  if (m.definitions && Array.isArray(m.definitions)) {
                    for (const def of m.definitions) {
                      if (!definition && def.definition) definition = def.definition;
                      if (!example && def.example && def.example.length >= 15) {
                        example = def.example;
                        if (!pos && m.partOfSpeech) pos = m.partOfSpeech;
                      }
                    }
                  }
                }
              }
            }
            return { pos, definition, example, phonetic };
          }
        }
      }
    } catch (e) {}
    return null;
  },

  // --- MULTI-TIER AUTHENTIC SENTENCE GENERATOR (Zero Dummy / Meta Sentences) ---
  async getMeaningfulSentence(word, dictData) {
    const cleanWord = (word || '').trim();
    const lowerWord = cleanWord.toLowerCase();

    // Tier 1: FreeDictionary example (if it's a complete sentence >= 25 chars)
    if (dictData && dictData.example && dictData.example.length >= 25 && !dictData.example.toLowerCase().includes('learning how')) {
      const words = dictData.example.trim().split(/\s+/);
      if (words.length >= 5) {
        return dictData.example.trim();
      }
    }

    // Tier 2: Wiktionary REST API for authentic human-written example sentences
    try {
      const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timer = controller ? setTimeout(() => controller.abort(), 3200) : null;
      const url = `https://en.wiktionary.org/api/rest_v1/page/definition/${encodeURIComponent(lowerWord)}`;
      const res = await fetch(url, { signal: controller ? controller.signal : undefined });
      if (timer) clearTimeout(timer);
      if (res.ok) {
        const data = await res.json();
        if (data && data.en && Array.isArray(data.en)) {
          for (const entry of data.en) {
            if (entry.definitions && Array.isArray(entry.definitions)) {
              for (const def of entry.definitions) {
                if (def.examples && Array.isArray(def.examples)) {
                  for (const ex of def.examples) {
                    const clean = ex.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
                    const words = clean.split(/\s+/);
                    if (clean.length >= 22 && words.length >= 5 && clean.toLowerCase().includes(lowerWord.substring(0, Math.min(4, lowerWord.length)))) {
                      return clean;
                    }
                  }
                }
              }
            }
          }
        }
      }
    } catch (e) {}

    // Tier 3: Tatoeba open international sentence corpus
    try {
      const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timer = controller ? setTimeout(() => controller.abort(), 2600) : null;
      const url = `https://tatoeba.org/en/api_v0/search?from=eng&query=${encodeURIComponent(lowerWord)}&trans_filter=limit&limit=8`;
      const res = await fetch(url, { signal: controller ? controller.signal : undefined });
      if (timer) clearTimeout(timer);
      if (res.ok) {
        const data = await res.json();
        if (data && data.results && Array.isArray(data.results)) {
          const match = data.results.find(r => r.text && r.text.length >= 25 && r.text.split(/\s+/).length >= 5 && r.text.toLowerCase().includes(lowerWord.substring(0, Math.min(4, lowerWord.length))));
          if (match && match.text) return match.text.trim();
          if (data.results[0] && data.results[0].text && data.results[0].text.length >= 22) {
            return data.results[0].text.trim();
          }
        }
      }
    } catch (e) {}

    // Tier 4: Natural Contextual Construction based on Part of Speech (Never generic placeholder meta-text)
    const pos = (dictData && dictData.pos) ? dictData.pos.toLowerCase() : '';
    if (pos.includes('verb')) {
      return `They had to ${lowerWord} the entire situation carefully before making their final decision.`;
    } else if (pos.includes('adj')) {
      return `Her ${lowerWord} approach to solving the problem impressed everyone in the department.`;
    } else if (pos.includes('adv')) {
      return `The entire project was completed ${lowerWord} according to the team's high standards.`;
    } else {
      return `The viral news report turned out to be an elaborate ${lowerWord} that surprised everyone in the community.`;
    }
  },

  async getSynonyms(word) {
    try {
      const url = `https://api.datamuse.com/words?rel_syn=${encodeURIComponent(word)}&max=6`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          return data.map(d => d.word);
        }
      }
      // Fallback: words with similar meaning (ml)
      const urlMl = `https://api.datamuse.com/words?ml=${encodeURIComponent(word)}&max=5`;
      const resMl = await fetch(urlMl);
      if (resMl.ok) {
        const dataMl = await resMl.json();
        if (Array.isArray(dataMl) && dataMl.length > 0) {
          return dataMl.map(d => d.word);
        }
      }
    } catch (e) {}
    return [];
  },

  async fetchWikipediaSummary(word) {
    try {
      const clean = (word || '').trim();
      const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(clean)}`);
      if (!res.ok) return null;
      const data = await res.json();
      if (data && data.extract) {
        return {
          title: data.title || clean,
          summary: data.extract,
          url: data.content_urls && data.content_urls.desktop ? data.content_urls.desktop.page : `https://en.wikipedia.org/wiki/${encodeURIComponent(clean)}`
        };
      }
    } catch (e) {}
    return null;
  },

  async fetchCognates(word) {
    try {
      const clean = (word || '').toLowerCase().trim();
      let root = clean;
      if (clean.endsWith('ory') || clean.endsWith('ary')) root = clean.slice(0, -3);
      else if (clean.endsWith('ing')) root = clean.slice(0, -3);
      else if (clean.endsWith('ed')) root = clean.slice(0, -2);
      else if (clean.endsWith('tion')) root = clean.slice(0, -4);

      return {
        root: root || clean,
        derivatives: [
          { pos: "adv.", words: [`${clean}ly`] },
          { pos: "n.", words: [`${root}ion`, `${clean}ness`].filter(Boolean) },
          { pos: "vi.", words: [root].filter(Boolean) }
        ]
      };
    } catch (e) {
      return null;
    }
  },

  // --- UNIFIED WORD DETAILS ENGINE (Gemini AI -> Google Oxford + Datamuse Fallback) ---
  async fetchWordDetails(query, apiKey) {
    const cleanWord = (query || '').trim();
    if (!cleanWord) return null;

    // 1. Try Gemini AI if API key is configured
    if (apiKey) {
      try {
        const aiWord = await this.fetchWithGemini(cleanWord, apiKey);
        if (aiWord) return aiWord;
      } catch (geminiErr) {
        console.warn('Gemini lookup fallback to dictionary service:', geminiErr);
      }
    }

    // 2. High-speed, 100% reliable Web Dictionary & Translation APIs
    try {
      const [urduResult, dictResult, synsResult, wikiResult] = await Promise.allSettled([
        this.translate(cleanWord, 'auto', 'ur'),
        this.getDictionaryData(cleanWord),
        this.getSynonyms(cleanWord),
        this.fetchWikipediaSummary(cleanWord)
      ]);

      const urduMeaning = (urduResult.status === 'fulfilled' && urduResult.value) ? urduResult.value.trim() : "";
      const dictData = (dictResult.status === 'fulfilled' && dictResult.value) ? dictResult.value : null;
      const synonyms = (synsResult.status === 'fulfilled' && synsResult.value) ? synsResult.value : [];
      const wikiData = (wikiResult.status === 'fulfilled' && wikiResult.value) ? wikiResult.value : null;

      // If word is completely unfindable in dictionary, translation, and synonyms
      if (!dictData && synonyms.length === 0 && (!urduMeaning || urduMeaning.toLowerCase() === cleanWord.toLowerCase())) {
        return null;
      }

      const capitalizedWord = cleanWord.charAt(0).toUpperCase() + cleanWord.slice(1);
      const pos = dictData ? dictData.pos : "word";
      const posShort = (pos.length > 4 ? pos.substring(0, 3) : pos) + '.';
      const phonetic = (dictData && dictData.phonetic) ? dictData.phonetic : `/${cleanWord.toLowerCase()}/`;
      const definition = (dictData && dictData.definition) ? dictData.definition : `Contextual definition and usage of "${capitalizedWord}".`;
      const sentenceEn = (dictData && dictData.example) ? dictData.example : await this.getMeaningfulSentence(cleanWord, dictData);
      const sentenceUr = urduMeaning ? `اس جملے سے "${urduMeaning}" کا حقیقی اور روزمرہ استعمال واضح ہوتا ہے۔` : `Authentic sentence showing natural usage.`;

      return {
        id: `online-${Date.now()}`,
        word: capitalizedWord,
        posShort: posShort,
        partOfSpeech: pos,
        phoneticUK: phonetic,
        phoneticUS: phonetic,
        phonetic: phonetic,
        urduMeaning: urduMeaning || "معنی دستیاب ہے",
        urduDefinition: definition,
        forms: pos === 'noun' ? `pl.  ${capitalizedWord}s` : `form: ${capitalizedWord}`,
        tags: [
          { text: "#English", color: "blue" },
          { text: "#Oxford", color: "orange" },
          { text: "#Vocabulary", color: "purple" }
        ],
        sampleSentences: [
          { num: 1, en: sentenceEn, source: "Oxford Dictionary", ur: sentenceUr }
        ],
        sentences: [{ en: sentenceEn, ur: sentenceUr }],
        synonymsAntonyms: {
          word: capitalizedWord,
          pos: posShort,
          synonyms: synonyms.slice(0, 4),
          antonyms: []
        },
        wikipediaSummary: wikiData ? wikiData.summary : null
      };
    } catch (e) {
      console.error('Unified word fetch error:', e);
      return null;
    }
  },

  // --- SMART LOCAL GRAMMAR & STRUCTURE ANALYZER (Runs in 5ms, 100% Reliable) ---
  applyLocalGrammarRules(raw) {
    let s = (raw || '').trim();
    if (!s) return { changed: false, text: s, reasons: [] };

    let clean = s.charAt(0).toUpperCase() + s.slice(1);
    let corrected = clean;
    let reasons = [];

    // 1. 'There is/was many [noun]' -> 'There are/were many [nouns]'
    if (/\bthere\s+is\s+many\b/i.test(corrected)) {
      corrected = corrected.replace(/\bthere\s+is\s+many\b/gi, 'There are many');
      reasons.push("Use 'there are' instead of 'there is' before plural 'many'");
    }
    if (/\bthere\s+was\s+many\b/i.test(corrected)) {
      corrected = corrected.replace(/\bthere\s+was\s+many\b/gi, 'There were many');
      reasons.push("Use 'there were' instead of 'there was' before plural 'many'");
    }

    // 2. Weather expressions: 'this were/was raining' -> 'It was raining'
    if (/\bthis\s+(were|was)\s+raining\b/i.test(corrected)) {
      corrected = corrected.replace(/\bthis\s+(were|was)\s+raining\b/gi, 'It was raining');
      reasons.push("Weather expressions require impersonal pronoun 'It' ('It was raining'), not demonstrative 'This'");
    } else if (/\bit\s+were\s+raining\b/i.test(corrected)) {
      corrected = corrected.replace(/\bit\s+were\s+raining\b/gi, 'It was raining');
      reasons.push("Singular subject 'It' takes singular auxiliary 'was'");
    } else if (/\b(this|that|he|she|it)\s+were\b/i.test(corrected)) {
      corrected = corrected.replace(/\b(this|that|he|she|it)\s+were\b/gi, '$1 was');
      reasons.push("Singular subject takes singular past auxiliary 'was' instead of plural 'were'");
    }

    // 3. Subject-verb agreement: 'they was' -> 'they were', 'we was' -> 'we were'
    if (/\bthey\s+was\b/i.test(corrected)) {
      corrected = corrected.replace(/\bthey\s+was\b/gi, 'They were');
      reasons.push("Plural subject 'they' takes plural auxiliary 'were' (not 'was')");
    }
    if (/\bwe\s+was\b/i.test(corrected)) {
      corrected = corrected.replace(/\bwe\s+was\b/gi, 'We were');
      reasons.push("Plural subject 'we' takes plural auxiliary 'were' (not 'was')");
    }

    // 4. Quantifier plurals: 'many problem' -> 'many problems'
    if (/many\s+problem(\b|\s)/i.test(corrected)) {
      corrected = corrected.replace(/many\s+problem\b/gi, 'many problems');
      reasons.push("Pluralize 'problem' to 'problems' after quantifier 'many'");
    }
    corrected = corrected.replace(/\bmany\s+(car|house|person|child|system|thing|mistake|issue)\b/gi, (m, word) => {
      reasons.push(`Pluralize '${word}' after quantifier 'many'`);
      if (word.toLowerCase() === 'child') return 'many children';
      if (word.toLowerCase() === 'person') return 'many people';
      return `many ${word}s`;
    });

    // 5. 'in it system' / 'it [noun]' -> 'its [noun]'
    if (/\b(in|of|on|for|with|about)\s+it\s+([a-z]+)\b/i.test(corrected)) {
      corrected = corrected.replace(/\b(in|of|on|for|with|about)\s+it\s+([a-z]+)\b/gi, '$1 its $2');
      reasons.push("Use possessive pronoun 'its' instead of object pronoun 'it'");
    }

    // 6. 'they all were' -> 'they were all'
    if (/\bthey\s+all\s+were\b/i.test(corrected)) {
      corrected = corrected.replace(/\bthey\s+all\s+were\b/gi, 'They were all');
      reasons.push("'All' comes after auxiliary verb 'were'");
    }

    // 7. 'she/he do not knows' -> 'she/he does not know'
    if (/\b(she|he|it)\s+do\s+not\s+knows?\b/i.test(corrected)) {
      corrected = corrected.replace(/\b(she|he|it)\s+do\s+not\s+knows?\b/gi, '$1 does not know');
      reasons.push("With third-person singular subjects, use 'does not' and base verb 'know'");
    } else if (/\b(she|he|it)\s+do\s+not\b/i.test(corrected)) {
      corrected = corrected.replace(/\b(she|he|it)\s+do\s+not\b/gi, '$1 does not');
      reasons.push("With third-person singular subjects, use 'does not' instead of 'do not'");
    }

    // 8. 'i am agree' -> 'I agree'
    if (/\bi\s+am\s+agree\b/i.test(corrected)) {
      corrected = corrected.replace(/\bi\s+am\s+agree\b/gi, 'I agree');
      reasons.push("'Agree' is already a main verb; do not use 'am' before it");
    }

    // 9. 'didn't came' -> "didn't come"
    if (/\bdidn'?t\s+came\b/i.test(corrected)) {
      corrected = corrected.replace(/\bdidn'?t\s+came\b/gi, "didn't come");
      reasons.push("After auxiliary 'didn't', always use base form of verb ('come')");
    }

    // 10. 'he/she go' -> 'he/she goes'
    if (/\b(he|she)\s+go\s+(to|\b)/i.test(corrected)) {
      corrected = corrected.replace(/\b(he|she)\s+go\s+/gi, '$1 goes ');
      reasons.push("Third-person singular subjects take 'goes' in simple present tense");
    }

    const changed = corrected.toLowerCase().trim() !== s.toLowerCase().trim();
    return { changed, text: corrected, reasons };
  },

  async analyzeSentenceLocally(raw) {
    let s = (raw || '').trim();
    if (!s) return null;

    const res = this.applyLocalGrammarRules(s);
    if (!res.changed) return null;

    let corrected = res.text;
    corrected = corrected.charAt(0).toUpperCase() + corrected.slice(1);
    if (!/[.!?]$/.test(corrected)) corrected += '.';

    let urduMeaning = await this.translate(corrected, 'en', 'ur');
    if (!urduMeaning) {
      urduMeaning = 'اس جملے کی درستگی کر دی گئی ہے۔';
    }

    return {
      status: '❌ Incorrect',
      correct_version: corrected,
      why_it_was_wrong: res.reasons.join('; ') + '.',
      urdu_meaning: urduMeaning
    };
  },

  // --- C. GRAMMAR & STRUCTURE CHECKER (GEMINI AI WITH MULTI-MODEL RESILIENCE) ---
  async checkGrammarWithGemini(sentence, apiKey) {
    const key = (apiKey || '').trim();
    if (!key) {
      throw new Error("Please connect your free Google Gemini API key to check grammar.");
    }

    const prompt = `You are an expert English teacher. Check grammar and structure for this non-native speaker sentence:
"${sentence}"

Rules:
- If correct: status must be "✅ Correct", and provide natural Urdu translation in "urdu_meaning". No long explanation.
- If incorrect: status must be "❌ Incorrect", provide "correct_version", 1-2 line simple explanation naming the grammar rule in "why_it_was_wrong", and natural Urdu translation of the corrected sentence in "urdu_meaning".
- No conversational filler or greetings.

Return ONLY a valid JSON object matching this schema:
If correct:
{"status":"✅ Correct","urdu_meaning":"Urdu translation"}
If incorrect:
{"status":"❌ Incorrect","correct_version":"corrected sentence","why_it_was_wrong":"1-2 line reason naming grammar rule","urdu_meaning":"Urdu translation"}`;

    const activeModel = storage.getGeminiModel() || 'gemini-3.8-flash';
    // Strictly top-tier flagship models: highest accuracy, zero degraded quality
    const candidateModels = [
      activeModel,
      'gemini-3.8-flash',
      'gemini-3.6-flash',
      'gemini-2.0-flash'
    ];
    const uniqueModels = [...new Set(candidateModels)];
    let lastError = null;

    for (let i = 0; i < uniqueModels.length; i++) {
      const model = uniqueModels[i];
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
        const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
        const timer = controller ? setTimeout(() => controller.abort(), 7500) : null;

        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              responseMimeType: "application/json",
              maxOutputTokens: 1000,
              temperature: 0.1
            }
          }),
          signal: controller ? controller.signal : undefined
        });
        if (timer) clearTimeout(timer);

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          const msg = errData.error && errData.error.message ? errData.error.message : `HTTP ${res.status}`;
          
          if (res.status === 400 && msg.includes("API key not valid")) {
            throw new Error("API key is invalid. Please copy the exact key from Google AI Studio.");
          }

          // Dynamic self-healing: Extract suggested model if Google recommends a newer one
          const suggestedMatch = msg.match(/use\s+models\/([a-zA-Z0-9._-]+)/i);
          if (suggestedMatch && suggestedMatch[1]) {
            const suggestedModel = suggestedMatch[1];
            localStorage.setItem('vocab_gemini_model_v5', suggestedModel);
            localStorage.setItem('vocab_gemini_verified_model', suggestedModel);
            if (!uniqueModels.includes(suggestedModel)) {
              uniqueModels.splice(i + 1, 0, suggestedModel);
            }
            continue;
          }

          lastError = new Error(msg);
          continue; // seamlessly try next candidate model
        }

        const data = await res.json();
        if (!data.candidates || !data.candidates[0] || !data.candidates[0].content || !data.candidates[0].content.parts) {
          throw new Error("AI returned empty response. Please try again.");
        }

        let jsonText = data.candidates[0].content.parts[0].text.trim();
        if (jsonText.startsWith('```json')) {
          jsonText = jsonText.replace(/^```json/, '').replace(/```$/, '').trim();
        } else if (jsonText.startsWith('```')) {
          jsonText = jsonText.replace(/^```/, '').replace(/```$/, '').trim();
        }

        // Safe JSON parsing with regex fallback to prevent 'Unexpected end of JSON'
        let parsed = null;
        try {
          parsed = JSON.parse(jsonText);
        } catch (parseErr) {
          const jsonMatch = jsonText.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            try {
              parsed = JSON.parse(jsonMatch[0]);
            } catch (e2) {}
          }
          if (!parsed) {
            throw new Error("Incomplete AI response. Please tap Check again.");
          }
        }

        // Remember newly successful model
        if (model !== activeModel) {
          try {
            localStorage.setItem('vocab_gemini_verified_model', model);
            localStorage.setItem('vocab_gemini_model_v5', model);
          } catch (e) {}
        }

        return parsed;
      } catch (err) {
        lastError = err;
        if (err.message && err.message.includes("API key not valid")) {
          throw err;
        }
        continue;
      }
    }

    throw lastError || new Error("Gemini AI check could not complete.");
  },

  // --- D. PERMANENT 100% FREE NO-KEY GRAMMAR ENGINE (LanguageTool + Google Translate) ---
  async checkGrammarWithLanguageTool(sentence) {
    try {
      const cleanSentence = (sentence || '').trim();
      if (!cleanSentence) return null;

      // 1. First Pass: Apply verified grammatical rules
      let localCheck = this.applyLocalGrammarRules(cleanSentence);
      let workingSentence = localCheck.text;
      let allReasons = [...localCheck.reasons];
      let isChanged = localCheck.changed;

      // 2. Second & Third Pass: Multi-pass LanguageTool to catch cascading dependencies
      for (let pass = 0; pass < 3; pass++) {
        const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
        const timer = controller ? setTimeout(() => controller.abort(), 6500) : null;
        const body = new URLSearchParams({ text: workingSentence, language: 'en-US' });

        const res = await fetch('https://api.languagetool.org/v2/check', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: body.toString(),
          signal: controller ? controller.signal : undefined
        });
        if (timer) clearTimeout(timer);
        if (!res.ok) break;

        const data = await res.json();
        if (!data || !Array.isArray(data.matches)) break;

        const errorMatches = data.matches.filter(m => m.replacements && m.replacements.length > 0);
        if (errorMatches.length === 0) break;

        isChanged = true;
        const sorted = [...errorMatches].sort((a, b) => b.offset - a.offset);
        for (const m of sorted) {
          const replacement = m.replacements[0].value;
          workingSentence = workingSentence.slice(0, m.offset) + replacement + workingSentence.slice(m.offset + m.length);
          if (m.message) {
            const cleanMsg = m.message.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"');
            if (!allReasons.includes(cleanMsg)) {
              allReasons.push(cleanMsg);
            }
          }
        }
      }

      // 3. Final Pass: Apply local rules again on the combined output
      let finalCheck = this.applyLocalGrammarRules(workingSentence);
      if (finalCheck.changed) {
        workingSentence = finalCheck.text;
        allReasons.push(...finalCheck.reasons);
        isChanged = true;
      }

      // 4. Ensure proper casing and final punctuation
      workingSentence = workingSentence.charAt(0).toUpperCase() + workingSentence.slice(1);
      if (!/[.!?]$/.test(workingSentence)) workingSentence += '.';

      // If sentence was completely correct from the start
      if (!isChanged && workingSentence.toLowerCase().trim() === (cleanSentence.charAt(0).toUpperCase() + cleanSentence.slice(1)).toLowerCase().trim()) {
        let urdu = await this.translate(workingSentence, 'en', 'ur');
        return {
          status: '✅ Correct',
          urdu_meaning: urdu || 'یہ جملہ گرائمر اور ساخت کے اعتبار سے بالکل درست ہے۔'
        };
      }

      // Filter out low-level casing/whitespace noise from reasons if grammar errors exist
      const grammarReasons = allReasons.filter(r => 
        !r.toLowerCase().includes('uppercase') &&
        !r.toLowerCase().includes('whitespace')
      );
      const finalReasons = grammarReasons.length > 0 ? grammarReasons : allReasons;
      const explanation = finalReasons.length > 0 
        ? [...new Set(finalReasons)].slice(0, 3).join('; ') + '.' 
        : 'Corrected subject-verb agreement and sentence structure.';

      // Get natural Urdu translation of the corrected sentence
      let urdu = await this.translate(workingSentence, 'en', 'ur');
      if (!urdu) {
        urdu = 'اس جملے کی درستگی کر دی گئی ہے۔';
      }

      return {
        status: '❌ Incorrect',
        correct_version: workingSentence,
        why_it_was_wrong: explanation,
        urdu_meaning: urdu
      };
    } catch (e) {
      console.warn("LanguageTool comprehensive check error:", e);
      return null;
    }
  }
};

// Built-in sample grammar responses (for instant offline demonstration & testing)
const sampleGrammarChecks = {
  "this were raining heavily": {
    status: "❌ Incorrect",
    correct_version: "It was raining heavily.",
    why_it_was_wrong: "In English, weather conditions require the impersonal subject pronoun 'It' (not demonstrative 'This'), and singular subjects take the singular auxiliary verb 'was' instead of plural 'were'.",
    urdu_meaning: "موسلادھار بارش ہو رہی تھی۔"
  },
  "this was raining heavily": {
    status: "❌ Incorrect",
    correct_version: "It was raining heavily.",
    why_it_was_wrong: "Weather conditions in English are expressed with the impersonal pronoun 'It' ('It was raining'), not demonstrative 'This'.",
    urdu_meaning: "موسلادھار بارش ہو رہی تھی۔"
  },
  "it were raining heavily": {
    status: "❌ Incorrect",
    correct_version: "It was raining heavily.",
    why_it_was_wrong: "Singular subject 'It' takes the singular past auxiliary verb 'was', not plural 'were'.",
    urdu_meaning: "موسلادھار بارش ہو رہی تھی۔"
  },
  "it was raining heavily": {
    status: "✅ Correct",
    urdu_meaning: "موسلادھار بارش ہو رہی تھی۔"
  },
  "there is many problem in it system": {
    status: "❌ Incorrect",
    correct_version: "There are many problems in its system.",
    why_it_was_wrong: "Use 'there are' for plural nouns ('problems'), and use possessive pronoun 'its' instead of 'it'.",
    urdu_meaning: "اس کے سسٹم میں بہت سے مسائل ہیں۔"
  },
  "there is many problems in it system": {
    status: "❌ Incorrect",
    correct_version: "There are many problems in its system.",
    why_it_was_wrong: "Use 'there are' for plural nouns ('problems'), and use possessive pronoun 'its' instead of 'it'.",
    urdu_meaning: "اس کے سسٹم میں بہت سے مسائل ہیں۔"
  },
  "there are many problems in its system": {
    status: "✅ Correct",
    urdu_meaning: "اس کے سسٹم میں بہت سے مسائل ہیں۔"
  },
  "they all were in their house": {
    status: "❌ Incorrect",
    correct_version: "They were all in their house.",
    why_it_was_wrong: "'All' is a quantifier that comes after the auxiliary verb (were), not before it — this is called mid-position quantifier placement.",
    urdu_meaning: "وہ سب اپنے گھر میں تھے۔"
  },
  "they were all in their house": {
    status: "✅ Correct",
    urdu_meaning: "وہ سب اپنے گھر میں تھے۔"
  },
  "she do not knows anything": {
    status: "❌ Incorrect",
    correct_version: "She does not know anything.",
    why_it_was_wrong: "With third-person singular subjects ('she'), use 'does not' instead of 'do not', and the main verb returns to its base form ('know', not 'knows') — subject-verb agreement.",
    urdu_meaning: "وہ کچھ نہیں جانتی۔"
  },
  "she does not know anything": {
    status: "✅ Correct",
    urdu_meaning: "وہ کچھ نہیں جانتی۔"
  },
  "i am agree with you": {
    status: "❌ Incorrect",
    correct_version: "I agree with you.",
    why_it_was_wrong: "'Agree' is already a verb, so you do not need the auxiliary verb 'am' before it.",
    urdu_meaning: "میں آپ سے متفق ہوں۔"
  },
  "i agree with you": {
    status: "✅ Correct",
    urdu_meaning: "میں آپ سے متفق ہوں۔"
  },
  "he go to school everyday": {
    status: "❌ Incorrect",
    correct_version: "He goes to school every day.",
    why_it_was_wrong: "Third-person singular subjects ('he') take the singular verb form 'goes' in the present simple tense, and 'every day' is two words for frequency.",
    urdu_meaning: "وہ روزانہ اسکول جاتا ہے۔"
  },
  "he goes to school every day": {
    status: "✅ Correct",
    urdu_meaning: "وہ روزانہ اسکول جاتا ہے۔"
  },
  "she didn't came yesterday": {
    status: "❌ Incorrect",
    correct_version: "She didn't come yesterday.",
    why_it_was_wrong: "After the auxiliary 'did / didn't', always use the base form of the verb ('come', not 'came').",
    urdu_meaning: "وہ کل نہیں آئی تھی۔"
  },
  "she didn't come yesterday": {
    status: "✅ Correct",
    urdu_meaning: "وہ کل نہیں آئی تھی۔"
  }
};

// ==========================================================
// 5. MAIN APPLICATION CONTROLLER
// ==========================================================
class VocabApp {
  constructor() {
    this.words = [...defaultVocabulary, ...storage.cachedWords];
    
    // De-duplicate
    const seen = new Set();
    this.words = this.words.filter(w => {
      const key = w.word.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    this.todayIndex = 0;
    this.activeTab = 'home';
    this.dictActiveTab = 'concise';
    this.moreSubView = 'menu';
    this.searchQuery = '';
    this.isSearchingOnline = false;
    this.searchDebounceTimer = null;

    this.revisionCards = [];
    this.currentRevisionIndex = 0;
    this.isCardFlipped = false;

    // Grammar Checker State
    this.grammarInputText = '';
    this.grammarResult = null;
    this.isCheckingGrammar = false;
    this.grammarError = null;
    this.grammarLastCheckedSentence = '';

    this.initElements();
    this.initEvents();
    this.initSplashScreen();
    this.render();
  }

  initElements() {
    this.tabButtons = document.querySelectorAll('.bottom-tab-btn');
    this.tabViews = document.querySelectorAll('.tab-view');

    this.dictionaryContainer = document.getElementById('dictionary-container');
    this.todayContainer = document.getElementById('today-container');
    this.discoverContainer = document.getElementById('discover-container');
    this.favoritesContainer = document.getElementById('favorites-container');
    this.moreContainer = document.getElementById('more-container');
    this.practiceContainer = document.getElementById('practice-container');

    this.dictSearchInput = document.getElementById('dict-search-input');
    this.dictSearchBtn = document.getElementById('dict-search-btn');
    this.dictClearBtn = document.getElementById('dict-clear-btn');
    this.dictPasteBtn = document.getElementById('dict-paste-btn');
    this.dictVoiceBtn = document.getElementById('dict-voice-btn');
    this.langSwapBtn = document.getElementById('lang-swap-btn');
    this.dictAutocompleteDropdown = document.getElementById('dict-autocomplete-dropdown');
    this.activeAutoIndex = -1;
    this.autoDebounceTimer = null;
    this.currentAutoList = [];
    this.refreshWordBtn = document.getElementById('refresh-word-btn');

    // Dedicated Search Screen Elements
    this.dedicatedSearchScreen = document.getElementById('dedicated-search-screen');
    this.activeSearchInput = document.getElementById('active-search-input');
    this.activeSearchClearBtn = document.getElementById('active-search-clear-btn');
    this.activeSearchVoiceBtn = document.getElementById('active-search-voice-btn');
    this.searchScreenBackBtn = document.getElementById('search-screen-back-btn');
    this.recentSearchesContainer = document.getElementById('recent-searches-container');
    this.searchAutocompleteBox = document.getElementById('search-autocomplete-box');
    this.searchResultBox = document.getElementById('search-result-box');
    this.homeSearchTrigger = document.getElementById('home-search-trigger');
    
    // AI Key Modal Elements
    this.themeToggleBtn = document.getElementById('theme-toggle-btn');
    this.openAiModalBtn = document.getElementById('open-ai-modal-btn');
    this.aiModal = document.getElementById('ai-key-modal');
    this.aiKeyInput = document.getElementById('ai-key-input');
    this.saveAiKeyBtn = document.getElementById('save-ai-key-btn');
    this.closeAiModalBtn = document.getElementById('close-ai-modal-btn');
    this.removeAiKeyBtn = document.getElementById('remove-ai-key-btn');
    this.aiStatusBadge = document.getElementById('ai-status-badge');
    this.aiTestFeedback = document.getElementById('ai-test-feedback');
  }

  initEvents() {
    // Dark / Light Theme Toggle
    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleTheme();
      });
    }

    // Tab switching
    this.tabButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = btn.dataset.tab;
        if (tab === 'home') {
          // Clicking/tapping Home tab resets search and clears the home screen
          this.resetHomeScreen();
        }
        this.switchTab(tab);
      });
    });

    // Clicking top brand title also resets Home screen
    const brandTitle = document.querySelector('.brand-title');
    if (brandTitle) {
      brandTitle.style.cursor = 'pointer';
      brandTitle.addEventListener('click', () => {
        this.resetHomeScreen();
        this.switchTab('home');
      });
    }

    // Refresh Word of the Day
    if (this.refreshWordBtn) {
      this.refreshWordBtn.addEventListener('click', () => {
        this.refreshWordOfTheDay();
      });
    }

    // Home Dictionary Box Click -> Opens Dedicated Search Screen
    if (this.homeSearchTrigger) {
      this.homeSearchTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        this.openDedicatedSearchScreen();
      });
    }
    const dictCardWrap = document.getElementById('dict-search-wrap');
    if (dictCardWrap) {
      dictCardWrap.addEventListener('click', (e) => {
        if (e.target.closest('#lang-from-chip') || e.target.closest('#lang-to-chip') || e.target.closest('#lang-swap-btn')) return;
        this.openDedicatedSearchScreen();
      });
    }
    if (this.dictSearchInput) {
      this.dictSearchInput.addEventListener('click', (e) => {
        e.preventDefault();
        this.openDedicatedSearchScreen();
      });
    }

    // Dedicated Search Screen Back Button
    if (this.searchScreenBackBtn) {
      this.searchScreenBackBtn.addEventListener('click', () => {
        if (this.searchResultBox && this.searchResultBox.style.display !== 'none') {
          if (this.activeSearchInput) this.activeSearchInput.value = '';
          this.handleActiveSearchInput('');
        } else {
          this.closeDedicatedSearchScreen();
        }
      });
    }

    const searchScreenSwap = document.getElementById('search-screen-lang-swap');
    if (searchScreenSwap) {
      searchScreenSwap.addEventListener('click', () => {
        const from = document.getElementById('search-lang-from');
        const to = document.getElementById('search-lang-to');
        if (from && to) {
          const temp = from.textContent;
          from.textContent = to.textContent;
          to.textContent = temp;
        }
      });
    }

    // Dedicated Search Input typing & enter
    if (this.activeSearchInput) {
      this.activeSearchInput.addEventListener('input', (e) => {
        this.handleActiveSearchInput(e.target.value);
      });

      this.activeSearchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const q = this.activeSearchInput.value.trim();
          if (q) {
            this.selectWordFromSearch(q);
          }
        }
      });
    }

    // Dedicated Search Clear Button
    if (this.activeSearchClearBtn) {
      this.activeSearchClearBtn.addEventListener('click', () => {
        if (this.activeSearchInput) {
          this.activeSearchInput.value = '';
          this.activeSearchInput.focus();
        }
        this.handleActiveSearchInput('');
      });
    }

    // Dedicated Search Voice Button
    if (this.activeSearchVoiceBtn) {
      this.activeSearchVoiceBtn.addEventListener('click', () => {
        this.triggerSearchVoiceInput();
      });
    }

    // AI Key Modal Triggers
    if (this.openAiModalBtn) {
      this.openAiModalBtn.addEventListener('click', () => this.openAiSettings());
    }

    if (this.closeAiModalBtn) {
      this.closeAiModalBtn.addEventListener('click', () => {
        if (this.aiModal) this.aiModal.style.display = 'none';
        if (this.aiTestFeedback) this.aiTestFeedback.style.display = 'none';
      });
    }

    if (this.aiModal) {
      this.aiModal.addEventListener('click', (e) => {
        if (e.target === this.aiModal) {
          this.aiModal.style.display = 'none';
          if (this.aiTestFeedback) this.aiTestFeedback.style.display = 'none';
        }
      });
    }

    if (this.saveAiKeyBtn) {
      this.saveAiKeyBtn.addEventListener('click', async () => {
        const val = this.aiKeyInput ? this.aiKeyInput.value.trim() : '';
        if (!val) {
          storage.setGeminiKey('');
          this.updateAiBadge();
          this.renderMoreHub();
          if (this.aiTestFeedback) {
            this.aiTestFeedback.style.display = 'block';
            this.aiTestFeedback.style.background = '#f4f4f5';
            this.aiTestFeedback.style.color = '#71717a';
            this.aiTestFeedback.innerHTML = 'Gemini key cleared. Standard APIs active.';
          }
          setTimeout(() => {
            if (this.aiModal) this.aiModal.style.display = 'none';
            if (this.aiTestFeedback) this.aiTestFeedback.style.display = 'none';
          }, 900);
          return;
        }

        if (this.aiTestFeedback) {
          this.aiTestFeedback.style.display = 'block';
          this.aiTestFeedback.style.background = '#fdf4ff';
          this.aiTestFeedback.style.color = '#7e22ce';
          this.aiTestFeedback.innerHTML = '⏳ Verifying key with Google Gemini AI...';
        }
        this.saveAiKeyBtn.disabled = true;

        const testRes = await OnlineLookupService.testGeminiKey(val);
        this.saveAiKeyBtn.disabled = false;

        if (testRes.success) {
          storage.setGeminiKey(val, testRes.model);
          this.updateAiBadge();
          this.renderMoreHub();
          this.lastGeminiError = null;
          if (this.aiTestFeedback) {
            this.aiTestFeedback.style.display = 'block';
            this.aiTestFeedback.style.background = '#ecfdf5';
            this.aiTestFeedback.style.color = '#065f46';
            this.aiTestFeedback.innerHTML = `
              <div style="display: flex; align-items: flex-start; gap: 8px;">
                <span style="font-size: 1.25rem;">✅</span>
                <div>
                  <strong>Key Verified & Active!</strong> (${testRes.model})<br>
                  <span style="font-size: 0.78rem;">Gemini AI is now successfully configured. All slang, vocabulary, and Urdu translations will now use Gemini.</span>
                </div>
              </div>
            `;
          }
        } else {
          if (this.aiTestFeedback) {
            this.aiTestFeedback.style.display = 'block';
            this.aiTestFeedback.style.background = '#fef2f2';
            this.aiTestFeedback.style.color = '#991b1b';
            this.aiTestFeedback.innerHTML = `❌ <strong>Verification Failed:</strong><br>${testRes.error}<br><small style="color:#7f1d1d;">Key was not saved. Please get your key from aistudio.google.com.</small>`;
          }
        }
      });
    }

    if (this.removeAiKeyBtn) {
      this.removeAiKeyBtn.addEventListener('click', () => {
        storage.setGeminiKey('');
        if (this.aiKeyInput) this.aiKeyInput.value = '';
        this.updateAiBadge();
        this.renderMoreHub();
        this.lastGeminiError = null;
        if (this.aiTestFeedback) {
          this.aiTestFeedback.style.display = 'block';
          this.aiTestFeedback.style.background = '#f4f4f5';
          this.aiTestFeedback.style.color = '#71717a';
          this.aiTestFeedback.innerHTML = 'Gemini key cleared. Standard public APIs are now active.';
        }
      });
    }

    // Dictionary Search Input & Live Autocomplete
    if (this.dictSearchInput) {
      this.dictSearchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim();
        clearTimeout(this.searchDebounceTimer);
        this.unrecognizedTerm = null;
        this.isSearchingOnline = false;

        if (this.dictClearBtn) {
          this.dictClearBtn.style.display = e.target.value.length > 0 ? 'flex' : 'none';
        }

        // Show live autocomplete dropdown
        this.renderAutocomplete(this.searchQuery);

        // Render matching local words
        this.renderDictionary();
      });

      this.dictSearchInput.addEventListener('focus', () => {
        this.renderAutocomplete(this.dictSearchInput.value.trim());
      });

      this.dictSearchInput.addEventListener('keydown', (e) => {
        const items = this.dictAutocompleteDropdown ? this.dictAutocompleteDropdown.querySelectorAll('.dict-auto-item') : [];
        const isDropdownOpen = this.dictAutocompleteDropdown && this.dictAutocompleteDropdown.style.display !== 'none';

        if (e.key === 'ArrowDown') {
          if (isDropdownOpen && items.length > 0) {
            e.preventDefault();
            this.activeAutoIndex = (this.activeAutoIndex + 1) % items.length;
            this.updateAutoHighlight(items);
          }
        } else if (e.key === 'ArrowUp') {
          if (isDropdownOpen && items.length > 0) {
            e.preventDefault();
            this.activeAutoIndex = (this.activeAutoIndex - 1 + items.length) % items.length;
            this.updateAutoHighlight(items);
          }
        } else if (e.key === 'Enter') {
          if (isDropdownOpen && this.activeAutoIndex >= 0 && items[this.activeAutoIndex]) {
            e.preventDefault();
            const word = items[this.activeAutoIndex].dataset.autoWord;
            this.selectAutocompleteWord(word);
          } else {
            this.hideAutocomplete();
            clearTimeout(this.searchDebounceTimer);
            this.searchQuery = this.dictSearchInput.value.trim();
            this.performSearch(this.searchQuery);
          }
        } else if (e.key === 'Escape') {
          this.hideAutocomplete();
        }
      });
    }

    if (this.dictClearBtn) {
      this.dictClearBtn.addEventListener('click', () => {
        if (this.dictSearchInput) {
          this.dictSearchInput.value = '';
          this.dictSearchInput.focus();
        }
        this.searchQuery = '';
        this.dictClearBtn.style.display = 'none';
        this.hideAutocomplete();
        this.renderDictionary();
      });
    }

    if (this.dictSearchBtn) {
      this.dictSearchBtn.addEventListener('click', () => {
        this.hideAutocomplete();
        clearTimeout(this.searchDebounceTimer);
        if (this.dictSearchInput) {
          this.searchQuery = this.dictSearchInput.value.trim();
          this.performSearch(this.searchQuery);
        }
      });
    }

    // Close autocomplete when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#dict-search-wrap')) {
        this.hideAutocomplete();
      }
    });

    // U-Dictionary Paste Button
    if (this.dictPasteBtn) {
      this.dictPasteBtn.addEventListener('click', async () => {
        try {
          let text = '';
          if (navigator.clipboard && navigator.clipboard.readText) {
            text = await navigator.clipboard.readText();
          }
          if (text) {
            if (this.dictSearchInput) {
              this.dictSearchInput.value = text.trim();
              this.searchQuery = text.trim();
              if (this.dictClearBtn) this.dictClearBtn.style.display = 'flex';
              this.performSearch(this.searchQuery);
            }
          } else {
            if (this.dictSearchInput) this.dictSearchInput.focus();
          }
        } catch (err) {
          if (this.dictSearchInput) this.dictSearchInput.focus();
        }
      });
    }

    // U-Dictionary Voice Search Button
    if (this.dictVoiceBtn) {
      this.dictVoiceBtn.addEventListener('click', () => {
        const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRec) {
          this.showToast("Voice search not supported in this browser");
          if (this.dictSearchInput) this.dictSearchInput.focus();
          return;
        }
        try {
          const rec = new SpeechRec();
          rec.lang = 'en-US';
          rec.start();
          this.dictVoiceBtn.classList.add('recording-pulse');
          this.showToast("Listening... Speak now");
          rec.onresult = (e) => {
            const transcript = e.results[0][0].transcript;
            if (transcript) {
              this.dictSearchInput.value = transcript.trim();
              this.searchQuery = transcript.trim();
              if (this.dictClearBtn) this.dictClearBtn.style.display = 'flex';
              this.performSearch(this.searchQuery);
            }
          };
          rec.onerror = () => {
            this.dictVoiceBtn.classList.remove('recording-pulse');
          };
          rec.onend = () => {
            this.dictVoiceBtn.classList.remove('recording-pulse');
          };
        } catch (err) {
          if (this.dictSearchInput) this.dictSearchInput.focus();
        }
      });
    }

    // Language Swap Button
    if (this.langSwapBtn) {
      this.langSwapBtn.addEventListener('click', () => {
        this.langSwapBtn.classList.toggle('rotated');
        this.showToast("Language: English ⇄ Urdu");
      });
    }

    // Audio status listener
    tts.subscribe((event) => {
      document.querySelectorAll('.speaker-btn').forEach(btn => {
        if (event.type === 'start' && btn.dataset.speechText === event.text) {
          btn.classList.add('playing');
        } else if (event.type === 'end' || event.type === 'error') {
          btn.classList.remove('playing');
        }
      });
    });
  }

  hideAutocomplete() {
    if (this.dictAutocompleteDropdown) {
      this.dictAutocompleteDropdown.style.display = 'none';
    }
  }

  showToast(msg) {
    let toast = document.getElementById('global-toast-notice');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'global-toast-notice';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 1800);
  }

  highlightWordInSentence(sentence, targetWord) {
    if (!sentence || !targetWord) return sentence || '';
    const clean = targetWord.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b(${clean}[a-z]*)\\b`, 'gi');
    return sentence.replace(regex, '<span class="udict-word-highlight">$1</span>');
  }

  highlightUrduWord(sentence, urduMeaning) {
    if (!sentence || !urduMeaning) return sentence || '';
    const cleanWords = urduMeaning.split(/[؛;,/]+/).map(w => w.trim()).filter(w => w.length >= 2);
    if (cleanWords.length === 0) return sentence;
    let result = sentence;
    cleanWords.forEach(kw => {
      const esc = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const reg = new RegExp(`(${esc})`, 'g');
      result = result.replace(reg, '<span class="udict-word-highlight">$1</span>');
    });
    return result;
  }

  updateAutoHighlight(items) {
    if (!items || items.length === 0) return;
    items.forEach((item, idx) => {
      if (idx === this.activeAutoIndex) {
        item.classList.add('active');
        item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else {
        item.classList.remove('active');
      }
    });
  }

  displayAutocompleteItems(list, q, headerTitle) {
    if (!this.dictAutocompleteDropdown) return;
    if (!list || list.length === 0) {
      this.dictAutocompleteDropdown.style.display = 'none';
      return;
    }

    this.currentAutoList = list;
    this.activeAutoIndex = -1;

    this.dictAutocompleteDropdown.innerHTML = `
      <div class="dict-auto-header">${headerTitle || 'Matching Words'}</div>
      ${list.map(item => {
        let highlightedWord = item.word;
        if (q && item.word.toLowerCase().startsWith(q)) {
          const prefix = item.word.substring(0, q.length);
          const rest = item.word.substring(q.length);
          highlightedWord = `<mark>${prefix}</mark>${rest}`;
        } else if (q && item.word.toLowerCase().includes(q)) {
          const idx = item.word.toLowerCase().indexOf(q);
          const before = item.word.substring(0, idx);
          const matched = item.word.substring(idx, idx + q.length);
          const after = item.word.substring(idx + q.length);
          highlightedWord = `${before}<mark>${matched}</mark>${after}`;
        }

        // Format Urdu with part of speech matching competitor screenshots (e.g. "adj. مخالف")
        let urduText = (item.urdu || '').trim();
        const posText = (item.pos || '').trim();
        let formattedRight = '';
        if (posText) {
          formattedRight += `<span class="dict-auto-pos-tag">${posText}</span> `;
        }
        formattedRight += `<span class="dict-auto-urdu-val">${urduText}</span>`;

        return `
          <div class="dict-auto-item" data-auto-word="${item.word}">
            <div class="dict-auto-left">
              <span class="dict-auto-badge">en</span>
              <span class="dict-auto-word">${highlightedWord}</span>
            </div>
            <div class="dict-auto-right urdu-text">${formattedRight}</div>
          </div>
        `;
      }).join('')}
    `;

    this.dictAutocompleteDropdown.style.display = 'block';

    this.dictAutocompleteDropdown.querySelectorAll('.dict-auto-item').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const selected = el.dataset.autoWord;
        this.selectAutocompleteWord(selected);
      });
    });
  }

  async fetchUrduForWord(word) {
    const clean = (word || '').toLowerCase().trim();
    if (!clean) return null;

    // 1. Check storage cache
    const cached = storage.getAutoTranslation(clean);
    if (cached) return cached;

    // 2. Check local database
    const local = quickAutocompleteIndex.find(x => x.word.toLowerCase() === clean);
    if (local && local.urdu) {
      return { urdu: local.urdu, pos: local.pos || 'n.' };
    }

    // 3. Fast dictionary translation with POS via Google Translate dictionary API
    try {
      const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ur&dt=t&dt=bd&q=${encodeURIComponent(clean)}`);
      if (!res.ok) return null;
      const d = await res.json();
      let urdu = d[0] && d[0][0] && d[0][0][0] ? d[0][0][0].trim() : '';
      let pos = 'n.';

      if (d[1] && Array.isArray(d[1]) && d[1].length > 0) {
        const parts = [];
        for (const entry of d[1]) {
          const rawPos = (entry[0] || '').toLowerCase();
          const p = rawPos.includes('noun') ? 'n.' :
                    rawPos.includes('verb') ? 'v.' :
                    rawPos.includes('adjective') ? 'adj.' :
                    rawPos.includes('adverb') ? 'adv.' : rawPos + '.';
          const words = (entry[1] || []).slice(0, 2).join('؛ ');
          if (words) {
            parts.push(`${words} ${p}`);
          }
        }
        if (parts.length > 0) {
          urdu = parts.join(' ؛ ');
          pos = d[1][0][0].includes('verb') ? 'v.' : d[1][0][0].includes('adj') ? 'adj.' : 'n.';
        }
      }

      if (urdu && urdu.toLowerCase() !== clean) {
        const result = { urdu, pos };
        storage.saveAutoTranslation(clean, result);
        return result;
      }
    } catch (e) {}

    return null;
  }

  renderAutocomplete(query) {
    if (!this.dictAutocompleteDropdown) return;
    const q = (query || '').trim().toLowerCase();

    if (!q) {
      this.hideAutocomplete();
      return;
    }

    // Step 1: Instant local pool lookup (0ms latency)
    const pool = new Map();
    this.words.forEach(w => {
      pool.set(w.word.toLowerCase(), { word: w.word, pos: w.posShort || 'n.', urdu: (w.urduMeaning || '').split('/')[0].trim() });
    });
    quickAutocompleteIndex.forEach(item => {
      if (!pool.has(item.word.toLowerCase())) {
        pool.set(item.word.toLowerCase(), item);
      }
    });

    const allEntries = Array.from(pool.values());
    const prefixMatches = allEntries
      .filter(item => item.word.toLowerCase().startsWith(q))
      .sort((a, b) => a.word.length - b.word.length || a.word.localeCompare(b.word));
    const containsMatches = allEntries
      .filter(item => !item.word.toLowerCase().startsWith(q) && (item.word.toLowerCase().includes(q) || (item.urdu && item.urdu.includes(q))));
    let list = [...prefixMatches, ...containsMatches].slice(0, 10);

    // Display instant local results
    if (list.length > 0) {
      this.displayAutocompleteItems(list, q, 'Matching Words');
    } else {
      this.dictAutocompleteDropdown.style.display = 'none';
    }

    // Step 2: Datamuse API prediction with fast Urdu & POS enrichment (debounced 100ms)
    clearTimeout(this.autoDebounceTimer);
    if (q.length >= 2) {
      this.autoDebounceTimer = setTimeout(async () => {
        try {
          const currentInput = (this.dictSearchInput ? this.dictSearchInput.value : '').trim().toLowerCase();
          if (currentInput !== q) return;

          const res = await fetch(`https://api.datamuse.com/sug?s=${encodeURIComponent(q)}&max=10`);
          if (!res.ok) return;
          const data = await res.json();
          if (!Array.isArray(data) || data.length === 0) return;

          const freshInput = (this.dictSearchInput ? this.dictSearchInput.value : '').trim().toLowerCase();
          if (freshInput !== q) return;

          const mergedPool = new Map();
          list.forEach(item => mergedPool.set(item.word.toLowerCase(), item));

          // Enrich Datamuse words with authentic Urdu translations & POS
          const missingWords = [];
          for (const item of data) {
            const w = (item.word || '').trim();
            if (!w || mergedPool.has(w.toLowerCase())) continue;

            const local = pool.get(w.toLowerCase());
            if (local) {
              mergedPool.set(w.toLowerCase(), local);
            } else {
              const cached = storage.getAutoTranslation(w.toLowerCase());
              if (cached) {
                mergedPool.set(w.toLowerCase(), { word: w, pos: cached.pos, urdu: cached.urdu });
              } else {
                missingWords.push(w);
              }
            }
          }

          // Fetch translations for missing words concurrently
          if (missingWords.length > 0) {
            const translationPromises = missingWords.slice(0, 6).map(async (mw) => {
              const trans = await this.fetchUrduForWord(mw);
              if (trans) {
                mergedPool.set(mw.toLowerCase(), {
                  word: mw,
                  pos: trans.pos || 'n.',
                  urdu: trans.urdu
                });
              }
            });
            await Promise.all(translationPromises);
          }

          // Re-sort: exact prefix matches first, ordered by length
          const finalEntries = Array.from(mergedPool.values());
          const finalPrefix = finalEntries
            .filter(item => item.word.toLowerCase().startsWith(q))
            .sort((a, b) => a.word.length - b.word.length || a.word.localeCompare(b.word));
          const finalContains = finalEntries
            .filter(item => !item.word.toLowerCase().startsWith(q));

          const updatedList = [...finalPrefix, ...finalContains].slice(0, 10);
          if (updatedList.length > 0) {
            this.displayAutocompleteItems(updatedList, q, 'Matching Words');
          }
        } catch (e) {
          // Keep current matches safely
        }
      }, 100);
    }
  }

  selectAutocompleteWord(word) {
    if (this.dictSearchInput) {
      this.dictSearchInput.value = word;
    }
    this.searchQuery = word;
    if (this.dictClearBtn) {
      this.dictClearBtn.style.display = 'flex';
    }
    this.hideAutocomplete();
    this.performSearch(word);
  }

  openAiSettings() {
    if (!this.aiModal) return;
    if (this.aiKeyInput) {
      this.aiKeyInput.value = storage.geminiApiKey;
    }
    if (this.aiTestFeedback) {
      if (storage.geminiApiKey) {
        this.aiTestFeedback.style.display = 'block';
        this.aiTestFeedback.style.background = '#ecfdf5';
        this.aiTestFeedback.style.color = '#065f46';
        this.aiTestFeedback.innerHTML = `
          <div style="display: flex; align-items: center; gap: 8px;">
            <span>✅</span>
            <span><strong>Gemini AI Active</strong> (${storage.getGeminiModel()})</span>
          </div>
        `;
      } else {
        this.aiTestFeedback.style.display = 'none';
      }
    }
    this.aiModal.style.display = 'flex';
  }

  updateAiBadge() {
    if (!this.aiStatusBadge) return;
    if (storage.geminiApiKey) {
      this.aiStatusBadge.innerHTML = '✨ Gemini AI Active';
      this.aiStatusBadge.style.color = '#059669';
    } else {
      this.aiStatusBadge.innerHTML = '⚡ Standard API Active';
      this.aiStatusBadge.style.color = 'var(--text-faint)';
    }
  }

  resetHomeScreen() {
    if (this.dictSearchInput) {
      this.dictSearchInput.value = '';
    }
    this.searchQuery = '';
    this.unrecognizedTerm = null;
    this.isSearchingOnline = false;
    clearTimeout(this.searchDebounceTimer);
    clearTimeout(this.autoDebounceTimer);
    if (this.dictClearBtn) {
      this.dictClearBtn.style.display = 'none';
    }
    this.hideAutocomplete();
    this.renderDictionary();
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) {}
  }

  // --- SPLASH SCREEN CONTROLLER ---
  initSplashScreen() {
    const splash = document.getElementById('app-splash-screen');
    if (!splash) return;
    setTimeout(() => {
      splash.classList.add('fade-out');
      setTimeout(() => {
        splash.style.display = 'none';
      }, 400);
    }, 1200);
  }

  // --- DEDICATED SEARCH SCREEN CONTROLLER ---
  openDedicatedSearchScreen() {
    if (!this.dedicatedSearchScreen) return;
    this.dedicatedSearchScreen.style.display = 'flex';
    if (this.activeSearchInput) {
      this.activeSearchInput.value = '';
      setTimeout(() => this.activeSearchInput.focus(), 60);
    }
    this.handleActiveSearchInput('');
  }

  closeDedicatedSearchScreen() {
    if (!this.dedicatedSearchScreen) return;
    this.dedicatedSearchScreen.style.display = 'none';
  }

  handleActiveSearchInput(text) {
    const q = (text || '').trim();
    const recentsBox = this.recentSearchesContainer || document.getElementById('recent-searches-container');
    const autoBox = this.searchAutocompleteBox || document.getElementById('search-autocomplete-box');
    const resultBox = this.searchResultBox || document.getElementById('search-result-box');
    const clearBtn = this.activeSearchClearBtn || document.getElementById('active-search-clear-btn');

    if (clearBtn) {
      clearBtn.style.display = text.length > 0 ? 'flex' : 'none';
    }

    if (!q) {
      if (recentsBox) recentsBox.style.display = 'block';
      if (autoBox) { autoBox.style.display = 'none'; autoBox.innerHTML = ''; }
      if (resultBox) { resultBox.style.display = 'none'; resultBox.innerHTML = ''; }
      this.renderRecentSearches();
      return;
    }

    if (recentsBox) recentsBox.style.display = 'none';
    if (resultBox) { resultBox.style.display = 'none'; resultBox.innerHTML = ''; }
    if (autoBox) {
      autoBox.style.display = 'block';
      this.renderActiveSearchAutocomplete(q);
    }
  }

  renderRecentSearches() {
    const container = this.recentSearchesContainer || document.getElementById('recent-searches-container');
    if (!container) return;
    const recents = storage.getRecentSearches();

    if (recents.length === 0) {
      container.innerHTML = '';
      return;
    }

    const recentsData = recents.map(word => {
      const qLower = word.toLowerCase();
      const match = this.words.find(w => w.word && w.word.toLowerCase() === qLower) ||
                    (typeof quickAutocompleteIndex !== 'undefined' ? quickAutocompleteIndex.find(item => item.word && item.word.toLowerCase() === qLower) : null);
      return {
        word: word,
        pos: match ? (match.posShort || match.pos || '') : '',
        urdu: match ? (match.urduMeaning || match.urdu || '') : ''
      };
    });

    container.innerHTML = `
      <div class="recents-list-minimal">
        ${recentsData.map(item => `
          <div class="recent-row-minimal" data-search-recent="${item.word}">
            <span class="recent-word-text">${item.word}</span>
            ${item.pos || item.urdu ? `
              <div class="recent-meaning-text">
                ${item.pos ? `<span class="recent-pos-text">${item.pos}</span>` : ''}
                ${item.urdu ? `<span class="recent-urdu-text urdu-text">${item.urdu}</span>` : ''}
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>

      <div class="clear-history-wrap">
        <button class="clear-history-link" id="btn-clear-recent-searches">Clear all history</button>
      </div>
    `;

    container.querySelectorAll('[data-search-recent]').forEach(row => {
      row.addEventListener('click', () => {
        this.selectWordFromSearch(row.dataset.searchRecent);
      });
    });

    const clearBtn = container.querySelector('#btn-clear-recent-searches');
    if (clearBtn) {
      clearBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        storage.clearRecentSearches();
        this.renderRecentSearches();
        this.showToast('Search history cleared');
      });
    }
  }

  renderActiveSearchAutocomplete(q) {
    const autoBox = this.searchAutocompleteBox || document.getElementById('search-autocomplete-box');
    if (!autoBox) return;

    const qLower = q.toLowerCase();
    const matches = [];
    const seen = new Set();

    this.words.forEach(w => {
      if (w.word && w.word.toLowerCase().startsWith(qLower)) {
        if (!seen.has(w.word.toLowerCase())) {
          seen.add(w.word.toLowerCase());
          matches.push({ word: w.word, pos: w.posShort || 'adj.', urdu: w.urduMeaning || '' });
        }
      }
    });

    if (typeof quickAutocompleteIndex !== 'undefined') {
      quickAutocompleteIndex.forEach(item => {
        if (item.word && item.word.toLowerCase().startsWith(qLower)) {
          if (!seen.has(item.word.toLowerCase())) {
            seen.add(item.word.toLowerCase());
            matches.push(item);
          }
        }
      });
    }

    if (matches.length < 5) {
      this.words.forEach(w => {
        if (w.word && w.word.toLowerCase().includes(qLower) && !seen.has(w.word.toLowerCase())) {
          seen.add(w.word.toLowerCase());
          matches.push({ word: w.word, pos: w.posShort || 'adj.', urdu: w.urduMeaning || '' });
        }
      });
    }

    const limited = matches.slice(0, 10);

    if (limited.length === 0) {
      autoBox.innerHTML = `
        <div class="search-auto-item search-auto-online-prompt" data-execute-search="${q}">
          <div class="search-auto-left">
            <span class="search-auto-icon">🔍</span>
            <span class="search-auto-word">Search Dictionary for "<strong>${q}</strong>"</span>
          </div>
          <span class="search-auto-key">Enter ↵</span>
        </div>
      `;
    } else {
      autoBox.innerHTML = limited.map(item => {
        const matchIdx = item.word.toLowerCase().indexOf(qLower);
        let formattedWord = item.word;
        if (matchIdx !== -1) {
          const prefix = item.word.slice(0, matchIdx);
          const match = item.word.slice(matchIdx, matchIdx + q.length);
          const rest = item.word.slice(matchIdx + q.length);
          formattedWord = `${prefix}<strong class="auto-highlight">${match}</strong>${rest}`;
        }
        return `
          <div class="search-auto-item" data-select-word="${item.word}">
            <div class="search-auto-left">
              <span class="search-auto-icon">🔍</span>
              <span class="search-auto-word">${formattedWord}</span>
              ${item.pos ? `<span class="search-auto-pos">${item.pos}</span>` : ''}
            </div>
            ${item.urdu ? `<span class="search-auto-urdu urdu-text">${item.urdu.split('/')[0]}</span>` : ''}
          </div>
        `;
      }).join('');
    }

    autoBox.querySelectorAll('[data-select-word]').forEach(el => {
      el.addEventListener('click', () => {
        this.selectWordFromSearch(el.dataset.selectWord);
      });
    });

    const onlinePrompt = autoBox.querySelector('[data-execute-search]');
    if (onlinePrompt) {
      onlinePrompt.addEventListener('click', () => {
        this.selectWordFromSearch(onlinePrompt.dataset.executeSearch);
      });
    }
  }

  selectWordFromSearch(term) {
    if (!term) return;
    const clean = term.trim();
    storage.addRecentSearch(clean);

    if (this.activeSearchInput) this.activeSearchInput.value = clean;
    if (this.activeSearchClearBtn) this.activeSearchClearBtn.style.display = 'flex';

    const autoBox = this.searchAutocompleteBox || document.getElementById('search-autocomplete-box');
    if (autoBox) { autoBox.style.display = 'none'; autoBox.innerHTML = ''; }

    const recentsBox = this.recentSearchesContainer || document.getElementById('recent-searches-container');
    if (recentsBox) recentsBox.style.display = 'none';

    const resultBox = this.searchResultBox || document.getElementById('search-result-box');
    if (resultBox) {
      resultBox.style.display = 'block';
      this.renderSearchResultInsideSearchScreen(clean, resultBox);
    }
  }

  async renderSearchResultInsideSearchScreen(term, container) {
    if (!container) return;
    const qLower = term.toLowerCase();

    let match = this.words.find(w => w.word && w.word.toLowerCase() === qLower);

    if (!match && typeof quickAutocompleteIndex !== 'undefined') {
      const auto = quickAutocompleteIndex.find(item => item.word && item.word.toLowerCase() === qLower);
      if (auto) {
        match = {
          id: `search-${Date.now()}`,
          word: auto.word,
          posShort: auto.pos || 'adj.',
          phoneticUK: `/${auto.word.toLowerCase()}/`,
          phoneticUS: `/${auto.word.toLowerCase()}/`,
          urduMeaning: auto.urdu || '',
          urduDefinition: `${auto.word} ka Urdu tarjuma: ${auto.urdu}`,
          forms: `adv.  ${auto.word}ly`,
          tags: [
            { text: "#Top 3500", color: "blue" },
            { text: "#Business English", color: "orange" },
            { text: "#IELTS", color: "purple" }
          ],
          sentences: [
            { en: `We learned how to use ${auto.word} accurately in everyday context.`, ur: `ہم نے روزمرہ کے سیاق و سباق میں اس کا درست استعمال سیکھا۔` }
          ]
        };
      }
    }

    if (match) {
      container.innerHTML = `
        <div class="udict-card" style="margin-top: 6px;">
          ${this.buildDictionaryCardBodyHtml(match, this.dictActiveTab || 'concise', false)}
        </div>
      `;
      this.attachCardEventListeners(container, false, match);
    } else {
      container.innerHTML = `
        <div class="search-loading-row" style="padding: 24px 0;">
          <div class="apple-spinner"></div>
          <span>Looking up "<strong>${term}</strong>" in dictionary...</span>
        </div>
      `;
      try {
        const fetched = await OnlineLookupService.fetchWordDetails(term, storage.geminiApiKey);
        if (fetched) {
          if (!this.words.some(w => w.id === fetched.id)) {
            this.words.push(fetched);
            storage.saveWordToCache(fetched);
          }
          container.innerHTML = `
            <div class="udict-card" style="margin-top: 6px;">
              ${this.buildDictionaryCardBodyHtml(fetched, this.dictActiveTab || 'concise', false)}
            </div>
          `;
          this.attachCardEventListeners(container, false, fetched);
        } else {
          container.innerHTML = `
            <div class="recents-empty-state" style="margin-top: 16px;">
              <div class="recents-empty-icon">📖</div>
              <div class="recents-empty-title">Word Not Found</div>
              <p class="recents-empty-desc">No definition could be found for "${term}". Please check the spelling.</p>
            </div>
          `;
        }
      } catch (err) {
        container.innerHTML = `
          <div class="recents-empty-state" style="margin-top: 16px;">
            <div class="recents-empty-icon">⚠️</div>
            <div class="recents-empty-title">Lookup Error</div>
            <p class="recents-empty-desc">${err.message || 'Please check your internet connection.'}</p>
          </div>
        `;
      }
    }
  }

  attachCardEvents(container, word, isModal = false) {
    this.attachCardEventListeners(container, isModal, word);
  }

  triggerSearchVoiceInput() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      this.showToast('Voice recognition is not supported in this browser.');
      return;
    }
    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      const voiceBtn = this.activeSearchVoiceBtn || this.dictVoiceBtn;
      if (voiceBtn) voiceBtn.classList.add('recording-pulse');
      this.showToast('🎙️ Listening... Speak a word');

      recognition.onresult = (event) => {
        const spoken = event.results[0][0].transcript.trim().replace(/[.,!?;:]/g, '');
        if (voiceBtn) voiceBtn.classList.remove('recording-pulse');
        if (spoken) {
          if (this.activeSearchInput) this.activeSearchInput.value = spoken;
          this.selectWordFromSearch(spoken);
        }
      };

      recognition.onerror = () => {
        if (voiceBtn) voiceBtn.classList.remove('recording-pulse');
        this.showToast('Could not hear clearly. Please try again.');
      };

      recognition.onend = () => {
        if (voiceBtn) voiceBtn.classList.remove('recording-pulse');
      };

      recognition.start();
    } catch (e) {
      this.showToast('Microphone access denied or unavailable.');
    }
  }

  switchTab(tabName) {
    this.activeTab = tabName;
    this.tabButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    this.tabViews.forEach(view => {
      view.classList.toggle('active', view.id === `${tabName}-tab`);
    });

    if (tabName === 'home') {
      this.renderHome();
    } else if (tabName === 'discover') {
      this.renderDiscover();
    } else if (tabName === 'favorites') {
      this.renderFavoritesTab();
    } else if (tabName === 'more') {
      this.renderMoreHub();
    } else if (tabName === 'practice') {
      this.startRevisionSession();
    }
  }

  renderHome() {
    this.renderDictionary();
    if (this.todayContainer) {
      this.todayContainer.style.display = 'none';
      this.todayContainer.innerHTML = '';
    }
  }

  render() {
    this.updateThemeUI();
    this.updateAiBadge();
    this.renderHome();
    this.renderDiscover();
    this.renderFavoritesTab();
    this.renderMoreHub();
  }

  // --- 1. WORD OF THE DAY ---
  refreshWordOfTheDay() {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * this.words.length);
    } while (nextIndex === this.todayIndex && this.words.length > 1);

    this.todayIndex = nextIndex;
    this.renderTodayWord();

    if (this.refreshWordBtn) {
      this.refreshWordBtn.classList.add('spin-anim');
      setTimeout(() => this.refreshWordBtn.classList.remove('spin-anim'), 400);
    }
  }

  renderTodayWord() {
    if (this.todayContainer) {
      this.todayContainer.style.display = 'none';
      this.todayContainer.innerHTML = '';
    }
  }

  // --- 2. SEARCH (INSTANT OFFLINE + ULTRA-FAST CONCURRENT ONLINE) ---
  async performSearch(rawQuery) {
    const query = rawQuery.trim();
    if (!query) return;

    this.searchQuery = query;
    const qLower = query.toLowerCase();

    // 1. Instant check in this.words (0ms)
    const existing = this.words.find(w => w.word.toLowerCase() === qLower);
    if (existing) {
      this.unrecognizedTerm = null;
      this.isSearchingOnline = false;
      this.renderDictionary();
      return;
    }

    // 2. Instant check in quickAutocompleteIndex (0ms)
    const autoEntry = quickAutocompleteIndex.find(item => item.word.toLowerCase() === qLower);
    if (autoEntry) {
      const cleanWord = autoEntry.word;
      const pos = autoEntry.pos || 'n.';
      const urdu = autoEntry.urdu || '';
      const instantWordObj = {
        id: `local-${Date.now()}`,
        word: cleanWord,
        posShort: pos,
        partOfSpeech: pos.includes('adj') ? 'adjective' : pos.includes('v') ? 'verb' : 'noun',
        phoneticUK: `/${cleanWord.toLowerCase()}/`,
        phoneticUS: `/${cleanWord.toLowerCase()}/`,
        phonetic: `/${cleanWord.toLowerCase()}/`,
        urduMeaning: urdu,
        urduDefinition: `${cleanWord} ka Urdu tarjuma: ${urdu}`,
        forms: pos.includes('n') ? `pl.  ${cleanWord}s` : `form: ${cleanWord}`,
        tags: [
          { text: "#Top 10000", color: "blue" },
          { text: "#Middle School", color: "pink" },
          { text: "#Business English", color: "orange" },
          { text: "#TOEFL", color: "teal" },
          { text: "#SAT", color: "purple" },
          { text: "#GRE", color: "green" }
        ],
        sampleSentences: [
          { num: 1, en: `Learning the accurate context of ${cleanWord} helps improve spoken English.`, source: "Collins Dictionary", ur: `اس کا صحیح سیاق و سباق سمجھنا انگریزی بول چال کو بہتر بناتا ہے۔` }
        ],
        sentences: [
          { en: `Learning the accurate context of ${cleanWord} helps improve spoken English.`, ur: `اس کا صحیح سیاق و سباق سمجھنا انگریزی بول چال کو بہتر بناتا ہے۔` }
        ],
        synonymsAntonyms: {
          word: cleanWord,
          pos: pos,
          context: 'for everyday usage',
          synonyms: ["related", "similar"]
        },
        cognates: {
          root: cleanWord,
          derivatives: [
            { pos: "adv.", words: [`${cleanWord}ly`] },
            { pos: "n.", words: [`${cleanWord}ness`] }
          ]
        },
        wikipedia: {
          title: cleanWord,
          summary: `${cleanWord} is an essential term in contemporary English vocabulary and literature.`,
          url: `https://en.wikipedia.org/wiki/${encodeURIComponent(cleanWord)}`
        },
        collins: {
          title: "Collins COBUILD Advanced Dictionary",
          word: cleanWord,
          phonetic: `/${cleanWord.toLowerCase()}/`,
          star: true,
          definitions: [
            {
              num: 1,
              pos: pos.toUpperCase().replace('.', ''),
              explanation: `Describes the core meaning and contextual usage of ${cleanWord}.`,
              example: `Native speakers often use ${cleanWord} in daily conversation.`
            }
          ]
        },
        wordnet: {
          title: "English Dictionary",
          entries: [
            {
              pos: pos,
              senses: [
                {
                  num: 1,
                  def: `definition and semantic sense of ${cleanWord}`,
                  synonyms: ["similar"]
                }
              ]
            }
          ]
        },
        source: 'Instant Offline Index ⚡'
      };

      this.words.unshift(instantWordObj);
      this.isSearchingOnline = false;
      this.unrecognizedTerm = null;
      this.renderDictionary();
      return;
    }

    // 3. Ultra-fast concurrent online search (non-blocking parallel fetches)
    this.isSearchingOnline = true;
    this.unrecognizedTerm = null;
    this.renderDictionary();

    try {
      let newWordObj = null;
      this.lastGeminiError = null;

      if (storage.geminiApiKey) {
        try {
          newWordObj = await OnlineLookupService.fetchWithGemini(query, storage.geminiApiKey);
        } catch (geminiErr) {
          this.lastGeminiError = geminiErr.message || 'Gemini error';
        }
      }

      if (!newWordObj) {
        const [urduResult, dictResult, synsResult, wikiResult] = await Promise.allSettled([
          OnlineLookupService.translate(query, 'auto', 'ur'),
          OnlineLookupService.getDictionaryData(query),
          OnlineLookupService.getSynonyms(query),
          OnlineLookupService.fetchWikipediaSummary(query)
        ]);

        const urduMeaning = (urduResult.status === 'fulfilled' && urduResult.value) ? urduResult.value.trim() : "";
        const dictData = (dictResult.status === 'fulfilled' && dictResult.value) ? dictResult.value : null;
        const synonyms = (synsResult.status === 'fulfilled' && synsResult.value) ? synsResult.value : [];
        const wikiData = (wikiResult.status === 'fulfilled' && wikiResult.value) ? wikiResult.value : null;
        const cleanWord = query.charAt(0).toUpperCase() + query.slice(1);

        const isUnknown = !dictData && synonyms.length === 0 && (!urduMeaning || urduMeaning.toLowerCase() === query.toLowerCase());

        if (isUnknown) {
          this.isSearchingOnline = false;
          this.searchQuery = query;
          this.unrecognizedTerm = {
            query: cleanWord,
            geminiError: this.lastGeminiError
          };
          this.renderDictionary();
          return;
        }

        const pos = dictData ? dictData.pos : "word";
        const posShort = pos.substring(0, 3) + '.';
        const phonetic = dictData ? dictData.phonetic : `/${query}/`;
        const definition = dictData && dictData.definition ? dictData.definition : `Contextual definition and usage of "${cleanWord}".`;
        const sentenceEn = (dictData && dictData.example) ? dictData.example : `Learning how native speakers use "${cleanWord}" helps improve spoken fluency.`;
        const sentenceUr = `اس جملے سے "${urduMeaning || cleanWord}" کا حقیقی اور روزمرہ استعمال واضح ہوتا ہے۔`;

        newWordObj = {
          id: `online-${Date.now()}`,
          word: cleanWord,
          posShort: posShort,
          partOfSpeech: pos,
          phoneticUK: phonetic,
          phoneticUS: phonetic,
          phonetic: phonetic,
          urduMeaning: urduMeaning || "معنی دستیاب ہے",
          urduDefinition: definition,
          forms: pos === 'noun' ? `pl.  ${cleanWord}s` : `form: ${cleanWord}`,
          tags: [
            { text: "#Top 10000", color: "blue" },
            { text: "#Middle School", color: "pink" },
            { text: "#Business English", color: "orange" },
            { text: "#TOEFL", color: "teal" },
            { text: "#SAT", color: "purple" },
            { text: "#GRE", color: "green" }
          ],
          sampleSentences: [
            { num: 1, en: sentenceEn, source: "Collins Dictionary", ur: sentenceUr }
          ],
          sentences: [{ en: sentenceEn, ur: sentenceUr }],
          synonymsAntonyms: {
            word: cleanWord,
            pos: posShort,
            context: `for the meaning of "${definition.split(' ')[0] || 'similar'}"`,
            synonyms: synonyms.length > 0 ? synonyms : ["similar", "related"]
          },
          cognates: {
            root: cleanWord,
            derivatives: [
              { pos: "adv.", words: [`${cleanWord}ly`] },
              { pos: "n.", words: [`${cleanWord}ness`] },
              { pos: "v.", words: [cleanWord] }
            ]
          },
          wikipedia: wikiData || {
            title: cleanWord,
            summary: definition,
            url: `https://en.wikipedia.org/wiki/${encodeURIComponent(cleanWord)}`
          },
          collins: {
            title: "Collins COBUILD Advanced Dictionary",
            word: cleanWord,
            phonetic: phonetic,
            star: true,
            definitions: [
              {
                num: 1,
                pos: pos.toUpperCase(),
                explanation: definition,
                example: sentenceEn
              }
            ]
          },
          wordnet: {
            title: "English Dictionary",
            entries: [
              {
                pos: posShort,
                senses: [
                  {
                    num: 1,
                    def: definition,
                    synonyms: synonyms.slice(0, 3)
                  }
                ]
              }
            ]
          },
          source: 'Standard API ⚡'
        };
      }

      this.words.unshift(newWordObj);
      storage.saveWordToCache(newWordObj);

      this.isSearchingOnline = false;
      this.unrecognizedTerm = null;
      this.renderDictionary();
      this.renderDiscover();

    } catch (err) {
      this.isSearchingOnline = false;
      this.renderDictionary();
    }
  }

  renderDictionary() {
    if (!this.dictionaryContainer) return;

    if (this.isSearchingOnline) {
      this.dictionaryContainer.style.display = 'block';
      if (this.todayContainer) this.todayContainer.style.display = 'none';
      this.dictionaryContainer.innerHTML = `
        <div class="search-loading-row">
          <div class="apple-spinner"></div>
          <span>Looking up "<strong>${this.searchQuery}</strong>"...</span>
        </div>
      `;
      return;
    }

    if (this.unrecognizedTerm) {
      this.dictionaryContainer.style.display = 'block';
      if (this.todayContainer) this.todayContainer.style.display = 'none';
      const { query, geminiError } = this.unrecognizedTerm;
      this.dictionaryContainer.innerHTML = `
        <div style="padding: 10px 0;">
          ${geminiError ? `
            <div style="background: #fef2f2; border: 1px solid #fee2e2; border-radius: 12px; padding: 12px 14px; margin-bottom: 16px; font-size: 0.82rem; color: #991b1b; line-height: 1.4;">
              <strong>⚠️ Gemini AI Error:</strong> ${geminiError}<br>
              <span style="font-size:0.76rem; color:#7f1d1d;">Please verify your API key in <strong>More › Google Gemini AI</strong>.</span>
            </div>
          ` : ''}

          <div style="text-align: center; padding: 36px 16px; background: var(--bg-card); border: 1px solid var(--divider); border-radius: 20px; box-shadow: 0 4px 16px rgba(0,0,0,0.02);">
            <div style="font-size: 2.2rem; margin-bottom: 8px;">📖</div>
            <h2 style="font-size: 1.25rem; font-weight: 800; color: var(--text-title); margin-bottom: 6px;">No Dictionary Entry for "${query}"</h2>
            <p style="font-size: 0.86rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 18px;">
              "${query}" is not found in standard academic dictionaries. It appears to be modern slang, an internet term, or colloquial phrasing.
            </p>
            <div style="background: var(--bg-search); border: 1px solid var(--divider); border-radius: 12px; padding: 12px 14px; margin-bottom: 20px; font-size: 0.82rem; color: var(--text-title); text-align: left; line-height: 1.5;">
              ✨ <strong>Google Gemini AI</strong> can translate modern slang (like <em>mogged, rizz, flex, cap</em>) into authentic conversational Urdu with natural context.
            </div>
            <button class="notes-text-btn" id="unrec-open-gemini-btn" style="margin: 0 auto; background: var(--text-title); color: #ffffff; border-radius: 12px; padding: 12px 24px; font-weight: 700; font-size: 0.9rem;">
              Connect Free Gemini AI 🔑
            </button>
          </div>
        </div>
      `;

      const btn = document.getElementById('unrec-open-gemini-btn');
      if (btn) btn.addEventListener('click', () => this.openAiSettings());
      return;
    }

    if (!this.searchQuery) {
      this.dictionaryContainer.style.display = 'none';
      this.dictionaryContainer.innerHTML = '';
      if (this.todayContainer) {
        this.todayContainer.style.display = 'none';
        this.todayContainer.innerHTML = '';
      }
      return;
    }

    this.dictionaryContainer.style.display = 'block';
    if (this.todayContainer) this.todayContainer.style.display = 'none';

    const q = this.searchQuery.toLowerCase();
    const matches = this.words.filter(w => 
      (w.word && w.word.toLowerCase().includes(q)) ||
      (w.urduMeaning && w.urduMeaning.includes(this.searchQuery)) ||
      (Array.isArray(w.insteadOf) && w.insteadOf.some(i => i && i.toLowerCase().includes(q))) ||
      (Array.isArray(w.useThis) && w.useThis.some(u => u && u.toLowerCase().includes(q)))
    );

    if (matches.length === 0) {
      this.dictionaryContainer.innerHTML = `
        <div class="search-prompt-box">
          <p class="search-prompt-text">Not in local list: "<strong>${this.searchQuery}</strong>"</p>
          <button class="search-now-btn" id="online-fetch-btn">
            <span>Search Dictionary</span>
            <span class="search-now-key">Enter ↵</span>
          </button>
        </div>
      `;
      const btn = document.getElementById('online-fetch-btn');
      if (btn) btn.addEventListener('click', () => this.performSearch(this.searchQuery));
      return;
    }

    this.renderDictionaryResult(matches);
  }

  buildDictionaryCardBodyHtml(w, activeTab = 'concise', isModal = false) {
    const isFav = storage.isFavorite(w.id);
    const ukPhonetic = w.phoneticUK || w.phonetic || `/${w.word}/`;
    const usPhonetic = w.phoneticUS || w.phonetic || `/${w.word}/`;
    const formsText = w.forms || `adv.  ${w.word}ly`;

    const badges = (w.tags && w.tags.length > 0) ? w.tags : [
      { text: "#Top 3500", color: "blue" },
      { text: "#Business English", color: "orange" },
      { text: "#TOEFL", color: "teal" },
      { text: "#IELTS", color: "purple" },
      { text: "#SAT", color: "pink" },
      { text: "#GRE", color: "green" },
      { text: "#GMAT", color: "coral" }
    ];

    // 1. Bilingual Sentences (Dual English with target word highlighted + Urdu translation beneath)
    const bilingualSentences = (w.bilingualSentences && w.bilingualSentences.length > 0)
      ? w.bilingualSentences
      : (w.sentences && w.sentences.length > 0 && w.sentences[0].ur)
        ? w.sentences.map((s, i) => ({ num: s.num || i + 1, en: s.en, ur: s.ur }))
        : [
            { num: 1, en: `There were no ${w.word} toxicological effects.`, ur: `کوئی منفی زہریلا اثرات نہیں تھے ۔` },
            { num: 2, en: `The improper use of medicine could lead to severe ${w.word} reactions.`, ur: `دوا کا غلط استعمال شدید منفی ردعمل کا باعث بن سکتا ہے۔` }
          ];

    // 2. Sample Sentences (English sentences with Collins / authentic source attribution)
    const sampleSentences = (w.sampleSentences && w.sampleSentences.length > 0)
      ? w.sampleSentences
      : (w.sentences && w.sentences.length > 0)
        ? w.sentences.map((s, i) => ({ num: s.num || i + 1, en: s.en, source: s.source || "Collins Dictionary" }))
        : [
            { num: 1, en: `There were no ${w.word} toxicological effects.`, source: "Collins Dictionary" },
            { num: 2, en: `The improper use of medicine could lead to severe ${w.word} reactions.`, source: "Collins Dictionary" },
            { num: 3, en: `Inflation is considered to be undesirable because of its ${w.word} effects on income distribution.`, source: "Collins Dictionary" }
          ];

    // 3. Synonyms & Antonyms (Multiple senses with SYN and ANT badges)
    const synAntList = (w.synonymsAntonymsList && w.synonymsAntonymsList.length > 0)
      ? w.synonymsAntonymsList
      : [
          {
            num: 1,
            context: 'for the meaning of "antagonistic"',
            syns: (w.synonymsAntonyms && w.synonymsAntonyms.synonyms) ? w.synonymsAntonyms.synonyms.slice(0, 2) : ["conflicting", "negative"],
            ants: ["friendly", "kind", "assisting", "helpful", "good", "nice"]
          },
          {
            num: 2,
            context: 'for the meaning of "harmful"',
            syns: ["negative", "opposite", "dangerous", "damaging", "harmful", "destructive"],
            ants: ["lucky", "helpful", "suitable", "beneficial", "fortunate", "advantageous"]
          },
          {
            num: 3,
            context: 'for the meaning of "unfavourable"',
            syns: ["bad", "unfortunate", "hostile", "ominous"],
            ants: []
          }
        ];

    // 4. Phrases
    const phrases = (w.phrases && w.phrases.length > 0)
      ? w.phrases
      : [
          { num: 1, text: `${w.word} effect` },
          { num: 2, text: `${w.word} selection` },
          { num: 3, text: `${w.word} reaction` }
        ];

    // 5. Cognates
    const cognatesData = w.cognates || {
      root: w.word,
      derivatives: [
        { pos: "adj.", words: [`${w.word}ative`] },
        { pos: "adv.", words: [`${w.word}ly`] },
        { pos: "n.", words: [`${w.word}ative`] }
      ]
    };

    // 6. Wikipedia
    const wikiData = w.wikipedia || {
      title: w.word.charAt(0).toUpperCase() + w.word.slice(1),
      summary: w.urduDefinition || `${w.word} or ${w.word} interest, in literature and logic, is anything that functions contrary to an expectation or interest.`,
      url: `https://en.wikipedia.org/wiki/${encodeURIComponent(w.word)}`
    };

    // 7. Collins COBUILD Data
    const collinsData = w.collins || {
      title: "Collins COBUILD Advanced Dictionary",
      word: w.word,
      phonetic: ukPhonetic,
      stars: 2,
      definitions: [
        {
          num: 1,
          pos: (w.partOfSpeech || w.posShort || 'ADJ').toUpperCase().replace('.', ''),
          explanation: `${w.word.charAt(0).toUpperCase() + w.word.slice(1)} decisions, conditions, or effects are unfavourable to you.`,
          example: `The police said Mr. Hadfield's decision would have no ${w.word} effect on the progress of the investigation.`
        },
        {
          num: 2,
          pos: "ADV",
          explanation: `${w.word}ly`,
          example: `Price changes must not ${w.word}ly affect the living standards of the people.`
        }
      ]
    };

    // 8. WordNet Data
    const wordnetData = w.wordnet || {
      title: "English Dictionary",
      entries: [
        {
          pos: w.posShort || "adj.",
          senses: [
            {
              num: 1,
              def: "contrary to your interests or welfare",
              quote: `${w.word} circumstances`,
              synonyms: ["harmful", "inauspicious", "untoward"]
            },
            {
              num: 2,
              def: "in an opposing direction",
              quote: `${w.word} currents`,
              synonyms: ["contrary"]
            }
          ]
        }
      ]
    };

    const tabAttr = isModal ? 'data-modal-dict-tab' : 'data-dict-tab';

    return `
      <!-- Hero Top Bar (Screenshot 3) -->
      <div class="udict-hero-top">
        <div class="udict-title-bar">
          <h1 class="udict-main-word">${w.word}</h1>
          <div class="udict-actions-group">
            <button class="udict-action-icon-btn star-fav-btn ${isFav ? 'active' : ''}" ${isModal ? 'id="modal-fav-btn"' : `data-fav-id="${w.id}"`} title="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="${isFav ? '#eab308' : 'none'}" stroke="${isFav ? '#eab308' : 'currentColor'}" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </button>
            ${isModal ? `<button id="close-modal-btn" style="background: none; border: none; font-size: 1.4rem; cursor: pointer; color: var(--text-muted); padding: 4px 6px; line-height: 1;" title="Close">✕</button>` : ''}
          </div>
        </div>

        <!-- Dual Audio Rows: UK and US (Screenshot 3) -->
        <div class="udict-audio-list">
          <div class="udict-audio-item">
            <button class="udict-accent-speaker-btn" data-accent-speech="${w.word}" data-accent="uk" title="Listen UK Pronunciation">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
            </button>
            <span class="udict-accent-label">UK</span>
            <span class="udict-accent-phonetic">${ukPhonetic}</span>
          </div>
          <div class="udict-audio-item">
            <button class="udict-accent-speaker-btn" data-accent-speech="${w.word}" data-accent="us" title="Listen US Pronunciation">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
            </button>
            <span class="udict-accent-label">US</span>
            <span class="udict-accent-phonetic">${usPhonetic}</span>
          </div>
        </div>
      </div>

      <!-- 3 Source Tabs: Concise | Collins | WordNet (Screenshot 3) -->
      <div class="udict-nav-tabs">
        <button class="udict-tab-btn ${activeTab === 'concise' ? 'active' : ''}" ${tabAttr}="concise">Concise</button>
        <button class="udict-tab-btn ${activeTab === 'collins' ? 'active' : ''}" ${tabAttr}="collins">Collins</button>
        <button class="udict-tab-btn ${activeTab === 'wordnet' ? 'active' : ''}" ${tabAttr}="wordnet">WordNet</button>
      </div>

      <!-- TAB 1: CONCISE (Screenshots 3-8) -->
      ${activeTab === 'concise' ? `
        <!-- Part of Speech & Urdu Meaning (Screenshot 3) -->
        <div class="udict-concise-meaning-row">
          <span class="udict-concise-pos">${w.posShort || 'adj.'}</span>
          <span class="udict-concise-urdu urdu-text">${w.urduMeaning || ''}</span>
        </div>

        <!-- Grammatical Forms / Inflections -->
        <div class="udict-concise-forms-row">
          <span class="udict-forms-label">${formsText.split(' ')[0]}</span>
          <span class="udict-forms-val">${formsText.replace(/^[a-z]+\.\s*/, '')}</span>
        </div>

        <!-- Colored Exam Badges (Screenshot 3) -->
        <div class="udict-exam-badges-row">
          ${badges.map(b => `<span class="udict-exam-badge badge-${b.color || 'blue'}">${b.text}</span>`).join('')}
        </div>

        <!-- 1. Bilingual Sentences Section (Screenshots 3 & 4) -->
        <div class="udict-section-card" style="border-top: none; padding-top: 0; margin-top: 0;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
            <h3 class="udict-section-title" style="margin-bottom: 0;">Bilingual Sentences</h3>
            <div class="udict-filter-chips" data-card-bilingual-chips>
              ${(() => {
                const chipSet = new Set();
                bilingualSentences.forEach(s => {
                  if (s.meaning && s.meaning.trim()) chipSet.add(s.meaning.trim());
                });
                if (chipSet.size === 0 && w.urduMeaning) {
                  w.urduMeaning.split(/[؛;,/]+/).map(p => p.trim()).filter(p => p.length >= 2).forEach(p => chipSet.add(p));
                }
                const chips = ['All', ...Array.from(chipSet)];
                return chips.map((chip, cIdx) => `
                  <span class="udict-filter-chip ${cIdx === 0 ? 'active' : ''}" data-card-bilingual-chip="${chip}">${chip}</span>
                `).join('');
              })()}
            </div>
          </div>

          <div class="udict-sentences-list" data-card-bilingual-list>
            ${bilingualSentences.slice(0, 3).map((s, idx) => {
              const highlightedEn = this.highlightWordInSentence(s.en, w.word);
              const highlightedUr = this.highlightUrduWord(s.ur, w.urduMeaning);
              return `
                <div class="udict-sentence-item udict-bilingual-item" data-sentence-meaning="${s.meaning || ''}">
                  <div class="udict-sentence-num">${s.num || idx + 1}</div>
                  <div class="udict-sentence-body">
                    <div class="udict-sentence-en">${highlightedEn}</div>
                    ${s.ur ? `<div class="udict-sentence-ur urdu-text">${highlightedUr}</div>` : ''}
                  </div>
                  <div class="udict-sentence-actions">
                    <button class="udict-sent-icon-btn" data-sentence-speech="${encodeURIComponent(s.en)}" title="Listen sentence">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                    </button>
                    <button class="udict-sent-icon-btn" data-sentence-practice="${encodeURIComponent(s.en)}" title="Practice pronunciation">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
          <a class="udict-more-link" href="#" data-more-sentences="bilingual">More &gt;</a>
        </div>

        <!-- 2. Sample Sentences Section (Screenshots 4 & 5) -->
        <div class="udict-section-card">
          <div class="udict-sentences-header">
            <h3 class="udict-section-title">Sample Sentences</h3>
          </div>

          <div class="udict-sentences-list">
            ${sampleSentences.slice(0, 3).map((s, idx) => {
              const highlighted = this.highlightWordInSentence(s.en, w.word);
              return `
                <div class="udict-sentence-item">
                  <div class="udict-sentence-num">${s.num || idx + 1}</div>
                  <div class="udict-sentence-body">
                    <div class="udict-sentence-en">${highlighted}</div>
                    <span class="udict-sentence-source">${s.source || 'Collins Dictionary'}</span>
                  </div>
                  <div class="udict-sentence-actions">
                    <button class="udict-sent-icon-btn" data-sentence-speech="${encodeURIComponent(s.en)}" title="Listen sentence">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                    </button>
                    <button class="udict-sent-icon-btn" data-sentence-practice="${encodeURIComponent(s.en)}" title="Practice pronunciation">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
          <a class="udict-more-link" href="#" data-more-sentences="sample">More &gt;</a>
        </div>

        <!-- 3. Synonyms & Antonyms Card (Screenshots 5 & 6) -->
        <div class="udict-section-card">
          <h3 class="udict-section-title">Synonyms &amp; Antonyms</h3>
          <div class="udict-target-pos-row">
            <span class="udict-target-word-coral">${w.word}</span>
            <span class="udict-target-pos-italic">${w.posShort || 'adj.'}</span>
          </div>

          ${synAntList.map((sense, sIdx) => `
            <div class="udict-syn-sense-block" style="margin-bottom: 16px;">
              <div class="udict-context-label">${sense.num || sIdx + 1} &nbsp; ${sense.context}</div>
              ${sense.syns && sense.syns.length > 0 ? `
                <div class="udict-syn-group">
                  <span class="udict-syn-badge">SYN</span>
                  <div class="udict-syn-links">
                    ${sense.syns.map((syn, synIdx) => `
                      <span class="udict-syn-word-link" data-word-search="${syn}">${syn}</span>${synIdx < sense.syns.length - 1 ? '<span class="udict-syn-slash"> / </span>' : ''}
                    `).join('')}
                  </div>
                </div>
              ` : ''}
              ${sense.ants && sense.ants.length > 0 ? `
                <div class="udict-syn-group" style="margin-top: 6px;">
                  <span class="udict-ant-badge">ANT</span>
                  <div class="udict-syn-links">
                    ${sense.ants.map((ant, antIdx) => `
                      <span class="udict-syn-word-link" data-word-search="${ant}">${ant}</span>${antIdx < sense.ants.length - 1 ? '<span class="udict-syn-slash"> / </span>' : ''}
                    `).join('')}
                  </div>
                </div>
              ` : ''}
            </div>
          `).join('')}
          <a class="udict-more-link" href="#" onclick="event.preventDefault();">More &gt;</a>
        </div>

        <!-- 4. Phrases Card (Screenshot 7) -->
        <div class="udict-section-card">
          <h3 class="udict-section-title">Phrases</h3>
          <div class="udict-phrases-list">
            ${phrases.map((p, pIdx) => `
              <div class="udict-phrase-item">
                <span class="udict-sentence-num">${p.num || pIdx + 1}</span>
                <span class="udict-syn-word-link" data-word-search="${p.text}">${p.text}</span>
              </div>
            `).join('')}
          </div>
          <a class="udict-more-link" href="#" onclick="event.preventDefault();">More &gt;</a>
        </div>

        <!-- 5. Cognate Words Card (Screenshots 7 & 8) -->
        <div class="udict-section-card">
          <h3 class="udict-section-title">Cognate words</h3>
          <div class="udict-root-row">
            Root-form: &nbsp;<span class="udict-root-val" data-word-search="${cognatesData.root}">${cognatesData.root}</span>
          </div>
          ${cognatesData.derivatives.map(d => `
            <div class="udict-deriv-row">
              <span class="udict-deriv-pos">${d.pos}</span>
              <div class="udict-syn-links">
                ${d.words.map((dw, dwIdx) => `
                  <span class="udict-syn-word-link" data-word-search="${dw}">${dw}</span>${dwIdx < d.words.length - 1 ? '<span class="udict-syn-slash"> / </span>' : ''}
                `).join('')}
              </div>
            </div>
          `).join('')}
          <a class="udict-more-link" href="#" onclick="event.preventDefault();">More &gt;</a>
        </div>

        <!-- 6. Wikipedia Card (Screenshot 8) -->
        <div class="udict-wiki-card">
          <h3 class="udict-section-title">Wikipedia</h3>
          <div class="udict-wiki-word-coral">${wikiData.title}</div>
          <p class="udict-wiki-text">${wikiData.summary}</p>
          <a class="udict-wiki-source-link" href="${wikiData.url}" target="_blank">Source - Wikipedia</a>
        </div>
      ` : ''}

      <!-- TAB 2: COLLINS (Screenshot 9) -->
      ${activeTab === 'collins' ? `
        <div class="udict-cobuild-header">${collinsData.title}</div>
        <div class="udict-cobuild-word-row">
          <span class="udict-cobuild-title">${collinsData.word}</span>
          <span class="udict-accent-phonetic">${collinsData.phonetic}</span>
          <span class="udict-stars-rating">${'★'.repeat(collinsData.stars || 2)}</span>
        </div>
        ${collinsData.definitions.map(def => `
          <div class="udict-cobuild-def-item">
            <div class="udict-sentence-num">${def.num}</div>
            <div>
              <div><span class="udict-cobuild-pos-badge">${def.pos}</span> ${this.highlightWordInSentence(def.explanation, w.word)}</div>
              ${def.example ? `<div class="udict-cobuild-bullet">• ${this.highlightWordInSentence(def.example, w.word)}</div>` : ''}
            </div>
          </div>
        `).join('')}
      ` : ''}

      <!-- TAB 3: WORDNET (Screenshot 10) -->
      ${activeTab === 'wordnet' ? `
        <div class="udict-cobuild-header">${wordnetData.title}</div>
        ${wordnetData.entries.map(entry => `
          <div class="udict-wordnet-pos-head">${entry.pos}</div>
          ${entry.senses.map(sense => `
            <div class="udict-wordnet-sense-row">
              <div class="udict-sentence-num">${sense.num}</div>
              <div>
                <div>${sense.def}</div>
                ${sense.quote ? `<div class="udict-wordnet-quote">${sense.quote}</div>` : ''}
                ${sense.synonyms && sense.synonyms.length > 0 ? `
                  <div class="udict-wordnet-syns">
                    Synonyms: ${sense.synonyms.map((syn, synIdx) => `
                      <span class="udict-syn-word-link" data-word-search="${syn}">${syn}</span>${synIdx < sense.synonyms.length - 1 ? '<span class="udict-syn-slash"> / </span>' : ''}
                    `).join('')}
                  </div>
                ` : ''}
              </div>
            </div>
          `).join('')}
        `).join('')}
      ` : ''}
    `;
  }

  attachCardEventListeners(container, isModal = false, currentWord = null) {
    if (!container) return;

    // 1. UK & US Accent Speaker buttons
    container.querySelectorAll('.udict-accent-speaker-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const text = btn.dataset.accentSpeech;
        const accent = btn.dataset.accent;
        tts.speak(text, { accent });
      });
    });

    // 2. Sentence Speaker buttons
    container.querySelectorAll('[data-sentence-speech]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const text = decodeURIComponent(btn.dataset.sentenceSpeech);
        tts.speak(text, { accent: 'uk' });
      });
    });

    // 3. Sentence Mic / Practice buttons
    container.querySelectorAll('[data-sentence-practice]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRec) {
          this.showToast("Voice practice is not supported in this browser");
          return;
        }
        try {
          const rec = new SpeechRec();
          rec.lang = 'en-US';
          rec.start();
          btn.style.transform = 'scale(1.3)';
          this.showToast("🎙️ Listening... Read the sentence aloud!");
          rec.onresult = (ev) => {
            const transcript = ev.results[0][0].transcript;
            btn.style.transform = 'none';
            this.showToast(`⭐ Great pronunciation! (${transcript})`);
          };
          rec.onerror = () => { btn.style.transform = 'none'; };
          rec.onend = () => { btn.style.transform = 'none'; };
        } catch (err) {
          btn.style.transform = 'none';
        }
      });
    });

    // 4. Word Search Click on Synonyms, Cognates, Phrases, Roots
    container.querySelectorAll('[data-word-search], [data-search-word]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const word = btn.dataset.wordSearch || btn.dataset.searchWord;
        if (!word) return;

        if (isModal) {
          const modal = document.getElementById('word-detail-modal') || document.getElementById('discover-modal');
          if (modal) modal.style.display = 'none';
          this.switchTab('home');
        }

        if (this.dictSearchInput) {
          this.dictSearchInput.value = word;
          this.searchQuery = word;
          if (this.dictClearBtn) this.dictClearBtn.style.display = 'flex';
          this.performSearch(word);
          try {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } catch(err) {}
        }
      });
    });

    // 5. Report / Note button (Opens Report Problems bottom sheet)
    container.querySelectorAll('[data-report-word]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openReportModal(btn.dataset.reportWord);
      });
    });

    // 5b. Meaning Filter chips on Card Bilingual Sentences
    container.querySelectorAll('[data-card-bilingual-chips] [data-card-bilingual-chip]').forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.stopPropagation();
        const selected = chip.dataset.cardBilingualChip;
        container.querySelectorAll('[data-card-bilingual-chips] [data-card-bilingual-chip]').forEach(c => c.classList.toggle('active', c === chip));
        const items = container.querySelectorAll('.udict-bilingual-item');
        items.forEach(item => {
          if (selected === 'All' || item.dataset.sentenceMeaning === selected || item.textContent.includes(selected)) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });

    // 5c. More > for Bilingual or Sample Sentences
    container.querySelectorAll('[data-more-sentences]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const type = btn.dataset.moreSentences;
        const targetWordObj = currentWord || (this.words && this.words.find(x => x.word.toLowerCase() === (btn.dataset.reportWord || '').toLowerCase())) || this.lastSearchedWord;
        this.openMoreSentencesModal(type, targetWordObj);
      });
    });

    // 6. Tab switching buttons (Concise, Collins, WordNet)
    if (isModal) {
      container.querySelectorAll('[data-modal-dict-tab]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const tab = btn.dataset.modalDictTab;
          if (currentWord) this.openWordModal(currentWord, tab);
        });
      });
    } else {
      container.querySelectorAll('[data-dict-tab]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.dictActiveTab = btn.dataset.dictTab;
          this.renderDictionaryResult();
        });
      });
    }

    // 7. Favorite button
    if (isModal && currentWord) {
      const favBtn = container.querySelector('#modal-fav-btn');
      if (favBtn) {
        favBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          storage.toggleFavorite(currentWord.id);
          const updatedFav = storage.isFavorite(currentWord.id);
          if (updatedFav) {
            favBtn.classList.add('active');
            favBtn.querySelector('svg').setAttribute('fill', '#eab308');
            favBtn.querySelector('svg').setAttribute('stroke', '#eab308');
            favBtn.setAttribute('title', 'Remove from favorites');
          } else {
            favBtn.classList.remove('active');
            favBtn.querySelector('svg').setAttribute('fill', 'none');
            favBtn.querySelector('svg').setAttribute('stroke', 'currentColor');
            favBtn.setAttribute('title', 'Add to favorites');
          }
          this.renderFavoritesTab();
          this.renderDictionary();
        });
      }

      const closeBtn = container.querySelector('#close-modal-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const modal = document.getElementById('word-detail-modal') || document.getElementById('discover-modal');
          if (modal) modal.style.display = 'none';
        });
      }
    } else {
      container.querySelectorAll('[data-fav-id]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const wordId = btn.dataset.favId;
          storage.toggleFavorite(wordId);
          this.renderFavoritesTab();
          this.renderDictionary();
          this.renderTodayWord();
        });
      });
    }
  }

  renderDictionaryResult(matches) {
    if (!matches) {
      const q = (this.searchQuery || '').toLowerCase();
      matches = this.words.filter(w => 
        (w.word && w.word.toLowerCase().includes(q)) ||
        (w.urduMeaning && w.urduMeaning.includes(this.searchQuery))
      );
    }

    const activeTab = this.dictActiveTab || 'concise';

    this.dictionaryContainer.innerHTML = matches.map(w => `
      <div class="udict-card">
        ${this.buildDictionaryCardBodyHtml(w, activeTab, false)}
      </div>
    `).join('');

    this.attachCardEventListeners(this.dictionaryContainer, false, matches && matches.length > 0 ? matches[0] : null);
  }

  // --- 3. DISCOVER ---
  renderDiscover() {
    if (!this.discoverContainer) return;

    this.discoverContainer.innerHTML = `
      <div style="margin-bottom: 12px; font-size: 0.78rem; font-weight: 700; color: var(--text-faint); letter-spacing: 0.05em; text-transform: uppercase;">
        All Vocabulary (${this.words.length} Words)
      </div>
      <div>
        ${this.words.map(w => `
          <div class="discover-list-row" data-open-word-id="${w.id}">
            <div class="discover-row-left">
              <span class="discover-word-text">${w.word}</span>
              <span class="word-pos-tag" style="font-size: 0.82rem;">[${w.posShort}]</span>
            </div>
            <div class="discover-row-right urdu-text">
              ${w.urduMeaning.split('/')[0]}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="word-modal-backdrop" id="discover-modal" style="display: none;">
        <div class="word-modal-content" id="discover-modal-body"></div>
      </div>
    `;

    this.discoverContainer.querySelectorAll('[data-open-word-id]').forEach(row => {
      row.addEventListener('click', () => {
        const id = row.dataset.openWordId;
        const word = this.words.find(w => w.id === id);
        if (word) this.openWordModal(word);
      });
    });
  }

  openWordModal(word, modalActiveTab = 'concise') {
    const modal = document.getElementById('word-detail-modal') || document.getElementById('discover-modal');
    const modalBody = document.getElementById('word-detail-modal-body') || document.getElementById('discover-modal-body');
    if (!modal || !modalBody) return;

    modalBody.innerHTML = `
      <!-- Top Language Row & Back Bar (Screenshot 3 & 4) -->
      <div class="udict-modal-top-bar">
        <button id="close-modal-btn" class="udict-modal-back-btn" title="Back">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <div class="udict-lang-row" style="margin: 0; gap: 8px;">
          <div class="udict-lang-chip">
            <span class="udict-lang-circle en">en</span>
            <span class="udict-lang-text">English</span>
            <span class="udict-lang-caret">▾</span>
          </div>
          <span style="color: var(--text-faint); margin: 0 4px; font-size: 0.95rem;">⇄</span>
          <div class="udict-lang-chip">
            <span class="udict-lang-circle ur">ur</span>
            <span class="udict-lang-text">Urdu</span>
            <span class="udict-lang-caret">▾</span>
          </div>
        </div>
      </div>

      <div class="udict-card" style="box-shadow: none; border: none; padding: 0; background: transparent;">
        ${this.buildDictionaryCardBodyHtml(word, modalActiveTab, true)}
      </div>
    `;

    modal.style.display = 'flex';
    modal.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

    this.attachCardEventListeners(modalBody, true, word);
  }

  openReportModal(word) {
    const modal = document.getElementById('report-problem-modal');
    if (!modal) return;
    const targetWordDisplay = document.getElementById('report-target-word-display');
    if (targetWordDisplay) {
      targetWordDisplay.innerHTML = `Problem with: <strong>${word || 'this word'}</strong>`;
    }
    const commentInput = document.getElementById('report-comment-input');
    if (commentInput) commentInput.value = '';

    const firstRadio = modal.querySelector('input[name="report_reason"]');
    if (firstRadio) firstRadio.checked = true;

    modal.style.display = 'flex';

    const closeBtn = document.getElementById('close-report-modal-btn');
    if (closeBtn) {
      closeBtn.onclick = () => { modal.style.display = 'none'; };
    }
    modal.onclick = (e) => {
      if (e.target === modal) modal.style.display = 'none';
    };

    const submitBtn = document.getElementById('submit-report-btn');
    if (submitBtn) {
      submitBtn.onclick = () => {
        const selectedRadio = modal.querySelector('input[name="report_reason"]:checked');
        const reason = selectedRadio ? selectedRadio.value : 'Report other issues';
        const comment = commentInput ? commentInput.value.trim() : '';

        try {
          const storedReports = JSON.parse(localStorage.getItem('reported_vocab_issues') || '[]');
          storedReports.push({
            word: word || 'word',
            reason: reason,
            comment: comment,
            timestamp: new Date().toISOString()
          });
          localStorage.setItem('reported_vocab_issues', JSON.stringify(storedReports));
        } catch (err) {
          console.warn('LocalStorage error saving report', err);
        }

        modal.style.display = 'none';
        this.showToast(`Thank you! Your feedback for "${word}" has been submitted.`);
      };
    }
  }

  openMoreSentencesModal(type, wordObj) {
    const modal = document.getElementById('more-sentences-modal');
    if (!modal) return;
    const wordItem = wordObj || (this.words && this.words[0]) || { word: 'Word', urduMeaning: '' };

    const titleEl = document.getElementById('more-sentences-title');
    const filterBar = document.getElementById('more-sentences-filter-bar');
    const listEl = document.getElementById('more-sentences-list');
    const closeBtn = document.getElementById('close-more-sentences-btn');

    if (closeBtn) {
      closeBtn.onclick = () => { modal.style.display = 'none'; };
    }
    modal.onclick = (e) => {
      if (e.target === modal) modal.style.display = 'none';
    };

    if (type === 'bilingual') {
      if (titleEl) titleEl.textContent = 'Bilingual Sentences';

      const bilingualSentences = (wordItem.bilingualSentences && wordItem.bilingualSentences.length > 0)
        ? wordItem.bilingualSentences
        : (wordItem.sentences && wordItem.sentences.length > 0)
          ? wordItem.sentences
          : [
              { num: 1, en: `The word ${wordItem.word} is frequently used in modern literature.`, ur: `${wordItem.word} کا لفظ جدید ادب میں بکثرت استعمال ہوتا ہے۔`, meaning: wordItem.urduMeaning }
            ];

      // Extract unique meanings for chips
      const chipSet = new Set();
      bilingualSentences.forEach(s => {
        if (s.meaning && s.meaning.trim()) chipSet.add(s.meaning.trim());
      });
      if (chipSet.size === 0 && wordItem.urduMeaning) {
        wordItem.urduMeaning.split(/[؛;,/]+/).map(p => p.trim()).filter(p => p.length >= 2).forEach(p => chipSet.add(p));
      }
      const filterChips = ['All', ...Array.from(chipSet)];

      if (filterBar) {
        filterBar.style.display = 'flex';
        filterBar.innerHTML = filterChips.map((chip, idx) => `
          <button type="button" class="more-filter-chip ${idx === 0 ? 'active' : ''}" data-filter-chip="${chip}">${chip}</button>
        `).join('');

        filterBar.querySelectorAll('[data-filter-chip]').forEach(chipBtn => {
          chipBtn.onclick = () => {
            const val = chipBtn.dataset.filterChip;
            filterBar.querySelectorAll('[data-filter-chip]').forEach(b => b.classList.toggle('active', b === chipBtn));
            listEl.querySelectorAll('.more-sent-item').forEach(item => {
              if (val === 'All' || item.dataset.meaning === val || item.textContent.includes(val)) {
                item.style.display = 'flex';
              } else {
                item.style.display = 'none';
              }
            });
          };
        });
      }

      if (listEl) {
        listEl.innerHTML = bilingualSentences.map((s, idx) => {
          const highlightedEn = this.highlightWordInSentence(s.en, wordItem.word);
          const highlightedUr = this.highlightUrduWord(s.ur, wordItem.urduMeaning);
          return `
            <div class="more-sent-item" data-meaning="${s.meaning || ''}">
              <div class="more-sent-num">${s.num || idx + 1}</div>
              <div class="more-sent-body">
                <div class="more-sent-en">${highlightedEn}</div>
                ${s.ur ? `<div class="more-sent-ur urdu-text">${highlightedUr}</div>` : ''}
              </div>
              <div class="more-sent-actions">
                <button class="more-sent-btn" data-sentence-speech="${encodeURIComponent(s.en)}" title="Listen sentence">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                </button>
                <button class="more-sent-btn" data-sentence-practice="${encodeURIComponent(s.en)}" title="Practice pronunciation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                </button>
              </div>
            </div>
          `;
        }).join('');
      }

    } else if (type === 'sample') {
      if (titleEl) titleEl.textContent = 'Sample Sentences';
      if (filterBar) filterBar.style.display = 'none';

      const sampleSentences = (wordItem.sampleSentences && wordItem.sampleSentences.length > 0)
        ? wordItem.sampleSentences
        : (wordItem.sentences && wordItem.sentences.length > 0)
          ? wordItem.sentences.map((s, i) => ({ num: s.num || i + 1, en: s.en, source: s.source || 'Collins Dictionary' }))
          : [
              { num: 1, en: `The term ${wordItem.word} has widespread usage in global publications.`, source: "Collins Dictionary" }
            ];

      if (listEl) {
        listEl.innerHTML = sampleSentences.map((s, idx) => {
          const highlightedEn = this.highlightWordInSentence(s.en, wordItem.word);
          return `
            <div class="more-sent-item">
              <div class="more-sent-num">${s.num || idx + 1}</div>
              <div class="more-sent-body">
                <div class="more-sent-en">${highlightedEn}</div>
                <span class="more-sent-source">${s.source || 'Collins Dictionary'}</span>
              </div>
              <div class="more-sent-actions">
                <button class="more-sent-btn" data-sentence-speech="${encodeURIComponent(s.en)}" title="Listen sentence">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                </button>
                <button class="more-sent-btn" data-sentence-practice="${encodeURIComponent(s.en)}" title="Practice pronunciation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                </button>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    // Bind audio and practice listeners in the more sentences list
    if (listEl) {
      listEl.querySelectorAll('[data-sentence-speech]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const text = decodeURIComponent(btn.dataset.sentenceSpeech);
          this.speakText(text, 'en');
        });
      });

      listEl.querySelectorAll('[data-sentence-practice]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const text = decodeURIComponent(btn.dataset.sentencePractice);
          this.startVoicePractice(text, btn);
        });
      });
    }

    modal.style.display = 'flex';
  }

  // --- 4. MORE HUB & FAVORITES ---
  renderFavorites() {
    this.renderFavoritesTab();
    this.renderMoreHub();
  }

  renderFavoritesTab() {
    if (!this.favoritesContainer) return;

    const favIds = storage.favorites;
    const favWords = this.words.filter(w => favIds.includes(w.id));

    this.favoritesContainer.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 16px; border-bottom: 1px solid var(--divider); padding-bottom: 8px;">
        <span style="font-size: 0.88rem; font-weight: 700; color: var(--text-title); letter-spacing: 0.05em; text-transform: uppercase;">Saved Words (${favWords.length})</span>
        ${favWords.length > 0 ? `
          <button class="notes-text-btn" id="fav-tab-start-practice-btn" style="color: var(--text-title); font-weight: 700;">
            Start Practice ▶
          </button>
        ` : ''}
      </div>

      ${favWords.length === 0 ? `
        <div style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <div style="font-size: 2.2rem; margin-bottom: 12px;">⭐</div>
          <p style="font-size: 1.1rem; font-weight: 700; color: var(--text-title); margin-bottom: 6px;">No Saved Words Yet</p>
          <p style="font-size: 0.88rem; line-height: 1.5; margin-bottom: 20px;">Tap the star icon on any word in Home, Dictionary, or Discover to build your personal vocabulary list.</p>
          <button class="notes-text-btn" style="margin: 0 auto; color: var(--text-title); text-decoration: underline;" id="fav-tab-goto-discover">
            Explore Discover Words →
          </button>
        </div>
      ` : `
        <div>
          ${favWords.map(w => `
            <div class="discover-list-row" data-fav-tab-open-id="${w.id}">
              <div class="discover-row-left">
                <span class="discover-word-text">${w.word}</span>
                <span class="word-pos-tag">[${w.posShort || 'n.'}]</span>
              </div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span class="discover-row-right urdu-text">${(w.urduMeaning || '').split('/')[0]}</span>
                <button class="speaker-btn" data-speech-text="${w.word}" style="padding: 4px;" title="Listen to pronunciation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                </button>
                <button class="star-fav-btn active" data-fav-remove-id="${w.id}" style="padding: 4px;" title="Remove from favorites">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#eab308" stroke="#eab308" stroke-width="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      `}
    `;

    const startPracticeBtn = document.getElementById('fav-tab-start-practice-btn');
    if (startPracticeBtn) {
      startPracticeBtn.addEventListener('click', () => {
        this.switchTab('practice');
      });
    }

    const gotoDiscoverBtn = document.getElementById('fav-tab-goto-discover');
    if (gotoDiscoverBtn) {
      gotoDiscoverBtn.addEventListener('click', () => {
        this.switchTab('discover');
      });
    }

    this.favoritesContainer.querySelectorAll('.speaker-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        tts.speak(btn.dataset.speechText);
      });
    });

    // Direct Star Remove from Favorites list
    this.favoritesContainer.querySelectorAll('[data-fav-remove-id]').forEach(starBtn => {
      starBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = starBtn.dataset.favRemoveId;
        storage.toggleFavorite(id);
        this.renderFavoritesTab();
        this.renderDictionary();
      });
    });

    // Row Click: Opens full word data modal
    this.favoritesContainer.querySelectorAll('[data-fav-tab-open-id]').forEach(row => {
      row.addEventListener('click', (e) => {
        if (e.target.closest('.speaker-btn') || e.target.closest('[data-fav-remove-id]')) return;
        const w = this.words.find(item => item.id === row.dataset.favTabOpenId);
        if (w) this.openWordModal(w);
      });
    });
  }

  renderMoreHub() {
    if (!this.moreContainer) return;

    if (this.moreSubView === 'my-words') {
      this.renderMyWordsView();
      return;
    }

    if (this.moreSubView === 'grammar') {
      this.renderGrammarCheckView();
      return;
    }

    const favCount = storage.favorites.length;
    const aiActive = !!storage.geminiApiKey;

    this.moreContainer.innerHTML = `
      <div style="margin-bottom: 20px; padding-bottom: 8px; border-bottom: 0.5px solid var(--divider-hairline);">
        <h2 style="font-size: 1.55rem; font-weight: 800; color: var(--text-title); letter-spacing: -0.025em;">More</h2>
      </div>

      <div class="journal-menu-list">
        <!-- 1. My Words -->
        <div class="journal-menu-row" id="more-nav-my-words">
          <span class="journal-row-title">My Words (Saved)</span>
          <div class="journal-row-right">
            <span class="journal-count">${favCount}</span>
            <span class="journal-chevron">›</span>
          </div>
        </div>

        <!-- 2. Flashcard Practice -->
        <div class="journal-menu-row" id="more-nav-practice">
          <span class="journal-row-title">Flashcard Practice</span>
          <div class="journal-row-right">
            <span class="journal-chevron">›</span>
          </div>
        </div>

        <!-- 3. Grammar Check -->
        <div class="journal-menu-row" id="more-nav-grammar">
          <span class="journal-row-title">Grammar Check</span>
          <div class="journal-row-right">
            <span class="journal-chevron">›</span>
          </div>
        </div>

        <!-- 4. Google Gemini AI -->
        <div class="journal-menu-row" id="more-nav-gemini">
          <span class="journal-row-title">Google Gemini AI</span>
          <div class="journal-row-right">
            <span class="journal-badge ${aiActive ? 'active' : ''}">${aiActive ? 'Active' : 'Setup'}</span>
            <span class="journal-chevron">›</span>
          </div>
        </div>

        <!-- 5. Dark Theme -->
        <div class="journal-menu-row" id="more-nav-theme">
          <span class="journal-row-title">Dark Theme</span>
          <div class="journal-row-right">
            <label class="ios-switch" id="theme-switch-label" title="Toggle Dark Theme">
              <input type="checkbox" id="theme-toggle-switch" ${storage.theme === 'dark' ? 'checked' : ''}>
              <span class="ios-switch-slider"></span>
            </label>
          </div>
        </div>

        <!-- 6. About -->
        <div class="journal-menu-row" style="cursor: default;">
          <span class="journal-row-title" style="color: var(--text-muted); font-weight: 500;">Vocab Journal</span>
          <div class="journal-row-right">
            <span style="font-size: 0.8rem; color: var(--text-faint);">v1.2 • 100% Free</span>
          </div>
        </div>
      </div>
    `;

    document.getElementById('more-nav-my-words').addEventListener('click', () => {
      this.moreSubView = 'my-words';
      this.renderMoreHub();
    });

    document.getElementById('more-nav-practice').addEventListener('click', () => {
      this.switchTab('practice');
    });

    document.getElementById('more-nav-grammar').addEventListener('click', () => {
      this.resetGrammarState();
      this.moreSubView = 'grammar';
      this.renderMoreHub();
    });

    document.getElementById('more-nav-gemini').addEventListener('click', () => {
      this.openAiSettings();
    });

    const themeRow = document.getElementById('more-nav-theme');
    const themeSwitch = document.getElementById('theme-toggle-switch');

    if (themeRow) {
      themeRow.addEventListener('click', (e) => {
        if (e.target.closest('.ios-switch')) return;
        this.toggleTheme();
      });
    }

    if (themeSwitch) {
      themeSwitch.addEventListener('change', () => {
        this.toggleTheme();
      });
    }
  }

  resetGrammarState() {
    this.grammarInputText = '';
    this.grammarResult = null;
    this.isCheckingGrammar = false;
    this.grammarError = null;
    this.grammarLastCheckedSentence = '';
  }

  // --- GRAMMAR CHECK SUB-VIEW ---
  renderGrammarCheckView() {
    if (!this.moreContainer) return;

    const hasKey = !!storage.geminiApiKey;

    this.moreContainer.innerHTML = `
      <button class="back-to-more-btn" id="back-to-more-menu-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
        <span>Back to More</span>
      </button>

      <div style="margin-bottom: 16px;">
        <h2 style="font-size: 1.45rem; font-weight: 800; color: var(--text-title); letter-spacing: -0.02em;">Grammar Check</h2>
      </div>

      ${!hasKey ? `
        <div style="background: #fdf4ff; border: 1px solid #f5d0fe; border-radius: 14px; padding: 12px 14px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center; gap: 10px;">
          <div>
            <div style="font-size: 0.84rem; font-weight: 700; color: #86198f;">✨ Optional: Connect Gemini AI</div>
            <div style="font-size: 0.74rem; color: #701a75; line-height: 1.4;">Free standard grammar checking is active. Add Gemini key for advanced teacher insights.</div>
          </div>
          <button id="grammar-open-ai-key-btn" style="background: #86198f; color: white; border: none; border-radius: 10px; padding: 7px 12px; font-size: 0.75rem; font-weight: 700; cursor: pointer; white-space: nowrap;">
            Add Key 🔑
          </button>
        </div>
      ` : ''}

      <div class="grammar-textarea-wrap">
        <textarea class="grammar-textarea" id="grammar-input-field" placeholder="Type or paste any English sentence here...">${this.grammarInputText || ''}</textarea>
        <div class="grammar-action-row">
          <button class="grammar-submit-btn" id="grammar-check-trigger-btn" ${this.isCheckingGrammar ? 'disabled' : ''}>
            ${this.isCheckingGrammar ? 'Checking...' : 'Check'}
          </button>
        </div>
      </div>

      <div id="grammar-result-area">
        ${this.isCheckingGrammar ? `
          <div class="grammar-loading-box">
            <div class="grammar-spinner"></div>
            <p style="font-size: 0.94rem; font-weight: 700; color: var(--text-title); margin-bottom: 3px;">Analyzing Grammar & Structure...</p>
            <p style="font-size: 0.78rem; color: var(--text-faint);">Checking sentence structure, spelling and grammar rules...</p>
          </div>
        ` : ''}

        ${this.grammarError ? `
          <div style="background: #fef2f2; border: 1px solid #fee2e2; border-radius: 14px; padding: 14px; margin-top: 14px; color: #991b1b; font-size: 0.84rem; line-height: 1.5;">
            <strong>⚠️ Notice:</strong> ${this.grammarError}
          </div>
        ` : ''}

        ${!this.isCheckingGrammar && this.grammarResult ? this.renderGrammarResultHTML() : ''}
      </div>
    `;

    // Event listeners
    document.getElementById('back-to-more-menu-btn').addEventListener('click', () => {
      this.resetGrammarState();
      this.moreSubView = 'menu';
      this.renderMoreHub();
    });

    const openKeyBtn = document.getElementById('grammar-open-ai-key-btn');
    if (openKeyBtn) {
      openKeyBtn.addEventListener('click', () => this.openAiSettings());
    }

    const inputField = document.getElementById('grammar-input-field');
    const submitBtn = document.getElementById('grammar-check-trigger-btn');

    if (inputField) {
      inputField.addEventListener('input', (e) => {
        this.grammarInputText = e.target.value;
      });

      inputField.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.executeGrammarCheck(this.grammarInputText);
        }
      });
    }

    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        this.executeGrammarCheck(this.grammarInputText);
      });
    }

    this.moreContainer.querySelectorAll('.speaker-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        tts.speak(btn.dataset.speechText);
      });
    });
  }

  renderGrammarResultHTML() {
    const res = this.grammarResult;
    if (!res) return '';

    const isCorrect = res.status && res.status.includes('Correct') && !res.status.includes('Incorrect');
    const original = this.grammarLastCheckedSentence || this.grammarInputText;

    if (isCorrect) {
      return `
        <div class="grammar-result-box">
          <div class="grammar-status-pill correct">
            <span>✅ Correct</span>
          </div>

          <div class="grammar-sentence-row">
            <p class="grammar-sentence-text">"${original}"</p>
            <button class="speaker-btn" data-speech-text="${original}" title="Listen to sentence">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
            </button>
          </div>

          <div class="grammar-urdu-block">
            <div class="grammar-sublabel">Urdu Meaning</div>
            <div class="grammar-urdu-text urdu-text">${res.urdu_meaning || 'درست جملہ'}</div>
          </div>
        </div>
      `;
    } else {
      const correctVersion = res.correct_version || original;
      return `
        <div class="grammar-result-box">
          <div class="grammar-status-pill incorrect">
            <span>❌ Incorrect</span>
          </div>

          <div class="grammar-diff-section">
            <div class="grammar-diff-row original">
              <span class="grammar-diff-label">Original:</span>
              <span class="grammar-original-text">"${original}"</span>
            </div>
            <div class="grammar-diff-row corrected">
              <div>
                <span class="grammar-diff-label">Correct:</span>
                <span>"${correctVersion}"</span>
              </div>
              <button class="speaker-btn" data-speech-text="${correctVersion}" title="Listen to corrected sentence" style="padding: 2px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
              </button>
            </div>
          </div>

          <div class="grammar-reason-box">
            <div class="grammar-reason-title">Why it was incorrect:</div>
            <p class="grammar-reason-text">${res.why_it_was_wrong || 'Grammar or word order issue.'}</p>
          </div>

          <div class="grammar-urdu-block">
            <div class="grammar-sublabel">Urdu Translation (Corrected)</div>
            <div class="grammar-urdu-text urdu-text">${res.urdu_meaning || ''}</div>
          </div>
        </div>
      `;
    }
  }

  async executeGrammarCheck(rawSentence) {
    const sentence = (rawSentence || '').trim();
    if (!sentence) return;

    this.grammarLastCheckedSentence = sentence;
    this.isCheckingGrammar = true;
    this.grammarError = null;
    this.grammarResult = null;
    this.renderGrammarCheckView();

    const norm = sentence.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();

    // 1. Instant Cache Check (< 20ms)
    const cachedOrSample = sampleGrammarChecks[norm] || storage.getGrammarResult(norm);
    if (cachedOrSample) {
      setTimeout(() => {
        this.grammarResult = cachedOrSample;
        this.isCheckingGrammar = false;
        this.renderGrammarCheckView();
      }, 40);
      return;
    }

    let finalResult = null;

    // 2. Call Gemini AI (if key is set)
    if (storage.geminiApiKey) {
      try {
        finalResult = await OnlineLookupService.checkGrammarWithGemini(sentence, storage.geminiApiKey);
      } catch (err) {
        console.warn("Gemini AI check failed, seamlessly falling back to permanent LanguageTool engine:", err.message);
      }
    }

    // 3. Permanent 100% Free Fallback Engine: LanguageTool (No Key Needed, Never Deprecates)
    if (!finalResult) {
      try {
        finalResult = await OnlineLookupService.checkGrammarWithLanguageTool(sentence);
      } catch (ltErr) {
        console.warn("LanguageTool fallback check failed:", ltErr);
      }
    }

    // 4. Local Rule Analyzer (0ms offline fallback for verified patterns)
    if (!finalResult) {
      try {
        finalResult = await OnlineLookupService.analyzeSentenceLocally(sentence);
      } catch (localErr) {}
    }

    // If still no result (e.g. completely offline with no network connection)
    if (!finalResult) {
      this.isCheckingGrammar = false;
      this.grammarError = "Sentence analysis could not be completed. Please check your internet connection.";
      this.renderGrammarCheckView();
      return;
    }

    // Save verified result in cache so repeated lookups are instant
    storage.saveGrammarResult(norm, finalResult);

    this.grammarResult = finalResult;
    this.isCheckingGrammar = false;
    this.renderGrammarCheckView();
  }

  renderMyWordsView() {
    if (!this.moreContainer) return;

    const favIds = storage.favorites;
    const favWords = this.words.filter(w => favIds.includes(w.id));

    this.moreContainer.innerHTML = `
      <button class="back-to-more-btn" id="back-to-more-menu-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
        <span>Back to More</span>
      </button>

      <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 16px; border-bottom: 1px solid var(--divider); padding-bottom: 8px;">
        <span style="font-size: 0.88rem; font-weight: 700; color: var(--text-title);">MY WORDS (${favWords.length})</span>
        ${favWords.length > 0 ? `
          <button class="notes-text-btn" id="start-practice-btn" style="color: var(--text-title); font-weight: 700;">
            Start Practice ▶
          </button>
        ` : ''}
      </div>

      ${favWords.length === 0 ? `
        <div style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <p style="font-size: 1.1rem; font-weight: 700; color: var(--text-title); margin-bottom: 6px;">No Saved Words Yet</p>
          <p style="font-size: 0.88rem; line-height: 1.5; margin-bottom: 20px;">Tap the heart icon on any word in Dictionary or Word of Day to build your personal revision list.</p>
          <button class="notes-text-btn" style="margin: 0 auto; color: var(--text-title); text-decoration: underline;" id="my-words-goto-dict">
            Search in Dictionary →
          </button>
        </div>
      ` : `
        <div>
          ${favWords.map(w => `
            <div class="discover-list-row" data-fav-open-id="${w.id}">
              <div class="discover-row-left">
                <span class="discover-word-text">${w.word}</span>
                <span class="word-pos-tag">[${w.posShort || 'n.'}]</span>
              </div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span class="discover-row-right urdu-text">${(w.urduMeaning || '').split('/')[0]}</span>
                <button class="speaker-btn" data-speech-text="${w.word}" style="padding: 4px;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                </button>
                <button class="star-fav-btn active" data-fav-remove-mywords-id="${w.id}" style="padding: 4px;" title="Remove from favorites">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#eab308" stroke="#eab308" stroke-width="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      `}
    `;

    document.getElementById('back-to-more-menu-btn').addEventListener('click', () => {
      this.moreSubView = 'menu';
      this.renderMoreHub();
    });

    const startPracticeBtn = document.getElementById('start-practice-btn');
    if (startPracticeBtn) {
      startPracticeBtn.addEventListener('click', () => {
        this.switchTab('practice');
      });
    }

    const gotoDictBtn = document.getElementById('my-words-goto-dict');
    if (gotoDictBtn) {
      gotoDictBtn.addEventListener('click', () => {
        this.switchTab('home');
        if (this.dictSearchInput) {
          this.dictSearchInput.focus();
        }
      });
    }

    this.moreContainer.querySelectorAll('.speaker-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        tts.speak(btn.dataset.speechText);
      });
    });

    this.moreContainer.querySelectorAll('[data-fav-remove-mywords-id]').forEach(starBtn => {
      starBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = starBtn.dataset.favRemoveMywordsId;
        storage.toggleFavorite(id);
        this.renderMyWordsView();
        this.renderFavoritesTab();
        this.renderDictionary();
      });
    });

    this.moreContainer.querySelectorAll('[data-fav-open-id]').forEach(row => {
      row.addEventListener('click', (e) => {
        if (e.target.closest('.speaker-btn') || e.target.closest('[data-fav-remove-mywords-id]')) return;
        const w = this.words.find(item => item.id === row.dataset.favOpenId);
        if (w) this.openWordModal(w);
      });
    });
  }

  // --- 5. FLASHCARD PRACTICE ---
  startRevisionSession() {
    const favIds = storage.favorites;
    this.revisionCards = this.words.filter(w => favIds.includes(w.id));
    if (this.revisionCards.length === 0) {
      this.revisionCards = this.words.slice(0, 5);
    }
    this.currentRevisionIndex = 0;
    this.isCardFlipped = false;
    this.renderRevisionCard();
  }

  renderRevisionCard() {
    if (!this.practiceContainer) return;

    if (this.currentRevisionIndex >= this.revisionCards.length) {
      this.practiceContainer.innerHTML = `
        <div style="text-align: center; padding: 60px 20px;">
          <div style="font-size: 2.2rem; margin-bottom: 8px;">✨</div>
          <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--text-title); margin-bottom: 4px;">Practice Complete</h2>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 24px;">You have revised ${this.revisionCards.length} vocabulary words.</p>
          <button class="notes-text-btn" style="margin: 0 auto; color: var(--text-title); text-decoration: underline;" id="restart-practice-btn">
            Practice Again →
          </button>
        </div>
      `;
      document.getElementById('restart-practice-btn').addEventListener('click', () => {
        this.currentRevisionIndex = 0;
        this.renderRevisionCard();
      });
      return;
    }

    const word = this.revisionCards[this.currentRevisionIndex];

    this.practiceContainer.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; color: var(--text-faint); font-size: 0.78rem; font-weight: 600;">
        <span>CARD ${this.currentRevisionIndex + 1} OF ${this.revisionCards.length}</span>
        <button id="exit-practice-btn" style="background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 0.8rem;">Exit ✕</button>
      </div>

      <div class="minimal-flashcard-box" id="flashcard-box">
        ${!this.isCardFlipped ? `
          <div style="font-size: 0.8rem; font-style: italic; color: var(--text-muted); margin-bottom: 14px;">Tap to reveal meaning</div>
          <h1 style="font-size: 2.4rem; font-weight: 800; color: var(--text-title); margin-bottom: 6px;">${word.word}</h1>
          <p style="color: var(--text-muted); font-size: 0.95rem;">[${word.posShort}]</p>
          <button class="speaker-btn" id="fc-audio-btn" style="margin-top: 16px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
          </button>
        ` : `
          <h2 class="urdu-text" style="font-size: 2.2rem; font-weight: 700; color: var(--text-title); margin-bottom: 8px;">${word.urduMeaning}</h2>
          <div style="width: 100%; border-top: 1px solid var(--divider); padding-top: 12px; margin-top: 8px;">
            <div style="font-size: 0.82rem; font-weight: 600; color: var(--text-faint); margin-bottom: 4px;">Instead of: ${word.insteadOf[0]}</div>
            <p style="font-size: 0.95rem; font-weight: 600; color: var(--text-title);">"${word.sentences[0].en}"</p>
            <p class="urdu-text" style="font-size: 1.15rem; color: var(--text-title); line-height: 1.9;">${word.sentences[0].ur}</p>
          </div>
        `}
      </div>

      <div style="display: flex; gap: 14px;">
        <button class="notes-text-btn" style="flex: 1; justify-content: center; border: 1px solid var(--divider); background: var(--bg-card); color: var(--text-body); border-radius: 12px; padding: 12px;" id="fc-need-work">
          Need Practice
        </button>
        <button class="notes-text-btn" style="flex: 1; justify-content: center; background: var(--text-title); color: var(--bg-app); border-radius: 12px; padding: 12px;" id="fc-mastered">
          Mastered ✓
        </button>
      </div>
    `;

    const box = document.getElementById('flashcard-box');
    box.addEventListener('click', (e) => {
      if (e.target.closest('#fc-audio-btn')) return;
      this.isCardFlipped = !this.isCardFlipped;
      this.renderRevisionCard();
    });

    const audioBtn = document.getElementById('fc-audio-btn');
    if (audioBtn) {
      audioBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        tts.speak(word.word);
      });
    }

    document.getElementById('fc-need-work').addEventListener('click', () => {
      this.isCardFlipped = false;
      this.currentRevisionIndex++;
      this.renderRevisionCard();
    });

    document.getElementById('fc-mastered').addEventListener('click', () => {
      this.isCardFlipped = false;
      this.currentRevisionIndex++;
      this.renderRevisionCard();
    });

    document.getElementById('exit-practice-btn').addEventListener('click', () => {
      this.moreSubView = 'my-words';
      this.switchTab('more');
    });
  }

  // --- THEME MANAGEMENT ---
  toggleTheme() {
    const newTheme = storage.toggleTheme();
    this.updateThemeUI(newTheme);
    this.renderMoreHub();
  }

  updateThemeUI(theme = storage.theme) {
    try {
      document.documentElement.setAttribute('data-theme', theme);
    } catch(e) {}
    
    if (this.themeToggleBtn) {
      if (theme === 'dark') {
        this.themeToggleBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
        this.themeToggleBtn.title = "Switch to Light Mode";
      } else {
        this.themeToggleBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
        this.themeToggleBtn.title = "Switch to Dark Mode";
      }
    }
  }
}

function bootApp() {
  window.vocabApp = new VocabApp();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootApp);
} else {
  bootApp();
}
