import React from 'react'
import PropTypes from 'prop-types'
import Meter from './meter'

const MetersOverlay = ({ maxMeters, meterWidth }) => (
  Array.from(Array(maxMeters).keys()).map(index => (
    <Meter
      key={index}
      width={meterWidth}
      meterValue={0}
    />
  ))
)

MetersOverlay.propTypes = {
  maxMeters: PropTypes.number.isRequired,
  meterWidth: PropTypes.number.isRequired
}

export default MetersOverlay
