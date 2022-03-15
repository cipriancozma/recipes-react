import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { Button, DetailsWrapper, Info } from '../ui/DetailsWrapper';

function Recipe() {
    const [details, setDetails] = useState({})
    const [active, setActive] = useState('instructions')
    let params = useParams();

    useEffect(() => {
        fetchDetails()
    }, [params.name])

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const response = await data.json();
        setDetails(response)
    }

    return (
        <DetailsWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title} />
            </div>
            <Info>
                <Button onClick={() => setActive("instructions")} className={active === 'instructions' ? 'active' : ''}>
                    Instructions
                </Button>
                <Button onClick={() => setActive("ingredients")} className={active === 'ingredients' ? 'active' : ''}>
                    Ingredients
                </Button>
                {active === "instructions" ? 
                    <div>
                        <h3 dangerouslySetInnerHTML={{__html: details.summary}}>
                        </h3>
                        <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
                    </div> :
                    <ul>
                    {details.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        )
                    )}
                    </ul>
                }
            </Info>
        </DetailsWrapper>
    )
}

export default Recipe
