import React, { Component } from 'react';
import './App.css';
import types from '../../data/types';
import pokemon from '../../data/pokemon';
import Type from '../Type/Type';
import Select from 'react-select';
import createFilterOptions from 'react-select-fast-filter-options';
import translations from '../../data/translations';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [null, null],
      firstType: null,
      secondType: null,
      selectedPokemon: null,
      locale: localStorage.getItem('locale') || 'es',
      typeOptions: []
    };
  }
  componentDidMount() {
    let typeOptions = [
      { value: 'bug', label: this.getTranslation('bug') },
      { value: 'dark', label: this.getTranslation('dark') },
      { value: 'dragon', label: this.getTranslation('dragon') },
      { value: 'electric', label: this.getTranslation('electric') },
      { value: 'fairy', label: this.getTranslation('fairy') },
      { value: 'fighting', label: this.getTranslation('fighting') },
      { value: 'fire', label: this.getTranslation('fire') },
      { value: 'flying', label: this.getTranslation('flying') },
      { value: 'ghost', label: this.getTranslation('ghost') },
      { value: 'grass', label: this.getTranslation('grass') },
      { value: 'ground', label: this.getTranslation('ground') },
      { value: 'ice', label: this.getTranslation('ice') },
      { value: 'normal', label: this.getTranslation('normal') },
      { value: 'poison', label: this.getTranslation('poison') },
      { value: 'psychic', label: this.getTranslation('psychic') },
      { value: 'rock', label: this.getTranslation('rock') },
      { value: 'steel', label: this.getTranslation('steel') },
      { value: 'water', label: this.getTranslation('water') }
    ];
    this.setState({ typeOptions });
  }
  onFirstTypeChange = event => {
    let selected = this.state.selected;
    selected[0] = event ? event.value : null;
    this.setState({
      selected,
      firstType: event
        ? {
            label: event.label,
            value: event.value
          }
        : null,
      selectedPokemon: null
    });
  };
  onSecondTypeChange = event => {
    let selected = this.state.selected;
    selected[1] = event ? event.value : null;
    this.setState({
      selected,
      secondType: event
        ? {
            label: event.label,
            value: event.value
          }
        : null,
      selectedPokemon: null
    });
  };

  onPokemonSelect = event => {
    let types = event ? event.value.split('|') : null;
    let selected;
    if (types) {
      selected = [types[0].toLowerCase(), types[1].toLowerCase()];
      console.log(types);
      this.setState({
        selected,
        firstType: {
          label: this.getTranslation(types[0].toLowerCase()),
          value: types[0].toLowerCase()
        },
        secondType: {
          label: this.getTranslation(types[1].toLowerCase()),
          value: types[1].toLowerCase()
        },
        selectedPokemon: {
          label: event ? event.label : null,
          value: event ? event.value : null
        }
      });
    } else {
      this.setState({
        selected: [null, null],
        firstType: null,
        secondType: null,
        selectedPokemon: null
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

  filterOptions = createFilterOptions({
    pokemon
  });

  getTranslation = word => {
    return translations[this.state.locale][word];
  };
  switchLocale = () => {
    let locale = this.state.locale === 'es' ? 'en' : 'es';
    this.setState({ locale });
    localStorage.setItem('locale', locale);
  };

  render() {
    return (
      <div className='App'>
        <div className='language-change'>
          <button onClick={this.switchLocale.bind(this)}>
            {this.getTranslation('switch')}
          </button>
        </div>
        <strong>{this.getTranslation('select')}</strong>
        <div className='input-fields'>
          <div className='types-select'>
            <Select
              styles={this.selectStyle}
              options={this.state.typeOptions}
              onChange={this.onFirstTypeChange.bind(this)}
              className='type-select first-type-select'
              value={this.state.firstType}
              isClearable
            />
            <Select
              styles={this.selectStyle}
              options={this.state.typeOptions}
              onChange={this.onSecondTypeChange.bind(this)}
              className='type-select second-type-select'
              value={this.state.secondType}
              isClearable
            />
          </div>
          <p className='pokemon-select-label'>
            <strong>{this.getTranslation('pokemon_select')}</strong>
          </p>
          <div className='pokemon-select'>
            <Select
              styles={this.selectStyle}
              isClearable
              options={pokemon}
              filterOptions={this.filterOptions}
              onChange={this.onPokemonSelect.bind(this)}
              value={this.state.selectedPokemon}
            />
          </div>
        </div>
        <div className='types-table'>
          {Object.keys(types).map((type, i) => (
            <Type
              key={i}
              type={type}
              typeLabel={this.getTranslation(type)}
              stats={types[type]}
              selected={this.state.selected}
              selectedPokemon={this.state.selectedPokemon}
            />
          ))}
        </div>
        <div className='color-legend-label'>
          <strong>{this.getTranslation('color_legend')}</strong>
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
            <div className='immune'>{this.getTranslation('immune')}</div>
          </div>
          <div className='footer'>
            <a href='https://github.com/Kerberos9/pokemon-type-helper'>
              Github
            </a>{' '}
            - Discord: Kerberos#7290 -{' '}
            <a href='https://www.paypal.me/Kashbel'>
              {this.getTranslation('donate')}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
