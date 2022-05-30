import cookieCutter from 'cookie-cutter'
// want some?

export default ({ get: getCookie, post: setCookie }) => {
    
}

function getCookie(cookieName, req, res) {
    let cookie = cookieCutter.get(cookieName)
    return cookie;
}

function getByQuestion(question) {
    return faqs.find(qa => qa.question.toString() === question.toString());
}

