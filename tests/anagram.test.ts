import { isAnagram } from '../src/anagram';

describe('isAnagram', () => {
    it('should return true for anagrams', () => {
        expect(isAnagram('listen', 'silent')).toBe(true);
        expect(isAnagram('triangle', 'integral')).toBe(true);
        expect(isAnagram('evil', 'vile')).toBe(true);
        expect(isAnagram('anagram', 'nagaram')).toBe(true);
    });

    it('should return false for non-anagrams', () => {
        expect(isAnagram('hello', 'world')).toBe(false);
        expect(isAnagram('python', 'java')).toBe(false);
    });

    it('should handle case insensitivity', () => {
        expect(isAnagram('Listen', 'Silent')).toBe(true);
        expect(isAnagram('Triangle', 'Integral')).toBe(true);
    });

    it('should ignore spaces', () => {    
        expect(isAnagram('The Morse Code', 'Here come dots')).toBe(true);
        expect(isAnagram('Conversation', 'Voices rant on')).toBe(true);
    });
    it('should return false for empty strings', () => {
        expect(isAnagram('', '')).toBe(true);
        expect(isAnagram('a', '')).toBe(false);
        expect(isAnagram('', 'b')).toBe(false);
    });     
});