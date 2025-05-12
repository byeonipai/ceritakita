import { getStories } from '../utils/indexedDB';
import StoryOfflineView from '../views/StoryOfflineView';

export default class StoryOfflinePresenter {
    constructor(container) {
        this.view = new StoryOfflineView(container);
    }

    async init() {
        const stories = await getStories();
        this.view.render(stories);
    }
}
