var DATA=[];

$("#click").click(function(){
       var text = $('#myvalue').val()
       DATA.push(text);
       $('#myvalue').val('');
       RenderJSON(DATA);
       save(DATA);

});
function RenderJSON(data){

	$("#container").empty();
	for (var i = 0; i < data.length; i++) {
var text = $('#myvalue').val();
         $("#container").append('<div id="' + data[i] + '"> <input type="checkbox" name="check" ><label>'+data[i]+' </label><br></div> ');
$("#"+data[i]).click(function(){
              var myid=$(this).attr("id");

var index= DATA.indexOf(myid);
              if (index >-1){
                  DATA.splice(index,1);
                  RenderJSON(DATA);
                     save(DATA); 

	}
              });
          }    
    }
    function save(){
   localStorage.myData = JSON.stringify(DATA);
}
function load() {
DATA = JSON.parse(localStorage.myData);
RenderJSON(DATA);
}

load();
