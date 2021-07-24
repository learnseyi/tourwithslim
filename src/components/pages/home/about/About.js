import React from 'react';
import useWindowDimentions from '../../../customHooks/useWindowDimensions';
import { Row,Col,Typography, Button,Image } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import nat1 from './images/nat-1-large.jpg';
import nat2 from './images/nat-2-large.jpg';
import nat3 from './images/nat-3-large.jpg';
import './about.css';
const {Title,Paragraph} = Typography
const About = ()=>{
    let {width} = useWindowDimentions();
    return(
        <section className='about-section'>
        <Row>
      <Col span={24}>
          <h3 className='section-heading'>Exiciting tours for adventurous people</h3>
      </Col>
    </Row>
    <Row>
      <Col xs={24} md={12}>
          <div className = 'about-description'>
            <Title level={5} className = 'about-title'>
            YOU'RE GOING TO FALL IN LOVE WITH NATURE
            </Title>
            <Paragraph className = 'about-text'> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            ipsum sapiente aspernatur libero repellat quis consequatur 
            ducimus quam nisi exercitationem omnis earum qui.
            </Paragraph>
            <Title level={5} className = 'about-title'>
            YOU'RE GOING TO FALL IN LOVE WITH NATURE
            </Title>
            <Paragraph className = 'about-text'> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            ipsum sapiente aspernatur libero repellat quis consequatur 
            ducimus quam nisi exercitationem omnis earum qui.
            </Paragraph>
            <Router>
                <Link to='/'>
                < Button className = 'more'>Learn more &nbsp;<ArrowRightOutlined/></Button>
                </Link>
            </Router>
            </div>
      </Col>
      
      <Col xs={24} md={12} className = 'image-container'>
      
      <Image
           className='image-1' 
      width={250}
      height={150}
      preview = {false}
      src={nat1}
    />
        
      <Image
         className='image-2'   
      width={250}
      height={150}
      preview = {false}
      src={nat2}
    />
        
      
      
      <Image
        className='image-3'  
      width={250}
      height={150}
      preview = {false}
      src={nat3}
    />
        
      
      </Col>
      
    </Row>
        </section>
    )
}

export default About;

// {/* <col span={8}>
//             {/* <Image
//             className='about-box box-1'
//       width={200}
//       src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
//     /> */}
//         </col>
//           <col span={8} >
//           {/* <Image
//             className='about-box box-1'
//       width={200}
//       src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
//     /> */}
//           </col>
//           <col span={8} >
//           {/* <Image
//             className='about-box box-1'
//       width={200}
//       src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
//     /> */}
//           </col> */}
          