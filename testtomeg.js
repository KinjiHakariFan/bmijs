function index() {
    var m = document.getElementById("magass").value
    m = Number(m)
    var t = document.getElementById("test").value
    t = Number(t)
    m = m/100
    var szamol = t/(m*m)
    document.getElementById("kiiras").innerHTML = Math.round(szamol*100)/100
}