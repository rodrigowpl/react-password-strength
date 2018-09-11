import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'

import { PasswordStrength } from './index'

const stories = storiesOf('react-password-strength', module)

stories.add('Simple example', () => {
  class SimpleExample extends PureComponent {
    state = {
      value: ''
    }

    handleChange = (e) => {
      const { value } = e.target

      this.setState({
        value: value
      })
    }

    render () {
      const { value } = this.state

      return (
        <div>
          <input
            placeholder='Enter password'
            style={{ width: '300px', marginBottom: '3px' }}
            onChange={this.handleChange}
            value={value}
          />
          <PasswordStrength
            value={value}
          />
        </div>
      )
    }
  }

  return <SimpleExample />
})

stories.add('With custom colors and texts', () => {
  class CustomExample extends PureComponent {
    state = {
      value: ''
    }

    customTexts = {
      0: 'Very easy',
      1: 'Easy',
      2: 'Okay',
      3: 'Nice',
      4: 'Really nice'
    }

    customColors = {
      0: 'gray',
      1: 'blue',
      2: 'darkblue',
      3: 'lightgreen',
      4: 'green'
    }

    handleChange = (e) => {
      const { value } = e.target

      this.setState({
        value: value
      })
    }

    render () {
      const { value } = this.state

      return (
        <div>
          <input
            placeholder='Enter password'
            style={{ width: '300px', marginBottom: '3px' }}
            onChange={this.handleChange}
            value={value}
          />
          <PasswordStrength
            value={value}
            strengthColors={this.customColors}
            strengthTexts={this.customTexts}
          />
        </div>
      )
    }
  }

  return <CustomExample />
})
