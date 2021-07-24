import React from 'react';
import {Row,Col,Card } from 'antd';
// import nat4 from './images/nat-4.jpg';
import { GlobalOutlined } from '@ant-design/icons';
import './feature.css';

const nums = [1,2,3,4]
// const {Meta} = Card;
const Feature = ()=>{
    return (
        <section className = 'features-section'>
            <Row className = 'card-container' gutter={16} >
            
       {nums.map(num =>{
          return(<>
            <Col xs={24} sm={24} md={12} lg={6} className = 'card-holder'>
            <Card 
            bordered={false} 
            cover={<GlobalOutlined   style={{ fontSize:  '5em',fontWeight:200}}/>}
            >
              Card content
            </Card>
          </Col>  
          </>)
       })}
      
      </Row>
      </section>
    )
}
export default Feature;
