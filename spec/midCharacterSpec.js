let {midCharacter} = require('../src/midCharacter.js')
describe('midCharacter', function(){
    it('will take an even length string and return mid characters', function(){
        expect(midCharacter('test')).toBe('es')
    })
    it('will take an odd length string and return mid character', function(){
        expect(midCharacter('testing')).toBe('t')
    })
})