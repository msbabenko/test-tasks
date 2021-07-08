const getData = async () =>  {
  let url = "https://www.nbrb.by/api/exrates/rates?periodicity=0";
  const response = await fetch(url);
  if (response.status >= 200 && response.status <= 299) {
    const jsonResponse = await response.json();
    return jsonResponse;
  } else {
    console.log(response.status, response.statusText);
  }
}

const renderData = async () => {
  let allCurrencies = await getData();
if (allCurrencies.length <= 0) 
return;
let temp = allCurrencies.map(({Cur_Name, Cur_Abbreviation, Cur_Scale, Cur_OfficialRate}) => {
    
    if (!Cur_Name || !Cur_Abbreviation || !Cur_Scale || !Cur_OfficialRate)
    return;

    return "<tr><td>" + Cur_Name + "</td><td>" + Cur_Scale + " " + Cur_Abbreviation + "</td><td>" + Cur_OfficialRate + "</td></tr>";

}).join(""); 

document.getElementById('tableBody').innerHTML = temp;


}

const checkData = async () => {
    let allCurrencies = await getData();
    return allCurrencies; 
}


const BYNRate = () => {
  
   
    renderData();
  
    let updatedDate = setInterval((currentDate) => {
      
       
            renderData();
        
    }, 2000);
   
}

BYNRate();
