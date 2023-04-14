console.log("hello world!")
list1 = [ 1,2,35,53,523,532,2,2,1,-53252,-532,3]

function reduce (reducer, array, initial) {
    let result = initial

    for (i in array){
        result = reducer(array[i], result , i)
    }

    return result
}

const logEach = (current, result) => {
    console.log(current)
    return result
}

const mapBelow2 = (current, result, i) => {
    if (current<2){
        result[i] = 2;
    }
    return result;
}

const sumAll = (current, result) => result+=current

const filterBelow2 = (current, result)=> {
    if (current>2){
        result.push(current)
    }
    return result;
}

const highest = (current, result) => current > result ? current : result;

reduce(logEach,list1,list1)
console.log( reduce(mapBelow2, list1,list1) )
console.log( reduce(sumAll, list1, 0) )
console.log( reduce(filterBelow2 ,list1, []) )

const mapMultiplyCreator = (n) => {
    const customeMutliply = (current, result, i) => {
        result[i] *= n
        return result;
    }
    return customeMutliply
}

console.log(reduce(sumAll, reduce(filterBelow2, reduce(mapMultiplyCreator(10), list1, list1), []), 0))