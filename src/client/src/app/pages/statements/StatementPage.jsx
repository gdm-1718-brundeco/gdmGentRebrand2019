/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Import internal libraries
*/
import Api from '../../services';

class StatementPage extends Component {
    state = {
        testemonials: [],
    };

    componentWillMount() {
        this.loadTestemonials(1);
    }

    loadTestemonials = (pageIndex) => {
        Api.findTestemonials({ limit: 4, skip: pageIndex })
            .then(data => {
                console.log(data.docs);
                const prevTestomial = this.state.testemonials;
                const newTestemonial = [...prevTestomial, ...data.docs];
                this.setState(prevState => ({
                ...prevState,
                testemonials: newTestemonial,
                pagination: {
                    limit: data.limit,
                    page: data.page,
                    pages: data.pages,  
                    total: data.total
                }
                }));
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const { testemonials } = this.state;
        this.items = this.state.testemonials.map(item => (
            <div key={item.id} className="col-space-between card-wrapper">
              <h2 className="primary-subtitle">{item.subject}</h2>
              <p className="">{item.body}</p>
              <p className="">{item.name}</p>
              <br />
            </div>
          ));
        return (
            <React.Fragment>
                 {this.items}
            </React.Fragment>
        )
    }
}

export default (StatementPage);