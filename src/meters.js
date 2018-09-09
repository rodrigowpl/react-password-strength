import React from 'react'
import PropTypes from 'prop-types'
import Meter from './meter'

const Meters = ({ meterValue, meterWidth, backgroundColor }) => (
  Array.from(Array(meterValue).keys()).map(index => (
    <Meter
      key={index}
      width={meterWidth}
      backgroundColor={backgroundColor}
    />
  ))
)

Meters.propTypes = {
  meterValue: PropTypes.number.isRequired,
  meterWidth: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired
}

export default Meters
