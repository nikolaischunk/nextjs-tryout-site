let faqs = require('../../../db/copyright_faq');

export default ({ get: getAll }) => {
    res.status(200).json({ name: 'John Doe' })
}
function getAll(req, res) {
    return faqs;
}

function getByQuestion(question) {
    return faqs.find(qa => qa.question.toString() === question.toString());
}
