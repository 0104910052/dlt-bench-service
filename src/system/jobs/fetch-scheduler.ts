import 'colors';
import differenceInMilliseconds from 'date-fns/differenceInMilliseconds';
import format from 'date-fns/format';
import { fetchMarketData } from '../../modules/market-status';
var fromUnixTime = require('date-fns/fromUnixTime');

let fetchInfo: any = {
  fetchIndex: 0,
  successfulFetches: 0,
  failedFetches: 0,
  lastFetch: null,
  currentFetchInfo: {
    started: null,
    finished: null,
  },
};

const fetchCycleInit = () => {
  fetchInfo.fetchIndex++;
  fetchInfo.currentFetchInfo.started = new Date();
  console.log(
    `Initialized fetch n${fetchInfo.fetchIndex} at ${format(
      fetchInfo.currentFetchInfo.started,
      'h:m:s BBB'
    )}`.magenta
  );
};

const fetchCycleComplete = () => {
  fetchInfo.currentFetchInfo.finished = new Date();
  fetchInfo.lastFetch = fetchInfo.currentFetchInfo.finished;
  console.log(
    `Fetch n.${
      fetchInfo.fetchIndex
    } successful. Completion time: ${differenceInMilliseconds(
      fetchInfo.currentFetchInfo.finished,
      fetchInfo.currentFetchInfo.started
    )}ms.`.green
  );
};

console.clear();

startInterval(10, async () => {
  fetchCycleInit();

  const [marketData, opData] = await Promise.all([
    fetchMarketData(),
    // fetchBlockchainData(),
  ]);

  fetchCycleComplete();
})



function startInterval(seconds: number, callback: () => void) {
  callback();
  return setInterval(callback, seconds * 1000);
}