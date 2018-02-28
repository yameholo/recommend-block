(function() {
    var elems = document.querySelectorAll('[id^="eobm_"]');

    for(let elem of elems) {
        elem.remove();
    }
}());
