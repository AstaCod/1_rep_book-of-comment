const {expect} = require('chai');
const {userCreateQ} = require("./queries.js");
const {user} = require('./data')
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
                        respData = res.body.data;
                        console.log(respData);
                        // expect(respData).eq();
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




