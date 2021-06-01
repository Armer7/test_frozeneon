export const RequestDataGet = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error('Error Data', response.status);
  } catch (e) {
    return e;
  }
};

export default RequestDataGet;
