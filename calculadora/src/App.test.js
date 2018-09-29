import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should set state to plus operator when plus button is clicked', () => {
  const wrapper = mount(<App/>);
  wrapper.find('#btnPlus').simulate("click");
  expect(wrapper.state().operator).toBe('btnPlus');
});

it('should show result afther click on two number, operator and equal', () => {
  const wrapper = mount(<App/>);
  wrapper.find('#btn8').simulate("click");
  wrapper.find('#btnPlus').simulate("click");
  wrapper.find('#btn2').simulate("click");
  wrapper.find('#equal').simulate("click");
  expect(wrapper.state().result).toBe('10');
});
