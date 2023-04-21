/** @type { import('@storybook/react').Preview } */
import { theme } from '../src/styles/theme';
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
        default: 'light',
        values: [
            {
                name: 'light',
                value: theme.colors.white,
            },
            {
                name: 'dark',
                value: theme.colors.primaryColor,
            },
        ]
    }
  },

};

export default preview;
