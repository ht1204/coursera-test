const loadFunction = () => {
    document.getElementsByTagName('p')[0].onclick = show
    document.getElementById("btnID").onclick = showAlertbtn
    document.getElementById("tblTest").style.display = "none"
}


const show = () => {
    alert('Hi there')
    document.getElementById("tblTest").style.display = "none"
}

const showAlertbtn = () => {
    alert("Hi, I'm a button")
    document.getElementById("tblTest").style.display = "inline-block"
}