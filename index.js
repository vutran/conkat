module.exports = (...objs) => {
    let type, struct;

    for (let o of objs) {
        if (type === 'array' || Array.isArray(o)) {
            if (!struct) {
                type = 'array';
                struct = [];
            }
            struct = struct.concat(o);
        } else {
            if (!type) {
                type = o.toString && o.toString();
            }

            // TODO - reduce
            switch (type) {
                case '[object Map]':
                    if (!struct) {
                        struct = new Map();
                    }
                    struct = new Map([...struct, ...o]);
                    break;
                case '[object Object]':
                    if (!struct) {
                        struct = {};
                    }
                    struct = { ...struct, ...o };
                    break;
                case '[object Set]':
                    if (!struct) {
                        struct = new Set();
                    }
                    struct = new Set([...struct, ...o]);
                    break;
            }
        }
    }

    return struct;
};
