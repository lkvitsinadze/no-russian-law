import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  content: [
    './public/index.html',
    'app.vue',
    './components/**/*.{html,js,ts}',
    './pages/**/*.{html,js,ts}',
    './assets/**/*.{css,html,js,ts}'
    // Add all files that contain Tailwind classes
    // e.g. './modules/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'firago-regular': ['FiraGO-regular', 'serif'],
        'firago-medium': ['FiraGO-medium', 'serif'],
        'firago-bold': ['FiraGO-bold', 'serif'],
        'firago-light-italic': ['FiraGO-LightItalic', 'serif'],
        'firago-light': ['FiraGO-Light', 'serif']
      }
    }
  }
}
