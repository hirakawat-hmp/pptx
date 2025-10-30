import { describe, it, expect } from 'vitest';
import { hello } from '../src/index';

describe('hello', () => {
  it('should return a greeting message', () => {
    const result = hello('World');
    expect(result).toBe('Hello, World!');
  });

  it('should work with different names', () => {
    expect(hello('Hirakawa')).toBe('Hello, Hirakawa!');
    expect(hello('TypeScript')).toBe('Hello, TypeScript!');
  });
});
