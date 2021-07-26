import React,{useState} from 'react';
import {Motion,spring} from 'react-motion';
import { Row,Card, Col } from 'antd';
import { popularPlans } from './popular';
import './popularTours.css';

const { Meta } = Card;
const PopularTours = ()=>{
    const [flipCard,setFlipCard] = useState(false)

    // const flipCard = (e)=>{
    //  const condition = e.type === 'mouseenter' ? true : false
    // // console.log(condition,e.type)
    // return condition;

    // }
    
    return(
        <section className = 'tours-section'>
            <Row gutter={30} className = 'row-padding'>
            <h3 className='section-heading'>most popular tours</h3>
            {popularPlans.map((plan,i)=>{
                return(
                 <Col xs={24} sm={24} md={8} lg={8} className = 'plan-container'>
                <Motion defaultStyle = {{x: 0, transform:0}} style={{x:spring(flipCard ?180:0),transform:spring(180)}}>
                {(style)=>(
                    <Card 
                //  onMouseLeave = {()=>setflipEffect('flip')}
               
                onMouseEnter = {()=>setFlipCard(true)}
                 hoverable
                
                 style={{ width: 340,transform:`rotateY${style.x}deg` }}
                 bordered={false} 
                 cover={<img alt ='plan-thumbnail' src={plan.image} />}
                 >
                     <p className = 'plan-name'>{plan.name}</p>
                     <Meta title={plan.duration + ' day tour'}  />
                     <Meta title={plan.duration + ' day tour'}  />
                     <Meta title={plan.duration + ' day tour'}  />
                     <Meta title={plan.duration + ' day tour'}  />
                     <Meta title={plan.duration + ' day tour'}  />
                 </Card>
                )}
                 
                 </Motion>
                 </Col>
                )
            })}
           
            </Row>
        
        </section>
)}

export default PopularTours;