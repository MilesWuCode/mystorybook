import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import "../src/css/tailwind.css";
import TestButton from '../src/components/test/TestButton.vue';

export default {
  title: 'TestButton',
  component: TestButton,
};

export const Test = () => ({
  components: { TestButton },
  template: '<TestButton />',
});
