(function () {

    function mehdify(x) {
        // Add your code here

        var xArray = x.toString().split('');

        var value = -1;

        for (var i = xArray.length - 1; i > 0; i--) {
            if (xArray[i] > xArray[i - 1]) {
                value = i - 1;
                break;
            }
        }

        if (value == -1)
            return x;

        var rightPart = xArray.splice(value);

        var removedValue = rightPart.splice(0, 1)[0];

        var swapOutValue = null;
        var indexOfswapOutValue = null;

        for (var i = 0; i < rightPart.length; i++) {
            if (rightPart[i] > removedValue) {
                if (swapOutValue == null || rightPart[i] < swapOutValue) {
                    swapOutValue = rightPart[i];
                    indexOfswapOutValue = i;
                }
            }
        }

        rightPart.splice(indexOfswapOutValue, 1);
        rightPart.push(removedValue);
        rightPart = rightPart.sort();

        var result = xArray.concat(swapOutValue).concat(rightPart).join('');

        if (result < x){
            console.log("Wrong");
            return -1
        }

        return result;
    }

    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = mehdify;
})();