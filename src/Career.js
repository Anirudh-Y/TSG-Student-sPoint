import React from 'react'
import "./Career.css"
import MultiActionAreaCard from './components/MultiActionCard'
import careerList from './components/listOfCareerInfo'
import { elementAcceptingRef } from '@mui/utils'

function Career() {
    return (
        <div className="career">
            <div className='career_title'>
                <h1>CAREER'S POINT</h1>
            </div>
            <h1 class="career_head">LIST OF CAREER OPTIONS</h1>
            {careerList.map((element,index)=>{
                return (<>
                    <div className='career_sec'>
                        <div className='career_desc'>
                            <p>{element.description}</p>
                        </div>
                        <div className='career_card'>
                            <MultiActionAreaCard 
                            link={element.link}
                            title={element.title}
                            img={element.img}
                            />
                        </div>
                    </div>
                </>)
            })}
        </div>
    )
}

export default Career
