export default function uuid(len) {
  len = len || 6;
  len = parseInt(len, 10);
  len = isNaN(len) ? 6 : len;
  let seed = '0123456789abcdefghijklmnopqrstubwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ';
  let seedLen = seed.length - 1;
  let uid = '';
  while (len--) {
    uid += seed[Math.round(Math.random() * seedLen)];
  }
  return uid;
};