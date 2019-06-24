import * as React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';
import { IButtonProps } from '../index';

const ButtonLink: ModBody<IButtonProps> = (Base, { text, className }) => (

  // className === 'Button Button_type_link'

  <a className={className}>{text}</a>
);

export const ButtonTypeLink = withBemMod<IButtonProps>('Button', { type: 'link' }, ButtonLink);
