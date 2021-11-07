import React, { useState } from "react";

const withErrorApi = View => {
  return props => {
    const [errorApi, setErrorApi] = useState(false)
    return (
      <>
      {errorApi ? <h3>Error</h3>
      : (<View setErrorApi={setErrorApi} {...props} />)
      }
      </>
    )
  }
}

export default withErrorApi;