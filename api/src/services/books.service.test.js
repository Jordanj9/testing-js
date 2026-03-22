const BooksService = require('./books.service');

const fakeBooks = [
  {
    _id: 1,
    name: 'Book 1',
  },
];

const mockGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('should return a list of books', async () => {
      // Arrange
      mockGetAll.mockResolvedValue(fakeBooks);
      const books = await service.getBooks({});
      console.log(books);
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return a list of books with name property', async () => {
      mockGetAll.mockResolvedValue([{
        _id: 1,
        name: 'Book 2',
      }]);
      const books = await service.getBooks({});
      console.log(books);
      expect(books[0].name).toEqual('Book 2');
    });
  });
});
