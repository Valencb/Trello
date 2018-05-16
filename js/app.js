
/*var addTaskList = document.getElementById('taks');
  addTaskList.addEventListener('click',function(){
    var hidding = document.getElementById('btnAdd');
    hidding.style.display = 'none';
    var show = document.getElementById('firstForm');
    show.style.display= 'block';
});*/
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
  contenedorElemento.classList.add('paragraph');
  contenedorElemento.id="textList";
  newComments.appendChild(textNewComment);
  newComments.appendChild(contenedorElemento)
  cont.appendChild(newComments);
  taksContenedor.appendChild(taks);
  newComments.appendChild(taksContenedor);
  //contenedorElemento.appendChild(taks);
  //taks.appendChild(contenedorElemento);
  //contenedorElemento.appendChild(taks);
  contenedorElemento.appendChild(textNewComment);
  saveOnHtml.appendChild(newComments);
  taksContenedor.classList.add('card-button');

  taksContenedor.addEventListener('click', function(){
    taksContenedor.style.display = "none";
    var addingParagraph= document.getElementById('textList');
    var addingList= document.getElementById('card-button');
    var block= document.createElement("input");
    var blockIn= document.createElement("textarea");
    var lineBreak= document.createElement("br");
    var newBlock= document.createElement('div');
    newBlock.id= "Contenedor";
    newBlock.appendChild(addingParagraph);
    newBlock.appendChild(block);
    newBlock.appendChild(lineBreak);
    newBlock.appendChild(blockIn);
    var saveListOnHtml=document.getElementById('adding-elements');
    saveListOnHtml.appendChild(newBlock);
    var buttonAñadir= document.createElement(button);
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
