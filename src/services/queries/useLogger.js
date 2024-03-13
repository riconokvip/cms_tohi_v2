export const onSuccess = (query_key, data) => {
    console.log(`Success ${query_key}: `, data);
}

export const onError = (query_key, error) => {
    console.log(`Error ${query_key}: `, error);
}