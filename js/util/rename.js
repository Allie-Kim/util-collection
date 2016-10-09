import _ from 'lodash';

let cat = (head, ...theArgs) => {
    return [head].concat.apply([head], ...theArgs);
};


/*
* usage: rename({a: 1, b: 2, c: 3}, {'a': 'AAA', 'b': 'BBB'})
* return: {c: 3, AAA: 1, BBB: 3}
* */
let renameObjKeys = (obj, newNames) => {
    return _.reduce(newNames, (o, nu, old) => {
            if (_.has(obj, old)) {
                o[nu] = obj[old];
                return o;
            } else
                return o;
        },
        _.omit.apply(null, cat(obj, _.keys(newNames))));
};

export {renameObjKeys};