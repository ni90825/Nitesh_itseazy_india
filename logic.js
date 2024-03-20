let issue_array=[{value:"Sales",ui_value:"Sales"},{value:"Document_pickup",ui_value:"Document Pickup"},{value:"Document_dispatch",ui_value:"Document Dispatch"},{value:"Document_return",ui_value:"Document Return"},{value:"payment",ui_value:"Payment"},{value:"Driving_License_Renewal",ui_value:"Driving License Renewal"}]
const radioInputs = document.querySelectorAll('input[type="radio"][name="issuestatus"]');

for(let i=0;i<issue_array.length;i++){
    document.getElementsByClassName("option")[0].innerHTML=document.getElementsByClassName("option")[0].innerHTML + `<div value=${issue_array[i].value} class="issueoption">${issue_array[i].ui_value}</div>`
}

for(let i=0;i<radioInputs.length;i++){
    radioInputs[i].addEventListener("change",((event)=>{
       if(event.target.value == "yes"){
        document.getElementsByClassName("issueparentblock")[0].style.display="block";
       }
       else if(event.target.value == "no"){
        document.getElementsByClassName("issueparentblock")[0].style.display="none";
       }
    }))
}

document.getElementsByClassName("cross")[0].addEventListener("click",(()=>{
    document.getElementsByClassName("issueparentblock")[0].style.display="none";
    document.querySelectorAll('input[type="radio"][name="issuestatus"]')[1].checked="true";
}))