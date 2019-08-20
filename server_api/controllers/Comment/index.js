const Comments = require('../../models/Comment')
const moment = require('moment')

exports.add = add = (props) => {
	const comment = new Comments({
		postID: props.postID,
		createdBy: props.createdBy,
		message: props.message,
		date: moment().format('YYYY-MM-DD HH:mm:ss')
	})
	return comment.save()
}

exports.list = list = (query) => {
	return Comments.find(query)
		// .populate('postID')
		// .populate('createdBy')
		.exec()
}

exports.del = del = (query, update) => {
	return Comments.findOneAndUpdate(query, { $set: update }, { new: true })
}