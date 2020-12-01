function areEqual(arr1, arr2){

    let arr1String = '', arr2String = '';

    arr1.sort().forEach(s => arr1String = arr1String + s + ',');
    arr2.sort().forEach(s => arr2String = arr2String + s + ',');
     
    
    return arr1String == arr2String;
}

areEqual([1, 2, 5, 4, 0 ], [2, 4, 5, 0, 1]) === true