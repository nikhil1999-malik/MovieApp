import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
const APIKEy='68ef8855';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  justify-content: center;
  border-bottom: 1px solid lightgray;
  width:600px ;
`;

const CoverImage=styled.img`
object-fit:cover ;
height:352px ;
`;

const InfoContainer=styled.div`
display:flex ;
flex-direction:column ;
margin:20px ;
`;

const MovieName=styled.div`
font-size:22px ;
font-weight:600 ;
color:black ;
margin:15px 0 ;
white-space:nowrap ;
overflow:hidden ;
text-transform:capitalize ;
text-overflow:ellipsis ;
`;

const Close=styled.div`
font-size:16px;
font-weight:600 ;
color:black ;
background:lightgray ;
height:fit-content ;
padding:8px ;
border-radius:50% ;
cursor:pointer;
opacity:0.8 ;
`;

const Loading= styled.div`
border:16px solid #f3f3f3 ;
border-top:16px solid #3498db ;
border-radius:50% ;
width:120px ;
height:120px ;
animation:spin  2s linear infinite;

@keyframes spin {
    0% {transform: rotate(0deg);}
    100% {transform:rotate(360deg);}
}
`;

const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  overflow: hidden;
  margin: 4px 0;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.5;
  }
`;

function SelectedMovie({select,setselect}) {

    const [movieInfo, setMovieInfo]=useState();

    useEffect(()=>{
         axios.get(`https://www.omdbapi.com/?i=${select}&apikey=${APIKEy}`)
         .then((res)=>{
              setMovieInfo(res.data);
         },[select]);
    })
  return (
    <Container>
        {movieInfo ? (
            <>
        <CoverImage src={movieInfo?.Poster} alt={movieInfo?.Title} />
        <InfoContainer>
            <MovieName>Movie:{movieInfo?.Title}</MovieName>
            <MovieInfo>IMDB Rating:{movieInfo?.imdbRating}</MovieInfo>
            <MovieInfo>Language:{movieInfo?.Language}</MovieInfo>
            <MovieInfo>Rated:{movieInfo?.Rated}</MovieInfo>
            <MovieInfo>Runtime:{movieInfo?.Runtime}</MovieInfo>
            <MovieInfo>Genre:{movieInfo?.Genre}</MovieInfo>
            <MovieInfo>Director:{movieInfo?.Director}</MovieInfo>
            <MovieInfo>Actors:{movieInfo?.Actors}</MovieInfo>
            <MovieInfo>Plor:{movieInfo?.Plot}</MovieInfo>
        </InfoContainer>
        <Close onClick={()=>{setselect()}}>X</Close>
        </>
        ): (<Loading/>)}
        
    </Container>
  )
}

export default SelectedMovie