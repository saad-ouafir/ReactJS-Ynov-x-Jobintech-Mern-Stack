import { useMemo } from "react";

function useFilterData(data, keyword) {
  const filteredData = useMemo(() => {
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(keyword.toLowerCase()) ||
        item.email.toLowerCase().includes(keyword.toLowerCase()) ||
        item.username.toLowerCase().includes(keyword.toLowerCase())
    );
  }, [data, keyword]);

  return filteredData;
}

export default useFilterData;
