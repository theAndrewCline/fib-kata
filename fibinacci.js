function fibonacci(num) {
    
    if (num == "n" || num == "")
        var num = document.getElementById("pos").value;

    if (num) {
        var check = num.split('-')[0];

        if (check == "-") {
            return alert("Don't Enter the negative value")
        }

        if (num == 1) {
            document.getElementById("result").innerHTML = 0;
            return;
        }

        if (num == 2) {
            document.getElementById("result").innerHTML = 1;
            return;
        }


        document.getElementById("result").innerHTML = fibonacci(num - 1) + fibonacci(num - 2);
        return;
    }

}





