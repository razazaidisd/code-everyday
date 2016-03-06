var GetThings = (function () {
    function GetThings(size) {
        this.length = size;
    }
    Object.defineProperty(GetThings.prototype, "mylength", {
        get: function () {
            return this.length;
        },
        set: function (len) {
            this.length = len;
            console.log("the value has been set!");
        },
        enumerable: true,
        configurable: true
    });
    return GetThings;
})();
var things = new GetThings(9);
document.write(things.mylength);
