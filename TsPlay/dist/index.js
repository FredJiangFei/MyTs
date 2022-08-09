"use strict";
let num = 123456789;
console.log(num);
let numbers = [];
let user = [1, 'Fred'];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Small;
console.log(mySize);
function cal(icome, tax = 2021) {
    let rate = 1.3;
    if (tax > 2022)
        return icome * rate;
    return icome * (rate + 0.1);
}
//# sourceMappingURL=index.js.map