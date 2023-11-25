export default function Button(props) {
	return (
		<button className={props.type}>
			{props.text}
			<i className={props.icon} />
		</button>
	);
}
