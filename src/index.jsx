import React from 'react';
import ReactDOM from 'react-dom';
import RedBox from 'redbox-react';
import Calcu from './Calcu.jsx';

const main = document.getElementById('main');

try {
  ReactDOM.render(
    <Calcu />,
    main,
  );
} catch (e) {
  ReactDOM.render(
    <RedBox error={e} />,
    main,
  );
}
