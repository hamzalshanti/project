import React, { useState } from 'react';

import { Accordion, Card } from 'react-bootstrap';

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameFour;
