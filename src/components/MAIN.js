import { Button } from 'react-bootstrap';
import styles from '../style.module.scss';

const MAIN = () => {
  return (
    <>
      <div className={`${styles.container} ${styles.background} `}>
        <h3 className={styles.title}>20% Off</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          expedita praesentium id dignissimos magni obcaecati error illo iusto
          ut repellat.
        </p>
        <Button variant="primary">Learn More</Button>{' '}
      </div>
    </>
  );
};

export default MAIN;
