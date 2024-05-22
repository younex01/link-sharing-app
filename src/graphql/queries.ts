import { gql } from '@apollo/client';

export const GET_PROFILES = gql`
query get_profiles {
  profile {
    id
    last_name
    first_name
    email
    avatar
  }
}
`;