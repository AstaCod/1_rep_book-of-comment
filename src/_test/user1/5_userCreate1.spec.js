const {expect} = require('chai');
const {userCreateQ} = require("../user/queries.js");
const {user} = require('../user/data')
const gqlRequest = require('../gqlRequest');

let  respData = null;
let postData = null;

describe('USER CREATE',() => {
    describe('USER CREATE - POSITIVE TEST', () => {
        it('user create  all fields', (done) => {
            postData = {
                query: userCreateQ,
                variables: user,
            },
                gqlRequest(postData)
                    .expect(200)
                    .end((err, res) => {
                        if (err) return done(err)
                        respData = res.body.data.userCreate;
                        console.log(respData);

                        expect(respData.firstName).eq(user.userInput.firstName);  //assertion chai
                        expect(respData.lastName).eq(user.userInput.lastName);  //assertion chai

                        done()
                    })
        })

    })
})
//         it('user create  all fields', () => {
//
//         })
//
//     })
//     describe('USER CREATE - NEGATIVE TEST',() => {
//        it('user create  all fields', () => {
//
//        })
//
//         it('user create  all fields', () => {
//
//         })
//         it('user create  all fields', () => {
//
//         })
//     })
// })




