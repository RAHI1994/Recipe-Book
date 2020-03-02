// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  ingredient: (where?: IngredientWhereInput) => Promise<boolean>;
  recipes: (where?: RecipesWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  ingredient: (where: IngredientWhereUniqueInput) => IngredientNullablePromise;
  ingredients: (args?: {
    where?: IngredientWhereInput;
    orderBy?: IngredientOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Ingredient>;
  ingredientsConnection: (args?: {
    where?: IngredientWhereInput;
    orderBy?: IngredientOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => IngredientConnectionPromise;
  recipes: (where: RecipesWhereUniqueInput) => RecipesNullablePromise;
  recipeses: (args?: {
    where?: RecipesWhereInput;
    orderBy?: RecipesOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Recipes>;
  recipesesConnection: (args?: {
    where?: RecipesWhereInput;
    orderBy?: RecipesOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => RecipesConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createIngredient: (data: IngredientCreateInput) => IngredientPromise;
  updateIngredient: (args: {
    data: IngredientUpdateInput;
    where: IngredientWhereUniqueInput;
  }) => IngredientPromise;
  updateManyIngredients: (args: {
    data: IngredientUpdateManyMutationInput;
    where?: IngredientWhereInput;
  }) => BatchPayloadPromise;
  upsertIngredient: (args: {
    where: IngredientWhereUniqueInput;
    create: IngredientCreateInput;
    update: IngredientUpdateInput;
  }) => IngredientPromise;
  deleteIngredient: (where: IngredientWhereUniqueInput) => IngredientPromise;
  deleteManyIngredients: (where?: IngredientWhereInput) => BatchPayloadPromise;
  createRecipes: (data: RecipesCreateInput) => RecipesPromise;
  updateRecipes: (args: {
    data: RecipesUpdateInput;
    where: RecipesWhereUniqueInput;
  }) => RecipesPromise;
  updateManyRecipeses: (args: {
    data: RecipesUpdateManyMutationInput;
    where?: RecipesWhereInput;
  }) => BatchPayloadPromise;
  upsertRecipes: (args: {
    where: RecipesWhereUniqueInput;
    create: RecipesCreateInput;
    update: RecipesUpdateInput;
  }) => RecipesPromise;
  deleteRecipes: (where: RecipesWhereUniqueInput) => RecipesPromise;
  deleteManyRecipeses: (where?: RecipesWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  ingredient: (
    where?: IngredientSubscriptionWhereInput
  ) => IngredientSubscriptionPayloadSubscription;
  recipes: (
    where?: RecipesSubscriptionWhereInput
  ) => RecipesSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type RecipesOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "description_ASC"
  | "description_DESC"
  | "imgUrl_ASC"
  | "imgUrl_DESC";

export type IngredientOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "amount_ASC"
  | "amount_DESC";

export type UserOrderByInput = "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type IngredientWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface RecipesWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  imgUrl?: Maybe<String>;
  imgUrl_not?: Maybe<String>;
  imgUrl_in?: Maybe<String[] | String>;
  imgUrl_not_in?: Maybe<String[] | String>;
  imgUrl_lt?: Maybe<String>;
  imgUrl_lte?: Maybe<String>;
  imgUrl_gt?: Maybe<String>;
  imgUrl_gte?: Maybe<String>;
  imgUrl_contains?: Maybe<String>;
  imgUrl_not_contains?: Maybe<String>;
  imgUrl_starts_with?: Maybe<String>;
  imgUrl_not_starts_with?: Maybe<String>;
  imgUrl_ends_with?: Maybe<String>;
  imgUrl_not_ends_with?: Maybe<String>;
  ingredients_every?: Maybe<IngredientWhereInput>;
  ingredients_some?: Maybe<IngredientWhereInput>;
  ingredients_none?: Maybe<IngredientWhereInput>;
  AND?: Maybe<RecipesWhereInput[] | RecipesWhereInput>;
  OR?: Maybe<RecipesWhereInput[] | RecipesWhereInput>;
  NOT?: Maybe<RecipesWhereInput[] | RecipesWhereInput>;
}

export interface IngredientWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  amount?: Maybe<Int>;
  amount_not?: Maybe<Int>;
  amount_in?: Maybe<Int[] | Int>;
  amount_not_in?: Maybe<Int[] | Int>;
  amount_lt?: Maybe<Int>;
  amount_lte?: Maybe<Int>;
  amount_gt?: Maybe<Int>;
  amount_gte?: Maybe<Int>;
  recipes_every?: Maybe<RecipesWhereInput>;
  recipes_some?: Maybe<RecipesWhereInput>;
  recipes_none?: Maybe<RecipesWhereInput>;
  AND?: Maybe<IngredientWhereInput[] | IngredientWhereInput>;
  OR?: Maybe<IngredientWhereInput[] | IngredientWhereInput>;
  NOT?: Maybe<IngredientWhereInput[] | IngredientWhereInput>;
}

export type RecipesWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface IngredientCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  amount: Int;
  recipes?: Maybe<RecipesCreateManyWithoutIngredientsInput>;
}

export interface RecipesCreateManyWithoutIngredientsInput {
  create?: Maybe<
    | RecipesCreateWithoutIngredientsInput[]
    | RecipesCreateWithoutIngredientsInput
  >;
  connect?: Maybe<RecipesWhereUniqueInput[] | RecipesWhereUniqueInput>;
}

export interface RecipesCreateWithoutIngredientsInput {
  id?: Maybe<ID_Input>;
  name: String;
  description: String;
  imgUrl: String;
}

export interface IngredientUpdateInput {
  name?: Maybe<String>;
  amount?: Maybe<Int>;
  recipes?: Maybe<RecipesUpdateManyWithoutIngredientsInput>;
}

export interface RecipesUpdateManyWithoutIngredientsInput {
  create?: Maybe<
    | RecipesCreateWithoutIngredientsInput[]
    | RecipesCreateWithoutIngredientsInput
  >;
  delete?: Maybe<RecipesWhereUniqueInput[] | RecipesWhereUniqueInput>;
  connect?: Maybe<RecipesWhereUniqueInput[] | RecipesWhereUniqueInput>;
  set?: Maybe<RecipesWhereUniqueInput[] | RecipesWhereUniqueInput>;
  disconnect?: Maybe<RecipesWhereUniqueInput[] | RecipesWhereUniqueInput>;
  update?: Maybe<
    | RecipesUpdateWithWhereUniqueWithoutIngredientsInput[]
    | RecipesUpdateWithWhereUniqueWithoutIngredientsInput
  >;
  upsert?: Maybe<
    | RecipesUpsertWithWhereUniqueWithoutIngredientsInput[]
    | RecipesUpsertWithWhereUniqueWithoutIngredientsInput
  >;
  deleteMany?: Maybe<RecipesScalarWhereInput[] | RecipesScalarWhereInput>;
  updateMany?: Maybe<
    | RecipesUpdateManyWithWhereNestedInput[]
    | RecipesUpdateManyWithWhereNestedInput
  >;
}

export interface RecipesUpdateWithWhereUniqueWithoutIngredientsInput {
  where: RecipesWhereUniqueInput;
  data: RecipesUpdateWithoutIngredientsDataInput;
}

export interface RecipesUpdateWithoutIngredientsDataInput {
  name?: Maybe<String>;
  description?: Maybe<String>;
  imgUrl?: Maybe<String>;
}

export interface RecipesUpsertWithWhereUniqueWithoutIngredientsInput {
  where: RecipesWhereUniqueInput;
  update: RecipesUpdateWithoutIngredientsDataInput;
  create: RecipesCreateWithoutIngredientsInput;
}

export interface RecipesScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  imgUrl?: Maybe<String>;
  imgUrl_not?: Maybe<String>;
  imgUrl_in?: Maybe<String[] | String>;
  imgUrl_not_in?: Maybe<String[] | String>;
  imgUrl_lt?: Maybe<String>;
  imgUrl_lte?: Maybe<String>;
  imgUrl_gt?: Maybe<String>;
  imgUrl_gte?: Maybe<String>;
  imgUrl_contains?: Maybe<String>;
  imgUrl_not_contains?: Maybe<String>;
  imgUrl_starts_with?: Maybe<String>;
  imgUrl_not_starts_with?: Maybe<String>;
  imgUrl_ends_with?: Maybe<String>;
  imgUrl_not_ends_with?: Maybe<String>;
  AND?: Maybe<RecipesScalarWhereInput[] | RecipesScalarWhereInput>;
  OR?: Maybe<RecipesScalarWhereInput[] | RecipesScalarWhereInput>;
  NOT?: Maybe<RecipesScalarWhereInput[] | RecipesScalarWhereInput>;
}

export interface RecipesUpdateManyWithWhereNestedInput {
  where: RecipesScalarWhereInput;
  data: RecipesUpdateManyDataInput;
}

export interface RecipesUpdateManyDataInput {
  name?: Maybe<String>;
  description?: Maybe<String>;
  imgUrl?: Maybe<String>;
}

export interface IngredientUpdateManyMutationInput {
  name?: Maybe<String>;
  amount?: Maybe<Int>;
}

export interface RecipesCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  description: String;
  imgUrl: String;
  ingredients?: Maybe<IngredientCreateManyWithoutRecipesInput>;
}

export interface IngredientCreateManyWithoutRecipesInput {
  create?: Maybe<
    IngredientCreateWithoutRecipesInput[] | IngredientCreateWithoutRecipesInput
  >;
  connect?: Maybe<IngredientWhereUniqueInput[] | IngredientWhereUniqueInput>;
}

export interface IngredientCreateWithoutRecipesInput {
  id?: Maybe<ID_Input>;
  name: String;
  amount: Int;
}

export interface RecipesUpdateInput {
  name?: Maybe<String>;
  description?: Maybe<String>;
  imgUrl?: Maybe<String>;
  ingredients?: Maybe<IngredientUpdateManyWithoutRecipesInput>;
}

export interface IngredientUpdateManyWithoutRecipesInput {
  create?: Maybe<
    IngredientCreateWithoutRecipesInput[] | IngredientCreateWithoutRecipesInput
  >;
  delete?: Maybe<IngredientWhereUniqueInput[] | IngredientWhereUniqueInput>;
  connect?: Maybe<IngredientWhereUniqueInput[] | IngredientWhereUniqueInput>;
  set?: Maybe<IngredientWhereUniqueInput[] | IngredientWhereUniqueInput>;
  disconnect?: Maybe<IngredientWhereUniqueInput[] | IngredientWhereUniqueInput>;
  update?: Maybe<
    | IngredientUpdateWithWhereUniqueWithoutRecipesInput[]
    | IngredientUpdateWithWhereUniqueWithoutRecipesInput
  >;
  upsert?: Maybe<
    | IngredientUpsertWithWhereUniqueWithoutRecipesInput[]
    | IngredientUpsertWithWhereUniqueWithoutRecipesInput
  >;
  deleteMany?: Maybe<IngredientScalarWhereInput[] | IngredientScalarWhereInput>;
  updateMany?: Maybe<
    | IngredientUpdateManyWithWhereNestedInput[]
    | IngredientUpdateManyWithWhereNestedInput
  >;
}

export interface IngredientUpdateWithWhereUniqueWithoutRecipesInput {
  where: IngredientWhereUniqueInput;
  data: IngredientUpdateWithoutRecipesDataInput;
}

export interface IngredientUpdateWithoutRecipesDataInput {
  name?: Maybe<String>;
  amount?: Maybe<Int>;
}

export interface IngredientUpsertWithWhereUniqueWithoutRecipesInput {
  where: IngredientWhereUniqueInput;
  update: IngredientUpdateWithoutRecipesDataInput;
  create: IngredientCreateWithoutRecipesInput;
}

export interface IngredientScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  amount?: Maybe<Int>;
  amount_not?: Maybe<Int>;
  amount_in?: Maybe<Int[] | Int>;
  amount_not_in?: Maybe<Int[] | Int>;
  amount_lt?: Maybe<Int>;
  amount_lte?: Maybe<Int>;
  amount_gt?: Maybe<Int>;
  amount_gte?: Maybe<Int>;
  AND?: Maybe<IngredientScalarWhereInput[] | IngredientScalarWhereInput>;
  OR?: Maybe<IngredientScalarWhereInput[] | IngredientScalarWhereInput>;
  NOT?: Maybe<IngredientScalarWhereInput[] | IngredientScalarWhereInput>;
}

export interface IngredientUpdateManyWithWhereNestedInput {
  where: IngredientScalarWhereInput;
  data: IngredientUpdateManyDataInput;
}

export interface IngredientUpdateManyDataInput {
  name?: Maybe<String>;
  amount?: Maybe<Int>;
}

export interface RecipesUpdateManyMutationInput {
  name?: Maybe<String>;
  description?: Maybe<String>;
  imgUrl?: Maybe<String>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
}

export interface IngredientSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<IngredientWhereInput>;
  AND?: Maybe<
    IngredientSubscriptionWhereInput[] | IngredientSubscriptionWhereInput
  >;
  OR?: Maybe<
    IngredientSubscriptionWhereInput[] | IngredientSubscriptionWhereInput
  >;
  NOT?: Maybe<
    IngredientSubscriptionWhereInput[] | IngredientSubscriptionWhereInput
  >;
}

export interface RecipesSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<RecipesWhereInput>;
  AND?: Maybe<RecipesSubscriptionWhereInput[] | RecipesSubscriptionWhereInput>;
  OR?: Maybe<RecipesSubscriptionWhereInput[] | RecipesSubscriptionWhereInput>;
  NOT?: Maybe<RecipesSubscriptionWhereInput[] | RecipesSubscriptionWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Ingredient {
  id: ID_Output;
  name: String;
  amount: Int;
}

export interface IngredientPromise extends Promise<Ingredient>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  amount: () => Promise<Int>;
  recipes: <T = FragmentableArray<Recipes>>(args?: {
    where?: RecipesWhereInput;
    orderBy?: RecipesOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface IngredientSubscription
  extends Promise<AsyncIterator<Ingredient>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  amount: () => Promise<AsyncIterator<Int>>;
  recipes: <T = Promise<AsyncIterator<RecipesSubscription>>>(args?: {
    where?: RecipesWhereInput;
    orderBy?: RecipesOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface IngredientNullablePromise
  extends Promise<Ingredient | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  amount: () => Promise<Int>;
  recipes: <T = FragmentableArray<Recipes>>(args?: {
    where?: RecipesWhereInput;
    orderBy?: RecipesOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface Recipes {
  id: ID_Output;
  name: String;
  description: String;
  imgUrl: String;
}

export interface RecipesPromise extends Promise<Recipes>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  description: () => Promise<String>;
  imgUrl: () => Promise<String>;
  ingredients: <T = FragmentableArray<Ingredient>>(args?: {
    where?: IngredientWhereInput;
    orderBy?: IngredientOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface RecipesSubscription
  extends Promise<AsyncIterator<Recipes>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  imgUrl: () => Promise<AsyncIterator<String>>;
  ingredients: <T = Promise<AsyncIterator<IngredientSubscription>>>(args?: {
    where?: IngredientWhereInput;
    orderBy?: IngredientOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface RecipesNullablePromise
  extends Promise<Recipes | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  description: () => Promise<String>;
  imgUrl: () => Promise<String>;
  ingredients: <T = FragmentableArray<Ingredient>>(args?: {
    where?: IngredientWhereInput;
    orderBy?: IngredientOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface IngredientConnection {
  pageInfo: PageInfo;
  edges: IngredientEdge[];
}

export interface IngredientConnectionPromise
  extends Promise<IngredientConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<IngredientEdge>>() => T;
  aggregate: <T = AggregateIngredientPromise>() => T;
}

export interface IngredientConnectionSubscription
  extends Promise<AsyncIterator<IngredientConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<IngredientEdgeSubscription>>>() => T;
  aggregate: <T = AggregateIngredientSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface IngredientEdge {
  node: Ingredient;
  cursor: String;
}

export interface IngredientEdgePromise
  extends Promise<IngredientEdge>,
    Fragmentable {
  node: <T = IngredientPromise>() => T;
  cursor: () => Promise<String>;
}

export interface IngredientEdgeSubscription
  extends Promise<AsyncIterator<IngredientEdge>>,
    Fragmentable {
  node: <T = IngredientSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateIngredient {
  count: Int;
}

export interface AggregateIngredientPromise
  extends Promise<AggregateIngredient>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateIngredientSubscription
  extends Promise<AsyncIterator<AggregateIngredient>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface RecipesConnection {
  pageInfo: PageInfo;
  edges: RecipesEdge[];
}

export interface RecipesConnectionPromise
  extends Promise<RecipesConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<RecipesEdge>>() => T;
  aggregate: <T = AggregateRecipesPromise>() => T;
}

export interface RecipesConnectionSubscription
  extends Promise<AsyncIterator<RecipesConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<RecipesEdgeSubscription>>>() => T;
  aggregate: <T = AggregateRecipesSubscription>() => T;
}

export interface RecipesEdge {
  node: Recipes;
  cursor: String;
}

export interface RecipesEdgePromise extends Promise<RecipesEdge>, Fragmentable {
  node: <T = RecipesPromise>() => T;
  cursor: () => Promise<String>;
}

export interface RecipesEdgeSubscription
  extends Promise<AsyncIterator<RecipesEdge>>,
    Fragmentable {
  node: <T = RecipesSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateRecipes {
  count: Int;
}

export interface AggregateRecipesPromise
  extends Promise<AggregateRecipes>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateRecipesSubscription
  extends Promise<AsyncIterator<AggregateRecipes>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface User {
  id: ID_Output;
  name: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface IngredientSubscriptionPayload {
  mutation: MutationType;
  node: Ingredient;
  updatedFields: String[];
  previousValues: IngredientPreviousValues;
}

export interface IngredientSubscriptionPayloadPromise
  extends Promise<IngredientSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = IngredientPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = IngredientPreviousValuesPromise>() => T;
}

export interface IngredientSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<IngredientSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = IngredientSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = IngredientPreviousValuesSubscription>() => T;
}

export interface IngredientPreviousValues {
  id: ID_Output;
  name: String;
  amount: Int;
}

export interface IngredientPreviousValuesPromise
  extends Promise<IngredientPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  amount: () => Promise<Int>;
}

export interface IngredientPreviousValuesSubscription
  extends Promise<AsyncIterator<IngredientPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  amount: () => Promise<AsyncIterator<Int>>;
}

export interface RecipesSubscriptionPayload {
  mutation: MutationType;
  node: Recipes;
  updatedFields: String[];
  previousValues: RecipesPreviousValues;
}

export interface RecipesSubscriptionPayloadPromise
  extends Promise<RecipesSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = RecipesPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = RecipesPreviousValuesPromise>() => T;
}

export interface RecipesSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<RecipesSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = RecipesSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = RecipesPreviousValuesSubscription>() => T;
}

export interface RecipesPreviousValues {
  id: ID_Output;
  name: String;
  description: String;
  imgUrl: String;
}

export interface RecipesPreviousValuesPromise
  extends Promise<RecipesPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  description: () => Promise<String>;
  imgUrl: () => Promise<String>;
}

export interface RecipesPreviousValuesSubscription
  extends Promise<AsyncIterator<RecipesPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  imgUrl: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Recipes",
    embedded: false
  },
  {
    name: "Ingredient",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
