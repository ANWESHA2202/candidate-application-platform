const fetchApi = async (offset = 0, limit = 10) => {
  const body = JSON.stringify({
    limit: limit,
    offset: offset,
  });
  const header = new Headers();
  header.append("Content-Type", "application/json");
  const requestOptions = {
    method: "POST",
    headers: header,
    body,
  };

  try {
    const res = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    );
    const response = await res.json();
    console.log(response);
    return response;
  } catch (err) {
    return {
      data: {},
      _code: 500,
      _message: "some error has been caused!",
    };
  }
};

export default fetchApi;
