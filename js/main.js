$('input[type="number"]').val('');

// Расчёт скорости
$('#calculate_speed').click(function (){
    $('#result_speed').text('Результат: '
        + (Number($('#distance').val()) / Number($('#hours').val())).toFixed(2) + ' км/ч')})

// Расчёт шоколадок
$('#calculate_chocolates').click(function (){
    $('#result_chocolates').text('Шоколадок ' +
        Math.floor((Number($('#money').val()) / Number($('#price').val()))) + ', сдача ' +
        (Number($('#money').val()) % Number($('#price').val())))
})

// Расчёт валют
let DollarToEuro = 0.92
$('#calculate_euro').click(function (){
    $('#result_euro').text('€' + Number($('#dollars').val())*DollarToEuro)
})


