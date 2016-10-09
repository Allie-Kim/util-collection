import { renameObjKeys } from './util/rename.js';

let test = () => {
    //expect {'AAA': 1, 'b': 2}
    console.log(renameObjKeys({a: 1, b: 2, c: 3}, {'a': 'AAA', 'b': 'BBB'}));
};

test();