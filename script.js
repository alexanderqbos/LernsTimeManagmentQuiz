<<<<<<< HEAD
function completeForm() {
    let total, odd = 0, even = 0;

    for(i = 1; i <= 20; i++) {
        if((i % 2) > 0) {
            even += document.forms["TMSAform"]["q" + i].valueAsNumber;
        } else {
            odd += document.forms["TMSAform"]["q" + i].valueAsNumber;
        }
    }

    const percentile = [11, 99.5, 98.9, 98.4, 96.8, 96.4, 95.7, 93.1, 92, 89.4, 85.6,
                        85.1, 83.5, 81.4, 79.3, 76.6, 73.9, 70.7, 66, 63.3, 60.1, 55.9,
                        52.1, 47.3, 42.6, 38.3, 36.2, 34, 30.9, 28.7, 25, 23.9, 21.3,
                        20.7, 19.1, 17, 12.8, 10.1, 8.5, 7.4, 5.3, 4.3, 3.2, 2.7, 2.1,
                        1.6, 1.1, 0.5];

    const score = [31, 26 ,24, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8,
                  7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11,
                  -12, -13, -14, -15, -16, -17, -20, -22, -23, -25, -37];

    total = even - odd;

    let result = percentile[score.indexOf(total)];

    let answer = "Score: " + total + ", Percentile: " + result

    document.getElementById("answer").innerHTML = answer;
=======
function completeForm() {
    let total, odd = 0, even = 0;

    for(i = 1; i <= 20; i++) {
        if((i % 2) > 0) {
            even += document.forms["TMSAform"]["q" + i].valueAsNumber;
        } else {
            odd += document.forms["TMSAform"]["q" + i].valueAsNumber;
        }
    }

    let percentile = [11, 99.5, 98.9, 98.4, 96.8, 96.4, 95.7, 93.1, 92, 89.4, 85.6, 85.1, 83.5, 81.4, 79.3, 76.6, 73.9, 70.7, 66, 63.3, 60.1, 55.9, 52.1, 47.3, 42.6, 38.3, 36.2, 34, 30.9, 28.7, 25, 23.9, 21.3, 20.7, 19.1, 17, 12.8, 10.1, 8.5, 7.4, 5.3, 4.3, 3.2, 2.7, 2.1, 1.6, 1.1, 0.5];
    let score = [31, 26 ,24, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -20, -22, -23, -25, -37];

    total = even - odd;

    let result = percentile[score.indexOf(total)];

    console.log(result);
    console.log(total);

    let answer = "Score: " + total + ", Percentile: " + result

    document.getElementById("answer").innerHTML = answer;
>>>>>>> 6d1bca135b496cdf7a9b4df167707a7dacf8c12b
}