import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Wrapper } from "../ui/Wrapper";
import { Card } from "../ui/Card";
import { Gradient } from "../ui/Gradient";
import { Link } from 'react-router-dom'

function Veggie() {
    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
      getVeggie();
    }, []);
  
    const getVeggie = async () => {
  
      const check = localStorage.getItem('veggie');
      if(check) {
        setVeggie(JSON.parse(check))
      } else {
          const api = await fetch(
              `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`
            );
            const data = await api.json();
            localStorage.setItem('veggie', JSON.stringify(data.recipes))
            setVeggie(data.recipes);
      }
    };
    return (
        <div>
          <Wrapper>
            <h3>Vegetarian</h3>
            <Splide options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: "free",
                gap: '3rem'
            }}>
              {veggie.map((recipe) => {
                return (
                  <SplideSlide key={recipe.id}>
                    <Card>
                      <Link to={"/recipe/" + recipe.id}>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title} />
                        <Gradient />
                      </Link>
                    </Card>
                  </SplideSlide>
                );
              })}
            </Splide>
          </Wrapper>
        </div>
      );
}

export default Veggie
