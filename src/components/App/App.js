import React, { Component } from 'react';
import './App.css';
import types from '../../data/types';
import pokemon from '../../data/pokemon';
import Type from '../Type/Type';
import Select from 'react-select';
import createFilterOptions from 'react-select-fast-filter-options';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: [null, null], firstType: null, secondType: null };
  }
  onFirstTypeChange = event => {
    let selected = this.state.selected;
    selected[0] = event ? event.value : null;
    this.setState({
      selected,
      firstType: event ? { label: event.label, value: event.value } : null
    });
  };
  onSecondTypeChange = event => {
    let selected = this.state.selected;
    selected[1] = event ? event.value : null;
    this.setState({
      selected,
      secondType: event ? { label: event.label, value: event.value } : null
    });
  };

  onPokemonSelect = event => {
    let types = event ? event.value.split('|') : null;
    let selected;
    if (types) {
      selected = [types[0].toLowerCase(), types[1].toLowerCase()];
      this.setState({
        selected,
        firstType: { label: types[0], value: types[0].toLowerCase() },
        secondType: { label: types[1], value: types[1].toLowerCase() }
      });
    } else {
      this.setState({
        selected: [null, null],
        firstType: null,
        secondType: null
      });
    }
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

  filterOptions = createFilterOptions({
    pokemon
  });

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
              value={this.state.firstType}
              isClearable
            />
            <Select
              styles={this.selectStyle}
              options={this.typeOptions}
              onChange={this.onSecondTypeChange.bind(this)}
              className='type-select second-type-select'
              value={this.state.secondType}
              isClearable
            />
          </div>
          <strong>Or select the enemy pokémon directly</strong>
          <div className='pokemon-select'>
            <Select
              styles={this.selectStyle}
              isClearable
              options={pokemon}
              filterOptions={this.filterOptions}
              onChange={this.onPokemonSelect.bind(this)}
            />
          </div>
        </div>
        <div className='types-table'>
          {Object.keys(types).map((type, i) => (
            <Type
              key={i}
              type={type}
              stats={types[type]}
              selected={this.state.selected}
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
