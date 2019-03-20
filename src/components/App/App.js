import React, { Component } from 'react';
import './App.css';
import types from '../../data/types';
import pokemon from '../../data/pokemon';
import Type from '../Type/Type';
import Select from 'react-select';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: ['normal', 'normal'] };
    document.querySelector('.pokemon-select');
  }
  onFirstTypeChange = event => {
    let selected = this.state.selected;
    selected[0] = event.value;
    this.setState({ selected });
  };
  onSecondTypeChange = event => {
    let selected = this.state.selected;
    selected[1] = event.value;
    this.setState({ selected });
  };

  onPokemonSelect = event => {
    let types = event ? event.value.split('|') : null;
    let selected;
    if (types) {
      selected = [types[0].toLowerCase(), types[1].toLowerCase()];
      this.setState({ selected });
    }
    document.querySelector('.first-type-select').value = selected
      ? selected[0]
      : null;
  };
  selectStyle = {
    control: (base, state) => ({
      ...base,
      background: '#230c33',
      color: '#f2cee6'
    }),
    menuList: base => ({
      ...base,
      background: '#230c33',
      color: '#f2cee6'
    }),
    option: base => ({
      ...base,
      background: '#230c33',
      color: '#f2cee6',
      border: '1px solid black',
      borderRadius: '5px'
    }),
    singleValue: base => ({
      ...base,
      background: '#230c33',
      color: '#f2cee6'
    }),
    input: base => ({
      ...base,
      background: '#230c33',
      color: '#f2cee6'
    })
  };

  typeOptions = [
    { value: 'bug', label: 'Bug' },
    { value: 'dark', label: 'Dark' },
    { value: 'dragon', label: 'Dragon' },
    { value: 'electric', label: 'Electric' },
    { value: 'fairy', label: 'Fairy' },
    { value: 'fighting', label: 'Fighting' },
    { value: 'fire', label: 'Fire' },
    { value: 'flying', label: 'Flying' },
    { value: 'ghost', label: 'Ghost' },
    { value: 'grass', label: 'Grass' },
    { value: 'ground', label: 'Ground' },
    { value: 'ice', label: 'Ice' },
    { value: 'normal', label: 'Normal' },
    { value: 'poison', label: 'Poison' },
    { value: 'psychic', label: 'Psychic' },
    { value: 'rock', label: 'Rock' },
    { value: 'steel', label: 'Steel' },
    { value: 'water', label: 'Water' }
  ];

  render() {
    return (
      <div className='App'>
        <strong>Select the enemy type(s)</strong>
        <div className='input-fields'>
          <div className='types-select'>
            <Select
              styles={this.selectStyle}
              options={this.typeOptions}
              onChange={this.onFirstTypeChange.bind(this)}
              className='type-select first-type-select'
            />
            <Select
              styles={this.selectStyle}
              options={this.typeOptions}
              onChange={this.onSecondTypeChange.bind(this)}
              className='type-select second-type-select'
            />
          </div>
          <strong>Or select the enemy pokémon directly</strong>
          <div className='pokemon-select'>
            <Select
              styles={this.selectStyle}
              isClearable
              options={pokemon}
              onChange={this.onPokemonSelect}
            />
          </div>
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
