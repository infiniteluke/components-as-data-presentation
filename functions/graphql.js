import { ApolloServer, gql } from "apollo-server-lambda";

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  interface Component {
    component: String!
    treatment: String
  }

  type VideoTile implements Component {
    component: String!
    treatment: String
    data: VideoData
  }

  type VideoData {
    image: String!
    title: String!
    secondaryTitle: String!
    percentViewed: Float
  }

  type SeriesTile implements Component {
    component: String!
    treatment: String
    data: SeriesData
  }

  type SeriesData {
    image: String!
    title: String!
    secondaryTitle: String!
    favoriteId: String
  }

  union Tile = VideoTile | SeriesTile

  type ShelfData {
    title: String
    items: [Tile]
  }

  interface Section {
    component: String!
    treatment: String
  }

  type Shelf implements Section & Component {
    component: String!
    treatment: String
    data: ShelfData
  }

  interface Featured {
    component: String!
    treatment: String
  }

  type SlideshowData {
    items: [Slide]
  }

  type Slideshow implements Featured & Component {
    component: String!
    treatment: String
    data: SlideshowData
  }

  type SlideData {
    image: String!
    title: String!
    secondaryTitle: String
  }

  type Slide {
    component: String!
    treatment: String
    data: SlideData
  }

  type Page implements Component {
    id: ID!
    treatment: String
    component: String!
    name: String!
    featured: Featured
    sections: [Section]!
  }

  enum SupportedPlatforms {
    iOS
    tvOS
    roku
    rokuStick
    samsungTv
    android
    androidTv
    xboxOne
    web
    mobileWeb
    fireTablet
    fireTv
    fireTvStick
    vizio
  }

  type Query {
    page(
      id: ID
      name: String!
      userId: String!
      platform: SupportedPlatforms!
    ): Page
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    page: (root, args, context) => {
      return {
        __typename: 'Page',
        component: 'Page',
        name: args.name,
        featured: {
          __typename: 'Slideshow',
          component: 'Slideshow',
          data: {
            items: [
              {
                __typename: 'Slide',
                component: 'Slide',
                data: {
                  image: 'https://via.placeholder.com/700x400',
                  title: 'This Is Us'
                }
              },
              {
                __typename: 'Slide',
                component: 'Slide',
                data: {
                  image: 'https://via.placeholder.com/700x400',
                  title: 'Keeping Up With The Karadashians'
                }
              },
              {
                __typename: 'Slide',
                component: 'Slide',
                data: {
                  image: 'https://via.placeholder.com/700x400',
                  title: 'Days of Our Lives'
                }
              }
            ]
          }
        },
        sections: [
          {
            __typename: 'Shelf',
            component: 'Shelf',
            data: {
              title: 'Top Picks For You',
              items: [
                {
                  __typename: 'SeriesTile',
                  component: 'SeriesTile',
                  data: {
                    image: 'https://via.placeholder.com/700x400',
                    title: 'This Is Us'
                  }
                },
                {
                  __typename: 'SeriesTile',
                  component: 'SeriesTile',
                  data: {
                    image: 'https://via.placeholder.com/700x400',
                    title: 'Keeping Up With The Karadashians'
                  }
                },
                {
                  __typename: 'SeriesTile',
                  component: 'SeriesTile',
                  data: {
                    image: 'https://via.placeholder.com/700x400',
                    title: 'The Blacklist'
                  }
                },
                {
                  __typename: 'SeriesTile',
                  component: 'SeriesTile',
                  data: {
                    image: 'https://via.placeholder.com/700x400',
                    title: 'Songland'
                  }
                }
              ]
            }
          }
        ]
      };
    }
  }
};

const defaultQuery = `{
  page(name: "homepage", userId: "luke", platform: web) {
    component
    featured {
      ...slideshow
 	  }
    sections {
      ...shelf
    }
  }
}

fragment shelf on Shelf {
  component
  data {
    title
    items {
      ...seriesTile
    }
  }
}

fragment seriesTile on SeriesTile {
  component
  data {
    image
    title
  }
}

fragment slideshow on Slideshow {
  component
  data {
    items {
      ...slide
    }    
  }
}

fragment slide on Slide {
  component
  data {
    image
    title
  }
}`

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // For demo purposes. Don't do this in production.
  introspection: true,
  playground: {
    tabs: [
      {
        endpoint: 'graphql',
        query: defaultQuery,
      },
    ],
  }
});

exports.handler = server.createHandler();
