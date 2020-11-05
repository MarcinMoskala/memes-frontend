import React, {useEffect, useState} from 'react';
import './App.css';
import {useForm} from "react-hook-form";
import {useWebSocket} from "react-use-websocket/dist/lib/use-websocket";
import {ReadyState} from "react-use-websocket/dist";

function App() {
    const [memes, setMemes] = useState<Memes>();
    const {sendMessage, lastMessage, readyState,} = useWebSocket("ws://localhost:8080/ws");
    const {register, handleSubmit, errors} = useForm<Meme>();

    useEffect(() => {
        console.log("Last message ", lastMessage)
        console.log("Last message data ", lastMessage?.data)
        if (lastMessage && lastMessage?.data) {
            let memes = JSON.parse(lastMessage.data);
            console.log("Setting memes ", memes)
            setMemes(memes)
        }
    }, [lastMessage])

    const sendMeme = (meme: Meme) => {
        console.log(`Sending ${JSON.stringify(meme)}`)
        sendMessage(JSON.stringify(meme))
    }

    return <div className="App">
        {readyState === ReadyState.OPEN ? "Connected" : "Not connected"}

        {memes && memes.memes && memes.memes.map(meme => <div>
            {meme.title && <h1>{meme.title}</h1>}
            <img alt="meme" src={meme.imgSrc ?? "https://image.shutterstock.com/image-vector/no-sign-isolated-on-white-260nw-323390270.jpg"}/>
            {meme.text && <div>{meme.text}</div>}
            <div style={{marginBottom: "40px"}}>{"Author: " + meme.author}</div>
        </div>)}

        <form onSubmit={handleSubmit(sendMeme)}>
            <fieldset>
                <div>
                    <label htmlFor="author">Autor</label>
                    <input type="text" name="author" id="author" ref={register({required: "Wymagane"})}/>
                    {errors.author && errors.author.message}
                </div>

                <div>
                    <label htmlFor="imgSrc">Img src</label>
                    <input type="text" name="imgSrc" id="imgSrc" ref={register({required: "Wymagane"})}/>
                    {errors.imgSrc && errors.imgSrc.message}
                </div>

                <div>
                    <label htmlFor="text">Komentarz</label>
                    <input type="text" name="text" id="senderName" ref={register()}/>
                    {errors.text && errors.text.message}
                </div>

                <div>
                    <input type="submit" className="button" id="submit" value="Wyślij"/>
                </div>
            </fieldset>
        </form>
    </div>;
}

export default App;

type Memes = {
    memes: Meme[]
}

type Meme = {
    author: string,
    title: string | null,
    text: string | null,
    imgSrc: string | null,
}