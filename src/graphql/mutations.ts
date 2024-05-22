import { gql } from '@apollo/client';

export const ADD_LINK = gql`
  mutation AddLink($url: String!, $description: String!, $platform: String!, $userId: UUID!) {
    insert_links(objects: { url: $url, description: $description, platform: $platform, user_id: $userId }) {
      returning {
        id
        url
        description
        platform
      }
    }
  }
`;