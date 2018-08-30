


function openFile(event)
{

    var file=new FileReader();
    var box1=document.getElementById('box1');
    
    var input=event.target;
    console.log(input);
    file.onload=function(){
        var text=file.result;
        box1.style.display="block";
        box1.innerHTML=file.result;
       /* res.innerText='WORD COUNT: '+file.result.split(" ").length;*/
        

    };
    file.readAsText(input.files[0]);;
    

  }
