const {expect} = require('chai');
const {userGetByIdQ} = require("./queries.js");
const gqlRequest = require('../gqlRequest');
const {user} = require("./data");

let  respData = null;
let postData = null;

describe('USER GET BY ID',() => {
    describe('USER GET BY ID - POSITIVE TEST', () => {
        it('user get by id', (done) => {
            postData = {
               query: userGetByIdQ,
                variables: {
                    userId: null
                }
            }
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body;
                    console.log(respData);
                    expect(respData).eq();  //assertion chai
                    done()
                })
        })
    })
    describe('USER GET BY ID - NEGATIVE TEST',() => {

      })
})






