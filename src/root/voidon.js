

class VoidError extends Error {
    static exists(omniverse, agent){
        return this.E(
            "Reality already initialised! Recreation of Omniverse attempt.", 
            [
                "EXISTING",
                Object.freeze(omniverse), 
                this.reject(agent)
            ]
        );
    }
    static reject(rejected){
        return this.E(
            "Reject overwrite attempt! conflict occured", 
            [
                "REJECTED",
                Object.freeze(rejected)
            ]
        );
    }
    static E(m,c=null){
        return new VoidError(
            ...(
                (
                    c===null
                )
                ?
                [
                    m
                ]
                :
                [
                    m,
                    {
                        cause: Object.fromEntries(
                            c.map(
                                (item, id)=>{
                                    if(item instanceof Error) 
                                        return [`Include::${id}`, item];
                                    else if(typeof(item)=="string")
                                        return [`About::${id}`, item];
                                    else if(Object.isFrozen(item)) 
                                        return [`Relm::${id}`, item];
                                    //else if(item instanceof String) 
                                        //return [`note::${id}`, item];
                                }
                            )
                        )
                    }
                ]
            )
        );
    }
    constructor(message, options) {
      // Need to pass `options` as the second parameter to install the "cause" property.
      super(message, options);
    }
}



class Void{
    static OMNIVERSE = null;
    constructor(){
        
    }
    static init(){
        const relm = new this();
        if(this.OMNIVERSE === null) this.OMNIVERSE = relm;
        else throw this.ERROR.exists(this.OMNIVERSE, relm);
        return relm;
    }
    
    static ERROR = VoidError;
}



console.log(Void.init());

console.log(Void.init());