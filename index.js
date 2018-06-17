'use strict'

/*
  1) const object destructure, get, equals require axios
*/
const { get } = require('axios')

/*
  2) let this joint is lit, equals then open backtick
  1) h double t p s colon and slash slashin
  2) subliminal spectrum dot com slash app dash rapping
  1) close the string down with a backtick
*/
let thisJointIsLit = `https://subliminalspectrum.com/app-rapping`

/*
  2) slash slash, here comes the magic
  1) set the function up to grab it
  2) put it up so you can have it
*/
// here comes the magic, set the function up to grab it, put it up so you can have it

/*
  1) function, we got that fire, destructure data from parameter
*/
function weGotThatFire ({data}) {
  /*
    2) require fs, write file, subspec is gonna damage ya
    1) dot zip, arg two is data, then of course we've got the callback
  */
  require('fs').writeFile('subspecIsGonnaDamageYa.zip', data, (error) => {
    /*
      2) param error, if error, throw error, comment no fallback
    */
    if (error) throw error // no fallback
  })
}

/*
  1) get, this joint is lit, arg two it is an object
  2) with the property responseType, value's arraybuffer
  1) dot then, we got that fire, dual slash and now we're done
*/
get(thisJointIsLit, {responseType: 'arraybuffer'}).then(weGotThatFire)
/*
  2) here's a sampling of my music, open zip and have some fun
*/
// and now we're done, here's a sampling of my music, open zip and have some fun

module.exports = thisJointIsLit
