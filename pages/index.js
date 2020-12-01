import Layout from '../Components/layout'
import {useEffect, useState} from 'react'
import CharactersContainer from '../Components/CharactersContainer'

const Index = ( props ) => {
    const [count, setCount] = useState(0)
    const [characters, setCharacters] = useState([])

    useEffect( async () => {
            let response = await fetch('https://rickandmortyapi.com/api/character')
            let parsedResponse = await response.json()
            setCharacters( parsedResponse.results )
    }, [])


    return (
        <Layout>
            <h1>Your count is: {count}</h1>
            <button onClick={() => setCount(count + 1) }>+</button>
            <CharactersContainer characters={props.characters}/>
        </Layout>
    )
}

Index.getInitialProps = async ( props ) => {
    const response = await fetch('https://rickandmortyapi.com/api/character')

    const data = await response.json()

    return {
        characters: data.results
    };
}

export default Index