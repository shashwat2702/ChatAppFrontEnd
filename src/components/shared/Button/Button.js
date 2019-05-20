import React from 'react';
import './Button.scss';

export default function Button(props) {
  return (
    <div className="buttonComponent">
        <button className="button button-block"
            type={props.type}
            onClick={props.onClick}
        >
            {props.label}
        </button>
    </div>
  )
}
