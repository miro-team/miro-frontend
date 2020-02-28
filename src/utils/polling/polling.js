export const pollingIntervals = {};

export const startPolling = (id, handler, ms) => {
  if (id in pollingIntervals) {
    console.error('Polling with this id is already registered');
    return;
  }
  if (typeof handler !== 'function') {
    console.error('Polling handler is not a function');
    return;
  }
  if (Number.isNaN(ms)) {
    console.error('Invalid interval');
    return;
  }
  handler();
  pollingIntervals[id] = setInterval(handler, ms);
};

export const stopPolling = (id) => {
  if (!(id in pollingIntervals)) {
    return;
  }
  clearInterval(pollingIntervals[id]);
  delete pollingIntervals[id];
};
