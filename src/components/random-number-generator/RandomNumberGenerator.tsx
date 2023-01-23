import React from 'react'
import { Tooltip, IconButton } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import './RandomNumberGenerator.scss'


export interface RandomNumberGeneratorProps {
  randomNumber: number
}

function RandomNumberGenerator (props: RandomNumberGeneratorProps) {

  return (
    <div className="number">
      <div className="number__content">
        <label>
          Random Number Generated:
          <Tooltip title="Click in any place of the screen to generate a random number.">
            <IconButton>
              <InfoIcon color="primary"/>
            </IconButton>
          </Tooltip>
        </label>
        <span>{props.randomNumber}</span>
      </div>
    </div>
  )
}

export default RandomNumberGenerator
