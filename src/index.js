module.exports = function toReadable (num) {
    let result = '';
    let str = String(num);
    let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six','seven', 'eight', 'nine', 'ten', 'eleven', 'twelve','thirteen', 'fourteen', 'fifteen','sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arr2 = ['twenty', 'thirty', 'forty', 'fifty','sixty','seventy', 'eighty','ninety'];
    while(str.length > 0){ 
        if (str.length === 3){
          result += arr[str[0]] + ' hundred';
          str = str.slice(1, );
          if (str[0] !== '0' || str[1] !== '0'){result += ' ';}
        } else if(str.length < 3){
          if (str.length === 1 && str === '0'){
            result = 'zero';
            str = '';
          } else if (str[0] === '0' && str.length === 2){
              if (str[1] === '0'){
                  str = '';
              } else {
                result += arr[str[1]];
                str = '';
              }
          } else if (str < 20){
            result += arr[str];
            str = '';
          } else if (str >= 20){
              result += arr2[str[0] -2];
              if (str[1] !== '0'){
                result += ' ' + arr[str[1]];
              }
              str = '';
          }
        }
      }
    return (result);
}
