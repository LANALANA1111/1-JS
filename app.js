//1)რა განსხვავება პრიმიტიულ და არაპრიმიტიულ მონაცემთა ტიპებში?
//answer:

let answer = 'პრიმიტიული ტიპებისთვის მხოლოდ ერთი მნიშვნელობის გადაცემა შეგვიძლია, არაპრიმიტიული ტიპებისთვის კი იმდენი რამდენიც გვინდა';

console.log(answer);



//2)რა განსხვავება ცვლადებს const და let შორის და დაწერეთ პატარა მაგალითიც!!
//answer:

answer = 'როდესაც let-ს მივანიჭებთ ნმნიშვნელობას მისი შცვლა შესაძლებელია, მაგრამ როდესაც const-ს მივანიჭებთ მნიშვნელობას მისის შეცვლა შეუძლებელია';

console.log(answer);


let name ='LANAAA';
console.log(name);
name = 'Lana'
console.log(name)




//3)დაწერეთ კოდი, სადაც აღწერთ თითოეული პრიმიტიული
//მონაცემთა ტიპის ცვლადს სხვადასხვა მნიშვნელობებით და 
// შეუცვალეთ რამდენიმეს შემდგომ მნიშვნელობები ანუ 
//გადააწერეთ ახალი მნიშვნელობა და დალოგეთ შემდეგ ეს ცვლადები.



let age ='17'
// let name ='Lana'
let lastname ='Gelashvili'
let ismaried ='false'

console.log(age, name, lastname, ismaried, )

age ='19'
ismaried ='true'

console.log(age, name, lastname, ismaried)

//4)აღწერეთ არაპრიმიტიული მონაცემთა ტიპები მაგალითად array
// და array-ში რომ გქონდეთ object და თქვენ შესახებ ინფორმაცია აღწერეთ ამ
// object-ში;მაგალითად let user = [{name: 'nika'}] და ასე
//შემდეგ ყველა ინფორმაციით შეავსეთ თქვენ შესახებ რომელიც შეიცავს
//(firstName,lastName,age,email,address,isStudent) და დალოგეთ


let user =[
    {
        name:'Lana',
        lastname:'Gelashvili',
        age: 17,
        email:'lanagelashvili1111@gmail.com',
        address:'tbilisi, georgia',
        isStudent: true
    }
]