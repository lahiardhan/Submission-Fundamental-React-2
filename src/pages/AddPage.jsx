import React from "react";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/network-data";

function AddPage() {
	const navigate = useNavigate();

	async function onAddNoteHandler(note) {
		await addNote(note);
		navigate("/");
	}

	return <NoteInput addNote={onAddNoteHandler} />;
}

export default AddPage;
