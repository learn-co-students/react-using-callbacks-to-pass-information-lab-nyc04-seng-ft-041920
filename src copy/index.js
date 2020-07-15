import React from './node_modules/react';
import ReactDOM from './node_modules/react-dom';
import './index.css';
import learnSymbol from './data.js'
import Matrix from './Matrix.js'

ReactDOM.render(<Matrix values={learnSymbol} />, document.getElementById('root'));
