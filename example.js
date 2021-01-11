import React from 'react';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.tooltipRef = React.createRef();
  }

  render() {
    const {
      text,
      tooltipText,
      placement,
      textClass,
      tooltipClass,
    } = this.props;

    return (
<PricingTable  highlightColor='#1976D2'>
    <PricingSlot  onClick={this.submit} buttonText=' GO STARTER' title='STARTER' priceText='$0'>
        <PricingDetail> <b>per user</b> ,per month</PricingDetail>
          
        <PricingDetail strikethrough> <b></b></PricingDetail>
    </PricingSlot>
    <PricingSlot highlighted onClick={this.submit} buttonText='GO PROFESSIONAL' title='PROFESSIONAL' priceText='$25'>
        <PricingDetail> <b>per user</b> ,per month</PricingDetail>
           
    </PricingSlot>
    <PricingSlot  onClick={this.submit} buttonText='GO ORGANIZATION' title='ORGANIZATION' priceText='$50'>
        <PricingDetail> <b>per user</b>,per month</PricingDetail>
        
   
    </PricingSlot>
</PricingTable>
    );
  }
}