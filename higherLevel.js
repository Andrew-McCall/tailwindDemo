console.log("hello world!")
list1 = [ 1,2,35,53,523,532,2,2,1,-53252,-532,3]

function reduce (reducer, array, initial) {
    let result = initial

    for (i in array){
        result = reducer(array[i], result , i)
    }

    return result
}

const logEach = (current, whole) => {
    console.log(current)
    return whole
}

const mapBelow2 = (current, whole, i) => {
    if (current<2){
        whole[i] = 2;
    }
    return whole;
}

const sumAll = (current, result) => result+=current

const filterBelow2 = (current, result)=> {
    if (current>2){
        result.push(current)
    }
    return result;
}

reduce(logEach,list1,list1)
console.log( reduce(mapBelow2, list1,list1) )
console.log( reduce(sumAll, list1, 0) )
console.log( reduce(filterBelow2 ,list1, []) )