var masonry = new Macy({
    container: '#macy-container',
    mobileFirst: true,
    trueOrder: false,
    waitForImages: false,
    columns: 1,
    margin: 43,
    breakAt: {
        1600: 4,
        900: 3,
        500: 2,
    },
});

function showImages(number) {
    const images = document.querySelectorAll(".tile--hidden")
    console.log(images);

    for (let i = 0; i < number; i++) {
        console.log(images[i]);
        images[i].classList.remove('tile--hidden');
        images[i].classList.add('tile--show');
        console.log(images[i].classList)
    }

    
}

function viewMore() {
    showImages(9);
    document.getElementById('view-more').style.display = "none";
    masonry.reInit();
}