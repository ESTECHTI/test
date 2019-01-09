import React, { Component } from 'react';
import ReactChartkick, { AreaChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'
import './App.css';

ReactChartkick.addAdapter(Chart)

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      data: [],
      allData: []
    }

  }

  async componentDidMount(){

    try {
      const response = await fetch(`http://pmweb.agencia.pmweb.com.br/teste-frontend/api/intranet/healthstatus.json
    `)
      const json = await response.json();
        this.setState({ data: json })

        this.setState({ allData: json.chartdata  })

        
          
    } catch (err) {
      console.log('Error', err)
    }
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <AreaChart  data= {this.state.allData} />
        </header>
      </div>
    );
  }
}

export default App;
