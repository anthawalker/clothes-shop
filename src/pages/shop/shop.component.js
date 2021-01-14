import React, { Component } from 'react';
import collections from './shop.data';
import CollectionPreveiw from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
  state = {
    collections,
  };

  render() {
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreveiw key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
