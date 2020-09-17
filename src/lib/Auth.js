export async function handleAuthRequest(path, email, password) {
  let message = 'Unknown error'
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${path}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        body: `email=${email}&password=${password}`
      }
    )
    const json = await response.json()
    

    if (!!json["errors"]) {
      message = `Error: ${json["errors"]["title"]} | ${json["errors"]["detail"]}` 
    } else if (!!json["data"]) {
      const api_token = json["data"]["attributes"]["api_token"]
      sessionStorage.setItem('api_token', api_token); 
    
      message = 'success'
    }
  } catch(error) {
    console.log(error)
  }

  return message
}