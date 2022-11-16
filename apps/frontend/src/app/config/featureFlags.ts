

const featureFlags ={
  share:false
}

type FeatureFlagTypes = "share"

export const hasFeatureFlag = (featureFlag: FeatureFlagTypes) => {
  return featureFlags[featureFlag];
}
