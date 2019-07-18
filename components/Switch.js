// Credit: https://codepen.io/sgiannangeli/pen/oRjoQE?page=2

import React from 'react';

import './Switch.css';

export default ({ label = '', on = false, toggle, style }) => (
  <label className="switch-iPhone" htmlFor="switch">
    <span className="label">{label}</span>
    <input
      className={`switch ${on ? 'checked' : ''}`}
      onClick={toggle}
      id="switch"
      type="checkbox"
    />
    <span style={style} className="switchStyle" />
  </label>
);
