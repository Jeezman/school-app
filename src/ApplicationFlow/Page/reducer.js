export const COMPLETED_STEP = "WIZARD_COMPLETED_STEP";

const completedStepsReducer = (state = [], action) => {
  if (action.type === COMPLETED_STEP) {
    if (action.url) {
      const newState = [...state, action.url];
      return [...new Set(newState)];
    }
  }
  return state;
};

const reducer = (
  // state = { completedSteps: [], nextUrl: "personal-info" },
  // state = { completedSteps: [], nextUrl: "add-details2" },
  // state = { completedSteps: [], nextUrl: "introduction" },
  state = { progress: [0], completedSteps: [], nextUrl: "id-verification" },
  action
) => {
  if (action.type === COMPLETED_STEP) {
    return {
      ...state,
      completedSteps: completedStepsReducer(state.completedSteps, action),
      progress: state.progress.concat(action.progress),
      nextUrl: action.nextUrl
    };
  }
  return state;
};

export const mapStateToProps = (state, ownProps) => {
  const { location: { pathname }, history } = ownProps;
  const quiz = [
    "introduction",
    "select-subjects",
    "start-test",
    "test-result",
    "subject-list",
    "question-3",
    "add-details"
  ];
  const currentOption = pathname
    .replace(/steps|subjects/, "")
    .replace("//", "");
  const { completedSteps: { completedSteps, nextUrl, progress } } = state;
  if (completedSteps.indexOf(currentOption) > -1) {
  } else if (nextUrl !== currentOption) {
    if (quiz.indexOf(nextUrl) > -1) {
      // history.push(`/subjects/${nextUrl}`);
    } else {
      // history.push(`/steps/${nextUrl}`);
    }
  }
  return {
    completedSteps,
    progress,
    nextUrl,
    ...ownProps
  };
};
export default reducer;
