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

  /*
    O componentDidMount é executado após o final da primeira renderização.
    Você pode aprender mais sobre o ciclo de vida de componentes aqui:
    https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/095ebb0d-1932-4d37-933b-9e1d721646fb/section/1c36f886-88d1-424c-b7b4-d8350620a118/day/31429191-5625-4eb1-9743-0159b322b0d1/lesson/0ee18fc7-1ad3-4ea7-9abd-53f0e0afd3cf
  */
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
    /*
     Para a renderização de listas é importante ter em mente a utilização da prop key para
     produzir identificadores únicos para cada elemento. Você pode ler mais sobre aqui:
     https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/095ebb0d-1932-4d37-933b-9e1d721646fb/section/f9155e88-21d3-4e7b-a547-7eb92ce00a9b/day/e38fc894-8547-4a79-87c3-cb4bc71a8299/lesson/a604223e-85fa-44b8-bca9-9c7f768b686f

     Também é importante notar que o estado isLoading serve para determinar se o carregamento ainda está em andamento.
     Para saber mais sobre renderização condicional você pode ler aqui:
     https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/095ebb0d-1932-4d37-933b-9e1d721646fb/section/1c36f886-88d1-424c-b7b4-d8350620a118/day/31429191-5625-4eb1-9743-0159b322b0d1/lesson/a0bf5536-82a4-4169-8ef8-88328d77a59f
    */
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