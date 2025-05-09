export default function StoryItem(story) {
  const { photoUrl, name, description, createdAt, lat, lon } = story;

  const article = document.createElement('article');
  article.className = 'story-item';

  article.innerHTML = `
    <img src="${photoUrl}" alt="Foto cerita oleh ${name}" class="story-photo" />
    <div class="story-content">
      <h2 class="story-author">${name}</h2>
      <p class="story-desc">${description}</p>
      <p class="story-date">Diposting pada: ${new Date(createdAt).toLocaleDateString('id-ID')}</p>
    </div>
    <div class="story-map-placeholder" data-lat="${lat}" data-lon="${lon}">
      <!-- Map akan dirender di sini -->
    </div>
  `;

  return article;
}
