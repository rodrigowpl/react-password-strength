import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import ReactPasswordStrength from './index'

const stories = storiesOf('react-password-strength', module)

stories.add('Simple example', () => {
  class SimpleExample extends PureComponent {
    state = {
      passwordValue: ''
    }

    handleChange = (e) => {
      const { value } = e.target

      this.setState({
        passwordValue: value
      })
    }

    render () {
      const { passwordValue } = this.state

      return (
        <div>
          <input
            placeholder='Enter password'
            style={{ width: '300px', marginBottom: '3px' }}
            onChange={this.handleChange}
            value={passwordValue}
          />
          <ReactPasswordStrength
            passwordValue={passwordValue}
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
      passwordValue: ''
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
        passwordValue: value
      })
    }

    render () {
      const { passwordValue } = this.state

      return (
        <div>
          <input
            placeholder='Enter password'
            style={{ width: '300px', marginBottom: '3px' }}
            onChange={this.handleChange}
            value={passwordValue}
          />
          <ReactPasswordStrength
            passwordValue={passwordValue}
            strengthColors={this.customColors}
            strengthTexts={this.customTexts}
          />
        </div>
      )
    }
  }

  return <CustomExample />
})
