export const isAnagram = (str1: string, str2: string): boolean => {
    // Remove spaces and convert to lowercase
    const cleanStr1 = str1.replace(/\s+/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s+/g, '').toLowerCase();

    // Sort the characters of both strings and compare
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}