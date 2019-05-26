import React from 'react';
import './Button.scss';

export default function Button(props) {
  return (
    <div className="buttonComponent">
      <button
        type={props.type}
        onClick={props.onClick}
        className={(props.className) ? props.className : 'button button-block'}
      >
        {props.label}
      </button>
    </div>
  );
}
