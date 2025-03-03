


class VoidError extends Error {
    static exists(omniverse, agent, args=null){
        return this.E(
            "Reality already initialised! Recreation of Omniverse attempt.", 
            [
                "EXISTING RELM",
                Object.freeze(omniverse), 
                this.reject(agent,args)
            ]
        );
    }
    static unknownSetup(args){
        return this.E(
            "unrecognised args form! setup has wrong definition",
            [
                Object.freeze(args),
            ]
        );
    }
    static reject(rejected,args=null){
        return this.E(
            "Reject overwrite attempt! conflict occured", 
            [
                "REJECTED RELM",
                Object.freeze(rejected),
                (args===null)
                ?
                "setup not provided"
                :
                (
                    (args instanceof Array)
                    ?
                    args.entries
                    :
                    this.unknownSetup(args)
                )
            ]
        );
    }
    static missEntityGroup(...args){
        return this.E(
            "identification of entity from non-declared group",
            [
                ...args
            ]
        );
    }
    static groupAdding(...args){
        return this.E(
            "identification of entity from non-declared group",
            [
                ...args
            ]
        );
    }
    static entityAdding(...args){
        return this.E(
            "issue has occured while reading entity file",
            [
                ...args
            ]
        );
    }

    static namespaceJson(...args){
        return this.E(
            "issue has occured while reading entity file",
            [
                ...args
            ]
        );
    }
    static doubleEntityGroup(...args){
        return this.E(
            "rejected attempt of creating another group with same name",
            [
                ...args
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


export default VoidError