import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
        "firago-regular": ["FiraGO-regular", "serif"],
        "firago-medium": ["FiraGO-medium", "serif"],
        "firago-bold": ["FiraGO-bold", "serif"],
        "firago-light-italic": ["FiraGO-LightItalic", "serif"],
        "firago-light": ["FiraGO-Light", "serif"],
      },
    }
  }
}
