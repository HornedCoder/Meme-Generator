import React from 'react'

export default function Main() {
    const [meme, setMeme] = React.useState({
        topText: "One Does Not Simply",
        bottomText: "Walk into Mordor",
        memeUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(()=>{
        fetch(' https://api.imgflip.com/get_memes')
        .then(res=>res.json())
        .then(data=> setAllMemes(data.data.memes))
    },[])

    function showImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        setMeme(prev=>({
            ...prev,
            memeUrl : allMemes[randomNumber].url 
        }))
    }

    function handleChange(event){
        const {value, name} = event.currentTarget
        setMeme(prev=> ({
            ...prev,
            [name] : value
        }))
    }
    return (
        <>
            <main>
                <div className="form">
                    <label>Top Text
                        <input type="text" name="topText" value={meme.topText} onChange={handleChange}></input>
                    </label>
                    <label>Bottom Text
                        <input type="text" name="bottomText" value={meme.bottomText} onChange={handleChange}></input>
                    </label>
                </div>
                <button onClick={showImage}> Get a new meme image</button>
                <div className="meme">
                    <img src={meme.memeUrl}></img>
                    <span className="top">{meme.topText}</span>
                    <span className="bottom">{meme.bottomText}</span>
                </div>
            </main>
        </>
    )
}