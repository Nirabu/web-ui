// main.js
import construct = Reflect.construct;

export function objectassign() {

    const object = {
        foo: Math.random(),
        bar: Math.random()
    };

    for (let [prop, value] of Object.entries(object)) {
        if (value > 0.5) {
            console.log(value);
        }
    }
}


export const addStrings = function (string1: string, string2: string) {
    return string1 + string2;
};

export function objectread() {
    const object = {
        prop1: 'some value',
        prop2: 'some other value',
        objectProp: {foo: 'bar '}
    };

    const {prop1, prop2, objectProp} = object;

    console.log(prop1);
    console.log(prop2);
    console.log(objectProp);
}


/**
 * @constructor private variable.
 *
 */
class Rocket {
    name: string;

    constructor(name: any) {
        this.name = name;
    }
}

export function objectspread() {
    const saturnV = new Rocket('Saturn V');

    console.log('test');

    // throws error
    // saturnV.readOnlyValue = 'somethingElse';
}

export function findArray() {
    const saturnV = new Rocket('US: Saturn V');
    const falconHeavy = new Rocket('US: Falcon Heavy');
    const longMarch = new Rocket('CN: Long March');
    const rockets = [saturnV, falconHeavy, longMarch];

    // const e = new Error("Didn't work");
    // const firstUSRocket = rockets.filter((rocket) => rocket.name.indexOf('US') === 0);
    // console.log('First US Rocket: ', firstUSRocket);

    let a = Object.freeze({b: '2'});
    console.log('After add');
    console.log(a.b);

    let c = a;
    console.log('c is: ');
    console.log(c);
    // throw e;
}

class Person {
    _first = '';
    _last = '';
    constructor(firstName: string, lastName: string) {
        this._first = firstName;
        this._last = lastName;
    }
}

const CreatePerson = () => {
    const maria = new Person("maria", "doe");

};







