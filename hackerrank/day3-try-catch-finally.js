function reverseString(s) {
    let value;
    
    try {
         value = s.split('').reverse().join('');
    }
    catch(e) {
        console.log(e.message);
        value = s;
    } finally {
        console.log(value);
    }
}

reverseString(1234);
reverseString("1234");