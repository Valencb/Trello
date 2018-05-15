
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
saveText.addEventListener('click',saveText);
function addingElements(){
  var comments = document.getElementById('firstInput');
  var commentsValue = comments.value;
  var newDiv= document.createElement('div');
  var elementText =document.createElement('p');
  var text= document.createTextNode(comments);
  var saveOnHtml= document.getElementById('adding-elements');
  elementText.appendChild(text);
  newDiv.appendChild(elementText);
  saveOnHtml.parentElement.appendChild(newDiv);
};
