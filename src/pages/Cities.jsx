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
    /*
      Caso seja de seu interesse, você pode revisar sobre o uso de parâmetros em rotas no link abaixo:
      https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/095ebb0d-1932-4d37-933b-9e1d721646fb/section/1c36f886-88d1-424c-b7b4-d8350620a118/day/6bfa2e2e-4802-4b72-8aeb-b7b55ad63189/lesson/dd85a61c-c595-4a58-9601-5d6c38ad9f0b
    */
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