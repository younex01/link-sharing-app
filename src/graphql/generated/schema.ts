import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "links" */
export type Links = {
  __typename?: 'links';
  created_at: Scalars['timestamptz']['output'];
  id_: Scalars['Int']['output'];
  link: Scalars['String']['output'];
  platform_name: Scalars['String']['output'];
  /** An object relationship */
  profile: Profile;
  profile_id: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "links" */
export type Links_Aggregate = {
  __typename?: 'links_aggregate';
  aggregate?: Maybe<Links_Aggregate_Fields>;
  nodes: Array<Links>;
};

export type Links_Aggregate_Bool_Exp = {
  count?: InputMaybe<Links_Aggregate_Bool_Exp_Count>;
};

export type Links_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Links_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Links_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "links" */
export type Links_Aggregate_Fields = {
  __typename?: 'links_aggregate_fields';
  avg?: Maybe<Links_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Links_Max_Fields>;
  min?: Maybe<Links_Min_Fields>;
  stddev?: Maybe<Links_Stddev_Fields>;
  stddev_pop?: Maybe<Links_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Links_Stddev_Samp_Fields>;
  sum?: Maybe<Links_Sum_Fields>;
  var_pop?: Maybe<Links_Var_Pop_Fields>;
  var_samp?: Maybe<Links_Var_Samp_Fields>;
  variance?: Maybe<Links_Variance_Fields>;
};


/** aggregate fields of "links" */
export type Links_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Links_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "links" */
export type Links_Aggregate_Order_By = {
  avg?: InputMaybe<Links_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Links_Max_Order_By>;
  min?: InputMaybe<Links_Min_Order_By>;
  stddev?: InputMaybe<Links_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Links_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Links_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Links_Sum_Order_By>;
  var_pop?: InputMaybe<Links_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Links_Var_Samp_Order_By>;
  variance?: InputMaybe<Links_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "links" */
export type Links_Arr_Rel_Insert_Input = {
  data: Array<Links_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Links_On_Conflict>;
};

/** aggregate avg on columns */
export type Links_Avg_Fields = {
  __typename?: 'links_avg_fields';
  id_?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "links" */
export type Links_Avg_Order_By = {
  id_?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "links". All fields are combined with a logical 'AND'. */
export type Links_Bool_Exp = {
  _and?: InputMaybe<Array<Links_Bool_Exp>>;
  _not?: InputMaybe<Links_Bool_Exp>;
  _or?: InputMaybe<Array<Links_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id_?: InputMaybe<Int_Comparison_Exp>;
  link?: InputMaybe<String_Comparison_Exp>;
  platform_name?: InputMaybe<String_Comparison_Exp>;
  profile?: InputMaybe<Profile_Bool_Exp>;
  profile_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "links" */
export enum Links_Constraint {
  /** unique or primary key constraint on columns "link" */
  LinksLinkKey = 'links_link_key',
  /** unique or primary key constraint on columns "id_" */
  LinksPkey = 'links_pkey'
}

/** input type for incrementing numeric columns in table "links" */
export type Links_Inc_Input = {
  id_?: InputMaybe<Scalars['Int']['input']>;
  profile_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "links" */
export type Links_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id_?: InputMaybe<Scalars['Int']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  platform_name?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  profile_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Links_Max_Fields = {
  __typename?: 'links_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id_?: Maybe<Scalars['Int']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  platform_name?: Maybe<Scalars['String']['output']>;
  profile_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "links" */
export type Links_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id_?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  platform_name?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Links_Min_Fields = {
  __typename?: 'links_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id_?: Maybe<Scalars['Int']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  platform_name?: Maybe<Scalars['String']['output']>;
  profile_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "links" */
export type Links_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id_?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  platform_name?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "links" */
export type Links_Mutation_Response = {
  __typename?: 'links_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Links>;
};

/** on_conflict condition type for table "links" */
export type Links_On_Conflict = {
  constraint: Links_Constraint;
  update_columns?: Array<Links_Update_Column>;
  where?: InputMaybe<Links_Bool_Exp>;
};

/** Ordering options when selecting data from "links". */
export type Links_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id_?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  platform_name?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profile_Order_By>;
  profile_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: links */
export type Links_Pk_Columns_Input = {
  id_: Scalars['Int']['input'];
};

/** select columns of table "links" */
export enum Links_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id_',
  /** column name */
  Link = 'link',
  /** column name */
  PlatformName = 'platform_name',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "links" */
export type Links_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id_?: InputMaybe<Scalars['Int']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  platform_name?: InputMaybe<Scalars['String']['input']>;
  profile_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Links_Stddev_Fields = {
  __typename?: 'links_stddev_fields';
  id_?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "links" */
export type Links_Stddev_Order_By = {
  id_?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Links_Stddev_Pop_Fields = {
  __typename?: 'links_stddev_pop_fields';
  id_?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "links" */
export type Links_Stddev_Pop_Order_By = {
  id_?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Links_Stddev_Samp_Fields = {
  __typename?: 'links_stddev_samp_fields';
  id_?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "links" */
export type Links_Stddev_Samp_Order_By = {
  id_?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "links" */
export type Links_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Links_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Links_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id_?: InputMaybe<Scalars['Int']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  platform_name?: InputMaybe<Scalars['String']['input']>;
  profile_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Links_Sum_Fields = {
  __typename?: 'links_sum_fields';
  id_?: Maybe<Scalars['Int']['output']>;
  profile_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "links" */
export type Links_Sum_Order_By = {
  id_?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** update columns of table "links" */
export enum Links_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id_',
  /** column name */
  Link = 'link',
  /** column name */
  PlatformName = 'platform_name',
  /** column name */
  ProfileId = 'profile_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Links_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Links_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Links_Set_Input>;
  /** filter the rows which have to be updated */
  where: Links_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Links_Var_Pop_Fields = {
  __typename?: 'links_var_pop_fields';
  id_?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "links" */
export type Links_Var_Pop_Order_By = {
  id_?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Links_Var_Samp_Fields = {
  __typename?: 'links_var_samp_fields';
  id_?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "links" */
export type Links_Var_Samp_Order_By = {
  id_?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Links_Variance_Fields = {
  __typename?: 'links_variance_fields';
  id_?: Maybe<Scalars['Float']['output']>;
  profile_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "links" */
export type Links_Variance_Order_By = {
  id_?: InputMaybe<Order_By>;
  profile_id?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "links" */
  delete_links?: Maybe<Links_Mutation_Response>;
  /** delete single row from the table: "links" */
  delete_links_by_pk?: Maybe<Links>;
  /** delete data from the table: "profile" */
  delete_profile?: Maybe<Profile_Mutation_Response>;
  /** delete single row from the table: "profile" */
  delete_profile_by_pk?: Maybe<Profile>;
  /** insert data into the table: "links" */
  insert_links?: Maybe<Links_Mutation_Response>;
  /** insert a single row into the table: "links" */
  insert_links_one?: Maybe<Links>;
  /** insert data into the table: "profile" */
  insert_profile?: Maybe<Profile_Mutation_Response>;
  /** insert a single row into the table: "profile" */
  insert_profile_one?: Maybe<Profile>;
  /** update data of the table: "links" */
  update_links?: Maybe<Links_Mutation_Response>;
  /** update single row of the table: "links" */
  update_links_by_pk?: Maybe<Links>;
  /** update multiples rows of table: "links" */
  update_links_many?: Maybe<Array<Maybe<Links_Mutation_Response>>>;
  /** update data of the table: "profile" */
  update_profile?: Maybe<Profile_Mutation_Response>;
  /** update single row of the table: "profile" */
  update_profile_by_pk?: Maybe<Profile>;
  /** update multiples rows of table: "profile" */
  update_profile_many?: Maybe<Array<Maybe<Profile_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_LinksArgs = {
  where: Links_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Links_By_PkArgs = {
  id_: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProfileArgs = {
  where: Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Profile_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_LinksArgs = {
  objects: Array<Links_Insert_Input>;
  on_conflict?: InputMaybe<Links_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Links_OneArgs = {
  object: Links_Insert_Input;
  on_conflict?: InputMaybe<Links_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProfileArgs = {
  objects: Array<Profile_Insert_Input>;
  on_conflict?: InputMaybe<Profile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Profile_OneArgs = {
  object: Profile_Insert_Input;
  on_conflict?: InputMaybe<Profile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_LinksArgs = {
  _inc?: InputMaybe<Links_Inc_Input>;
  _set?: InputMaybe<Links_Set_Input>;
  where: Links_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Links_By_PkArgs = {
  _inc?: InputMaybe<Links_Inc_Input>;
  _set?: InputMaybe<Links_Set_Input>;
  pk_columns: Links_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Links_ManyArgs = {
  updates: Array<Links_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProfileArgs = {
  _inc?: InputMaybe<Profile_Inc_Input>;
  _set?: InputMaybe<Profile_Set_Input>;
  where: Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Profile_By_PkArgs = {
  _inc?: InputMaybe<Profile_Inc_Input>;
  _set?: InputMaybe<Profile_Set_Input>;
  pk_columns: Profile_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Profile_ManyArgs = {
  updates: Array<Profile_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "profile" */
export type Profile = {
  __typename?: 'profile';
  avatar?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  email?: Maybe<Scalars['String']['output']>;
  first_name: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  last_name: Scalars['String']['output'];
  /** An array relationship */
  links: Array<Links>;
  /** An aggregate relationship */
  links_aggregate: Links_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
  user_id: Scalars['String']['output'];
};


/** columns and relationships of "profile" */
export type ProfileLinksArgs = {
  distinct_on?: InputMaybe<Array<Links_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Links_Order_By>>;
  where?: InputMaybe<Links_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileLinks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Links_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Links_Order_By>>;
  where?: InputMaybe<Links_Bool_Exp>;
};

/** aggregated selection of "profile" */
export type Profile_Aggregate = {
  __typename?: 'profile_aggregate';
  aggregate?: Maybe<Profile_Aggregate_Fields>;
  nodes: Array<Profile>;
};

/** aggregate fields of "profile" */
export type Profile_Aggregate_Fields = {
  __typename?: 'profile_aggregate_fields';
  avg?: Maybe<Profile_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Profile_Max_Fields>;
  min?: Maybe<Profile_Min_Fields>;
  stddev?: Maybe<Profile_Stddev_Fields>;
  stddev_pop?: Maybe<Profile_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Profile_Stddev_Samp_Fields>;
  sum?: Maybe<Profile_Sum_Fields>;
  var_pop?: Maybe<Profile_Var_Pop_Fields>;
  var_samp?: Maybe<Profile_Var_Samp_Fields>;
  variance?: Maybe<Profile_Variance_Fields>;
};


/** aggregate fields of "profile" */
export type Profile_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Profile_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Profile_Avg_Fields = {
  __typename?: 'profile_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "profile". All fields are combined with a logical 'AND'. */
export type Profile_Bool_Exp = {
  _and?: InputMaybe<Array<Profile_Bool_Exp>>;
  _not?: InputMaybe<Profile_Bool_Exp>;
  _or?: InputMaybe<Array<Profile_Bool_Exp>>;
  avatar?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  links?: InputMaybe<Links_Bool_Exp>;
  links_aggregate?: InputMaybe<Links_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "profile" */
export enum Profile_Constraint {
  /** unique or primary key constraint on columns "email" */
  ProfileEmailKey = 'profile_email_key',
  /** unique or primary key constraint on columns "id" */
  ProfilePkey = 'profile_pkey',
  /** unique or primary key constraint on columns "user_id" */
  ProfileUserIdKey = 'profile_user_id_key'
}

/** input type for incrementing numeric columns in table "profile" */
export type Profile_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "profile" */
export type Profile_Insert_Input = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  links?: InputMaybe<Links_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Profile_Max_Fields = {
  __typename?: 'profile_max_fields';
  avatar?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Profile_Min_Fields = {
  __typename?: 'profile_min_fields';
  avatar?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "profile" */
export type Profile_Mutation_Response = {
  __typename?: 'profile_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Profile>;
};

/** input type for inserting object relation for remote table "profile" */
export type Profile_Obj_Rel_Insert_Input = {
  data: Profile_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Profile_On_Conflict>;
};

/** on_conflict condition type for table "profile" */
export type Profile_On_Conflict = {
  constraint: Profile_Constraint;
  update_columns?: Array<Profile_Update_Column>;
  where?: InputMaybe<Profile_Bool_Exp>;
};

/** Ordering options when selecting data from "profile". */
export type Profile_Order_By = {
  avatar?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  links_aggregate?: InputMaybe<Links_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: profile */
export type Profile_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "profile" */
export enum Profile_Select_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "profile" */
export type Profile_Set_Input = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Profile_Stddev_Fields = {
  __typename?: 'profile_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Profile_Stddev_Pop_Fields = {
  __typename?: 'profile_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Profile_Stddev_Samp_Fields = {
  __typename?: 'profile_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "profile" */
export type Profile_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Profile_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Profile_Stream_Cursor_Value_Input = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Profile_Sum_Fields = {
  __typename?: 'profile_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "profile" */
export enum Profile_Update_Column {
  /** column name */
  Avatar = 'avatar',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Profile_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Profile_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Profile_Set_Input>;
  /** filter the rows which have to be updated */
  where: Profile_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Profile_Var_Pop_Fields = {
  __typename?: 'profile_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Profile_Var_Samp_Fields = {
  __typename?: 'profile_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Profile_Variance_Fields = {
  __typename?: 'profile_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  links: Array<Links>;
  /** An aggregate relationship */
  links_aggregate: Links_Aggregate;
  /** fetch data from the table: "links" using primary key columns */
  links_by_pk?: Maybe<Links>;
  /** fetch data from the table: "profile" */
  profile: Array<Profile>;
  /** fetch aggregated fields from the table: "profile" */
  profile_aggregate: Profile_Aggregate;
  /** fetch data from the table: "profile" using primary key columns */
  profile_by_pk?: Maybe<Profile>;
};


export type Query_RootLinksArgs = {
  distinct_on?: InputMaybe<Array<Links_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Links_Order_By>>;
  where?: InputMaybe<Links_Bool_Exp>;
};


export type Query_RootLinks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Links_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Links_Order_By>>;
  where?: InputMaybe<Links_Bool_Exp>;
};


export type Query_RootLinks_By_PkArgs = {
  id_: Scalars['Int']['input'];
};


export type Query_RootProfileArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


export type Query_RootProfile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


export type Query_RootProfile_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  links: Array<Links>;
  /** An aggregate relationship */
  links_aggregate: Links_Aggregate;
  /** fetch data from the table: "links" using primary key columns */
  links_by_pk?: Maybe<Links>;
  /** fetch data from the table in a streaming manner: "links" */
  links_stream: Array<Links>;
  /** fetch data from the table: "profile" */
  profile: Array<Profile>;
  /** fetch aggregated fields from the table: "profile" */
  profile_aggregate: Profile_Aggregate;
  /** fetch data from the table: "profile" using primary key columns */
  profile_by_pk?: Maybe<Profile>;
  /** fetch data from the table in a streaming manner: "profile" */
  profile_stream: Array<Profile>;
};


export type Subscription_RootLinksArgs = {
  distinct_on?: InputMaybe<Array<Links_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Links_Order_By>>;
  where?: InputMaybe<Links_Bool_Exp>;
};


export type Subscription_RootLinks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Links_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Links_Order_By>>;
  where?: InputMaybe<Links_Bool_Exp>;
};


export type Subscription_RootLinks_By_PkArgs = {
  id_: Scalars['Int']['input'];
};


export type Subscription_RootLinks_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Links_Stream_Cursor_Input>>;
  where?: InputMaybe<Links_Bool_Exp>;
};


export type Subscription_RootProfileArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


export type Subscription_RootProfile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


export type Subscription_RootProfile_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootProfile_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Profile_Stream_Cursor_Input>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

export type AddLinksMutationVariables = Exact<{
  profile_id: Scalars['Int']['input'];
  platform_name: Scalars['String']['input'];
  link: Scalars['String']['input'];
}>;


export type AddLinksMutation = { __typename?: 'mutation_root', insert_links_one?: { __typename?: 'links', id_: number, profile_id: number, platform_name: string, link: string } | null };

export type AddProfileMutationVariables = Exact<{
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  avatar?: InputMaybe<Scalars['String']['input']>;
}>;


export type AddProfileMutation = { __typename?: 'mutation_root', insert_profile?: { __typename?: 'profile_mutation_response', returning: Array<{ __typename?: 'profile', id: number, first_name: string, last_name: string, email?: string | null, avatar?: string | null }> } | null };

export type DeleteLinkMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteLinkMutation = { __typename?: 'mutation_root', delete_links_by_pk?: { __typename?: 'links', id_: number } | null };

export type Get_LinksQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type Get_LinksQuery = { __typename?: 'query_root', links: Array<{ __typename?: 'links', platform_name: string, link: string, id_: number }> };

export type GetProfileQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetProfileQuery = { __typename?: 'query_root', profile_by_pk?: { __typename?: 'profile', id: number, avatar?: string | null, email?: string | null, first_name: string, last_name: string, links: Array<{ __typename?: 'links', link: string, platform_name: string, id_: number }> } | null };

export type GetProfileByUserIdQueryVariables = Exact<{
  user_id: Scalars['String']['input'];
}>;


export type GetProfileByUserIdQuery = { __typename?: 'query_root', profile: Array<{ __typename?: 'profile', user_id: string, avatar?: string | null, email?: string | null, first_name: string, last_name: string, id: number }> };

export type Get_ProfilesQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_ProfilesQuery = { __typename?: 'query_root', profile: Array<{ __typename?: 'profile', id: number, last_name: string, first_name: string, email?: string | null, avatar?: string | null }> };

export type InsertOneLinkMutationVariables = Exact<{
  platform_name: Scalars['String']['input'];
  link: Scalars['String']['input'];
  profile_id: Scalars['Int']['input'];
}>;


export type InsertOneLinkMutation = { __typename?: 'mutation_root', insert_links_one?: { __typename?: 'links', id_: number, platform_name: string, link: string, profile_id: number } | null };

export type UpdateProfileMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  first_name?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateProfileMutation = { __typename?: 'mutation_root', update_profile_by_pk?: { __typename?: 'profile', id: number, first_name: string, last_name: string, email?: string | null, avatar?: string | null } | null };

export type UpdateProfileAvatarMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  avatar: Scalars['String']['input'];
}>;


export type UpdateProfileAvatarMutation = { __typename?: 'mutation_root', update_profile?: { __typename?: 'profile_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'profile', id: number, avatar?: string | null }> } | null };


export const AddLinksDocument = gql`
    mutation AddLinks($profile_id: Int!, $platform_name: String!, $link: String!) {
  insert_links_one(
    object: {profile_id: $profile_id, platform_name: $platform_name, link: $link}
  ) {
    id_
    profile_id
    platform_name
    link
  }
}
    `;
export type AddLinksMutationFn = Apollo.MutationFunction<AddLinksMutation, AddLinksMutationVariables>;

/**
 * __useAddLinksMutation__
 *
 * To run a mutation, you first call `useAddLinksMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddLinksMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addLinksMutation, { data, loading, error }] = useAddLinksMutation({
 *   variables: {
 *      profile_id: // value for 'profile_id'
 *      platform_name: // value for 'platform_name'
 *      link: // value for 'link'
 *   },
 * });
 */
export function useAddLinksMutation(baseOptions?: Apollo.MutationHookOptions<AddLinksMutation, AddLinksMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddLinksMutation, AddLinksMutationVariables>(AddLinksDocument, options);
      }
export type AddLinksMutationHookResult = ReturnType<typeof useAddLinksMutation>;
export type AddLinksMutationResult = Apollo.MutationResult<AddLinksMutation>;
export type AddLinksMutationOptions = Apollo.BaseMutationOptions<AddLinksMutation, AddLinksMutationVariables>;
export const AddProfileDocument = gql`
    mutation AddProfile($first_name: String!, $last_name: String!, $email: String!, $avatar: String) {
  insert_profile(
    objects: {first_name: $first_name, last_name: $last_name, email: $email, avatar: $avatar}
  ) {
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
export type AddProfileMutationFn = Apollo.MutationFunction<AddProfileMutation, AddProfileMutationVariables>;

/**
 * __useAddProfileMutation__
 *
 * To run a mutation, you first call `useAddProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProfileMutation, { data, loading, error }] = useAddProfileMutation({
 *   variables: {
 *      first_name: // value for 'first_name'
 *      last_name: // value for 'last_name'
 *      email: // value for 'email'
 *      avatar: // value for 'avatar'
 *   },
 * });
 */
export function useAddProfileMutation(baseOptions?: Apollo.MutationHookOptions<AddProfileMutation, AddProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddProfileMutation, AddProfileMutationVariables>(AddProfileDocument, options);
      }
export type AddProfileMutationHookResult = ReturnType<typeof useAddProfileMutation>;
export type AddProfileMutationResult = Apollo.MutationResult<AddProfileMutation>;
export type AddProfileMutationOptions = Apollo.BaseMutationOptions<AddProfileMutation, AddProfileMutationVariables>;
export const DeleteLinkDocument = gql`
    mutation DeleteLink($id: Int!) {
  delete_links_by_pk(id_: $id) {
    id_
  }
}
    `;
export type DeleteLinkMutationFn = Apollo.MutationFunction<DeleteLinkMutation, DeleteLinkMutationVariables>;

/**
 * __useDeleteLinkMutation__
 *
 * To run a mutation, you first call `useDeleteLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLinkMutation, { data, loading, error }] = useDeleteLinkMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteLinkMutation(baseOptions?: Apollo.MutationHookOptions<DeleteLinkMutation, DeleteLinkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteLinkMutation, DeleteLinkMutationVariables>(DeleteLinkDocument, options);
      }
export type DeleteLinkMutationHookResult = ReturnType<typeof useDeleteLinkMutation>;
export type DeleteLinkMutationResult = Apollo.MutationResult<DeleteLinkMutation>;
export type DeleteLinkMutationOptions = Apollo.BaseMutationOptions<DeleteLinkMutation, DeleteLinkMutationVariables>;
export const Get_LinksDocument = gql`
    query get_links($id: Int!) {
  links(where: {profile_id: {_eq: $id}}) {
    platform_name
    link
    id_
  }
}
    `;

/**
 * __useGet_LinksQuery__
 *
 * To run a query within a React component, call `useGet_LinksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_LinksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_LinksQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGet_LinksQuery(baseOptions: Apollo.QueryHookOptions<Get_LinksQuery, Get_LinksQueryVariables> & ({ variables: Get_LinksQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Get_LinksQuery, Get_LinksQueryVariables>(Get_LinksDocument, options);
      }
export function useGet_LinksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Get_LinksQuery, Get_LinksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Get_LinksQuery, Get_LinksQueryVariables>(Get_LinksDocument, options);
        }
export function useGet_LinksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<Get_LinksQuery, Get_LinksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Get_LinksQuery, Get_LinksQueryVariables>(Get_LinksDocument, options);
        }
export type Get_LinksQueryHookResult = ReturnType<typeof useGet_LinksQuery>;
export type Get_LinksLazyQueryHookResult = ReturnType<typeof useGet_LinksLazyQuery>;
export type Get_LinksSuspenseQueryHookResult = ReturnType<typeof useGet_LinksSuspenseQuery>;
export type Get_LinksQueryResult = Apollo.QueryResult<Get_LinksQuery, Get_LinksQueryVariables>;
export const GetProfileDocument = gql`
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

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProfileQuery(baseOptions: Apollo.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables> & ({ variables: GetProfileQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
      }
export function useGetProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
        }
export function useGetProfileSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
        }
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileSuspenseQueryHookResult = ReturnType<typeof useGetProfileSuspenseQuery>;
export type GetProfileQueryResult = Apollo.QueryResult<GetProfileQuery, GetProfileQueryVariables>;
export const GetProfileByUserIdDocument = gql`
    query GetProfileByUserId($user_id: String!) {
  profile(where: {user_id: {_eq: $user_id}}) {
    user_id
    avatar
    email
    first_name
    last_name
    id
  }
}
    `;

/**
 * __useGetProfileByUserIdQuery__
 *
 * To run a query within a React component, call `useGetProfileByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileByUserIdQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetProfileByUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetProfileByUserIdQuery, GetProfileByUserIdQueryVariables> & ({ variables: GetProfileByUserIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileByUserIdQuery, GetProfileByUserIdQueryVariables>(GetProfileByUserIdDocument, options);
      }
export function useGetProfileByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileByUserIdQuery, GetProfileByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileByUserIdQuery, GetProfileByUserIdQueryVariables>(GetProfileByUserIdDocument, options);
        }
export function useGetProfileByUserIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProfileByUserIdQuery, GetProfileByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProfileByUserIdQuery, GetProfileByUserIdQueryVariables>(GetProfileByUserIdDocument, options);
        }
export type GetProfileByUserIdQueryHookResult = ReturnType<typeof useGetProfileByUserIdQuery>;
export type GetProfileByUserIdLazyQueryHookResult = ReturnType<typeof useGetProfileByUserIdLazyQuery>;
export type GetProfileByUserIdSuspenseQueryHookResult = ReturnType<typeof useGetProfileByUserIdSuspenseQuery>;
export type GetProfileByUserIdQueryResult = Apollo.QueryResult<GetProfileByUserIdQuery, GetProfileByUserIdQueryVariables>;
export const Get_ProfilesDocument = gql`
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

/**
 * __useGet_ProfilesQuery__
 *
 * To run a query within a React component, call `useGet_ProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_ProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_ProfilesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGet_ProfilesQuery(baseOptions?: Apollo.QueryHookOptions<Get_ProfilesQuery, Get_ProfilesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Get_ProfilesQuery, Get_ProfilesQueryVariables>(Get_ProfilesDocument, options);
      }
export function useGet_ProfilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Get_ProfilesQuery, Get_ProfilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Get_ProfilesQuery, Get_ProfilesQueryVariables>(Get_ProfilesDocument, options);
        }
export function useGet_ProfilesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<Get_ProfilesQuery, Get_ProfilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Get_ProfilesQuery, Get_ProfilesQueryVariables>(Get_ProfilesDocument, options);
        }
export type Get_ProfilesQueryHookResult = ReturnType<typeof useGet_ProfilesQuery>;
export type Get_ProfilesLazyQueryHookResult = ReturnType<typeof useGet_ProfilesLazyQuery>;
export type Get_ProfilesSuspenseQueryHookResult = ReturnType<typeof useGet_ProfilesSuspenseQuery>;
export type Get_ProfilesQueryResult = Apollo.QueryResult<Get_ProfilesQuery, Get_ProfilesQueryVariables>;
export const InsertOneLinkDocument = gql`
    mutation InsertOneLink($platform_name: String!, $link: String!, $profile_id: Int!) {
  insert_links_one(
    object: {platform_name: $platform_name, link: $link, profile_id: $profile_id}
    on_conflict: {constraint: links_link_key, update_columns: [created_at]}
  ) {
    id_
    platform_name
    link
    profile_id
  }
}
    `;
export type InsertOneLinkMutationFn = Apollo.MutationFunction<InsertOneLinkMutation, InsertOneLinkMutationVariables>;

/**
 * __useInsertOneLinkMutation__
 *
 * To run a mutation, you first call `useInsertOneLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertOneLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertOneLinkMutation, { data, loading, error }] = useInsertOneLinkMutation({
 *   variables: {
 *      platform_name: // value for 'platform_name'
 *      link: // value for 'link'
 *      profile_id: // value for 'profile_id'
 *   },
 * });
 */
export function useInsertOneLinkMutation(baseOptions?: Apollo.MutationHookOptions<InsertOneLinkMutation, InsertOneLinkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertOneLinkMutation, InsertOneLinkMutationVariables>(InsertOneLinkDocument, options);
      }
export type InsertOneLinkMutationHookResult = ReturnType<typeof useInsertOneLinkMutation>;
export type InsertOneLinkMutationResult = Apollo.MutationResult<InsertOneLinkMutation>;
export type InsertOneLinkMutationOptions = Apollo.BaseMutationOptions<InsertOneLinkMutation, InsertOneLinkMutationVariables>;
export const UpdateProfileDocument = gql`
    mutation UpdateProfile($id: Int!, $first_name: String, $last_name: String, $email: String, $avatar: String) {
  update_profile_by_pk(
    pk_columns: {id: $id}
    _set: {first_name: $first_name, last_name: $last_name, email: $email, avatar: $avatar}
  ) {
    id
    first_name
    last_name
    email
    avatar
  }
}
    `;
export type UpdateProfileMutationFn = Apollo.MutationFunction<UpdateProfileMutation, UpdateProfileMutationVariables>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      id: // value for 'id'
 *      first_name: // value for 'first_name'
 *      last_name: // value for 'last_name'
 *      email: // value for 'email'
 *      avatar: // value for 'avatar'
 *   },
 * });
 */
export function useUpdateProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileMutation, UpdateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument, options);
      }
export type UpdateProfileMutationHookResult = ReturnType<typeof useUpdateProfileMutation>;
export type UpdateProfileMutationResult = Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const UpdateProfileAvatarDocument = gql`
    mutation UpdateProfileAvatar($id: Int!, $avatar: String!) {
  update_profile(where: {id: {_eq: $id}}, _set: {avatar: $avatar}) {
    affected_rows
    returning {
      id
      avatar
    }
  }
}
    `;
export type UpdateProfileAvatarMutationFn = Apollo.MutationFunction<UpdateProfileAvatarMutation, UpdateProfileAvatarMutationVariables>;

/**
 * __useUpdateProfileAvatarMutation__
 *
 * To run a mutation, you first call `useUpdateProfileAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileAvatarMutation, { data, loading, error }] = useUpdateProfileAvatarMutation({
 *   variables: {
 *      id: // value for 'id'
 *      avatar: // value for 'avatar'
 *   },
 * });
 */
export function useUpdateProfileAvatarMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileAvatarMutation, UpdateProfileAvatarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileAvatarMutation, UpdateProfileAvatarMutationVariables>(UpdateProfileAvatarDocument, options);
      }
export type UpdateProfileAvatarMutationHookResult = ReturnType<typeof useUpdateProfileAvatarMutation>;
export type UpdateProfileAvatarMutationResult = Apollo.MutationResult<UpdateProfileAvatarMutation>;
export type UpdateProfileAvatarMutationOptions = Apollo.BaseMutationOptions<UpdateProfileAvatarMutation, UpdateProfileAvatarMutationVariables>;