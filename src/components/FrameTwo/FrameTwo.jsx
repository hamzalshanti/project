import React from 'react';

import TimeIcon from '../svg/TimeIcon';

import card from '../../assets/images/card.png';

import styles from './FrameTwo.module.css';

const FrameTwo = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Courses</h2>
      <div className='row'>
        <div className='col-6'>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <img className={styles.image} src={card} alt='' />
            </div>
            <div className={styles.cardbody}>
              <div className={styles.pay}>
                <button className={styles.button}>Pay $80</button>
              </div>
              <div className={styles.timeleft}>
                <div className={styles.timeicon}>
                  <TimeIcon />
                </div>
                <div className={styles.admission}>Admission time left</div>
                <div className={styles.time}>23 Days 16Hrs</div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className={styles.card}>
            <div className={styles.cardImage}>
              <img className={styles.image} src={card} alt='' />
            </div>
            <div className={styles.cardbody}>
              <div className={styles.pay}>
                <button className={styles.button}>Pay $80</button>
              </div>
              <div className={styles.timeleft}>
                <div className={styles.timeicon}>
                  <TimeIcon />
                </div>
                <div className={styles.admission}>Admission time left</div>
                <div className={styles.time}>23 Days 16Hrs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameTwo;
