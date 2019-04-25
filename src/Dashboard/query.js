import { gql } from "react-apollo";

export default gql`
  query {
    user(slug: "biola") {
      img
      username
      completed
      is_verified
      reputation_points
      reputations {
        text
        points
        url
      }
      notifications {
        text
        url
      }
    }
  }
`;
