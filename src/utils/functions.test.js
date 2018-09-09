import { getStrengthColor, getConfigValue, getStrengthText } from './functions'
import { STRENGTH_COLOR, STRENGTH_TEXT } from '../constants'

describe('functions', () => {

  describe('functions.getConfigValue', () => {
    const DEFAULT_CONFIG = { 1: 'first default option', 2: 'second default option' }
    const CUSTOM_CONFIG = { 1: 'first custom option', 2: 'second custom option' }

    test('should return value from default config', () => {
      const score = 1
      const defaultValue = getConfigValue(DEFAULT_CONFIG)(score, undefined)

      expect(defaultValue).toBe(DEFAULT_CONFIG[score])
    })

    test('should return value from custom config', () => {
      const score = 1
      const defaultValue = getConfigValue(DEFAULT_CONFIG)(score, CUSTOM_CONFIG)

      expect(defaultValue).toBe(CUSTOM_CONFIG[score])
    })


  })

  describe('functions.getStrenghColor', () => {

    const CUSTOM_COLORS = {
      0: 'red',
      0: 'green',
      0: 'pink',
      0: 'blue',
    }

    test('should return the custom color', () => {
      const score = 1
      const color = getStrengthColor(score, CUSTOM_COLORS)

      expect(color).toBe(CUSTOM_COLORS[score])
    })

    test('should return the default color', () => {
      const score = 1
      const color = getStrengthColor(score, undefined)

      expect(color).toBe(STRENGTH_COLOR[score])
    })

  })

  describe('functions.getStrengthText', () => {

    const CUSTOM_TEXTS = {
      0: 'Very Easy',
      0: 'Okay',
      0: 'Nice',
      0: 'Really nice',
    }

    test('should return text from the custom config', () => {
      const score = 1
      const color = getStrengthText(score, CUSTOM_TEXTS)

      expect(color).toBe(CUSTOM_TEXTS[score])
    })

    test('should return text from default config', () => {
      const score = 1
      const color = getStrengthText(score, undefined)

      expect(color).toBe(STRENGTH_TEXT[score])
    })

  })

})
