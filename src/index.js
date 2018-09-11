import React from 'react'
import { number, string, object } from 'prop-types'
import zxcvbn from 'zxcvbn'
import styled from 'styled-components'

import Meters from './meters'
import { getStrengthColor, getStrengthText } from './utils/functions'

const PasswordStrengthStyled = styled.div`
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

const PasswordStrength = ({ width = 300, value, strengthColors, strengthTexts }) => {
  const { score } = zxcvbn(value)
  const maxMeters = 4
  const meterWidth = width / maxMeters
  const strengthColor = getStrengthColor(score, strengthColors)
  const strengthText = getStrengthText(score, strengthTexts)
  const meterValue = score === 0 ? maxMeters : score

  return (
    <PasswordStrengthStyled>
      <div className='meters'>
        <Meters
          meterValue={meterValue}
          meterWidth={meterWidth}
          backgroundColor={strengthColor}
        />
      </div>
      {value &&
        <StrengthLabelStyled color={strengthColor}>
          {strengthText}
        </StrengthLabelStyled>
      }
    </PasswordStrengthStyled>
  )
}

PasswordStrength.propTypes = {
  width: number,
  value: string.isRequired,
  strengthColors: object,
  strengthTexts: object,
}

export { PasswordStrength }
