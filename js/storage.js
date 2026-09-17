// Storage & State Persistence (Favorites, Streaks, Progress)
const STORAGE_KEYS = {
  FAVORITES: 'lafz_favorites_v1',
  WORD_STATUS: 'lafz_word_status_v1',
  STREAK: 'lafz_user_streak_v1',
  WORD_OF_DAY: 'lafz_word_of_day_v1'
};

class StorageManager {
  constructor() {
    this.favorites = this.loadFavorites();
    this.wordStatus = this.loadWordStatus(); // { [wordId]: 'new' | 'learning' | 'mastered' }
    this.streakData = this.loadStreak();
  }

  // --- Favorites Management ---
  loadFavorites() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Failed to load favorites", e);
      return [];
    }
  }

  isFavorite(wordId) {
    return this.favorites.includes(wordId);
  }

  toggleFavorite(wordId) {
    if (this.isFavorite(wordId)) {
      this.favorites = this.favorites.filter(id => id !== wordId);
    } else {
      this.favorites.unshift(wordId); // add to beginning
    }
    this.saveFavorites();
    return this.isFavorite(wordId);
  }

  saveFavorites() {
    try {
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(this.favorites));
    } catch (e) {
      console.error("Failed to save favorites", e);
    }
  }

  // --- Word Mastery Status ---
  loadWordStatus() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.WORD_STATUS);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  }

  setWordStatus(wordId, status) {
    // status: 'needs-practice' | 'mastered' | 'learning'
    this.wordStatus[wordId] = status;
    try {
      localStorage.setItem(STORAGE_KEYS.WORD_STATUS, JSON.stringify(this.wordStatus));
    } catch (e) {
      console.error("Failed to save word status", e);
    }
  }

  getWordStatus(wordId) {
    return this.wordStatus[wordId] || 'needs-practice';
  }

  // --- Daily Streak Tracking ---
  loadStreak() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.STREAK);
      if (!data) return { count: 1, lastActiveDate: new Date().toDateString() };

      const parsed = JSON.parse(data);
      const today = new Date().toDateString();
      const lastDate = new Date(parsed.lastActiveDate);
      const diffDays = Math.floor((new Date(today) - lastDate) / (1000 * 60 * 60 * 24));

      if (diffDays === 0) {
        return parsed; // already counted today
      } else if (diffDays === 1) {
        // consecutive day!
        parsed.count += 1;
        parsed.lastActiveDate = today;
        localStorage.setItem(STORAGE_KEYS.STREAK, JSON.stringify(parsed));
        return parsed;
      } else {
        // streak broken, reset to 1
        parsed.count = 1;
        parsed.lastActiveDate = today;
        localStorage.setItem(STORAGE_KEYS.STREAK, JSON.stringify(parsed));
        return parsed;
      }
    } catch (e) {
      return { count: 1, lastActiveDate: new Date().toDateString() };
    }
  }

  getStreak() {
    return this.streakData.count;
  }
}

export const storage = new StorageManager();
