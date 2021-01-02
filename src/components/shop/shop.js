import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../collection-overview/collection-overview';
import CollectionPage from '../../pages/collection/collection';

const Shop = ({match}) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
    </div>
);

export default Shop;