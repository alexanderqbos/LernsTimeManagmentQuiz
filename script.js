function completeForm() {
    let total, odd = 0, even = 0, x = document.forms[0];

    for(let i = 0; i < x.length; i++) {
        console.log(x[i].checked);
        if(x[i].checked) {
            if ((i % 2) > 0) {
                even += parseInt(x[i].value);
            } else {
                odd += parseInt(x[i].value);
            }
        }
    }

    let percentile = [100, 99.5, 98.9, 98.4, 96.8, 96.4, 95.7, 93.1, 92, 89.4, 85.6, 85.1, 83.5, 81.4, 79.3, 76.6, 73.9, 70.7, 66, 63.3, 60.1, 55.9, 52.1, 47.3, 42.6, 38.3, 36.2, 34, 30.9, 28.7, 25, 23.9, 21.3, 20.7, 19.1, 17, 12.8, 10.1, 8.5, 7.4, 5.3, 4.3, 3.2, 2.7, 2.1, 1.6, 1.1, 0.5];
    let score = [31, 26 ,24, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -20, -22, -23, -25, -37];

    total = even - odd;

    console.log(even);
    console.log(odd);

    let result = percentile[score.indexOf(total)];

    if(isNaN(result)) result = 0;
    if(isNaN(total)) total = 0;

    document.getElementById("answer").innerHTML = "Score: " + total + ", Percentile: " + result;
}