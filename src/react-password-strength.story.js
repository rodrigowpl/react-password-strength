import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import ReactPasswordStrength from './index'

const stories = storiesOf('password-strength-meter', module)

stories.add('Example usage', () => {
  return <ReactPasswordStrength />
})