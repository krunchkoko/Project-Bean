var firstInput = $('#first').val(' ');

var lastInput = $('#last').val(' ');

$("input[name='gender']").change(function(){
    var file = ($("input[name='gender']:checked").parent().text())
    console.log(file)
})

$('#options').change(function(){
    var newvalue = $('#options option:selected').text()
    console.log(newvalue)
})


$("input[name='interest']").change(function(){
   var selected= $("input[name='interest']:checked")
   $.each(selected, function(index,value){
        console.log($(value).parent().text())
   });
})


$("button").on({
        
    click: function(){
        $('button').hide(600,function(){
            $('#output').html('Thank you for your response ' + firstInput.val() + ' ' + lastInput.val())
            $('#row').html('Gender: ' + ($("input[name='gender']:checked").parent().text()) + ' and heard us from ' + $('#options option:selected').text())    
        })
           }, 

    mouseenter: function(){
        $('#output').hide()
    }, 

    mouseleave: function(){
        $('#output').show()
    } 

});

$('h2').on({
    click: function(){
        $('#tab-content1').fadeToggle(600).html('Where is it?')
        $('#tab-content2').slideToggle().html('The House')
        $('#tab-content3').fadeToggle(600).html('What time is it?')
        $('#tab-content4').slideToggle().html('9pm')
    }
});
