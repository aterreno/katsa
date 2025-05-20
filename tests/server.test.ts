import request from 'supertest';
import { app } from '../src/server';

describe('GET /fizzbuzz', () => {
  it('should return FizzBuzz for 15', async () => {
    const res = await request(app).get('/fizzbuzz?n=15');
    expect(res.status).toBe(200);
    expect(res.body.result).toBe('FizzBuzz');
  });
  it('should return error for missing n', async () => {
    const res = await request(app).get('/fizzbuzz');
    expect(res.status).toBe(400);
  });
});

describe('GET /anagram', () => {
  it('should return true for anagrams', async () => {
    const res = await request(app).get('/anagram?str1=listen&str2=silent');
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(true);
  });
  it('should return false for non-anagrams', async () => {
    const res = await request(app).get('/anagram?str1=hello&str2=world');
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(false);
  });
  it('should return error for missing params', async () => {
    const res = await request(app).get('/anagram?str1=hello');
    expect(res.status).toBe(400);
  });
});
