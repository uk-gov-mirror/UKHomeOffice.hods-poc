console.log("working");
console.log("test");

document.querySelectorAll('ul.tab__nav li a').onclick(() => {
    let target = "#" + this.data("target");
    document.querySelectorAll('ul.tab__nav li a').classList.remove('active');
    this.classList.add('active');
    if (document.querySelectorAll('.tab__content') !== target) {
      this.classList.add('js-hidden');
    } else {
      target.classList.remove('js-hidden');
    }
});
