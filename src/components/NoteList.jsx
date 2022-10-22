import React, { useContext } from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContexts";

function NoteList({ notes }) {
	const { locale } = useContext(LocaleContext);

	if (!notes.length) {
		return (
			<section className="notes-list-empty">
				<p className="notes-list__empty">
					{locale === "id" ? "Tidak ada catatan" : "No notes"}
				</p>
			</section>
		);
	}

	return (
		<section className="notes-list">
			{notes.map((note) => (
				<NoteItem
					key={note.id}
					id={note.id}
					title={note.title}
					createdAt={note.createdAt}
					body={note.body}
				/>
			))}
		</section>
	);
}

NoteList.propTypes = {
	notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
