let ime = document.getElementById('fname').textContent;
let prezime = document.getElementById('lname').textContent;

if(ime === null || ime === ""){
    alert('Niste uneli ime lepo');
}

if(prezime === null || prezime === ""){
    alert('Niste uneli lepo prezime');
}