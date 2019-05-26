import { hot } from 'react-hot-loader/root';
import React from 'react';

import ReferenceRow from './ReferenceRow.js';
import staticData from '../static/BMIdata.js';

import css from '../css/App.css';

class App extends React.Component {
  state = {
    calculatedItem: {},
    weight: '',
    height: '',
  };

  changeValue(key, evt) {
    this.setState({ [key]: evt.target.value }, () => {
      this.calculateResult();
    });
  }

  inputKeyDown(key, evt) {
    const value = parseInt(evt.target.value, 10);
    /* "key up" and "key down" event codes are 38 and 40, hence Math.abs */
    if (value > 0 && Math.abs(evt.keyCode - 39) === 1) {
      this.setState({ [key]: value - (evt.keyCode - 39) || 1 }, () => {
        this.calculateResult();
      });
      evt.preventDefault();
    }
  }

  calculateResult() {
    const weight = parseInt(this.state.weight, 10);
    const height = parseInt(this.state.height, 10);
    let calculatedItem = {};
    if (weight > 0 && height > 0) {
      const BMI = parseInt((weight / Math.pow(height / 100, 2)) * 100, 10) / 100;
      calculatedItem = staticData.reduce((previous, item) => {
        const [lo, hi] = item.value;
        return (!lo && BMI < hi) || (lo && hi && BMI >= lo && BMI <= hi) || (!hi && BMI >= lo)
          ? Object.assign({}, item, { value: BMI <= 100 ? BMI : '>100' })
          : previous;
      }, {});
    }
    this.setState({ calculatedItem });
  }

  renderStaticData() {
    return staticData.map(row => {
      return <ReferenceRow key={row.title} data={row} calculatedItem={this.state.calculatedItem} />;
    });
  }

  renderInputs() {
    const inputs = [{ title: 'Weight [kg]', key: 'weight' }, { title: 'Height [cm]', key: 'height' }];
    return inputs.map(input => {
      return (
        <css.InputWrapper key={input.key}>
          <css.InputRowTitle>{input.title}</css.InputRowTitle>
          <css.InputValue
            value={this.state[input.key]}
            onChange={evt => this.changeValue(input.key, evt)}
            onKeyDown={evt => this.inputKeyDown(input.key, evt)}
          />
        </css.InputWrapper>
      );
    });
  }

  renderIntroduction() {
    return (
      <css.Box type="desc">
        <css.Intro>Introduction</css.Intro>
        The body mass index (BMI) or Quetelet index is a value derived from the mass (weight) and height of an
        individual. The BMI is defined as the body mass divided by the square of the body height, and is
        universally expressed in units of kg/m2, resulting from mass in kilograms and height in metres.
      </css.Box>
    );
  }

  render() {
    return (
      <css.Wrapper>
        <css.Title>BMI 1.0</css.Title>
        <css.Box>
          <ReferenceRow data={this.state.calculatedItem} />
        </css.Box>
        <css.BoxPadInputs>{this.renderInputs()}</css.BoxPadInputs>
        <css.Box>{this.renderStaticData()}</css.Box>
        {this.renderIntroduction()}
      </css.Wrapper>
    );
  }
}

export default hot(App);
