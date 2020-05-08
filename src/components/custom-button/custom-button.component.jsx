import React from 'react';
import classNames from 'classnames';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={classNames('custom-button', {
      'google-sign-in': isGoogleSignIn
    })}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
