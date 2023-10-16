const weekdays = ['mon', 'tue', 'wed', 'thr', 'fri', 'sat', 'sun'];

const openingHrs = {
  [weekdays[3]]: {
    open: 12,
    close: 9,
  },
  [weekdays[4]]: {
    open: 1,
    close: 18,
  },
  [weekdays[6]]: {
    open: 0,
    close: 24,
  },
};
const entries = Object.entries(openingHrs);
for ([key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close ${close}`);
}
