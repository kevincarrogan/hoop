import React from 'react';
import { connect } from 'react-redux';

import styles from './ActivitySummary.module.css';

const ActivitySummary = ({ activity }) => {
  return <>
    <h1>Activity Summary</h1>

    <h2 className={styles.secondaryHeader}>Activity</h2>

    <dl className={styles.summaryDetails}>
      <dt className={styles.summaryDetailsTitle}>Name</dt>
      <dd className={styles.summaryDetailsDefinition}>{activity.name}</dd>

      <dt className={styles.summaryDetailsTitle}>Recommended Age</dt>
      <dd className={styles.summaryDetailsDefinition}>{activity.recommendedAgeFrom} - {activity.recommendedAgeTo}</dd>

      <dt className={styles.summaryDetailsTitle}>Webpage</dt>
      <dd className={styles.summaryDetailsDefinition}>{activity.webpage}</dd>

      {activity.phoneNumber &&
        <>
          <dt className={styles.summaryDetailsTitle}>Phone Number</dt>
          <dd className={styles.summaryDetailsDefinition}>{activity.phoneNumber}</dd>
        </>
      }
    </dl>

    <h2 className={styles.secondaryHeader}>Address</h2>

    <dl className={styles.summaryDetails}>
      <dt className={styles.summaryDetailsTitle}>Place Name</dt>
      <dd className={styles.summaryDetailsDefinition}>{activity.placeName}</dd>

      <dt className={styles.summaryDetailsTitle}>Postcode</dt>
      <dd className={styles.summaryDetailsDefinition}>{activity.postcode}</dd>

      {activity.buildingUnit &&
        <>
          <dt className={styles.summaryDetailsTitle}>Building Unit</dt>
          <dd className={styles.summaryDetailsDefinition}>{activity.buildingUnit}</dd>
        </>
      }

      {activity.buildingName &&
        <>
          <dt className={styles.summaryDetailsTitle}>Building Name</dt>
          <dd className={styles.summaryDetailsDefinition}>{activity.buildingName}</dd>
        </>
      }

      {activity.streetNumber &&
        <>
          <dt className={styles.summaryDetailsTitle}>Street Number</dt>
          <dd className={styles.summaryDetailsDefinition}>{activity.streetNumber}</dd>
        </>
      }

      {activity.streetName &&
        <>
          <dt className={styles.summaryDetailsTitle}>Street Name</dt>
          <dd className={styles.summaryDetailsDefinition}>{activity.streetName}</dd>
        </>
      }

      {activity.town &&
        <>
          <dt className={styles.summaryDetailsTitle}>Town</dt>
          <dd className={styles.summaryDetailsDefinition}>{activity.town}</dd>
        </>
      }
    </dl>
  </>
};

const mapStateToProps = state => {
  return {
    activity: state.form.activity.values
  };
};

export default connect(mapStateToProps)(ActivitySummary);
