import { Link } from 'react-router-dom';
import styles from '../style.module.scss';

const Product = ({ data }) => {
  return (
    <>
      <div className={styles.prod}>
        <Link to={`/detail/${data.id}`}>
          <img src={data.image} alt="shoes" />
        </Link>
        <Link to={`/detail/${data.id}`}>
          <h5>
            {data.title}
            <small>{data.price}</small>
          </h5>
        </Link>
        <p>{data.content}</p>
      </div>
    </>
  );
};

const PRODUCTS = ({ prods }) => {
  return (
    <>
      <div className={styles.prodContainer}>
        {prods.map((prod) => (
          <Product key={prod.id} data={prod} />
        ))}
      </div>
    </>
  );
};

export default PRODUCTS;
