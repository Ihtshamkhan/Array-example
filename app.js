let array = [
    [1],
    [1, 4, 6, 3],
    [5, 9, 7],
    [5, 6,]
]

for (let i = 0; i < array.length; i++) {
    console.log(array, [i]);

    for (let j = 0; j < array.length; j++) {
        if (array[i][j] !== undefined) {
            console.log(array[i][j]);
        }

    }

}