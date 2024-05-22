import { gql } from '@apollo/client';

export const GET_LINKS_WITH_USER = gql`
query GetLinksWithUser {
  links {
    id
    url
    description
    platform
    user {
      id
      first_name
      last_name
    }
  }
}
`;