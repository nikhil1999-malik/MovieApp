import { useState } from "react";
import styled from "styled-components";
import MovieListContainer from "./MovieListContainer";
import axios from "axios"
import SelectedMovie from "./SelectedMovie";
import {FaVimeo,FaUserFriends} from "react-icons/fa";
import gif from "./giphy.gif"; 

const APIKEy='68ef8855';



const Container= styled.div`
display:flex ;
flex-direction:column ;
`;

const Header=styled.div`
display: flex;
flex-direction:row ;
background-color:black ;
color:white ;
padding:10px ;
`;

const AppName=styled.div`
display:flex ;
flex-direction:row ;
align-items:center ;
flex:1 ;
`;

const MovieImage=styled.div`
width:48px ;
height:48px ;
margin:15px ;
font-size:50px ;
`;

const FrontText=styled.div`
font-size:50px ;
`;

const SearchBox=styled.div`
display:flex ;
flex-direction:row ;
padding:10px 10px ;
background-color:white ;
border-radius:6px ;
margin-left:20px ;
width:50% ;
flex:1 ;
align-items:center ;
`;

const SearchIcon=styled.img`
width: 32px;
height:32px ;
`;

const FrontContainer=styled.div`
display:flex ;
flex-direction:column ;
justify-content:center ;
align-items:center ;
`;

const Searchinput= styled.input`
color:black ;
font-size:16px ;
font-weight:bold ;
border:none ;
outline:none ;
margin-left:15px ;
`;

const GifContainer=styled.div`
width:100% ;
display:flex ;
justify-content:flex-end ;


`;

const GifImg=styled.img`
display:flex ;
flex-direction:row ;
animation-name: walking ;
animation-duration:8s ;
animation-iteration-count:1 ;

@keyframes walking{
  0% {transform:100%}
  100% {transform:0%}
}
`;

const MovieContainer=styled.div`
display:flex ;
flex-direction:row ;
flex-wrap:wrap ;
padding:10px ;
justify-content:space-evenly ;
`;

const Wave=styled.div`
display:flex ;
flex-direction:row ;
animation-name: wave-animation ;
animation-duration:2s ;
animation-iteration-count:infinite ;

@keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
  100% { transform: rotate( 0.0deg) }
}

`; 

const WaveEmoji=styled.div`
font-size:200px ;
justify-content:center ;
align-items:center ;
`;

function App() {

  const [search,Setsearch]=useState();
  const [data,setData]=useState([]);
  const [select, setselect]=useState();




  const fetchData=async(search)=>{
    const res=await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=${APIKEy}`);
    setData(res.data.Search);
  }

  const onTextChange=(e)=>{
    Setsearch(e.target.value);
    fetchData(search);
  }
  

  return (
   <Container>
    <Header>
      <AppName>
        <MovieImage><FaVimeo/></MovieImage>
        Movie Searcher
      </AppName>
      <SearchBox>
        <FaUserFriends/>
        <Searchinput placeholder="Search For Movie" value={search} onChange={onTextChange}/>
      </SearchBox>
    </Header>
    {select && <SelectedMovie setselect={setselect} select={select}/>}
    <MovieContainer>
      {
        data?.length ? data.map((movie,index)=><MovieListContainer setselect={setselect} key={index} movie={movie}/>)
        :(<>
        <FrontContainer>
        <Wave><WaveEmoji>👋</WaveEmoji></Wave>
        <FrontText>Get Your Fav. Movie Info Here</FrontText>
        </FrontContainer>
        </>)
      }
    </MovieContainer>


   </Container>
  );
}

export default App;
