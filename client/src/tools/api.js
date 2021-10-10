export const createPostRequest = (data) => {
    const request = {
    headers :{
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
    method: "POST",
    body: JSON.stringify(data)
}
    return request
}

export const getRequest = async(url) => {
  const responce = await fetch(url)
  const data = await responce.json()
  return data
}