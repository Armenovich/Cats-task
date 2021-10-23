import React from 'react'
import { connect } from 'react-redux';
import { getImages } from '../../state/actions/dataActions';
import Item from "../item/Item";
import styles from "./Board.module.scss"


function Board({ items, getImages }) {

    const [limit, setLimit] = React.useState(10)

    const limitImage = () => {
        setLimit(limit + 10)
    }


    React.useEffect(() => {
        getImages(limit)
    }, [getImages, limit])
    return (
        <div className={styles.board}>
            <div className={styles.boardItems}>
                {items.data && items.data.map((item, index) => (
                    <Item key={index.toString()} url={item.url} />
                ))}
            </div>
            <button className={styles.contained} onClick={limitImage}>10 more images</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    items: state.items
})
const mapDispatchToProps = {
    getImages
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)