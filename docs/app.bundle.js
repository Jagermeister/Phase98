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

/***/ "./src/entity/baddie/baddie-path-spawner.ts":
/*!**************************************************!*\
  !*** ./src/entity/baddie/baddie-path-spawner.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var baddie_1 = __webpack_require__(/*! ./baddie */ "./src/entity/baddie/baddie.ts");
var BaddiePathSpawner = /** @class */ (function () {
    function BaddiePathSpawner(scene, parentGroup) {
        this.spawnDelayMS = 600;
        this.travelTimeMS = 8000;
        this.entityMaxCount = 80;
        this.elapsedSpawnTimeMS = 0;
        this.xSpawnOffset = 20;
        this.xSpawnOffsetCurrent = 0;
        this.scene = scene;
        this.baddies = this.scene.add.group({
            name: 'baddies-path',
            classType: baddie_1.Baddie,
            maxSize: this.entityMaxCount,
            runChildUpdate: true
        });
        this.parentGroup = parentGroup;
        this.create();
    }
    BaddiePathSpawner.prototype.create = function () {
        var _this = this;
        for (var i_1 = 0; i_1 < this.entityMaxCount; i_1++) {
            var baddie = this.baddies.get();
            baddie.t = 0;
            baddie.i = i_1;
            baddie.vec = new Phaser.Math.Vector2();
            this.parentGroup.add(baddie);
        }
        this.path = new Phaser.Curves.Spline([
            20, 500,
            260, 450,
            300, 150,
            550, 145,
            745, 256,
            1045, 256,
            1100, 500
        ]);
        var points = this.path.points;
        for (var i = 0; i < points.length; i++) {
            var point = points[i];
            var handle = this.scene.add.image(point.x, point.y, 'dragcircle', 0).setInteractive();
            handle.setData('vector', point);
            this.scene.input.setDraggable(handle);
        }
        this.scene.input.on('dragstart', function (pointer, gameObject) {
            gameObject.setFrame(1);
        });
        this.scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
            gameObject.data.get('vector').set(dragX, dragY);
        });
        this.scene.input.on('dragend', function (pointer, gameObject) {
            gameObject.setFrame(0);
        });
        this.scene.tweens.add({
            targets: this.baddies.getChildren(),
            t: 1,
            ease: 'Linear',
            duration: this.travelTimeMS,
            repeat: -1,
            delay: function (t) { return t.i * _this.spawnDelayMS; }
        });
        this.graphics = this.scene.add.graphics();
    };
    BaddiePathSpawner.prototype.update = function (time, delta) {
        this.graphics.clear();
        this.graphics.lineStyle(1, 0xff00ff, 0.25);
        this.path.draw(this.graphics, 64);
        this.graphics.fillStyle(0xffff00, 1);
        var children = this.baddies.getChildren();
        for (var i = 0, l = children.length; i < l; i++) {
            var p = children[i];
            this.path.getPoint(p.t, p.vec);
            p.x = p.vec.x;
            p.y = p.vec.y;
        }
    };
    return BaddiePathSpawner;
}());
exports.BaddiePathSpawner = BaddiePathSpawner;
;


/***/ }),

/***/ "./src/entity/baddie/baddie-spawner.ts":
/*!*********************************************!*\
  !*** ./src/entity/baddie/baddie-spawner.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var baddie_1 = __webpack_require__(/*! ../baddie/baddie */ "./src/entity/baddie/baddie.ts");
var BaddieSpawner = /** @class */ (function () {
    function BaddieSpawner(scene, parentGroup) {
        this.spawnDelayMS = 150;
        this.entityMaxCount = 75;
        this.elapsedSpawnTimeMS = 0;
        this.xSpawnOffset = 40;
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
            if (this.xSpawnOffsetCurrent > window.innerWidth / 2) {
                this.xSpawnOffsetCurrent -= window.innerWidth / 2;
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

/***/ "./src/entity/baddie/baddie.ts":
/*!*************************************!*\
  !*** ./src/entity/baddie/baddie.ts ***!
  \*************************************/
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
        _this.speed = Phaser.Math.GetSpeed(125, 1);
        _this.healthMax = 100;
        _this.reset();
        return _this;
    }
    Baddie.prototype.reset = function () {
        this.health = this.healthMax;
        this.effects = [];
        this.effectNonStacking = {};
        this.hasTakenDamage = false;
    };
    Baddie.prototype.spawn = function (x, y) {
        this.reset();
        this.setPosition(x, y);
        this.setActive(true);
        this.setVisible(true);
    };
    Baddie.prototype.update = function (time, delta) {
        for (var i = 0, l = this.effects.length; i < l; i++) {
            var effect = this.effects[i];
            effect.update(delta);
            if (effect.isCompleted()) {
                this.effects.splice(i, 1);
                i--;
                l--;
            }
        }
        this.checkForDeath();
        if (this.hasTakenDamage) {
            this.setTintFill(0xff0000);
            this.hasTakenDamage = false;
        }
        else {
            this.clearTint();
        }
        var movementMultipler = this.effects.reduce(function (p, c) { return p * c.onMovement(); }, 1.0);
        this.x += this.speed / 4 * delta * movementMultipler;
        this.y += this.speed * delta * movementMultipler;
        if (this.x > window.innerWidth || this.y > window.innerHeight) {
            this.setActive(false);
            this.setVisible(false);
        }
    };
    Baddie.prototype.takeDamage = function (damage) {
        this.health -= damage;
        this.hasTakenDamage = true;
        this.checkForDeath();
    };
    Baddie.prototype.checkForDeath = function () {
        if (this.health <= 0) {
            this.setActive(false);
            this.setVisible(false);
        }
    };
    Baddie.prototype.applyEffect = function (effect) {
        // TODO 20200319 Should be moved to a manager
        // which knows how to add/remove effects.
        if (!effect.isStackable && effect.name in this.effectNonStacking) {
            delete this.effectNonStacking[effect.name];
            for (var i = 0, l = this.effects.length; i < l; i++) {
                var e = this.effects[i];
                if (e.name == effect.name) {
                    this.effects.splice(i, 1);
                    i--;
                    l--;
                }
            }
        }
        this.effects.push(effect);
        if (!effect.isStackable) {
            this.effectNonStacking[effect.name] = effect;
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

/***/ "./src/entity/effect/effect.ts":
/*!*************************************!*\
  !*** ./src/entity/effect/effect.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
;
var Effect = /** @class */ (function () {
    function Effect(baddie) {
        this.elapsed = 0;
        this.movementMultiplier = 1.0;
        this.baddie = baddie;
    }
    Effect.prototype.isCompleted = function () {
        return this.elapsed >= this.duration;
    };
    Effect.prototype.update = function (delta) {
        this.elapsed += delta;
    };
    Effect.prototype.onMovement = function () {
        return this.movementMultiplier;
    };
    ;
    return Effect;
}());
exports.Effect = Effect;


/***/ }),

/***/ "./src/entity/effect/lightning-chain-effect.ts":
/*!*****************************************************!*\
  !*** ./src/entity/effect/lightning-chain-effect.ts ***!
  \*****************************************************/
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
var effect_1 = __webpack_require__(/*! ./effect */ "./src/entity/effect/effect.ts");
var LigntningChainEffect = /** @class */ (function (_super) {
    __extends(LigntningChainEffect, _super);
    function LigntningChainEffect(baddie, baddies, jumpsLeft) {
        var _this = _super.call(this, baddie) || this;
        _this.name = "CHAIN_LIGHTNING";
        _this.isStackable = false;
        _this.duration = 300;
        _this.jumpDuration = 250;
        _this.jumpDurationElapsed = 0;
        _this.damage = 1;
        _this._isCompleted = false;
        _this.baddies = baddies;
        _this.jumpsLeft = jumpsLeft;
        _this.baddie.takeDamage(_this.damage);
        return _this;
    }
    LigntningChainEffect.prototype.update = function (delta) {
        _super.prototype.update.call(this, delta);
        this.jumpDurationElapsed += delta;
        if (this.jumpDurationElapsed > this.jumpDuration) {
            this.jumpDurationElapsed -= this.jumpDuration;
            if (this.jumpsLeft) {
                var closestBaddie = this.closest();
                if (closestBaddie) {
                    closestBaddie.applyEffect(new LigntningChainEffect(closestBaddie, this.baddies, this.jumpsLeft - 1));
                }
                this._isCompleted = true;
            }
        }
    };
    LigntningChainEffect.prototype.isCompleted = function () {
        return this._isCompleted;
    };
    LigntningChainEffect.prototype.closest = function () {
        // TODO [20200320] Move storage of all enemies into
        // a k-d tree to allow for fast space-based search.
        var range = 50;
        var baddies = this.baddies.getChildren();
        var closeBaddies = [];
        for (var i = 0, l = baddies.length; i < l; i++) {
            var baddie = baddies[i];
            if (this.baddie !== baddie) {
                var distance = Math.abs(Phaser.Math.Distance.BetweenPoints(this.baddie, baddie));
                if (distance < range) {
                    closeBaddies.push(baddie);
                }
            }
        }
        if (closeBaddies) {
            return closeBaddies[Math.floor(Math.random() * closeBaddies.length)];
        }
    };
    return LigntningChainEffect;
}(effect_1.Effect));
exports.LigntningChainEffect = LigntningChainEffect;


/***/ }),

/***/ "./src/entity/effect/slow-effect.ts":
/*!******************************************!*\
  !*** ./src/entity/effect/slow-effect.ts ***!
  \******************************************/
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
var effect_1 = __webpack_require__(/*! ./effect */ "./src/entity/effect/effect.ts");
var SlowEffect = /** @class */ (function (_super) {
    __extends(SlowEffect, _super);
    function SlowEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "SLOW";
        _this.isStackable = false;
        _this.duration = 2000;
        _this.movementMultiplier = 0.5;
        return _this;
    }
    return SlowEffect;
}(effect_1.Effect));
exports.SlowEffect = SlowEffect;


/***/ }),

/***/ "./src/entity/tower/tower.ts":
/*!***********************************!*\
  !*** ./src/entity/tower/tower.ts ***!
  \***********************************/
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
var bullet_1 = __webpack_require__(/*! ../bullet */ "./src/entity/bullet.ts");
var slow_effect_1 = __webpack_require__(/*! ../effect/slow-effect */ "./src/entity/effect/slow-effect.ts");
var Tower = /** @class */ (function (_super) {
    __extends(Tower, _super);
    function Tower(scene, x, y, typeIndex, baddies) {
        var _this = _super.call(this, scene, x, y, 'towers') || this;
        _this.fillAlphaMinimum = 0.1;
        _this.fillAlphaMaximum = 1.0;
        _this.buildTimeMS = 1000;
        _this.elapsedBuildTimeMS = 0;
        _this.fireDelayMS = 120;
        _this.elapsedFireTimeMS = 0;
        _this.fireDistance = 120;
        _this.damage = 80;
        scene.anims.create({
            key: 'building',
            frames: scene.anims.generateFrameNames('towers', { start: 0, end: 0 }),
            duration: _this.buildTimeMS
        });
        scene.anims.create({
            key: 'basic',
            frames: scene.anims.generateFrameNames('towers', { start: 2, end: 2 })
        });
        scene.anims.create({
            key: 'upgrading',
            frames: scene.anims.generateFrameNames('towers', { start: 1, end: 1 }),
            duration: _this.buildTimeMS
        });
        scene.anims.create({
            key: 'advanced',
            frames: scene.anims.generateFrameNames('towers', { start: 3, end: 3 })
        });
        scene.anims.create({
            key: 'slow',
            frames: scene.anims.generateFrameNames('towers', { start: 4, end: 4 })
        });
        _this.typeIndex = typeIndex;
        _this.scene = scene;
        _this.baddies = baddies;
        _this.bullets = scene.physics.add.group({
            classType: bullet_1.Bullet,
            runChildUpdate: true
        });
        _this.scene.physics.add.overlap(_this.baddies, _this.bullets, _this.onShotCallback());
        var completedAnimation = _this.typeIndex == 1 ? 'basic'
            : (_this.typeIndex == 2 ? 'advanced' : 'slow');
        _this.anims.play('building', true).on('animationcomplete', function () { return _this.anims.play(completedAnimation, true); });
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
            if (baddie.active) {
                var distance = Phaser.Math.Distance.BetweenPoints(this, baddie);
                if (distance <= this.fireDistance) {
                    return baddie;
                }
            }
        }
    };
    Tower.prototype.shoot = function (baddie) {
        var angle = Phaser.Math.Angle.BetweenPoints(this, baddie);
        var bullet = this.bullets.get();
        bullet.fire(this.x, this.y, angle);
    };
    Tower.prototype.onShotCallback = function () {
        var _this = this;
        return function (baddie, bullet) {
            if (_this.typeIndex == 3) {
                baddie.takeDamage(_this.damage / 4);
                baddie.applyEffect(new slow_effect_1.SlowEffect(baddie));
            }
            else {
                baddie.takeDamage(_this.damage);
            }
            bullet.destroy();
        };
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
    backgroundColor: '#ffffff',
};
exports.game = new Phaser.Game(gameConfig);


/***/ }),

/***/ "./src/map/map.ts":
/*!************************!*\
  !*** ./src/map/map.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Map = /** @class */ (function () {
    function Map(scene) {
        this.tileWidth = 32;
        this.tileHeight = 32;
        this.levelData = [
            [29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,],
            [29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 5, 6, 7, 29,],
            [29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 13, 14, 15, 29,],
            [29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 21, 22, 23, 29,],
            [29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 5, 6, 6, 6, 7, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,],
            [29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 13, 14, 14, 14, 15, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,],
            [29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 21, 14, 14, 14, 23, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,],
            [29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 21, 14, 23, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,],
            [29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 22, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,],
            [29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,],
            [29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,],
            [29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,],
            [29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 30, 30, 30, 29, 29, 29, 29, 29, 29, 29,],
            [29, 29, 29, 29, 29, 29, 30, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,],
            [29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,],
            [29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29,],
        ];
        this.map = scene.make.tilemap({
            data: this.levelData,
            tileWidth: this.tileWidth,
            tileHeight: this.tileHeight
        });
        var tileset = this.map.addTilesetImage('desert-tiles');
        this.layer = this.map.createStaticLayer(0, tileset, 0, 0);
    }
    Map.prototype.setTileIndexCallback = function (indexes, callback, callbackContext, layer) {
        this.map.setTileIndexCallback(indexes, callback, callbackContext);
    };
    return Map;
}());
exports.Map = Map;


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
var baddie_spawner_1 = __webpack_require__(/*! ../entity/baddie/baddie-spawner */ "./src/entity/baddie/baddie-spawner.ts");
var tower_1 = __webpack_require__(/*! ../entity/tower/tower */ "./src/entity/tower/tower.ts");
var slow_effect_1 = __webpack_require__(/*! ../entity/effect/slow-effect */ "./src/entity/effect/slow-effect.ts");
var lightning_chain_effect_1 = __webpack_require__(/*! ../entity/effect/lightning-chain-effect */ "./src/entity/effect/lightning-chain-effect.ts");
var map_1 = __webpack_require__(/*! ../map/map */ "./src/map/map.ts");
var baddie_path_spawner_1 = __webpack_require__(/*! ../entity/baddie/baddie-path-spawner */ "./src/entity/baddie/baddie-path-spawner.ts");
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
        _this.isPointerMiddleDown = false;
        _this.towerTypeIndex = 1;
        return _this;
    }
    GameScene.prototype.preload = function () {
        this.load.image('tower', './assets/tower.png');
        this.load.spritesheet('towers', './assets/towers.png', { frameWidth: 64, frameHeight: 65 });
        this.load.image('baddie', './assets/space-baddie.png');
        this.load.image('bullet', './assets/enemy-bullet.png');
        this.load.image('desert-tiles', './assets/tmw_desert_spacing.png');
        this.load.image('dragcircle', './assets/orb-blue.png');
    };
    GameScene.prototype.create = function () {
        this.map = new map_1.Map(this);
        this.map.setTileIndexCallback([14], this.applySlowEffect, this);
        this.map.setTileIndexCallback([30], this.applyLigntningChainEffect, this);
        this.towers = this.add.group({
            classType: tower_1.Tower,
            runChildUpdate: true
        });
        this.baddies = this.physics.add.group();
        this.spawners.push(new baddie_spawner_1.BaddieSpawner(this, this.baddies));
        this.spawners.push(new baddie_path_spawner_1.BaddiePathSpawner(this, this.baddies));
        this.setupTowerEvents();
    };
    GameScene.prototype.update = function (time, delta) {
        this.physics.collide(this.baddies, this.map.layer);
        this.spawners.forEach(function (s) { return s.update(time, delta); });
    };
    GameScene.prototype.setupTowerEvents = function () {
        var _this = this;
        this.input.keyboard.on('keydown-ONE', function () { return _this.setTowerType(1); }, this);
        this.input.keyboard.on('keydown-TWO', function () { return _this.setTowerType(2); }, this);
        this.input.keyboard.on('keydown-THREE', function () { return _this.setTowerType(3); }, this);
        this.input.on('pointerdown', this.pointStateUpdate, this);
        this.input.on('pointerup', this.towerAdd, this);
    };
    GameScene.prototype.setTowerType = function (towerType) {
        this.towerTypeIndex = towerType;
    };
    GameScene.prototype.pointStateUpdate = function (pointer) {
        this.isPointerMiddleDown = pointer.middleButtonDown();
    };
    GameScene.prototype.towerAdd = function (pointer) {
        if (this.isPointerMiddleDown && !pointer.middleButtonDown()) {
            this.isPointerMiddleDown = false;
            this.towers.add(new tower_1.Tower(this, pointer.x, pointer.y, this.towerTypeIndex, this.baddies), true);
        }
    };
    GameScene.prototype.applySlowEffect = function (baddie, tile) {
        baddie.applyEffect(new slow_effect_1.SlowEffect(baddie));
    };
    GameScene.prototype.applyLigntningChainEffect = function (baddie, tile) {
        baddie.applyEffect(new lightning_chain_effect_1.LigntningChainEffect(baddie, this.baddies, 6));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0eS9iYWRkaWUvYmFkZGllLXBhdGgtc3Bhd25lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5L2JhZGRpZS9iYWRkaWUtc3Bhd25lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5L2JhZGRpZS9iYWRkaWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0eS9idWxsZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0eS9lZmZlY3QvZWZmZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdHkvZWZmZWN0L2xpZ2h0bmluZy1jaGFpbi1lZmZlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0eS9lZmZlY3Qvc2xvdy1lZmZlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0eS90b3dlci90b3dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwL21hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvZ2FtZS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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LEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUc7WUFDbEosQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRztZQUMvSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFHO1lBQ2xKLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUc7WUFDbEosQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRztZQUM3SSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFHO1lBQ2xKLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUc7WUFDbEosQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRztZQUNsSixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFHO1lBQ2xKLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUc7WUFDbEosQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRztZQUNsSixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFJO1lBQ25KLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUk7WUFDbkosQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBSTtZQUNuSixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUs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QUksRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDbkc7SUFDTCxDQUFDO0lBRU8sbUNBQWUsR0FBdkIsVUFBd0IsTUFBTSxFQUFFLElBQUk7UUFDaEMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLHdCQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU8sNkNBQXlCLEdBQWpDLFVBQWtDLE1BQU0sRUFBRSxJQUFJO1FBQzFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSw2Q0FBb0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUMsQ0FsRjhCLE1BQU0sQ0FBQyxLQUFLLEdBa0YxQztBQWxGWSw4QkFBUzs7Ozs7Ozs7Ozs7Ozs7O0FDYnRCLHdGQUF5QztBQUV6QyxrQkFBZTtJQUNYLHNCQUFTO0NBQ1osQ0FBQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgeyBCYWRkaWUgfSBmcm9tICcuL2JhZGRpZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFkZGllUGF0aFNwYXduZXIge1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3Bhd25EZWxheU1TID0gNjAwO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0cmF2ZWxUaW1lTVMgPSA4MDAwO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBlbnRpdHlNYXhDb3VudCA9IDgwO1xyXG5cclxuICAgIHByaXZhdGUgYmFkZGllczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRHcm91cDogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG5cclxuICAgIHByaXZhdGUgZWxhcHNlZFNwYXduVGltZU1TID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHhTcGF3bk9mZnNldCA9IDIwO1xyXG4gICAgcHJpdmF0ZSB4U3Bhd25PZmZzZXRDdXJyZW50ID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcblxyXG4gICAgcHJpdmF0ZSBwYXRoOiBQaGFzZXIuQ3VydmVzLlNwbGluZTtcclxuICAgIHByaXZhdGUgZ3JhcGhpY3M6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCBwYXJlbnRHcm91cDogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG4gICAgICAgIHRoaXMuYmFkZGllcyA9IHRoaXMuc2NlbmUuYWRkLmdyb3VwKHtcclxuICAgICAgICAgICAgbmFtZTogJ2JhZGRpZXMtcGF0aCcsXHJcbiAgICAgICAgICAgIGNsYXNzVHlwZTogQmFkZGllLFxyXG4gICAgICAgICAgICBtYXhTaXplOiB0aGlzLmVudGl0eU1heENvdW50LFxyXG4gICAgICAgICAgICBydW5DaGlsZFVwZGF0ZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50R3JvdXAgPSBwYXJlbnRHcm91cDtcclxuICAgICAgICB0aGlzLmNyZWF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW50aXR5TWF4Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYmFkZGllID0gdGhpcy5iYWRkaWVzLmdldCgpO1xyXG4gICAgICAgICAgICBiYWRkaWUudCA9IDA7XHJcbiAgICAgICAgICAgIGJhZGRpZS5pID0gaTtcclxuICAgICAgICAgICAgYmFkZGllLnZlYyA9IG5ldyBQaGFzZXIuTWF0aC5WZWN0b3IyKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50R3JvdXAuYWRkKGJhZGRpZSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgdGhpcy5wYXRoID0gbmV3IFBoYXNlci5DdXJ2ZXMuU3BsaW5lKFtcclxuICAgICAgICAgICAgMjAsIDUwMCxcclxuICAgICAgICAgICAgMjYwLCA0NTAsXHJcbiAgICAgICAgICAgIDMwMCwgMTUwLFxyXG4gICAgICAgICAgICA1NTAsIDE0NSxcclxuICAgICAgICAgICAgNzQ1LCAyNTYsXHJcbiAgICAgICAgICAgIDEwNDUsIDI1NixcclxuICAgICAgICAgICAgMTEwMCwgNTAwXHJcbiAgICAgICAgXSk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBwb2ludHMgPSB0aGlzLnBhdGgucG9pbnRzO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHBvaW50ID0gcG9pbnRzW2ldO1xyXG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UocG9pbnQueCwgcG9pbnQueSwgJ2RyYWdjaXJjbGUnLCAwKS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgICAgICAgICBoYW5kbGUuc2V0RGF0YSgndmVjdG9yJywgcG9pbnQpO1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmlucHV0LnNldERyYWdnYWJsZShoYW5kbGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS5pbnB1dC5vbignZHJhZ3N0YXJ0JywgZnVuY3Rpb24gKHBvaW50ZXIsIGdhbWVPYmplY3QpIHtcclxuICAgICAgICAgICAgZ2FtZU9iamVjdC5zZXRGcmFtZSgxKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS5pbnB1dC5vbignZHJhZycsIGZ1bmN0aW9uIChwb2ludGVyLCBnYW1lT2JqZWN0LCBkcmFnWCwgZHJhZ1kpIHtcclxuICAgICAgICAgICAgZ2FtZU9iamVjdC54ID0gZHJhZ1g7XHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QueSA9IGRyYWdZO1xyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LmRhdGEuZ2V0KCd2ZWN0b3InKS5zZXQoZHJhZ1gsIGRyYWdZKTtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMuc2NlbmUuaW5wdXQub24oJ2RyYWdlbmQnLCBmdW5jdGlvbiAocG9pbnRlciwgZ2FtZU9iamVjdCkge1xyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LnNldEZyYW1lKDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcclxuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5iYWRkaWVzLmdldENoaWxkcmVuKCksXHJcbiAgICAgICAgICAgIHQ6IDEsXHJcbiAgICAgICAgICAgIGVhc2U6ICdMaW5lYXInLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy50cmF2ZWxUaW1lTVMsXHJcbiAgICAgICAgICAgIHJlcGVhdDogLTEsXHJcbiAgICAgICAgICAgIGRlbGF5OiB0ID0+IHQuaSAqIHRoaXMuc3Bhd25EZWxheU1TXHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICB0aGlzLmdyYXBoaWNzID0gdGhpcy5zY2VuZS5hZGQuZ3JhcGhpY3MoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSwgZGVsdGEpIHtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lU3R5bGUoMSwgMHhmZjAwZmYsIDAuMjUpO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5wYXRoLmRyYXcodGhpcy5ncmFwaGljcywgNjQpO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5maWxsU3R5bGUoMHhmZmZmMDAsIDEpO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5iYWRkaWVzLmdldENoaWxkcmVuKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHAgPSBjaGlsZHJlbltpXSBhcyBhbnk7XHJcbiAgICAgICAgICAgIHRoaXMucGF0aC5nZXRQb2ludChwLnQsIHAudmVjKTtcclxuICAgICAgICAgICAgcC54ID0gcC52ZWMueDtcclxuICAgICAgICAgICAgcC55ID0gcC52ZWMueTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59OyIsImltcG9ydCB7IEJhZGRpZSB9IGZyb20gJy4uL2JhZGRpZS9iYWRkaWUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhZGRpZVNwYXduZXIge1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3Bhd25EZWxheU1TID0gMTUwO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBlbnRpdHlNYXhDb3VudCA9IDc1O1xyXG5cclxuICAgIHByaXZhdGUgYmFkZGllczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRHcm91cDogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG5cclxuICAgIHByaXZhdGUgZWxhcHNlZFNwYXduVGltZU1TID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHhTcGF3bk9mZnNldCA9IDQwO1xyXG4gICAgcHJpdmF0ZSB4U3Bhd25PZmZzZXRDdXJyZW50ID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgcGFyZW50R3JvdXA6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cCkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgICAgICB0aGlzLmJhZGRpZXMgPSB0aGlzLnNjZW5lLmFkZC5ncm91cCh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdiYWRkaWVzJyxcclxuICAgICAgICAgICAgY2xhc3NUeXBlOiBCYWRkaWUsXHJcbiAgICAgICAgICAgIG1heFNpemU6IHRoaXMuZW50aXR5TWF4Q291bnQsXHJcbiAgICAgICAgICAgIHJ1bkNoaWxkVXBkYXRlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRHcm91cCA9IHBhcmVudEdyb3VwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lLCBkZWx0YSkge1xyXG4gICAgICAgIHRoaXMuZWxhcHNlZFNwYXduVGltZU1TICs9IGRlbHRhO1xyXG4gICAgICAgIGlmICh0aGlzLmVsYXBzZWRTcGF3blRpbWVNUyA+PSB0aGlzLnNwYXduRGVsYXlNUykge1xyXG4gICAgICAgICAgICB0aGlzLmVsYXBzZWRTcGF3blRpbWVNUyAtPSB0aGlzLnNwYXduRGVsYXlNUztcclxuICAgICAgICAgICAgdGhpcy54U3Bhd25PZmZzZXRDdXJyZW50ICs9IHRoaXMueFNwYXduT2Zmc2V0O1xyXG4gICAgICAgICAgICBpZiAodGhpcy54U3Bhd25PZmZzZXRDdXJyZW50ID4gd2luZG93LmlubmVyV2lkdGgvMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy54U3Bhd25PZmZzZXRDdXJyZW50IC09IHdpbmRvdy5pbm5lcldpZHRoLzI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGJhZGRpZSA9IHRoaXMuYmFkZGllcy5nZXQoKTtcclxuICAgICAgICAgICAgaWYgKGJhZGRpZSkge1xyXG4gICAgICAgICAgICAgICAgYmFkZGllLnNwYXduKHRoaXMueFNwYXduT2Zmc2V0Q3VycmVudCwgMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEdyb3VwLmFkZChiYWRkaWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufTsiLCJpbXBvcnQgeyBJRW50aXR5RWZmZWN0IH0gZnJvbSBcIi4uL2VmZmVjdC9lZmZlY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYWRkaWUgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlIHtcclxuXHJcbiAgICBwcml2YXRlIGltYWdlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlICYgeyBib2R5OiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuQm9keSB9O1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3BlZWQgPSBQaGFzZXIuTWF0aC5HZXRTcGVlZCgxMjUsIDEpO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaGVhbHRoTWF4ID0gMTAwO1xyXG4gICAgcHJpdmF0ZSBoZWFsdGg6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIGhhc1Rha2VuRGFtYWdlOiBib29sZWFuO1xyXG5cclxuICAgIHByaXZhdGUgZWZmZWN0czogSUVudGl0eUVmZmVjdFtdO1xyXG4gICAgcHJpdmF0ZSBlZmZlY3ROb25TdGFja2luZzogUmVjb3JkPHN0cmluZywgSUVudGl0eUVmZmVjdD47XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCAwLCAwLCAnYmFkZGllJyk7XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSB0aGlzLmhlYWx0aE1heDtcclxuICAgICAgICB0aGlzLmVmZmVjdHMgPSBbXTtcclxuICAgICAgICB0aGlzLmVmZmVjdE5vblN0YWNraW5nID0ge307XHJcbiAgICAgICAgdGhpcy5oYXNUYWtlbkRhbWFnZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYXduKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih4LCB5KTtcclxuICAgICAgICB0aGlzLnNldEFjdGl2ZSh0cnVlKTtcclxuICAgICAgICB0aGlzLnNldFZpc2libGUodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUsIGRlbHRhKSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuZWZmZWN0cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGVmZmVjdCA9IHRoaXMuZWZmZWN0c1tpXTtcclxuICAgICAgICAgICAgZWZmZWN0LnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgICAgIGlmKGVmZmVjdC5pc0NvbXBsZXRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVmZmVjdHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICAgICAgbC0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hlY2tGb3JEZWF0aCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5oYXNUYWtlbkRhbWFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFRpbnRGaWxsKDB4ZmYwMDAwKTtcclxuICAgICAgICAgICAgdGhpcy5oYXNUYWtlbkRhbWFnZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhclRpbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtb3ZlbWVudE11bHRpcGxlciA9IHRoaXMuZWZmZWN0cy5yZWR1Y2UoKHAsIGMpID0+IHAgKiBjLm9uTW92ZW1lbnQoKSwgMS4wKTtcclxuXHJcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWQvNCAqIGRlbHRhICogbW92ZW1lbnRNdWx0aXBsZXI7XHJcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWQgKiBkZWx0YSAqIG1vdmVtZW50TXVsdGlwbGVyO1xyXG4gICAgICAgIGlmICh0aGlzLnggPiB3aW5kb3cuaW5uZXJXaWR0aCB8fCB0aGlzLnkgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0YWtlRGFtYWdlKGRhbWFnZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggLT0gZGFtYWdlO1xyXG4gICAgICAgIHRoaXMuaGFzVGFrZW5EYW1hZ2UgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hlY2tGb3JEZWF0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tGb3JEZWF0aCgpIHtcclxuICAgICAgICBpZiAodGhpcy5oZWFsdGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5RWZmZWN0KGVmZmVjdDogSUVudGl0eUVmZmVjdCkge1xyXG4gICAgICAgIC8vIFRPRE8gMjAyMDAzMTkgU2hvdWxkIGJlIG1vdmVkIHRvIGEgbWFuYWdlclxyXG4gICAgICAgIC8vIHdoaWNoIGtub3dzIGhvdyB0byBhZGQvcmVtb3ZlIGVmZmVjdHMuXHJcbiAgICAgICAgaWYgKCFlZmZlY3QuaXNTdGFja2FibGUgJiYgZWZmZWN0Lm5hbWUgaW4gdGhpcy5lZmZlY3ROb25TdGFja2luZykge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5lZmZlY3ROb25TdGFja2luZ1tlZmZlY3QubmFtZV07XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLmVmZmVjdHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZSA9IHRoaXMuZWZmZWN0c1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChlLm5hbWUgPT0gZWZmZWN0Lm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVmZmVjdHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgICAgICAgICBsLS07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZWZmZWN0cy5wdXNoKGVmZmVjdCk7XHJcbiAgICAgICAgaWYgKCFlZmZlY3QuaXNTdGFja2FibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5lZmZlY3ROb25TdGFja2luZ1tlZmZlY3QubmFtZV0gPSBlZmZlY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59OyIsImV4cG9ydCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlIHtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNwZWVkID0gUGhhc2VyLk1hdGguR2V0U3BlZWQoNTAwLCAxKTtcclxuXHJcbiAgICBwcml2YXRlIGFuZ3VsYXJEaXJlY3Rpb246IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIDAsIDAsICdidWxsZXQnKTtcclxuICAgIH1cclxuXHJcbiAgICBmaXJlKHgsIHksIHJhZCkge1xyXG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24oeCwgeSk7XHJcbiAgICAgICAgdGhpcy5hbmd1bGFyRGlyZWN0aW9uID0gcmFkO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lLCBkZWx0YSkge1xyXG4gICAgICAgIHRoaXMueCArPSBNYXRoLmNvcyh0aGlzLmFuZ3VsYXJEaXJlY3Rpb24pICogdGhpcy5zcGVlZCAqIGRlbHRhO1xyXG4gICAgICAgIHRoaXMueSArPSBNYXRoLnNpbih0aGlzLmFuZ3VsYXJEaXJlY3Rpb24pICogdGhpcy5zcGVlZCAqIGRlbHRhO1xyXG4gICAgICAgIGlmICh0aGlzLnggPiB3aW5kb3cuaW5uZXJXaWR0aCB8fCB0aGlzLnggPCAwXHJcbiAgICAgICAgICAgICAgICB8fCB0aGlzLnkgPiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgdGhpcy55IDwgMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTsiLCJpbXBvcnQgeyBCYWRkaWUgfSBmcm9tIFwiLi4vYmFkZGllL2JhZGRpZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRW50aXR5RWZmZWN0IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGlzU3RhY2thYmxlOiBib29sZWFuXHJcblxyXG4gICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpO1xyXG4gICAgaXNDb21wbGV0ZWQoKTogYm9vbGVhbjtcclxuXHJcbiAgICBvbk1vdmVtZW50KCk6IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFZmZlY3QgaW1wbGVtZW50cyBJRW50aXR5RWZmZWN0IHtcclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHByb3RlY3RlZCBiYWRkaWU6IEJhZGRpZTtcclxuXHJcbiAgICBhYnN0cmFjdCByZWFkb25seSBpc1N0YWNrYWJsZTogYm9vbGVhbjtcclxuXHJcbiAgICBhYnN0cmFjdCByZWFkb25seSBkdXJhdGlvbjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBlbGFwc2VkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHJlYWRvbmx5IG1vdmVtZW50TXVsdGlwbGllcjogbnVtYmVyID0gMS4wO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGJhZGRpZTogQmFkZGllKSB7XHJcbiAgICAgICAgdGhpcy5iYWRkaWUgPSBiYWRkaWU7XHJcbiAgICB9XHJcblxyXG4gICAgaXNDb21wbGV0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxhcHNlZCA+PSB0aGlzLmR1cmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5lbGFwc2VkICs9IGRlbHRhO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW92ZW1lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW92ZW1lbnRNdWx0aXBsaWVyO1xyXG4gICAgfTtcclxufSIsImltcG9ydCB7IEVmZmVjdCB9IGZyb20gXCIuL2VmZmVjdFwiO1xyXG5pbXBvcnQgeyBCYWRkaWUgfSBmcm9tIFwiLi4vYmFkZGllL2JhZGRpZVwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0cyB9IGZyb20gXCJwaGFzZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMaWdudG5pbmdDaGFpbkVmZmVjdCBleHRlbmRzIEVmZmVjdCB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nID0gXCJDSEFJTl9MSUdIVE5JTkdcIjtcclxuICAgIHB1YmxpYyByZWFkb25seSBpc1N0YWNrYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHJlYWRvbmx5IGR1cmF0aW9uID0gMzAwO1xyXG4gICAgcmVhZG9ubHkganVtcER1cmF0aW9uID0gMjUwO1xyXG5cclxuICAgIHByaXZhdGUganVtcER1cmF0aW9uRWxhcHNlZCA9IDA7XHJcbiAgICBwcml2YXRlIGp1bXBzTGVmdDogbnVtYmVyO1xyXG5cclxuICAgIHJlYWRvbmx5IGRhbWFnZSA9IDE7XHJcbiAgICBwcml2YXRlIF9pc0NvbXBsZXRlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgYmFkZGllczogR2FtZU9iamVjdHMuR3JvdXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYmFkZGllOiBCYWRkaWUsIGJhZGRpZXM6IEdhbWVPYmplY3RzLkdyb3VwLCBqdW1wc0xlZnQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKGJhZGRpZSk7XHJcbiAgICAgICAgdGhpcy5iYWRkaWVzID0gYmFkZGllcztcclxuICAgICAgICB0aGlzLmp1bXBzTGVmdCA9IGp1bXBzTGVmdDtcclxuICAgICAgICB0aGlzLmJhZGRpZS50YWtlRGFtYWdlKHRoaXMuZGFtYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpIHtcclxuICAgICAgICBzdXBlci51cGRhdGUoZGVsdGEpO1xyXG4gICAgICAgIHRoaXMuanVtcER1cmF0aW9uRWxhcHNlZCArPSBkZWx0YTtcclxuICAgICAgICBpZiAodGhpcy5qdW1wRHVyYXRpb25FbGFwc2VkID4gdGhpcy5qdW1wRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5qdW1wRHVyYXRpb25FbGFwc2VkIC09IHRoaXMuanVtcER1cmF0aW9uO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5qdW1wc0xlZnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RCYWRkaWUgPSB0aGlzLmNsb3Nlc3QoKTtcclxuICAgICAgICAgICAgICAgIGlmIChjbG9zZXN0QmFkZGllKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdEJhZGRpZS5hcHBseUVmZmVjdChuZXcgTGlnbnRuaW5nQ2hhaW5FZmZlY3QoY2xvc2VzdEJhZGRpZSwgdGhpcy5iYWRkaWVzLCB0aGlzLmp1bXBzTGVmdCAtIDEpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0NvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQ29tcGxldGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xvc2VzdCgpOiBCYWRkaWUge1xyXG4gICAgICAgIC8vIFRPRE8gWzIwMjAwMzIwXSBNb3ZlIHN0b3JhZ2Ugb2YgYWxsIGVuZW1pZXMgaW50b1xyXG4gICAgICAgIC8vIGEgay1kIHRyZWUgdG8gYWxsb3cgZm9yIGZhc3Qgc3BhY2UtYmFzZWQgc2VhcmNoLlxyXG4gICAgICAgIGNvbnN0IHJhbmdlID0gNTA7XHJcbiAgICAgICAgY29uc3QgYmFkZGllcyA9IHRoaXMuYmFkZGllcy5nZXRDaGlsZHJlbigpO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlQmFkZGllcyA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBiYWRkaWVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBiYWRkaWUgPSBiYWRkaWVzW2ldO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5iYWRkaWUgIT09IGJhZGRpZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmFicyhQaGFzZXIuTWF0aC5EaXN0YW5jZS5CZXR3ZWVuUG9pbnRzKHRoaXMuYmFkZGllLCBiYWRkaWUgYXMgQmFkZGllKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCByYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQmFkZGllcy5wdXNoKGJhZGRpZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjbG9zZUJhZGRpZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNsb3NlQmFkZGllc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjbG9zZUJhZGRpZXMubGVuZ3RoKV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRWZmZWN0IH0gZnJvbSBcIi4vZWZmZWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2xvd0VmZmVjdCBleHRlbmRzIEVmZmVjdCB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nID0gXCJTTE9XXCI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaXNTdGFja2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICByZWFkb25seSBkdXJhdGlvbiA9IDIwMDA7XHJcbiAgICByZWFkb25seSBtb3ZlbWVudE11bHRpcGxpZXI6IG51bWJlciA9IDAuNTtcclxufSIsImltcG9ydCB7IEJ1bGxldCB9IGZyb20gXCIuLi9idWxsZXRcIjtcclxuaW1wb3J0IHsgQmFkZGllIH0gZnJvbSBcIi4uL2JhZGRpZS9iYWRkaWVcIjtcclxuaW1wb3J0IHsgU2xvd0VmZmVjdCB9IGZyb20gXCIuLi9lZmZlY3Qvc2xvdy1lZmZlY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUb3dlciBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUge1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmlsbEFscGhhTWluaW11bSA9IDAuMTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmlsbEFscGhhTWF4aW11bSA9IDEuMDtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGJ1aWxkVGltZU1TID0gMTAwMDtcclxuICAgIHByaXZhdGUgZWxhcHNlZEJ1aWxkVGltZU1TID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZpcmVEZWxheU1TID0gMTIwO1xyXG4gICAgcHJpdmF0ZSBlbGFwc2VkRmlyZVRpbWVNUyA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBmaXJlRGlzdGFuY2UgPSAxMjA7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRhbWFnZSA9IDgwO1xyXG5cclxuICAgIHB1YmxpYyBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG4gICAgcHJpdmF0ZSBidWxsZXRzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA7XHJcbiAgICBwcml2YXRlIGJhZGRpZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cDtcclxuXHJcbiAgICBwcml2YXRlIHR5cGVJbmRleDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyLCB0eXBlSW5kZXg6IG51bWJlciwgYmFkZGllczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIHgsIHksICd0b3dlcnMnKTtcclxuICAgICAgICBzY2VuZS5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6ICdidWlsZGluZycsXHJcbiAgICAgICAgICAgIGZyYW1lczogc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKCd0b3dlcnMnLCB7IHN0YXJ0OiAwLCBlbmQ6IDAgfSksXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLmJ1aWxkVGltZU1TXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiAnYmFzaWMnLFxyXG4gICAgICAgICAgICBmcmFtZXM6IHNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcygndG93ZXJzJywgeyBzdGFydDogMiwgZW5kOiAyIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiAndXBncmFkaW5nJyxcclxuICAgICAgICAgICAgZnJhbWVzOiBzY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXMoJ3Rvd2VycycsIHsgc3RhcnQ6IDEsIGVuZDogMSB9KSxcclxuICAgICAgICAgICAgZHVyYXRpb246IHRoaXMuYnVpbGRUaW1lTVNcclxuICAgICAgICB9KTtcclxuICAgICAgICBzY2VuZS5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6ICdhZHZhbmNlZCcsXHJcbiAgICAgICAgICAgIGZyYW1lczogc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKCd0b3dlcnMnLCB7IHN0YXJ0OiAzLCBlbmQ6IDMgfSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBzY2VuZS5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6ICdzbG93JyxcclxuICAgICAgICAgICAgZnJhbWVzOiBzY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXMoJ3Rvd2VycycsIHsgc3RhcnQ6IDQsIGVuZDogNCB9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnR5cGVJbmRleCA9IHR5cGVJbmRleDtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgdGhpcy5iYWRkaWVzID0gYmFkZGllcztcclxuICAgICAgICB0aGlzLmJ1bGxldHMgPSBzY2VuZS5waHlzaWNzLmFkZC5ncm91cCh7XHJcbiAgICAgICAgICAgIGNsYXNzVHlwZTogQnVsbGV0LFxyXG4gICAgICAgICAgICBydW5DaGlsZFVwZGF0ZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2NlbmUucGh5c2ljcy5hZGQub3ZlcmxhcCh0aGlzLmJhZGRpZXMsIHRoaXMuYnVsbGV0cywgdGhpcy5vblNob3RDYWxsYmFjaygpKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbXBsZXRlZEFuaW1hdGlvbiA9IHRoaXMudHlwZUluZGV4ID09IDEgPyAnYmFzaWMnXHJcbiAgICAgICAgICAgIDogKHRoaXMudHlwZUluZGV4ID09IDIgPyAnYWR2YW5jZWQnIDogJ3Nsb3cnKTtcclxuICAgICAgICB0aGlzLmFuaW1zLnBsYXkoJ2J1aWxkaW5nJywgdHJ1ZSkub24oJ2FuaW1hdGlvbmNvbXBsZXRlJywgKCkgPT4gdGhpcy5hbmltcy5wbGF5KGNvbXBsZXRlZEFuaW1hdGlvbiwgdHJ1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lLCBkZWx0YSkge1xyXG4gICAgICAgIHRoaXMuZWxhcHNlZEJ1aWxkVGltZU1TICs9IGRlbHRhO1xyXG4gICAgICAgIHRoaXMuZWxhcHNlZEZpcmVUaW1lTVMgKz0gZGVsdGE7XHJcblxyXG4gICAgICAgIC8vIFRPRE8gWzIwMjAwMzE4XSBJbnRyb2R1Y2Ugc3RhdGVzIHN1Y2ggYXMgXCJCdWlsZGluZ1wiLFxyXG4gICAgICAgIC8vIFwiRGVmZW5kaW5nXCIsIFwiU2VsbGluZ1wiLlxyXG4gICAgICAgIGlmICh0aGlzLmlzQnVpbGRpbmdDb21wbGV0ZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluZFRhcmdldEFuZEZpcmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsYXBzZWRGaXJlVGltZU1TID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc0J1aWxkaW5nQ29tcGxldGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxhcHNlZEJ1aWxkVGltZU1TID49IHRoaXMuYnVpbGRUaW1lTVM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc1JlYWR5VG9GaXJlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsYXBzZWRGaXJlVGltZU1TID49IHRoaXMuZmlyZURlbGF5TVM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaW5kVGFyZ2V0QW5kRmlyZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNSZWFkeVRvRmlyZSgpKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJhZGRpZSA9IHRoaXMuZmluZEJhZGRpZSgpO1xyXG4gICAgICAgIGlmIChiYWRkaWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG9vdChiYWRkaWUpO1xyXG4gICAgICAgICAgICB0aGlzLmVsYXBzZWRGaXJlVGltZU1TID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaW5kQmFkZGllKCk6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUge1xyXG4gICAgICAgIGxldCBiYWRkaWVzID0gdGhpcy5iYWRkaWVzLmdldENoaWxkcmVuKCk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGJhZGRpZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiYWRkaWUgPSBiYWRkaWVzW2ldIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgICAgICAgICAgIGlmIChiYWRkaWUuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBQaGFzZXIuTWF0aC5EaXN0YW5jZS5CZXR3ZWVuUG9pbnRzKHRoaXMsIGJhZGRpZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPD0gdGhpcy5maXJlRGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmFkZGllO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvb3QoYmFkZGllOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKSB7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gUGhhc2VyLk1hdGguQW5nbGUuQmV0d2VlblBvaW50cyh0aGlzLCBiYWRkaWUpO1xyXG4gICAgICAgIGxldCBidWxsZXQgPSB0aGlzLmJ1bGxldHMuZ2V0KCk7XHJcbiAgICAgICAgYnVsbGV0LmZpcmUodGhpcy54LCB0aGlzLnksIGFuZ2xlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uU2hvdENhbGxiYWNrKCkge1xyXG4gICAgICAgIHJldHVybiAoYmFkZGllOiBCYWRkaWUsIGJ1bGxldDogQnVsbGV0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGVJbmRleCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBiYWRkaWUudGFrZURhbWFnZSh0aGlzLmRhbWFnZSAvIDQpO1xyXG4gICAgICAgICAgICAgICAgYmFkZGllLmFwcGx5RWZmZWN0KG5ldyBTbG93RWZmZWN0KGJhZGRpZSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYmFkZGllLnRha2VEYW1hZ2UodGhpcy5kYW1hZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1bGxldC5kZXN0cm95KCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufTsiLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmltcG9ydCBTY2VuZXMgZnJvbSAnLi9zY2VuZSc7XHJcblxyXG5jb25zdCBnYW1lQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xyXG4gICAgdGl0bGU6ICdQaGFzZSA5OCcsXHJcblxyXG4gICAgdHlwZTogUGhhc2VyLkFVVE8sXHJcblxyXG4gICAgc2NhbGU6IHtcclxuICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICB9LFxyXG5cclxuICAgIHBoeXNpY3M6IHtcclxuICAgICAgICBkZWZhdWx0OiAnYXJjYWRlJyxcclxuICAgICAgICBhcmNhZGU6IHtcclxuICAgICAgICAgICAgZGVidWc6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIHNjZW5lOiBTY2VuZXMsXHJcblxyXG4gICAgcGFyZW50OiAnY29udGVudCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpOyIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcInBoYXNlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hcCB7XHJcblxyXG4gICAgcHVibGljIGxheWVyOiBQaGFzZXIuVGlsZW1hcHMuU3RhdGljVGlsZW1hcExheWVyO1xyXG4gICAgcHJpdmF0ZSBtYXA6IFBoYXNlci5UaWxlbWFwcy5UaWxlbWFwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBTY2VuZSkge1xyXG4gICAgICAgIHRoaXMubWFwID0gc2NlbmUubWFrZS50aWxlbWFwKHtcclxuICAgICAgICAgICAgZGF0YTogdGhpcy5sZXZlbERhdGEsXHJcbiAgICAgICAgICAgIHRpbGVXaWR0aDogdGhpcy50aWxlV2lkdGgsXHJcbiAgICAgICAgICAgIHRpbGVIZWlnaHQ6IHRoaXMudGlsZUhlaWdodFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHRpbGVzZXQgPSB0aGlzLm1hcC5hZGRUaWxlc2V0SW1hZ2UoJ2Rlc2VydC10aWxlcycpO1xyXG4gICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLm1hcC5jcmVhdGVTdGF0aWNMYXllcigwLCB0aWxlc2V0LCAwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaWxlSW5kZXhDYWxsYmFjayhpbmRleGVzOiBudW1iZXIgfCBhbnlbXSwgY2FsbGJhY2s6IEZ1bmN0aW9uLCBjYWxsYmFja0NvbnRleHQ6IG9iamVjdCwgbGF5ZXI/OiBzdHJpbmcgfCBudW1iZXIgfCBQaGFzZXIuVGlsZW1hcHMuU3RhdGljVGlsZW1hcExheWVyIHwgUGhhc2VyLlRpbGVtYXBzLkR5bmFtaWNUaWxlbWFwTGF5ZXIpIHtcclxuICAgICAgICB0aGlzLm1hcC5zZXRUaWxlSW5kZXhDYWxsYmFjayhpbmRleGVzLCBjYWxsYmFjaywgY2FsbGJhY2tDb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRpbGVXaWR0aCA9IDMyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0aWxlSGVpZ2h0ID0gMzI7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsZXZlbERhdGEgPSBbXHJcbiAgICAgICAgWzI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIF0sXHJcbiAgICAgICAgWzI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgNSwgNiwgNywgMjksIF0sXHJcbiAgICAgICAgWzI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMTMsIDE0LCAxNSwgMjksIF0sXHJcbiAgICAgICAgWzI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjEsIDIyLCAyMywgMjksIF0sXHJcbiAgICAgICAgWzI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgNSwgNiwgNiwgNiwgNywgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCBdLFxyXG4gICAgICAgIFsyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDEzLCAxNCwgMTQsIDE0LCAxNSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCBdLFxyXG4gICAgICAgIFsyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDIxLCAxNCwgMTQsIDE0LCAyMywgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCBdLFxyXG4gICAgICAgIFsyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyMSwgMTQsIDIzLCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCBdLFxyXG4gICAgICAgIFsyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjIsIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCBdLFxyXG4gICAgICAgIFsyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCBdLFxyXG4gICAgICAgIFsyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCBdLFxyXG4gICAgICAgIFsyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAgXSxcclxuICAgICAgICBbMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAzMCwgMzAsIDMwLCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgIF0sXHJcbiAgICAgICAgWzI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDMwLCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksICBdLFxyXG4gICAgICAgIFsyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAgXSxcclxuICAgICAgICBbMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgIF0sXHJcbiAgICBdO1xyXG59IiwiaW1wb3J0IHsgQmFkZGllU3Bhd25lciB9IGZyb20gJy4uL2VudGl0eS9iYWRkaWUvYmFkZGllLXNwYXduZXInO1xyXG5pbXBvcnQgeyBUb3dlciB9IGZyb20gJy4uL2VudGl0eS90b3dlci90b3dlcic7XHJcbmltcG9ydCB7IFNsb3dFZmZlY3QgfSBmcm9tICcuLi9lbnRpdHkvZWZmZWN0L3Nsb3ctZWZmZWN0JztcclxuaW1wb3J0IHsgTGlnbnRuaW5nQ2hhaW5FZmZlY3QgfSBmcm9tICcuLi9lbnRpdHkvZWZmZWN0L2xpZ2h0bmluZy1jaGFpbi1lZmZlY3QnO1xyXG5pbXBvcnQgeyBNYXAgYXMgTWFwIH0gZnJvbSAnLi4vbWFwL21hcCc7XHJcbmltcG9ydCB7IEJhZGRpZVBhdGhTcGF3bmVyIH0gZnJvbSAnLi4vZW50aXR5L2JhZGRpZS9iYWRkaWUtcGF0aC1zcGF3bmVyJztcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiAnUGhhc2U5OCcsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHJcbiAgICAvLyBUT0RPIFsyMDIwMDMxOF0gVGhlIGNvbmZpZ3VyYXRpb24gb2Ygc3Bhd25lcnNcclxuICAgIC8vIHdvdWxkIGxhdGVyIGJlbG9uZyB3aXRoIHRoZSBpZGVhIG9mIGEgc3BlY2lmaWNcclxuICAgIC8vIFwibGV2ZWxcIiBhbmQgbm90IGxpdmUgd2l0aGluIHRoZSByb290IEdhbWVTY2VuZS5cclxuICAgIHByaXZhdGUgc3Bhd25lcnM6IGFueVtdID0gW107XHJcbiAgICBwcml2YXRlIGJhZGRpZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cDtcclxuICAgIHByaXZhdGUgdG93ZXJzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA7XHJcblxyXG4gICAgcHJpdmF0ZSBpc1BvaW50ZXJNaWRkbGVEb3duOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBtYXA6IE1hcDtcclxuXHJcbiAgICBwcml2YXRlIHRvd2VyVHlwZUluZGV4OiBudW1iZXIgPSAxO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJlbG9hZCgpIHtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3Rvd2VyJywgJy4vYXNzZXRzL3Rvd2VyLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgndG93ZXJzJywgJy4vYXNzZXRzL3Rvd2Vycy5wbmcnLCB7ZnJhbWVXaWR0aDogNjQsIGZyYW1lSGVpZ2h0OiA2NX0pO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnYmFkZGllJywgJy4vYXNzZXRzL3NwYWNlLWJhZGRpZS5wbmcnKTtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2J1bGxldCcsICcuL2Fzc2V0cy9lbmVteS1idWxsZXQucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdkZXNlcnQtdGlsZXMnLCAnLi9hc3NldHMvdG13X2Rlc2VydF9zcGFjaW5nLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnZHJhZ2NpcmNsZScsICcuL2Fzc2V0cy9vcmItYmx1ZS5wbmcnKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSgpIHtcclxuICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAodGhpcyk7XHJcbiAgICAgICAgdGhpcy5tYXAuc2V0VGlsZUluZGV4Q2FsbGJhY2soWzE0XSwgdGhpcy5hcHBseVNsb3dFZmZlY3QsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubWFwLnNldFRpbGVJbmRleENhbGxiYWNrKFszMF0sIHRoaXMuYXBwbHlMaWdudG5pbmdDaGFpbkVmZmVjdCwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMudG93ZXJzID0gdGhpcy5hZGQuZ3JvdXAoe1xyXG4gICAgICAgICAgICBjbGFzc1R5cGU6IFRvd2VyLFxyXG4gICAgICAgICAgICBydW5DaGlsZFVwZGF0ZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJhZGRpZXMgPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3Bhd25lcnMucHVzaChuZXcgQmFkZGllU3Bhd25lcih0aGlzLCB0aGlzLmJhZGRpZXMpKTtcclxuICAgICAgICB0aGlzLnNwYXduZXJzLnB1c2gobmV3IEJhZGRpZVBhdGhTcGF3bmVyKHRoaXMsIHRoaXMuYmFkZGllcykpO1xyXG5cclxuICAgICAgICB0aGlzLnNldHVwVG93ZXJFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKHRpbWUsIGRlbHRhKSB7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmNvbGxpZGUodGhpcy5iYWRkaWVzLCB0aGlzLm1hcC5sYXllcik7XHJcbiAgICAgICAgdGhpcy5zcGF3bmVycy5mb3JFYWNoKHMgPT4gcy51cGRhdGUodGltZSwgZGVsdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldHVwVG93ZXJFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5rZXlib2FyZC5vbigna2V5ZG93bi1PTkUnLCAoKSA9PiB0aGlzLnNldFRvd2VyVHlwZSgxKSwgdGhpcylcclxuICAgICAgICB0aGlzLmlucHV0LmtleWJvYXJkLm9uKCdrZXlkb3duLVRXTycsICgpID0+IHRoaXMuc2V0VG93ZXJUeXBlKDIpLCB0aGlzKVxyXG4gICAgICAgIHRoaXMuaW5wdXQua2V5Ym9hcmQub24oJ2tleWRvd24tVEhSRUUnLCAoKSA9PiB0aGlzLnNldFRvd2VyVHlwZSgzKSwgdGhpcylcclxuICAgICAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVyZG93bicsIHRoaXMucG9pbnRTdGF0ZVVwZGF0ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcnVwJywgdGhpcy50b3dlckFkZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRUb3dlclR5cGUodG93ZXJUeXBlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnRvd2VyVHlwZUluZGV4ID0gdG93ZXJUeXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcG9pbnRTdGF0ZVVwZGF0ZShwb2ludGVyOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmlzUG9pbnRlck1pZGRsZURvd24gPSBwb2ludGVyLm1pZGRsZUJ1dHRvbkRvd24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvd2VyQWRkKHBvaW50ZXI6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUG9pbnRlck1pZGRsZURvd24gJiYgIXBvaW50ZXIubWlkZGxlQnV0dG9uRG93bigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNQb2ludGVyTWlkZGxlRG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnRvd2Vycy5hZGQobmV3IFRvd2VyKHRoaXMsIHBvaW50ZXIueCwgcG9pbnRlci55LCB0aGlzLnRvd2VyVHlwZUluZGV4LCB0aGlzLmJhZGRpZXMpLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhcHBseVNsb3dFZmZlY3QoYmFkZGllLCB0aWxlKSB7XHJcbiAgICAgICAgYmFkZGllLmFwcGx5RWZmZWN0KG5ldyBTbG93RWZmZWN0KGJhZGRpZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXBwbHlMaWdudG5pbmdDaGFpbkVmZmVjdChiYWRkaWUsIHRpbGUpIHtcclxuICAgICAgICBiYWRkaWUuYXBwbHlFZmZlY3QobmV3IExpZ250bmluZ0NoYWluRWZmZWN0KGJhZGRpZSwgdGhpcy5iYWRkaWVzLCA2KSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSAnLi9nYW1lLXNjZW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuICAgIEdhbWVTY2VuZSxcclxuXTsiXSwic291cmNlUm9vdCI6IiJ9