import React, { Component } from "react";

class Form extends Component {
  showOptions = key => {
    const category = this.props.categories[key];
    const { id, name_localized } = category;
    if (!id || !name_localized) return null;
    return (
      <option key={id} value={id}>
        {name_localized}
      </option>
    );
  };

  render() {
    const categories = Object.keys(this.props.categories);

    return (
      <form>
        <fieldset className="uk-fieldset uk-margin">
          <legend className="uk-legend uk-text-center">
            Busca tu evento por nombre o categoría
          </legend>
          <div className="uk-column-1-3@m uk-margin">
            <div className="uk-margin" uk-margin="true">
              <input
                type="text"
                className="uk-input"
                placeholder="Nombre de evento o ciudad"
              />
            </div>

            <div className="uk-margin" uk-margin="true">
              <select className="uk-select">
                {categories.map(this.showOptions)}
              </select>
            </div>

            <div className="uk-margin" uk-margin="true">
              <button className="uk-button uk-button-danger">Buscar</button>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default Form;
