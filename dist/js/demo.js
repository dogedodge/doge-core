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
/******/ 	return __webpack_require__(__webpack_require__.s = "./demo/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demo/index.ts":
/*!***********************!*\
  !*** ./demo/index.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var doge = __webpack_require__(/*! ../src */ "./src/index.ts");
var stage = doge.run('#stage');
console.log('stage', stage);
var graphic = new doge.Graphic(function (ctx) {
    ctx.beginPath();
    ctx.rect(0, 0, stage.width, stage.height);
    ctx.stroke();
});
stage.add(graphic);
stage.draw();


/***/ }),

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
        this.scaleX = 1;
        this.scaleY = 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGVtby9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2FibGUvRHJhd2FibGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdhYmxlL0RyYXdhYmxlU2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9kcmF3YWJsZS9HcmFwaGljLnRzIiwid2VicGFjazovLy8uL3NyYy9kcmF3YWJsZS9TdGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2FibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL3J1bi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0dyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJI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QUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDMUM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ00seUJBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsc0JBQVcsdUJBQUk7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFFTSx1QkFBTyxHQUFkLFVBQWUsVUFBeUQsRUFBRSxPQUFZO1FBQ2xGLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0wsWUFBQztBQUFELENBQUM7QUE3Qlksc0JBQUsiLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGVtby9pbmRleC50c1wiKTtcbiIsImltcG9ydCAqIGFzIGRvZ2UgZnJvbSAnLi4vc3JjJztcblxuY29uc3Qgc3RhZ2UgPSBkb2dlLnJ1bignI3N0YWdlJyk7XG5jb25zb2xlLmxvZygnc3RhZ2UnLCBzdGFnZSk7XG5cbmNvbnN0IGdyYXBoaWMgPSBuZXcgZG9nZS5HcmFwaGljKChjdHgpID0+IHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LnJlY3QoMCwgMCwgc3RhZ2Uud2lkdGgsIHN0YWdlLmhlaWdodCk7XG4gICAgY3R4LnN0cm9rZSgpO1xufSk7XG5zdGFnZS5hZGQoZ3JhcGhpYyk7XG5cbnN0YWdlLmRyYXcoKTsiLCJleHBvcnQgY2xhc3MgRHJhd2FibGUge1xuICAgIHBhcmVudDogRHJhd2FibGU7XG4gICAgeDogbnVtYmVyID0gMDtcbiAgICB5OiBudW1iZXIgPSAwO1xuICAgIC8vIHN0YWdlWDogbnVtYmVyID0gMDtcbiAgICAvLyBzdGFnZVk6IG51bWJlciA9IDA7XG4gICAgcm90YXRpb246IG51bWJlciA9IDA7XG4gICAgYW5jaG9yWDogbnVtYmVyID0gMDtcbiAgICBhbmNob3JZOiBudW1iZXIgPSAwO1xuICAgIHNjYWxlWDogbnVtYmVyID0gMTtcbiAgICBzY2FsZVk6IG51bWJlciA9IDE7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgLyoqIHdpZHRoIHdpdGhvdXQgc2NhbGUgKi9cbiAgICAgICAgcHJvdGVjdGVkIF93aWR0aDogbnVtYmVyID0gMCxcbiAgICAgICAgLyoqIGhlaWdodCB3aXRob3V0IHNjYWxlICovXG4gICAgICAgIHByb3RlY3RlZCBfaGVpZ2h0OiBudW1iZXIgPSAwXG4gICAgKSB7XG5cbiAgICB9XG5cbiAgICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIC8vIGlmICghdGhpcy5wYXJlbnQpIHtcbiAgICAgICAgLy8gICAgIC8vIG9ubHkgc3RhZ2UgaGFzIG5vIHBhcmVudFxuICAgICAgICAvLyAgICAgdGhpcy5zdGFnZVggPSAwO1xuICAgICAgICAvLyAgICAgdGhpcy5zdGFnZVkgPSAwO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgdGhpcy5zdGFnZVggPSB0aGlzLnBhcmVudC5zdGFnZVggKyB0aGlzLng7XG4gICAgICAgIC8vICAgICB0aGlzLnN0YWdlWSA9IHRoaXMucGFyZW50LnN0YWdlWSArIHRoaXMueTtcbiAgICAgICAgLy8gfVxuICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICAvLyB0b2RvOiB1c2UgdHJhbnNmb3JtIGluc3RlYWRcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgICAgIGlmICh0aGlzLnJvdGF0aW9uICUgMzYwICE9PSAwKSB7XG4gICAgICAgICAgICBjdHgucm90YXRlKHRoaXMucm90YXRpb24gKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgfVxuICAgICAgICBjdHgudHJhbnNsYXRlKC10aGlzLmFuY2hvclggKiB0aGlzLnNjYWxlWCwgLXRoaXMuYW5jaG9yWSAqIHRoaXMuc2NhbGVZKTtcbiAgICAgICAgY3R4LnNjYWxlKHRoaXMuc2NhbGVYLCB0aGlzLnNjYWxlWSk7XG5cbiAgICAgICAgdGhpcy5vbkRyYXcoY3R4KTtcblxuICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGlmIG9ubHkgc2NhbGVYIHByb3ZpZGVkLCB4L3kgYWxsIHNjYWxlIGFzIHNjYWxlWFxuICAgICAqIEBwYXJhbSBzY2FsZVggXG4gICAgICogQHBhcmFtIHNjYWxlWSBcbiAgICAgKi9cbiAgICBzY2FsZShzY2FsZVg6IG51bWJlciwgc2NhbGVZPzogbnVtYmVyKSB7XG5cbiAgICAgICAgdGhpcy5zY2FsZVggPSBzY2FsZVg7XG5cbiAgICAgICAgaWYgKHNjYWxlWSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlWSA9IHRoaXMuc2NhbGVYO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY2FsZVkgPSBzY2FsZVlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldCB3aWR0aCh3OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fd2lkdGggPSB3O1xuICAgIH1cbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoICogdGhpcy5zY2FsZVg7XG4gICAgfVxuXG4gICAgc2V0IGhlaWdodChoOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaDtcbiAgICB9XG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faGVpZ2h0ICogdGhpcy5zY2FsZVk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY2FsbGJhY2sgdG8gb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb25EcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG5cbiAgICB9XG59IiwiaW1wb3J0IHsgRHJhd2FibGUgfSBmcm9tIFwiLi9EcmF3YWJsZVwiO1xuXG5leHBvcnQgY2xhc3MgRHJhd2FibGVTZXQgZXh0ZW5kcyBEcmF3YWJsZSB7XG4gICAgcHJvdGVjdGVkIGNoaWxkU2V0OiBTZXQ8RHJhd2FibGU+O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHdpZHRoPzogbnVtYmVyLFxuICAgICAgICBoZWlnaHQ/OiBudW1iZXJcbiAgICApIHtcbiAgICAgICAgc3VwZXIod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHRoaXMuY2hpbGRTZXQgPSBuZXcgU2V0KCk7XG4gICAgfVxuXG4gICAgYWRkKGNoaWxkOiBEcmF3YWJsZSkge1xuICAgICAgICBjaGlsZC5wYXJlbnQgPSB0aGlzO1xuICAgICAgICB0aGlzLmNoaWxkU2V0LmFkZChjaGlsZCk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuY2hpbGRTZXQuZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5wYXJlbnQgPSB2b2lkIDApO1xuICAgICAgICB0aGlzLmNoaWxkU2V0LmNsZWFyKCk7XG4gICAgfVxuXG4gICAgZGVsZXRlKGNoaWxkOiBEcmF3YWJsZSkge1xuICAgICAgICBjaGlsZC5wYXJlbnQgPSB2b2lkIDA7XG4gICAgICAgIHRoaXMuY2hpbGRTZXQuZGVsZXRlKGNoaWxkKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIHN1cGVyLm9uRHJhdyhjdHgpO1xuICAgICAgICB0aGlzLmNoaWxkU2V0LmZvckVhY2goY2hpbGQgPT4gY2hpbGQuZHJhdyhjdHgpKVxuICAgIH1cbn0iLCJpbXBvcnQgeyBEcmF3YWJsZSB9IGZyb20gXCIuL0RyYXdhYmxlXCI7XG5cbmV4cG9ydCBjbGFzcyBHcmFwaGljIGV4dGVuZHMgRHJhd2FibGUge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9vbkRyYXc6IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4gdm9pZCxcbiAgICAgICAgd2lkdGg/OiBudW1iZXIsXG4gICAgICAgIGhlaWdodD86IG51bWJlclxuICAgICkge1xuICAgICAgICBzdXBlcih3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIHRoaXMuX29uRHJhdy5jYWxsKHRoaXMsIGN0eCk7XG4gICAgfVxufSIsImltcG9ydCB7IERyYXdhYmxlU2V0IH0gZnJvbSBcIi4vRHJhd2FibGVTZXRcIjtcblxuZXhwb3J0IGNsYXNzIFN0YWdlIGV4dGVuZHMgRHJhd2FibGVTZXQge1xuICAgIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCxcbiAgICAgICAgd2lkdGg/OiBudW1iZXIsXG4gICAgICAgIGhlaWdodD86IG51bWJlclxuICAgICkge1xuICAgICAgICBzdXBlcih3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBzdXBlci5kcmF3KHRoaXMuY3R4KTtcbiAgICB9XG5cbiAgICBjbGVhckZyYW1lKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vRHJhd2FibGUnO1xuZXhwb3J0ICogZnJvbSAnLi9EcmF3YWJsZVNldCc7XG5leHBvcnQgKiBmcm9tICcuL0dyYXBoaWMnO1xuZXhwb3J0ICogZnJvbSAnLi9TdGFnZSc7IiwiZXhwb3J0ICogZnJvbSAnLi9ydW4nOyIsImltcG9ydCB7IFN0YWdlIH0gZnJvbSBcIi4uL2RyYXdhYmxlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBydW4oY2FudmFzOiBzdHJpbmcgfCBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgIGlmICh0eXBlb2YgY2FudmFzID09PSAnc3RyaW5nJykge1xuICAgICAgICBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhbnZhcykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IHN0YWdlID0gbmV3IFN0YWdlKGNhbnZhcywgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICByZXR1cm4gc3RhZ2U7XG59IiwiZXhwb3J0ICogZnJvbSAnLi91dGlscy9Hcm91cCc7XG5leHBvcnQgKiBmcm9tICcuL2RyYXdhYmxlJ1xuZXhwb3J0ICogZnJvbSAnLi9mdW5jdGlvbnMnOyIsImV4cG9ydCBjbGFzcyBHcm91cDxUPntcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoaWxkcmVuOiBUW10gPSBbXSkgeyB9XG5cbiAgICBwdWJsaWMgYWRkKGNoaWxkOiBUKTogR3JvdXA8VD4ge1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlKGNoaWxkOiBUKTogR3JvdXA8VD4ge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdjaGlsZCBub3QgZm91bmQnLCBjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHB1YmxpYyByZW1vdmVBbGwoKTogR3JvdXA8VD4ge1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2l6ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XG4gICAgfVxuXG4gICAgcHVibGljIGZvckVhY2goY2FsbGJhY2tGbjogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyLCBhcnJheTogVFtdKSA9PiB2b2lkLCB0aGlzQXJnOiBhbnkpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zbGljZSgpLmZvckVhY2goY2FsbGJhY2tGbiwgdGhpc0FyZyk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=