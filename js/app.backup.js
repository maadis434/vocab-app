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
  }
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
    this.cachedWords = this.load(this.cacheKey, []);
    this.geminiApiKey = localStorage.getItem(this.geminiKeyStorage) || '';
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
    return localStorage.getItem('vocab_gemini_model_v5') || 'gemini-3.6-flash';
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
  // --- A. GOOGLE GEMINI AI ENGINE (Smartest & Most Natural) ---
  async testGeminiKey(apiKey) {
    const key = (apiKey || '').trim();
    if (!key) return { success: false, error: "Please enter an API key." };
    try {
      // 1. Direct, instant ping to gemini-3.6-flash (sub-second response)
      const primaryUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${key}`;
      const res = await fetch(primaryUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: "hi" }] }],
          generationConfig: { maxOutputTokens: 1 }
        })
      });

      if (res.ok) {
        return { success: true, model: 'gemini-3.6-flash' };
      }

      const data = await res.json().catch(() => ({}));
      const errMsg = data.error && data.error.message ? data.error.message : `HTTP ${res.status}`;

      if (res.status === 400 && errMsg.includes("API key not valid")) {
        return { success: false, error: "API key is invalid. Please copy the exact key from Google AI Studio." };
      }

      // 2. Fast secondary fallback only if gemini-3.6-flash returns non-key error
      const backupUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`;
      const res2 = await fetch(backupUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: "hi" }] }],
          generationConfig: { maxOutputTokens: 1 }
        })
      });

      if (res2.ok) {
        return { success: true, model: 'gemini-2.5-flash' };
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
      "en": "A natural, modern daily-life English sentence using the word.",
      "ur": "The exact authentic Urdu translation of the sentence above."
    }
  ]
}`
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
      "en": "A natural, modern daily-life English sentence using the word.",
      "ur": "The exact authentic Urdu translation of the sentence above."
    }
  ]
}`;

    const preferredModel = storage.getGeminiModel();
    const models = [preferredModel, 'gemini-3.6-flash', 'gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-1.5-flash'];
    const uniqueModels = [...new Set(models)];
    let lastError = null;

    for (const model of uniqueModels) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey.trim()}`;
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { responseMimeType: "application/json" }
          })
        });

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          const msg = errData.error && errData.error.message ? errData.error.message : `HTTP ${res.status}`;
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
          sentences: parsed.sentences || [{ en: `How to use ${query}.`, ur: `اس لفظ کا استعمال۔` }],
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
      const res = await fetch(url);
      if (!res.ok) return null;
      const data = await res.json();
      if (data && data[0]) {
        const item = data[0];
        let pos = 'noun';
        let definition = '';
        let example = '';
        let phonetic = item.phonetic || `/${word}/`;

        if (item.meanings && item.meanings.length > 0) {
          const m = item.meanings[0];
          pos = m.partOfSpeech || pos;
          if (m.definitions && m.definitions.length > 0) {
            definition = m.definitions[0].definition || '';
            example = m.definitions[0].example || '';
          }
        }
        return { pos, definition, example, phonetic };
      }
    } catch (e) {}
    return null;
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
    this.activeTab = 'dictionary';
    this.moreSubView = 'menu';
    this.searchQuery = '';
    this.isSearchingOnline = false;
    this.searchDebounceTimer = null;

    this.revisionCards = [];
    this.currentRevisionIndex = 0;
    this.isCardFlipped = false;

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
    this.moreContainer = document.getElementById('more-container');
    this.practiceContainer = document.getElementById('practice-container');

    this.dictSearchInput = document.getElementById('dict-search-input');
    this.dictSearchBtn = document.getElementById('dict-search-btn');
    this.refreshWordBtn = document.getElementById('refresh-word-btn');
    
    // AI Key Modal Elements
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

    // Dictionary Search Input
    if (this.dictSearchInput) {
      this.dictSearchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim();
        clearTimeout(this.searchDebounceTimer);

        if (!this.searchQuery) {
          this.renderDictionary();
          return;
        }

        const q = this.searchQuery.toLowerCase();
        const localMatches = this.words.filter(w => 
          w.word.toLowerCase() === q || 
          w.word.toLowerCase().startsWith(q) ||
          w.urduMeaning.includes(this.searchQuery)
        );

        if (localMatches.length > 0) {
          this.renderDictionary();
        } else {
          this.searchDebounceTimer = setTimeout(() => {
            if (this.searchQuery.length >= 2) {
              this.performSearch(this.searchQuery);
            }
          }, 800);
        }
      });

      this.dictSearchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          clearTimeout(this.searchDebounceTimer);
          this.searchQuery = this.dictSearchInput.value.trim();
          this.performSearch(this.searchQuery);
        }
      });
    }

    if (this.dictSearchBtn) {
      this.dictSearchBtn.addEventListener('click', () => {
        clearTimeout(this.searchDebounceTimer);
        if (this.dictSearchInput) {
          this.searchQuery = this.dictSearchInput.value.trim();
          this.performSearch(this.searchQuery);
        }
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

    if (tabName === 'dictionary') {
      this.renderDictionary();
      if (this.dictSearchInput) this.dictSearchInput.focus();
    } else if (tabName === 'today') {
      this.renderTodayWord();
    } else if (tabName === 'discover') {
      this.renderDiscover();
    } else if (tabName === 'more') {
      this.renderMoreHub();
    } else if (tabName === 'practice') {
      this.startRevisionSession();
    }
  }

  render() {
    this.updateAiBadge();
    this.renderDictionary();
    this.renderTodayWord();
    this.renderDiscover();
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
    if (!this.todayContainer) return;
    const word = this.words[this.todayIndex];
    if (!word) return;

    const isFav = storage.isFavorite(word.id);
    const todayDate = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long' });

    this.todayContainer.innerHTML = `
      <div class="notes-timestamp-row">
        <span>Word of the Day • ${todayDate}</span>
        <button class="refresh-pill-btn" id="today-refresh-trigger" title="Get another word">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
          New Word
        </button>
      </div>

      <div class="word-hero">
        <div class="word-hero-row">
          <div class="word-title-wrap">
            <h1 class="word-main-title">${word.word}</h1>
            <span class="word-pos-tag">[${word.posShort}]</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <button class="speaker-btn" data-speech-text="${word.word}" id="play-today-word" title="Listen to pronunciation">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
            </button>
            <button class="heart-fav-btn ${isFav ? 'active' : ''}" id="fav-today-btn" title="Bookmark">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </button>
          </div>
        </div>
        
        <div class="urdu-hero-text urdu-text">${word.urduMeaning}</div>
      </div>

      <div class="comparison-container">
        <div>
          <div class="comparison-header">Instead of</div>
          <ul class="comparison-list">
            ${word.insteadOf.map(item => `<li class="comparison-item old-word">${item}</li>`).join('')}
          </ul>
        </div>
        <div>
          <div class="comparison-header">Use this</div>
          <ul class="comparison-list">
            ${word.useThis.map(item => `<li class="comparison-item new-word">${item}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="editorial-section">
        <div class="editorial-section-title">Context & Usage</div>
        <p class="editorial-body-text">${word.howToUse}</p>
      </div>

      <div class="editorial-section">
        <div class="editorial-section-title">Example Sentence</div>
        ${word.sentences.map(s => `
          <div class="sentence-block">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <p class="sentence-en-text">"${s.en}"</p>
              <button class="speaker-btn" data-speech-text="${s.en}" style="padding: 2px;" title="Listen to sentence">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
              </button>
            </div>
            <p class="sentence-ur-text urdu-text">${s.ur}</p>
          </div>
        `).join('')}
      </div>
    `;

    document.getElementById('today-refresh-trigger').addEventListener('click', () => {
      this.refreshWordOfTheDay();
    });

    document.getElementById('play-today-word').addEventListener('click', () => {
      tts.speak(word.word);
    });

    document.querySelectorAll('#today-container .sentence-block .speaker-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        tts.speak(btn.dataset.speechText, { rate: 0.9 });
      });
    });

    document.getElementById('fav-today-btn').addEventListener('click', () => {
      storage.toggleFavorite(word.id);
      this.renderTodayWord();
      this.renderFavorites();
    });
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
        
        let sentenceEn = dictData && dictData.example ? dictData.example : `Learning how to properly use "${cleanWord}" in modern English.`;
        let sentenceUr = await OnlineLookupService.translate(sentenceEn, 'en', 'ur') || `لفظ "${urduMeaning || cleanWord}" کے صحیح استعمال کو سمجھنا۔`;

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
      const mode = storage.geminiApiKey ? 'Gemini AI ✨' : 'Live Dictionary 🌐';
      this.dictionaryContainer.innerHTML = `
        <div style="text-align: center; padding: 50px 10px; color: var(--text-muted);">
          <div style="font-size: 2rem; margin-bottom: 8px;">🔍</div>
          <p style="font-size: 1.05rem; font-weight: 700; color: var(--text-title); margin-bottom: 4px;">Searching with ${mode}...</p>
          <p style="font-size: 0.84rem;">Generating natural Urdu translation and sentences for "${this.searchQuery}"...</p>
        </div>
      `;
      return;
    }

    if (this.unrecognizedTerm) {
      const { query, geminiError } = this.unrecognizedTerm;
      this.dictionaryContainer.innerHTML = `
        <div style="padding: 10px 0;">
          ${geminiError ? `
            <div style="background: #fef2f2; border: 1px solid #fee2e2; border-radius: 12px; padding: 12px 14px; margin-bottom: 16px; font-size: 0.82rem; color: #991b1b; line-height: 1.4;">
              <strong>⚠️ Gemini AI Error:</strong> ${geminiError}<br>
              <span style="font-size:0.76rem; color:#7f1d1d;">Please verify your API key in <strong>More › Google Gemini AI</strong>.</span>
            </div>
          ` : ''}

          <div style="text-align: center; padding: 36px 16px; background: #ffffff; border: 1px solid #e4e4e7; border-radius: 20px; box-shadow: 0 4px 16px rgba(0,0,0,0.02);">
            <div style="font-size: 2.2rem; margin-bottom: 8px;">📖</div>
            <h2 style="font-size: 1.25rem; font-weight: 800; color: var(--text-title); margin-bottom: 6px;">No Dictionary Entry for "${query}"</h2>
            <p style="font-size: 0.86rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 18px;">
              "${query}" is not found in standard academic dictionaries. It appears to be modern slang, an internet term, or colloquial phrasing.
            </p>
            <div style="background: #fdf4ff; border: 1px solid #f5d0fe; border-radius: 12px; padding: 12px 14px; margin-bottom: 20px; font-size: 0.82rem; color: #86198f; text-align: left; line-height: 1.5;">
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
      this.dictionaryContainer.innerHTML = `
        <div style="padding: 10px 0;">
          <div style="font-size: 0.78rem; font-weight: 700; color: var(--text-faint); margin-bottom: 10px; text-transform: uppercase;">Quick Lookups</div>
          <div class="dict-chips-scroll">
            ${this.words.slice(0, 8).map(w => `
              <button class="dict-suggest-chip" data-chip-word="${w.word}">
                ${w.word} <span style="font-size:0.7rem; color:var(--text-faint);">(${w.urduMeaning.split('/')[0]})</span>
              </button>
            `).join('')}
          </div>

          <div style="text-align: center; padding: 36px 10px; color: var(--text-muted); font-size: 0.88rem;">
            <p style="font-weight: 700; color: var(--text-title); margin-bottom: 4px;">English to Urdu & Vice Versa</p>
            <p style="font-size: 0.82rem; line-height: 1.5;">Type <strong>any English or Urdu word</strong> above and press <strong>Enter</strong> to look up pronunciation, meaning, and sentences.</p>
          </div>
        </div>
      `;

      this.dictionaryContainer.querySelectorAll('[data-chip-word]').forEach(chip => {
        chip.addEventListener('click', () => {
          this.searchQuery = chip.dataset.chipWord;
          if (this.dictSearchInput) this.dictSearchInput.value = this.searchQuery;
          this.renderDictionary();
        });
      });
      return;
    }

    const q = this.searchQuery.toLowerCase();
    const matches = this.words.filter(w => 
      w.word.toLowerCase().includes(q) ||
      w.urduMeaning.includes(this.searchQuery) ||
      w.insteadOf.some(i => i.toLowerCase().includes(q)) ||
      w.useThis.some(u => u.toLowerCase().includes(q))
    );

    if (matches.length === 0) {
      this.dictionaryContainer.innerHTML = `
        <div style="text-align: center; padding: 40px 10px;">
          <p style="font-size: 1rem; color: var(--text-title); font-weight: 700; margin-bottom: 6px;">Looking up "${this.searchQuery}"...</p>
          <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 16px;">Fetching definition, pronunciation, and Urdu translation...</p>
          <button class="refresh-pill-btn" style="margin: 0 auto; background: var(--text-title); color: white; border: none; padding: 9px 20px;" id="online-fetch-btn">
            Look up "${this.searchQuery}" Now 🔍
          </button>
        </div>
      `;
      const btn = document.getElementById('online-fetch-btn');
      if (btn) btn.addEventListener('click', () => this.performSearch(this.searchQuery));
      return;
    }

    this.dictionaryContainer.innerHTML = matches.map(w => {
      const isFav = storage.isFavorite(w.id);
      return `
        <div class="dict-result-card">
          <div class="word-hero-row" style="margin-bottom: 8px;">
            <div class="word-title-wrap">
              <h2 class="word-main-title" style="font-size: 1.8rem;">${w.word}</h2>
              <span class="word-pos-tag">[${w.posShort}]</span>
            </div>
            <div style="display: flex; align-items: center; gap: 6px;">
              <button class="speaker-btn" data-speech-text="${w.word}" title="Listen">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
              </button>
              <button class="heart-fav-btn ${isFav ? 'active' : ''}" data-fav-id="${w.id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </button>
            </div>
          </div>

          <div class="urdu-hero-text urdu-text" style="font-size: 1.8rem; margin: 4px 0 14px 0;">${w.urduMeaning}</div>

          <!-- Instead of / Use this -->
          <div class="comparison-container" style="margin-bottom: 16px;">
            <div>
              <div class="comparison-header">Instead of</div>
              <ul class="comparison-list">
                ${w.insteadOf.map(i => `<li class="comparison-item old-word">${i}</li>`).join('')}
              </ul>
            </div>
            <div>
              <div class="comparison-header">Use this</div>
              <ul class="comparison-list">
                ${w.useThis.map(u => `<li class="comparison-item new-word">${u}</li>`).join('')}
              </ul>
            </div>
          </div>

          <!-- Sentence -->
          <div class="sentence-block" style="border-top: 1px solid var(--divider); padding-top: 10px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <p class="sentence-en-text" style="font-size: 0.95rem;">"${w.sentences[0].en}"</p>
              <button class="speaker-btn" data-speech-text="${w.sentences[0].en}" style="padding: 2px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
              </button>
            </div>
            <p class="sentence-ur-text urdu-text" style="font-size: 1.15rem;">${w.sentences[0].ur}</p>
          </div>
        </div>
      `;
    }).join('');

    this.dictionaryContainer.querySelectorAll('.speaker-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        tts.speak(btn.dataset.speechText);
      });
    });

    this.dictionaryContainer.querySelectorAll('[data-fav-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        storage.toggleFavorite(btn.dataset.favId);
        this.renderDictionary();
        this.renderTodayWord();
        this.renderFavorites();
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

  // --- 4. MORE HUB (Settings, My Words, Practice, AI Key) ---
  renderFavorites() {
    this.renderMoreHub();
  }

  renderMoreHub() {
    if (!this.moreContainer) return;

    if (this.moreSubView === 'my-words') {
      this.renderMyWordsView();
      return;
    }

    const favCount = storage.favorites.length;
    const aiActive = !!storage.geminiApiKey;

    this.moreContainer.innerHTML = `
      <div style="margin-bottom: 8px;">
        <h2 style="font-size: 1.45rem; font-weight: 800; color: var(--text-title); letter-spacing: -0.02em;">More</h2>
        <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 2px;">Your personal library, practice & AI tools</p>
      </div>

      <div class="more-section-title">Vocabulary Library</div>
      <div class="more-group-card">
        <div class="more-nav-row" id="more-nav-my-words">
          <div class="more-row-left">
            <div class="more-icon-box heart">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </div>
            <div>
              <div class="more-row-title">My Words (Saved)</div>
              <div class="more-row-subtitle">Bookmarked vocabulary for quick revision</div>
            </div>
          </div>
          <div class="more-row-right">
            <span class="more-count-badge">${favCount}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>
        </div>

        <div class="more-nav-row" id="more-nav-practice">
          <div class="more-row-left">
            <div class="more-icon-box flash">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </div>
            <div>
              <div class="more-row-title">Flashcard Practice</div>
              <div class="more-row-subtitle">Active recall revision session</div>
            </div>
          </div>
          <div class="more-row-right">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>
        </div>
      </div>

      <div class="more-section-title">AI & Translation Engine</div>
      <div class="more-group-card">
        <div class="more-nav-row" id="more-nav-gemini">
          <div class="more-row-left">
            <div class="more-icon-box gemini">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14"/></svg>
            </div>
            <div>
              <div class="more-row-title">Google Gemini AI</div>
              <div class="more-row-subtitle">${aiActive ? '✨ Gemini AI Active — High quality natural Urdu' : 'Tap to connect free key (Google AI Studio)'}</div>
            </div>
          </div>
          <div class="more-row-right">
            <span class="more-count-badge" style="${aiActive ? 'background:#ecfdf5; color:#059669; font-weight:700;' : ''}">${aiActive ? 'Active ✨' : 'Configure ›'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>
        </div>
      </div>

      <div class="more-section-title">About</div>
      <div class="more-group-card">
        <div class="more-nav-row" style="cursor: default;">
          <div class="more-row-left">
            <div class="more-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            </div>
            <div>
              <div class="more-row-title">Vocab Notes</div>
              <div class="more-row-subtitle">Minimalist English-Urdu Journal v1.2</div>
            </div>
          </div>
          <div class="more-row-right">
            <span style="font-size:0.75rem; color:var(--text-faint);">100% Free</span>
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

    document.getElementById('more-nav-gemini').addEventListener('click', () => {
      this.openAiSettings();
    });
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
        this.switchTab('dictionary');
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
        <button class="notes-text-btn" style="flex: 1; justify-content: center; border: 1px solid #e4e4e7; border-radius: 12px; padding: 12px;" id="fc-need-work">
          Need Practice
        </button>
        <button class="notes-text-btn" style="flex: 1; justify-content: center; background: var(--text-title); color: white; border-radius: 12px; padding: 12px;" id="fc-mastered">
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
}

function bootApp() {
  window.vocabApp = new VocabApp();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootApp);
} else {
  bootApp();
}
