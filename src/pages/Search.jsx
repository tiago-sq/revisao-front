import { Component } from 'react';
import Loading from '../components/Loading';
import { getAddress } from '../services/apiService';

class Search extends Component {
  state = { 
    isLoading: false,
    cepSearch: {},
    cepTerm: ''
  }

  componentDidUpdate(prevProps, prevState) {
    const { cepTerm } = this.state;
    console.log(prevState);
    if (prevState.cepTerm !== cepTerm && cepTerm.length >= 8) {
      this.setState({ isLoading: true });
      this.loadAddressData(cepTerm);
    }
  }

  loadAddressData = async (cep) => {
    const address = await getAddress(cep);
    this.setState({
      cepSearch: address,
      isLoading: false,
    })
  }

  handleChangeCEP = ({ target }) => {
    this.setState({
      cepTerm: target.value
    });
  }

  render() { 
    const { cepTerm, cepSearch: { street, neighborhood, city, state, cep }, isLoading } = this.state;
    return (
      <div className='search-container'>
        { isLoading ? (
          <Loading /> 
        ) : (
          <>
            <h1>{`Busca por CEP ${cep}`}</h1>
            <div className='form-container'>
              <input
                type="text"
                placeholder="Informe o CEP"
                onChange={ this.handleChangeCEP }
                value={ cepTerm }
              />
            </div>
            { city && (
              <div className='address-wrapper'>
                <p className='adress'>
                  { `${street} - ${neighborhood}, ${city}/${state}` }
                </p>
              </div>
            )}
          </>
        )}
      </div>
    );
  }
}
 
export default Search;