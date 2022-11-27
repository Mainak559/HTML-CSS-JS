

// CLEAR Button

let btnClear = document.querySelector('button');
let inputs = document.querySelectorAll('input');

btnClear.addEventListene('click', () => {

    inputs.forEach(input => input.value = '');
});




//Validation



function validateName(id) {
    var element = document.getElementById(id);
    var regExp = /^[a-zA-Z ]+$/;
    if (!regExp.test(element.value)) {
        alert("Enter Valid Name");
        element.style.border = "2.5px solid red";
        return false;
    }
    element.style.border = "2.5px solid darkgreen";
}


function validateEmail(id) {
    var element = document.getElementById(id);
    var regExp = /^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/;
    if (!regExp.test(element.value)) {
        alert("Enter valid email");
        element.style.border = "2.5px solid red";

        return false;
    }
    element.style.border = "2.5px solid darkgreen";
}


function validateWebsite(id) {
    var element = document.getElementById(id);
    var element_value = document.getElementById(id).value;


    let websitePattern = /[w]{3,3}\.+[a-zA-z0-9]+\.+[a-z]{2,3}/;

    if (!element_value.match(websitePattern)) {
        alert("Enter valid website");
        element.style.border = "2.5px solid red";
        return false;
    }
    element.style.border = "2.5px solid darkgreen";



}



function validateImagelink(id) {
    var element = document.getElementById(id);

    if (!element.value.length > 0) {
        alert("Enter valid Imagelink");
        element.style.border = "2.5px solid red";

        return false;
    }
    element.style.border = "2.5px solid darkgreen";
}

function validateGender() {

    if (!document.getElementById("gender").checked) {
        alert("Please Select your gender.");
        return false;
    }

}

function validateSkill() {

    if ((document.getElementById("java").checked == false) && (document.getElementById("html").checke.checked == false) && (document.getElementById("css").checked == false)) {
        alert("Please select one skill");
        return false;
    }
}




//ADDING ROWs in Table Dynamically

function displayDetails() {

    var nameList = [];
    var genderList = [];
    var emailList = [];
    var websiteList = [];
    var skillList1 = [];
    var skillList2 = [];
    var skillList3 = [];
    var imageLinkList = [];
    var n = 0;
    var x = 1;

    var skill1 = document.getElementById('java');
    var skill2 = document.getElementById('html');
    var skill3 = document.getElementById('css');
    nameList[n] = document.getElementById('name').value;
    genderList[n] = document.querySelector('input[name="gender"]:checked').value;
    emailList[n] = document.getElementById('email').value;
    websiteList[n] = document.getElementById('website').value;
    if (java.checked) {
        skillList1[n] = java.value;
    }
    else {
        skillList1[n] = "";
    }
    if (html.checked) {
        skillList2[n] = html.value;
    }
    else {
        skillList2[n] = "";
    }
    if (css.checked) {
        skillList3[n] = css.value;
    }
    else {
        skillList3[n] = "";
    }
    imageLinkList[n] = document.getElementById('imagelink').value;

    var table = document.getElementById('show');
    var row = table.insertRow(x);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);


    if ((nameList[n] == "") || (genderList[n] == "")
        || (emailList[n] == "")
        || (websiteList[n] == "")
        || (imageLinkList[n] == "")) {
        alert("Please fill all the boxes");
        return false;
    }



    cell1.innerHTML = nameList[n] + '<br>' + genderList[n] + '<br>' + emailList[n] +
        '<br> <a href=' + '"' + websiteList[n] + '"' + 'target="_blank">' + websiteList[n] + '</a> <br>' +
        skillList1[n] + " " + skillList2[n] + " " + skillList3[n];



    imageLinkList[n].height = "100";
    imageLinkList[n].width = "100";

    cell2.innerHTML = '<img class="picture" src=' + '"' + imageLinkList[n] + '"' + '>';
    n++;
    x++;
}




