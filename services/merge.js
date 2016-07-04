'use strict';

var newFeedItem = require('./feedItem');
var newFeedsList = require('./feedsList');

function Merge(providers, feeds) {
  var concatFeeds = feeds.reduce(function feedsReducer(previousPosts, feedArray, feedIndex) {
    return previousPosts.concat(feedArray.map(newFeedItem));
  }, []);
  return newFeedsList(concatFeeds);
}


module.exports = Merge;