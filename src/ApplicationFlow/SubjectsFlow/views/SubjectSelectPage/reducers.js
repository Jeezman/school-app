import DATA from "./DATA";
export const ADD_SUBJECTS = "ADD_SUBJECTS";
export const REMOVE_SUBJECT = "REMOVE_SUBJECT";
export const categories = [
  {
    icon: "atom",
    name: "Academics",
    text: "Like Maths, English, Physics, Chemistry, Further Maths"
  },
  {
    icon: "paper-diploma",
    name: "Exam Preparation",
    text: "Like ICAN, TOEFL, GMAT, GRE, CCNA and others"
  },
  {
    icon: "translate",
    name: "Languages",
    text: "Like Yoruba, Hausa, French, Spanish, Dutch, etc."
  },
  {
    icon: "briefcase",
    name: "Professional and Business",
    text: "Like Financial Analysis, Proposal Writing, Personal Finance"
  },
  {
    icon: "guitar",
    name: "Music",
    text: "Like Saxophone, Guitar, Drum set, Singing, Flute"
  },
  {
    icon: "desktop-screen",
    name: "Computer and Software",
    text: "Like HTML, PHP, Design, Video Animation, Microsoft Apps"
  },
  {
    icon: "needle",
    name: "Vocational Skill",
    text: "Like Sewing, Bead Making, Bag Making, Makeup"
  },
  {
    icon: "favourite",
    name: "Special needs",
    text: "Teach people with disablities like Dyslexia, Hard of Hearing"
  },
  {
    icon: "volleyball",
    name: "Sports",
    text: "Like Football, Basketball, Table Tennis, Games, and Fitness"
  }
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
export function getSubCategories(categorySlug) {
  const flagItem = categorySlug.name || categorySlug;
  const allCategories = getCategories();
  const selected = allCategories.find(x => x.name === flagItem);
  const icons = ["math", "abc", "lab", "chartbar", "hat"];
  const result = selected.subcategories.map(x => ({
    ...x,
    subcategory: x.name,
    icon: icons[getRandomInt(0, icons.length)]
  }));
  return result;
}
export const allSubjects = (selectedSubjects = []) => {
  const result = DATA.data.categories.map((category, index) => {
    const skills = category.subcategories.map(sub => {
      let results = sub.skills;
      return results.map(x => ({
        ...x,
        category: category.name,
        subcategory: sub.name
      }));
    });
    return [].concat.apply([], skills);
  });
  const r = [].concat.apply([], result);
  let set = [...new Set(r.map(u => u.name))];
  const rr = set.map(w => {
    let xo = r.find(y => y.name === w);
    return xo;
  });
  const selectSub = [...new Set(selectedSubjects.map(u => u.name))];
  return rr.filter(x => selectSub.indexOf(x.name) === -1);
};

export function getSubjects(subcategorySlug) {
  return subcategorySlug.skills.map(x => ({
    ...x,
    checked: false
  }));
}

export function getCategory(categorySlug) {
  const allCategories = getCategories();
  // debugger;
  return allCategories[categorySlug];
}

export const getCategories = () => {
  const result = DATA.data.categories.map((category, index) => {
    let item = categories.find(x => x.name === category.name);
    return {
      ...category,
      ...item
    };
  });
  return result;
};
export default (state = [], action) => {
  if (action.type === ADD_SUBJECTS) {
    return action.value;
  }
  if (action.type === REMOVE_SUBJECT) {
    return state.filter(x => x.name !== action.value.name);
  }
  return state;
};
export const mapStateToProps = state => {
  const selectedSubjects = state.subjects["select-subjects"];
  return {
    selectedSubjects,
    categories: getCategories()
  };
};
