export interface RootObjectMMarket {
  code: number;
  message: string;
  data: Data;
}

export interface Data {
  total: number;
  rows: Row[];
}

export interface Row {
  id: number;
  volume: number;
  gain: string;
  price: number;
  fPrecision: number;
  sPrecision: number;
  fTokenName: string;
  sTokenName: string;
  fShortName: string;
  sShortName: string;
  fTokenAddr: string;
  sTokenAddr: string;
  highestPrice24h: number;
  lowestPrice24h: number;
  volume24h: number;
  unit: string;
  pairType: number;
}