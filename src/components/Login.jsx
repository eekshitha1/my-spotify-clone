import React from "react";
import styled from 'styled-components';

export default function Login(){
    const handleClick=()=>{
        const clientId = "0583c15bc78d4b5fba1b832b4c41b741";
        const redirectUrl = "http://localhost:3000/";
        const apiUrl = "https://accounts.spotify.com/authorize";
        const scope = ["user-read-email", "user-read-private", 
        "user-modify-playback-state", "user-read-playback-state",
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-position",
        "user-top-read"
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`;


    };
    return <Container>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="Spotify Logo" />
        <button onClick={handleClick}>Connect to Spotify</button>
    </Container>;
   
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    height: 100vh;
    width: 100vw;
    background-color:black;
    gap:5rem;
    img{
        height: 20vh;
    }
    button{
       padding: 1rem 4rem;
       border-radius: 4rem; 
       background-color:#1db954;
       font-size: 1.3rem;
       cursor:pointer;
    }
`;