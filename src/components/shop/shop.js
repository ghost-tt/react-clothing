import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selector';

import CollectionPreview from '../collection-preview/collection-preview';

const Shop = ({ collections }) => (
    <div className="shop-page">
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id}  {...otherCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(Shop);