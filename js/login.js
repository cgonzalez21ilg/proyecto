let variable = 0;
function openForm() {
  if(variable==0){
    document.getElementById("myForm").style.display = "block";
    variable = 1;
  }else if(variable ==1){
    document.getElementById("myForm").style.display = "none";
    variable = 0;
  }
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
