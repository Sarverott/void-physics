import VoidError from "./.error.root.js";
import SetupSeed from "./.setup.root.js";

class Void extends null{
    static _OMNIVERSE = null;

    static INVOKE_get(...args) {
        //console.log(this);
        //console.log(...args)
        return args;
    }
    static INVOKE_set(...args) {
        //console.log(this);
        //console.log(...args)
        return args;
    }
    // static INVOKE_deleteProperty(target, key) {
    //     if (!(key in target)) {
    //       return false;
    //     }
    //     return target.removeItem(key);
    // }
    static INVOKE_ownKeys(...args) {
        //console.log(this);
        //console.log(...args)
        return args;
    }
    static INVOKE_has(...args) {
        //console.log(this);
        //console.log(...args)
        return args;
    }
    // static INVOKE_defineProperty(target, key, descriptor) {
    //     if (descriptor && "value" in descriptor) {
    //       target.setItem(key, descriptor.value);
    //     }
    //     return target;
    // },
    // static INVOKE_getOwnPropertyDescriptor(target, key) {
    //     const value = target.getItem(key);
    //     return value
    //       ? {
    //           value,
    //           writable: true,
    //           enumerable: true,
    //           configurable: false,
    //         }
    //       : undefined;
    //   },
    mount(){
        console.log(this);
        const table = [
            ["set",Void.INVOKE_set],
            ["get",Void.INVOKE_get],
            ["has",Void.INVOKE_has],
            ["ownKeys",Void.INVOKE_ownKeys],
            
        ];
        const handlers = Object.fromEntries(
            table 
        );
        return new Proxy(
            this, 
            handlers
        );
    }
    static create(){
        //console.log(this);
        return (new this).init(...SetupSeed);
    }
    constructor(){
        //console.log(this);
        return Object.create(new.target.prototype);
    }
    
    init(...args){
        //console.log(this);
        if(Void.omniverse === null) this.setup(...args)
        else throw Void.ERROR.exists(Void.omniverse, relm, args);
        this.moments={CREATE:Date.now()};
        return this;
        //console.log(this);
    }
    static get omniverse(){return this._OMNIVERSE}
    setup(...args){
        Void._OMNIVERSE=this;
        //console.log(this);
        this.configuration=args;
        //const relm = new Void();
        this.points=new Map();        
    }
    static ERROR = VoidError;
    //["+"]() {}

}

const OMNIVERSE = Void.create();

export default OMNIVERSE.mount();

//onsole.log(Void.init());

//console.log(Void.init());