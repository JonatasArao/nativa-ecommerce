import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginSvgr } from '@rsbuild/plugin-svgr';

export default defineConfig(
  {
  plugins: [
    pluginBabel(),
    pluginReact(),
    pluginSvgr()
  ],
  html: {
    title: 'Nativa',
    favicon: './src/static/svg/nativa_logo.svg',
  },
  server: {
    base: process.env.NODE_ENV === "production" ? "/mini-ecommerce" : ""
  },
  resolve: {
    alias: {
      '@components': './src/components',
      '@models': './src/models',
      '@services': './src/services',
      '@contexts': './src/contexts',
      '@pages': './src/pages',
      '@utils': './src/utils',
      '@static': './src/static',
    },
  },
  source: {
    preEntry: './src/static/gh-pages-config.js'
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
