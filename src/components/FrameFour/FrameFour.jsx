import React, { useState } from 'react';

import { Accordion, Card } from 'react-bootstrap';

import image from '../../assets/images/card.png';

import styles from './FrameFour.module.css';

const FrameFour = () => {
  const [activeId, setActiveId] = useState('0');

  function toggleActive(id) {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  }

  return (
    <div className={styles.root}>
      <h2>MERN STACK</h2>
      <div className='row'>
        <div className='col'>
          <div className={styles.list}>
            <div className={styles.structContainer}>
              <h3 className={styles.structure}>
                Coures <span className={styles.structureBold}>Structure</span>
              </h3>
              <div className={styles.bar}></div>
            </div>
            <div className='accordion'>
              <Accordion defaultActiveKey='0'>
                <Card>
                  <Accordion.Toggle
                    onClick={() => toggleActive('0')}
                    as={Card.Header}
                    eventKey='0'
                    className={
                      activeId === '0' ? styles.active : styles.unactive
                    }
                  >
                    1.introduction to full-stack web development with mern .
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='0'>
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle
                    onClick={() => toggleActive('1')}
                    as={Card.Header}
                    eventKey='1'
                    className={
                      activeId === '1' ? styles.active : styles.unactive
                    }
                  >
                    2.web development with html(Learning html).
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='1'>
                    <Card.Body>
                      1.introduction to full-stack web development with mern .
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle
                    onClick={() => toggleActive('2')}
                    as={Card.Header}
                    eventKey='2'
                    className={
                      activeId === '2' ? styles.active : styles.unactive
                    }
                  >
                    2.web development with html(Learning html).
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='2'>
                    <Card.Body>
                      1.introduction to full-stack web development with mern .
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle
                    onClick={() => toggleActive('3')}
                    as={Card.Header}
                    eventKey='3'
                    className={
                      activeId === '3' ? styles.active : styles.unactive
                    }
                  >
                    3.web development with html(Learning html).
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='3'>
                    <Card.Body>
                      1.introduction to full-stack web development with mern .
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle
                    onClick={() => toggleActive('4')}
                    as={Card.Header}
                    eventKey='4'
                    className={
                      activeId === '4' ? styles.active : styles.unactive
                    }
                  >
                    4.web development with html(Learning html).
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='4'>
                    <Card.Body>
                      1.introduction to full-stack web development with mern .
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle
                    onClick={() => toggleActive('5')}
                    as={Card.Header}
                    eventKey='5'
                    className={
                      activeId === '5' ? styles.active : styles.unactive
                    }
                  >
                    5.web development with html(Learning html).
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='5'>
                    <Card.Body>
                      1.introduction to full-stack web development with mern .
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle
                    onClick={() => toggleActive('6')}
                    as={Card.Header}
                    eventKey='6'
                    className={
                      activeId === '6' ? styles.active : styles.unactive
                    }
                  >
                    6.web development with html(Learning html).
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='6'>
                    <Card.Body>
                      6.introduction to full-stack web development with mern .
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle
                    onClick={() => toggleActive('7')}
                    as={Card.Header}
                    eventKey='7'
                    className={
                      activeId === '7' ? styles.active : styles.unactive
                    }
                  >
                    7.web development with html(Learning html).
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='7'>
                    <Card.Body>
                      1.introduction to full-stack web development with mern .
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle
                    onClick={() => toggleActive('8')}
                    as={Card.Header}
                    eventKey='8'
                    className={
                      activeId === '8' ? styles.active : styles.unactive
                    }
                  >
                    8.web development with html(Learning html).
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='8'>
                    <Card.Body>
                      8.introduction to full-stack web development with mern .
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle
                    onClick={() => toggleActive('9')}
                    as={Card.Header}
                    eventKey='9'
                    className={
                      activeId === '9' ? styles.active : styles.unactive
                    }
                  >
                    9.web development with html(Learning html).
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='9'>
                    <Card.Body>
                      9.introduction to full-stack web development with mern .
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle
                    onClick={() => toggleActive('10')}
                    as={Card.Header}
                    eventKey='10'
                    className={
                      activeId === '10' ? styles.active : styles.unactive
                    }
                  >
                    10.web development with html(Learning html).
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='10'>
                    <Card.Body>
                      10.introduction to full-stack web development with mern .
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle
                    onClick={() => toggleActive('11')}
                    as={Card.Header}
                    eventKey='11'
                    className={
                      activeId === '11' ? styles.active : styles.unactive
                    }
                  >
                    11.web development with html(Learning html).
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='11'>
                    <Card.Body>
                      11.introduction to full-stack web development with mern .
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle
                    onClick={() => toggleActive('12')}
                    as={Card.Header}
                    eventKey='12'
                    className={
                      activeId === '12' ? styles.active : styles.unactive
                    }
                  >
                    12.web development with html(Learning html).
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='12'>
                    <Card.Body>
                      12.introduction to full-stack web development with mern .
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle
                    onClick={() => toggleActive('13')}
                    as={Card.Header}
                    eventKey='13'
                    className={
                      activeId === '13' ? styles.active : styles.unactive
                    }
                  >
                    13.web development with html(Learning html).
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='13'>
                    <Card.Body>
                      13.introduction to full-stack web development with mern .
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className={styles.details}>
            <h2 className={styles.detailsTitle}>
              JAVASCRIPT FULSTACK DEVELOPMENT COURSE
            </h2>
            <div className={styles.info}>
              <ul className={styles.tech}>
                <li className={styles.techItems}>-MongoDB</li>
                <li className={styles.techItems}>-Express</li>
                <li className={styles.techItems}>-React Js</li>
                <li className={styles.techItems}>-Node Js</li>
              </ul>
              <div className={styles.coursename}>MERN STACK</div>
            </div>
            <div>
              <img className={styles.image} src={image} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameFour;
