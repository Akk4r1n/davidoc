import { HasChildsPipe } from './has-childs.pipe';

describe('HasChildsPipe', () => {
  it('create an instance', () => {
    const pipe = new HasChildsPipe();
    expect(pipe).toBeTruthy();
  });
});
