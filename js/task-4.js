console.log("\n<task-4>");
//funkcja strzałkowa: 
//getTotalBalanceByGender(users, gender), przyjmuje dwa parametry:
//(users) => [{},{}]- tablica obiektów użytkowników,
//(gender) => /typ string/ płeć.
//Funkcja używa łańcucha wywołań metod i zwraca saldo użytkowników (właściwość balance), dla (właściwość gender)
//(0,5) łańcuch wywołań >> odpalamy kolejne funkcje po kropce: 
//(1) .filter method( ,gender) by user.gender: .filter(user => user.gender === gender)
//(2) .reduce method: reduce(callback, initialValue) sekwencyjne przetwarzanie każdego elementu tablicy przy jednoczesnym zapisywaniu wyniku pośredniego. 
// tutaj: redukujemy tablice po user.balance >> .reduce(total, user) => total + user.balance, 0)

//!!! spróbować napisać to pętlami sumowania po tablicy?


const getTotalBalanceByGender = (users, gender) => 
  users
    .filter(user => user.gender === gender)
    .reduce((total, user) => total + user.balance, 0);

const allUsersBalance = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(allUsersBalance, "male")); // 12053

console.log(getTotalBalanceByGender(allUsersBalance, "female")); // 8863

