fs = require('fs');

fs.readFile('input-day01.txt', 'utf8', (error, data) => {
    //console.log(data);

    let elves = [];
    let index = 0;

    elves[index] = 0;

    data.split('\n')
        .forEach(line => {
            if (line === '') {
                index ++;
                elves[index] = 0;
            } else {
                let val = parseInt(line, 10);
                elves[index] = elves[index] + val;
            }
        });
    elves = elves.filter(x => !isNaN(x)).filter(x => x !== 0);


    let max = Math.max(...elves);
    console.log('max elf: ', max);

    let maxSum = 0;
    for (let i = 0; i < 3; i++) {
        let max = Math.max(...elves);
        maxSum += max;
        let index2BeCut = elves.indexOf(max);
        elves.splice(index2BeCut, 1);
    }
    console.log('max 3 elves: ', maxSum);
});
