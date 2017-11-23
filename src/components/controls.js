import React from 'react';

export default class Controls extends React.Component {
  state = { disabled: true, value: '' }

  handleChange = (event) => {
    this.setState({
      disabled: isNaN(event.target.value),
      value: event.target.value,
    });
  }

  handleClick = () => {
    this.props.onButtonClick(this.state.value);
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} type="number" value={this.state.value} />
        <button disabled={this.state.disabled} onClick={this.handleClick}>Insert</button>
      </div>
    );
  }
}
