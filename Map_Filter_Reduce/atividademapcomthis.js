const maca ={
    value: 2,

}
const laranja={
    value :3,

}
function mapComThis(arr, thisArg){
    return arr.map(function(item){
       return item * this.valeu;
    }, thisArg);
}

const nums = [1, 2];

console.log('this -> maça', mapComThis(nums, laranja));