import React, { PropTypes } from 'react'

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const styles = {
  formStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  controls: {
    fontFamily: 'Poppins, sans-serif',
  },
  controlText: {
    textAlign: 'center',
  },
  componentStyle: {
    height: '60px',
    marginTop: '20px',
  },
  buttonStyle: {
    lineHeight: '60px',
  },
  labelStyle: {
    fontFamily: 'Oswald, sans-serif',
    color: 'rgb(89, 89, 89)',
    textTransform: 'none',
    fontSize: '30px',
  },
}

/**
 * The Form component
 * @param  {function} options.onSubmit [the function to exectute on submit]
 * @return {component}
 */
const Form = ({ onSubmit }) => {
  let numberInput

  return (
    <form style={styles.formStyle} onSubmit={(e) => { onSubmit(e, numberInput.getValue()) }}>
      <TextField
        autoFocus
        ref={(node) => { numberInput = node }}
        id="numberInput"
        style={styles.controls}
        floatingLabelText="Enter a number from 0 to 99"
        inputStyle={styles.controlText}
      />
      <RaisedButton
        type="submit"
        style={styles.componentStyle}
        buttonStyle={styles.buttonStyle}
        labelStyle={styles.labelStyle}
        label="Get Athlete"
      />
      <br />
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default Form
