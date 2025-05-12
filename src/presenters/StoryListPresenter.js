import { saveStory, getStories } from '../utils/indexedDB.js';

export default class StoryListPresenter {
  #view;
  #model;
  #token;

  constructor(view, model, token) {
    this.#view = view;
    this.#model = model;
    this.#token = token;
  }

  async init() {
    try {
      const stories = await this.#model.fetchStories(this.#token);
      stories.forEach((story) => saveStory(story)); // Simpan ke IndexedDB
      this.#view.render(stories);
    } catch (error) {
      console.error('Error memuat cerita:', error);
      const offlineStories = await getStories(); // Ambil dari IndexedDB
      if (offlineStories.length > 0) {
        console.log('Menampilkan cerita dari IndexedDB.');
        this.#view.render(offlineStories);
      } else {
        console.warn('Tidak ada data offline yang tersedia.');
        this.#view.render([]); // Tampilkan pesan kosong jika tidak ada data
      }
    }
  }
}
