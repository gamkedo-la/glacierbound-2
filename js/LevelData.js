var arcticExterior = {
    grid: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 7, 7, 7, 7, 7, 7, 7, 7],
        [1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 6, 7, 0, 0, 7, 0, 0, 0, 7],
        [1, 0, 6, 0, 6, 0, 6, 6, 6, 6, 0, 6, 7, 0, 0, 0, 0, 0, 7, 7],
        [9, 0, 0, 0, 6, 7, 0, 0, 7, 6, 0, 0, 6, 0, 6, 7, 7, 0, 0, 7],
        [9, 9, 0, 0, 6, 6, 0, 6, 6, 6, 0, 0, 0, 0, 0, 6, 7, 7, 0, 7],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 6, 7, 0, 0, 7],
        [9, 9, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 2, 2, 0, 0, 6, 7, 0, 7],
        [9, 0, 0, 0, 7, 7, 7, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 6, 7, 7],
        [1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 4, 3, 0, 0, 0, 0, 0, 7, 0, 0, 5, 5, 5, 5, 5, 5],
        [2, 0, 3, 0, 0, 0, 3, 4, 0, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 5],
        [2, 0, 0, 4, 0, 0, 0, 0, 0, 3, 0, 0, 5, 0, 0, 5, 0, 0, 5, 0],
        [2, 0, 0, 3, 3, 4, 0, 0, 3, 3, 0, 5, 0, 5, 5, 0, 5, 0, 0, 5],
        [2, 4, 0, 0, 3, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 5],
        [2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    ]
}

var shipInterior = {
    grid: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 9, 9, 8, 9, 8, 9, 9, 9, 8, 9, 9, 9, 9, 8, 9, 9, 9],
        [0, 0, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 9, 0, 0, 0, 0, 0, 9],
        [0, 0, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 9, 0, 9, 0, 8],
        [9, 8, 8, 9, 9, 0, 0, 0, 9, 9, 0, 0, 0, 9, 0, 0, 0, 0, 0, 9],
        [8, 0, 0, 0, 9, 9, 0, 9, 9, 9, 9, 9, 0, 9, 9, 0, 0, 0, 9, 9],
        [8, 0, 0, 0, 0, 9, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 9],
        [8, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 0, 9, 0, 9, 0, 9, 0, 8],
        [8, 0, 0, 0, 0, 9, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 9],
        [8, 0, 0, 0, 9, 9, 0, 9, 9, 9, 9, 9, 0, 9, 9, 0, 0, 0, 9, 9],
        [9, 8, 8, 9, 9, 0, 0, 0, 9, 9, 0, 0, 0, 9, 0, 0, 0, 0, 0, 9],
        [0, 0, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 9, 0, 9, 0, 8],
        [0, 0, 0, 9, 0, 0, 0, 0, 0, 9, 0, 0, 0, 9, 0, 0, 0, 0, 0, 9],
        [0, 0, 0, 9, 9, 8, 9, 8, 9, 9, 9, 8, 9, 9, 9, 9, 8, 9, 9, 9],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
}

var empty = {
    grid: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
}