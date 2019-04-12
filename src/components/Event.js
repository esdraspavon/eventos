import React from "react";

const Event = props => {
  const { name, url } = props.info;
  if (!name) return null;
  let desc = props.info.description.text;
  if (desc.length > 250) {
    desc = desc.substr(0, 250);
  }
  return (
    <div>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top">
          {props.info.logo ? (
            <img src={props.info.logo.url} alt={props.info.name.text} />
          ) : (
            ""
          )}
        </div>

        <div className="uk-card-body">
          <h3 className="uk-card-title">{props.info.name.text}</h3>
          <p>{desc}</p>
        </div>

        <div className="uk-card-footer">
          <a
            href={url}
            className="uk-button uk-button-secondary"
            target="_blank"
          >
            Más información
          </a>
        </div>
      </div>
    </div>
  );
};

export default Event;
