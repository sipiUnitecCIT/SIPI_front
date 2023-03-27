import React, { useState } from "react";

const useLoadingResources = () => {
  const [resourcesState, setResourcesState] = useState({
    loadingResources: true,
    errorResources: false,
  })
  
  const { loadingResources, errorResources } = resourcesState

  const setResources = (state) => {
    setResourcesState({ ...resourcesState, ...state })
  }
  
  const showContent = !loadingResources && !errorResources;

  return { resourcesState, showContent, setResources }
}

export default useLoadingResources;