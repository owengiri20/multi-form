import React from "react"
import { FormUserDetails } from "./formUserDetails"

interface Props {}

function UserForm(props: Props) {
	const {} = props
	const [step, setStep] = React.useState(1)
	const [firstname, setFirstname] = React.useState("")
	const [lastname, setLastname] = React.useState("")
	const [occupation, setOccupation] = React.useState("")

	// Proceed to next step

	const nextStep = () => {
		setStep(step + 1)
	}

	const prevStep = () => {
		if (step == 1) return
		setStep(step + 1)
	}

	switch (step) {
		case 1:
			return <FormUserDetails />
	}
}

export default UserForm

// 13:39
