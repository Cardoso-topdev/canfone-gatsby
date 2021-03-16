import React, { Fragment } from 'react';
import Item from './item';

function TV({packages, order_data, setTVPackage}) {

  const products = packages.map((item) =>
    <Item
      key={item.id}
      id={item.id}
      title={item.title}
      description={item.description}
      price={item.price}
      selected_tv_package_id={order_data.tv_package_id}
      setTVPackage={setTVPackage}
    />
  );

  return (
    <Fragment>
      {products.length > 0 && 
        products
      }
      <div className="mx-6 md:px-16">
        <h1 className="text-xl md:text-3xl font-semibold grey-800 py-4">Basic Channels include:</h1>
        <div className="text-center">
          <img className="m-auto" src={withPrefix("img/basic-channels.png" />
        </div>
        <div className="md:mx-8 mt-8 lg:mt-16 mb-10 text-center">
          <h1 className="text-lg md:text-xl font-semibold grey-500 pb-3">Add additional channels anytime.</h1>
          <h1 className="md:text-lg font-normal grey-500">Get individual channels for $2.99 each, or 5 for $9.95!</h1>
        </div>
      </div>
    </Fragment>
  )
}

export default TV;