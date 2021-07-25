import React from 'react';
import {Row,Col,Card } from 'antd';
// import useWindowDimentions from '../../../customHooks/useWindowDimensions';
import {content} from './featureContent';
import './feature.css';


const Feature = ()=>{
    return (
        <section className = 'features-section'>
            <Row className = 'card-container' gutter={16} >
            
       {content.map((item,i) =>{
          return(<>
            <Col xs={24} sm={24} md={12} lg={6} className = 'card-holder'>
                
            <Card 
            bordered={false} 
            cover={item.icon}
            >
                <p className ='card-title'>{item.title}</p>
              <p className = 'description'>{item.description}</p>
            </Card>
          </Col>  
          </>)
       })}
      
      </Row>
      </section>
    )
}
export default Feature;
