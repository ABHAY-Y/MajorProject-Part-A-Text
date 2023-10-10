chrome.runtime.onMessage.addListener(function(req,sender,sendResponse){
    alert(req);
    fetch('http://localhost:4000/interpage',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(req),
    })
    .then(res=>res.json())
    .then(value=>{
        alert('Predicted:'+ JSON.stringify(value.predicted));
    })
})