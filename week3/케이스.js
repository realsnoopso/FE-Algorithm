const getAvailableDiscounts = (discounts, minDiscount) =>
  discounts.filter((v) => v >= minDiscount);

const getTotalUserAndPrices = (v, maxPrice) =>
  v.reduce(
    (pre, curr, i) => {
      const discounted = getDiscountedPrice(curr[0], curr[1]);
      console.log(discounted);
      if (isOverPrice(discounted, maxPrice)) {
        const user = pre[0] + 1;
        return [user, pre[1]];
      }
      const price = pre[1] + discounted;
      return [pre[0], price];
    },
    [0, 0]
  );

const getCases = (users, prices) => {
  console.log(users);
  const discounts = [10, 20, 30, 40];

  users.forEach((u) => {
    const cases = [];
    const [minDiscount, maxPrice] = u;
    let arr = [];
    const availableDiscounts = getAvailableDiscounts(discounts, minDiscount);

    availableDiscounts.forEach((d) => {
      for (let p; p < prices.length; p++) {
        console.log({ p });
        if (p === prices.length) {
          result.push(arr);
          return (arr = []);
        }
        arr.push([d, p]);
      }
    });
    const calcuratedCases = cases.map((v) =>
      getTotalUserAndPrices(v, maxPrice)
    );
    return calcuratedCases;
  });

  return result;
};

const isOverPrice = (price, maxPrice) => price > maxPrice;

const getDiscountedPrice = (price, percent) => price - (price * percent) / 100;
const getTotalPrice = (prices) => prices.reduce((pre, curr) => pre + curr, 0);
const getMaxResult = (results) =>
  results.reduce(
    (pre, curr, i) => {
      if (pre[0] < curr[0]) return curr;
      if (pre[0] === curr[0]) {
        if (pre[1] < curr[1]) return curr;
      }
      return pre;
    },
    [0, 0]
  );

function solution(users, prices) {
  const cases = getCases(users, prices);
  console.log({ cases });
  // return getMaxResult(cases);
}

solution(
  [
    [40, 10000],
    [25, 10000],
  ],
  [(7000, 9000)]
);
