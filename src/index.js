import React, { PureComponent } from 'react'
import { number, string, object } from 'prop-types'
import zxcvbn from 'zxcvbn'
import styled from 'styled-components'

import Meters from './meters'
import { getStrengthColor, getStrengthText } from './utils/functions'

const StrengthStyled = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;

  > span {
    align-self: flex-end;
  }

  .meters {
    display: flex;
  }
`

const StrengthLabelStyled = styled.span`
  color: ${props => props.color};
`

class Strength extends PureComponent {
  render() {
    const { width = 300, showLabel, score, strengthColors, strengthTexts } = this.props
    const maxMeters = 4
    const meterWidth = width / maxMeters
    const strengthColor = getStrengthColor(score, strengthColors)
    const strengthText = getStrengthText(score, strengthTexts)
    const meterValue = score === 0 ? maxMeters : score

    return (
      <StrengthStyled>
        <div className='meters'>
          <Meters
            meterValue={meterValue}
            meterWidth={meterWidth}
            backgroundColor={strengthColor}
          />
        </div>
        {showLabel &&
          <StrengthLabelStyled color={strengthColor}>
            {strengthText}
          </StrengthLabelStyled>
        }
      </StrengthStyled>
    )
  }
}

const PasswordStrength = ({ value, ...props }) => {
  const { score } = zxcvbn(value)

  return (
    <Strength
      score={score}
      showLabel={!!value}
      {...props}
    />
  )
}

PasswordStrength.propTypes = {
  width: number,
  value: string.isRequired,
  strengthColors: object,
  strengthTexts: object,
}

export { PasswordStrength }
