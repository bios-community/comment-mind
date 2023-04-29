import React from "react";

import "./TableHead.scss";

const TableHead = ({ type, sentiment }) => {
	return (
		<thead className="table-head">
			<tr>
				<th className="table-head">No.</th>
				<th className="table-head">{type}</th>
				{sentiment && <th className="table-head">Sentiment</th>}
			</tr>
		</thead>
	);
};

export default TableHead;
