
/*var addTaskList = document.getElementById('taks');
  addTaskList.addEventListener('click',function(){
    var hidding = document.getElementById('btnAdd');
    hidding.style.display = 'none';
    var show = document.getElementById('firstForm');
    show.style.display= 'block';
});*/

var addTaskList = document.getElementById('btnAdd');
var newTasklist = document.getElementById ('add-task');
addTaskList.addEventListener('click', showTaks);
function showTaks(){
addTaskList.style.display = "none";
newTasklist.style.display = "block";
};

var saveText= document.getElementById('btnSave');
saveText.addEventListener('click',function(){
  var saveOnHtml=document.getElementById('adding-elements');
  var comments = document.getElementById('firstInput').value;
  document.getElementById('firstForm').value = '';
  var newComments = document.createElement('div');
  newComments.classList.add('adding-elements');
  var textNewComment = document.createTextNode(comments);
  var contenedorElemento = document.createElement('p');
  var taks= document.createTextNode('Añadir una tarea...')
  var cont = document.getElementById('adding-elements');
  contenedorElemento.appendChild(textNewComment);
  newComments.appendChild(contenedorElemento)
  cont.appendChild(newComments);
  newComments.appendChild(textNewComment);
  contenedorElemento.appendChild(taks);
 saveOnHtml.appendChild(newComments);

});
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
