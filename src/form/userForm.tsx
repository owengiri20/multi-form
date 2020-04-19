import * as React from "react"
import { useStyletron } from "baseui"

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
	const topContainer: string = css({})
	const top: string = css({
		display: "flex",
	})

	return (
		<div className={containerStyle}>
			<div className={topContainer}>
				<div className={top}>
					<div>Label1</div>
					<div>Label2</div>
					<div>Label3</div>
					<div>Label4</div>
					<div>Label5</div>
					<div>Label6</div>
				</div>
			</div>
		</div>
	)
}
