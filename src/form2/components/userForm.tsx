import React from "react"
import { FormUserDetails } from "./formUserDetails"

interface Props {}

export const UserForm = (props: Props) => {
	const {} = props
	const [step, setStep] = React.useState(1)
	const maxStep = 5
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

	switch (step) {
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
								prevStep()
							}}
						>
							prev
						</button>
						<br />
						<button
							onClick={() => {
								nextStep()
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
								prevStep()
							}}
						>
							prev
						</button>
						<br />
						<button
							onClick={() => {
								nextStep()
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
								prevStep()
							}}
						>
							prev
						</button>
						<br />
						<button
							onClick={() => {
								nextStep()
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
								prevStep()
							}}
						>
							prev
						</button>
						<br />
						<button
							onClick={() => {
								nextStep()
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
								prevStep()
							}}
						>
							prev
						</button>
						<br />
						<button
							onClick={() => {
								nextStep()
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

// 13:39
