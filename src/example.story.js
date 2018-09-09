import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import ReactPasswordStrength from './index'

const stories = storiesOf('react-password-strength', module)

stories.add('Simple example', () => {
  class ExampleUsage extends PureComponent {
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

  return <ExampleUsage />
})

stories.add('With custom colors', () => {
  class ExampleUsage extends PureComponent {
    state = {
      passwordValue: ''
    }

    customColors = {
      0: 'red',
      1: 'green',
      2: 'purple',
      3: 'blue',
      4: 'pink'
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
          />
        </div>
      )
    }
  }

  return <ExampleUsage />
})
