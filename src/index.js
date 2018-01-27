import React from 'react'
import PropTypes from 'prop-types'
import zxcvbn from 'zxcvbn'
import styled from 'styled-components'
import { STRENGTH_COLOR, STRENGTH_TEXT } from './constants'
import MetersOverlay from './meters-overlay'
import Meters from './meters'

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

const ReactPasswordStrength = ({ width = 300, passwordValue }) => {
  const { score } =  zxcvbn(passwordValue)
  const maxMeters = 4
  const meterWidth = width / maxMeters
  const isVeryWeek = score === 0

  return (
    <ReactPasswordStrengthStyled>
      <div className='meters'>
        {isVeryWeek ? (
          <MetersOverlay
            maxMeters={maxMeters}
            meterWidth={meterWidth}
          />
        ) : (
          <Meters
            meterValue={score}
            meterWidth={meterWidth}
          />
        )}
      </div>
      {passwordValue &&
        <span style={{ color: STRENGTH_COLOR[score] }}>
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
