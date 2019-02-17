import React from 'react';
import { connect } from 'react-redux';

import styles from './ActivitySummary.module.css';

const ActivitySummary = ({ activity }) => {
  return <>
    <h1>Summary</h1>

    <div className={styles.summaryDetailsWrapper}>
      <div className={styles.activityDetails}>
        <h2 className={styles.summaryDetailsTitle}>{activity.name}</h2>
        <div className={styles.activityDetailsItem}><i class="fal fa-child" />{activity.recommendedAgeFrom} - {activity.recommendedAgeTo}</div>
        <div className={styles.activityDetailsItem}><i class="fal fa-link" /><a href="/">{activity.webpage}</a></div>
        {activity.phoneNumber &&
          <div className={styles.activityDetailsItem}><i class="fal fa-phone" />{activity.phoneNumber}</div>
        }
      </div>

      <div className={styles.addressDetails}>
        <img alt="Map for below address" width="180" src="/map.png" />

        <div className={styles.addressDetailsWrapper}>
          <div className={styles.summaryDetailsTitle}>{activity.placeName}</div>
          {(activity.buildingUnit || activity.buildingName) &&
            <div>{activity.buildingUnit} {activity.buildingName}</div>
          }
          {(activity.streetNumber || activity.streetName) &&
            <div>{activity.streetNumber} {activity.streetName}</div>
          }
          {activity.town &&
            <div>{activity.town}</div>
          }
          <div>{activity.postcode}</div>
        </div>
      </div>
    </div>
  </>
};

const mapStateToProps = state => {
  return {
    activity: state.form.activity.values
  };
};

export default connect(mapStateToProps)(ActivitySummary);
