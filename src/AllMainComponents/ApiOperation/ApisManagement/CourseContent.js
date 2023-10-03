import { getApi } from '../ApiCalls/ApiCalls';

export async function api_getCourseDataByHandle(handle) {
  console.log('handler',handle)
  let url = `https://api.nodeschool.in/prod/course/getCourseDetailByHandleOrId?handle=${handle}`;
  let headers = {};

  return getApi(url, headers);
}
