//****************
//
// Loader Js by Akshay Mishra
// http://www.ebsoftsolutions.com
//
//*****************
function ShowLoader() {
    // $('.loader-element').center();

    $('.loader-element').show();
    $('#mask1').show();
}
function HideLoader() {
    $('.loader-element').hide(); $('#mask1').hide();
}
function ShowLoaderSmall(element) {
    // $('.loader-element').center();

    $(element).css('background', 'url(http://staff.nvbmt.inlumon.com/App_Themes/Theme1/images/ajax-loader.gif)  no-repeat 98%');
}
function HideLoaderSmall(element) {
    $(element).css('background', 'none');
}
jQuery.fn.center = function () {

    this.css("position", "absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                                                $(window).scrollLeft()) + "px");
    return this;
}

$(function () {
    $('body').append('<div id="mask1" style="display: none"></div><div class="loader-element loader2" style="display: none">' +
    '<img src="http://staff.nvbmt.inlumon.com/App_Themes/theme1/images/ajax-loader.gif" /><br />' + /// <reference path="../images/ajax-loader.gif" />
      'please wait...' +
       '</div>');
    $('body').append('<style> .loader-element1' +
        '{position: fixed;' +
 'width: 32px;' +
 'height: 32px;' +
 'border: 0;' +
 'left: 50%;' +
 'top: 50%;' +
 'margin-left: -16px;' +
 'margin-top: -16px;' +
 'background-image: url(http://staff.nvbmt.inlumon.com/App_Themes/Theme1/images/preload-circle.png);' +
 'text-indent: -100px;' +
 'overflow: hidden;' +
 '-webkit-animation: playload 1.4s steps(18) infinite;' +
 '-moz-animation: playload 1.4s steps(18) infinite;' +
 '-ms-animation: playload 1.4s steps(18) infinite;' +
 '-o-animation: playload 1.4s steps(18) infinite;' +
 'animation: playload 1.4s steps(18) infinite;}' +
 '@-webkit-keyframes playload {' +
   'from { background-position:    0px; }' +
    ' to { background-position: -576px; }' +
'}' +
'@-moz-keyframes playload {' +
  ' from { background-position:    0px; }' +
    ' to { background-position: -576px; }' +
'}' +
'@-ms-keyframes playload {' +
 '  from { background-position:    0px; }' +
 '    to { background-position: -576px; }' +
'}' +
'@-o-keyframes playload {' +
 '  from { background-position:    0px; }' +
 '    to { background-position: -576px; }' +
'}' +
'@keyframes playload {' +
   'from { background-position:    0px; }' +
     'to { background-position: -576px; }' +
'}' +
        '</style>');

});


//$(function () {
//    ShowLoader();
//});

//$(window).load(function () {
//    HideLoader();
//});