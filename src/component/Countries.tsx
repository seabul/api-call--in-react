// import { use } from 'react';
// import type { CountryType } from '../type';

// export interface CountryProps {
//     countriesPromis: Promise<CountryType[]>;
// }

// export default function Countries({ countriesPromis }: CountryProps) {
//     const countries = use(countriesPromis);
//     console.log(countries);
//         return (
//         <div>
//             <h1>Countries</h1>
            
//           </div>
// }
import './Countries.css';
import { use } from 'react';
import type { CountryType } from '../type';
import Country from './Country';

interface CountriesProps {
    countriesPromis: Promise<CountryType[]>;
}

export default function Countries({ countriesPromis }: CountriesProps) {
    const countries = use(countriesPromis);
    console.log(countries);
    
    return (
        <div>
            <p className="countries-count">Total Countries: {countries.length}</p>
            <div className="countries-container">
                {countries.map((country) => (
                    <Country key={country.name.common} country={country} />
                ))}
            </div>
        </div>
    );
}