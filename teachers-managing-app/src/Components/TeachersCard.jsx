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
font-size:25px;
padding-left:10%;
line-height:40px;
padding-top:20px;


`
const Classes=styled.div`

width:50%;
background-color:green;



`



export const Teacherscard=()=>{




return (
<>

<Wrapper>

<div style={{display:"flex"}}>
<Imageholder width="50%" height="220px">
<Img src="https://1.bp.blogspot.com/-zutAhAZSDxQ/XVNxDdWteVI/AAAAAAAALys/iczLli7tjs8rxrENka3tJQTsNKZuO3t1ACLcBGAs/s1600/IMG_20190814_075421_289.jpg"/>
</Imageholder>


<TeacherDetails>

<div>NAME: {"EMILY"}</div>
<div>GENDER: {"FEMALE"}</div>
<div>AGE:25</div>
<div>NumberOfClasses:10</div>

</TeacherDetails>
</div>

</Wrapper>






</>
)
}