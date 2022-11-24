let e = 1;
function editar() {
    if(e==1){
    frm = document.forms['formulario'];
    for(i=0; ele=frm.elements[i]; i++){
      ele.disabled=false;
    } e=2;
    }else if(e==2){
        frm = document.forms['formulario'];
        for(i=0; ele=frm.elements[i]; i++){
          ele.disabled=true;
        }
        e=1;
    }
  }

  function cancelEditar(){
    frm = document.forms['formulario'];
        for(i=0; ele=frm.elements[i]; i++){
          ele.disabled=true;
        }
  }

  function openEliminar() {
      document.getElementById("eliminar").style.display= "block";

    }
    
    function closeEliminar() {
      document.getElementById("eliminar").style.display= "none";
    }
  
