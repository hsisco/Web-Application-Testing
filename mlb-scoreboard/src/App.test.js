import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Display, { addStrike, addBall, addFoul } from './components/Display';


test('✅renders without crashing', () => {
  render(<App />)
});

test('✅ Strikes reset at 3', () => {
  expect(addStrike(3)).toBe(0);
});
test('✅ Balls reset at 3', () => {
  expect(addBall(4)).toBe(0);
});
test('✅ Balls + Strikes reset with Hit', () => {
  expect(hit()).toBe(0);
});
test('✅ Foul increases Strikes up to 2', () => {
  expect(addFoul(2)).toBe(2);
});