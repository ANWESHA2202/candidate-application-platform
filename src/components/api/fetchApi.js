const fetchApi = async (offset = 0, limit = 9) => {
  //payload
  const body = JSON.stringify({
    limit: limit,
    offset: offset,
  });

  //header
  const header = new Headers();
  header.append("Content-Type", "application/json");

  //format request
  const requestOptions = {
    method: "POST",
    headers: header,
    body,
  };

  //api call
  try {
    const res = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    );
    const response = await res.json();
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
