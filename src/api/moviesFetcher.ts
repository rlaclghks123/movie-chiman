import { api } from '.';

interface Props {
  keyword: string;
  curPage: number;
  searchSort: string;
  searchFilter: number;
}

export async function moviesFetcher({ keyword, searchSort, searchFilter, curPage }: Props) {
  const params = {
    title: keyword === '' ? null : keyword,
    _page: curPage,
    _limit: 9,
    _order: searchSort === 'title' ? 'asc' : 'desc',
    _sort: searchSort,
  };

  const res = await api.get(`/movies?`, { params });

  if (searchFilter !== 0) {
    const copy = [...res.data];
    const data = copy.filter((data) => data.genre_ids.includes(searchFilter));
    return {
      data,
      totalCount: Number(res.headers['x-total-count']),
    };
  }

  return {
    data: res.data,
    totalCount: Number(res.headers['x-total-count']),
  };
}
