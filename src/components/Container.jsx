/* eslint-disable react/prop-types */
const Container = ({children}) => {
  return (
	<div style={{width: "90vw", marginLeft: "5vw", zIndex: "1"}}>
		{children}
	</div>
  )
}

export default Container