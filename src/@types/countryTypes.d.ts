export interface CountryNames {
  common: string;
  official: string;
  nativeName: Record<
    string,
    {
      common: string;
    }
  >;
}

export interface Country {
  name: CountryNames;
  flags: {
    svg: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  tld: string[];
  currencies: Record<string, { name: string }>;
  languages: Record<string, string>;
  borders: string[];
}
