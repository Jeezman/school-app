import { combineReducers } from "redux";
import selectSubjects from "./views/SubjectSelectPage/reducers";
import sittings from "./views/SubjectListPage/reducers";
import subjectDetail, {
  externalStateToProps
} from "./views/SubjectDetailPage/reducers";
const subjects = combineReducers({
  "select-subjects": selectSubjects,
  "subject-list": sittings,
  "subject-detail": subjectDetail
});
export const mapStateToProps = (state, ownProps) => {
  return externalStateToProps(state, ownProps);
};
export default subjects;
