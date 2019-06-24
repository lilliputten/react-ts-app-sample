import * as React from 'react';
import { IButtonProps } from './index';

export const Button: React.SFC<IButtonProps> = ({ text, className }) => ( 
  <div className={className}>{text}</div>
);
