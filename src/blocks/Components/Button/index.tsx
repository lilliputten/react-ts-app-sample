import { IClassNameProps } from '@bem-react/core'

export interface IButtonProps extends IClassNameProps {
  text: string;

  // the following is the list of all modifiers:

  type?: 'link';
  theme?: 'action';
}