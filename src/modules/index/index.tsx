import * as React from 'react';
import { render } from 'react-dom';
import { RouterComponent } from '../../router';
import "./index.scss";
render( 
    <RouterComponent /> ,
    document.getElementById('application'),
    () => {

    });