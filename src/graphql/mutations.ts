import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation AddProfile($first_name: String!, $last_name: String!, $email: String!, $avatar: String) {
    insert_profile(objects: { first_name: $first_name, last_name: $last_name, email: $email, avatar: $avatar }) {
      returning {
        id
        first_name
        last_name
        email
        avatar
      }
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation UpdateProfile($id: Int!, $first_name: String, $last_name: String, $email: String, $avatar: String) {
    update_profile_by_pk(
    pk_columns: { id: $id },
    _set: { first_name: $first_name, last_name: $last_name, email: $email, avatar: $avatar }
  ) {
    id
    first_name
    last_name
    email
    avatar
  }
}
`;