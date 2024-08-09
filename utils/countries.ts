import _countries from 'world-countries';

export const countries = _countries.map((country) => {
  return {
    code: country.cca2,
    name: country.name.common,
    flag: country.flag,
    location: country.latlng,
    region: country.region,
  };
});

export const findCountryByCode = (code: string) => {
  return countries.find((country) => country.code === code);
};
