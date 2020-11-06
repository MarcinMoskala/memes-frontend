import React, {useEffect, useState} from 'react';
import './App.css';
import {useForm} from "react-hook-form";
import {useWebSocket} from "react-use-websocket/dist/lib/use-websocket";
import {ReadyState} from "react-use-websocket/dist";

const baseUrl = "localhost:8080"

function App() {
    const [memes, setMemes] = useState<Memes>();
    const [image, setImage] = useState<string>();
    const {sendMessage, lastMessage, readyState,} = useWebSocket(`ws://${baseUrl}/ws`);
    const {register, handleSubmit, errors} = useForm<Meme>();

    useEffect(() => {
        if (lastMessage && lastMessage?.data) {
            let memes = JSON.parse(lastMessage.data);
            setMemes(memes)
        }
    }, [lastMessage])

    const sendMeme = (meme: Meme) => {
        fetch(`http://${baseUrl}/meme/imgSrc`, {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({
                ...meme,
                ...(image ? {imgBase64: image} : {})
            })
        })
    }

    const deleteMeme = (memeId: string) => {
        fetch(`http://${baseUrl}/meme/${memeId}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json",}
        })
    }

    const likeMeme = (memeId: string) => {
        fetch(`http://${baseUrl}/meme/${memeId}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json",}
        })
    }

    const addImage = (event: any) => {
        let file = event.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            setImage(reader.result as string)
        }
        reader.readAsDataURL(file)
    }

    return <div className="App">
        {readyState === ReadyState.OPEN ? "Connected" : "Not connected"}

        {memes && memes.memes && memes.memes.map(meme => <div>
            {meme.title && <h1>{meme.title}</h1>}
            <img alt="meme"
                 src={meme.imgBase64 ?? meme.imgSrc ?? "https://image.shutterstock.com/image-vector/no-sign-isolated-on-white-260nw-323390270.jpg"}/>
            {meme.text && <div>{meme.text}</div>}
            <div>{"Author: " + meme.author}</div>
            <div onClick={() => deleteMeme(meme.id)}>Delete</div>
            <div onClick={() => likeMeme(meme.id)}>Like {meme.likes != null ? meme.likes : '0'}</div>
            <div style={{marginBottom: "40px"}}/>
        </div>)}

        <form onSubmit={handleSubmit(sendMeme)}>
            {image && <img src={image}/>}
            <fieldset>
                <div>
                    <label htmlFor="author">Autor</label>
                    <input type="text" name="author" id="author" ref={register({required: "Wymagane"})}/>
                    {errors.author && errors.author.message}
                </div>

                <input type="file" onChange={addImage}/>

                {!image &&
                <div>
                    <label htmlFor="imgSrc">Img src</label>
                    <input type="text" name="imgSrc" id="imgSrc" ref={register({required: "Wymagane"})}/>
                    {errors.imgSrc && errors.imgSrc.message}
                </div>
                }

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
    id: string,
    author: string,
    title: string | null,
    imgBase64: string | null,
    text: string | null,
    imgSrc: string | null,
    likes: number | null,
}

const urlToData = (url: string) => fetch(url)
    .then(response => response.blob())
    .then(blob => new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsDataURL(blob)
    }))