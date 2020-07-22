// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
  let hours = parseInt(seconds / 3600);
  let leftMinutes = seconds % 3600;
  let minutes = parseInt(leftMinutes / 60);
  let secs = leftMinutes % 60;
  let arr = [hours, minutes, secs];
  for (i = 0; i < 3; i++) {
    if (/^\d$/.test(arr[i])) {
      arr[i] = `0${arr[i].toString()}`;
    }
  }
  return `${arr[0]}:${arr[1]}:${arr[2]}`;
}
