import React from 'react'

import styles from './Range.Css'

const Range = (props) => {
    const { value = 0, min = 0, max = 10, step = 1, ...attributes } = props
    const percentage = Math.min(max, Math.max(min, value)) / max * 100
    return (
        <div className={'roott'}>
            <small className={'labels'}>{min}</small>
            <div className={'input-container'}>
                <input
                    type="range"
                    value={value}
                    min={min}
                    max={max}
                    step={step}
                    {...attributes}
                />
                <div className={'range-input'} >
                    <span className={'value-marker'} style={{ width: `${percentage}%` }} />
                    <span className={'thumb'} data-value={value} style={{ left: `${percentage}%` }} />
                </div>
            </div>
            <small className={'labels'}>{max}</small>
        </div>
    )
}

export default Range