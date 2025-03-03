import VoidError from "./.error-defined.js";
import SetupSeed from "./.setup.root.js";




class Void extends null{


    static _OMNIVERSE = null;


    static async ADD_ENTITY(entityName, entityGroup){
        //console.log(entityName, entityGroup);
        import(
            `./${ entityGroup }.${entityName}.js`
        ).then(
            (ENTITY)=>{
                if( !Void.hasOwnProperty(entityGroup)) 
                    throw Void.ERROR.missEntityGroup(entityName, entityGroup);

                Void[entityGroup][entityName] = ENTITY.default.DEFINE( Void[entityGroup] );
            }
        ).catch(
            (err)=>{
                throw Void.ERROR.entityAdding(
                    entityName, 
                    entityGroup, 
                    err
                )
            }
        )
        
    }
     static async ADD_GROUP(entityGroup, callback){
        console.log(entityGroup, callback);
        import(
            `./${entityGroup}.js`
        ).then(
            (ENTITY_GROUP)=>{
                //console.log(ENTITY_GROUP);
                if( Void.hasOwnProperty(entityGroup)) 
                    throw Void.ERROR.doubleEntityGroup(
                        entityGroup,
                        Void
                    );
                
                Void[entityGroup] = ENTITY_GROUP.default.DEFINE( Void );

                if( Void[entityGroup].constructor.name != entityGroup ){

                    if( Void.hasOwnProperty(Void[entityGroup].constructor.name)) 
                        throw Void.ERROR.doubleEntityGroup(
                            Void[entityGroup].constructor.name, 
                            entityGroup,
                            Void
                        );

                    Void[
                        Void[entityGroup].constructor.name
                    ]=Void[entityGroup];
                }
                console.log("ADD_GROUP", entityGroup, 
                    Void[entityGroup].constructor.name, 
                    Void[entityGroup]);
                callback(
                    entityGroup, 
                    Void[entityGroup].constructor.name, 
                    Void[entityGroup]
                )
            }
        ).catch(
            (err)=>{
                throw Void.ERROR.groupAdding(
                    entityGroup, 
                    err
                )
            }
        )
    }
    static set LOAD(loadPack){
        console.log("load ",loadPack);
        for(var group in loadPack){
            console.log("add group attempt", group);
            Void.ADD_GROUP(
                group,
                (grName,grSubName,grHook)=>{

                    console.group(grName);
                    console.table([grSubName, grHook])
                    for(var entity of loadPack[grName][1]){
                        Void.ADD_ENTITY(entity, grSubName)
                    }
                    console.groupEnd(grName);
                }
            )
        }
    }
    static DEFINE(){
        import(
            "./.namespace.json", 
            { 
                with:{ 
                    type:"json" 
                } 
            }
        ).then(
            (jsonData)=>Void.LOAD=jsonData.default
        ).catch(
            (err)=>{throw Void.ERROR.namespaceJson(err)}
        )
    }

    //static INVOKE_get(...args) {
        //console.log(this);
        //console.log(...args)
    //    return args;
    //}
    //static INVOKE_set(...args) {
        //console.log(this);
        //console.log(...args)
    //    return args;
    //}
    // static INVOKE_deleteProperty(target, key) {
    //     if (!(key in target)) {
    //       return false;
    //     }
    //     return target.removeItem(key);
    // }
    //static INVOKE_ownKeys(...args) {
        //console.log(this);
        //console.log(...args)
    //    return args;
    //}
    //static INVOKE_has(...args) {
        //console.log(this);
        //console.log(...args)
    //    return args;
    ///}
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
    //mount(){
    //    console.log(this);
     //   const table = [
    //        ["set",Void.INVOKE_set],
     //       ["get",Void.INVOKE_get],
     //       ["has",Void.INVOKE_has],
     //       ["ownKeys",Void.INVOKE_ownKeys],
            
    //    ];
    //    const handlers = Object.fromEntries(
    //        table 
    //    );
    //    return new Proxy(
    //        this, 
    //        handlers
    //    );
    //}
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

Void.DEFINE();

export default Void;//.mount();

//onsole.log(Void.init());

//console.log(Void.init());