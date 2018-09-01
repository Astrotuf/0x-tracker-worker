const _ = require('lodash');

const createFills = require('./create-fills');
const getMissingTokenImages = require('./get-missing-token-images');
const getMissingTokens = require('./get-missing-tokens');
const getNewArticles = require('./get-new-articles');
const setRelayerForFills = require('./set-relayer-for-fills');
const updateFillStatuses = require('./update-fill-statuses');

const jobFns = {
  createFills,
  getMissingTokenImages,
  getMissingTokens,
  getNewArticles,
  setRelayerForFills,
  updateFillStatuses,
};

const getJobs = ({ maxRetries, pollingIntervals }) =>
  _.map(jobFns, (fn, jobName) => ({
    fn,
    interval: pollingIntervals[jobName] || pollingIntervals.default,
    maxRetries: maxRetries[jobName] || maxRetries.default,
  }));

module.exports = { getJobs };
