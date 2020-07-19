import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsAsArray } from '../../redux/shop/shop.selector';

import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = ({ collections }) => {
  console.log(collections);
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsAsArray
});

export default connect(mapStateToProps)(CollectionsOverview);
