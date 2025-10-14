const CheckObjStructure = (object:any, path:(string|number)[]) => {
    let temp = object;
    for (let i = 0; i < path.length; i++) {
        if (typeof path[i] === 'string'){
            try {
                if(!temp.hasOwnProperty(path[i])) { return undefined; } 
                temp = temp[path[i]];
            } catch {
                return undefined;
            }
        } else if (typeof path[i] === 'number'){
            try {
                if(!Array.isArray(temp) && temp.length<=path[i]) { return undefined; } 
                temp = temp[path[i]];
            } catch {
                return undefined;
            }
        }
    }
    return temp;
};

export default CheckObjStructure