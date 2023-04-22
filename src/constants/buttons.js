export const buttons = [
    'Remove Duplicates',
    'Subtract List',
    'Remove LineNumbers',
    'Add Something in Back/front'
];

export const removeDuplicates = (text, delim) => {
    let textArr = text.split(delim);
    textArr = textArr.map((textelem) => textelem.trim());
    let uniqueText = new Set(textArr);
    let result = Array.from(uniqueText).join(delim);
    return result;
}

export const removeLineNumbers = (text, delim) => {
    let textArr = text.split(delim);
    textArr = textArr.map((textelem) => textelem.trim());
    let uniqueText = new Set(textArr);
    let result = Array.from(uniqueText).join(delim);
    return result;
}