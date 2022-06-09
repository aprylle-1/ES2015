/*--------------------------MAPS AND SETS-------------------------
    What does the following code return?
            new Set([1,1,2,2,3,4])
    ----> [1,2,3,4]

    What does the following code return?
            [...new Set("referee")].join("")
    ----> 'ref'

    What does the Map m look like after running the following code?
        let m = new Map();
        m.set([1,2,3], true);
        m.set([1,2,3], false);
        m = {
            [1,2,3] : true,
            //both arrays have different references and are treated as unique
            [1,2,3] : false
        }
*/

//Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = arr => {
    const set = new Set(arr);
    return [...set].length === arr.length ? false : true;
}

//Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

const vowelCount = (str) => {
    const arr = [...str];
    return arr.reduce((map, letter) => {
        if (isVowel(letter)){
            map = isMapped(map, letter)
        }
        return map
    }, new Map())
}

const isVowel = letter => {
    const vowels = [...'aeiou'];
        if (vowels.indexOf(letter) != -1){
            return true
        }
        else{
            return false
        }
}

const isMapped = (map, key) => {
    if (map.has(key)){
        let currCount = map.get(key)
        map.set(key, currCount + 1)
    }
    else{
        map.set(key, 1);
    }
    return map
}