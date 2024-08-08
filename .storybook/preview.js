/** @type { import('@storybook/react').Preview } */
import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import '../src/index.css';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
