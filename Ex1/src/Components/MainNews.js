import React from 'react'
import './MainNews.css'

export default function MainNews(value) {
    return (
        <div className="NewsAling">
           <div>
               
               <div className="News"> <img src="/images/School.jpg" alt=""/></div>
            <div className="NewsInfo">
                <div className="NewsInfoTitle">{value.newstitle}</div> 
                <div>{value.newscontent}</div>
            </div>
            <div className="CNT"> {value.CateNtime} </div> 
           </div>
           <div className="SideBar">
             <div className="SideBarTitle">Luetuimmat</div>
             <div className="SideBarText"> 
               <div className="SideBarTextAling"><b className="SideBarNumber">1</b> <b className="SideBarNumberTitle">{value.Title1}</b> {value.Text1} </div>
               <div className="SideBarTextAling"><b className="SideBarNumber">2</b> <b className="SideBarNumberTitle">{value.Title2}</b> {value.Text2} </div>
               <div className="SideBarTextAling"><b className="SideBarNumber">3</b> <b className="SideBarNumberTitle">{value.Title3}</b> {value.Text3} </div>
               <div className="SideBarTextAling"><b className="SideBarNumber">4</b> <b className="SideBarNumberTitle">{value.Title4}</b> {value.Text4} </div>
               <div className="SideBarTextAling"><b className="SideBarNumber">5</b> <b className="SideBarNumberTitle">{value.Title5}</b> {value.Text5} </div>
               <div className="SideBarTextAling"><b className="SideBarNumber">6</b> <b className="SideBarNumberTitle">{value.Title6}</b> {value.Text6} </div>
               <div className="SideBarTextAling"><b className="SideBarNumber">7</b> <b className="SideBarNumberTitle">{value.Title7}</b> {value.Text7} </div>
               <div className="ShowMoreButton"> Näytä lisää</div>
             </div>
           </div>
        </div>
    )
}
