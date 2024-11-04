import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Single = () => {
	const { title, uid } = useParams();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchCardData(title, uid);
	}, [title, uid]);

	const data = store.cardData;

	return (
		<div>
			<div className="container m-5 row d-flex, align-items-center justify-content-between">
				<div className="col-md-5">
					<img
						src={`https://starwars-visualguide.com/assets/img/${title === "people" ? "characters" : title}/${uid}.jpg`}
						className="card-img-top"
						style={{ width: "100%", height: "320px" }}
						onError={(e) => {
							e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
						}}
					/>
				</div>
				<div className="col-md-5">
					<h1 className="text-center text-danger">{data.name}</h1>
					<p className="text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.</p>
				</div>

			</div>
			<div className="table-responsive">
				<table className="table table-bordered mt-3">
					<tbody>
						{Object.entries(data).map(([key, value]) => (
							<tr key={key}>
								<th className="text-danger">{key.replace('_', ' ')}</th>
								<td>{value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Single;