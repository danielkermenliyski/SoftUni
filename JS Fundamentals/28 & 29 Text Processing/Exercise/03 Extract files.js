function solve(str) {

    let fileNameStart = str.lastIndexOf('\\') +1;
    let otherIndex = str.lastIndexOf('.')+1;

    let file = str.substring(fileNameStart,otherIndex-1);
    let names = str.substring(otherIndex,str.length);

    console.log(`File name: ${file}`);
    console.log(`File extension: ${names}`);

}

solve('C:\\Internal\\training-internal\\Template.pptx');
