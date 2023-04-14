console.log("hello world!")
list1 = [ 1,2,35,53,523,532,2,2,1,-53252,-532,3]

function reduce (reducer, array, initial) {
    let result = initial

    for (i in array){
        result = reducer(array[i], result , i)
    }

    return result
}

// For Each Console.log
reduce((current, whole) => {
    console.log(current)
    return whole;
},list1,list1)

// Map when below 2 to 2
console.log(reduce((current, whole, i) => {
    if (current<2){
        whole[i] = 2;
    }
    return whole;
},list1,list1))

// Sum
console.log(reduce((current, result)=> {
    return result += current;
}, list1, 0))

// Filter when below 2
console.log(reduce((current, result)=> {
    if (current>2){
        result.push(current)
    }
    return result;
},list1, []))