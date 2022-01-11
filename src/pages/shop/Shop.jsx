import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import CollectionsOverviewContainer from "../../components/Collections-Overview/CollectionsOverviewContainer";
import CollectionPageContainer from "../collection/CollectionContainer";
import { connect } from "react-redux";

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
