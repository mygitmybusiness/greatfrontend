/**
 * @param {Array<number>} array - Array from which the elements are all numbers.
 * @return {number} Returns mean.
 */
export default function mean(array: number[]): number {
    let sum: number = 0;
  
    for (let i of array) {
      sum += i;
    }
  
    return sum / array.length;
  }
  