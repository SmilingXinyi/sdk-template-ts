/**
 * return the sum of many values
 * @param {[number]} a - numbers
 */
const zz = (...a: number[]): number => a.reduce((acc, val) => acc + val, 0);

export default zz;
