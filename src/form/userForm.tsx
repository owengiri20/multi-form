import * as React from "react"
import { useStyletron } from "baseui"
import { ProgressBar } from "baseui/progress-bar"
import { Button } from "baseui/button"

export const UserForm = () => {
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

	const [step1, setStep1] = React.useState(0)
	const [step2, setStep2] = React.useState(0)
	const [step3, setStep3] = React.useState(0)
	const [step4, setStep4] = React.useState(0)
	const [step5, setStep5] = React.useState(0)
	const [step6, setStep6] = React.useState(0)

	return (
		<div className={containerStyle}>
			<div className={topContainer}>
				<Bar value={step1} setFn={setStep1} />
				<Bar value={step2} setFn={setStep2} />
				<Bar value={step3} setFn={setStep3} />
				<Bar value={step4} setFn={setStep4} />
				<Bar value={step5} setFn={setStep5} />
				<Bar value={step6} setFn={setStep6} />
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

interface Props {
	value: number
	setFn: (value: number) => void
}
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
