import _ from 'lodash';

/*let cat = (head, ...theArgs) => {
    return [head].concat.apply([head], ...theArgs);
};*/

/*
* usage: rename({a: 1, b: 2, c: 3}, {'a': 'AAA', 'b': 'BBB'})
* return: {c: 3, AAA: 1, BBB: 3}
*
* source from the Functional JavaScript: chapter 2
* */
let renameObjKeys = (obj, newNames) => {
    return _.reduce(newNames, (omitResultObj, newKey/*value*/, oldKey/*key*/) => {
            if (_.has(obj, oldKey)) {
                omitResultObj[newKey] = obj[oldKey];
                return omitResultObj;
            } else
                return omitResultObj;
        },
        _.omit(obj, _.keys(newNames)));
};

export {renameObjKeys};