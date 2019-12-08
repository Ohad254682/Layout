function openMenu(ev) {
    $('.nav-menu').show();
    $('.nav-menu').addClass('menu-open');
    ev.stopPropagation();
}

function closeMenu() {
    if (window.innerWidth <= 740) {
        $('.nav-menu').removeClass('menu-open');
        setTimeout(function(){
            $('.nav-menu').hide();
        },600) 
    }
}

window.addEventListener('resize', showNavBar);

function showNavBar() {
    if (window.innerWidth > 740) {
        $('.nav-menu').show();
    }
    else {
        $('.nav-menu').hide();
    }
}

$('.post button').hover(function(){
    $('.post button span').show();
},function(){
    $('.post button span').hide();
})

$('.post-content>button').click(openSubscriptionModal);

function openSubscriptionModal(){
    $('.subscription-modal').show();
    $('.user-msg-subscribing').text('');
    $('.subscription-modal form input[type="email"]').val('');
    $('.subscription-modal form input[type="submit"]').show();

}

function closeSubscriptionModal(){
    $('.subscription-modal').hide();
}

function sumbitEmailForSubscription(ev){
    ev.preventDefault();
    $('.user-msg-subscribing').text('Thank you for subscribing!');
    $('.subscription-modal form input[type="submit"]').hide();
}