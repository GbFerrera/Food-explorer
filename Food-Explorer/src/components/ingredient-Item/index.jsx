
import { Component } from './style'
import close from "../../images/close.svg"
import open from "../../images/open.svg"

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
        {isNew ? <img src={open} alt="" /> : <img src={close}/>}
      </button>
    </Component>
  )
}