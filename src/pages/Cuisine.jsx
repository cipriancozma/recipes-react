import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import { Link, useParams } from 'react-router-dom';
import { Grid } from '../ui/Grid';
import { Card } from '../ui/Card';


function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=10&cuisine=${name}`)
        const recipes = await data.json();
        setCuisine(recipes.results)
    }

    useEffect(() => {
        getCuisine(params.type)
    }, [params.type])

    return (
        <Grid 
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
        >
            {cuisine.map((item) => {
                return (
                    <Card key={item.id}>
                        <Link to={"/recipe/" + item.id}>
                            <img src={item.image} alt={item.title} />
                            <h4>{item.title}</h4>
                        </Link>
                    </Card>
                )
            })}
        </Grid>
    )
}

export default Cuisine
