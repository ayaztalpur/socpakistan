$("#click").click(function(){
       var text = $('#myvalue').val()
         $("#container").append('<div id="' + text + '"> <input type="checkbox" name="check" ><label>'+text+' </label><br></div> ');
          $("#myvalue").val('');      
          $("#"+text).click(function(){
              $("#"+text).remove()
              })
        
    
    })