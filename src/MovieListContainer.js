import styled from "styled-components";

const MovieContainer=styled.div`
display:flex ;
flex-direction:column ;
padding:10px ;
width:280px ;
box-shadow:0 3px 10px 0 #aaa ;
cursor:pointer ;
`;

const CoverImage= styled.img`
height:362px ;
`;
const MovieName = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.8;
  }
`;

const InfoColumn=styled.div`
display:flex ;
flex-direction:row ;
color:black ;
text-transform:capitalize ;
justify-content:space-between ;
`;

const MovieInfo=styled.span`
font-size:16px ;
font-weight:500 ;
color: black;
text-transform:capitalize;
`;

const MovieListContainer=({movie,setselect})=>{

    const {Title, Year, imdbID, Type, Poster}=movie;

return <MovieContainer onClick={()=>{setselect(imdbID)}}>
           <CoverImage src={Poster}/>
           
           <MovieName>{Title}</MovieName>
           <InfoColumn>
            <MovieInfo>Year: {Year}</MovieInfo>
            <MovieInfo>Genre: {Type}</MovieInfo>
           </InfoColumn>
       </MovieContainer>
}

export default MovieListContainer;