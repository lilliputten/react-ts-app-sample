import React from 'react';
import { compose, composeU } from '@bem-react/core';

import { Button as ButtonPresenter } from '../Button/Button';
import { withButtonTypeLink } from '../Button/_type/Button_type_link';
import { withButtonThemeAction } from '../Button/_theme/Button_theme_action';
// import { withButtonThemeDefault } from '../Button/_theme/Button_theme_default';

import './App.css';

const Button = compose(
  composeU(withButtonThemeAction/* , withButtonThemeDefault */),
  withButtonTypeLink,
)(ButtonPresenter);

const App: React.FC = () => (
  <div className="App">
    <Button>I'm basic</Button>
    <Button type="link">I'm type link</Button>
    <Button theme="action">I'm theme action</Button>
    <Button theme="action" type="link">I'm all together</Button>
  </div>
);

export default App;
