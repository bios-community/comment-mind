import React from "react";

import "./TableRow.scss";

const TableRow = ({ id, content, sentiment }) => {
	if (content.sentiment) {
		console.log(content);
	}
	return (
		<tr>
			<td className="table-data table-data--side">{id}</td>
			<td className="table-data table-data--main">{content}</td>
			{sentiment && (
				<td className="table-data table-data--side">
					<span className={`sentiment sentiment--${sentiment}`}>
						{sentiment}
					</span>
				</td>
			)}
		</tr>
	);
};

export default TableRow;
