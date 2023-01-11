import { Component } from 'react';
import Loading from '../components/Loading';
import { getCities } from '../services/apiService';

class Cities extends Component {
  state = { 
    uf: '',
    cities: [],
    isLoading: true,
  } 

  componentDidMount() {
    const { uf } = this.props.match.params;
    this.setState({
      uf,
    }, this.loadCities);
  }

  loadCities = async () => {
    const { uf } = this.state;
    const cities = await getCities(uf);
    console.log(cities);
    this.setState({
      cities: cities,
      isLoading: false,
    });
  }

  render() { 
    const { isLoading, cities, uf } = this.state;
    return (
      <div className='home-container'>
        { isLoading ? (
            <Loading /> 
          ) : (
            <>
              <h1>{ `Cidades de ${uf.toUpperCase()}` }</h1>
              <table cellPadding="0" cellSpacing="0">
                <thead>
                  <tr>
                    <td>Cidade</td>
                    <td>Código IBGE</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    cities.map((el, index) => (
                      <tr key={ index }>
                        <td>{ el.nome }</td>
                        <td>{ el.codigo_ibge }</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </>
          )
        }
      </div>
    );
  }
}
 
export default Cities;