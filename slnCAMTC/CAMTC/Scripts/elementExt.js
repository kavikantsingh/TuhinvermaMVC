$.extend({
    el: function (el, props) {
        var $el = $(document.createElement(el));
        $el.attr(props);
        return $el;
    }
});