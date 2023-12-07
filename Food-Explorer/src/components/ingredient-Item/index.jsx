

import { Component } from './style'

export function IngredientItem({ isNew, value, onClick, ...rest }) {
  return (
    <Component isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <img src="src/images/open.svg" alt="" /> : <img src='src/images/close.svg'/>}
      </button>
    </Component>
  )
}