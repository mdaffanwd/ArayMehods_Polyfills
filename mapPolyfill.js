const nums = [1, 2, 3, 4, 5]

function doubleCallback(val) {
    return val * 2
}
function tripleCallback(val) {
    return val * 3
}
// console.log(doubleCallback(nums[1]));

function mapPolyfill(arr, callback) {
    let newAray = []; 
    for (let i = 0; i < arr.length; i++) {
        // 'this' corresponds to the array
        newAray.push(callback(arr[i]))
        console.log(this);
    }
    return newAray;
}

console.log(mapPolyfill(nums, doubleCallback));
console.log(mapPolyfill(nums, tripleCallback));