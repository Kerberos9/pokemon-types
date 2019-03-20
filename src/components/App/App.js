import React, { Component } from 'react';
import './App.css';
import types from '../../data/types';
import Type from '../Type/Type';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: ['normal', 'normal'] };
  }
  onFirstTypeChange = event => {
    let selected = this.state.selected;
    selected[0] = event.target.value;
    this.setState({ selected });
  };
  onSecondTypeChange = event => {
    let selected = this.state.selected;
    selected[1] = event.target.value;
    this.setState({ selected });
  };
  render() {
    return (
      <div className='App'>
        <strong>Select the enemy type(s)</strong>
        <div className='types-select'>
          <select
            onChange={this.onFirstTypeChange.bind(this)}
            defaultValue='Type 1'
          >
            <option disabled>Type 1</option>
            <option value='bug'>Bug</option>
            <option value='dark'>Dark</option>
            <option value='dragon'>Dragon</option>
            <option value='electric'>Electric</option>
            <option value='fairy'>Fairy</option>
            <option value='fighting'>Fighting</option>
            <option value='fire'>Fire</option>
            <option value='flying'>Flying</option>
            <option value='ghost'>Ghost</option>
            <option value='grass'>Grass</option>
            <option value='ground'>Ground</option>
            <option value='ice'>Ice</option>
            <option value='normal'>Normal</option>
            <option value='poison'>Poison</option>
            <option value='psychic'>Psychic</option>
            <option value='rock'>Rock</option>
            <option value='steel'>Steel</option>
            <option value='water'>Water</option>
          </select>
          <select
            onChange={this.onSecondTypeChange.bind(this)}
            defaultValue='Type 2'
          >
            <option disabled>Type 2</option>
            <option value='bug'>Bug</option>
            <option value='dark'>Dark</option>
            <option value='dragon'>Dragon</option>
            <option value='electric'>Electric</option>
            <option value='fairy'>Fairy</option>
            <option value='fighting'>Fighting</option>
            <option value='fire'>Fire</option>
            <option value='flying'>Flying</option>
            <option value='ghost'>Ghost</option>
            <option value='grass'>Grass</option>
            <option value='ground'>Ground</option>
            <option value='ice'>Ice</option>
            <option value='normal'>Normal</option>
            <option value='poison'>Poison</option>
            <option value='psychic'>Psychic</option>
            <option value='rock'>Rock</option>
            <option value='steel'>Steel</option>
            <option value='water'>Water</option>
          </select>
        </div>
        <div className='types-table'>
          {Object.keys(types).map((type, i) => (
            <Type
              key={i}
              type={type}
              stats={types[type]}
              selected={
                this.state && this.state.selected
                  ? this.state.selected
                  : [type, type]
              }
            />
          ))}
        </div>
        <div style={{ marginTop: '3em' }}>
          <strong>Color Legend</strong>
        </div>
        <div className='colors-legend'>
          <div className='colors-div'>
            <div className='quarter'>1/4</div>
            <div className='half'>1/2</div>
            <div className='default'>Neutral</div>
            <div className='double'>x2</div>
            <div className='quad'>x4</div>
          </div>
          <div className='immune-div'>
            <div className='immune'>Immune</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
