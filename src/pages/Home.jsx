import { Component } from 'react';
import { getStates } from '../services/apiService';
import Loading from '../components/Loading';
import Card from '../components/Card';

class Home extends Component {
  state = {
    ufs: [],
    isDark: false,
    isLoading: true,
  };

  componentDidMount() {
    this.loadStates();
  }

  loadStates = async () => {
    const ufs = await getStates();
    this.setState({
      ufs,
      isLoading: false,
    });
  }

  render() { 
    const { ufs, isLoading } = this.state;
    return (
      <div className="home-container">
        { isLoading ? (
            <Loading /> 
          ) : (
            <>
              <h1>Estados do Brasil</h1>
              <span>Fonte: BrasilAPI</span>
              <div className="cards">
                { ufs.map((el) => (
                    <Card 
                      key={ el.id }
                      name={ el.nome }
                      uf={ el.sigla }
                      region={ el.regiao.nome }
                    />
                  ))
                }
              </div>
            </>
          )
        }
      </div>
    );
  }
}
 
export default Home;