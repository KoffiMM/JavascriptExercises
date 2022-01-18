const removeFromArray = function(arr) {

    for(var i = 1; i < arguments.length; i++)
    {
        for(var j = 0; j < arr.length; j++)
        {
            if(arguments[i] == arr[j]||typeof arguments[i]=='string')
            {
                arr.splice(j, 1);
                --j;
            }
            
        }
    }
    return arr;
  }
  

// Do not edit below this line
module.exports = removeFromArray;
