import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card } from '../ui/Card';
import { Grid } from '../ui/Grid';

function Searched() {
    const [searched, setSearched] = useState([]);
    let params = useParams();

    useEffect(() => {
        getSearched(params.search)
    }, [params.search])

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=10&query=${name}`)
        const recipes = await data.json();
        setSearched(recipes.results)
    }

    return (
       <Grid>
           {
               searched.map((el) => {
                   return (
                       <Card key={el.id}>
                           <Link to={"/recipe/" + el.id}>
                                <img src={el.image} alt={el.title} />
                                <h4>{el.title}</h4>
                           </Link>
                       </Card>
                   )
               })
           }
       </Grid>
    )
}

export default Searched
