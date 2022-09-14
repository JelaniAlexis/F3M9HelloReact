import "./Card.css";

const Card2 = () => {
    const greetText = () => {
        console.log("Greetings from card 2");
    }

    return(
        <article onClick={greetText}>
            <header>
                <h2>Card 2</h2>
            </header>
            <section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptate quisquam, reiciendis enim beatae hic, laudantium maiores quod, expedita rem voluptas alias. Dolorum facilis magnam sint accusantium veritatis, hic fugit.
            </section>
        </article>
    )
}

export default Card2;