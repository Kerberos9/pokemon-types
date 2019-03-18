import React, { Component } from 'react';
import './Type.css';
class Type extends Component {
  capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  componentDidMount() {
    this.setState({ damageClass: 'default' });
  }
  componentWillReceiveProps() {
    let result = 0;
    let damageClass = 'default';
    if (this.props.selected[0] === this.props.selected[1]) {
      result += this.props.stats[this.props.selected[0]];
    } else {
      result +=
        this.props.stats[this.props.selected[0]] +
        this.props.stats[this.props.selected[1]];
    }
    switch (result) {
      case -2:
        damageClass = 'quarter';
        break;
      case -1:
        damageClass = 'half';
        break;
      case 0:
        damageClass = 'default';
        break;
      case 1:
        damageClass = 'double';
        break;
      case 2:
        damageClass = 'quad';
        break;
      default:
        damageClass = 'immune';
        break;
    }
    this.setState({ damageClass, value: result });
  }

  render() {
    return (
      <div className={this.state ? this.state.damageClass : ''}>
        <p>{this.capitalizeFirstLetter(this.props.type)}</p>
      </div>
    );
  }
}

export default Type;
