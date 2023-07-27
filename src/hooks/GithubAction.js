const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

//SERCH USERS
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  const { items } = await response.json();
  // setUsers(data);
  // setLoading(false);

  // dispatch({
  //   type: "SEARCH_USERS",
  //   payload: items,
  // });
  return items;
};

//GET USER
export const getUser = async (login) => {
  setLoading();

  const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (response.status === 404) {
    window.location = "/notfound";
  } else {
    const data = await response.json();

    // dispatch({
    //   type: "GET_USER",
    //   payload: data,
    // });
    return data;
  }
};
//GET REPOS
export const getRepos = async (login) => {
  setLoading();

  const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  const data = await response.json();

  // dispatch({
  //   type: "GET_REPOS",
  //   payload: data,
  // });

  return data;
};
