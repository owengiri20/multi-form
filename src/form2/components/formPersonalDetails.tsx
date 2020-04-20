import * as React from "react"
import { useStyletron } from "baseui"

interface Props {}
export const formPersonalDetails = (props: Props) => {
	const {} = props
	const [css, theme] = useStyletron()

	const containerStyle: string = css({
		height: "100%",
		width: "100%",
		display: "flex",
		alignItems: "center",
	})

	return <div className={containerStyle}>formPersonalDetails content goes here.</div>
}
