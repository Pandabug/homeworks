const MaxSize = 5;

function array(){
    var number;
    var a = [MaxSize];

    // do{
        number = parseInt(prompt("Input number: "));
    // } while (number != 0);

    for (var i=0; i<number; i++)
        a[i] = Math.floor(50 * Math.random()) + 1;
        
    print(a, number);
}

function print(a, number){
    document.getElementById('out').innerHTML = "<table><tr><td>" + a.toString() + "</td></tr></table>";
    document.getElementById("outMax").innerHTML = Math.max(...a);
}