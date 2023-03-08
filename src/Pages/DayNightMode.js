import React,{useEffect,useState} from "react";
import DayNightToggle from 'react-day-and-night-toggle'
import TopNav from "../Shared/TopNav";

const DayNightMode=()=>{
    const[isDarkMode, setIsDarkMode] = useState(
        JSON.stringify(localStorage.getItem("state"))==="null"? false:JSON.parse(localStorage.getItem("state")))
    const[tab,setTab]=useState([])
    const[descript,setDescript]=useState("")
    const[tabImg,setTabImg]=useState("")
    useEffect(()=>{
        localStorage.setItem("state",JSON.stringify(isDarkMode))

        const divData=[{
            "Team":{"description":"A team is defined as a group of people who perform interdependent tasks to work toward accomplishing a common mission or specific objective. Some teams have a limited life: for example, a design team developing a new product, or a continuous process improvement team organized to solve a particular problem.","img_src":"/Team.jpg"}
        
        }
            ,
        {
            "Philosophy":{"description":"The philosophy of any company serves as its blueprint for operation. This statement outlines the overall purpose of the business, along with its goals. A business philosophy might also list the company values that are important to the founders, executives, and employees. The philosophy of a company reflects its leaders' values, helping the business to feel more personal.","img_src":"/Philosophy.jpg"}
        }
        ,
        {
            "Achievement":{"description":"Business Achievement means the level of financial performance of the Company against worldwide, regional, country or division targets established by the Company for that year based on the scope of a participant's role within the Company.","img_src":"/Achievement.jpg"}
        }
    ]
        
        
    
        setTab(divData)
        setDescript(divData[0].Team.description)
        setTabImg(divData[0].Team.img_src)
    },[isDarkMode])

console.log(descript)
    console.log(tab) 
    const mainTitle=tab.map((ele)=>{
        return Object.keys(ele)
    })

    
    console.log(mainTitle)
    
    // console.log(typeof(isDarkMode))
    const handleToggle=()=>{
        setIsDarkMode(!isDarkMode)
        
    }
    isDarkMode===false? localStorage.setItem("sunState",JSON.stringify({"url":"/sunny.jpg","color":"black"})):localStorage.setItem("sunState",JSON.stringify({"url":"/night.jpg","color":"white"}))

    // console.log(typeof(JSON.parse(localStorage.getItem("sunState")).url))
    // console.log(handleToggle)
    const handleTab=(index,ele)=>{
        setTabImg(tab[index][ele].img_src)
        setDescript(tab[index][ele].description)
    }

    return(
        
        <div  style={{justifyContent:"center",marginTop:"56px",height:"100vh",width:"auto",backgroundImage:`url(${JSON.parse(localStorage.getItem("sunState")).url})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",color:`${JSON.parse(localStorage.getItem("sunState")).color}`}}>
                <TopNav/>
            <span style={{fontSize:"20px"}}>Toggle for Dark/Day mode</span><DayNightToggle
            onChange={handleToggle}
            checked={isDarkMode} style={{display:"inline-block"}}
            />
            {/* <h1>Hello</h1> */}
            <br/><br/>
            <div className="div_css">
            {mainTitle.map((ele,i)=>{

                return(
                    <div key={i} style={{display:"inline-block",border:`2px solid ${JSON.parse(localStorage.getItem("sunState")).color}`,cursor:"pointer",margin:"5px",padding:"20px",fontSize:"20px"}} onClick={()=>handleTab(i,ele)}>{ele}</div>
                )
            })}</div>
            <div className="div_css">
            <div style={{width:"80%",border:`2px solid ${JSON.parse(localStorage.getItem("sunState")).color}`,padding:"30px",margin:"20px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <p style={{fontSize:"20px"}}>{descript}</p>
                <br/>
                <img src={`${tabImg}`} style={{height:"300px",margin:"20px"}}alt=""/>
            </div>
            </div>
        </div>
    )
}

export default DayNightMode;