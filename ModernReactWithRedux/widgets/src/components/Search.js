import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');

  const [debouncedTerm, setDebouncedTerm] = useState(term);

  const [results, setResults] = useState([]);

  // run when component first render or 'term' change
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  // when component is first render or 'debounceTerm' change
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(`https://en.wikipedia.org/w/api.php`, {
        params: {
          action: 'query',
          list: 'search',
          // without params 'origin' , might cause CORS error
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm
        }
      });

      setResults(data.query.search);
    };
    search();
  }, [debouncedTerm]);

  // console.log(results);
  // useEffect(() => {
  //   const search = async () => {
  //     const { data } = await axios.get(`https://en.wikipedia.org/w/api.php`, {
  //       params: {
  //         action: 'query',
  //         list: 'search',
  //         // without params 'origin' , might cause CORS error
  //         origin: '*',
  //         format: 'json',
  //         srsearch: term
  //       }
  //     });
  //     setResults(data.query.search);
  //   };

  //   if (term && !results.length) {
  //     search();
  //   } else {
  //     const timeoutId = setTimeout(() => {
  //       if (term) {
  //         search();
  //       }
  //     }, 1000);

  //     return () => {
  //       clearTimeout(timeoutId);
  //     };
  //   }
  // }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div className='item' key={result.pageid}>
        <div className='right floated content'>
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className='ui button'
          >
            Go
          </a>
        </div>
        <div className='content'>
          <div className='header'>{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <Fragment>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input
            value={term}
            type='text'
            className='input'
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </div>
      </div>
      <div className='ui celled list'>{renderedResults}</div>
    </Fragment>
  );
};

export default Search;
