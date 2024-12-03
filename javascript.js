
function handleFormSubmit(event) {
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "34";

   if (kodeInput === riktigKode) {
      alert("Dette var for lett");
      open("./pages/code_one.html")
   } else {
      alert("Det var ikke den riktige koden!");
   }
   }
