import {
  getCanadianProvinceCode,
  CanadianProvinceName,
  getCanadianProvinceName,
  CanadianProvinceCode,
} from '../src/canadian-codes';

describe('test canadian province functions', () => {
  it('should return correct canadian province code', () => {
    expect(getCanadianProvinceCode(CanadianProvinceName.Alberta)).toEqual('AB');
    expect(getCanadianProvinceCode('Alberta')).toEqual('AB');
  });
  it('should throw an error if province name is incorrect', () => {
    expect(() => getCanadianProvinceCode('Any province name')).toThrowError(
      "Unknown province name: 'Any province name'",
    );
  });
  it('should return correct canadian province name', () => {
    expect(getCanadianProvinceName(CanadianProvinceCode.AB)).toEqual('Alberta');
    expect(getCanadianProvinceName('AB')).toEqual('Alberta');
  });
  it('should throw an error if province code is incorrect', () => {
    expect(() => getCanadianProvinceName('Any province code')).toThrowError(
      "Unknown province code: 'Any province code'",
    );
  });
});
