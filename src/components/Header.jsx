import TrollFace from "C:/ReactProjects/meme-generator/src/assets/Troll Face-1.png"
export default function Header(){
    return(
        <>
            <header>
                <img src={TrollFace}></img>
                <h2>Meme Generator</h2>
            </header>
        </>
    )
}