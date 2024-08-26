// const {expect} = require('chai');
// const {userGetByIdQ_1} = require('../../queries');
// // import queries from '../../queries';
// const gqlRequest = require('../gqlRequest');
// const {user} = require("././data");

const {expect} = require('chai');
const {userGetByIdQ_1} = require('././queries');
const gqlRequest = require('../gqlRequest');
const {user} = require("./data");

let  respData = null;
let postData = null;

describe('USER GET BY ID',() => {
    describe('USER GET BY ID - POSITIVE TEST', () => {
        it('user get by id', (done) => {
            postData = {
                query: userGetByIdQ_1,
                variables: {
                    userId: '66cbc6795bcb1bb0f29fe119'
                }
            }
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.userGetById;
                    console.log(respData);
                    expect(respData._id).eq('66cbc6795bcb1bb0f29fe119');  //assertion chai
                    done()
                })
        })
    })
    // describe('USER GET BY ID - NEGATIVE TEST',() => {
    //
    //   })
})
