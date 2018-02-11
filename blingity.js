// Ex: Blingity('div') => [All the divs in the page] with access to Blingity's prototype Functions
// Blingity(document) => [Document] with access to Blingity's prototype Functions
// Blingity(Blingity(document)) => [Document] with access to Blingity's prototype Functions
function Blingity(strOrObj) {
    if (strOrObj instanceof Blingity) {
        return strOrObj;
    } else if (strOrObj instanceof Array) {
        Object.assign(this, strOrObj, {length: strOrObj.length}); // Constructor case
    }
    else if (typeof strOrObj === 'string') {
        return new Blingity([].slice.call(document.querySelectorAll(strOrObj)));
    } else {
        return new Blingity([strOrObj]); // Assumes element
    }
}

Blingity.prototype.attr = function (key, newVal = undefined) {
    const first = this.length ? this[0] : undefined;
    if (newVal !== undefined) {
        first ? first.setAttribute(key, newVal) : undefined;
        return this; // Blingity object so we can keep chaining
    }
    return first ? first.getAttribute(key) : undefined;
};

// Idea: mixin Array operators like map, slice, etc like so?
// BlingWrapper.prototype = Object.create(Array.prototype);

// Paste onto http://stackoverflow.com/ to validate

$ = Blingity; // No, not jQuery... BLINGITY!

// Instantiate via CSS selector works?
console.assert($('.top-bar').length === 1);
console.assert($('.top-bar')[0] instanceof Element);
console.assert($('.top-bar') instanceof Blingity);

// Instantiate via Element works?
let selection = $($('.top-bar')[0]);
console.assert(selection.length === 1 && selection instanceof Blingity && selection[0] instanceof Element);

// Instantiate via prior Blingity selection works?
selection = $(selection);
console.assert(selection.length === 1 && selection instanceof Blingity && selection[0] instanceof Element);

// Trivial attr fetching works?
console.assert($('.top-bar').attr('class').contains('top-bar'));

// Does chaining and attr setting work?
console.assert($('.top-bar').attr('foo', 'bar').attr('foo') === 'bar');
