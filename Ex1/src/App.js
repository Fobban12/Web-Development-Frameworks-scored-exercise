import React from 'react';
import './App.css';
import MainNews from './Components/MainNews';
import Notifications from './Components/Notifications';


function App() {
  return (
  <div>
   <div className="BackGroundForTop">
    <div className='TopOfThePage'>
      <div className="Title">
        Helsingin Sanomat 
      </div> 
      <div className="UL">
        Uutiset <span className="Lehdet">Lehdet</span>
      </div> 
      <div className="UserButtons">
        <span className="UserButtons"><span className="TilaaButton">Tilaa</span></span>
        <span className="UserButtons">Kirjaudu</span>
        <span className="UserButtons">Hae</span>
        <span className="UserButtons">Valikko</span>
      </div>
    </div>
    </div>

    <div className="NewsTypesBackGround"> 
     <div className="NewsTypes"> 
     <span className="NewsTypesPosition"> <span className="Etusivu">Etusivu</span></span>
     <span className="NewsTypesPosition">HS Visio</span>
     <span className="NewsTypesPosition">Luetuimmat</span>
     <span className="NewsTypesPosition">Uusimmat</span>
     <span className="NewsTypesPosition">Politiikka</span>
     <span className="NewsTypesPosition">Kaupunki</span>
     <span className="NewsTypesPosition">Kulttuuri</span>
     <span className="NewsTypesPosition">Tiede</span>
     <span className="NewsTypesPosition">Hyvin</span>
     </div> 
    </div>
    
    <Notifications  notiftitle ='KULTTUURI' 
    notifcontent ='Muusikko R. Kelly oli "kaikkein pahin saalistaja", joka sai jatkaa hirvittäviä rikoksiaan vuosikymmenten ajan'/>
    
    <Notifications notiftitle ='PÄIVÄN TIMANTTI' 
    notifcontent ='Olen kuskannut lastani autolla kouluun ajattelematta, että se voi kostautua vuosien viivellä'/>
    
    <Notifications notiftitle ='MAINOS' 
    notifcontent ='Lunasta kaksi viikkoa maksutonta lukuaikaa'/>
    
    <MainNews newstitle ='Työelämä' 
    newscontent='Kysely: Yli puolet opettajista harkinnut alanvaihtoa - OAJ:n puheenjohtaja puhuu jo hätätilasta'
     CateNtime='Politiikka 19.00'
     Title1='Perhesiteitä'
    Title2='HS-Analyysi'
    Title3='Eduskunta'
    Title4='Oikeudenkäynnit'
    Title5='Juoksu'
    Title6='Oikeudenkäynnit'
    Title7='HS Helsinki' 
    Text1='Roope Salminen treenasi viisi kertaa viikossa ja irtautui ahdistavasta parisuhteesta'
    Text2='Vielä keskiviikko­iltana näytti siltä, ettei STM ole valmis kumoamaan tanssi­kieltoa '
    Text3='18-vuotias lukiolainen teki hurjan tuloksen Cooperin testissä'
    Text4='Oppositio syytti Ohisaloa kiemurtelusta Elokapinan mahdollisten laittomuuksien edessä'
    Text5='Uusi käänne palkkamurhajutun oikeuden­käynnissä'
    Text6='Nuoret tamperelais­miehet saivat pitkät huumetuomiot'
    Text7='Vuosaaren vanhemmat ovat täydessä hälytys­tilassa klovni­asuisen häirikön takia'
     />
  </div>
  
  
  );
}

export default App;
