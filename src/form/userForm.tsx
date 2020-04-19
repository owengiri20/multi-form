import * as React from "react"
import { useStyletron } from "baseui"
import { ProgressBar } from "baseui/progress-bar"

interface Props {}
export const UserForm = (props: Props) => {
	const {} = props
	const [css, theme] = useStyletron()

	const containerStyle: string = css({
		height: "100%",
		width: "100%",
		display: "flex",
		alignItems: "center",
	})
	const topContainer: string = css({
		display: "flex",
		width: "100%",
	})
	const top: string = css({
		display: "flex",
	})
	const bottom: string = css({
		display: "flex",
	})

	const [value, setValue] = React.useState(100)
	return (
		<div className={containerStyle}>
			<div className={topContainer}>
				<Bar />
				<Bar />
				<Bar />
				<Bar />
				<Bar />
				<Bar />
			</div>
		</div>
	)
}

interface Props {}
export const Bar = (props: Props) => {
	const {} = props
	const [css, theme] = useStyletron()

	const containerStyle: string = css({
		height: "100%",
		width: "100%",
		display: "flex",
		alignItems: "center",
	})

	const barContainer: string = css({
		height: "200px",
		width: "15%",
		marginLeft: "2px",
		marginRight: "2px",
	})
	const [value, setValue] = React.useState(1)

	const play = () => {}
	return (
		<div className={barContainer}>
			<div>Label1</div>
			<ProgressBar
				overrides={{
					Bar: {
						style: {
							width: "100%",
							margin: 0,
						},
					},
					Root: {
						style: {
							margin: 0,
						},
					},
				}}
				value={value}
				successValue={100}
			/>
			<button
				onClick={() => {
					setValue(100)
				}}
			>
				run
			</button>
		</div>
	)
}
