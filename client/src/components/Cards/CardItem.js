import React from 'react';
import 'aos/dist/aos.css';
 
import './CardItem.css';
const CardItem = props =>{
  

   

    let FadeClasses = ['fade-right'];
    if(props.id %2===0){
        FadeClasses = 'fade-left';
    }
  

    return(
            <main className="containerr">
                <section className="card" data-aos={FadeClasses}>
                    <h3 id="icon">{props.Title}</h3>
                    <img src={props.image} alt={props.Title} />

                    <div>
                    <h3 className="field">{props.Title}</h3>
                        <p>{props.description}</p>
                    </div>
                </section>
            </main>
    )


}

export default CardItem;