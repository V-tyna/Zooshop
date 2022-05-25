export const bubbleSort = (arr) => {
        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < arr.length - 1; j++){
                let temp;
                if(arr[j][1] < arr[j + 1][1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }
