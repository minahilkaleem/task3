function removeDuplicates(size,arr)
{
    let j = 0;
    for (let i = 0; i < size; i++) {
        if (arr[i] == arr[i + 1]) {
            let x = i;
            for (let k = 0; k < 2; k++) {
                j = 0;
                for (j = x; j < size; j++) {
                    arr[j] = arr[j + 1];
                }
                arr[j] = '\0';
                size--;
            }
            i = 0;
        }
    }
}

function reverseArray(arr) {
    let reversed = [];
    for (i = 0; i < arr.length; i++) { 
    reversed.push((arr[arr.length-1-i]))
    }
  return reversed;
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