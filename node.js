const bankAccount = {
    ownerName: 'Oleksandr',
    accountNumber: 315,
    balance: 111100,
}

bankAccount.deposit = confirm('поповніть рахунок')
bankAccount.withdraw = prompt(balance)

const weather = {
    temperature: 5,
    hudimity: 95,
    windSpeed: 11,
}

if(temperature < 0) {
    return true
    prompt('температура нижче 0 градусів')
} else {
    return false
    prompt('температура вижче 0')
}
 

const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  rating: 8.8,

  
  isHighlyRated() {
    return this.rating > 8;
  }
};

console.log("Назва фільму:", movie.title);
console.log("Режисер:", movie.director);
console.log("Рік випуску:", movie.year);
console.log("Рейтинг:", movie.rating);


console.log("Високий рейтинг?", movie.isHighlyRated());
