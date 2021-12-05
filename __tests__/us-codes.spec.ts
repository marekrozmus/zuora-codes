import {
  getUnitedStatesStateCode,
  UnitedStatesStateName,
  getUnitedStatesStateName,
  UnitedStatesStateCode,
} from '../src/us-codes';

describe('test US province functions', () => {
  it('should return correct US province code', () => {
    expect(
      getUnitedStatesStateCode(UnitedStatesStateName['Armed Forces']),
    ).toEqual('AE');
    expect(getUnitedStatesStateCode('Armed Forces')).toEqual('AE');
  });
  it('should throw an error if state code is incorrect', () => {
    expect(() => getUnitedStatesStateCode('Any state name')).toThrowError(
      "Unknown state name: 'Any state name'",
    );
  });
  it('should return correct US state name', () => {
    expect(getUnitedStatesStateName(UnitedStatesStateCode.AE)).toEqual(
      'Armed Forces',
    );
    expect(getUnitedStatesStateName('AE')).toEqual('Armed Forces');
  });
  it('should throw an error if state name is incorrect', () => {
    expect(() => getUnitedStatesStateName('Any state code')).toThrowError(
      "Unknown state code: 'Any state code'",
    );
  });
});
