import PropTypes from 'prop-types'

function Item1({marca, ano_lancamento}) {
    return(
        <>
            <li> {marca} - {ano_lancamento}</li>
        </>
    )
}

Item1.propTypes = {
    marca: PropTypes.string,
    ano_lancamento: PropTypes.number,
}

Item1.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}

export default Item1