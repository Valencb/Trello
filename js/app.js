
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
  var newComments = document.createElement('div');
  newComments.classList.add('elements');
  var textNewComment = document.createTextNode(comments);
  var cont = document.getElementById('adding-elements');
  var taks= document.createTextNode('Añadir una tarjeta...')
  var contenedorElemento = document.createElement('p');
  newComments.appendChild(textNewComment);
  newComments.appendChild(contenedorElemento)
  cont.appendChild(newComments);
  contenedorElemento.appendChild(taks);
  taks.appendChild(contenedorElemento);
  contenedorElemento.appendChild(textNewComment);
 saveOnHtml.appendChild(newComments);
 //taks.addEventListener('click'function(){

 //});
});

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
