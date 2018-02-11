# Blingity
A frontend developer's rite of passage. I attempt to implement
a subset of jQuery using vanilla JS/DOMElements with minimal
inspection of the jquery source.

**Currently supports `$({selection})` where {selection} is a:**
1. prior blingity selection
2. Element
3. CSS selector string

**Also supports chained attr set and gets like so:** 
`$({selection}).attr('key', 'val').attr('key')` 

## Learnings:
1. Can't call new on fat arrow functions
2. `[].slice.call...` is a convenient shorthand for invoking Array prototype methods
3. It's slow to set an object's prototype after it's been instantiated. Instead set
`MyConstructor.prototype = Object.create(Array.prototype)` before calling `new MyConstructor()`
