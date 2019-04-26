(function($){
    function coursePopup(e){
        e.preventDefault();
        var href = $(this).attr('href');
        $.ajax({
            url : href
            ,beforeSend : function(){
                $.fancybox.showLoading();
            }
            ,success : function(d){
                var $temp = $('<div></div>');
                $temp.html(d);
                var $courseInside = $temp.find('#course-inside');
                $.fancybox.open(
                    $.extend({},B2014.fancyboxImage,{
                        content : '<div id="course-inside" class="popup">'+$courseInside.html()+'</div>'
                        ,type   : 'html'
                    })
                );
            }
            ,complete : function(){
                
            }
        });
    }
    $(document).ready(function(){
        $('#course-list .course-itunes a').on('click',coursePopup);
    });
})(jQuery);