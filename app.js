function groupAnagrams(words) {

    function sortString(str) {
        return str.split('').sort().join('');
    }

    const anagrams = {};
    
    for (const word of words) {
        const sortedWord = sortString(word);
        if (!anagrams[sortedWord]) {
            anagrams[sortedWord] = [];
        }
        anagrams[sortedWord].push(word);
    }

    // Convert the anagram groups to an array
    return Object.values(anagrams);
}


const input = ["bat", "tap", "cat", "tab", "pat"];
const output = groupAnagrams(input);
console.log(output);







