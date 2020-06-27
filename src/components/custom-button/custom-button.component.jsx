import React from 'react';
import classNames from 'classnames';

import './custom-button.styles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={classNames('custom-button', {
      'google-sign-in': isGoogleSignIn,
      inverted: inverted
    })}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
