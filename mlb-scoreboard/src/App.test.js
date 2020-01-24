import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Display, { addOne, addStrike, addBall, addFoul } from './components/Display';

test('✅renders without crashing', () => {
  render(<App />)
});

test('✅ addOne adds 1', () => {
  expect(addOne(2)).toBe(3);
});

test('✅ Strikes reset at 3', () => {
  expect(addStrike(3)).toBe(0);
});

test('✅ Balls reset at 3', () => {
  expect(addBall(4)).toBe(0);
});

test('✅ Balls + Strikes + Fouls reset with Hit', () => {
  expect(hit()).toBe(0);
});