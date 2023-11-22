let Inbutton= document.querySelector("input");
function insert_Row() {
    //Write your code here
	let table = document.getElementById("sampleTable");
	let tr= document.createElement("tr");
	let tdc1= document.createElement("td");
	let tdc2= document.createElement("td");
	tdc1.innerText="New Cell1";
	tdc2.innerText="New Cell2"
	tr.appendChild(tdc1);
	tr.appendChild(tdc2);
	
	table.insertBefore(tr , table.firstChild);
	
  
  
}
