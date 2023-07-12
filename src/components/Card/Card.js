import meetingImage from '../../assets/images/meeting.jpg';
import './Card.scss';

const Card = () => {
	return (
		<article className="card">
			<div className="card__image">
				<div className="card__image-inner">
					<img src={meetingImage} alt="" />
				</div>
			</div>
			<div className="card__content">
				<h2 className="card__title">
					Get <mark>insights</mark> that help your business grow.
				</h2>
				<p className="card__desc">
					Discover the benefits of data analytics and make better
					decisions regarding revenue, customer experience, and
					overall efficiency.
				</p>
				<ul className="card__stats-list">
					<li className="card__stats-list-item">
						<span className="num">10K+</span>
						<span className="label">Companies</span>
					</li>
					<li className="card__stats-list-item">
						<span className="num">314</span>
						<span className="label">Templates</span>
					</li>
					<li className="card__stats-list-item">
						<span className="num">12M+</span>
						<span className="label">Queries</span>
					</li>
				</ul>
			</div>
		</article>
	);
};

export default Card;
