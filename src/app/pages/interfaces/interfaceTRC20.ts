export interface RootObject {
  total: number;
  rangeTotal: number;
  trc20_tokens: Trc20token[];
}

export interface Trc20token {
  icon_url: string;
  issue_ts: number;
  symbol: string;
  total_supply: number;
  total_supply_str: string;
  volume24h: number;
  index: number;
  contract_address: string;
  gain: string;
  home_page: string;
  volume: number;
  issue_address: string;
  token_desc: string;
  price_trx: number;
  git_hub: string;
  price: string;
  total_supply_with_decimals: string;
  decimals: number;
  name: string;
  social_media_list: Socialmedialist[];
  issue_time: string;
  white_paper: string;
  social_media: string;
}

export interface Socialmedialist {
  name: string;
  url: string;
}
