import omit from '../src';

describe('omits', () => {
  it('a single key', () => {
    const source = {
      foo: 'foo',
      bar: 'bar',
    };

    const obj = omit(source, ['foo']);

    expect(obj).not.toHaveProperty('foo');
  });

  it('multiple keys', () => {
    const source = {
      foo: 'foo',
      bar: 'bar',
      fizz: 'fizz',
      buzz: 'buzz',
    };

    const obj = omit(source, ['bar', 'fizz', 'buzz']);

    expect(obj).not.toHaveProperty(['bar', 'fizz', 'buzz']);
  });
});
