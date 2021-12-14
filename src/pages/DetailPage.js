import React from 'react';
import NAVBAR from '../components/NAVBAR';
import { useParams } from 'react-router-dom';
import styles from '../style.module.scss';

const DetailPage = ({ prods }) => {
  const { params } = useParams();
  const data = prods[params];
  return (
    <>
      <NAVBAR />
      <div>
        <h4 className={styles.xx}>{data.title}</h4>
        <p>{data.price}</p>
      </div>
      <button className="btn btn-danger">Order</button>
    </>
  );
};

export default DetailPage;
