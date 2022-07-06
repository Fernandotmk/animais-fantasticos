export default function debouce(callback, delay) {
  let timer;
  return (...args) => { // rest com ...args , para ter a quantidade de argumentos que a funcao tenha originalmente
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}
