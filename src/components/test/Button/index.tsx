import { IClassNameProps } from '@bem-react/core'
import { cn } from '@bem-react/classname';

export interface IButtonProps extends IClassNameProps {
  tag?: string;
}

export const cnButton = cn('Button');
