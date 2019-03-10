let {midCharacter} = require('../src/midCharacter.js')
describe('midCharacter', function(){
    it('will take an argument', function(){
        expect(midCharacter('test')).toBe('test')
    })
})