var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Melon = /** @class */ (function () {
    function Melon() {
    }
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight, melonSort) {
        var _this = _super.call(this) || this;
        _this.weight = weight;
        _this.melonSort = melonSort;
        return _this;
    }
    Watermelon.prototype.elementIndex = function () {
        return this.weight * this.melonSort.length;
    };
    Watermelon.prototype.toString = function () {
        return "Element: Water\nSort: ".concat(this.melonSort, "\nElement Index: ").concat(this.elementIndex());
    };
    return Watermelon;
}(Melon));
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weight, melonSort) {
        var _this = _super.call(this) || this;
        _this.weight = weight;
        _this.melonSort = melonSort;
        return _this;
    }
    Firemelon.prototype.elementIndex = function () {
        return this.weight * this.melonSort.length;
    };
    Firemelon.prototype.toString = function () {
        return "Element: Fire\nSort: ".concat(this.melonSort, "\nElement Index: ").concat(this.elementIndex());
    };
    return Firemelon;
}(Melon));
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weight, melonSort) {
        var _this = _super.call(this) || this;
        _this.weight = weight;
        _this.melonSort = melonSort;
        return _this;
    }
    Earthmelon.prototype.elementIndex = function () {
        return this.weight * this.melonSort.length;
    };
    Earthmelon.prototype.toString = function () {
        return "Element: Earth\nSort: ".concat(this.melonSort, "\nElement Index: ").concat(this.elementIndex());
    };
    return Earthmelon;
}(Melon));
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weight, melonSort) {
        var _this = _super.call(this) || this;
        _this.weight = weight;
        _this.melonSort = melonSort;
        return _this;
    }
    Airmelon.prototype.elementIndex = function () {
        return this.weight * this.melonSort.length;
    };
    Airmelon.prototype.toString = function () {
        return "Element: Air\nSort: ".concat(this.melonSort, "\nElement Index: ").concat(this.elementIndex());
    };
    return Airmelon;
}(Melon));
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.elements = ["Water", "Fire", "Earth", "Air"];
        return _this;
    }
    Melolemonmelon.prototype.morph = function () {
        var currentElement = this.elements.shift();
        if (currentElement) {
            this.elements.push(currentElement);
        }
    };
    Melolemonmelon.prototype.toString = function () {
        return "Element: ".concat(this.elements[0], "\nSort: ").concat(this.melonSort, "\nElement Index: ").concat(this.elementIndex());
    };
    return Melolemonmelon;
}(Watermelon));
//let test : Melon = new Melon(100, "Test");
//Throws error
var watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
// Element: Water
// Sort: Kingsize
// Element Index: 100
