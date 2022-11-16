

var MyQueue = function() {
  this.queue = [];
  this.head = 0;
  this.tail = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.queue[this.tail] = x
  this.tail++
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  var popVal = this.queue[this.head]
  this.queue[this.head] = null;
  this.head++
  return popVal
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
return this.queue[this.head]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
return this.head === this.tail
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */