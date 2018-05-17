
/*first version of trello text to show adding at list, Click function
to hide text and show form*/
var addTaskList = document.getElementById('btnAdd');
var newTasklist = document.getElementById ('add-task');
addTaskList.addEventListener('click', showTaks);
function showTaks(){
addTaskList.style.display = "none";
newTasklist.style.display = "block";
};
/*Save function button and create a new div with the input value*/
var saveText= document.getElementById('btnSave');
saveText.addEventListener('click',function(){
  var saveOnHtml=document.getElementById('adding-elements');
  saveOnHtml.style.display= "block";
  var comments = document.getElementById('firstInput').value;
  document.getElementById('firstInput').value = '';
    if(comments.length == 0 || comments == null) {
		alert('Debes ingresar un mensaje');
    return false;
    }
  var newComments = document.createElement('div');
  newComments.classList.add('elements');
  var textNewComment = document.createTextNode(comments);
  var cont = document.getElementById('adding-elements');
  var taks= document.createTextNode('Añadir una tarjeta...')
  var taksContenedor= document.createElement('button');
  var contenedorElemento = document.createElement('p');
  var generalContainer= document.createElement('div');
  generalContainer.id= "boxContainer";
  contenedorElemento.classList.add('paragraph');
  contenedorElemento.id="textList";
  newComments.appendChild(textNewComment);
  newComments.appendChild(contenedorElemento);
  newComments.appendChild(generalContainer);
  cont.appendChild(newComments);
  taksContenedor.appendChild(taks);
  newComments.appendChild(taksContenedor);
  contenedorElemento.appendChild(textNewComment);
  saveOnHtml.appendChild(newComments);
  taksContenedor.classList.add('card-button');

  taksContenedor.addEventListener('click', function(){
    taksContenedor.style.display = "none";
    var tittle = document.createElement('h2');
    var tittleList=document.createTextNode('Lista de tareas...');
    var addingParagraph= document.getElementById('textList');
    var blockIn= document.createElement("textarea");
    blockIn.id="white";
    var desing= document.getElementById("boxContainer")
    var addingList= document.getElementById('card-button');
    var lineBreak= document.createElement("br");
    var newBlock= document.createElement('div');
    desing.appendChild(tittle);
    tittle.appendChild(tittleList);
    newBlock.appendChild(addingParagraph);
    newBlock.appendChild(lineBreak);
    newBlock.appendChild(desing);
    newBlock.id= "Contenedor";
    desing.appendChild(blockIn);
    var saveListOnHtml=document.getElementById('adding-elements');
    saveListOnHtml.appendChild(newBlock);
    var buttonAñadir= document.createElement('button');
    buttonAñadir.id="Adding";
    buttonAñadir.innerHTML = "Añadir";
    newBlock.appendChild(buttonAñadir);
    var x= document.createElement('i');
    x.classList.add('fa','fa-times','times');
    newBlock.appendChild(x);
    var blockInFocus= document.getElementById("white").focus();

    var addingButton=document.getElementById('Adding');
    addingButton.addEventListener('click',function txt() {
      var saveText = document.getElementById('white').value;
      document.getElementById('white').value = '';
      console.log(saveText);
      if(saveText.length === 0){
      var funtionButton= document.getElementById('Adding');
      funtionButton.removeEventListener("click", txt);
      } else {
      var paragraphAfter=document.getElementById('textList')
      var containerSaveText= document.getElementById('Contenedor');
      var note = document.createTextNode(saveText);
      var noteText=document.createElement('p');
      noteText.id="note";
      var containerNoteText= document.createElement('div');
      noteText.appendChild(note);
      containerNoteText.appendChild(noteText);
      containerSaveText.appendChild(containerNoteText);
      var lineBreak= document.createElement("br");
      containerSaveText.insertBefore(containerNoteText, paragraphAfter);
      };
    });

  });

  });


  //taksContenedor.addEventListener('click',function(){
  /*var taksContenedor= document.createElement('button');
  var conteinerButton= document.getElementById('adding-list');
  conteinerButton.appendChild(taksContenedor);
  //var newtaksContenedor = document.createElement('input');
  var card= document.createTextNode('input').value;
  var cardBlock= document.createElement('p');
  var cardBlockContainer= document.createElement('div');
  cardBlockContainer.classList.add('elements');
  //card.appendChild(newtaksContenedor);
  cardBlock.appendChild(card);
  cardBlockContainer.appendChild(cardBlock);
saveOnHtml.appendChild(cardBlockContainer);*/

//});






/*

  /*var comments = document.getElementById('firstForm');
  var commentsValue = comments.value;
  var newDiv= document.createElement('div');
  var elementText =document.createElement('p');
  var text= document.createTextNode(comments);
  var saveOnHtml= document.getElementById('adding-elements');

  elementText.innerHTML = commentsValue;
  newDiv.appendChild(elementText);
  saveOnHtml.lastChild(newDiv);
  saveOnHtml.appenChild(newDiv);
};*/
