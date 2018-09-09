import { pipe, prop, defaultTo, curry } from 'ramda'
import { STRENGTH_COLOR, STRENGTH_TEXT } from '../constants';


export const getConfigValue = curry((defaultConfig, score, customConfig) => pipe(
  defaultTo(defaultConfig),
  prop(score)
)(customConfig))

export const getStrengthColor = getConfigValue(STRENGTH_COLOR)

export const getStrengthText = getConfigValue(STRENGTH_TEXT)
