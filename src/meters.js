import React from 'react'
import PropTypes from 'prop-types'
import Meter from './meter'

const Meters = ({ meterValue, meterWidth }) => (
  Array.from(Array(meterValue).keys()).map(index => (
    <Meter
      key={index}
      width={meterWidth}
      meterValue={meterValue}
    />
  ))
)

Meters.propTypes = {
  meterValue: PropTypes.number.isRequired,
  meterWidth: PropTypes.number.isRequired
}

export default Meters