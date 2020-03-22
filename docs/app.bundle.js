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
        this.baddies = this.scene.physics.add.group({
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
var baddie_1 = __webpack_require__(/*! ../baddie/baddie */ "./src/entity/baddie/baddie.ts");
var BaddieSpawner = /** @class */ (function (_super) {
    __extends(BaddieSpawner, _super);
    function BaddieSpawner(scene, parentGroup) {
        var _this = _super.call(this, scene.physics.world, scene) || this;
        _this.spawnDelayMS = 150;
        _this.entityMaxCount = 75;
        _this.startDelayMS = 1550;
        _this.startElapsed = 0;
        _this.elapsedSpawnTimeMS = 0;
        _this.xSpawnOffset = 40;
        _this.xSpawnOffsetCurrent = 0;
        _this.createMultiple({
            key: 'baddies',
            classType: baddie_1.Baddie,
            max: _this.entityMaxCount,
            active: false,
            visible: false,
        });
        _this.parentGroup = parentGroup;
        return _this;
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
                var baddie = this.get();
                if (baddie) {
                    baddie.spawn(this.xSpawnOffsetCurrent, 0);
                    this.parentGroup.add(baddie);
                }
            }
        }
        this.getChildren().forEach(function (b) { return b.update(time, delta); });
    };
    return BaddieSpawner;
}(Phaser.Physics.Arcade.Group));
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
        _this.resetAttributes();
        return _this;
    }
    Baddie.prototype.resetAttributes = function () {
        this.health = this.healthMax;
        this.effects = [];
        this.effectNonStacking = {};
        this.hasTakenDamage = false;
    };
    Baddie.prototype.spawn = function (x, y) {
        this.resetAttributes();
        this.body.reset(x, y);
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
        this.setX(this.x + this.speed / 4 * delta * movementMultipler);
        this.setY(this.y + this.speed * delta * movementMultipler);
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
}(Phaser.Physics.Arcade.Sprite));
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
        _this.speed = 500;
        _this.speedPerMS = Phaser.Math.GetSpeed(500, 1);
        _this.distanceMaximum = 125;
        _this.distance = 0;
        _this.resetAttributes();
        return _this;
    }
    Bullet.prototype.resetAttributes = function () {
        this.distance = 0;
    };
    Bullet.prototype.fire = function (from, to) {
        this.resetAttributes();
        this.body.reset(from.x, from.y);
        this.setActive(true);
        this.setVisible(true);
        this.scene.physics.moveTo(this, to.x, to.y, this.speed);
    };
    Bullet.prototype.preUpdate = function (time, delta) {
        _super.prototype.preUpdate.call(this, time, delta);
        this.distance += this.speedPerMS * delta;
        if (this.x > window.innerWidth || this.x < 0
            || this.y > window.innerHeight || this.y < 0
            || this.distance >= this.distanceMaximum) {
            this.setActive(false);
            this.setVisible(false);
        }
    };
    return Bullet;
}(Phaser.Physics.Arcade.Sprite));
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
var baddie_1 = __webpack_require__(/*! ../baddie/baddie */ "./src/entity/baddie/baddie.ts");
var slow_effect_1 = __webpack_require__(/*! ../effect/slow-effect */ "./src/entity/effect/slow-effect.ts");
var Tower = /** @class */ (function (_super) {
    __extends(Tower, _super);
    function Tower(scene, x, y, typeIndex, baddies) {
        var _this = _super.call(this, scene, x, y, 'towers') || this;
        _this.buildTimeMS = 1000;
        _this.elapsedBuildTimeMS = 0;
        _this.fireDelayMS = 120;
        _this.elapsedFireTimeMS = 0;
        _this.fireDistance = 100;
        _this.damage = 80;
        _this.debugGraphics = scene.debugGraphics;
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
            key: 'bullets',
            classType: bullet_1.Bullet,
            max: 100,
            active: false,
            visible: false,
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
        var point = this.findBaddie();
        if (point) {
            this.shoot(point);
            this.elapsedFireTimeMS = 0;
        }
    };
    Tower.prototype.findBaddie = function () {
        var baddies = this.scene.physics.overlapCirc(this.x, this.y, this.fireDistance);
        var distance = Infinity;
        var point = null;
        for (var i = 0, l = baddies.length; i < l; i++) {
            var baddie = baddies[i].gameObject;
            if (baddie instanceof baddie_1.Baddie && baddie.active) {
                var p = { x: baddie.x, y: baddie.y };
                var d = Phaser.Math.Distance.BetweenPoints(this, p);
                if (d <= distance) {
                    distance = d;
                    point = p;
                }
            }
        }
        return point;
    };
    Tower.prototype.shoot = function (point) {
        /*
        var graphics = this.debugGraphics;
        graphics.lineStyle(1, 0xffd900, 0.8);
        graphics.strokeCircle(this.x, this.y, this.fireDistance);

        graphics.beginPath();
        graphics.lineStyle(1, 0xdd00aa, 0.05);
        graphics.moveTo(this.x, this.y);
        graphics.lineTo(point.x, point.y);
        graphics.closePath();
        graphics.stroke();
        */
        var bullet = this.bullets.get();
        bullet.fire({ x: this.x, y: this.y }, point);
    };
    Tower.prototype.onShotCallback = function () {
        var _this = this;
        return function (baddie, bullet) {
            if (baddie.active) {
                if (_this.typeIndex == 3) {
                    baddie.takeDamage(_this.damage / 4);
                    baddie.applyEffect(new slow_effect_1.SlowEffect(baddie));
                }
                else {
                    baddie.takeDamage(_this.damage);
                }
                bullet.destroy();
            }
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
        this.debugGraphics = this.add.graphics({ x: 0, y: 0 });
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
        console.log(pointer.x, pointer.y);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0eS9iYWRkaWUvYmFkZGllLXBhdGgtc3Bhd25lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5L2JhZGRpZS9iYWRkaWUtc3Bhd25lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5L2JhZGRpZS9iYWRkaWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0eS9idWxsZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0eS9lZmZlY3QvZWZmZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdHkvZWZmZWN0L2xpZ2h0bmluZy1jaGFpbi1lZmZlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0eS9lZmZlY3Qvc2xvdy1lZmZlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudGl0eS90b3dlci90b3dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwL21hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvZ2FtZS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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RSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUc7WUFDbEosQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRztZQUMvSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFHO1lBQ2xKLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUc7WUFDbEosQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRztZQUM3SSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFHO1lBQ2xKLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUc7WUFDbEosQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRztZQUNsSixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFHO1lBQ2xKLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUc7WUFDbEosQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRztZQUNsSixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFJO1lBQ25KLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUk7WUFDbkosQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBSTtZQUNuSixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFJO1lBQ25KLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFB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QUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTtZQUN6RCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksYUFBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDbkc7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTyxtQ0FBZSxHQUF2QixVQUF3QixNQUFNLEVBQUUsSUFBSTtRQUNoQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksd0JBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTyw2Q0FBeUIsR0FBakMsVUFBa0MsTUFBTSxFQUFFLElBQUk7UUFDMUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLDZDQUFvQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxDQXRGOEIsTUFBTSxDQUFDLEtBQUssR0FzRjFDO0FBdEZZLDhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7QUNidEIsd0ZBQXlDO0FBRXpDLGtCQUFlO0lBQ1gsc0JBQVM7Q0FDWixDQUFDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCB7IEJhZGRpZSB9IGZyb20gJy4vYmFkZGllJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYWRkaWVQYXRoU3Bhd25lciB7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzcGF3bkRlbGF5TVMgPSA2MDA7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRyYXZlbFRpbWVNUyA9IDgwMDA7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVudGl0eU1heENvdW50ID0gODA7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHN0YXJ0RGVsYXlNUyA9IDE1NTA7XHJcblxyXG4gICAgcHJpdmF0ZSBiYWRkaWVzOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuR3JvdXA7XHJcbiAgICBwcml2YXRlIHBhcmVudEdyb3VwOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuR3JvdXA7XHJcblxyXG4gICAgcHJpdmF0ZSBzY2VuZTogUGhhc2VyLlNjZW5lO1xyXG5cclxuICAgIHByaXZhdGUgcGF0aDogUGhhc2VyLkN1cnZlcy5TcGxpbmU7XHJcbiAgICBwcml2YXRlIGdyYXBoaWNzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JhcGhpY3M7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgcGFyZW50R3JvdXA6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Hcm91cCkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgICAgICB0aGlzLmJhZGRpZXMgPSB0aGlzLnNjZW5lLnBoeXNpY3MuYWRkLmdyb3VwKHtcclxuICAgICAgICAgICAgbmFtZTogJ2JhZGRpZXMtcGF0aCcsXHJcbiAgICAgICAgICAgIGNsYXNzVHlwZTogQmFkZGllLFxyXG4gICAgICAgICAgICBtYXhTaXplOiB0aGlzLmVudGl0eU1heENvdW50LFxyXG4gICAgICAgICAgICBydW5DaGlsZFVwZGF0ZTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhcmVudEdyb3VwID0gcGFyZW50R3JvdXA7XHJcbiAgICAgICAgdGhpcy5jcmVhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVudGl0eU1heENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJhZGRpZSA9IHRoaXMuYmFkZGllcy5nZXQoKTtcclxuICAgICAgICAgICAgYmFkZGllLnNldERlcHRoKDEpO1xyXG4gICAgICAgICAgICBiYWRkaWUudCA9IDA7XHJcbiAgICAgICAgICAgIGJhZGRpZS5pID0gaTtcclxuICAgICAgICAgICAgYmFkZGllLnZlYyA9IG5ldyBQaGFzZXIuTWF0aC5WZWN0b3IyKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50R3JvdXAuYWRkKGJhZGRpZSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgdGhpcy5wYXRoID0gbmV3IFBoYXNlci5DdXJ2ZXMuU3BsaW5lKFtcclxuICAgICAgICAgICAgLTIwLCA1MDAsXHJcbiAgICAgICAgICAgIDI2MCwgNDUwLFxyXG4gICAgICAgICAgICAzMDAsIDE1MCxcclxuICAgICAgICAgICAgNTUwLCAxNDUsXHJcbiAgICAgICAgICAgIDc0NSwgMjU2LFxyXG4gICAgICAgICAgICAxMDQ1LCAyNTYsXHJcbiAgICAgICAgICAgIDExMDAsIDQ4MFxyXG4gICAgICAgIF0pO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgcG9pbnRzID0gdGhpcy5wYXRoLnBvaW50cztcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBwb2ludCA9IHBvaW50c1tpXTtcclxuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IHRoaXMuc2NlbmUuYWRkLmltYWdlKHBvaW50LngsIHBvaW50LnksICdkcmFnY2lyY2xlJykuc2V0SW50ZXJhY3RpdmUoKTtcclxuICAgICAgICAgICAgaGFuZGxlLnNldERhdGEoJ3ZlY3RvcicsIHBvaW50KTtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5pbnB1dC5zZXREcmFnZ2FibGUoaGFuZGxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUuaW5wdXQub24oJ2RyYWcnLCBmdW5jdGlvbiAocG9pbnRlciwgZ2FtZU9iamVjdCwgZHJhZ1gsIGRyYWdZKSB7XHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QueCA9IGRyYWdYO1xyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LnkgPSBkcmFnWTtcclxuICAgICAgICAgICAgZ2FtZU9iamVjdC5kYXRhLmdldCgndmVjdG9yJykuc2V0KGRyYWdYLCBkcmFnWSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLmJhZGRpZXMuZ2V0Q2hpbGRyZW4oKSxcclxuICAgICAgICAgICAgdDogMSxcclxuICAgICAgICAgICAgZWFzZTogJ0xpbmVhcicsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLnRyYXZlbFRpbWVNUyxcclxuICAgICAgICAgICAgZGVsYXk6IHQgPT4gdC5pICogdGhpcy5zcGF3bkRlbGF5TVMgKyB0aGlzLnN0YXJ0RGVsYXlNU1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IHRoaXMuc2NlbmUuYWRkLmdyYXBoaWNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUsIGRlbHRhKSB7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVN0eWxlKDEsIDB4ZmZmZmZmLCAwLjA1KTtcclxuICAgICAgICB0aGlzLnBhdGguZHJhdyh0aGlzLmdyYXBoaWNzLCA2NCk7XHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmJhZGRpZXMuZ2V0Q2hpbGRyZW4oKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcCA9IGNoaWxkcmVuW2ldIGFzIGFueTtcclxuICAgICAgICAgICAgdGhpcy5wYXRoLmdldFBvaW50KHAudCwgcC52ZWMpO1xyXG4gICAgICAgICAgICBwLnggPSBwLnZlYy54O1xyXG4gICAgICAgICAgICBwLnkgPSBwLnZlYy55O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn07IiwiaW1wb3J0IHsgQmFkZGllIH0gZnJvbSAnLi4vYmFkZGllL2JhZGRpZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFkZGllU3Bhd25lciBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Hcm91cCB7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzcGF3bkRlbGF5TVMgPSAxNTA7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVudGl0eU1heENvdW50ID0gNzU7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzdGFydERlbGF5TVMgPSAxNTUwO1xyXG4gICAgcHJpdmF0ZSBzdGFydEVsYXBzZWQgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgcGFyZW50R3JvdXA6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Hcm91cDtcclxuXHJcbiAgICBwcml2YXRlIGVsYXBzZWRTcGF3blRpbWVNUyA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSB4U3Bhd25PZmZzZXQgPSA0MDtcclxuICAgIHByaXZhdGUgeFNwYXduT2Zmc2V0Q3VycmVudCA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgcGFyZW50R3JvdXA6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Hcm91cCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLnBoeXNpY3Mud29ybGQsIHNjZW5lKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZU11bHRpcGxlKHtcclxuICAgICAgICAgICAga2V5OiAnYmFkZGllcycsXHJcbiAgICAgICAgICAgIGNsYXNzVHlwZTogQmFkZGllLFxyXG4gICAgICAgICAgICBtYXg6IHRoaXMuZW50aXR5TWF4Q291bnQsXHJcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50R3JvdXAgPSBwYXJlbnRHcm91cDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSwgZGVsdGEpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0RWxhcHNlZCArPSBkZWx0YTtcclxuICAgICAgICBpZiAodGhpcy5zdGFydEVsYXBzZWQgPj0gdGhpcy5zdGFydERlbGF5TVMpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGFwc2VkU3Bhd25UaW1lTVMgKz0gZGVsdGE7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVsYXBzZWRTcGF3blRpbWVNUyA+PSB0aGlzLnNwYXduRGVsYXlNUykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFwc2VkU3Bhd25UaW1lTVMgLT0gdGhpcy5zcGF3bkRlbGF5TVM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnhTcGF3bk9mZnNldEN1cnJlbnQgKz0gdGhpcy54U3Bhd25PZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy54U3Bhd25PZmZzZXRDdXJyZW50ID4gd2luZG93LmlubmVyV2lkdGgvMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueFNwYXduT2Zmc2V0Q3VycmVudCAtPSB3aW5kb3cuaW5uZXJXaWR0aC8yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGJhZGRpZSA9IHRoaXMuZ2V0KCkgYXMgQmFkZGllO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhZGRpZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhZGRpZS5zcGF3bih0aGlzLnhTcGF3bk9mZnNldEN1cnJlbnQsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50R3JvdXAuYWRkKGJhZGRpZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXRDaGlsZHJlbigpLmZvckVhY2goYiA9PiBiLnVwZGF0ZSh0aW1lLCBkZWx0YSkpO1xyXG4gICAgfVxyXG5cclxufTsiLCJpbXBvcnQgeyBJRW50aXR5RWZmZWN0IH0gZnJvbSBcIi4uL2VmZmVjdC9lZmZlY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYWRkaWUgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNwZWVkID0gUGhhc2VyLk1hdGguR2V0U3BlZWQoMTI1LCAxKTtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGhlYWx0aE1heCA9IDEwMDtcclxuICAgIHByaXZhdGUgaGVhbHRoOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBoYXNUYWtlbkRhbWFnZTogYm9vbGVhbjtcclxuXHJcbiAgICBwcml2YXRlIGVmZmVjdHM6IElFbnRpdHlFZmZlY3RbXTtcclxuICAgIHByaXZhdGUgZWZmZWN0Tm9uU3RhY2tpbmc6IFJlY29yZDxzdHJpbmcsIElFbnRpdHlFZmZlY3Q+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgMCwgMCwgJ2JhZGRpZScpO1xyXG4gICAgICAgIHRoaXMucmVzZXRBdHRyaWJ1dGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXNldEF0dHJpYnV0ZXMoKSB7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSB0aGlzLmhlYWx0aE1heDtcclxuICAgICAgICB0aGlzLmVmZmVjdHMgPSBbXTtcclxuICAgICAgICB0aGlzLmVmZmVjdE5vblN0YWNraW5nID0ge307XHJcbiAgICAgICAgdGhpcy5oYXNUYWtlbkRhbWFnZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYXduKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnJlc2V0QXR0cmlidXRlcygpO1xyXG4gICAgICAgIHRoaXMuYm9keS5yZXNldCh4LCB5KTtcclxuICAgICAgICB0aGlzLnNldEFjdGl2ZSh0cnVlKTtcclxuICAgICAgICB0aGlzLnNldFZpc2libGUodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUsIGRlbHRhKSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuZWZmZWN0cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGVmZmVjdCA9IHRoaXMuZWZmZWN0c1tpXTtcclxuICAgICAgICAgICAgZWZmZWN0LnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgICAgIGlmKGVmZmVjdC5pc0NvbXBsZXRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVmZmVjdHMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICAgICAgbC0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hlY2tGb3JEZWF0aCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5oYXNUYWtlbkRhbWFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFRpbnRGaWxsKDB4ZmYwMDAwKTtcclxuICAgICAgICAgICAgdGhpcy5oYXNUYWtlbkRhbWFnZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJUaW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbW92ZW1lbnRNdWx0aXBsZXIgPSB0aGlzLmVmZmVjdHMucmVkdWNlKChwLCBjKSA9PiBwICogYy5vbk1vdmVtZW50KCksIDEuMCk7XHJcbiAgICAgICAgdGhpcy5zZXRYKHRoaXMueCArIHRoaXMuc3BlZWQvNCAqIGRlbHRhICogbW92ZW1lbnRNdWx0aXBsZXIpO1xyXG4gICAgICAgIHRoaXMuc2V0WSh0aGlzLnkgKyB0aGlzLnNwZWVkICogZGVsdGEgKiBtb3ZlbWVudE11bHRpcGxlcik7XHJcbiAgICAgICAgaWYgKHRoaXMueCA+IHdpbmRvdy5pbm5lcldpZHRoIHx8IHRoaXMueSA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRha2VEYW1hZ2UoZGFtYWdlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmhlYWx0aCAtPSBkYW1hZ2U7XHJcbiAgICAgICAgdGhpcy5oYXNUYWtlbkRhbWFnZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jaGVja0ZvckRlYXRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0ZvckRlYXRoKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlFZmZlY3QoZWZmZWN0OiBJRW50aXR5RWZmZWN0KSB7XHJcbiAgICAgICAgLy8gVE9ETyAyMDIwMDMxOSBTaG91bGQgYmUgbW92ZWQgdG8gYSBtYW5hZ2VyXHJcbiAgICAgICAgLy8gd2hpY2gga25vd3MgaG93IHRvIGFkZC9yZW1vdmUgZWZmZWN0cy5cclxuICAgICAgICBpZiAoIWVmZmVjdC5pc1N0YWNrYWJsZSAmJiBlZmZlY3QubmFtZSBpbiB0aGlzLmVmZmVjdE5vblN0YWNraW5nKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmVmZmVjdE5vblN0YWNraW5nW2VmZmVjdC5uYW1lXTtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMCwgbCA9IHRoaXMuZWZmZWN0cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBlID0gdGhpcy5lZmZlY3RzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUubmFtZSA9PSBlZmZlY3QubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWZmZWN0cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGwtLTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lZmZlY3RzLnB1c2goZWZmZWN0KTtcclxuICAgICAgICBpZiAoIWVmZmVjdC5pc1N0YWNrYWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmVmZmVjdE5vblN0YWNraW5nW2VmZmVjdC5uYW1lXSA9IGVmZmVjdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07IiwiZXhwb3J0IGNsYXNzIEJ1bGxldCBleHRlbmRzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUge1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3BlZWQgPSA1MDA7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNwZWVkUGVyTVMgPSBQaGFzZXIuTWF0aC5HZXRTcGVlZCg1MDAsIDEpO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBkaXN0YW5jZU1heGltdW0gPSAxMjU7XHJcbiAgICBwcml2YXRlIGRpc3RhbmNlID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIDAsIDAsICdidWxsZXQnKTtcclxuICAgICAgICB0aGlzLnJlc2V0QXR0cmlidXRlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXRBdHRyaWJ1dGVzKCkge1xyXG4gICAgICAgIHRoaXMuZGlzdGFuY2UgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcmUoZnJvbSwgdG8pIHtcclxuICAgICAgICB0aGlzLnJlc2V0QXR0cmlidXRlcygpO1xyXG4gICAgICAgIHRoaXMuYm9keS5yZXNldChmcm9tLngsIGZyb20ueSk7XHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUucGh5c2ljcy5tb3ZlVG8oXHJcbiAgICAgICAgICAgIHRoaXMsIHRvLngsIHRvLnksIHRoaXMuc3BlZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByZVVwZGF0ZSh0aW1lLCBkZWx0YSkge1xyXG4gICAgICAgIHN1cGVyLnByZVVwZGF0ZSh0aW1lLCBkZWx0YSk7XHJcbiAgICAgICAgdGhpcy5kaXN0YW5jZSArPSB0aGlzLnNwZWVkUGVyTVMgKiBkZWx0YTtcclxuICAgICAgICBpZiAodGhpcy54ID4gd2luZG93LmlubmVyV2lkdGggfHwgdGhpcy54IDwgMFxyXG4gICAgICAgICAgICB8fCB0aGlzLnkgPiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgdGhpcy55IDwgMFxyXG4gICAgICAgICAgICB8fCB0aGlzLmRpc3RhbmNlID49IHRoaXMuZGlzdGFuY2VNYXhpbXVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTsiLCJpbXBvcnQgeyBCYWRkaWUgfSBmcm9tIFwiLi4vYmFkZGllL2JhZGRpZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRW50aXR5RWZmZWN0IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGlzU3RhY2thYmxlOiBib29sZWFuXHJcblxyXG4gICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpO1xyXG4gICAgaXNDb21wbGV0ZWQoKTogYm9vbGVhbjtcclxuXHJcbiAgICBvbk1vdmVtZW50KCk6IG51bWJlcjtcclxufTtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFZmZlY3QgaW1wbGVtZW50cyBJRW50aXR5RWZmZWN0IHtcclxuXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHByb3RlY3RlZCBiYWRkaWU6IEJhZGRpZTtcclxuXHJcbiAgICBhYnN0cmFjdCByZWFkb25seSBpc1N0YWNrYWJsZTogYm9vbGVhbjtcclxuXHJcbiAgICBhYnN0cmFjdCByZWFkb25seSBkdXJhdGlvbjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBlbGFwc2VkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHJlYWRvbmx5IG1vdmVtZW50TXVsdGlwbGllcjogbnVtYmVyID0gMS4wO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGJhZGRpZTogQmFkZGllKSB7XHJcbiAgICAgICAgdGhpcy5iYWRkaWUgPSBiYWRkaWU7XHJcbiAgICB9XHJcblxyXG4gICAgaXNDb21wbGV0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxhcHNlZCA+PSB0aGlzLmR1cmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5lbGFwc2VkICs9IGRlbHRhO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW92ZW1lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW92ZW1lbnRNdWx0aXBsaWVyO1xyXG4gICAgfTtcclxufSIsImltcG9ydCB7IEVmZmVjdCB9IGZyb20gXCIuL2VmZmVjdFwiO1xyXG5pbXBvcnQgeyBCYWRkaWUgfSBmcm9tIFwiLi4vYmFkZGllL2JhZGRpZVwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0cyB9IGZyb20gXCJwaGFzZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMaWdudG5pbmdDaGFpbkVmZmVjdCBleHRlbmRzIEVmZmVjdCB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nID0gXCJDSEFJTl9MSUdIVE5JTkdcIjtcclxuICAgIHB1YmxpYyByZWFkb25seSBpc1N0YWNrYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHJlYWRvbmx5IGR1cmF0aW9uID0gMzAwO1xyXG4gICAgcmVhZG9ubHkganVtcER1cmF0aW9uID0gMjUwO1xyXG5cclxuICAgIHByaXZhdGUganVtcER1cmF0aW9uRWxhcHNlZCA9IDA7XHJcbiAgICBwcml2YXRlIGp1bXBzTGVmdDogbnVtYmVyO1xyXG5cclxuICAgIHJlYWRvbmx5IGRhbWFnZSA9IDE7XHJcbiAgICBwcml2YXRlIF9pc0NvbXBsZXRlZCA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgYmFkZGllczogR2FtZU9iamVjdHMuR3JvdXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYmFkZGllOiBCYWRkaWUsIGJhZGRpZXM6IEdhbWVPYmplY3RzLkdyb3VwLCBqdW1wc0xlZnQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKGJhZGRpZSk7XHJcbiAgICAgICAgdGhpcy5iYWRkaWVzID0gYmFkZGllcztcclxuICAgICAgICB0aGlzLmp1bXBzTGVmdCA9IGp1bXBzTGVmdDtcclxuICAgICAgICB0aGlzLmJhZGRpZS50YWtlRGFtYWdlKHRoaXMuZGFtYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpIHtcclxuICAgICAgICBzdXBlci51cGRhdGUoZGVsdGEpO1xyXG4gICAgICAgIHRoaXMuanVtcER1cmF0aW9uRWxhcHNlZCArPSBkZWx0YTtcclxuICAgICAgICBpZiAodGhpcy5qdW1wRHVyYXRpb25FbGFwc2VkID4gdGhpcy5qdW1wRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5qdW1wRHVyYXRpb25FbGFwc2VkIC09IHRoaXMuanVtcER1cmF0aW9uO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5qdW1wc0xlZnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RCYWRkaWUgPSB0aGlzLmNsb3Nlc3QoKTtcclxuICAgICAgICAgICAgICAgIGlmIChjbG9zZXN0QmFkZGllKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdEJhZGRpZS5hcHBseUVmZmVjdChuZXcgTGlnbnRuaW5nQ2hhaW5FZmZlY3QoY2xvc2VzdEJhZGRpZSwgdGhpcy5iYWRkaWVzLCB0aGlzLmp1bXBzTGVmdCAtIDEpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0NvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQ29tcGxldGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xvc2VzdCgpOiBCYWRkaWUge1xyXG4gICAgICAgIC8vIFRPRE8gWzIwMjAwMzIwXSBNb3ZlIHN0b3JhZ2Ugb2YgYWxsIGVuZW1pZXMgaW50b1xyXG4gICAgICAgIC8vIGEgay1kIHRyZWUgdG8gYWxsb3cgZm9yIGZhc3Qgc3BhY2UtYmFzZWQgc2VhcmNoLlxyXG4gICAgICAgIGNvbnN0IHJhbmdlID0gNTA7XHJcbiAgICAgICAgY29uc3QgYmFkZGllcyA9IHRoaXMuYmFkZGllcy5nZXRDaGlsZHJlbigpO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlQmFkZGllcyA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBiYWRkaWVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBiYWRkaWUgPSBiYWRkaWVzW2ldO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5iYWRkaWUgIT09IGJhZGRpZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmFicyhQaGFzZXIuTWF0aC5EaXN0YW5jZS5CZXR3ZWVuUG9pbnRzKHRoaXMuYmFkZGllLCBiYWRkaWUgYXMgQmFkZGllKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCByYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQmFkZGllcy5wdXNoKGJhZGRpZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjbG9zZUJhZGRpZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNsb3NlQmFkZGllc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjbG9zZUJhZGRpZXMubGVuZ3RoKV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRWZmZWN0IH0gZnJvbSBcIi4vZWZmZWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2xvd0VmZmVjdCBleHRlbmRzIEVmZmVjdCB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nID0gXCJTTE9XXCI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaXNTdGFja2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICByZWFkb25seSBkdXJhdGlvbiA9IDIwMDA7XHJcbiAgICByZWFkb25seSBtb3ZlbWVudE11bHRpcGxpZXI6IG51bWJlciA9IDAuNTtcclxufSIsImltcG9ydCB7IEJ1bGxldCB9IGZyb20gXCIuLi9idWxsZXRcIjtcclxuaW1wb3J0IHsgQmFkZGllIH0gZnJvbSBcIi4uL2JhZGRpZS9iYWRkaWVcIjtcclxuaW1wb3J0IHsgU2xvd0VmZmVjdCB9IGZyb20gXCIuLi9lZmZlY3Qvc2xvdy1lZmZlY3RcIjtcclxuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSBcIi4uLy4uL3NjZW5lL2dhbWUtc2NlbmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUb3dlciBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUge1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYnVpbGRUaW1lTVMgPSAxMDAwO1xyXG4gICAgcHJpdmF0ZSBlbGFwc2VkQnVpbGRUaW1lTVMgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmlyZURlbGF5TVMgPSAxMjA7XHJcbiAgICBwcml2YXRlIGVsYXBzZWRGaXJlVGltZU1TID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZpcmVEaXN0YW5jZSA9IDEwMDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGFtYWdlID0gODA7XHJcblxyXG4gICAgcHVibGljIHNjZW5lOiBQaGFzZXIuU2NlbmU7XHJcbiAgICBwdWJsaWMgZGVidWdHcmFwaGljczogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzO1xyXG5cclxuICAgIHByaXZhdGUgYnVsbGV0czogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkdyb3VwO1xyXG4gICAgcHJpdmF0ZSBiYWRkaWVzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA7XHJcblxyXG4gICAgcHJpdmF0ZSB0eXBlSW5kZXg6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdHlwZUluZGV4OiBudW1iZXIsIGJhZGRpZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCB4LCB5LCAndG93ZXJzJyk7XHJcbiAgICAgICAgdGhpcy5kZWJ1Z0dyYXBoaWNzID0gKHNjZW5lIGFzIEdhbWVTY2VuZSkuZGVidWdHcmFwaGljcztcclxuICAgICAgICBzY2VuZS5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6ICdidWlsZGluZycsXHJcbiAgICAgICAgICAgIGZyYW1lczogc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKCd0b3dlcnMnLCB7IHN0YXJ0OiAwLCBlbmQ6IDAgfSksXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLmJ1aWxkVGltZU1TXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiAnYmFzaWMnLFxyXG4gICAgICAgICAgICBmcmFtZXM6IHNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOYW1lcygndG93ZXJzJywgeyBzdGFydDogMiwgZW5kOiAyIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2NlbmUuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiAndXBncmFkaW5nJyxcclxuICAgICAgICAgICAgZnJhbWVzOiBzY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXMoJ3Rvd2VycycsIHsgc3RhcnQ6IDEsIGVuZDogMSB9KSxcclxuICAgICAgICAgICAgZHVyYXRpb246IHRoaXMuYnVpbGRUaW1lTVNcclxuICAgICAgICB9KTtcclxuICAgICAgICBzY2VuZS5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6ICdhZHZhbmNlZCcsXHJcbiAgICAgICAgICAgIGZyYW1lczogc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU5hbWVzKCd0b3dlcnMnLCB7IHN0YXJ0OiAzLCBlbmQ6IDMgfSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBzY2VuZS5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6ICdzbG93JyxcclxuICAgICAgICAgICAgZnJhbWVzOiBzY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTmFtZXMoJ3Rvd2VycycsIHsgc3RhcnQ6IDQsIGVuZDogNCB9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnR5cGVJbmRleCA9IHR5cGVJbmRleDtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgdGhpcy5iYWRkaWVzID0gYmFkZGllcztcclxuICAgICAgICB0aGlzLmJ1bGxldHMgPSBzY2VuZS5waHlzaWNzLmFkZC5ncm91cCh7XHJcbiAgICAgICAgICAgIGtleTogJ2J1bGxldHMnLFxyXG4gICAgICAgICAgICBjbGFzc1R5cGU6IEJ1bGxldCxcclxuICAgICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2NlbmUucGh5c2ljcy5hZGQub3ZlcmxhcCh0aGlzLmJhZGRpZXMsIHRoaXMuYnVsbGV0cywgdGhpcy5vblNob3RDYWxsYmFjaygpKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbXBsZXRlZEFuaW1hdGlvbiA9IHRoaXMudHlwZUluZGV4ID09IDEgPyAnYmFzaWMnXHJcbiAgICAgICAgICAgIDogKHRoaXMudHlwZUluZGV4ID09IDIgPyAnYWR2YW5jZWQnIDogJ3Nsb3cnKTtcclxuICAgICAgICB0aGlzLmFuaW1zLnBsYXkoJ2J1aWxkaW5nJywgdHJ1ZSkub24oJ2FuaW1hdGlvbmNvbXBsZXRlJywgKCkgPT4gdGhpcy5hbmltcy5wbGF5KGNvbXBsZXRlZEFuaW1hdGlvbiwgdHJ1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lLCBkZWx0YSkge1xyXG4gICAgICAgIHRoaXMuZWxhcHNlZEJ1aWxkVGltZU1TICs9IGRlbHRhO1xyXG4gICAgICAgIHRoaXMuZWxhcHNlZEZpcmVUaW1lTVMgKz0gZGVsdGE7XHJcblxyXG4gICAgICAgIC8vIFRPRE8gWzIwMjAwMzE4XSBJbnRyb2R1Y2Ugc3RhdGVzIHN1Y2ggYXMgXCJCdWlsZGluZ1wiLFxyXG4gICAgICAgIC8vIFwiRGVmZW5kaW5nXCIsIFwiU2VsbGluZ1wiLlxyXG4gICAgICAgIGlmICh0aGlzLmlzQnVpbGRpbmdDb21wbGV0ZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluZFRhcmdldEFuZEZpcmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsYXBzZWRGaXJlVGltZU1TID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc0J1aWxkaW5nQ29tcGxldGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxhcHNlZEJ1aWxkVGltZU1TID49IHRoaXMuYnVpbGRUaW1lTVM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc1JlYWR5VG9GaXJlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsYXBzZWRGaXJlVGltZU1TID49IHRoaXMuZmlyZURlbGF5TVM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaW5kVGFyZ2V0QW5kRmlyZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNSZWFkeVRvRmlyZSgpKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBvaW50ID0gdGhpcy5maW5kQmFkZGllKCk7XHJcbiAgICAgICAgaWYgKHBvaW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvb3QocG9pbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmVsYXBzZWRGaXJlVGltZU1TID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaW5kQmFkZGllKCk6IFBoYXNlci5UeXBlcy5NYXRoLlZlY3RvcjJMaWtlIHtcclxuICAgICAgICBsZXQgYmFkZGllcyA9IHRoaXMuc2NlbmUucGh5c2ljcy5vdmVybGFwQ2lyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5maXJlRGlzdGFuY2UpO1xyXG4gICAgICAgIGxldCBkaXN0YW5jZSA9IEluZmluaXR5O1xyXG4gICAgICAgIGxldCBwb2ludCA9IG51bGw7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBiYWRkaWVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYmFkZGllID0gYmFkZGllc1tpXS5nYW1lT2JqZWN0IGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgICAgICAgICAgIGlmIChiYWRkaWUgaW5zdGFuY2VvZiBCYWRkaWUgJiYgYmFkZGllLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IHsgeDogYmFkZGllLngsIHk6IGJhZGRpZS55IH07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkID0gUGhhc2VyLk1hdGguRGlzdGFuY2UuQmV0d2VlblBvaW50cyh0aGlzLCBwKTtcclxuICAgICAgICAgICAgICAgIGlmIChkIDw9IGRpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBkO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ID0gcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBvaW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvb3QocG9pbnQ6IFBoYXNlci5UeXBlcy5NYXRoLlZlY3RvcjJMaWtlKSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICB2YXIgZ3JhcGhpY3MgPSB0aGlzLmRlYnVnR3JhcGhpY3M7XHJcbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKDEsIDB4ZmZkOTAwLCAwLjgpO1xyXG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZUNpcmNsZSh0aGlzLngsIHRoaXMueSwgdGhpcy5maXJlRGlzdGFuY2UpO1xyXG5cclxuICAgICAgICBncmFwaGljcy5iZWdpblBhdGgoKTtcclxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUoMSwgMHhkZDAwYWEsIDAuMDUpO1xyXG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyh0aGlzLngsIHRoaXMueSk7XHJcbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHBvaW50LngsIHBvaW50LnkpO1xyXG4gICAgICAgIGdyYXBoaWNzLmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgICAgICovXHJcblxyXG4gICAgICAgIGxldCBidWxsZXQgPSB0aGlzLmJ1bGxldHMuZ2V0KCk7XHJcbiAgICAgICAgYnVsbGV0LmZpcmUoeyB4OiB0aGlzLngsIHk6IHRoaXMueSB9LCBwb2ludCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblNob3RDYWxsYmFjaygpIHtcclxuICAgICAgICByZXR1cm4gKGJhZGRpZTogQmFkZGllLCBidWxsZXQ6IEJ1bGxldCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYmFkZGllLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHlwZUluZGV4ID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWRkaWUudGFrZURhbWFnZSh0aGlzLmRhbWFnZSAvIDQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhZGRpZS5hcHBseUVmZmVjdChuZXcgU2xvd0VmZmVjdChiYWRkaWUpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFkZGllLnRha2VEYW1hZ2UodGhpcy5kYW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnVsbGV0LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5pbXBvcnQgU2NlbmVzIGZyb20gJy4vc2NlbmUnO1xyXG5cclxuY29uc3QgZ2FtZUNvbmZpZzogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcclxuICAgIHRpdGxlOiAnUGhhc2UgOTgnLFxyXG5cclxuICAgIHR5cGU6IFBoYXNlci5BVVRPLFxyXG5cclxuICAgIHNjYWxlOiB7XHJcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgfSxcclxuXHJcbiAgICBwaHlzaWNzOiB7XHJcbiAgICAgICAgZGVmYXVsdDogJ2FyY2FkZScsXHJcbiAgICAgICAgYXJjYWRlOiB7XHJcbiAgICAgICAgICAgIGRlYnVnOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBzY2VuZTogU2NlbmVzLFxyXG5cclxuICAgIHBhcmVudDogJ2NvbnRlbnQnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTsiLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gXCJwaGFzZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXAge1xyXG5cclxuICAgIHB1YmxpYyBsYXllcjogUGhhc2VyLlRpbGVtYXBzLlN0YXRpY1RpbGVtYXBMYXllcjtcclxuICAgIHByaXZhdGUgbWFwOiBQaGFzZXIuVGlsZW1hcHMuVGlsZW1hcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogU2NlbmUpIHtcclxuICAgICAgICB0aGlzLm1hcCA9IHNjZW5lLm1ha2UudGlsZW1hcCh7XHJcbiAgICAgICAgICAgIGRhdGE6IHRoaXMubGV2ZWxEYXRhLFxyXG4gICAgICAgICAgICB0aWxlV2lkdGg6IHRoaXMudGlsZVdpZHRoLFxyXG4gICAgICAgICAgICB0aWxlSGVpZ2h0OiB0aGlzLnRpbGVIZWlnaHRcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB0aWxlc2V0ID0gdGhpcy5tYXAuYWRkVGlsZXNldEltYWdlKCdkZXNlcnQtdGlsZXMnKTtcclxuICAgICAgICB0aGlzLmxheWVyID0gdGhpcy5tYXAuY3JlYXRlU3RhdGljTGF5ZXIoMCwgdGlsZXNldCwgMCwgMCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMubGV2ZWxEYXRhLmxlbmd0aDtcclxuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMubGV2ZWxEYXRhWzBdLmxlbmd0aDtcclxuICAgICAgICB2YXIgYmxvY2tzID0gc2NlbmUuYWRkLmdyb3VwKHVuZGVmaW5lZCwgeyBrZXk6ICdibG9jaycsIHJlcGVhdDogaGVpZ2h0ICogd2lkdGggLTEgfSk7XHJcbiAgICAgICAgUGhhc2VyLkFjdGlvbnMuR3JpZEFsaWduKGJsb2Nrcy5nZXRDaGlsZHJlbigpLCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmxldmVsRGF0YVswXS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGNlbGxXaWR0aDogdGhpcy50aWxlV2lkdGgsXHJcbiAgICAgICAgICAgIGNlbGxIZWlnaHQ6IHRoaXMudGlsZUhlaWdodCAtIDEsXHJcbiAgICAgICAgICAgIHg6IDE2LFxyXG4gICAgICAgICAgICB5OiAxNlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgYmxvY2tzLmNoaWxkcmVuLml0ZXJhdGUoKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgIHNjZW5lLnR3ZWVucy5hZGQoe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogY2hpbGQsXHJcbiAgICAgICAgICAgICAgICBzY2FsZVg6IDAsXHJcbiAgICAgICAgICAgICAgICBzY2FsZVk6IDAsXHJcbiAgICAgICAgICAgICAgICBhbHBoYTogMCxcclxuICAgICAgICAgICAgICAgIHk6ICcrPTY0JyxcclxuICAgICAgICAgICAgICAgIGFuZ2xlOiAxODAsXHJcbiAgICAgICAgICAgICAgICBlYXNlOiAnUG93ZXIzJyxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA4MDAsIC8vIDE1MDAsXHJcbiAgICAgICAgICAgICAgICBkZWxheTogMTAwICsgaSozMC8vIE1hdGgucmFuZG9tKCkgKiAxNDAwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpICsrO1xyXG4gICAgICAgICAgICBpZiAoaSAlIHdpZHRoID09IDApIHtcclxuICAgICAgICAgICAgICAgIGkgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGlsZUluZGV4Q2FsbGJhY2soaW5kZXhlczogbnVtYmVyIHwgYW55W10sIGNhbGxiYWNrOiBGdW5jdGlvbiwgY2FsbGJhY2tDb250ZXh0OiBvYmplY3QsIGxheWVyPzogc3RyaW5nIHwgbnVtYmVyIHwgUGhhc2VyLlRpbGVtYXBzLlN0YXRpY1RpbGVtYXBMYXllciB8IFBoYXNlci5UaWxlbWFwcy5EeW5hbWljVGlsZW1hcExheWVyKSB7XHJcbiAgICAgICAgdGhpcy5tYXAuc2V0VGlsZUluZGV4Q2FsbGJhY2soaW5kZXhlcywgY2FsbGJhY2ssIGNhbGxiYWNrQ29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0aWxlV2lkdGggPSAzMjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGlsZUhlaWdodCA9IDMyO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGV2ZWxEYXRhID0gW1xyXG4gICAgICAgIFsyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCBdLFxyXG4gICAgICAgIFsyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDUsIDYsIDcsIDI5LCBdLFxyXG4gICAgICAgIFsyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDEzLCAxNCwgMTUsIDI5LCBdLFxyXG4gICAgICAgIFsyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDIxLCAyMiwgMjMsIDI5LCBdLFxyXG4gICAgICAgIFsyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDUsIDYsIDYsIDYsIDcsIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgXSxcclxuICAgICAgICBbMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAxMywgMTQsIDE0LCAxNCwgMTUsIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgXSxcclxuICAgICAgICBbMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyMSwgMTQsIDE0LCAxNCwgMjMsIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgXSxcclxuICAgICAgICBbMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjEsIDE0LCAyMywgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgXSxcclxuICAgICAgICBbMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDIyLCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgXSxcclxuICAgICAgICBbMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgXSxcclxuICAgICAgICBbMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgXSxcclxuICAgICAgICBbMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgIF0sXHJcbiAgICAgICAgWzI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMzAsIDMwLCAzMCwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksICBdLFxyXG4gICAgICAgIFsyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAzMCwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAgXSxcclxuICAgICAgICBbMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgIF0sXHJcbiAgICAgICAgWzI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksIDI5LCAyOSwgMjksICBdLFxyXG4gICAgXTtcclxufSIsImltcG9ydCB7IEJhZGRpZVNwYXduZXIgfSBmcm9tICcuLi9lbnRpdHkvYmFkZGllL2JhZGRpZS1zcGF3bmVyJztcclxuaW1wb3J0IHsgVG93ZXIgfSBmcm9tICcuLi9lbnRpdHkvdG93ZXIvdG93ZXInO1xyXG5pbXBvcnQgeyBTbG93RWZmZWN0IH0gZnJvbSAnLi4vZW50aXR5L2VmZmVjdC9zbG93LWVmZmVjdCc7XHJcbmltcG9ydCB7IExpZ250bmluZ0NoYWluRWZmZWN0IH0gZnJvbSAnLi4vZW50aXR5L2VmZmVjdC9saWdodG5pbmctY2hhaW4tZWZmZWN0JztcclxuaW1wb3J0IHsgTWFwIGFzIE1hcCB9IGZyb20gJy4uL21hcC9tYXAnO1xyXG5pbXBvcnQgeyBCYWRkaWVQYXRoU3Bhd25lciB9IGZyb20gJy4uL2VudGl0eS9iYWRkaWUvYmFkZGllLXBhdGgtc3Bhd25lcic7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIGtleTogJ1BoYXNlOTgnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblxyXG4gICAgLy8gVE9ETyBbMjAyMDAzMThdIFRoZSBjb25maWd1cmF0aW9uIG9mIHNwYXduZXJzXHJcbiAgICAvLyB3b3VsZCBsYXRlciBiZWxvbmcgd2l0aCB0aGUgaWRlYSBvZiBhIHNwZWNpZmljXHJcbiAgICAvLyBcImxldmVsXCIgYW5kIG5vdCBsaXZlIHdpdGhpbiB0aGUgcm9vdCBHYW1lU2NlbmUuXHJcbiAgICBwcml2YXRlIHNwYXduZXJzOiBhbnlbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBiYWRkaWVzOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuR3JvdXA7XHJcbiAgICBwcml2YXRlIHRvd2VyczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwO1xyXG5cclxuICAgIHByaXZhdGUgaXNQb2ludGVyTWlkZGxlRG93bjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgbWFwOiBNYXA7XHJcblxyXG4gICAgcHJpdmF0ZSB0b3dlclR5cGVJbmRleDogbnVtYmVyID0gMTtcclxuXHJcbiAgICBwdWJsaWMgZGVidWdHcmFwaGljczogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJlbG9hZCgpIHtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3Rvd2VyJywgJy4vYXNzZXRzL3Rvd2VyLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgndG93ZXJzJywgJy4vYXNzZXRzL3Rvd2Vycy5wbmcnLCB7ZnJhbWVXaWR0aDogNjQsIGZyYW1lSGVpZ2h0OiA2NX0pO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnYmFkZGllJywgJy4vYXNzZXRzL3NwYWNlLWJhZGRpZS5wbmcnKTtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2J1bGxldCcsICcuL2Fzc2V0cy9lbmVteS1idWxsZXQucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdkZXNlcnQtdGlsZXMnLCAnLi9hc3NldHMvdG13X2Rlc2VydF9zcGFjaW5nLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnZHJhZ2NpcmNsZScsICcuL2Fzc2V0cy9kZXNlcnRfYnV0dG9uLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnYmxvY2snLCAnYXNzZXRzL2Rlc2VydF9zYW5kLnBuZycpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgTWFwKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubWFwLnNldFRpbGVJbmRleENhbGxiYWNrKFsxNF0sIHRoaXMuYXBwbHlTbG93RWZmZWN0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm1hcC5zZXRUaWxlSW5kZXhDYWxsYmFjayhbMzBdLCB0aGlzLmFwcGx5TGlnbnRuaW5nQ2hhaW5FZmZlY3QsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnRvd2VycyA9IHRoaXMuYWRkLmdyb3VwKHtcclxuICAgICAgICAgICAgY2xhc3NUeXBlOiBUb3dlcixcclxuICAgICAgICAgICAgcnVuQ2hpbGRVcGRhdGU6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5iYWRkaWVzID0gdGhpcy5waHlzaWNzLmFkZC5ncm91cCgpO1xyXG4gICAgICAgIHRoaXMuc3Bhd25lcnMucHVzaChuZXcgQmFkZGllU3Bhd25lcih0aGlzLCB0aGlzLmJhZGRpZXMpKTtcclxuICAgICAgICB0aGlzLnNwYXduZXJzLnB1c2gobmV3IEJhZGRpZVBhdGhTcGF3bmVyKHRoaXMsIHRoaXMuYmFkZGllcykpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBUb3dlckV2ZW50cygpO1xyXG5cclxuICAgICAgICB0aGlzLmRlYnVnR3JhcGhpY3MgPSB0aGlzLmFkZC5ncmFwaGljcyh7IHg6IDAsIHk6IDB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKHRpbWUsIGRlbHRhKSB7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzLmNvbGxpZGUodGhpcy5iYWRkaWVzLCB0aGlzLm1hcC5sYXllcik7XHJcbiAgICAgICAgdGhpcy5zcGF3bmVycy5mb3JFYWNoKHMgPT4gcy51cGRhdGUodGltZSwgZGVsdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldHVwVG93ZXJFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5rZXlib2FyZC5vbigna2V5ZG93bi1PTkUnLCAoKSA9PiB0aGlzLnNldFRvd2VyVHlwZSgxKSwgdGhpcylcclxuICAgICAgICB0aGlzLmlucHV0LmtleWJvYXJkLm9uKCdrZXlkb3duLVRXTycsICgpID0+IHRoaXMuc2V0VG93ZXJUeXBlKDIpLCB0aGlzKVxyXG4gICAgICAgIHRoaXMuaW5wdXQua2V5Ym9hcmQub24oJ2tleWRvd24tVEhSRUUnLCAoKSA9PiB0aGlzLnNldFRvd2VyVHlwZSgzKSwgdGhpcylcclxuICAgICAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVyZG93bicsIHRoaXMucG9pbnRTdGF0ZVVwZGF0ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcnVwJywgdGhpcy50b3dlckFkZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRUb3dlclR5cGUodG93ZXJUeXBlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnRvd2VyVHlwZUluZGV4ID0gdG93ZXJUeXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcG9pbnRTdGF0ZVVwZGF0ZShwb2ludGVyOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmlzUG9pbnRlck1pZGRsZURvd24gPSBwb2ludGVyLm1pZGRsZUJ1dHRvbkRvd24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvd2VyQWRkKHBvaW50ZXI6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUG9pbnRlck1pZGRsZURvd24gJiYgIXBvaW50ZXIubWlkZGxlQnV0dG9uRG93bigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNQb2ludGVyTWlkZGxlRG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnRvd2Vycy5hZGQobmV3IFRvd2VyKHRoaXMsIHBvaW50ZXIueCwgcG9pbnRlci55LCB0aGlzLnRvd2VyVHlwZUluZGV4LCB0aGlzLmJhZGRpZXMpLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHBvaW50ZXIueCwgcG9pbnRlci55KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFwcGx5U2xvd0VmZmVjdChiYWRkaWUsIHRpbGUpIHtcclxuICAgICAgICBiYWRkaWUuYXBwbHlFZmZlY3QobmV3IFNsb3dFZmZlY3QoYmFkZGllKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhcHBseUxpZ250bmluZ0NoYWluRWZmZWN0KGJhZGRpZSwgdGlsZSkge1xyXG4gICAgICAgIGJhZGRpZS5hcHBseUVmZmVjdChuZXcgTGlnbnRuaW5nQ2hhaW5FZmZlY3QoYmFkZGllLCB0aGlzLmJhZGRpZXMsIDYpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tICcuL2dhbWUtc2NlbmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgW1xyXG4gICAgR2FtZVNjZW5lLFxyXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=