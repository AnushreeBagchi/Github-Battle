import React from "react";
import PropTypes from "prop-types";


 function LanguagesNav ({selected, onUpdatedLanguage}) {
    const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];
    return (
        <ul className="flex-center">
        {languages.map((lang) => (
          <li key={lang}>
            <button
              className="btn-clear nav-link"
              style={
                lang === selected
                  ? { color: "rgb(187,46,37)" }
                  : null
              }
              onClick={() => {
                onUpdatedLanguage(lang);
              }}
            >
              {lang}
            </button>
          </li>
        ))}
      </ul>
    )
}

LanguagesNav.propTypes = {
  selected : PropTypes.string.isRequired, 
  onUpdatedLanguage : PropTypes.func.isRequired
} 

export default LanguagesNav