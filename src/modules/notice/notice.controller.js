const httpStatus = require("http-status");
const { sendSuccessResponse, parseFilters, sendResponse } = require("../../helpers/responseHelper");
const Notice = require("./notice.model");



exports.getNotice = async (req, res, next)=>{
    try {
        let { page, limit, searchQuery, selectQuery, sortQuery, populate } = parseFilters(req);

        searchQuery = {
            receiver: req.user._id
        }

        populate = [
            {
                path: 'sender',
                select: 'firstname lastname email contact'
            },
            {
                path: 'event',
                select: 'eventName eventSlug eventDescription startDate endData startTime endTime occurrence location'
            }
        ];

        selectQuery = '-__v -receiver';

        const notices = await sendResponse(Notice, page, limit, sortQuery, searchQuery, selectQuery, populate);
        return sendSuccessResponse(res, httpStatus.OK, 'Notices', notices);

    } catch (error) {
        next(error)
    }
}