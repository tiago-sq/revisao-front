import { Component } from 'react';
import { getStates } from '../services/apiService';
import Loading from '../components/Loading';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

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
              <span>Fonte: <Link to="">BrasilAPI</Link></span>
              { ufs.map((el) => (
                  <Card 
                    key={ el.id }
                    name={ el.nome }
                    uf={ el.sigla }
                    region={ el.regiao.nome }
                  />
                ))
              }
            </>
          )
        }
      </div>
    );
  }
}
 
export default Home;