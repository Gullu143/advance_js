
// destrucuture array 
const fruits = ['mango', 'apple', 'grapes', 'lime', 'Apricot' ]
const [fruit1, fruit2,fruit3, fruit4, fruit5] = fruits;
console.log(fruit1)
console.log(fruit2)
console.log(fruit3)
console.log(fruit4)
console.log(fruit5)
// spread operator in array 
const UserInfo = ['waqas', 'lahore', '555', '123456', 'punjab']
const [...all] = UserInfo
console.log(all)



// get last in array
const [, , , , province] = UserInfo
console.log(province)


// destructure object 
const UserInformation = {
  id: 1,
  name: 'waqas',
  address: {
    postalCode: '555',
    street: 'Street 3 gulberg 3 '
  },
  province: 'punjab'
}


// alias in destructre 
const {id:user_id, name:fullName, address: {postalCode: User_postalCode, street: user_Street}} = UserInformation
console.log(fullName)
console.log(User_postalCode, user_Street)


// array and objects 
const StudentInfo = [
  {Student_name: 'ahemd', school: 'swot', age: '22', class: '11th'},
  {Student_name: 'imran', school: 'grammer', age: '23', class: '13th'},
  {Student_name: 'moiz', school: 'alfateh', age: '21', class: '15th'},
  {Student_name: 'junaid', school: 'sir syed', age: '18', class: '16th'},
  {Student_name: 'sohail', school: 'iqra public', age: '25', class: '10th'},
]

// get third object in array 
const [, , {Student_name, school}] = StudentInfo
console.log(Student_name, school)
