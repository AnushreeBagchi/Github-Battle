import React from "react";
import { fetchPopularRepos } from "../utils/app";
import LanguagesNav from "./LanguagesNav";
import ReposGrid from "./ReposGrid";

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All",
      repos: {},
      error: null,
    };
    this.updateLanguage = this.updateLanguage.bind(this);
    this.isLoading = this.isLoading.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage,
      error: null,
    });

    if (!this.state.repos[selectedLanguage]) {
      fetchPopularRepos(selectedLanguage)
        .then((data) =>
          this.setState(({ repos }) => ({
            repos: {
              ...repos,
              [selectedLanguage]: data,
            },
          }))
        )
        .catch(() => {
          this.setState({
            error: "There was an error fetching repos",
          });
        });
    }
  }
  isLoading() {
    const { selectedLanguage, error, repos } = this.state;
    return !repos[selectedLanguage] && error === null;
  }

  render() {
    const { selectedLanguage, error, repos } = this.state;
    return (
      <React.Fragment>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdatedLanguage={this.updateLanguage}
        />
        {this.isLoading() && <p>Loading</p>}
        {error && <p>{error}</p>}
        {repos[selectedLanguage] && (
          <ReposGrid repos={repos[selectedLanguage]} />
        )}
      </React.Fragment>
    );
  }
}

export default Popular;
