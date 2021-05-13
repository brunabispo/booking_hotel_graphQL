import { NgModule } from "@angular/core";

// Import Apollo - GraphQL
import { ApolloClientOptions, InMemoryCache } from "@apollo/client/core";
import { APOLLO_OPTIONS } from "apollo-angular";
import { HttpLink } from "apollo-angular/http";

// URL of the GraphQL server (from backend)
const uri = 'http://localhost:4000/graphql';

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ]
})

export class GraphQlModule {}
