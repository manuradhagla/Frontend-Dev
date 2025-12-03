// Product highlight interactions using jQuery

$(function () {
    // Click product -> toggle highlight class
    $('#products').on('click', '.product', function (e) {
        // prevent click when clicking favorite icon
        if ($(e.target).hasClass('fav')) return;
        $(this).toggleClass('highlight');

        // Alert if out of stock (data-stock attribute)
        if ($(this).attr('data-stock') === "false") {
            alert($(this).text().trim() + ' is out of stock');
        }
    });

    // Hover show additional details (mouseenter/mouseleave)
    $('#products').on('mouseenter', '.product', function () {
        $(this).find('.details').show();
    }).on('mouseleave', '.product', function () {
        $(this).find('.details').hide();
    });

    // Favorite icon toggle - toggles selected class and heart char
    $('#products').on('click', '.fav', function (e) {
        e.stopPropagation(); // stop parent click
        $(this).toggleClass('selected');
        $(this).html($(this).hasClass('selected') ? '♥' : '♡');
    });

    // Apply different styles to products with discounts using attribute selector
    $('#products [data-discount="true"]').addClass('discount');
});
