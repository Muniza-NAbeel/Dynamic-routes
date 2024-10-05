import countries from '@/app/countries/page';

type CountryPageProps = {
    params: { country_name: string };
};

export default function CountryPage({ params }: CountryPageProps) {
    const { country_name } = params;
    const country = countries[country_name];

    if (!country) {
        return (
        <>
          <h1>Country not found.</h1>
        <a href="/">Back to Country List</a>
        </>
        )
    }

    return (
           <>
            <h1>{country.name}</h1>
            <p>Population: {country.population}</p>
            <p>Capital: {country.capital}</p>
            <a href="/">
                Country List
            </a>
            </>
    );
}