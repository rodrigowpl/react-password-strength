import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import ReactPasswordStrength from './index'

const stories = storiesOf('react-password-strength', module)

stories.add('example usage', () => {
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