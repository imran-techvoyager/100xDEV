function getLength(str){
    console.log(`the length of string ${str} is: ${str.length}`);
    return str.length;
}

getLength("hello world");

function getIndexOf(str, target){
    console.log(`the index of ${target} in ${str} is: ${str.indexOf(target)}`);
    return str.indexOf(target);
}

getIndexOf("hello world", "w");

function getLastIndexOf(str, target){
    console.log(`the last index of ${target} in ${str} is: ${str.lastIndexOf(target)}`);
    return str.lastIndexOf(target);
}

getLastIndexOf("hello world world world", "world");

function getSlice(str, start, end){
    console.log(`the slice of ${str} from ${start} to ${end} is: ${str.slice(start, end)}`);
    return str.slice(start, end);
}

getSlice("hello world", 1,7);

function splitString(str, separator){
    console.log(`the split of ${str} by ${separator} is: ${str.split(separator)}`);
    return str.split(separator);
}

splitString("hii my name is imran", " ");

function replaceString(str, target, replacement){
    console.log(`the replacement of ${target} in string ${str} by ${replacement} is : ${str.replace(target, replacement)}`);
    return str.replace(target, replacement);
}

replaceString("hello world", "world", "javascript");

function trimString(str){
    console.log(`the trimmed string is; ${str.trim()}`);
    return str.trim();
}

trimString("       hello    world        ");

function toUpper(str){
    console.log(`the upper case of ${str} is: ${str.toUpperCase()}`);
    return str.toUpperCase();
}

toUpper("hello world");

function toLower(str){
    console.log(`the lower case of ${str} is: ${str.toLowerCase()}`);
    return str.toLowerCase();
}

toLower("HELLO WORLD");