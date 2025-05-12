import StoryItem from './StoryItem.js';

export default function StoryList(stories = []) {
  const section = document.createElement('section');
  section.className = 'story-list';
  section.id = 'main-content'; // Untuk aksesibilitas

  if (stories.length === 0) {
    section.innerHTML = `<p class="no-story">Belum ada cerita untuk ditampilkan.</p>`;
    return section;
  }

  const list = document.createElement('div');
  list.className = 'stories';

  stories.forEach((story) => {
    const item = StoryItem(story);
    list.appendChild(item);
  });

  section.appendChild(list);
  return section;
}
