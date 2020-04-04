import { YenPipe } from './yen.pipe';

describe('YenPipe', () => {
  const pipe = new YenPipe();

  it('can format with yen sign', () => {
    expect(pipe.transform(1000)).toBe('1000円');
  });

  it('it rounds to single digit men yen', () => {
    expect(pipe.transform(11000)).toBe('1.1万円');
  });
});
