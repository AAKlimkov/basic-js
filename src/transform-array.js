const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    var j =0
    var result = []
 

    // arr[arr.length]== '--discard-next' ||'--double-next' ? arr.pop() : arr
    // arr[0] == "--discard-prev" || '--double-prev' ? i=1 : i = 0;

    for (let i=0; i < arr.length; i++) {
        
        switch (arr[i]) {
            case "--discard-prev":
                if (i==0) {
                    break
                }
                    result.pop()
                    j--
                    break;
                
            case "--discard-next":

                if (i==arr.length-1) {
                    break
                }
                if(arr[i+2]=='--double-prev'){
                    i=i+2
                    break
                } else if(arr[i+2]=='--discard-prev'){
                  i=i+2
                  break
                } else {
                    i++
                    break;
                }
              
            case '--double-prev':
                if (i==0) {
                    break
                }
                result[j]=result[j-1]
                j++
                break;
            case '--double-next':
                if (i==arr.length-1) {
                    break
                }
                    result[j]=arr[i+1]
                    j++
                    break;  
                
                
            default:
                result[j]=arr[i]
                j++
                break;
        }
    
    }
return result
};
