var CQueue = function() {
    this.q1 = [];
    this.q2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    if (typeof value !== 'object' || value.length > 0) return;
    for (var i = 0; i < value.length; i++) {
        this.q1.push(value[i]);
    }
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (this.q1.length === 0 && this.q2.length === 0) return -1;
    if (this.q2.length === 0) {
        this.q2.push(this.q1.pop())
    }
    return this.q2.pop()
};