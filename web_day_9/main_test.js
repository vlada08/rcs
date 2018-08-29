$('#but-one').click(function () {
    $('.changeBut').toggle(2000);

})

$('#but2').click(function () {
    $('#some-par2').toggle(1000);

})

$('input').keyup(function () {
console.log($('#in-one').val());
console.log($('#in-two').val());
    var textOne = $('#in-one').val();
    var textTwo = $('#in-two').val();
    if (textOne == textTwo) {
        $('#result').html('yay!')
    } else {
        $('#result').html('oh no!')
    }

}

)

