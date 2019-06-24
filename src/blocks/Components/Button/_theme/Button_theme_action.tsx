import { withBemMod } from '@bem-react/core';
import { IButtonProps } from '../index';

export const ButtonThemeAction = withBemMod<IButtonProps>('Button', { theme:  'action' });
