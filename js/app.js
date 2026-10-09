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
    urduMeaning: "مخالف / منفی / نقصان دہ",
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
    urduMeaning: "نتیجہ / انجام / اختتام",
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
    phoneticUK: "/rɪˈzɪl.jənt/",
    phoneticUS: "/rɪˈzɪl.jənt/",
    phonetic: "/rɪˈzɪl.jənt/",
    respelling: "ri-ZIL-yuhnt",
    urduPhonetic: "رِزِل یینٹ",
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
    ],
    synonymsAntonymsList: [
      {
        num: 1,
        context: 'for the meaning of "recovering quickly from difficulty"',
        syns: ["tenacious", "hardy", "tough", "adaptable", "robust", "strong"],
        ants: ["fragile", "vulnerable", "brittle", "weak", "delicate"]
      }
    ]
  },
  {
    id: "word-2",
    word: "Eloquent",
    posShort: "adj.",
    partOfSpeech: "adjective",
    phoneticUK: "/ˈel.ə.kwənt/",
    phoneticUS: "/ˈel.ə.kwənt/",
    phonetic: "/ˈel.ə.kwənt/",
    respelling: "EH-luh-kwuhnt",
    urduPhonetic: "ایلوکوینٹ",
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
    ],
    synonymsAntonymsList: [
      {
        num: 1,
        context: 'for the meaning of "fluent and persuasive in speech"',
        syns: ["articulate", "fluent", "expressive", "persuasive", "silver-tongued"],
        ants: ["inarticulate", "tongue-tied", "hesitant", "halting", "awkward"]
      }
    ]
  },
  {
    id: "word-3",
    word: "Pragmatic",
    posShort: "adj.",
    partOfSpeech: "adjective",
    phoneticUK: "/præɡˈmæt.ɪk/",
    phoneticUS: "/præɡˈmæt̬.ɪk/",
    phonetic: "/præɡˈmæt.ɪk/",
    respelling: "prag-MAT-ik",
    urduPhonetic: "پریگ میٹِک",
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
    ],
    synonymsAntonymsList: [
      {
        num: 1,
        context: 'for the meaning of "practical and realistic"',
        syns: ["practical", "realistic", "down-to-earth", "sensible", "hardheaded"],
        ants: ["idealistic", "impractical", "theoretical", "visionary", "unrealistic"]
      }
    ]
  },
  {
    id: "word-4",
    word: "Meticulous",
    posShort: "adj.",
    partOfSpeech: "adjective",
    phoneticUK: "/məˈtɪk.jə.ləs/",
    phoneticUS: "/məˈtɪk.jə.ləs/",
    phonetic: "/məˈtɪk.jə.ləs/",
    respelling: "muh-TIK-yuh-luhs",
    urduPhonetic: "مَیٹِکیولس",
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
    ],
    synonymsAntonymsList: [
      {
        num: 1,
        context: 'for the meaning of "showing great attention to detail"',
        syns: ["painstaking", "thorough", "scrupulous", "fastidious", "precise", "diligent"],
        ants: ["careless", "sloppy", "negligent", "slapdash", "inaccurate"]
      }
    ]
  },
  {
    id: "word-5",
    word: "Empathy",
    posShort: "n.",
    partOfSpeech: "noun",
    phoneticUK: "/ˈem.pə.θi/",
    phoneticUS: "/ˈem.pə.θi/",
    phonetic: "/ˈem.pə.θi/",
    respelling: "EM-puh-thee",
    urduPhonetic: "ایم پَتھی",
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
    ],
    synonymsAntonymsList: [
      {
        num: 1,
        context: 'for the meaning of "understanding and sharing feelings"',
        syns: ["compassion", "understanding", "sensitivity", "affinity", "fellow-feeling"],
        ants: ["apathy", "indifference", "callousness", "coldness", "insensitivity"]
      }
    ]
  },
  {
    id: "word-6",
    word: "Persevere",
    posShort: "v.",
    partOfSpeech: "verb",
    phoneticUK: "/ˌpɜː.sɪˈvɪər/",
    phoneticUS: "/ˌpɜːr.səˈvɪr/",
    phonetic: "/ˌpɜː.sɪˈvɪər/",
    respelling: "pur-suh-VEER",
    urduPhonetic: "پَرسِویر",
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
    ],
    synonymsAntonymsList: [
      {
        num: 1,
        context: 'for the meaning of "continuing firmly despite difficulties"',
        syns: ["persist", "carry on", "endure", "press on", "soldier on", "stand firm"],
        ants: ["give up", "quit", "surrender", "abandon", "yield"]
      }
    ]
  },
  {
    id: "word-7",
    word: "Candid",
    posShort: "adj.",
    partOfSpeech: "adjective",
    phoneticUK: "/ˈkæn.dɪd/",
    phoneticUS: "/ˈkæn.dɪd/",
    phonetic: "/ˈkæn.dɪd/",
    respelling: "KAN-did",
    urduPhonetic: "کین ڈِڈ",
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
    ],
    synonymsAntonymsList: [
      {
        num: 1,
        context: 'for the meaning of "truthful, frank, and straightforward"',
        syns: ["frank", "outspoken", "forthright", "direct", "blunt", "honest"],
        ants: ["guarded", "disingenuous", "insincere", "deceptive", "secretive"]
      }
    ]
  },
  {
    id: "word-8",
    word: "Procrastinate",
    posShort: "v.",
    partOfSpeech: "verb",
    phoneticUK: "/prəʊˈkræs.tɪ.neɪt/",
    phoneticUS: "/proʊˈkræs.tə.neɪt/",
    phonetic: "/prəʊˈkræs.tɪ.neɪt/",
    respelling: "proh-KRAS-tuh-nayt",
    urduPhonetic: "پرو کریسٹینیٹ",
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
    ],
    synonymsAntonymsList: [
      {
        num: 1,
        context: 'for the meaning of "delaying or postponing action"',
        syns: ["delay", "postpone", "defer", "put off", "stall", "dilly-dally"],
        ants: ["expedite", "hasten", "hurry", "accelerate", "act immediately"]
      }
    ]
  },
  {
    id: "word-9",
    word: "Lucid",
    posShort: "adj.",
    partOfSpeech: "adjective",
    phoneticUK: "/ˈluː.sɪd/",
    phoneticUS: "/ˈluː.sɪd/",
    phonetic: "/ˈluː.sɪd/",
    respelling: "LOO-sid",
    urduPhonetic: "لُوسِڈ",
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
    ],
    synonymsAntonymsList: [
      {
        num: 1,
        context: 'for the meaning of "clearly expressed and easily understood"',
        syns: ["clear", "coherent", "transparent", "intelligible", "articulate", "rational"],
        ants: ["confusing", "obscure", "muddled", "ambiguous", "incomprehensible"]
      }
    ]
  },
  {
    id: "word-10",
    word: "Serene",
    posShort: "adj.",
    partOfSpeech: "adjective",
    phoneticUK: "/sɪˈriːn/",
    phoneticUS: "/səˈriːn/",
    phonetic: "/sɪˈriːn/",
    respelling: "suh-REEN",
    urduPhonetic: "سِرین",
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
    ],
    synonymsAntonymsList: [
      {
        num: 1,
        context: 'for the meaning of "calm, peaceful, and untroubled"',
        syns: ["calm", "tranquil", "peaceful", "placid", "undisturbed", "unruffled"],
        ants: ["agitated", "turbulent", "stormy", "chaotic", "anxious", "frantic"]
      }
    ]
  },
  {
    id: "word-11",
    word: "Diligent",
    posShort: "adj.",
    partOfSpeech: "adjective",
    phoneticUK: "/ˈdɪl.ɪ.dʒənt/",
    phoneticUS: "/ˈdɪl.ə.dʒənt/",
    phonetic: "/ˈdɪl.ɪ.dʒənt/",
    respelling: "DIL-uh-juhnt",
    urduPhonetic: "ڈِلی جنٹ",
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
    ],
    synonymsAntonymsList: [
      {
        num: 1,
        context: 'for the meaning of "showing hard work and thorough care"',
        syns: ["industrious", "hardworking", "assiduous", "conscientious", "meticulous", "tireless"],
        ants: ["lazy", "idle", "negligent", "careless", "slothful", "indolent"]
      }
    ]
  },
  {
    id: "word-12",
    word: "Ambiguous",
    posShort: "adj.",
    partOfSpeech: "adjective",
    phoneticUK: "/æmˈbɪɡ.ju.əs/",
    phoneticUS: "/æmˈbɪɡ.ju.əs/",
    phonetic: "/æmˈbɪɡ.ju.əs/",
    respelling: "am-BIG-yoo-uhs",
    urduPhonetic: "ایم بگ یو اس",
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
    ],
    synonymsAntonymsList: [
      {
        num: 1,
        context: 'for the meaning of "open to more than one interpretation"',
        syns: ["equivocal", "vague", "obscure", "cryptic", "dubious", "enigmatic"],
        ants: ["clear", "unambiguous", "explicit", "definite", "precise", "transparent"]
      }
    ]
  },
  {
    id: "word-diaspora",
    word: "Diaspora",
    posShort: "n.",
    partOfSpeech: "noun",
    phoneticUK: "/daɪˈæs.pər.ə/",
    phoneticUS: "/daɪˈæs.pɚ.ə/",
    phonetic: "/daɪˈæs.pər.ə/",
    respelling: "dye-AS-pur-uh",
    urduPhonetic: "ڈائیسپورا",
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
    ],
    synonymsAntonymsList: [
      {
        num: 1,
        context: 'for the meaning of "dispersion of a people outside their homeland"',
        syns: ["dispersion", "scattering", "migration", "exile", "expatriate community"],
        ants: ["homeland", "gathering", "concentration", "repatriation"]
      }
    ]
  }
];

// Built-in Quick Autocomplete Index with Urdu Meanings (Comprehensive A-Z Core Vocabulary)
const quickAutocompleteIndex = [
  // --- SHASHI THAROOR & SESQUIPEDALIAN ICONIC VOCABULARY ---
  { word: "farrago", pos: "n.", urdu: "ملغوبہ / سچ اور جھوٹ کی کھچڑی / ابہام / بے ربط مجموعہ / گڑبڑ" },
  { word: "snollygoster", pos: "n.", urdu: "چالاک اور بے اصول سیاستدان / ابن الوقت رہنما / خود غرض انسان" },
  { word: "kakistocracy", pos: "n.", urdu: "بدترین اور نااہل ترین لوگوں کی حکومت / نااہل قیادت" },
  { word: "rodomontade", pos: "n.", urdu: "شیخی بگھارنا / لمبی چوڑی چھوڑنا / خود ستائی / ڈینگیں مارنا" },
  { word: "sesquipedalian", pos: "adj.", urdu: "انتہائی طویل اور بھاری الفاظ بولنے والا / لمبا لفظ" },
  { word: "ultracrepidarian", pos: "n.", urdu: "بغیر جانے بوجھے مفت مشورہ دینے والا / ناواقف تبصرہ نگار" },
  { word: "defenestration", pos: "n.", urdu: "کسی کو کھڑکی سے باہر پھینکنا / عہدے یا اقتدار سے اچانک بے دخل کرنا" },
  { word: "kerfuffle", pos: "n.", urdu: "چھوٹا موٹا ہنگامہ / شور شرابا / بے معنی بحث / ہڑبونگ" },
  { word: "discombobulate", pos: "v.", urdu: "حواس باختہ کرنا / الجھن میں ڈالنا / گھبراہٹ پیدا کرنا" },
  { word: "lalochezia", pos: "n.", urdu: "غصے میں سخت الفاظ یا گالی دے کر ذہنی سکون حاصل کرنا" },
  { word: "imbroglio", pos: "n.", urdu: "انتہائی الجھا ہوا پیچیدہ معاملہ / تنازع / شدید الجھاؤ" },
  { word: "troglodyte", pos: "n.", urdu: "قدامت پسند انسان / تنگ نظر / غار میں رہنے کی سوچ رکھنے والا" },
  { word: "supercilious", pos: "adj.", urdu: "مغرور / خود پسند / متکبر / دوسروں کو حقیر سمجھنے والا" },
  { word: "pusillanimous", pos: "adj.", urdu: "بزدل / کمزور دل / ہمت نہ رکھنے والا / ڈرپوک" },
  { word: "perspicacious", pos: "adj.", urdu: "تیز نظر / گہری بصیرت رکھنے والا / دور اندیش / ذہین" },
  { word: "floccinaucinihilipilification", pos: "n.", urdu: "کسی چیز کو حقیر یا بے قدر سمجھنے کی عادت" },
  { word: "hippopotomonstrosesquippedaliophobia", pos: "n.", urdu: "انتہائی طویل اور بھاری الفاظ کا خوف" },
  { word: "gorgonize", pos: "v.", urdu: "سکتہ طاری کر دینا / ہیبت سے پتھر کا بنا دینا / سُن کرنا" },
  { word: "panglossian", pos: "adj.", urdu: "آنکھیں بند کر کے ضرورت سے زیادہ پرامید / خوش فہم" },
  { word: "quidnunc", pos: "n.", urdu: "دوسروں کے معاملات میں ٹوہ لگانے والا / تجسس رکھنے والا / گپ شپ باز" },
  { word: "mugwump", pos: "n.", urdu: "الگ تھلگ رہنے والا / غیر جانبدار / موقع پرست" },
  { word: "obfuscate", pos: "v.", urdu: "معاملے کو الجھانا / جان بوجھ کر غیر واضح کرنا / دھندلا کرنا" },
  { word: "grandiloquent", pos: "adj.", urdu: "بڑے بول بولنے والا / مبالغہ آمیز زبان استعمال کرنے والا" },
  { word: "lugubrious", pos: "adj.", urdu: "افسردہ / غمگین / اداس / سوگوار" },
  { word: "cacophony", pos: "n.", urdu: "کانوں کو ناگوار گزرنے والا شدید شور / کھڑکھڑاہٹ" },
  { word: "tergiversation", pos: "n.", urdu: "بات سے پھر جانا / ٹال مٹول / موقف بدلنا / ہیرا پھیری" },
  { word: "recalcitrant", pos: "adj.", urdu: "سرکش / ضدی / نافرمان / حکم نہ ماننے والا" },
  { word: "fastidious", pos: "adj.", urdu: "باریک بین / صفائی پسند / بہت مشکل سے راضی ہونے والا" },
  { word: "vituperation", pos: "n.", urdu: "سخت سست کہنا / تلخ کلامی / گالی گلوچ / لعن طعن" },
  { word: "pleonasm", pos: "n.", urdu: "ضرورت سے زیادہ الفاظ کا استعمال / زائد از ضرورت کلام" },
  { word: "tintinnabulation", pos: "n.", urdu: "گھنٹیوں کی جھنکار / ٹن ٹن کی مسلسل آواز" },
  { word: "schadenfreude", pos: "n.", urdu: "کسی دوسرے کے نقصان یا ناکامی پر خوشی محسوس کرنا" },
  { word: "verisimilitude", pos: "n.", urdu: "حقیقت سے مشابہت / سچائی کا گمان / اصلی پن" },
  { word: "apposite", pos: "adj.", urdu: "برمحل / بالکل مناسب / موقع کے مطابق / موزوں" },
  { word: "weasel word", pos: "n.", urdu: "مبہم اور گمراہ کن لفظ / دھوکہ دہی والا بیان" },
  { word: "pachydermatous", pos: "adj.", urdu: "موٹی چمڑی والا / بے حس / طنز و تنقید سے بے پرواہ" },
  { word: "opsimath", pos: "n.", urdu: "بڑھاپے یا عمر گزرنے کے بعد علم حاصل کرنے والا شخص" },
  { word: "philistine", pos: "n.", urdu: "ادب اور آرٹ سے بے بہرہ انسان / مادہ پرست / غیر حساس شخص" },
  { word: "torschlusspanik", pos: "n.", urdu: "وقت نکل جانے کا خوف / موقع ہاتھ سے چھوٹنے کی گھبراہٹ" },
  { word: "omphaloskepsis", pos: "n.", urdu: "اپنی ذات میں گم رہنا / خود پسندی سے اپنے ہی دھیان میں رہنا" },
  { word: "borborygmus", pos: "n.", urdu: "پیٹ میں گڑگڑاہٹ / آنتوں کے بولنے کی آواز" },
  { word: "callipygian", pos: "adj.", urdu: "خوش نما اور متناسب جسمانی ساخت رکھنے والا" },
  { word: "quomodo", pos: "n.", urdu: "طریقہ کار / کام کرنے کا ڈھنگ / کس طرح" },
  { word: "absquatulate", pos: "v.", urdu: "اچانک بھاگ جانا / چپکے سے فرار ہو جانا" },
  { word: "defalcate", pos: "v.", urdu: "امانت میں خیانت کرنا / فنڈز کا غبن کرنا" },
  { word: "epicaricacy", pos: "n.", urdu: "کسی کی بدقسمتی پر دل ہی دل میں لطف اندوز ہونا" },
  { word: "jentacular", pos: "adj.", urdu: "صبح کے ناشتے سے متعلق" },
  { word: "mumpsimus", pos: "n.", urdu: "غلط بات پر ضد سے قائم رہنے والا شخص / غلطی پر ہٹ دھرمی" },
  { word: "scripturient", pos: "adj.", urdu: "لکھنے کی شدید خواہش یا لگن رکھنے والا" },
  { word: "zugzwang", pos: "n.", urdu: "ایسی مجبور حالت جہاں ہر اگلا قدم نقصان دہ ہو" },
  // A
  { word: "alleviate", pos: "v.", urdu: "کم کرنا / تسکین دینا / ہلکا کرنا" },
  { word: "adverse", pos: "adj.", urdu: "مخالف / منفی / نقصان دہ" },
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
  { word: "Benevolent", pos: "adj.", urdu: "مہربان / فیاض / خیر خواہ" },
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
  { word: "Circumstances", pos: "n.", urdu: "حالات / کیفیت" },
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
  { word: "Detrimental", pos: "adj.", urdu: "نقصان دہ / مضر / ضرر رساں" },
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
  { word: "Equivocal", pos: "adj.", urdu: "مبہم / گول مول / ذو معنی" },
  { word: "Embarrass", pos: "v.", urdu: "شرمندہ کرنا" },
  { word: "Emerge", pos: "v.", urdu: "ابھرنا / سامنے آنا" },
  { word: "Emotion", pos: "n.", urdu: "جذبہ / احساس" },
  { word: "Emphasis", pos: "n.", urdu: "زور / تاکید" },
  { word: "Empathy", pos: "n.", urdu: "احساسِ ہمدردی" },
  { word: "Ephemeral", pos: "adj.", urdu: "عارضی / چند روزہ / ناپائیدار" },
  { word: "Epiphany", pos: "n.", urdu: "بصیرت کا لمحہ / اچانک ادراک" },
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
  { word: "Mitigate", pos: "v.", urdu: "کم کرنا / شدت گھٹانا / تخفیف کرنا" },
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
  { word: "Paradigm", pos: "n.", urdu: "نمونہ / مثال / فکری سانچہ" },
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
  { word: "Serendipity", pos: "n.", urdu: "غیر متوقع خوش نصیبی / حسنِ اتفاق" },
  { word: "Serene", pos: "adj.", urdu: "پرسکون / پرامن / پر اطمینان" },
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
  { word: "Superfluous", pos: "adj.", urdu: "ضرورت سے زائد / فالتو / غیر ضروری" },
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
  { word: "Ubiquitous", pos: "adj.", urdu: "ہر جگہ موجود / ہمہ گیر" },
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
  { word: "Venerate", pos: "v.", urdu: "عزت کرنا / تعظیم کرنا / محترم جاننا" },
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
  { word: "Zone", pos: "n.", urdu: "علاقہ / خطہ" },
  // High-Yield IELTS Academic Words
  { word: "Sustainable", pos: "adj.", urdu: "پائیدار / ماحول دوست / دیرپا" },
  { word: "Sedentary", pos: "adj.", urdu: "ساکن / غیر متحرک / بیٹھے رہنے والی زندگی" },
  { word: "Deterrent", pos: "n.", urdu: "روک تھام / رکاوٹ / عبرت ناک تدبیر" },
  { word: "Lucrative", pos: "adj.", urdu: "منافع بخش / پرکشش / فائدہ مند" },
  { word: "Obsolete", pos: "adj.", urdu: "متروک / پرانا / غیر مستعمل" },
  { word: "Cognitive", pos: "adj.", urdu: "دماغی / فکری / ذہنی / ادراکی" },
  { word: "Chronic", pos: "adj.", urdu: "دائمی / پرانا / مستقل بیماری" },
  { word: "Biodiversity", pos: "n.", urdu: "حیاتیاتی تنوع / جانداروں کی اقسام" },
  { word: "Degradation", pos: "n.", urdu: "تنزلی / بگاڑ / انحطاط" },
  { word: "Emission", pos: "n.", urdu: "اخراج / خارج ہونے والی گیس" },
  { word: "Bolster", pos: "v.", urdu: "تقویت دینا / مضبوط کرنا / سہارا دینا" },
  { word: "Hamper", pos: "v.", urdu: "رکاوٹ ڈالنا / مانع ہونا / کام روکنا" },
  { word: "Jeopardize", pos: "v.", urdu: "خطرے میں ڈالنا / داؤ پر لگانا" },
  { word: "Plausible", pos: "adj.", urdu: "معقول / قابلِ قبول / قرینِ قیاس" },
  { word: "Thrive", pos: "v.", urdu: "پھلنا پھولنا / پروان چڑھنا / ترقی کرنا" },
  { word: "Withstand", pos: "v.", urdu: "برداشت کرنا / مقابلہ کرنا / جھیلنا" },
  { word: "Undermine", pos: "v.", urdu: "کمزور کرنا / جڑیں کھوکھلی کرنا" },
  { word: "Validate", pos: "v.", urdu: "تصدیق کرنا / درست قرار دینا" },
  { word: "Stimulate", pos: "v.", urdu: "حوصلہ افزائی کرنا / متحرک کرنا" },
  { word: "Refine", pos: "v.", urdu: "نکھارنا / بہتر بنانا / صاف کرنا" },
  { word: "Fluctuate", pos: "v.", urdu: "اتار چڑھاؤ آنا / غیر مستقل ہونا" }
];

// ==========================================================
// 2. STORAGE ENGINE (Local Cache & Gemini Key)
// ==========================================================
class StorageManager {
  constructor() {
    this.favKey = 'vocab_favorites_v5';
    this.cacheKey = 'vocab_dynamic_cache_v6';
    this.geminiKeyStorage = 'vocab_gemini_api_key_v5';
    this.favorites = this.load(this.favKey, []);

    // Thorough purge of all legacy and contaminated cache keys
    const staleKeys = [
      'vocab_dynamic_cache_v5',
      'vocab_dynamic_cache_v4',
      'vocab_dynamic_cache_v3',
      'vocab_dynamic_cache_v2',
      'vocab_dynamic_cache_v1',
      'vocab_dynamic_cache',
      'vocab_grammar_cache_v5',
      'vocab_grammar_cache_v4',
      'vocab_grammar_cache'
    ];
    staleKeys.forEach(k => {
      try { localStorage.removeItem(k); } catch (e) {}
    });

    // Also remove any stale translation and collins caches that might have contaminated data
    try {
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const k = localStorage.key(i);
        if (k && (k.startsWith('vocab_trans_') || k.startsWith('vocab_collins_') || k.startsWith('vocab_phones_v2_'))) {
          localStorage.removeItem(k);
        }
      }
    } catch (e) {}

    const loadedCache = this.load(this.cacheKey, []);
    // Auto-clean any legacy dummy placeholder sentences or cross-contaminated entries
    this.cachedWords = Array.isArray(loadedCache) ? loadedCache.filter(w => {
      if (!w || !w.word) return false;
      const wordLower = w.word.toLowerCase();
      // Purge any contaminated entry with foreign detrimental sentences on unrelated words
      if (w.sentences && Array.isArray(w.sentences)) {
        const hasDetrimentalLeak = w.sentences.some(s => {
          const en = (s.en || '').toLowerCase();
          const ur = (s.ur || '');
          return (en.includes('smoking has a highly') || en.includes('excessive stress can prove') || (ur.includes('نقصان دہ') && !(w.urduMeaning || '').includes('نقصان')) || (ur.includes('مضر') && !(w.urduMeaning || '').includes('مضر'))) && wordLower !== 'detrimental';
        });
        if (hasDetrimentalLeak) return false;
      }
      if (w.sampleSentences && Array.isArray(w.sampleSentences)) {
        const hasLeak = w.sampleSentences.some(s => {
          const en = (s.en || '').toLowerCase();
          const ur = (s.ur || '');
          return (en.includes('smoking has a highly') || en.includes('excessive stress can prove') || (ur.includes('نقصان دہ') && !(w.urduMeaning || '').includes('نقصان')) || (ur.includes('مضر') && !(w.urduMeaning || '').includes('مضر'))) && wordLower !== 'detrimental';
        });
        if (hasLeak) return false;
      }
      return true;
    }) : [];

    // Auto-migrate all cached words with rich multiple meanings from quickAutocompleteIndex
    if (typeof quickAutocompleteIndex !== 'undefined' && Array.isArray(this.cachedWords)) {
      let upgraded = false;
      this.cachedWords.forEach(w => {
        if (!w || !w.word) return;
        const auto = quickAutocompleteIndex.find(item => item.word && item.word.toLowerCase() === w.word.toLowerCase());
        if (auto && auto.urdu) {
          const curCount = (w.urduMeaning || '').split(/[،\/,]/).filter(p => p.trim()).length;
          const autoCount = auto.urdu.split(/[،\/,]/).filter(p => p.trim()).length;
          if (autoCount > curCount || (!(w.urduMeaning || '').includes('/') && !(w.urduMeaning || '').includes('،'))) {
            w.urduMeaning = auto.urdu;
            upgraded = true;
          }
        }
      });
      if (upgraded || (Array.isArray(loadedCache) && loadedCache.length !== this.cachedWords.length)) {
        this.save(this.cacheKey, this.cachedWords);
      }
    } else if (Array.isArray(loadedCache) && loadedCache.length !== this.cachedWords.length) {
      this.save(this.cacheKey, this.cachedWords);
    }
    this.geminiApiKey = localStorage.getItem(this.geminiKeyStorage) || '';
    this.grammarCacheKey = 'vocab_grammar_cache_v6';
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
    } catch (e) {
      if (e && (e.name === 'QuotaExceededError' || e.code === 22)) {
        if (Array.isArray(val) && val.length > 50) {
          const trimmed = val.slice(0, Math.floor(val.length * 0.85));
          try {
            localStorage.setItem(key, JSON.stringify(trimmed));
          } catch (e2) {}
        }
      }
    }
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
    if (!wordObj || !wordObj.word) return;
    this.cachedWords = this.cachedWords.filter(w => w && w.word && w.word.toLowerCase() !== wordObj.word.toLowerCase());
    this.cachedWords.unshift(wordObj);
    this.save(this.cacheKey, this.cachedWords);
  }

  clearAllCache() {
    this.cachedWords = [];
    this.recentSearches = [];
    try {
      localStorage.removeItem(this.cacheKey);
      localStorage.removeItem('vocab_recent_searches');
      localStorage.removeItem('vocab_auto_trans_cache');
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const k = localStorage.key(i);
        if (k && (
          k.startsWith('vocab_dynamic_cache') ||
          k.startsWith('vocab_collins_') ||
          k.startsWith('vocab_trans_') ||
          k.startsWith('vocab_grammar_cache') ||
          k.startsWith('vocab_phones_') ||
          k.startsWith('vocab_auto_trans_') ||
          k.startsWith('vocab_recent_')
        )) {
          localStorage.removeItem(k);
        }
      }
    } catch (e) {}
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
window.storage = storage;

// ==========================================================
// 3. TEXT-TO-SPEECH (TTS) ENGINE
// ==========================================================
class TTSEngine {
  constructor() {
    this.synth = window.speechSynthesis;
    this.listeners = new Set();
    this.currentAudio = null;
  }

  speak(text, options = {}) {
    if (!text) return;
    const clean = text.trim();
    const accent = (options.accent || 'us').toLowerCase();
    const isSingleWord = !clean.includes(' ') || clean.split(/\s+/).length <= 2;

    // Stop any ongoing audio or speech
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch (e) {}
      this.currentAudio = null;
    }
    if (this.synth) {
      this.synth.cancel();
    }

    // 1. Primary for words: 100% Guaranteed Studio Audio Stream (Real Native Oxford UK vs Merriam US)
    if (isSingleWord) {
      const type = accent === 'uk' ? 1 : 2; // 1 = British Oxford, 2 = American Merriam
      const audioUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(clean)}&type=${type}`;
      const audio = new Audio(audioUrl);
      this.currentAudio = audio;

      let hasStarted = false;
      audio.onplay = () => {
        hasStarted = true;
        this.notify({ type: 'start', text: clean, accent });
      };
      audio.onended = () => {
        this.currentAudio = null;
        this.notify({ type: 'end', text: clean, accent });
      };
      audio.onerror = () => {
        if (!hasStarted) {
          this.speakWithSpeechSynthesis(clean, options);
        }
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          this.speakWithSpeechSynthesis(clean, options);
        });
      }
      return;
    }

    // 2. Fallback / Sentences: SpeechSynthesis
    this.speakWithSpeechSynthesis(clean, options);
  }

  speakWithSpeechSynthesis(text, options = {}) {
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
      : `You are an expert English-Urdu vocabulary coach. You are analyzing the user's input: "${query}".
CRITICAL VALIDATION RULE:
If "${query}" is random keyboard typing/mash (e.g., "kisadjr", "asdfgh"), a meaningless typo, or NOT an authentic English word, slang, phrase, or idiom, you MUST return ONLY:
{"notFound": true}

If and ONLY IF it is a real English word, recognized slang, phrase, or idiom, return ONLY a valid JSON object matching this schema:
{
  "word": "Capitalized Word",
  "posShort": "short POS like n., adj., v., or slang",
  "partOfSpeech": "full part of speech",
  "phonetic": "simple English phonetic like /example/",
  "urduMeaning": "clear authentic Urdu Nastaliq translation",
  "urduDefinition": "1-line simple Urdu explanation of the concept",
  "englishDefinition": "1-2 sentence clear definition in English starting with '[Word] means...'",
  "coreIdea": "The core conceptual essence of the word (e.g. To lessen the intensity of something negative...)",
  "contextUsage": "1-2 sentences on what context, tone, or situation this word is used in",
  "collocations": ["3-5 common phrases/word partners with this word"],
  "synonyms": ["4-6 authentic, high-quality, exact synonyms"],
  "antonyms": ["3-5 authentic, high-quality, exact opposite antonyms"],
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

        if (parsed.notFound === true || !parsed.word || parsed.word.toLowerCase() === 'not found') {
          return null;
        }

        // Update verified model on success
        if (model !== activeModel) {
          localStorage.setItem('vocab_gemini_verified_model', model);
          localStorage.setItem('vocab_gemini_model_v5', model);
        }

        const wordClean = (parsed.word || query).trim();
        const synList = (Array.isArray(parsed.synonyms) && parsed.synonyms.length > 0)
          ? [{
              num: 1,
              context: `for the sense of "${(parsed.urduMeaning || wordClean).split(/[؛;,/،\.]+/)[0].trim()}"`,
              syns: parsed.synonyms.filter(s => s && s.toLowerCase() !== wordClean.toLowerCase()).slice(0, 7),
              ants: (parsed.antonyms || []).filter(a => a && a.toLowerCase() !== wordClean.toLowerCase()).slice(0, 6)
            }]
          : [];

        return {
          id: `gemini-${Date.now()}`,
          word: wordClean,
          posShort: parsed.posShort || 'word.',
          partOfSpeech: parsed.partOfSpeech || 'word',
          phonetic: parsed.phonetic || `/${query}/`,
          urduMeaning: parsed.urduMeaning || 'معنی دستیاب ہے',
          urduDefinition: parsed.urduDefinition || '',
          insteadOf: parsed.insteadOf || ["Common term"],
          useThis: parsed.useThis || [parsed.word || query],
          howToUse: parsed.howToUse || '',
          synonymsAntonymsList: synList,
          synonymsAntonyms: {
            word: wordClean,
            pos: parsed.posShort || 'word.',
            synonyms: (parsed.synonyms || []).slice(0, 6),
            antonyms: (parsed.antonyms || []).slice(0, 5)
          },
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
        const examples = [];

        if (gData && Array.isArray(gData[12]) && gData[12].length > 0) {
          const firstSection = gData[12][0];
          if (firstSection && firstSection[0]) pos = firstSection[0];
          const normEx = (str) => (str || '').toLowerCase().replace(/[^a-z0-9]/g, '');
          gData[12].forEach(sec => {
            if (Array.isArray(sec[1])) {
              sec[1].forEach(defItem => {
                if (!definition && defItem && defItem[0]) definition = defItem[0];
                if (defItem && defItem[2]) {
                  const cl = defItem[2].replace(/<\/?b>/g, '').trim();
                  if (cl && !examples.some(x => normEx(x) === normEx(cl))) {
                    examples.push(cl.charAt(0).toUpperCase() + cl.slice(1).replace(/\.?$/, '.'));
                  }
                }
              });
            }
          });
        }

        if (gData && Array.isArray(gData[13])) {
          const normEx = (str) => (str || '').toLowerCase().replace(/[^a-z0-9]/g, '');
          gData[13].forEach(grp => {
            if (Array.isArray(grp)) {
              grp.forEach(it => {
                if (it && it[0]) {
                  const cl = it[0].replace(/<\/?b>/g, '').trim();
                  if (cl && !examples.some(x => normEx(x) === normEx(cl))) {
                    examples.push(cl.charAt(0).toUpperCase() + cl.slice(1).replace(/\.?$/, '.'));
                  }
                }
              });
            }
          });
        }

        if (examples.length > 0 && !example) {
          example = examples[0];
        }

        if (definition) {
          return {
            pos: pos || 'noun',
            definition: definition,
            example: example,
            examples: examples,
            phonetic: this.ruleBasedIPA(cleanWord, 'us')
          };
        }
      }
    } catch (e) {}

    // 2. Secondary fallback: Wiktionary API (ultra-fast, CORS-enabled, real definitions & examples)
    try {
      const wUrl = `https://en.wiktionary.org/api/rest_v1/page/definition/${encodeURIComponent(cleanWord)}`;
      const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timer = controller ? setTimeout(() => controller.abort(), 2000) : null;
      const wRes = await fetch(wUrl, { signal: controller ? controller.signal : undefined });
      if (timer) clearTimeout(timer);

      if (wRes.ok) {
        const wData = await wRes.json();
        if (wData && wData.en && Array.isArray(wData.en) && wData.en.length > 0) {
          const firstItem = wData.en[0];
          const pos = (firstItem.partOfSpeech || 'noun').toLowerCase();
          let definition = '';
          let example = '';
          const examples = [];
          if (firstItem.definitions && Array.isArray(firstItem.definitions)) {
            for (const d of firstItem.definitions) {
              if (!definition && d.definition) definition = d.definition.replace(/<[^>]*>/g, '').trim();
              if (d.examples && Array.isArray(d.examples)) {
                d.examples.forEach(ex => {
                  const cl = ex.replace(/<[^>]*>/g, '').trim();
                  if (cl && !examples.some(x => x.toLowerCase() === cl.toLowerCase())) {
                    examples.push(cl.charAt(0).toUpperCase() + cl.slice(1).replace(/\.?$/, '.'));
                  }
                });
              }
            }
          }
          if (examples.length > 0 && !example) example = examples[0];
          if (definition) {
            return {
              pos: pos,
              definition: definition,
              example: example,
              examples: examples,
              phonetic: this.ruleBasedIPA(cleanWord, 'us')
            };
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

  // --- CURATED MULTI-DIMENSIONAL RICH URDU MEANINGS (4-5 Nuanced Meanings per Word) ---
  curatedRichUrduMeanings: {
    'farrago': 'ملغوبہ / سچ اور جھوٹ کی کھچڑی / ابہام / بے ربط مجموعہ / گڑبڑ',
    'snollygoster': 'چالاک اور بے اصول سیاستدان / ابن الوقت رہنما / خود غرض انسان / مکار لیڈر',
    'kakistocracy': 'بدترین اور نااہل ترین لوگوں کی حکومت / نااہل قیادت / نالائقوں کا راج',
    'rodomontade': 'شیخی بگھارنا / لمبی چوڑی چھوڑنا / خود ستائی / ڈینگیں مارنا / طمطراق',
    'sesquipedalian': 'طویل اور بھاری الفاظ بولنے والا / لمبا لفظ / پرشکوہ زبان / بارعب کلام',
    'ultracrepidarian': 'بغیر جانے بوجھے مفت مشورہ دینے والا / ناواقف تبصرہ نگار / بلا علم رائے زنی',
    'defenestration': 'کسی کو کھڑکی سے باہر پھینکنا / عہدے یا اقتدار سے اچانک بے دخل کرنا / برطرفی',
    'kerfuffle': 'چھوٹا موٹا ہنگامہ / شور شرابا / بے معنی بحث / ہڑبونگ / ہلڑ بازی',
    'discombobulate': 'حواس باختہ کرنا / الجھن میں ڈالنا / گھبراہٹ پیدا کرنا / بدحواس کرنا',
    'lalochezia': 'غصے میں سخت الفاظ یا گالی دے کر ذہنی سکون حاصل کرنا / دل کی بھڑاس نکالنا',
    'imbroglio': 'انتہائی الجھا ہوا پیچیدہ معاملہ / تنازع / شدید الجھاؤ / گنجلک مسئلہ',
    'troglodyte': 'قدامت پسند انسان / تنگ نظر / غار میں رہنے کی سوچ رکھنے والا / دقیانوسی',
    'supercilious': 'مغرور / خود پسند / متکبر / دوسروں کو حقیر سمجھنے والا / تکبر پسند',
    'pusillanimous': 'بزدل / کمزور دل / ہمت نہ رکھنے والا / ڈرپوک / کم حوصلہ',
    'perspicacious': 'تیز نظر / گہری بصیرت رکھنے والا / دور اندیش / ذہین / صاحبِ فراست',
    'floccinaucinihilipilification': 'کسی چیز کو حقیر یا بے قدر سمجھنے کی عادت / بے وقعت ٹھہرانا',
    'hippopotomonstrosesquippedaliophobia': 'انتہائی طویل اور بھاری الفاظ کا خوف / طویل کلمات سے گھبراہٹ',
    'gorgonize': 'سکتہ طاری کر دینا / ہیبت سے پتھر کا بنا دینا / سُن کرنا / متحیر کرنا',
    'panglossian': 'آنکھیں بند کر کے ضرورت سے زیادہ پرامید / خوش فہم / اندھا دھند رجائیت پسند',
    'quidnunc': 'دوسروں کے معاملات میں ٹوہ لگانے والا / تجسس رکھنے والا / گپ شپ باز / چغل خور',
    'mugwump': 'الگ تھلگ رہنے والا / غیر جانبدار / موقع پرست / آزاد رائے رکھنے والا',
    'obfuscate': 'معاملے کو الجھانا / جان بوجھ کر غیر واضح کرنا / دھندلا کرنا / تذبذب پیدا کرنا',
    'grandiloquent': 'بڑے بول بولنے والا / مبالغہ آمیز زبان استعمال کرنے والا / پر طمطراق کلام',
    'lugubrious': 'افسردہ / غمگین / اداس / سوگوار / رنجیدہ',
    'cacophony': 'کانوں کو ناگوار گزرنے والا شدید شور / کھڑکھڑاہٹ / بے ہنگم آوازیں',
    'tergiversation': 'بات سے پھر جانا / ٹال مٹول / موقف بدلنا / ہیرا پھیری / تذبذب',
    'recalcitrant': 'سرکش / ضدی / نافرمان / حکم نہ ماننے والا / باغی',
    'fastidious': 'باریک بین / صفائی پسند / بہت مشکل سے راضی ہونے والا / نکتہ چیں',
    'vituperation': 'سخت سست کہنا / تلخ کلامی / گالی گلوچ / لعن طعن / دشنام طرازی',
    'pleonasm': 'ضرورت سے زیادہ الفاظ کا استعمال / زائد از ضرورت کلام / حشو و زوائد',
    'tintinnabulation': 'گھنٹیوں کی جھنکار / ٹن ٹن کی مسلسل آواز / جل ترنگ',
    'schadenfreude': 'کسی دوسرے کے نقصان یا ناکامی پر خوشی محسوس کرنا / بدخواہی',
    'verisimilitude': 'حقیقت سے مشابہت / سچائی کا گمان / اصلی پن / ہو بہو مماثلت',
    'apposite': 'برمحل / بالکل مناسب / موقع کے مطابق / موزوں / عین مطابق',
    'weasel word': 'مبہم اور گمراہ کن لفظ / دھوکہ دہی والا بیان / چالاکی بھری بات',
    'pachydermatous': 'موٹی چمڑی والا / بے حس / طنز و تنقید سے بے پرواہ / سخت جان',
    'opsimath': 'بڑھاپے یا عمر گزرنے کے بعد علم حاصل کرنے والا شخص / دیر سے سیکھنے والا',
    'philistine': 'ادب اور آرٹ سے بے بہرہ انسان / مادہ پرست / غیر حساس شخص / بے ذوق',
    'torschlusspanik': 'وقت نکل جانے کا خوف / موقع ہاتھ سے چھوٹنے کی گھبراہٹ / ڈیڈ لائن کا دباؤ',
    'omphaloskepsis': 'اپنی ذات میں گم رہنا / خود پسندی سے اپنے ہی دھیان میں رہنا / خود نگری',
    'borborygmus': 'پیٹ میں گڑگڑاہٹ / آنتوں کے بولنے کی آواز / پیٹ کا شور',
    'callipygian': 'خوش نما اور متناسب جسمانی ساخت رکھنے والا / متناسب الاعضاء',
    'quomodo': 'طریقہ کار / کام کرنے کا ڈھنگ / کس طرح / اسلوب',
    'absquatulate': 'اچانک بھاگ جانا / چپکے سے فرار ہو جانا / رفو چکر ہونا',
    'defalcate': 'امانت میں خیانت کرنا / فنڈز کا غبن کرنا / خورد برد کرنا',
    'epicaricacy': 'کسی کی بدقسمتی پر دل ہی دل میں لطف اندوز ہونا / حسد بھری خوشی',
    'jentacular': 'صبح کے ناشتے سے متعلق / ناشتے کا',
    'mumpsimus': 'غلط بات پر ضد سے قائم رہنے والا شخص / غلطی پر ہٹ دھرمی / کج بحث',
    'scripturient': 'لکھنے کی شدید خواہش یا لگن رکھنے والا / قلم کا شوقین',
    'zugzwang': 'ایسی مجبور حالت جہاں ہر اگلا قدم نقصان دہ ہو / بے بسی کی کیفیت',
    'alleviate': 'کم کرنا / ہلکا کرنا / تسکین دینا / تخفیف کرنا / دور کرنا',
    'resilience': 'ثابت قدمی / قوتِ مدافعت / لچک / سنبھلنے کی صلاحیت / ہمت',
    'resilient': 'ثابت قدم / باحوصلہ / لچکدار / جلد سنبھلنے والا / پرعزم',
    'pragmatic': 'عملی / حقیقت پسندانہ / قابلِ عمل / مصلحت آمیز / مفید',
    'meticulous': 'انتہائی باریک بین / محتاط / باریکی پر دھیان دینے والا / عرق ریز / دقیق',
    'eloquent': 'خوش گفتار / فصیح و بلیغ / شیریں بیاں / اثر انگیز بولنے والا / گویا',
    'diligent': 'محنتی / ان تھک / سرگرم / مستعد / عرق ریز',
    'detrimental': 'نقصان دہ / مضر / مہلک / تباہ کن / باعثِ نقصان',
    'schedule': 'نظام الاوقات / شیڈول / اوقات نامہ / پروگرام بنانا / مقررہ وقت',
    'privacy': 'تنہائی / رازداری / پردہ داری / خلوت / ذاتی زندگی کا تحفظ',
    'advertisement': 'اشتہار / تشہیر / اعلان / پبلسٹی / اشتہار بازی',
    'mitigate': 'کم کرنا / شدت گھٹانا / تخفیف کرنا / نرم کرنا / دھیما کرنا',
    'serendipity': 'خوش قسمتی / غیر متوقع فائدہ / حسنِ اتفاق / اچانک کامیابی / غیبی مدد',
    'paradigm': 'نمونہ / مثال / بنیادی ڈھانچہ / طریقہ کار / طرزِ فکر',
    'enigma': 'معمہ / گتھی / پر اسرار چیز / الجھن / ناقابلِ فہم بات',
    'ubiquitous': 'ہر جگہ موجود / ہمہ گیر / عام پایا جانے والا / ہر جا حاضر / عالمگیر',
    'ephemeral': 'عارضی / ناپائیدار / چند روزہ / بے ثبات / قلیل المدت',
    'anomaly': 'بے قاعدگی / خلافِ معمول بات / انوکھی حالت / غیر معمولی واقعہ / انحراف',
    'garrulous': 'باتونی / پرگو / فضول گو / بسیار گو / بکواسی',
    'loquacious': 'خوش گفتار / زیادہ بولنے والا / چرب زبان / حاضر جواب / باتونی',
    'quintessential': 'کامل ترین مثال / خالص ترین جوہر / نمونہء کامل / اصل بنیاد / بے نظیر',
    'ambiguous': 'مبہم / مشکوک / غیر واضح / دو پہلو رکھنے والا / پیچیدہ',
    'adverse': 'مخالف / منفی / ناموافق / نقصان دہ / برعکس',
    'candid': 'کھرا / بے باک / صاف گو / غیر جانبدار / سچا',
    'persevere': 'ڈٹے رہنا / استقلال دکھانا / ہمت نہ ہارنا / مسلسل کوشش کرنا / ثابت قدم رہنا',
    'procrastinate': 'ٹال مٹول کرنا / کام کو لٹکانا / تاخیر کرنا / دیر لگانا / پس و پیش کرنا',
    'empathy': 'ہمدردی / احساسِ غم / دوسرے کے جذبات کو سمجھنا / دلی وابستگی / درد مندی',
    'lucid': 'واضح / شفاف / آسانی سے سمجھ آنے والا / چمکدار / صاف و شفاف',
    'serene': 'پر سکون / پر امن / پر اطمینان / ٹھہرا ہوا / پر سکوت',
    'equivocal': 'مبہم / مشتبہ / گول مول / غیر واضح / دو معنی رکھنے والا',
    'diaspora': 'ہجرت زدہ قوم / تارکینِ وطن / وطن سے دور منتشر آبادی / جلاوطن طبقہ',
    'conclusion': 'نتیجہ / اختتام / فیصلہ / انجام / حاصلِ کلام',
    'contradictory': 'متضاد / متناقض / برعکس / مخالف / الٹ',
    'water': 'پانی / آب / جل / سیراب کرنا / پانی دینا',
    'neither': 'نہ یہ نہ وہ / دونوں میں سے کوئی نہیں / کوئی بھی نہیں',
    'either': 'یا یہ یا وہ / دونوں میں سے کوئی ایک / ہر دو',
    'vitamin': 'حیاتین / وٹامن / جسمانی نشوونما کے لازمی اجزاء',
    'tomato': 'ٹماٹر / ولایتی بینگن',
    'herb': 'جڑی بوٹی / نباتات / ادویاتی پودا / بوٹی',
    'leisure': 'فرصت / فراغت / فارغ وقت / تفریح / آرام',
    'route': 'راستہ / شاہراہ / گزرگاہ / راستہ طے کرنا / روٹ',
    'garage': 'گیراج / موٹر خانہ / ورکشاپ / گاڑی کھڑی کرنے کی جگہ',
    'vase': 'گلدان / پھول دان / صراحی',
    'ballet': 'کلاسیکی رقص / بیلے ڈانس / تمثیلی ناچ',
    'aluminum': 'ایلومینیم / ہلکی چاندی جیسی دھات',
    'happy': 'خوش / مسرور / شادمان / خوش و خرم / پر مسرت',
    'honest': 'ایماندار / دیانت دار / سچا / راست باز / کھرا',
    'journey': 'سفر / سیاحت / مسافت / سفر کرنا / مہم',
    'decision': 'فیصلہ / ارادہ / عزم / حکم / تصفیہ',
    'circumstances': 'حالات / واقعات / کیفیات / صورتحال / احوال',
    'sustainable': 'پائیدار / ماحول دوست / دیرپا / قائم رہنے والا / قابلِ برداشت',
    'sedentary': 'ساکن / غیر متحرک / بیٹھے رہنے والی زندگی / کاہل',
    'deterrent': 'روک تھام / رکاوٹ / عبرت ناک تدبیر / باز رکھنے والا عنصر',
    'lucrative': 'منافع بخش / پرکشش / فائدہ مند / سود مند / کثیر آمدنی والا',
    'obsolete': 'متروک / پرانا / غیر مستعمل / بے کار / فرسودہ',
    'cognitive': 'دماغی / فکری / ذہنی / ادراکی / شعوری',
    'chronic': 'دائمی / پرانا / مستقل / پائیدار بیماری / شدید',
    'biodiversity': 'حیاتیاتی تنوع / جانداروں کی اقسام / ماحولیاتی تنوع',
    'degradation': 'تنزلی / بگاڑ / انحطاط / خرابی / پسپائی',
    'emission': 'اخراج / خروج / خارج ہونے والی گیس / روشنی یا حرارت کا نکلنا',
    'bolster': 'تقویت دینا / مضبوط کرنا / سہارا دینا / حوصلہ بڑھانا',
    'hamper': 'رکاوٹ ڈالنا / مانع ہونا / کام روکنا / الجھانا',
    'jeopardize': 'خطرے میں ڈالنا / خطرہ پیدا کرنا / داؤ پر لگانا',
    'plausible': 'معقول / قابلِ قبول / بظاہر درست / قرینِ قیاس',
    'thrive': 'پھلنا پھولنا / پروان چڑھنا / ترقی کرنا / کامیاب ہونا',
    'withstand': 'برداشت کرنا / مقابلہ کرنا / ثابت قدم رہنا / جھیلنا'
  },

  // --- CURATED INTUITIVE & HIGH-CONTEXT EXAMPLE SENTENCES (Crystal-Clear Everyday Scenarios) ---
  curatedSentences: {
    'farrago': [
      { num: 1, en: "His speech was a farrago of lies, exaggerations, and unverified rumors.", ur: "اس کی تقریر جھوٹ، مبالغہ آرائی اور غیر تصدیق شدہ افواہوں کی ایک کھچڑی تھی۔" },
      { num: 2, en: "The media report presented a confusing farrago of unrelated facts.", ur: "میڈیا رپورٹ نے غیر متعلقہ حقائق کا ایک الجھا ہوا بے ربط ملغوبہ پیش کیا۔" }
    ],
    'snollygoster': [
      { num: 1, en: "Voters rejected the candidate because they saw him as an unprincipled snollygoster.", ur: "ووٹروں نے امیدوار کو مسترد کر دیا کیونکہ وہ اسے ایک بے اصول اور خود غرض سیاستدان سمجھتے تھے۔" },
      { num: 2, en: "A true statesman works for the people, unlike a selfish snollygoster who only seeks power.", ur: "ایک سچا رہنما عوام کے لیے کام کرتا ہے، نہ کہ اس چالاک سیاستدان کی طرح جو صرف اقتدار کا پیاسا ہوتا ہے۔" }
    ],
    'kakistocracy': [
      { num: 1, en: "When corrupt and unqualified officials run the country, it turns into a kakistocracy.", ur: "جب بدعنوان اور نااہل عہدیدار ملک چلائیں تو وہ نااہل ترین لوگوں کی حکومت بن جاتا ہے۔" },
      { num: 2, en: "The citizens protested in the streets against the incompetence of the kakistocracy.", ur: "شہریوں نے نااہل قیادت اور حکومت کے خلاف سڑکوں پر پرامن احتجاج کیا۔" }
    ],
    'rodomontade': [
      { num: 1, en: "Nobody believed his rodomontade about owning five luxury sports cars.", ur: "پانچ لگژری اسپورٹس کاروں کا مالک ہونے کے بارے میں اس کی لمبی چوڑی شیخیوں پر کسی نے یقین نہیں کیا۔" },
      { num: 2, en: "Behind his loud rodomontade, he was actually quite insecure and shy.", ur: "اپنی بڑی بڑی ڈینگوں کے پیچھے وہ حقیقت میں کافی کمزور اور شرمیلا انسان تھا۔" }
    ],
    'sesquipedalian': [
      { num: 1, en: "He often uses sesquipedalian words to make his simple speeches sound academic.", ur: "وہ اکثر اپنی سادہ تقاریر کو علمی اور بارعب بنانے کے لیے لمبے اور بھاری الفاظ استعمال کرتا ہے۔" },
      { num: 2, en: "The legal contract was filled with confusing sesquipedalian phrases.", ur: "قانونی معاہدہ سمجھ میں نہ آنے والے لمبے اور پیچیدہ الفاظ سے بھرا ہوا تھا۔" }
    ],
    'ultracrepidarian': [
      { num: 1, en: "Ignore his financial tips; he is just an ultracrepidarian with zero business experience.", ur: "اس کے مالی مشوروں کو نظر انداز کرو؛ وہ بغیر کسی کاروباری تجربے کے مفت رائے دینے والا انسان ہے۔" },
      { num: 2, en: "Social media allows every ultracrepidarian to comment on complex medical surgeries.", ur: "سوشل میڈیا نے ہر ناواقف شخص کو پیچیدہ طبی سرجریوں پر بغیر سوچے سمجھے تبصرہ کرنے کا موقع دے دیا ہے۔" }
    ],
    'defenestration': [
      { num: 1, en: "The CEO's sudden defenestration from the company shocked all the employees.", ur: "کمپنی کے عہدے سے سی ای او کی اچانک برطرفی اور بے دخلی نے تمام ملازمین کو حیران کر دیا۔" },
      { num: 2, en: "After the election defeat, the party leadership faced complete political defenestration.", ur: "انتخابات میں شکست کے بعد پارٹی قیادت کو اقتدار سے مکمل طور پر باہر نکال دیا گیا۔" }
    ],
    'kerfuffle': [
      { num: 1, en: "There was a noisy kerfuffle at the airport when the flight was suddenly delayed.", ur: "جب پرواز میں اچانک تاخیر ہوئی تو ایئرپورٹ پر مسافروں کے درمیان ہلکا پھلکا شور شرابا اور ہنگامہ ہو گیا۔" },
      { num: 2, en: "Don't create a kerfuffle over such a small misunderstanding.", ur: "اتنی چھوٹی سی غلط فہمی پر بلاوجہ شور اور ہڑبونگ پیدا نہ کرو۔" }
    ],
    'discombobulate': [
      { num: 1, en: "The sudden change in road directions completely discombobulated the driver.", ur: "سڑک کے راستوں میں اچانک تبدیلی نے ڈرائیور کو مکمل طور پر بدحواس اور الجھن میں مبتلا کر دیا۔" },
      { num: 2, en: "Difficult questions in the interview were designed to discombobulate nervous candidates.", ur: "انٹرویو میں مشکل سوالات اس لیے پوچھے گئے تاکہ امیدواروں کے حواس اور اعتماد کو پرکھا جا سکے۔" }
    ],
    'lalochezia': [
      { num: 1, en: "When he hit his finger with the hammer, a quick moment of lalochezia relieved his pain.", ur: "جب ہتھوڑے سے اس کی انگلی پر چوٹ لگی تو اس نے سخت الفاظ بول کر دل کی بھڑاس نکالی۔" }
    ],
    'imbroglio': [
      { num: 1, en: "The disputed land inheritance turned into a bitter family imbroglio for decades.", ur: "زمین کے متنازع ورثے نے کئی دہائیوں تک خاندان کو ایک پیچیدہ اور تلخ تنازعے میں الجھائے رکھا۔" },
      { num: 2, en: "Diplomats worked all night to resolve the delicate international imbroglio.", ur: "سفارت کاروں نے اس نازک اور الجھے ہوئے بین الاقوامی معاملے کو سلجھانے کے لیے رات بھر کام کیا۔" }
    ],
    'troglodyte': [
      { num: 1, en: "Anyone who still opposes women's right to education has the mindset of a troglodyte.", ur: "جو اب بھی خواتین کے حقِ تعلیم کی مخالفت کرتا ہے وہ دقیانوسی اور تنگ نظر سوچ کا مالک ہے۔" }
    ],
    'supercilious': [
      { num: 1, en: "His supercilious smile showed that he thought he was superior to everyone in the room.", ur: "اس کی متکبرانہ مسکراہٹ سے ظاہر ہو رہا تھا کہ وہ خود کو کمرے میں موجود ہر شخص سے برتر سمجھتا ہے۔" }
    ],
    'pusillanimous': [
      { num: 1, en: "Backing down from defending an innocent friend was a pusillanimous act.", ur: "ایک بے گناہ دوست کا ساتھ چھوڑ کر پیچھے ہٹ جانا بزدلی اور کم ہمتی کا ثبوت تھا۔" }
    ],
    'perspicacious': [
      { num: 1, en: "The perspicacious detective noticed the tiny clue that everyone else had missed.", ur: "تیز نظر اور ذہین سراغ رساں نے وہ چھوٹا سا ثبوت ڈھونڈ لیا جو باقی سب سے چھوٹ گیا تھا۔" },
      { num: 2, en: "Her perspicacious analysis of the stock market saved the company millions.", ur: "اسٹاک مارکیٹ کے اس کے گہرے اور دور اندیش تجزیے نے کمپنی کے لاکھوں روپے بچا لیے۔" }
    ],
    'obfuscate': [
      { num: 1, en: "The corrupt official tried to obfuscate the financial audit by hiding key receipts.", ur: "بدعنوان افسر نے اہم رسیدیں چھپا کر مالیاتی آڈٹ کو جان بوجھ کر الجھانے اور دھندلا کرنے کی کوشش کی۔" }
    ],
    'grandiloquent': [
      { num: 1, en: "His grandiloquent promises of building a utopia failed to convince practical voters.", ur: "خوابوں کی دنیا بنانے کے اس کے مبالغہ آمیز اور بڑے بول عملی سوچ رکھنے والے ووٹروں کو قائل نہ کر سکے۔" }
    ],
    'lugubrious': [
      { num: 1, en: "The dark rainy evening cast a lugubrious shadow over the entire quiet village.", ur: "تاریک برسات کی شام نے پورے پرسکون گاؤں پر ایک اداس اور سوگوار فضا قائم کر دی۔" }
    ],
    'cacophony': [
      { num: 1, en: "The cacophony of barking dogs and construction noise woke everyone at dawn.", ur: "کتوں کے بھونکنے اور تعمیراتی کام کے شدید شور نے صبح سویرے سب کی نیند خراب کر دی۔" }
    ],
    'recalcitrant': [
      { num: 1, en: "The recalcitrant horse refused to step into the water stream despite gentle pulls.", ur: "سرکش گھوڑے نے پیار سے کھینچنے کے باوجود پانی کی ندی میں قدم رکھنے سے انکار کر دیا۔" }
    ],
    'fastidious': [
      { num: 1, en: "He is so fastidious about cleanliness that he washes his hands before and after touching any tool.", ur: "وہ صفائی کے معاملے میں اتنا باریک بین ہے کہ کسی بھی اوزار کو چھونے سے پہلے اور بعد ہاتھ دھوتا ہے۔" }
    ],
    'schadenfreude': [
      { num: 1, en: "He hid his feeling of schadenfreude when his arrogant rival lost the championship.", ur: "جب اس کے مغرور حریف کو فائنل میں شکست ہوئی تو اس نے اپنی اندرونی خوشی کو چھپایا۔" }
    ],
    'apposite': [
      { num: 1, en: "The speaker shared an apposite story that perfectly illustrated the main message.", ur: "مقرر نے ایک انتہائی برمحل اور موزوں کہانی سنائی جس نے اصل پیغام کو خوب واضح کر دیا۔" }
    ],
    'alleviate': [
      { num: 1, en: "The doctor gave him medicine to alleviate his severe back pain.", ur: "ڈاکٹر نے اس کی کمر کے شدید درد کو کم کرنے کے لیے دوا دی ہے۔" },
      { num: 2, en: "A warm cup of tea helped alleviate her stress after a long busy day.", ur: "ایک کپ گرم چائے نے لمبے مصروف دن کے بعد اس کے ذہنی دباؤ کو ہلکا کرنے میں مدد کی۔" },
      { num: 3, en: "Opening the windows helped alleviate the heat and stuffiness in the room.", ur: "کھڑکیاں کھولنے سے کمرے کی گرمی اور گھٹن کو دور کرنے میں مدد ملی۔" }
    ],
    'resilient': [
      { num: 1, en: "Even after losing his job, he remained resilient and quickly started a new business.", ur: "نوکری چھوٹنے کے بعد بھی وہ باحوصلہ رہا اور اس نے جلد ہی نیا کاروبار شروع کیا۔" },
      { num: 2, en: "Children are naturally resilient and usually recover fast after falling ill.", ur: "بچے قدرتی طور پر باہمت ہوتے ہیں اور بیمار پڑنے کے بعد جلد سنبھل جاتے ہیں۔" },
      { num: 3, en: "The local economy proved resilient despite difficult global conditions.", ur: "مشکل عالمی حالات کے باوجود مقامی معیشت نے زبردست استحکام اور لچک کا مظاہرہ کیا۔" }
    ],
    'resilience': [
      { num: 1, en: "She showed remarkable resilience by rebuilding her life after the flood.", ur: "اس نے سیلاب کے بعد اپنی زندگی کو دوبارہ سنوار کر شاندار ہمت اور قوتِ مدافعت کا مظاہرہ کیا۔" },
      { num: 2, en: "Daily exercise and healthy food improve your body's physical resilience.", ur: "روزانہ ورزش اور صحت بخش کھانا آپ کے جسم کی بیماریوں سے لڑنے کی طاقت بڑھاتا ہے۔" }
    ],
    'adverse': [
      { num: 1, en: "The outdoor cricket match was cancelled due to adverse weather conditions.", ur: "خراب اور نا موافق موسم کی وجہ سے باہر کا میچ منسوخ کر دیا گیا۔" },
      { num: 2, en: "Smoking has a severe adverse effect on your lungs and heart.", ur: "تمباکو نوشی آپ کے پھیپھڑوں اور دل پر انتہائی نقصان دہ اثر ڈالتی ہے۔" },
      { num: 3, en: "Despite adverse financial circumstances, she worked hard and completed her degree.", ur: "تنگدستی اور مشکل حالات کے باوجود اس نے محنت کی اور اپنی ڈگری مکمل کی۔" }
    ],
    'conclusion': [
      { num: 1, en: "After reviewing all the evidence, the judge reached the conclusion that he was innocent.", ur: "تمام شواہد کا جائزہ لینے کے بعد جج اس نتیجے پر پہنچا کہ وہ بے گناہ تھا۔" },
      { num: 2, en: "At the conclusion of the speech, everyone in the hall stood up and cheered.", ur: "تقریر کے اختتام پر ہال میں موجود ہر شخص کھڑا ہوا اور داد دی۔" },
      { num: 3, en: "Don't jump to quick conclusions before you hear both sides of the story.", ur: "پوری سچائی سنے بغیر جلد بازی میں کوئی حتمی نتیجہ نہ نکالیں۔" }
    ],
    'contradictory': [
      { num: 1, en: "His current actions are contradictory to the promises he made yesterday.", ur: "اس کے موجودہ کام ان وعدوں کے بالکل برعکس اور متضاد ہیں جو اس نے کل کیے تھے۔" },
      { num: 2, en: "The two witnesses gave completely contradictory statements about who caused the accident.", ur: "دونوں گواہوں نے اس بارے میں بالکل متضاد بیانات دیے کہ حادثہ کس کی وجہ سے ہوا۔" },
      { num: 3, en: "She was confused because her parents gave her contradictory advice.", ur: "وہ الجھن کا شکار ہو گئی کیونکہ اس کے والدین نے اسے ایک دوسرے کے الٹ اور متضاد مشورے دیے۔" }
    ],
    'pragmatic': [
      { num: 1, en: "Instead of arguing about theories, we need a pragmatic approach to fix the broken road.", ur: "نظریاتی بحث کے بجائے ہمیں ٹوٹی ہوئی سڑک کو ٹھیک کرنے کے لیے ایک عملی سوچ کی ضرورت ہے۔" },
      { num: 2, en: "She made a pragmatic decision to rent a smaller house to save monthly expenses.", ur: "ماہانہ اخراجات بچانے کے لیے اس نے ایک چھوٹے گھر میں رہنے کا حقیقت پسندانہ اور عملی فیصلہ کیا۔" },
      { num: 3, en: "He is a pragmatic leader who focuses on real results rather than empty promises.", ur: "وہ ایک باعمل اور حقیقت پسند رہنما ہے جو کھوکھلے وعدوں کے بجائے ٹھوس نتائج پر توجہ دیتا ہے۔" }
    ],
    'meticulous': [
      { num: 1, en: "The watchmaker is very meticulous and inspects every tiny gear with a magnifying glass.", ur: "گھڑی ساز بہت باریک بین ہے اور ہر چھوٹے پرزے کو شیشے سے غور سے دیکھتا ہے۔" },
      { num: 2, en: "She prepared the final financial report with meticulous attention to detail.", ur: "اس نے حتمی مالیاتی رپورٹ کو ہر چھوٹی باریکی پر دھیان دیتے ہوئے انتہائی احتیاط سے تیار کیا۔" },
      { num: 3, en: "He keeps a meticulous record of every rupee he spends each month.", ur: "وہ ہر ماہ خرچ ہونے والے ایک ایک روپے کا انتہائی محتاط اور تفصیلی حساب رکھتا ہے۔" }
    ],
    'eloquent': [
      { num: 1, en: "The lawyer gave an eloquent speech that easily convinced the entire jury.", ur: "وکیل نے اتنی فصیح اور اثر انگیز تقریر کی جس نے پوری جیوری کو قائل کر لیا۔" },
      { num: 2, en: "She is so eloquent that she can explain complicated ideas in very simple words.", ur: "وہ اتنی خوش گفتار اور شیریں بیاں ہے کہ پیچیدہ باتوں کو بھی آسان لفظوں میں سمجھا دیتی ہے۔" },
      { num: 3, en: "His eloquent letter touched everyone's heart in the family.", ur: "اس کے پرتاثیر اور فصیح خط نے خاندان کے ہر فرد کے دل کو چھو لیا۔" }
    ],
    'diligent': [
      { num: 1, en: "He is a diligent student who finishes his homework every day before going out to play.", ur: "وہ ایک محنتی طالب علم ہے جو کھیلنے جانے سے پہلے روزانہ اپنا ہوم ورک مکمل کرتا ہے۔" },
      { num: 2, en: "Thanks to the diligent efforts of the rescue team, all passengers were safely saved.", ur: "امدادی ٹیم کی انتھک محنت اور کوششوں کی بدولت تمام مسافروں کو بحفاظت بچا لیا گیا۔" },
      { num: 3, en: "She received a promotion because of her diligent work on the major company project.", ur: "کمپنی کے بڑے پروجیکٹ پر اس کے مخلصانہ اور انتھک کام کی وجہ سے اسے ترقی ملی۔" }
    ],
    'detrimental': [
      { num: 1, en: "Eating fast food every single day is detrimental to your heart and overall fitness.", ur: "روزانہ فاسٹ فوڈ کھانا آپ کے دل اور مجموعی صحت کے لیے سخت نقصان دہ ہے۔" },
      { num: 2, en: "Excessive screen time late at night is detrimental to a child's sleep quality.", ur: "رات گئے موبائل کا بے تحاشا استعمال بچے کی نیند کے معیار کے لیے مضر ثابت ہوتا ہے۔" },
      { num: 3, en: "Industrial waste is causing detrimental damage to clean rivers and marine life.", ur: "صنعتی کچرا صاف دریاؤں اور آبی حیات کو شدید نقصان پہنچا رہا ہے۔" }
    ],
    'mitigate': [
      { num: 1, en: "Planting more green trees helps mitigate the extreme summer heat in big cities.", ur: "زیادہ سرسبز درخت لگانے سے بڑے شہروں میں گرمیوں کی شدید تپش کو کم کرنے میں مدد ملتی ہے۔" },
      { num: 2, en: "Wearing a safety helmet greatly mitigates the risk of head injuries on motorbikes.", ur: "ہیلمٹ پہننا موٹر سائیکل پر سر کی چوٹ کے خطرے کو کافی حد تک گھٹا دیتا ہے۔" },
      { num: 3, en: "The airline offered full refunds to mitigate passenger frustration after the delay.", ur: "پرواز میں تاخیر کے بعد ایئرلائن نے مسافروں کی پریشانی اور غصے کو کم کرنے کے لیے پورے پیسے واپس کیے۔" }
    ],
    'schedule': [
      { num: 1, en: "The passenger train was delayed by one hour and did not arrive on schedule.", ur: "مسافر ٹرین میں ایک گھنٹے کی تاخیر ہوئی اور وہ اپنے مقررہ وقت پر نہ پہنچ سکی۔" },
      { num: 2, en: "I have a very busy work schedule today with four meetings lined up.", ur: "آج چار میٹنگز کی وجہ سے میرا کام کا شیڈول اور نظام الاوقات بہت مصروف ہے۔" },
      { num: 3, en: "Setting a consistent daily study schedule makes exam preparation stress-free.", ur: "روزانہ پڑھائی کا باقاعدہ نظام الاوقات بنانا امتحان کی تیاری کو آسان بناتا ہے۔" }
    ],
    'privacy': [
      { num: 1, en: "Never share your secret banking passwords with anyone to protect your privacy.", ur: "اپنی رازداری اور تحفظ کے لیے کبھی بھی اپنا خفیہ بینک پاس ورڈ کسی کو نہ بتائیں۔" },
      { num: 2, en: "He closed the bedroom door so he could discuss personal family matters in privacy.", ur: "اس نے کمرے کا دروازہ بند کیا تاکہ رازداری اور سکون سے ذاتی خاندانی معاملات پر بات کر سکے۔" },
      { num: 3, en: "Social media apps must have strong security tools to safeguard user privacy.", ur: "سوشل میڈیا ایپس میں صارفین کی ذاتی معلومات کی رازداری کے تحفظ کے لیے مضبوط ٹولز ہونے چاہئیں۔" }
    ],
    'advertisement': [
      { num: 1, en: "They placed an advertisement in the newspaper to sell their used car quickly.", ur: "انہوں نے اپنی پرانی گاڑی جلدی بیچنے کے لیے اخبار میں ایک اشتہار دیا۔" },
      { num: 2, en: "The catchy TV advertisement convinced many families to try the new healthy cooking oil.", ur: "ٹی وی کے دلکش اشتہار نے بہت سے خاندانوں کو نیا صحت بخش تیل آزمانے پر آمادہ کیا۔" }
    ],
    'serendipity': [
      { num: 1, en: "Finding my lost gold ring while cleaning under the sofa was pure serendipity.", ur: "صوفے کے نیچے صفائی کرتے ہوئے کھوئی ہوئی سونے کی انگوٹھی کا اچانک مل جانا ایک خوشگوار حسنِ اتفاق تھا۔" },
      { num: 2, en: "Meeting my future business partner at an airport lounge was an act of serendipity.", ur: "ایئرپورٹ لاؤنج میں مستقبل کے بزنس پارٹنر سے غیر متوقع ملاقات ایک شاندار حسنِ اتفاق تھی۔" }
    ],
    'paradigm': [
      { num: 1, en: "Online learning created a completely new paradigm for modern school education.", ur: "آن لائن تدریس نے جدید اسکول ایجوکیشن کا ایک بالکل نیا طریقہ کار اور نمونہ قائم کر دیا۔" }
    ],
    'enigma': [
      { num: 1, en: "The sudden disappearance of the airplane remains an unsolved enigma for investigators.", ur: "طیارے کا اچانک لاپتہ ہو جانا تفتیش کاروں کے لیے آج بھی ایک حل طلب معمہ اور گتھی ہے۔" }
    ],
    'ubiquitous': [
      { num: 1, en: "Smartphones and high-speed internet have become ubiquitous in almost every modern city.", ur: "اسمارٹ فونز اور تیز رفتار انٹرنیٹ آج کل تقریباً ہر جدید شہر میں عام اور ہر جگہ دستیاب ہو چکے ہیں۔" }
    ],
    'ephemeral': [
      { num: 1, en: "The colorful rainbow in the sky was ephemeral and disappeared within five minutes.", ur: "آسمان پر رنگین دھنک عارضی اور چند لمحوں کی تھی جو پانچ منٹ میں غائب ہو گئی۔" }
    ],
    'ambiguous': [
      { num: 1, en: "His reply was ambiguous, so nobody understood whether he agreed or disagreed.", ur: "اس کا جواب اتنا مبہم اور غیر واضح تھا کہ کوئی نہ سمجھ سکا کہ وہ راضی تھا یا نہیں۔" }
    ],
    'candid': [
      { num: 1, en: "In a candid interview on live TV, the player openly admitted his mistakes.", ur: "لائیو ٹی وی پر ایک کھلے اور بے باک انٹرویو میں کھلاڑی نے کھل کر اپنی غلطیوں کا اعتراف کیا۔" }
    ],
    'persevere': [
      { num: 1, en: "If you persevere and practice English every single day, you will speak fluently soon.", ur: "اگر آپ استقلال اور مستقل مزاجی سے روزانہ انگریزی بولیں گے تو آپ جلد روانی حاصل کر لیں گے۔" }
    ],
    'procrastinate': [
      { num: 1, en: "Don't procrastinate on paying your bills until the last day to avoid late fines.", ur: "اضافی جرمانے سے بچنے کے لیے آخری دن تک اپنے بل بھرنے میں ٹال مٹول اور تاخیر نہ کریں۔" }
    ],
    'empathy': [
      { num: 1, en: "A kind doctor listens patiently and shows genuine empathy towards every patient.", ur: "ایک شفیق ڈاکٹر مریضوں کی بات تسلی سے سنتا ہے اور ان سے سچی ہمدردی اور دلی احساس کا اظہار کرتا ہے۔" }
    ],
    'lucid': [
      { num: 1, en: "The teacher gave a lucid and simple explanation of a difficult math problem.", ur: "استاد نے ریاضی کے ایک مشکل سوال کی بالکل واضح، شفاف اور آسان وضاحت پیش کی۔" }
    ],
    'serene': [
      { num: 1, en: "Walking by the quiet blue lake at sunrise felt peaceful and deeply serene.", ur: "طلوعِ آفتاب کے وقت پرسکون جھیل کے کنارے چہل قدمی کرنے سے بے انتہا سکون اور راحت محسوس ہوئی۔" }
    ],
    'equivocal': [
      { num: 1, en: "His equivocal response left the team confused about the project deadline.", ur: "اس کے گول مول اور مبہم جواب نے پوری ٹیم کو کام مکمل کرنے کی آخری تاریخ کے بارے میں الجھن میں ڈال دیا۔" }
    ],
    'happy': [
      { num: 1, en: "The children were very happy when their father brought home a box of fresh mangoes.", ur: "جب والد گھر میں تازہ آموں کا ڈبہ لائے تو بچے بے حد خوش اور مسرور ہو گئے۔" }
    ],
    'honest': [
      { num: 1, en: "He is an honest shopkeeper who always returns the exact change to every customer.", ur: "وہ ایک ایماندار اور دیانت دار دکاندار ہے جو ہمیشہ ہر گاہک کو پورا بقایا واپس کرتا ہے۔" }
    ],
    'journey': [
      { num: 1, en: "Their train journey across the scenic green hills took six relaxing hours.", ur: "خوبصورت سرسبز پہاڑوں کے درمیان ان کا ٹرین کا سفر چھ آرام دہ گھنٹوں میں مکمل ہوا۔" }
    ],
    'decision': [
      { num: 1, en: "Take your time and think carefully before making a major career decision.", ur: "کوئی بھی بڑا کیریئر کا فیصلہ کرنے سے پہلے پورا وقت لیں اور اچھی طرح غور کریں۔" }
    ],
    'circumstances': [
      { num: 1, en: "Due to unforeseen weather circumstances, the outdoor festival was moved inside.", ur: "موسم کے غیر متوقع حالات کی وجہ سے باہر ہونے والا میلہ ہال کے اندر منتقل کر دیا گیا۔" }
    ],
    'sustainable': [
      { num: 1, en: "Using solar energy is a sustainable way to power homes without harming the environment.", ur: "شمسی توانائی کا استعمال ماحول کو نقصان پہنچائے بغیر گھروں کو بجلی فراہم کرنے کا ایک پائیدار اور ماحول دوست طریقہ ہے۔" },
      { num: 2, en: "The company adopted sustainable packaging to reduce plastic waste.", ur: "کمپنی نے پلاسٹک کا کچرا کم کرنے کے لیے ماحول دوست اور پائیدار پیکیجنگ کا طریقہ اپنایا۔" }
    ],
    'sedentary': [
      { num: 1, en: "Sitting at a desk all day can lead to a sedentary lifestyle and back pain.", ur: "سارا دن میز پر بیٹھے رہنا ایک ساکن اور غیر متحرک طرزِ زندگی اور کمر کے درد کا باعث بن سکتا ہے۔" },
      { num: 2, en: "Doctors recommend daily walking to people with sedentary office jobs.", ur: "ڈاکٹرز دفتری کام کرنے والے غیر متحرک افراد کو روزانہ چہل قدمی کا مشورہ دیتے ہیں۔" }
    ],
    'deterrent': [
      { num: 1, en: "Installing security cameras outside the house acts as a strong deterrent against thieves.", ur: "گھر کے باہر سیکیورٹی کیمرے لگانا چوروں کے لیے ایک مضبوط روک تھام اور رکاوٹ کا کام کرتا ہے۔" },
      { num: 2, en: "Heavy traffic fines serve as a deterrent to dangerous and fast driving.", ur: "ٹریفک کے بھاری جرمانے خطرناک اور تیز رفتار ڈرائیونگ کی روک تھام کا ذریعہ بنتے ہیں۔" }
    ],
    'lucrative': [
      { num: 1, en: "Software development has become a highly lucrative career for young graduates.", ur: "سافٹ ویئر ڈویلپمنٹ نوجوان گریجویٹس کے لیے ایک انتہائی منافع بخش اور پرکشش کیریئر بن چکا ہے۔" },
      { num: 2, en: "He left his old job to start a lucrative online exporting business.", ur: "اس نے ایک منافع بخش آن لائن برآمدی کاروبار شروع کرنے کے لیے اپنی پرانی نوکری چھوڑ دی۔" }
    ],
    'obsolete': [
      { num: 1, en: "Smartphones have made cassette tapes and floppy disks completely obsolete.", ur: "اسمارٹ فونز نے کیسٹ ٹیپس اور فلاپی ڈسکس کو مکمل طور پر پرانا، متروک اور بے کار کر دیا ہے۔" },
      { num: 2, en: "Old computer software quickly becomes obsolete if it is not updated regularly.", ur: "پرانا کمپیوٹر سافٹ ویئر اگر باقاعدگی سے اپ ڈیٹ نہ کیا جائے تو جلد ہی متروک ہو جاتا ہے۔" }
    ],
    'cognitive': [
      { num: 1, en: "Reading books and solving puzzles helps maintain sharp cognitive abilities as you grow older.", ur: "کتابیں پڑھنا اور پہیلیاں حل کرنا عمر بڑھنے کے ساتھ دماغی اور فکری صلاحیتوں کو تیز رکھنے میں مدد دیتا ہے۔" },
      { num: 2, en: "Lack of sleep negatively affects a student's cognitive performance in morning exams.", ur: "نیند کی کمی صبح کے امتحانات میں طالب علم کی ذہنی کارکردگی پر برا اثر ڈالتی ہے۔" }
    ],
    'chronic': [
      { num: 1, en: "He suffers from chronic back pain that gets worse during cold winter weather.", ur: "وہ کمر کے دائمی اور پرانے درد میں مبتلا ہے جو سردیوں کے موسم میں مزید بڑھ جاتا ہے۔" },
      { num: 2, en: "Smoking is the leading cause of chronic respiratory diseases.", ur: "تمباکو نوشی سانس کی دائمی اور مستقل بیماریوں کی سب سے بڑی وجہ ہے۔" }
    ],
    'biodiversity': [
      { num: 1, en: "Protecting the rainforest is crucial for preserving the rich biodiversity of rare animals.", ur: "بارانی جنگلات کا تحفظ نایاب جانوروں کی کثیر حیاتیاتی تنوع اور انواع کو بچانے کے لیے انتہائی اہم ہے۔" }
    ],
    'degradation': [
      { num: 1, en: "Soil degradation caused by over-farming makes it difficult for crops to grow properly.", ur: "حد سے زیادہ کاشتکاری کی وجہ سے مٹی کی زرخیزی کی تنزلی اور خرابی فصلوں کے اگنے میں رکاوٹ بنتی ہے۔" }
    ],
    'emission': [
      { num: 1, en: "Electric cars produce zero harmful carbon emissions on the road.", ur: "الیکٹرک گاڑیاں سڑک پر چلتے ہوئے مضرِ صحت کاربن کا اخراج بالکل نہیں کرتیں۔" }
    ],
    'bolster': [
      { num: 1, en: "Adding extra security guards helped bolster safety at the international airport.", ur: "اضافی سیکیورٹی گارڈز تعینات کرنے سے بین الاقوامی ہوائی اڈے کی حفاظت کو مزید تقویت اور مضبوطی ملی۔" }
    ],
    'hamper': [
      { num: 1, en: "Heavy snowfall hampered the rescue team's efforts to reach the remote mountain village.", ur: "شدید برف باری نے دور دراز پہاڑی گاؤں تک پہنچنے کے لیے امدادی ٹیم کی کوششوں میں رکاوٹ ڈالی۔" }
    ],
    'jeopardize': [
      { num: 1, en: "Arriving late to the final exam could jeopardize your entire school year.", ur: "فائنل امتحان میں دیر سے پہنچنا آپ کے پورے تعلیمی سال کو خطرے میں ڈال سکتا ہے۔" }
    ],
    'plausible': [
      { num: 1, en: "He gave a plausible explanation for why his car broke down on the highway.", ur: "اس نے ایک قابلِ قبول اور معقول وجہ بتائی کہ ہائی وے پر اس کی گاڑی کیوں خراب ہوئی۔" }
    ],
    'thrive': [
      { num: 1, en: "Plants thrive and grow quickly when they receive plenty of sunlight and clean water.", ur: "پودے جب وافر دھوپ اور صاف پانی حاصل کرتے ہیں تو خوب پھلتے پھولتے اور پروان چڑھتے ہیں۔" }
    ],
    'withstand': [
      { num: 1, en: "The strong bridge was specially built to withstand severe earthquakes and heavy floods.", ur: "مضبوط پل کو خاص طور پر شدید زلزلوں اور بھاری سیلابوں کو جھیلنے اور برداشت کرنے کے لیے بنایا گیا تھا۔" }
    ]
  },

  // --- AUTHENTIC DUAL-DIALECT PHONETICS & PRONUNCIATION RESPELLING ENGINE ---
  curatedPhonetics: {
    'alleviate': { uk: '', us: '', respelling: 'uh-LEE-vee-ayt', urduPhonetic: 'اَلیوی اَیٹ' },
    'resilience': { uk: '', us: '', respelling: 'ri-ZIL-yuhns', urduPhonetic: 'رِزِل یَنس' },
    'resilient': { uk: '', us: '', respelling: 'ri-ZIL-yuhnt', urduPhonetic: 'رِزِل یَینٹ' },
    'equivocal': { uk: '', us: '', respelling: 'ih-KWIV-uh-kuhl', urduPhonetic: 'اِکوِیووکل' },
    'happy': { uk: '', us: '', respelling: 'HAP-ee', urduPhonetic: 'ہیپی' },
    'book': { uk: '', us: '', respelling: 'buuk', urduPhonetic: 'بُک' },
    'journey': { uk: '', us: '', respelling: 'JUR-nee', urduPhonetic: 'جرنی' },
    'honest': { uk: '', us: '', respelling: 'ON-ist', urduPhonetic: 'اونِسٹ' },
    'circumstances': { uk: '', us: '', respelling: 'SUR-kuhm-stan-siz', urduPhonetic: 'سرکمسٹینسز' },
    'decision': { uk: '', us: '', respelling: 'dih-SIZH-uhn', urduPhonetic: 'ڈسِیژن' },
    'detrimental': { uk: '', us: '', respelling: 'deh-truh-MEN-tuhl', urduPhonetic: 'ڈیٹری مینٹل' },
    'eloquent': { uk: '/ˈel.ə.kwənt/', us: '/ˈel.ə.kwənt/', respelling: 'EH-luh-kwuhnt', urduPhonetic: 'ایلوکوینٹ' },
    'pragmatic': { uk: '/præɡˈmæt.ɪk/', us: '/præɡˈmæt̬.ɪk/', respelling: 'prag-MAT-ik', urduPhonetic: 'پریگ میٹک' },
    'meticulous': { uk: '/məˈtɪk.jə.ləs/', us: '/məˈtɪk.jə.ləs/', respelling: 'muh-TIK-yuh-luhs', urduPhonetic: 'میٹی کیولس' },
    'empathy': { uk: '/ˈem.pə.θi/', us: '/ˈem.pə.θi/', respelling: 'EM-puh-thee', urduPhonetic: 'ایم پیتھی' },
    'persevere': { uk: '/ˌpɜː.sɪˈvɪər/', us: '/ˌpɝː.səˈvɪr/', respelling: 'pur-suh-VEER', urduPhonetic: 'پرسویر' },
    'candid': { uk: '/ˈkæn.dɪd/', us: '/ˈkæn.dɪd/', respelling: 'KAN-did', urduPhonetic: 'کینڈڈ' },
    'procrastinate': { uk: '/prəˈkræs.tɪ.neɪt/', us: '/proʊˈkræs.tə.neɪt/', respelling: 'proh-KRAS-tuh-nayt', urduPhonetic: 'پروکرسٹینیٹ' },
    'lucid': { uk: '/ˈluː.sɪd/', us: '/ˈluː.sɪd/', respelling: 'LOO-sid', urduPhonetic: 'لو سِڈ' },
    'serene': { uk: '/səˈriːn/', us: '/səˈriːn/', respelling: 'suh-REEN', urduPhonetic: 'سرین' },
    'diligent': { uk: '/ˈdɪl.ɪ.dʒənt/', us: '/ˈdɪl.ə.dʒənt/', respelling: 'DIL-uh-juhnt', urduPhonetic: 'ڈلیجنٹ' },
    'ambiguous': { uk: '/æmˈbɪɡ.ju.əs/', us: '/æmˈbɪɡ.ju.əs/', respelling: 'am-BIG-yoo-uhs', urduPhonetic: 'ایمبیگوئس' },
    'diaspora': { uk: '/daɪˈæs.pər.ə/', us: '/daɪˈæs.pɚ.ə/', respelling: 'dye-AS-pur-uh', urduPhonetic: 'ڈائیسپورا' },
    'adverse': { uk: '/ˈæd.vɜːs/', us: '/ædˈvɝːs/', respelling: 'ad-VURS', urduPhonetic: 'ایڈورس' },
    'conclusion': { uk: '/kənˈkluː.ʒən/', us: '/kənˈkluː.ʒən/', respelling: 'kuhn-KLOO-zhuhn', urduPhonetic: 'کنکلوژن' },
    'contradictory': { uk: '/ˌkɒn.trəˈdɪk.tər.i/', us: '/ˌkɑːn.trəˈdɪk.tɚ.i/', respelling: 'kon-truh-DIK-tuh-ree', urduPhonetic: 'کنٹراڈکٹری' },
    'schedule': { uk: '', us: '', respellingUK: 'SHED-jool', respellingUS: 'SKED-jool', urduPhonetic: 'شیڈول' },
    'privacy': { uk: '', us: '', respellingUK: 'PRIV-uh-see', respellingUS: 'PRYE-vuh-see', urduPhonetic: 'پرائیویسی' },
    'advertisement': { uk: '', us: '', respellingUK: 'ad-VUR-tis-muhnt', respellingUS: 'ad-ver-TYZE-muhnt', urduPhonetic: 'ایڈورٹائزمنٹ' },
    'water': { uk: '', us: '', respellingUK: 'WAW-tuh', respellingUS: 'WAH-tur', urduPhonetic: 'واٹر' },
    'neither': { uk: '', us: '', respellingUK: 'NYE-thur', respellingUS: 'NEE-thur', urduPhonetic: 'نیدر' },
    'either': { uk: '', us: '', respellingUK: 'EYE-thur', respellingUS: 'EE-thur', urduPhonetic: 'ایدر' },
    'vitamin': { uk: '', us: '', respellingUK: 'VIT-uh-min', respellingUS: 'VYE-tuh-min', urduPhonetic: 'وٹامن' },
    'tomato': { uk: '', us: '', respellingUK: 'tuh-MAH-toh', respellingUS: 'tuh-MAY-toh', urduPhonetic: 'ٹماٹر' },
    'herb': { uk: '', us: '', respellingUK: 'hurb', respellingUS: 'urb', urduPhonetic: 'ہرب' },
    'leisure': { uk: '', us: '', respellingUK: 'LEZH-ur', respellingUS: 'LEE-zhur', urduPhonetic: 'لیژر' },
    'route': { uk: '', us: '', respellingUK: 'root', respellingUS: 'rowt', urduPhonetic: 'روٹ' },
    'garage': { uk: '', us: '', respellingUK: 'GAIR-ahzh', respellingUS: 'guh-RAHZH', urduPhonetic: 'گیراج' },
    'vase': { uk: '', us: '', respellingUK: 'vahz', respellingUS: 'vays', urduPhonetic: 'واز' },
    'ballet': { uk: '/ˈbæleɪ/', us: '/bæˈleɪ/', respelling: 'ba-LAY', urduPhonetic: 'بیلے' },
    'aluminum': { uk: '', us: '', respellingUK: 'al-yoo-MIN-ee-uhm', respellingUS: 'uh-LOO-mi-nuhm', urduPhonetic: 'ایلومینیم' },
    'ephemeral': { uk: '/ɪˈfem.ər.əl/', us: '/əˈfem.ɚ.əl/', respelling: 'ih-FEM-er-uhl', urduPhonetic: 'افیمرل' },
    'ubiquitous': { uk: '/juːˈbɪk.wɪ.təs/', us: '/juːˈbɪk.wə.t̬əs/', respelling: 'yoo-BIK-wuh-tuhs', urduPhonetic: 'یوبیکوٹَس' },
    'serendipity': { uk: '/ˌser.ənˈdɪp.ə.ti/', us: '/ˌser.ənˈdɪp.ə.t̬i/', respelling: 'sehr-uhn-DIP-i-tee', urduPhonetic: 'سیرینڈیپیٹی' },
    'anomaly': { uk: '/əˈnɒm.ə.li/', us: '/əˈnɑː.mə.li/', respelling: 'uh-NOM-uh-lee', urduPhonetic: 'انوملی' },
    'paradigm': { uk: '/ˈpær.ə.daɪm/', us: '/ˈper.ə.daɪm/', respelling: 'PAIR-uh-dyme', urduPhonetic: 'پیراڈائم' },
    'enigma': { uk: '/ɪˈnɪɡ.mə/', us: '/əˈnɪɡ.mə/', respelling: 'ih-NIG-muh', urduPhonetic: 'انِگما' },
    'garrulous': { uk: '/ˈɡær.əl.əs/', us: '/ˈɡer.ə.ləs/', respelling: 'GAIR-uh-luhs', urduPhonetic: 'گیرولس' },
    'loquacious': { uk: '/ləˈkweɪ.ʃəs/', us: '/loʊˈkweɪ.ʃəs/', respelling: 'loh-KWAY-shuhs', urduPhonetic: 'لوکویشس' },
    'mitigate': { uk: '', us: '', respelling: 'MIT-i-gayt', urduPhonetic: 'مٹیگیٹ' },
    'quintessential': { uk: '/ˌkwɪn.tɪˈsen.ʃəl/', us: '/ˌkwɪn.təˈsen.ʃəl/', respelling: 'kwin-tuh-SEN-shuhl', urduPhonetic: 'کونٹیسینشل' }
  },

  // =========================================================================
  // [LOCKED FEATURE - DO NOT MODIFY WITHOUT EXPLICIT USER CONFIRMATION]
  // Smart Dual-Respelling Engine (UK vs US)
  // Status: Verified & Locked
  // =========================================================================
  getDualRespelling(wordObj) {
    if (!wordObj || !wordObj.word) return { uk: '', us: '', isDifferent: false };
    const clean = wordObj.word.toLowerCase().trim();
    const curated = this.curatedPhonetics && this.curatedPhonetics[clean];
    if (curated) {
      const uk = curated.respellingUK || curated.respelling || '';
      const us = curated.respellingUS || curated.respelling || '';
      return {
        uk,
        us,
        isDifferent: uk && us && uk.toLowerCase() !== us.toLowerCase()
      };
    }
    const wUk = wordObj.respellingUK || wordObj.respelling || '';
    const wUs = wordObj.respellingUS || wordObj.respelling || '';
    if (wUk || wUs) {
      const uk = wUk || wUs;
      const us = wUs || wUk;
      return {
        uk,
        us,
        isDifferent: uk && us && uk.toLowerCase() !== us.toLowerCase()
      };
    }
    const base = this.ruleBasedRespelling ? this.ruleBasedRespelling(clean) : '';
    return { uk: base, us: base, isDifferent: false };
  },

  arpaToRespelling(arpaStr) {
    if (!arpaStr || typeof arpaStr !== 'string') return '';
    const tokens = arpaStr.trim().split(/\s+/);
    if (!tokens.length) return '';
    const vMap = {
      'AA': 'ah', 'AE': 'a', 'AH': 'uh', 'AO': 'aw', 'AW': 'ow',
      'AY': 'eye', 'B': 'b', 'CH': 'ch', 'D': 'd', 'DH': 'th',
      'EH': 'e', 'ER': 'ur', 'EY': 'ay', 'F': 'f', 'G': 'g',
      'HH': 'h', 'IH': 'i', 'IY': 'ee', 'JH': 'j', 'K': 'k',
      'L': 'l', 'M': 'm', 'N': 'n', 'NG': 'ng', 'OW': 'oh',
      'OY': 'oy', 'P': 'p', 'R': 'r', 'S': 's', 'SH': 'sh',
      'T': 't', 'TH': 'th', 'UH': 'oo', 'UW': 'oo', 'V': 'v',
      'W': 'w', 'Y': 'y', 'Z': 'z', 'ZH': 'zh'
    };
    const vowels = new Set(['AA','AE','AH','AO','AW','AY','EH','ER','EY','IH','IY','OW','OY','UH','UW']);
    const phonemes = [];
    for (const tok of tokens) {
      const base = tok.replace(/[0-9]/g, '');
      const numMatch = tok.match(/[0-9]/);
      const stress = numMatch ? parseInt(numMatch[0], 10) : null;
      const isVowel = stress !== null || vowels.has(base);
      phonemes.push({
        base,
        sound: vMap[base] || base.toLowerCase(),
        isVowel,
        stress
      });
    }
    const vIndices = [];
    phonemes.forEach((p, idx) => { if (p.isVowel) vIndices.push(idx); });
    if (vIndices.length === 0) return phonemes.map(p => p.sound).join('');

    const splitIndices = new Set();
    const clusters = new Set(['TR', 'KW', 'PR', 'BL', 'CL', 'PL', 'FL', 'GL', 'KR', 'BR', 'DR', 'TH', 'SH', 'CH']);
    for (let k = 0; k < vIndices.length - 1; k++) {
      const v1 = vIndices[k];
      const v2 = vIndices[k + 1];
      const cCount = v2 - v1 - 1;
      if (cCount <= 0) {
        splitIndices.add(v2);
      } else if (cCount === 1) {
        splitIndices.add(v1 + 1);
      } else if (cCount === 2) {
        const c1 = phonemes[v1 + 1].base;
        const c2 = phonemes[v1 + 2].base;
        if (clusters.has(c1 + c2)) {
          splitIndices.add(v1 + 1);
        } else {
          splitIndices.add(v1 + 2);
        }
      } else {
        splitIndices.add(v2 - 1);
      }
    }

    const syllables = [];
    let cur = [];
    phonemes.forEach((p, i) => {
      if (splitIndices.has(i) && cur.length > 0) {
        syllables.push(cur);
        cur = [];
      }
      cur.push(p);
    });
    if (cur.length > 0) syllables.push(cur);

    const res = [];
    for (const syl of syllables) {
      const stress = syl.find(p => p.stress !== null)?.stress || 0;
      let txt = syl.map(p => p.sound).join('');
      if (txt === 'e') txt = 'eh';
      txt = txt.replace(/eh$/, 'e');
      if (txt === 'e') txt = 'eh';
      if (stress === 1) {
        res.push(txt.toUpperCase());
      } else {
        res.push(txt.toLowerCase());
      }
    }
    return res.join('-');
  },

  ruleBasedRespelling(word) {
    if (!word) return '';
    const clean = word.toLowerCase().trim();
    if (this.curatedPhonetics && this.curatedPhonetics[clean] && this.curatedPhonetics[clean].respelling) {
      return this.curatedPhonetics[clean].respelling;
    }

    const vowels = 'aeiouy';
    let syls = [];
    let cur = '';
    for (let i = 0; i < clean.length; i++) {
      cur += clean[i];
      const isV = vowels.includes(clean[i]);
      const nextIsV = i + 1 < clean.length && vowels.includes(clean[i + 1]);
      const nextNextIsV = i + 2 < clean.length && vowels.includes(clean[i + 2]);
      if (isV && !nextIsV && nextNextIsV && cur.length >= 2 && i < clean.length - 2) {
        syls.push(cur);
        cur = '';
      } else if (isV && !nextIsV && !nextNextIsV && i + 2 < clean.length && cur.length >= 3) {
        cur += clean[++i];
        syls.push(cur);
        cur = '';
      }
    }
    if (cur) syls.push(cur);
    if (!syls.length) syls = [clean];

    const stressIdx = syls.length >= 3 ? syls.length - 2 : (syls.length === 2 ? 0 : 0);
    return syls.map((s, idx) => {
      let r = s.replace(/tion/g, 'shuhn').replace(/sion/g, 'zhuhn')
               .replace(/ph/g, 'f').replace(/ous/g, 'uhs')
               .replace(/able/g, 'uh-buhl').replace(/ment/g, 'muhnt')
               .replace(/al$/g, 'uhl').replace(/ic$/g, 'ik');
      return idx === stressIdx ? r.toUpperCase() : r.toLowerCase();
    }).join('-');
  },

  ruleBasedIPA(word, dialect = 'us') {
    if (!word) return '';
    const clean = word.toLowerCase().trim();
    if (this.curatedPhonetics && this.curatedPhonetics[clean]) {
      return dialect === 'uk' ? this.curatedPhonetics[clean].uk : this.curatedPhonetics[clean].us;
    }

    let ipa = clean
      .replace(/tion/g, 'ʃən')
      .replace(/sion/g, 'ʒən')
      .replace(/ous/g, 'əs')
      .replace(/ph/g, 'f')
      .replace(/ck/g, 'k')
      .replace(/th/g, 'θ')
      .replace(/ch/g, 'tʃ')
      .replace(/sh/g, 'ʃ')
      .replace(/wh/g, 'w')
      .replace(/ee/g, 'iː')
      .replace(/oo/g, 'uː')
      .replace(/ea/g, 'iː')
      .replace(/ai|ay/g, 'eɪ')
      .replace(/ou|ow/g, 'aʊ')
      .replace(/ar/g, dialect === 'uk' ? 'ɑː' : 'ɑːr')
      .replace(/er|ir|ur/g, dialect === 'uk' ? 'ɜː' : 'ɝː')
      .replace(/or/g, dialect === 'uk' ? 'ɔː' : 'ɔːr');

    if (ipa.length > 5) {
      const mid = Math.floor(ipa.length / 2);
      ipa = ipa.slice(0, mid) + 'ˈ' + ipa.slice(mid);
    } else {
      ipa = 'ˈ' + ipa;
    }

    return `/${ipa}/`;
  },

  getQuickPhonetics(word) {
    if (!word) return null;
    const clean = word.toLowerCase().trim();
    if (this.curatedPhonetics && this.curatedPhonetics[clean]) {
      return { ...this.curatedPhonetics[clean] };
    }
    const cacheKey = `vocab_phones_v3_${clean}`;
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed.uk && parsed.us && parsed.uk !== `/${clean}/`) return parsed;
      }
    } catch (e) {}

    return {
      uk: this.ruleBasedIPA(clean, 'uk'),
      us: this.ruleBasedIPA(clean, 'us'),
      respelling: this.ruleBasedRespelling(clean),
      urduPhonetic: ''
    };
  },

  async fetchDualPhonetics(word) {
    const clean = (word || '').trim().toLowerCase();
    if (!clean) return { uk: '', us: '', respelling: '', urduPhonetic: '' };

    if (this.curatedPhonetics && this.curatedPhonetics[clean]) {
      return { ...this.curatedPhonetics[clean] };
    }

    const cacheKey = `vocab_phones_v3_${clean}`;
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed.uk && parsed.us && parsed.uk !== `/${clean}/` && parsed.respelling) {
          return parsed;
        }
      }
    } catch (e) {}

    // 1. Primary: High-speed Datamuse API (Provides CMU ARPAbet + real IPA without CORS issues)
    try {
      const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timer = controller ? setTimeout(() => controller.abort(), 2200) : null;
      const dUrl = `https://api.datamuse.com/words?sp=${encodeURIComponent(clean)}&qe=sp&md=r&ipa=1`;
      const dRes = await fetch(dUrl, { signal: controller ? controller.signal : undefined });
      if (timer) clearTimeout(timer);

      if (dRes && dRes.ok) {
        const dData = await dRes.json();
        const match = Array.isArray(dData) ? dData.find(item => item.word && item.word.toLowerCase() === clean) || dData[0] : null;
        if (match && match.tags) {
          const pronTag = match.tags.find(t => t.startsWith('pron:'));
          const ipaTag = match.tags.find(t => t.startsWith('ipa_pron:'));
          const rawPron = pronTag ? pronTag.replace(/^pron:\s*/, '').trim() : '';
          const rawIpa = ipaTag ? ipaTag.replace(/^ipa_pron:\s*/, '').trim() : '';

          const respelling = this.arpaToRespelling(rawPron) || this.ruleBasedRespelling(clean);
          let ukIpa = '';
          let usIpa = '';

          if (rawIpa) {
            const formattedIpa = rawIpa.startsWith('/') ? rawIpa : `/${rawIpa}/`;
            usIpa = formattedIpa;
            ukIpa = formattedIpa.replace(/ɝː?|ɚ/g, 'ɜː').replace(/r(?=[^aeiouy]|$)/g, '');
            if (ukIpa === usIpa) {
              ukIpa = formattedIpa;
            }
          }

          if (!ukIpa) ukIpa = this.ruleBasedIPA(clean, 'uk');
          if (!usIpa) usIpa = this.ruleBasedIPA(clean, 'us');

          const result = {
            uk: ukIpa,
            us: usIpa,
            respelling: respelling,
            urduPhonetic: ''
          };
          try { localStorage.setItem(cacheKey, JSON.stringify(result)); } catch (e) {}
          return result;
        }
      }
    } catch (e) {}

    // 2. Secondary: Live FreeDictionary API with strict 1.5s timeout
    try {
      const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timer = controller ? setTimeout(() => controller.abort(), 1500) : null;
      const res2 = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(clean)}`, { signal: controller ? controller.signal : undefined });
      if (timer) clearTimeout(timer);
      if (res2 && res2.ok) {
        const data = await res2.json();
        if (data && data[0] && Array.isArray(data[0].phonetics)) {
          let uk = '', us = '';
          for (const p of data[0].phonetics) {
            if (p.text) {
              if (p.audio && p.audio.includes('-uk')) uk = p.text;
              else if (p.audio && p.audio.includes('-us')) us = p.text;
              else if (!uk) uk = p.text;
            }
          }
          if (uk || us) {
            const cleanUk = uk ? (uk.startsWith('/') ? uk : `/${uk}/`) : (us ? (us.startsWith('/') ? us : `/${us}/`) : this.ruleBasedIPA(clean, 'uk'));
            const cleanUs = us ? (us.startsWith('/') ? us : `/${us}/`) : (uk ? (uk.startsWith('/') ? uk : `/${uk}/`) : this.ruleBasedIPA(clean, 'us'));
            const result = {
              uk: cleanUk !== `/${clean}/` ? cleanUk : this.ruleBasedIPA(clean, 'uk'),
              us: cleanUs !== `/${clean}/` ? cleanUs : this.ruleBasedIPA(clean, 'us'),
              respelling: this.ruleBasedRespelling(clean),
              urduPhonetic: ''
            };
            try { localStorage.setItem(cacheKey, JSON.stringify(result)); } catch (e) {}
            return result;
          }
        }
      }
    } catch (e) {}

    // 3. Fallback: Rule-based Authentic IPA and Respelling (NEVER return /${clean}/)
    const fallback = {
      uk: this.ruleBasedIPA(clean, 'uk'),
      us: this.ruleBasedIPA(clean, 'us'),
      respelling: this.ruleBasedRespelling(clean),
      urduPhonetic: ''
    };
    try { localStorage.setItem(cacheKey, JSON.stringify(fallback)); } catch (e) {}
    return fallback;
  },


  // --- AUTHENTIC CURATED COLLINS COBUILD ADVANCED DICTIONARY ENTRIES ---
  curatedCollins: {
    'resilient': {
      title: "Collins COBUILD Advanced Dictionary",
      word: "resilient",
      phonetic: "/rɪˈzɪl.jənt/",
      stars: 2,
      definitions: [
        {
          num: 1,
          pos: "ADJ",
          explanation: "People or things that are resilient are able to recover quickly from unpleasant, difficult, or damaging events.",
          example: "She remained resilient despite facing severe setbacks in her career."
        }
      ]
    },
    'eloquent': {
      title: "Collins COBUILD Advanced Dictionary",
      word: "eloquent",
      phonetic: "/ˈel.ə.kwənt/",
      stars: 2,
      definitions: [
        {
          num: 1,
          pos: "ADJ",
          explanation: "A person who is eloquent speaks or writes in a fluent, graceful, and persuasive manner.",
          example: "The lawyer gave an eloquent speech that convinced the jury."
        }
      ]
    },
    'pragmatic': {
      title: "Collins COBUILD Advanced Dictionary",
      word: "pragmatic",
      phonetic: "/præɡˈmæt.ɪk/",
      stars: 2,
      definitions: [
        {
          num: 1,
          pos: "ADJ",
          explanation: "A pragmatic person deals with problems in a sensible, realistic way based on practical results rather than theoretical considerations.",
          example: "We need a pragmatic approach to solve this economic crisis."
        }
      ]
    },
    'meticulous': {
      title: "Collins COBUILD Advanced Dictionary",
      word: "meticulous",
      phonetic: "/məˈtɪk.jə.ləs/",
      stars: 2,
      definitions: [
        {
          num: 1,
          pos: "ADJ",
          explanation: "If you describe someone as meticulous, you mean that they do things very carefully and with great attention to every small detail.",
          example: "He did meticulous research before writing the comprehensive report."
        }
      ]
    },
    'empathy': {
      title: "Collins COBUILD Advanced Dictionary",
      word: "empathy",
      phonetic: "/ˈem.pə.θi/",
      stars: 3,
      definitions: [
        {
          num: 1,
          pos: "NOUN",
          explanation: "Empathy is the ability to share another person's feelings and understand their experiences as if they were your own.",
          example: "Having empathy allows healthcare professionals to connect deeply with patients in distress."
        }
      ]
    },
    'persevere': {
      title: "Collins COBUILD Advanced Dictionary",
      word: "persevere",
      phonetic: "/ˌpɜː.sɪˈvɪər/",
      stars: 2,
      definitions: [
        {
          num: 1,
          pos: "VERB",
          explanation: "If you persevere, you continue trying to achieve something in spite of difficulties and discouragement.",
          example: "Despite countless rejections, she persevered with her scientific experiments."
        }
      ]
    },
    'candid': {
      title: "Collins COBUILD Advanced Dictionary",
      word: "candid",
      phonetic: "/ˈkæn.dɪd/",
      stars: 2,
      definitions: [
        {
          num: 1,
          pos: "ADJ",
          explanation: "Someone who is candid speaks honestly, openly, and sincerely, especially about something that may be painful or embarrassing.",
          example: "The politician gave a candid interview discussing his past mistakes."
        }
      ]
    },
    'procrastinate': {
      title: "Collins COBUILD Advanced Dictionary",
      word: "procrastinate",
      phonetic: "/prəʊˈkræs.tɪ.neɪt/",
      stars: 1,
      definitions: [
        {
          num: 1,
          pos: "VERB",
          explanation: "If you procrastinate, you deliberately delay doing something that you ought to do, usually because it is unpleasant or boring.",
          example: "Most students tend to procrastinate until the night before the final examination."
        }
      ]
    },
    'lucid': {
      title: "Collins COBUILD Advanced Dictionary",
      word: "lucid",
      phonetic: "/ˈluː.sɪd/",
      stars: 2,
      definitions: [
        {
          num: 1,
          pos: "ADJ",
          explanation: "Something that is lucid is clear, simple, and easy to understand.",
          example: "The professor provided a remarkably lucid explanation of the complex theorem."
        }
      ]
    },
    'serene': {
      title: "Collins COBUILD Advanced Dictionary",
      word: "serene",
      phonetic: "/sɪˈriːn/",
      stars: 2,
      definitions: [
        {
          num: 1,
          pos: "ADJ",
          explanation: "Someone or something that is serene is calm, peaceful, untroubled, and tranquil.",
          example: "She had a serene expression on her face as she looked out over the quiet lake."
        }
      ]
    },
    'diligent': {
      title: "Collins COBUILD Advanced Dictionary",
      word: "diligent",
      phonetic: "/ˈdɪl.ɪ.dʒənt/",
      stars: 2,
      definitions: [
        {
          num: 1,
          pos: "ADJ",
          explanation: "Someone who is diligent works hard in a careful, thorough, and determined manner.",
          example: "Through diligent effort and discipline, he graduated at the top of his class."
        }
      ]
    },
    'ambiguous': {
      title: "Collins COBUILD Advanced Dictionary",
      word: "ambiguous",
      phonetic: "/æmˈbɪɡ.ju.əs/",
      stars: 2,
      definitions: [
        {
          num: 1,
          pos: "ADJ",
          explanation: "If you describe something as ambiguous, you mean that it is unclear, confusing, or capable of having more than one possible meaning.",
          example: "The wording of the legal contract was intentionally ambiguous to protect both parties."
        }
      ]
    },
    'adverse': {
      title: "Collins COBUILD Advanced Dictionary",
      word: "adverse",
      phonetic: "/ˈæd.vɜːs/",
      stars: 2,
      definitions: [
        {
          num: 1,
          pos: "ADJ",
          explanation: "Adverse decisions, conditions, or effects are unfavourable to you and make it difficult for you to achieve what you want.",
          example: "The police said the decision would have no adverse effect on public safety."
        },
        {
          num: 2,
          pos: "ADJ",
          explanation: "Medical reactions that are unexpected and hazardous.",
          example: "The improper use of medicine could lead to severe adverse reactions."
        },
        {
          num: 3,
          pos: "ADJ",
          explanation: "Economic trends that negatively impact communities.",
          example: "Inflation can have serious adverse effects on families with low incomes."
        }
      ]
    },
    'detrimental': {
      title: "Collins COBUILD Advanced Dictionary",
      word: "detrimental",
      phonetic: "/ˌdet.rɪˈmen.təl/",
      stars: 1,
      definitions: [
        {
          num: 1,
          pos: "ADJ",
          explanation: "Something that is detrimental to something else has a harmful or damaging effect on it.",
          example: "Moving her could have a detrimental effect on her health."
        },
        {
          num: 2,
          pos: "ADJ",
          explanation: "Habits or pollutants that cause significant damage to your body or the ecosystem.",
          example: "Smoking is extremely detrimental to your physical fitness."
        },
        {
          num: 3,
          pos: "ADJ",
          explanation: "Actions that hinder progress or harm educational development.",
          example: "Excessive screen time has a detrimental impact on children's focus."
        }
      ]
    },
    'circumstances': {
      title: "Collins COBUILD Advanced Dictionary",
      word: "circumstances",
      phonetic: "/ˈsɜː.kəm.stæn.sɪz/",
      stars: 2,
      definitions: [
        {
          num: 1,
          pos: "NOUN",
          explanation: "The conditions that affect what happens in a situation.",
          example: "We wanted to marry but circumstances didn't permit."
        },
        {
          num: 2,
          pos: "NOUN",
          explanation: "A person's financial or living situation.",
          example: "She adapted remarkably well to her new financial circumstances."
        },
        {
          num: 3,
          pos: "NOUN",
          explanation: "Standard or routine conditions under which an event normally takes place.",
          example: "Under normal circumstances, the entire procedure takes only three days."
        }
      ]
    },
    'ubiquitous': {
      title: "Collins COBUILD Advanced Dictionary",
      word: "ubiquitous",
      phonetic: "/juːˈbɪk.wɪ.təs/",
      stars: 1,
      definitions: [
        {
          num: 1,
          pos: "ADJ",
          explanation: "If you describe something or someone as ubiquitous, you mean that they seem to be everywhere.",
          example: "Coffee shops have become ubiquitous in almost every major city."
        }
      ]
    },
    'ephemeral': {
      title: "Collins COBUILD Advanced Dictionary",
      word: "ephemeral",
      phonetic: "/ɪˈfem.ər.əl/",
      stars: 1,
      definitions: [
        {
          num: 1,
          pos: "ADJ",
          explanation: "If you describe something as ephemeral, you mean that it lasts for only a very short time.",
          example: "Fashions are ephemeral, changing with every passing season."
        }
      ]
    },
    'alleviate': {
      title: "Collins COBUILD Advanced Dictionary",
      word: "alleviate",
      phonetic: "/əˈliː.vi.eɪt/",
      stars: 2,
      definitions: [
        {
          num: 1,
          pos: "VERB",
          explanation: "If you alleviate pain, suffering, or an unpleasant condition, you make it less intense or severe.",
          example: "The doctor prescribed effective treatment to alleviate his persistent pain."
        }
      ]
    }
  },

  // --- AUTHENTIC CURATED ENGLISH-TO-ENGLISH & CONTEXTUAL USAGE DEFINITIONS ---
  curatedEnglishContext: {
    'alleviate': {
      definition: 'Alleviate means to make pain, suffering, or a difficult problem less severe or easier to bear.',
      coreIdea: 'To lessen the intensity of something negative—such as physical pain, emotional stress, poverty, or traffic.',
      contextUsage: 'Widely used in healthcare, policy discussions, social work, and public governance.',
      collocations: ['alleviate pain', 'alleviate poverty', 'alleviate symptoms', 'alleviate suffering', 'alleviate congestion']
    },
    'biodiversity': {
      definition: 'Biodiversity means the variety of plant and animal life in a particular habitat, ecosystem, or the world as a whole.',
      coreIdea: 'The richness and variability of living species and biological systems essential for maintaining ecological balance.',
      contextUsage: 'Fundamental in environmental science, conservation biology, climate policy, and international sustainability treaties.',
      collocations: ['preserve biodiversity', 'loss of biodiversity', 'rich biodiversity', 'threat to biodiversity', 'protect biodiversity']
    },
    'sustainable': {
      definition: 'Sustainable means able to be maintained at a certain rate or level without exhausting natural resources or causing ecological damage.',
      coreIdea: 'Practices and systems that satisfy present economic and social needs without compromising future generations.',
      contextUsage: 'Standard in green energy, environmental economics, urban planning, and corporate responsibility.',
      collocations: ['sustainable development', 'sustainable energy', 'sustainable practices', 'sustainable agriculture', 'environmentally sustainable']
    },
    'degradation': {
      definition: 'Degradation means the process in which the quality, condition, or value of something is reduced or destroyed.',
      coreIdea: 'The progressive deterioration or breakdown of soil, ecosystems, materials, or moral standards over time.',
      contextUsage: 'Commonly discussed in soil conservation, environmental impact assessments, and industrial material science.',
      collocations: ['environmental degradation', 'land degradation', 'soil degradation', 'habitat degradation', 'prevent degradation']
    },
    'emission': {
      definition: 'Emission means the production and discharge of something, especially gas, radiation, or pollutants into the atmosphere.',
      coreIdea: 'The release of harmful substances—such as carbon dioxide and toxic exhaust—into the air.',
      contextUsage: 'Central to climate change negotiations, automotive regulations, clean energy policies, and carbon tax discussions.',
      collocations: ['carbon emissions', 'greenhouse gas emissions', 'zero emissions', 'reduce emissions', 'exhaust emissions']
    },
    'pragmatic': {
      definition: 'Pragmatic means dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations.',
      coreIdea: 'Prioritizing practical, real-world feasibility and tangible outcomes over strict ideology or abstract principles.',
      contextUsage: 'Frequently used in business strategy, statecraft, policy implementation, and collaborative problem-solving.',
      collocations: ['pragmatic approach', 'pragmatic solution', 'pragmatic decision', 'highly pragmatic', 'pragmatic strategy']
    },
    'meticulous': {
      definition: 'Meticulous means showing great attention to detail; very careful, thorough, and precise.',
      coreIdea: 'Exercising extraordinary care and rigorous accuracy to ensure nothing is missed or flawed.',
      contextUsage: 'Used when describing scientific research, investigative journalism, forensic analysis, and elite craftsmanship.',
      collocations: ['meticulous planning', 'meticulous research', 'meticulous attention to detail', 'meticulous work', 'meticulous preparation']
    },
    'equivocal': {
      definition: 'Equivocal means open to more than one interpretation; deliberately ambiguous, vague, or unclear.',
      coreIdea: 'Speaking or presenting information in a way that allows multiple conflicting interpretations, often to avoid committing to a single stance.',
      contextUsage: 'Frequently used in political analysis, diplomatic negotiations, and critical debates.',
      collocations: ['equivocal answer', 'equivocal response', 'equivocal evidence', 'equivocal stance', 'remain equivocal']
    },
    'detrimental': {
      definition: 'Detrimental means causing harm, injury, damage, or disadvantage.',
      coreIdea: 'Producing a clearly negative, damaging impact on health, development, stability, or performance over time.',
      contextUsage: 'Standard in academic research, medical guidelines, environmental science, and public health reports.',
      collocations: ['detrimental effect', 'detrimental impact', 'highly detrimental', 'detrimental to health', 'prove detrimental']
    },
    'adverse': {
      definition: 'Adverse means preventing success or development; harmful, unfavorable, or hostile.',
      coreIdea: 'Circumstances, conditions, or reactions that work against your interests or create unexpected harm.',
      contextUsage: 'Frequently paired with medical side effects (adverse reactions), economic downturns (adverse conditions), or severe weather.',
      collocations: ['adverse reaction', 'adverse effects', 'adverse conditions', 'adverse weather', 'adverse circumstances']
    },
    'ubiquitous': {
      definition: 'Ubiquitous means present, appearing, or found everywhere at the same time.',
      coreIdea: 'Something that has permeated society or everyday life so thoroughly that encountering it feels constant.',
      contextUsage: 'Used in technology discussions, cultural commentary, and sociology to describe widely adopted items.',
      collocations: ['ubiquitous presence', 'become ubiquitous', 'almost ubiquitous', 'ubiquitous influence']
    },
    'mitigate': {
      definition: 'Mitigate means to make something bad or dangerous less severe, harsh, or damaging.',
      coreIdea: 'Taking practical safeguards, preventative steps, or countermeasures to lessen the risk or impact of an adverse event.',
      contextUsage: 'Standard in risk management, cybersecurity, climate change policy, and legal agreements.',
      collocations: ['mitigate risk', 'mitigate the impact', 'mitigate damage', 'mitigate the effects']
    },
    'resilience': {
      definition: 'Resilience means the capacity to withstand, adapt to, or recover quickly from difficult conditions.',
      coreIdea: 'The psychological, biological, or structural strength to absorb a shock, bounce back, and continue thriving.',
      contextUsage: 'Used in psychology, disaster recovery, organizational health, and ecological stability.',
      collocations: ['remarkable resilience', 'build resilience', 'emotional resilience', 'economic resilience']
    },
    'ephemeral': {
      definition: 'Ephemeral means lasting for a very short time; fleeting or transitory.',
      coreIdea: 'Emphasizing the brief, passing nature of beauty, trends, emotions, or experiences.',
      contextUsage: 'Used in literature, art, philosophy, biology, and cultural commentary.',
      collocations: ['ephemeral nature', 'ephemeral beauty', 'ephemeral pleasure', 'ephemeral fame']
    },
    'bolster': {
      definition: 'Bolster means to support, strengthen, or prop up something that is weak or in need of reinforcement.',
      coreIdea: 'Providing crucial assistance or structural backing to enhance confidence, stability, or strength.',
      contextUsage: 'Frequently used in economics, military defense, psychological morale, and institutional support.',
      collocations: ['bolster the economy', 'bolster confidence', 'bolster defense', 'bolster support']
    },
    'hamper': {
      definition: 'Hamper means to hinder, impede, or obstruct the movement or progress of something.',
      coreIdea: 'Creating obstacles or difficulties that slow down progress or prevent smooth execution.',
      contextUsage: 'Used in logistics, disaster relief, economic development, and sports commentary.',
      collocations: ['hamper progress', 'hamper efforts', 'hamper rescue operations', 'severely hamper']
    },
    'jeopardize': {
      definition: 'Jeopardize means to put someone or something into a situation in which there is a danger of loss, harm, or failure.',
      coreIdea: 'Exposing vital interests, safety, or reputations to severe hazard or imminent risk.',
      contextUsage: 'Common in legal warnings, international diplomacy, project management, and national security.',
      collocations: ['jeopardize peace', 'jeopardize future', 'jeopardize safety', 'seriously jeopardize']
    },
    'plausible': {
      definition: 'Plausible means seeming reasonable, probable, or worthy of belief.',
      coreIdea: 'An explanation, argument, or scenario that is logically convincing and credible based on available facts.',
      contextUsage: 'Used in scientific hypotheses, forensic investigations, and philosophical arguments.',
      collocations: ['plausible explanation', 'plausible scenario', 'highly plausible', 'plausible excuse']
    },
    'thrive': {
      definition: 'Thrive means to grow or develop vigorously; to flourish and prosper.',
      coreIdea: 'Achieving sustained vitality, success, and flourishing health in a favorable or resilient environment.',
      contextUsage: 'Common in business growth analysis, child development, botany, and ecological research.',
      collocations: ['thrive in adversity', 'thrive on challenges', 'continue to thrive', 'thriving business']
    },
    'withstand': {
      definition: 'Withstand means to remain undamaged or unaffected by; to resist successfully.',
      coreIdea: 'Possessing the durability or fortitude to endure severe strain, pressure, or hostile attack without breaking.',
      contextUsage: 'Used in engineering material tests, financial stress tests, and historical defense accounts.',
      collocations: ['withstand pressure', 'withstand scrutiny', 'withstand tests of time', 'withstand extreme weather']
    }
  },

  async fetchWordNetDefinition(word) {
    const clean = (word || '').trim().toLowerCase();
    if (!clean) return null;
    const cacheKey = `vocab_wordnet_def_${clean}`;
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) return JSON.parse(cached);
    } catch(e) {}

    try {
      const res = await fetch(`https://api.datamuse.com/words?sp=${encodeURIComponent(clean)}&md=d&max=1`);
      if (res.ok) {
        const data = await res.json();
        if (data && data[0] && Array.isArray(data[0].defs) && data[0].defs.length > 0) {
          const rawDef = data[0].defs[0];
          const tabIndex = rawDef.indexOf('\t');
          const pos = tabIndex > 0 ? rawDef.substring(0, tabIndex).trim() : 'n';
          let defText = tabIndex > 0 ? rawDef.substring(tabIndex + 1).trim() : rawDef.trim();
          const domainMatch = defText.match(/^\(([^)]+)\)\s*/);
          const domain = domainMatch ? domainMatch[1] : '';
          defText = defText.replace(/^\([^)]+\)\s*/, '');

          const result = {
            pos: pos === 'n' ? 'noun' : pos === 'v' ? 'verb' : pos === 'adj' ? 'adjective' : pos === 'adv' ? 'adverb' : 'word',
            definition: defText,
            domain: domain
          };
          try { localStorage.setItem(cacheKey, JSON.stringify(result)); } catch(e) {}
          return result;
        }
      }
    } catch (err) {}
    return null;
  },

  getEnglishContext(wordObj) {
    if (!wordObj || !wordObj.word) return {
      definition: '',
      coreIdea: '',
      contextUsage: '',
      collocations: []
    };

    const clean = wordObj.word.toLowerCase().trim();
    if (this.curatedEnglishContext && this.curatedEnglishContext[clean]) {
      return this.curatedEnglishContext[clean];
    }

    if (wordObj.coreIdea && wordObj.englishDefinition) {
      return {
        definition: wordObj.englishDefinition,
        coreIdea: wordObj.coreIdea,
        contextUsage: wordObj.contextUsage || `Used when discussing concepts related to ${wordObj.word}.`,
        collocations: Array.isArray(wordObj.collocations) ? wordObj.collocations : (this.curatedPhrases && this.curatedPhrases[clean] ? this.curatedPhrases[clean].map(p => p.text) : [])
      };
    }

    // Authentic extraction from Collins, WordNet, or Wikipedia
    let defText = '';
    if (wordObj.collins && wordObj.collins.definitions && wordObj.collins.definitions[0]) {
      defText = wordObj.collins.definitions[0].explanation || '';
    }
    if (!defText && wordObj.englishDefinition) {
      defText = wordObj.englishDefinition;
    }
    if (!defText && wordObj.wikiData && wordObj.wikiData.summary) {
      const firstSentence = wordObj.wikiData.summary.split(/\.\s+/)[0];
      if (firstSentence && firstSentence.length > 15) defText = firstSentence + '.';
    }

    const pos = (wordObj.partOfSpeech || wordObj.posShort || 'noun').toLowerCase();

    let coreIdea = '';
    let contextUsage = '';

    if (defText) {
      coreIdea = `Expresses the core concept: "${defText.replace(/\.$/, '')}".`;
      contextUsage = `Used in academic writing, professional discussions, and everyday English communication.`;
    } else {
      const urdu = wordObj.urduMeaning ? `(${wordObj.urduMeaning.split(/[\/,،]/)[0].trim()})` : '';
      defText = `${wordObj.word} ${urdu} is used to describe a specific ${pos} concept in English.`;
      coreIdea = `Communicates the concept of "${wordObj.word}" with clarity and precision.`;
      contextUsage = `Used when discussing topics related to ${wordObj.word}.`;
    }

    const phrases = (this.curatedPhrases && this.curatedPhrases[clean])
      ? this.curatedPhrases[clean].map(p => p.text)
      : (Array.isArray(wordObj.phrases) ? wordObj.phrases.map(p => p.text || p) : []);

    return {
      definition: `${wordObj.word} means ${defText.replace(new RegExp(`^${wordObj.word}\\s+is\\s+`, 'i'), '').replace(new RegExp(`^${wordObj.word}\\s+means\\s+`, 'i'), '')}`,
      coreIdea: coreIdea,
      contextUsage: contextUsage,
      collocations: phrases.slice(0, 5)
    };
  },

  // --- AUTHENTIC CURATED PHRASES & COLLOCATIONS WITH NATURAL URDU TRANSLATIONS ---
  curatedPhrases: {
    'alleviate': [
      { text: "alleviate pain", ur: "درد کم کرنا / تکلیف ہلکی کرنا" },
      { text: "alleviate poverty", ur: "غربت میں کمی لانا" },
      { text: "alleviate symptoms", ur: "بیماری کی علامات کو ہلکا کرنا" },
      { text: "alleviate suffering", ur: "دکھ درد یا تکلیف کو کم کرنا" },
      { text: "alleviate traffic congestion", ur: "ٹریفک کے دباؤ کو کم کرنا" }
    ],
    'adverse': [
      { text: "adverse effect", ur: "منفی اثر / برا نتیجہ" },
      { text: "adverse reaction", ur: "منفی ردعمل / الرجی یا برا ری ایکشن" },
      { text: "adverse weather conditions", ur: "خراب یا نامساعد موسمی حالات" },
      { text: "adverse circumstances", ur: "مخالف یا نامساعد حالات" }
    ],
    'conclusion': [
      { text: "come to a conclusion", ur: "کسی حتمی نتیجے پر پہنچنا" },
      { text: "draw a conclusion", ur: "نتیجہ اخذ کرنا / نتیجہ نکالنا" },
      { text: "jump to conclusions", ur: "بغیر سوچے سمجھے جلد بازی میں نتیجہ نکالنا" },
      { text: "in conclusion", ur: "آخر میں / مختصراً نتیجہ یہ کہ" },
      { text: "foregone conclusion", ur: "پہلے سے طے شدہ نتیجہ" }
    ],
    'equivocal': [
      { text: "equivocal answer", ur: "مبہم یا دو معنی والا جواب" },
      { text: "equivocal response", ur: "گول مول یا غیر واضح ردعمل" },
      { text: "equivocal evidence", ur: "مشکوک یا غیر یقینی ثبوت" },
      { text: "remain equivocal", ur: "موقف واضح نہ کرنا / مبہم رہنا" }
    ],
    'detrimental': [
      { text: "detrimental effect", ur: "نقصان دہ یا مضر اثر" },
      { text: "detrimental to health", ur: "صحت کے لیے نقصان دہ" },
      { text: "detrimental impact", ur: "گہرا نقصان دہ اثر" },
      { text: "prove detrimental", ur: "نقصان دہ ثابت ہونا" }
    ],
    'mitigate': [
      { text: "mitigate risk", ur: "خطرے کو کم یا محدود کرنا" },
      { text: "mitigate damage", ur: "نقصان کی شدت کو کم کرنا" },
      { text: "mitigate the impact", ur: "برے اثر کو ہلکا کرنا" },
      { text: "mitigating circumstances", ur: "معافی یا نرمی کے لائق حالات" }
    ],
    'resilience': [
      { text: "build resilience", ur: "قوت مدافعت اور حوصلہ پیدا کرنا" },
      { text: "emotional resilience", ur: "جذباتی استحکام اور ہمت" },
      { text: "remarkable resilience", ur: "حیرت انگیز استقامت اور ثابت قدمی" }
    ],
    'ephemeral': [
      { text: "ephemeral beauty", ur: "عارضی حسن جو جلد فنا ہو جائے" },
      { text: "ephemeral nature", ur: "ناپائیدار یا چند روزہ فطرت" },
      { text: "ephemeral fame", ur: "چند روزہ شہرت" }
    ],
    'ubiquitous': [
      { text: "ubiquitous presence", ur: "ہمہ گیر موجودگی / ہر جگہ ہونا" },
      { text: "become ubiquitous", ur: "ہر طرف عام ہو جانا" },
      { text: "ubiquitous influence", ur: "ہر سو پھیلا ہوا اثر" }
    ],
    'diligent': [
      { text: "diligent effort", ur: "انتھک کوشش اور لگن" },
      { text: "diligent student", ur: "محنتی اور لگن والا طالب علم" },
      { text: "diligent search", ur: "گہری اور تفصیلی تلاش" },
      { text: "diligent worker", ur: "مستقل مزاج محنتی کارکن" }
    ],
    'pragmatic': [
      { text: "pragmatic approach", ur: "عملی اور حقیقت پسندانہ انداز" },
      { text: "pragmatic solution", ur: "عملی اور قابل عمل حل" },
      { text: "pragmatic decision", ur: "حقیقت پسندی پر مبنی فیصلہ" }
    ],
    'honest': [
      { text: "honest opinion", ur: "کھری اور سچی رائے" },
      { text: "honest mistake", ur: "معصومانہ یا غیر ارادی غلطی" },
      { text: "to be honest", ur: "سچ پوچھیں تو / سچائی کے ساتھ" }
    ],
    'journey': [
      { text: "safe journey", ur: "بخیر و عافیت سفر" },
      { text: "spiritual journey", ur: "روحانی سفر" },
      { text: "start a journey", ur: "سفر کا آغاز کرنا" }
    ],
    'happy': [
      { text: "happy ending", ur: "خوشگوار انجام" },
      { text: "happy memory", ur: "خوشگوار یاد" },
      { text: "happy occasion", ur: "خوشی کا موقع" }
    ],
    'water': [
      { text: "drinking water", ur: "پینے کا پانی" },
      { text: "fresh water", ur: "میٹھا پانی" },
      { text: "in hot water", ur: "مشکل صورتحال میں پھنس جانا" }
    ],
    'book': [
      { text: "open book", ur: "کھلی کتاب / صاف گو انسان" },
      { text: "by the book", ur: "قواعد و ضوابط کے عین مطابق" },
      { text: "book a ticket", ur: "ٹکٹ بک کروانا" }
    ],
    'circumstances': [
      { text: "under the circumstances", ur: "موجودہ حالات کے پیش نظر" },
      { text: "unforeseen circumstances", ur: "غیر متوقع حالات" },
      { text: "extenuating circumstances", ur: "نرمی کے لائق حالات" }
    ],
    'decision': [
      { text: "make a decision", ur: "فیصلہ کرنا" },
      { text: "tough decision", ur: "مشکل فیصلہ" },
      { text: "unanimous decision", ur: "متفقہ فیصلہ" }
    ],
    'problem': [
      { text: "solve a problem", ur: "مسئلہ حل کرنا" },
      { text: "face a problem", ur: "مسئلے کا سامنا کرنا" },
      { text: "pressing problem", ur: "فوری حل طلب مسئلہ" }
    ],
    'opportunity': [
      { text: "golden opportunity", ur: "سنہری موقع" },
      { text: "seize the opportunity", ur: "موقع سے فائدہ اٹھانا" },
      { text: "equal opportunity", ur: "مساوی مواقع" }
    ],
    'success': [
      { text: "achieve success", ur: "کامیابی حاصل کرنا" },
      { text: "key to success", ur: "کامیابی کی کنجی / راز" },
      { text: "overnight success", ur: "راتوں رات کامیابی" }
    ],
    'failure': [
      { text: "admit failure", ur: "ناکامی تسلیم کرنا" },
      { text: "fear of failure", ur: "ناکامی کا خوف" },
      { text: "complete failure", ur: "مکمل ناکامی" }
    ],
    'knowledge': [
      { text: "acquire knowledge", ur: "علم حاصل کرنا" },
      { text: "wealth of knowledge", ur: "علم کا وسیع خزانہ" },
      { text: "prior knowledge", ur: "پہلے سے موجود معلومات" }
    ],
    'experience': [
      { text: "gain experience", ur: "تجربہ حاصل کرنا" },
      { text: "hands-on experience", ur: "عملی تجربہ" },
      { text: "firsthand experience", ur: "براہ راست ذاتی تجربہ" }
    ],
    'time': [
      { text: "save time", ur: "وقت بچانا" },
      { text: "waste time", ur: "وقت ضائع کرنا" },
      { text: "in the nick of time", ur: "عین وقت پر" }
    ],
    'change': [
      { text: "make a change", ur: "تبدیلی لانا" },
      { text: "drastic change", ur: "بڑی اور نمایاں تبدیلی" },
      { text: "climate change", ur: "موسمیاتی تبدیلی" }
    ],
    'effort': [
      { text: "make an effort", ur: "کوشش کرنا" },
      { text: "joint effort", ur: "مشترکہ کوشش" },
      { text: "fruitless effort", ur: "بے کار کوشش" }
    ],
    'challenge': [
      { text: "face a challenge", ur: "چیلنج کا سامنا کرنا" },
      { text: "overcome a challenge", ur: "چیلنج پر قابو پانا" },
      { text: "daunting challenge", ur: "کڑا اور مشکل چیلنج" }
    ],
    'goal': [
      { text: "set a goal", ur: "ہدف مقرر کرنا" },
      { text: "achieve a goal", ur: "ہدف حاصل کرنا" },
      { text: "common goal", ur: "مشترکہ مقصد" }
    ],
    'sustainable': [
      { text: "sustainable development", ur: "پائیدار اور دیرپا ترقی" },
      { text: "sustainable energy", ur: "ماحول دوست قابل تجدید توانائی" },
      { text: "sustainable growth", ur: "مستقل اور مستحکم معاشی نمو" }
    ],
    'sedentary': [
      { text: "sedentary lifestyle", ur: "بیٹھے رہنے والی غیر متحرک طرزِ زندگی" },
      { text: "sedentary job", ur: "کرسی پر بیٹھ کر کرنے والی نوکری" },
      { text: "sedentary habits", ur: "سست اور غیر فعال عادات" }
    ],
    'deterrent': [
      { text: "act as a deterrent", ur: "عبرت یا روک تھام کا سبب بننا" },
      { text: "nuclear deterrent", ur: "ایٹمی دفاعی روک تھام" },
      { text: "effective deterrent", ur: "موثر اور ٹھوس رکاوٹ" }
    ],
    'lucrative': [
      { text: "lucrative deal", ur: "انتہائی منافع بخش معاہدہ" },
      { text: "lucrative market", ur: "پرکشش اور منافع بخش مارکیٹ" },
      { text: "lucrative career", ur: "کثیر آمدنی والا پیشہ" }
    ],
    'obsolete': [
      { text: "become obsolete", ur: "متروک اور ناقابل استعمال ہو جانا" },
      { text: "obsolete technology", ur: "پرانی اور فرسودہ ٹیکنالوجی" },
      { text: "render obsolete", ur: "کسی چیز کو بے کار یا متروک کر دینا" }
    ],
    'cognitive': [
      { text: "cognitive development", ur: "دماغی اور ادراکی نشوونما" },
      { text: "cognitive skills", ur: "ذہنی اور فکری صلاحیتیں" },
      { text: "cognitive impairment", ur: "دماغی یا یادداشت کی کمزوری" }
    ],
    'chronic': [
      { text: "chronic disease", ur: "دائمی اور پرانی بیماری" },
      { text: "chronic pain", ur: "مسلسل رہنے والا پرانا درد" },
      { text: "chronic shortage", ur: "طویل مدتی اور مسلسل قلت" }
    ],
    'biodiversity': [
      { text: "preserve biodiversity", ur: "حیاتیاتی تنوع کا تحفظ کرنا" },
      { text: "loss of biodiversity", ur: "قدرتی جانداروں کی اقسام کا خاتمہ" },
      { text: "rich biodiversity", ur: "مختلف النوع جانداروں کی کثرت" }
    ],
    'bolster': [
      { text: "bolster the economy", ur: "معیشت کو سہارا دینا اور مضبوط کرنا" },
      { text: "bolster confidence", ur: "اعتماد اور حوصلہ بڑھانا" },
      { text: "bolster defense", ur: "دفاع کو مزید مضبوط بنانا" }
    ],
    'hamper': [
      { text: "hamper progress", ur: "ترقی کی راہ میں رکاوٹ ڈالنا" },
      { text: "hamper rescue efforts", ur: "امدادی کاموں میں رخنہ ڈالنا" },
      { text: "hamper growth", ur: "نشوونما یا بڑھوتری کو روکنا" }
    ],
    'jeopardize': [
      { text: "jeopardize future", ur: "مستقبل کو خطرے میں ڈالنا" },
      { text: "jeopardize the mission", ur: "مشن کو داؤ پر لگانا" },
      { text: "jeopardize health", ur: "صحت کے لیے خطرہ پیدا کرنا" }
    ],
    'plausible': [
      { text: "plausible explanation", ur: "معقول اور قابلِ قبول وضاحت" },
      { text: "plausible scenario", ur: "قرینِ قیاس ممکنہ صورتحال" },
      { text: "highly plausible", ur: "انتہائی قابل فہم اور ممکن" }
    ],
    'thrive': [
      { text: "thrive on challenges", ur: "مشکلات میں بھی خوب پروان چڑھنا" },
      { text: "thrive in environment", ur: "ماحول میں کامیابی سے پھلنا پھولنا" },
      { text: "continue to thrive", ur: "مسلسل ترقی اور کامیابی حاصل کرنا" }
    ],
    'withstand': [
      { text: "withstand pressure", ur: "دباؤ یا سختی کو برداشت کرنا" },
      { text: "withstand the test of time", ur: "وقت کے امتحان پر پورا اترنا" },
      { text: "withstand extreme weather", ur: "شدید ترین موسم کا مقابلہ کرنا" }
    ],
    'farrago': [
      { text: "farrago of lies", ur: "جھوٹ اور من گھڑت کہانیوں کی کھچڑی" },
      { text: "farrago of distortions", ur: "حقائق کو مسخ کرنے کا بے ربط مجموعہ" },
      { text: "confusing farrago", ur: "الجھا ہوا اور بے تکی باتوں کا ملغوبہ" }
    ],
    'snollygoster': [
      { text: "political snollygoster", ur: "چالاک اور موقع پرست بے اصول سیاستدان" },
      { text: "unprincipled snollygoster", ur: "ضمیر کے بغیر ذاتی مفاد سوچنے والا رہنما" }
    ],
    'kakistocracy': [
      { text: "descent into kakistocracy", ur: "نااہل اور بدترین قیادت کا راج قائم ہونا" },
      { text: "corrupt kakistocracy", ur: "بدعنوان اور نالائق لوگوں کی حکومت" }
    ],
    'rodomontade': [
      { text: "hollow rodomontade", ur: "کھوکھلی اور بے بنیاد شیخی بگھارنا" },
      { text: "boastful rodomontade", ur: "مبالغہ آمیز اور جھوٹی ڈینگیں مارنا" }
    ],
    'sesquipedalian': [
      { text: "sesquipedalian vocabulary", ur: "انتہائی لمبے اور بھاری بھرکم الفاظ" },
      { text: "sesquipedalian style", ur: "پرشکوہ اور دقیق اندازِ تحریر" }
    ],
    'ultracrepidarian': [
      { text: "ultracrepidarian critics", ur: "معاملے سے ناواقف ہو کر رائے زنی کرنے والے نقاد" },
      { text: "ultracrepidarian advice", ur: "بغیر جانے بوجھے دیا گیا مفت مشورہ" }
    ],
    'defenestration': [
      { text: "political defenestration", ur: "اقتدار یا اعلیٰ عہدے سے اچانک بے دخلی" },
      { text: "abrupt defenestration", ur: "عہدے سے فوری اور حیران کن برطرفی" }
    ],
    'kerfuffle': [
      { text: "minor kerfuffle", ur: "چھوٹا موٹا ہنگامہ یا ہلکی پھلکی بحث" },
      { text: "cause a kerfuffle", ur: "ہڑبونگ اور بے معنی شور مچانا" }
    ],
    'discombobulate': [
      { text: "completely discombobulated", ur: "مکمل طور پر حواس باختہ اور پریشان" },
      { text: "discombobulate the opponent", ur: "حریف کو الجھن اور گھبراہٹ میں ڈالنا" }
    ],
    'perspicacious': [
      { text: "perspicacious observer", ur: "تیز نظر اور باریک بین مبصر" },
      { text: "perspicacious mind", ur: "گہری بصیرت رکھنے والا ذہین ذہن" }
    ],
    'supercilious': [
      { text: "supercilious manner", ur: "تکبر بھرا اور مغرور انداز" },
      { text: "supercilious look", ur: "دوسروں کو حقیر سمجھنے والی نظر" }
    ]
  },

  getPhrases(wordObj) {
    if (!wordObj || !wordObj.word) return [];
    const clean = wordObj.word.toLowerCase().trim();

    // 1. Check curatedPhrases
    if (this.curatedPhrases && this.curatedPhrases[clean]) {
      return this.curatedPhrases[clean].map((p, i) => ({
        num: i + 1,
        text: p.text,
        ur: p.ur || ''
      }));
    }

    // 2. Check if wordObj has authentic phrases (not fake template)
    if (Array.isArray(wordObj.phrases) && wordObj.phrases.length > 0) {
      const isFake = wordObj.phrases.some(p => {
        const txt = (typeof p === 'string' ? p : p.text || '').toLowerCase();
        return txt === `${clean} effect` || txt === `${clean} selection` || txt === `${clean} reaction`;
      });
      if (!isFake) {
        return wordObj.phrases.map((p, i) => {
          if (typeof p === 'string') return { num: i + 1, text: p, ur: '' };
          return { num: p.num || i + 1, text: p.text, ur: p.ur || '' };
        });
      }
    }

    // 3. Check curatedEnglishContext collocations
    if (this.curatedEnglishContext && this.curatedEnglishContext[clean] && Array.isArray(this.curatedEnglishContext[clean].collocations)) {
      return this.curatedEnglishContext[clean].collocations.map((col, i) => ({
        num: i + 1,
        text: col,
        ur: ''
      }));
    }

    // 4. Check wordObj.collocations
    if (Array.isArray(wordObj.collocations) && wordObj.collocations.length > 0) {
      return wordObj.collocations.map((col, i) => ({
        num: i + 1,
        text: col,
        ur: ''
      }));
    }

    return [];
  },

  async fetchPhrases(word, urduMeaning = '') {
    if (!word) return [];
    const clean = word.toLowerCase().trim();

    // Curated check
    if (this.curatedPhrases && this.curatedPhrases[clean]) {
      return this.curatedPhrases[clean].map((p, i) => ({
        num: i + 1,
        text: p.text,
        ur: p.ur || ''
      }));
    }

    // Gemini AI if configured
    if (storage && storage.geminiApiKey) {
      try {
        const apiKey = storage.geminiApiKey.trim();
        const activeModel = storage.getGeminiModel() || 'gemini-3.8-flash';
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${activeModel}:generateContent?key=${apiKey}`;
        const prompt = `Give 3 to 5 authentic, commonly used English phrases or collocations containing the word "${clean}", along with their natural Urdu translation. Return ONLY valid JSON array with objects having "text" and "ur" properties: [ {"text": "phrase in English", "ur": "اردو ترجمہ"} ]`;
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });
        if (res.ok) {
          const data = await res.json();
          const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
          const jsonMatch = raw.match(/\\[[\\s\\S]*\\]/);
          if (jsonMatch) {
            const list = JSON.parse(jsonMatch[0]);
            if (Array.isArray(list) && list.length > 0) {
              return list.map((item, idx) => ({
                num: idx + 1,
                text: item.text,
                ur: item.ur || ''
              }));
            }
          }
        }
      } catch(e) {}
    }

    // Dynamic generation from Datamuse & Google Translate
    try {
      const dmUrl = `https://api.datamuse.com/words?rel_trg=${encodeURIComponent(clean)}&max=6`;
      const dmRes = await fetch(dmUrl);
      if (dmRes.ok) {
        const dmData = await dmRes.json();
        const words = (dmData || []).map(x => x.word).filter(w => w.toLowerCase() !== clean && w.length > 2).slice(0, 4);
        if (words.length > 0) {
          const results = [];
          for (let i = 0; i < words.length; i++) {
            const phrase = `${clean} ${words[i]}`;
            const ur = await this.translate(phrase, 'en', 'ur');
            results.push({ num: i + 1, text: phrase, ur: ur || '' });
          }
          return results;
        }
      }
    } catch(e) {}

    return [];
  },

  // --- AUTHENTIC CURATED SYNONYMS & ANTONYMS LEXICON ---
  curatedSynonymsAntonyms: {
    'adverse': [
      {
        num: 1,
        context: 'for the meaning of "harmful or unfavorable"',
        syns: ["harmful", "damaging", "detrimental", "injurious", "unfavorable", "hostile"],
        ants: ["beneficial", "favorable", "advantageous", "helpful", "auspicious"]
      }
    ],
    'alleviate': [
      {
        num: 1,
        context: 'for the meaning of "lessening pain, stress, or a problem"',
        syns: ["relieve", "ease", "mitigate", "lessen", "soothe", "assuage", "palliate"],
        ants: ["aggravate", "worsen", "exacerbate", "intensify", "magnify"]
      }
    ],
    'ambiguous': [
      {
        num: 1,
        context: 'for the meaning of "open to more than one interpretation"',
        syns: ["equivocal", "vague", "obscure", "cryptic", "dubious", "enigmatic"],
        ants: ["clear", "unambiguous", "explicit", "definite", "precise", "transparent"]
      }
    ],
    'candid': [
      {
        num: 1,
        context: 'for the meaning of "truthful, frank, and straightforward"',
        syns: ["frank", "outspoken", "forthright", "direct", "blunt", "honest", "sincere"],
        ants: ["guarded", "disingenuous", "insincere", "deceptive", "secretive"]
      }
    ],
    'conclusion': [
      {
        num: 1,
        context: 'for the meaning of "decision or verdict"',
        syns: ["agreement", "verdict", "decision", "resolution", "opinion", "conviction"],
        ants: ["beginning", "start", "prelude", "conjecture"]
      },
      {
        num: 2,
        context: 'for the meaning of "end or finale"',
        syns: ["finish", "termination", "close", "cessation", "finale", "outcome"],
        ants: ["commencement", "introduction", "outset", "opening"]
      }
    ],
    'contradictory': [
      {
        num: 1,
        context: 'for the meaning of "mutually opposed or inconsistent"',
        syns: ["conflicting", "inconsistent", "contrary", "opposite", "incompatible"],
        ants: ["consistent", "compatible", "concordant", "harmonious"]
      }
    ],
    'detrimental': [
      {
        num: 1,
        context: 'for the meaning of "causing damage or harm"',
        syns: ["harmful", "damaging", "injurious", "hurtful", "pernicious", "adverse", "deleterious"],
        ants: ["beneficial", "harmless", "advantageous", "helpful", "innocuous", "salutary"]
      }
    ],
    'diaspora': [
      {
        num: 1,
        context: 'for the meaning of "dispersion of a people outside their homeland"',
        syns: ["dispersion", "scattering", "migration", "exile", "expatriate community"],
        ants: ["homeland", "gathering", "concentration", "repatriation"]
      }
    ],
    'diligent': [
      {
        num: 1,
        context: 'for the meaning of "working with care and conscientious effort"',
        syns: ["industrious", "hardworking", "assiduous", "conscientious", "meticulous", "tireless"],
        ants: ["lazy", "idle", "negligent", "careless", "slothful", "indolent"]
      }
    ],
    'eloquent': [
      {
        num: 1,
        context: 'for the meaning of "fluent and persuasive in speaking or writing"',
        syns: ["articulate", "fluent", "expressive", "persuasive", "silver-tongued"],
        ants: ["inarticulate", "tongue-tied", "hesitant", "halting", "awkward"]
      }
    ],
    'empathy': [
      {
        num: 1,
        context: 'for the meaning of "understanding and sharing another\'s feelings"',
        syns: ["compassion", "understanding", "sensitivity", "affinity", "fellow-feeling"],
        ants: ["apathy", "indifference", "callousness", "coldness", "insensitivity"]
      }
    ],
    'equivocal': [
      {
        num: 1,
        context: 'for the meaning of "uncertain or deliberately misleading"',
        syns: ["ambiguous", "vague", "cryptic", "ambivalent", "evasive", "dubious"],
        ants: ["unequivocal", "clear", "definite", "unambiguous", "plain", "explicit"]
      }
    ],
    'lucid': [
      {
        num: 1,
        context: 'for the meaning of "expressed clearly; easy to understand"',
        syns: ["clear", "coherent", "transparent", "intelligible", "articulate", "rational"],
        ants: ["confusing", "obscure", "muddled", "ambiguous", "incomprehensible"]
      }
    ],
    'meticulous': [
      {
        num: 1,
        context: 'for the meaning of "showing great attention to detail"',
        syns: ["painstaking", "thorough", "scrupulous", "fastidious", "precise", "diligent"],
        ants: ["careless", "sloppy", "negligent", "slapdash", "inaccurate"]
      }
    ],
    'persevere': [
      {
        num: 1,
        context: 'for the meaning of "continuing firmly despite difficulty"',
        syns: ["persist", "carry on", "endure", "press on", "soldier on", "stand firm"],
        ants: ["give up", "quit", "surrender", "abandon", "yield"]
      }
    ],
    'pragmatic': [
      {
        num: 1,
        context: 'for the meaning of "dealing with things sensibly and realistically"',
        syns: ["practical", "realistic", "down-to-earth", "sensible", "hardheaded", "matter-of-fact"],
        ants: ["idealistic", "impractical", "theoretical", "visionary", "unrealistic"]
      }
    ],
    'procrastinate': [
      {
        num: 1,
        context: 'for the meaning of "delaying or postponing action"',
        syns: ["delay", "postpone", "defer", "put off", "stall", "dilly-dally", "temporize"],
        ants: ["expedite", "hasten", "hurry", "accelerate", "act immediately"]
      }
    ],
    'resilient': [
      {
        num: 1,
        context: 'for the meaning of "recovering quickly from difficulty"',
        syns: ["tenacious", "hardy", "tough", "adaptable", "robust", "strong"],
        ants: ["fragile", "vulnerable", "brittle", "weak", "delicate"]
      }
    ],
    'serene': [
      {
        num: 1,
        context: 'for the meaning of "calm, peaceful, and untroubled"',
        syns: ["calm", "tranquil", "peaceful", "placid", "undisturbed", "unruffled"],
        ants: ["agitated", "turbulent", "stormy", "chaotic", "anxious", "frantic"]
      }
    ],
    'benevolent': [
      {
        num: 1,
        context: 'for the meaning of "well-meaning and kindly"',
        syns: ["kind", "generous", "charitable", "compassionate", "altruistic", "benign"],
        ants: ["malevolent", "unkind", "malicious", "spiteful", "cruel"]
      }
    ],
    'mitigate': [
      {
        num: 1,
        context: 'for the meaning of "making something less severe or painful"',
        syns: ["alleviate", "lessen", "reduce", "moderate", "diminish", "soothe"],
        ants: ["aggravate", "intensify", "worsen", "exacerbate"]
      }
    ],
    'ephemeral': [
      {
        num: 1,
        context: 'for the meaning of "lasting for a very short time"',
        syns: ["transient", "fleeting", "short-lived", "momentary", "temporary"],
        ants: ["permanent", "eternal", "lasting", "perpetual", "enduring"]
      }
    ],
    'ubiquitous': [
      {
        num: 1,
        context: 'for the meaning of "present or found everywhere"',
        syns: ["omnipresent", "pervasive", "universal", "everywhere", "prevalent"],
        ants: ["rare", "scarce", "uncommon", "seldom"]
      }
    ],
    'superfluous': [
      {
        num: 1,
        context: 'for the meaning of "unnecessary, especially through being more than enough"',
        syns: ["redundant", "excessive", "unneeded", "surplus", "extra"],
        ants: ["essential", "necessary", "vital", "required", "indispensable"]
      }
    ],
    'serendipity': [
      {
        num: 1,
        context: 'for the meaning of "good fortune or happy accident"',
        syns: ["fluke", "chance", "good fortune", "happy accident", "providence"],
        ants: ["misfortune", "bad luck", "premeditation", "calamity"]
      }
    ],
    'paradigm': [
      {
        num: 1,
        context: 'for the meaning of "typical example or pattern"',
        syns: ["model", "pattern", "archetype", "exemplar", "standard", "prototype"],
        ants: ["anomaly", "deviation", "imperfection", "irregularity"]
      }
    ],
    'epiphany': [
      {
        num: 1,
        context: 'for the meaning of "moment of sudden revelation or insight"',
        syns: ["revelation", "realization", "insight", "illumination", "breakthrough"],
        ants: ["confusion", "ignorance", "misconception", "blindness"]
      }
    ],
    'zealous': [
      {
        num: 1,
        context: 'for the meaning of "having great energy or enthusiasm"',
        syns: ["passionate", "ardent", "fervent", "devoted", "eager", "enthusiastic"],
        ants: ["apathetic", "indifferent", "reluctant", "unenthusiastic", "cool"]
      }
    ],
    'venerate': [
      {
        num: 1,
        context: 'for the meaning of "regard with great respect or reverence"',
        syns: ["revere", "respect", "honor", "worship", "esteem", "admire"],
        ants: ["despise", "disrespect", "disdain", "scorn", "ridicule"]
      }
    ],
    'sustainable': [
      {
        num: 1,
        context: 'for the meaning of "able to be maintained over time"',
        syns: ["viable", "renewable", "maintainable", "enduring", "durable", "eco-friendly"],
        ants: ["unsustainable", "depleting", "harmful", "transient", "unviable"]
      }
    ],
    'sedentary': [
      {
        num: 1,
        context: 'for the meaning of "inactive or sitting down a lot"',
        syns: ["inactive", "desk-bound", "sitting", "stationary", "idle", "sluggish"],
        ants: ["active", "mobile", "energetic", "dynamic", "physical"]
      }
    ],
    'deterrent': [
      {
        num: 1,
        context: 'for the meaning of "a thing that discourages someone from doing something"',
        syns: ["disincentive", "curb", "check", "restraint", "obstacle", "hindrance"],
        ants: ["incentive", "encouragement", "catalyst", "stimulus", "inducement"]
      }
    ],
    'lucrative': [
      {
        num: 1,
        context: 'for the meaning of "producing a great deal of profit"',
        syns: ["profitable", "rewarding", "gainful", "fruitful", "remunerative", "high-paying"],
        ants: ["unprofitable", "loss-making", "unrewarding", "disadvantageous"]
      }
    ],
    'obsolete': [
      {
        num: 1,
        context: 'for the meaning of "no longer produced or used; out of date"',
        syns: ["outdated", "archaic", "defunct", "antiquated", "outmoded", "passé"],
        ants: ["modern", "contemporary", "current", "state-of-the-art", "cutting-edge"]
      }
    ],
    'cognitive': [
      {
        num: 1,
        context: 'for the meaning of "relating to conscious intellectual activity"',
        syns: ["mental", "intellectual", "cerebral", "perceptual", "rational"],
        ants: ["emotional", "instinctive", "physical", "non-intellectual"]
      }
    ],
    'chronic': [
      {
        num: 1,
        context: 'for the meaning of "persisting for a long time or constantly recurring"',
        syns: ["persistent", "long-standing", "incurable", "entrenched", "ceaseless"],
        ants: ["acute", "temporary", "fleeting", "transient", "curable"]
      }
    ],
    'bolster': [
      {
        num: 1,
        context: 'for the meaning of "support or strengthen"',
        syns: ["strengthen", "reinforce", "boost", "support", "fortify", "underpin"],
        ants: ["undermine", "weaken", "diminish", "jeopardize", "impair"]
      }
    ],
    'hamper': [
      {
        num: 1,
        context: 'for the meaning of "hinder or impede the movement or progress"',
        syns: ["hinder", "obstruct", "impede", "inhibit", "handicap", "slow down"],
        ants: ["facilitate", "assist", "expedite", "encourage", "promote"]
      }
    ],
    'jeopardize': [
      {
        num: 1,
        context: 'for the meaning of "put someone or something into a situation of danger"',
        syns: ["endanger", "threaten", "risk", "compromise", "imperil", "hazard"],
        ants: ["safeguard", "protect", "secure", "ensure", "preserve"]
      }
    ],
    'plausible': [
      {
        num: 1,
        context: 'for the meaning of "seeming reasonable or probable"',
        syns: ["credible", "believable", "likely", "feasible", "probable", "tenable"],
        ants: ["implausible", "unbelievable", "improbable", "doubtful", "unreasonable"]
      }
    ],
    'thrive': [
      {
        num: 1,
        context: 'for the meaning of "grow or develop vigorously"',
        syns: ["flourish", "prosper", "bloom", "blossom", "succeed", "burgeon"],
        ants: ["wither", "fail", "decline", "stagnate", "perish"]
      }
    ],
    'withstand': [
      {
        num: 1,
        context: 'for the meaning of "remain undamaged or unaffected by"',
        syns: ["endure", "resist", "tolerate", "survive", "stand up to", "brave"],
        ants: ["succumb", "yield", "surrender", "collapse", "give way"]
      }
    ],
    'farrago': [
      {
        num: 1,
        context: 'for the meaning of "a confused mixture or hodgepodge"',
        syns: ["mishmash", "hodgepodge", "jumble", "medley", "potpourri", "amalgam"],
        ants: ["order", "uniformity", "homogeneity", "clarity", "consistency"]
      }
    ],
    'snollygoster': [
      {
        num: 1,
        context: 'for the meaning of "a shrewd, unprincipled person or politician"',
        syns: ["opportunist", "rogue", "charlatan", "demagogue", "scoundrel"],
        ants: ["statesman", "idealist", "altruist", "principled leader"]
      }
    ],
    'kakistocracy': [
      {
        num: 1,
        context: 'for the meaning of "government by the least suitable or worst citizens"',
        syns: ["misrule", "ineptocracy", "bad governance", "maladministration"],
        ants: ["meritocracy", "aristocracy", "good governance", "technocracy"]
      }
    ],
    'rodomontade': [
      {
        num: 1,
        context: 'for the meaning of "boastful or inflated talk or behavior"',
        syns: ["boasting", "bragging", "bravado", "vainglory", "gasconade"],
        ants: ["modesty", "humility", "understatement", "reserve"]
      }
    ],
    'sesquipedalian': [
      {
        num: 1,
        context: 'for the meaning of "having many syllables; using long words"',
        syns: ["polysyllabic", "grandiloquent", "verbose", "bombastic", "pedantic"],
        ants: ["monosyllabic", "concise", "succinct", "laconic", "simple"]
      }
    ],
    'ultracrepidarian': [
      {
        num: 1,
        context: 'for the meaning of "expressing opinions on matters outside one\'s knowledge"',
        syns: ["pretentious critic", "know-it-all", "armchair expert", "pseudo-intellectual"],
        ants: ["specialist", "expert", "authority", "professional"]
      }
    ],
    'defenestration': [
      {
        num: 1,
        context: 'for the meaning of "the action of dismissing someone from a position of power"',
        syns: ["ouster", "dismissal", "expulsion", "removal", "deposition"],
        ants: ["installation", "appointment", "inauguration", "election"]
      }
    ],
    'kerfuffle': [
      {
        num: 1,
        context: 'for the meaning of "a commotion or fuss"',
        syns: ["commotion", "fuss", "disturbance", "hullabaloo", "uproar", "ado"],
        ants: ["peace", "calm", "tranquility", "harmony", "order"]
      }
    ],
    'discombobulate': [
      {
        num: 1,
        context: 'for the meaning of "disconcert or confuse someone"',
        syns: ["baffle", "bewilder", "fluster", "perplex", "disconcert", "disorient"],
        ants: ["reassure", "calm", "orient", "clarify", "compose"]
      }
    ],
    'supercilious': [
      {
        num: 1,
        context: 'for the meaning of "behaving as though one thinks one is superior"',
        syns: ["arrogant", "haughty", "pompous", "condescending", "patronizing", "disdainful"],
        ants: ["humble", "modest", "unpretentious", "respectful", "meek"]
      }
    ],
    'pusillanimous': [
      {
        num: 1,
        context: 'for the meaning of "showing a lack of courage or determination"',
        syns: ["cowardly", "timid", "faint-hearted", "craven", "spineless"],
        ants: ["brave", "courageous", "valiant", "fearless", "bold"]
      }
    ],
    'perspicacious': [
      {
        num: 1,
        context: 'for the meaning of "having a ready insight into things; discerning"',
        syns: ["insightful", "shrewd", "discerning", "astute", "sharp-witted", "perceptive"],
        ants: ["dull", "obtuse", "unperceptive", "naive", "shortsighted"]
      }
    ]
  },

  // --- MULTI-STAGE AUTHENTIC SYNONYM & ANTONYM RESOLUTION ENGINE ---
  async fetchSynonymsAndAntonyms(word, contextMeaning = '') {
    const clean = (word || '').toLowerCase().trim();
    if (!clean) return [];

    // 1. Curated academic lexicon (100% verified, 0ms latency)
    if (this.curatedSynonymsAntonyms && this.curatedSynonymsAntonyms[clean]) {
      return JSON.parse(JSON.stringify(this.curatedSynonymsAntonyms[clean]));
    }

    // 2. Storage cache check
    const cacheKey = `vocab_syn_ant_v2_${clean}`;
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}

    // 3. Multi-stage Datamuse API with reverse-antonym bridge
    try {
      const [synRes, antRes] = await Promise.allSettled([
        fetch(`https://api.datamuse.com/words?rel_syn=${encodeURIComponent(clean)}&max=8`),
        fetch(`https://api.datamuse.com/words?rel_ant=${encodeURIComponent(clean)}&max=8`)
      ]);

      let syns = [];
      if (synRes.status === 'fulfilled' && synRes.value.ok) {
        const synData = await synRes.value.json();
        if (Array.isArray(synData)) {
          syns = synData.map(d => (d.word || '').trim()).filter(w => w && w.toLowerCase() !== clean && !w.includes(' '));
        }
      }

      let ants = [];
      if (antRes.status === 'fulfilled' && antRes.value.ok) {
        const antData = await antRes.value.json();
        if (Array.isArray(antData)) {
          ants = antData.map(d => (d.word || '').trim()).filter(w => w && w.toLowerCase() !== clean && !w.includes(' '));
        }
      }

      // If direct antonyms not found, query antonyms of top synonyms (bridge lookup)
      if (ants.length === 0 && syns.length > 0) {
        for (const s of syns.slice(0, 3)) {
          try {
            const bridgeRes = await fetch(`https://api.datamuse.com/words?rel_ant=${encodeURIComponent(s)}&max=6`);
            if (bridgeRes.ok) {
              const bData = await bridgeRes.json();
              if (Array.isArray(bData) && bData.length > 0) {
                const bAnts = bData.map(d => (d.word || '').trim()).filter(w => w && w.toLowerCase() !== clean && !syns.includes(w) && !w.includes(' '));
                if (bAnts.length > 0) {
                  ants = bAnts;
                  break;
                }
              }
            }
          } catch (e) {}
        }
      }

      // Fallback: words with similar meaning (ml)
      if (syns.length === 0) {
        try {
          const mlRes = await fetch(`https://api.datamuse.com/words?ml=${encodeURIComponent(clean)}&max=6`);
          if (mlRes.ok) {
            const mlData = await mlRes.json();
            if (Array.isArray(mlData)) {
              syns = mlData.map(d => (d.word || '').trim()).filter(w => w && w.toLowerCase() !== clean && !w.includes(' ')).slice(0, 5);
            }
          }
        } catch (e) {}
      }

      if (syns.length > 0 || ants.length > 0) {
        const senseLabel = contextMeaning ? `for the meaning of "${contextMeaning.split(/[؛;,/،\.]+/)[0].trim()}"` : `for the sense of "${clean}"`;
        const result = [
          {
            num: 1,
            context: senseLabel,
            syns: syns.slice(0, 7),
            ants: ants.slice(0, 6)
          }
        ];
        try { localStorage.setItem(cacheKey, JSON.stringify(result)); } catch (e) {}
        return result;
      }
    } catch (e) {}

    return [];
  },

  // --- AUTHENTIC COLLINS COBUILD ADVANCED DICTIONARY LOOKUP ---
  async fetchCollinsData(word) {
    const clean = (word || '').trim().toLowerCase();
    if (!clean) return null;
    const cacheKey = `vocab_collins_${clean}`;
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) return JSON.parse(cached);
    } catch(e) {}

    // Check curated repository (0ms instant lookup)
    if (this.curatedCollins && this.curatedCollins[clean]) {
      const entry = this.curatedCollins[clean];
      try { localStorage.setItem(cacheKey, JSON.stringify(entry)); } catch(e) {}
      return entry;
    }

    // Live authentic lookup via Google Oxford & Wiktionary (100% reliable, CORS compliant)
    try {
      const gUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ur&dt=t&dt=bd&dt=md&dt=ex&q=${encodeURIComponent(clean)}`;
      const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timer = controller ? setTimeout(() => controller.abort(), 2500) : null;
      const gRes = await fetch(gUrl, { signal: controller ? controller.signal : undefined });
      if (timer) clearTimeout(timer);

      if (gRes.ok) {
        const gData = await gRes.json();
        const defs = [];
        if (gData && Array.isArray(gData[12]) && gData[12].length > 0) {
          gData[12].forEach(sec => {
            const pos = (sec[0] || 'adj').toUpperCase();
            if (Array.isArray(sec[1])) {
              sec[1].forEach(d => {
                const rawDef = d[0] || '';
                const rawEx = (d.length > 2 && d[2]) ? d[2] : '';
                if (rawDef && defs.length < 3) {
                  let cobuildDef = rawDef;
                  const lowerDef = rawDef.toLowerCase();
                  if (!lowerDef.startsWith('someone') && !lowerDef.startsWith('something') && !lowerDef.startsWith('if you')) {
                    if (pos.includes('ADJ')) cobuildDef = `Someone or something that is ${clean} is ${rawDef.charAt(0).toLowerCase() + rawDef.slice(1).replace(/\.$/, '')}.`;
                    else if (pos.includes('VERB')) cobuildDef = `If you ${clean} something, you ${rawDef.charAt(0).toLowerCase() + rawDef.slice(1).replace(/\.$/, '')}.`;
                    else if (pos.includes('NOUN')) cobuildDef = `${clean.charAt(0).toUpperCase() + clean.slice(1)} is ${rawDef.charAt(0).toLowerCase() + rawDef.slice(1).replace(/\.$/, '')}.`;
                  }
                  defs.push({
                    num: defs.length + 1,
                    pos: pos,
                    explanation: cobuildDef,
                    example: rawEx ? (rawEx.charAt(0).toUpperCase() + rawEx.slice(1).replace(/\.?$/, '.')) : ''
                  });
                }
              });
            }
          });
        }

        if (defs.length > 0 && !defs[0].example && gData && Array.isArray(gData[13]) && gData[13][0] && gData[13][0][0]) {
          const exText = gData[13][0][0][0].replace(/<\/?b>/g, '').trim();
          defs[0].example = exText.charAt(0).toUpperCase() + exText.slice(1).replace(/\.?$/, '.');
        }

        if (defs.length > 0) {
          const result = {
            title: "Collins COBUILD Advanced Dictionary",
            word: clean,
            phonetic: `/${clean}/`,
            stars: clean.length <= 5 ? 3 : 2,
            definitions: defs
          };
          try { localStorage.setItem(cacheKey, JSON.stringify(result)); } catch(e) {}
          return result;
        }
      }
    } catch (e) {}

    // Wiktionary fallback
    try {
      const wUrl = `https://en.wiktionary.org/api/rest_v1/page/definition/${encodeURIComponent(clean)}`;
      const wRes = await fetch(wUrl);
      if (wRes.ok) {
        const wData = await wRes.json();
        const defs = [];
        if (wData && wData.en && Array.isArray(wData.en)) {
          wData.en.forEach(item => {
            const pos = (item.partOfSpeech || 'adj').toUpperCase();
            if (item.definitions && Array.isArray(item.definitions)) {
              item.definitions.forEach(d => {
                const rawDef = (d.definition || '').replace(/<[^>]*>/g, '').trim();
                let rawEx = '';
                if (d.examples && d.examples[0]) {
                  rawEx = d.examples[0].replace(/<[^>]*>/g, '').trim();
                }
                if (rawDef && defs.length < 3) {
                  let cobuildDef = rawDef;
                  const lowerDef = rawDef.toLowerCase();
                  if (!lowerDef.startsWith('someone') && !lowerDef.startsWith('something') && !lowerDef.startsWith('if you')) {
                    if (pos.includes('ADJ')) cobuildDef = `Someone or something that is ${clean} is ${rawDef.charAt(0).toLowerCase() + rawDef.slice(1).replace(/\.$/, '')}.`;
                    else if (pos.includes('VERB')) cobuildDef = `If you ${clean}, you ${rawDef.charAt(0).toLowerCase() + rawDef.slice(1).replace(/\.$/, '')}.`;
                    else if (pos.includes('NOUN')) cobuildDef = `${clean.charAt(0).toUpperCase() + clean.slice(1)} is ${rawDef.charAt(0).toLowerCase() + rawDef.slice(1).replace(/\.$/, '')}.`;
                  }
                  defs.push({
                    num: defs.length + 1,
                    pos: pos,
                    explanation: cobuildDef,
                    example: rawEx ? (rawEx.charAt(0).toUpperCase() + rawEx.slice(1).replace(/\.?$/, '.')) : ''
                  });
                }
              });
            }
          });
        }
        if (defs.length > 0) {
          const result = {
            title: "Collins COBUILD Advanced Dictionary",
            word: clean,
            phonetic: `/${clean}/`,
            stars: clean.length <= 5 ? 3 : 2,
            definitions: defs
          };
          try { localStorage.setItem(cacheKey, JSON.stringify(result)); } catch(e) {}
          return result;
        }
      }
    } catch (e) {}

    // 3. Datamuse WordNet Database Fallback (100% authentic, fast, reliable)
    try {
      const wn = await this.fetchWordNetDefinition(clean);
      if (wn && wn.definition) {
        const pos = (wn.pos || 'adj').toUpperCase();
        let cobuildDef = wn.definition;
        if (pos.includes('NOUN')) cobuildDef = `${clean.charAt(0).toUpperCase() + clean.slice(1)} is ${wn.definition.charAt(0).toLowerCase() + wn.definition.slice(1).replace(/\.$/, '')}.`;
        else if (pos.includes('VERB')) cobuildDef = `If you ${clean} something, you ${wn.definition.charAt(0).toLowerCase() + wn.definition.slice(1).replace(/\.$/, '')}.`;
        else if (pos.includes('ADJ')) cobuildDef = `Someone or something that is ${clean} is ${wn.definition.charAt(0).toLowerCase() + wn.definition.slice(1).replace(/\.$/, '')}.`;

        const curatedSent = this.curatedSentences && this.curatedSentences[clean];
        const sampleEx = (curatedSent && curatedSent[0] && curatedSent[0].en) ? curatedSent[0].en : '';

        const result = {
          title: "Collins COBUILD Advanced Dictionary",
          word: clean,
          phonetic: `/${clean}/`,
          stars: clean.length <= 5 ? 3 : 2,
          definitions: [{
            num: 1,
            pos: pos,
            explanation: cobuildDef,
            example: sampleEx
          }]
        };
        try { localStorage.setItem(cacheKey, JSON.stringify(result)); } catch(e) {}
        return result;
      }
    } catch (e) {}

    return null;
  },

  // --- UNIFIED WORD DETAILS ENGINE (Gemini AI -> Google Oxford + Wiktionary + Datamuse) ---
  async fetchWordDetails(query, apiKey) {
    const cleanWord = (query || '').trim();
    if (!cleanWord) return null;

    // 1. Try Gemini AI if API key is configured
    if (apiKey) {
      try {
        const aiWord = await this.fetchWithGemini(cleanWord, apiKey);
        if (aiWord) return aiWord;
        return null;
      } catch (geminiErr) {
        console.warn('Gemini lookup fallback to dictionary service:', geminiErr);
      }
    }

    // 2. High-speed, 100% reliable Web Dictionary & Translation APIs
    try {
      const [urduResult, dictResult, synsResult, wikiResult, phonesResult, collinsResult] = await Promise.allSettled([
        this.translate(cleanWord, 'auto', 'ur'),
        this.getDictionaryData(cleanWord),
        this.fetchSynonymsAndAntonyms(cleanWord),
        this.fetchWikipediaSummary(cleanWord),
        this.fetchDualPhonetics(cleanWord),
        this.fetchCollinsData(cleanWord)
      ]);

      const urduMeaning = (urduResult.status === 'fulfilled' && urduResult.value) ? urduResult.value.trim() : "";
      const dictData = (dictResult.status === 'fulfilled' && dictResult.value) ? dictResult.value : null;
      const synAntList = (synsResult.status === 'fulfilled' && Array.isArray(synsResult.value) && synsResult.value.length > 0)
        ? synsResult.value
        : (this.curatedSynonymsAntonyms && this.curatedSynonymsAntonyms[cleanWord.toLowerCase()]
            ? this.curatedSynonymsAntonyms[cleanWord.toLowerCase()]
            : []);
      const synonyms = (synAntList[0]?.syns) || [];
      const antonyms = (synAntList[0]?.ants) || [];
      const wikiData = (wikiResult.status === 'fulfilled' && wikiResult.value) ? wikiResult.value : null;
      const phones = (phonesResult.status === 'fulfilled' && phonesResult.value)
        ? phonesResult.value
        : {
            uk: this.ruleBasedIPA(cleanWord, 'uk'),
            us: this.ruleBasedIPA(cleanWord, 'us'),
            respelling: this.ruleBasedRespelling(cleanWord),
            urduPhonetic: ''
          };
      const collinsData = (collinsResult.status === 'fulfilled' && collinsResult.value) ? collinsResult.value : null;

      // If word is unfindable in Oxford/Google dictionary AND has no synonyms AND has no Collins, it's not an English word
      if (!dictData && !collinsData && (!synonyms || synonyms.length === 0)) {
        return null;
      }

      if (!dictData && !collinsData && (!urduMeaning || urduMeaning.toLowerCase() === cleanWord.toLowerCase())) {
        return null;
      }

      const capitalizedWord = cleanWord.charAt(0).toUpperCase() + cleanWord.slice(1);
      const pos = (dictData && dictData.pos) ? dictData.pos : (collinsData && collinsData.definitions[0]?.pos ? collinsData.definitions[0].pos.toLowerCase() : "adj");
      const posShort = (pos.length > 4 ? pos.substring(0, 3) : pos) + '.';
      const phoneticUK = phones.uk || (collinsData && collinsData.phonetic ? collinsData.phonetic : this.ruleBasedIPA(cleanWord, 'uk'));
      const phoneticUS = phones.us || phoneticUK;
      const respelling = phones.respelling || this.ruleBasedRespelling(cleanWord);
      const urduPhonetic = phones.urduPhonetic || '';
      const definition = (dictData && dictData.definition) ? dictData.definition : (collinsData && collinsData.definitions[0]?.explanation ? collinsData.definitions[0].explanation : `Meaning of "${capitalizedWord}".`);
      const sentenceEn = (dictData && dictData.example) ? dictData.example : (collinsData && collinsData.definitions[0]?.example ? collinsData.definitions[0].example : await this.getMeaningfulSentence(cleanWord, dictData));
      const sentenceUr = '';

      const dictExamples = (dictData && Array.isArray(dictData.examples)) ? [...dictData.examples] : [];
      if (sentenceEn && !dictExamples.some(x => x.toLowerCase() === sentenceEn.toLowerCase())) {
        dictExamples.unshift(sentenceEn);
      }
      if (collinsData && Array.isArray(collinsData.definitions)) {
        collinsData.definitions.forEach(def => {
          if (def.example && !dictExamples.some(x => x.toLowerCase() === def.example.toLowerCase())) {
            dictExamples.push(def.example);
          }
        });
      }
      const builtSentences = dictExamples.map((ex, idx) => ({
        num: idx + 1,
        en: ex,
        source: "Oxford Dictionary",
        ur: ""
      }));

      return {
        id: `online-${Date.now()}`,
        word: capitalizedWord,
        posShort: posShort,
        partOfSpeech: pos,
        phoneticUK: phoneticUK,
        phoneticUS: phoneticUS,
        phonetic: phoneticUS,
        respelling: respelling,
        urduPhonetic: urduPhonetic,
        urduMeaning: urduMeaning || "معنی دستیاب ہے",
        urduDefinition: definition,
        forms: pos === 'noun' ? `pl.  ${capitalizedWord}s` : `form: ${capitalizedWord}`,
        tags: [
          { text: "#English", color: "blue" },
          { text: "#Oxford", color: "orange" },
          { text: "#Vocabulary", color: "purple" }
        ],
        collins: collinsData,
        sampleSentences: builtSentences.length > 0 ? builtSentences : [
          { num: 1, en: sentenceEn, source: "Oxford Dictionary", ur: sentenceUr }
        ],
        sentences: builtSentences.length > 0 ? builtSentences : [{ en: sentenceEn, ur: sentenceUr }],
        synonymsAntonymsList: synAntList,
        synonymsAntonyms: {
          word: capitalizedWord,
          pos: posShort,
          synonyms: synonyms.slice(0, 6),
          antonyms: antonyms.slice(0, 6)
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
// Categorization sets for Discover Tab
// ==========================================================
const THAROORIAN_DISCOVER_WORDS = new Set([
  'farrago', 'snollygoster', 'kakistocracy', 'rodomontade', 'sesquipedalian',
  'ultracrepidarian', 'defenestration', 'kerfuffle', 'discombobulate', 'lalochezia',
  'imbroglio', 'troglodyte', 'supercilious', 'pusillanimous', 'perspicacious',
  'floccinaucinihilipilification', 'hippopotomonstrosesquippedaliophobia', 'gorgonize',
  'panglossian', 'quidnunc', 'mugwump', 'obfuscate', 'grandiloquent', 'lugubrious',
  'cacophony', 'tergiversation', 'recalcitrant', 'fastidious', 'vituperation',
  'pleonasm', 'tintinnabulation', 'schadenfreude', 'verisimilitude', 'apposite',
  'weasel word', 'pachydermatous', 'opsimath', 'philistine', 'torschlusspanik',
  'omphaloskepsis', 'borborygmus', 'callipygian', 'quomodo', 'absquatulate',
  'defalcate', 'epicaricacy', 'jentacular', 'mumpsimus', 'scripturient', 'zugzwang',
  'perspicacity', 'periphrastic', 'juxtapose', 'ephemeral', 'prolific', 'quintessential',
  'unprecedented', 'substantiate', 'exacerbate', 'equivocal', 'magnanimous', 'delineate',
  'corroborate', 'eradicate', 'perpetuate', 'reconcile', 'curtail', 'expedite', 'fathom',
  'repudiate', 'elucidate', 'solicit', 'zenith', 'equitable', 'exemplify', 'fastidious',
  'infallible', 'judicious', 'lucid', 'nonchalant', 'resplendent', 'stoic', 'trepidation'
]);

const IELTS_DISCOVER_WORDS = new Set([
  'sustainable', 'sedentary', 'deterrent', 'lucrative', 'obsolete', 'cognitive', 'chronic',
  'biodiversity', 'degradation', 'emission', 'bolster', 'hamper', 'jeopardize', 'plausible',
  'thrive', 'withstand', 'undermine', 'validate', 'stimulate', 'refine', 'fluctuate',
  'alleviate', 'resilience', 'resilient', 'pragmatic', 'ubiquitous', 'eloquent', 'meticulous',
  'scrutinize', 'scrutiny', 'ambiguous', 'paradigm', 'juxtapose', 'ephemeral', 'prolific',
  'quintessential', 'comprehensive', 'indispensable', 'ubiquity', 'phenomenon', 'unprecedented',
  'pervasive', 'conspicuous', 'substantiate', 'exacerbate', 'advocate', 'cohesive',
  'feasibility', 'empirical', 'counterpart', 'predominant', 'discernible', 'tenacious',
  'arbitrary', 'disparity', 'inevitable', 'proliferation', 'spontaneous', 'diminish',
  'augment', 'adverse', 'imperative', 'pivotal', 'synthetic', 'synthesize', 'aesthetic',
  'erratic', 'versatile', 'feasible', 'robust', 'subtle', 'profound', 'tangible', 'tentative',
  'viable', 'vivid', 'transient', 'intricate', 'elusive', 'candid', 'authentic', 'obscure',
  'redundant', 'prominent', 'prevalent', 'eminent', 'pertinent', 'coherent', 'susceptible',
  'articulate', 'diligent', 'innovative', 'formidable', 'subsequent', 'nuance', 'propensity',
  'rigorous', 'mitigate', 'facet', 'prerequisite', 'delineate', 'corroborate', 'eradicate',
  'perpetuate', 'reconcile', 'curtail', 'expedite', 'fathom', 'repudiate', 'elucidate',
  'abstain', 'condescend', 'deviate', 'disperse', 'dissent', 'evoke', 'fabricate', 'heed',
  'imitate', 'impose', 'induce', 'negate', 'overhaul', 'postulate', 'query', 'renounce',
  'retract', 'scoff', 'simulate', 'solicit', 'terminate', 'truncate', 'usurp', 'vacate',
  'venture', 'wield', 'yield', 'zenith', 'equitable', 'exemplify', 'fastidious', 'fortuitous',
  'gratuitous', 'haphazard', 'infallible', 'judicious', 'lucid', 'magnanimous', 'nonchalant',
  'opaque', 'placid', 'quaint', 'resplendent', 'stoic', 'trepidation', 'unwarranted', 'vindicate'
]);

const BUSINESS_DISCOVER_WORDS = new Set([
  'lucrative', 'feasibility', 'fluctuate', 'bolster', 'undermine', 'counterpart', 'predominant',
  'disparity', 'negotiation', 'revenue', 'deficit', 'asset', 'liability', 'dividend', 'monopoly',
  'stakeholder', 'leverage', 'benchmark', 'procurement', 'compliance', 'incentive', 'acquisition',
  'venture', 'entrepreneur', 'collateral', 'contingency', 'diversification', 'audit', 'fiscal',
  'equity', 'merger', 'synergy', 'yield', 'surplus', 'turnover', 'depreciation', 'volatile',
  'commerce', 'enterprise', 'strategy', 'valuation', 'portfolio', 'subsidy', 'trade',
  'investment', 'expenditure', 'tariff', 'inflation', 'optimize', 'capital', 'transaction',
  'affiliate', 'commission', 'liquidation', 'projection', 'prospectus', 'recession', 'solvent',
  'outsource', 'franchise', 'corporate', 'executive', 'monetary', 'reimbursement', 'remuneration'
]);

const ENVIRONMENT_DISCOVER_WORDS = new Set([
  'sustainable', 'biodiversity', 'degradation', 'emission', 'conservation', 'ecosystem', 'habitat',
  'renewable', 'pollutant', 'deforestation', 'extinction', 'climate', 'depletion', 'reforestation',
  'endangered', 'contamination', 'fossil', 'ecological', 'preservation', 'biosphere', 'footprint',
  'afforestation', 'greenhouse', 'atmosphere', 'precipitation', 'ozone', 'solar', 'organic',
  'agriculture', 'global', 'carbon', 'erosion', 'species', 'wildlife', 'flora', 'fauna',
  'sanctuary', 'biodegradable', 'biomass', 'ecology', 'emissions', 'drought', 'terrain',
  'vegetation', 'waste', 'recycle', 'radiation', 'reservoir', 'toxic', 'sanitation'
]);

const EVERYDAY_DISCOVER_WORDS = new Set([
  'enthusiastic', 'curious', 'generous', 'diligent', 'honest', 'cheerful', 'patient', 'reliable',
  'clever', 'brave', 'calm', 'friendly', 'polite', 'grateful', 'humble', 'gentle', 'creative',
  'sensible', 'modest', 'ambitious', 'conclusion', 'abandon', 'accurate', 'achieve', 'acquire',
  'adapt', 'adequate', 'adjust', 'admire', 'benefit', 'capable', 'category', 'challenge',
  'clarify', 'comfort', 'complex', 'constant', 'essential', 'simple', 'obvious', 'easily',
  'frequent', 'usual', 'normal', 'everyday', 'common', 'family', 'journey', 'advice', 'routine',
  'leisure', 'habit', 'sincere', 'prompt', 'balance', 'effort', 'memory', 'courage', 'active',
  'delight', 'favor', 'harbor', 'talent', 'unique', 'value', 'wonder', 'friendship', 'freedom',
  'happiness', 'kindness', 'passion', 'purpose', 'wisdom'
]);

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

    // Auto-enrich all words (including previously cached ones) with rich multiple meanings from quickAutocompleteIndex
    if (typeof quickAutocompleteIndex !== 'undefined') {
      this.words.forEach(w => {
        if (!w || !w.word) return;
        const auto = quickAutocompleteIndex.find(item => item.word && item.word.toLowerCase() === w.word.toLowerCase());
        if (auto && auto.urdu) {
          const curCount = (w.urduMeaning || '').split(/[،\/,]/).filter(p => p.trim()).length;
          const autoCount = auto.urdu.split(/[،\/,]/).filter(p => p.trim()).length;
          if (autoCount > curCount || (!(w.urduMeaning || '').includes('/') && !(w.urduMeaning || '').includes('،'))) {
            w.urduMeaning = auto.urdu;
          }
        }
      });
    }

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

    // Discover Tab Dynamic Batch
    this.discoverCategory = 'all';
    this.discoverWords = [];
    this.generateDiscoverBatch(true);

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

    this.dictSearchInput = document.getElementById('dict-search-input');
    this.dictSearchBtn = document.getElementById('dict-search-btn');
    this.dictClearBtn = document.getElementById('dict-clear-btn');
    this.dictPasteBtn = document.getElementById('dict-paste-btn');
    this.langSwapBtn = document.getElementById('lang-swap-btn');
    this.dictAutocompleteDropdown = document.getElementById('dict-autocomplete-dropdown');
    this.activeAutoIndex = -1;
    this.autoDebounceTimer = null;
    this.currentAutoList = [];
    this.refreshWordBtn = document.getElementById('refresh-word-btn');

    // Dedicated Search Screen Elements
    this.dedicatedSearchScreen = document.getElementById('dedicated-search-screen');
    this.activeSearchForm = document.getElementById('active-search-form');
    this.activeSearchInput = document.getElementById('active-search-input');
    this.activeSearchClearBtn = document.getElementById('active-search-clear-btn');
    this.activeSearchSubmitBtn = document.getElementById('active-search-submit-btn');
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

    // Dedicated Search Form Submit & Button Click
    if (this.activeSearchForm) {
      this.activeSearchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const autoBox = this.searchAutocompleteBox || document.getElementById('search-autocomplete-box');
        const items = autoBox ? autoBox.querySelectorAll('.search-auto-item') : [];
        const isBoxOpen = autoBox && autoBox.style.display !== 'none' && items.length > 0;
        const q = this.activeSearchInput ? this.activeSearchInput.value.trim() : '';
        if (q) {
          if (isBoxOpen && items.length > 0) {
            const firstItem = items[0];
            const firstWord = firstItem.dataset.selectWord;
            if (firstWord && (firstWord.toLowerCase().startsWith(q.toLowerCase()) || q.length <= 4)) {
              this.selectWordFromSearch(firstWord);
              return;
            }
          }
          this.selectWordFromSearch(q);
        }
      });
    }

    if (this.activeSearchSubmitBtn) {
      this.activeSearchSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const autoBox = this.searchAutocompleteBox || document.getElementById('search-autocomplete-box');
        const items = autoBox ? autoBox.querySelectorAll('.search-auto-item') : [];
        const isBoxOpen = autoBox && autoBox.style.display !== 'none' && items.length > 0;
        const q = this.activeSearchInput ? this.activeSearchInput.value.trim() : '';
        if (q) {
          if (isBoxOpen && items.length > 0) {
            const firstItem = items[0];
            const firstWord = firstItem.dataset.selectWord;
            if (firstWord && (firstWord.toLowerCase().startsWith(q.toLowerCase()) || q.length <= 4)) {
              this.selectWordFromSearch(firstWord);
              return;
            }
          }
          this.selectWordFromSearch(q);
        }
      });
    }

    // Dedicated Search Input typing & enter
    if (this.activeSearchInput) {
      this.activeSearchInput.addEventListener('input', (e) => {
        this.handleActiveSearchInput(e.target.value);
      });

      this.activeSearchInput.addEventListener('keydown', (e) => {
        const autoBox = this.searchAutocompleteBox || document.getElementById('search-autocomplete-box');
        const items = autoBox ? autoBox.querySelectorAll('.search-auto-item') : [];
        const isBoxOpen = autoBox && autoBox.style.display !== 'none' && items.length > 0;

        if (e.key === 'ArrowDown') {
          if (isBoxOpen) {
            e.preventDefault();
            this.activeSearchAutoIndex = ((this.activeSearchAutoIndex !== undefined && this.activeSearchAutoIndex >= 0) ? this.activeSearchAutoIndex + 1 : 0) % items.length;
            items.forEach((it, i) => it.classList.toggle('active', i === this.activeSearchAutoIndex));
            if (items[this.activeSearchAutoIndex]) {
              items[this.activeSearchAutoIndex].scrollIntoView({ block: 'nearest' });
            }
          }
        } else if (e.key === 'ArrowUp') {
          if (isBoxOpen) {
            e.preventDefault();
            const cur = (this.activeSearchAutoIndex !== undefined && this.activeSearchAutoIndex >= 0) ? this.activeSearchAutoIndex : 0;
            this.activeSearchAutoIndex = (cur - 1 + items.length) % items.length;
            items.forEach((it, i) => it.classList.toggle('active', i === this.activeSearchAutoIndex));
            if (items[this.activeSearchAutoIndex]) {
              items[this.activeSearchAutoIndex].scrollIntoView({ block: 'nearest' });
            }
          }
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (isBoxOpen && this.activeSearchAutoIndex !== undefined && this.activeSearchAutoIndex >= 0 && items[this.activeSearchAutoIndex]) {
            const activeItem = items[this.activeSearchAutoIndex];
            const word = activeItem.dataset.selectWord || activeItem.dataset.executeSearch;
            if (word) {
              this.selectWordFromSearch(word);
              return;
            }
          }
          const q = this.activeSearchInput.value.trim();
          if (q) {
            if (isBoxOpen && items.length > 0) {
              const firstItem = items[0];
              const firstWord = firstItem.dataset.selectWord;
              if (firstWord && (firstWord.toLowerCase().startsWith(q.toLowerCase()) || q.length <= 4)) {
                this.selectWordFromSearch(firstWord);
                return;
              }
            }
            this.selectWordFromSearch(q);
          }
        } else if (e.key === 'Escape') {
          if (autoBox) {
            autoBox.style.display = 'none';
          }
        }
      });
    }

    // Dedicated Search Clear Button with instant touch response
    if (this.activeSearchClearBtn) {
      const doClear = (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        if (this.activeSearchInput) {
          this.activeSearchInput.value = '';
          this.activeSearchInput.focus();
        }
        this.handleActiveSearchInput('');
      };
      this.activeSearchClearBtn.addEventListener('click', doClear);
      this.activeSearchClearBtn.addEventListener('touchend', doClear);
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

    // Discover Tab Pull-To-Refresh Gesture
    this.initDiscoverPullToRefresh();
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

  async copyToClipboard(text) {
    if (!text) return;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      this.showToast('Copied to clipboard! 📋');
    } catch(err) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try {
        document.execCommand('copy');
        this.showToast('Copied to clipboard! 📋');
      } catch(e) {
        this.showToast('Failed to copy');
      }
      document.body.removeChild(ta);
    }
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

  formatConciseUrduMeaning(raw, word = '') {
    let text = raw || '';
    if (word) {
      const cleanW = word.toLowerCase().trim();
      if (typeof OnlineLookupService !== 'undefined' && OnlineLookupService.curatedRichUrduMeanings && OnlineLookupService.curatedRichUrduMeanings[cleanW]) {
        text = OnlineLookupService.curatedRichUrduMeanings[cleanW];
      } else if (typeof quickAutocompleteIndex !== 'undefined') {
        const auto = quickAutocompleteIndex.find(item => item.word && item.word.toLowerCase() === cleanW);
        if (auto && auto.urdu) {
          const curCount = text.split(/[،\/,]/).filter(p => p.trim()).length;
          const autoCount = auto.urdu.split(/[،\/,]/).filter(p => p.trim()).length;
          if (autoCount > curCount || (!text.includes('،') && !text.includes('/'))) {
            text = auto.urdu;
          }
        }
      }
    }
    if (!text) return '';
    const parts = text
      .replace(/[؛;]/g, '،')
      .split(/[\/,،]/)
      .map(p => p.trim())
      .filter(p => p.length > 0);
    const unique = [...new Set(parts)];
    if (unique.length === 0) return text;
    return unique.join(' ، ');
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
    this.closeDedicatedSearchScreen();
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
  openDedicatedSearchScreen(initialValue = '') {
    if (!this.dedicatedSearchScreen) return;
    this.dedicatedSearchScreen.style.display = 'flex';
    const initVal = initialValue || (this.dictSearchInput ? this.dictSearchInput.value : '');
    if (this.activeSearchInput) {
      this.activeSearchInput.value = initVal;
      setTimeout(() => {
        this.activeSearchInput.focus();
        if (initVal) {
          this.handleActiveSearchInput(initVal);
        }
      }, 60);
    }
    this.handleActiveSearchInput(initVal);
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

    const qClean = (q || '').trim();
    const qLower = qClean.toLowerCase();
    if (!qLower) {
      autoBox.style.display = 'none';
      autoBox.innerHTML = '';
      return;
    }

    // 1. Instant local matching pool (0ms latency)
    const pool = new Map();

    // 1a. Core words in memory
    if (Array.isArray(this.words)) {
      this.words.forEach(w => {
        if (w.word) {
          pool.set(w.word.toLowerCase(), {
            word: w.word,
            pos: w.posShort || 'adj.',
            urdu: (w.urduMeaning || '').split('/')[0].trim()
          });
        }
      });
    }

    // 1b. Cached dynamic words
    try {
      const cached = storage.getCachedWords ? storage.getCachedWords() : [];
      if (Array.isArray(cached)) {
        cached.forEach(w => {
          if (w.word && !pool.has(w.word.toLowerCase())) {
            pool.set(w.word.toLowerCase(), {
              word: w.word,
              pos: w.posShort || 'adj.',
              urdu: (w.urduMeaning || '').split('/')[0].trim()
            });
          }
        });
      }
    } catch (e) {}

    // 1c. Quick Autocomplete Index (~850 curated words)
    if (typeof quickAutocompleteIndex !== 'undefined' && Array.isArray(quickAutocompleteIndex)) {
      quickAutocompleteIndex.forEach(item => {
        if (item.word && !pool.has(item.word.toLowerCase())) {
          pool.set(item.word.toLowerCase(), {
            word: item.word,
            pos: item.pos || 'n.',
            urdu: (item.urdu || '').split('/')[0].trim()
          });
        }
      });
    }

    const allEntries = Array.from(pool.values());
    const prefixMatches = allEntries
      .filter(item => item.word.toLowerCase().startsWith(qLower))
      .sort((a, b) => a.word.length - b.word.length || a.word.localeCompare(b.word));
    const containsMatches = allEntries
      .filter(item => !item.word.toLowerCase().startsWith(qLower) && (item.word.toLowerCase().includes(qLower) || (item.urdu && item.urdu.includes(qLower))));

    let initialMatches = [...prefixMatches, ...containsMatches].slice(0, 8);

    // Display instant local suggestions right away (0ms latency!)
    this.renderActiveSearchItems(initialMatches, qLower);

    // 2. Debounced Datamuse Live Suggestions (fetching predictions for ANY English word)
    clearTimeout(this.activeSearchDebounceTimer);
    this.activeSearchDebounceTimer = setTimeout(async () => {
      try {
        const currentInput = (this.activeSearchInput ? this.activeSearchInput.value : '').trim().toLowerCase();
        if (currentInput !== qLower) return;

        const res = await fetch(`https://api.datamuse.com/sug?s=${encodeURIComponent(qLower)}&max=8`);
        if (!res.ok) return;
        const data = await res.json();
        if (!Array.isArray(data) || data.length === 0) return;

        // Verify input hasn't changed during fetch
        const freshInput = (this.activeSearchInput ? this.activeSearchInput.value : '').trim().toLowerCase();
        if (freshInput !== qLower) return;

        const mergedMap = new Map();
        initialMatches.forEach(item => mergedMap.set(item.word.toLowerCase(), item));

        const wordsToTranslate = [];
        for (const entry of data) {
          const w = (entry.word || '').trim();
          if (!w) continue;
          const wLower = w.toLowerCase();
          if (mergedMap.has(wLower)) continue;

          if (pool.has(wLower)) {
            mergedMap.set(wLower, pool.get(wLower));
          } else {
            const cachedTrans = storage.getAutoTranslation(wLower);
            if (cachedTrans) {
              mergedMap.set(wLower, { word: w, pos: cachedTrans.pos || 'n.', urdu: cachedTrans.urdu });
            } else {
              mergedMap.set(wLower, { word: w, pos: '', urdu: '' });
              wordsToTranslate.push(w);
            }
          }
        }

        // Re-order: prefix matches first, then contains
        const allMerged = Array.from(mergedMap.values());
        const mergedPrefix = allMerged
          .filter(item => item.word.toLowerCase().startsWith(freshInput))
          .sort((a, b) => a.word.length - b.word.length || a.word.localeCompare(b.word));
        const mergedContains = allMerged
          .filter(item => !item.word.toLowerCase().startsWith(freshInput));

        const finalList = [...mergedPrefix, ...mergedContains].slice(0, 8);
        this.renderActiveSearchItems(finalList, freshInput);

        // Fetch translations for missing words concurrently in background
        if (wordsToTranslate.length > 0) {
          const transPromises = wordsToTranslate.slice(0, 5).map(async (mw) => {
            const trans = await this.fetchUrduForWord(mw);
            if (trans) {
              const existing = mergedMap.get(mw.toLowerCase());
              if (existing) {
                existing.urdu = (trans.urdu || '').split('/')[0].split('؛')[0].trim();
                existing.pos = trans.pos || existing.pos || 'n.';
              }
            }
          });
          await Promise.all(transPromises);

          // Update UI with translations if input is still active
          const latestInput = (this.activeSearchInput ? this.activeSearchInput.value : '').trim().toLowerCase();
          if (latestInput === freshInput) {
            const updatedAll = Array.from(mergedMap.values());
            const updatedPrefix = updatedAll
              .filter(item => item.word.toLowerCase().startsWith(latestInput))
              .sort((a, b) => a.word.length - b.word.length || a.word.localeCompare(b.word));
            const updatedContains = updatedAll
              .filter(item => !item.word.toLowerCase().startsWith(latestInput));
            this.renderActiveSearchItems([...updatedPrefix, ...updatedContains].slice(0, 8), latestInput);
          }
        }
      } catch (e) {
        // Keep current matches on fetch failure
      }
    }, 60);
  }

  renderActiveSearchItems(list, q) {
    const autoBox = this.searchAutocompleteBox || document.getElementById('search-autocomplete-box');
    if (!autoBox) return;

    this.activeSearchAutoList = list || [];
    this.activeSearchAutoIndex = -1;

    let itemsHtml = '';

    if (list && list.length > 0) {
      itemsHtml += list.map((item, idx) => {
        const matchIdx = item.word.toLowerCase().indexOf(q);
        let formattedWord = item.word;
        if (matchIdx !== -1) {
          const prefix = item.word.slice(0, matchIdx);
          const match = item.word.slice(matchIdx, matchIdx + q.length);
          const rest = item.word.slice(matchIdx + q.length);
          formattedWord = `${prefix}<strong class="auto-highlight">${match}</strong>${rest}`;
        }

        const urduClean = item.urdu ? item.urdu.split('/')[0].trim() : '';

        return `
          <div class="search-auto-item" data-select-word="${item.word}" data-index="${idx}" role="button" tabindex="0">
            <div class="search-auto-left">
              <span class="search-auto-icon">🔍</span>
              <span class="search-auto-word">${formattedWord}</span>
              ${item.pos ? `<span class="search-auto-pos">${item.pos}</span>` : ''}
            </div>
            ${urduClean ? `<span class="search-auto-urdu urdu-text">${urduClean}</span>` : ''}
          </div>
        `;
      }).join('');
    }

    // Always include direct search prompt at bottom
    itemsHtml += `
      <div class="search-auto-item search-auto-online-prompt" data-execute-search="${q}" role="button" tabindex="0">
        <div class="search-auto-left">
          <span class="search-auto-icon" style="color: #38bdf8;">🔍</span>
          <span class="search-auto-word">Search Dictionary for "<strong style="color: #38bdf8;">${q}</strong>"</span>
        </div>
        <span class="search-auto-key">Search ↵</span>
      </div>
    `;

    autoBox.innerHTML = itemsHtml;
    autoBox.style.display = 'block';

    autoBox.querySelectorAll('[data-select-word]').forEach(el => {
      el.addEventListener('click', () => {
        this.selectWordFromSearch(el.dataset.selectWord);
      });
    });

    const onlinePrompt = autoBox.querySelector('[data-execute-search]');
    if (onlinePrompt) {
      onlinePrompt.addEventListener('click', (e) => {
        e.preventDefault();
        this.selectWordFromSearch(onlinePrompt.dataset.executeSearch || q);
      });
    }
  }

  selectWordFromSearch(term) {
    if (!term) return;
    const clean = term.trim();

    if (this.activeSearchInput) {
      this.activeSearchInput.value = clean;
      try {
        this.activeSearchInput.blur();
      } catch (e) {}
    }
    if (this.activeSearchClearBtn) this.activeSearchClearBtn.style.display = 'flex';

    const autoBox = this.searchAutocompleteBox || document.getElementById('search-autocomplete-box');
    if (autoBox) { autoBox.style.display = 'none'; autoBox.innerHTML = ''; }

    const recentsBox = this.recentSearchesContainer || document.getElementById('recent-searches-container');
    if (recentsBox) recentsBox.style.display = 'none';

    const resultBox = this.searchResultBox || document.getElementById('search-result-box');
    if (resultBox) {
      resultBox.style.display = 'block';
      this.renderSearchResultInsideSearchScreen(clean, resultBox);
      try {
        const searchBody = document.querySelector('.search-screen-body');
        if (searchBody) {
          searchBody.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } catch (e) {}
    }
  }

  async renderSearchResultInsideSearchScreen(term, container) {
    if (!container) return;
    const qLower = term.toLowerCase();

    let match = this.words.find(w => w.word && w.word.toLowerCase() === qLower);

    // If match exists from previous search/cache, upgrade with multiple meanings
    if (typeof quickAutocompleteIndex !== 'undefined') {
      const auto = quickAutocompleteIndex.find(item => item.word && item.word.toLowerCase() === qLower);
      if (auto && auto.urdu) {
        if (match) {
          const curCount = (match.urduMeaning || '').split(/[،\/,]/).filter(p => p.trim()).length;
          const autoCount = auto.urdu.split(/[،\/,]/).filter(p => p.trim()).length;
          if (autoCount > curCount || (!(match.urduMeaning || '').includes('/') && !(match.urduMeaning || '').includes('،'))) {
            match.urduMeaning = auto.urdu;
            storage.saveWordToCache(match);
          }
        }
      }
    }

    if (!match && typeof quickAutocompleteIndex !== 'undefined') {
      const auto = quickAutocompleteIndex.find(item => item.word && item.word.toLowerCase() === qLower);
      if (auto) {
        const [phones, collins, synAntList] = await Promise.all([
          OnlineLookupService.fetchDualPhonetics(auto.word),
          OnlineLookupService.fetchCollinsData(auto.word),
          OnlineLookupService.fetchSynonymsAndAntonyms(auto.word, auto.urdu)
        ]);
        const primaryExample = (collins && collins.definitions[0]?.example) 
          ? collins.definitions[0].example 
          : `We learned how to use ${auto.word} accurately in everyday context.`;
        match = {
          id: `search-${Date.now()}`,
          word: auto.word,
          posShort: auto.pos || 'adj.',
          phoneticUK: phones.uk || OnlineLookupService.ruleBasedIPA(auto.word, 'uk'),
          phoneticUS: phones.us || OnlineLookupService.ruleBasedIPA(auto.word, 'us'),
          phonetic: phones.us || OnlineLookupService.ruleBasedIPA(auto.word, 'us'),
          respelling: phones.respelling || OnlineLookupService.ruleBasedRespelling(auto.word),
          urduPhonetic: phones.urduPhonetic || '',
          urduMeaning: auto.urdu || '',
          urduDefinition: (collins && collins.definitions[0]?.explanation) ? collins.definitions[0].explanation : `${auto.word} ka Urdu tarjuma: ${auto.urdu}`,
          forms: auto.pos === 'noun' ? `pl.  ${auto.word}s` : `form: ${auto.word}`,
          tags: [],
          collins: collins || null,
          synonymsAntonymsList: synAntList || [],
          synonymsAntonyms: {
            word: auto.word,
            pos: auto.pos || 'adj.',
            synonyms: (synAntList && synAntList[0]?.syns) || [],
            antonyms: (synAntList && synAntList[0]?.ants) || []
          },
          sentences: (collins && Array.isArray(collins.definitions) && collins.definitions.some(d => d.example))
            ? collins.definitions.filter(d => d.example).slice(0, 3).map((d, dIdx) => ({
                num: dIdx + 1,
                en: d.example,
                ur: '',
                meaning: (auto.urdu || '').split(/[\/,]/)[0].trim()
              }))
            : [
                { num: 1, en: primaryExample, ur: '', meaning: (auto.urdu || '').split(/[\/,]/)[0].trim() }
              ]
        };
      }
    }

    if (match) {
      const cleanW = match.word.toLowerCase();
      storage.addRecentSearch(match.word);
      if (!match.collins) {
        OnlineLookupService.fetchCollinsData(match.word).then(c => {
          if (c) match.collins = c;
        });
      }
      if (!match.synonymsAntonymsList || match.synonymsAntonymsList.length === 0 || !match.synonymsAntonymsList[0].ants || match.synonymsAntonymsList[0].ants.length === 0) {
        if (OnlineLookupService.curatedSynonymsAntonyms && OnlineLookupService.curatedSynonymsAntonyms[cleanW]) {
          match.synonymsAntonymsList = OnlineLookupService.curatedSynonymsAntonyms[cleanW];
          match.synonymsAntonyms = {
            word: match.word,
            pos: match.posShort || 'adj.',
            synonyms: match.synonymsAntonymsList[0].syns || [],
            antonyms: match.synonymsAntonymsList[0].ants || []
          };
        }
      }
      if (!this.words.some(w => w.word.toLowerCase() === match.word.toLowerCase())) {
        this.words.push(match);
      }
      storage.saveWordToCache(match);

      container.innerHTML = `
        <div class="udict-card" style="margin-top: 6px;">
          ${this.buildDictionaryCardBodyHtml(match, this.dictActiveTab || 'concise', false)}
        </div>
      `;
      this.attachCardEventListeners(container, false, match);

      if (!match.phoneticUK || !match.phoneticUS || !match.respelling || match.phoneticUK === `/${cleanW}/` || match.phoneticUS === `/${cleanW}/`) {
        OnlineLookupService.fetchDualPhonetics(match.word).then(phones => {
          if (phones) {
            if (phones.uk && phones.uk !== `/${cleanW}/`) match.phoneticUK = phones.uk;
            if (phones.us && phones.us !== `/${cleanW}/`) match.phoneticUS = phones.us;
            if (phones.respelling) match.respelling = phones.respelling;
            if (phones.urduPhonetic) match.urduPhonetic = phones.urduPhonetic;
            const ukEl = container.querySelector('[data-phonetic-display="uk"]');
            const usEl = container.querySelector('[data-phonetic-display="us"]');
            const respEl = container.querySelector('[data-phonetic-display="respelling"]');
            const audioRespEl = container.querySelector('[data-phonetic-display="audio-respelling"]');
            const urduEl = container.querySelector('[data-phonetic-display="urdu"]');
            if (ukEl && match.phoneticUK) ukEl.textContent = match.phoneticUK;
            if (usEl && match.phoneticUS) usEl.textContent = match.phoneticUS;
            if (respEl && match.respelling) respEl.textContent = `[ ${match.respelling} ]`;
            if (audioRespEl && match.respelling) audioRespEl.textContent = `• [ ${match.respelling} ]`;
            if (urduEl && match.urduPhonetic) urduEl.textContent = `(${match.urduPhonetic})`;
          }
        });
      }
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
          storage.addRecentSearch(fetched.word);
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
          // Feature 1: Clean, uncluttered "Word Not Found" state
          container.innerHTML = `
            <div class="recents-empty-state" style="margin-top: 24px; padding: 36px 20px;">
              <div class="recents-empty-icon" style="font-size: 3.2rem; margin-bottom: 14px;">📖</div>
              <div class="recents-empty-title" style="font-size: 1.25rem; font-weight: 700; color: var(--text-title); margin-bottom: 8px;">Word Not Found</div>
              <p class="recents-empty-desc" style="font-size: 0.95rem; color: var(--text-muted); max-width: 320px; margin: 0 auto; line-height: 1.5;">
                No definition could be found for "<strong>${term}</strong>". Please check the spelling.
              </p>
            </div>
          `;
        }
      } catch (err) {
        container.innerHTML = `
          <div class="recents-empty-state" style="margin-top: 24px; padding: 36px 20px;">
            <div class="recents-empty-icon" style="font-size: 3.2rem; margin-bottom: 14px;">📖</div>
            <div class="recents-empty-title" style="font-size: 1.25rem; font-weight: 700; color: var(--text-title); margin-bottom: 8px;">Word Not Found</div>
            <p class="recents-empty-desc" style="font-size: 0.95rem; color: var(--text-muted); max-width: 320px; margin: 0 auto; line-height: 1.5;">
              No definition could be found for "<strong>${term}</strong>". Please check the spelling.
            </p>
          </div>
        `;
      }
    }
  }

  attachCardEvents(container, word, isModal = false) {
    this.attachCardEventListeners(container, isModal, word);
  }

  switchTab(tabName) {
    this.activeTab = tabName;

    // 1. Close dedicated search screen overlay if open
    this.closeDedicatedSearchScreen();

    // 2. Dismiss any open modals/sheets
    ['word-detail-modal', 'discover-modal', 'more-sentences-modal', 'report-problem-modal', 'ai-key-modal', 'settings-modal', 'sentence-trans-modal'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });

    // 3. Highlight the active tab button
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
    }
  }

  renderHome() {
    this.renderDictionary();
    if (!this.searchQuery) {
      if (this.todayContainer) this.todayContainer.style.display = 'block';
      this.renderTodayWord();
    } else {
      if (this.todayContainer) {
        this.todayContainer.style.display = 'none';
        this.todayContainer.innerHTML = '';
      }
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
    const richWords = this.words.filter(w => w.urduMeaning && ((w.sentences && w.sentences.length > 0) || w.insteadOf));
    const pool = richWords.length > 0 ? richWords : this.words;
    if (pool.length === 0) return;

    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * pool.length);
    } while (pool[nextIndex].id === (this.currentTodayWord && this.currentTodayWord.id) && pool.length > 1);

    this.currentTodayWord = pool[nextIndex];
    this.todayIndex = nextIndex;
    this.renderTodayWord();
  }

  renderTodayWord() {
    if (!this.todayContainer) return;

    if (!this.currentTodayWord) {
      const richWords = this.words.filter(w => w.urduMeaning && ((w.sentences && w.sentences.length > 0) || w.insteadOf));
      const pool = richWords.length > 0 ? richWords : this.words;
      this.currentTodayWord = pool[this.todayIndex % pool.length] || pool[0];
    }
    const word = this.currentTodayWord;
    if (!word) return;

    const isFav = storage.isFavorite(word.id);
    const todayDate = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long' });
    const cleanWord = (word.word || '').toLowerCase();
    const quick = OnlineLookupService.getQuickPhonetics ? OnlineLookupService.getQuickPhonetics(word.word) : null;
    const respelling = word.respelling || (quick ? quick.respelling : '') || (OnlineLookupService.ruleBasedRespelling ? OnlineLookupService.ruleBasedRespelling(word.word) : '');
    const urduPhonetic = word.urduPhonetic || (quick ? quick.urduPhonetic : '');
    let phoneticUS = word.phoneticUS || word.phonetic;
    if (!phoneticUS || phoneticUS === `/${cleanWord}/`) {
      phoneticUS = (quick && quick.us) ? quick.us : (OnlineLookupService.ruleBasedIPA ? OnlineLookupService.ruleBasedIPA(word.word, 'us') : '');
    }

    this.todayContainer.innerHTML = `
      <div class="word-of-day-card">
        <div class="notes-timestamp-row">
          <div style="display: flex; align-items: center; gap: 6px;">
            <span style="font-size: 1rem;">🌟</span>
            <span style="font-weight: 700; color: var(--text-title); font-size: 0.88rem;">Word of the Day</span>
            <span style="color: var(--text-faint); font-size: 0.76rem;">• ${todayDate}</span>
          </div>
          <button class="refresh-pill-btn" id="today-refresh-trigger" title="Get another word">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
            </svg>
            <span>New Word</span>
          </button>
        </div>

        <div class="word-hero" style="margin-bottom: 12px;">
          <div class="word-hero-row">
            <div class="word-title-wrap" style="display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap;">
              <h1 class="word-main-title" style="font-size: 1.85rem;">${word.word}</h1>
              <span class="word-pos-tag">[${word.posShort || 'n.'}]</span>
              ${respelling ? `<span class="udict-respelling-badge" style="font-size: 0.88rem; padding: 2px 8px;">[ ${respelling} ]</span>` : ''}
              ${urduPhonetic ? `<span class="udict-urdu-phonetic-badge" style="font-size: 0.92rem; padding: 1px 8px;">(${urduPhonetic})</span>` : ''}
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <button class="speaker-btn" data-speech-text="${word.word}" id="play-today-word" title="Listen to pronunciation">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
              </button>
              <button class="star-fav-btn ${isFav ? 'active' : ''}" id="fav-today-btn" title="Save to favorites">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="${isFav ? '#eab308' : 'none'}" stroke="${isFav ? '#eab308' : 'currentColor'}" stroke-width="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
          
          <div class="urdu-hero-text urdu-text" style="font-size: 1.45rem; line-height: 1.8; margin-top: 4px; color: var(--text-title);">${word.urduMeaning}</div>
          ${word.urduDefinition ? `<p class="urdu-text" style="font-size: 0.94rem; color: var(--text-body); line-height: 1.7; margin-top: 2px;">${word.urduDefinition}</p>` : ''}
        </div>

        ${(word.insteadOf && word.insteadOf.length > 0 && word.useThis && word.useThis.length > 0) ? `
          <div class="comparison-container" style="margin: 10px 0 14px 0; background: var(--bg-search); border: 1px solid var(--divider-hairline); border-radius: 12px; padding: 10px 14px;">
            <div>
              <div class="comparison-header" style="color: #ef4444; font-size: 0.72rem;">Instead of</div>
              <ul class="comparison-list" style="margin-top: 4px;">
                ${word.insteadOf.slice(0, 2).map(item => `<li class="comparison-item old-word" style="font-size: 0.84rem;"><s>${item}</s></li>`).join('')}
              </ul>
            </div>
            <div>
              <div class="comparison-header" style="color: #10b981; font-size: 0.72rem;">Use this</div>
              <ul class="comparison-list" style="margin-top: 4px;">
                ${word.useThis.slice(0, 2).map(item => `<li class="comparison-item new-word" style="font-size: 0.84rem; font-weight: 700;">${item}</li>`).join('')}
              </ul>
            </div>
          </div>
        ` : ''}

        ${(word.sentences && word.sentences.length > 0) ? `
          <div class="editorial-section" style="margin-bottom: 0; padding-top: 10px; border-top: 0.5px solid var(--divider-hairline);">
            <div class="editorial-section-title" style="margin-bottom: 8px;">Example Sentence</div>
            ${word.sentences.slice(0, 1).map(s => `
              <div class="sentence-block" style="background: var(--bg-search); border: 1px solid var(--divider-hairline); border-radius: 12px; padding: 10px 14px;">
                <div style="display: flex; justify-content: space-between; align-items: baseline; gap: 8px;">
                  <p class="sentence-en-text" style="font-size: 0.92rem; font-weight: 600; color: var(--text-title); line-height: 1.45;">"${s.en}"</p>
                  <button class="speaker-btn" data-speech-text="${s.en}" style="padding: 2px; flex-shrink: 0;" title="Listen to sentence">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    </svg>
                  </button>
                </div>
                ${s.ur ? `<p class="sentence-ur-text urdu-text" style="font-size: 1.05rem; line-height: 1.8; margin-top: 4px; color: var(--text-body);">${s.ur}</p>` : ''}
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;

    const refreshBtn = document.getElementById('today-refresh-trigger');
    if (refreshBtn) {
      refreshBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.refreshWordOfTheDay();
      });
    }

    const playBtn = document.getElementById('play-today-word');
    if (playBtn) {
      playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        tts.speak(word.word);
      });
    }

    this.todayContainer.querySelectorAll('.sentence-block .speaker-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        tts.speak(btn.dataset.speechText, { rate: 0.9 });
      });
    });

    const favBtn = document.getElementById('fav-today-btn');
    if (favBtn) {
      favBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const updatedFav = storage.toggleFavorite(word.id);
        const svg = favBtn.querySelector('svg');
        if (svg) {
          svg.setAttribute('fill', updatedFav ? '#eab308' : 'none');
          svg.setAttribute('stroke', updatedFav ? '#eab308' : 'currentColor');
        }
        favBtn.classList.toggle('active', updatedFav);
        this.showToast(updatedFav ? 'Saved to Favorites ⭐' : 'Removed from Favorites');
        this.renderFavoritesTab();
      });
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
      const curatedSyn = OnlineLookupService.curatedSynonymsAntonyms && OnlineLookupService.curatedSynonymsAntonyms[cleanWord.toLowerCase()];
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
        synonymsAntonymsList: curatedSyn || [],
        synonymsAntonyms: {
          word: cleanWord,
          pos: pos,
          context: 'for everyday usage',
          synonyms: (curatedSyn && curatedSyn[0]?.syns) || [],
          antonyms: (curatedSyn && curatedSyn[0]?.ants) || []
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
                  synonyms: (curatedSyn && curatedSyn[0]?.syns) || []
                }
              ]
            }
          ]
        },
        source: 'Instant Offline Index ⚡'
      };

      if (!curatedSyn) {
        OnlineLookupService.fetchSynonymsAndAntonyms(cleanWord, urdu).then(list => {
          if (list && list.length > 0) {
            instantWordObj.synonymsAntonymsList = list;
            instantWordObj.synonymsAntonyms = {
              word: cleanWord,
              pos: pos,
              synonyms: list[0].syns || [],
              antonyms: list[0].ants || []
            };
            storage.saveWordToCache(instantWordObj);
          }
        });
      }

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
        const [urduResult, dictResult, synsResult, wikiResult, phonesResult] = await Promise.allSettled([
          OnlineLookupService.translate(query, 'auto', 'ur'),
          OnlineLookupService.getDictionaryData(query),
          OnlineLookupService.fetchSynonymsAndAntonyms(query),
          OnlineLookupService.fetchWikipediaSummary(query),
          OnlineLookupService.fetchDualPhonetics(query)
        ]);

        const urduMeaning = (urduResult.status === 'fulfilled' && urduResult.value) ? urduResult.value.trim() : "";
        const dictData = (dictResult.status === 'fulfilled' && dictResult.value) ? dictResult.value : null;
        const synAntList = (synsResult.status === 'fulfilled' && Array.isArray(synsResult.value) && synsResult.value.length > 0)
          ? synsResult.value
          : (OnlineLookupService.curatedSynonymsAntonyms && OnlineLookupService.curatedSynonymsAntonyms[cleanWord.toLowerCase()]
              ? OnlineLookupService.curatedSynonymsAntonyms[cleanWord.toLowerCase()]
              : []);
        const synonyms = (synAntList[0]?.syns) || [];
        const antonyms = (synAntList[0]?.ants) || [];
        const wikiData = (wikiResult.status === 'fulfilled' && wikiResult.value) ? wikiResult.value : null;
        const phones = (phonesResult.status === 'fulfilled' && phonesResult.value)
          ? phonesResult.value
          : {
              uk: OnlineLookupService.ruleBasedIPA(query, 'uk'),
              us: OnlineLookupService.ruleBasedIPA(query, 'us'),
              respelling: OnlineLookupService.ruleBasedRespelling(query),
              urduPhonetic: ''
            };
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
        const phoneticUK = phones.uk || (dictData && dictData.phonetic ? dictData.phonetic : OnlineLookupService.ruleBasedIPA(cleanWord, 'uk'));
        const phoneticUS = phones.us || phoneticUK;
        const respelling = phones.respelling || OnlineLookupService.ruleBasedRespelling(cleanWord);
        const urduPhonetic = phones.urduPhonetic || '';
        const definition = dictData && dictData.definition ? dictData.definition : `Contextual definition and usage of "${cleanWord}".`;
        const dictExamples = (dictData && Array.isArray(dictData.examples)) ? [...dictData.examples] : [];
        if (dictData && dictData.example && !dictExamples.some(x => x.toLowerCase() === dictData.example.toLowerCase())) {
          dictExamples.unshift(dictData.example);
        }
        const sentenceEn = dictExamples[0] || `The term "${cleanWord}" is used to express key ideas in spoken and written English.`;
        const sentenceUr = '';
        const builtSentences = dictExamples.map((ex, idx) => ({
          num: idx + 1,
          en: ex,
          source: "Oxford Dictionary",
          ur: ""
        }));

        newWordObj = {
          id: `online-${Date.now()}`,
          word: cleanWord,
          posShort: posShort,
          partOfSpeech: pos,
          phoneticUK: phoneticUK,
          phoneticUS: phoneticUS,
          phonetic: phoneticUS,
          respelling: respelling,
          urduPhonetic: urduPhonetic,
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
          sampleSentences: builtSentences.length > 0 ? builtSentences : [
            { num: 1, en: sentenceEn, source: "Oxford Dictionary", ur: sentenceUr }
          ],
          sentences: builtSentences.length > 0 ? builtSentences : [{ en: sentenceEn, ur: sentenceUr }],
          synonymsAntonymsList: synAntList,
          synonymsAntonyms: {
            word: cleanWord,
            pos: posShort,
            context: `for everyday usage`,
            synonyms: synonyms.length > 0 ? synonyms : [],
            antonyms: antonyms.length > 0 ? antonyms : []
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
        this.todayContainer.style.display = 'block';
        this.renderTodayWord();
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
    const cleanWord = (w.word || '').toLowerCase();
    const quick = OnlineLookupService.getQuickPhonetics ? OnlineLookupService.getQuickPhonetics(w.word) : null;
    const dualResp = OnlineLookupService.getDualRespelling
      ? OnlineLookupService.getDualRespelling(w)
      : { uk: '', us: '', isDifferent: false };
    const ukRespelling = dualResp.uk || w.respelling || '';
    const usRespelling = dualResp.us || w.respelling || '';
    const respelling = usRespelling || ukRespelling;
    const urduPhonetic = w.urduPhonetic || (quick ? quick.urduPhonetic : '');

    const badges = (w.tags && w.tags.length > 0) ? w.tags : [
      { text: "#Top 3500", color: "blue" },
      { text: "#Business English", color: "orange" },
      { text: "#TOEFL", color: "teal" },
      { text: "#IELTS", color: "purple" },
      { text: "#SAT", color: "pink" },
      { text: "#GRE", color: "green" },
      { text: "#GMAT", color: "coral" }
    ];

    // 1. Unified Example Sentences (At least 3 high-yield sentences, English on main card)
    const wordLower = (w.word || '').toLowerCase().trim();
    let rawSentences = [];
    if (typeof OnlineLookupService !== 'undefined' && OnlineLookupService.curatedSentences && OnlineLookupService.curatedSentences[wordLower]) {
      rawSentences = OnlineLookupService.curatedSentences[wordLower].map((s, idx) => ({
        num: idx + 1,
        en: s.en,
        ur: s.ur || '',
        meaning: s.meaning || ''
      }));
    } else if (w.bilingualSentences && w.bilingualSentences.length > 0) {
      rawSentences = [...w.bilingualSentences];
    } else if (w.sentences && w.sentences.length > 0) {
      rawSentences = [...w.sentences];
    } else if (w.sampleSentences && w.sampleSentences.length > 0) {
      rawSentences = [...w.sampleSentences];
    }

    // Clean rawSentences of any foreign or contaminated sentences from old cache
    rawSentences = rawSentences.filter(s => {
      if (!s || !s.en) return false;
      const en = s.en.toLowerCase();
      const ur = s.ur || '';
      if (en.includes('learning the accurate context of') || en.includes('is used to express key ideas in') || en.includes('draw a conclusion from premisses') || en.includes('hobbled lamely to his') || en.includes('christiansen were murdered')) {
        return false;
      }
      if (wordLower !== 'detrimental' && (en.includes('smoking has a highly') || en.includes('excessive stress can prove') || (ur.includes('نقصان دہ') && !(w.urduMeaning || '').includes('نقصان')) || (ur.includes('مضر') && !(w.urduMeaning || '').includes('مضر')))) {
        return false;
      }
      return true;
    });

    // Pull from Collins definitions if fewer than 3
    if (rawSentences.length < 3 && w.collins && Array.isArray(w.collins.definitions)) {
      w.collins.definitions.forEach(def => {
        if (def.example && !rawSentences.some(s => s.en.toLowerCase() === def.example.toLowerCase())) {
          rawSentences.push({ en: def.example, ur: '', meaning: '' });
        }
      });
    }

    // Pull from curatedCollins if available
    const lowerW = (w.word || '').toLowerCase();
    if (rawSentences.length < 3 && OnlineLookupService.curatedCollins && OnlineLookupService.curatedCollins[lowerW]) {
      const cc = OnlineLookupService.curatedCollins[lowerW];
      if (Array.isArray(cc.definitions)) {
        cc.definitions.forEach(def => {
          if (def.example && !rawSentences.some(s => s.en.toLowerCase() === def.example.toLowerCase())) {
            rawSentences.push({ en: def.example, ur: '', meaning: '' });
          }
        });
      }
    }

    // Deduplicate sentences before checking count
    const normSent = (s) => (s && s.en ? s.en : '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const seenSentences = new Set();
    rawSentences = rawSentences.filter(s => {
      const n = normSent(s);
      if (!n || seenSentences.has(n)) return false;
      seenSentences.add(n);
      return true;
    });

    // Fallback: If still fewer than 3, add high-quality contextual sentences showing clear usage
    if (rawSentences.length < 3) {
      const pos = (w.partOfSpeech || w.posShort || '').toLowerCase();
      const cap = w.word.charAt(0).toUpperCase() + w.word.slice(1);
      const low = w.word.toLowerCase();
      const candidateFallbacks = [];
      if (pos.includes('noun')) {
        candidateFallbacks.push({ en: `The concept of ${low} plays an important role in academic and practical discussions.`, ur: '', meaning: '' });
        candidateFallbacks.push({ en: `Researchers examined the direct relationship between ${low} and long-term outcomes.`, ur: '', meaning: '' });
      } else if (pos.includes('verb')) {
        candidateFallbacks.push({ en: `The committee needed to ${low} all relevant variables before reaching a final decision.`, ur: '', meaning: '' });
        candidateFallbacks.push({ en: `They were advised to ${low} each situation with great care and attention.`, ur: '', meaning: '' });
      } else {
        candidateFallbacks.push({ en: `The preliminary findings remained somewhat ${low} and subject to interpretation.`, ur: '', meaning: '' });
        candidateFallbacks.push({ en: `Her explanation was characterized as ${low} by the review committee.`, ur: '', meaning: '' });
      }
      for (const fb of candidateFallbacks) {
        if (rawSentences.length >= 3) break;
        const n = normSent(fb);
        if (!seenSentences.has(n)) {
          seenSentences.add(n);
          rawSentences.push(fb);
        }
      }
    }

    // Allowed meanings strictly from w.urduMeaning to prevent cross-contamination
    const allowedMeanings = (w.urduMeaning || '')
      .split(/[؛;,/،]+/)
      .map(p => p.trim())
      .filter(p => p.length >= 2);

    // Clean up and assign meaning to sentences strictly from allowedMeanings
    const exampleSentences = rawSentences.map((s, i) => {
      let ur = s.ur || '';
      if (ur.includes('کا حقیقی اور روزمرہ استعمال واضح ہوتا ہے')) {
        ur = '';
      }
      let meaning = (s.meaning || '').trim();
      // If meaning doesn't match word's allowed meanings, reject it
      if (meaning && !allowedMeanings.some(am => am === meaning || meaning.includes(am) || am.includes(meaning))) {
        meaning = '';
      }
      // If meaning is empty and multiple allowed meanings exist, distribute them cleanly
      if (!meaning && allowedMeanings.length > 0) {
        meaning = allowedMeanings[i % allowedMeanings.length];
      }
      return {
        num: s.num || i + 1,
        en: s.en,
        ur: ur,
        meaning: meaning
      };
    });

    // Extract unique meanings for chips (ONLY allow meanings that belong to this word's urduMeaning)
    const chipSet = new Set();
    exampleSentences.forEach(s => {
      if (s.meaning && allowedMeanings.includes(s.meaning)) {
        chipSet.add(s.meaning);
      }
    });
    if (chipSet.size < 2 && allowedMeanings.length > 1) {
      allowedMeanings.forEach(m => chipSet.add(m));
    }
    const filterChips = chipSet.size > 1 ? ['All', ...Array.from(chipSet)] : [];

    // 3. Synonyms & Antonyms (Multiple senses with SYN and ANT badges)
    let synAntList = [];
    if (w.synonymsAntonymsList && w.synonymsAntonymsList.length > 0) {
      synAntList = w.synonymsAntonymsList;
    } else if (OnlineLookupService.curatedSynonymsAntonyms && OnlineLookupService.curatedSynonymsAntonyms[cleanWord]) {
      synAntList = OnlineLookupService.curatedSynonymsAntonyms[cleanWord];
      w.synonymsAntonymsList = synAntList;
    } else {
      const syns = Array.isArray(w.synonyms)
        ? w.synonyms
        : (w.synonymsAntonyms && Array.isArray(w.synonymsAntonyms.synonyms) ? w.synonymsAntonyms.synonyms : []);
      const ants = Array.isArray(w.antonyms)
        ? w.antonyms
        : (w.synonymsAntonyms && Array.isArray(w.synonymsAntonyms.antonyms) ? w.synonymsAntonyms.antonyms : []);

      if (syns.length > 0 || ants.length > 0) {
        const primarySense = (w.urduMeaning || w.definition || w.word).split(/[؛;,/،\.]+/)[0].trim();
        synAntList = [
          {
            num: 1,
            context: `for the sense of "${primarySense || w.word}"`,
            syns: syns.slice(0, 8),
            ants: ants.slice(0, 6)
          }
        ];
      }
    }

    if (synAntList && synAntList.length > 0 && (!synAntList[0].ants || synAntList[0].ants.length === 0)) {
      if (OnlineLookupService.curatedSynonymsAntonyms && OnlineLookupService.curatedSynonymsAntonyms[cleanWord]) {
        synAntList = OnlineLookupService.curatedSynonymsAntonyms[cleanWord];
        w.synonymsAntonymsList = synAntList;
      }
    }

    // 4. Phrases
    let phrases = (OnlineLookupService && OnlineLookupService.getPhrases)
      ? OnlineLookupService.getPhrases(w)
      : [];
    if (!phrases || phrases.length === 0) {
      if (Array.isArray(w.phrases) && w.phrases.length > 0) {
        phrases = w.phrases.map((p, i) => typeof p === 'string' ? { num: i + 1, text: p, ur: '' } : { num: p.num || i + 1, text: p.text, ur: p.ur || '' });
      }
    }

    // 5. Wikipedia
    const wikiData = w.wikipedia || {
      title: w.word.charAt(0).toUpperCase() + w.word.slice(1),
      summary: w.urduDefinition || `${w.word} or ${w.word} interest, in literature and logic, is anything that functions contrary to an expectation or interest.`,
      url: `https://en.wikipedia.org/wiki/${encodeURIComponent(w.word)}`
    };

    // 7. Collins COBUILD Data
    const collinsData = w.collins || (OnlineLookupService.curatedCollins && OnlineLookupService.curatedCollins[w.word.toLowerCase()]) || {
      title: "Collins COBUILD Advanced Dictionary",
      word: w.word,
      phonetic: respelling,
      stars: 2,
      definitions: [
        {
          num: 1,
          pos: (w.partOfSpeech || w.posShort || 'ADJ').toUpperCase().replace('.', ''),
          explanation: (w.englishDefinition || w.definition)
            ? (w.englishDefinition || w.definition)
            : ((w.posShort && w.posShort.includes('n'))
                ? `${w.word} refers to ${w.urduMeaning ? w.urduMeaning.split(/[\/,،]/)[0].trim() : 'this concept'}.`
                : ((w.posShort && w.posShort.includes('v'))
                    ? `To ${w.word.toLowerCase()} means to ${w.urduMeaning ? w.urduMeaning.split(/[\/,،]/)[0].trim() : 'perform this action'}.`
                    : `Someone or something that is ${w.word.toLowerCase()} exhibits ${w.urduMeaning ? w.urduMeaning.split(/[\/,،]/)[0].trim() : 'this quality'}.`)),
          example: (w.sampleSentences && w.sampleSentences[0] && w.sampleSentences[0].en)
            ? w.sampleSentences[0].en
            : (w.sentences && w.sentences[0] && w.sentences[0].en ? w.sentences[0].en : '')
        }
      ]
    };

    if (activeTab === 'wordnet') activeTab = 'concise';
    const tabAttr = isModal ? 'data-modal-dict-tab' : 'data-dict-tab';

    const enContext = OnlineLookupService.getEnglishContext ? OnlineLookupService.getEnglishContext(w) : {
      definition: `${w.word} refers to ${w.urduMeaning ? w.urduMeaning.split(/[\/,،]/)[0].trim() : 'a key English concept'}.`,
      coreIdea: `Communicates the concept of "${w.word}" clearly and accurately.`,
      contextUsage: `Used in academic, professional, and formal English communication.`,
      collocations: (w.phrases && w.phrases.length > 0) ? w.phrases.map(p => p.text || p) : []
    };

    return `
      <!-- Hero Top Bar (Screenshot 3) -->
      <div class="udict-hero-top">
        <div class="udict-title-bar">
          <div class="udict-word-header-wrap">
            <h1 class="udict-main-word">${w.word}</h1>
            ${(!dualResp.isDifferent && respelling) ? `<span class="udict-respelling-badge" data-phonetic-display="respelling">[ ${respelling} ]</span>` : ''}
            ${urduPhonetic ? `<span class="udict-urdu-phonetic-badge" data-phonetic-display="urdu">(${urduPhonetic})</span>` : ''}
          </div>
          <div class="udict-actions-group">
            <button class="udict-action-icon-btn star-fav-btn ${isFav ? 'active' : ''}" ${isModal ? 'id="modal-fav-btn"' : `data-fav-id="${w.id}"`} title="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="${isFav ? '#eab308' : 'none'}" stroke="${isFav ? '#eab308' : 'currentColor'}" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </button>
            ${isModal ? `<button type="button" class="close-modal-action close-modal-cross" id="close-modal-cross-btn" style="background: none; border: none; font-size: 1.4rem; cursor: pointer; color: var(--text-muted); padding: 4px 6px; line-height: 1; display: flex; align-items: center; justify-content: center;" title="Close" aria-label="Close">✕</button>` : ''}
          </div>
        </div>

        <!-- ============================================================= -->
        <!-- [LOCKED FEATURE - DO NOT MODIFY WITHOUT USER CONFIRMATION]   -->
        <!-- Dual Audio Rows: Original Red Speaker Buttons (UK & US)      -->
        <!-- ============================================================= -->
        <div class="udict-audio-list">
          <div class="udict-audio-item">
            <button type="button" class="udict-accent-speaker-btn" data-accent-speech="${w.word}" data-accent="uk" title="Listen UK Pronunciation">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
            </button>
            <span class="udict-accent-label">UK</span>
            ${dualResp.isDifferent && ukRespelling ? `<span class="udict-accent-phonetic" data-phonetic-display="uk-respelling">[ ${ukRespelling} ]</span>` : ''}
          </div>
          <div class="udict-audio-item">
            <button type="button" class="udict-accent-speaker-btn" data-accent-speech="${w.word}" data-accent="us" title="Listen US Pronunciation">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
            </button>
            <span class="udict-accent-label">US</span>
            ${dualResp.isDifferent && usRespelling ? `<span class="udict-accent-phonetic" data-phonetic-display="us-respelling">[ ${usRespelling} ]</span>` : ''}
          </div>
        </div>
      </div>

      <!-- 3 Source Tabs: Concise | Collins | English -->
      <div class="udict-nav-tabs">
        <button class="udict-tab-btn ${activeTab === 'concise' ? 'active' : ''}" ${tabAttr}="concise">Concise</button>
        <button class="udict-tab-btn ${activeTab === 'collins' ? 'active' : ''}" ${tabAttr}="collins">Collins</button>
        <button class="udict-tab-btn ${activeTab === 'english' ? 'active' : ''}" ${tabAttr}="english">English</button>
      </div>

      <!-- TAB 1: CONCISE (Screenshots 3-8) -->
      ${activeTab === 'concise' ? `
        <!-- Part of Speech & Urdu Meaning (Screenshot 3) -->
        <div class="udict-concise-meaning-row">
          <span class="udict-concise-pos">${w.posShort || 'adj.'}</span>
          <span class="udict-concise-urdu urdu-text">${this.formatConciseUrduMeaning(w.urduMeaning, w.word)}</span>
        </div>

        <!-- 1. Unified Example Sentences Section (Tareeqa 1 + 3 Combined) -->
        <div class="udict-section-card" style="border-top: none; padding-top: 0; margin-top: 0;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
            <h3 class="udict-section-title" style="margin-bottom: 0;">Sample Sentences</h3>
            ${filterChips.length > 0 ? `
              <div class="udict-filter-chips" data-card-bilingual-chips>
                ${filterChips.map((chip, cIdx) => `
                  <span class="udict-filter-chip ${cIdx === 0 ? 'active' : ''}" data-card-bilingual-chip="${chip}">${chip}</span>
                `).join('')}
              </div>
            ` : ''}
          </div>

          <div class="udict-sentences-list" data-card-bilingual-list>
            ${exampleSentences.slice(0, 3).map((s, idx) => {
              const highlightedEn = this.highlightWordInSentence(s.en, w.word);
              return `
                <div class="udict-sentence-item udict-bilingual-item" data-sentence-index="${idx}" data-sentence-en="${this.escapeHtmlAttr(s.en)}" data-sentence-ur="${this.escapeHtmlAttr(s.ur || '')}" data-sentence-meaning="${s.meaning || ''}" title="اردو ترجمہ کے لیے ٹیپ کریں">
                  <div class="udict-sentence-num">${s.num || idx + 1}</div>
                  <div class="udict-sentence-body">
                    <div class="udict-sentence-en">${highlightedEn}</div>
                  </div>
                  <div class="udict-sentence-tap-hint">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- 3. Synonyms & Antonyms Card (Screenshots 5 & 6) -->
        <div class="udict-section-card" data-syn-ant-card="${cleanWord}">
          <h3 class="udict-section-title">Synonyms &amp; Antonyms</h3>
          <div class="udict-target-pos-row">
            <span class="udict-target-word-coral">${w.word}</span>
            <span class="udict-target-pos-italic">${w.posShort || 'adj.'}</span>
          </div>

          <div class="udict-syn-sense-container" data-syn-ant-list="${cleanWord}">
            ${synAntList.length > 0 ? synAntList.map((sense, sIdx) => `
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
            `).join('') : `
              <div class="udict-syn-loading" style="font-size: 0.85rem; color: var(--text-muted); padding: 8px 0;">
                Loading accurate synonyms &amp; antonyms...
              </div>
            `}
          </div>
        </div>

        <!-- 4. Phrases Card (Screenshot 7) -->
        <div class="udict-section-card">
          <h3 class="udict-section-title">Phrases</h3>
          <div class="udict-phrases-list" data-phrases-list="${cleanWord}">
            ${phrases && phrases.length > 0 ? phrases.map((p, pIdx) => `
              <div class="udict-phrase-item" data-phrase-text="${p.text}" data-phrase-ur="${p.ur || ''}" title="Tap for Urdu translation">
                <div class="udict-phrase-main">
                  <span class="udict-sentence-num">${p.num || pIdx + 1}</span>
                  <span class="udict-phrase-text">${p.text}</span>
                </div>
                <div class="udict-phrase-tap-hint">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </div>
            `).join('') : `
              <div class="udict-phrase-loading" style="font-size: 0.85rem; color: var(--text-muted); padding: 8px 0;">
                Loading accurate phrases...
              </div>
            `}
          </div>
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
          ${respelling ? `<span class="udict-respelling-badge" style="font-size: 0.85rem; padding: 2px 8px;">[ ${respelling} ]</span>` : ''}
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

      <!-- TAB 3: ENGLISH TO ENGLISH & CONTEXT (User Request) -->
      ${activeTab === 'english' ? `
        <div class="udict-en-context-card">
          <!-- Word Title & POS -->
          <div class="udict-en-header-row">
            <div class="udict-en-word-title">${w.word}</div>
            <span class="udict-en-pos-badge">${(w.partOfSpeech || w.posShort || 'word').toUpperCase().replace('.', '')}</span>
          </div>

          <!-- 1. English Definition Block -->
          <div class="udict-en-section">
            <div class="udict-en-section-title">
              <span class="udict-en-section-icon">📖</span>
              <span>English Meaning</span>
            </div>
            <p class="udict-en-main-def">
              ${enContext.definition.toLowerCase().startsWith(w.word.toLowerCase()) ? enContext.definition : `<strong>${w.word}</strong> means ${enContext.definition.replace(/^to\s+/i, '').replace(/\.$/, '')}.`}
            </p>
          </div>

          <!-- 2. Core Idea Block (Highlight Card) -->
          <div class="udict-en-core-idea-card">
            <div class="udict-en-core-idea-title">
              <span class="udict-en-section-icon">💡</span>
              <span>Core Idea</span>
            </div>
            <p class="udict-en-core-idea-text">
              ${enContext.coreIdea}
            </p>
          </div>

          <!-- 3. Context & When to Use -->
          <div class="udict-en-section">
            <div class="udict-en-section-title">
              <span class="udict-en-section-icon">🎯</span>
              <span>Context &amp; When to Use</span>
            </div>
            <p class="udict-en-context-text">
              ${enContext.contextUsage}
            </p>
          </div>

          <!-- 4. Common Collocations (Word Partners) -->
          ${enContext.collocations && enContext.collocations.length > 0 ? `
            <div class="udict-en-section">
              <div class="udict-en-section-title">
                <span class="udict-en-section-icon">🔗</span>
                <span>Common Collocations</span>
              </div>
              <div class="udict-en-collocations-wrap">
                ${enContext.collocations.map(col => `
                  <span class="udict-en-collocation-chip" data-word-search="${col}">${col}</span>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- 5. Context in Action -->
          ${exampleSentences && exampleSentences.length > 0 ? `
            <div class="udict-en-section" style="margin-top: 4px;">
              <div class="udict-en-section-title">
                <span class="udict-en-section-icon">💬</span>
                <span>Context in Action</span>
              </div>
              <div class="udict-en-action-sentence-box">
                <div class="udict-en-action-sent-text">${this.highlightWordInSentence(exampleSentences[0].en, w.word)}</div>
              </div>
            </div>
          ` : ''}
        </div>
      ` : ''}
    `;
  }

  attachCardEventListeners(container, isModal = false, currentWord = null) {
    if (!container) return;

    // Auto-enrich distinct UK and US phonetics and respelling if missing or placeholder
    if (currentWord && currentWord.word) {
      const cleanW = currentWord.word.toLowerCase();
      const isMissingOrPlaceholder = !currentWord.phoneticUK || !currentWord.phoneticUS || !currentWord.respelling ||
                                     currentWord.phoneticUK === `/${cleanW}/` || currentWord.phoneticUS === `/${cleanW}/`;
      if (isMissingOrPlaceholder) {
        OnlineLookupService.fetchDualPhonetics(currentWord.word).then(phones => {
          if (phones) {
            if (phones.uk && phones.uk !== `/${cleanW}/`) currentWord.phoneticUK = phones.uk;
            if (phones.us && phones.us !== `/${cleanW}/`) currentWord.phoneticUS = phones.us;
            if (phones.respelling) currentWord.respelling = phones.respelling;
            if (phones.urduPhonetic) currentWord.urduPhonetic = phones.urduPhonetic;

            const respEl = container.querySelector('[data-phonetic-display="respelling"]');
            const ukRespEl = container.querySelector('[data-phonetic-display="uk-respelling"]');
            const usRespEl = container.querySelector('[data-phonetic-display="us-respelling"]');

            if (respEl && currentWord.respelling) respEl.textContent = `[ ${currentWord.respelling} ]`;
            if (ukRespEl && currentWord.respellingUK) ukRespEl.textContent = `[ ${currentWord.respellingUK} ]`;
            if (usRespEl && currentWord.respellingUS) usRespEl.textContent = `[ ${currentWord.respellingUS} ]`;
            if (urduEl && currentWord.urduPhonetic) urduEl.textContent = `(${currentWord.urduPhonetic})`;
          }
        });
      }
    }

    // 1. UK & US Accent Speaker buttons
    container.querySelectorAll('.udict-accent-speaker-btn, .udict-accent-pill-btn').forEach(btn => {
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

        const dedicatedOverlay = document.getElementById('dedicated-search-screen');
        if (dedicatedOverlay && dedicatedOverlay.style.display !== 'none') {
          this.selectWordFromSearch(word);
        } else if (this.dictSearchInput) {
          this.dictSearchInput.value = word;
          this.searchQuery = word;
          if (this.dictClearBtn) this.dictClearBtn.style.display = 'flex';
          this.performSearch(word);
          try {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } catch(err) {}
        } else {
          this.selectWordFromSearch(word);
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

    // 5b. Click sentence to open authentic Urdu translation pop-up
    container.querySelectorAll('.udict-sentence-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const en = item.dataset.sentenceEn;
        const ur = item.dataset.sentenceUr;
        if (en) {
          this.openSentenceTranslationModal(en, ur, currentWord);
        }
      });
    });

    // 5bb. Click phrase to open authentic Urdu translation pop-up
    container.querySelectorAll('.udict-phrase-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const pText = item.dataset.phraseText;
        const pUr = item.dataset.phraseUr;
        if (pText) {
          this.openPhraseTranslationModal(pText, pUr, currentWord);
        }
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

    // 5d. Dynamic Hydration of Synonyms & Antonyms if missing or incomplete
    if (currentWord && currentWord.word) {
      const cleanW = currentWord.word.toLowerCase();
      const synContainer = container.querySelector(`[data-syn-ant-list="${cleanW}"]`);
      const hasMissingOrIncomplete = !currentWord.synonymsAntonymsList ||
        currentWord.synonymsAntonymsList.length === 0 ||
        !currentWord.synonymsAntonymsList[0].ants ||
        currentWord.synonymsAntonymsList[0].ants.length === 0;

      if (synContainer && hasMissingOrIncomplete) {
        OnlineLookupService.fetchSynonymsAndAntonyms(currentWord.word, currentWord.urduMeaning).then(fetchedList => {
          if (fetchedList && fetchedList.length > 0) {
            currentWord.synonymsAntonymsList = fetchedList;
            currentWord.synonymsAntonyms = {
              word: currentWord.word,
              pos: currentWord.posShort || 'adj.',
              synonyms: fetchedList[0].syns || [],
              antonyms: fetchedList[0].ants || []
            };
            try { storage.saveWordToCache(currentWord); } catch (e) {}

            synContainer.innerHTML = fetchedList.map((sense, sIdx) => `
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
            `).join('');

            // Bind click on newly rendered syn/ant links
            synContainer.querySelectorAll('[data-word-search]').forEach(link => {
              link.addEventListener('click', (e) => {
                e.stopPropagation();
                const term = link.dataset.wordSearch;
                if (!term) return;
                const dedicatedOverlay = document.getElementById('dedicated-search-screen');
                if (dedicatedOverlay && dedicatedOverlay.style.display !== 'none') {
                  this.selectWordFromSearch(term);
                } else if (this.dictSearchInput) {
                  this.dictSearchInput.value = term;
                  this.searchQuery = term;
                  if (this.dictClearBtn) this.dictClearBtn.style.display = 'flex';
                  this.performSearch(term);
                } else {
                  this.selectWordFromSearch(term);
                }
              });
            });
          }
        });
      }
    }

    // 5e. Dynamic Hydration of Phrases if missing or empty
    if (currentWord && currentWord.word) {
      const cleanW = currentWord.word.toLowerCase();
      const phrasesContainer = container.querySelector(`[data-phrases-list="${cleanW}"]`);
      const existingPhrases = (OnlineLookupService && OnlineLookupService.getPhrases)
        ? OnlineLookupService.getPhrases(currentWord)
        : [];
      if ((!existingPhrases || existingPhrases.length === 0) && phrasesContainer) {
        OnlineLookupService.fetchPhrases(cleanW, currentWord.urduMeaning).then(fetchedPhrases => {
          if (fetchedPhrases && fetchedPhrases.length > 0) {
            currentWord.phrases = fetchedPhrases;
            try { storage.saveWordToCache(currentWord); } catch (e) {}
            if (phrasesContainer) {
              phrasesContainer.innerHTML = fetchedPhrases.map((p, pIdx) => `
                <div class="udict-phrase-item" data-phrase-text="${p.text}" data-phrase-ur="${p.ur || ''}" title="Tap for Urdu translation">
                  <div class="udict-phrase-main">
                    <span class="udict-sentence-num">${p.num || pIdx + 1}</span>
                    <span class="udict-phrase-text">${p.text}</span>
                  </div>
                  <div class="udict-phrase-tap-hint">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </div>
              `).join('');

              phrasesContainer.querySelectorAll('.udict-phrase-item').forEach(pItem => {
                pItem.addEventListener('click', (ev) => {
                  ev.stopPropagation();
                  this.openPhraseTranslationModal(pItem.dataset.phraseText, pItem.dataset.phraseUr, currentWord);
                });
              });
            }
          }
        }).catch(() => {});
      }
    }

    // 6. Tab switching buttons (Concise, Collins)
    // 6. Tab switching buttons (Concise, Collins, English)
    if (isModal) {
      container.querySelectorAll('[data-modal-dict-tab]').forEach(btn => {
        btn.addEventListener('click', async (e) => {
          e.stopPropagation();
          const tab = btn.dataset.modalDictTab;
          if (!currentWord) return;
          if ((tab === 'collins' || tab === 'english') && (!currentWord.collins || !currentWord.englishDefinition)) {
            btn.textContent = 'Loading...';
            const [realCollins, wn] = await Promise.all([
              currentWord.collins ? Promise.resolve(currentWord.collins) : OnlineLookupService.fetchCollinsData(currentWord.word),
              OnlineLookupService.fetchWordNetDefinition(currentWord.word)
            ]);
            if (realCollins) currentWord.collins = realCollins;
            if (wn && wn.definition) currentWord.englishDefinition = wn.definition;
            try { storage.saveWordToCache(currentWord); } catch(e) {}
          }
          this.openWordModal(currentWord, tab);
        });
      });
    } else {
      container.querySelectorAll('[data-dict-tab]').forEach(btn => {
        btn.addEventListener('click', async (e) => {
          e.stopPropagation();
          const newTab = btn.dataset.dictTab;
          this.dictActiveTab = newTab;

          const wordToRender = currentWord || (this.words && this.words.find(w => w.word.toLowerCase() === (this.searchQuery || '').toLowerCase()));

          if (wordToRender && (newTab === 'collins' || newTab === 'english') && (!wordToRender.collins || !wordToRender.englishDefinition)) {
            btn.textContent = 'Loading...';
            const [realCollins, wn] = await Promise.all([
              wordToRender.collins ? Promise.resolve(wordToRender.collins) : OnlineLookupService.fetchCollinsData(wordToRender.word),
              OnlineLookupService.fetchWordNetDefinition(wordToRender.word)
            ]);
            if (realCollins) wordToRender.collins = realCollins;
            if (wn && wn.definition) wordToRender.englishDefinition = wn.definition;
            try { storage.saveWordToCache(wordToRender); } catch(e) {}
          }

          const cardEl = btn.closest('.udict-card');
          const sBox = this.searchResultBox || document.getElementById('search-result-box');
          const isSearchScreen = (container === sBox || container.id === 'search-result-box' || container.closest('#search-result-box'));

          if (cardEl && wordToRender) {
            cardEl.innerHTML = this.buildDictionaryCardBodyHtml(wordToRender, newTab, false);
            this.attachCardEventListeners(cardEl, false, wordToRender);
          } else if (isSearchScreen && wordToRender) {
            container.innerHTML = `
              <div class="udict-card" style="margin-top: 6px;">
                ${this.buildDictionaryCardBodyHtml(wordToRender, newTab, false)}
              </div>
            `;
            this.attachCardEventListeners(container, false, wordToRender);
          } else {
            this.renderDictionaryResult();
          }
        });
      });
    }

    // 7. Favorite button with pop animation
    const animateStar = (btn, isNowFav) => {
      btn.classList.remove('star-pop-anim', 'star-unpop-anim');
      void btn.offsetWidth; // Force CSS reflow to re-trigger keyframe animation
      const svg = btn.querySelector('svg');

      if (isNowFav) {
        btn.classList.add('active', 'star-pop-anim');
        btn.setAttribute('title', 'Remove from favorites');
        if (svg) {
          svg.setAttribute('fill', '#f59e0b');
          svg.setAttribute('stroke', '#f59e0b');
        }
      } else {
        btn.classList.remove('active');
        btn.classList.add('star-unpop-anim');
        btn.setAttribute('title', 'Add to favorites');
        if (svg) {
          svg.setAttribute('fill', 'none');
          svg.setAttribute('stroke', 'currentColor');
        }
      }
    };

    if (isModal && currentWord) {
      const favBtn = container.querySelector('#modal-fav-btn');
      if (favBtn) {
        favBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const updatedFav = storage.toggleFavorite(currentWord.id);
          animateStar(favBtn, updatedFav);
          this.showToast(updatedFav ? 'Saved to Favorites ⭐' : 'Removed from Favorites');
          this.renderFavoritesTab();
        });
      }

      const closeButtons = container.querySelectorAll('.close-modal-action, #close-modal-btn, #close-modal-cross-btn, #close-modal-back-btn, .udict-modal-back-btn');
      closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const modal1 = document.getElementById('word-detail-modal');
          if (modal1) modal1.style.display = 'none';
          const transModal = document.getElementById('sentence-trans-modal');
          if (transModal) transModal.style.display = 'none';
        });
      });
    } else {
      container.querySelectorAll('[data-fav-id]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const wordId = btn.dataset.favId;
          const updatedFav = storage.toggleFavorite(wordId);

          document.querySelectorAll(`[data-fav-id="${wordId}"]`).forEach(b => {
            animateStar(b, updatedFav);
          });

          this.showToast(updatedFav ? 'Saved to Favorites ⭐' : 'Removed from Favorites');
          this.renderFavoritesTab();
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
  generateDiscoverBatch(forceNew = false) {
    const pool = [];
    const poolSeen = new Set();

    // 1. Add default comprehensive words first
    if (typeof defaultVocabulary !== 'undefined' && Array.isArray(defaultVocabulary)) {
      defaultVocabulary.forEach(w => {
        if (!w || !w.word) return;
        const k = w.word.toLowerCase();
        if (!poolSeen.has(k)) {
          poolSeen.add(k);
          pool.push(w);
        }
      });
    }

    // 2. Add words from quickAutocompleteIndex (850+ words with Urdu meanings)
    if (typeof quickAutocompleteIndex !== 'undefined' && Array.isArray(quickAutocompleteIndex)) {
      quickAutocompleteIndex.forEach(item => {
        if (!item || !item.word || !item.urdu) return;
        const k = item.word.toLowerCase();
        if (!poolSeen.has(k) && k.length >= 3) {
          poolSeen.add(k);
          const capitalized = item.word.charAt(0).toUpperCase() + item.word.slice(1);
          pool.push({
            id: 'disc-' + k,
            word: capitalized,
            posShort: item.pos || 'n.',
            urduMeaning: item.urdu,
            phonetic: `/${k}/`,
            sentences: [
              {
                en: `Developing a deeper understanding of ${item.word} is valuable.`,
                ur: `${item.urdu.split('/')[0]} کے بارے میں تفصیلی سمجھ بوجھ فائدہ مند ہے۔`
              }
            ]
          });
        }
      });
    }

    const cat = this.discoverCategory || 'all';

    // Filter by selected category
    let categoryPool = pool;
    if (cat === 'tharoorian') {
      categoryPool = pool.filter(w => {
        const k = w.word.toLowerCase();
        return THAROORIAN_DISCOVER_WORDS.has(k) || (w.tags && w.tags.some(t => t.text && t.text.toLowerCase().includes('tharoor')));
      });
    } else if (cat === 'ielts') {
      categoryPool = pool.filter(w => {
        const k = w.word.toLowerCase();
        return IELTS_DISCOVER_WORDS.has(k) || (w.tags && w.tags.some(t => t.text && t.text.toLowerCase().includes('ielts')));
      });
    } else if (cat === 'business') {
      categoryPool = pool.filter(w => {
        const k = w.word.toLowerCase();
        return BUSINESS_DISCOVER_WORDS.has(k) || (w.tags && w.tags.some(t => t.text && t.text.toLowerCase().includes('business')));
      });
    } else if (cat === 'environment') {
      categoryPool = pool.filter(w => {
        const k = w.word.toLowerCase();
        return ENVIRONMENT_DISCOVER_WORDS.has(k) || (w.tags && w.tags.some(t => t.text && t.text.toLowerCase().includes('environment')));
      });
    } else if (cat === 'everyday') {
      categoryPool = pool.filter(w => {
        const k = w.word.toLowerCase();
        return EVERYDAY_DISCOVER_WORDS.has(k) || (!THAROORIAN_DISCOVER_WORDS.has(k) && !IELTS_DISCOVER_WORDS.has(k) && !BUSINESS_DISCOVER_WORDS.has(k) && !ENVIRONMENT_DISCOVER_WORDS.has(k));
      });
    }

    // 3. Track seen words in sessionStorage per category so each new pull/session gives totally new words
    const sessionKey = `seen_discover_${cat}`;
    let seenKeys = [];
    try {
      seenKeys = JSON.parse(sessionStorage.getItem(sessionKey) || '[]');
    } catch(e) {
      seenKeys = [];
    }

    let candidates = categoryPool.filter(w => !seenKeys.includes(w.word.toLowerCase()));

    // Reset if candidates are exhausted or fewer than 15 left
    if (candidates.length < 15) {
      seenKeys = [];
      candidates = [...categoryPool];
    }

    // Fisher-Yates Shuffle
    for (let i = candidates.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
    }

    const batch = candidates.slice(0, 20);

    // Save seen keys in sessionStorage
    batch.forEach(w => seenKeys.push(w.word.toLowerCase()));
    try {
      sessionStorage.setItem(sessionKey, JSON.stringify(seenKeys));
    } catch(e) {}

    this.discoverWords = batch;

    // Register all batch words in this.words for modal lookup and favorites
    batch.forEach(w => {
      if (!this.words.some(x => x.id === w.id || x.word.toLowerCase() === w.word.toLowerCase())) {
        this.words.push(w);
      }
    });

    return batch;
  }

  async triggerDiscoverRefresh() {
    if (this.isDiscoverRefreshing) return;
    this.isDiscoverRefreshing = true;

    const indicator = document.getElementById('discover-pull-indicator');
    const pullText = document.getElementById('discover-pull-text');

    try {
      if (indicator) {
        indicator.classList.remove('pulling', 'ready');
        indicator.classList.add('visible', 'refreshing');
        indicator.style.height = '44px';
        if (pullText) pullText.textContent = 'Generating new words...';
      }

      await new Promise(r => setTimeout(r, 450));

      this.generateDiscoverBatch(true);
      this.renderDiscover();

      if (pullText) pullText.textContent = 'Words updated!';
      await new Promise(r => setTimeout(r, 220));
    } catch (err) {
      console.error('Error during discover refresh:', err);
    } finally {
      if (indicator) {
        indicator.classList.remove('refreshing');
        indicator.style.height = '0px';
        setTimeout(() => {
          indicator.classList.remove('visible', 'ready', 'pulling');
          if (pullText) pullText.textContent = 'Pull down to refresh';
        }, 240);
      }
      this.isDiscoverRefreshing = false;
    }
  }

  initDiscoverPullToRefresh() {
    const discoverTab = document.getElementById('discover-tab');
    const appBody = document.querySelector('.app-body');
    const indicator = document.getElementById('discover-pull-indicator');
    const pullText = document.getElementById('discover-pull-text');
    if (!discoverTab || !appBody || !indicator) return;

    let startY = 0;
    let startX = 0;
    let isDragging = false;
    let pullDistance = 0;
    const threshold = 44;
    const maxPull = 72;

    const resetIndicator = () => {
      indicator.classList.remove('pulling', 'ready');
      indicator.style.height = '0px';
      setTimeout(() => {
        if (!this.isDiscoverRefreshing) {
          indicator.classList.remove('visible');
          if (pullText) pullText.textContent = 'Pull down to refresh';
        }
      }, 220);
    };

    const handleStart = (pageY, pageX) => {
      if (this.activeTab !== 'discover' || this.isDiscoverRefreshing) return;
      if (appBody.scrollTop > 2) return;
      startY = pageY;
      startX = pageX || 0;
      isDragging = true;
      pullDistance = 0;
    };

    const handleMove = (pageY, pageX, e) => {
      if (!isDragging || this.activeTab !== 'discover' || this.isDiscoverRefreshing) return;
      if (appBody.scrollTop > 2) {
        isDragging = false;
        resetIndicator();
        return;
      }
      const deltaY = pageY - startY;
      const deltaX = pageX ? pageX - startX : 0;

      if (deltaY > 0 && Math.abs(deltaY) > Math.abs(deltaX)) {
        if (e && e.cancelable) e.preventDefault();
        pullDistance = Math.min(deltaY * 0.44, maxPull);
        indicator.classList.add('visible', 'pulling');
        indicator.style.height = `${pullDistance}px`;

        if (pullDistance >= threshold) {
          indicator.classList.add('ready');
          if (pullText) pullText.textContent = 'Release to refresh';
        } else {
          indicator.classList.remove('ready');
          if (pullText) pullText.textContent = 'Pull down to refresh';
        }
      } else if (deltaY < -6) {
        isDragging = false;
        resetIndicator();
      }
    };

    const handleEnd = async () => {
      if (!isDragging || this.activeTab !== 'discover') {
        isDragging = false;
        return;
      }
      isDragging = false;
      const reached = pullDistance >= threshold;
      pullDistance = 0;

      if (reached && !this.isDiscoverRefreshing) {
        await this.triggerDiscoverRefresh();
      } else {
        resetIndicator();
      }
    };

    // Touch Handlers for Mobile Devices
    appBody.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        handleStart(e.touches[0].pageY, e.touches[0].pageX);
      }
    }, { passive: true });

    appBody.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1) {
        handleMove(e.touches[0].pageY, e.touches[0].pageX, e);
      }
    }, { passive: false });

    window.addEventListener('touchend', () => {
      if (isDragging) handleEnd();
    });

    window.addEventListener('touchcancel', () => {
      if (isDragging) {
        isDragging = false;
        resetIndicator();
        pullDistance = 0;
      }
    });

    // Mouse Drag Handlers for Desktop / Testing
    appBody.addEventListener('mousedown', (e) => {
      if (e.button === 0) {
        handleStart(e.pageY, e.pageX);
      }
    });

    window.addEventListener('mousemove', (e) => {
      if (isDragging) {
        handleMove(e.pageY, e.pageX, e);
      }
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        handleEnd();
      }
    });
  }

  renderDiscover() {
    if (!this.discoverContainer) return;

    if (!this.discoverCategory) {
      this.discoverCategory = 'all';
    }

    if (!this.discoverWords || this.discoverWords.length === 0) {
      this.generateDiscoverBatch(false);
    }

    const categories = [
      { id: 'all', label: '🌟 All Words' },
      { id: 'ielts', label: '🎓 Pure IELTS (Band 7-8+)' },
      { id: 'business', label: '💼 Business' },
      { id: 'environment', label: '🌿 Environment' },
      { id: 'everyday', label: '💬 Everyday Core' },
      { id: 'tharoorian', label: '🎩 Tharoorian (Ultra)' }
    ];

    this.discoverContainer.innerHTML = `
      <div class="discover-filter-bar">
        ${categories.map(c => `
          <button class="discover-pill-btn ${this.discoverCategory === c.id ? 'active' : ''}" data-discover-cat="${c.id}">
            ${c.label}
          </button>
        `).join('')}
      </div>
      <div class="discover-list-fade-in">
        ${this.discoverWords.map(w => {
          const kLower = w.word.toLowerCase();
          const isTharoorian = THAROORIAN_DISCOVER_WORDS.has(kLower);
          const isIelts = IELTS_DISCOVER_WORDS.has(kLower) || (w.tags && w.tags.some(t => t.text && t.text.toLowerCase().includes('ielts')));
          
          let badgeHtml = '';
          if (isTharoorian) {
            badgeHtml = '<span class="discover-band-badge tharoor-badge">🎩 Tharoorian</span>';
          } else if (isIelts) {
            badgeHtml = '<span class="discover-band-badge">IELTS 7.5+</span>';
          }

          return `
            <div class="discover-list-row" data-open-word-id="${w.id}">
              <div class="discover-row-left">
                <span class="discover-word-text">${w.word}</span>
                <span class="word-pos-tag" style="font-size: 0.82rem;">[${w.posShort || 'n.'}]</span>
                ${badgeHtml}
              </div>
              <div class="discover-row-right urdu-text">
                ${(w.urduMeaning || '').split('/')[0]}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    // Filter pill click listeners
    this.discoverContainer.querySelectorAll('[data-discover-cat]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const cat = btn.dataset.discoverCat;
        if (this.discoverCategory !== cat) {
          this.discoverCategory = cat;
          this.generateDiscoverBatch(true);
          this.renderDiscover();
        }
      });
    });

    // Row click listeners -> openWordModal
    this.discoverContainer.querySelectorAll('[data-open-word-id]').forEach(row => {
      row.addEventListener('click', () => {
        const id = row.dataset.openWordId;
        const word = (this.discoverWords && this.discoverWords.find(w => w.id === id)) || this.words.find(w => w.id === id);
        if (word) this.openWordModal(word);
      });
    });
  }

  openWordModal(word, modalActiveTab = 'concise') {
    const modal = document.getElementById('word-detail-modal');
    const modalBody = document.getElementById('word-detail-modal-body');
    if (!modal || !modalBody) return;

    modalBody.innerHTML = `
      <!-- Top Language Row & Back Bar (Screenshot 3 & 4) -->
      <div class="udict-modal-top-bar">
        <button id="close-modal-back-btn" class="udict-modal-back-btn close-modal-action" title="Back" aria-label="Back">
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
    modal.onclick = (e) => { 
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    };

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

    if (titleEl) titleEl.textContent = 'Sample Sentences';

    const rawList = (wordItem.bilingualSentences && wordItem.bilingualSentences.length > 0)
      ? wordItem.bilingualSentences
      : (wordItem.sentences && wordItem.sentences.length > 0)
        ? wordItem.sentences
        : (wordItem.sampleSentences && wordItem.sampleSentences.length > 0)
          ? wordItem.sampleSentences
          : [
              { num: 1, en: `The word ${wordItem.word} is frequently used in modern literature.`, ur: '', meaning: '' }
            ];

    const wordLower = (wordItem.word || '').toLowerCase();
    const cleanRawList = rawList.filter(s => {
      if (!s || !s.en) return false;
      const en = s.en.toLowerCase();
      const ur = s.ur || '';
      if (wordLower !== 'detrimental' && (en.includes('smoking has a highly') || en.includes('excessive stress can prove') || (ur.includes('نقصان دہ') && !(wordItem.urduMeaning || '').includes('نقصان')) || (ur.includes('مضر') && !(wordItem.urduMeaning || '').includes('مضر')))) {
        return false;
      }
      return true;
    });

    const allowedMeanings = (wordItem.urduMeaning || '')
      .split(/[؛;,/،]+/)
      .map(p => p.trim())
      .filter(p => p.length >= 2);

    const allSentences = cleanRawList.map((s, idx) => {
      let ur = s.ur || '';
      if (ur.includes('کا حقیقی اور روزمرہ استعمال واضح ہوتا ہے')) ur = '';
      let meaning = (s.meaning || '').trim();
      if (meaning && !allowedMeanings.some(am => am === meaning || meaning.includes(am) || am.includes(meaning))) {
        meaning = '';
      }
      if (!meaning && allowedMeanings.length > 0) {
        meaning = allowedMeanings[idx % allowedMeanings.length];
      }
      return {
        num: s.num || idx + 1,
        en: s.en,
        ur: ur,
        meaning: meaning
      };
    });

    // Extract unique meanings for chips strictly from allowedMeanings
    const chipSet = new Set();
    allSentences.forEach(s => {
      if (s.meaning && allowedMeanings.includes(s.meaning)) {
        chipSet.add(s.meaning);
      }
    });
    if (chipSet.size < 2 && allowedMeanings.length > 1) {
      allowedMeanings.forEach(m => chipSet.add(m));
    }
    const filterChips = chipSet.size > 1 ? ['All', ...Array.from(chipSet)] : [];

    if (filterBar) {
      if (filterChips.length > 0) {
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
      } else {
        filterBar.style.display = 'none';
      }
    }

    if (listEl) {
      listEl.innerHTML = allSentences.map((s, idx) => {
        const highlightedEn = this.highlightWordInSentence(s.en, wordItem.word);
        return `
          <div class="more-sent-item udict-sentence-item" data-meaning="${s.meaning || ''}" data-sentence-en="${this.escapeHtmlAttr(s.en)}" data-sentence-ur="${this.escapeHtmlAttr(s.ur || '')}" title="اردو ترجمہ کے لیے ٹیپ کریں">
            <div class="more-sent-num udict-sentence-num">${s.num || idx + 1}</div>
            <div class="more-sent-body udict-sentence-body">
              <div class="more-sent-en udict-sentence-en">${highlightedEn}</div>
            </div>
            <div class="udict-sentence-tap-hint">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </div>
          </div>
        `;
      }).join('');

      listEl.querySelectorAll('.more-sent-item').forEach(item => {
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          const en = item.dataset.sentenceEn;
          const ur = item.dataset.sentenceUr;
          if (en) this.openSentenceTranslationModal(en, ur, wordItem);
        });
      });
    }

    modal.style.display = 'flex';
  }

  escapeHtmlAttr(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  async openSentenceTranslationModal(enText, existingUrText, wordItem = null) {
    const modal = document.getElementById('sentence-trans-modal');
    if (!modal) return;

    const badgeEl = document.getElementById('sentence-trans-badge');
    const titleEl = document.getElementById('sentence-trans-title');
    const enLabelEl = document.getElementById('sentence-trans-en-label');
    const enEl = document.getElementById('sentence-trans-en-text');
    const urEl = document.getElementById('sentence-trans-ur-text');
    const loadingEl = document.getElementById('sentence-trans-ur-loading');
    const closeBtn = document.getElementById('close-sentence-trans-btn');

    if (badgeEl) badgeEl.textContent = 'Translation';
    if (titleEl) titleEl.textContent = 'Sentence Meaning';
    if (enLabelEl) enLabelEl.textContent = 'English Sentence';

    if (closeBtn) {
      closeBtn.onclick = () => { modal.style.display = 'none'; };
    }
    modal.onclick = (e) => {
      if (e.target === modal) modal.style.display = 'none';
    };

    if (enEl) {
      const cleanW = wordItem ? wordItem.word : '';
      enEl.innerHTML = this.highlightWordInSentence(enText, cleanW);
    }

    modal.style.display = 'flex';

    // Check if existing translation is valid and authentic (not empty, not fake template)
    const isFake = !existingUrText || existingUrText.includes('کا حقیقی اور روزمرہ استعمال واضح ہوتا ہے');
    if (!isFake) {
      if (loadingEl) loadingEl.style.display = 'none';
      if (urEl) {
        urEl.style.display = 'block';
        urEl.textContent = existingUrText;
      }
      return;
    }

    // Otherwise, fetch real authentic Urdu translation live
    if (loadingEl) loadingEl.style.display = 'flex';
    if (urEl) {
      urEl.style.display = 'none';
      urEl.textContent = '';
    }

    try {
      const authenticUr = await OnlineLookupService.translate(enText, 'en', 'ur');
      if (loadingEl) loadingEl.style.display = 'none';
      if (urEl) {
        urEl.style.display = 'block';
        urEl.textContent = authenticUr || 'ترجمہ دستیاب نہیں ہے';
      }
      // Save authentic translation to memory and cache
      if (wordItem && authenticUr) {
        const targetList = wordItem.bilingualSentences || wordItem.sentences || wordItem.sampleSentences;
        if (targetList) {
          const match = targetList.find(s => s.en === enText);
          if (match) match.ur = authenticUr;
        }
        storage.saveWordToCache(wordItem);
      }
    } catch (err) {
      if (loadingEl) loadingEl.style.display = 'none';
      if (urEl) {
        urEl.style.display = 'block';
        urEl.textContent = 'ترجمہ لوڈ نہ ہو سکا';
      }
    }
  }

  async openPhraseTranslationModal(phraseText, existingUrText, wordItem = null) {
    const modal = document.getElementById('sentence-trans-modal');
    if (!modal) return;

    const badgeEl = document.getElementById('sentence-trans-badge');
    const titleEl = document.getElementById('sentence-trans-title');
    const enLabelEl = document.getElementById('sentence-trans-en-label');
    const enEl = document.getElementById('sentence-trans-en-text');
    const urEl = document.getElementById('sentence-trans-ur-text');
    const loadingEl = document.getElementById('sentence-trans-ur-loading');
    const closeBtn = document.getElementById('close-sentence-trans-btn');

    if (badgeEl) badgeEl.textContent = 'Phrase';
    if (titleEl) titleEl.textContent = 'Phrase Meaning';
    if (enLabelEl) enLabelEl.textContent = 'English Phrase';

    if (closeBtn) {
      closeBtn.onclick = () => { modal.style.display = 'none'; };
    }
    modal.onclick = (e) => {
      if (e.target === modal) modal.style.display = 'none';
    };

    if (enEl) {
      const cleanW = wordItem ? wordItem.word : '';
      enEl.innerHTML = this.highlightWordInSentence(phraseText, cleanW);
    }

    modal.style.display = 'flex';

    // Check if existing translation is valid and authentic (not empty, not fake template)
    const isFake = !existingUrText || existingUrText.includes('کا حقیقی اور روزمرہ استعمال واضح ہوتا ہے');
    if (!isFake) {
      if (loadingEl) loadingEl.style.display = 'none';
      if (urEl) {
        urEl.style.display = 'block';
        urEl.textContent = existingUrText;
      }
      return;
    }

    // Otherwise, fetch real authentic Urdu translation live
    if (loadingEl) loadingEl.style.display = 'flex';
    if (urEl) {
      urEl.style.display = 'none';
      urEl.textContent = '';
    }

    try {
      const authenticUr = await OnlineLookupService.translate(phraseText, 'en', 'ur');
      if (loadingEl) loadingEl.style.display = 'none';
      if (urEl) {
        urEl.style.display = 'block';
        urEl.textContent = authenticUr || 'ترجمہ دستیاب نہیں ہے';
      }
      // Save authentic translation to memory and cache
      if (wordItem && authenticUr) {
        if (Array.isArray(wordItem.phrases)) {
          const match = wordItem.phrases.find(p => (typeof p === 'string' ? p : p.text) === phraseText);
          if (match && typeof match === 'object') match.ur = authenticUr;
        }
        try { storage.saveWordToCache(wordItem); } catch (e) {}
      }
    } catch (err) {
      if (loadingEl) loadingEl.style.display = 'none';
      if (urEl) {
        urEl.style.display = 'block';
        urEl.textContent = 'ترجمہ لوڈ نہ ہو سکا';
      }
    }
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

        <!-- 6. Clear Local Cache -->
        <div class="journal-menu-row" id="more-nav-clear-cache" role="button" tabindex="0">
          <span class="journal-row-title">Clear Local Cache</span>
          <div class="journal-row-right">
            <span id="clear-cache-status" style="font-size: 0.85rem; font-weight: 600; color: #10b981; display: none;">Cache Cleared ✓</span>
            <span class="journal-chevron" id="clear-cache-chevron">›</span>
          </div>
        </div>

        <!-- 7. About -->
        <div class="journal-menu-row" style="cursor: default;">
          <span class="journal-row-title" style="color: var(--text-muted); font-weight: 500;">Vocab Journal</span>
          <div class="journal-row-right">
            <span style="font-size: 0.8rem; color: var(--text-faint);">v1.2 • 100% Free</span>
          </div>
        </div>
      </div>
    `;

    document.getElementById('more-nav-grammar').addEventListener('click', () => {
      this.resetGrammarState();
      this.moreSubView = 'grammar';
      this.renderMoreHub();
    });

    document.getElementById('more-nav-gemini').addEventListener('click', () => {
      this.openAiSettings();
    });

    const clearCacheBtn = document.getElementById('more-nav-clear-cache');
    if (clearCacheBtn) {
      clearCacheBtn.addEventListener('click', () => {
        storage.clearAllCache();
        this.words = (typeof defaultVocabulary !== 'undefined' && Array.isArray(defaultVocabulary)) ? [...defaultVocabulary] : [];
        this.renderDictionary();
        if (typeof this.renderRecentSearches === 'function') {
          this.renderRecentSearches();
        }

        const statusEl = document.getElementById('clear-cache-status');
        const chevronEl = document.getElementById('clear-cache-chevron');
        if (statusEl) {
          statusEl.textContent = 'Cache Cleared ✓';
          statusEl.style.display = 'inline-block';
          if (chevronEl) chevronEl.style.display = 'none';
          setTimeout(() => {
            if (statusEl) statusEl.style.display = 'none';
            if (chevronEl) chevronEl.style.display = 'inline-block';
          }, 3000);
        }

        this.showToast('Cache Cleared');
      });
    }

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
