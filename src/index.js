module.exports = function toReadable (number) {
    //it is a primitive solution for a faster hand
    const ten = ['zero','one','two','three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    };
   if (number < 20) {
         return `${ten[number]}`;

   } else if (number < 100) {
       let str = number.toString();
       str = str.split('');
       if (number / parseInt(str[0]) === 10) {
        return `${dozens[parseInt(str[0])]}`;
       }
       return `${dozens[parseInt(str[0])]} ${ten[parseInt(str[1])]}`;

   } else if (number < 1000) {
        let str = number.toString();
        str = str.split('');
        if (number / parseInt(str[0]) === 100) {
            return `${ten[parseInt(str[0])]} hundred`;
        }
        if (parseInt(str[1]) === 0) {
            return `${ten[parseInt(str[0])]} hundred ${ten[parseInt(str[2])]}`;
        }
        if (parseInt(str[1]) === 1) {
            return `${ten[parseInt(str[0])]} hundred ${ten[parseInt(str[1]+str[2])]}`;
        }
        if (number / parseInt(str[0] + str[1]) === 10) {
            return `${ten[parseInt(str[0])]} hundred ${dozens[parseInt(str[1])]}`;
        }
        return `${ten[parseInt(str[0])]} hundred ${dozens[parseInt(str[1])]} ${ten[parseInt(str[2])]}`;
   }
}
