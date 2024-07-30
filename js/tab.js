$(document).ready(function(){
    $(".tab-button ").on("click" , function () {
      var content_number =  $(this).attr('content_number');
        

       $(".tab-button").removeClass("active")
        $(this).addClass("active");

        let sourse_item =   '[sourse_item="' + content_number + '"]';

     $('.content1').hide(400,);
     $(sourse_item).show(400, )
    })
})