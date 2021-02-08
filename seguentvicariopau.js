function passaSeguentPVR(objRebut){
    let idObjPregAct = objRebut.parentElement.parentElement.id; 
    let colArticles = document.getElementsByTagName("article");
    let idObjPregSeg;
      for (let i = 0; i < colArticles.length; i++) {
      if(colArticles[i].id == idObjPregAct){
        idObjPregSeg = colArticles[i+1].id;
        break;
      };
    }
  
    amagaElement(idObjPregAct);
    mostraElement(idObjPregSeg);
  }
  
  function mostraElement(idRebut){
    document.getElementById(idRebut).classList.add("elementVisiblePVR");
    document.getElementById(idRebut).classList.remove("elementOcultPVR");
  }
  
  function amagaElement(idRebut){
    document.getElementById(idRebut).classList.remove("elementVisiblePVR");
    document.getElementById(idRebut).classList.add("elementOcultPVR");
  }