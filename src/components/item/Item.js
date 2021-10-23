import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Item.module.scss"


const Item = ({
    url,
}) => (
    <div className={styles.item}>
        <img src={url} />
    </div>
)


Item.propTypes = {
    url: PropTypes.string,
}

Item.defaultProps = {
    url: ""
}

export default Item