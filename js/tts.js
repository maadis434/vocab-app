// Text-To-Speech (TTS) Engine for English Vocabulary & Sentences
class TTSEngine {
  constructor() {
    this.synth = window.speechSynthesis;
    this.voices = [];
    this.selectedVoice = null;
    this.isSpeaking = false;
    this.currentUtterance = null;
    this.listeners = new Set();

    this.initVoices();
  }

  initVoices() {
    if (!this.synth) return;

    const loadVoices = () => {
      this.voices = this.synth.getVoices();
      // Prioritize natural English voices (US, GB, or Google/Natural)
      this.selectedVoice =
        this.voices.find(v => (v.lang === 'en-US' || v.lang === 'en-GB') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Premium'))) ||
        this.voices.find(v => v.lang === 'en-US') ||
        this.voices.find(v => v.lang.startsWith('en')) ||
        this.voices[0];
    };

    loadVoices();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = loadVoices;
    }
  }

  speak(text, options = {}) {
    if (!this.synth) {
      console.warn("Speech Synthesis not supported in this environment.");
      return;
    }

    // Stop any ongoing speech
    this.stop();

    const rate = options.rate || 0.85; // Slightly slower for clear educational clarity
    const pitch = options.pitch || 1.0;

    const utterance = new SpeechSynthesisUtterance(text);
    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice;
    }
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.lang = 'en-US';

    utterance.onstart = () => {
      this.isSpeaking = true;
      if (options.onStart) options.onStart();
      this.notifyListeners({ type: 'start', text, elementId: options.elementId });
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      if (options.onEnd) options.onEnd();
      this.notifyListeners({ type: 'end', text, elementId: options.elementId });
    };

    utterance.onerror = (e) => {
      this.isSpeaking = false;
      if (options.onError) options.onError(e);
      this.notifyListeners({ type: 'error', text, elementId: options.elementId });
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  stop() {
    if (this.synth && this.synth.speaking) {
      this.synth.cancel();
      this.isSpeaking = false;
      this.notifyListeners({ type: 'end' });
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notifyListeners(event) {
    this.listeners.forEach(fn => fn(event));
  }
}

export const tts = new TTSEngine();
