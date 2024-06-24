
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
        'https://driven-liger-69.hasura.app/v1/graphql': {
          headers: { 'x-hasura-admin-secret': 'QADB45y1TPghRC4j4D2lSTJcxfD32gTdSIICU2Sf41OTxQok3oiW8jIF9ohxeefR' },
        },
    },
],
  documents: "**/*.{gql,graphql}",
  generates: {
    "src/graphql/generated/schema.ts": {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
    ],
    config: {
      skipTypename: false,
      withHooks: true,
      withHOC: false,
      withComponent: false,
  },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
