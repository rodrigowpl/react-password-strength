import { pipe, prop } from 'ramda'
import { STRENGTH_COLOR } from '../constants';

/**
 * 
 * @param {object|undefined} customColors 
 */
export const getColorConfig = customColors => customColors || STRENGTH_COLOR

/**
 * @param {number} score
 * @param {object|undefined} customColors
 */
export const getStrengthColor = (score, customColors) => pipe(
  getColorConfig,
  prop(score)
)(customColors)
