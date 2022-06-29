/*NOTES
 1. Variables
 2. functions
 3. eventS
 4. document.= look at the entire HTML page for the specific ID listed here --->getElementById
 5. Create an array to store students name
 */


//Global Variable
let id=0;
//let students = an array

//getting the value from the input from the "add" button on the HTML----<input type="text" id="studentName">
function addStudent(){
    let studentName = document.getElementById('studentName').value;
    //to check and make sure a name was entered into the box
    if(studentName === ""){
        alert("Please enter a name");
    }else{
    //console.log(studentName);  used to test and show the names showing n the console
    displayStudent(studentName);
    document.getElementById('studentName').value="";//used to clear the input box for student name
}
}
function deleteStudent(id){
    document.getElementById(id).remove();
}

//function used to display the input from the "addStudent" function after the "add" button is clicked.
function displayStudent(student){
    id++;
    document.getElementById('student-list').innerHTML+=`
    <li id="${id}">
    <div><i class="fa-solid fa-bars"></i> ${student}</div> 
    <button onclick="deleteStudent(${id})"><i class="fa-solid fa-trash-can"></i></button>
    </li>`;
//This is to diplay the list of studends names entered in the box, added the <li></li> to ensure the names are lised and not replaced/next to each other.
    
}