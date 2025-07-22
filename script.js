document.addEventListener("DOMContentLoaded", function () {
    $(document).ready(function () {
        $('.main-category').click(function () {
            let target = '#' + $(this).data('target');

            // Toggle only the clicked category's list
            $(target).collapse('toggle');

            // Toggle active class only for the clicked category
            $(this).toggleClass('active');
        });
    });
});
