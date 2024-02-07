import { expect, test } from 'vitest';
import { Singleton } from '..'

test('Singleton', () => {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();
  expect(s1).toEqual(s2);
})

