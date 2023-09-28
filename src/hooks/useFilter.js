import { useEffect, useState } from 'react';

export default function useFilter(data) {
  const [filter, setFilter] = useState('');
  const [dataFilter, setDataFilter] = useState(data);

  useEffect(() => {
    if (filter != '') {
      setDataFilter(previous =>
        previous.filter(item =>
          item.name.transliteration.id
            .toLowerCase()
            .replace(/[^a-zA-Z]/g, '')
            .includes(filter.toLocaleLowerCase().replace(/[^a-zA-Z]/g, ''))
        )
      );
    } else {
      setDataFilter(() => data);
    }
  }, [filter, data]);

  function filterHandler(keyword) {
    setFilter(() => keyword);
  }
  return { dataFilter, filterHandler };
}
