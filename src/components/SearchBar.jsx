import React, { useContext } from "react";
import PropTyes from "prop-types";
import LocaleContext from "../contexts/LocaleContexts";

function SearchBar({ onSearch }) {
	const { locale } = useContext(LocaleContext);

	return (
		<section className="search-bar">
			<input
				type="text"
				placeholder={
					locale === "id"
						? "Cari berdasarkan judul ..."
						: "Search by title ..."
				}
				onChange={(e) => onSearch(e.target.value)}
			/>
		</section>
	);
}

SearchBar.propTypes = {
	onSearch: PropTyes.func.isRequired,
};

export default SearchBar;
