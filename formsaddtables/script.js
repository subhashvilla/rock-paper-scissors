const form = document.getElementById("form");
const Name = document.getElementById("name");
const rollNo = document.getElementById("roll no");
const email = document.getElementById("email");
const year = document.getElementById("year");
const department = document.getElementById("department");
form.addEventListener("submit", () => {
    console.log(Name.value);
    console.log(rollNo.value);
    console.log(email.value);
    console.log(year.value);
    console.log(department.value);
})