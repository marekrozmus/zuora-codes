export enum UnitedStatesStateCode {
  AA,
  AE,
  AK,
  AL,
  AP,
  AR,
  AZ,
  CA,
  CO,
  CT,
  DC,
  DE,
  FL,
  GA,
  GU,
  HI,
  IA,
  ID,
  IL,
  IN,
  KS,
  KY,
  LA,
  MA,
  MD,
  ME,
  MI,
  MN,
  MO,
  MS,
  MT,
  NC,
  ND,
  NE,
  NH,
  NJ,
  NM,
  NV,
  NY,
  OH,
  OK,
  OR,
  PA,
  PR,
  RI,
  SC,
  SD,
  TN,
  TX,
  UT,
  VA,
  VI,
  VT,
  WA,
  WI,
  WV,
  WY,
}

export enum UnitedStatesStateName {
  'Armed Forces America',
  'Armed Forces',
  'Alaska',
  'Alabama',
  'Armed Forces Pacific',
  'Arkansas',
  'Arizona',
  'California',
  'Colorado',
  'Connecticut',
  'Washington DC',
  'Delaware',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Iowa',
  'Idaho',
  'Illinois',
  'Indiana',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Massachusetts',
  'Maryland',
  'Maine',
  'Michigan',
  'Minnesota',
  'Missouri',
  'Mississippi',
  'Montana',
  'North Carolina',
  'North Dakota',
  'Nebraska',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'Nevada',
  'New York',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Virginia',
  'Virgin Islands',
  'Vermont',
  'Washington',
  'Wisconsin',
  'West Virginia',
  'Wyoming',
}

type StateCodeToNameMap = { [key in UnitedStatesStateCode]: string };

const unitedStatesStateCodeToName: StateCodeToNameMap = {
  [UnitedStatesStateCode.AA]:
    UnitedStatesStateName[UnitedStatesStateName['Armed Forces America']],
  [UnitedStatesStateCode.AE]:
    UnitedStatesStateName[UnitedStatesStateName['Armed Forces']],
  [UnitedStatesStateCode.AK]:
    UnitedStatesStateName[UnitedStatesStateName.Alaska],
  [UnitedStatesStateCode.AL]:
    UnitedStatesStateName[UnitedStatesStateName.Alabama],
  [UnitedStatesStateCode.AP]:
    UnitedStatesStateName[UnitedStatesStateName['Armed Forces Pacific']],
  [UnitedStatesStateCode.AR]:
    UnitedStatesStateName[UnitedStatesStateName.Arkansas],
  [UnitedStatesStateCode.AZ]:
    UnitedStatesStateName[UnitedStatesStateName.Arizona],
  [UnitedStatesStateCode.CA]:
    UnitedStatesStateName[UnitedStatesStateName.California],
  [UnitedStatesStateCode.CO]:
    UnitedStatesStateName[UnitedStatesStateName.Colorado],
  [UnitedStatesStateCode.CT]:
    UnitedStatesStateName[UnitedStatesStateName.Connecticut],
  [UnitedStatesStateCode.DC]:
    UnitedStatesStateName[UnitedStatesStateName['Washington DC']],
  [UnitedStatesStateCode.DE]:
    UnitedStatesStateName[UnitedStatesStateName.Delaware],
  [UnitedStatesStateCode.FL]:
    UnitedStatesStateName[UnitedStatesStateName.Florida],
  [UnitedStatesStateCode.GA]:
    UnitedStatesStateName[UnitedStatesStateName.Georgia],
  [UnitedStatesStateCode.GU]: UnitedStatesStateName[UnitedStatesStateName.Guam],
  [UnitedStatesStateCode.HI]:
    UnitedStatesStateName[UnitedStatesStateName.Hawaii],
  [UnitedStatesStateCode.IA]: UnitedStatesStateName[UnitedStatesStateName.Iowa],
  [UnitedStatesStateCode.ID]:
    UnitedStatesStateName[UnitedStatesStateName.Idaho],
  [UnitedStatesStateCode.IL]:
    UnitedStatesStateName[UnitedStatesStateName.Illinois],
  [UnitedStatesStateCode.IN]:
    UnitedStatesStateName[UnitedStatesStateName.Indiana],
  [UnitedStatesStateCode.KS]:
    UnitedStatesStateName[UnitedStatesStateName.Kansas],
  [UnitedStatesStateCode.KY]:
    UnitedStatesStateName[UnitedStatesStateName.Kentucky],
  [UnitedStatesStateCode.LA]:
    UnitedStatesStateName[UnitedStatesStateName.Louisiana],
  [UnitedStatesStateCode.MA]:
    UnitedStatesStateName[UnitedStatesStateName.Massachusetts],
  [UnitedStatesStateCode.MD]:
    UnitedStatesStateName[UnitedStatesStateName.Maryland],
  [UnitedStatesStateCode.ME]:
    UnitedStatesStateName[UnitedStatesStateName.Maine],
  [UnitedStatesStateCode.MI]:
    UnitedStatesStateName[UnitedStatesStateName.Michigan],
  [UnitedStatesStateCode.MN]:
    UnitedStatesStateName[UnitedStatesStateName.Minnesota],
  [UnitedStatesStateCode.MO]:
    UnitedStatesStateName[UnitedStatesStateName.Missouri],
  [UnitedStatesStateCode.MS]:
    UnitedStatesStateName[UnitedStatesStateName.Mississippi],
  [UnitedStatesStateCode.MT]:
    UnitedStatesStateName[UnitedStatesStateName.Montana],
  [UnitedStatesStateCode.NC]:
    UnitedStatesStateName[UnitedStatesStateName['North Carolina']],
  [UnitedStatesStateCode.ND]:
    UnitedStatesStateName[UnitedStatesStateName['North Dakota']],
  [UnitedStatesStateCode.NE]:
    UnitedStatesStateName[UnitedStatesStateName.Nebraska],
  [UnitedStatesStateCode.NH]:
    UnitedStatesStateName[UnitedStatesStateName['New Hampshire']],
  [UnitedStatesStateCode.NJ]:
    UnitedStatesStateName[UnitedStatesStateName['New Jersey']],
  [UnitedStatesStateCode.NM]:
    UnitedStatesStateName[UnitedStatesStateName['New Mexico']],
  [UnitedStatesStateCode.NV]:
    UnitedStatesStateName[UnitedStatesStateName.Nevada],
  [UnitedStatesStateCode.NY]:
    UnitedStatesStateName[UnitedStatesStateName['New York']],
  [UnitedStatesStateCode.OH]: UnitedStatesStateName[UnitedStatesStateName.Ohio],
  [UnitedStatesStateCode.OK]:
    UnitedStatesStateName[UnitedStatesStateName.Oklahoma],
  [UnitedStatesStateCode.OR]:
    UnitedStatesStateName[UnitedStatesStateName.Oregon],
  [UnitedStatesStateCode.PA]:
    UnitedStatesStateName[UnitedStatesStateName.Pennsylvania],
  [UnitedStatesStateCode.PR]:
    UnitedStatesStateName[UnitedStatesStateName['Puerto Rico']],
  [UnitedStatesStateCode.RI]:
    UnitedStatesStateName[UnitedStatesStateName['Rhode Island']],
  [UnitedStatesStateCode.SC]:
    UnitedStatesStateName[UnitedStatesStateName['South Carolina']],
  [UnitedStatesStateCode.SD]:
    UnitedStatesStateName[UnitedStatesStateName['South Dakota']],
  [UnitedStatesStateCode.TN]:
    UnitedStatesStateName[UnitedStatesStateName.Tennessee],
  [UnitedStatesStateCode.TX]:
    UnitedStatesStateName[UnitedStatesStateName.Texas],
  [UnitedStatesStateCode.UT]: UnitedStatesStateName[UnitedStatesStateName.Utah],
  [UnitedStatesStateCode.VA]:
    UnitedStatesStateName[UnitedStatesStateName.Virginia],
  [UnitedStatesStateCode.VI]:
    UnitedStatesStateName[UnitedStatesStateName['Virgin Islands']],
  [UnitedStatesStateCode.VT]:
    UnitedStatesStateName[UnitedStatesStateName.Vermont],
  [UnitedStatesStateCode.WA]:
    UnitedStatesStateName[UnitedStatesStateName.Washington],
  [UnitedStatesStateCode.WI]:
    UnitedStatesStateName[UnitedStatesStateName.Wisconsin],
  [UnitedStatesStateCode.WV]:
    UnitedStatesStateName[UnitedStatesStateName['West Virginia']],
  [UnitedStatesStateCode.WY]:
    UnitedStatesStateName[UnitedStatesStateName.Wyoming],
};

type StateNameToCodeMap = { [key in UnitedStatesStateName]: string };

const unitedStatesStateNameToCode: StateNameToCodeMap = {
  [UnitedStatesStateName['Armed Forces America']]:
    UnitedStatesStateCode[UnitedStatesStateCode.AA],
  [UnitedStatesStateName['Armed Forces']]:
    UnitedStatesStateCode[UnitedStatesStateCode.AE],
  [UnitedStatesStateName.Alaska]:
    UnitedStatesStateCode[UnitedStatesStateCode.AK],
  [UnitedStatesStateName.Alabama]:
    UnitedStatesStateCode[UnitedStatesStateCode.AL],
  [UnitedStatesStateName['Armed Forces Pacific']]:
    UnitedStatesStateCode[UnitedStatesStateCode.AP],
  [UnitedStatesStateName.Arkansas]:
    UnitedStatesStateCode[UnitedStatesStateCode.AR],
  [UnitedStatesStateName.Arizona]:
    UnitedStatesStateCode[UnitedStatesStateCode.AZ],
  [UnitedStatesStateName.California]:
    UnitedStatesStateCode[UnitedStatesStateCode.CA],
  [UnitedStatesStateName.Colorado]:
    UnitedStatesStateCode[UnitedStatesStateCode.CO],
  [UnitedStatesStateName.Connecticut]:
    UnitedStatesStateCode[UnitedStatesStateCode.CT],
  [UnitedStatesStateName['Washington DC']]:
    UnitedStatesStateCode[UnitedStatesStateCode.DC],
  [UnitedStatesStateName.Delaware]:
    UnitedStatesStateCode[UnitedStatesStateCode.DE],
  [UnitedStatesStateName.Florida]:
    UnitedStatesStateCode[UnitedStatesStateCode.FL],
  [UnitedStatesStateName.Georgia]:
    UnitedStatesStateCode[UnitedStatesStateCode.GA],
  [UnitedStatesStateName.Guam]: UnitedStatesStateCode[UnitedStatesStateCode.GU],
  [UnitedStatesStateName.Hawaii]:
    UnitedStatesStateCode[UnitedStatesStateCode.HI],
  [UnitedStatesStateName.Iowa]: UnitedStatesStateCode[UnitedStatesStateCode.IA],
  [UnitedStatesStateName.Idaho]:
    UnitedStatesStateCode[UnitedStatesStateCode.ID],
  [UnitedStatesStateName.Illinois]:
    UnitedStatesStateCode[UnitedStatesStateCode.IL],
  [UnitedStatesStateName.Indiana]:
    UnitedStatesStateCode[UnitedStatesStateCode.IN],
  [UnitedStatesStateName.Kansas]:
    UnitedStatesStateCode[UnitedStatesStateCode.KS],
  [UnitedStatesStateName.Kentucky]:
    UnitedStatesStateCode[UnitedStatesStateCode.KY],
  [UnitedStatesStateName.Louisiana]:
    UnitedStatesStateCode[UnitedStatesStateCode.LA],
  [UnitedStatesStateName.Massachusetts]:
    UnitedStatesStateCode[UnitedStatesStateCode.MA],
  [UnitedStatesStateName.Maryland]:
    UnitedStatesStateCode[UnitedStatesStateCode.MD],
  [UnitedStatesStateName.Maine]:
    UnitedStatesStateCode[UnitedStatesStateCode.ME],
  [UnitedStatesStateName.Michigan]:
    UnitedStatesStateCode[UnitedStatesStateCode.MI],
  [UnitedStatesStateName.Minnesota]:
    UnitedStatesStateCode[UnitedStatesStateCode.MN],
  [UnitedStatesStateName.Missouri]:
    UnitedStatesStateCode[UnitedStatesStateCode.MO],
  [UnitedStatesStateName.Mississippi]:
    UnitedStatesStateCode[UnitedStatesStateCode.MS],
  [UnitedStatesStateName.Montana]:
    UnitedStatesStateCode[UnitedStatesStateCode.MT],
  [UnitedStatesStateName['North Carolina']]:
    UnitedStatesStateCode[UnitedStatesStateCode.NC],
  [UnitedStatesStateName['North Dakota']]:
    UnitedStatesStateCode[UnitedStatesStateCode.ND],
  [UnitedStatesStateName.Nebraska]:
    UnitedStatesStateCode[UnitedStatesStateCode.NE],
  [UnitedStatesStateName['New Hampshire']]:
    UnitedStatesStateCode[UnitedStatesStateCode.NH],
  [UnitedStatesStateName['New Jersey']]:
    UnitedStatesStateCode[UnitedStatesStateCode.NJ],
  [UnitedStatesStateName['New Mexico']]:
    UnitedStatesStateCode[UnitedStatesStateCode.NM],
  [UnitedStatesStateName.Nevada]:
    UnitedStatesStateCode[UnitedStatesStateCode.NV],
  [UnitedStatesStateName['New York']]:
    UnitedStatesStateCode[UnitedStatesStateCode.NY],
  [UnitedStatesStateName.Ohio]: UnitedStatesStateCode[UnitedStatesStateCode.OH],
  [UnitedStatesStateName.Oklahoma]:
    UnitedStatesStateCode[UnitedStatesStateCode.OK],
  [UnitedStatesStateName.Oregon]:
    UnitedStatesStateCode[UnitedStatesStateCode.OR],
  [UnitedStatesStateName.Pennsylvania]:
    UnitedStatesStateCode[UnitedStatesStateCode.PA],
  [UnitedStatesStateName['Puerto Rico']]:
    UnitedStatesStateCode[UnitedStatesStateCode.PR],
  [UnitedStatesStateName['Rhode Island']]:
    UnitedStatesStateCode[UnitedStatesStateCode.RI],
  [UnitedStatesStateName['South Carolina']]:
    UnitedStatesStateCode[UnitedStatesStateCode.SC],
  [UnitedStatesStateName['South Dakota']]:
    UnitedStatesStateCode[UnitedStatesStateCode.SD],
  [UnitedStatesStateName.Tennessee]:
    UnitedStatesStateCode[UnitedStatesStateCode.TN],
  [UnitedStatesStateName.Texas]:
    UnitedStatesStateCode[UnitedStatesStateCode.TX],
  [UnitedStatesStateName.Utah]: UnitedStatesStateCode[UnitedStatesStateCode.UT],
  [UnitedStatesStateName.Virginia]:
    UnitedStatesStateCode[UnitedStatesStateCode.VA],
  [UnitedStatesStateName['Virgin Islands']]:
    UnitedStatesStateCode[UnitedStatesStateCode.VI],
  [UnitedStatesStateName.Vermont]:
    UnitedStatesStateCode[UnitedStatesStateCode.VT],
  [UnitedStatesStateName.Washington]:
    UnitedStatesStateCode[UnitedStatesStateCode.WA],
  [UnitedStatesStateName.Wisconsin]:
    UnitedStatesStateCode[UnitedStatesStateCode.WI],
  [UnitedStatesStateName['West Virginia']]:
    UnitedStatesStateCode[UnitedStatesStateCode.WV],
  [UnitedStatesStateName.Wyoming]:
    UnitedStatesStateCode[UnitedStatesStateCode.WY],
};

export const getUnitedStatesStateName = (
  stateCode: UnitedStatesStateCode | string,
): string => {
  if (typeof stateCode === 'string') {
    var enumValue: UnitedStatesStateCode = (<any>UnitedStatesStateCode)[
      stateCode
    ];

    if (enumValue !== undefined) {
      return unitedStatesStateCodeToName[enumValue];
    }

    throw new Error(`Unknown state code: '${stateCode}'`);
  }

  return unitedStatesStateCodeToName[stateCode];
};

export const getUnitedStatesStateCode = (
  stateName: UnitedStatesStateName | string,
): string => {
  if (typeof stateName === 'string') {
    var enumValue: UnitedStatesStateName = (<any>UnitedStatesStateName)[
      stateName
    ];

    if (enumValue !== undefined) {
      return unitedStatesStateNameToCode[enumValue];
    }

    throw new Error(`Unknown state name: '${stateName}'`);
  }

  return unitedStatesStateNameToCode[stateName];
};
