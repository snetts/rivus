'use strict';

function FeedItem(feedItem) {
  this.setData(feedItem);
}

FeedItem.prototype.setData = function setData(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      this[key] = obj[key];
    }
  }
};

module.exports = function newFeedItem(feedItem, meta) {
  return new FeedItem(feedItem, meta);
};
