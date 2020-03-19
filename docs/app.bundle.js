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
    function BaddieSpawner(scene, parentGroup) {
        this.spawnDelayMS = 100;
        this.entityMaxCount = 50;
        this.elapsedSpawnTimeMS = 0;
        this.xSpawnOffset = 50;
        this.xSpawnOffsetCurrent = 0;
        this.scene = scene;
        this.baddies = this.scene.add.group({
            name: 'baddies',
            classType: baddie_1.Baddie,
            maxSize: this.entityMaxCount,
            runChildUpdate: true
        });
        this.parentGroup = parentGroup;
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
                this.parentGroup.add(baddie);
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

/***/ "./src/entity/bullet.ts":
/*!******************************!*\
  !*** ./src/entity/bullet.ts ***!
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
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet(scene) {
        var _this = _super.call(this, scene, 0, 0, 'bullet') || this;
        _this.speed = Phaser.Math.GetSpeed(500, 1);
        return _this;
    }
    Bullet.prototype.fire = function (x, y, rad) {
        this.setPosition(x, y);
        this.angularDirection = rad;
    };
    Bullet.prototype.update = function (time, delta) {
        this.x += Math.cos(this.angularDirection) * this.speed * delta;
        this.y += Math.sin(this.angularDirection) * this.speed * delta;
        if (this.x > window.innerWidth || this.x < 0
            || this.y > window.innerHeight || this.y < 0) {
            this.destroy();
        }
    };
    return Bullet;
}(Phaser.GameObjects.Sprite));
exports.Bullet = Bullet;
;


/***/ }),

/***/ "./src/entity/tower.ts":
/*!*****************************!*\
  !*** ./src/entity/tower.ts ***!
  \*****************************/
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
var bullet_1 = __webpack_require__(/*! ./bullet */ "./src/entity/bullet.ts");
var Tower = /** @class */ (function (_super) {
    __extends(Tower, _super);
    function Tower(scene, x, y, baddies) {
        var _this = _super.call(this, scene, x, y, 'tower') || this;
        _this.fillAlphaMinimum = 0.1;
        _this.fillAlphaMaximum = 1.0;
        _this.buildTimeMS = 1000;
        _this.elapsedBuildTimeMS = 0;
        _this.fireDelayMS = 200;
        _this.elapsedFireTimeMS = 0;
        _this.fireDistance = 70;
        _this.scene = scene;
        _this.baddies = baddies;
        _this.bullets = scene.physics.add.group({
            classType: bullet_1.Bullet,
            runChildUpdate: true
        });
        _this.scene.physics.add.overlap(_this.baddies, _this.bullets, _this.onShot);
        return _this;
    }
    Tower.prototype.update = function (time, delta) {
        this.elapsedBuildTimeMS += delta;
        this.elapsedFireTimeMS += delta;
        // TODO [20200318] Introduce states such as "Building",
        // "Defending", "Selling".
        if (this.isBuildingComplete()) {
            this.findTargetAndFire();
        }
        else {
            this.elapsedFireTimeMS = 0;
        }
    };
    Tower.prototype.isBuildingComplete = function () {
        return this.elapsedBuildTimeMS >= this.buildTimeMS;
    };
    Tower.prototype.isReadyToFire = function () {
        return this.elapsedFireTimeMS >= this.fireDelayMS;
    };
    Tower.prototype.findTargetAndFire = function () {
        if (!this.isReadyToFire()) {
            return;
        }
        var baddie = this.findBaddie();
        if (baddie) {
            this.shoot(baddie);
            this.elapsedFireTimeMS = 0;
        }
    };
    Tower.prototype.findBaddie = function () {
        var baddies = this.baddies.getChildren();
        for (var i = 0, l = baddies.length; i < l; i++) {
            var baddie = baddies[i];
            var distance = Phaser.Math.Distance.BetweenPoints(this, baddie);
            if (distance <= this.fireDistance) {
                return baddie;
            }
        }
    };
    Tower.prototype.shoot = function (baddie) {
        var angle = Phaser.Math.Angle.BetweenPoints(this, baddie);
        var bullet = this.bullets.get();
        bullet.fire(this.x, this.y, angle);
    };
    Tower.prototype.onShot = function (baddie, bullet) {
        baddie.destroy();
        bullet.destroy();
    };
    return Tower;
}(Phaser.GameObjects.Sprite));
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
        return _this;
    }
    GameScene.prototype.preload = function () {
        this.load.image('tower', './assets/tower.png');
        this.load.image('baddie', './assets/space-baddie.png');
        this.load.image('bullet', './assets/enemy-bullet.png');
    };
    GameScene.prototype.create = function () {
        this.towers = this.add.group({
            classType: tower_1.Tower,
            runChildUpdate: true
        });
        this.baddies = this.physics.add.group();
        this.spawners.push(new baddie_spawner_1.BaddieSpawner(this, this.baddies));
        this.input.on('pointerup', function (pointer) {
            this.towers.add(new tower_1.Tower(this, pointer.x, pointer.y, this.baddies), true);
        }, this);
    };
    GameScene.prototype.update = function (time, delta) {
        this.spawners.forEach(function (s) { return s.update(time, delta); });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0eS9iYWRkaWUtc3Bhd25lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5L2JhZGRpZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5L2J1bGxldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5L3Rvd2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9nYW1lLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNB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QztRQUV4QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLDhCQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFTLE9BQU87WUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxhQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0UsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVNLDBCQUFNLEdBQWIsVUFBYyxJQUFJLEVBQUUsS0FBSztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLENBcEM4QixNQUFNLENBQUMsS0FBSyxHQW9DMUM7QUFwQ1ksOEJBQVM7Ozs7Ozs7Ozs7Ozs7OztBQ1R0Qix3RkFBeUM7QUFFekMsa0JBQWU7SUFDWCxzQkFBUztDQUNaLENBQUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IHsgQmFkZGllIH0gZnJvbSAnLi4vZW50aXR5L2JhZGRpZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFkZGllU3Bhd25lciB7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzcGF3bkRlbGF5TVMgPSAxMDA7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVudGl0eU1heENvdW50ID0gNTA7XHJcblxyXG4gICAgcHJpdmF0ZSBiYWRkaWVzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA7XHJcbiAgICBwcml2YXRlIHBhcmVudEdyb3VwOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA7XHJcblxyXG4gICAgcHJpdmF0ZSBlbGFwc2VkU3Bhd25UaW1lTVMgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgeFNwYXduT2Zmc2V0ID0gNTA7XHJcbiAgICBwcml2YXRlIHhTcGF3bk9mZnNldEN1cnJlbnQgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCBwYXJlbnRHcm91cDogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG4gICAgICAgIHRoaXMuYmFkZGllcyA9IHRoaXMuc2NlbmUuYWRkLmdyb3VwKHtcclxuICAgICAgICAgICAgbmFtZTogJ2JhZGRpZXMnLFxyXG4gICAgICAgICAgICBjbGFzc1R5cGU6IEJhZGRpZSxcclxuICAgICAgICAgICAgbWF4U2l6ZTogdGhpcy5lbnRpdHlNYXhDb3VudCxcclxuICAgICAgICAgICAgcnVuQ2hpbGRVcGRhdGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhcmVudEdyb3VwID0gcGFyZW50R3JvdXA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUsIGRlbHRhKSB7XHJcbiAgICAgICAgdGhpcy5lbGFwc2VkU3Bhd25UaW1lTVMgKz0gZGVsdGE7XHJcbiAgICAgICAgaWYgKHRoaXMuZWxhcHNlZFNwYXduVGltZU1TID49IHRoaXMuc3Bhd25EZWxheU1TKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxhcHNlZFNwYXduVGltZU1TIC09IHRoaXMuc3Bhd25EZWxheU1TO1xyXG4gICAgICAgICAgICB0aGlzLnhTcGF3bk9mZnNldEN1cnJlbnQgKz0gdGhpcy54U3Bhd25PZmZzZXQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnhTcGF3bk9mZnNldEN1cnJlbnQgPiB3aW5kb3cuaW5uZXJXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy54U3Bhd25PZmZzZXRDdXJyZW50IC09IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBiYWRkaWUgPSB0aGlzLmJhZGRpZXMuZ2V0KCk7XHJcbiAgICAgICAgICAgIGlmIChiYWRkaWUpIHtcclxuICAgICAgICAgICAgICAgIGJhZGRpZS5zcGF3bih0aGlzLnhTcGF3bk9mZnNldEN1cnJlbnQsIDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRHcm91cC5hZGQoYmFkZGllKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn07IiwiZXhwb3J0IGNsYXNzIEJhZGRpZSBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUge1xyXG5cclxuICAgIHByaXZhdGUgaW1hZ2U6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUgJiB7IGJvZHk6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Cb2R5IH07XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzcGVlZCA9IFBoYXNlci5NYXRoLkdldFNwZWVkKDEwMCwgMSk7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCAwLCAwLCAnYmFkZGllJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd24oeCwgeSkge1xyXG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24oeCwgeSk7XHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lLCBkZWx0YSkge1xyXG4gICAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkICogZGVsdGE7XHJcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWQgKiBkZWx0YTtcclxuICAgICAgICBpZiAodGhpcy54ID4gd2luZG93LmlubmVyV2lkdGggfHwgdGhpcy55ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07IiwiZXhwb3J0IGNsYXNzIEJ1bGxldCBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUge1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3BlZWQgPSBQaGFzZXIuTWF0aC5HZXRTcGVlZCg1MDAsIDEpO1xyXG5cclxuICAgIHByaXZhdGUgYW5ndWxhckRpcmVjdGlvbjogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgMCwgMCwgJ2J1bGxldCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcmUoeCwgeSwgcmFkKSB7XHJcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih4LCB5KTtcclxuICAgICAgICB0aGlzLmFuZ3VsYXJEaXJlY3Rpb24gPSByYWQ7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUsIGRlbHRhKSB7XHJcbiAgICAgICAgdGhpcy54ICs9IE1hdGguY29zKHRoaXMuYW5ndWxhckRpcmVjdGlvbikgKiB0aGlzLnNwZWVkICogZGVsdGE7XHJcbiAgICAgICAgdGhpcy55ICs9IE1hdGguc2luKHRoaXMuYW5ndWxhckRpcmVjdGlvbikgKiB0aGlzLnNwZWVkICogZGVsdGE7XHJcbiAgICAgICAgaWYgKHRoaXMueCA+IHdpbmRvdy5pbm5lcldpZHRoIHx8IHRoaXMueCA8IDBcclxuICAgICAgICAgICAgICAgIHx8IHRoaXMueSA+IHdpbmRvdy5pbm5lckhlaWdodCB8fCB0aGlzLnkgPCAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59OyIsImltcG9ydCB7IEJ1bGxldCB9IGZyb20gXCIuL2J1bGxldFwiO1xyXG5pbXBvcnQgeyBCYWRkaWUgfSBmcm9tIFwiLi9iYWRkaWVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUb3dlciBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUge1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmlsbEFscGhhTWluaW11bSA9IDAuMTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmlsbEFscGhhTWF4aW11bSA9IDEuMDtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGJ1aWxkVGltZU1TID0gMTAwMDtcclxuICAgIHByaXZhdGUgZWxhcHNlZEJ1aWxkVGltZU1TID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZpcmVEZWxheU1TID0gMjAwO1xyXG4gICAgcHJpdmF0ZSBlbGFwc2VkRmlyZVRpbWVNUyA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBmaXJlRGlzdGFuY2UgPSA3MDtcclxuXHJcbiAgICBwdWJsaWMgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuICAgIHByaXZhdGUgYnVsbGV0czogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG4gICAgcHJpdmF0ZSBiYWRkaWVzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGJhZGRpZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCB4LCB5LCAndG93ZXInKTtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgdGhpcy5iYWRkaWVzID0gYmFkZGllcztcclxuICAgICAgICB0aGlzLmJ1bGxldHMgPSBzY2VuZS5waHlzaWNzLmFkZC5ncm91cCh7XHJcbiAgICAgICAgICAgIGNsYXNzVHlwZTogQnVsbGV0LFxyXG4gICAgICAgICAgICBydW5DaGlsZFVwZGF0ZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2NlbmUucGh5c2ljcy5hZGQub3ZlcmxhcCh0aGlzLmJhZGRpZXMsIHRoaXMuYnVsbGV0cywgdGhpcy5vblNob3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lLCBkZWx0YSkge1xyXG4gICAgICAgIHRoaXMuZWxhcHNlZEJ1aWxkVGltZU1TICs9IGRlbHRhO1xyXG4gICAgICAgIHRoaXMuZWxhcHNlZEZpcmVUaW1lTVMgKz0gZGVsdGE7XHJcblxyXG4gICAgICAgIC8vIFRPRE8gWzIwMjAwMzE4XSBJbnRyb2R1Y2Ugc3RhdGVzIHN1Y2ggYXMgXCJCdWlsZGluZ1wiLFxyXG4gICAgICAgIC8vIFwiRGVmZW5kaW5nXCIsIFwiU2VsbGluZ1wiLlxyXG4gICAgICAgIGlmICh0aGlzLmlzQnVpbGRpbmdDb21wbGV0ZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluZFRhcmdldEFuZEZpcmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsYXBzZWRGaXJlVGltZU1TID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc0J1aWxkaW5nQ29tcGxldGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxhcHNlZEJ1aWxkVGltZU1TID49IHRoaXMuYnVpbGRUaW1lTVM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc1JlYWR5VG9GaXJlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsYXBzZWRGaXJlVGltZU1TID49IHRoaXMuZmlyZURlbGF5TVM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaW5kVGFyZ2V0QW5kRmlyZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNSZWFkeVRvRmlyZSgpKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJhZGRpZSA9IHRoaXMuZmluZEJhZGRpZSgpO1xyXG4gICAgICAgIGlmIChiYWRkaWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG9vdChiYWRkaWUpO1xyXG4gICAgICAgICAgICB0aGlzLmVsYXBzZWRGaXJlVGltZU1TID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaW5kQmFkZGllKCk6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUge1xyXG4gICAgICAgIGxldCBiYWRkaWVzID0gdGhpcy5iYWRkaWVzLmdldENoaWxkcmVuKCk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGJhZGRpZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiYWRkaWUgPSBiYWRkaWVzW2ldIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IFBoYXNlci5NYXRoLkRpc3RhbmNlLkJldHdlZW5Qb2ludHModGhpcywgYmFkZGllKTtcclxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDw9IHRoaXMuZmlyZURpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYmFkZGllO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvb3QoYmFkZGllOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKSB7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gUGhhc2VyLk1hdGguQW5nbGUuQmV0d2VlblBvaW50cyh0aGlzLCBiYWRkaWUpO1xyXG4gICAgICAgIGxldCBidWxsZXQgPSB0aGlzLmJ1bGxldHMuZ2V0KCk7XHJcbiAgICAgICAgYnVsbGV0LmZpcmUodGhpcy54LCB0aGlzLnksIGFuZ2xlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uU2hvdChiYWRkaWU6IEJhZGRpZSwgYnVsbGV0OiBCdWxsZXQpIHtcclxuICAgICAgICBiYWRkaWUuZGVzdHJveSgpO1xyXG4gICAgICAgIGJ1bGxldC5kZXN0cm95KCk7XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5pbXBvcnQgU2NlbmVzIGZyb20gJy4vc2NlbmUnO1xyXG5cclxuY29uc3QgZ2FtZUNvbmZpZzogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcclxuICAgIHRpdGxlOiAnUGhhc2UgOTgnLFxyXG5cclxuICAgIHR5cGU6IFBoYXNlci5BVVRPLFxyXG5cclxuICAgIHNjYWxlOiB7XHJcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgfSxcclxuXHJcbiAgICBwaHlzaWNzOiB7XHJcbiAgICAgICAgZGVmYXVsdDogJ2FyY2FkZScsXHJcbiAgICAgICAgYXJjYWRlOiB7XHJcbiAgICAgICAgICAgIGRlYnVnOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBzY2VuZTogU2NlbmVzLFxyXG5cclxuICAgIHBhcmVudDogJ2NvbnRlbnQnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMCcsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTsiLCJpbXBvcnQgeyBCYWRkaWVTcGF3bmVyIH0gZnJvbSAnLi4vZW50aXR5L2JhZGRpZS1zcGF3bmVyJztcclxuaW1wb3J0IHsgVG93ZXIgfSBmcm9tICcuLi9lbnRpdHkvdG93ZXInO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICBrZXk6ICdQaGFzZTk4JyxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cclxuICAgIC8vIFRPRE8gWzIwMjAwMzE4XSBUaGUgY29uZmlndXJhdGlvbiBvZiBzcGF3bmVyc1xyXG4gICAgLy8gd291bGQgbGF0ZXIgYmVsb25nIHdpdGggdGhlIGlkZWEgb2YgYSBzcGVjaWZpY1xyXG4gICAgLy8gXCJsZXZlbFwiIGFuZCBub3QgbGl2ZSB3aXRoaW4gdGhlIHJvb3QgR2FtZVNjZW5lLlxyXG4gICAgcHJpdmF0ZSBzcGF3bmVyczogQmFkZGllU3Bhd25lcltdID0gW107XHJcbiAgICBwcml2YXRlIGJhZGRpZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cDtcclxuICAgIHByaXZhdGUgdG93ZXJzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmVsb2FkKCkge1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgndG93ZXInLCAnLi9hc3NldHMvdG93ZXIucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdiYWRkaWUnLCAnLi9hc3NldHMvc3BhY2UtYmFkZGllLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnYnVsbGV0JywgJy4vYXNzZXRzL2VuZW15LWJ1bGxldC5wbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKCkge1xyXG4gICAgICAgIHRoaXMudG93ZXJzID0gdGhpcy5hZGQuZ3JvdXAoe1xyXG4gICAgICAgICAgICBjbGFzc1R5cGU6IFRvd2VyLFxyXG4gICAgICAgICAgICBydW5DaGlsZFVwZGF0ZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJhZGRpZXMgPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3Bhd25lcnMucHVzaChuZXcgQmFkZGllU3Bhd25lcih0aGlzLCB0aGlzLmJhZGRpZXMpKTtcclxuICAgICAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVydXAnLCBmdW5jdGlvbihwb2ludGVyKXtcclxuICAgICAgICAgICAgdGhpcy50b3dlcnMuYWRkKG5ldyBUb3dlcih0aGlzLCBwb2ludGVyLngsIHBvaW50ZXIueSwgdGhpcy5iYWRkaWVzKSwgdHJ1ZSk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSh0aW1lLCBkZWx0YSkge1xyXG4gICAgICAgIHRoaXMuc3Bhd25lcnMuZm9yRWFjaChzID0+IHMudXBkYXRlKHRpbWUsIGRlbHRhKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSAnLi9nYW1lLXNjZW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuICAgIEdhbWVTY2VuZSxcclxuXTsiXSwic291cmNlUm9vdCI6IiJ9