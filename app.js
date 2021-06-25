

function add(){
   var getinput= document.getElementById("input")
   var list=document.createElement("li")
   var displaylist=document.createTextNode(getinput.value)
   list.appendChild(displaylist)
   var getlist=document.getElementById('list')
   getlist.appendChild(list)
   var delbtn=document.createElement("button")
   var delbtntext=document.createTextNode('Delete')
   delbtn.appendChild(delbtntext)
   list.appendChild(delbtn)
   delbtn.setAttribute('onclick','deleted1(this)')
   var editbtn=document.createElement("button")
   var editbtntext=document.createTextNode('Edit')
   editbtn.appendChild(editbtntext)
   list.appendChild(editbtn)
   editbtn.setAttribute('onclick','edit(this)')
   getinput.value=""
}


function edit(e){
  var promp =prompt("enter value to update",e.parentNode.firstChild.nodeValue )
  e.parentNode.firstChild.nodeValue=promp
}
   

function deleted1(e){
e.parentNode.remove()

}








function removeAll(){
    var dltall=document.getElementById("list")
      dltall.innerHTML=''
}