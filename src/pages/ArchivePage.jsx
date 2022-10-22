import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import LocaleContext from "../contexts/LocaleContexts";
import { searchNotes } from "../utils/local-data";
import { getArchivedNotes } from "../utils/network-data";

function ArchivePage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const title = searchParams.get("title");

	const [notes, setNotes] = useState([]);
	const [keyword, setKeyword] = useState(title || "");
	const { locale } = useContext(LocaleContext);

	useEffect(() => {
		getArchivedNotes().then(({ data }) => {
			setNotes(data);
		});
	}, []);

	function onSearch(keyword) {
		setSearchParams({ title: keyword });
		setKeyword(keyword);
	}

	const filteredNotes = searchNotes(notes, keyword);
	return (
		<section className="archives-page">
			<h2>{locale === "id" ? "Catatan Arsip" : "Archived Notes"}</h2>
			<SearchBar onSearch={onSearch} />
			<NoteList notes={filteredNotes} />
		</section>
	);
}

export default ArchivePage;
