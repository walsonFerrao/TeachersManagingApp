import styled from "styled-components"



const Wrapper=styled.div`

background-color:grey;
width:45%;

`

const Imageholder=styled.div`

background-color:grey;
width:${(props)=>props.width};
height:${(props)=>props.height};
`


const Img=styled.img`
width:100%;
height:100%;
`

const TeacherDetails=styled.div`
width:60%;
font-size:20px;
padding-left:10%;
line-height:40px;
padding-top:20px;


`
const Span=styled.span`

font-size:20px;
color:black;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;



`



export const Teacherscard=({name,age,gender,classlength,img})=>{




return (
<>

<Wrapper>

<div style={{display:"flex"}}>
<Imageholder width="50%" height="220px">
<Img src={img?img:"https://1.bp.blogspot.com/-zutAhAZSDxQ/XVNxDdWteVI/AAAAAAAALys/iczLli7tjs8rxrENka3tJQTsNKZuO3t1ACLcBGAs/s1600/IMG_20190814_075421_289.jpg"}/>
</Imageholder>


<TeacherDetails>

<div><Span>NAME:</Span>  {name}</div>
<div> <Span>GENDER:</Span> {age}</div>
<div><Span>AGE:</Span>{gender}</div>
<div><Span>NumberOfClasses:</Span>{classlength}</div>

</TeacherDetails>
</div>

</Wrapper>






</>
)
}