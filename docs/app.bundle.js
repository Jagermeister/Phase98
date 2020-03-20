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
    function Effect(tower, baddie) {
        this.elapsed = 0;
        this.movementMultiplier = 1.0;
        this.tower = tower;
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
                baddie.applyEffect(new slow_effect_1.SlowEffect(_this, baddie));
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
    };
    GameScene.prototype.create = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0eS9iYWRkaWUvYmFkZGllLXNwYXduZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0eS9iYWRkaWUvYmFkZGllLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdHkvYnVsbGV0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdHkvZWZmZWN0L2VmZmVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5L2VmZmVjdC9zbG93LWVmZmVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5L3Rvd2VyL3Rvd2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9nYW1lLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFD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QUFBRCxDQUFDLENBckQ4QixNQUFNLENBQUMsS0FBSyxHQXFEMUM7QUFyRFksOEJBQVM7Ozs7Ozs7Ozs7Ozs7OztBQ1R0Qix3RkFBeUM7QUFFekMsa0JBQWU7SUFDWCxzQkFBUztDQUNaLENBQUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IHsgQmFkZGllIH0gZnJvbSAnLi4vYmFkZGllL2JhZGRpZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFkZGllU3Bhd25lciB7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzcGF3bkRlbGF5TVMgPSAxMDA7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVudGl0eU1heENvdW50ID0gMTUwO1xyXG5cclxuICAgIHByaXZhdGUgYmFkZGllczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRHcm91cDogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG5cclxuICAgIHByaXZhdGUgZWxhcHNlZFNwYXduVGltZU1TID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHhTcGF3bk9mZnNldCA9IDUwO1xyXG4gICAgcHJpdmF0ZSB4U3Bhd25PZmZzZXRDdXJyZW50ID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgcGFyZW50R3JvdXA6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cCkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgICAgICB0aGlzLmJhZGRpZXMgPSB0aGlzLnNjZW5lLmFkZC5ncm91cCh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdiYWRkaWVzJyxcclxuICAgICAgICAgICAgY2xhc3NUeXBlOiBCYWRkaWUsXHJcbiAgICAgICAgICAgIG1heFNpemU6IHRoaXMuZW50aXR5TWF4Q291bnQsXHJcbiAgICAgICAgICAgIHJ1bkNoaWxkVXBkYXRlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRHcm91cCA9IHBhcmVudEdyb3VwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lLCBkZWx0YSkge1xyXG4gICAgICAgIHRoaXMuZWxhcHNlZFNwYXduVGltZU1TICs9IGRlbHRhO1xyXG4gICAgICAgIGlmICh0aGlzLmVsYXBzZWRTcGF3blRpbWVNUyA+PSB0aGlzLnNwYXduRGVsYXlNUykge1xyXG4gICAgICAgICAgICB0aGlzLmVsYXBzZWRTcGF3blRpbWVNUyAtPSB0aGlzLnNwYXduRGVsYXlNUztcclxuICAgICAgICAgICAgdGhpcy54U3Bhd25PZmZzZXRDdXJyZW50ICs9IHRoaXMueFNwYXduT2Zmc2V0O1xyXG4gICAgICAgICAgICBpZiAodGhpcy54U3Bhd25PZmZzZXRDdXJyZW50ID4gd2luZG93LmlubmVyV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMueFNwYXduT2Zmc2V0Q3VycmVudCAtPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgYmFkZGllID0gdGhpcy5iYWRkaWVzLmdldCgpO1xyXG4gICAgICAgICAgICBpZiAoYmFkZGllKSB7XHJcbiAgICAgICAgICAgICAgICBiYWRkaWUuc3Bhd24odGhpcy54U3Bhd25PZmZzZXRDdXJyZW50LCAwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50R3JvdXAuYWRkKGJhZGRpZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59OyIsImltcG9ydCB7IElFbnRpdHlFZmZlY3QgfSBmcm9tIFwiLi4vZWZmZWN0L2VmZmVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhZGRpZSBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUge1xyXG5cclxuICAgIHByaXZhdGUgaW1hZ2U6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUgJiB7IGJvZHk6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Cb2R5IH07XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzcGVlZCA9IFBoYXNlci5NYXRoLkdldFNwZWVkKDEyNSwgMSk7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBoZWFsdGhNYXggPSAxMDA7XHJcbiAgICBwcml2YXRlIGhlYWx0aDogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgZWZmZWN0czogSUVudGl0eUVmZmVjdFtdO1xyXG4gICAgcHJpdmF0ZSBlZmZlY3ROb25TdGFja2luZzogUmVjb3JkPHN0cmluZywgSUVudGl0eUVmZmVjdD47XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCAwLCAwLCAnYmFkZGllJyk7XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSB0aGlzLmhlYWx0aE1heDtcclxuICAgICAgICB0aGlzLmVmZmVjdHMgPSBbXTtcclxuICAgICAgICB0aGlzLmVmZmVjdE5vblN0YWNraW5nID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd24oeCwgeSkge1xyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHgsIHkpO1xyXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgIHRoaXMuc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSwgZGVsdGEpIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwLCBsID0gdGhpcy5lZmZlY3RzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZWZmZWN0ID0gdGhpcy5lZmZlY3RzW2ldO1xyXG4gICAgICAgICAgICBlZmZlY3QudXBkYXRlKGRlbHRhKTtcclxuICAgICAgICAgICAgaWYoZWZmZWN0LmlzQ29tcGxldGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWZmZWN0cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgICAgICBsLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGVja0ZvckRlYXRoKCk7XHJcblxyXG4gICAgICAgIGxldCBtb3ZlbWVudE11bHRpcGxlciA9IHRoaXMuZWZmZWN0cy5yZWR1Y2UoKHAsIGMpID0+IHAgKiBjLm9uTW92ZW1lbnQoKSwgMS4wKTtcclxuXHJcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWQvNCAqIGRlbHRhICogbW92ZW1lbnRNdWx0aXBsZXI7XHJcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWQgKiBkZWx0YSAqIG1vdmVtZW50TXVsdGlwbGVyO1xyXG4gICAgICAgIGlmICh0aGlzLnggPiB3aW5kb3cuaW5uZXJXaWR0aCB8fCB0aGlzLnkgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0YWtlRGFtYWdlKGRhbWFnZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggLT0gZGFtYWdlO1xyXG4gICAgICAgIHRoaXMuY2hlY2tGb3JEZWF0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tGb3JEZWF0aCgpIHtcclxuICAgICAgICBpZiAodGhpcy5oZWFsdGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5RWZmZWN0KGVmZmVjdDogSUVudGl0eUVmZmVjdCkge1xyXG4gICAgICAgIC8vIFRPRE8gMjAyMDAzMTkgU2hvdWxkIGJlIG1vdmVkIHRvIGEgbWFuYWdlclxyXG4gICAgICAgIC8vIHdoaWNoIGtub3dzIGhvdyB0byBhZGQvcmVtb3ZlIGVmZmVjdHMuXHJcbiAgICAgICAgaWYgKCFlZmZlY3QuaXNTdGFja2FibGUgJiYgZWZmZWN0Lm5hbWUgaW4gdGhpcy5lZmZlY3ROb25TdGFja2luZykge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5lZmZlY3ROb25TdGFja2luZ1tlZmZlY3QubmFtZV07XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSB0aGlzLmVmZmVjdHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZSA9IHRoaXMuZWZmZWN0c1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChlLm5hbWUgPT0gZWZmZWN0Lm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVmZmVjdHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgICAgICAgICBsLS07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZWZmZWN0cy5wdXNoKGVmZmVjdCk7XHJcbiAgICAgICAgaWYgKCFlZmZlY3QuaXNTdGFja2FibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5lZmZlY3ROb25TdGFja2luZ1tlZmZlY3QubmFtZV0gPSBlZmZlY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59OyIsImV4cG9ydCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlIHtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNwZWVkID0gUGhhc2VyLk1hdGguR2V0U3BlZWQoNTAwLCAxKTtcclxuXHJcbiAgICBwcml2YXRlIGFuZ3VsYXJEaXJlY3Rpb246IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIDAsIDAsICdidWxsZXQnKTtcclxuICAgIH1cclxuXHJcbiAgICBmaXJlKHgsIHksIHJhZCkge1xyXG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24oeCwgeSk7XHJcbiAgICAgICAgdGhpcy5hbmd1bGFyRGlyZWN0aW9uID0gcmFkO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lLCBkZWx0YSkge1xyXG4gICAgICAgIHRoaXMueCArPSBNYXRoLmNvcyh0aGlzLmFuZ3VsYXJEaXJlY3Rpb24pICogdGhpcy5zcGVlZCAqIGRlbHRhO1xyXG4gICAgICAgIHRoaXMueSArPSBNYXRoLnNpbih0aGlzLmFuZ3VsYXJEaXJlY3Rpb24pICogdGhpcy5zcGVlZCAqIGRlbHRhO1xyXG4gICAgICAgIGlmICh0aGlzLnggPiB3aW5kb3cuaW5uZXJXaWR0aCB8fCB0aGlzLnggPCAwXHJcbiAgICAgICAgICAgICAgICB8fCB0aGlzLnkgPiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgdGhpcy55IDwgMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTsiLCJpbXBvcnQgeyBCYWRkaWUgfSBmcm9tIFwiLi4vYmFkZGllL2JhZGRpZVwiO1xyXG5pbXBvcnQgeyBUb3dlciB9IGZyb20gXCIuLi90b3dlci90b3dlclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRW50aXR5RWZmZWN0IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGlzU3RhY2thYmxlOiBib29sZWFuXHJcblxyXG4gICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpO1xyXG4gICAgaXNDb21wbGV0ZWQoKTogYm9vbGVhbjtcclxuXHJcbiAgICBvbk1vdmVtZW50KCk6IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFZmZlY3QgaW1wbGVtZW50cyBJRW50aXR5RWZmZWN0IHtcclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgdG93ZXI6IFRvd2VyO1xyXG4gICAgcHJpdmF0ZSBiYWRkaWU6IEJhZGRpZTtcclxuXHJcbiAgICBhYnN0cmFjdCByZWFkb25seSBpc1N0YWNrYWJsZTogYm9vbGVhbjtcclxuXHJcbiAgICBhYnN0cmFjdCByZWFkb25seSBkdXJhdGlvbjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBlbGFwc2VkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGFic3RyYWN0IHJlYWRvbmx5IG1vdmVtZW50TXVsdGlwbGllcjogbnVtYmVyID0gMS4wO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRvd2VyOiBUb3dlciwgYmFkZGllOiBCYWRkaWUpIHtcclxuICAgICAgICB0aGlzLnRvd2VyID0gdG93ZXI7XHJcbiAgICAgICAgdGhpcy5iYWRkaWUgPSBiYWRkaWU7XHJcbiAgICB9XHJcblxyXG4gICAgaXNDb21wbGV0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxhcHNlZCA+PSB0aGlzLmR1cmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5lbGFwc2VkICs9IGRlbHRhO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW92ZW1lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW92ZW1lbnRNdWx0aXBsaWVyO1xyXG4gICAgfTtcclxufSIsImltcG9ydCB7IEVmZmVjdCB9IGZyb20gXCIuL2VmZmVjdFwiO1xyXG5pbXBvcnQgeyBUb3dlciB9IGZyb20gXCIuLi90b3dlci90b3dlclwiO1xyXG5pbXBvcnQgeyBCYWRkaWUgfSBmcm9tIFwiLi4vYmFkZGllL2JhZGRpZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNsb3dFZmZlY3QgZXh0ZW5kcyBFZmZlY3Qge1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZyA9IFwiU0xPV1wiO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGlzU3RhY2thYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcmVhZG9ubHkgZHVyYXRpb24gPSAyMDAwO1xyXG4gICAgcmVhZG9ubHkgbW92ZW1lbnRNdWx0aXBsaWVyOiBudW1iZXIgPSAwLjU7XHJcbn0iLCJpbXBvcnQgeyBCdWxsZXQgfSBmcm9tIFwiLi4vYnVsbGV0XCI7XHJcbmltcG9ydCB7IEJhZGRpZSB9IGZyb20gXCIuLi9iYWRkaWUvYmFkZGllXCI7XHJcbmltcG9ydCB7IFNsb3dFZmZlY3QgfSBmcm9tIFwiLi4vZWZmZWN0L3Nsb3ctZWZmZWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVG93ZXIgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlIHtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZpbGxBbHBoYU1pbmltdW0gPSAwLjE7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZpbGxBbHBoYU1heGltdW0gPSAxLjA7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBidWlsZFRpbWVNUyA9IDEwMDA7XHJcbiAgICBwcml2YXRlIGVsYXBzZWRCdWlsZFRpbWVNUyA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBmaXJlRGVsYXlNUyA9IDEyMDtcclxuICAgIHByaXZhdGUgZWxhcHNlZEZpcmVUaW1lTVMgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmlyZURpc3RhbmNlID0gMTIwO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBkYW1hZ2UgPSA4MDtcclxuXHJcbiAgICBwdWJsaWMgc2NlbmU6IFBoYXNlci5TY2VuZTtcclxuICAgIHByaXZhdGUgYnVsbGV0czogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG4gICAgcHJpdmF0ZSBiYWRkaWVzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA7XHJcblxyXG4gICAgcHJpdmF0ZSB0eXBlSW5kZXg6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdHlwZUluZGV4OiBudW1iZXIsIGJhZGRpZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCB4LCB5LCAndG93ZXJzJyk7XHJcbiAgICAgICAgc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiAnYnVpbGRpbmcnLFxyXG4gICAgICAgICAgICBmcmFtZXM6IHNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcygndG93ZXJzJywgeyBzdGFydDogMCwgZW5kOiAwIH0pLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5idWlsZFRpbWVNU1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGtleTogJ2Jhc2ljJyxcclxuICAgICAgICAgICAgZnJhbWVzOiBzY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXMoJ3Rvd2VycycsIHsgc3RhcnQ6IDIsIGVuZDogMiB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNjZW5lLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGtleTogJ3VwZ3JhZGluZycsXHJcbiAgICAgICAgICAgIGZyYW1lczogc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKCd0b3dlcnMnLCB7IHN0YXJ0OiAxLCBlbmQ6IDEgfSksXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLmJ1aWxkVGltZU1TXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiAnYWR2YW5jZWQnLFxyXG4gICAgICAgICAgICBmcmFtZXM6IHNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcygndG93ZXJzJywgeyBzdGFydDogMywgZW5kOiAzIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiAnc2xvdycsXHJcbiAgICAgICAgICAgIGZyYW1lczogc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKCd0b3dlcnMnLCB7IHN0YXJ0OiA0LCBlbmQ6IDQgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy50eXBlSW5kZXggPSB0eXBlSW5kZXg7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG4gICAgICAgIHRoaXMuYmFkZGllcyA9IGJhZGRpZXM7XHJcbiAgICAgICAgdGhpcy5idWxsZXRzID0gc2NlbmUucGh5c2ljcy5hZGQuZ3JvdXAoe1xyXG4gICAgICAgICAgICBjbGFzc1R5cGU6IEJ1bGxldCxcclxuICAgICAgICAgICAgcnVuQ2hpbGRVcGRhdGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNjZW5lLnBoeXNpY3MuYWRkLm92ZXJsYXAodGhpcy5iYWRkaWVzLCB0aGlzLmJ1bGxldHMsIHRoaXMub25TaG90Q2FsbGJhY2soKSk7XHJcblxyXG4gICAgICAgIGxldCBjb21wbGV0ZWRBbmltYXRpb24gPSB0aGlzLnR5cGVJbmRleCA9PSAxID8gJ2Jhc2ljJ1xyXG4gICAgICAgICAgICA6ICh0aGlzLnR5cGVJbmRleCA9PSAyID8gJ2FkdmFuY2VkJyA6ICdzbG93Jyk7XHJcbiAgICAgICAgdGhpcy5hbmltcy5wbGF5KCdidWlsZGluZycsIHRydWUpLm9uKCdhbmltYXRpb25jb21wbGV0ZScsICgpID0+IHRoaXMuYW5pbXMucGxheShjb21wbGV0ZWRBbmltYXRpb24sIHRydWUpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSwgZGVsdGEpIHtcclxuICAgICAgICB0aGlzLmVsYXBzZWRCdWlsZFRpbWVNUyArPSBkZWx0YTtcclxuICAgICAgICB0aGlzLmVsYXBzZWRGaXJlVGltZU1TICs9IGRlbHRhO1xyXG5cclxuICAgICAgICAvLyBUT0RPIFsyMDIwMDMxOF0gSW50cm9kdWNlIHN0YXRlcyBzdWNoIGFzIFwiQnVpbGRpbmdcIixcclxuICAgICAgICAvLyBcIkRlZmVuZGluZ1wiLCBcIlNlbGxpbmdcIi5cclxuICAgICAgICBpZiAodGhpcy5pc0J1aWxkaW5nQ29tcGxldGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmRUYXJnZXRBbmRGaXJlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbGFwc2VkRmlyZVRpbWVNUyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNCdWlsZGluZ0NvbXBsZXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsYXBzZWRCdWlsZFRpbWVNUyA+PSB0aGlzLmJ1aWxkVGltZU1TO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNSZWFkeVRvRmlyZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGFwc2VkRmlyZVRpbWVNUyA+PSB0aGlzLmZpcmVEZWxheU1TO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmluZFRhcmdldEFuZEZpcmUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzUmVhZHlUb0ZpcmUoKSl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBiYWRkaWUgPSB0aGlzLmZpbmRCYWRkaWUoKTtcclxuICAgICAgICBpZiAoYmFkZGllKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvb3QoYmFkZGllKTtcclxuICAgICAgICAgICAgdGhpcy5lbGFwc2VkRmlyZVRpbWVNUyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmluZEJhZGRpZSgpOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlIHtcclxuICAgICAgICBsZXQgYmFkZGllcyA9IHRoaXMuYmFkZGllcy5nZXRDaGlsZHJlbigpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBiYWRkaWVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYmFkZGllID0gYmFkZGllc1tpXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gICAgICAgICAgICBpZiAoYmFkZGllLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gUGhhc2VyLk1hdGguRGlzdGFuY2UuQmV0d2VlblBvaW50cyh0aGlzLCBiYWRkaWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDw9IHRoaXMuZmlyZURpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJhZGRpZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob290KGJhZGRpZTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSkge1xyXG4gICAgICAgIGxldCBhbmdsZSA9IFBoYXNlci5NYXRoLkFuZ2xlLkJldHdlZW5Qb2ludHModGhpcywgYmFkZGllKTtcclxuICAgICAgICBsZXQgYnVsbGV0ID0gdGhpcy5idWxsZXRzLmdldCgpO1xyXG4gICAgICAgIGJ1bGxldC5maXJlKHRoaXMueCwgdGhpcy55LCBhbmdsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblNob3RDYWxsYmFjaygpIHtcclxuICAgICAgICByZXR1cm4gKGJhZGRpZTogQmFkZGllLCBidWxsZXQ6IEJ1bGxldCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50eXBlSW5kZXggPT0gMykge1xyXG4gICAgICAgICAgICAgICAgYmFkZGllLnRha2VEYW1hZ2UodGhpcy5kYW1hZ2UgLyA0KTtcclxuICAgICAgICAgICAgICAgIGJhZGRpZS5hcHBseUVmZmVjdChuZXcgU2xvd0VmZmVjdCh0aGlzLCBiYWRkaWUpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJhZGRpZS50YWtlRGFtYWdlKHRoaXMuZGFtYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidWxsZXQuZGVzdHJveSgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5pbXBvcnQgU2NlbmVzIGZyb20gJy4vc2NlbmUnO1xyXG5cclxuY29uc3QgZ2FtZUNvbmZpZzogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcclxuICAgIHRpdGxlOiAnUGhhc2UgOTgnLFxyXG5cclxuICAgIHR5cGU6IFBoYXNlci5BVVRPLFxyXG5cclxuICAgIHNjYWxlOiB7XHJcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgfSxcclxuXHJcbiAgICBwaHlzaWNzOiB7XHJcbiAgICAgICAgZGVmYXVsdDogJ2FyY2FkZScsXHJcbiAgICAgICAgYXJjYWRlOiB7XHJcbiAgICAgICAgICAgIGRlYnVnOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBzY2VuZTogU2NlbmVzLFxyXG5cclxuICAgIHBhcmVudDogJ2NvbnRlbnQnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTsiLCJpbXBvcnQgeyBCYWRkaWVTcGF3bmVyIH0gZnJvbSAnLi4vZW50aXR5L2JhZGRpZS9iYWRkaWUtc3Bhd25lcic7XHJcbmltcG9ydCB7IFRvd2VyIH0gZnJvbSAnLi4vZW50aXR5L3Rvd2VyL3Rvd2VyJztcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiAnUGhhc2U5OCcsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHJcbiAgICAvLyBUT0RPIFsyMDIwMDMxOF0gVGhlIGNvbmZpZ3VyYXRpb24gb2Ygc3Bhd25lcnNcclxuICAgIC8vIHdvdWxkIGxhdGVyIGJlbG9uZyB3aXRoIHRoZSBpZGVhIG9mIGEgc3BlY2lmaWNcclxuICAgIC8vIFwibGV2ZWxcIiBhbmQgbm90IGxpdmUgd2l0aGluIHRoZSByb290IEdhbWVTY2VuZS5cclxuICAgIHByaXZhdGUgc3Bhd25lcnM6IEJhZGRpZVNwYXduZXJbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBiYWRkaWVzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA7XHJcbiAgICBwcml2YXRlIHRvd2VyczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG5cclxuICAgIHByaXZhdGUgdG93ZXJUeXBlSW5kZXg6IG51bWJlciA9IDE7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmVsb2FkKCkge1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgndG93ZXInLCAnLi9hc3NldHMvdG93ZXIucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd0b3dlcnMnLCAnLi9hc3NldHMvdG93ZXJzLnBuZycsIHtmcmFtZVdpZHRoOiA2NCwgZnJhbWVIZWlnaHQ6IDY1fSk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdiYWRkaWUnLCAnLi9hc3NldHMvc3BhY2UtYmFkZGllLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnYnVsbGV0JywgJy4vYXNzZXRzL2VuZW15LWJ1bGxldC5wbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKCkge1xyXG4gICAgICAgIHRoaXMudG93ZXJzID0gdGhpcy5hZGQuZ3JvdXAoe1xyXG4gICAgICAgICAgICBjbGFzc1R5cGU6IFRvd2VyLFxyXG4gICAgICAgICAgICBydW5DaGlsZFVwZGF0ZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJhZGRpZXMgPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3Bhd25lcnMucHVzaChuZXcgQmFkZGllU3Bhd25lcih0aGlzLCB0aGlzLmJhZGRpZXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR1cFRvd2VyVHlwZUNoYW5nZUV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJ1cCcsIHRoaXMudG93ZXJBZGQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUodGltZSwgZGVsdGEpIHtcclxuICAgICAgICB0aGlzLnNwYXduZXJzLmZvckVhY2gocyA9PiBzLnVwZGF0ZSh0aW1lLCBkZWx0YSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0dXBUb3dlclR5cGVDaGFuZ2VFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5rZXlib2FyZC5vbigna2V5ZG93bi1PTkUnLCAoKSA9PiB0aGlzLnNldFRvd2VyVHlwZSgxKSwgdGhpcylcclxuICAgICAgICB0aGlzLmlucHV0LmtleWJvYXJkLm9uKCdrZXlkb3duLVRXTycsICgpID0+IHRoaXMuc2V0VG93ZXJUeXBlKDIpLCB0aGlzKVxyXG4gICAgICAgIHRoaXMuaW5wdXQua2V5Ym9hcmQub24oJ2tleWRvd24tVEhSRUUnLCAoKSA9PiB0aGlzLnNldFRvd2VyVHlwZSgzKSwgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFRvd2VyVHlwZSh0b3dlclR5cGU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMudG93ZXJUeXBlSW5kZXggPSB0b3dlclR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b3dlckFkZChwb2ludGVyOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnRvd2Vycy5hZGQobmV3IFRvd2VyKHRoaXMsIHBvaW50ZXIueCwgcG9pbnRlci55LCB0aGlzLnRvd2VyVHlwZUluZGV4LCB0aGlzLmJhZGRpZXMpLCB0cnVlKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tICcuL2dhbWUtc2NlbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgW1xyXG4gICAgR2FtZVNjZW5lLFxyXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=