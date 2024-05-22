export const tokenService = () => {
    function getLocalRefreshToken() {
        const tokenList = JSON.parse(localStorage.getItem("token_list"));
        return tokenList?.refreshToken;
    }

    function getLocalAccessToken() {
        const tokenList = JSON.parse(localStorage.getItem("token_list"));
        return tokenList?.accessToken;
    }

    function updateLocalAccessToken(token) {
        let tokenList = JSON.parse(localStorage.getItem("token_list"));
        tokenList.accessToken = token;
        localStorage.setItem("token_list", JSON.stringify(tokenList));
        return tokenList;
    }

    function removeTokenList() {
        localStorage.removeItem("token_list");
    }
    function setTokenList(tokenList) {
        localStorage.setItem("token_list", JSON.stringify(tokenList));
    }
    function getTokenList() {
        localStorage.getItem("token_list");
    }
    return {
        getLocalRefreshToken,
        getLocalAccessToken,
        updateLocalAccessToken,
        removeTokenList,
        setTokenList,
        getTokenList,
    };
};
