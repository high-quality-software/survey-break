
/**
 * Created by hcasa on 10/02/2015.
 */

var Response = Object.create({});

Response.getResponse = function(questionId, responses) {

    var i, len;
    for (i = 0, len = responses.length; i < len; i += 1) {
        var r = responses[i];
        if (r.QuestionId == questionId)
        {
            return r;
        }
    }

    return null;
};