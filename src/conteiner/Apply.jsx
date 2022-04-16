import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { addToMedacin } from "../store/reducer";
import './news.css'


const Apply = () => {
  
    // console.log(params.id);
    

    return ( <>
    <hr></hr>
       <h1 className="title">Ուսանողական ընդունելություն &nbsp;<i class="fas fa-pen"></i></h1>
       <div className="par">

       <img src="/image/book.jpg" className="stud"></img>
       <div  className="miban">

ՀՀ կրթության, գիտության, մշակույթի և սպորտի նախարարությունում քաղաքացիների ընդունելությունն անցկացվում է.
<ul>
    <li>նախարարի մոտ՝ ամեն ամսվա վերջին շաբաթվա ընթացքում՝ նախապես համաձայնեցված և հայտարարված օրը և ժամին,</li>
    <li>
կրթության ոլորտը համակարգող նախարարի տեղակալների մոտ՝ ամեն ուրբաթ, ժամը 12:00-14:00 և ամեն հինգշաբթի օր, ժամը 9:30-11:30,</li>
<li>մշակույթի ոլորտը համակարգող նախարարի տեղակալների մոտ՝ ամեն ուրբաթ, ժամը 16:00-18:00 և 14:00-16:00,</li>
<li>
սպորտի և երիտասարդության ոլորտը համակարգող նախարարի տեղակալի մոտ՝ ամեն ուրբաթ, ժամը 9:00-11:00,</li>
<li>


նախարարության գլխավոր քարտուղարի մոտ՝ ամեն հինգշաբթի, ժամը՝ 16:00-18:00 (անհրաժեշտության դեպքում ընդունելությունները կազմակերպվում են փոխհամաձայնեցված ժամկետում),
</li>
</ul>

       </div>
       </div>
        </>
    )
}
export default Apply