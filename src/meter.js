import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { STRENGTH_COLOR } from './constants'

const MeterStyled = styled.div`
  width: ${p => p.width}px;
  height: 4px;
  background-color: ${p => p.backgroundColor};

  &:not(:last-child) {
    margin-right: 2px;
  }
`

const Meter = ({ meterValue, width }) => (
  <MeterStyled
    width={width}
    backgroundColor={STRENGTH_COLOR[meterValue]}
  />
)

Meter.propTypes = {
  meterValue: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

export default Meter
