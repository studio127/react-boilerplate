import { configure } from '@kadira/storybook';

function loadStories() {
    require('../imports/ui/layouts/.stories/app');
    // require as many .stories as you need.
}

configure(loadStories, module);