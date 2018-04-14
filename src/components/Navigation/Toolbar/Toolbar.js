import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo';
import Aux from '../../../hoc/Aux';

const toolbar = (props) => (
    <Aux>
      <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo/>
        <nav>
          ...
        </nav>
      </header>
    </Aux>
);


export default toolbar;