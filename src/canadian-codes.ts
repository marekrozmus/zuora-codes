export enum CanadianProvinceCode {
  AB,
  BC,
  MB,
  NB,
  NL,
  NS,
  NT,
  NU,
  ON,
  PE,
  QC,
  SK,
  YT,
}
export enum CanadianProvinceName {
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Nova Scotia',
  'Northwest Territories',
  'Nunavut',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Yukon',
}

type ProvinceCodeToNameMap = { [key in CanadianProvinceCode]: string };

const canadianProvinceCodeToName: ProvinceCodeToNameMap = {
  [CanadianProvinceCode.AB]: CanadianProvinceName[CanadianProvinceName.Alberta],
  [CanadianProvinceCode.BC]:
    CanadianProvinceName[CanadianProvinceName['British Columbia']],
  [CanadianProvinceCode.MB]:
    CanadianProvinceName[CanadianProvinceName.Manitoba],
  [CanadianProvinceCode.NB]:
    CanadianProvinceName[CanadianProvinceName['New Brunswick']],
  [CanadianProvinceCode.NL]:
    CanadianProvinceName[CanadianProvinceName['Newfoundland and Labrador']],
  [CanadianProvinceCode.NS]:
    CanadianProvinceName[CanadianProvinceName['Nova Scotia']],
  [CanadianProvinceCode.NT]:
    CanadianProvinceName[CanadianProvinceName['Northwest Territories']],
  [CanadianProvinceCode.NU]: CanadianProvinceName[CanadianProvinceName.Nunavut],
  [CanadianProvinceCode.ON]: CanadianProvinceName[CanadianProvinceName.Ontario],
  [CanadianProvinceCode.PE]:
    CanadianProvinceName[CanadianProvinceName['Prince Edward Island']],
  [CanadianProvinceCode.QC]: CanadianProvinceName[CanadianProvinceName.Quebec],
  [CanadianProvinceCode.SK]:
    CanadianProvinceName[CanadianProvinceName.Saskatchewan],
  [CanadianProvinceCode.YT]: CanadianProvinceName[CanadianProvinceName.Yukon],
};

type ProvinceNameToCodeMap = { [key in CanadianProvinceName]: string };

const canadianProvinceNameToCode: ProvinceNameToCodeMap = {
  [CanadianProvinceName.Alberta]: CanadianProvinceCode[CanadianProvinceCode.AB],
  [CanadianProvinceName['British Columbia']]:
    CanadianProvinceCode[CanadianProvinceCode.BC],
  [CanadianProvinceName.Manitoba]:
    CanadianProvinceCode[CanadianProvinceCode.MB],
  [CanadianProvinceName['New Brunswick']]:
    CanadianProvinceCode[CanadianProvinceCode.NB],
  [CanadianProvinceName['Newfoundland and Labrador']]:
    CanadianProvinceCode[CanadianProvinceCode.NL],
  [CanadianProvinceName['Nova Scotia']]:
    CanadianProvinceCode[CanadianProvinceCode.NS],
  [CanadianProvinceName['Northwest Territories']]:
    CanadianProvinceCode[CanadianProvinceCode.NT],
  [CanadianProvinceName.Nunavut]: CanadianProvinceCode[CanadianProvinceCode.NU],
  [CanadianProvinceName.Ontario]: CanadianProvinceCode[CanadianProvinceCode.ON],
  [CanadianProvinceName['Prince Edward Island']]:
    CanadianProvinceCode[CanadianProvinceCode.PE],
  [CanadianProvinceName.Quebec]: CanadianProvinceCode[CanadianProvinceCode.QC],
  [CanadianProvinceName.Saskatchewan]:
    CanadianProvinceCode[CanadianProvinceCode.SK],
  [CanadianProvinceName.Yukon]: CanadianProvinceCode[CanadianProvinceCode.YT],
};

export const getCanadianProvinceName = (
  provinceCode: CanadianProvinceCode | string,
): string => {
  if (typeof provinceCode === 'string') {
    var enumValue: CanadianProvinceCode = (<any>CanadianProvinceCode)[
      provinceCode
    ];

    if (enumValue !== undefined) {
      return canadianProvinceCodeToName[enumValue];
    }

    throw new Error(`Unknown province code: '${provinceCode}'`);
  }

  return canadianProvinceCodeToName[provinceCode];
};

export const getCanadianProvinceCode = (
  provinceName: CanadianProvinceName | string,
): string => {
  if (typeof provinceName === 'string') {
    var enumValue: CanadianProvinceName = (<any>CanadianProvinceName)[
      provinceName
    ];

    if (enumValue !== undefined) {
      return canadianProvinceNameToCode[enumValue];
    }

    throw new Error(`Unknown province name: '${provinceName}'`);
  }

  return canadianProvinceNameToCode[provinceName];
};
