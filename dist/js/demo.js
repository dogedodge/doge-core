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
var img = new doge.DrawableImage('./assets/doge.png');
stage.add(img);
stage.draw();


/***/ }),

/***/ "./src/Stomach.ts":
/*!************************!*\
  !*** ./src/Stomach.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * manage image resources
 */
var Stomach = /** @class */ (function () {
    function Stomach() {
        this.promMap = {};
    }
    Stomach.prototype.feed = function (src) {
        return __awaiter(this, void 0, void 0, function () {
            var promise;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promise = this.promMap[src];
                        if (!promise) return [3 /*break*/, 2];
                        return [4 /*yield*/, promise];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        promise = new Promise(function (resolve, reject) {
                            var image = new Image();
                            image.onload = function () {
                                resolve(image);
                            };
                            image.onerror = function (e) {
                                reject(e);
                            };
                            image.src = src;
                        });
                        this.promMap[src] = promise;
                        return [4 /*yield*/, promise];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Stomach;
}());
exports.stomach = new Stomach();


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
            if (this._width === void 0) {
                return 0;
            }
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
            if (this._height === void 0) {
                return 0;
            }
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

/***/ "./src/drawable/DrawableImage.ts":
/*!***************************************!*\
  !*** ./src/drawable/DrawableImage.ts ***!
  \***************************************/
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
var Stomach_1 = __webpack_require__(/*! ../Stomach */ "./src/Stomach.ts");
var DrawableImage = /** @class */ (function (_super) {
    __extends(DrawableImage, _super);
    function DrawableImage(src, width, height) {
        var _this = _super.call(this, width, height) || this;
        _this.src = src;
        _this.imgScaleX = 1;
        _this.imgScaleY = 1;
        return _this;
    }
    DrawableImage.prototype.draw = function (ctx) {
        var _this = this;
        if (this.image !== void 0) {
            _super.prototype.draw.call(this, ctx);
            return;
        }
        if (this.promise === void 0) {
            this.promise = Stomach_1.stomach.feed(this.src);
            this.promise.then(function (img) {
                _this.image = img;
                _this.updateSize();
                _super.prototype.draw.call(_this, ctx);
            });
        }
    };
    DrawableImage.prototype.updateSize = function () {
        if (this._width === void 0) {
            this._width = this.image.width;
        }
        if (this._height === void 0) {
            this._height = this.image.height;
        }
        // if already has size before img loaded, should scale to fit
        this.imgScaleX = this._width / this.image.width;
        this.imgScaleY = this._height / this.image.height;
    };
    DrawableImage.prototype.onDraw = function (ctx) {
        _super.prototype.onDraw.call(this, ctx);
        var shouldScale = (this.imgScaleX !== 1 || this.imgScaleY !== 1);
        if (shouldScale) {
            ctx.save();
            ctx.scale(this.imgScaleX, this.imgScaleY);
        }
        ctx.drawImage(this.image, 0, 0);
        if (shouldScale) {
            ctx.restore();
        }
    };
    return DrawableImage;
}(Drawable_1.Drawable));
exports.DrawableImage = DrawableImage;


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
__export(__webpack_require__(/*! ./DrawableImage */ "./src/drawable/DrawableImage.ts"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGVtby9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU3RvbWFjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2FibGUvRHJhd2FibGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdhYmxlL0RyYXdhYmxlSW1hZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdhYmxlL0RyYXdhYmxlU2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9kcmF3YWJsZS9HcmFwaGljLnRzIiwid2VicGFjazovLy8uL3NyYy9kcmF3YWJsZS9TdGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd2FibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL3J1bi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0dyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSwrREFBK0I7QUFFL0IsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUU1QixJQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO0lBQ2pDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoQixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2pCLENBQUMsQ0FBQyxDQUFDO0FBQ0gsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUVuQixJQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUN4RCxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRWYsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZiOztHQUVHO0FBQ0g7SUFBQTtRQUNZLFlBQU8sR0FBK0MsRUFBRSxDQUFDO0lBc0JyRSxDQUFDO0lBcEJTLHNCQUFJLEdBQVYsVUFBVyxHQUFXOzs7Ozs7d0JBQ2QsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7NkJBRTVCLE9BQU8sRUFBUCx3QkFBTzt3QkFDQSxxQkFBTSxPQUFPOzRCQUFwQixzQkFBTyxTQUFhLEVBQUM7O3dCQUd6QixPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTTs0QkFDM0MsSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQzs0QkFDeEIsS0FBSyxDQUFDLE1BQU0sR0FBRztnQ0FDWCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ25CLENBQUMsQ0FBQzs0QkFDRixLQUFLLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztnQ0FDdkIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNkLENBQUMsQ0FBQzs0QkFDRixLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzt3QkFDcEIsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7d0JBQ3JCLHFCQUFNLE9BQU87NEJBQXBCLHNCQUFPLFNBQWEsRUFBQzs7OztLQUN4QjtJQUNMLGNBQUM7QUFBRCxDQUFDO0FBRVksZUFBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzVCckM7SUFZSTtJQUNJLDBCQUEwQjtJQUNoQixNQUFlO0lBQ3pCLDJCQUEyQjtJQUNqQixPQUFnQjtRQUZoQixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBRWYsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQWQ5QixNQUFDLEdBQVcsQ0FBQyxDQUFDO1FBQ2QsTUFBQyxHQUFXLENBQUMsQ0FBQztRQUNkLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixXQUFNLEdBQVcsQ0FBQyxDQUFDO0lBU25CLENBQUM7SUFFRCx1QkFBSSxHQUFKLFVBQUssR0FBNkI7UUFDOUIsc0JBQXNCO1FBQ3RCLGtDQUFrQztRQUNsQyx1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLFdBQVc7UUFDWCxpREFBaUQ7UUFDakQsaURBQWlEO1FBQ2pELElBQUk7UUFDSixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWCw4QkFBOEI7UUFDOUIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxLQUFLLENBQUMsRUFBRTtZQUMzQixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUM3QztRQUNELEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFakIsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsd0JBQUssR0FBTCxVQUFNLE1BQWMsRUFBRSxNQUFlO1FBRWpDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBRXJCLElBQUksTUFBTSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUM3QjthQUFNO1lBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVELHNCQUFJLDJCQUFLO2FBR1Q7WUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLEVBQUU7Z0JBQ3hCLE9BQU8sQ0FBQyxDQUFDO2FBQ1o7WUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxDQUFDO2FBUkQsVUFBVSxDQUFTO1lBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFRRCxzQkFBSSw0QkFBTTthQUdWO1lBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxFQUFFO2dCQUN6QixPQUFPLENBQUMsQ0FBQzthQUNaO1lBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdEMsQ0FBQzthQVJELFVBQVcsQ0FBUztZQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQVFEOztPQUVHO0lBQ08seUJBQU0sR0FBaEIsVUFBaUIsR0FBNkI7SUFFOUMsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDO0FBdEZZLDRCQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXJCLHFGQUFzQztBQUN0QywwRUFBcUM7QUFFckM7SUFBbUMsaUNBQVE7SUFRdkMsdUJBQ1ksR0FBVyxFQUNuQixLQUFjLEVBQ2QsTUFBZTtRQUhuQixZQUtJLGtCQUFNLEtBQUssRUFBRSxNQUFNLENBQUMsU0FDdkI7UUFMVyxTQUFHLEdBQUgsR0FBRyxDQUFRO1FBSmYsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixlQUFTLEdBQVcsQ0FBQyxDQUFDOztJQVE5QixDQUFDO0lBRUQsNEJBQUksR0FBSixVQUFLLEdBQTZCO1FBQWxDLGlCQWNDO1FBYkcsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLGlCQUFNLElBQUksWUFBQyxHQUFHLENBQUMsQ0FBQztZQUNoQixPQUFPO1NBQ1Y7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxpQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO2dCQUNsQixLQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDakIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixpQkFBTSxJQUFJLGFBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFTyxrQ0FBVSxHQUFsQjtRQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDcEM7UUFFRCw2REFBNkQ7UUFDN0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUN0RCxDQUFDO0lBRVMsOEJBQU0sR0FBaEIsVUFBaUIsR0FBNkI7UUFDMUMsaUJBQU0sTUFBTSxZQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQU0sV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuRSxJQUFJLFdBQVcsRUFBRTtZQUNiLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNYLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDN0M7UUFDRCxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksV0FBVyxFQUFFO1lBQ2IsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2pCO0lBQ0wsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxDQXpEa0MsbUJBQVEsR0F5RDFDO0FBekRZLHNDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSDFCLHFGQUFzQztBQUV0QztJQUFpQywrQkFBUTtJQUdyQyxxQkFDSSxLQUFjLEVBQ2QsTUFBZTtRQUZuQixZQUlJLGtCQUFNLEtBQUssRUFBRSxNQUFNLENBQUMsU0FFdkI7UUFERyxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7O0lBQzlCLENBQUM7SUFFRCx5QkFBRyxHQUFILFVBQUksS0FBZTtRQUNmLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCwyQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsZUFBSyxJQUFJLFlBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sS0FBZTtRQUNsQixLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFUyw0QkFBTSxHQUFoQixVQUFpQixHQUE2QjtRQUMxQyxpQkFBTSxNQUFNLFlBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsZUFBSyxJQUFJLFlBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQWYsQ0FBZSxDQUFDO0lBQ25ELENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQ0E5QmdDLG1CQUFRLEdBOEJ4QztBQTlCWSxrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z4QixxRkFBc0M7QUFFdEM7SUFBNkIsMkJBQVE7SUFDakMsaUJBQ1ksT0FBZ0QsRUFDeEQsS0FBYyxFQUNkLE1BQWU7UUFIbkIsWUFLSSxrQkFBTSxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQ3ZCO1FBTFcsYUFBTyxHQUFQLE9BQU8sQ0FBeUM7O0lBSzVELENBQUM7SUFFUyx3QkFBTSxHQUFoQixVQUFpQixHQUE2QjtRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDLENBWjRCLG1CQUFRLEdBWXBDO0FBWlksMEJBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGcEIsOEZBQTRDO0FBRTVDO0lBQTJCLHlCQUFXO0lBRWxDLGVBQ1ksTUFBeUIsRUFDakMsS0FBYyxFQUNkLE1BQWU7UUFIbkIsWUFLSSxrQkFBTSxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBRXZCO1FBTlcsWUFBTSxHQUFOLE1BQU0sQ0FBbUI7UUFLakMsS0FBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDOztJQUN2QyxDQUFDO0lBRUQsb0JBQUksR0FBSjtRQUNJLGlCQUFNLElBQUksWUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELDBCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLENBbEIwQix5QkFBVyxHQWtCckM7QUFsQlksc0JBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZsQiw4RUFBMkI7QUFDM0Isb0ZBQThCO0FBQzlCLDRFQUEwQjtBQUMxQix3RkFBZ0M7QUFDaEMsd0VBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKeEIscUVBQXNCOzs7Ozs7Ozs7Ozs7Ozs7QUNBdEIsbUZBQW9DO0FBRXBDLGFBQW9CLE1BQWtDO0lBQ2xELElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO1FBQzVCLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBc0IsQ0FBQztLQUNoRTtJQUNELElBQU0sS0FBSyxHQUFHLElBQUksZ0JBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQU5ELGtCQU1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSRCwyRUFBOEI7QUFDOUIsMkVBQTBCO0FBQzFCLDZFQUE0Qjs7Ozs7Ozs7Ozs7Ozs7O0FDRjVCO0lBQ0ksZUFBb0IsUUFBa0I7UUFBbEIsd0NBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBSSxDQUFDO0lBRXBDLG1CQUFHLEdBQVYsVUFBVyxLQUFRO1FBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLHNCQUFNLEdBQWIsVUFBYyxLQUFRO1FBQ2xCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNsQzthQUFNO1lBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMxQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTSx5QkFBUyxHQUFoQjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxzQkFBVyx1QkFBSTthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUVNLHVCQUFPLEdBQWQsVUFBZSxVQUF5RCxFQUFFLE9BQVk7UUFDbEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQztBQTdCWSxzQkFBSyIsImZpbGUiOiJkZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9kZW1vL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0ICogYXMgZG9nZSBmcm9tICcuLi9zcmMnO1xuXG5jb25zdCBzdGFnZSA9IGRvZ2UucnVuKCcjc3RhZ2UnKTtcbmNvbnNvbGUubG9nKCdzdGFnZScsIHN0YWdlKTtcblxuY29uc3QgZ3JhcGhpYyA9IG5ldyBkb2dlLkdyYXBoaWMoKGN0eCkgPT4ge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgucmVjdCgwLCAwLCBzdGFnZS53aWR0aCwgc3RhZ2UuaGVpZ2h0KTtcbiAgICBjdHguc3Ryb2tlKCk7XG59KTtcbnN0YWdlLmFkZChncmFwaGljKTtcblxuY29uc3QgaW1nID0gbmV3IGRvZ2UuRHJhd2FibGVJbWFnZSgnLi9hc3NldHMvZG9nZS5wbmcnKTtcbnN0YWdlLmFkZChpbWcpO1xuXG5zdGFnZS5kcmF3KCk7IiwiLyoqXG4gKiBtYW5hZ2UgaW1hZ2UgcmVzb3VyY2VzXG4gKi9cbmNsYXNzIFN0b21hY2gge1xuICAgIHByaXZhdGUgcHJvbU1hcDogeyBbeDogc3RyaW5nXTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PiB9ID0ge307XG5cbiAgICBhc3luYyBmZWVkKHNyYzogc3RyaW5nKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5wcm9tTWFwW3NyY107XG4gICAgICAgIC8vIGxvYWQgZm9yIHRoZSBzcmMgYmVmb3JlXG4gICAgICAgIGlmIChwcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgcHJvbWlzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGltYWdlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wcm9tTWFwW3NyY10gPSBwcm9taXNlO1xuICAgICAgICByZXR1cm4gYXdhaXQgcHJvbWlzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBzdG9tYWNoID0gbmV3IFN0b21hY2goKTsiLCJleHBvcnQgY2xhc3MgRHJhd2FibGUge1xuICAgIHBhcmVudDogRHJhd2FibGU7XG4gICAgeDogbnVtYmVyID0gMDtcbiAgICB5OiBudW1iZXIgPSAwO1xuICAgIC8vIHN0YWdlWDogbnVtYmVyID0gMDtcbiAgICAvLyBzdGFnZVk6IG51bWJlciA9IDA7XG4gICAgcm90YXRpb246IG51bWJlciA9IDA7XG4gICAgYW5jaG9yWDogbnVtYmVyID0gMDtcbiAgICBhbmNob3JZOiBudW1iZXIgPSAwO1xuICAgIHNjYWxlWDogbnVtYmVyID0gMTtcbiAgICBzY2FsZVk6IG51bWJlciA9IDE7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgLyoqIHdpZHRoIHdpdGhvdXQgc2NhbGUgKi9cbiAgICAgICAgcHJvdGVjdGVkIF93aWR0aD86IG51bWJlcixcbiAgICAgICAgLyoqIGhlaWdodCB3aXRob3V0IHNjYWxlICovXG4gICAgICAgIHByb3RlY3RlZCBfaGVpZ2h0PzogbnVtYmVyXG4gICAgKSB7XG5cbiAgICB9XG5cbiAgICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIC8vIGlmICghdGhpcy5wYXJlbnQpIHtcbiAgICAgICAgLy8gICAgIC8vIG9ubHkgc3RhZ2UgaGFzIG5vIHBhcmVudFxuICAgICAgICAvLyAgICAgdGhpcy5zdGFnZVggPSAwO1xuICAgICAgICAvLyAgICAgdGhpcy5zdGFnZVkgPSAwO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgdGhpcy5zdGFnZVggPSB0aGlzLnBhcmVudC5zdGFnZVggKyB0aGlzLng7XG4gICAgICAgIC8vICAgICB0aGlzLnN0YWdlWSA9IHRoaXMucGFyZW50LnN0YWdlWSArIHRoaXMueTtcbiAgICAgICAgLy8gfVxuICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICAvLyB0b2RvOiB1c2UgdHJhbnNmb3JtIGluc3RlYWRcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG4gICAgICAgIGlmICh0aGlzLnJvdGF0aW9uICUgMzYwICE9PSAwKSB7XG4gICAgICAgICAgICBjdHgucm90YXRlKHRoaXMucm90YXRpb24gKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgfVxuICAgICAgICBjdHgudHJhbnNsYXRlKC10aGlzLmFuY2hvclggKiB0aGlzLnNjYWxlWCwgLXRoaXMuYW5jaG9yWSAqIHRoaXMuc2NhbGVZKTtcbiAgICAgICAgY3R4LnNjYWxlKHRoaXMuc2NhbGVYLCB0aGlzLnNjYWxlWSk7XG5cbiAgICAgICAgdGhpcy5vbkRyYXcoY3R4KTtcblxuICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGlmIG9ubHkgc2NhbGVYIHByb3ZpZGVkLCB4L3kgYWxsIHNjYWxlIGFzIHNjYWxlWFxuICAgICAqIEBwYXJhbSBzY2FsZVggXG4gICAgICogQHBhcmFtIHNjYWxlWSBcbiAgICAgKi9cbiAgICBzY2FsZShzY2FsZVg6IG51bWJlciwgc2NhbGVZPzogbnVtYmVyKSB7XG5cbiAgICAgICAgdGhpcy5zY2FsZVggPSBzY2FsZVg7XG5cbiAgICAgICAgaWYgKHNjYWxlWSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlWSA9IHRoaXMuc2NhbGVYO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY2FsZVkgPSBzY2FsZVlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldCB3aWR0aCh3OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fd2lkdGggPSB3O1xuICAgIH1cbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuX3dpZHRoID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl93aWR0aCAqIHRoaXMuc2NhbGVYO1xuICAgIH1cblxuICAgIHNldCBoZWlnaHQoaDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2hlaWdodCA9IGg7XG4gICAgfVxuICAgIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuX2hlaWdodCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faGVpZ2h0ICogdGhpcy5zY2FsZVk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY2FsbGJhY2sgdG8gb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb25EcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG5cbiAgICB9XG59IiwiaW1wb3J0IHsgRHJhd2FibGUgfSBmcm9tIFwiLi9EcmF3YWJsZVwiO1xuaW1wb3J0IHsgc3RvbWFjaCB9IGZyb20gXCIuLi9TdG9tYWNoXCI7XG5cbmV4cG9ydCBjbGFzcyBEcmF3YWJsZUltYWdlIGV4dGVuZHMgRHJhd2FibGUge1xuICAgIC8qKiBAdHlwZSB7UHJvbWlzZUxpa2U8SFRNTEltYWdlRWxlbWVudD59ICovXG4gICAgcHJpdmF0ZSBwcm9taXNlOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+O1xuICAgIC8qKiBAdHlwZSB7SFRNTEltYWdlRWxlbWVudH0gKi9cbiAgICBwcml2YXRlIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIHByaXZhdGUgaW1nU2NhbGVYOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgaW1nU2NhbGVZOiBudW1iZXIgPSAxO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgc3JjOiBzdHJpbmcsXG4gICAgICAgIHdpZHRoPzogbnVtYmVyLFxuICAgICAgICBoZWlnaHQ/OiBudW1iZXJcbiAgICApIHtcbiAgICAgICAgc3VwZXIod2lkdGgsIGhlaWdodCk7XG4gICAgfVxuXG4gICAgZHJhdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICBpZiAodGhpcy5pbWFnZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBzdXBlci5kcmF3KGN0eCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9taXNlID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHRoaXMucHJvbWlzZSA9IHN0b21hY2guZmVlZCh0aGlzLnNyYyk7XG4gICAgICAgICAgICB0aGlzLnByb21pc2UudGhlbigoaW1nKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZSA9IGltZztcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgICAgICAgICBzdXBlci5kcmF3KGN0eCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlU2l6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3dpZHRoID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHRoaXMuX3dpZHRoID0gdGhpcy5pbWFnZS53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5faGVpZ2h0ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHRoaXMuX2hlaWdodCA9IHRoaXMuaW1hZ2UuaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgYWxyZWFkeSBoYXMgc2l6ZSBiZWZvcmUgaW1nIGxvYWRlZCwgc2hvdWxkIHNjYWxlIHRvIGZpdFxuICAgICAgICB0aGlzLmltZ1NjYWxlWCA9IHRoaXMuX3dpZHRoIC8gdGhpcy5pbWFnZS53aWR0aDtcbiAgICAgICAgdGhpcy5pbWdTY2FsZVkgPSB0aGlzLl9oZWlnaHQgLyB0aGlzLmltYWdlLmhlaWdodDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25EcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIHN1cGVyLm9uRHJhdyhjdHgpO1xuICAgICAgICBjb25zdCBzaG91bGRTY2FsZSA9ICh0aGlzLmltZ1NjYWxlWCAhPT0gMSB8fCB0aGlzLmltZ1NjYWxlWSAhPT0gMSk7XG4gICAgICAgIGlmIChzaG91bGRTY2FsZSkge1xuICAgICAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgICAgIGN0eC5zY2FsZSh0aGlzLmltZ1NjYWxlWCwgdGhpcy5pbWdTY2FsZVkpO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMCwgMCk7XG4gICAgICAgIGlmIChzaG91bGRTY2FsZSkge1xuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBEcmF3YWJsZSB9IGZyb20gXCIuL0RyYXdhYmxlXCI7XG5cbmV4cG9ydCBjbGFzcyBEcmF3YWJsZVNldCBleHRlbmRzIERyYXdhYmxlIHtcbiAgICBwcm90ZWN0ZWQgY2hpbGRTZXQ6IFNldDxEcmF3YWJsZT47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgd2lkdGg/OiBudW1iZXIsXG4gICAgICAgIGhlaWdodD86IG51bWJlclxuICAgICkge1xuICAgICAgICBzdXBlcih3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jaGlsZFNldCA9IG5ldyBTZXQoKTtcbiAgICB9XG5cbiAgICBhZGQoY2hpbGQ6IERyYXdhYmxlKSB7XG4gICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2hpbGRTZXQuYWRkKGNoaWxkKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5jaGlsZFNldC5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnBhcmVudCA9IHZvaWQgMCk7XG4gICAgICAgIHRoaXMuY2hpbGRTZXQuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBkZWxldGUoY2hpbGQ6IERyYXdhYmxlKSB7XG4gICAgICAgIGNoaWxkLnBhcmVudCA9IHZvaWQgMDtcbiAgICAgICAgdGhpcy5jaGlsZFNldC5kZWxldGUoY2hpbGQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgc3VwZXIub25EcmF3KGN0eCk7XG4gICAgICAgIHRoaXMuY2hpbGRTZXQuZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5kcmF3KGN0eCkpXG4gICAgfVxufSIsImltcG9ydCB7IERyYXdhYmxlIH0gZnJvbSBcIi4vRHJhd2FibGVcIjtcblxuZXhwb3J0IGNsYXNzIEdyYXBoaWMgZXh0ZW5kcyBEcmF3YWJsZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX29uRHJhdzogKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB2b2lkLFxuICAgICAgICB3aWR0aD86IG51bWJlcixcbiAgICAgICAgaGVpZ2h0PzogbnVtYmVyXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgdGhpcy5fb25EcmF3LmNhbGwodGhpcywgY3R4KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRHJhd2FibGVTZXQgfSBmcm9tIFwiLi9EcmF3YWJsZVNldFwiO1xuXG5leHBvcnQgY2xhc3MgU3RhZ2UgZXh0ZW5kcyBEcmF3YWJsZVNldCB7XG4gICAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuICAgICAgICB3aWR0aD86IG51bWJlcixcbiAgICAgICAgaGVpZ2h0PzogbnVtYmVyXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHN1cGVyLmRyYXcodGhpcy5jdHgpO1xuICAgIH1cblxuICAgIGNsZWFyRnJhbWUoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9EcmF3YWJsZSc7XG5leHBvcnQgKiBmcm9tICcuL0RyYXdhYmxlU2V0JztcbmV4cG9ydCAqIGZyb20gJy4vR3JhcGhpYyc7XG5leHBvcnQgKiBmcm9tICcuL0RyYXdhYmxlSW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9TdGFnZSc7IiwiZXhwb3J0ICogZnJvbSAnLi9ydW4nOyIsImltcG9ydCB7IFN0YWdlIH0gZnJvbSBcIi4uL2RyYXdhYmxlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBydW4oY2FudmFzOiBzdHJpbmcgfCBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgIGlmICh0eXBlb2YgY2FudmFzID09PSAnc3RyaW5nJykge1xuICAgICAgICBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNhbnZhcykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IHN0YWdlID0gbmV3IFN0YWdlKGNhbnZhcywgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICByZXR1cm4gc3RhZ2U7XG59IiwiZXhwb3J0ICogZnJvbSAnLi91dGlscy9Hcm91cCc7XG5leHBvcnQgKiBmcm9tICcuL2RyYXdhYmxlJ1xuZXhwb3J0ICogZnJvbSAnLi9mdW5jdGlvbnMnOyIsImV4cG9ydCBjbGFzcyBHcm91cDxUPntcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoaWxkcmVuOiBUW10gPSBbXSkgeyB9XG5cbiAgICBwdWJsaWMgYWRkKGNoaWxkOiBUKTogR3JvdXA8VD4ge1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlKGNoaWxkOiBUKTogR3JvdXA8VD4ge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdjaGlsZCBub3QgZm91bmQnLCBjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHB1YmxpYyByZW1vdmVBbGwoKTogR3JvdXA8VD4ge1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2l6ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XG4gICAgfVxuXG4gICAgcHVibGljIGZvckVhY2goY2FsbGJhY2tGbjogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyLCBhcnJheTogVFtdKSA9PiB2b2lkLCB0aGlzQXJnOiBhbnkpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zbGljZSgpLmZvckVhY2goY2FsbGJhY2tGbiwgdGhpc0FyZyk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=