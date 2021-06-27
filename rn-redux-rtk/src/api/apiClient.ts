export const fetchUsers = async (page: number, count: number) => {
  const response = await fetch(
    `https://randomuser.me/api/?page=${page}&results=${count}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );

  if (response.ok) {
    const json = await response.json();
    return {
      kind: 'success',
      body: json.results,
    };
  } else {
    return {
      kind: 'failure',
    };
  }
};
