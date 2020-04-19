import * as React from "react"
import { useStyletron } from "baseui"
import { ProgressBar } from "baseui/progress-bar"
import { Button } from "baseui/button"

interface Props {}
export const UserForm = (props: Props) => {
	const {} = props
	const [css, theme] = useStyletron()

	const containerStyle: string = css({
		height: "100%",
		width: "100%",
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
	})
	const topContainer: string = css({
		display: "flex",
		width: "100%",
	})

	const nextPrev: string = css({
		display: "flex",
	})

	const buttonContainer: string = css({
		marginLeft: "2px",
		marginRight: "2px",
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
			<div className={nextPrev}>
				<div className={buttonContainer}>
					<Button onClick={() => console.log("Back")}>Back</Button>
				</div>
				<div className={buttonContainer}>
					<Button onClick={() => console.log("Next")}>Next</Button>
				</div>
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
