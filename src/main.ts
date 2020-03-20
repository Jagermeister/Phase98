import * as Phaser from 'phaser';

import Scenes from './scene';

const gameConfig: Phaser.Types.Core.GameConfig = {
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

    scene: Scenes,

    parent: 'content',
    backgroundColor: '#ffffff',
};

export const game = new Phaser.Game(gameConfig);