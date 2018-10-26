import React from 'react';

export default function Loading(props) {
  if (props.isLoading) {
    if (props.timedOut) {
      return <div>Loader timed out!<button onClick={ props.retry }>Retry</button></div>;
    } else if (props.pastDelay) {
      return <div>Loading...</div>;
    } else {
      return null;
    }
  } else if (props.error) {
    //When your loader fails, your loading component will receive an error prop which will be an Error object (otherwise it will be null).
    return <div>Error! Component failed to load</div>;
  } else {
    return null;
  }
}
