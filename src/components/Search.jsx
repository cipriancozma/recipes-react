import React, { useState } from 'react'
import {FormStyle} from "../ui/FormStyle";
import { useNavigate } from 'react-router-dom';

function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/searched/${input}`)
        setInput("");
    }

    return (
        <FormStyle onSubmit={submitHandler}>
            <form>
                <div>
                    <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="Search..." value={input}/>
                </div>
            </form>
        </FormStyle>
    )
}

export default Search
