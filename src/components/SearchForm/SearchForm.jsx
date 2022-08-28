import { Component } from 'react';
import styles from './SearchForm.module.css';
import { ReactComponent as SeachIcon } from '../../icons/search-svgrepo-com.svg';

export default class SearchForm extends Component {
  state = {
    searchQuery: '',
  };

  handleChange(query) {
    console.log(query);
    this.setState({ searchQuery: query });
  }

  render(props) {
    return (
      <form
        className={styles.SearchForm}
        onSubmit={e => {
          e.preventDefault();
          this.props.handleSubmit(this.state.searchQuery);
        }}
      >
        <button
          type="submit"
          className={styles.SearchFormButton}
          aria-label="Search"
        >
          <span className={styles.SearchFormButtonLabel}>
            <SeachIcon />
          </span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
          value={this.state.searchQuery}
          onChange={e => this.handleChange(e.target.value)}
        />
      </form>
    );
  }
}

// const SearchForm = function () {
//   return (
//     <form className={styles.SearchForm}>
//       <button
//         type="button"
//         className={styles.SearchFormButton}
//         aria-label="Search"
//       >
//         <span className={styles.SearchFormButtonLabel}>
//           <SeachIcon />
//         </span>
//       </button>

//       <input
//         className={styles.SearchFormInput}
//         type="text"
//         // autocomplete="off"
//         // autofocus
//         placeholder="Search images and photos"
//       />
//     </form>
//   );
// };

// export default SearchForm;
