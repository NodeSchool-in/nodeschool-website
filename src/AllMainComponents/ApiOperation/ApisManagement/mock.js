import { getApi } from '../ApiCalls/ApiCalls';

export async function getMockPage(){
    let url = 'https://api.nodeschool.in/prod/mock-interview/getMockCollection';

    let headers = {
      'Content-Type': 'application/json',
    };
  
    return getApi(url, headers);
}

export async function getProductByHandle(handle){
 try {
  let url = `https://api.nodeschool.in/prod/mock-interview/getProductByHandle/${handle}`;

  let headers = {
    'Content-Type': 'application/json',
  };

  return getApi(url, headers);
 } catch (error) {
   console.log("error",error)
 }
}