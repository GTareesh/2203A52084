export const mean = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

export const stdDeviation = (arr) => {
  const m = mean(arr);
  return Math.sqrt(arr.reduce((sum, val) => sum + Math.pow(val - m, 2), 0) / arr.length);
};

export const covariance = (arr1, arr2) => {
  const m1 = mean(arr1);
  const m2 = mean(arr2);
  return arr1.reduce((sum, val, i) => sum + ((val - m1) * (arr2[i] - m2)), 0) / arr1.length;
};

export const pearsonCorrelation = (arr1, arr2) => {
  return covariance(arr1, arr2) / (stdDeviation(arr1) * stdDeviation(arr2));
};