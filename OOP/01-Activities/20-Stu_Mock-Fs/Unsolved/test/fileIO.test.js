const FileIO = require('../fileIO');
const fs = require('fs');

describe('FileIO', () => {
  describe('read', () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // TODO: Your code here
      const myFiler = new FileIO();
      const mock = jest.spyOn(fs, 'readFileSync');
      mock.mockImplementation(() => {});
      myFiler.read('read');
      expect(mock).toBeCalledWith('read', 'utf8');
      mock.mockRestore();
    });
  });

  describe('write', () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // TODO: Your code here
      const myFiler = new FileIO();
      const mock = jest.spyOn(fs, 'writeFileSync');
      mock.mockImplementation(() => {});
      myFiler.write('read', 'data');
      expect(mock).toBeCalledWith('read', 'data');
      mock.mockRestore();
    });
  });
});
