
export const exercicesOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.React_App_Rapide_Api_Key,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
 
 export const fetchData = async (url,options) =>{

    const response = await fetch(url,options)
    const data = await response.json()

    return data

    
}