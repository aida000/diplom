import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { addToMedacin } from "../store/reducer";
import './news.css'


const News = () => {
  
   
    const data = useSelector(st => st)
    console.log(data);
    const dispatch=useDispatch()
    // console.log(params.id);
    

    return ( <>
    <hr></hr>
         <h1 className="title">ԼՈՒՐԵՐ&nbsp;<i class="fas fa-newspaper"></i></h1>
        <div className="par">
          
            {
                data.arr.map((e, i) => {
                        return (
                            <div key={i} className='child' >
                               <div>
                                    <img src={e.img} className='newsImg'></img>
                                    <div className="text">
                                    <p className="p">{e.name}</p>
                                    <p className="date">{e.date}</p>
                                    <p className="body">{e.body}...</p>

                                    </div>

                            </div>
                        </div>
                        )
                })

            }


        </div>
</>
    )
}
export default News