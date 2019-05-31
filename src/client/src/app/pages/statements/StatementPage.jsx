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
        console.log('testemonials');
        return (
            <React.Fragment>
                <p>sedgxfhgjhuio</p>
            </React.Fragment>
        )
    }
}

export default (StatementPage);