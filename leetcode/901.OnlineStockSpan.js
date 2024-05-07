var StockSpanner = function () {
  this.stock = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  this.stock.push(price);

  let cnt = 0;

  for (let i = this.stock.length - 1; i >= 0; i--) {
    if (this.stock[i] <= price) {
      cnt += 1;
    } else {
      break;
    }
  }
  return cnt;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
