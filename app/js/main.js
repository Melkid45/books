function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
    change.target.classList.add('element-show');
    }
    });
}

let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}


$('.open__menu').on('click', function(e){
    $('.header__list').toggleClass('open')
    $(this).toggleClass('open')
})

$('.number').on('mouseover', function(e){
    let number = $(this).attr('data-modal')
    $('.wrap').each(function(e){
        if ($(this).attr('data-open') == number){
            $(this).toggleClass('active')
        }
    })
})

// let width = $(window).width()

// if (width >= 780){
//     $('.dope ul li').each(function(e){
//         $(this).attr('id', '')
//     })
// }



var splide = new Splide( '#slide', {
    perPage: 1,
    type: 'loop'
  } );
  
  splide.mount();