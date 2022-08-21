function func(attr){
  var options = document.getElementsByName("position");
  if (attr === 0){ 
  for (var i = 1; i < options.length; i++) {  
    if (options[i].checked) {
        options[i-1].checked =true;
        }
    }
    return;
  }
  for (var i = 0; i < options.length-1; i++) {  
    if (options[i].checked) {
        options[i+1].checked =true;
    return;
        }
    }  
}
