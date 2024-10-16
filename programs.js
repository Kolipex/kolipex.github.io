const pr = {
    cls(){
        return JSON.stringify(this);
    },

    echo(...t){
        return t.join(' ') || '';
    },

    help(){
        return Object.keys(pr).sort().join('\n');
    },

    js(...t){
        return eval(t.join(' '));
    },

    ls(){
        return Object.keys(files).sort().join('\n');
    },

    mkdir(...t){
        //files[t[0]] = {};
    }
}

export default pr;