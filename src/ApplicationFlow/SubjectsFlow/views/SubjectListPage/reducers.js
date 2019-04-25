//@flow
import DATA from "./DATA";
import { allSubjects } from "../SubjectSelectPage/reducers";
import { SubjectType, SittingType } from "../types";
export { SUBJECT_TO_TEST } from "../../../QuizTakingFlow/reducer";

function subjectInstanceForPassedSittings(consideredSubjects) {
  return allSubjects([]).filter(x => consideredSubjects.indexOf(x.name) > -1);
}
export const ADD_SITTING_RESULT = "ADD_SITTING_RESULT";
export const CURRENT_SUBJECT_TO_EDIT = "CURRENT_SUBJECT_TO_EDIT";

export default (state = DATA.data.sittings, action) => {
  if (action.type === ADD_SITTING_RESULT) {
    const { subjectName, ...rest } = action.value;
    const exists = state.findIndex(x => x.name === subjectName) > -1;
    if (exists) {
      return state.map(x => {
        if (x.name === subjectName) {
          return { ...x, ...rest };
        }
        return x;
      });
    } else {
      return [...state, { name: subjectName, ...rest }];
    }
  }
  return state;
};
type Props = {
  +selectedSubjects: Array<{
    +id: number,
    +subject: SubjectType,
    +taken: boolean,
    +score: {}
  }>
};

type GlobalState = {
  +subjects: {
    "select-subjects": Array<{
      +name: string
    }>,
    "subject-list": Array<Sittingtype>
  }
};
export const mapStateToProps = (state: GlobalState): Props => {
  const subjects = state.subjects["select-subjects"];
  const sittings = state.subjects["subject-list"];
  const consideredSubjects = [
    ...new Set(sittings.map(x => x.name).concat(subjects.map(x => x.name)))
  ];
  const actual_instances = subjectInstanceForPassedSittings(consideredSubjects);
  const selectedSubjects = actual_instances.map((x, index) => {
    const foundIndex = sittings.findIndex(y => y.name === x.name);
    let result = {
      id: index,
      subject: x,
      taken: false,
      score: {}
    };
    if (foundIndex > -1) {
      let val = sittings[foundIndex];
      return {
        ...result,
        taken: true,
        score: {
          passed: val.passed,
          figure: `${val.score}%`,
          badge: `${val.passed ? "Top" : "Bottom"} ${val.percentile}%`
        }
      };
    }
    return result;
  });
  return {
    selectedSubjects,
    subjectExists: (slug, canTakeQuiz) => {
      let result = [];
      if (canTakeQuiz) {
        result = selectedSubjects
          .filter(x => x.taken === false)
          .map(x => x.subject);
      } else {
        result = subjectInstanceForPassedSittings(sittings.map(x => x.name));
      }

      return result.findIndex(x => x.slug === slug) > -1;
    },
    subjects
  };
};
