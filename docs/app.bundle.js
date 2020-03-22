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
        this.startDelayMS = 1550;
        this.scene = scene;
        this.baddies = this.scene.add.group({
            name: 'baddies-path',
            classType: baddie_1.Baddie,
            maxSize: this.entityMaxCount,
            runChildUpdate: true,
        });
        this.parentGroup = parentGroup;
        this.create();
    }
    BaddiePathSpawner.prototype.create = function () {
        var _this = this;
        for (var i_1 = 0; i_1 < this.entityMaxCount; i_1++) {
            var baddie = this.baddies.get();
            baddie.setDepth(1);
            baddie.t = 0;
            baddie.i = i_1;
            baddie.vec = new Phaser.Math.Vector2();
            this.parentGroup.add(baddie);
        }
        this.path = new Phaser.Curves.Spline([
            -20, 500,
            260, 450,
            300, 150,
            550, 145,
            745, 256,
            1045, 256,
            1100, 480
        ]);
        var points = this.path.points;
        for (var i = 0; i < points.length; i++) {
            var point = points[i];
            var handle = this.scene.add.image(point.x, point.y, 'dragcircle').setInteractive();
            handle.setData('vector', point);
            this.scene.input.setDraggable(handle);
        }
        this.scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
            gameObject.data.get('vector').set(dragX, dragY);
        });
        this.scene.tweens.add({
            targets: this.baddies.getChildren(),
            t: 1,
            ease: 'Linear',
            duration: this.travelTimeMS,
            repeat: -1,
            delay: function (t) { return t.i * _this.spawnDelayMS + _this.startDelayMS; }
        });
        this.graphics = this.scene.add.graphics();
    };
    BaddiePathSpawner.prototype.update = function (time, delta) {
        this.graphics.clear();
        this.graphics.lineStyle(1, 0xffffff, 0.05);
        this.path.draw(this.graphics, 64);
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
        this.startDelayMS = 1550;
        this.startElapsed = 0;
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
        this.startElapsed += delta;
        if (this.startElapsed >= this.startDelayMS) {
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
        var height = this.levelData.length;
        var width = this.levelData[0].length;
        var blocks = scene.add.group(undefined, { key: 'block', repeat: height * width - 1 });
        Phaser.Actions.GridAlign(blocks.getChildren(), {
            width: this.levelData[0].length,
            cellWidth: this.tileWidth,
            cellHeight: this.tileHeight - 1,
            x: 16,
            y: 16
        });
        var i = 0;
        blocks.children.iterate(function (child) {
            scene.tweens.add({
                targets: child,
                scaleX: 0,
                scaleY: 0,
                alpha: 0,
                y: '+=64',
                angle: 180,
                ease: 'Power3',
                duration: 800,
                delay: 100 + i * 30 // Math.random() * 1400
            });
            i++;
            if (i % width == 0) {
                i = 0;
            }
        });
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
        this.load.image('dragcircle', './assets/desert_button.png');
        this.load.image('block', 'assets/desert_sand.png');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0eS9iYWRkaWUvYmFkZGllLXBhdGgtc3Bhd25lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5L2JhZGRpZS9iYWRkaWUtc3Bhd25lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5L2JhZGRpZS9iYWRkaWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0eS9idWxsZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0eS9lZmZlY3QvZWZmZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdHkvZWZmZWN0L2xpZ2h0bmluZy1jaGFpbi1lZmZlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0eS9lZmZlY3Qvc2xvdy1lZmZlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0eS90b3dlci90b3dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwL21hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvZ2FtZS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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LEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUc7WUFDbEosQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRztZQUMvSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFHO1lBQ2xKLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUc7WUFDbEosQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRztZQUM3SSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFHO1lBQ2xKLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUc7WUFDbEosQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRztZQUNsSixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFHO1lBQ2xKLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUc7WUFDbEosQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRztZQUNsSixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFJO1lBQ25KLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUk7WUFDbkosQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBSTtZQUNuSixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFJO1lBQ25KLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFF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QUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ25HO0lBQ0wsQ0FBQztJQUVPLG1DQUFlLEdBQXZCLFVBQXdCLE1BQU0sRUFBRSxJQUFJO1FBQ2hDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSx3QkFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVPLDZDQUF5QixHQUFqQyxVQUFrQyxNQUFNLEVBQUUsSUFBSTtRQUMxQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksNkNBQW9CLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLENBaEY4QixNQUFNLENBQUMsS0FBSyxHQWdGMUM7QUFoRlksOEJBQVM7Ozs7Ozs7Ozs7Ozs7OztBQ2J0Qix3RkFBeUM7QUFFekMsa0JBQWU7SUFDWCxzQkFBUztDQUNaLENBQUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IHsgQmFkZGllIH0gZnJvbSAnLi9iYWRkaWUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhZGRpZVBhdGhTcGF3bmVyIHtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNwYXduRGVsYXlNUyA9IDYwMDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdHJhdmVsVGltZU1TID0gODAwMDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZW50aXR5TWF4Q291bnQgPSA4MDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3RhcnREZWxheU1TID0gMTU1MDtcclxuXHJcbiAgICBwcml2YXRlIGJhZGRpZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cDtcclxuICAgIHByaXZhdGUgcGFyZW50R3JvdXA6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cDtcclxuXHJcbiAgICBwcml2YXRlIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcblxyXG4gICAgcHJpdmF0ZSBwYXRoOiBQaGFzZXIuQ3VydmVzLlNwbGluZTtcclxuICAgIHByaXZhdGUgZ3JhcGhpY3M6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCBwYXJlbnRHcm91cDogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG4gICAgICAgIHRoaXMuYmFkZGllcyA9IHRoaXMuc2NlbmUuYWRkLmdyb3VwKHtcclxuICAgICAgICAgICAgbmFtZTogJ2JhZGRpZXMtcGF0aCcsXHJcbiAgICAgICAgICAgIGNsYXNzVHlwZTogQmFkZGllLFxyXG4gICAgICAgICAgICBtYXhTaXplOiB0aGlzLmVudGl0eU1heENvdW50LFxyXG4gICAgICAgICAgICBydW5DaGlsZFVwZGF0ZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhcmVudEdyb3VwID0gcGFyZW50R3JvdXA7XHJcbiAgICAgICAgdGhpcy5jcmVhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVudGl0eU1heENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJhZGRpZSA9IHRoaXMuYmFkZGllcy5nZXQoKTtcclxuICAgICAgICAgICAgYmFkZGllLnNldERlcHRoKDEpO1xyXG4gICAgICAgICAgICBiYWRkaWUudCA9IDA7XHJcbiAgICAgICAgICAgIGJhZGRpZS5pID0gaTtcclxuICAgICAgICAgICAgYmFkZGllLnZlYyA9IG5ldyBQaGFzZXIuTWF0aC5WZWN0b3IyKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50R3JvdXAuYWRkKGJhZGRpZSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgdGhpcy5wYXRoID0gbmV3IFBoYXNlci5DdXJ2ZXMuU3BsaW5lKFtcclxuICAgICAgICAgICAgLTIwLCA1MDAsXHJcbiAgICAgICAgICAgIDI2MCwgNDUwLFxyXG4gICAgICAgICAgICAzMDAsIDE1MCxcclxuICAgICAgICAgICAgNTUwLCAxNDUsXHJcbiAgICAgICAgICAgIDc0NSwgMjU2LFxyXG4gICAgICAgICAgICAxMDQ1LCAyNTYsXHJcbiAgICAgICAgICAgIDExMDAsIDQ4MFxyXG4gICAgICAgIF0pO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgcG9pbnRzID0gdGhpcy5wYXRoLnBvaW50cztcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBwb2ludCA9IHBvaW50c1tpXTtcclxuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IHRoaXMuc2NlbmUuYWRkLmltYWdlKHBvaW50LngsIHBvaW50LnksICdkcmFnY2lyY2xlJykuc2V0SW50ZXJhY3RpdmUoKTtcclxuICAgICAgICAgICAgaGFuZGxlLnNldERhdGEoJ3ZlY3RvcicsIHBvaW50KTtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5pbnB1dC5zZXREcmFnZ2FibGUoaGFuZGxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUuaW5wdXQub24oJ2RyYWcnLCBmdW5jdGlvbiAocG9pbnRlciwgZ2FtZU9iamVjdCwgZHJhZ1gsIGRyYWdZKSB7XHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QueCA9IGRyYWdYO1xyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LnkgPSBkcmFnWTtcclxuICAgICAgICAgICAgZ2FtZU9iamVjdC5kYXRhLmdldCgndmVjdG9yJykuc2V0KGRyYWdYLCBkcmFnWSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLmJhZGRpZXMuZ2V0Q2hpbGRyZW4oKSxcclxuICAgICAgICAgICAgdDogMSxcclxuICAgICAgICAgICAgZWFzZTogJ0xpbmVhcicsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLnRyYXZlbFRpbWVNUyxcclxuICAgICAgICAgICAgcmVwZWF0OiAtMSxcclxuICAgICAgICAgICAgZGVsYXk6IHQgPT4gdC5pICogdGhpcy5zcGF3bkRlbGF5TVMgKyB0aGlzLnN0YXJ0RGVsYXlNU1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IHRoaXMuc2NlbmUuYWRkLmdyYXBoaWNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUsIGRlbHRhKSB7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVN0eWxlKDEsIDB4ZmZmZmZmLCAwLjA1KTtcclxuICAgICAgICB0aGlzLnBhdGguZHJhdyh0aGlzLmdyYXBoaWNzLCA2NCk7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmJhZGRpZXMuZ2V0Q2hpbGRyZW4oKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcCA9IGNoaWxkcmVuW2ldIGFzIGFueTtcclxuICAgICAgICAgICAgdGhpcy5wYXRoLmdldFBvaW50KHAudCwgcC52ZWMpO1xyXG4gICAgICAgICAgICBwLnggPSBwLnZlYy54O1xyXG4gICAgICAgICAgICBwLnkgPSBwLnZlYy55O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn07IiwiaW1wb3J0IHsgQmFkZGllIH0gZnJvbSAnLi4vYmFkZGllL2JhZGRpZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFkZGllU3Bhd25lciB7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzcGF3bkRlbGF5TVMgPSAxNTA7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVudGl0eU1heENvdW50ID0gNzU7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzdGFydERlbGF5TVMgPSAxNTUwO1xyXG4gICAgcHJpdmF0ZSBzdGFydEVsYXBzZWQgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgYmFkZGllczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRHcm91cDogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG5cclxuICAgIHByaXZhdGUgZWxhcHNlZFNwYXduVGltZU1TID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHhTcGF3bk9mZnNldCA9IDQwO1xyXG4gICAgcHJpdmF0ZSB4U3Bhd25PZmZzZXRDdXJyZW50ID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgcGFyZW50R3JvdXA6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cCkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgICAgICB0aGlzLmJhZGRpZXMgPSB0aGlzLnNjZW5lLmFkZC5ncm91cCh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdiYWRkaWVzJyxcclxuICAgICAgICAgICAgY2xhc3NUeXBlOiBCYWRkaWUsXHJcbiAgICAgICAgICAgIG1heFNpemU6IHRoaXMuZW50aXR5TWF4Q291bnQsXHJcbiAgICAgICAgICAgIHJ1bkNoaWxkVXBkYXRlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRHcm91cCA9IHBhcmVudEdyb3VwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lLCBkZWx0YSkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRFbGFwc2VkICs9IGRlbHRhO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXJ0RWxhcHNlZCA+PSB0aGlzLnN0YXJ0RGVsYXlNUykge1xyXG4gICAgICAgICAgICB0aGlzLmVsYXBzZWRTcGF3blRpbWVNUyArPSBkZWx0YTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZWxhcHNlZFNwYXduVGltZU1TID49IHRoaXMuc3Bhd25EZWxheU1TKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsYXBzZWRTcGF3blRpbWVNUyAtPSB0aGlzLnNwYXduRGVsYXlNUztcclxuICAgICAgICAgICAgICAgIHRoaXMueFNwYXduT2Zmc2V0Q3VycmVudCArPSB0aGlzLnhTcGF3bk9mZnNldDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnhTcGF3bk9mZnNldEN1cnJlbnQgPiB3aW5kb3cuaW5uZXJXaWR0aC8yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54U3Bhd25PZmZzZXRDdXJyZW50IC09IHdpbmRvdy5pbm5lcldpZHRoLzI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgYmFkZGllID0gdGhpcy5iYWRkaWVzLmdldCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhZGRpZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhZGRpZS5zcGF3bih0aGlzLnhTcGF3bk9mZnNldEN1cnJlbnQsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50R3JvdXAuYWRkKGJhZGRpZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59OyIsImltcG9ydCB7IElFbnRpdHlFZmZlY3QgfSBmcm9tIFwiLi4vZWZmZWN0L2VmZmVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhZGRpZSBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUge1xyXG5cclxuICAgIHByaXZhdGUgaW1hZ2U6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUgJiB7IGJvZHk6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Cb2R5IH07XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzcGVlZCA9IFBoYXNlci5NYXRoLkdldFNwZWVkKDEyNSwgMSk7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBoZWFsdGhNYXggPSAxMDA7XHJcbiAgICBwcml2YXRlIGhlYWx0aDogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgaGFzVGFrZW5EYW1hZ2U6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSBlZmZlY3RzOiBJRW50aXR5RWZmZWN0W107XHJcbiAgICBwcml2YXRlIGVmZmVjdE5vblN0YWNraW5nOiBSZWNvcmQ8c3RyaW5nLCBJRW50aXR5RWZmZWN0PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIDAsIDAsICdiYWRkaWUnKTtcclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldCgpIHtcclxuICAgICAgICB0aGlzLmhlYWx0aCA9IHRoaXMuaGVhbHRoTWF4O1xyXG4gICAgICAgIHRoaXMuZWZmZWN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZWZmZWN0Tm9uU3RhY2tpbmcgPSB7fTtcclxuICAgICAgICB0aGlzLmhhc1Rha2VuRGFtYWdlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd24oeCwgeSkge1xyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHgsIHkpO1xyXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgIHRoaXMuc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSwgZGVsdGEpIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5lZmZlY3RzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZWZmZWN0ID0gdGhpcy5lZmZlY3RzW2ldO1xyXG4gICAgICAgICAgICBlZmZlY3QudXBkYXRlKGRlbHRhKTtcclxuICAgICAgICAgICAgaWYoZWZmZWN0LmlzQ29tcGxldGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWZmZWN0cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgICAgICBsLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGVja0ZvckRlYXRoKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhhc1Rha2VuRGFtYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGludEZpbGwoMHhmZjAwMDApO1xyXG4gICAgICAgICAgICB0aGlzLmhhc1Rha2VuRGFtYWdlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyVGludCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG1vdmVtZW50TXVsdGlwbGVyID0gdGhpcy5lZmZlY3RzLnJlZHVjZSgocCwgYykgPT4gcCAqIGMub25Nb3ZlbWVudCgpLCAxLjApO1xyXG5cclxuICAgICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZC80ICogZGVsdGEgKiBtb3ZlbWVudE11bHRpcGxlcjtcclxuICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZCAqIGRlbHRhICogbW92ZW1lbnRNdWx0aXBsZXI7XHJcbiAgICAgICAgaWYgKHRoaXMueCA+IHdpbmRvdy5pbm5lcldpZHRoIHx8IHRoaXMueSA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRha2VEYW1hZ2UoZGFtYWdlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmhlYWx0aCAtPSBkYW1hZ2U7XHJcbiAgICAgICAgdGhpcy5oYXNUYWtlbkRhbWFnZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jaGVja0ZvckRlYXRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0ZvckRlYXRoKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlFZmZlY3QoZWZmZWN0OiBJRW50aXR5RWZmZWN0KSB7XHJcbiAgICAgICAgLy8gVE9ETyAyMDIwMDMxOSBTaG91bGQgYmUgbW92ZWQgdG8gYSBtYW5hZ2VyXHJcbiAgICAgICAgLy8gd2hpY2gga25vd3MgaG93IHRvIGFkZC9yZW1vdmUgZWZmZWN0cy5cclxuICAgICAgICBpZiAoIWVmZmVjdC5pc1N0YWNrYWJsZSAmJiBlZmZlY3QubmFtZSBpbiB0aGlzLmVmZmVjdE5vblN0YWNraW5nKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmVmZmVjdE5vblN0YWNraW5nW2VmZmVjdC5uYW1lXTtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuZWZmZWN0cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBlID0gdGhpcy5lZmZlY3RzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUubmFtZSA9PSBlZmZlY3QubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWZmZWN0cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGwtLTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lZmZlY3RzLnB1c2goZWZmZWN0KTtcclxuICAgICAgICBpZiAoIWVmZmVjdC5pc1N0YWNrYWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmVmZmVjdE5vblN0YWNraW5nW2VmZmVjdC5uYW1lXSA9IGVmZmVjdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07IiwiZXhwb3J0IGNsYXNzIEJ1bGxldCBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUge1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3BlZWQgPSBQaGFzZXIuTWF0aC5HZXRTcGVlZCg1MDAsIDEpO1xyXG5cclxuICAgIHByaXZhdGUgYW5ndWxhckRpcmVjdGlvbjogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgMCwgMCwgJ2J1bGxldCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcmUoeCwgeSwgcmFkKSB7XHJcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih4LCB5KTtcclxuICAgICAgICB0aGlzLmFuZ3VsYXJEaXJlY3Rpb24gPSByYWQ7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUsIGRlbHRhKSB7XHJcbiAgICAgICAgdGhpcy54ICs9IE1hdGguY29zKHRoaXMuYW5ndWxhckRpcmVjdGlvbikgKiB0aGlzLnNwZWVkICogZGVsdGE7XHJcbiAgICAgICAgdGhpcy55ICs9IE1hdGguc2luKHRoaXMuYW5ndWxhckRpcmVjdGlvbikgKiB0aGlzLnNwZWVkICogZGVsdGE7XHJcbiAgICAgICAgaWYgKHRoaXMueCA+IHdpbmRvdy5pbm5lcldpZHRoIHx8IHRoaXMueCA8IDBcclxuICAgICAgICAgICAgICAgIHx8IHRoaXMueSA+IHdpbmRvdy5pbm5lckhlaWdodCB8fCB0aGlzLnkgPCAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59OyIsImltcG9ydCB7IEJhZGRpZSB9IGZyb20gXCIuLi9iYWRkaWUvYmFkZGllXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElFbnRpdHlFZmZlY3Qge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgaXNTdGFja2FibGU6IGJvb2xlYW5cclxuXHJcbiAgICB1cGRhdGUoZGVsdGE6IG51bWJlcik7XHJcbiAgICBpc0NvbXBsZXRlZCgpOiBib29sZWFuO1xyXG5cclxuICAgIG9uTW92ZW1lbnQoKTogbnVtYmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVmZmVjdCBpbXBsZW1lbnRzIElFbnRpdHlFZmZlY3Qge1xyXG5cclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgcHJvdGVjdGVkIGJhZGRpZTogQmFkZGllO1xyXG5cclxuICAgIGFic3RyYWN0IHJlYWRvbmx5IGlzU3RhY2thYmxlOiBib29sZWFuO1xyXG5cclxuICAgIGFic3RyYWN0IHJlYWRvbmx5IGR1cmF0aW9uOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGVsYXBzZWQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcmVhZG9ubHkgbW92ZW1lbnRNdWx0aXBsaWVyOiBudW1iZXIgPSAxLjA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYmFkZGllOiBCYWRkaWUpIHtcclxuICAgICAgICB0aGlzLmJhZGRpZSA9IGJhZGRpZTtcclxuICAgIH1cclxuXHJcbiAgICBpc0NvbXBsZXRlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGFwc2VkID49IHRoaXMuZHVyYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmVsYXBzZWQgKz0gZGVsdGE7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3ZlbWVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tb3ZlbWVudE11bHRpcGxpZXI7XHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IHsgRWZmZWN0IH0gZnJvbSBcIi4vZWZmZWN0XCI7XHJcbmltcG9ydCB7IEJhZGRpZSB9IGZyb20gXCIuLi9iYWRkaWUvYmFkZGllXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3RzIH0gZnJvbSBcInBoYXNlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExpZ250bmluZ0NoYWluRWZmZWN0IGV4dGVuZHMgRWZmZWN0IHtcclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmcgPSBcIkNIQUlOX0xJR0hUTklOR1wiO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGlzU3RhY2thYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcmVhZG9ubHkgZHVyYXRpb24gPSAzMDA7XHJcbiAgICByZWFkb25seSBqdW1wRHVyYXRpb24gPSAyNTA7XHJcblxyXG4gICAgcHJpdmF0ZSBqdW1wRHVyYXRpb25FbGFwc2VkID0gMDtcclxuICAgIHByaXZhdGUganVtcHNMZWZ0OiBudW1iZXI7XHJcblxyXG4gICAgcmVhZG9ubHkgZGFtYWdlID0gMTtcclxuICAgIHByaXZhdGUgX2lzQ29tcGxldGVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBiYWRkaWVzOiBHYW1lT2JqZWN0cy5Hcm91cDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihiYWRkaWU6IEJhZGRpZSwgYmFkZGllczogR2FtZU9iamVjdHMuR3JvdXAsIGp1bXBzTGVmdDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoYmFkZGllKTtcclxuICAgICAgICB0aGlzLmJhZGRpZXMgPSBiYWRkaWVzO1xyXG4gICAgICAgIHRoaXMuanVtcHNMZWZ0ID0ganVtcHNMZWZ0O1xyXG4gICAgICAgIHRoaXMuYmFkZGllLnRha2VEYW1hZ2UodGhpcy5kYW1hZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgdGhpcy5qdW1wRHVyYXRpb25FbGFwc2VkICs9IGRlbHRhO1xyXG4gICAgICAgIGlmICh0aGlzLmp1bXBEdXJhdGlvbkVsYXBzZWQgPiB0aGlzLmp1bXBEdXJhdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBEdXJhdGlvbkVsYXBzZWQgLT0gdGhpcy5qdW1wRHVyYXRpb247XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmp1bXBzTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VzdEJhZGRpZSA9IHRoaXMuY2xvc2VzdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsb3Nlc3RCYWRkaWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0QmFkZGllLmFwcGx5RWZmZWN0KG5ldyBMaWdudG5pbmdDaGFpbkVmZmVjdChjbG9zZXN0QmFkZGllLCB0aGlzLmJhZGRpZXMsIHRoaXMuanVtcHNMZWZ0IC0gMSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzQ29tcGxldGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc0NvbXBsZXRlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNDb21wbGV0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbG9zZXN0KCk6IEJhZGRpZSB7XHJcbiAgICAgICAgLy8gVE9ETyBbMjAyMDAzMjBdIE1vdmUgc3RvcmFnZSBvZiBhbGwgZW5lbWllcyBpbnRvXHJcbiAgICAgICAgLy8gYSBrLWQgdHJlZSB0byBhbGxvdyBmb3IgZmFzdCBzcGFjZS1iYXNlZCBzZWFyY2guXHJcbiAgICAgICAgY29uc3QgcmFuZ2UgPSA1MDtcclxuICAgICAgICBjb25zdCBiYWRkaWVzID0gdGhpcy5iYWRkaWVzLmdldENoaWxkcmVuKCk7XHJcbiAgICAgICAgY29uc3QgY2xvc2VCYWRkaWVzID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGJhZGRpZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhZGRpZSA9IGJhZGRpZXNbaV07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJhZGRpZSAhPT0gYmFkZGllKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguYWJzKFBoYXNlci5NYXRoLkRpc3RhbmNlLkJldHdlZW5Qb2ludHModGhpcy5iYWRkaWUsIGJhZGRpZSBhcyBCYWRkaWUpKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IHJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VCYWRkaWVzLnB1c2goYmFkZGllKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNsb3NlQmFkZGllcykge1xyXG4gICAgICAgICAgICByZXR1cm4gY2xvc2VCYWRkaWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNsb3NlQmFkZGllcy5sZW5ndGgpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFZmZlY3QgfSBmcm9tIFwiLi9lZmZlY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTbG93RWZmZWN0IGV4dGVuZHMgRWZmZWN0IHtcclxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmcgPSBcIlNMT1dcIjtcclxuICAgIHB1YmxpYyByZWFkb25seSBpc1N0YWNrYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHJlYWRvbmx5IGR1cmF0aW9uID0gMjAwMDtcclxuICAgIHJlYWRvbmx5IG1vdmVtZW50TXVsdGlwbGllcjogbnVtYmVyID0gMC41O1xyXG59IiwiaW1wb3J0IHsgQnVsbGV0IH0gZnJvbSBcIi4uL2J1bGxldFwiO1xyXG5pbXBvcnQgeyBCYWRkaWUgfSBmcm9tIFwiLi4vYmFkZGllL2JhZGRpZVwiO1xyXG5pbXBvcnQgeyBTbG93RWZmZWN0IH0gZnJvbSBcIi4uL2VmZmVjdC9zbG93LWVmZmVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRvd2VyIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSB7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBmaWxsQWxwaGFNaW5pbXVtID0gMC4xO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBmaWxsQWxwaGFNYXhpbXVtID0gMS4wO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYnVpbGRUaW1lTVMgPSAxMDAwO1xyXG4gICAgcHJpdmF0ZSBlbGFwc2VkQnVpbGRUaW1lTVMgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmlyZURlbGF5TVMgPSAxMjA7XHJcbiAgICBwcml2YXRlIGVsYXBzZWRGaXJlVGltZU1TID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZpcmVEaXN0YW5jZSA9IDEyMDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGFtYWdlID0gODA7XHJcblxyXG4gICAgcHVibGljIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcbiAgICBwcml2YXRlIGJ1bGxldHM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cDtcclxuICAgIHByaXZhdGUgYmFkZGllczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG5cclxuICAgIHByaXZhdGUgdHlwZUluZGV4OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHR5cGVJbmRleDogbnVtYmVyLCBiYWRkaWVzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXApIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgeCwgeSwgJ3Rvd2VycycpO1xyXG4gICAgICAgIHNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGtleTogJ2J1aWxkaW5nJyxcclxuICAgICAgICAgICAgZnJhbWVzOiBzY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXMoJ3Rvd2VycycsIHsgc3RhcnQ6IDAsIGVuZDogMCB9KSxcclxuICAgICAgICAgICAgZHVyYXRpb246IHRoaXMuYnVpbGRUaW1lTVNcclxuICAgICAgICB9KTtcclxuICAgICAgICBzY2VuZS5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6ICdiYXNpYycsXHJcbiAgICAgICAgICAgIGZyYW1lczogc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKCd0b3dlcnMnLCB7IHN0YXJ0OiAyLCBlbmQ6IDIgfSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBzY2VuZS5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6ICd1cGdyYWRpbmcnLFxyXG4gICAgICAgICAgICBmcmFtZXM6IHNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcygndG93ZXJzJywgeyBzdGFydDogMSwgZW5kOiAxIH0pLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5idWlsZFRpbWVNU1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGtleTogJ2FkdmFuY2VkJyxcclxuICAgICAgICAgICAgZnJhbWVzOiBzY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXMoJ3Rvd2VycycsIHsgc3RhcnQ6IDMsIGVuZDogMyB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGtleTogJ3Nsb3cnLFxyXG4gICAgICAgICAgICBmcmFtZXM6IHNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcygndG93ZXJzJywgeyBzdGFydDogNCwgZW5kOiA0IH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudHlwZUluZGV4ID0gdHlwZUluZGV4O1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgICAgICB0aGlzLmJhZGRpZXMgPSBiYWRkaWVzO1xyXG4gICAgICAgIHRoaXMuYnVsbGV0cyA9IHNjZW5lLnBoeXNpY3MuYWRkLmdyb3VwKHtcclxuICAgICAgICAgICAgY2xhc3NUeXBlOiBCdWxsZXQsXHJcbiAgICAgICAgICAgIHJ1bkNoaWxkVXBkYXRlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5waHlzaWNzLmFkZC5vdmVybGFwKHRoaXMuYmFkZGllcywgdGhpcy5idWxsZXRzLCB0aGlzLm9uU2hvdENhbGxiYWNrKCkpO1xyXG5cclxuICAgICAgICBsZXQgY29tcGxldGVkQW5pbWF0aW9uID0gdGhpcy50eXBlSW5kZXggPT0gMSA/ICdiYXNpYydcclxuICAgICAgICAgICAgOiAodGhpcy50eXBlSW5kZXggPT0gMiA/ICdhZHZhbmNlZCcgOiAnc2xvdycpO1xyXG4gICAgICAgIHRoaXMuYW5pbXMucGxheSgnYnVpbGRpbmcnLCB0cnVlKS5vbignYW5pbWF0aW9uY29tcGxldGUnLCAoKSA9PiB0aGlzLmFuaW1zLnBsYXkoY29tcGxldGVkQW5pbWF0aW9uLCB0cnVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUsIGRlbHRhKSB7XHJcbiAgICAgICAgdGhpcy5lbGFwc2VkQnVpbGRUaW1lTVMgKz0gZGVsdGE7XHJcbiAgICAgICAgdGhpcy5lbGFwc2VkRmlyZVRpbWVNUyArPSBkZWx0YTtcclxuXHJcbiAgICAgICAgLy8gVE9ETyBbMjAyMDAzMThdIEludHJvZHVjZSBzdGF0ZXMgc3VjaCBhcyBcIkJ1aWxkaW5nXCIsXHJcbiAgICAgICAgLy8gXCJEZWZlbmRpbmdcIiwgXCJTZWxsaW5nXCIuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNCdWlsZGluZ0NvbXBsZXRlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5maW5kVGFyZ2V0QW5kRmlyZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxhcHNlZEZpcmVUaW1lTVMgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzQnVpbGRpbmdDb21wbGV0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGFwc2VkQnVpbGRUaW1lTVMgPj0gdGhpcy5idWlsZFRpbWVNUztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzUmVhZHlUb0ZpcmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxhcHNlZEZpcmVUaW1lTVMgPj0gdGhpcy5maXJlRGVsYXlNUztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbmRUYXJnZXRBbmRGaXJlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1JlYWR5VG9GaXJlKCkpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYmFkZGllID0gdGhpcy5maW5kQmFkZGllKCk7XHJcbiAgICAgICAgaWYgKGJhZGRpZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob290KGJhZGRpZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxhcHNlZEZpcmVUaW1lTVMgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbmRCYWRkaWUoKTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSB7XHJcbiAgICAgICAgbGV0IGJhZGRpZXMgPSB0aGlzLmJhZGRpZXMuZ2V0Q2hpbGRyZW4oKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwLCBsID0gYmFkZGllcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJhZGRpZSA9IGJhZGRpZXNbaV0gYXMgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICAgICAgICAgICAgaWYgKGJhZGRpZS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IFBoYXNlci5NYXRoLkRpc3RhbmNlLkJldHdlZW5Qb2ludHModGhpcywgYmFkZGllKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8PSB0aGlzLmZpcmVEaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiYWRkaWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG9vdChiYWRkaWU6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUpIHtcclxuICAgICAgICBsZXQgYW5nbGUgPSBQaGFzZXIuTWF0aC5BbmdsZS5CZXR3ZWVuUG9pbnRzKHRoaXMsIGJhZGRpZSk7XHJcbiAgICAgICAgbGV0IGJ1bGxldCA9IHRoaXMuYnVsbGV0cy5nZXQoKTtcclxuICAgICAgICBidWxsZXQuZmlyZSh0aGlzLngsIHRoaXMueSwgYW5nbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25TaG90Q2FsbGJhY2soKSB7XHJcbiAgICAgICAgcmV0dXJuIChiYWRkaWU6IEJhZGRpZSwgYnVsbGV0OiBCdWxsZXQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZUluZGV4ID09IDMpIHtcclxuICAgICAgICAgICAgICAgIGJhZGRpZS50YWtlRGFtYWdlKHRoaXMuZGFtYWdlIC8gNCk7XHJcbiAgICAgICAgICAgICAgICBiYWRkaWUuYXBwbHlFZmZlY3QobmV3IFNsb3dFZmZlY3QoYmFkZGllKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBiYWRkaWUudGFrZURhbWFnZSh0aGlzLmRhbWFnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnVsbGV0LmRlc3Ryb3koKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59OyIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuaW1wb3J0IFNjZW5lcyBmcm9tICcuL3NjZW5lJztcclxuXHJcbmNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XHJcbiAgICB0aXRsZTogJ1BoYXNlIDk4JyxcclxuXHJcbiAgICB0eXBlOiBQaGFzZXIuQVVUTyxcclxuXHJcbiAgICBzY2FsZToge1xyXG4gICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgIH0sXHJcblxyXG4gICAgcGh5c2ljczoge1xyXG4gICAgICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxyXG4gICAgICAgIGFyY2FkZToge1xyXG4gICAgICAgICAgICBkZWJ1ZzogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgc2NlbmU6IFNjZW5lcyxcclxuXHJcbiAgICBwYXJlbnQ6ICdjb250ZW50JyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZyk7IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwicGhhc2VyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFwIHtcclxuXHJcbiAgICBwdWJsaWMgbGF5ZXI6IFBoYXNlci5UaWxlbWFwcy5TdGF0aWNUaWxlbWFwTGF5ZXI7XHJcbiAgICBwcml2YXRlIG1hcDogUGhhc2VyLlRpbGVtYXBzLlRpbGVtYXA7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFNjZW5lKSB7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBzY2VuZS5tYWtlLnRpbGVtYXAoe1xyXG4gICAgICAgICAgICBkYXRhOiB0aGlzLmxldmVsRGF0YSxcclxuICAgICAgICAgICAgdGlsZVdpZHRoOiB0aGlzLnRpbGVXaWR0aCxcclxuICAgICAgICAgICAgdGlsZUhlaWdodDogdGhpcy50aWxlSGVpZ2h0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgdGlsZXNldCA9IHRoaXMubWFwLmFkZFRpbGVzZXRJbWFnZSgnZGVzZXJ0LXRpbGVzJyk7XHJcbiAgICAgICAgdGhpcy5sYXllciA9IHRoaXMubWFwLmNyZWF0ZVN0YXRpY0xheWVyKDAsIHRpbGVzZXQsIDAsIDApO1xyXG5cclxuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmxldmVsRGF0YS5sZW5ndGg7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmxldmVsRGF0YVswXS5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGJsb2NrcyA9IHNjZW5lLmFkZC5ncm91cCh1bmRlZmluZWQsIHsga2V5OiAnYmxvY2snLCByZXBlYXQ6IGhlaWdodCAqIHdpZHRoIC0xIH0pO1xyXG4gICAgICAgIFBoYXNlci5BY3Rpb25zLkdyaWRBbGlnbihibG9ja3MuZ2V0Q2hpbGRyZW4oKSwge1xyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5sZXZlbERhdGFbMF0ubGVuZ3RoLFxyXG4gICAgICAgICAgICBjZWxsV2lkdGg6IHRoaXMudGlsZVdpZHRoLFxyXG4gICAgICAgICAgICBjZWxsSGVpZ2h0OiB0aGlzLnRpbGVIZWlnaHQgLSAxLFxyXG4gICAgICAgICAgICB4OiAxNixcclxuICAgICAgICAgICAgeTogMTZcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIGJsb2Nrcy5jaGlsZHJlbi5pdGVyYXRlKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICBzY2VuZS50d2VlbnMuYWRkKHtcclxuICAgICAgICAgICAgICAgIHRhcmdldHM6IGNoaWxkLFxyXG4gICAgICAgICAgICAgICAgc2NhbGVYOiAwLFxyXG4gICAgICAgICAgICAgICAgc2NhbGVZOiAwLFxyXG4gICAgICAgICAgICAgICAgYWxwaGE6IDAsXHJcbiAgICAgICAgICAgICAgICB5OiAnKz02NCcsXHJcbiAgICAgICAgICAgICAgICBhbmdsZTogMTgwLFxyXG4gICAgICAgICAgICAgICAgZWFzZTogJ1Bvd2VyMycsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogODAwLCAvLyAxNTAwLFxyXG4gICAgICAgICAgICAgICAgZGVsYXk6IDEwMCArIGkqMzAvLyBNYXRoLnJhbmRvbSgpICogMTQwMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaSArKztcclxuICAgICAgICAgICAgaWYgKGkgJSB3aWR0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbGVJbmRleENhbGxiYWNrKGluZGV4ZXM6IG51bWJlciB8IGFueVtdLCBjYWxsYmFjazogRnVuY3Rpb24sIGNhbGxiYWNrQ29udGV4dDogb2JqZWN0LCBsYXllcj86IHN0cmluZyB8IG51bWJlciB8IFBoYXNlci5UaWxlbWFwcy5TdGF0aWNUaWxlbWFwTGF5ZXIgfCBQaGFzZXIuVGlsZW1hcHMuRHluYW1pY1RpbGVtYXBMYXllcikge1xyXG4gICAgICAgIHRoaXMubWFwLnNldFRpbGVJbmRleENhbGxiYWNrKGluZGV4ZXMsIGNhbGxiYWNrLCBjYWxsYmFja0NvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGlsZVdpZHRoID0gMzI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRpbGVIZWlnaHQgPSAzMjtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxldmVsRGF0YSA9IFtcclxuICAgICAgICBbMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgXSxcclxuICAgICAgICBbMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCA1LCA2LCA3LCAyOSwgXSxcclxuICAgICAgICBbMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAxMywgMTQsIDE1LCAyOSwgXSxcclxuICAgICAgICBbMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyMSwgMjIsIDIzLCAyOSwgXSxcclxuICAgICAgICBbMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCA1LCA2LCA2LCA2LCA3LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIF0sXHJcbiAgICAgICAgWzI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMTMsIDE0LCAxNCwgMTQsIDE1LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIF0sXHJcbiAgICAgICAgWzI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjEsIDE0LCAxNCwgMTQsIDIzLCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIF0sXHJcbiAgICAgICAgWzI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDIxLCAxNCwgMjMsIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIF0sXHJcbiAgICAgICAgWzI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyMiwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIF0sXHJcbiAgICAgICAgWzI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIF0sXHJcbiAgICAgICAgWzI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIF0sXHJcbiAgICAgICAgWzI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksICBdLFxyXG4gICAgICAgIFsyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDMwLCAzMCwgMzAsIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAgXSxcclxuICAgICAgICBbMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMzAsIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgIF0sXHJcbiAgICAgICAgWzI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksICBdLFxyXG4gICAgICAgIFsyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAgXSxcclxuICAgIF07XHJcbn0iLCJpbXBvcnQgeyBCYWRkaWVTcGF3bmVyIH0gZnJvbSAnLi4vZW50aXR5L2JhZGRpZS9iYWRkaWUtc3Bhd25lcic7XHJcbmltcG9ydCB7IFRvd2VyIH0gZnJvbSAnLi4vZW50aXR5L3Rvd2VyL3Rvd2VyJztcclxuaW1wb3J0IHsgU2xvd0VmZmVjdCB9IGZyb20gJy4uL2VudGl0eS9lZmZlY3Qvc2xvdy1lZmZlY3QnO1xyXG5pbXBvcnQgeyBMaWdudG5pbmdDaGFpbkVmZmVjdCB9IGZyb20gJy4uL2VudGl0eS9lZmZlY3QvbGlnaHRuaW5nLWNoYWluLWVmZmVjdCc7XHJcbmltcG9ydCB7IE1hcCBhcyBNYXAgfSBmcm9tICcuLi9tYXAvbWFwJztcclxuaW1wb3J0IHsgQmFkZGllUGF0aFNwYXduZXIgfSBmcm9tICcuLi9lbnRpdHkvYmFkZGllL2JhZGRpZS1wYXRoLXNwYXduZXInO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICBrZXk6ICdQaGFzZTk4JyxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cclxuICAgIC8vIFRPRE8gWzIwMjAwMzE4XSBUaGUgY29uZmlndXJhdGlvbiBvZiBzcGF3bmVyc1xyXG4gICAgLy8gd291bGQgbGF0ZXIgYmVsb25nIHdpdGggdGhlIGlkZWEgb2YgYSBzcGVjaWZpY1xyXG4gICAgLy8gXCJsZXZlbFwiIGFuZCBub3QgbGl2ZSB3aXRoaW4gdGhlIHJvb3QgR2FtZVNjZW5lLlxyXG4gICAgcHJpdmF0ZSBzcGF3bmVyczogYW55W10gPSBbXTtcclxuICAgIHByaXZhdGUgYmFkZGllczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG4gICAgcHJpdmF0ZSB0b3dlcnM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cDtcclxuXHJcbiAgICBwcml2YXRlIGlzUG9pbnRlck1pZGRsZURvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIG1hcDogTWFwO1xyXG5cclxuICAgIHByaXZhdGUgdG93ZXJUeXBlSW5kZXg6IG51bWJlciA9IDE7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmVsb2FkKCkge1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgndG93ZXInLCAnLi9hc3NldHMvdG93ZXIucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd0b3dlcnMnLCAnLi9hc3NldHMvdG93ZXJzLnBuZycsIHtmcmFtZVdpZHRoOiA2NCwgZnJhbWVIZWlnaHQ6IDY1fSk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdiYWRkaWUnLCAnLi9hc3NldHMvc3BhY2UtYmFkZGllLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnYnVsbGV0JywgJy4vYXNzZXRzL2VuZW15LWJ1bGxldC5wbmcnKTtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2Rlc2VydC10aWxlcycsICcuL2Fzc2V0cy90bXdfZGVzZXJ0X3NwYWNpbmcucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdkcmFnY2lyY2xlJywgJy4vYXNzZXRzL2Rlc2VydF9idXR0b24ucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdibG9jaycsICdhc3NldHMvZGVzZXJ0X3NhbmQucG5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSgpIHtcclxuICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAodGhpcyk7XHJcbiAgICAgICAgdGhpcy5tYXAuc2V0VGlsZUluZGV4Q2FsbGJhY2soWzE0XSwgdGhpcy5hcHBseVNsb3dFZmZlY3QsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubWFwLnNldFRpbGVJbmRleENhbGxiYWNrKFszMF0sIHRoaXMuYXBwbHlMaWdudG5pbmdDaGFpbkVmZmVjdCwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMudG93ZXJzID0gdGhpcy5hZGQuZ3JvdXAoe1xyXG4gICAgICAgICAgICBjbGFzc1R5cGU6IFRvd2VyLFxyXG4gICAgICAgICAgICBydW5DaGlsZFVwZGF0ZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJhZGRpZXMgPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKCk7XHJcbiAgICAgICAgdGhpcy5zcGF3bmVycy5wdXNoKG5ldyBCYWRkaWVTcGF3bmVyKHRoaXMsIHRoaXMuYmFkZGllcykpO1xyXG4gICAgICAgIHRoaXMuc3Bhd25lcnMucHVzaChuZXcgQmFkZGllUGF0aFNwYXduZXIodGhpcywgdGhpcy5iYWRkaWVzKSk7XHJcbiAgICAgICAgdGhpcy5zZXR1cFRvd2VyRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSh0aW1lLCBkZWx0YSkge1xyXG4gICAgICAgIHRoaXMucGh5c2ljcy5jb2xsaWRlKHRoaXMuYmFkZGllcywgdGhpcy5tYXAubGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuc3Bhd25lcnMuZm9yRWFjaChzID0+IHMudXBkYXRlKHRpbWUsIGRlbHRhKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXR1cFRvd2VyRXZlbnRzKCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXQua2V5Ym9hcmQub24oJ2tleWRvd24tT05FJywgKCkgPT4gdGhpcy5zZXRUb3dlclR5cGUoMSksIHRoaXMpXHJcbiAgICAgICAgdGhpcy5pbnB1dC5rZXlib2FyZC5vbigna2V5ZG93bi1UV08nLCAoKSA9PiB0aGlzLnNldFRvd2VyVHlwZSgyKSwgdGhpcylcclxuICAgICAgICB0aGlzLmlucHV0LmtleWJvYXJkLm9uKCdrZXlkb3duLVRIUkVFJywgKCkgPT4gdGhpcy5zZXRUb3dlclR5cGUoMyksIHRoaXMpXHJcbiAgICAgICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcmRvd24nLCB0aGlzLnBvaW50U3RhdGVVcGRhdGUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJ1cCcsIHRoaXMudG93ZXJBZGQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VG93ZXJUeXBlKHRvd2VyVHlwZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy50b3dlclR5cGVJbmRleCA9IHRvd2VyVHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBvaW50U3RhdGVVcGRhdGUocG9pbnRlcjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5pc1BvaW50ZXJNaWRkbGVEb3duID0gcG9pbnRlci5taWRkbGVCdXR0b25Eb3duKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b3dlckFkZChwb2ludGVyOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1BvaW50ZXJNaWRkbGVEb3duICYmICFwb2ludGVyLm1pZGRsZUJ1dHRvbkRvd24oKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzUG9pbnRlck1pZGRsZURvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy50b3dlcnMuYWRkKG5ldyBUb3dlcih0aGlzLCBwb2ludGVyLngsIHBvaW50ZXIueSwgdGhpcy50b3dlclR5cGVJbmRleCwgdGhpcy5iYWRkaWVzKSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXBwbHlTbG93RWZmZWN0KGJhZGRpZSwgdGlsZSkge1xyXG4gICAgICAgIGJhZGRpZS5hcHBseUVmZmVjdChuZXcgU2xvd0VmZmVjdChiYWRkaWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFwcGx5TGlnbnRuaW5nQ2hhaW5FZmZlY3QoYmFkZGllLCB0aWxlKSB7XHJcbiAgICAgICAgYmFkZGllLmFwcGx5RWZmZWN0KG5ldyBMaWdudG5pbmdDaGFpbkVmZmVjdChiYWRkaWUsIHRoaXMuYmFkZGllcywgNikpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdhbWVTY2VuZSB9IGZyb20gJy4vZ2FtZS1zY2VuZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAgICBHYW1lU2NlbmUsXHJcbl07Il0sInNvdXJjZVJvb3QiOiIifQ==