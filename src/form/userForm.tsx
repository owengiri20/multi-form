import * as React from "react"
import { useStyletron } from "baseui"
import { ProgressBar } from "baseui/progress-bar"
import { Button } from "baseui/button"

export const UserForm = () => {
	const [css, theme] = useStyletron()

	// STATE
	const [step, setStep] = React.useState(1)
	const maxStep = 6
	const [firstname, setFirstname] = React.useState("")
	const [lastname, setLastname] = React.useState("")
	const [occupation, setOccupation] = React.useState("")

	// Proceed to next step

	const nextStep = () => {
		if (step === maxStep) return
		setStep(step + 1)
	}

	const prevStep = () => {
		if (step == 1) return
		setStep(step - 1)
	}

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
			<div>
				<ActualForm currStep={step} nextStepFn={nextStep} prevStepFn={prevStep} />
			</div>
			<div className={nextPrev}>
				<div className={buttonContainer}>
					<Button
						onClick={() => {
							switch (step) {
								case 1:
									setStep1(0)
									break
								case 2:
									setStep2(0)
									break
								case 3:
									setStep3(0)
									break
								case 4:
									setStep4(0)
									break
								case 5:
									setStep5(0)
									break
								case 6:
									setStep6(0)
									break
							}
							prevStep()
						}}
					>
						Back
					</Button>
				</div>
				<div className={buttonContainer}>
					<Button
						onClick={() => {
							switch (step) {
								case 1:
									setStep1(100)
									break
								case 2:
									setStep2(100)
									break
								case 3:
									setStep3(100)
									break
								case 4:
									setStep4(100)
									break
								case 5:
									setStep5(100)
									break
								case 6:
									setStep6(100)
									break
							}
							nextStep()
						}}
					>
						Next
					</Button>
				</div>
				<div>
					<h1>CURRENT STEP {step}</h1>
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
	const { setFn, value } = props
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
					setFn(100)
				}}
			>
				run
			</button>
		</div>
	)
}

interface Props2 {
	currStep: number
	prevStepFn: () => void
	nextStepFn: () => void
}

export const ActualForm = (props: Props2) => {
	const { currStep, prevStepFn, nextStepFn } = props

	switch (currStep) {
		case 1:
			return (
				<div>
					step 1
					<div>
						<div>
							<h1>form here</h1>
							<h2>djfj</h2>
							<input type="text" name="" id="" />
						</div>
						<button
							onClick={() => {
								prevStepFn()
							}}
						>
							prev
						</button>
						<br />
						<button
							onClick={() => {
								nextStepFn()
							}}
						>
							next
						</button>
					</div>
				</div>
			)
		case 2:
			return (
				<div>
					step 2
					<div>
						<button
							onClick={() => {
								prevStepFn()
							}}
						>
							prev
						</button>
						<br />
						<button
							onClick={() => {
								nextStepFn()
							}}
						>
							next
						</button>
					</div>
				</div>
			)
		case 3:
			return (
				<div>
					step 3
					<div>
						<button
							onClick={() => {
								prevStepFn()
							}}
						>
							prev
						</button>
						<br />
						<button
							onClick={() => {
								nextStepFn()
							}}
						>
							next
						</button>
					</div>
				</div>
			)
		case 4:
			return (
				<div>
					step 4
					<div>
						<button
							onClick={() => {
								prevStepFn()
							}}
						>
							prev
						</button>
						<br />
						<button
							onClick={() => {
								nextStepFn()
							}}
						>
							next
						</button>
					</div>
				</div>
			)
		case 5:
			return (
				<div>
					step 5
					<div>
						<button
							onClick={() => {
								prevStepFn()
							}}
						>
							prev
						</button>
						<br />
						<button
							onClick={() => {
								nextStepFn()
							}}
						>
							next
						</button>
					</div>
				</div>
			)
		default:
			return <div>fuck</div>
	}
}
