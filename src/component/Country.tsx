import './Country.css';
import type { CountryType } from '../type';
import { useState } from 'react';
export interface CountryProps {
    country: CountryType;
}
export default function Country({ country }: CountryProps) {
    console.log(country);
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div className="country">
            <p>Total visited countries: {count}</p>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Official Name: {country.name.official}</p>
            <p>Capital: {country.capital.capital}</p>
            <p>CCN3: {country.ccn3.ccn3}</p>
            <button onClick={handleClick}>add visit</button>
            



        
            
        </div>
        
    );
}

