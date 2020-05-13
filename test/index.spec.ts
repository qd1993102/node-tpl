import { equal } from 'assert';
import upx2pg from '../index';
describe("Typescript usage suite", () => {
  it("should be able to execute a test", () => {
    equal(upx2pg.test(''), true);
  });
});