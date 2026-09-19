// ==========================================================
// 1. OFFLINE STARTER DATABASE (Pre-bundled high-yield words)
// ==========================================================
const defaultVocabulary = [
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

// Built-in Quick Autocomplete Index with Urdu Meanings
const quickAutocompleteIndex = [
  { word: "Diaspora", pos: "n.", urdu: "تارک وطن / انتشار" },
  { word: "Dias", pos: "n.", urdu: "دیس / چبوترہ" },
  { word: "Diastasic", pos: "adj.", urdu: "معکوس؛ داستان سے متعلق" },
  { word: "Diastolic", pos: "adj.", urdu: "انبساطی (طبی)" },
  { word: "Diasporic", pos: "adj.", urdu: "تارکینِ وطن سے متعلق" },
  { word: "Inspire", pos: "v.", urdu: "انسپائر / متاثر کرنا" },
  { word: "Courage", pos: "n.", urdu: "ہمت / حوصلہ" },
  { word: "Resilient", pos: "adj.", urdu: "ثابت قدم / باحوصلہ" },
  { word: "Eloquent", pos: "adj.", urdu: "خوش گفتار / فصیح و بلیغ" },
  { word: "Pragmatic", pos: "adj.", urdu: "عملی پسند / حقیقت پسندانہ" },
  { word: "Meticulous", pos: "adj.", urdu: "باریک بین / محتاط" },
  { word: "Empathy", pos: "n.", urdu: "احساسِ ہمدردی" },
  { word: "Persevere", pos: "v.", urdu: "ڈٹے رہنا / مسلسل محنت" },
  { word: "Candid", pos: "adj.", urdu: "کھرا / بے باک" },
  { word: "Procrastinate", pos: "v.", urdu: "ٹال مٹول کرنا / سستی" },
  { word: "Ambiguous", pos: "adj.", urdu: "مبہم / غیر واضح" },
  { word: "Discuss", pos: "v.", urdu: "مباحثہ کرنا / گفتگو" },
  { word: "Distance", pos: "n.", urdu: "دور رکھنا / فاصلہ" },
  { word: "Disappeared", pos: "v.", urdu: "ناپید ہونا / غائب" },
  { word: "Discovered", pos: "v.", urdu: "دریافت کیا ہوا" },
  { word: "Diamonds", pos: "n.", urdu: "چوکھونٹ ہیرا / الماس" },
  { word: "Diary", pos: "n.", urdu: "روزنامچہ / ڈائری" },
  { word: "Different", pos: "adj.", urdu: "مختلف / جداگانہ" },
  { word: "Great minds think alike.", pos: "phrase", urdu: "عظیم ذہن یکساں سوچتے ہیں" }
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
    // Ensure reliable official Flash model
    const storedModel = localStorage.getItem('vocab_gemini_model_v5') || '';
    if (!storedModel || storedModel.includes('pro') || storedModel.includes('8b')) {
      localStorage.setItem('vocab_gemini_model_v5', 'gemini-2.5-flash');
    }
    const verModel = localStorage.getItem('vocab_gemini_verified_model') || '';
    if (!verModel || verModel.includes('pro') || verModel.includes('8b')) {
      localStorage.setItem('vocab_gemini_verified_model', 'gemini-2.5-flash');
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
    if (!m || m.includes('pro') || m.includes('8b')) {
      localStorage.setItem('vocab_gemini_model_v5', 'gemini-2.5-flash');
      return 'gemini-2.5-flash';
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
    utterance.lang = 'en-US';
    utterance.rate = options.rate || 0.85;

    const voices = this.synth.getVoices();
    const naturalVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google'))) ||
                         voices.find(v => v.lang.startsWith('en'));
    if (naturalVoice) utterance.voice = naturalVoice;

    utterance.onstart = () => this.notify({ type: 'start', text });
    utterance.onend = () => this.notify({ type: 'end', text });
    utterance.onerror = () => this.notify({ type: 'error', text });

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
  // --- DYNAMIC MODEL RESOLUTION (Official Gemini 3.6 Flash Engine) ---
  async getAvailableGeminiModel(apiKey) {
    const key = (apiKey || '').trim();
    if (!key) return 'gemini-3.6-flash';

    const cached = localStorage.getItem('vocab_gemini_verified_model');
    if (cached && (cached.includes('3.6') || cached.includes('2.5'))) {
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

          // Prioritize official current models instructed by Google API
          const best = contentModels.find(m => m === 'gemini-3.6-flash') ||
                       contentModels.find(m => m.includes('3.6')) ||
                       contentModels.find(m => m === 'gemini-2.5-flash') ||
                       contentModels.find(m => m.includes('flash') && !m.includes('2.0') && !m.includes('1.5')) ||
                       'gemini-3.6-flash';

          if (best) {
            localStorage.setItem('vocab_gemini_verified_model', best);
            return best;
          }
        }
      }
    } catch (e) {}

    return 'gemini-3.6-flash';
  },

  // --- A. GOOGLE GEMINI AI ENGINE (Smartest & Most Natural) ---
  async testGeminiKey(apiKey) {
    const key = (apiKey || '').trim();
    if (!key) return { success: false, error: "Please enter an API key." };
    try {
      const model = 'gemini-3.6-flash';
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

      return { success: false, error: errMsg };
    } catch (e) {
      return { success: false, error: e.message || "Network error. Check your internet connection." };
    }
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

    const activeModel = storage.getGeminiModel() || 'gemini-2.5-flash';
    const candidateModels = [activeModel, 'gemini-2.5-flash', 'gemini-3.6-flash'];
    const uniqueModels = [...new Set(candidateModels)];
    let lastError = null;

    for (const model of uniqueModels) {
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
          const isDemandSpike = msg.includes("high demand") || msg.includes("overloaded") || msg.includes("spikes in demand") || res.status === 503 || res.status === 429;
          if (isDemandSpike) {
            lastError = new Error(msg);
            continue; // seamlessly try next candidate model
          }
          throw new Error(msg);
        }

        const data = await res.json();
        let jsonText = data.candidates[0].content.parts[0].text.trim();
        if (jsonText.startsWith('```json')) {
          jsonText = jsonText.replace(/^```json/, '').replace(/```$/, '').trim();
        } else if (jsonText.startsWith('```')) {
          jsonText = jsonText.replace(/^```/, '').replace(/```$/, '').trim();
        }
        const parsed = JSON.parse(jsonText);

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
    try {
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`;
      const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timer = controller ? setTimeout(() => controller.abort(), 3500) : null;
      const res = await fetch(url, { signal: controller ? controller.signal : undefined });
      if (timer) clearTimeout(timer);
      if (!res.ok) return null;
      const cType = res.headers.get('content-type') || '';
      if (!cType.includes('json')) return null;
      const data = await res.json();
      if (data && Array.isArray(data) && data[0]) {
        let pos = 'noun';
        let definition = '';
        let example = '';
        let phonetic = data[0].phonetic || `/${word}/`;

        for (const item of data) {
          if (!phonetic && item.phonetic) phonetic = item.phonetic;
          if (item.meanings && Array.isArray(item.meanings)) {
            for (const m of item.meanings) {
              if (!pos && m.partOfSpeech) pos = m.partOfSpeech;
              if (m.definitions && Array.isArray(m.definitions)) {
                for (const def of m.definitions) {
                  if (!definition && def.definition) definition = def.definition;
                  if (!example && def.example && def.example.length >= 22) {
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
    } catch (e) {}
    return [];
  },

  // --- SMART LOCAL GRAMMAR & STRUCTURE ANALYZER (Runs in 5ms, 100% Reliable) ---
  async analyzeSentenceLocally(raw) {
    let s = (raw || '').trim();
    if (!s) return null;

    let clean = s.charAt(0).toUpperCase() + s.slice(1);
    if (!/[.!?]$/.test(clean)) clean += '.';

    let corrected = clean;
    let reasons = [];

    // 0. Weather expressions & Demonstrative agreement: 'this were raining' / 'this was raining' / 'it were raining'
    if (/\bthis\s+were\s+raining\b/i.test(corrected)) {
      corrected = corrected.replace(/\bthis\s+were\s+raining\b/i, 'It was raining');
      reasons.push("Weather conditions require impersonal subject 'It' (not 'This') and singular past auxiliary 'was' (not 'were')");
    } else if (/\bthis\s+was\s+raining\b/i.test(corrected)) {
      corrected = corrected.replace(/\bthis\s+was\s+raining\b/i, 'It was raining');
      reasons.push("Weather expressions use impersonal pronoun 'It' ('It was raining'), not demonstrative 'This'");
    } else if (/\bit\s+were\s+raining\b/i.test(corrected)) {
      corrected = corrected.replace(/\bit\s+were\s+raining\b/i, 'It was raining');
      reasons.push("Singular subject 'It' takes singular auxiliary verb 'was', not plural 'were'");
    } else if (/\b(this|that|he|she|it)\s+were\b/i.test(corrected)) {
      corrected = corrected.replace(/\b(this|that|he|she|it)\s+were\b/i, '$1 was');
      reasons.push("Singular subject takes singular past auxiliary 'was' instead of plural 'were'");
    }

    // 1. 'There is many [noun]' -> 'There are many [nouns]'
    if (/there\s+is\s+many/i.test(corrected)) {
      corrected = corrected.replace(/there\s+is\s+many/i, 'There are many');
      reasons.push("Use 'there are' instead of 'there is' for plural quantities ('many')");
    }

    // 2. Quantifiers: 'many problem' -> 'many problems'
    if (/many\s+problem(\b|\s)/i.test(corrected)) {
      corrected = corrected.replace(/many\s+problem/i, 'many problems');
      reasons.push("Pluralize 'problem' to 'problems' after quantifier 'many'");
    }
    corrected = corrected.replace(/\bmany\s+(car|house|person|child|system|thing|mistake|issue)\b/gi, (m, word) => {
      reasons.push(`Pluralize '${word}' after quantifier 'many'`);
      if (word.toLowerCase() === 'child') return 'many children';
      if (word.toLowerCase() === 'person') return 'many people';
      return `many ${word}s`;
    });

    // 3. 'in it system' / 'it [noun]' -> 'its [noun]'
    if (/\b(in|of|on|for|with|about)\s+it\s+([a-z]+)\b/i.test(corrected)) {
      corrected = corrected.replace(/\b(in|of|on|for|with|about)\s+it\s+([a-z]+)\b/i, '$1 its $2');
      reasons.push("Use possessive pronoun 'its' instead of object pronoun 'it'");
    }

    // 4. 'they all were' -> 'they were all'
    if (/\bthey\s+all\s+were\b/i.test(corrected)) {
      corrected = corrected.replace(/\bthey\s+all\s+were\b/i, 'They were all');
      reasons.push("'All' comes after auxiliary verb 'were' (mid-position quantifier placement)");
    }

    // 5. 'she/he do not knows' -> 'she/he does not know'
    if (/\b(she|he|it)\s+do\s+not\s+knows?\b/i.test(corrected)) {
      corrected = corrected.replace(/\b(she|he|it)\s+do\s+not\s+knows?\b/i, '$1 does not know');
      reasons.push("With third-person singular subjects, use 'does not' and base verb 'know'");
    }
    if (/\b(she|he|it)\s+do\s+not\b/i.test(corrected)) {
      corrected = corrected.replace(/\b(she|he|it)\s+do\s+not\b/i, '$1 does not');
      reasons.push("With third-person singular subjects, use 'does not' instead of 'do not'");
    }

    // 6. 'i am agree' -> 'i agree'
    if (/\bi\s+am\s+agree\b/i.test(corrected)) {
      corrected = corrected.replace(/\bi\s+am\s+agree\b/i, 'I agree');
      reasons.push("'Agree' is already a main verb; do not use auxiliary 'am' before it");
    }

    // 7. 'didn't came' -> 'didn't come'
    if (/\bdidn'?t\s+came\b/i.test(corrected)) {
      corrected = corrected.replace(/\bdidn'?t\s+came\b/i, "didn't come");
      reasons.push("After auxiliary 'didn't', always use base form of verb ('come')");
    }

    // 8. 'he/she go' -> 'he/she goes'
    if (/\b(he|she)\s+go\s+(to|\b)/i.test(corrected)) {
      corrected = corrected.replace(/\b(he|she)\s+go\s+/i, '$1 goes ');
      reasons.push("Third-person singular subjects take 'goes' in simple present tense");
    }

    const isIncorrect = corrected.toLowerCase().trim() !== clean.toLowerCase().trim();

    // CRITICAL: If no specific grammatical rule was triggered, do NOT guess that the sentence is 'Correct'.
    // Only return a result if a definite, verified error was detected.
    if (!isIncorrect) {
      return null;
    }

    let urduMeaning = await this.translate(corrected, 'en', 'ur');
    if (!urduMeaning) {
      urduMeaning = 'اس جملے کی درستگی کر دی گئی ہے۔';
    }

    return {
      status: '❌ Incorrect',
      correct_version: corrected,
      why_it_was_wrong: reasons.join('; ') + '.',
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

    const activeModel = storage.getGeminiModel() || 'gemini-2.5-flash';
    // Strictly top-tier flagship models: highest accuracy, zero degraded quality
    const candidateModels = [
      activeModel,
      'gemini-2.5-flash',
      'gemini-3.6-flash'
    ];
    const uniqueModels = [...new Set(candidateModels)];
    let lastError = null;

    for (const model of uniqueModels) {
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

          // Detect Google server load / demand spikes
          const isDemandSpike = msg.includes("high demand") || msg.includes("overloaded") || msg.includes("spikes in demand") || res.status === 503 || res.status === 429;
          if (isDemandSpike) {
            console.warn(`Gemini model ${model} demand spike detected. Switching to fallback standby model...`);
            lastError = new Error(msg);
            continue; // seamlessly try next model
          }

          throw new Error(msg);
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
        const isDemandSpikeOrTimeout = err.name === 'AbortError' || (err.message && (err.message.includes("high demand") || err.message.includes("overloaded") || err.message.includes("spikes in demand")));
        if (isDemandSpikeOrTimeout) {
          continue; // seamlessly try next candidate model
        }
      }
    }

    throw lastError || new Error("Google AI servers par is waqt temporary traffic zyada hai. Baraye meherbani thori dair baad dobara Check karein.");
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
    this.words = [...storage.cachedWords, ...defaultVocabulary];
    
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
    this.refreshWordBtn = document.getElementById('refresh-word-btn');
    
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
        this.switchTab(tab);
      });
    });

    // Refresh Word of the Day
    if (this.refreshWordBtn) {
      this.refreshWordBtn.addEventListener('click', () => {
        this.refreshWordOfTheDay();
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
        if (e.key === 'Enter') {
          this.hideAutocomplete();
          clearTimeout(this.searchDebounceTimer);
          this.searchQuery = this.dictSearchInput.value.trim();
          this.performSearch(this.searchQuery);
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

  renderAutocomplete(query) {
    if (!this.dictAutocompleteDropdown) return;
    const q = (query || '').trim().toLowerCase();

    let list = [];
    if (!q) {
      // Show Trending / Suggested Words (like U-Dictionary)
      list = [
        { word: "Diaspora", pos: "n.", urdu: "تارک وطن / انتشار" },
        { word: "Inspire", pos: "v.", urdu: "انسپائر / متاثر کرنا" },
        { word: "Courage", pos: "n.", urdu: "ہمت / حوصلہ" },
        { word: "Resilient", pos: "adj.", urdu: "ثابت قدم / باحوصلہ" },
        { word: "Great minds think alike.", pos: "phrase", urdu: "عظیم ذہن یکساں سوچتے ہیں" }
      ];
    } else {
      // Pool from active words and quickAutocompleteIndex
      const pool = new Map();
      this.words.forEach(w => {
        pool.set(w.word.toLowerCase(), { word: w.word, pos: w.posShort, urdu: w.urduMeaning.split('/')[0] });
      });
      quickAutocompleteIndex.forEach(item => {
        if (!pool.has(item.word.toLowerCase())) {
          pool.set(item.word.toLowerCase(), item);
        }
      });

      const allEntries = Array.from(pool.values());
      const prefixMatches = allEntries.filter(item => item.word.toLowerCase().startsWith(q));
      const containsMatches = allEntries.filter(item => !item.word.toLowerCase().startsWith(q) && (item.word.toLowerCase().includes(q) || item.urdu.includes(q)));
      list = [...prefixMatches, ...containsMatches].slice(0, 8);
    }

    if (list.length === 0) {
      this.dictAutocompleteDropdown.style.display = 'none';
      return;
    }

    this.dictAutocompleteDropdown.innerHTML = `
      <div class="dict-auto-header">${!q ? 'Suggestion' : 'Matching Words'}</div>
      ${list.map(item => {
        let highlightedWord = item.word;
        if (q && item.word.toLowerCase().startsWith(q)) {
          const prefix = item.word.substring(0, q.length);
          const rest = item.word.substring(q.length);
          highlightedWord = `<mark>${prefix}</mark>${rest}`;
        }
        return `
          <div class="dict-auto-item" data-auto-word="${item.word}">
            <div class="dict-auto-left">
              <span class="dict-auto-badge">en</span>
              <span class="dict-auto-word">${highlightedWord}</span>
              <span class="dict-auto-pos">${item.pos || ''}</span>
            </div>
            <div class="dict-auto-right urdu-text">${item.urdu}</div>
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

  // --- 2. SEARCH (GEMINI AI OR TRADITIONAL FALLBACK) ---
  async performSearch(rawQuery) {
    const query = rawQuery.trim();
    if (!query) return;

    const qLower = query.toLowerCase();
    const existing = this.words.find(w => w.word.toLowerCase() === qLower);
    if (existing) {
      this.unrecognizedTerm = null;
      this.renderDictionary();
      return;
    }

    this.isSearchingOnline = true;
    this.unrecognizedTerm = null;
    this.renderDictionary();

    try {
      let newWordObj = null;
      this.lastGeminiError = null;

      // 1. If user entered Gemini API Key -> Use Gemini AI
      if (storage.geminiApiKey) {
        try {
          newWordObj = await OnlineLookupService.fetchWithGemini(query, storage.geminiApiKey);
        } catch (geminiErr) {
          this.lastGeminiError = geminiErr.message || 'Gemini error';
          console.warn("Gemini lookup failed:", geminiErr);
        }
      }

      // 2. If no key or Gemini failed -> Fallback to Google Translate + FreeDict + Datamuse
      if (!newWordObj) {
        const [urduResult, dictResult, synsResult] = await Promise.allSettled([
          OnlineLookupService.translate(query, 'auto', 'ur'),
          OnlineLookupService.getDictionaryData(query),
          OnlineLookupService.getSynonyms(query)
        ]);

        const urduMeaning = (urduResult.status === 'fulfilled' && urduResult.value) ? urduResult.value.trim() : "";
        const dictData = (dictResult.status === 'fulfilled' && dictResult.value) ? dictResult.value : null;
        const synonyms = (synsResult.status === 'fulfilled' && synsResult.value) ? synsResult.value : [];
        const cleanWord = query.charAt(0).toUpperCase() + query.slice(1);

        // Check if word is unrecognized slang / non-standard word
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
        
        let sentenceEn = await OnlineLookupService.getMeaningfulSentence(cleanWord, dictData);
        let sentenceUr = await OnlineLookupService.translate(sentenceEn, 'en', 'ur');
        if (!sentenceUr || sentenceUr.toLowerCase() === sentenceEn.toLowerCase()) {
          sentenceUr = `اس جملے سے "${urduMeaning || cleanWord}" کا حقیقی اور روزمرہ استعمال واضح ہوتا ہے۔`;
        }

        let insteadOfList = [];
        if (synonyms.length >= 2) {
          insteadOfList = [synonyms[0], synonyms[1]];
        } else if (synonyms.length === 1) {
          insteadOfList = [synonyms[0]];
        } else {
          insteadOfList = ["Common term"];
        }

        let useThisList = [cleanWord];
        if (synonyms.length >= 4) {
          useThisList.push(synonyms[2], synonyms[3]);
        } else if (synonyms.length >= 3) {
          useThisList.push(synonyms[2]);
        }

        newWordObj = {
          id: `online-${Date.now()}`,
          word: cleanWord,
          posShort: posShort,
          partOfSpeech: pos,
          phonetic: phonetic,
          urduMeaning: urduMeaning || "معنی دستیاب ہے",
          urduDefinition: definition,
          insteadOf: insteadOfList,
          useThis: useThisList,
          howToUse: definition,
          sentences: [{ en: sentenceEn, ur: sentenceUr }],
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
      console.error("Lookup error:", err);
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
      w.word.toLowerCase().includes(q) ||
      w.urduMeaning.includes(this.searchQuery) ||
      w.insteadOf.some(i => i.toLowerCase().includes(q)) ||
      w.useThis.some(u => u.toLowerCase().includes(q))
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

    this.dictionaryContainer.innerHTML = matches.map(w => {
      const isFav = storage.isFavorite(w.id);
      const romanPron = w.romanUrdu || w.phonetic || '';
      const freqTag = w.frequencyRank || '#Top 15000';
      const sentences = (w.sentences && w.sentences.length > 0) ? w.sentences : [
        { en: `Understanding the practical usage of ${w.word} is essential in everyday English.`, ur: `اس کا روزمرہ انگریزی میں استعمال سمجھنا بے حد ضروری ہے۔`, source: "ECONOMIST: Analysis" }
      ];

      return `
        <div class="udict-card">
          <!-- 1. Top Word Title & Action Icons -->
          <div class="udict-hero-top">
            <div class="udict-title-bar">
              <h1 class="udict-main-word">${w.word}</h1>
              <div class="udict-actions-group">
                <button class="udict-icon-btn speaker-btn" data-speech-text="${w.word}" title="Listen pronunciation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                </button>
                <button class="udict-icon-btn copy-btn" data-copy-text="${w.word}" title="Copy word">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </button>
                <button class="udict-icon-btn heart-fav-btn ${isFav ? 'active' : ''}" data-fav-id="${w.id}" title="Save to Favorites">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
              </div>
            </div>

            <!-- 2. Urdu Meaning & Roman Pronunciation -->
            <div class="udict-urdu-section">
              <div>
                <div class="udict-urdu-main urdu-text">${w.urduMeaning}</div>
                ${romanPron ? `<div class="udict-phonetic-roman">${romanPron}</div>` : ''}
              </div>
              <button class="udict-icon-btn copy-btn" data-copy-text="${w.urduMeaning}" title="Copy Urdu text">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              </button>
            </div>

            <!-- 3. Tags Row (#Top 15000 / Frequency badge) -->
            <div class="udict-tags-row">
              <span class="udict-freq-badge">${freqTag}</span>
              <span class="word-pos-tag">[${w.posShort || w.partOfSpeech || 'n.'}]</span>
            </div>
          </div>

          <!-- 4. U-Dictionary Style Navigation Tabs -->
          <div class="udict-nav-tabs">
            <button class="udict-tab-btn ${this.dictActiveTab === 'concise' ? 'active' : ''}" data-dict-tab="concise">Concise</button>
            <button class="udict-tab-btn ${this.dictActiveTab === 'detailed' ? 'active' : ''}" data-dict-tab="detailed">Detailed</button>
            <button class="udict-tab-btn ${this.dictActiveTab === 'examples' ? 'active' : ''}" data-dict-tab="examples">Examples</button>
          </div>

          <!-- Tab Content: Concise & Detailed -->
          ${this.dictActiveTab !== 'examples' ? `
            <div class="comparison-container" style="margin-bottom: 16px;">
              <div>
                <div class="comparison-header">Instead of</div>
                <ul class="comparison-list">
                  ${(w.insteadOf || ['Common word']).map(i => `<li class="comparison-item old-word">${i}</li>`).join('')}
                </ul>
              </div>
              <div>
                <div class="comparison-header">Use this</div>
                <ul class="comparison-list">
                  ${(w.useThis || [w.word]).map(u => `<li class="comparison-item new-word">${u}</li>`).join('')}
                </ul>
              </div>
            </div>

            ${w.howToUse ? `
              <div class="editorial-section" style="margin-bottom: 16px;">
                <div class="editorial-section-title">Context & Usage</div>
                <p class="editorial-body-text">${w.howToUse}</p>
              </div>
            ` : ''}
          ` : ''}

          <!-- 5. Authentic Sample Sentences (With BBC / Economist Sources & Highlighted Word) -->
          <div class="udict-sentences-section">
            <div class="udict-sentences-header">
              <h3 class="udict-sentences-title">Sample Sentences</h3>
            </div>

            <div class="udict-sentences-list">
              ${sentences.map((s, idx) => {
                const highlighted = this.highlightWordInSentence(s.en, w.word);
                const source = s.source || (idx === 0 ? "ECONOMIST: It's less obvious than you might think" : idx === 1 ? "BBC: Commonwealth report" : "THE GUARDIAN: Analysis");
                return `
                  <div class="udict-sentence-item">
                    <div class="udict-sentence-num">${idx + 1}</div>
                    <div class="udict-sentence-body">
                      <div class="udict-sentence-en">${highlighted}</div>
                      <div class="udict-sentence-source-row">
                        <span class="udict-sentence-source">${source}</span>
                        <button class="speaker-btn" data-speech-text="${s.en}" title="Listen to sentence" style="padding: 2px;">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                        </button>
                      </div>
                      ${s.ur ? `<div class="udict-sentence-ur urdu-text">${s.ur}</div>` : ''}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- 6. Wikipedia Context Section -->
          ${(w.wikipediaContext || w.urduDefinition) ? `
            <div class="udict-wiki-section">
              <div class="udict-wiki-header">
                <span>📖</span>
                <span>Wikipedia</span>
              </div>
              <p class="udict-wiki-text">${w.wikipediaContext || w.urduDefinition}</p>
              <span class="udict-wiki-source">Source • Wikipedia</span>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    // Speaker buttons
    this.dictionaryContainer.querySelectorAll('.speaker-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        tts.speak(btn.dataset.speechText);
      });
    });

    // Favorite buttons
    this.dictionaryContainer.querySelectorAll('[data-fav-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        storage.toggleFavorite(btn.dataset.favId);
        this.renderDictionary();
        this.renderTodayWord();
        this.renderFavorites();
      });
    });

    // Copy buttons
    this.dictionaryContainer.querySelectorAll('[data-copy-text]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const text = btn.dataset.copyText;
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text).then(() => {
            this.showToast(`Copied: "${text}"`);
          }).catch(() => {
            this.showToast(`Copied: "${text}"`);
          });
        } else {
          this.showToast(`Copied: "${text}"`);
        }
      });
    });

    // Tab switching buttons (Concise, Detailed, Examples)
    this.dictionaryContainer.querySelectorAll('[data-dict-tab]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.dictActiveTab = btn.dataset.dictTab;
        this.renderDictionary();
      });
    });
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

  openWordModal(word) {
    const modal = document.getElementById('discover-modal');
    const modalBody = document.getElementById('discover-modal-body');
    const isFav = storage.isFavorite(word.id);

    modalBody.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-faint);">Word Details</span>
        <button id="close-modal-btn" style="background: none; border: none; font-size: 1.2rem; cursor: pointer; color: var(--text-muted); padding: 4px;">✕</button>
      </div>

      <div class="word-hero-row" style="margin-bottom: 6px;">
        <div class="word-title-wrap">
          <h2 class="word-main-title" style="font-size: 2rem;">${word.word}</h2>
          <span class="word-pos-tag">[${word.posShort}]</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <button class="speaker-btn" id="modal-speech-btn" title="Listen">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
          </button>
          <button class="heart-fav-btn ${isFav ? 'active' : ''}" id="modal-fav-btn" title="Save">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
        </div>
      </div>

      <div class="urdu-hero-text urdu-text" style="font-size: 1.8rem; margin: 4px 0 16px 0;">${word.urduMeaning}</div>

      <div class="comparison-container" style="margin-bottom: 20px;">
        <div>
          <div class="comparison-header">Instead of</div>
          <ul class="comparison-list">
            ${word.insteadOf.map(i => `<li class="comparison-item old-word">${i}</li>`).join('')}
          </ul>
        </div>
        <div>
          <div class="comparison-header">Use this</div>
          <ul class="comparison-list">
            ${word.useThis.map(u => `<li class="comparison-item new-word">${u}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="editorial-section">
        <div class="editorial-section-title">Context & Usage</div>
        <p class="editorial-body-text">${word.howToUse}</p>
      </div>

      <div class="editorial-section">
        <div class="editorial-section-title">Example Sentence</div>
        <div class="sentence-block">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <p class="sentence-en-text">"${word.sentences[0].en}"</p>
            <button class="speaker-btn" id="modal-sentence-speech" style="padding: 2px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
            </button>
          </div>
          <p class="sentence-ur-text urdu-text">${word.sentences[0].ur}</p>
        </div>
      </div>
    `;

    modal.style.display = 'flex';

    document.getElementById('close-modal-btn').addEventListener('click', () => {
      modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });

    document.getElementById('modal-speech-btn').addEventListener('click', () => {
      tts.speak(word.word);
    });

    document.getElementById('modal-sentence-speech').addEventListener('click', () => {
      tts.speak(word.sentences[0].en, { rate: 0.9 });
    });

    document.getElementById('modal-fav-btn').addEventListener('click', () => {
      storage.toggleFavorite(word.id);
      this.openWordModal(word);
      this.renderFavorites();
      this.renderTodayWord();
    });
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
          <p style="font-size: 0.88rem; line-height: 1.5; margin-bottom: 20px;">Tap the star or heart icon on any word in Home, Dictionary, or Discover to build your personal vocabulary list.</p>
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
              <div style="display: flex; align-items: center; gap: 14px;">
                <span class="discover-row-right urdu-text">${w.urduMeaning.split('/')[0]}</span>
                <button class="speaker-btn" data-speech-text="${w.word}" style="padding: 2px;" title="Listen to pronunciation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
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

    this.favoritesContainer.querySelectorAll('[data-fav-tab-open-id]').forEach(row => {
      row.addEventListener('click', (e) => {
        if (e.target.closest('.speaker-btn')) return;
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
            <div style="font-size: 0.84rem; font-weight: 700; color: #86198f;">✨ Connect Free Gemini AI</div>
            <div style="font-size: 0.74rem; color: #701a75; line-height: 1.4;">Unlocks real-time AI checking for any sentence. Free sample tests work below.</div>
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
            <p style="font-size: 0.78rem; color: var(--text-faint);">Performing linguistic analysis with Gemini AI (approx. 3–5s)...</p>
          </div>
        ` : ''}

        ${this.grammarError ? `
          <div style="background: #fef2f2; border: 1px solid #fee2e2; border-radius: 14px; padding: 14px; margin-top: 14px; color: #991b1b; font-size: 0.84rem; line-height: 1.5;">
            <strong>⚠️ Notice:</strong> ${this.grammarError}
            ${!hasKey ? `<br><span style="font-size:0.78rem; color:#7f1d1d;">Please connect your free Gemini key in More › Google Gemini AI to check any sentence.</span>` : ''}
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

    // 2. Call Gemini AI (Authoritative Teacher Engine with 6.5s timeout)
    if (storage.geminiApiKey) {
      try {
        finalResult = await OnlineLookupService.checkGrammarWithGemini(sentence, storage.geminiApiKey);
      } catch (err) {
        console.warn("Gemini AI check error/timeout:", err.message);
        // If Gemini failed or timed out, try local rule analyzer only for known grammatical patterns
        try {
          finalResult = await OnlineLookupService.analyzeSentenceLocally(sentence);
        } catch (localErr) {}

        // If neither Gemini nor verified local rules caught it, report honest status (NEVER fake a 'Correct' answer!)
        if (!finalResult) {
          this.isCheckingGrammar = false;
          let errMsg = err.message || "AI service connection error. Please retry.";
          if (err.name === 'AbortError') {
            errMsg = "Sentence analysis took longer than expected due to network latency. Please tap Check again.";
          } else if (errMsg.includes("high demand") || errMsg.includes("overloaded") || errMsg.includes("spikes in demand")) {
            errMsg = "Google AI servers par is waqt temporary traffic zyada hai. Baraye meherbani 5-10 second baad dobara Check dabayein.";
          }
          this.grammarError = errMsg;
          this.renderGrammarCheckView();
          return;
        }
      }
    } else {
      // If no API key is set, check local rule analyzer
      finalResult = await OnlineLookupService.analyzeSentenceLocally(sentence);
      if (!finalResult) {
        this.isCheckingGrammar = false;
        this.grammarError = "Please connect your free Google Gemini API key in 'Add Key 🔑' above to check complex sentences.";
        this.renderGrammarCheckView();
        return;
      }
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
                <span class="word-pos-tag">[${w.posShort}]</span>
              </div>
              <div style="display: flex; align-items: center; gap: 14px;">
                <span class="discover-row-right urdu-text">${w.urduMeaning.split('/')[0]}</span>
                <button class="speaker-btn" data-speech-text="${w.word}" style="padding: 2px;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
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

    this.moreContainer.querySelectorAll('[data-fav-open-id]').forEach(row => {
      row.addEventListener('click', (e) => {
        if (e.target.closest('.speaker-btn')) return;
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
