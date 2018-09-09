import { getStrengthColor, getColorConfig } from './functions'
import { STRENGTH_COLOR } from '../constants'

describe('functions', () => {

  describe('functions.getStrenghColor', () => {

    const CUSTOM_COLORS = {
      0: 'red',
      0: 'green',
      0: 'pink',
      0: 'blue',
    }

    test('should return the custom color', () => {
      const score = 1;
      const color = getStrengthColor(score)(CUSTOM_COLORS)

      expect(color).toBe(CUSTOM_COLORS[score])
    })

    test('should return the default color', () => {
      const score = 1;
      const color = getStrengthColor(score)(undefined)

      expect(color).toBe(STRENGTH_COLOR[score])
    })

  })

  describe('functions.getColorConfig', () => {

    test('should return default config ', () => {
      const colorConfig = getColorConfig(undefined)

      expect(colorConfig).toEqual(STRENGTH_COLOR)
    })

    test('should return default config ', () => {
      const customColors = { 0: 'red' }
      const colorConfig = getColorConfig(customColors)

      expect(colorConfig).toEqual(customColors)
    })

  })

})
