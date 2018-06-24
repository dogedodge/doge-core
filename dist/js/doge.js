var doge =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/drawable/Drawable.ts":
/*!**********************************!*\
  !*** ./src/drawable/Drawable.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Drawable = /** @class */ (function () {
    function Drawable(
    /** width without scale */
    _width, 
    /** height without scale */
    _height) {
        if (_width === void 0) { _width = 0; }
        if (_height === void 0) { _height = 0; }
        this._width = _width;
        this._height = _height;
        this.x = 0;
        this.y = 0;
        // stageX: number = 0;
        // stageY: number = 0;
        this.rotation = 0;
        this.anchorX = 0;
        this.anchorY = 0;
        this.scaleX = 0;
        this.scaleY = 0;
    }
    Drawable.prototype.draw = function (ctx) {
        // if (!this.parent) {
        //     // only stage has no parent
        //     this.stageX = 0;
        //     this.stageY = 0;
        // } else {
        //     this.stageX = this.parent.stageX + this.x;
        //     this.stageY = this.parent.stageY + this.y;
        // }
        ctx.save();
        // todo: use transform instead
        ctx.translate(this.x, this.y);
        if (this.rotation % 360 !== 0) {
            ctx.rotate(this.rotation * Math.PI / 180);
        }
        ctx.translate(-this.anchorX * this.scaleX, -this.anchorY * this.scaleY);
        ctx.scale(this.scaleX, this.scaleY);
        this.onDraw(ctx);
        ctx.restore();
    };
    /**
     * if only scaleX provided, x/y all scale as scaleX
     * @param scaleX
     * @param scaleY
     */
    Drawable.prototype.scale = function (scaleX, scaleY) {
        this.scaleX = scaleX;
        if (scaleY === void 0) {
            this.scaleY = this.scaleX;
        }
        else {
            this.scaleY = scaleY;
        }
    };
    Object.defineProperty(Drawable.prototype, "width", {
        get: function () {
            return this._width * this.scaleX;
        },
        set: function (w) {
            this._width = w;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Drawable.prototype, "height", {
        get: function () {
            return this._height * this.scaleY;
        },
        set: function (h) {
            this._height = h;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * callback to override
     */
    Drawable.prototype.onDraw = function (ctx) {
    };
    return Drawable;
}());
exports.Drawable = Drawable;


/***/ }),

/***/ "./src/drawable/DrawableSet.ts":
/*!*************************************!*\
  !*** ./src/drawable/DrawableSet.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Drawable_1 = __webpack_require__(/*! ./Drawable */ "./src/drawable/Drawable.ts");
var DrawableSet = /** @class */ (function (_super) {
    __extends(DrawableSet, _super);
    function DrawableSet(width, height) {
        var _this = _super.call(this, width, height) || this;
        _this.childSet = new Set();
        return _this;
    }
    DrawableSet.prototype.add = function (child) {
        child.parent = this;
        this.childSet.add(child);
    };
    DrawableSet.prototype.clear = function () {
        this.childSet.forEach(function (child) { return child.parent = void 0; });
        this.childSet.clear();
    };
    DrawableSet.prototype.delete = function (child) {
        child.parent = void 0;
        this.childSet.delete(child);
    };
    DrawableSet.prototype.onDraw = function (ctx) {
        _super.prototype.onDraw.call(this, ctx);
        this.childSet.forEach(function (child) { return child.draw(ctx); });
    };
    return DrawableSet;
}(Drawable_1.Drawable));
exports.DrawableSet = DrawableSet;


/***/ }),

/***/ "./src/drawable/Graphic.ts":
/*!*********************************!*\
  !*** ./src/drawable/Graphic.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Drawable_1 = __webpack_require__(/*! ./Drawable */ "./src/drawable/Drawable.ts");
var Graphic = /** @class */ (function (_super) {
    __extends(Graphic, _super);
    function Graphic(_onDraw, width, height) {
        var _this = _super.call(this, width, height) || this;
        _this._onDraw = _onDraw;
        return _this;
    }
    Graphic.prototype.onDraw = function (ctx) {
        this._onDraw.call(this, ctx);
    };
    return Graphic;
}(Drawable_1.Drawable));
exports.Graphic = Graphic;


/***/ }),

/***/ "./src/drawable/Stage.ts":
/*!*******************************!*\
  !*** ./src/drawable/Stage.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DrawableSet_1 = __webpack_require__(/*! ./DrawableSet */ "./src/drawable/DrawableSet.ts");
var Stage = /** @class */ (function (_super) {
    __extends(Stage, _super);
    function Stage(canvas, width, height) {
        var _this = _super.call(this, width, height) || this;
        _this.canvas = canvas;
        _this.ctx = canvas.getContext('2d');
        return _this;
    }
    Stage.prototype.draw = function () {
        _super.prototype.draw.call(this, this.ctx);
    };
    Stage.prototype.clearFrame = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    return Stage;
}(DrawableSet_1.DrawableSet));
exports.Stage = Stage;


/***/ }),

/***/ "./src/drawable/index.ts":
/*!*******************************!*\
  !*** ./src/drawable/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./Drawable */ "./src/drawable/Drawable.ts"));
__export(__webpack_require__(/*! ./DrawableSet */ "./src/drawable/DrawableSet.ts"));
__export(__webpack_require__(/*! ./Graphic */ "./src/drawable/Graphic.ts"));
__export(__webpack_require__(/*! ./Stage */ "./src/drawable/Stage.ts"));


/***/ }),

/***/ "./src/functions/index.ts":
/*!********************************!*\
  !*** ./src/functions/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./run */ "./src/functions/run.ts"));


/***/ }),

/***/ "./src/functions/run.ts":
/*!******************************!*\
  !*** ./src/functions/run.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var drawable_1 = __webpack_require__(/*! ../drawable */ "./src/drawable/index.ts");
function run(canvas) {
    if (typeof canvas === 'string') {
        canvas = document.querySelector(canvas);
    }
    var stage = new drawable_1.Stage(canvas, canvas.width, canvas.height);
    return stage;
}
exports.run = run;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./utils/Group */ "./src/utils/Group.ts"));
__export(__webpack_require__(/*! ./drawable */ "./src/drawable/index.ts"));
__export(__webpack_require__(/*! ./functions */ "./src/functions/index.ts"));


/***/ }),

/***/ "./src/utils/Group.ts":
/*!****************************!*\
  !*** ./src/utils/Group.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Group = /** @class */ (function () {
    function Group(children) {
        if (children === void 0) { children = []; }
        this.children = children;
    }
    Group.prototype.add = function (child) {
        this.children.push(child);
        return this;
    };
    Group.prototype.remove = function (child) {
        var index = this.children.indexOf(child);
        if (index >= 0) {
            this.children.splice(index, 1);
        }
        else {
            console.warn('child not found', child);
        }
        return this;
    };
    Group.prototype.removeAll = function () {
        this.children = [];
        return this;
    };
    Object.defineProperty(Group.prototype, "size", {
        get: function () {
            return this.children.length;
        },
        enumerable: true,
        configurable: true
    });
    Group.prototype.forEach = function (callbackFn, thisArg) {
        this.children.slice().forEach(callbackFn, thisArg);
    };
    return Group;
}());
exports.Group = Group;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2dlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RvZ2UvLi9zcmMvZHJhd2FibGUvRHJhd2FibGUudHMiLCJ3ZWJwYWNrOi8vZG9nZS8uL3NyYy9kcmF3YWJsZS9EcmF3YWJsZVNldC50cyIsIndlYnBhY2s6Ly9kb2dlLy4vc3JjL2RyYXdhYmxlL0dyYXBoaWMudHMiLCJ3ZWJwYWNrOi8vZG9nZS8uL3NyYy9kcmF3YWJsZS9TdGFnZS50cyIsIndlYnBhY2s6Ly9kb2dlLy4vc3JjL2RyYXdhYmxlL2luZGV4LnRzIiwid2VicGFjazovL2RvZ2UvLi9zcmMvZnVuY3Rpb25zL2luZGV4LnRzIiwid2VicGFjazovL2RvZ2UvLi9zcmMvZnVuY3Rpb25zL3J1bi50cyIsIndlYnBhY2s6Ly9kb2dlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2RvZ2UvLi9zcmMvdXRpbHMvR3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwr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Q0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDO0FBN0JZLHNCQUFLIiwiZmlsZSI6ImRvZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImV4cG9ydCBjbGFzcyBEcmF3YWJsZSB7XG4gICAgcGFyZW50OiBEcmF3YWJsZTtcbiAgICB4OiBudW1iZXIgPSAwO1xuICAgIHk6IG51bWJlciA9IDA7XG4gICAgLy8gc3RhZ2VYOiBudW1iZXIgPSAwO1xuICAgIC8vIHN0YWdlWTogbnVtYmVyID0gMDtcbiAgICByb3RhdGlvbjogbnVtYmVyID0gMDtcbiAgICBhbmNob3JYOiBudW1iZXIgPSAwO1xuICAgIGFuY2hvclk6IG51bWJlciA9IDA7XG4gICAgc2NhbGVYOiBudW1iZXIgPSAwO1xuICAgIHNjYWxlWTogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICAvKiogd2lkdGggd2l0aG91dCBzY2FsZSAqL1xuICAgICAgICBwcm90ZWN0ZWQgX3dpZHRoOiBudW1iZXIgPSAwLFxuICAgICAgICAvKiogaGVpZ2h0IHdpdGhvdXQgc2NhbGUgKi9cbiAgICAgICAgcHJvdGVjdGVkIF9oZWlnaHQ6IG51bWJlciA9IDBcbiAgICApIHtcblxuICAgIH1cblxuICAgIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgLy8gaWYgKCF0aGlzLnBhcmVudCkge1xuICAgICAgICAvLyAgICAgLy8gb25seSBzdGFnZSBoYXMgbm8gcGFyZW50XG4gICAgICAgIC8vICAgICB0aGlzLnN0YWdlWCA9IDA7XG4gICAgICAgIC8vICAgICB0aGlzLnN0YWdlWSA9IDA7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICB0aGlzLnN0YWdlWCA9IHRoaXMucGFyZW50LnN0YWdlWCArIHRoaXMueDtcbiAgICAgICAgLy8gICAgIHRoaXMuc3RhZ2VZID0gdGhpcy5wYXJlbnQuc3RhZ2VZICsgdGhpcy55O1xuICAgICAgICAvLyB9XG4gICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgIC8vIHRvZG86IHVzZSB0cmFuc2Zvcm0gaW5zdGVhZFxuICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgaWYgKHRoaXMucm90YXRpb24gJSAzNjAgIT09IDApIHtcbiAgICAgICAgICAgIGN0eC5yb3RhdGUodGhpcy5yb3RhdGlvbiAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICB9XG4gICAgICAgIGN0eC50cmFuc2xhdGUoLXRoaXMuYW5jaG9yWCAqIHRoaXMuc2NhbGVYLCAtdGhpcy5hbmNob3JZICogdGhpcy5zY2FsZVkpO1xuICAgICAgICBjdHguc2NhbGUodGhpcy5zY2FsZVgsIHRoaXMuc2NhbGVZKTtcblxuICAgICAgICB0aGlzLm9uRHJhdyhjdHgpO1xuXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaWYgb25seSBzY2FsZVggcHJvdmlkZWQsIHgveSBhbGwgc2NhbGUgYXMgc2NhbGVYXG4gICAgICogQHBhcmFtIHNjYWxlWCBcbiAgICAgKiBAcGFyYW0gc2NhbGVZIFxuICAgICAqL1xuICAgIHNjYWxlKHNjYWxlWDogbnVtYmVyLCBzY2FsZVk/OiBudW1iZXIpIHtcblxuICAgICAgICB0aGlzLnNjYWxlWCA9IHNjYWxlWDtcblxuICAgICAgICBpZiAoc2NhbGVZID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGVZID0gdGhpcy5zY2FsZVg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlWSA9IHNjYWxlWVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0IHdpZHRoKHc6IG51bWJlcikge1xuICAgICAgICB0aGlzLl93aWR0aCA9IHc7XG4gICAgfVxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2lkdGggKiB0aGlzLnNjYWxlWDtcbiAgICB9XG5cbiAgICBzZXQgaGVpZ2h0KGg6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSBoO1xuICAgIH1cbiAgICBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oZWlnaHQgKiB0aGlzLnNjYWxlWTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjYWxsYmFjayB0byBvdmVycmlkZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvbkRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcblxuICAgIH1cbn0iLCJpbXBvcnQgeyBEcmF3YWJsZSB9IGZyb20gXCIuL0RyYXdhYmxlXCI7XG5cbmV4cG9ydCBjbGFzcyBEcmF3YWJsZVNldCBleHRlbmRzIERyYXdhYmxlIHtcbiAgICBwcm90ZWN0ZWQgY2hpbGRTZXQ6IFNldDxEcmF3YWJsZT47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgd2lkdGg/OiBudW1iZXIsXG4gICAgICAgIGhlaWdodD86IG51bWJlclxuICAgICkge1xuICAgICAgICBzdXBlcih3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jaGlsZFNldCA9IG5ldyBTZXQoKTtcbiAgICB9XG5cbiAgICBhZGQoY2hpbGQ6IERyYXdhYmxlKSB7XG4gICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2hpbGRTZXQuYWRkKGNoaWxkKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5jaGlsZFNldC5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnBhcmVudCA9IHZvaWQgMCk7XG4gICAgICAgIHRoaXMuY2hpbGRTZXQuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBkZWxldGUoY2hpbGQ6IERyYXdhYmxlKSB7XG4gICAgICAgIGNoaWxkLnBhcmVudCA9IHZvaWQgMDtcbiAgICAgICAgdGhpcy5jaGlsZFNldC5kZWxldGUoY2hpbGQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgc3VwZXIub25EcmF3KGN0eCk7XG4gICAgICAgIHRoaXMuY2hpbGRTZXQuZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5kcmF3KGN0eCkpXG4gICAgfVxufSIsImltcG9ydCB7IERyYXdhYmxlIH0gZnJvbSBcIi4vRHJhd2FibGVcIjtcblxuZXhwb3J0IGNsYXNzIEdyYXBoaWMgZXh0ZW5kcyBEcmF3YWJsZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX29uRHJhdzogKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB2b2lkLFxuICAgICAgICB3aWR0aD86IG51bWJlcixcbiAgICAgICAgaGVpZ2h0PzogbnVtYmVyXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgdGhpcy5fb25EcmF3LmNhbGwodGhpcywgY3R4KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRHJhd2FibGVTZXQgfSBmcm9tIFwiLi9EcmF3YWJsZVNldFwiO1xuXG5leHBvcnQgY2xhc3MgU3RhZ2UgZXh0ZW5kcyBEcmF3YWJsZVNldCB7XG4gICAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuICAgICAgICB3aWR0aD86IG51bWJlcixcbiAgICAgICAgaGVpZ2h0PzogbnVtYmVyXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHN1cGVyLmRyYXcodGhpcy5jdHgpO1xuICAgIH1cblxuICAgIGNsZWFyRnJhbWUoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9EcmF3YWJsZSc7XG5leHBvcnQgKiBmcm9tICcuL0RyYXdhYmxlU2V0JztcbmV4cG9ydCAqIGZyb20gJy4vR3JhcGhpYyc7XG5leHBvcnQgKiBmcm9tICcuL1N0YWdlJzsiLCJleHBvcnQgKiBmcm9tICcuL3J1bic7IiwiaW1wb3J0IHsgU3RhZ2UgfSBmcm9tIFwiLi4vZHJhd2FibGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bihjYW52YXM6IHN0cmluZyB8IEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgaWYgKHR5cGVvZiBjYW52YXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2FudmFzKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICB9XG4gICAgY29uc3Qgc3RhZ2UgPSBuZXcgU3RhZ2UoY2FudmFzLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIHJldHVybiBzdGFnZTtcbn0iLCJleHBvcnQgKiBmcm9tICcuL3V0aWxzL0dyb3VwJztcbmV4cG9ydCAqIGZyb20gJy4vZHJhd2FibGUnXG5leHBvcnQgKiBmcm9tICcuL2Z1bmN0aW9ucyc7IiwiZXhwb3J0IGNsYXNzIEdyb3VwPFQ+e1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hpbGRyZW46IFRbXSA9IFtdKSB7IH1cblxuICAgIHB1YmxpYyBhZGQoY2hpbGQ6IFQpOiBHcm91cDxUPiB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmUoY2hpbGQ6IFQpOiBHcm91cDxUPiB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ2NoaWxkIG5vdCBmb3VuZCcsIGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcHVibGljIHJlbW92ZUFsbCgpOiBHcm91cDxUPiB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBzaXplKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZm9yRWFjaChjYWxsYmFja0ZuOiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIsIGFycmF5OiBUW10pID0+IHZvaWQsIHRoaXNBcmc6IGFueSkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnNsaWNlKCkuZm9yRWFjaChjYWxsYmFja0ZuLCB0aGlzQXJnKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==