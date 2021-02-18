import React from 'react';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const GreenRadio = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

const Radiobtn = (props) => {
    const [selectedValue, setSelectedValue] = React.useState('a');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        console.log(event.target.value)
      };
    return (
        <>
                <GreenRadio
                    checked={selectedValue === 'c'}
                    onChange={handleChange}
                    value={props.value}
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'C' }}
                /> 
        </>
    );
};

export default Radiobtn;