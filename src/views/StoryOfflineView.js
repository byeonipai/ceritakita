export default class StoryOfflineView {
    constructor(container) {
        this.container = container;
    }

    render(stories) {
        this.container.innerHTML = this.generateOfflineStoriesHTML(stories);
    }

    generateOfflineStoriesHTML(stories) {
        if (!stories || stories.length === 0) {
            return `
                <h2>Offline Stories</h2>
                <p>No offline stories available.</p>
            `;
        }

        return `
            <h2>Offline Stories</h2>
            <ul>
                ${stories.map(story => `
                    <li>
                        <h3>${story.title || 'Untitled Story'}</h3>
                        <p>${story.content || 'No content available.'}</p>
                    </li>
                `).join('')}
            </ul>
        `;
    }
}
