import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("http://localhost:3001/graphql", {
    method: "POST",
    ...({"headers":{"Content-Type":"application/json"}}),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cat = {
  __typename?: 'Cat';
  /** The image of the cat */
  img: Scalars['String'];
  /** The name of the cat */
  name: Scalars['String'];
  /** The type of cat */
  type: Scalars['String'];
};

export type CreateCrocodileInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type Crocodile = {
  __typename?: 'Crocodile';
  /** The image of the croc */
  img: Scalars['String'];
  /** The name of the croc */
  name: Scalars['String'];
  /** The type of croc */
  type: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCrocodile: Crocodile;
  removeCrocodile: Crocodile;
  updateCrocodile: Crocodile;
};


export type MutationCreateCrocodileArgs = {
  createCrocodileInput: CreateCrocodileInput;
};


export type MutationRemoveCrocodileArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateCrocodileArgs = {
  updateCrocodileInput: UpdateCrocodileInput;
};

export type Query = {
  __typename?: 'Query';
  cat: Cat;
  crocodile: Crocodile;
  crocodiles: Array<Crocodile>;
};


export type QueryCatArgs = {
  id: Scalars['Int'];
};


export type QueryCrocodileArgs = {
  id: Scalars['Int'];
};

export type UpdateCrocodileInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type CatQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type CatQuery = { __typename?: 'Query', cat: { __typename?: 'Cat', type: string, name: string, img: string } };


export const CatDocument = `
    query cat($id: Int!) {
  cat(id: $id) {
    type
    name
    img
  }
}
    `;
export const useCatQuery = <
      TData = CatQuery,
      TError = unknown
    >(
      variables: CatQueryVariables,
      options?: UseQueryOptions<CatQuery, TError, TData>
    ) =>
    useQuery<CatQuery, TError, TData>(
      ['cat', variables],
      fetcher<CatQuery, CatQueryVariables>(CatDocument, variables),
      options
    );