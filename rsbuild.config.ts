import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginBabel } from '@rsbuild/plugin-babel';

export default defineConfig({
  plugins: [pluginBabel(), pluginReact()],
  html: {
    title: 'Nativa',
  },
   tools: {
    rspack: (config, { addRules }) => {
      addRules({
        test: /\.tsx/,
        use: {
          loader: require.resolve('@wyw-in-js/webpack-loader'),
        }
      });
    },
  },
});
