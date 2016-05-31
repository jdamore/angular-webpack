import { expect } from 'chai';
import ExampleParentController from './ExampleParentController';

describe('ExampleParentController', () =>{
  it('greets the world', () => {
    expect(new ExampleParentController().greeting).to.equal('Hello world!');
  });
});
