import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('Добавление фильма в карточку', () => {
  const cart = new Cart();
  const movie = new Movie(1, 'Мстители', 'The Avengers', 2012, 'USA', 'Avengers Assemble!', ['Фантастика', 'Боевик', 'Фэнтази'], 137);
  cart.add(movie);
  expect(cart.items).toEqual([movie]);
  expect(cart.items.length).toBe(1);
  expect(cart.items[0]).toEqual(movie);
})

test('Добавление нескольких объектов в карточку', () => {
  const cart = new Cart();
  const movie = new Movie(1, 'Мстители', 'The Avengers', 2012, 'USA', 'Avengers Assemble!', ['Фантастика', 'Боевик', 'Фэнтази'], 137);
  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const album = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  cart.add(movie);
  cart.add(book);
  cart.add(album);
  expect(cart.items).toEqual([movie, book, album]);
  expect(cart.items[0]).toEqual(movie);
  expect(cart.items[1]).toEqual(book);
  expect(cart.items[2]).toEqual(album);
  expect(cart.items.length).toBe(3);
})

test('Тест метода totalCost', () => {
  const cart = new Cart();
  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const album = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  cart.add(book);
  cart.add(album);
  expect(cart.totalCost()).toBe(2900)
})

test('Тест метода totalCostDiscounted', () => {
  const cart = new Cart();
  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const album = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  cart.add(book);
  cart.add(album);
  expect(cart.totalCostDiscounted(10)).toBe(2610)
})

test('Тест метода deletedItem', () => {
  const cart = new Cart();
  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  const album = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  cart.add(book);
  cart.add(album);
  cart.deletedItem(1001);
  expect(cart.items.length).toBe(1);
  expect(cart.items).toEqual([album]);
  cart.add(book);
  expect(cart.items.length).toBe(2);
})