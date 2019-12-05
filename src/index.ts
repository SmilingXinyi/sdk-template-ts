export default (...a: number[]): number => a.reduce((acc, val) => acc + val, 0);
