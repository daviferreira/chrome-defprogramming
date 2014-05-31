(function () {
    var xhr = new XMLHttpRequest(),
        content = document.createElement('div'),
        root = document.getElementById('root'),
        quote = {};

    xhr.open('GET', 'http://www.defprogramming.com/random/', true);
    xhr.send(null);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            content.innerHTML = xhr.responseText;
            content = content.querySelector('.quote-highlight-content');
            quote.body = content.querySelector('.jumbotron').innerText;
            quote.author = content
                                .querySelector('.quote-highlight-author-name')
                                .innerText;
            root.innerHTML = '<div class="quote">' +
                             '  <p class="body">' + quote.body + '</p>' +
                             '  <p class="author">&mdash; ' + quote.author + '</p>' +
                             '</div>';
        }
    }

 }());
