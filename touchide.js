$(document).ready(function(){
    var input = $('#input'),
        output = $('#output'),
        html = '';

    input.contents().each(function(){
        html += $.htmlString('div', {'class': 'node'}, [
            ['div', {'class': 'node-prefix'}, '&nbsp;' + (this.tagName || '#').toLowerCase() + '&thinsp;'],
            ['div', {'class': 'node-postfix'}, '&thinsp;' + (this.tagName ? '&middot;&middot;&middot;' : this.nodeValue) + '&nbsp;']
        ]);
    });

    output.html(output.html() + html);
});
