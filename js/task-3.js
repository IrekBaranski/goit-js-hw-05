console.log("\n<task-3>");
//funkcja strzałkowa "sortByDescendingFriendCount(users)" 
//gdzie (users) — tablica obiektów użytkowników,
//Funkcja zwraca tablicę wszystkich użytkowników posortowanych według liczby znajomych w porządku malejącym (właściwość friends).
//>>tablica friends określana wg liczby znajomych:=> user.friends.length

//Aby określić kolejność sortowania, należy przekazać funkcję zwrotną z dwoma parametrami do metody toSorted(compareFunction)
//Sortowanie w porządku malejącym: 
//Jeśli wywołanie compareFunction(a, b) zwróci jakąkolwiek wartość dodatnią, tj.b > a, sortowanie umieści b przed a. (b - a) > 0
//compareFunction(1stUser, 2ndUser) => 2ndUser.friends.length - 1stUser.friends.length

const sortByDescendingFriendCount = (users) => users.toSorted((firstUsers, secondUsers) => secondUsers.friends.length - firstUsers.friends.length)


console.log(
  sortByDescendingFriendCount([
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"],
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"],
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      gender: "male"
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"],
      gender: "female"
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"],
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"],
      gender: "female"
    }
  ])
);
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]



