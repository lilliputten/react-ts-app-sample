import * as React from 'react'
import { Button } from './Components/Button/Button'
import './App.css'

export default App: React.FunctionComponent<> = () => {
  <div className="App">
    <Button text="I'm basic" />
    // Renders into HTML as: <div class="Button">I'm Basic</div>

    <Button text="I'm type link" type="link" />
    // Renders into HTML as: <a class="Button Button_type_link">I'm type link</a>

    <Button text="I'm theme action" theme="action" />
    // Renders into HTML as: <div class="Button Button_theme_action">I'm theme action</div>

    <Button text="I'm all together" theme="action" type="link" />
    // Renders into HTML as: <a class="Button Button_theme_action Button_type_link">I'm all together</a>
  </div>
};
