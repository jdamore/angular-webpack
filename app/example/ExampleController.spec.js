import { expect } from 'chai';
import ExampleController from './ExampleController';

describe('ExampleController', () => {
  it('greets the world', () => {
    expect(new ExampleController().greeting).to.equal('Hello world!');
  });
});
