import React from "react";
import ButtonAction from "./ButtonAction";
import PropTypes from "prop-types";
import ButtonDelete from "./ButtonDelete";

function DetailPageAction({ id, archived, isArchived, onDelete }) {
	return (
		<div className="detail-page__action">
			<ButtonAction id={id} archived={archived} isArchived={isArchived} />
			<ButtonDelete id={id} onDelete={onDelete} />
		</div>
	);
}

DetailPageAction.propTypes = {
	id: PropTypes.string.isRequired,
	archived: PropTypes.bool.isRequired,
	isArchived: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired,
};

export default DetailPageAction;
