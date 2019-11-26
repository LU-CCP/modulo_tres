import React, { Component } from 'react';

class Hyperlink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Learn React',
      compare: '',
      showInstructions: true
    };
    this._varGlobal = '';
    console.log('Hyperlink constructor');
  }

  static getDerivedStateFromProps(props, state) {
    const { showInstructions } = props;

    if (state.showInstructions !== showInstructions) {
      return { showInstructions };
    }

    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { value, compare, showInstructions } = this.state;

    const should =
      nextState.value !== value ||
      nextState.compare !== compare ||
      nextState.showInstructions !== showInstructions;

    return should;
  }

  componentDidMount() {
    console.log('Hyperlink componentDidMount');
    setTimeout(() => {
      console.log('Hyperlink setState');
      this.setState({ value: 'Learn React Now!' });
    }, 3000);
    setTimeout(() => {
      this._varGlobal = 'Please';
    }, 4000);
    setTimeout(() => {
      console.log('Hyperlink setState compare');

      setCompare('');
      const { onHide } = this.props;

      onHide();
    }, 5000);
  }

  componentDidUpdate() {
    console.log('Hyperlink componentDidUpdate');
  }

  render() {
    console.log('Hyperlink render');
    const { value, showInstructions } = this.state;
    return (
      <div>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          {`${value} ${this._varGlobal}`}
        </a>
        {!showInstructions && <p>Can you see the instructions?</p>}
      </div>
    );
  }
}

export default Hyperlink;
