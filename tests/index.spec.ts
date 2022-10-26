import 'mocha';
import { assert } from 'chai';

import { bcaWeb3Connect } from '../src/index';
import npmPackage from '../src/index';

describe('NPM Package', () => {
  it('should be an object', () => {
    assert.isObject(npmPackage);
  });

  it('should have a bcaWeb3Connect property', () => {
    assert.property(npmPackage, 'bcaWeb3Connect');
  });
});

describe('Hello World Function', () => {
  it('should be a function', () => {
    assert.isFunction(bcaWeb3Connect);
  });

  it('should return the hello world message', async () => {
    const expected = '';
    const actual = await bcaWeb3Connect();
    assert.equal(actual, expected);
  });
});
