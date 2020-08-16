let date = new Date();
let year = document.querySelector("#year"),
    child_year = year.querySelector("option");
let month = document.querySelector("#month");
function full_Year() {
    for (let i = 1970; i <= date.getFullYear(); i++) {
        year.innerHTML += `<option value="${i}">${i}년</option>`
    }
}
full_Year();

function full_month() {
    for (let i = 1; i <= 12; i++) {
        month.innerHTML += `<option value="${i}">${i}월</option>`
    }
}
full_month();

month.addEventListener("change", full_day);

function full_day() {
    console.log(month.value);
    day.innerHTML = " ";
    if (month.value == 1 || month.value == 3 || month.value == 5 || month.value == 7
        || month.value == 8 || month.value == 10 || month.value == 12) {
        for (let i = 1; i <= 31; i++) {
            day.innerHTML += `<option value="${i}">${i}일</option>`
        }
    }
    else if (month.value == 2) {
        for (let i = 1; i <= 29; i++) {
            day.innerHTML += `<option value="${i}">${i}일</option>`
        }
    }

    else if (month.value == 4 || month.value == 6 || month.value == 9 || month.value == 11) {
        for (let i = 1; i <= 30; i++) {
            day.innerHTML += `<option value="${i}">${i}일</option>`
        }
    }
}


let total_check = document.querySelector("#total_check");
let check_ed = document.querySelectorAll(".check_ed");

console.log(check_ed);
total_check.addEventListener("change", total);
for (var i = 0; i < check_ed.length; i++) {
    check_ed[i].addEventListener("change", sepa_check);
}
function total() {
    if (total_check.checked == true) {
        for (var i = 0; i < check_ed.length; i++) {
            check_ed[i].checked = true;
        }
    }
    else if (total_check.checked == false) {
        for (var i = 0; i < check_ed.length; i++) {
            check_ed[i].checked = false;
        }
    }
}

<<<<<<< HEAD
let check_count  = 0;
function sepa_check() {
    total_check.checked = false;
=======
let check_count = 0;
function sepa_check() {
    total_check.checked = false;

>>>>>>> 5039a4872951080e2e5638fcfff58426c933cd2e
}

let should = document.querySelector("#should");
const clear_btn = document.querySelector("#clear_btn");
const form = document.querySelector("#form");
let input = document.querySelectorAll("input");
clear_btn.addEventListener("click", clear);

<<<<<<< HEAD
console.log(input);

function clear() {

    if (should.checked == true && total_check.checked == true && input[0].value!="" && input[1].value!="" &&
    input[2].value!="" && input[3].value!="") {      //조건추가예정
        form.submit();
    }
    else{
        alert("Fuck");
    }

}

=======
function clear() {
    if (should.checked == true && total_check.checked == true) {      //조건추가예정
        form.submit();
    }
    else{
        console.log("fuck")
    }
}
console.log(input);
>>>>>>> 5039a4872951080e2e5638fcfff58426c933cd2e
