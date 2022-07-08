import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { any } from 'prop-types';

function Button({ onClick, className, outline, children }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.object,
  outline: any,
  children: any,
};

export default Button;
