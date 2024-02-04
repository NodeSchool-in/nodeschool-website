import { getApi, postApi } from '../ApiCalls/ApiCalls';

export async function draftOrder(body) {
    const payload = {
        url: "https://api.nodeschool.in/prod/order/draftOrder",
        data: body,
        headers: {
            'Content-Type': 'application/json',
        }
    }
    return postApi(payload.url, payload.data, payload.headers);
}


export async function thankYouPageApiCall(orderId) {
    const payload = {
        url: `https://api.nodeschool.in/prod/order/thankYouPage/${orderId}`,
        headers: {
            'Content-Type': 'application/json',
        }
    }
    return getApi(payload.url, payload.headers);
}
