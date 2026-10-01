// import { Suspense, useState } from 'react'
import { Suspense } from 'react';
import './App.css'
import type { CountryType } from './type';
import Countries from './component/Countries';

//step 1: create a function to fetch data from api
const countriPromise = async ():Promise<CountryType[]> => {
  const res = await fetch('https://openapi.programming-hero.com/api/all')
  const data = await res.json()
  return data.countries;
}


const countriesPromise = countriPromise();

function App() {
  return (
    <>
   
    <h1>Countries</h1>
     <p>
      Total visited countries: 0
    </p>
    <Suspense fallback="Loading...">
      <Countries countriesPromis={countriesPromise}></Countries>

    </Suspense>
    
    </>
  )
}

export default App
