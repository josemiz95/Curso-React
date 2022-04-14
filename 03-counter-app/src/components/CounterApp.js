import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({numero}) => {
      const [ value, setValue ] = useState(numero);

      // handleAdd
      const handleAdd = (e) => setValue(value+1);
      const handleSub = (e) => setValue(value-1);
      const handleRest = (e) => setValue(numero);
      
      return (
            <>
                  <h1>Counter App</h1>
                  <h2> {value}</h2>

                  <button onClick={ handleAdd }>+1</button>
                  <button onClick={ handleRest }>Reset</button>
                  <button onClick={ handleSub }>-1</button>
            </>
      );
};

CounterApp.propTypes = {
	numero: PropTypes.number
};

CounterApp.defaultProps = {
	numero: 0
};

export  {
      CounterApp as default
}