/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListCountriesAndCurrencies
// ====================================================

export interface ListCountriesAndCurrencies_listCountries_edges_node {
  __typename: "Country";
  id: string;
  countryName: string;
  countryCode: string;
}

export interface ListCountriesAndCurrencies_listCountries_edges {
  __typename: "CountryEdge";
  node: ListCountriesAndCurrencies_listCountries_edges_node;
  cursor: string;
}

export interface ListCountriesAndCurrencies_listCountries_pageInfo {
  __typename: "PageInfo";
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
  endCursor: string | null;
}

export interface ListCountriesAndCurrencies_listCountries {
  __typename: "CountryConnection";
  edges: (ListCountriesAndCurrencies_listCountries_edges | null)[];
  pageInfo: ListCountriesAndCurrencies_listCountries_pageInfo;
}

export interface ListCountriesAndCurrencies_listCurrencies {
  __typename: "Currency";
  id: string;
  currencyName: string;
  currencyCode: string;
}

export interface ListCountriesAndCurrencies {
  listCountries: ListCountriesAndCurrencies_listCountries;
  listCurrencies: (ListCountriesAndCurrencies_listCurrencies | null)[];
}

export interface ListCountriesAndCurrenciesVariables {
  countriesPaginationInput: PaginationInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PageInfoFragment
// ====================================================

export interface PageInfoFragment {
  __typename: "PageInfo";
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
  endCursor: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CountryFragment
// ====================================================

export interface CountryFragment {
  __typename: "Country";
  id: string;
  countryName: string;
  countryCode: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CurrencyFragment
// ====================================================

export interface CurrencyFragment {
  __typename: "Currency";
  id: string;
  currencyName: string;
  currencyCode: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface PaginationInput {
  first?: number | null;
  last?: number | null;
  before?: string | null;
  after?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
