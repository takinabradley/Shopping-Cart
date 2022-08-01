import React from 'react'
export default function SteppableInput({ value, onChange }) {
  
  function onChangeValue(e) {
    onChange(parseInt(e.target.value))
  }

  function stepUp() {
    onChange(value + 1)
  }

  function stepDown() {
    onChange(value - 1)
  }

  return (
    <div className='steppable-input' data-testid={'steppable-input'}>
      <button className='step-down' onClick={stepDown}>-</button>
      <input
        className="product-quantity"
        type="telephone"
        value={value}
        onChange={onChangeValue}
      />
      <button className='step-up' onClick={stepUp}>+</button>
    </div>
  )
}