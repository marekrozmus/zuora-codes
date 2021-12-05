# zuora-codes

Mappings of US State/Canadian Province to Name and back again 🧙

Based on:

- [United States Standard State Codes](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/D_Country%2C_State%2C_and_Province_Codes/B_State_Names_and_2-Digit_Codes)
- [Zuora Knowledge Base - Canadian Standard Province Codes](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/D_Country%2C_State%2C_and_Province_Codes/C_Canadian_Province_Names_and_2-Digit_Codes)

## Installation

```bash
npm install zuora-codes
# or via yarn
yarn add zuora-codes
```

## Usage

### getUnitedStatesStateCode

Gets US state code by state's name or throws an error if state name is incorrect.

##### Type signature

```typescript
(stateCode: UnitedStatesStateName | string) => string;
```

### getUnitedStatesStateName

Gets US state name by state's code or throws an error if state code is incorrect.

##### Type signature

```typescript
(stateCode: UnitedStatesStateCode | string) => string;
```

### getCanadianProvinceCode

Gets Canadian province code by province's name or throws an error if province name is incorrect.

##### Type signature

```typescript
(stateCode: CanadianProvinceName | string) => string;
```

### getCanadianProvinceName

Gets Canadian province name by province's code or throws an error if province code is incorrect.

##### Type signature

```typescript
(stateCode: CanadianProvinceCode | string) => string;
```
