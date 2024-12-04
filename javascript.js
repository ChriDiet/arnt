
function handleFormSubmit(event) {
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "34";

   if (kodeInput === riktigKode) {
      alert("Riktig!");
      open("./code_one.html")
   } else {
      alert("Det var ikke den riktige koden!");
   }
   }


function handleFormSubmit2(event) {
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "dette var for lett";
   const kodeInputLower = kodeInput?.toLowerCase();

   if (kodeInputLower == riktigKode) {
      alert("Korrekt!");
      open("./code_two.html")
   } else {
      alert("Det var ikke den riktige koden!");
   }
}

function handleFormSubmit3(event) {
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "julaften";
   const kodeInputLower = kodeInput?.toLowerCase();
   
   if (kodeInputLower == riktigKode) {
      alert("Ikke verst!");
      open("./code_three.html")
   } else {
      alert("Det var ikke den riktige koden!");
   }
}

function handleFormSubmit4(event) {
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "smartass";
   const kodeInputLower = kodeInput?.toLowerCase();
   
   if (kodeInputLower == riktigKode) {
      alert("Denne var kanskje FOR lett?");
      open("./code_four.html")
   } else {
      alert("Det var ikke den riktige koden!");
   }
}



