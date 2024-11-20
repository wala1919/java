function reverseString(str) {
    return str.split('').reverse().join('');
}
function countCharacters(str) {
    return str.length;
}
function capitalizeWords(sentence) {
    return sentence
        .split(' ') 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(' ');
}