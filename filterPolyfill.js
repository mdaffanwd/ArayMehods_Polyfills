const nums = [10, 15, 20, 25, 30, 35, 40, 45, 50]

function cb(x) {
    return x > 24
}

function filterPolyfil(arr, callback) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            newArray.push(arr[i])
        }
    }
    return newArray
}

console.log(filterPolyfil(nums, cb));