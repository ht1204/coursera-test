const loadFunction = () => {
    document.getElementsByTagName('p')[0].onclick = show
    document.getElementsByTagName('h1')[0].onclick = showFromH1
    document.getElementById("btnID").onclick = showAlertbtn
    document.getElementById("tblTest").style.display = "none"
    document.getElementById("paragraph").style.display = "none"
    document.getElementById("hParagraph").style.display = "none"
}


const show = () => {
    alert('Hi there')
    document.getElementById("tblTest").style.display = "none"
    document.getElementById("paragraph").style.display = "inline-block"
    document.getElementById("hParagraph").style.display = "none"
}

const showFromH1 = () => {
    alert("Hi, I'm a h1 tag")
    document.getElementById("tblTest").style.display = "none"
    document.getElementById("hParagraph").style.display = "inline-block"
    document.getElementById("paragraph").style.display = "none"
}

const showAlertbtn = () => {
    alert("Hi, I'm a button")
    document.getElementById("tblTest").style.display = "inline-block"
    document.getElementById("paragraph").style.display = "none"
    document.getElementById("hParagraph").style.display = "none"
}