/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowel = [];
    let consonants = [];
    let vowelList = "aeiou";

    let arr = s.split('');

    arr.map((char) => {
        if(vowelList.indexOf(char) == -1) {
            consonants.push(char);
        } else {
            vowel.push(char);
        }
    });

    vowel.map((char) => {
        console.log(char);
    })

    consonants.map((char) => {
        console.log(char);
    })
}


vowelsAndConsonants("codingking!!");