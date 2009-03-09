$(document).ready(function(){
    var input = $('#input'),
        output = $('#output'),
        html = '';

    input.contents().each(function(){
        html += $.htmlString('div', {'class': 'node'}, [
            ['div', {'class': 'node-prefix'}, (this.tagName || '#').toLowerCase()],
            ['div', {'class': 'node-postfix'}, (this.tagName ? '&middot;&middot;&middot;' : this.nodeValue)]
        ]);
    });

    output.html(output.html() + html);
});
