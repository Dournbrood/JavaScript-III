/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is the default for 'this' if none of the other Binding rules are being applied, UNLESS you are in Strict mode, in which case it will be undefined.
* 2. Implicit Binding is a very common rule. When the function is invoked, 'this' simply references to whatever object the method belongs to.
* 3. New Binding uses the 'new' keyword to construct a new object and point 'this' to the new object.
* 4. Explicit Binding tells 'this' EXACTLY what it belongs to.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function sneeze() {
    console.log(this.achoo);
}

var achoo = 'ACHOOO!';

sneeze();

// Principle 2
// code example for Implicit Binding

let angryApe = {
    noise: 'GRAOOOOOORRRR!',
    roar: function () {
        console.log(this.noise);
    }
}

angryApe.roar();

// Principle 3
// code example for New Binding

function Announcer(param) {
    this.message = param;
}

let impactWarner = new Announcer('FIVE SECONDS UNTIL IMPACT.');

console.log(impactWarner.message);

// Principle 4
// code example for Explicit Binding

