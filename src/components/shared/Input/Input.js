import React from 'react'
import './Input.scss';

export default function Input(props) {
  return (
    <div className="inputComponent">
        <label htmlFor={props.id}>
            {props.label}
            <span className={props.className}>
                {props.spanContent}
            </span>
        </label>
        <input
            type={props.type}
            onBlur={props.onBlur}
            onChange={props.onChange}
            placeholder={props.placeholder}
            value={props.value}
            id={props.id}
            autoComplete={props.autoComplete}
        />
    </div>
  )
}
