import Card from "../components/Card";

const Cards = () =>{
    return (
    <>
    <section className="row p-2">
    <Card
    thumbnail="https://images.app.goo.gl/rohDGyDzLQreKPZF6"
    title="WORLD OF WARCRAFT"
    developer="Blizzard Entertainment"
    genre="MMO-RPG"
    price="3000"
    />
    <Card
    thumbnail="https://images.app.goo.gl/tPxp9wNUDFafzD7T7"
    title="GOD OF WAR"
    developer="Santa Monica Studios"
    genre="RPG-Acción"
    price="2500"/> 
    <Card
    thumbnail=""
    title="SUPER MARIO BROS"
    developer="Nintendo"
    genre="Plataformas"
    price="2500"/> 
    <Card
    thumbnail=""
    title="THE LEGEND OF ZELDA"
    developer="Nintendo"
    genre="RPG-Aventuras"
    price="1000"/> 
    <Card
    thumbnail=""
    title="RED DEAD REDEMPTION 2"
    developer="Rockstar Games"
    genre="Sandbox-Aventuras"
    price="3000"/> 
    <Card
    thumbnail=""
    title="ELDEN RING"
    developer="FromSoftware"
    genre="RPG-Acción"
    price="3500"/> 
    </section>
    </>
    )
   }

   export default Cards;