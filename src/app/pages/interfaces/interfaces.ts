export interface RootObject10 {
  total: number;
  data: Datum[];
  totalAll: number;
}
// ctrl + alt + v
export interface Datum {
  totalTransactions: number;
  country: string;
  tokenID: number;
  participated: number;
  precision: number;
  num: number;
  available: number;
  reputation: string;
  description: string;
  issuedPercentage: number;
  nrOfTokenHolders: number;
  voteScore: number;
  dateCreated: number;
  price: number;
  percentage: number;
  startTime: number;
  id: number;
  issued: number;
  trxNum: number;
  abbr: string;
  website: string;
  github: string;
  availableSupply: number;
  totalSupply: number;
  index: number;
  frozenTotal: number;
  frozen: any[];
  canShow: number;
  remaining: number;
  url: string;
  frozenPercentage: number;
  imgUrl?: string;
  isBlack: boolean;
  remainingPercentage: number;
  name: string;
  ownerAddress: string;
  endTime: number;
  white_paper: string;
  social_media: Socialmedia[];
}

export interface Socialmedia {
  name: string;
  url: string;
}