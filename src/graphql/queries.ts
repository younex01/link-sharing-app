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

export const GET_PROFILE_BY_ID = gql`
query GetProfile($id: Int!) {
  profile_by_pk(id: $id) {
    id
    avatar
    email
    first_name
    last_name
    links {
      link
      platform_name
      id_
    }
  }
}
`;

export const GET_PROFILE = gql`
query MyQuery($user_id: String!) {
  profile(where: { user_id: { _eq: $user_id } }) {
    user_id
    avatar
    email
    first_name
    last_name
    id
  }
}
`;

export const GET_LINKS = gql`
query get_links($id: Int!) {
  links(where: {profile_id: {_eq: $id}}) {
    platform_name
    link
    id_
  }
}
`