/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/entity/baddie-spawner.ts":
/*!**************************************!*\
  !*** ./src/entity/baddie-spawner.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var baddie_1 = __webpack_require__(/*! ../entity/baddie */ "./src/entity/baddie.ts");
var BaddieSpawner = /** @class */ (function () {
    function BaddieSpawner(scene) {
        this.spawnDelayMS = 100;
        this.entityMaxCount = 50;
        this.elapsedSpawnTimeMS = 0;
        this.xSpawnOffset = 50;
        this.xSpawnOffsetCurrent = 0;
        this.scene = scene;
        this.baddies = this.scene.add.group({
            classType: baddie_1.Baddie,
            maxSize: this.entityMaxCount,
            runChildUpdate: true
        });
    }
    BaddieSpawner.prototype.update = function (time, delta) {
        this.elapsedSpawnTimeMS += delta;
        if (this.elapsedSpawnTimeMS >= this.spawnDelayMS) {
            this.elapsedSpawnTimeMS -= this.spawnDelayMS;
            this.xSpawnOffsetCurrent += this.xSpawnOffset;
            if (this.xSpawnOffsetCurrent > window.innerWidth) {
                this.xSpawnOffsetCurrent -= window.innerWidth;
            }
            var baddie = this.baddies.get();
            if (baddie) {
                baddie.spawn(this.xSpawnOffsetCurrent, 0);
            }
        }
    };
    return BaddieSpawner;
}());
exports.BaddieSpawner = BaddieSpawner;
;


/***/ }),

/***/ "./src/entity/baddie.ts":
/*!******************************!*\
  !*** ./src/entity/baddie.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Baddie = /** @class */ (function (_super) {
    __extends(Baddie, _super);
    function Baddie(scene) {
        var _this = _super.call(this, scene, 0, 0, 'baddie') || this;
        _this.speed = Phaser.Math.GetSpeed(100, 1);
        return _this;
    }
    Baddie.prototype.spawn = function (x, y) {
        this.setPosition(x, y);
        this.setActive(true);
        this.setVisible(true);
    };
    Baddie.prototype.update = function (time, delta) {
        this.x += this.speed * delta;
        this.y += this.speed * delta;
        if (this.x > window.innerWidth || this.y > window.innerHeight) {
            this.setActive(false);
            this.setVisible(false);
        }
    };
    return Baddie;
}(Phaser.GameObjects.Sprite));
exports.Baddie = Baddie;
;


/***/ }),

/***/ "./src/entity/tower.ts":
/*!*****************************!*\
  !*** ./src/entity/tower.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tower = /** @class */ (function () {
    function Tower(scene, x, y) {
        this.fillAlphaMinimum = 0.1;
        this.fillAlphaMaximum = 1.0;
        this.buildTimeMS = 1000;
        this.elapsedTimeMS = 0;
        this.rect = scene.add.rectangle(x, y, 50, 50, 0xFFFFFF, 0.1);
    }
    Tower.prototype.update = function (time, delta) {
        this.elapsedTimeMS += delta;
        // TODO [20200318] Introduce states such as "Building",
        // "Defending", "Selling".
        this.rect.fillAlpha = this.getFillAlpha();
        if (this.isBuildingComplete()) {
            this.rect.fillColor = 0x00FFFF;
        }
    };
    Tower.prototype.isBuildingComplete = function () {
        return this.elapsedTimeMS >= this.buildTimeMS;
    };
    Tower.prototype.getFillAlpha = function () {
        if (this.isBuildingComplete()) {
            return this.fillAlphaMaximum;
        }
        var buildPercentage = this.elapsedTimeMS / this.buildTimeMS;
        var alphaCeiling = Math.min(buildPercentage, this.fillAlphaMaximum);
        return Math.max(alphaCeiling, this.fillAlphaMinimum);
    };
    return Tower;
}());
exports.Tower = Tower;
;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var scene_1 = __webpack_require__(/*! ./scene */ "./src/scene/index.ts");
var gameConfig = {
    title: 'Phase 98',
    type: Phaser.AUTO,
    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        },
    },
    scene: scene_1.default,
    parent: 'content',
    backgroundColor: '#000000',
};
exports.game = new Phaser.Game(gameConfig);


/***/ }),

/***/ "./src/scene/game-scene.ts":
/*!*********************************!*\
  !*** ./src/scene/game-scene.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var baddie_spawner_1 = __webpack_require__(/*! ../entity/baddie-spawner */ "./src/entity/baddie-spawner.ts");
var tower_1 = __webpack_require__(/*! ../entity/tower */ "./src/entity/tower.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Phase98',
};
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this, sceneConfig) || this;
        // TODO [20200318] The configuration of spawners
        // would later belong with the idea of a specific
        // "level" and not live within the root GameScene.
        _this.spawners = [];
        _this.towers = [];
        return _this;
    }
    GameScene.prototype.preload = function () {
        this.load.image('baddie', './assets/space-baddie.png');
    };
    GameScene.prototype.create = function () {
        this.spawners.push(new baddie_spawner_1.BaddieSpawner(this));
        this.input.on('pointerup', function (pointer) {
            this.towers.push(new tower_1.Tower(this, pointer.x, pointer.y));
        }, this);
    };
    GameScene.prototype.update = function (time, delta) {
        this.spawners.forEach(function (t) { return t.update(time, delta); });
        this.towers.forEach(function (t) { return t.update(time, delta); });
    };
    return GameScene;
}(Phaser.Scene));
exports.GameScene = GameScene;


/***/ }),

/***/ "./src/scene/index.ts":
/*!****************************!*\
  !*** ./src/scene/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var game_scene_1 = __webpack_require__(/*! ./game-scene */ "./src/scene/game-scene.ts");
exports.default = [
    game_scene_1.GameScene,
];


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0eS9iYWRkaWUtc3Bhd25lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5L2JhZGRpZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5L3Rvd2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9nYW1lLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QzFDLGNBQVEsR0FBb0IsRUFBRSxDQUFDO1FBQy9CLFlBQU0sR0FBWSxFQUFFLENBQUM7O0lBSTdCLENBQUM7SUFFTSwyQkFBTyxHQUFkO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLDJCQUEyQixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVNLDBCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLDhCQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUU1QyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBUyxPQUFPO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksYUFBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFTSwwQkFBTSxHQUFiLFVBQWMsSUFBSSxFQUFFLEtBQUs7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxDQTVCOEIsTUFBTSxDQUFDLEtBQUssR0E0QjFDO0FBNUJZLDhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7QUNUdEIsd0ZBQXlDO0FBRXpDLGtCQUFlO0lBQ1gsc0JBQVM7Q0FDWixDQUFDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCB7IEJhZGRpZSB9IGZyb20gJy4uL2VudGl0eS9iYWRkaWUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhZGRpZVNwYXduZXIge1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3Bhd25EZWxheU1TID0gMTAwO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBlbnRpdHlNYXhDb3VudCA9IDUwO1xyXG5cclxuICAgIHByaXZhdGUgYmFkZGllczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG5cclxuICAgIHByaXZhdGUgZWxhcHNlZFNwYXduVGltZU1TID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHhTcGF3bk9mZnNldCA9IDUwO1xyXG4gICAgcHJpdmF0ZSB4U3Bhd25PZmZzZXRDdXJyZW50ID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgICAgICB0aGlzLmJhZGRpZXMgPSB0aGlzLnNjZW5lLmFkZC5ncm91cCh7XHJcbiAgICAgICAgICAgIGNsYXNzVHlwZTogQmFkZGllLFxyXG4gICAgICAgICAgICBtYXhTaXplOiB0aGlzLmVudGl0eU1heENvdW50LFxyXG4gICAgICAgICAgICBydW5DaGlsZFVwZGF0ZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lLCBkZWx0YSkge1xyXG4gICAgICAgIHRoaXMuZWxhcHNlZFNwYXduVGltZU1TICs9IGRlbHRhO1xyXG4gICAgICAgIGlmICh0aGlzLmVsYXBzZWRTcGF3blRpbWVNUyA+PSB0aGlzLnNwYXduRGVsYXlNUykge1xyXG4gICAgICAgICAgICB0aGlzLmVsYXBzZWRTcGF3blRpbWVNUyAtPSB0aGlzLnNwYXduRGVsYXlNUztcclxuICAgICAgICAgICAgdGhpcy54U3Bhd25PZmZzZXRDdXJyZW50ICs9IHRoaXMueFNwYXduT2Zmc2V0O1xyXG4gICAgICAgICAgICBpZiAodGhpcy54U3Bhd25PZmZzZXRDdXJyZW50ID4gd2luZG93LmlubmVyV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMueFNwYXduT2Zmc2V0Q3VycmVudCAtPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgYmFkZGllID0gdGhpcy5iYWRkaWVzLmdldCgpO1xyXG4gICAgICAgICAgICBpZiAoYmFkZGllKSB7XHJcbiAgICAgICAgICAgICAgICBiYWRkaWUuc3Bhd24odGhpcy54U3Bhd25PZmZzZXRDdXJyZW50LCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn07IiwiZXhwb3J0IGNsYXNzIEJhZGRpZSBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUge1xyXG5cclxuICAgIHByaXZhdGUgaW1hZ2U6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUgJiB7IGJvZHk6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Cb2R5IH07XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzcGVlZCA9IFBoYXNlci5NYXRoLkdldFNwZWVkKDEwMCwgMSk7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCAwLCAwLCAnYmFkZGllJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd24oeCwgeSkge1xyXG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24oeCwgeSk7XHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lLCBkZWx0YSkge1xyXG4gICAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkICogZGVsdGE7XHJcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWQgKiBkZWx0YTtcclxuICAgICAgICBpZiAodGhpcy54ID4gd2luZG93LmlubmVyV2lkdGggfHwgdGhpcy55ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07IiwiZXhwb3J0IGNsYXNzIFRvd2VyIHtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZpbGxBbHBoYU1pbmltdW0gPSAwLjE7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZpbGxBbHBoYU1heGltdW0gPSAxLjA7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBidWlsZFRpbWVNUyA9IDEwMDA7XHJcbiAgICBwcml2YXRlIGVsYXBzZWRUaW1lTVMgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgcmVjdDogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucmVjdCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoeCwgeSwgNTAsIDUwLCAweEZGRkZGRiwgMC4xKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSwgZGVsdGEpIHtcclxuICAgICAgICB0aGlzLmVsYXBzZWRUaW1lTVMgKz0gZGVsdGE7XHJcblxyXG4gICAgICAgIC8vIFRPRE8gWzIwMjAwMzE4XSBJbnRyb2R1Y2Ugc3RhdGVzIHN1Y2ggYXMgXCJCdWlsZGluZ1wiLFxyXG4gICAgICAgIC8vIFwiRGVmZW5kaW5nXCIsIFwiU2VsbGluZ1wiLlxyXG4gICAgICAgIHRoaXMucmVjdC5maWxsQWxwaGEgPSB0aGlzLmdldEZpbGxBbHBoYSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzQnVpbGRpbmdDb21wbGV0ZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVjdC5maWxsQ29sb3IgPSAweDAwRkZGRjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc0J1aWxkaW5nQ29tcGxldGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxhcHNlZFRpbWVNUyA+PSB0aGlzLmJ1aWxkVGltZU1TO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RmlsbEFscGhhKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQnVpbGRpbmdDb21wbGV0ZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbGxBbHBoYU1heGltdW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYnVpbGRQZXJjZW50YWdlID0gdGhpcy5lbGFwc2VkVGltZU1TIC8gdGhpcy5idWlsZFRpbWVNUztcclxuICAgICAgICBsZXQgYWxwaGFDZWlsaW5nID0gTWF0aC5taW4oYnVpbGRQZXJjZW50YWdlLCB0aGlzLmZpbGxBbHBoYU1heGltdW0pXHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KGFscGhhQ2VpbGluZywgdGhpcy5maWxsQWxwaGFNaW5pbXVtKTtcclxuICAgIH1cclxufTsiLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmltcG9ydCBTY2VuZXMgZnJvbSAnLi9zY2VuZSc7XHJcblxyXG5jb25zdCBnYW1lQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xyXG4gICAgdGl0bGU6ICdQaGFzZSA5OCcsXHJcblxyXG4gICAgdHlwZTogUGhhc2VyLkFVVE8sXHJcblxyXG4gICAgc2NhbGU6IHtcclxuICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICB9LFxyXG5cclxuICAgIHBoeXNpY3M6IHtcclxuICAgICAgICBkZWZhdWx0OiAnYXJjYWRlJyxcclxuICAgICAgICBhcmNhZGU6IHtcclxuICAgICAgICAgICAgZGVidWc6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIHNjZW5lOiBTY2VuZXMsXHJcblxyXG4gICAgcGFyZW50OiAnY29udGVudCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwJyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpOyIsImltcG9ydCB7IEJhZGRpZVNwYXduZXIgfSBmcm9tICcuLi9lbnRpdHkvYmFkZGllLXNwYXduZXInO1xyXG5pbXBvcnQgeyBUb3dlciB9IGZyb20gJy4uL2VudGl0eS90b3dlcic7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIGtleTogJ1BoYXNlOTgnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblxyXG4gICAgLy8gVE9ETyBbMjAyMDAzMThdIFRoZSBjb25maWd1cmF0aW9uIG9mIHNwYXduZXJzXHJcbiAgICAvLyB3b3VsZCBsYXRlciBiZWxvbmcgd2l0aCB0aGUgaWRlYSBvZiBhIHNwZWNpZmljXHJcbiAgICAvLyBcImxldmVsXCIgYW5kIG5vdCBsaXZlIHdpdGhpbiB0aGUgcm9vdCBHYW1lU2NlbmUuXHJcbiAgICBwcml2YXRlIHNwYXduZXJzOiBCYWRkaWVTcGF3bmVyW10gPSBbXTtcclxuICAgIHByaXZhdGUgdG93ZXJzOiBUb3dlcltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmVsb2FkKCkge1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnYmFkZGllJywgJy4vYXNzZXRzL3NwYWNlLWJhZGRpZS5wbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKCkge1xyXG4gICAgICAgIHRoaXMuc3Bhd25lcnMucHVzaChuZXcgQmFkZGllU3Bhd25lcih0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJ1cCcsIGZ1bmN0aW9uKHBvaW50ZXIpe1xyXG4gICAgICAgICAgICB0aGlzLnRvd2Vycy5wdXNoKG5ldyBUb3dlcih0aGlzLCBwb2ludGVyLngsIHBvaW50ZXIueSkpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUodGltZSwgZGVsdGEpIHtcclxuICAgICAgICB0aGlzLnNwYXduZXJzLmZvckVhY2godCA9PiB0LnVwZGF0ZSh0aW1lLCBkZWx0YSkpO1xyXG4gICAgICAgIHRoaXMudG93ZXJzLmZvckVhY2godCA9PiB0LnVwZGF0ZSh0aW1lLCBkZWx0YSkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdhbWVTY2VuZSB9IGZyb20gJy4vZ2FtZS1zY2VuZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAgICBHYW1lU2NlbmUsXHJcbl07Il0sInNvdXJjZVJvb3QiOiIifQ==