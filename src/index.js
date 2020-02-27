exports.min = function min(array) {
    if (array instanceof Array) {
        if (array == "") {
            return 0;
        }
        array.sort((a, b) => {
            return a - b;
        });
        return array[0];
    }
    return 0;
};

exports.max = function max(array) {
    if (array instanceof Array) {
        if (array == "") {
            return 0;
        }
        array.sort((a, b) => {
            return a - b;
        });
        return array[array.length - 1];
    }
    return 0;
};

exports.avg = function avg(array) {
    if (array instanceof Array) {
        if (array == "") {
            return 0;
        }
        let response =
            array.reduce((a, b) => {
                return a + b;
            }) / array.length;

        return response;
    }
    return 0;
};
