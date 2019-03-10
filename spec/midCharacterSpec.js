let {midCharacter} = require('../src/midCharacter.js')
describe('midCharacter', function(){
    it('will take an even length string and return mid characters', function(){
        expect(midCharacter('test')).toBe('es')
    })
    it('will take an odd length string and return mid character', function(){
        expect(midCharacter('testing')).toBe('t')
    })
    it('will take an odd length string and return mid character', function(){
        expect(midCharacter('A')).toBe('A')
    })
    it('will take an odd length string and return mid character', function(){
        expect(midCharacter('middle')).toBe('dd')
    })
    it('will take an odd length string and return mid character', function(){
        expect(midCharacter('of')).toBe('of')
    })
})