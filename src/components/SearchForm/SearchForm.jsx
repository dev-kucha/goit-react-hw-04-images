import { useState } from 'react';
import { ReactComponent as SeachIcon } from '../../icons/search-svgrepo-com.svg';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

import { toast } from 'react-toastify';

// const notify = () => toast('Wow so easy!');

export const SearchForm = ({ handleSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleChange = query => {
    // console.log(query);
    setSearchQuery(query);
  };

  return (
    <form
      className={styles.SearchForm}
      onSubmit={e => {
        e.preventDefault();

        if (searchQuery.trim() === '') {
          // alert('Enter search');
          toast.error('Enter search!');
          return;
        }

        handleSubmit(searchQuery);
        handleChange('');
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
        value={searchQuery}
        onChange={e => handleChange(e.target.value)}
      />
    </form>
  );
};

// export default class SearchFormOld extends Component {
//   state = {
//     searchQuery: '',
//   };

//   handleChange(query) {
//     // console.log(query);
//     this.setState({ searchQuery: query });
//   }

//   render() {
//     return (
//       <form
//         className={styles.SearchForm}
//         onSubmit={e => {
//           e.preventDefault();

//           if (this.state.searchQuery.trim() === '') {
//             // alert('Enter search');
//             toast.error('Enter search!');
//             return;
//           }

//           this.props.handleSubmit(this.state.searchQuery);
//           this.handleChange('');
//         }}
//       >
//         <button
//           type="submit"
//           className={styles.SearchFormButton}
//           aria-label="Search"
//         >
//           <span className={styles.SearchFormButtonLabel}>
//             <SeachIcon />
//           </span>
//         </button>

//         <input
//           className={styles.SearchFormInput}
//           type="text"
//           // autocomplete="off"
//           // autofocus
//           placeholder="Search images and photos"
//           value={this.state.searchQuery}
//           onChange={e => this.handleChange(e.target.value)}
//         />
//       </form>
//     );
//   }
// }

SearchForm.SearchForm = {
  handleSubmit: PropTypes.func.isRequired,
};
