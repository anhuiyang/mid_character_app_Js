function midCharacter (string) {
    let length = string.length
    let midLength = Math.floor(string.length / 2)
    let stringMid = string[midLength]
    return length % 2 === 0 ? string[(midLength-1)] + stringMid : stringMid
}
module.exports = {midCharacter}