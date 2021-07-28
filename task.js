
function RemoveDuplicates(array){
    let uniqueElement = [];
    
    // Loop through array values
    for(i=0; i < array.length; i++){
        if(array.indexOf(array[i]) === -1) {
            uniqueElement.push(array[i]);
        }
    }
    return uniqueElement;
}

function reverseArray(arr) {
    let reversed = [];
    for (i = 0; i < arr.length; i++) { 
    reversed.push((arr[arr.length-1-i]))
    }
  return reversed;
}

function eliminateDuplicates(arr) {
    let out = [], obj ={};
  
    for (i = 0; i <arr.length; i++) {
      obj[arr[i]] = 0;
    }
    for (i in obj) {
      out.push(i);
    }
    return out;
  }

  function duplicateInArray(array) {
    let object = {};
    let result = [];

    array.forEach(function (item) {
      if(!object[item])
          object[item] = 0;
        object[item] += 1;
    })

    for (var prop in object) {
       if(object[prop] >= 2) {
           result.push(prop);
       }
    }

    return result;

}
function sorting() {
    let x,i,count = 10;
    let arr =[1,2,3,4,2,1,9];
    for(i=0;i<=10;i++)
    {
            for(x=i+1;x<=10;x++)
            {
                    if(arr[x]==arr[i])
                    {
                            count--;
                            for(i=x;i<=count;i++)
                            { arr[i] = arr[i+1];
                            }
                    }
            }

      }
}
