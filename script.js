 function validateData(){
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var number=document.getElementById('number').value;
    var role=document.getElementById('role').value;

    if(name==""){
        alert("Name Is Required");
        return false;
    }
    if(email==""){
        alert("Email Is Required");
        return false;

    }
    else if(!email.includes("@")){
        alert("@ Symbol Is Required");
        return false;

    }
    if(number==""){
        alert("Number Is Required");
        return false;

    }
    if(role==""){
        alert("Role Is Required");
        return false;

    }
return true;
 }

 function readAllData(){
    var details;
    if(localStorage.getItem("details")==null){
        details=[];
    }
    else{
        details=JSON.parse(localStorage.getItem("details"));
    }

    var html="";
    details.forEach(function (element,index){
        html +="<tr>"
        html +="<td>"+element.name+"</td>";
        html +="<td>"+element.email+"</td>";
        html +="<td>"+element.number+"</td>";
        html +="<td>"+element.role+"</td>";
        html +='<td><button type="button" onclick="updateData('+
        index+')" class="btn btn-success">EDIT</button><button type="button" class="btn btn-danger" onclick="deleteData('+index+')">DELETE</button></td>';
        html +="<tr>"
})
document.querySelector('#table tbody').innerHTML=html;
clearFields();
document.getElementById('submit').style.display='block';
document.getElementById('update').style.display='none';
 }

 function addData(){
    if(validateData()==true){
        var name=document.getElementById('name').value;
        var email=document.getElementById('email').value;
        var number=document.getElementById('number').value;
        var role=document.getElementById('role').value;
    
        var details;
        if(localStorage.getItem("details")==null){
            details=[];
        }
        else{
            details=JSON.parse(localStorage.getItem("details"));
        }
    
        details.push({
            name:name,
            email:email,
            number:number,
            role:role,
        });
    
        localStorage.setItem("details",JSON.stringify(details));
        readAllData();
        clearFields();

     
    }
    
 }

 document.onload=readAllData();

 function deleteData(index){
    var details;
    if(localStorage.getItem("details")==null){
        details=[];
    }
    else{
        details=JSON.parse(localStorage.getItem("details"));
    }
    
    if(confirm("ARE YOU SURE TO DELETE?")){
        details.splice(index,1);
        localStorage.setItem("details",JSON.stringify(details));
        readAllData();
    }
   
 }

 function updateData(index){

    document.getElementById('submit').style.display='none';
    document.getElementById('update').style.display='block';

    var details;
    if(localStorage.getItem("details")==null){
        details=[];
    }
    else{
        details=JSON.parse(localStorage.getItem("details"));
    }

    document.getElementById('name').value=details[index].name;
        document.getElementById('email').value=details[index].email;
        document.getElementById('number').value=details[index].number;
        document.getElementById('role').value=details[index].role;

        document.querySelector('#update').onclick=function(){
            if(validateData()==true){
                details[index].name=document.getElementById('name').value;
                details[index].email=document.getElementById('email').value;
                details[index].number=document.getElementById('number').value;
                details[index].role=document.getElementById('role').value;

                localStorage.setItem("details",JSON.stringify(details));
                readAllData();
                
            }
        }
    
    
 }

 function clearFields(){
   document.getElementById('name').value="";
   document.getElementById('email').value="";
   document.getElementById('number').value="";
    document.getElementById('role').value="";

 }