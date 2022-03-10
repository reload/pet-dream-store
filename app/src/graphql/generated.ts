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

export type Animal = {
  __typename?: 'Animal';
  /** The type of animal */
  animal: Scalars['String'];
  /** The description of the animal */
  description: Scalars['String'];
  /** The image of the animal */
  img: Scalars['String'];
  /** The name of the animal */
  name: Scalars['String'];
  /** The size of the animal */
  size: Scalars['Float'];
  /** The species of animal */
  type: Scalars['String'];
  /** The weigth of the animal */
  weigth: Scalars['Float'];
};

export type Cat = {
  __typename?: 'Cat';
  /** The type of animal */
  animal: Scalars['String'];
  /** The description of the cat */
  description: Scalars['String'];
  /** The image of the cat */
  img: Scalars['String'];
  /** The name of the cat */
  name: Scalars['String'];
  /** The size of the cat */
  size: Scalars['Float'];
  /** The type of cat */
  type: Scalars['String'];
  /** The weigth of the cat */
  weigth: Scalars['Float'];
};

export type CreateCrocodileInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type Crocodile = {
  __typename?: 'Crocodile';
  /** The description of the croc */
  description: Scalars['String'];
  /** The image of the croc */
  img: Scalars['String'];
  /** The name of the croc */
  name: Scalars['String'];
  /** The size of the croc */
  size: Scalars['Float'];
  /** The type of croc */
  type: Scalars['String'];
  /** The weigth of the croc */
  weigth: Scalars['Float'];
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
  animals: Array<Maybe<Animal>>;
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

export type AllAnimalsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAnimalsQuery = { __typename?: 'Query', animals: Array<{ __typename?: 'Animal', type: string, animal: string, name: string, img: string, description: string, size: number, weigth: number } | null> };


export const AllAnimalsDocument = `
    query allAnimals {
  animals {
    type
    animal
    name
    img
    description
    size
    weigth
  }
}
    `;
export const useAllAnimalsQuery = <
      TData = AllAnimalsQuery,
      TError = unknown
    >(
      variables?: AllAnimalsQueryVariables,
      options?: UseQueryOptions<AllAnimalsQuery, TError, TData>
    ) =>
    useQuery<AllAnimalsQuery, TError, TData>(
      variables === undefined ? ['allAnimals'] : ['allAnimals', variables],
      fetcher<AllAnimalsQuery, AllAnimalsQueryVariables>(AllAnimalsDocument, variables),
      options
    );