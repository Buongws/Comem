export const formatPrice = (number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(number / 1);
};

export const findMaxPrice = (arr) => {
  if (!arr || arr.length === 0) return 0;

  let maxPrice = arr[0];

  arr.forEach((it) => (it > maxPrice ? (maxPrice = it) : ""));

  return maxPrice;
};
