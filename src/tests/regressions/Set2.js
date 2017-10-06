import React, { Component } from 'react'
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Select from '../../SelectField';

const containerStyle = {
  padding: 40,
  paddingBottom: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1
}

const styles = theme => ({
  button: {
    '&:hover': {
      color: 'lightSalmon',
    }
  },
  button2: {
    color: 'lightSalmon',
    width: '100%',
  }
});

const displayState = state => state.length
  ? [...state].map(({ value, label }) => label || value).join(', ')
  : 'empty state'

class Set2 extends Component {
  state = {
    state21: [{ value: 'H' }],
    state22: [{ value: 'I' }],
    state23: [{ value: 'G' }]
  }

  handleSelection = (values, name) => this.setState({ [name]: values })

  render () {
    const { classes } = this.props;
    const { state21, state22, state23 } = this.state;
    console.debug('state21', state21, '\nstate22', state22, '\nstate23', state23)

    return <section style={containerStyle}>

      <fieldset style={{ marginBottom: 40 }}>
        <legend>Selected values</legend>
        <div>State 21: {displayState(state21)}</div>
        <div>State 22: {displayState(state22)}</div>
        <div>State 23: {displayState(state23)}</div>
      </fieldset>

      <div style={{ display: 'flex' }}>
        <Select
          name='state21'
          multiple
          checkPosition='left'
          hintText='Multiple values'
          onChange={this.handleSelection}
          value={state21}
          style={{ minWidth: 150, marginRight: 40 }}
          elementHeight={[36, 68, 36]}
        >
          <div value='G'>Option G</div>
          <div value='H'>Option H super longue</div>
          <div value='I'>Option I</div>
        </Select>

        <Select
          name='state22'
          multiple
          checkPosition='right'
          unCheckedIcon={null}
          hintText='Multiple values'
          onChange={this.handleSelection}
          value={state22}
          style={{ minWidth: 150, marginRight: 40 }}
          elementHeight={[36, 68, 36]}
          menuCloseButton={<Button label='close' className={classes.button} />}
        >
          <div value='G'>Option G</div>
          <div value='H'>Option H super longue</div>
          <div value='I'>Option I</div>
        </Select>

        <Select
          name='state23'
          multiple
          hintText='Multiple values'
          onChange={this.handleSelection}
          value={state23}
          style={{ minWidth: 150 }}
          elementHeight={[36, 52, 36]}
          menuFooterStyle={{ width: '100%' }}
          menuCloseButton={<Button label='close' className={classes.button2} />}
        >
          <div value='G'>Option G</div>
          <div value='H'>Option H super longue</div>
          <div value='I'>Option I</div>
        </Select>
      </div>

    </section>
  }
}

export default withStyles(styles)(Set2);
