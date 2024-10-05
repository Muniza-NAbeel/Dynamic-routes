import Link from 'next/link';
import countries from "../../../../countries_data/countries";


type CountryPageProps = {
    params: { country_name: string };
};

export default function CountryPage({ params }: CountryPageProps) {
    const { country_name } = params;
    const country = countries[country_name];

    if (!country) {
        return <h1>Country not found.</h1>;
    }

    return (
        <div>
            <h1>{country.name}</h1>
            <p>Population: {country.population}</p>
            <p>Capital: {country.capital}</p>
            <Link href="/">
                Back to Country List
            </Link>
        </div>
    );
}
