

// function isInViewPort(el) {
//   const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
//   const viewPortWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//   const scrollTop = document.body.scrollTop;
//   const top = el.offsetTop + el.offsetHeight - scrollTop;

//   const scrollLeft = document.body.scrollLeft;
//   console.log({ scrollTop, scrollLeft});
//   const left = el.offsetLeft + el.offsetWidth - scrollLeft;
//   return top <= viewPortHeight && left <= viewPortWidth;
// }

// function isInViewPortWithBoundingRect(el) {
//   const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
//   const viewPortWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//   const clientRect = el.getBoundingClientRect();
//   console.log({ viewPortHeight, viewPortWidth, clientRect});
//   return clientRect.top >= 0 && clientRect.left >= 0 && clientRect.bottom <= viewPortHeight && clientRect.right <= viewPortWidth;
// }

// addEventListener('scroll', () => {
//   const cellDom = document.querySelector('.cell');
//     console.log('IS in view port?', isInViewPort(cellDom));
// });


const callback = (entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
  });
};
const observer = new IntersectionObserver(callback, {
  // 0 - 1
  // 1
  threshold: 1.0,
  root:document.querySelector('body') //
});
const target = document.querySelector('.cell');
observer.observe(target);