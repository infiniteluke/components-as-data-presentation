/* eslint-disable no-undef, react/jsx-no-undef */

import React from 'react';

function Slideshow(props) {
  // Slideshow manages its own slide number state
  const slideNumber = useTimedCounter(props.items.length);
  return (
    <div className="slideshow">
      {props.items.map(slide =>
        // Render children with the current slideNumber and the API data
        renderComponent(COMPONENTS_DICTIONARY, { ...slide, slideNumber })
      )}
    </div>
  );
}

function Slide(props) {
  return (
    <div className="slide">
      <img alt={props.title} src={props.image} />
      <h1>{props.title}</h1>
    </div>
  );
}

function Shelf(props) {
  return (
    <div className="shelf">
      {props.items.map(tile =>
        // Render children with the current slideNumber and the API data
        renderComponent(COMPONENTS_DICTIONARY, { ...tile, slideNumber })
      )}
    </div>
  );
}

function SeriesTile(props) {
  return (
    <div className="seriesTile">
      <Link to={`/shows/${props.urlAlias}`}>
        <img alt={props.title} src={props.image} />
      </Link>
      <p>{props.title}</p>
    </div>
  );
}

/**
 * These dictionaries match our GraphQL interfaces
 */

const FEATURED_DICTIONARY = {
  Slideshow
};

const COMPONENTS_DICTIONARY = {
  Slide,
  SeriesTile
};

const SECTIONS_DICTIONARY = {
  Shelf
};

export function renderComponent(DICTIONARY, { component, data }) {
  const Component = DICTIONARY[component];
  if (!Component) {
    return null;
  }
  return <Component {...data} />;
}

export default function App() {
  const [loading, data] = useComponentAPIFetch();
  if (loading) {
    return 'loading...';
  }
  return (
    <div>
      <section className="featured">
        {renderComponent(FEATURED_DICTIONARY, data.featured)}
      </section>
      <section className="sections">
        {data.sections.map(section =>
          renderComponent(SECTIONS_DICTIONARY, section)
        )}
      </section>
    </div>
  );
}
