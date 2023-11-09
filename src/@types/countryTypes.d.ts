export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      eng: {
        official: string;
      };
    };
  };
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
}
