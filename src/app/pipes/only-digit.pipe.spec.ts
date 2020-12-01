import { OnlyDigitPipe } from './only-digit.pipe';

describe('OnlyDigitPipe', () => {
  it('create an instance', () => {
    const pipe = new OnlyDigitPipe();
    expect(pipe).toBeTruthy();
  });
});
