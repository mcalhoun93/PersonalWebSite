$( document ).ready(function() {
 
    alert( "Welcome!" );
 
});

$(document).ready( function() {
 
$("#confirm_box").click( function() {
jConfirm('Please confirm this?', 'Confirmation Dialog', function(r) {
jAlert('Click Result: ' + r, 'Visitor Response');
});
});
 
});