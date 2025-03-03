
import Void from "./void";

//const REALITY_BASE_ELEMENTS = //Proxy.revocable(Cogniton) 

//const NamespaceRecord  UESC = []

import(
    "./namespace.json", 
    { 
        with:{ 
            type:"json" 
        } 
    }
).then(
    (namespace)=>Cogniton.LOAD.namespace=namespace;
).catch(
    (err)=>
)

class Cogniton{ // recognizable distinct type of elementarion clasification spectrum group
    static MOUNT(entityName, entityGroup){
        import(
            `./${entityGroup}.${entityName}.js`
        ).then(
            (INVOKER)=>{
                if(!Void.hasOwnProperty(entityGroup)){
                    EXTEND
                }
                Void[entityGroup][entityName]=INVOKER(Void[entityGroup])
            }
        ).catch(
            (err)=>
        )
        
    }
    static EXTEND(callback){

    }
    static get LOAD(loadPack){
        return new Proxy(this, )
    }
};

//export default VoidError