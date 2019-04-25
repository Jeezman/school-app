import { combineReducers } from "redux";
import personalInfo from "./views/PersonalInfoPage/reducers";
import location from "./views/LocationPage/reducers";
import completedSteps from "./Page/reducer";
import qualifications from "./views/QualificationPage/reducers";
import aboutTutor from "./views/AboutTutorPage/reducers";
import uploadPhoto from "./views/UploadPicPage/reducers.js";
import quiz from "./QuizTakingFlow/reducer";
import subjects from "./SubjectsFlow/reducers";
const wizard = combineReducers({
  "personal-info": personalInfo,
  qualifications,
  "about-tutor": aboutTutor,
  location,
  "upload-photo": uploadPhoto
});

const reducers = combineReducers({
  wizard,
  completedSteps,
  quiz,
  subjects
});
export default reducers;
