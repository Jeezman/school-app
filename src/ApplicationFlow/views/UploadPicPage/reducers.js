export const UPDATE_IMAGE = "UPDATE_IMAGE_VALUE";

export default (
  state = {
    image: ""
  },
  action
) => {
  if (action.type === UPDATE_IMAGE) {
    return { ...state, ...action.value };
  }
  return state;
};
export const mapStateToProps = (state: GlobalState) => {
  const currentData = state.wizard["upload-photo"];

  return {
    data: currentData
  };
};
