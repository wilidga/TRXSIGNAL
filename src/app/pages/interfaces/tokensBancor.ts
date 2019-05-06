export interface RootObjectMarket {
  total: number;
  Data: DatumMarket[];
}

export interface DatumMarket {
  first_token_id: string;
  up_down_percent: string;
  second_token_balance: number;
  exchange_name: string;
  volume: string;
  second_token_abbr: string;
  exchange_id: number;
  high: string;
  first_token_balance: number;
  low: string;
  price: number;
  first_owner_address: string;
  creator_address: string;
  svolume: string;
  first_token_abbr: string;
  exchange_abbr_name: string;
  second_token_id: string;
  status: string;
}