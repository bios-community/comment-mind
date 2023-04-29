import React from "react";
import TableRow from "../TableRow/TableRow";
import TableHead from "../TableHead/TableHead";

import "./Table.scss";

const Table = ({ contentArray, type }) => {
	const TableRows = contentArray.map((content, index) => {
		if (typeof contentArray[0] == "string") {
			return <TableRow id={index + 1} content={content} />;
		} else {
			return (
				<TableRow
					id={index + 1}
					content={content.comment}
					sentiment={content.sentiment}
				/>
			);
		}
	});
	// console.log(contentArray);

	return (
		<table className="table">
			<TableHead
				type={type}
				sentiment={type == "Feedbacks" ? true : false}
			/>
			<tbody className="table-body">{TableRows}</tbody>
		</table>
	);
};

export default Table;
