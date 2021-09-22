import PropTypes from 'prop-types'

const PrimeraApp = ({saludo}) => {


console.log(saludo)

    return (
        <>
            <h1> {saludo}</h1>

            
        
        </>
    )


}

 PrimeraApp.propTypes ={
    saludo: PropTypes.string.isRequired
} 

export default PrimeraApp;




