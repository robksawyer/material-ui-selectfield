import React, { Component } from 'react';
import Select from '../../SelectField';

const containerStyle = {
  padding: 40,
  paddingBottom: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1
}

class Set1 extends Component {
  state = {
    state11: null,
    state12: { value: 'E', label: 'label E' }
  }

  handleSelection = (values, name) => this.setState({ [name]: values })

  render () {
    const { state11, state12 } = this.state
    console.debug('state11', state11, '\nstate12', state12)

    return <section style={containerStyle}>

      <fieldset style={{ marginBottom: 40 }}>
        <legend>Selected values</legend>
        <div>State 11: {state11 ? state11.value : 'empty state'}</div>
        <div>State 12: {state12 ? state12.label : 'empty state'}</div>
      </fieldset>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <Select
          name='state11'
          hintText='Single value'
          onChange={this.handleSelection}
          value={state11}
          style={{ minWidth: 150, margin: 10 }}
        >
          <div value='A'>Option A</div>
          <div value='B'>Option B</div>
          <div value='C'>Option C</div>
        </Select>

        <Select
          name='state12'
          hintText='With labels'
          onChange={this.handleSelection}
          value={state12}
          style={{ minWidth: 150, margin: 10 }}
        >
          <div value='D' label='label D'>Option D</div>
          <div value='E' label='label E'>Option E</div>
          <div value='F' label='label F'>Option F</div>
        </Select>

        <Select
          disabled
          hintText='Disabled'
          style={{ minWidth: 150, margin: 10 }}
        />
      </div>

      <h3 style={{ marginTop: 200 }}>Edges cases</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>

        <Select name='case 1' hintText='No child' style={{ margin: 10 }} />

        <Select name='case 2' hintText='Single child' style={{ margin: 10 }}>
          <span value={1} label='Option 1'>Option 1</span>
        </Select>

        <Select name='case 3' hintText='Single empty group' style={{ margin: 10 }}>
          <optgroup label='Group A'>
          </optgroup>
        </Select>

        <Select name='case 4' hintText='Multiple empty groups' style={{ margin: 10 }}>
          <optgroup label='Group A'>
          </optgroup>
          <optgroup label='Group B'>
          </optgroup>
        </Select>

        <Select name='case 4bis' hintText='One empty group, and one group+child' style={{ margin: 10 }}>
          <optgroup label='Group A'>
          </optgroup>
          <optgroup label='Group B'>
            <span value={1} label='Option 1'>Option 1</span>
          </optgroup>
        </Select>

        <Select name='case 5' multiple value={[]} hintText='Single child in single group' style={{ margin: 10 }}>
          <optgroup label='Group A'>
            <span value={1} label='Option 1'>Option 1</span>
          </optgroup>
        </Select>

        <Select name='case 6' multiple value={[]} hintText='Children in single group' style={{ margin: 10 }}>
          <optgroup label='Group A'>
            <span value={1} label='Option 1'>Option 1</span>
            <span value={2} label='Option 2'>Option 2</span>
          </optgroup>
        </Select>

      </div>

    </section>
  }
}

export default Set1;
