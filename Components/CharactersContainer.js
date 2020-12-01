export default ({characters}) => (
    <section className="characters-container">
        {
            characters.map( character => (
                <div className="card">
                    <h1>{character.name}</h1>
                    <img src={character.image} />
                </div>
            ))
        }
    </section>
)