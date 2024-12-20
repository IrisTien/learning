const container = document.querySelector('#container');

const dots = new Array(10000).fill('<div class="dot"></div>').join("");
container.innerHTML = dots;

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
    setTimeout(() => {
      entry.target.style.backgroundColor = 'yellow';
    }, 200);
  });
}, {
  threshold: 1.0
});

document.querySelectorAll('.dot').forEach((el) => {
  observer.observe(el);
});
