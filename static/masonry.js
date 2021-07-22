if (!CSS.supports('grid-template-columns', 'masonry')) {
    var elem = document.querySelector('.projects');
    var msnry = new Masonry(elem, {
        itemSelector: '.project',
        columnWidth: 10,
        fitWidth: true,
    });
}
