
const Error = ({error}) => {
return (
   <>
      <p>{error === true ? "API is not working! We're sorry!" : null
            }</p>
   </>
   )
}

export default Error;
