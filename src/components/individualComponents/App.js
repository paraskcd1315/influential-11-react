import React from 'react';

const App = ({
	identifier,
	badge,
	icon,
	name,
	className,
	hideName,
	buttonAnimate
}) => {
	return (
		<div
			id={identifier}
			className={className}
			onClick={(e) => {
				e.preventDefault();
				if (buttonAnimate) {
					buttonAnimate(e);
				}
				window.api.apps.launchApplication(identifier);
			}}>
			{badge !== '' ? <div className='badge'></div> : ''}
			<div className='icon'>
				<img src={icon} alt={name} />
			</div>
			{hideName ? '' : <div className='title'>{name}</div>}
		</div>
	);
};

export default App;
