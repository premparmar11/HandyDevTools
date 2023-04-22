export const buttons = [
    'Remove Duplicates',
    'Subtract List',
    'Remove LineNumbers',
    'Add Something in Back/front'
];

export const removeDuplicates = (text, delim) => {
    let textArr = text.split(delim);
    textArr = textArr.filter((textelem) => textelem).map((textelem) => textelem.trim());
    let uniqueText = new Set(textArr);
    let result = Array.from(uniqueText).join(delim);
    return result;
}

export const subtractList = (text1, text2, delim) => {
    let textArr1 = text1.split(delim);
    let textArr2 = text2.split(delim);
    
    textArr1 = textArr1.filter((textelem) => textelem).map((textelem) => textelem.trim());
    textArr2 = textArr2.filter((textelem) => textelem).map((textelem) => textelem.trim());
    
    let result = textArr1.filter(textelem => !textArr2.includes(textelem));
    result = Array.from(result).join(delim);
    return result;
}

export const removeLineNumbers = (text1, delim) => {
    let textArr1 = text1.split(delim);
    let result = Array.from(textArr1).join(delim);
    return result;
}