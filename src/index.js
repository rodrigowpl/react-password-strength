import React from 'react'
import PropTypes from 'prop-types'
import zxcvbn from 'zxcvbn'
import styled from 'styled-components'
import Meters from './meters'
import { getStrengthColor, getStrengthText } from './utils/functions';

const ReactPasswordStrengthStyled = styled.div`
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

const ReactPasswordStrength = ({ width = 300, passwordValue, strengthColors, strengthTexts }) => {
  const { score } = zxcvbn(passwordValue)
  const maxMeters = 4
  const meterWidth = width / maxMeters
  const strengthColor = getStrengthColor(score, strengthColors)
  const strengthText = getStrengthText(score, strengthTexts)
  const meterValue = score === 0 ? maxMeters : score

  return (
    <ReactPasswordStrengthStyled>
      <div className='meters'>
        <Meters
          meterValue={meterValue}
          meterWidth={meterWidth}
          backgroundColor={strengthColor}
        />
      </div>
      {passwordValue &&
        <StrengthLabelStyled color={strengthColor}>
          {strengthText}
        </StrengthLabelStyled>}
    </ReactPasswordStrengthStyled>
  )
}

ReactPasswordStrength.propTypes = {
  width: PropTypes.number,
  passwordValue: PropTypes.string.isRequired,
  strengthColors: PropTypes.object,
  strengthTexts: PropTypes.object,
}

export default ReactPasswordStrength
