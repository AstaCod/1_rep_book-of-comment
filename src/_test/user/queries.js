const userCreateQ = `mutation UserCreate($userInput: UserFields) {
  userCreate(userInput: $userInput) {
    _id
    firstName
    lastName
  }
}`
const userGetByIdQ = `query UserGetById($userId: ID!) {
  userGetById(userId: $userId) {
    firstName
    lastName
    _id
  }
}`
const userGetByIdQ_1 = `query UserGetById($userId: ID!) {
  userGetById(userId: $userId) {
    firstName
    lastName
    _id
  }
}`
module.exports = { userCreateQ,userGetByIdQ,userGetByIdQ_1 }