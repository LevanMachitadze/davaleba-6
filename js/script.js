let age = Number(prompt(' Enter your age: '));
let type = prompt('Enter movie type (regular or 3D):');
let time = prompt('Enter time of day (matinee or evening):');
let discount = prompt('did you have a discount card?');
let price_one = 5;
let price_two = 15;
let price_three = 10;

if (discount.toLowerCase === 'yes') {
  price_one = price_one - 5;
  price_two = price_two - 5;
  price_three = price_three - 5;
} else if (discount.toLowerCase === 'no') {
  price_one = price_one;
  price_two = price_two;
  price_three = price_three;
} else {
  ('ERORR!');
}
switch (true) {
  case age < 10 &&
    type.toLowerCase() === 'regular' &&
    time.toLowerCase() === 'matinee':
    alert(`ბილეთის ფასი თქვენთვის არის : ${price_one} ლარი.`);
    break;
  case age >= 10 &&
    age <= 65 &&
    type.toLowerCase() === 'regular' &&
    time.toLowerCase() === 'matinee':
    alert(`ბილეთის ფასი თქვენთვის არის : ${price_two} ლარი. `);
    break;
  case age > 65 &&
    type.toLowerCase() === 'regular' &&
    time.toLowerCase() === 'matinee':
    alert(`ბილეთის ფასი თქვენთვის არის : ${price_three} ლარი. `);
    break;

  case age < 10 &&
    type.toUpperCase() === '3D' &&
    time.toLowerCase() === 'matinee':
    alert(`ბილეთის ფასი თქვენთვის არის : ${price_one + 5} ლარი. `);
    break;
  case age >= 10 &&
    age <= 65 &&
    type.toUpperCase() === '3D' &&
    time.toLowerCase() === 'matinee':
    alert(`ბილეთის ფასი თქვენთვის არის : ${price_two + 5} ლარი. `);
    break;
  case age > 65 &&
    type.toUpperCase() === '3D' &&
    time.toLowerCase() === 'matinee':
    alert(`ბილეთის ფასი თქვენთვის არის : ${price_three + 5} ლარი. `);
    break;

  case age < 10 &&
    type.toLowerCase() === 'regular' &&
    time.toLowerCase() === 'evening':
    alert(`ბილეთის ფასი თქვენთვის არის : ${price_one + 5} ლარი. `);
    break;
  case age >= 10 &&
    age <= 65 &&
    type.toLowerCase() === 'regular' &&
    time.toLowerCase() === 'evening':
    alert(`ბილეთის ფასი თქვენთვის არის : ${price_two + 5} ლარი. `);
    break;
  case age > 65 &&
    type.toLowerCase() === 'regular' &&
    time.toLowerCase() === 'evening':
    alert(`ბილეთის ფასი თქვენთვის არის : ${price_three + 5} ლარი. `);
    break;

  case age < 10 &&
    type.toUpperCase() === '3D' &&
    time.toLowerCase() === 'evening':
    alert(`ბილეთის ფასი თქვენთვის არის : ${price_one + 10} ლარი. `);
    break;
  case age >= 10 &&
    age <= 65 &&
    type.toUpperCase() === '3D' &&
    time.toLowerCase() === 'evening':
    alert(`ბილეთის ფასი თქვენთვის არის : ${price_two + 10} ლარი. `);
    break;
  case age > 65 &&
    type.toUpperCase() === '3D' &&
    time.toLowerCase() === 'evening':
    alert(`ბილეთის ფასი თქვენთვის არის : ${price_three + 10} ლარი. `);
    break;

  default:
    alert('უპს...რაღაც შეცდომაა, სცადეთ ხელახლა 😊');
}
