import React, { FC } from 'react';

import { IButtonProps, cnButton } from './index';

export const Button: FC<IButtonProps> = ({
  children,
  className: passedClassName,
  tag: TagName = 'button',
}) => {
  const className = cnButton({}, [passedClassName]);
  return React.createElement(TagName,
    { className },
    children
  );
  /* // XXX: Error occured here: `Property 'children' does not exist on type 'IntrinsicAttributes'`
   * return (
   *   <TagName className={cnButton({}, [className])}>
   *     {children}
   *   </TagName>
   * );
   */
}
