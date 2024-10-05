import Link from 'next/link';
import countries from "../../countries_data/countries";

export default function Home() {
  return (
    <div>
      <h1 >Country List</h1>
      <ul>
        {Object.keys(countries).map((countryKey) => (
          <li key={countryKey}>
            <Link href={`/country/${countryKey}`}>{countries[countryKey].name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}