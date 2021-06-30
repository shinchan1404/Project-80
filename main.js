var list=[]
function friends(){
    var list_of_friends=document.getElementById("name").value;
    list.push(list_of_friends);
    document.getElementById("first").innerHTML=list;
    console.log(list)
}

function friends1(){
    
    //list=document.getElementById("name").value;
    var i=list.join("<br>")
    
    document.getElementById("second").innerHTML=i.toString();
    
    console.log(list)}
function sorting(){
    
    list.sort();
    var o=list.join("<br>");
    document.getElementById("third").innerHTML=o.toString();
}
function searching(){
  var s =document.getElementById("s1").value;
  var found=0;
  var j;
  for(j=0;j<list.length;j++)
  {
      if(s==list[j]){
          found=found+1
        
      }
      
  }
  document.getElementById("search").innerHTML="name found "+found+" time/s";
 console.log(found)
 console.log(s)
 console.log(list)
}