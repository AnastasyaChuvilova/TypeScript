import Cart from '../cart';
import Movie from '../movie'

const movie1 = new Movie (
  1001,
  'Мстители',
  'Avengers',
  2012,
  'США',
  'Avengers Assemble!',
  'боевик',
  '137 мин',
  199
);

const movie2 = new Movie(
  1002,
  'Темный рыцарь',
  'The Dark Knight',
  2008,
  'США',
  'Why so serious?',
  'боевик',
  '152 мин',
  249
);

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('should add movie to the card', () => {
  const cart = new Cart();
  cart.add(movie1);
  expect(cart.items.length).toBe(1);
});

test('should calculate total price without discount', () => {
  const cart = new Cart();
  cart.add(movie1);
  cart.add(movie2);
  expect(cart.getTotalPrice()).toBe(448);
});

test('should calculate total price with discount', () => {
  const cart = new Cart();
  cart.add(movie1);
  cart.add(movie2);
  expect(cart.getTotalPriceWithDiscount(10)).toBe(403.2);
});

test('should remove item by id', () => {
  const cart = new Cart();
  cart.add(movie1);
  cart.add(movie2);
  expect(cart.items.length).toBe(2);
  
  cart.removeItemById(1001);
  expect(cart.items.length).toBe(1);
  expect(cart.items[0]).toBe(movie2);
});