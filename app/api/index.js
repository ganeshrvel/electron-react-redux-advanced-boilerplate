'use strict';

export function fetchUrl({ title }) {
  return fetch(`http://api.plos.org/search?q=title:${title}`).then(res => {
    if (res.status === 200) {
      return res.json();
    }
    throw `page status: ${res.status}`;
  });
}
