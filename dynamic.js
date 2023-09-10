$(document).ready(function() {
    // Function to load content via AJAX
    function loadPage(url) {
        $.ajax({
            url: url,
            method: 'GET',
            dataType: 'html',
            success: function(data) {
                // Replace the content with the loaded page
                $('#content').html(data);
            },
            error: function() {
                // Handle error if the page cannot be loaded
                alert('Error loading page');
            }
        });
    }

    // Handle click events on href links with a class
    $('a.ajax-link').on('click', function(e) {
        e.preventDefault(); // Prevent the default link behavior

        var pageUrl = $(this).attr('href');
        loadPage(pageUrl);
    });
});
