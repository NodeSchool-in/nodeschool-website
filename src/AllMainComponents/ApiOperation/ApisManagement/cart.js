import { getApi, postApi } from '../ApiCalls/ApiCalls';

export async function storeMockCart(body) {
    const payload = {
        url: "https://api.nodeschool.in/prod/cart/storeMockCart",
        data: body,
        headers: {
            'Content-Type': 'application/json',
        }
    }
    return postApi(payload.url, payload.data, payload.headers);
}

export async function getCartById(diviceId) {
    return getApi(`https://api.nodeschool.in/prod/cart/getCartById/${diviceId}`)
}

export async function applyDiscount(cartId, diviceId, code) {
    const payload = {
        url: "https://api.nodeschool.in/prod/promotion/applyDiscount",
        data: {
            cartId, diviceId, code
        },
        headers: {
            'Content-Type': 'application/json',
        }
    }
    return postApi(payload.url, payload.data, payload.headers);
}

export async function removeDiscount(cartId, diviceId) {
    const payload = {
        url: "https://api.nodeschool.in/prod/promotion/removeDiscount",
        data: {
            cartId, diviceId
        },
        headers: {
            'Content-Type': 'application/json',
        }
    }
    return postApi(payload.url, payload.data, payload.headers);
}