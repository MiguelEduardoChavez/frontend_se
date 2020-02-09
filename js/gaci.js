function actualizarTama() {
    var altura = 0;
    altura = ($(document ).height()-$( '#zona-escribir' ).height());
    $("#zona-mensajes").height(altura-92);
    $("#zona-mensajes").css("margin-bottom",$("#zona-escribir").height()+3);
    console.log($("#zona-mensajes").width());
    $("#zona-escribir").width($("#zona-mensajes").width());
}
$(document).ready(function() {
    $(window).on("resize", actualizarTama);
    actualizarTama();
    var scroll=$('#zona-mensajes');
    scroll.animate({scrollTop: scroll.prop("scrollHeight")});
});
$( "ul.chats li> .message > .btn-resp-msg " ).click(function() {
    $(this).addClass("hide");
    $(this).siblings('.btn-ocul-msg').removeClass("hide");;
    $(this).parent().siblings().children('li').removeClass("hide");
});

$( "ul.chats li> .message > .btn-ocul-msg " ).click(function() {
    $(this).addClass("hide");
    $(this).siblings('.btn-resp-msg').removeClass("hide");;
    $(this).parent().siblings().children('li').addClass("hide");
});
$('#fileName').change(function () {
    var archivos = $(this)[0].files;
    if(archivos.length >= 2){
        console.log("mas archivos");
    }
    var archivo = $(this).val();
    var extensiones = archivo.substring(archivo.lastIndexOf("."));
    for (var i=0; i<archivos.length; i++){
        var codigoHTML="";
        codigoHTML += ("<div class=\"col-md-2 col-xs-6 col-sm-6\">");
        codigoHTML += ("<div class=\"portlet light\">");
        codigoHTML += ("<div class=\"portlet-title\">");
        codigoHTML += ("<a class=\"btn btn-circle btn-icon-only btn-danger pull-right\" href=\"#\" id=\"cancelarInputFile\"><i class=\"icon-close\"></i></a>");
        codigoHTML += ("<span class=\"caption-helper\">");
        codigoHTML += (bytesToSize(archivos[i].size));
        codigoHTML += ("</span></div>");
        codigoHTML += ("<div class=\"portlet-body\">");
        codigoHTML += ("<img  class=\"img-rounded img-carga center-block\" src=\"\" id='img-c-1'>");
        codigoHTML += ("<i class=\"fa img-carga\" id=\"carga-icono\"></i>");
        codigoHTML += ("<span class=\"label label-default center-block\">");
        codigoHTML += (archivos[i].name);
        codigoHTML += ("</span>");
        codigoHTML += ("<div class=\"progress\">");
        codigoHTML += ("<div class=\"progress-bar progress-bar-success progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"83\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:50%\"></div>");
        codigoHTML += ("</div></div></div></div>");
        $('#cargas').append(codigoHTML);
        var reader = new FileReader();
        if(extensiones == ".jpg" || extensiones == ".jpeg" || extensiones == ".png"){
            reader.onload = function (e) {
                $('#img-c-1').attr('src',e.target.result);
            }
            reader.readAsDataURL(this.files[0]);
        }else if(extensiones == ".pdf") {
            $("#img-c-1").remove();
            $("#carga-icono").addClass("fa-file-pdf-o");
        }else if(extensiones == ".xls" || extensiones == ".xlsx" || extensiones == ".xlsm" || extensiones == ".xlsb" || extensiones == ".xltx"){
            $("#img-c-1").remove();
            $("#carga-icono").addClass("fa-file-excel-o");
        }else if(extensiones == ".dot" || extensiones == ".txt"|| extensiones == ".docm"|| extensiones == ".dotx"|| extensiones == ".dotm" || extensiones == ".doc" || extensiones == ".docx" ){
            $("#img-c-1").remove();
            $("#carga-icono").addClass("fa-file-word-o");
        } else if(extensiones == ".pptx" ||extensiones == ".pptm" ||extensiones == ".ppt" ||extensiones == ".potx" ||extensiones == ".pot" ||extensiones == ".ppsx" ){
            $("#img-c-1").remove();
            $("#carga-icono").addClass("fa-file-powerpoint-o");
        }else  if(extensiones == ".zip" || extensiones == ".rar"){
            $("#img-c-1").remove();
            $("#carga-icono").addClass("fa-file-zip-o ");
        }
        $('#fileName').attr("disabled", true);

    }
    $("#cancelarInputFile").click(function () {
        $('#fileName').attr("disabled", false);
        $("#cargas").empty();
        //$("#fileName").val(null);
    });
});


$(document).ready(function () {
    "use strict";
    $("#file").on("change", function (e) {
        var files = $(this)[0].files;
        if (files.length >= 2) {
            $(".file_label").text(files.length + " Files Ready To Upload");
        } else {
            var fileName = e.target.value.split("\\").pop();
            $(".file_label").text(fileName);
        }
    });
});

function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};
$(document).ready(function () {
  var tam = $("#ulproyectos li").size();
  var i=0;
  if (tam > 4) {
    $("#ulproyectos li").each(function(){
      if (i > 4) {
        $(this).addClass("hidden");
      }else {
        i++;
      }
      });
    }
    $("#ulproyectos li:last").removeClass('hidden');

    $("#vermasP").click(function(){
      i=0;
      if ($("#ulproyectos li:last > a").text() == "ver mas") {
        $("#ulproyectos li").each(function(){
          if (i > 4) {
            $(this).removeClass("hidden");
          }else {
            i++;
          }
          });
          $("#ulproyectos li:last > a").text("ver menos").append("<i class=\"fa fa-chevron-up\"></i>");

      }else if ($("#ulproyectos li:last > a").text() == "ver menos") {
        i=0;
        if (tam > 4) {
          $("#ulproyectos li").each(function(){
            if (i > 4) {
              $(this).addClass("hidden");
            }else {
              i++;
            }
            });
          }
          $("#ulproyectos li:last").removeClass('hidden');
          $("#ulproyectos li:last > a").text("ver mas").append("<i class=\"fa fa-chevron-down\"></i>");
      }

    });
});
