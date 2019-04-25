//@flow
export type SubjectType = {
  name: string,
  slug: string,
  testable: boolean,
  duration: number,
  pass_mark: number,
  quiz_url: string
};
export type SittingType = {
  +name: string,
  +passed: boolean,
  +score: number,
  +percentile: number
};
