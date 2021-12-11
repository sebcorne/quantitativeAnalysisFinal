var pages=["GradeView", "AddGrade"]
var wrapper= document.createElement("div")
var navi= document.body.querySelector(".nav")
var loginEle= document.body.querySelector(".login")
var mainEle= document.body.querySelector(".main")
var gradeList=[{name:"",grade:""},]
var responseDiv= document.body.querySelector(".response")
var itemsDiv=document.body.querySelector(".items")

var buttonTwo= document.body.querySelector(".buttTwo")
loginEle.appendChild(buttonTwo)
loginEle.innerHTML=""
var buttOne =document.createElement("button")
buttOne.type="button"
buttOne.className="butt"
buttOne.innerHTML="Submit"
loginEle.appendChild(buttOne)

function createNav(){

    var nav=document.createElement("nav")
    for(var i=0; i<pages.length; i++){
        createButton(pages[i])
    }

    navi.appendChild(nav)

    function createButton(pg){
        var butt= document.createElement("button")
        butt.innerHTML=pg
        butt.addEventListener("click",function(){
            navigate(pg)
        })
        nav.appendChild(butt)
    }
}

function createWrapper(){
    var wrapper=document.createElement("div")
    wrapper.classList.add("wrapper")
    document.body.appendChild(wrapper)
}

function navigate(pg){
    if(pg==="GradeView") {
        gradeView()

    }else if(pg==="AddGrade"){
        addGrade()
    }
}

function renderList(){

    itemsDiv.innerHTML=""
    for (var i=0; i<gradeList.length; i++){
        var ele=document.createElement("div")
        ele.innerHTML=" Name: "+gradeList[i].name+" Grade: "+gradeList[i].grade
        itemsDiv.appendChild(ele)
    }

}


function gradeView(){
    mainEle.innerHTML=""
    wrapper.innerHTML=""
    loginEle.innerHTML=""
    renderList()
}



function addGrade(){
    loginEle.innerHTML=""
    mainEle.innerHTML=""
    itemsDiv.innerHTML=""
    var buttonTwo= document.createElement("button")
    buttonTwo.type="button"
    buttonTwo.className="buttTwo"
    buttonTwo.innerHTML="Enter Score"
    loginEle.appendChild(buttonTwo)
    var header= document.createElement("h1")
    wrapper.innerHTML=""
    var inputName= document.createElement("input")
    inputName.type="text"
    inputName.className="studentName"
    inputName.placeholder="Student Name"
    var inputScore= document.createElement("input")
    inputScore.type="text"
    inputScore.className="gradeScore"
    inputScore.placeholder="Grade (0-100)"
    document.body.querySelector(".buttTwo").addEventListener("click", function(){
        var inputTheName= document.body.querySelector(".studentName").value
        var inputTheScore= document.body.querySelector(".gradeScore").value
        var theScore= parseFloat(inputTheScore)
        if ((isNaN(inputTheName)) && (isNaN(theScore)=== false) && (theScore<=100) && (theScore>=0)){
            responseDiv.innerHTML=""
            gradeList.push({name:inputTheName, grade:inputTheScore})

            renderList()
            gradeView()
        } else {
            responseDiv.innerHTML="hey uhh, you messed something up when you typed in your grade and name. Might wanna double check them again."
        }

    })
    mainEle.appendChild(header)

    mainEle.appendChild(inputName)
    mainEle.appendChild(inputScore)
    //header.innerHTML="adddd"
    //wrapper.appendChild(header)
}

function startup() {

    var wrapper=document.createElement("div")

    var inputUsername=document.createElement("input")
    inputUsername.className="input_user"
    inputUsername.placeholder="Username"
    var inputPassword=document.createElement("input")
    inputPassword.className="input_pass"
    inputPassword.placeholder="Password"
    inputPassword.type="password"

    document.body.querySelector(".butt").addEventListener("click", function() {

        var textValue = document.body.querySelector(".input_user").value;
        var textValuePass = document.body.querySelector(".input_pass").value;
        if (textValue==="cool"&&textValuePass==="password") {
            loginEle.innerHTML=""
            wrapper.innerHTML=""
            responseDiv.innerHTML = ""
            textValue.innerHTML=""

            createNav()
            createWrapper()
            gradeView()

        } else{
            responseDiv.innerHTML="One of these is not correct my friend, try again"
        }
    })
loginEle.appendChild(inputUsername)
loginEle.appendChild(inputPassword)
loginEle.appendChild(buttOne)
}

startup()
