import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../collection-overview/collection-overview';
import CollectionPage from '../../pages/collection/collection';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase';

import { updateCollections } from '../../redux/shop/shop.actions';

class Shop extends React.Component {
    unsubscribeFromSnapshop = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            return updateCollections(collectionsMap);
        });
    }

    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)) 
    }
}

export default connect(null, mapDispatchToProps)(Shop);