import React from 'react'
import PropTypes from 'prop-types'
import zxcvbn from 'zxcvbn'
import styled from 'styled-components'
import { STRENGTH_TEXT } from './constants'
import Meters from './meters'
import { getStrengthColor } from './utils/functions';

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

const ReactPasswordStrength = ({ width = 300, passwordValue, strengthColors }) => {
  const { score } = zxcvbn(passwordValue)
  const maxMeters = 4
  const meterWidth = width / maxMeters
  const strengthColor = getStrengthColor(score, strengthColors)
  const realScore = score === 0 ? maxMeters : score

  return (
    <ReactPasswordStrengthStyled>
      <div className='meters'>
        <Meters
          meterValue={realScore}
          meterWidth={meterWidth}
          backgroundColor={strengthColor}
        />
      </div>
      {passwordValue &&
        <span style={{ color: strengthColor }}>
          {STRENGTH_TEXT[score]}
        </span>
      }
    </ReactPasswordStrengthStyled>
  )
}

ReactPasswordStrength.propTypes = {
  width: PropTypes.number,
  passwordValue: PropTypes.string.isRequired
}

export default ReactPasswordStrength
