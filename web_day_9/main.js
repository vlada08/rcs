// document.
//     getElementById('some-but').addEventListener('click',function(){
//     var el = document.getElementById('super-paragraph');
//     if (el.innerText == 'foo'){
//         el.innerText = 'bar';
//     } else {el.innerText = 'foo';
//         }

// }
//     );
//lidz sim ir bijusas named fucntions bet eksiste ari anonimas

//javascriot framework(reactive frameworks)
//jquery padara javascript kodu vnk rakstamo

//jquery
//jQUERY VIETA RAKSTA $
$('#some-but').click(function () {
    $('.super-paragraph').each(function (i) {
        var j = i + 1;
        if ($(this).html() == 'foo' + j) {
            $(this).html('bar' + j);
        } else if ($(this).html() == 'bar' + j) {
            $(this).html('buz' + j);
        } else { $(this).html('foo' + j) }
    }
    )
    //ctrl+D nemt klat pa vienam
    // if ($('.super-paragraph').html() == 'foo') {
    //     $('.super-paragraph').html('bar');
    // } else if  ($('.super-paragraph').html() == 'bar'){
    //     $('.super-paragraph').html('buz');
    // } else { $('.super-paragraph').html('foo') }
}
)
//ve; viens veids ka tp izdarit
$('#some-but').click(function () {
    $('.super-paragraph').each(function () {
        var j = $(this).attr('data-num');
        if ($(this).html() == 'foo' + j) {
            $(this).html('bar' + j);
        } else if ($(this).html() == 'bar' + j) {
            $(this).html('buz' + j);
        } else { $(this).html('foo' + j) }
    }
    )
}
)
//vel viens approach
$('#some-but').click(function () {
    if ($('.super-par span').html() == 'foo') {
        $('.super-par span').html('bar');
    } else if ($('.super-par span').html() == 'bar') {
        $('.super-par span').html('buz');
    } else { $('.super-par span').html('foo') }
}
)
//hide(cik sekundes)
$('#some-otherBut').click(function () {
    $('.super-par').toggle(2000);
})

$('.add').click(function () {
    var action = $(this).attr('data-action');
    var currentValue = $('#some-input').val();
    var newValue = parseInt(currentValue) + parseInt(action);
    $('#some-input').val(newValue);

})