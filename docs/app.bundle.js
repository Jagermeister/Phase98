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
        this.spawnDelayMS = 100;
        this.entityMaxCount = 150;
        this.elapsedSpawnTimeMS = 0;
        this.xSpawnOffset = 20;
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
        _this.towerTypeIndex = 1;
        return _this;
    }
    GameScene.prototype.preload = function () {
        this.load.image('tower', './assets/tower.png');
        this.load.spritesheet('towers', './assets/towers.png', { frameWidth: 64, frameHeight: 65 });
        this.load.image('baddie', './assets/space-baddie.png');
        this.load.image('bullet', './assets/enemy-bullet.png');
        this.load.image('desert-tiles', './assets/tmw_desert_spacing.png');
    };
    GameScene.prototype.create = function () {
        var level = [
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
        var map = this.make.tilemap({ data: level, tileWidth: 32, tileHeight: 32 });
        var tiles = map.addTilesetImage('desert-tiles');
        this.layer = map.createStaticLayer(0, tiles, 0, 0);
        map.setTileIndexCallback([14], this.applySlowEffect, this);
        map.setTileIndexCallback([30], this.applyLigntningChainEffect, this);
        this.towers = this.add.group({
            classType: tower_1.Tower,
            runChildUpdate: true
        });
        this.baddies = this.physics.add.group();
        this.spawners.push(new baddie_spawner_1.BaddieSpawner(this, this.baddies));
        this.setupTowerTypeChangeEvents();
        this.input.on('pointerup', this.towerAdd, this);
    };
    GameScene.prototype.update = function (time, delta) {
        this.physics.collide(this.baddies, this.layer);
        this.spawners.forEach(function (s) { return s.update(time, delta); });
    };
    GameScene.prototype.setupTowerTypeChangeEvents = function () {
        var _this = this;
        this.input.keyboard.on('keydown-ONE', function () { return _this.setTowerType(1); }, this);
        this.input.keyboard.on('keydown-TWO', function () { return _this.setTowerType(2); }, this);
        this.input.keyboard.on('keydown-THREE', function () { return _this.setTowerType(3); }, this);
    };
    GameScene.prototype.setTowerType = function (towerType) {
        this.towerTypeIndex = towerType;
    };
    GameScene.prototype.towerAdd = function (pointer) {
        this.towers.add(new tower_1.Tower(this, pointer.x, pointer.y, this.towerTypeIndex, this.baddies), true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0eS9iYWRkaWUvYmFkZGllLXNwYXduZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0eS9iYWRkaWUvYmFkZGllLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdHkvYnVsbGV0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdHkvZWZmZWN0L2VmZmVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5L2VmZmVjdC9saWdodG5pbmctY2hhaW4tZWZmZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdHkvZWZmZWN0L3Nsb3ctZWZmZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdHkvdG93ZXIvdG93ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lL2dhbWUtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVB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LEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFHO1lBQ2xKLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUc7WUFDL0ksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRztZQUNsSixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFHO1lBQ2xKLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUc7WUFDN0ksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRztZQUNsSixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFHO1lBQ2xKLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUc7WUFDbEosQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRztZQUNsSixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFHO1lBQ2xKLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUc7WUFDbEosQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBSTtZQUNuSixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFJO1lBQ25KLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUk7WUFDbkosQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUs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QUMsRUFBcEIsQ0FBb0IsRUFBRSxJQUFJLENBQUM7UUFDdkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxjQUFNLFlBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQXBCLENBQW9CLEVBQUUsSUFBSSxDQUFDO0lBQzdFLENBQUM7SUFFTyxnQ0FBWSxHQUFwQixVQUFxQixTQUFpQjtRQUNsQyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0lBRU8sNEJBQVEsR0FBaEIsVUFBaUIsT0FBWTtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLGFBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BHLENBQUM7SUFFTyxtQ0FBZSxHQUF2QixVQUF3QixNQUFNLEVBQUUsSUFBSTtRQUNoQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksd0JBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTyw2Q0FBeUIsR0FBakMsVUFBa0MsTUFBTSxFQUFFLElBQUk7UUFDMUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLDZDQUFvQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxDQXhGOEIsTUFBTSxDQUFDLEtBQUssR0F3RjFDO0FBeEZZLDhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7QUNYdEIsd0ZBQXlDO0FBRXpDLGtCQUFlO0lBQ1gsc0JBQVM7Q0FDWixDQUFDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCB7IEJhZGRpZSB9IGZyb20gJy4uL2JhZGRpZS9iYWRkaWUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhZGRpZVNwYXduZXIge1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3Bhd25EZWxheU1TID0gMTAwO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBlbnRpdHlNYXhDb3VudCA9IDE1MDtcclxuXHJcbiAgICBwcml2YXRlIGJhZGRpZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cDtcclxuICAgIHByaXZhdGUgcGFyZW50R3JvdXA6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cDtcclxuXHJcbiAgICBwcml2YXRlIGVsYXBzZWRTcGF3blRpbWVNUyA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSB4U3Bhd25PZmZzZXQgPSAyMDtcclxuICAgIHByaXZhdGUgeFNwYXduT2Zmc2V0Q3VycmVudCA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHBhcmVudEdyb3VwOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXApIHtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgdGhpcy5iYWRkaWVzID0gdGhpcy5zY2VuZS5hZGQuZ3JvdXAoe1xyXG4gICAgICAgICAgICBuYW1lOiAnYmFkZGllcycsXHJcbiAgICAgICAgICAgIGNsYXNzVHlwZTogQmFkZGllLFxyXG4gICAgICAgICAgICBtYXhTaXplOiB0aGlzLmVudGl0eU1heENvdW50LFxyXG4gICAgICAgICAgICBydW5DaGlsZFVwZGF0ZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50R3JvdXAgPSBwYXJlbnRHcm91cDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSwgZGVsdGEpIHtcclxuICAgICAgICB0aGlzLmVsYXBzZWRTcGF3blRpbWVNUyArPSBkZWx0YTtcclxuICAgICAgICBpZiAodGhpcy5lbGFwc2VkU3Bhd25UaW1lTVMgPj0gdGhpcy5zcGF3bkRlbGF5TVMpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGFwc2VkU3Bhd25UaW1lTVMgLT0gdGhpcy5zcGF3bkRlbGF5TVM7XHJcbiAgICAgICAgICAgIHRoaXMueFNwYXduT2Zmc2V0Q3VycmVudCArPSB0aGlzLnhTcGF3bk9mZnNldDtcclxuICAgICAgICAgICAgaWYgKHRoaXMueFNwYXduT2Zmc2V0Q3VycmVudCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnhTcGF3bk9mZnNldEN1cnJlbnQgLT0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGJhZGRpZSA9IHRoaXMuYmFkZGllcy5nZXQoKTtcclxuICAgICAgICAgICAgaWYgKGJhZGRpZSkge1xyXG4gICAgICAgICAgICAgICAgYmFkZGllLnNwYXduKHRoaXMueFNwYXduT2Zmc2V0Q3VycmVudCwgMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEdyb3VwLmFkZChiYWRkaWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufTsiLCJpbXBvcnQgeyBJRW50aXR5RWZmZWN0IH0gZnJvbSBcIi4uL2VmZmVjdC9lZmZlY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYWRkaWUgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlIHtcclxuXHJcbiAgICBwcml2YXRlIGltYWdlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlICYgeyBib2R5OiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuQm9keSB9O1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3BlZWQgPSBQaGFzZXIuTWF0aC5HZXRTcGVlZCgxMjUsIDEpO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaGVhbHRoTWF4ID0gMTAwO1xyXG4gICAgcHJpdmF0ZSBoZWFsdGg6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIGhhc1Rha2VuRGFtYWdlOiBib29sZWFuO1xyXG5cclxuICAgIHByaXZhdGUgZWZmZWN0czogSUVudGl0eUVmZmVjdFtdO1xyXG4gICAgcHJpdmF0ZSBlZmZlY3ROb25TdGFja2luZzogUmVjb3JkPHN0cmluZywgSUVudGl0eUVmZmVjdD47XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCAwLCAwLCAnYmFkZGllJyk7XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSB0aGlzLmhlYWx0aE1heDtcclxuICAgICAgICB0aGlzLmVmZmVjdHMgPSBbXTtcclxuICAgICAgICB0aGlzLmVmZmVjdE5vblN0YWNraW5nID0ge307XHJcbiAgICAgICAgdGhpcy5oYXNUYWtlbkRhbWFnZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYXduKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih4LCB5KTtcclxuICAgICAgICB0aGlzLnNldEFjdGl2ZSh0cnVlKTtcclxuICAgICAgICB0aGlzLnNldFZpc2libGUodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUsIGRlbHRhKSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuZWZmZWN0cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGVmZmVjdCA9IHRoaXMuZWZmZWN0c1tpXTtcclxuICAgICAgICAgICAgZWZmZWN0LnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgICAgIGlmKGVmZmVjdC5pc0NvbXBsZXRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVmZmVjdHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICAgICAgbC0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hlY2tGb3JEZWF0aCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5oYXNUYWtlbkRhbWFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFRpbnRGaWxsKDB4ZmYwMDAwKTtcclxuICAgICAgICAgICAgdGhpcy5oYXNUYWtlbkRhbWFnZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhclRpbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtb3ZlbWVudE11bHRpcGxlciA9IHRoaXMuZWZmZWN0cy5yZWR1Y2UoKHAsIGMpID0+IHAgKiBjLm9uTW92ZW1lbnQoKSwgMS4wKTtcclxuXHJcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWQvNCAqIGRlbHRhICogbW92ZW1lbnRNdWx0aXBsZXI7XHJcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWQgKiBkZWx0YSAqIG1vdmVtZW50TXVsdGlwbGVyO1xyXG4gICAgICAgIGlmICh0aGlzLnggPiB3aW5kb3cuaW5uZXJXaWR0aCB8fCB0aGlzLnkgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0YWtlRGFtYWdlKGRhbWFnZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggLT0gZGFtYWdlO1xyXG4gICAgICAgIHRoaXMuaGFzVGFrZW5EYW1hZ2UgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hlY2tGb3JEZWF0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tGb3JEZWF0aCgpIHtcclxuICAgICAgICBpZiAodGhpcy5oZWFsdGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5RWZmZWN0KGVmZmVjdDogSUVudGl0eUVmZmVjdCkge1xyXG4gICAgICAgIC8vIFRPRE8gMjAyMDAzMTkgU2hvdWxkIGJlIG1vdmVkIHRvIGEgbWFuYWdlclxyXG4gICAgICAgIC8vIHdoaWNoIGtub3dzIGhvdyB0byBhZGQvcmVtb3ZlIGVmZmVjdHMuXHJcbiAgICAgICAgaWYgKCFlZmZlY3QuaXNTdGFja2FibGUgJiYgZWZmZWN0Lm5hbWUgaW4gdGhpcy5lZmZlY3ROb25TdGFja2luZykge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5lZmZlY3ROb25TdGFja2luZ1tlZmZlY3QubmFtZV07XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLmVmZmVjdHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZSA9IHRoaXMuZWZmZWN0c1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChlLm5hbWUgPT0gZWZmZWN0Lm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVmZmVjdHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgICAgICAgICBsLS07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZWZmZWN0cy5wdXNoKGVmZmVjdCk7XHJcbiAgICAgICAgaWYgKCFlZmZlY3QuaXNTdGFja2FibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5lZmZlY3ROb25TdGFja2luZ1tlZmZlY3QubmFtZV0gPSBlZmZlY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59OyIsImV4cG9ydCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlIHtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNwZWVkID0gUGhhc2VyLk1hdGguR2V0U3BlZWQoNTAwLCAxKTtcclxuXHJcbiAgICBwcml2YXRlIGFuZ3VsYXJEaXJlY3Rpb246IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIDAsIDAsICdidWxsZXQnKTtcclxuICAgIH1cclxuXHJcbiAgICBmaXJlKHgsIHksIHJhZCkge1xyXG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24oeCwgeSk7XHJcbiAgICAgICAgdGhpcy5hbmd1bGFyRGlyZWN0aW9uID0gcmFkO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lLCBkZWx0YSkge1xyXG4gICAgICAgIHRoaXMueCArPSBNYXRoLmNvcyh0aGlzLmFuZ3VsYXJEaXJlY3Rpb24pICogdGhpcy5zcGVlZCAqIGRlbHRhO1xyXG4gICAgICAgIHRoaXMueSArPSBNYXRoLnNpbih0aGlzLmFuZ3VsYXJEaXJlY3Rpb24pICogdGhpcy5zcGVlZCAqIGRlbHRhO1xyXG4gICAgICAgIGlmICh0aGlzLnggPiB3aW5kb3cuaW5uZXJXaWR0aCB8fCB0aGlzLnggPCAwXHJcbiAgICAgICAgICAgICAgICB8fCB0aGlzLnkgPiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgdGhpcy55IDwgMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTsiLCJpbXBvcnQgeyBCYWRkaWUgfSBmcm9tIFwiLi4vYmFkZGllL2JhZGRpZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRW50aXR5RWZmZWN0IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGlzU3RhY2thYmxlOiBib29sZWFuXHJcblxyXG4gICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpO1xyXG4gICAgaXNDb21wbGV0ZWQoKTogYm9vbGVhbjtcclxuXHJcbiAgICBvbk1vdmVtZW50KCk6IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFZmZlY3QgaW1wbGVtZW50cyBJRW50aXR5RWZmZWN0IHtcclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHByb3RlY3RlZCBiYWRkaWU6IEJhZGRpZTtcclxuXHJcbiAgICBhYnN0cmFjdCByZWFkb25seSBpc1N0YWNrYWJsZTogYm9vbGVhbjtcclxuXHJcbiAgICBhYnN0cmFjdCByZWFkb25seSBkdXJhdGlvbjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBlbGFwc2VkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHJlYWRvbmx5IG1vdmVtZW50TXVsdGlwbGllcjogbnVtYmVyID0gMS4wO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGJhZGRpZTogQmFkZGllKSB7XHJcbiAgICAgICAgdGhpcy5iYWRkaWUgPSBiYWRkaWU7XHJcbiAgICB9XHJcblxyXG4gICAgaXNDb21wbGV0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxhcHNlZCA+PSB0aGlzLmR1cmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5lbGFwc2VkICs9IGRlbHRhO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW92ZW1lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW92ZW1lbnRNdWx0aXBsaWVyO1xyXG4gICAgfTtcclxufSIsImltcG9ydCB7IEVmZmVjdCB9IGZyb20gXCIuL2VmZmVjdFwiO1xyXG5pbXBvcnQgeyBCYWRkaWUgfSBmcm9tIFwiLi4vYmFkZGllL2JhZGRpZVwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0cyB9IGZyb20gXCJwaGFzZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMaWdudG5pbmdDaGFpbkVmZmVjdCBleHRlbmRzIEVmZmVjdCB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nID0gXCJDSEFJTl9MSUdIVE5JTkdcIjtcclxuICAgIHB1YmxpYyByZWFkb25seSBpc1N0YWNrYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHJlYWRvbmx5IGR1cmF0aW9uID0gMzAwO1xyXG4gICAgcmVhZG9ubHkganVtcER1cmF0aW9uID0gMjUwO1xyXG5cclxuICAgIHByaXZhdGUganVtcER1cmF0aW9uRWxhcHNlZCA9IDA7XHJcbiAgICBwcml2YXRlIGp1bXBzTGVmdDogbnVtYmVyO1xyXG5cclxuICAgIHJlYWRvbmx5IGRhbWFnZSA9IDE7XHJcbiAgICBwcml2YXRlIF9pc0NvbXBsZXRlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgYmFkZGllczogR2FtZU9iamVjdHMuR3JvdXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYmFkZGllOiBCYWRkaWUsIGJhZGRpZXM6IEdhbWVPYmplY3RzLkdyb3VwLCBqdW1wc0xlZnQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKGJhZGRpZSk7XHJcbiAgICAgICAgdGhpcy5iYWRkaWVzID0gYmFkZGllcztcclxuICAgICAgICB0aGlzLmp1bXBzTGVmdCA9IGp1bXBzTGVmdDtcclxuICAgICAgICB0aGlzLmJhZGRpZS50YWtlRGFtYWdlKHRoaXMuZGFtYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpIHtcclxuICAgICAgICBzdXBlci51cGRhdGUoZGVsdGEpO1xyXG4gICAgICAgIHRoaXMuanVtcER1cmF0aW9uRWxhcHNlZCArPSBkZWx0YTtcclxuICAgICAgICBpZiAodGhpcy5qdW1wRHVyYXRpb25FbGFwc2VkID4gdGhpcy5qdW1wRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5qdW1wRHVyYXRpb25FbGFwc2VkIC09IHRoaXMuanVtcER1cmF0aW9uO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5qdW1wc0xlZnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RCYWRkaWUgPSB0aGlzLmNsb3Nlc3QoKTtcclxuICAgICAgICAgICAgICAgIGlmIChjbG9zZXN0QmFkZGllKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdEJhZGRpZS5hcHBseUVmZmVjdChuZXcgTGlnbnRuaW5nQ2hhaW5FZmZlY3QoY2xvc2VzdEJhZGRpZSwgdGhpcy5iYWRkaWVzLCB0aGlzLmp1bXBzTGVmdCAtIDEpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0NvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQ29tcGxldGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xvc2VzdCgpOiBCYWRkaWUge1xyXG4gICAgICAgIC8vIFRPRE8gWzIwMjAwMzIwXSBNb3ZlIHN0b3JhZ2Ugb2YgYWxsIGVuZW1pZXMgaW50b1xyXG4gICAgICAgIC8vIGEgay1kIHRyZWUgdG8gYWxsb3cgZm9yIGZhc3Qgc3BhY2UtYmFzZWQgc2VhcmNoLlxyXG4gICAgICAgIGNvbnN0IHJhbmdlID0gNTA7XHJcbiAgICAgICAgY29uc3QgYmFkZGllcyA9IHRoaXMuYmFkZGllcy5nZXRDaGlsZHJlbigpO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlQmFkZGllcyA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBiYWRkaWVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBiYWRkaWUgPSBiYWRkaWVzW2ldO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5iYWRkaWUgIT09IGJhZGRpZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmFicyhQaGFzZXIuTWF0aC5EaXN0YW5jZS5CZXR3ZWVuUG9pbnRzKHRoaXMuYmFkZGllLCBiYWRkaWUgYXMgQmFkZGllKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCByYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQmFkZGllcy5wdXNoKGJhZGRpZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjbG9zZUJhZGRpZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNsb3NlQmFkZGllc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjbG9zZUJhZGRpZXMubGVuZ3RoKV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRWZmZWN0IH0gZnJvbSBcIi4vZWZmZWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2xvd0VmZmVjdCBleHRlbmRzIEVmZmVjdCB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nID0gXCJTTE9XXCI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaXNTdGFja2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICByZWFkb25seSBkdXJhdGlvbiA9IDIwMDA7XHJcbiAgICByZWFkb25seSBtb3ZlbWVudE11bHRpcGxpZXI6IG51bWJlciA9IDAuNTtcclxufSIsImltcG9ydCB7IEJ1bGxldCB9IGZyb20gXCIuLi9idWxsZXRcIjtcclxuaW1wb3J0IHsgQmFkZGllIH0gZnJvbSBcIi4uL2JhZGRpZS9iYWRkaWVcIjtcclxuaW1wb3J0IHsgU2xvd0VmZmVjdCB9IGZyb20gXCIuLi9lZmZlY3Qvc2xvdy1lZmZlY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUb3dlciBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUge1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmlsbEFscGhhTWluaW11bSA9IDAuMTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmlsbEFscGhhTWF4aW11bSA9IDEuMDtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGJ1aWxkVGltZU1TID0gMTAwMDtcclxuICAgIHByaXZhdGUgZWxhcHNlZEJ1aWxkVGltZU1TID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZpcmVEZWxheU1TID0gMTIwO1xyXG4gICAgcHJpdmF0ZSBlbGFwc2VkRmlyZVRpbWVNUyA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBmaXJlRGlzdGFuY2UgPSAxMjA7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRhbWFnZSA9IDgwO1xyXG5cclxuICAgIHB1YmxpYyBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG4gICAgcHJpdmF0ZSBidWxsZXRzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA7XHJcbiAgICBwcml2YXRlIGJhZGRpZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cDtcclxuXHJcbiAgICBwcml2YXRlIHR5cGVJbmRleDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyLCB0eXBlSW5kZXg6IG51bWJlciwgYmFkZGllczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIHgsIHksICd0b3dlcnMnKTtcclxuICAgICAgICBzY2VuZS5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6ICdidWlsZGluZycsXHJcbiAgICAgICAgICAgIGZyYW1lczogc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKCd0b3dlcnMnLCB7IHN0YXJ0OiAwLCBlbmQ6IDAgfSksXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLmJ1aWxkVGltZU1TXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiAnYmFzaWMnLFxyXG4gICAgICAgICAgICBmcmFtZXM6IHNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcygndG93ZXJzJywgeyBzdGFydDogMiwgZW5kOiAyIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiAndXBncmFkaW5nJyxcclxuICAgICAgICAgICAgZnJhbWVzOiBzY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXMoJ3Rvd2VycycsIHsgc3RhcnQ6IDEsIGVuZDogMSB9KSxcclxuICAgICAgICAgICAgZHVyYXRpb246IHRoaXMuYnVpbGRUaW1lTVNcclxuICAgICAgICB9KTtcclxuICAgICAgICBzY2VuZS5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6ICdhZHZhbmNlZCcsXHJcbiAgICAgICAgICAgIGZyYW1lczogc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKCd0b3dlcnMnLCB7IHN0YXJ0OiAzLCBlbmQ6IDMgfSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBzY2VuZS5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6ICdzbG93JyxcclxuICAgICAgICAgICAgZnJhbWVzOiBzY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXMoJ3Rvd2VycycsIHsgc3RhcnQ6IDQsIGVuZDogNCB9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnR5cGVJbmRleCA9IHR5cGVJbmRleDtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgdGhpcy5iYWRkaWVzID0gYmFkZGllcztcclxuICAgICAgICB0aGlzLmJ1bGxldHMgPSBzY2VuZS5waHlzaWNzLmFkZC5ncm91cCh7XHJcbiAgICAgICAgICAgIGNsYXNzVHlwZTogQnVsbGV0LFxyXG4gICAgICAgICAgICBydW5DaGlsZFVwZGF0ZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2NlbmUucGh5c2ljcy5hZGQub3ZlcmxhcCh0aGlzLmJhZGRpZXMsIHRoaXMuYnVsbGV0cywgdGhpcy5vblNob3RDYWxsYmFjaygpKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbXBsZXRlZEFuaW1hdGlvbiA9IHRoaXMudHlwZUluZGV4ID09IDEgPyAnYmFzaWMnXHJcbiAgICAgICAgICAgIDogKHRoaXMudHlwZUluZGV4ID09IDIgPyAnYWR2YW5jZWQnIDogJ3Nsb3cnKTtcclxuICAgICAgICB0aGlzLmFuaW1zLnBsYXkoJ2J1aWxkaW5nJywgdHJ1ZSkub24oJ2FuaW1hdGlvbmNvbXBsZXRlJywgKCkgPT4gdGhpcy5hbmltcy5wbGF5KGNvbXBsZXRlZEFuaW1hdGlvbiwgdHJ1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lLCBkZWx0YSkge1xyXG4gICAgICAgIHRoaXMuZWxhcHNlZEJ1aWxkVGltZU1TICs9IGRlbHRhO1xyXG4gICAgICAgIHRoaXMuZWxhcHNlZEZpcmVUaW1lTVMgKz0gZGVsdGE7XHJcblxyXG4gICAgICAgIC8vIFRPRE8gWzIwMjAwMzE4XSBJbnRyb2R1Y2Ugc3RhdGVzIHN1Y2ggYXMgXCJCdWlsZGluZ1wiLFxyXG4gICAgICAgIC8vIFwiRGVmZW5kaW5nXCIsIFwiU2VsbGluZ1wiLlxyXG4gICAgICAgIGlmICh0aGlzLmlzQnVpbGRpbmdDb21wbGV0ZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluZFRhcmdldEFuZEZpcmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsYXBzZWRGaXJlVGltZU1TID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc0J1aWxkaW5nQ29tcGxldGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxhcHNlZEJ1aWxkVGltZU1TID49IHRoaXMuYnVpbGRUaW1lTVM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc1JlYWR5VG9GaXJlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsYXBzZWRGaXJlVGltZU1TID49IHRoaXMuZmlyZURlbGF5TVM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaW5kVGFyZ2V0QW5kRmlyZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNSZWFkeVRvRmlyZSgpKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJhZGRpZSA9IHRoaXMuZmluZEJhZGRpZSgpO1xyXG4gICAgICAgIGlmIChiYWRkaWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG9vdChiYWRkaWUpO1xyXG4gICAgICAgICAgICB0aGlzLmVsYXBzZWRGaXJlVGltZU1TID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaW5kQmFkZGllKCk6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUge1xyXG4gICAgICAgIGxldCBiYWRkaWVzID0gdGhpcy5iYWRkaWVzLmdldENoaWxkcmVuKCk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMCwgbCA9IGJhZGRpZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiYWRkaWUgPSBiYWRkaWVzW2ldIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgICAgICAgICAgIGlmIChiYWRkaWUuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBQaGFzZXIuTWF0aC5EaXN0YW5jZS5CZXR3ZWVuUG9pbnRzKHRoaXMsIGJhZGRpZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPD0gdGhpcy5maXJlRGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmFkZGllO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvb3QoYmFkZGllOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKSB7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gUGhhc2VyLk1hdGguQW5nbGUuQmV0d2VlblBvaW50cyh0aGlzLCBiYWRkaWUpO1xyXG4gICAgICAgIGxldCBidWxsZXQgPSB0aGlzLmJ1bGxldHMuZ2V0KCk7XHJcbiAgICAgICAgYnVsbGV0LmZpcmUodGhpcy54LCB0aGlzLnksIGFuZ2xlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uU2hvdENhbGxiYWNrKCkge1xyXG4gICAgICAgIHJldHVybiAoYmFkZGllOiBCYWRkaWUsIGJ1bGxldDogQnVsbGV0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGVJbmRleCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBiYWRkaWUudGFrZURhbWFnZSh0aGlzLmRhbWFnZSAvIDQpO1xyXG4gICAgICAgICAgICAgICAgYmFkZGllLmFwcGx5RWZmZWN0KG5ldyBTbG93RWZmZWN0KGJhZGRpZSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYmFkZGllLnRha2VEYW1hZ2UodGhpcy5kYW1hZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1bGxldC5kZXN0cm95KCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufTsiLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmltcG9ydCBTY2VuZXMgZnJvbSAnLi9zY2VuZSc7XHJcblxyXG5jb25zdCBnYW1lQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xyXG4gICAgdGl0bGU6ICdQaGFzZSA5OCcsXHJcblxyXG4gICAgdHlwZTogUGhhc2VyLkFVVE8sXHJcblxyXG4gICAgc2NhbGU6IHtcclxuICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICB9LFxyXG5cclxuICAgIHBoeXNpY3M6IHtcclxuICAgICAgICBkZWZhdWx0OiAnYXJjYWRlJyxcclxuICAgICAgICBhcmNhZGU6IHtcclxuICAgICAgICAgICAgZGVidWc6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIHNjZW5lOiBTY2VuZXMsXHJcblxyXG4gICAgcGFyZW50OiAnY29udGVudCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpOyIsImltcG9ydCB7IEJhZGRpZVNwYXduZXIgfSBmcm9tICcuLi9lbnRpdHkvYmFkZGllL2JhZGRpZS1zcGF3bmVyJztcclxuaW1wb3J0IHsgVG93ZXIgfSBmcm9tICcuLi9lbnRpdHkvdG93ZXIvdG93ZXInO1xyXG5pbXBvcnQgeyBTbG93RWZmZWN0IH0gZnJvbSAnLi4vZW50aXR5L2VmZmVjdC9zbG93LWVmZmVjdCc7XHJcbmltcG9ydCB7IExpZ250bmluZ0NoYWluRWZmZWN0IH0gZnJvbSAnLi4vZW50aXR5L2VmZmVjdC9saWdodG5pbmctY2hhaW4tZWZmZWN0JztcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiAnUGhhc2U5OCcsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHJcbiAgICAvLyBUT0RPIFsyMDIwMDMxOF0gVGhlIGNvbmZpZ3VyYXRpb24gb2Ygc3Bhd25lcnNcclxuICAgIC8vIHdvdWxkIGxhdGVyIGJlbG9uZyB3aXRoIHRoZSBpZGVhIG9mIGEgc3BlY2lmaWNcclxuICAgIC8vIFwibGV2ZWxcIiBhbmQgbm90IGxpdmUgd2l0aGluIHRoZSByb290IEdhbWVTY2VuZS5cclxuICAgIHByaXZhdGUgc3Bhd25lcnM6IEJhZGRpZVNwYXduZXJbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBiYWRkaWVzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA7XHJcbiAgICBwcml2YXRlIHRvd2VyczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG5cclxuICAgIHByaXZhdGUgdG93ZXJUeXBlSW5kZXg6IG51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIGxheWVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJlbG9hZCgpIHtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3Rvd2VyJywgJy4vYXNzZXRzL3Rvd2VyLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgndG93ZXJzJywgJy4vYXNzZXRzL3Rvd2Vycy5wbmcnLCB7ZnJhbWVXaWR0aDogNjQsIGZyYW1lSGVpZ2h0OiA2NX0pO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnYmFkZGllJywgJy4vYXNzZXRzL3NwYWNlLWJhZGRpZS5wbmcnKTtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2J1bGxldCcsICcuL2Fzc2V0cy9lbmVteS1idWxsZXQucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdkZXNlcnQtdGlsZXMnLCAnLi9hc3NldHMvdG13X2Rlc2VydF9zcGFjaW5nLnBuZycpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKSB7XHJcbiAgICAgICAgY29uc3QgbGV2ZWwgPSBbXHJcbiAgICAgICAgICAgIFsyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCBdLFxyXG4gICAgICAgICAgICBbMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCA1LCA2LCA3LCAyOSwgXSxcclxuICAgICAgICAgICAgWzI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMTMsIDE0LCAxNSwgMjksIF0sXHJcbiAgICAgICAgICAgIFsyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDIxLCAyMiwgMjMsIDI5LCBdLFxyXG4gICAgICAgICAgICBbMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCA1LCA2LCA2LCA2LCA3LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIF0sXHJcbiAgICAgICAgICAgIFsyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDEzLCAxNCwgMTQsIDE0LCAxNSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCBdLFxyXG4gICAgICAgICAgICBbMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyMSwgMTQsIDE0LCAxNCwgMjMsIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgXSxcclxuICAgICAgICAgICAgWzI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDIxLCAxNCwgMjMsIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIF0sXHJcbiAgICAgICAgICAgIFsyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjIsIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCBdLFxyXG4gICAgICAgICAgICBbMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgXSxcclxuICAgICAgICAgICAgWzI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIF0sXHJcbiAgICAgICAgICAgIFsyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAgXSxcclxuICAgICAgICAgICAgWzI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMzAsIDMwLCAzMCwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksICBdLFxyXG4gICAgICAgICAgICBbMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMzAsIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgIF0sXHJcbiAgICAgICAgICAgIFsyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAgXSxcclxuICAgICAgICAgICAgWzI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksICBdLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy5tYWtlLnRpbGVtYXAoeyBkYXRhOiBsZXZlbCwgdGlsZVdpZHRoOiAzMiwgdGlsZUhlaWdodDogMzIgfSlcclxuICAgICAgICBjb25zdCB0aWxlcyA9IG1hcC5hZGRUaWxlc2V0SW1hZ2UoJ2Rlc2VydC10aWxlcycpO1xyXG4gICAgICAgIHRoaXMubGF5ZXIgPSBtYXAuY3JlYXRlU3RhdGljTGF5ZXIoMCwgdGlsZXMsIDAsIDApO1xyXG4gICAgICAgIG1hcC5zZXRUaWxlSW5kZXhDYWxsYmFjayhbMTRdLCB0aGlzLmFwcGx5U2xvd0VmZmVjdCwgdGhpcyk7XHJcbiAgICAgICAgbWFwLnNldFRpbGVJbmRleENhbGxiYWNrKFszMF0sIHRoaXMuYXBwbHlMaWdudG5pbmdDaGFpbkVmZmVjdCwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMudG93ZXJzID0gdGhpcy5hZGQuZ3JvdXAoe1xyXG4gICAgICAgICAgICBjbGFzc1R5cGU6IFRvd2VyLFxyXG4gICAgICAgICAgICBydW5DaGlsZFVwZGF0ZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJhZGRpZXMgPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3Bhd25lcnMucHVzaChuZXcgQmFkZGllU3Bhd25lcih0aGlzLCB0aGlzLmJhZGRpZXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR1cFRvd2VyVHlwZUNoYW5nZUV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJ1cCcsIHRoaXMudG93ZXJBZGQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUodGltZSwgZGVsdGEpIHtcclxuICAgICAgICB0aGlzLnBoeXNpY3MuY29sbGlkZSh0aGlzLmJhZGRpZXMsIHRoaXMubGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuc3Bhd25lcnMuZm9yRWFjaChzID0+IHMudXBkYXRlKHRpbWUsIGRlbHRhKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXR1cFRvd2VyVHlwZUNoYW5nZUV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLmlucHV0LmtleWJvYXJkLm9uKCdrZXlkb3duLU9ORScsICgpID0+IHRoaXMuc2V0VG93ZXJUeXBlKDEpLCB0aGlzKVxyXG4gICAgICAgIHRoaXMuaW5wdXQua2V5Ym9hcmQub24oJ2tleWRvd24tVFdPJywgKCkgPT4gdGhpcy5zZXRUb3dlclR5cGUoMiksIHRoaXMpXHJcbiAgICAgICAgdGhpcy5pbnB1dC5rZXlib2FyZC5vbigna2V5ZG93bi1USFJFRScsICgpID0+IHRoaXMuc2V0VG93ZXJUeXBlKDMpLCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VG93ZXJUeXBlKHRvd2VyVHlwZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy50b3dlclR5cGVJbmRleCA9IHRvd2VyVHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvd2VyQWRkKHBvaW50ZXI6IGFueSkge1xyXG4gICAgICAgIHRoaXMudG93ZXJzLmFkZChuZXcgVG93ZXIodGhpcywgcG9pbnRlci54LCBwb2ludGVyLnksIHRoaXMudG93ZXJUeXBlSW5kZXgsIHRoaXMuYmFkZGllcyksIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXBwbHlTbG93RWZmZWN0KGJhZGRpZSwgdGlsZSkge1xyXG4gICAgICAgIGJhZGRpZS5hcHBseUVmZmVjdChuZXcgU2xvd0VmZmVjdChiYWRkaWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFwcGx5TGlnbnRuaW5nQ2hhaW5FZmZlY3QoYmFkZGllLCB0aWxlKSB7XHJcbiAgICAgICAgYmFkZGllLmFwcGx5RWZmZWN0KG5ldyBMaWdudG5pbmdDaGFpbkVmZmVjdChiYWRkaWUsIHRoaXMuYmFkZGllcywgNikpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdhbWVTY2VuZSB9IGZyb20gJy4vZ2FtZS1zY2VuZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAgICBHYW1lU2NlbmUsXHJcbl07Il0sInNvdXJjZVJvb3QiOiIifQ==