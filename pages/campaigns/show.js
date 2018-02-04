import React, { Component } from 'react';
import { Card, Grid } from 'semantic-ui-react';

import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';

export default class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requsetsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount,
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Address of Manager',
        description: 'The Manager Who created The Campaign And can Create Requests To Withdraw Money',
        style: { overflowWrap: 'break-word' },
      },
      {
        header: minimumContribution,
        meta: 'Minimum Contribution (Wei)',
        description: 'To become an approver you must Contribute at least this much wei',
      },
      {
        header: requestsCount,
        meta: 'Number Of Requests',
        description: 'A Request Tries To Withdraw Money From The Contract. It must be approved by approvers to succeed',
      },
      {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'Number Of People Who Have Donated To Campaign',
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether)',
        description: 'How Much Money Left To Spend',
      },
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h2>Campaign Show</h2>
        <Grid>
          <Grid.Column width={10}>
            {this.renderCards()}
          </Grid.Column>
          <Grid.Column width={6}>
            <ContributeForm address ={this.props.address} />
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}
