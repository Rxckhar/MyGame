class Game {
    constructor() {
        this.map = null; 
        this.bots = [];
        this.buffs = [];
        this.counter = 0;
    }

    plusCounter() {
        this.counter = this.counter + 1;
        return this.counter += 1;
    }

    initMap() {
        let map = {
            x: 0,
            y: 0,
            width: window.innerWidth,
            height: window.innerHeight,
            color: '#2196f3',
            border: '#f1f1f1'
        }

        this.map = map;
    }

    getMap() {
        return this.map;
    }

    pushBot() {
        let bot = {
            id: 1,
            x: 0,
            y: 0,
            width: 56,
            height: 56,
            trnstn: .25,
            step: 56,
            color: 'blue'
        }
        
        this.bots.push(bot);
    }

    getBots() {
        return this.bots;
    }

    pushBuff() {
        let buff = {
            id: 1,
            x: 200,
            y: 200,
            width: 56,
            height: 56,
            trnstn: .25,
            color: '#39e039'
        }
        
        this.buffs.push(buff);
    }

    getBuffs() {
        return this.buffs;
    }
}