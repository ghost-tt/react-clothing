import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item';
import { selectCollection } from '../../redux/shop/shop.selector';

import './collection.style.scss';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => {
                        return <CollectionItem key={item.id} item={item} />
                    })
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollection(ownProps.match.params.categoryId)(state)
    }
}

export default connect(mapStateToProps)(CollectionPage);