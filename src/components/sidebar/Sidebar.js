import React from 'react'
import { connect } from 'react-redux';
import { getImages, getCategories } from '../../state/actions/dataActions';
import styles from "./Sidebar.module.scss"

const Sidebar = ({ getCategories, categories, getImages }) => {
    const [state, setState] = React.useState(false)
    const [sort, setSort] = React.useState('')

    const show = () => {
        setState(!state)
    }

    const setCategory = (sort) => {
        setSort(sort)
    }
    React.useEffect(() => {
        getImages(10, sort)
    }, [getImages, 10, sort])


    React.useEffect(() => {
        getCategories()
    }, [getCategories])


    return (
        <div className={styles.sidebar}>
            <button className={styles.outlined} onClick={show}>Filter</button>

            {state && categories.data && categories.data.map((item) => (
                <div key={item.id}>
                    <button onClick={() => setCategory(item.name)} className={styles.categoryBtn}>{item.name}</button>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    categories: state.categories
})
const mapDispatchToProps = {
    getCategories,
    getImages
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)